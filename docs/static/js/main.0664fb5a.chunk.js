(this["webpackJsonpgif-expert-app"] =
  this["webpackJsonpgif-expert-app"] || []).push([
  [0],
  {
    17: function (t, e, n) {},
    18: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(1),
        c = n(7),
        a = n.n(c),
        i = n(2),
        o = n(9),
        u = n(0),
        s = function (t) {
          var e = t.setCategory,
            n = Object(r.useState)(""),
            c = Object(i.a)(n, 2),
            a = c[0],
            s = c[1];
          return Object(u.jsx)("form", {
            onSubmit: function (t) {
              t.preventDefault(),
                a.trim().length > 2 &&
                  (e(function (t) {
                    return [a].concat(Object(o.a)(t));
                  }),
                  s(""));
            },
            children: Object(u.jsx)("input", {
              type: "text",
              value: a,
              onChange: function (t) {
                s(t.target.value);
              },
            }),
          });
        },
        j = n(10),
        d = n(6),
        l = n.n(d),
        b = n(8),
        f = (function () {
          var t = Object(b.a)(
            l.a.mark(function t(e) {
              var n, r, c, a, i;
              return l.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = "https://api.giphy.com/v1/gifs/search?q=".concat(
                          encodeURI(e),
                          "&limit=10&api_key=1nDCilskUXlq041znlUgzOJ0yApoeFPC"
                        )),
                        (t.next = 3),
                        fetch(n)
                      );
                    case 3:
                      return (r = t.sent), (t.next = 6), r.json();
                    case 6:
                      return (
                        (c = t.sent),
                        (a = c.data),
                        (i = a.map(function (t) {
                          var e;
                          return {
                            id: t.id,
                            url:
                              null === (e = t.images) || void 0 === e
                                ? void 0
                                : e.downsized_medium.url,
                            title: t.title,
                          };
                        })),
                        t.abrupt("return", i)
                      );
                    case 10:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        p = function (t) {
          var e = Object(r.useState)({ data: [], loading: !0 }),
            n = Object(i.a)(e, 2),
            c = n[0],
            a = n[1];
          return (
            Object(r.useEffect)(
              function () {
                f(t)
                  .then(function (t) {
                    return a({ data: t, loading: !1 });
                  })
                  .catch(function (t) {
                    console.warn(t);
                  });
              },
              [t]
            ),
            c
          );
        },
        O = function (t) {
          var e = t.url,
            n = t.title;
          return Object(u.jsxs)("div", {
            className: "grid-item animate__animated animate__fadeIn",
            children: [
              Object(u.jsx)("img", { src: e, alt: n }),
              Object(u.jsx)("p", { children: n }),
            ],
          });
        },
        h = function (t) {
          var e = t.category,
            n = p(e),
            r = n.data,
            c = n.loading;
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)("h1", { children: e }),
              Object(u.jsxs)("div", {
                className: "grid-container",
                children: [
                  c && "Cargando...",
                  r.map(function (t) {
                    return Object(u.jsx)(O, Object(j.a)({}, t), t.id);
                  }),
                ],
              }),
            ],
          });
        },
        x = function () {
          var t = Object(r.useState)(["Scooby Doo"]),
            e = Object(i.a)(t, 2),
            n = e[0],
            c = e[1];
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)("h2", { children: "GifExpertApp" }),
              Object(u.jsx)(s, { setCategory: c }),
              Object(u.jsx)("hr", {}),
              Object(u.jsx)("button", {
                onClick: function () {},
                children: "Add",
              }),
              Object(u.jsx)("ol", {
                children: n.map(function (t) {
                  return Object(u.jsx)(h, { category: t }, t);
                }),
              }),
            ],
          });
        };
      n(17);
      a.a.render(Object(u.jsx)(x, {}), document.getElementById("root"));
    },
  },
  [[18, 1, 2]],
]);
//# sourceMappingURL=main.0664fb5a.chunk.js.map
