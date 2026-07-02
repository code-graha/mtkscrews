/* ============================================================
   MTK Screws — Global Script
   Loaded at the end of <body> on every page, after
   products-data.js (PRODUCTS_DATA, SITE_CONFIG, PRODUCTS_SVG_SPRITE).

   Responsibilities:
     1. Build PRODUCTS_BY_SLUG lookup map
     2. Inject SVG icon sprite into <body>
     3. Expose PRODUCTS_RENDER helpers
     4. Inject SITE_CONFIG values into every page's DOM
        (phone, email, address, WhatsApp, social, copyright, footer products)
     5. Mobile menu toggle
     6. Mega-menu + mobile products menu population
     7. Plotly / chart resize handler
     8. Hide the loading screen once the page has fully loaded
   ============================================================ */

(function () {

    var DATA = window.PRODUCTS_DATA;
    var CFG  = window.SITE_CONFIG;

    /* ── 1. PRODUCTS_BY_SLUG — flat slug → {product, category} map ── */
    if (DATA) {
        window.PRODUCTS_BY_SLUG = (function () {
            var map = {};
            ['manufacturing', 'trading'].forEach(function (track) {
                DATA[track].forEach(function (cat) {
                    cat.products.forEach(function (p) {
                        var fullSlug = cat.slug + '__' + p.slug;
                        map[fullSlug] = { product: p, category: cat, fullSlug: fullSlug };
                    });
                });
            });
            return map;
        })();
    }

    /* ── 2. SVG sprite injector ──────────────────────────────────── */
    if (window.PRODUCTS_SVG_SPRITE && !document.getElementById('mtk-icon-sprite')) {
        var _spriteWrap = document.createElement('div');
        _spriteWrap.innerHTML = window.PRODUCTS_SVG_SPRITE;
        document.body.insertBefore(_spriteWrap.firstChild, document.body.firstChild);
    }

    /* ── 3. PRODUCTS_RENDER helpers ─────────────────────────────── */
    window.PRODUCTS_RENDER = {
        /** Render up to `max` spec key→value chips */
        specChips: function (specs, max) {
            return Object.entries(specs).slice(0, max || 3).map(function (e) {
                return '<span class="text-[10px] bg-light text-gray-700 px-2 py-1 rounded font-semibold uppercase tracking-wide">' + e[1] + '</span>';
            }).join('');
        },
        /** Full slug → product detail page URL */
        detailHref: function (fullSlug) {
            return 'product-detail?p=' + encodeURIComponent(fullSlug);
        },
    };

    /* ── 4. SITE_CONFIG DOM injection ───────────────────────────── */
    if (CFG) {
        _injectSiteConfig(CFG, DATA);
    }

    /* ── 5. Mobile menu toggle ──────────────────────────────────── */
    var toggle = document.getElementById('menu-toggle');
    var menu   = document.getElementById('mobile-menu');
    var icon   = document.getElementById('menu-icon');
    if (toggle && menu && icon) {
        toggle.addEventListener('click', function () {
            menu.classList.toggle('hidden');
            var isOpen = !menu.classList.contains('hidden');
            icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    /* ── 6. Mega-menu + mobile products menu ────────────────────── */
    if (DATA) {
        var mfgLinks = DATA.manufacturing.map(function (c) {
            return '<li><a href="/products#' + c.slug + '" class="text-sm text-gray-600 hover:text-orange-500 flex items-center gap-2">'
                + '<i class="fa-solid fa-angle-right text-orange-500"></i> ' + c.name + '</a></li>';
        }).join('');
        var trdLinks = DATA.trading.map(function (c) {
            return '<li><a href="/products#' + c.slug + '" class="text-sm text-gray-600 hover:text-orange-500 flex items-center gap-2">'
                + '<i class="fa-solid fa-angle-right text-orange-500"></i> ' + c.name + '</a></li>';
        }).join('');

        var megaMenu = document.getElementById('mega-menu');
        if (megaMenu) {
            megaMenu.innerHTML =
                '<div>'
                    + '<div class="flex items-center gap-2 mb-4 pb-2 border-b">'
                        + '<span class="w-7 h-7 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center text-xs"><i class="fa-solid fa-industry"></i></span>'
                        + '<h4 class="font-heading font-bold text-navy-900">Manufacturing</h4>'
                    + '</div>'
                    + '<ul class="space-y-3">' + mfgLinks + '</ul>'
                + '</div>'
                + '<div>'
                    + '<div class="flex items-center gap-2 mb-4 pb-2 border-b">'
                        + '<span class="w-7 h-7 rounded-lg bg-navy-100 text-navy-900 flex items-center justify-center text-xs"><i class="fa-solid fa-truck-fast"></i></span>'
                        + '<h4 class="font-heading font-bold text-navy-900">Trading</h4>'
                    + '</div>'
                    + '<ul class="space-y-2.5">' + trdLinks + '</ul>'
                + '</div>';
        }

        var mobileProductsMenu = document.getElementById('mobile-products-menu');
        if (mobileProductsMenu) {
            mobileProductsMenu.innerHTML =
                '<div>'
                    + '<div class="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Manufacturing</div>'
                    + DATA.manufacturing.map(function (c) {
                        return '<a href="/products#' + c.slug + '" class="block py-1.5">' + c.name + '</a>';
                    }).join('')
                + '</div>'
                + '<div>'
                    + '<div class="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Trading</div>'
                    + DATA.trading.map(function (c) {
                        return '<a href="/products#' + c.slug + '" class="block py-1.5">' + c.name + '</a>';
                    }).join('')
                + '</div>';
        }
    }

    /* ── 7. Chart resize handler ────────────────────────────────── */
    function _resizeCharts() {
        if (window.Plotly) {
            document.querySelectorAll('.plot-container.plotly').forEach(function (pc) {
                var gd = pc.parentElement;
                if (!gd) return;
                var rect = gd.getBoundingClientRect();
                if (rect.width <= 0 || rect.height <= 0) return;
                try { window.Plotly.relayout(gd, { width: Math.round(rect.width), height: Math.round(rect.height) }); } catch (e) {}
            });
        }
        if (window.ApexCharts && window.Apex && window.Apex._chartInstances) {
            window.Apex._chartInstances.forEach(function (inst) {
                try { (inst.chart || inst).updateOptions({}, false, false); } catch (e) {}
            });
        }
        if (window.Chart) {
            try { Object.values(window.Chart.instances || {}).forEach(function (c) { c.resize(); }); } catch (e) {}
        }
    }
    window.addEventListener('load', function () {
        setTimeout(function () { _resizeCharts(); setTimeout(_resizeCharts, 500); }, 300);
        try {
            var _lastW = 0, _lastH = 0, _timer = 0;
            new ResizeObserver(function () {
                var w = document.documentElement.clientWidth;
                var h = document.documentElement.clientHeight;
                if (w === _lastW && h === _lastH) return;
                _lastW = w; _lastH = h;
                clearTimeout(_timer);
                _timer = setTimeout(_resizeCharts, 150);
            }).observe(document.documentElement);
        } catch (e) {}
    });

    /* ── SITE_CONFIG injection ──────────────────────────────────────
       Updates phone, email, address, WhatsApp, social links,
       copyright year, and footer product list from SITE_CONFIG.
       Scoped to #top-bar and #main-footer to avoid touching
       page-specific contact cards (e.g. contact.html's dual phones).
    ─────────────────────────────────────────────────────────────── */
    function _injectSiteConfig(cfg, data) {
        var c = cfg.contact;
        var s = cfg.social;
        var topBar = document.getElementById('top-bar');
        var footer = document.getElementById('main-footer');
        var scopes = [topBar, footer].filter(Boolean);

        /* Helper: update a link's href and visible text (preserving child icons) */
        function _setLink(a, href, text) {
            a.href = href;
            var iconEl = a.querySelector('i, svg');
            if (iconEl) {
                /* Remove all text nodes, then append one after the icon */
                Array.from(a.childNodes).forEach(function (n) {
                    if (n.nodeType === 3) a.removeChild(n);
                });
                a.appendChild(document.createTextNode(' ' + text));
            } else {
                a.textContent = text;
            }
        }

        /* Phone links (tel:) — update only inside top-bar and footer */
        scopes.forEach(function (scope) {
            scope.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
                _setLink(a, c.phone1Url, c.phone1);
            });
        });

        /* Email links (mailto:) — update only inside top-bar and footer */
        scopes.forEach(function (scope) {
            scope.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
                _setLink(a, 'mailto:' + c.email, c.email);
            });
        });

        /* WhatsApp links — update all occurrences site-wide */
        document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
            a.href = c.whatsapp;
        });

        /* Catalog links — update all occurrences site-wide */
        document.querySelectorAll('a[href*="Catalog"]').forEach(function (a) {
            a.href = cfg.catalog;
        });

        /* Social links — update inside top-bar and footer */
        scopes.forEach(function (scope) {
            scope.querySelectorAll('a[href*="linkedin"]').forEach(function (a)  { a.href = s.linkedin;  });
            scope.querySelectorAll('a[href*="instagram"]').forEach(function (a) { a.href = s.instagram; });
        });

        /* Footer: address span */
        if (footer) {
            footer.querySelectorAll('.fa-location-dot').forEach(function (icon) {
                var span = icon.parentElement && icon.parentElement.querySelector('span');
                if (span) span.innerHTML = c.address;
            });
        }

        /* Footer: copyright year (auto-updates every year) */
        if (footer) {
            footer.querySelectorAll('p').forEach(function (p) {
                if (p.innerHTML.indexOf('Aggarwal Industries') > -1 && p.innerHTML.indexOf('©') > -1) {
                    p.innerHTML = '&copy; ' + new Date().getFullYear()
                        + ' ' + cfg.company.copyright + '. All rights reserved.';
                }
            });
        }

        /* Footer: credit link */
        if (footer && cfg.credit) {
            footer.querySelectorAll('a').forEach(function (a) {
                if (a.textContent.trim() === cfg.credit.name || (a.querySelector('span') && a.querySelector('span').textContent === cfg.credit.name)) {
                    a.href = cfg.credit.url;
                }
            });
        }

        /* Footer: populate "Products" list from PRODUCTS_DATA */
        if (footer && data) {
            footer.querySelectorAll('h4').forEach(function (h4) {
                if (h4.textContent.trim() !== 'Products') return;
                var ul = h4.nextElementSibling;
                if (!ul || ul.tagName !== 'UL') return;
                /* Show 2 manufacturing + first 3 trading categories */
                var cats = data.manufacturing.slice(0, 2).concat(data.trading.slice(0, 3));
                ul.innerHTML = cats.map(function (cat) {
                    return '<li><a href="/products#' + cat.slug
                        + '" class="hover:text-orange-500 transition-colors">' + cat.name + '</a></li>';
                }).join('');
            });
        }
    }

    /* ── 8. Loading screen ───────────────────────────────────────
       Shown by default (inline in <head>) so it paints before any
       CSS/JS loads. Hidden once the page is fully loaded, with a
       safety timeout so it can never trap the page if something hangs. */
    var loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        var hideLoadingScreen = function () {
            loadingScreen.classList.add('loading-screen--hidden');
            loadingScreen.addEventListener('transitionend', function () {
                loadingScreen.hidden = true;
            }, { once: true });
        };
        if (document.readyState === 'complete') {
            hideLoadingScreen();
        } else {
            window.addEventListener('load', hideLoadingScreen);
        }
        setTimeout(hideLoadingScreen, 5000);
    }

})();
