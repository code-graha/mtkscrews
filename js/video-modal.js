/* ============================================================
   MTK Screws — Video Modal
   Usage:
     1. Include this script on any page:
          <script src="/js/video-modal.js"></script>
     2. Trigger the modal by adding data-video-modal="<YOUTUBE_ID>"
        to any element:
             <button data-video-modal="2V2v7JBhLRo">Factory Tour</button>
        b) Or call the global function directly:
             showVideoModal('2V2v7JBhLRo')
   ============================================================ */

(function () {
    /* ---- Inject styles ---- */
    var style = document.createElement('style');
    style.textContent = [
        '#vm-overlay{',
            'position:fixed;inset:0;z-index:9999;',
            'display:flex;align-items:center;justify-content:center;',
            'background:rgba(31,36,41,0.85);backdrop-filter:blur(4px);',
            'padding:1.25rem;',
            'opacity:0;visibility:hidden;',
            'transition:opacity 0.25s ease,visibility 0.25s ease;',
        '}',
        '#vm-overlay.vm-open{opacity:1;visibility:visible;}',
        '#vm-card{',
            'position:relative;',
            'width:100%;max-width:960px;',
            'transform:translateY(20px) scale(0.97);',
            'transition:transform 0.28s cubic-bezier(.34,1.56,.64,1);',
        '}',
        '#vm-overlay.vm-open #vm-card{transform:translateY(0) scale(1);}',
        '#vm-frame-wrap{',
            'position:relative;width:100%;padding-top:56.25%;',
            'background:#000;border-radius:16px;overflow:hidden;',
            'box-shadow:0 20px 60px -10px rgba(0,0,0,0.5);',
        '}',
        '#vm-frame-wrap iframe{',
            'position:absolute;inset:0;width:100%;height:100%;border:0;',
        '}',
        '#vm-close{',
            'position:absolute;top:-2.75rem;right:0;',
            'width:2.5rem;height:2.5rem;',
            'display:flex;align-items:center;justify-content:center;',
            'border:none;background:rgba(255,255,255,0.1);cursor:pointer;',
            'color:#fff;border-radius:50%;',
            'transition:background 0.18s;',
            'font-size:1.1rem;',
        '}',
        '#vm-close:hover{background:rgba(255,255,255,0.2);}',
    ].join('');
    document.head.appendChild(style);

    /* ---- Inject HTML ---- */
    var overlay = document.createElement('div');
    overlay.id = 'vm-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Video player');
    overlay.innerHTML = [
        '<div id="vm-card">',
            '<button id="vm-close" aria-label="Close video">',
                '<i class="fa-solid fa-xmark"></i>',
            '</button>',
            '<div id="vm-frame-wrap"></div>',
        '</div>',
    ].join('');
    document.body.appendChild(overlay);

    var frameWrap = overlay.querySelector('#vm-frame-wrap');

    /* ---- Open / close logic ---- */
    function open(videoId) {
        frameWrap.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + videoId +
            '?autoplay=1&rel=0" title="MTK Screws video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        overlay.classList.add('vm-open');
        document.body.style.overflow = 'hidden';
        overlay.querySelector('#vm-close').focus();
    }

    function close() {
        overlay.classList.remove('vm-open');
        document.body.style.overflow = '';
        frameWrap.innerHTML = '';
    }

    /* Close on overlay background click */
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) close();
    });

    /* Close button */
    overlay.querySelector('#vm-close').addEventListener('click', close);

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('vm-open')) close();
    });

    /* Auto-wire any element with data-video-modal attribute */
    document.addEventListener('click', function (e) {
        var el = e.target.closest('[data-video-modal]');
        if (el) {
            e.preventDefault();
            open(el.getAttribute('data-video-modal'));
        }
    });

    /* Expose global API */
    window.showVideoModal = open;
    window.hideVideoModal = close;
})();
