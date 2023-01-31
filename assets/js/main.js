!(function (e) {
  "use strict";
  if (
    (e(window).on("load", function () {
      e(".preloader").fadeOut();
    }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.asmobilemenu = function (t) {
      var s = e.extend(
        {
          menuToggleBtn: ".as-menu-toggle",
          bodyToggleClass: "as-body-visible",
          subMenuClass: "as-submenu",
          subMenuParent: "as-item-has-children",
          subMenuParentToggle: "as-active",
          meanExpandClass: "as-mean-expand",
          appendElement: '<span class="as-mean-expand"></span>',
          subMenuToggleClass: "as-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function a() {
          t.toggleClass(s.bodyToggleClass);
          var a = "." + s.subMenuClass;
          e(a).each(function () {
            e(this).hasClass(s.subMenuToggleClass) &&
              (e(this).removeClass(s.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(s.subMenuParentToggle));
          });
        }
        t.find("li").each(function () {
          var t = e(this).find("ul");
          t.addClass(s.subMenuClass),
            t.css("display", "none"),
            t.parent().addClass(s.subMenuParent),
            t.prev("a").append(s.appendElement),
            t.next("a").append(s.appendElement);
        });
        var o = "." + s.meanExpandClass;
        e(o).each(function () {
          e(this).on("click", function (t) {
            var a;
            t.preventDefault(),
              (a = e(this).parent()),
              e(a).next("ul").length > 0
                ? (e(a).parent().toggleClass(s.subMenuParentToggle),
                  e(a).next("ul").slideToggle(s.toggleSpeed),
                  e(a).next("ul").toggleClass(s.subMenuToggleClass))
                : e(a).prev("ul").length > 0 &&
                  (e(a).parent().toggleClass(s.subMenuParentToggle),
                  e(a).prev("ul").slideToggle(s.toggleSpeed),
                  e(a).prev("ul").toggleClass(s.subMenuToggleClass));
          });
        }),
          e(s.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              a();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), a();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
            a();
          });
      });
    }),
    e(".as-menu-wrapper").asmobilemenu(),
    e(window).scroll(function () {
      var t = e(this).scrollTop();
      function s() {
        t > 400 &&
          (e(".sticky-wrapper").addClass("sticky"),
          e(".sticky-wrapper").removeClass("will-sticky"));
      }
      s(),
        t > 150
          ? (e(".sticky-wrapper").addClass("will-sticky"), s())
          : (e(".sticky-wrapper").removeClass("sticky"),
            e(".sticky-wrapper").removeClass("will-sticky"));
    }),
    e(".scroll-top"))
  ) {
    var t = document.querySelector(".scroll-top"),
      s = document.querySelector(".scroll-top path"),
      a = s.getTotalLength();
    (s.style.transition = s.style.WebkitTransition = "none"),
      (s.style.strokeDasharray = a + " " + a),
      (s.style.strokeDashoffset = a),
      s.getBoundingClientRect(),
      (s.style.transition = s.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var o = function () {
      var t = e(window).scrollTop(),
        o = e(document).height() - e(window).height(),
        n = a - (t * a) / o;
      s.style.strokeDashoffset = n;
    };
    o(), e(window).scroll(o);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(t).addClass("show")
        : jQuery(t).removeClass("show");
    }),
      jQuery(t).on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  e("[data-bg-src]").length > 0 &&
    e("[data-bg-src]").each(function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    e(".as-carousel").each(function () {
      var t = e(this);
      function s(e) {
        return t.data(e);
      }
      var a =
          '<button type="button" class="slick-prev"><i class="' +
          s("prev-arrow") +
          '"></i></button>',
        o =
          '<button type="button" class="slick-next"><i class="' +
          s("next-arrow") +
          '"></i></button>';
      e("[data-slick-next]").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext");
        });
      }),
        e("[data-slick-prev]").each(function () {
          e(this).on("click", function (t) {
            t.preventDefault(),
              e(e(this).data("slick-prev")).slick("slickPrev");
          });
        }),
        1 == s("arrows") &&
          (t.closest(".arrow-wrap").length ||
            t.closest(".container").parent().addClass("arrow-wrap")),
        t.slick({
          dots: !!s("dots"),
          fade: !!s("fade"),
          arrows: !!s("arrows"),
          speed: s("speed") ? s("speed") : 1e3,
          asNavFor: !!s("asnavfor") && s("asnavfor"),
          autoplay: 0 != s("autoplay"),
          infinite: 0 != s("infinite"),
          slidesToShow: s("slide-show") ? s("slide-show") : 1,
          adaptiveHeight: !!s("adaptive-height"),
          centerMode: !!s("center-mode"),
          autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 2e3,
          centerPadding: s("center-padding") ? s("center-padding") : "0",
          focusOnSelect: 0 != s("focuson-select"),
          pauseOnFocus: !!s("pauseon-focus"),
          pauseOnHover: !!s("pauseon-hover"),
          variableWidth: !!s("variable-width"),
          vertical: !!s("vertical"),
          verticalSwiping: !!s("vertical"),
          prevArrow: s("prev-arrow")
            ? a
            : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
          nextArrow: s("next-arrow")
            ? o
            : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
          rtl: "rtl" == e("html").attr("dir"),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                arrows: !!s("xl-arrows"),
                dots: !!s("xl-dots"),
                slidesToShow: s("xl-slide-show")
                  ? s("xl-slide-show")
                  : s("slide-show"),
                centerMode: !!s("xl-center-mode"),
                centerPadding: "0",
              },
            },
            {
              breakpoint: 1400,
              settings: {
                arrows: !!s("ml-arrows"),
                dots: !!s("ml-dots"),
                slidesToShow: s("ml-slide-show")
                  ? s("ml-slide-show")
                  : s("slide-show"),
                centerMode: !!s("ml-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                arrows: !!s("lg-arrows"),
                dots: !!s("lg-dots"),
                slidesToShow: s("lg-slide-show")
                  ? s("lg-slide-show")
                  : s("slide-show"),
                centerMode: !!s("lg-center-mode") && s("lg-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: !!s("md-arrows"),
                dots: !!s("md-dots"),
                slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1,
                centerMode: !!s("md-center-mode") && s("md-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: !!s("sm-arrows"),
                dots: !!s("sm-dots"),
                slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1,
                centerMode: !!s("sm-center-mode") && s("sm-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 576,
              settings: {
                arrows: !!s("xs-arrows"),
                dots: !!s("xs-dots"),
                slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1,
                centerMode: !!s("xs-center-mode") && s("xs-center-mode"),
                centerPadding: 0,
              },
            },
          ],
        });
    }),
    e("[data-ani-duration]").each(function () {
      var t = e(this).data("ani-duration");
      e(this).css("animation-duration", t);
    }),
    e("[data-ani-delay]").each(function () {
      var t = e(this).data("ani-delay");
      e(this).css("animation-delay", t);
    }),
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t),
        e(".slick-current [data-ani]").addClass("as-animated");
    }),
    e(".as-carousel").on("afterChange", function (t, s, a, o) {
      e(s.$slides).find("[data-ani]").removeClass("as-animated"),
        e(s.$slides[a]).find("[data-ani]").addClass("as-animated");
    }),
    e("#projectSlide2").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      autoplay: !0,
      fade: !0,
      speed: 1e3,
      autoplaySpeed: 6e3,
      asNavFor: ".projectSlideThumb",
    }),
    e(".projectSlideThumb").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      autoplay: !0,
      speed: 1e3,
      autoplaySpeed: 6e3,
      vertical: !0,
      focusOnSelect: !0,
      asNavFor: "#projectSlide2",
      responsive: [
        { breakpoint: 992, settings: { vertical: !1, slidesToShow: 2 } },
        { breakpoint: 767, settings: { vertical: !1, slidesToShow: 2 } },
        { breakpoint: 440, settings: { vertical: !1, slidesToShow: 2 } },
      ],
    }),
    e("#projectSlide3").slick({
      centerMode: !0,
      centerPadding: "330px",
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      autoplay: !0,
      speed: 1e3,
      autoplaySpeed: 6e3,
      focusOnSelect: !0,
      responsive: [
        {
          breakpoint: 1670,
          settings: { centerPadding: "100px", slidesToShow: 3 },
        },
        {
          breakpoint: 1199,
          settings: { centerPadding: "300px", slidesToShow: 1 },
        },
        {
          breakpoint: 992,
          settings: { centerPadding: "200px", slidesToShow: 1 },
        },
        {
          breakpoint: 767,
          settings: { centerPadding: "50px", slidesToShow: 1 },
        },
        { breakpoint: 440, settings: { centerPadding: "0", slidesToShow: 1 } },
      ],
    });
    e("#projectSlide4").slick({
      centerMode: !0,
      centerPadding: "330px",
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      autoplay: !0,
      speed: 1e3,
      autoplaySpeed: 6e3,
      focusOnSelect: !0,
      responsive: [
        {
          breakpoint: 1670,
          settings: { centerPadding: "100px", slidesToShow: 3 },
        },
        {
          breakpoint: 1199,
          settings: { centerPadding: "300px", slidesToShow: 1 },
        },
        {
          breakpoint: 992,
          settings: { centerPadding: "200px", slidesToShow: 1 },
        },
        {
          breakpoint: 767,
          settings: { centerPadding: "50px", slidesToShow: 1 },
        },
        { breakpoint: 440, settings: { centerPadding: "0", slidesToShow: 1 } },
      ],
    });
    e("#projectSlide5").slick({
      centerMode: !0,
      centerPadding: "330px",
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      autoplay: !0,
      speed: 1e3,
      autoplaySpeed: 6e3,
      focusOnSelect: !0,
      responsive: [
        {
          breakpoint: 1670,
          settings: { centerPadding: "100px", slidesToShow: 3 },
        },
        {
          breakpoint: 1199,
          settings: { centerPadding: "300px", slidesToShow: 1 },
        },
        {
          breakpoint: 992,
          settings: { centerPadding: "200px", slidesToShow: 1 },
        },
        {
          breakpoint: 767,
          settings: { centerPadding: "50px", slidesToShow: 1 },
        },
        { breakpoint: 440, settings: { centerPadding: "0", slidesToShow: 1 } },
      ],
    });
    e("#projectSlide6").slick({
      centerMode: !0,
      centerPadding: "330px",
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      autoplay: !0,
      speed: 1e3,
      autoplaySpeed: 6e3,
      focusOnSelect: !0,
      responsive: [
        {
          breakpoint: 1670,
          settings: { centerPadding: "100px", slidesToShow: 3 },
        },
        {
          breakpoint: 1199,
          settings: { centerPadding: "300px", slidesToShow: 1 },
        },
        {
          breakpoint: 992,
          settings: { centerPadding: "200px", slidesToShow: 1 },
        },
        {
          breakpoint: 767,
          settings: { centerPadding: "50px", slidesToShow: 1 },
        },
        { breakpoint: 440, settings: { centerPadding: "0", slidesToShow: 1 } },
      ],
    });
  var n,
    i,
    r,
    l = ".ajax-contact",
    c = '[name="email"]',
    d = e(".form-messages");
  function p() {
    var t = e(l).serialize();
    (function () {
      var t,
        s = !0;
      function a(a) {
        a = a.split(",");
        for (var o = 0; o < a.length; o++)
          (t = l + " " + a[o]),
            e(t).val()
              ? (e(t).removeClass("is-invalid"), (s = !0))
              : (e(t).addClass("is-invalid"), (s = !1));
      }
      a(
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
      ),
        e(c).val() &&
        e(c)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(c).removeClass("is-invalid"), (s = !0))
          : (e(c).addClass("is-invalid"), (s = !1));
      return s;
    })() &&
      jQuery
        .ajax({ url: e(l).attr("action"), data: t, type: "POST" })
        .done(function (t) {
          d.removeClass("error"),
            d.addClass("success"),
            d.text(t),
            e(l + ' input:not([type="submit"]),' + l + " textarea").val("");
        })
        .fail(function (e) {
          d.removeClass("success"),
            d.addClass("error"),
            "" !== e.responseText
              ? d.html(e.responseText)
              : d.html(
                  "Oops! An error occured and your message could not be sent."
                );
        });
  }
  function u(e) {
    return parseInt(e, 10);
  }
  e(l).on("submit", function (e) {
    e.preventDefault(), p();
  }),
    (n = ".popup-search-box"),
    (i = ".searchClose"),
    (r = "show"),
    e(".searchBoxToggler").on("click", function (t) {
      t.preventDefault(), e(n).addClass(r);
    }),
    e(n).on("click", function (t) {
      t.stopPropagation(), e(n).removeClass(r);
    }),
    e(n)
      .find("form")
      .on("click", function (t) {
        t.stopPropagation(), e(n).addClass(r);
      }),
    e(i).on("click", function (t) {
      t.preventDefault(), t.stopPropagation(), e(n).removeClass(r);
    }),
    (function (t, s, a, o) {
      e(s).on("click", function (s) {
        s.preventDefault(), e(t).addClass(o);
      }),
        e(t).on("click", function (s) {
          s.stopPropagation(), e(t).removeClass(o);
        }),
        e(t + " > div").on("click", function (s) {
          s.stopPropagation(), e(t).addClass(o);
        }),
        e(a).on("click", function (s) {
          s.preventDefault(), s.stopPropagation(), e(t).removeClass(o);
        });
    })(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".popup-content").magnificPopup({ type: "inline", midClick: !0 }),
    (e.fn.sectionPosition = function (t, s) {
      e(this).each(function () {
        var a,
          o,
          n,
          i,
          r,
          l = e(this);
        (a = Math.floor(l.height() / 2)),
          (o = l.attr(t)),
          (n = l.attr(s)),
          (i = u(e(n).css("padding-top"))),
          (r = u(e(n).css("padding-bottom"))),
          "top-half" === o
            ? (e(n).css("padding-bottom", r + a + "px"),
              l.css("margin-top", "-" + a + "px"))
            : "bottom-half" === o &&
              (e(n).css("padding-top", i + a + "px"),
              l.css("margin-bottom", "-" + a + "px"));
      });
    });
  e("[data-sec-pos]").length &&
    e("[data-sec-pos]").imagesLoaded(function () {
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
    }),
    (e.fn.sectionSpace = function (t, s) {
      e(this).each(function () {
        var a,
          o,
          n,
          i,
          r,
          l,
          c = e(this);
        (a = c.attr(t)),
          (o = c.attr(s)),
          (n = c.data("margin-top")),
          (i = c.data("margin-bottom")),
          (r = u(e(o).css("padding-top"))),
          (l = u(e(o).css("padding-bottom"))),
          "margin-top" === a
            ? (e(o).css("padding-bottom", l + u(n) + "px"),
              c
                .css("margin-top", "-" + u(n) + "px")
                .css({ position: "relative", "z-index": "3" }))
            : "margin-bottom" === a &&
              (e(o).css("padding-top", r + u(i) + "px"),
              c
                .css("margin-bottom", "-" + u(i) + "px")
                .css({ position: "relative", "z-index": "3" }));
      });
    });
  if (
    (e("[data-sec-space]").length &&
      e("[data-sec-space]").imagesLoaded(function () {
        e("[data-sec-space]").sectionSpace("data-sec-space", "data-pos-space");
      }),
    e(".filter-active").imagesLoaded(function () {
      if (e(".filter-active").length > 0) {
        var t = e(".filter-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
        });
        e(".filter-menu-active").on("click", "button", function () {
          var s = e(this).attr("data-filter");
          t.isotope({ filter: s });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".masonary-active").imagesLoaded(function () {
      if (e(".masonary-active").length > 0) {
        var t = e(".masonary-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: { columnWidth: 1 },
        });
        e(".filter-menu-active").on("click", "button", function () {
          var s = e(this).attr("data-filter");
          t.isotope({ filter: s });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".filter-active-cat1").imagesLoaded(function () {
      if (e(".filter-active-cat1").length > 0) {
        var t = e(".filter-active-cat1").isotope({
          itemSelector: ".filter-item",
          filter: ".cat1",
          masonry: { columnWidth: 1 },
        });
        e(".filter-menu-active").on("click", "button", function () {
          var s = e(this).attr("data-filter");
          t.isotope({ filter: s });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (e.fn.indicator = function () {
      var t = e(this),
        s = t.find("a"),
        a = t.find("button");
      t.append('<span class="indicator"></span>');
      var o = t.find(".indicator");
      if (s.length) var n = s;
      else if (a.length) n = a;
      function i() {
        var e = t.find(".active"),
          s = e.css("height"),
          a = e.css("width"),
          n = e.position().top + "px",
          i = e.position().left + "px";
        o.css({ top: n, left: i, width: a, height: s });
      }
      n.on("click", function (t) {
        t.preventDefault(),
          e(this).addClass("active"),
          e(this).siblings(".active").removeClass("active"),
          i();
      }),
        i();
    }),
    e(".tab-menu3").length && e(".tab-menu3").indicator(),
    (e.fn.asTab = function (t) {
      var s = e.extend({ sliderTab: !1, tabButton: "button" }, t);
      e(this).each(function () {
        var t = e(this),
          a = t.find(s.tabButton);
        t.append('<span class="indicator"></span>');
        var o = t.find(".indicator");
        if (
          (a.on("click", function (t) {
            t.preventDefault();
            var a = e(this);
            a.addClass("active").siblings().removeClass("active"),
              s.sliderTab
                ? e(n).slick("slickGoTo", a.data("slide-go-to"))
                : r();
          }),
          s.sliderTab)
        ) {
          var n = t.data("asnavfor"),
            i = 0;
          a.each(function () {
            var a = e(this);
            a.attr("data-slide-go-to", i),
              i++,
              a.hasClass("active") &&
                e(n).slick("slickGoTo", a.data("slide-go-to")),
              e(n).on("beforeChange", function (e, a, o, n) {
                t
                  .find(s.tabButton + '[data-slide-go-to="' + n + '"]')
                  .addClass("active")
                  .siblings()
                  .removeClass("active"),
                  r();
              });
          });
        }
        function r() {
          var n = t.find(s.tabButton + ".active"),
            i = n.css("height"),
            r = n.css("width"),
            l = n.position().top + "px",
            c = n.position().left + "px";
          o.get(0).style.setProperty("--height-set", i),
            o.get(0).style.setProperty("--width-set", r),
            o.get(0).style.setProperty("--pos-y", l),
            o.get(0).style.setProperty("--pos-x", c),
            e(a).first().position().left == n.position().left
              ? o.addClass("start").removeClass("center").removeClass("end")
              : e(a).last().position().left == n.position().left
              ? o.addClass("end").removeClass("center").removeClass("start")
              : o.addClass("center").removeClass("start").removeClass("end");
        }
        r();
      });
    }),
    e(".project-menu-tab").length &&
      e(".project-menu-tab").asTab({ sliderTab: !0, tabButton: ".tab-btn" }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          s = t.data("top"),
          a = t.data("right"),
          o = t.data("bottom"),
          n = t.data("left");
        t.css({ top: s, right: a, bottom: o, left: n })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    (e.fn.countdown = function () {
      e(this).each(function () {
        var t = e(this),
          s = new Date(t.data("offer-date")).getTime();
        function a(e) {
          return t.find(e);
        }
        var o = setInterval(function () {
          var e = new Date().getTime(),
            n = s - e,
            i = Math.floor(n / 864e5),
            r = Math.floor((n % 864e5) / 36e5),
            l = Math.floor((n % 36e5) / 6e4),
            c = Math.floor((n % 6e4) / 1e3);
          i < 10 && (i = "0" + i),
            r < 10 && (r = "0" + r),
            l < 10 && (l = "0" + l),
            c < 10 && (c = "0" + c),
            n < 0
              ? (clearInterval(o),
                t.addClass("expired"),
                t.find(".message").css("display", "block"))
              : (a(".day").html(i),
                a(".hour").html(r),
                a(".minute").html(l),
                a(".seconds").html(c));
        }, 1e3);
      });
    }),
    e(".counter-list").length && e(".counter-list").countdown(),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    e(".clock").length)
  ) {
    const e = 6,
      t = document.querySelector("#hr"),
      s = document.querySelector("#mn"),
      a = document.querySelector("#sc");
    setInterval(() => {
      let o = new Date(),
        n = 30 * o.getHours(),
        i = o.getMinutes() * e,
        r = o.getSeconds() * e;
      (t.style.transform = `rotateZ(${n + i / 12}deg)`),
        (s.style.transform = `rotateZ(${i}deg)`),
        (a.style.transform = `rotateZ(${r}deg)`);
    });
  }
  window.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    !1
  )
    
})(jQuery);
