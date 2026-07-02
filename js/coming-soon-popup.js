/* ============================================================
   MTK Screws — Coming Soon Popup
   Usage:
     1. Include this script on any page:
          <script src="/js/coming-soon-popup.js"></script>
     2. Trigger the popup in one of two ways:
        a) Add data-coming-soon to any element:
             <button data-coming-soon>Order Online</button>
        b) Call the global function directly:
             showComingSoonPopup()
   ============================================================ */

(function () {
    /* ---- Inject styles ---- */
    var style = document.createElement('style');
    style.textContent = [
        '#cs-overlay{',
            'position:fixed;inset:0;z-index:9999;',
            'display:flex;align-items:center;justify-content:center;',
            'background:rgba(31,36,41,0.70);backdrop-filter:blur(4px);',
            'padding:1.25rem;',
            'opacity:0;visibility:hidden;',
            'transition:opacity 0.25s ease,visibility 0.25s ease;',
        '}',
        '#cs-overlay.cs-open{opacity:1;visibility:visible;}',
        '#cs-card{',
            'position:relative;',
            'background:#fff;',
            'border-radius:24px;',
            'box-shadow:0 20px 60px -10px rgba(31,36,41,0.30);',
            'max-width:460px;width:100%;',
            'padding:2.5rem 2rem 2rem;',
            'text-align:center;',
            'transform:translateY(20px) scale(0.97);',
            'transition:transform 0.28s cubic-bezier(.34,1.56,.64,1);',
            'border-top:4px solid #ed1a25;',
        '}',
        '#cs-overlay.cs-open #cs-card{transform:translateY(0) scale(1);}',
        '#cs-close{',
            'position:absolute;top:1rem;right:1rem;',
            'width:2rem;height:2rem;',
            'display:flex;align-items:center;justify-content:center;',
            'border:none;background:transparent;cursor:pointer;',
            'color:#8c9097;border-radius:50%;',
            'transition:background 0.18s,color 0.18s;',
            'font-size:1.1rem;',
        '}',
        '#cs-close:hover{background:#fde2e4;color:#ed1a25;}',
        '#cs-icon-ring{',
            'width:5rem;height:5rem;',
            'border-radius:50%;',
            'background:linear-gradient(135deg,#fde2e4 0%,#fef2f3 100%);',
            'display:flex;align-items:center;justify-content:center;',
            'margin:0 auto 1.5rem;',
            'box-shadow:0 8px 24px -4px rgba(237,26,37,0.18);',
        '}',
        '#cs-icon-ring i{font-size:2rem;color:#ed1a25;}',
        '#cs-title{',
            'font-family:"Montserrat",sans-serif;',
            'font-weight:800;font-size:1.5rem;',
            'color:#1f2429;margin:0 0 0.5rem;',
            'letter-spacing:-0.01em;',
        '}',
        '#cs-subtitle{',
            'font-family:"Open Sans",sans-serif;',
            'font-size:0.9375rem;color:#5f656e;',
            'margin:0 0 1.75rem;line-height:1.6;',
        '}',
        '#cs-badge{',
            'display:inline-flex;align-items:center;gap:0.5rem;',
            'background:#f3f4f5;',
            'border:1px solid #dfe1e3;',
            'border-radius:9999px;',
            'padding:0.4rem 1rem;',
            'font-family:"Open Sans",sans-serif;',
            'font-size:0.8125rem;font-weight:600;',
            'color:#3d434c;',
            'margin-bottom:1.5rem;',
        '}',
        '#cs-badge i{color:#ed1a25;font-size:0.75rem;}',
        '#cs-cta{',
            'display:inline-flex;align-items:center;gap:0.6rem;',
            'background:#ed1a25;color:#fff;',
            'font-family:"Montserrat",sans-serif;',
            'font-weight:700;font-size:0.9375rem;',
            'padding:0.75rem 1.75rem;',
            'border-radius:9999px;',
            'border:none;cursor:pointer;',
            'text-decoration:none;',
            'transition:background 0.18s,box-shadow 0.18s,transform 0.12s;',
            'box-shadow:0 8px 20px -6px rgba(237,26,37,0.40);',
        '}',
        '#cs-cta:hover{background:#cf0e18;box-shadow:0 12px 24px -6px rgba(237,26,37,0.45);transform:translateY(-1px);}',
    ].join('');
    document.head.appendChild(style);

    /* ---- Inject HTML ---- */
    var overlay = document.createElement('div');
    overlay.id = 'cs-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'cs-title');
    overlay.innerHTML = [
        '<div id="cs-card">',
            '<button id="cs-close" aria-label="Close popup">',
                '<i class="fa-solid fa-xmark"></i>',
            '</button>',
            '<div id="cs-icon-ring">',
                '<i class="fa-solid fa-rocket"></i>',
            '</div>',
            '<div id="cs-badge">',
                '<i class="fa-solid fa-circle-dot"></i> In Development',
            '</div>',
            '<h2 id="cs-title">Coming Soon</h2>',
            '<p id="cs-subtitle">',
                'We\'re working hard on this feature.<br>',
                'In the meantime, get in touch — our team is ready to help.',
            '</p>',
            '<a href="/contact" id="cs-cta">',
                '<i class="fa-solid fa-envelope"></i> Contact Us',
            '</a>',
        '</div>',
    ].join('');
    document.body.appendChild(overlay);

    /* ---- Open / close logic ---- */
    function open() {
        overlay.classList.add('cs-open');
        document.body.style.overflow = 'hidden';
        document.getElementById('cs-close').focus();
    }

    function close() {
        overlay.classList.remove('cs-open');
        document.body.style.overflow = '';
    }

    /* Close on overlay background click */
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) close();
    });

    /* Close button */
    document.getElementById('cs-close').addEventListener('click', close);

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('cs-open')) close();
    });

    /* Auto-wire any element with data-coming-soon attribute */
    document.addEventListener('click', function (e) {
        var el = e.target.closest('[data-coming-soon]');
        if (el) {
            e.preventDefault();
            open();
        }
    });

    /* Expose global API */
    window.showComingSoonPopup = open;
    window.hideComingSoonPopup = close;
})();
