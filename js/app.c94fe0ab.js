(function () {
  "use strict";
  var a = {
      642: function (a, o, s) {
        var t = s(751),
          e = s(641);
        const c = { class: "navBgColor" },
          i = { class: "container navbar navbar-expand-lg" },
          l = (0, e.Lk)(
            "a",
            { class: "navbar-brand router-link-exact-active", href: "/" },
            [
              (0, e.Lk)("div", null, [
                (0, e.Lk)("img", {
                  src: "https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85logo.png?alt=media&token=970ea71c-2085-44e6-9302-6198abbb803c",
                }),
                (0, e.Lk)("h1", null, "毛孩樂園"),
              ]),
            ],
            -1
          ),
          r = (0, e.Lk)(
            "button",
            {
              class: "navbar-toggler",
              type: "button",
              "data-bs-toggle": "collapse",
              "data-bs-target": "#navbarCollapse",
              "aria-controls": "navbarCollapse",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
            },
            [(0, e.Lk)("span", { class: "navbar-toggler-icon" })],
            -1
          ),
          d = {
            class: "collapse navbar-collapse justify-content-end",
            id: "navbarCollapse",
          },
          n = { class: "navbar-nav align-items-center" },
          p = { class: "nav-item" },
          v = (0, e.Lk)(
            "img",
            {
              class: "dogNavImg",
              src: "https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E7%8B%97%E7%8B%97.png?alt=media&token=78900251-cc5e-45f2-b0e7-7e81788ef5bb",
            },
            null,
            -1
          ),
          g = (0, e.Lk)("h2", { class: "ms-1" }, "狗狗專區", -1),
          b = { class: "nav-item" },
          m = (0, e.Lk)(
            "img",
            {
              class: "otherNavImg",
              src: "https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%B2%93.png?alt=media&token=691f9daf-af47-4a1b-ab84-232fc466f00a",
            },
            null,
            -1
          ),
          f = (0, e.Lk)("h2", { class: "ms-1" }, "貓貓專區", -1),
          u = { class: "nav-item" },
          h = (0, e.Lk)(
            "img",
            {
              class: "otherNavImg",
              src: "https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%B3%BC%E7%89%A9%E8%BB%8A.png?alt=media&token=c4113e41-7088-4c3a-a7fc-a02a841cc171",
            },
            null,
            -1
          ),
          E = (0, e.Lk)("h2", { class: "ms-1" }, "購物車", -1),
          k = { class: "nav-item" },
          B = (0, e.Lk)(
            "img",
            {
              class: "otherNavImg",
              src: "https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E6%9C%83%E5%93%A1.png?alt=media&token=b3e1293c-1b52-49cd-a08e-471c1527e10c",
            },
            null,
            -1
          ),
          L = (0, e.Lk)("h2", { class: "ms-1" }, "登入/註冊", -1),
          y = { class: "nav-item" },
          F = (0, e.Lk)(
            "img",
            {
              class: "otherNavImg",
              src: "https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%85%B3%E5%8D%B0.png?alt=media&token=b5d7db56-a456-4a1c-99e2-7f8d99b76efd",
            },
            null,
            -1
          ),
          w = (0, e.Lk)("h2", { class: "ms-1" }, "後臺系統登入", -1),
          A = (0, e.Fv)(
            '<div class="footerBgColor"><footer class="container"><div class="content"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85logo.png?alt=media&amp;token=970ea71c-2085-44e6-9302-6198abbb803c" class="img-fluid"><div class="content2"><p>台北市寵物區狗狗街貓貓巷9號</p><p>手機電話：0912345678</p><p>Gmail：xxxxxxx@gmail.com</p><p>Copyright © c 2024.本網站內容僅用於非商業用途，純作品練習。</p></div></div></footer></div>',
            1
          );
        function x(a, o) {
          const s = (0, e.g2)("router-link"),
            t = (0, e.g2)("router-view");
          return (
            (0, e.uX)(),
            (0, e.CE)(
              e.FK,
              null,
              [
                (0, e.Lk)("div", c, [
                  (0, e.Lk)("nav", i, [
                    l,
                    r,
                    (0, e.Lk)("div", d, [
                      (0, e.Lk)("ul", n, [
                        (0, e.Lk)("li", p, [
                          (0, e.bF)(
                            s,
                            { to: "/about", class: "nav-router-link" },
                            { default: (0, e.k6)(() => [v, g]), _: 1 }
                          ),
                        ]),
                        (0, e.Lk)("li", b, [
                          (0, e.bF)(
                            s,
                            { to: "/cat", class: "nav-router-link" },
                            { default: (0, e.k6)(() => [m, f]), _: 1 }
                          ),
                        ]),
                        (0, e.Lk)("li", u, [
                          (0, e.bF)(
                            s,
                            { to: "/cart", class: "nav-router-link" },
                            { default: (0, e.k6)(() => [h, E]), _: 1 }
                          ),
                        ]),
                        (0, e.Lk)("li", k, [
                          (0, e.bF)(
                            s,
                            { to: "/sign", class: "nav-router-link" },
                            { default: (0, e.k6)(() => [B, L]), _: 1 }
                          ),
                        ]),
                        (0, e.Lk)("li", y, [
                          (0, e.bF)(
                            s,
                            { to: "/back", class: "nav-router-link" },
                            { default: (0, e.k6)(() => [F, w]), _: 1 }
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                (0, e.bF)(t),
                A,
              ],
              64
            )
          );
        }
        var j = s(262);
        const O = {},
          C = (0, j.A)(O, [["render", x]]);
        var D = C,
          _ = s(220);
        const N = { class: "home" },
          P = (0, e.Fv)(
            '<section class="banner"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E8%B2%93%E7%8B%97%E5%8D%80%2F%E5%B0%81%E9%9D%A23.jpg?alt=media&amp;token=bca7ce8d-54e7-483f-af24-b2c648ff5bb2"></section><section class="container hotProducts"><h2>熱門商品區(貓狗專區)</h2><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"><div class="col"><div class="card"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E8%B2%93%E8%B2%93%E5%8D%80%2F%E8%B2%93%E6%9C%A8%E5%A4%A9%E7%99%82.jpg?alt=media&amp;token=4e227f7a-559b-425b-9830-496647325746"><div class="card-body"><div><h3 class="card-text">木天蓼</h3><p>讓貓寶貝放鬆的好夥伴</p></div><i class="bi bi-arrow-right"></i></div></div></div><div class="col"><div class="card"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E7%8B%97%E7%8B%97%E5%8D%80%2F%E7%B6%B2%E7%90%83.jpg?alt=media&amp;token=2b366c64-7f40-41e6-8611-0c18db81e555"><div class="card-body"><div><h3 class="card-text">狗狗專用球球</h3><p>讓狗寶貝消耗體力的最佳選擇</p></div><i class="bi bi-arrow-right"></i></div></div></div><div class="col"><div class="card"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E7%8B%97%E7%8B%97%E5%8D%80%2F%E5%B8%B3%E6%A3%9A%E7%8B%97%E7%8B%97.jpg?alt=media&amp;token=f44120be-9533-4229-af12-e9ef22241c5c"><div class="card-body"><div><h3 class="card-text">寵物專用帳篷</h3><p>讓狗寶貝睡眠睡得安穩</p></div><i class="bi bi-arrow-right"></i></div></div></div></div></section>',
            2
          ),
          S = (0, e.Lk)(
            "section",
            { class: "container marketing onSale" },
            [
              (0, e.Lk)("div", { class: "row featurette" }, [
                (0, e.Lk)("div", { class: "col-md-6 order-md-2 sale" }, [
                  (0, e.Lk)("h1", { class: "pt-5" }, "20%OFF"),
                  (0, e.Lk)("h1", null, "正在促銷中"),
                  (0, e.Lk)("h4", null, "最低消費费 NT100 享 20% 折扣"),
                  (0, e.Lk)("h5", null, "2024/5/1 ~ 2024/12/31"),
                  (0, e.Lk)(
                    "a",
                    { class: "btn", href: "#", role: "button" },
                    "SHOP NOW"
                  ),
                ]),
                (0, e.Lk)("div", { class: "col-md-6 order-md-1" }, [
                  (0, e.Lk)("img", {
                    class: "img-fluid",
                    src: "https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E8%B2%93%E7%8B%97%E5%8D%80%2F%E5%B0%81%E9%9D%A21.jpg?alt=media&token=f4e03cc5-51b8-4e81-8aab-3418fbaae763",
                  }),
                ]),
              ]),
            ],
            -1
          ),
          T = (0, e.Fv)(
            '<section class="container newProduct"><h2>新品上市(貓狗專區)</h2><div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3"><div class="col"><div class="card"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E8%B2%93%E8%B2%93%E5%8D%80%2F%E8%B2%93%E7%AA%A9.jpg?alt=media&amp;token=5f513287-6727-49bc-bac0-0547e5926ad5"><div class="card-body"><div><h3 class="card-text">貓窩</h3><p>讓貓寶貝享受休息的時光</p></div><i class="bi bi-arrow-right"></i></div></div></div><div class="col"><div class="card"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E7%8B%97%E7%8B%97%E5%8D%80%2Fchewy%E9%A3%9B%E7%9B%A4.jpg?alt=media&amp;token=84de32ed-0ab3-4690-b005-2721a042cfa0"><div class="card-body"><div><h3 class="card-text">狗狗飛盤</h3><p>讓主人和狗寶貝傳接飛盤</p></div><i class="bi bi-arrow-right"></i></div></div></div></div></section><section class="container positiveFeedback"><h2>新品上市(貓狗專區)</h2><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"><div class="col"><div class="card"><div class="card-body"><div class="d-flex align-items-center"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E5%A5%BD%E8%A9%95%E5%9B%9E%E9%A5%8B%2Fjohn.png?alt=media&amp;token=0a5f4c8f-b427-49b5-ad68-3eb84982a694"><div><h4>John</h4><h5>貓咪愛好者</h5></div></div><p class="pt-4">這款貓窩真是太棒了！我家的貓咪一開始有點猶豫，但一旦躺進去就不想出來了。貓窩的材質非常柔軟，感覺很舒適，而且內襯的質地很好，對貓咪的皮膚非常友好。看起來也很耐用，已經使用了好幾個月依然如新。強烈推薦給所有養貓的朋友！</p></div></div></div><div class="col"><div class="card"><div class="card-body"><div class="d-flex align-items-center"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E5%A5%BD%E8%A9%95%E5%9B%9E%E9%A5%8B%2FKitty.png?alt=media&amp;token=d68beb9c-7fff-4007-be5f-c63f97bcb3e0"><div><h4>kitty</h4><h5>狗狗帳篷</h5></div></div><p class="pt-4">這款狗狗帳篷的質量非常出色！材料堅固耐用，能夠抵擋狗狗的抓撓和咬咬。帳篷的支架也非常穩固，即使狗狗在裡面玩耍也不會倒塌。整體設計非常耐用，我相信可以使用很長一段時間。非常值得購買！</p></div></div></div> <div class="col"><div class="card"><div class="card-body"><div class="d-flex align-items-center"><img src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E5%A5%BD%E8%A9%95%E5%9B%9E%E9%A5%8B%2Fcindy.png?alt=media&amp;token=be8bb1eb-f2c1-45fb-b3cc-0d50958fe76d"><div><h4>Cindy</h4><h5>狗狗飛盤</h5></div></div><p class="pt-4">這款貓窩真是太棒了！我家的貓咪一開始有點猶豫，但一旦躺進去就不想出來了。貓窩的材質非常柔軟，感覺很舒適，而且內襯的質地很好，對貓咪的皮膚非常友好。看起來也很耐用，已經使用了好幾個月依然如新。強烈推薦給所有養貓的朋友！</p></div></div></div></div></section>',
            2
          ),
          I = [P, S, T];
        function K(a, o) {
          return (0, e.uX)(), (0, e.CE)("div", N, I);
        }
        const M = {},
          X = (0, j.A)(M, [["render", K]]);
        var G = X;
        const H = [{ path: "/", name: "home", component: G }],
          J = (0, _.aE)({ history: (0, _.Bt)(), routes: H });
        var W = J,
          $ = s(278),
          q = (0, $.y$)({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          });
        s(454);
        (0, t.Ef)(D).use(q).use(W).mount("#app");
      },
    },
    o = {};
  function s(t) {
    var e = o[t];
    if (void 0 !== e) return e.exports;
    var c = (o[t] = { exports: {} });
    return a[t](c, c.exports, s), c.exports;
  }
  (s.m = a),
    (function () {
      var a = [];
      s.O = function (o, t, e, c) {
        if (!t) {
          var i = 1 / 0;
          for (n = 0; n < a.length; n++) {
            (t = a[n][0]), (e = a[n][1]), (c = a[n][2]);
            for (var l = !0, r = 0; r < t.length; r++)
              (!1 & c || i >= c) &&
              Object.keys(s.O).every(function (a) {
                return s.O[a](t[r]);
              })
                ? t.splice(r--, 1)
                : ((l = !1), c < i && (i = c));
            if (l) {
              a.splice(n--, 1);
              var d = e();
              void 0 !== d && (o = d);
            }
          }
          return o;
        }
        c = c || 0;
        for (var n = a.length; n > 0 && a[n - 1][2] > c; n--) a[n] = a[n - 1];
        a[n] = [t, e, c];
      };
    })(),
    (function () {
      s.d = function (a, o) {
        for (var t in o)
          s.o(o, t) &&
            !s.o(a, t) &&
            Object.defineProperty(a, t, { enumerable: !0, get: o[t] });
      };
    })(),
    (function () {
      s.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (a) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      s.o = function (a, o) {
        return Object.prototype.hasOwnProperty.call(a, o);
      };
    })(),
    (function () {
      s.r = function (a) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(a, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var a = { 524: 0 };
      s.O.j = function (o) {
        return 0 === a[o];
      };
      var o = function (o, t) {
          var e,
            c,
            i = t[0],
            l = t[1],
            r = t[2],
            d = 0;
          if (
            i.some(function (o) {
              return 0 !== a[o];
            })
          ) {
            for (e in l) s.o(l, e) && (s.m[e] = l[e]);
            if (r) var n = r(s);
          }
          for (o && o(t); d < i.length; d++)
            (c = i[d]), s.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return s.O(n);
        },
        t = (self["webpackChunkpet_paradise"] =
          self["webpackChunkpet_paradise"] || []);
      t.forEach(o.bind(null, 0)), (t.push = o.bind(null, t.push.bind(t)));
    })();
  var t = s.O(void 0, [504], function () {
    return s(642);
  });
  t = s.O(t);
})();
//# sourceMappingURL=app.c94fe0ab.js.map
