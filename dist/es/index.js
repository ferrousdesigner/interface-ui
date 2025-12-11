import Gr, { useId as Qo, useRef as te, useCallback as Vr, useEffect as Z, useState as Ne, forwardRef as Ds, createElement as qi } from "react";
import { createPortal as Zo } from "react-dom";
var Hi = { exports: {} }, Cr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function Jo() {
  if (Hn) return Cr;
  Hn = 1;
  var a = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, i, n) {
    var s = null;
    if (n !== void 0 && (s = "" + n), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      n = {};
      for (var o in i)
        o !== "key" && (n[o] = i[o]);
    } else n = i;
    return i = n.ref, {
      $$typeof: a,
      type: r,
      key: s,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return Cr.Fragment = e, Cr.jsx = t, Cr.jsxs = t, Cr;
}
var Dr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function ea() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    function a(w) {
      if (w == null) return null;
      if (typeof w == "function")
        return w.$$typeof === O ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case y:
          return "Fragment";
        case b:
          return "Profiler";
        case v:
          return "StrictMode";
        case D:
          return "Suspense";
        case k:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof w == "object")
        switch (typeof w.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), w.$$typeof) {
          case h:
            return "Portal";
          case P:
            return w.displayName || "Context";
          case S:
            return (w._context.displayName || "Context") + ".Consumer";
          case m:
            var N = w.render;
            return w = w.displayName, w || (w = N.displayName || N.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
          case T:
            return N = w.displayName || null, N !== null ? N : a(w.type) || "Memo";
          case R:
            N = w._payload, w = w._init;
            try {
              return a(w(N));
            } catch {
            }
        }
      return null;
    }
    function e(w) {
      return "" + w;
    }
    function t(w) {
      try {
        e(w);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var V = N.error, B = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return V.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), e(w);
      }
    }
    function r(w) {
      if (w === y) return "<>";
      if (typeof w == "object" && w !== null && w.$$typeof === R)
        return "<...>";
      try {
        var N = a(w);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var w = Y.A;
      return w === null ? null : w.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function s(w) {
      if (A.call(w, "key")) {
        var N = Object.getOwnPropertyDescriptor(w, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return w.key !== void 0;
    }
    function o(w, N) {
      function V() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(w, "key", {
        get: V,
        configurable: !0
      });
    }
    function c() {
      var w = a(this.type);
      return L[w] || (L[w] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), w = this.props.ref, w !== void 0 ? w : null;
    }
    function u(w, N, V, B, de, _e) {
      var re = V.ref;
      return w = {
        $$typeof: g,
        type: w,
        key: N,
        props: V,
        _owner: B
      }, (re !== void 0 ? re : null) !== null ? Object.defineProperty(w, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(w, "ref", { enumerable: !1, value: null }), w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(w, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(w, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.defineProperty(w, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _e
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    }
    function d(w, N, V, B, de, _e) {
      var re = N.children;
      if (re !== void 0)
        if (B)
          if (H(re)) {
            for (B = 0; B < re.length; B++)
              f(re[B]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(re);
      if (A.call(N, "key")) {
        re = a(w);
        var ie = Object.keys(N).filter(function(dt) {
          return dt !== "key";
        });
        B = 0 < ie.length ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}", q[re + B] || (ie = 0 < ie.length ? "{" + ie.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          re,
          ie,
          re
        ), q[re + B] = !0);
      }
      if (re = null, V !== void 0 && (t(V), re = "" + V), s(N) && (t(N.key), re = "" + N.key), "key" in N) {
        V = {};
        for (var Be in N)
          Be !== "key" && (V[Be] = N[Be]);
      } else V = N;
      return re && o(
        V,
        typeof w == "function" ? w.displayName || w.name || "Unknown" : w
      ), u(
        w,
        re,
        V,
        i(),
        de,
        _e
      );
    }
    function f(w) {
      _(w) ? w._store && (w._store.validated = 1) : typeof w == "object" && w !== null && w.$$typeof === R && (w._payload.status === "fulfilled" ? _(w._payload.value) && w._payload.value._store && (w._payload.value._store.validated = 1) : w._store && (w._store.validated = 1));
    }
    function _(w) {
      return typeof w == "object" && w !== null && w.$$typeof === g;
    }
    var l = Gr, g = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), P = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), Y = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, H = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(w) {
        return w();
      }
    };
    var G, L = {}, I = l.react_stack_bottom_frame.bind(
      l,
      n
    )(), W = U(r(n)), q = {};
    Dr.Fragment = y, Dr.jsx = function(w, N, V) {
      var B = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        w,
        N,
        V,
        !1,
        B ? Error("react-stack-top-frame") : I,
        B ? U(r(w)) : W
      );
    }, Dr.jsxs = function(w, N, V) {
      var B = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return d(
        w,
        N,
        V,
        !0,
        B ? Error("react-stack-top-frame") : I,
        B ? U(r(w)) : W
      );
    };
  }()), Dr;
}
process.env.NODE_ENV === "production" ? Hi.exports = Jo() : Hi.exports = ea();
var p = Hi.exports;
const ye = ({
  children: a,
  width: e = 200,
  height: t = 60,
  borderRadius: r = 30,
  borderWidth: i = 0.09,
  brightness: n = 50,
  opacity: s = 0.8,
  blur: o = 8,
  displace: c = 0.5,
  backgroundOpacity: u = 0.1,
  saturation: d = 1,
  distortionScale: f = -180,
  redOffset: _ = 0,
  greenOffset: l = 2,
  blueOffset: g = 2,
  xChannel: h = "R",
  yChannel: y = "G",
  mixBlendMode: v = "difference",
  hugWidth: b = !1,
  className: S = "",
  style: P = {}
}) => {
  const m = Qo(), D = `glass-filter-${m}`, k = `red-grad-${m}`, T = `blue-grad-${m}`, R = te(null), C = te(null), O = te(null), Y = te(null), A = te(null), H = te(null), U = Vr(() => {
    var B;
    const W = (B = R.current) == null ? void 0 : B.getBoundingClientRect();
    if (!W || W.width === 0 || W.height === 0)
      return;
    const q = W.width, w = W.height, N = Math.min(q, w) * (i * 0.5), V = `
      <svg viewBox="0 0 ${q} ${w}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${k}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${T}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${q}" height="${w}" fill="black"></rect>
        <rect x="0" y="0" width="${q}" height="${w}" rx="${r}" fill="url(#${k})" />
        <rect x="0" y="0" width="${q}" height="${w}" rx="${r}" fill="url(#${T})" style="mix-blend-mode: ${v}" />
        <rect x="${N}" y="${N}" width="${q - N * 2}" height="${w - N * 2}" rx="${r}" fill="hsl(0 0% ${n}% / ${s})" style="filter:blur(${o}px)" />
      </svg>
    `;
    return `data:image/svg+xml,${encodeURIComponent(V)}`;
  }, [
    r,
    i,
    n,
    s,
    o,
    v,
    k,
    T
  ]), G = Vr(() => {
    if (!C.current) return;
    const W = U();
    W && C.current.setAttribute("href", W);
  }, [U]);
  Z(() => {
    const W = requestAnimationFrame(() => {
      var q;
      G(), [
        { ref: O, offset: _ },
        { ref: Y, offset: l },
        { ref: A, offset: g }
      ].forEach(({ ref: w, offset: N }) => {
        w.current && (w.current.setAttribute(
          "scale",
          (f + N).toString()
        ), w.current.setAttribute("xChannelSelector", h), w.current.setAttribute("yChannelSelector", y));
      }), (q = H.current) == null || q.setAttribute(
        "stdDeviation",
        c.toString()
      );
    });
    return () => cancelAnimationFrame(W);
  }, [
    G,
    c,
    f,
    _,
    l,
    g,
    h,
    y
  ]), Z(() => {
    if (!R.current) return;
    let W = null, q = null;
    const w = () => {
      q !== null && clearTimeout(q), q = setTimeout(() => {
        W !== null && cancelAnimationFrame(W), W = requestAnimationFrame(() => {
          G(), W = null;
        });
      }, 100);
    }, N = new ResizeObserver(w);
    return N.observe(R.current), () => {
      q !== null && clearTimeout(q), W !== null && cancelAnimationFrame(W), N.disconnect();
    };
  }, [G]), Z(() => {
    const W = requestAnimationFrame(() => {
      G();
    });
    return () => cancelAnimationFrame(W);
  }, [e, t]);
  const L = () => {
    const W = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent), q = /Firefox/.test(navigator.userAgent);
    if (W || q)
      return !1;
    const w = document.createElement("div");
    return w.style.backdropFilter = `url(#${D})`, w.style.backdropFilter !== "";
  }, I = {
    ...P,
    width: b ? "auto" : typeof e == "number" ? `${e}px` : e,
    height: typeof t == "number" ? `${t}px` : t,
    borderRadius: `${r}px`,
    display: b ? "inline-flex" : "flex",
    "--glass-frost": u,
    "--glass-saturation": d,
    "--filter-id": `url(#${D})`,
    border: `1px solid rgba(255, 255, 255, ${i})`
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      ref: R,
      className: `glass-surface ${L() ? "glass-surface--svg" : "glass-surface--fallback"} ${S}`,
      style: I,
      children: [
        /* @__PURE__ */ p.jsx("svg", { className: "glass-surface__filter", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ p.jsx("defs", { children: /* @__PURE__ */ p.jsxs(
          "filter",
          {
            id: D,
            colorInterpolationFilters: "sRGB",
            x: "0%",
            y: "0%",
            width: "100%",
            height: "100%",
            children: [
              /* @__PURE__ */ p.jsx(
                "feImage",
                {
                  ref: C,
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  preserveAspectRatio: "none",
                  result: "map"
                }
              ),
              /* @__PURE__ */ p.jsx(
                "feDisplacementMap",
                {
                  ref: O,
                  in: "SourceGraphic",
                  in2: "map",
                  id: "redchannel",
                  result: "dispRed"
                }
              ),
              /* @__PURE__ */ p.jsx(
                "feColorMatrix",
                {
                  in: "dispRed",
                  type: "matrix",
                  values: `1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0`,
                  result: "red"
                }
              ),
              /* @__PURE__ */ p.jsx(
                "feDisplacementMap",
                {
                  ref: Y,
                  in: "SourceGraphic",
                  in2: "map",
                  id: "greenchannel",
                  result: "dispGreen"
                }
              ),
              /* @__PURE__ */ p.jsx(
                "feColorMatrix",
                {
                  in: "dispGreen",
                  type: "matrix",
                  values: `0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0`,
                  result: "green"
                }
              ),
              /* @__PURE__ */ p.jsx(
                "feDisplacementMap",
                {
                  ref: A,
                  in: "SourceGraphic",
                  in2: "map",
                  id: "bluechannel",
                  result: "dispBlue"
                }
              ),
              /* @__PURE__ */ p.jsx(
                "feColorMatrix",
                {
                  in: "dispBlue",
                  type: "matrix",
                  values: `0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0`,
                  result: "blue"
                }
              ),
              /* @__PURE__ */ p.jsx("feBlend", { in: "red", in2: "green", mode: "screen", result: "rg" }),
              /* @__PURE__ */ p.jsx("feBlend", { in: "rg", in2: "blue", mode: "screen", result: "output" }),
              /* @__PURE__ */ p.jsx(
                "feGaussianBlur",
                {
                  ref: H,
                  in: "output",
                  stdDeviation: "0.7"
                }
              )
            ]
          }
        ) }) }),
        /* @__PURE__ */ p.jsx("div", { className: "glass-surface__content", children: a })
      ]
    }
  );
}, ec = ({
  children: a,
  onClick: e,
  variant: t = "primary"
}) => /* @__PURE__ */ p.jsx(
  ye,
  {
    borderRadius: 999,
    height: 40,
    hugWidth: !0,
    className: "button-wrapper",
    children: /* @__PURE__ */ p.jsx("button", { className: `button ${t}`, onClick: e, children: a })
  }
), tc = ({
  label: a,
  placeholder: e,
  value: t,
  defaultValue: r,
  type: i = "text",
  disabled: n = !1,
  required: s = !1,
  variant: o = "default",
  error: c,
  helperText: u,
  onChange: d,
  onBlur: f,
  onFocus: _,
  name: l,
  id: g
}) => {
  const h = g || `input-${Math.random().toString(36).substr(2, 9)}`, y = o === "error" || !!c, v = c || u;
  return /* @__PURE__ */ p.jsxs("div", { className: "input-wrapper", children: [
    a && /* @__PURE__ */ p.jsxs("label", { htmlFor: h, className: "input-label", children: [
      a,
      s && /* @__PURE__ */ p.jsx("span", { className: "input-required", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsx(ye, { hugWidth: !0, height: 50, children: /* @__PURE__ */ p.jsx(
      "input",
      {
        id: h,
        name: l,
        type: i,
        value: t,
        defaultValue: r,
        placeholder: e,
        disabled: n,
        required: s,
        className: `input ${o} ${y ? "error" : ""} ${n ? "disabled" : ""}`,
        onChange: d,
        onBlur: f,
        onFocus: _,
        "aria-invalid": y,
        "aria-describedby": v ? `${h}-helper` : void 0
      }
    ) }),
    v && /* @__PURE__ */ p.jsx(
      "span",
      {
        id: `${h}-helper`,
        className: `input-helper ${y ? "error" : ""}`,
        children: v
      }
    )
  ] });
}, rc = ({
  label: a,
  placeholder: e,
  value: t,
  defaultValue: r,
  rows: i = 4,
  disabled: n = !1,
  required: s = !1,
  resizable: o = !0,
  maxLength: c,
  variant: u = "default",
  error: d,
  helperText: f,
  onChange: _,
  onBlur: l,
  onFocus: g,
  name: h,
  id: y
}) => {
  const v = y || `textarea-${Math.random().toString(36).substr(2, 9)}`, b = u === "error" || !!d, S = d || f, P = (t == null ? void 0 : t.length) || 0;
  return /* @__PURE__ */ p.jsxs("div", { className: "textarea-wrapper", children: [
    a && /* @__PURE__ */ p.jsxs("label", { htmlFor: v, className: "textarea-label", children: [
      a,
      s && /* @__PURE__ */ p.jsx("span", { className: "textarea-required", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsx(ye, { hugWidth: !0, height: 100, children: /* @__PURE__ */ p.jsx(
      "textarea",
      {
        id: v,
        name: h,
        value: t,
        defaultValue: r,
        placeholder: e,
        rows: i,
        disabled: n,
        required: s,
        maxLength: c,
        className: `textarea ${u} ${b ? "error" : ""} ${n ? "disabled" : ""} ${o ? "" : "no-resize"}`,
        onChange: _,
        onBlur: l,
        onFocus: g,
        "aria-invalid": b,
        "aria-describedby": S || c ? `${v}-helper` : void 0
      }
    ) }),
    (S || c) && /* @__PURE__ */ p.jsxs("div", { className: "textarea-footer", children: [
      S && /* @__PURE__ */ p.jsx(
        "span",
        {
          id: `${v}-helper`,
          className: `textarea-helper ${b ? "error" : ""}`,
          children: S
        }
      ),
      c && /* @__PURE__ */ p.jsxs("span", { className: "textarea-counter", children: [
        P,
        " / ",
        c
      ] })
    ] })
  ] });
}, ic = ({
  label: a,
  checked: e,
  defaultChecked: t,
  disabled: r = !1,
  required: i = !1,
  indeterminate: n = !1,
  onChange: s,
  name: o,
  id: c,
  value: u
}) => {
  const d = c || `checkbox-${Math.random().toString(36).substr(2, 9)}`, f = Gr.useRef(null), _ = te(null), [l, g] = Ne(!1);
  return Gr.useEffect(() => {
    f.current && (f.current.indeterminate = n);
  }, [n]), Z(() => {
    const h = _.current;
    if (!h || r) return;
    const y = () => {
      g(!0);
    }, v = () => {
      setTimeout(() => g(!1), 150);
    }, b = () => {
      g(!1);
    };
    return h.addEventListener("mousedown", y), h.addEventListener("mouseup", v), h.addEventListener("mouseleave", b), () => {
      h.removeEventListener("mousedown", y), h.removeEventListener("mouseup", v), h.removeEventListener("mouseleave", b);
    };
  }, [r]), /* @__PURE__ */ p.jsxs("div", { className: "checkbox-wrapper", children: [
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: _,
        className: `checkbox-glass-wrapper ${l ? "active" : ""}`,
        "data-active": l,
        children: [
          /* @__PURE__ */ p.jsx(
            ye,
            {
              height: 18,
              width: 18,
              borderRadius: 4,
              className: "checkbox-glass-surface",
              children: /* @__PURE__ */ p.jsx(
                "input",
                {
                  ref: f,
                  id: d,
                  type: "checkbox",
                  name: o,
                  value: u,
                  checked: e,
                  defaultChecked: t,
                  disabled: r,
                  required: i,
                  onChange: s,
                  className: "checkbox-input",
                  "aria-checked": n ? "mixed" : e,
                  "aria-required": i
                }
              )
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "checkbox-glass-shadow" }),
          /* @__PURE__ */ p.jsx("div", { className: "checkbox-glass-cover" })
        ]
      }
    ),
    a && /* @__PURE__ */ p.jsxs(
      "label",
      {
        htmlFor: d,
        className: `checkbox-label ${r ? "disabled" : ""}`,
        children: [
          a,
          i && /* @__PURE__ */ p.jsx("span", { className: "checkbox-required", children: "*" })
        ]
      }
    )
  ] });
}, nc = ({
  label: a,
  checked: e,
  defaultChecked: t,
  disabled: r = !1,
  required: i = !1,
  onChange: n,
  name: s,
  id: o,
  value: c
}) => {
  const u = o || `radio-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ p.jsxs("div", { className: "radio-wrapper", children: [
    /* @__PURE__ */ p.jsx(
      ye,
      {
        height: 18,
        width: 18,
        borderRadius: 20,
        className: "radio-glass-surface",
        children: /* @__PURE__ */ p.jsx(
          "input",
          {
            id: u,
            type: "radio",
            name: s,
            value: c,
            checked: e,
            defaultChecked: t,
            disabled: r,
            required: i,
            onChange: n,
            className: "radio-input",
            "aria-checked": e,
            "aria-required": i
          }
        )
      }
    ),
    a && /* @__PURE__ */ p.jsxs(
      "label",
      {
        htmlFor: u,
        className: `radio-label ${r ? "disabled" : ""}`,
        children: [
          a,
          i && /* @__PURE__ */ p.jsx("span", { className: "radio-required", children: "*" })
        ]
      }
    )
  ] });
};
function yt(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Rs(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var We = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, gr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, yn, Ce, ue, tt = 1e8, ce = 1 / tt, Ki = Math.PI * 2, ta = Ki / 4, ra = 0, Ms = Math.sqrt, ia = Math.cos, na = Math.sin, Se = function(e) {
  return typeof e == "string";
}, pe = function(e) {
  return typeof e == "function";
}, kt = function(e) {
  return typeof e == "number";
}, vn = function(e) {
  return typeof e > "u";
}, gt = function(e) {
  return typeof e == "object";
}, Ae = function(e) {
  return e !== !1;
}, bn = function() {
  return typeof window < "u";
}, si = function(e) {
  return pe(e) || Se(e);
}, Ns = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Me = Array.isArray, Qi = /(?:-?\.?\d|\.)+/gi, js = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ji = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Os = /[+-]=-?[.\d]+/, As = /[^,'"\[\]\s]+/gi, sa = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, fe, ht, Zi, wn, qe = {}, pi = {}, $s, Ls = function(e) {
  return (pi = mr(e, qe)) && Fe;
}, Tn = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Wr = function(e, t) {
  return !t && console.warn(e);
}, Is = function(e, t) {
  return e && (qe[e] = t) && pi && (pi[e] = t) || qe;
}, Ur = function() {
  return 0;
}, oa = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, li = {
  suppressEvents: !0,
  kill: !1
}, aa = {
  suppressEvents: !0
}, kn = {}, At = [], Ji = {}, Fs, Ye = {}, Oi = {}, Qn = 30, ci = [], Sn = "", En = function(e) {
  var t = e[0], r, i;
  if (gt(t) || pe(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (i = ci.length; i-- && !ci[i].targetTest(t); )
      ;
    r = ci[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new co(e[i], r))) || e.splice(i, 1);
  return e;
}, Kt = function(e) {
  return e._gsap || En(rt(e))[0]._gsap;
}, Bs = function(e, t, r) {
  return (r = e[t]) && pe(r) ? e[t]() : vn(r) && e.getAttribute && e.getAttribute(t) || r;
}, $e = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, xe = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, Te = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ur = function(e, t) {
  var r = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, la = function(e, t) {
  for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, _i = function() {
  var e = At.length, t = At.slice(0), r, i;
  for (Ji = {}, At.length = 0, r = 0; r < e; r++)
    i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Pn = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Xs = function(e, t, r, i) {
  At.length && !Ce && _i(), e.render(t, r, !!(Ce && t < 0 && Pn(e))), At.length && !Ce && _i();
}, Ys = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(As).length < 2 ? t : Se(e) ? e.trim() : e;
}, zs = function(e) {
  return e;
}, He = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, ca = function(e) {
  return function(t, r) {
    for (var i in r)
      i in t || i === "duration" && e || i === "ease" || (t[i] = r[i]);
  };
}, mr = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Zn = function a(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = gt(t[r]) ? a(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, gi = function(e, t) {
  var r = {}, i;
  for (i in e)
    i in t || (r[i] = e[i]);
  return r;
}, Ir = function(e) {
  var t = e.parent || fe, r = e.keyframes ? ca(Me(e.keyframes)) : He;
  if (Ae(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, ua = function(e, t) {
  for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, Gs = function(e, t, r, i, n) {
  var s = e[i], o;
  if (n)
    for (o = t[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t;
}, Ti = function(e, t, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = t._prev, s = t._next;
  n ? n._next = s : e[r] === t && (e[r] = s), s ? s._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null;
}, Lt = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Qt = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, da = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, en = function(e, t, r, i) {
  return e._startAt && (Ce ? e._startAt.revert(li) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, fa = function a(e) {
  return !e || e._ts && a(e.parent);
}, Jn = function(e) {
  return e._repeat ? xr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, xr = function(e, t) {
  var r = Math.floor(e = Te(e / t));
  return e && r === e ? r - 1 : r;
}, mi = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, ki = function(e) {
  return e._end = Te(e._start + (e._tDur / Math.abs(e._ts || e._rts || ce) || 0));
}, Si = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = Te(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ki(e), r._dirty || Qt(r, e)), e;
}, Vs = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = mi(e.rawTime(), t), (!t._dur || ti(0, t.totalDuration(), r) - t._tTime > ce) && t.render(r, !0)), Qt(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -ce;
  }
}, pt = function(e, t, r, i) {
  return t.parent && Lt(t), t._start = Te((kt(r) ? r : r || e !== fe ? et(e, r, t) : e._time) + t._delay), t._end = Te(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Gs(e, t, "_first", "_last", e._sort ? "_start" : 0), tn(t) || (e._recent = t), i || Vs(e, t), e._ts < 0 && Si(e, e._tTime), e;
}, Ws = function(e, t) {
  return (qe.ScrollTrigger || Tn("scrollTrigger", t)) && qe.ScrollTrigger.create(t, e);
}, Us = function(e, t, r, i, n) {
  if (Dn(e, t, n), !e._initted)
    return 1;
  if (!r && e._pt && !Ce && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Fs !== ze.frame)
    return At.push(e), e._lazy = [n, i], 1;
}, ha = function a(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || a(t));
}, tn = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, pa = function(e, t, r, i) {
  var n = e.ratio, s = t < 0 || !t && (!e._start && ha(e) && !(!e._initted && tn(e)) || (e._ts < 0 || e._dp._ts < 0) && !tn(e)) ? 0 : 1, o = e._rDelay, c = 0, u, d, f;
  if (o && e._repeat && (c = ti(0, e._tDur, t), d = xr(c, o), e._yoyo && d & 1 && (s = 1 - s), d !== xr(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Ce || i || e._zTime === ce || !t && e._zTime) {
    if (!e._initted && Us(e, t, i, r, c))
      return;
    for (f = e._zTime, e._zTime = t || (r ? ce : 0), r || (r = t && !f), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = c, u = e._pt; u; )
      u.r(s, u.d), u = u._next;
    t < 0 && en(e, t, r, !0), e._onUpdate && !r && Ve(e, "onUpdate"), c && e._repeat && !r && e.parent && Ve(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Lt(e, 1), !r && !Ce && (Ve(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, _a = function(e, t, r) {
  var i;
  if (r > t)
    for (i = e._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, yr = function(e, t, r, i) {
  var n = e._repeat, s = Te(t) || 0, o = e._tTime / e._tDur;
  return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : Te(s * (n + 1) + e._rDelay * n) : s, o > 0 && !i && Si(e, e._tTime = e._tDur * o), e.parent && ki(e), r || Qt(e.parent, e), e;
}, es = function(e) {
  return e instanceof je ? Qt(e) : yr(e, e._dur);
}, ga = {
  _start: 0,
  endTime: Ur,
  totalDuration: Ur
}, et = function a(e, t, r) {
  var i = e.labels, n = e._recent || ga, s = e.duration() >= tt ? n.endTime(!1) : e._dur, o, c, u;
  return Se(t) && (isNaN(t) || t in i) ? (c = t.charAt(0), u = t.substr(-1) === "%", o = t.indexOf("="), c === "<" || c === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (c === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (o < 0 ? n : r).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = s), i[t]) : (c = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), u && r && (c = c / 100 * (Me(r) ? r[0] : r).totalDuration()), o > 1 ? a(e, t.substr(0, o - 1), r) + c : s + c)) : t == null ? s : +t;
}, Fr = function(e, t, r) {
  var i = kt(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = t[n], o, c;
  if (i && (s.duration = t[1]), s.parent = r, e) {
    for (o = s, c = r; c && !("immediateRender" in o); )
      o = c.vars.defaults || {}, c = Ae(c.vars.inherit) && c.parent;
    s.immediateRender = Ae(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1];
  }
  return new we(t[0], s, t[n + 1]);
}, Ft = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, ti = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, Re = function(e, t) {
  return !Se(e) || !(t = sa.exec(e)) ? "" : t[1];
}, ma = function(e, t, r) {
  return Ft(r, function(i) {
    return ti(e, t, i);
  });
}, rn = [].slice, qs = function(e, t) {
  return e && gt(e) && "length" in e && (!t && !e.length || e.length - 1 in e && gt(e[0])) && !e.nodeType && e !== ht;
}, xa = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var n;
    return Se(i) && !t || qs(i, 1) ? (n = r).push.apply(n, rt(i)) : r.push(i);
  }) || r;
}, rt = function(e, t, r) {
  return ue && !t && ue.selector ? ue.selector(e) : Se(e) && !r && (Zi || !vr()) ? rn.call((t || wn).querySelectorAll(e), 0) : Me(e) ? xa(e, r) : qs(e) ? rn.call(e, 0) : e ? [e] : [];
}, nn = function(e) {
  return e = rt(e)[0] || Wr("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return rt(t, r.querySelectorAll ? r : r === e ? Wr("Invalid scope") || wn.createElement("div") : e);
  };
}, Hs = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Ks = function(e) {
  if (pe(e))
    return e;
  var t = gt(e) ? e : {
    each: e
  }, r = Zt(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, s = {}, o = i > 0 && i < 1, c = isNaN(i) || o, u = t.axis, d = i, f = i;
  return Se(i) ? d = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && c && (d = i[0], f = i[1]), function(_, l, g) {
    var h = (g || t).length, y = s[h], v, b, S, P, m, D, k, T, R;
    if (!y) {
      if (R = t.grid === "auto" ? 0 : (t.grid || [1, tt])[1], !R) {
        for (k = -tt; k < (k = g[R++].getBoundingClientRect().left) && R < h; )
          ;
        R < h && R--;
      }
      for (y = s[h] = [], v = c ? Math.min(R, h) * d - 0.5 : i % R, b = R === tt ? 0 : c ? h * f / R - 0.5 : i / R | 0, k = 0, T = tt, D = 0; D < h; D++)
        S = D % R - v, P = b - (D / R | 0), y[D] = m = u ? Math.abs(u === "y" ? P : S) : Ms(S * S + P * P), m > k && (k = m), m < T && (T = m);
      i === "random" && Hs(y), y.max = k - T, y.min = T, y.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (R > h ? h - 1 : u ? u === "y" ? h / R : R : Math.max(R, h / R)) || 0) * (i === "edges" ? -1 : 1), y.b = h < 0 ? n - h : n, y.u = Re(t.amount || t.each) || 0, r = r && h < 0 ? oo(r) : r;
    }
    return h = (y[_] - y.min) / y.max || 0, Te(y.b + (r ? r(h) : h) * y.v) + y.u;
  };
}, sn = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = Te(Math.round(parseFloat(r) / e) * e * t);
    return (i - i % 1) / t + (kt(r) ? 0 : Re(r));
  };
}, Qs = function(e, t) {
  var r = Me(e), i, n;
  return !r && gt(e) && (i = r = e.radius || tt, e.values ? (e = rt(e.values), (n = !kt(e[0])) && (i *= i)) : e = sn(e.increment)), Ft(t, r ? pe(e) ? function(s) {
    return n = e(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), c = parseFloat(n ? s.y : 0), u = tt, d = 0, f = e.length, _, l; f--; )
      n ? (_ = e[f].x - o, l = e[f].y - c, _ = _ * _ + l * l) : _ = Math.abs(e[f] - o), _ < u && (u = _, d = f);
    return d = !i || u <= i ? e[d] : s, n || d === s || kt(s) ? d : d + Re(s);
  } : sn(e));
}, Zs = function(e, t, r, i) {
  return Ft(Me(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
    return Me(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * i) / i;
  });
}, ya = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    return t.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, va = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || Re(r));
  };
}, ba = function(e, t, r) {
  return eo(e, t, 0, 1, r);
}, Js = function(e, t, r) {
  return Ft(r, function(i) {
    return e[~~t(i)];
  });
}, wa = function a(e, t, r) {
  var i = t - e;
  return Me(e) ? Js(e, a(0, e.length), t) : Ft(r, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, Ta = function a(e, t, r) {
  var i = t - e, n = i * 2;
  return Me(e) ? Js(e, a(0, e.length - 1), t) : Ft(r, function(s) {
    return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s);
  });
}, qr = function(e) {
  for (var t = 0, r = "", i, n, s, o; ~(i = e.indexOf("random(", t)); )
    s = e.indexOf(")", i), o = e.charAt(i + 7) === "[", n = e.substr(i + 7, s - i - 7).match(o ? As : Qi), r += e.substr(t, i - t) + Zs(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), t = s + 1;
  return r + e.substr(t, e.length - t);
}, eo = function(e, t, r, i, n) {
  var s = t - e, o = i - r;
  return Ft(n, function(c) {
    return r + ((c - e) / s * o || 0);
  });
}, ka = function a(e, t, r, i) {
  var n = isNaN(e + t) ? 0 : function(l) {
    return (1 - l) * e + l * t;
  };
  if (!n) {
    var s = Se(e), o = {}, c, u, d, f, _;
    if (r === !0 && (i = 1) && (r = null), s)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Me(e) && !Me(t)) {
      for (d = [], f = e.length, _ = f - 2, u = 1; u < f; u++)
        d.push(a(e[u - 1], e[u]));
      f--, n = function(g) {
        g *= f;
        var h = Math.min(_, ~~g);
        return d[h](g - h);
      }, r = t;
    } else i || (e = mr(Me(e) ? [] : {}, e));
    if (!d) {
      for (c in t)
        Cn.call(o, e, c, "get", t[c]);
      n = function(g) {
        return Nn(g, o) || (s ? e.p : e);
      };
    }
  }
  return Ft(r, n);
}, ts = function(e, t, r) {
  var i = e.labels, n = tt, s, o, c;
  for (s in i)
    o = i[s] - t, o < 0 == !!r && o && n > (o = Math.abs(o)) && (c = s, n = o);
  return c;
}, Ve = function(e, t, r) {
  var i = e.vars, n = i[t], s = ue, o = e._ctx, c, u, d;
  if (n)
    return c = i[t + "Params"], u = i.callbackScope || e, r && At.length && _i(), o && (ue = o), d = c ? n.apply(u, c) : n.call(u), ue = s, d;
}, Nr = function(e) {
  return Lt(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ce), e.progress() < 1 && Ve(e, "onInterrupt"), e;
}, cr, to = [], ro = function(e) {
  if (e)
    if (e = !e.name && e.default || e, bn() || e.headless) {
      var t = e.name, r = pe(e), i = t && !r && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: Ur,
        render: Nn,
        add: Cn,
        kill: Ba,
        modifier: Fa,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: Mn,
        aliases: {},
        register: 0
      };
      if (vr(), e !== i) {
        if (Ye[t])
          return;
        He(i, He(gi(e, n), s)), mr(i.prototype, mr(n, gi(e, s))), Ye[i.prop = t] = i, e.targetTest && (ci.push(i), kn[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Is(t, i), e.register && e.register(Fe, i, Le);
    } else
      to.push(e);
}, ae = 255, jr = {
  aqua: [0, ae, ae],
  lime: [0, ae, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ae],
  navy: [0, 0, 128],
  white: [ae, ae, ae],
  olive: [128, 128, 0],
  yellow: [ae, ae, 0],
  orange: [ae, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ae, 0, 0],
  pink: [ae, 192, 203],
  cyan: [0, ae, ae],
  transparent: [ae, ae, ae, 0]
}, Ai = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * ae + 0.5 | 0;
}, io = function(e, t, r) {
  var i = e ? kt(e) ? [e >> 16, e >> 8 & ae, e & ae] : 0 : jr.black, n, s, o, c, u, d, f, _, l, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), jr[e])
      i = jr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & ae, i & ae, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & ae, e & ae];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(Qi), !t)
        c = +i[0] % 360 / 360, u = +i[1] / 100, d = +i[2] / 100, s = d <= 0.5 ? d * (u + 1) : d + u - d * u, n = d * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Ai(c + 1 / 3, n, s), i[1] = Ai(c, n, s), i[2] = Ai(c - 1 / 3, n, s);
      else if (~e.indexOf("="))
        return i = e.match(js), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Qi) || jr.transparent;
    i = i.map(Number);
  }
  return t && !g && (n = i[0] / ae, s = i[1] / ae, o = i[2] / ae, f = Math.max(n, s, o), _ = Math.min(n, s, o), d = (f + _) / 2, f === _ ? c = u = 0 : (l = f - _, u = d > 0.5 ? l / (2 - f - _) : l / (f + _), c = f === n ? (s - o) / l + (s < o ? 6 : 0) : f === s ? (o - n) / l + 2 : (n - s) / l + 4, c *= 60), i[0] = ~~(c + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(d * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, no = function(e) {
  var t = [], r = [], i = -1;
  return e.split($t).forEach(function(n) {
    var s = n.match(lr) || [];
    t.push.apply(t, s), r.push(i += s.length + 1);
  }), t.c = r, t;
}, rs = function(e, t, r) {
  var i = "", n = (e + i).match($t), s = t ? "hsla(" : "rgba(", o = 0, c, u, d, f;
  if (!n)
    return e;
  if (n = n.map(function(_) {
    return (_ = io(_, t, 1)) && s + (t ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), r && (d = no(e), c = r.c, c.join(i) !== d.c.join(i)))
    for (u = e.replace($t, "1").split(lr), f = u.length - 1; o < f; o++)
      i += u[o] + (~c.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (d.length ? d : n.length ? n : r).shift());
  if (!u)
    for (u = e.split($t), f = u.length - 1; o < f; o++)
      i += u[o] + n[o];
  return i + u[f];
}, $t = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in jr)
    a += "|" + e + "\\b";
  return new RegExp(a + ")", "gi");
}(), Sa = /hsl[a]?\(/, so = function(e) {
  var t = e.join(" "), r;
  if ($t.lastIndex = 0, $t.test(t))
    return r = Sa.test(t), e[1] = rs(e[1], r), e[0] = rs(e[0], r, no(e[1])), !0;
}, Hr, ze = function() {
  var a = Date.now, e = 500, t = 33, r = a(), i = r, n = 1e3 / 240, s = n, o = [], c, u, d, f, _, l, g = function h(y) {
    var v = a() - i, b = y === !0, S, P, m, D;
    if ((v > e || v < 0) && (r += v - t), i += v, m = i - r, S = m - s, (S > 0 || b) && (D = ++f.frame, _ = m - f.time * 1e3, f.time = m = m / 1e3, s += S + (S >= n ? 4 : n - S), P = 1), b || (c = u(h)), P)
      for (l = 0; l < o.length; l++)
        o[l](m, _, D, y);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(y) {
      return _ / (1e3 / (y || 60));
    },
    wake: function() {
      $s && (!Zi && bn() && (ht = Zi = window, wn = ht.document || {}, qe.gsap = Fe, (ht.gsapVersions || (ht.gsapVersions = [])).push(Fe.version), Ls(pi || ht.GreenSockGlobals || !ht.gsap && ht || {}), to.forEach(ro)), d = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && f.sleep(), u = d || function(y) {
        return setTimeout(y, s - f.time * 1e3 + 1 | 0);
      }, Hr = 1, g(2));
    },
    sleep: function() {
      (d ? cancelAnimationFrame : clearTimeout)(c), Hr = 0, u = Ur;
    },
    lagSmoothing: function(y, v) {
      e = y || 1 / 0, t = Math.min(v || 33, e);
    },
    fps: function(y) {
      n = 1e3 / (y || 240), s = f.time * 1e3 + n;
    },
    add: function(y, v, b) {
      var S = v ? function(P, m, D, k) {
        y(P, m, D, k), f.remove(S);
      } : y;
      return f.remove(y), o[b ? "unshift" : "push"](S), vr(), S;
    },
    remove: function(y, v) {
      ~(v = o.indexOf(y)) && o.splice(v, 1) && l >= v && l--;
    },
    _listeners: o
  }, f;
}(), vr = function() {
  return !Hr && ze.wake();
}, J = {}, Ea = /^[\d.\-M][\d.\-,\s]/, Pa = /["']/g, Ca = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, o, c, u; n < s; n++)
    c = r[n], o = n !== s - 1 ? c.lastIndexOf(",") : c.length, u = c.substr(0, o), t[i] = isNaN(u) ? u.replace(Pa, "").trim() : +u, i = c.substr(o + 1).trim();
  return t;
}, Da = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, Ra = function(e) {
  var t = (e + "").split("("), r = J[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Ca(t[1])] : Da(e).split(",").map(Ys)) : J._CE && Ea.test(e) ? J._CE("", e) : r;
}, oo = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, ao = function a(e, t) {
  for (var r = e._first, i; r; )
    r instanceof je ? a(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? a(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next;
}, Zt = function(e, t) {
  return e && (pe(e) ? e : J[e] || Ra(e)) || t;
}, nr = function(e, t, r, i) {
  r === void 0 && (r = function(c) {
    return 1 - t(1 - c);
  }), i === void 0 && (i = function(c) {
    return c < 0.5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2;
  });
  var n = {
    easeIn: t,
    easeOut: r,
    easeInOut: i
  }, s;
  return $e(e, function(o) {
    J[o] = qe[o] = n, J[s = o.toLowerCase()] = r;
    for (var c in n)
      J[s + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = J[o + "." + c] = n[c];
  }), n;
}, lo = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, $i = function a(e, t, r) {
  var i = t >= 1 ? t : 1, n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), s = n / Ki * (Math.asin(1 / i) || 0), o = function(d) {
    return d === 1 ? 1 : i * Math.pow(2, -10 * d) * na((d - s) * n) + 1;
  }, c = e === "out" ? o : e === "in" ? function(u) {
    return 1 - o(1 - u);
  } : lo(o);
  return n = Ki / n, c.config = function(u, d) {
    return a(e, u, d);
  }, c;
}, Li = function a(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((t + 1) * s + t) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(n) {
    return 1 - r(1 - n);
  } : lo(r);
  return i.config = function(n) {
    return a(e, n);
  }, i;
};
$e("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, e) {
  var t = e < 5 ? e + 1 : e;
  nr(a + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
J.Linear.easeNone = J.none = J.Linear.easeIn;
nr("Elastic", $i("in"), $i("out"), $i());
(function(a, e) {
  var t = 1 / e, r = 2 * t, i = 2.5 * t, n = function(o) {
    return o < t ? a * o * o : o < r ? a * Math.pow(o - 1.5 / e, 2) + 0.75 : o < i ? a * (o -= 2.25 / e) * o + 0.9375 : a * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  nr("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
nr("Expo", function(a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
nr("Circ", function(a) {
  return -(Ms(1 - a * a) - 1);
});
nr("Sine", function(a) {
  return a === 1 ? 1 : -ia(a * ta) + 1;
});
nr("Back", Li("in"), Li("out"), Li());
J.SteppedEase = J.steps = qe.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (t ? 0 : 1), n = t ? 1 : 0, s = 1 - ce;
    return function(o) {
      return ((i * ti(0, s, o) | 0) + n) * r;
    };
  }
};
gr.ease = J["quad.out"];
$e("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return Sn += a + "," + a + "Params,";
});
var co = function(e, t) {
  this.id = ra++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Bs, this.set = t ? t.getSetter : Mn;
}, Kr = /* @__PURE__ */ function() {
  function a(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, yr(this, +t.duration, 1, 1), this.data = t.data, ue && (this._ctx = ue, ue.data.push(this)), Hr || ze.wake();
  }
  var e = a.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, yr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (vr(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Si(this, r), !n._dp || n.parent || Vs(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && pt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ce || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Xs(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Jn(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Jn(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? xr(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -ce ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? mi(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -ce ? 0 : this._rts, this.totalTime(ti(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), ki(this), da(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (vr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ce && (this._tTime -= ce)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && pt(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (Ae(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? mi(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = aa);
    var i = Ce;
    return Ce = r, Pn(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Ce = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, es(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, es(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(et(this, r), Ae(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, Ae(i)), this._dur || (this._zTime = -ce), this;
  }, e.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ce : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ce, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - ce);
  }, e.eventCallback = function(r, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r];
  }, e.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var s = pe(r) ? r : zs, o = function() {
        var u = i.then;
        i.then = null, pe(s) && (s = s(i)) && (s.then || s === i) && (i.then = u), n(s), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, e.kill = function() {
    Nr(this);
  }, a;
}();
He(Kr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ce,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var je = /* @__PURE__ */ function(a) {
  Rs(e, a);
  function e(r, i) {
    var n;
    return r === void 0 && (r = {}), n = a.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = Ae(r.sortChildren), fe && pt(r.parent || fe, yt(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Ws(yt(n), r.scrollTrigger), n;
  }
  var t = e.prototype;
  return t.to = function(i, n, s) {
    return Fr(0, arguments, this), this;
  }, t.from = function(i, n, s) {
    return Fr(1, arguments, this), this;
  }, t.fromTo = function(i, n, s, o) {
    return Fr(2, arguments, this), this;
  }, t.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, Ir(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new we(i, n, et(this, s), 1), this;
  }, t.call = function(i, n, s) {
    return pt(this, we.delayedCall(0, i, n), s);
  }, t.staggerTo = function(i, n, s, o, c, u, d) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = u, s.onCompleteParams = d, s.parent = this, new we(i, s, et(this, c)), this;
  }, t.staggerFrom = function(i, n, s, o, c, u, d) {
    return s.runBackwards = 1, Ir(s).immediateRender = Ae(s.immediateRender), this.staggerTo(i, n, s, o, c, u, d);
  }, t.staggerFromTo = function(i, n, s, o, c, u, d, f) {
    return o.startAt = s, Ir(o).immediateRender = Ae(o.immediateRender), this.staggerTo(i, n, o, c, u, d, f);
  }, t.render = function(i, n, s) {
    var o = this._time, c = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, d = i <= 0 ? 0 : Te(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), _, l, g, h, y, v, b, S, P, m, D, k;
    if (this !== fe && d > c && i >= 0 && (d = c), d !== this._tTime || s || f) {
      if (o !== this._time && u && (d += this._time - o, i += this._time - o), _ = d, P = this._start, S = this._ts, v = !S, f && (u || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (D = this._yoyo, y = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(y * 100 + i, n, s);
        if (_ = Te(d % y), d === c ? (h = this._repeat, _ = u) : (m = Te(d / y), h = ~~m, h && h === m && (_ = u, h--), _ > u && (_ = u)), m = xr(this._tTime, y), !o && this._tTime && m !== h && this._tTime - m * y - this._dur <= 0 && (m = h), D && h & 1 && (_ = u - _, k = 1), h !== m && !this._lock) {
          var T = D && m & 1, R = T === (D && h & 1);
          if (h < m && (T = !T), o = T ? 0 : d % u ? u : d, this._lock = 1, this.render(o || (k ? 0 : Te(h * y)), n, !u)._lock = 0, this._tTime = d, !n && this.parent && Ve(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), o && o !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, c = this._tDur, R && (this._lock = 2, o = T ? u : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          ao(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (b = _a(this, Te(o), Te(_)), b && (d -= _ - (_ = b._start))), this._tTime = d, this._time = _, this._act = !S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && d && !n && !m && (Ve(this, "onStart"), this._tTime !== d))
        return this;
      if (_ >= o && i >= 0)
        for (l = this._first; l; ) {
          if (g = l._next, (l._act || _ >= l._start) && l._ts && b !== l) {
            if (l.parent !== this)
              return this.render(i, n, s);
            if (l.render(l._ts > 0 ? (_ - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (_ - l._start) * l._ts, n, s), _ !== this._time || !this._ts && !v) {
              b = 0, g && (d += this._zTime = -ce);
              break;
            }
          }
          l = g;
        }
      else {
        l = this._last;
        for (var C = i < 0 ? i : _; l; ) {
          if (g = l._prev, (l._act || C <= l._end) && l._ts && b !== l) {
            if (l.parent !== this)
              return this.render(i, n, s);
            if (l.render(l._ts > 0 ? (C - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (C - l._start) * l._ts, n, s || Ce && Pn(l)), _ !== this._time || !this._ts && !v) {
              b = 0, g && (d += this._zTime = C ? -ce : ce);
              break;
            }
          }
          l = g;
        }
      }
      if (b && !n && (this.pause(), b.render(_ >= o ? 0 : -ce)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = P, ki(this), this.render(i, n, s);
      this._onUpdate && !n && Ve(this, "onUpdate", !0), (d === c && this._tTime >= this.totalDuration() || !d && o) && (P === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (d === c && this._ts > 0 || !d && this._ts < 0) && Lt(this, 1), !n && !(i < 0 && !o) && (d || o || !c) && (Ve(this, d === c && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < c && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var s = this;
    if (kt(n) || (n = et(this, n, i)), !(i instanceof Kr)) {
      if (Me(i))
        return i.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (Se(i))
        return this.addLabel(i, n);
      if (pe(i))
        i = we.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? pt(this, i, n) : this;
  }, t.getChildren = function(i, n, s, o) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -tt);
    for (var c = [], u = this._first; u; )
      u._start >= o && (u instanceof we ? n && c.push(u) : (s && c.push(u), i && c.push.apply(c, u.getChildren(!0, n, s)))), u = u._next;
    return c;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, t.remove = function(i) {
    return Se(i) ? this.removeLabel(i) : pe(i) ? this.killTweensOf(i) : (i.parent === this && Ti(this, i), i === this._recent && (this._recent = this._last), Qt(this));
  }, t.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Te(ze.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, n) {
    return this.labels[i] = et(this, n), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, n, s) {
    var o = we.delayedCall(0, n || Ur, s);
    return o.data = "isPause", this._hasPause = 1, pt(this, o, et(this, i));
  }, t.removePause = function(i) {
    var n = this._first;
    for (i = et(this, i); n; )
      n._start === i && n.data === "isPause" && Lt(n), n = n._next;
  }, t.killTweensOf = function(i, n, s) {
    for (var o = this.getTweensOf(i, s), c = o.length; c--; )
      Mt !== o[c] && o[c].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var s = [], o = rt(i), c = this._first, u = kt(n), d; c; )
      c instanceof we ? la(c._targets, o) && (u ? (!Mt || c._initted && c._ts) && c.globalTime(0) <= n && c.globalTime(c.totalDuration()) > n : !n || c.isActive()) && s.push(c) : (d = c.getTweensOf(o, n)).length && s.push.apply(s, d), c = c._next;
    return s;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var s = this, o = et(s, i), c = n, u = c.startAt, d = c.onStart, f = c.onStartParams, _ = c.immediateRender, l, g = we.to(s, He({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || ce,
      onStart: function() {
        if (s.pause(), !l) {
          var y = n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale());
          g._dur !== y && yr(g, y, 0, 1).render(g._time, !0, !0), l = 1;
        }
        d && d.apply(g, f || []);
      }
    }, n));
    return _ ? g.render(0) : g;
  }, t.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, He({
      startAt: {
        time: et(this, i)
      }
    }, s));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), ts(this, et(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), ts(this, et(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ce);
  }, t.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var o = this._first, c = this.labels, u; o; )
      o._start >= s && (o._start += i, o._end += i), o = o._next;
    if (n)
      for (u in c)
        c[u] >= s && (c[u] += i);
    return Qt(this);
  }, t.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return a.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Qt(this);
  }, t.totalDuration = function(i) {
    var n = 0, s = this, o = s._last, c = tt, u, d, f;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (f = s.parent; o; )
        u = o._prev, o._dirty && o.totalDuration(), d = o._start, d > c && s._sort && o._ts && !s._lock ? (s._lock = 1, pt(s, o, d - o._delay, 1)._lock = 0) : c = d, d < 0 && o._ts && (n -= d, (!f && !s._dp || f && f.smoothChildTiming) && (s._start += d / s._ts, s._time -= d, s._tTime -= d), s.shiftChildren(-d, !1, -1 / 0), c = 0), o._end > n && o._ts && (n = o._end), o = u;
      yr(s, s === fe && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, e.updateRoot = function(i) {
    if (fe._ts && (Xs(fe, mi(i, fe)), Fs = ze.frame), ze.frame >= Qn) {
      Qn += We.autoSleep || 120;
      var n = fe._first;
      if ((!n || !n._ts) && We.autoSleep && ze._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || ze.sleep();
      }
    }
  }, e;
}(Kr);
He(je.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Ma = function(e, t, r, i, n, s, o) {
  var c = new Le(this._pt, e, t, 0, 1, go, null, n), u = 0, d = 0, f, _, l, g, h, y, v, b;
  for (c.b = r, c.e = i, r += "", i += "", (v = ~i.indexOf("random(")) && (i = qr(i)), s && (b = [r, i], s(b, e, t), r = b[0], i = b[1]), _ = r.match(ji) || []; f = ji.exec(i); )
    g = f[0], h = i.substring(u, f.index), l ? l = (l + 1) % 5 : h.substr(-5) === "rgba(" && (l = 1), g !== _[d++] && (y = parseFloat(_[d - 1]) || 0, c._pt = {
      _next: c._pt,
      p: h || d === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: y,
      c: g.charAt(1) === "=" ? ur(y, g) - y : parseFloat(g) - y,
      m: l && l < 4 ? Math.round : 0
    }, u = ji.lastIndex);
  return c.c = u < i.length ? i.substring(u, i.length) : "", c.fp = o, (Os.test(i) || v) && (c.e = 0), this._pt = c, c;
}, Cn = function(e, t, r, i, n, s, o, c, u, d) {
  pe(i) && (i = i(n || 0, e, s));
  var f = e[t], _ = r !== "get" ? r : pe(f) ? u ? e[t.indexOf("set") || !pe(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : f, l = pe(f) ? u ? $a : po : Rn, g;
  if (Se(i) && (~i.indexOf("random(") && (i = qr(i)), i.charAt(1) === "=" && (g = ur(_, i) + (Re(_) || 0), (g || g === 0) && (i = g))), !d || _ !== i || on)
    return !isNaN(_ * i) && i !== "" ? (g = new Le(this._pt, e, t, +_ || 0, i - (_ || 0), typeof f == "boolean" ? Ia : _o, 0, l), u && (g.fp = u), o && g.modifier(o, this, e), this._pt = g) : (!f && !(t in e) && Tn(t, i), Ma.call(this, e, t, _, i, l, c || We.stringFilter, u));
}, Na = function(e, t, r, i, n) {
  if (pe(e) && (e = Br(e, n, t, r, i)), !gt(e) || e.style && e.nodeType || Me(e) || Ns(e))
    return Se(e) ? Br(e, n, t, r, i) : e;
  var s = {}, o;
  for (o in e)
    s[o] = Br(e[o], n, t, r, i);
  return s;
}, uo = function(e, t, r, i, n, s) {
  var o, c, u, d;
  if (Ye[e] && (o = new Ye[e]()).init(n, o.rawVars ? t[e] : Na(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = c = new Le(r._pt, n, e, 0, 1, o.render, o, 0, o.priority), r !== cr))
    for (u = r._ptLookup[r._targets.indexOf(n)], d = o._props.length; d--; )
      u[o._props[d]] = c;
  return o;
}, Mt, on, Dn = function a(e, t, r) {
  var i = e.vars, n = i.ease, s = i.startAt, o = i.immediateRender, c = i.lazy, u = i.onUpdate, d = i.runBackwards, f = i.yoyoEase, _ = i.keyframes, l = i.autoRevert, g = e._dur, h = e._startAt, y = e._targets, v = e.parent, b = v && v.data === "nested" ? v.vars.targets : y, S = e._overwrite === "auto" && !yn, P = e.timeline, m, D, k, T, R, C, O, Y, A, H, U, G, L;
  if (P && (!_ || !n) && (n = "none"), e._ease = Zt(n, gr.ease), e._yEase = f ? oo(Zt(f === !0 ? n : f, gr.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !P && !!i.runBackwards, !P || _ && !i.stagger) {
    if (Y = y[0] ? Kt(y[0]).harness : 0, G = Y && i[Y.prop], m = gi(i, kn), h && (h._zTime < 0 && h.progress(1), t < 0 && d && o && !l ? h.render(-1, !0) : h.revert(d && g ? li : oa), h._lazy = 0), s) {
      if (Lt(e._startAt = we.set(y, He({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !h && Ae(c),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Ve(e, "onUpdate");
        },
        stagger: 0
      }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ce || !o && !l) && e._startAt.revert(li), o && g && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (d && g && !h) {
      if (t && (o = !1), k = He({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !h && Ae(c),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, m), G && (k[Y.prop] = G), Lt(e._startAt = we.set(y, k)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ce ? e._startAt.revert(li) : e._startAt.render(-1, !0)), e._zTime = t, !o)
        a(e._startAt, ce, ce);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, c = g && Ae(c) || c && !g, D = 0; D < y.length; D++) {
      if (R = y[D], O = R._gsap || En(y)[D]._gsap, e._ptLookup[D] = H = {}, Ji[O.id] && At.length && _i(), U = b === y ? D : b.indexOf(R), Y && (A = new Y()).init(R, G || m, e, U, b) !== !1 && (e._pt = T = new Le(e._pt, R, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(I) {
        H[I] = T;
      }), A.priority && (C = 1)), !Y || G)
        for (k in m)
          Ye[k] && (A = uo(k, m, e, U, R, b)) ? A.priority && (C = 1) : H[k] = T = Cn.call(e, R, k, "get", m[k], U, b, 0, i.stringFilter);
      e._op && e._op[D] && e.kill(R, e._op[D]), S && e._pt && (Mt = e, fe.killTweensOf(R, H, e.globalTime(t)), L = !e.parent, Mt = 0), e._pt && c && (Ji[O.id] = 1);
    }
    C && mo(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !L, _ && t <= 0 && P.render(tt, !0, !0);
}, ja = function(e, t, r, i, n, s, o, c) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], d, f, _, l;
  if (!u)
    for (u = e._ptCache[t] = [], _ = e._ptLookup, l = e._targets.length; l--; ) {
      if (d = _[l][t], d && d.d && d.d._pt)
        for (d = d.d._pt; d && d.p !== t && d.fp !== t; )
          d = d._next;
      if (!d)
        return on = 1, e.vars[t] = "+=0", Dn(e, o), on = 0, c ? Wr(t + " not eligible for reset") : 1;
      u.push(d);
    }
  for (l = u.length; l--; )
    f = u[l], d = f._pt || f, d.s = (i || i === 0) && !n ? i : d.s + (i || 0) + s * d.c, d.c = r - d.s, f.e && (f.e = xe(r) + Re(f.e)), f.b && (f.b = d.s + Re(f.b));
}, Oa = function(e, t) {
  var r = e[0] ? Kt(e[0]).harness : 0, i = r && r.aliases, n, s, o, c;
  if (!i)
    return t;
  n = mr({}, t);
  for (s in i)
    if (s in n)
      for (c = i[s].split(","), o = c.length; o--; )
        n[c[o]] = n[s];
  return n;
}, Aa = function(e, t, r, i) {
  var n = t.ease || i || "power1.inOut", s, o;
  if (Me(t))
    o = r[e] || (r[e] = []), t.forEach(function(c, u) {
      return o.push({
        t: u / (t.length - 1) * 100,
        v: c,
        e: n
      });
    });
  else
    for (s in t)
      o = r[s] || (r[s] = []), s === "ease" || o.push({
        t: parseFloat(e),
        v: t[s],
        e: n
      });
}, Br = function(e, t, r, i, n) {
  return pe(e) ? e.call(t, r, i, n) : Se(e) && ~e.indexOf("random(") ? qr(e) : e;
}, fo = Sn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ho = {};
$e(fo + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return ho[a] = 1;
});
var we = /* @__PURE__ */ function(a) {
  Rs(e, a);
  function e(r, i, n, s) {
    var o;
    typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : Ir(i)) || this;
    var c = o.vars, u = c.duration, d = c.delay, f = c.immediateRender, _ = c.stagger, l = c.overwrite, g = c.keyframes, h = c.defaults, y = c.scrollTrigger, v = c.yoyoEase, b = i.parent || fe, S = (Me(r) || Ns(r) ? kt(r[0]) : "length" in i) ? [r] : rt(r), P, m, D, k, T, R, C, O;
    if (o._targets = S.length ? En(S) : Wr("GSAP target " + r + " not found. https://gsap.com", !We.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = l, g || _ || si(u) || si(d)) {
      if (i = o.vars, P = o.timeline = new je({
        data: "nested",
        defaults: h || {},
        targets: b && b.data === "nested" ? b.vars.targets : S
      }), P.kill(), P.parent = P._dp = yt(o), P._start = 0, _ || si(u) || si(d)) {
        if (k = S.length, C = _ && Ks(_), gt(_))
          for (T in _)
            ~fo.indexOf(T) && (O || (O = {}), O[T] = _[T]);
        for (m = 0; m < k; m++)
          D = gi(i, ho), D.stagger = 0, v && (D.yoyoEase = v), O && mr(D, O), R = S[m], D.duration = +Br(u, yt(o), m, R, S), D.delay = (+Br(d, yt(o), m, R, S) || 0) - o._delay, !_ && k === 1 && D.delay && (o._delay = d = D.delay, o._start += d, D.delay = 0), P.to(R, D, C ? C(m, R, S) : 0), P._ease = J.none;
        P.duration() ? u = d = 0 : o.timeline = 0;
      } else if (g) {
        Ir(He(P.vars.defaults, {
          ease: "none"
        })), P._ease = Zt(g.ease || i.ease || "none");
        var Y = 0, A, H, U;
        if (Me(g))
          g.forEach(function(G) {
            return P.to(S, G, ">");
          }), P.duration();
        else {
          D = {};
          for (T in g)
            T === "ease" || T === "easeEach" || Aa(T, g[T], D, g.easeEach);
          for (T in D)
            for (A = D[T].sort(function(G, L) {
              return G.t - L.t;
            }), Y = 0, m = 0; m < A.length; m++)
              H = A[m], U = {
                ease: H.e,
                duration: (H.t - (m ? A[m - 1].t : 0)) / 100 * u
              }, U[T] = H.v, P.to(S, U, Y), Y += U.duration;
          P.duration() < u && P.to({}, {
            duration: u - P.duration()
          });
        }
      }
      u || o.duration(u = P.duration());
    } else
      o.timeline = 0;
    return l === !0 && !yn && (Mt = yt(o), fe.killTweensOf(S), Mt = 0), pt(b, yt(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (f || !u && !g && o._start === Te(b._time) && Ae(f) && fa(yt(o)) && b.data !== "nested") && (o._tTime = -ce, o.render(Math.max(0, -d) || 0)), y && Ws(yt(o), y), o;
  }
  var t = e.prototype;
  return t.render = function(i, n, s) {
    var o = this._time, c = this._tDur, u = this._dur, d = i < 0, f = i > c - ce && !d ? c : i < ce ? 0 : i, _, l, g, h, y, v, b, S, P;
    if (!u)
      pa(this, i, n, s);
    else if (f !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d || this._lazy) {
      if (_ = f, S = this.timeline, this._repeat) {
        if (h = u + this._rDelay, this._repeat < -1 && d)
          return this.totalTime(h * 100 + i, n, s);
        if (_ = Te(f % h), f === c ? (g = this._repeat, _ = u) : (y = Te(f / h), g = ~~y, g && g === y ? (_ = u, g--) : _ > u && (_ = u)), v = this._yoyo && g & 1, v && (P = this._yEase, _ = u - _), y = xr(this._tTime, h), _ === o && !s && this._initted && g === y)
          return this._tTime = f, this;
        g !== y && (S && this._yEase && ao(S, v), this.vars.repeatRefresh && !v && !this._lock && _ !== h && this._initted && (this._lock = s = 1, this.render(Te(h * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Us(this, d ? i : _, s, n, f))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && g !== y))
          return this;
        if (u !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = f, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = b = (P || this._ease)(_ / u), this._from && (this.ratio = b = 1 - b), !o && f && !n && !y && (Ve(this, "onStart"), this._tTime !== f))
        return this;
      for (l = this._pt; l; )
        l.r(b, l.d), l = l._next;
      S && S.render(i < 0 ? i : S._dur * S._ease(_ / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (d && en(this, i, n, s), Ve(this, "onUpdate")), this._repeat && g !== y && this.vars.onRepeat && !n && this.parent && Ve(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (d && !this._onUpdate && en(this, i, !0, !0), (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Lt(this, 1), !n && !(d && !o) && (f || o || v) && (Ve(this, f === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < c && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, s, o, c) {
    Hr || ze.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), d;
    return this._initted || Dn(this, u), d = this._ease(u / this._dur), ja(this, i, n, s, o, d, u, c) ? this.resetTo(i, n, s, o, 1) : (Si(this, 0), this.parent || Gs(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Nr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ce), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Mt && Mt.vars.overwrite !== !0)._first || Nr(this), this.parent && s !== this.timeline.totalDuration() && yr(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, c = i ? rt(i) : o, u = this._ptLookup, d = this._pt, f, _, l, g, h, y, v;
    if ((!n || n === "all") && ua(o, c))
      return n === "all" && (this._pt = 0), Nr(this);
    for (f = this._op = this._op || [], n !== "all" && (Se(n) && (h = {}, $e(n, function(b) {
      return h[b] = 1;
    }), n = h), n = Oa(o, n)), v = o.length; v--; )
      if (~c.indexOf(o[v])) {
        _ = u[v], n === "all" ? (f[v] = n, g = _, l = {}) : (l = f[v] = f[v] || {}, g = n);
        for (h in g)
          y = _ && _[h], y && ((!("kill" in y.d) || y.d.kill(h) === !0) && Ti(this, y, "_pt"), delete _[h]), l !== "all" && (l[h] = 1);
      }
    return this._initted && !this._pt && d && Nr(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return Fr(1, arguments);
  }, e.delayedCall = function(i, n, s, o) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, e.fromTo = function(i, n, s) {
    return Fr(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, s) {
    return fe.killTweensOf(i, n, s);
  }, e;
}(Kr);
He(we.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
$e("staggerTo,staggerFrom,staggerFromTo", function(a) {
  we[a] = function() {
    var e = new je(), t = rn.call(arguments, 0);
    return t.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, t);
  };
});
var Rn = function(e, t, r) {
  return e[t] = r;
}, po = function(e, t, r) {
  return e[t](r);
}, $a = function(e, t, r, i) {
  return e[t](i.fp, r);
}, La = function(e, t, r) {
  return e.setAttribute(t, r);
}, Mn = function(e, t) {
  return pe(e[t]) ? po : vn(e[t]) && e.setAttribute ? La : Rn;
}, _o = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Ia = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, go = function(e, t) {
  var r = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, Nn = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, Fa = function(e, t, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(e, t, r), n = s;
}, Ba = function(e) {
  for (var t = this._pt, r, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Ti(this, t, "_pt") : t.dep || (r = 1), t = i;
  return !r;
}, Xa = function(e, t, r, i) {
  i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
}, mo = function(e) {
  for (var t = e._pt, r, i, n, s; t; ) {
    for (r = t._next, i = n; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : s) ? t._prev._next = t : n = t, (t._next = i) ? i._prev = t : s = t, t = r;
  }
  e._pt = n;
}, Le = /* @__PURE__ */ function() {
  function a(t, r, i, n, s, o, c, u, d) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = o || _o, this.d = c || this, this.set = u || Rn, this.pr = d || 0, this._next = t, t && (t._prev = this);
  }
  var e = a.prototype;
  return e.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = Xa, this.m = r, this.mt = n, this.tween = i;
  }, a;
}();
$e(Sn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return kn[a] = 1;
});
qe.TweenMax = qe.TweenLite = we;
qe.TimelineLite = qe.TimelineMax = je;
fe = new je({
  sortChildren: !1,
  defaults: gr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
We.stringFilter = so;
var Jt = [], ui = {}, Ya = [], is = 0, za = 0, Ii = function(e) {
  return (ui[e] || Ya).map(function(t) {
    return t();
  });
}, an = function() {
  var e = Date.now(), t = [];
  e - is > 2 && (Ii("matchMediaInit"), Jt.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, o, c, u;
    for (o in i)
      s = ht.matchMedia(i[o]).matches, s && (c = 1), s !== n[o] && (n[o] = s, u = 1);
    u && (r.revert(), c && t.push(r));
  }), Ii("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), is = e, Ii("matchMedia"));
}, xo = /* @__PURE__ */ function() {
  function a(t, r) {
    this.selector = r && nn(r), this.data = [], this._r = [], this.isReverted = !1, this.id = za++, t && this.add(t);
  }
  var e = a.prototype;
  return e.add = function(r, i, n) {
    pe(r) && (n = i, i = r, r = pe);
    var s = this, o = function() {
      var u = ue, d = s.selector, f;
      return u && u !== s && u.data.push(s), n && (s.selector = nn(n)), ue = s, f = i.apply(s, arguments), pe(f) && s._r.push(f), ue = u, s.selector = d, s.isReverted = !1, f;
    };
    return s.last = o, r === pe ? o(s, function(c) {
      return s.add(null, c);
    }) : r ? s[r] = o : o;
  }, e.ignore = function(r) {
    var i = ue;
    ue = null, r(this), ue = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof a ? r.push.apply(r, i.getTweens()) : i instanceof we && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var n = this;
    if (r ? function() {
      for (var o = n.getTweens(), c = n.data.length, u; c--; )
        u = n.data[c], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(d) {
          return o.splice(o.indexOf(d), 1);
        }));
      for (o.map(function(d) {
        return {
          g: d._dur || d._delay || d._sat && !d._sat.vars.immediateRender ? d.globalTime(0) : -1 / 0,
          t: d
        };
      }).sort(function(d, f) {
        return f.g - d.g || -1 / 0;
      }).forEach(function(d) {
        return d.t.revert(r);
      }), c = n.data.length; c--; )
        u = n.data[c], u instanceof je ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof we) && u.revert && u.revert(r);
      n._r.forEach(function(d) {
        return d(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var s = Jt.length; s--; )
        Jt[s].id === this.id && Jt.splice(s, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, a;
}(), Ga = /* @__PURE__ */ function() {
  function a(t) {
    this.contexts = [], this.scope = t, ue && ue.data.push(this);
  }
  var e = a.prototype;
  return e.add = function(r, i, n) {
    gt(r) || (r = {
      matches: r
    });
    var s = new xo(0, n || this.scope), o = s.conditions = {}, c, u, d;
    ue && !s.selector && (s.selector = ue.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (u in r)
      u === "all" ? d = 1 : (c = ht.matchMedia(r[u]), c && (Jt.indexOf(s) < 0 && Jt.push(s), (o[u] = c.matches) && (d = 1), c.addListener ? c.addListener(an) : c.addEventListener("change", an)));
    return d && i(s, function(f) {
      return s.add(null, f);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, a;
}(), xi = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(i) {
      return ro(i);
    });
  },
  timeline: function(e) {
    return new je(e);
  },
  getTweensOf: function(e, t) {
    return fe.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, i) {
    Se(e) && (e = rt(e)[0]);
    var n = Kt(e || {}).get, s = r ? zs : Ys;
    return r === "native" && (r = ""), e && (t ? s((Ye[t] && Ye[t].get || n)(e, t, r, i)) : function(o, c, u) {
      return s((Ye[o] && Ye[o].get || n)(e, o, c, u));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = rt(e), e.length > 1) {
      var i = e.map(function(d) {
        return Fe.quickSetter(d, t, r);
      }), n = i.length;
      return function(d) {
        for (var f = n; f--; )
          i[f](d);
      };
    }
    e = e[0] || {};
    var s = Ye[t], o = Kt(e), c = o.harness && (o.harness.aliases || {})[t] || t, u = s ? function(d) {
      var f = new s();
      cr._pt = 0, f.init(e, r ? d + r : d, cr, 0, [e]), f.render(1, f), cr._pt && Nn(1, cr);
    } : o.set(e, c);
    return s ? u : function(d) {
      return u(e, c, r ? d + r : d, o, 1);
    };
  },
  quickTo: function(e, t, r) {
    var i, n = Fe.to(e, He((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), s = function(c, u, d) {
      return n.resetTo(t, c, u, d);
    };
    return s.tween = n, s;
  },
  isTweening: function(e) {
    return fe.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Zt(e.ease, gr.ease)), Zn(gr, e || {});
  },
  config: function(e) {
    return Zn(We, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, i = e.plugins, n = e.defaults, s = e.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !Ye[o] && !qe[o] && Wr(t + " effect requires " + o + " plugin.");
    }), Oi[t] = function(o, c, u) {
      return r(rt(o), He(c || {}, n), u);
    }, s && (je.prototype[t] = function(o, c, u) {
      return this.add(Oi[t](o, gt(c) ? c : (u = c) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    J[e] = Zt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Zt(e, t) : J;
  },
  getById: function(e) {
    return fe.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new je(e), i, n;
    for (r.smoothChildTiming = Ae(e.smoothChildTiming), fe.remove(r), r._dp = 0, r._time = r._tTime = fe._time, i = fe._first; i; )
      n = i._next, (t || !(!i._dur && i instanceof we && i.vars.onComplete === i._targets[0])) && pt(r, i, i._start - i._delay), i = n;
    return pt(fe, r, 0), r;
  },
  context: function(e, t) {
    return e ? new xo(e, t) : ue;
  },
  matchMedia: function(e) {
    return new Ga(e);
  },
  matchMediaRefresh: function() {
    return Jt.forEach(function(e) {
      var t = e.conditions, r, i;
      for (i in t)
        t[i] && (t[i] = !1, r = 1);
      r && e.revert();
    }) || an();
  },
  addEventListener: function(e, t) {
    var r = ui[e] || (ui[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = ui[e], i = r && r.indexOf(t);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: wa,
    wrapYoyo: Ta,
    distribute: Ks,
    random: Zs,
    snap: Qs,
    normalize: ba,
    getUnit: Re,
    clamp: ma,
    splitColor: io,
    toArray: rt,
    selector: nn,
    mapRange: eo,
    pipe: ya,
    unitize: va,
    interpolate: ka,
    shuffle: Hs
  },
  install: Ls,
  effects: Oi,
  ticker: ze,
  updateRoot: je.updateRoot,
  plugins: Ye,
  globalTimeline: fe,
  core: {
    PropTween: Le,
    globals: Is,
    Tween: we,
    Timeline: je,
    Animation: Kr,
    getCache: Kt,
    _removeLinkedListItem: Ti,
    reverting: function() {
      return Ce;
    },
    context: function(e) {
      return e && ue && (ue.data.push(e), e._ctx = ue), ue;
    },
    suppressOverwrites: function(e) {
      return yn = e;
    }
  }
};
$e("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return xi[a] = we[a];
});
ze.add(je.updateRoot);
cr = xi.to({}, {
  duration: 0
});
var Va = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, Wa = function(e, t) {
  var r = e._targets, i, n, s;
  for (i in t)
    for (n = r.length; n--; )
      s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = Va(s, i)), s && s.modifier && s.modifier(t[i], e, r[n], i));
}, Fi = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(o) {
        var c, u;
        if (Se(n) && (c = {}, $e(n, function(d) {
          return c[d] = 1;
        }), n = c), t) {
          c = {};
          for (u in n)
            c[u] = t(n[u]);
          n = c;
        }
        Wa(o, n);
      };
    }
  };
}, Fe = xi.registerPlugin({
  name: "attr",
  init: function(e, t, r, i, n) {
    var s, o, c;
    this.tween = r;
    for (s in t)
      c = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (c || 0) + "", t[s], i, n, 0, 0, s), o.op = s, o.b = c, this._props.push(s);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      Ce ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, Fi("roundProps", sn), Fi("modifiers"), Fi("snap", Qs)) || xi;
we.version = je.version = Fe.version = "3.13.0";
$s = 1;
bn() && vr();
J.Power0;
J.Power1;
J.Power2;
J.Power3;
J.Power4;
J.Linear;
J.Quad;
J.Cubic;
J.Quart;
J.Quint;
J.Strong;
J.Elastic;
J.Back;
J.SteppedEase;
J.Bounce;
J.Sine;
J.Expo;
J.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ns, Nt, dr, jn, Ht, ss, On, Ua = function() {
  return typeof window < "u";
}, St = {}, Ut = 180 / Math.PI, fr = Math.PI / 180, sr = Math.atan2, os = 1e8, An = /([A-Z])/g, qa = /(left|right|width|margin|padding|x)/i, Ha = /[\s,\(]\S/, _t = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ln = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Ka = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Qa = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Za = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, yo = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, vo = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Ja = function(e, t, r) {
  return e.style[t] = r;
}, el = function(e, t, r) {
  return e.style.setProperty(t, r);
}, tl = function(e, t, r) {
  return e._gsap[t] = r;
}, rl = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, il = function(e, t, r, i, n) {
  var s = e._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, nl = function(e, t, r, i, n) {
  var s = e._gsap;
  s[t] = r, s.renderTransform(n, s);
}, he = "transform", Ie = he + "Origin", sl = function a(e, t) {
  var r = this, i = this.target, n = i.style, s = i._gsap;
  if (e in St && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = _t[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return r.tfm[o] = vt(i, o);
      }) : this.tfm[e] = s.x ? s[e] : vt(i, e), e === Ie && (this.tfm.zOrigin = s.zOrigin);
    else
      return _t.transform.split(",").forEach(function(o) {
        return a.call(r, o, t);
      });
    if (this.props.indexOf(he) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Ie, t, "")), e = he;
  }
  (n || t) && this.props.push(e, t, n[e]);
}, bo = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, ol = function() {
  var e = this.props, t = this.target, r = t.style, i = t._gsap, n, s;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(An, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = On(), (!n || !n.isStart) && !r[he] && (bo(r), i.zOrigin && r[Ie] && (r[Ie] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, wo = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: ol,
    save: sl
  };
  return e._gsap || Fe.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, To, cn = function(e, t) {
  var r = Nt.createElementNS ? Nt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Nt.createElement(e);
  return r && r.style ? r : Nt.createElement(e);
}, it = function a(e, t, r) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(An, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && a(e, br(t) || t, 1) || "";
}, as = "O,Moz,ms,Ms,Webkit".split(","), br = function(e, t, r) {
  var i = t || Ht, n = i.style, s = 5;
  if (e in n && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(as[s] + e in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? as[s] : "") + e;
}, un = function() {
  Ua() && window.document && (ns = window, Nt = ns.document, dr = Nt.documentElement, Ht = cn("div") || {
    style: {}
  }, cn("div"), he = br(he), Ie = he + "Origin", Ht.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", To = !!br("perspective"), On = Fe.core.reverting, jn = 1);
}, ls = function(e) {
  var t = e.ownerSVGElement, r = cn("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), n;
  i.style.display = "block", r.appendChild(i), dr.appendChild(r);
  try {
    n = i.getBBox();
  } catch {
  }
  return r.removeChild(i), dr.removeChild(r), n;
}, cs = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, ko = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = ls(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = ls(e)), t && !t.width && !t.x && !t.y ? {
    x: +cs(e, ["x", "cx", "x1"]) || 0,
    y: +cs(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, So = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ko(e));
}, rr = function(e, t) {
  if (t) {
    var r = e.style, i;
    t in St && t !== Ie && (t = he), r.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(i === "--" ? t : t.replace(An, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, jt = function(e, t, r, i, n, s) {
  var o = new Le(e._pt, t, r, 0, 1, s ? vo : yo);
  return e._pt = o, o.b = i, o.e = n, e._props.push(r), o;
}, us = {
  deg: 1,
  rad: 1,
  turn: 1
}, al = {
  grid: 1,
  flex: 1
}, It = function a(e, t, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", o = Ht.style, c = qa.test(t), u = e.tagName.toLowerCase() === "svg", d = (u ? "client" : "offset") + (c ? "Width" : "Height"), f = 100, _ = i === "px", l = i === "%", g, h, y, v;
  if (i === s || !n || us[i] || us[s])
    return n;
  if (s !== "px" && !_ && (n = a(e, t, r, "px")), v = e.getCTM && So(e), (l || s === "%") && (St[t] || ~t.indexOf("adius")))
    return g = v ? e.getBBox()[c ? "width" : "height"] : e[d], xe(l ? n / g * f : n / 100 * g);
  if (o[c ? "width" : "height"] = f + (_ ? s : i), h = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, v && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === Nt || !h.appendChild) && (h = Nt.body), y = h._gsap, y && l && y.width && c && y.time === ze.time && !y.uncache)
    return xe(n / y.width * f);
  if (l && (t === "height" || t === "width")) {
    var b = e.style[t];
    e.style[t] = f + i, g = e[d], b ? e.style[t] = b : rr(e, t);
  } else
    (l || s === "%") && !al[it(h, "display")] && (o.position = it(e, "position")), h === e && (o.position = "static"), h.appendChild(Ht), g = Ht[d], h.removeChild(Ht), o.position = "absolute";
  return c && l && (y = Kt(h), y.time = ze.time, y.width = h[d]), xe(_ ? g * n / f : g && n ? f / g * n : 0);
}, vt = function(e, t, r, i) {
  var n;
  return jn || un(), t in _t && t !== "transform" && (t = _t[t], ~t.indexOf(",") && (t = t.split(",")[0])), St[t] && t !== "transform" ? (n = Zr(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : vi(it(e, Ie)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = yi[t] && yi[t](e, t, r) || it(e, t) || Bs(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? It(e, t, n, r) + r : n;
}, ll = function(e, t, r, i) {
  if (!r || r === "none") {
    var n = br(t, e, 1), s = n && it(e, n, 1);
    s && s !== r ? (t = n, r = s) : t === "borderColor" && (r = it(e, "borderTopColor"));
  }
  var o = new Le(this._pt, e.style, t, 0, 1, go), c = 0, u = 0, d, f, _, l, g, h, y, v, b, S, P, m;
  if (o.b = r, o.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = it(e, i.substring(4, i.indexOf(")")))), i === "auto" && (h = e.style[t], e.style[t] = i, i = it(e, t) || i, h ? e.style[t] = h : rr(e, t)), d = [r, i], so(d), r = d[0], i = d[1], _ = r.match(lr) || [], m = i.match(lr) || [], m.length) {
    for (; f = lr.exec(i); )
      y = f[0], b = i.substring(c, f.index), g ? g = (g + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (g = 1), y !== (h = _[u++] || "") && (l = parseFloat(h) || 0, P = h.substr((l + "").length), y.charAt(1) === "=" && (y = ur(l, y) + P), v = parseFloat(y), S = y.substr((v + "").length), c = lr.lastIndex - S.length, S || (S = S || We.units[t] || P, c === i.length && (i += S, o.e += S)), P !== S && (l = It(e, t, h, S) || 0), o._pt = {
        _next: o._pt,
        p: b || u === 1 ? b : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: l,
        c: v - l,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    o.c = c < i.length ? i.substring(c, i.length) : "";
  } else
    o.r = t === "display" && i === "none" ? vo : yo;
  return Os.test(i) && (o.e = 0), this._pt = o, o;
}, ds = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, cl = function(e) {
  var t = e.split(" "), r = t[0], i = t[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = ds[r] || r, t[1] = ds[i] || i, t.join(" ");
}, ul = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, i = r.style, n = t.u, s = r._gsap, o, c, u;
    if (n === "all" || n === !0)
      i.cssText = "", c = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        o = n[u], St[o] && (c = 1, o = o === "transformOrigin" ? Ie : he), rr(r, o);
    c && (rr(r, he), s && (s.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Zr(r, 1), s.uncache = 1, bo(i)));
  }
}, yi = {
  clearProps: function(e, t, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = e._pt = new Le(e._pt, t, r, 0, 0, ul);
      return s.u = i, s.pr = -10, s.tween = n, e._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Qr = [1, 0, 0, 1, 0, 0], Eo = {}, Po = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, fs = function(e) {
  var t = it(e, he);
  return Po(t) ? Qr : t.substr(7).match(js).map(xe);
}, $n = function(e, t) {
  var r = e._gsap || Kt(e), i = e.style, n = fs(e), s, o, c, u;
  return r.svg && e.getAttribute("transform") ? (c = e.transform.baseVal.consolidate().matrix, n = [c.a, c.b, c.c, c.d, c.e, c.f], n.join(",") === "1,0,0,1,0,0" ? Qr : n) : (n === Qr && !e.offsetParent && e !== dr && !r.svg && (c = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, o = e.nextElementSibling, dr.appendChild(e)), n = fs(e), c ? i.display = c : rr(e, "display"), u && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : dr.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, dn = function(e, t, r, i, n, s) {
  var o = e._gsap, c = n || $n(e, !0), u = o.xOrigin || 0, d = o.yOrigin || 0, f = o.xOffset || 0, _ = o.yOffset || 0, l = c[0], g = c[1], h = c[2], y = c[3], v = c[4], b = c[5], S = t.split(" "), P = parseFloat(S[0]) || 0, m = parseFloat(S[1]) || 0, D, k, T, R;
  r ? c !== Qr && (k = l * y - g * h) && (T = P * (y / k) + m * (-h / k) + (h * b - y * v) / k, R = P * (-g / k) + m * (l / k) - (l * b - g * v) / k, P = T, m = R) : (D = ko(e), P = D.x + (~S[0].indexOf("%") ? P / 100 * D.width : P), m = D.y + (~(S[1] || S[0]).indexOf("%") ? m / 100 * D.height : m)), i || i !== !1 && o.smooth ? (v = P - u, b = m - d, o.xOffset = f + (v * l + b * h) - v, o.yOffset = _ + (v * g + b * y) - b) : o.xOffset = o.yOffset = 0, o.xOrigin = P, o.yOrigin = m, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!r, e.style[Ie] = "0px 0px", s && (jt(s, o, "xOrigin", u, P), jt(s, o, "yOrigin", d, m), jt(s, o, "xOffset", f, o.xOffset), jt(s, o, "yOffset", _, o.yOffset)), e.setAttribute("data-svg-origin", P + " " + m);
}, Zr = function(e, t) {
  var r = e._gsap || new co(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var i = e.style, n = r.scaleX < 0, s = "px", o = "deg", c = getComputedStyle(e), u = it(e, Ie) || "0", d, f, _, l, g, h, y, v, b, S, P, m, D, k, T, R, C, O, Y, A, H, U, G, L, I, W, q, w, N, V, B, de;
  return d = f = _ = h = y = v = b = S = P = 0, l = g = 1, r.svg = !!(e.getCTM && So(e)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (i[he] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[he] !== "none" ? c[he] : "")), i.scale = i.rotate = i.translate = "none"), k = $n(e, r.svg), r.svg && (r.uncache ? (I = e.getBBox(), u = r.xOrigin - I.x + "px " + (r.yOrigin - I.y) + "px", L = "") : L = !t && e.getAttribute("data-svg-origin"), dn(e, L || u, !!L || r.originIsAbsolute, r.smooth !== !1, k)), m = r.xOrigin || 0, D = r.yOrigin || 0, k !== Qr && (O = k[0], Y = k[1], A = k[2], H = k[3], d = U = k[4], f = G = k[5], k.length === 6 ? (l = Math.sqrt(O * O + Y * Y), g = Math.sqrt(H * H + A * A), h = O || Y ? sr(Y, O) * Ut : 0, b = A || H ? sr(A, H) * Ut + h : 0, b && (g *= Math.abs(Math.cos(b * fr))), r.svg && (d -= m - (m * O + D * A), f -= D - (m * Y + D * H))) : (de = k[6], V = k[7], q = k[8], w = k[9], N = k[10], B = k[11], d = k[12], f = k[13], _ = k[14], T = sr(de, N), y = T * Ut, T && (R = Math.cos(-T), C = Math.sin(-T), L = U * R + q * C, I = G * R + w * C, W = de * R + N * C, q = U * -C + q * R, w = G * -C + w * R, N = de * -C + N * R, B = V * -C + B * R, U = L, G = I, de = W), T = sr(-A, N), v = T * Ut, T && (R = Math.cos(-T), C = Math.sin(-T), L = O * R - q * C, I = Y * R - w * C, W = A * R - N * C, B = H * C + B * R, O = L, Y = I, A = W), T = sr(Y, O), h = T * Ut, T && (R = Math.cos(T), C = Math.sin(T), L = O * R + Y * C, I = U * R + G * C, Y = Y * R - O * C, G = G * R - U * C, O = L, U = I), y && Math.abs(y) + Math.abs(h) > 359.9 && (y = h = 0, v = 180 - v), l = xe(Math.sqrt(O * O + Y * Y + A * A)), g = xe(Math.sqrt(G * G + de * de)), T = sr(U, G), b = Math.abs(T) > 2e-4 ? T * Ut : 0, P = B ? 1 / (B < 0 ? -B : B) : 0), r.svg && (L = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Po(it(e, he)), L && e.setAttribute("transform", L))), Math.abs(b) > 90 && Math.abs(b) < 270 && (n ? (l *= -1, b += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, b += b <= 0 ? 180 : -180)), t = t || r.uncache, r.x = d - ((r.xPercent = d && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s, r.y = f - ((r.yPercent = f && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s, r.z = _ + s, r.scaleX = xe(l), r.scaleY = xe(g), r.rotation = xe(h) + o, r.rotationX = xe(y) + o, r.rotationY = xe(v) + o, r.skewX = b + o, r.skewY = S + o, r.transformPerspective = P + s, (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (i[Ie] = vi(u)), r.xOffset = r.yOffset = 0, r.force3D = We.force3D, r.renderTransform = r.svg ? fl : To ? Co : dl, r.uncache = 0, r;
}, vi = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Bi = function(e, t, r) {
  var i = Re(t);
  return xe(parseFloat(t) + parseFloat(It(e, "x", r + "px", i))) + i;
}, dl = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Co(e, t);
}, zt = "0deg", Rr = "0px", Gt = ") ", Co = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, c = r.z, u = r.rotation, d = r.rotationY, f = r.rotationX, _ = r.skewX, l = r.skewY, g = r.scaleX, h = r.scaleY, y = r.transformPerspective, v = r.force3D, b = r.target, S = r.zOrigin, P = "", m = v === "auto" && e && e !== 1 || v === !0;
  if (S && (f !== zt || d !== zt)) {
    var D = parseFloat(d) * fr, k = Math.sin(D), T = Math.cos(D), R;
    D = parseFloat(f) * fr, R = Math.cos(D), s = Bi(b, s, k * R * -S), o = Bi(b, o, -Math.sin(D) * -S), c = Bi(b, c, T * R * -S + S);
  }
  y !== Rr && (P += "perspective(" + y + Gt), (i || n) && (P += "translate(" + i + "%, " + n + "%) "), (m || s !== Rr || o !== Rr || c !== Rr) && (P += c !== Rr || m ? "translate3d(" + s + ", " + o + ", " + c + ") " : "translate(" + s + ", " + o + Gt), u !== zt && (P += "rotate(" + u + Gt), d !== zt && (P += "rotateY(" + d + Gt), f !== zt && (P += "rotateX(" + f + Gt), (_ !== zt || l !== zt) && (P += "skew(" + _ + ", " + l + Gt), (g !== 1 || h !== 1) && (P += "scale(" + g + ", " + h + Gt), b.style[he] = P || "translate(0, 0)";
}, fl = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, c = r.rotation, u = r.skewX, d = r.skewY, f = r.scaleX, _ = r.scaleY, l = r.target, g = r.xOrigin, h = r.yOrigin, y = r.xOffset, v = r.yOffset, b = r.forceCSS, S = parseFloat(s), P = parseFloat(o), m, D, k, T, R;
  c = parseFloat(c), u = parseFloat(u), d = parseFloat(d), d && (d = parseFloat(d), u += d, c += d), c || u ? (c *= fr, u *= fr, m = Math.cos(c) * f, D = Math.sin(c) * f, k = Math.sin(c - u) * -_, T = Math.cos(c - u) * _, u && (d *= fr, R = Math.tan(u - d), R = Math.sqrt(1 + R * R), k *= R, T *= R, d && (R = Math.tan(d), R = Math.sqrt(1 + R * R), m *= R, D *= R)), m = xe(m), D = xe(D), k = xe(k), T = xe(T)) : (m = f, T = _, D = k = 0), (S && !~(s + "").indexOf("px") || P && !~(o + "").indexOf("px")) && (S = It(l, "x", s, "px"), P = It(l, "y", o, "px")), (g || h || y || v) && (S = xe(S + g - (g * m + h * k) + y), P = xe(P + h - (g * D + h * T) + v)), (i || n) && (R = l.getBBox(), S = xe(S + i / 100 * R.width), P = xe(P + n / 100 * R.height)), R = "matrix(" + m + "," + D + "," + k + "," + T + "," + S + "," + P + ")", l.setAttribute("transform", R), b && (l.style[he] = R);
}, hl = function(e, t, r, i, n) {
  var s = 360, o = Se(n), c = parseFloat(n) * (o && ~n.indexOf("rad") ? Ut : 1), u = c - i, d = i + u + "deg", f, _;
  return o && (f = n.split("_")[1], f === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), f === "cw" && u < 0 ? u = (u + s * os) % s - ~~(u / s) * s : f === "ccw" && u > 0 && (u = (u - s * os) % s - ~~(u / s) * s)), e._pt = _ = new Le(e._pt, t, r, i, u, Ka), _.e = d, _.u = "deg", e._props.push(r), _;
}, hs = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, pl = function(e, t, r) {
  var i = hs({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, o, c, u, d, f, _, l, g;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), s[he] = t, o = Zr(r, 1), rr(r, he), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[he], s[he] = t, o = Zr(r, 1), s[he] = u);
  for (c in St)
    u = i[c], d = o[c], u !== d && n.indexOf(c) < 0 && (l = Re(u), g = Re(d), f = l !== g ? It(r, c, u, g) : parseFloat(u), _ = parseFloat(d), e._pt = new Le(e._pt, o, c, f, _ - f, ln), e._pt.u = g || 0, e._props.push(c));
  hs(o, i);
};
$e("padding,margin,Width,Radius", function(a, e) {
  var t = "Top", r = "Right", i = "Bottom", n = "Left", s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(o) {
    return e < 2 ? a + o : "border" + o + a;
  });
  yi[e > 1 ? "border" + a : a] = function(o, c, u, d, f) {
    var _, l;
    if (arguments.length < 4)
      return _ = s.map(function(g) {
        return vt(o, g, u);
      }), l = _.join(" "), l.split(_[0]).length === 5 ? _[0] : l;
    _ = (d + "").split(" "), l = {}, s.forEach(function(g, h) {
      return l[g] = _[h] = _[h] || _[(h - 1) / 2 | 0];
    }), o.init(c, l, f);
  };
});
var Do = {
  name: "css",
  register: un,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, i, n) {
    var s = this._props, o = e.style, c = r.vars.startAt, u, d, f, _, l, g, h, y, v, b, S, P, m, D, k, T;
    jn || un(), this.styles = this.styles || wo(e), T = this.styles.props, this.tween = r;
    for (h in t)
      if (h !== "autoRound" && (d = t[h], !(Ye[h] && uo(h, t, r, i, e, n)))) {
        if (l = typeof d, g = yi[h], l === "function" && (d = d.call(r, i, e, n), l = typeof d), l === "string" && ~d.indexOf("random(") && (d = qr(d)), g)
          g(this, e, h, d, r) && (k = 1);
        else if (h.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(h) + "").trim(), d += "", $t.lastIndex = 0, $t.test(u) || (y = Re(u), v = Re(d)), v ? y !== v && (u = It(e, h, u, v) + v) : y && (d += y), this.add(o, "setProperty", u, d, i, n, 0, 0, h), s.push(h), T.push(h, 0, o[h]);
        else if (l !== "undefined") {
          if (c && h in c ? (u = typeof c[h] == "function" ? c[h].call(r, i, e, n) : c[h], Se(u) && ~u.indexOf("random(") && (u = qr(u)), Re(u + "") || u === "auto" || (u += We.units[h] || Re(vt(e, h)) || ""), (u + "").charAt(1) === "=" && (u = vt(e, h))) : u = vt(e, h), _ = parseFloat(u), b = l === "string" && d.charAt(1) === "=" && d.substr(0, 2), b && (d = d.substr(2)), f = parseFloat(d), h in _t && (h === "autoAlpha" && (_ === 1 && vt(e, "visibility") === "hidden" && f && (_ = 0), T.push("visibility", 0, o.visibility), jt(this, o, "visibility", _ ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), h !== "scale" && h !== "transform" && (h = _t[h], ~h.indexOf(",") && (h = h.split(",")[0]))), S = h in St, S) {
            if (this.styles.save(h), l === "string" && d.substring(0, 6) === "var(--" && (d = it(e, d.substring(4, d.indexOf(")"))), f = parseFloat(d)), P || (m = e._gsap, m.renderTransform && !t.parseTransform || Zr(e, t.parseTransform), D = t.smoothOrigin !== !1 && m.smooth, P = this._pt = new Le(this._pt, o, he, 0, 1, m.renderTransform, m, 0, -1), P.dep = 1), h === "scale")
              this._pt = new Le(this._pt, m, "scaleY", m.scaleY, (b ? ur(m.scaleY, b + f) : f) - m.scaleY || 0, ln), this._pt.u = 0, s.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              T.push(Ie, 0, o[Ie]), d = cl(d), m.svg ? dn(e, d, 0, D, 0, this) : (v = parseFloat(d.split(" ")[2]) || 0, v !== m.zOrigin && jt(this, m, "zOrigin", m.zOrigin, v), jt(this, o, h, vi(u), vi(d)));
              continue;
            } else if (h === "svgOrigin") {
              dn(e, d, 1, D, 0, this);
              continue;
            } else if (h in Eo) {
              hl(this, m, h, _, b ? ur(_, b + d) : d);
              continue;
            } else if (h === "smoothOrigin") {
              jt(this, m, "smooth", m.smooth, d);
              continue;
            } else if (h === "force3D") {
              m[h] = d;
              continue;
            } else if (h === "transform") {
              pl(this, d, e);
              continue;
            }
          } else h in o || (h = br(h) || h);
          if (S || (f || f === 0) && (_ || _ === 0) && !Ha.test(d) && h in o)
            y = (u + "").substr((_ + "").length), f || (f = 0), v = Re(d) || (h in We.units ? We.units[h] : y), y !== v && (_ = It(e, h, u, v)), this._pt = new Le(this._pt, S ? m : o, h, _, (b ? ur(_, b + f) : f) - _, !S && (v === "px" || h === "zIndex") && t.autoRound !== !1 ? Za : ln), this._pt.u = v || 0, y !== v && v !== "%" && (this._pt.b = u, this._pt.r = Qa);
          else if (h in o)
            ll.call(this, e, h, u, b ? b + d : d);
          else if (h in e)
            this.add(e, h, u || e[h], b ? b + d : d, i, n);
          else if (h !== "parseTransform") {
            Tn(h, d);
            continue;
          }
          S || (h in o ? T.push(h, 0, o[h]) : typeof e[h] == "function" ? T.push(h, 2, e[h]()) : T.push(h, 1, u || e[h])), s.push(h);
        }
      }
    k && mo(this);
  },
  render: function(e, t) {
    if (t.tween._time || !On())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: vt,
  aliases: _t,
  getSetter: function(e, t, r) {
    var i = _t[t];
    return i && i.indexOf(",") < 0 && (t = i), t in St && t !== Ie && (e._gsap.x || vt(e, "x")) ? r && ss === r ? t === "scale" ? rl : tl : (ss = r || {}) && (t === "scale" ? il : nl) : e.style && !vn(e.style[t]) ? Ja : ~t.indexOf("-") ? el : Mn(e, t);
  },
  core: {
    _removeProperty: rr,
    _getMatrix: $n
  }
};
Fe.utils.checkPrefix = br;
Fe.core.getStyleSaver = wo;
(function(a, e, t, r) {
  var i = $e(a + "," + e + "," + t, function(n) {
    St[n] = 1;
  });
  $e(e, function(n) {
    We.units[n] = "deg", Eo[n] = 1;
  }), _t[i[13]] = a + "," + e, $e(r, function(n) {
    var s = n.split(":");
    _t[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
$e("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  We.units[a] = "px";
});
Fe.registerPlugin(Do);
var Oe = Fe.registerPlugin(Do) || Fe;
Oe.core.Tween;
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var wt, er, Ln, Ei, Or, di, bi, Xr, ct = "transform", fn = ct + "Origin", Ro, Mo = function(e) {
  var t = e.ownerDocument || e;
  for (!(ct in e.style) && ("msTransform" in e.style) && (ct = "msTransform", fn = ct + "Origin"); t.parentNode && (t = t.parentNode); )
    ;
  if (er = window, bi = new ir(), t) {
    wt = t, Ln = t.documentElement, Ei = t.body, Xr = wt.createElementNS("http://www.w3.org/2000/svg", "g"), Xr.style.transform = "none";
    var r = t.createElement("div"), i = t.createElement("div"), n = t && (t.body || t.firstElementChild);
    n && n.appendChild && (n.appendChild(r), r.appendChild(i), r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), Ro = i.offsetParent !== r, n.removeChild(r));
  }
  return t;
}, _l = function(e) {
  for (var t, r; e && e !== Ei; )
    r = e._gsap, r && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), t ? t.push(r) : t = [r]), e = e.parentNode;
  return t;
}, No = [], jo = [], gl = function() {
  return er.pageYOffset || wt.scrollTop || Ln.scrollTop || Ei.scrollTop || 0;
}, ml = function() {
  return er.pageXOffset || wt.scrollLeft || Ln.scrollLeft || Ei.scrollLeft || 0;
}, In = function(e) {
  return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, xl = function a(e) {
  if (er.getComputedStyle(e).position === "fixed")
    return !0;
  if (e = e.parentNode, e && e.nodeType === 1)
    return a(e);
}, Xi = function a(e, t) {
  if (e.parentNode && (wt || Mo(e))) {
    var r = In(e), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = r ? t ? "rect" : "g" : "div", s = t !== 2 ? 0 : 100, o = t === 3 ? 100 : 0, c = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", u = wt.createElementNS ? wt.createElementNS(i.replace(/^https/, "http"), n) : wt.createElement(n);
    return t && (r ? (di || (di = a(e)), u.setAttribute("width", 0.01), u.setAttribute("height", 0.01), u.setAttribute("transform", "translate(" + s + "," + o + ")"), di.appendChild(u)) : (Or || (Or = a(e), Or.style.cssText = c), u.style.cssText = c + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", Or.appendChild(u))), u;
  }
  throw "Need document and parent.";
}, yl = function(e) {
  for (var t = new ir(), r = 0; r < e.numberOfItems; r++)
    t.multiply(e.getItem(r).matrix);
  return t;
}, vl = function(e) {
  var t = e.getCTM(), r;
  return t || (r = e.style[ct], e.style[ct] = "none", e.appendChild(Xr), t = Xr.getCTM(), e.removeChild(Xr), r ? e.style[ct] = r : e.style.removeProperty(ct.replace(/([A-Z])/g, "-$1").toLowerCase())), t || bi.clone();
}, bl = function(e, t) {
  var r = In(e), i = e === r, n = r ? No : jo, s = e.parentNode, o = s && !r && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s, c, u, d, f, _, l;
  if (e === er)
    return e;
  if (n.length || n.push(Xi(e, 1), Xi(e, 2), Xi(e, 3)), c = r ? di : Or, r)
    i ? (d = vl(e), f = -d.e / d.a, _ = -d.f / d.d, u = bi) : e.getBBox ? (d = e.getBBox(), u = e.transform ? e.transform.baseVal : {}, u = u.numberOfItems ? u.numberOfItems > 1 ? yl(u) : u.getItem(0).matrix : bi, f = u.a * d.x + u.c * d.y, _ = u.b * d.x + u.d * d.y) : (u = new ir(), f = _ = 0), (i ? r : s).appendChild(c), c.setAttribute("transform", "matrix(" + u.a + "," + u.b + "," + u.c + "," + u.d + "," + (u.e + f) + "," + (u.f + _) + ")");
  else {
    if (f = _ = 0, Ro)
      for (u = e.offsetParent, d = e; d && (d = d.parentNode) && d !== u && d.parentNode; )
        (er.getComputedStyle(d)[ct] + "").length > 4 && (f = d.offsetLeft, _ = d.offsetTop, d = 0);
    if (l = er.getComputedStyle(e), l.position !== "absolute" && l.position !== "fixed")
      for (u = e.offsetParent; s && s !== u; )
        f += s.scrollLeft || 0, _ += s.scrollTop || 0, s = s.parentNode;
    d = c.style, d.top = e.offsetTop - _ + "px", d.left = e.offsetLeft - f + "px", d[ct] = l[ct], d[fn] = l[fn], d.position = l.position === "fixed" ? "fixed" : "absolute", o.appendChild(c);
  }
  return c;
}, Yi = function(e, t, r, i, n, s, o) {
  return e.a = t, e.b = r, e.c = i, e.d = n, e.e = s, e.f = o, e;
}, ir = /* @__PURE__ */ function() {
  function a(t, r, i, n, s, o) {
    t === void 0 && (t = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), o === void 0 && (o = 0), Yi(this, t, r, i, n, s, o);
  }
  var e = a.prototype;
  return e.inverse = function() {
    var r = this.a, i = this.b, n = this.c, s = this.d, o = this.e, c = this.f, u = r * s - i * n || 1e-10;
    return Yi(this, s / u, -i / u, -n / u, r / u, (n * c - s * o) / u, -(r * c - i * o) / u);
  }, e.multiply = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, c = this.e, u = this.f, d = r.a, f = r.c, _ = r.b, l = r.d, g = r.e, h = r.f;
    return Yi(this, d * i + _ * s, d * n + _ * o, f * i + l * s, f * n + l * o, c + g * i + h * s, u + g * n + h * o);
  }, e.clone = function() {
    return new a(this.a, this.b, this.c, this.d, this.e, this.f);
  }, e.equals = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, c = this.e, u = this.f;
    return i === r.a && n === r.b && s === r.c && o === r.d && c === r.e && u === r.f;
  }, e.apply = function(r, i) {
    i === void 0 && (i = {});
    var n = r.x, s = r.y, o = this.a, c = this.b, u = this.c, d = this.d, f = this.e, _ = this.f;
    return i.x = n * o + s * u + f || 0, i.y = n * c + s * d + _ || 0, i;
  }, a;
}();
function qt(a, e, t, r) {
  if (!a || !a.parentNode || (wt || Mo(a)).documentElement === a)
    return new ir();
  var i = _l(a), n = In(a), s = n ? No : jo, o = bl(a), c = s[0].getBoundingClientRect(), u = s[1].getBoundingClientRect(), d = s[2].getBoundingClientRect(), f = o.parentNode, _ = xl(a), l = new ir((u.left - c.left) / 100, (u.top - c.top) / 100, (d.left - c.left) / 100, (d.top - c.top) / 100, c.left + (_ ? 0 : ml()), c.top + (_ ? 0 : gl()));
  if (f.removeChild(o), i)
    for (c = i.length; c--; )
      u = i[c], u.scaleX = u.scaleY = 0, u.renderTransform(1, u);
  return e ? l.inverse() : l;
}
function ps(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function wl(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e;
}
var Q, le, Ge, ut, Tt, zi, bt, hn, Ar, Ot, Oo, pn, Jr, Fn, $r, at, Lr, fi, Ao, _n, wi = 0, $o = function() {
  return typeof window < "u";
}, Lo = function() {
  return Q || $o() && (Q = window.gsap) && Q.registerPlugin && Q;
}, Rt = function(e) {
  return typeof e == "function";
}, Yr = function(e) {
  return typeof e == "object";
}, lt = function(e) {
  return typeof e > "u";
}, hi = function() {
  return !1;
}, zr = "transform", gn = "transformOrigin", Ct = function(e) {
  return Math.round(e * 1e4) / 1e4;
}, Mr = Array.isArray, oi = function(e, t) {
  var r = Ge.createElementNS ? Ge.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/, "http"), e) : Ge.createElement(e);
  return r.style ? r : Ge.createElement(e);
}, _s = 180 / Math.PI, Vt = 1e20, Tl = new ir(), Dt = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
}, tr = [], hr = {}, kl = 0, Sl = /^(?:a|input|textarea|button|select)$/i, gs = 0, or = {}, xt = {}, Io = function(e, t) {
  var r = {}, i;
  for (i in e)
    r[i] = t ? e[i] * t : e[i];
  return r;
}, El = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, ms = function a(e, t) {
  for (var r = e.length, i; r--; )
    t ? e[r].style.touchAction = t : e[r].style.removeProperty("touch-action"), i = e[r].children, i && i.length && a(i, t);
}, Fo = function() {
  return tr.forEach(function(e) {
    return e();
  });
}, Pl = function(e) {
  tr.push(e), tr.length === 1 && Q.ticker.add(Fo);
}, xs = function() {
  return !tr.length && Q.ticker.remove(Fo);
}, ys = function(e) {
  for (var t = tr.length; t--; )
    tr[t] === e && tr.splice(t, 1);
  Q.to(xs, {
    overwrite: !0,
    delay: 15,
    duration: 0,
    onComplete: xs,
    data: "_draggable"
  });
}, Cl = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, ke = function(e, t, r, i) {
  if (e.addEventListener) {
    var n = Jr[t];
    i = i || (Oo ? {
      passive: !1
    } : null), e.addEventListener(n || t, r, i), n && t !== n && e.addEventListener(t, r, i);
  }
}, be = function(e, t, r, i) {
  if (e.removeEventListener) {
    var n = Jr[t];
    e.removeEventListener(n || t, r, i), n && t !== n && e.removeEventListener(t, r, i);
  }
}, Ze = function(e) {
  e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation();
}, Dl = function(e, t) {
  for (var r = e.length; r--; )
    if (e[r].identifier === t)
      return !0;
}, Rl = function a(e) {
  Fn = e.touches && wi < e.touches.length, be(e.target, "touchend", a);
}, vs = function(e) {
  Fn = e.touches && wi < e.touches.length, ke(e.target, "touchend", Rl);
}, pr = function(e) {
  return le.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0;
}, _r = function(e) {
  return le.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0;
}, bs = function a(e, t) {
  ke(e, "scroll", t), wr(e.parentNode) || a(e.parentNode, t);
}, ws = function a(e, t) {
  be(e, "scroll", t), wr(e.parentNode) || a(e.parentNode, t);
}, wr = function(e) {
  return !e || e === ut || e.nodeType === 9 || e === Ge.body || e === le || !e.nodeType || !e.parentNode;
}, Ts = function(e, t) {
  var r = t === "x" ? "Width" : "Height", i = "scroll" + r, n = "client" + r;
  return Math.max(0, wr(e) ? Math.max(ut[i], Tt[i]) - (le["inner" + r] || ut[n] || Tt[n]) : e[i] - e[n]);
}, Gi = function a(e, t) {
  var r = Ts(e, "x"), i = Ts(e, "y");
  wr(e) ? e = xt : a(e.parentNode, t), e._gsMaxScrollX = r, e._gsMaxScrollY = i, t || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0);
}, Vi = function(e, t, r) {
  var i = e.style;
  i && (lt(i[t]) && (t = Ar(t, e) || t), r == null ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = r);
}, ei = function(e) {
  return le.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e);
}, Wt = {}, ar = function(e) {
  if (e === le)
    return Wt.left = Wt.top = 0, Wt.width = Wt.right = ut.clientWidth || e.innerWidth || Tt.clientWidth || 0, Wt.height = Wt.bottom = (e.innerHeight || 0) - 20 < ut.clientHeight ? ut.clientHeight : e.innerHeight || Tt.clientHeight || 0, Wt;
  var t = e.ownerDocument || Ge, r = lt(e.pageX) ? !e.nodeType && !lt(e.left) && !lt(e.top) ? e : Ot(e)[0].getBoundingClientRect() : {
    left: e.pageX - _r(t),
    top: e.pageY - pr(t),
    right: e.pageX - _r(t) + 1,
    bottom: e.pageY - pr(t) + 1
  };
  return lt(r.right) && !lt(r.width) ? (r.right = r.left + r.width, r.bottom = r.top + r.height) : lt(r.width) && (r = {
    width: r.right - r.left,
    height: r.bottom - r.top,
    right: r.right,
    left: r.left,
    bottom: r.bottom,
    top: r.top
  }), r;
}, me = function(e, t, r) {
  var i = e.vars, n = i[r], s = e._listeners[t], o;
  return Rt(n) && (o = n.apply(i.callbackScope || e, i[r + "Params"] || [e.pointerEvent])), s && e.dispatchEvent(t) === !1 && (o = !1), o;
}, ks = function(e, t) {
  var r = Ot(e)[0], i, n, s;
  return !r.nodeType && r !== le ? lt(e.left) ? (n = e.min || e.minX || e.minRotation || 0, i = e.min || e.minY || 0, {
    left: n,
    top: i,
    width: (e.max || e.maxX || e.maxRotation || 0) - n,
    height: (e.max || e.maxY || 0) - i
  }) : (s = {
    x: 0,
    y: 0
  }, {
    left: e.left - s.x,
    top: e.top - s.y,
    width: e.width,
    height: e.height
  }) : Ml(r, t);
}, Je = {}, Ml = function(e, t) {
  t = Ot(t)[0];
  var r = e.getBBox && e.ownerSVGElement, i = e.ownerDocument || Ge, n, s, o, c, u, d, f, _, l, g, h, y, v;
  if (e === le)
    o = pr(i), n = _r(i), s = n + (i.documentElement.clientWidth || e.innerWidth || i.body.clientWidth || 0), c = o + ((e.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : e.innerHeight || i.body.clientHeight || 0);
  else {
    if (t === le || lt(t))
      return e.getBoundingClientRect();
    n = o = 0, r ? (g = e.getBBox(), h = g.width, y = g.height) : (e.viewBox && (g = e.viewBox.baseVal) && (n = g.x || 0, o = g.y || 0, h = g.width, y = g.height), h || (v = ei(e), g = v.boxSizing === "border-box", h = (parseFloat(v.width) || e.clientWidth || 0) + (g ? 0 : parseFloat(v.borderLeftWidth) + parseFloat(v.borderRightWidth)), y = (parseFloat(v.height) || e.clientHeight || 0) + (g ? 0 : parseFloat(v.borderTopWidth) + parseFloat(v.borderBottomWidth)))), s = h, c = y;
  }
  return e === t ? {
    left: n,
    top: o,
    width: s - n,
    height: c - o
  } : (u = qt(t, !0).multiply(qt(e)), d = u.apply({
    x: n,
    y: o
  }), f = u.apply({
    x: s,
    y: o
  }), _ = u.apply({
    x: s,
    y: c
  }), l = u.apply({
    x: n,
    y: c
  }), n = Math.min(d.x, f.x, _.x, l.x), o = Math.min(d.y, f.y, _.y, l.y), {
    left: n,
    top: o,
    width: Math.max(d.x, f.x, _.x, l.x) - n,
    height: Math.max(d.y, f.y, _.y, l.y) - o
  });
}, Wi = function(e, t, r, i, n, s) {
  var o = {}, c, u, d;
  if (t)
    if (n !== 1 && t instanceof Array) {
      if (o.end = c = [], d = t.length, Yr(t[0]))
        for (u = 0; u < d; u++)
          c[u] = Io(t[u], n);
      else
        for (u = 0; u < d; u++)
          c[u] = t[u] * n;
      r += 1.1, i -= 1.1;
    } else Rt(t) ? o.end = function(f) {
      var _ = t.call(e, f), l, g;
      if (n !== 1)
        if (Yr(_)) {
          l = {};
          for (g in _)
            l[g] = _[g] * n;
          _ = l;
        } else
          _ *= n;
      return _;
    } : o.end = t;
  return (r || r === 0) && (o.max = r), (i || i === 0) && (o.min = i), s && (o.velocity = 0), o;
}, Nl = function a(e) {
  var t;
  return !e || !e.getAttribute || e === Tt ? !1 : (t = e.getAttribute("data-clickable")) === "true" || t !== "false" && (Sl.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : a(e.parentNode);
}, ai = function(e, t) {
  for (var r = e.length, i; r--; )
    i = e[r], i.ondragstart = i.onselectstart = t ? null : hi, Q.set(i, {
      lazy: !0,
      userSelect: t ? "text" : "none"
    });
}, jl = function a(e) {
  if (ei(e).position === "fixed")
    return !0;
  if (e = e.parentNode, e && e.nodeType === 1)
    return a(e);
}, Bo, mn, Ol = function(e, t) {
  e = Q.utils.toArray(e)[0], t = t || {};
  var r = document.createElement("div"), i = r.style, n = e.firstChild, s = 0, o = 0, c = e.scrollTop, u = e.scrollLeft, d = e.scrollWidth, f = e.scrollHeight, _ = 0, l = 0, g = 0, h, y, v, b, S, P;
  Bo && t.force3D !== !1 ? (S = "translate3d(", P = "px,0px)") : zr && (S = "translate(", P = "px)"), this.scrollTop = function(m, D) {
    if (!arguments.length)
      return -this.top();
    this.top(-m, D);
  }, this.scrollLeft = function(m, D) {
    if (!arguments.length)
      return -this.left();
    this.left(-m, D);
  }, this.left = function(m, D) {
    if (!arguments.length)
      return -(e.scrollLeft + o);
    var k = e.scrollLeft - u, T = o;
    if ((k > 2 || k < -2) && !D) {
      u = e.scrollLeft, Q.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      }), this.left(-u), t.onKill && t.onKill();
      return;
    }
    m = -m, m < 0 ? (o = m - 0.5 | 0, m = 0) : m > l ? (o = m - l | 0, m = l) : o = 0, (o || T) && (this._skip || (i[zr] = S + -o + "px," + -s + P), o + _ >= 0 && (i.paddingRight = o + _ + "px")), e.scrollLeft = m | 0, u = e.scrollLeft;
  }, this.top = function(m, D) {
    if (!arguments.length)
      return -(e.scrollTop + s);
    var k = e.scrollTop - c, T = s;
    if ((k > 2 || k < -2) && !D) {
      c = e.scrollTop, Q.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      }), this.top(-c), t.onKill && t.onKill();
      return;
    }
    m = -m, m < 0 ? (s = m - 0.5 | 0, m = 0) : m > g ? (s = m - g | 0, m = g) : s = 0, (s || T) && (this._skip || (i[zr] = S + -o + "px," + -s + P)), e.scrollTop = m | 0, c = e.scrollTop;
  }, this.maxScrollTop = function() {
    return g;
  }, this.maxScrollLeft = function() {
    return l;
  }, this.disable = function() {
    for (n = r.firstChild; n; )
      b = n.nextSibling, e.appendChild(n), n = b;
    e === r.parentNode && e.removeChild(r);
  }, this.enable = function() {
    if (n = e.firstChild, n !== r) {
      for (; n; )
        b = n.nextSibling, r.appendChild(n), n = b;
      e.appendChild(r), this.calibrate();
    }
  }, this.calibrate = function(m) {
    var D = e.clientWidth === h, k, T, R;
    c = e.scrollTop, u = e.scrollLeft, !(D && e.clientHeight === y && r.offsetHeight === v && d === e.scrollWidth && f === e.scrollHeight && !m) && ((s || o) && (T = this.left(), R = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), k = ei(e), (!D || m) && (i.display = "block", i.width = "auto", i.paddingRight = "0px", _ = Math.max(0, e.scrollWidth - e.clientWidth), _ && (_ += parseFloat(k.paddingLeft) + (mn ? parseFloat(k.paddingRight) : 0))), i.display = "inline-block", i.position = "relative", i.overflow = "visible", i.verticalAlign = "top", i.boxSizing = "content-box", i.width = "100%", i.paddingRight = _ + "px", mn && (i.paddingBottom = k.paddingBottom), h = e.clientWidth, y = e.clientHeight, d = e.scrollWidth, f = e.scrollHeight, l = e.scrollWidth - h, g = e.scrollHeight - y, v = r.offsetHeight, i.display = "block", (T || R) && (this.left(T), this.top(R)));
  }, this.content = r, this.element = e, this._skip = !1, this.enable();
}, Ui = function(e) {
  if ($o() && document.body) {
    var t = window && window.navigator;
    le = window, Ge = document, ut = Ge.documentElement, Tt = Ge.body, zi = oi("div"), fi = !!window.PointerEvent, bt = oi("div"), bt.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Lr = bt.style.cursor === "grab" ? "grab" : "move", $r = t && t.userAgent.toLowerCase().indexOf("android") !== -1, pn = "ontouchstart" in ut && "orientation" in le || t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0), mn = function() {
      var r = oi("div"), i = oi("div"), n = i.style, s = Tt, o;
      return n.display = "inline-block", n.position = "relative", r.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", r.appendChild(i), s.appendChild(r), o = i.offsetHeight + 18 > r.scrollHeight, s.removeChild(r), o;
    }(), Jr = function(r) {
      for (var i = r.split(","), n = ("onpointerdown" in zi ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in zi ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : r).split(","), s = {}, o = 4; --o > -1; )
        s[i[o]] = n[o], s[n[o]] = i[o];
      try {
        ut.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function() {
            Oo = 1;
          }
        }));
      } catch {
      }
      return s;
    }("touchstart,touchmove,touchend,touchcancel"), ke(Ge, "touchcancel", hi), ke(le, "touchmove", hi), Tt && Tt.addEventListener("touchstart", hi), ke(Ge, "contextmenu", function() {
      for (var r in hr)
        hr[r].isPressed && hr[r].endDrag();
    }), Q = hn = Lo();
  }
  Q ? (at = Q.plugins.inertia, Ao = Q.core.context || function() {
  }, Ar = Q.utils.checkPrefix, zr = Ar(zr), gn = Ar(gn), Ot = Q.utils.toArray, _n = Q.core.getStyleSaver, Bo = !!Ar("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)");
}, Al = /* @__PURE__ */ function() {
  function a(t) {
    this._listeners = {}, this.target = t || this;
  }
  var e = a.prototype;
  return e.addEventListener = function(r, i) {
    var n = this._listeners[r] || (this._listeners[r] = []);
    ~n.indexOf(i) || n.push(i);
  }, e.removeEventListener = function(r, i) {
    var n = this._listeners[r], s = n && n.indexOf(i);
    s >= 0 && n.splice(s, 1);
  }, e.dispatchEvent = function(r) {
    var i = this, n;
    return (this._listeners[r] || []).forEach(function(s) {
      return s.call(i, {
        type: r,
        target: i.target
      }) === !1 && (n = !1);
    }), n;
  }, a;
}(), Tr = /* @__PURE__ */ function(a) {
  wl(e, a);
  function e(t, r) {
    var i;
    i = a.call(this) || this, hn || Ui(1), t = Ot(t)[0], i.styles = _n && _n(t, "transform,left,top"), at || (at = Q.plugins.inertia), i.vars = r = Io(r || {}), i.target = t, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(r.dragResistance) || 0, i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0, i.lockAxis = r.lockAxis, i.autoScroll = r.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!r.allowEventDefault, Q.getProperty(t, "x");
    var n = (r.type || "x,y").toLowerCase(), s = ~n.indexOf("x") || ~n.indexOf("y"), o = n.indexOf("rotation") !== -1, c = o ? "rotation" : s ? "x" : "left", u = s ? "y" : "top", d = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"), f = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"), _ = r.minimumMovement || 2, l = ps(i), g = Ot(r.trigger || r.handle || t), h = {}, y = 0, v = !1, b = r.autoScrollMarginTop || 40, S = r.autoScrollMarginRight || 40, P = r.autoScrollMarginBottom || 40, m = r.autoScrollMarginLeft || 40, D = r.clickableTest || Nl, k = 0, T = t._gsap || Q.core.getCache(t), R = jl(t), C = function(x, M) {
      return parseFloat(T.get(t, x, M));
    }, O = t.ownerDocument || Ge, Y, A, H, U, G, L, I, W, q, w, N, V, B, de, _e, re, ie, Be, dt, Et, Bt, kr, Ee, ne, Yn, Ke, nt, Pi, Ci, zn, Xe, Gn, ri, Vn = function(x) {
      return Ze(x), x.stopImmediatePropagation && x.stopImmediatePropagation(), !1;
    }, ft = function z(x) {
      if (l.autoScroll && l.isDragging && (v || ie)) {
        var M = t, E = l.autoScroll * 15, j, $, F, K, X, se, ee, oe;
        for (v = !1, xt.scrollTop = le.pageYOffset != null ? le.pageYOffset : O.documentElement.scrollTop != null ? O.documentElement.scrollTop : O.body.scrollTop, xt.scrollLeft = le.pageXOffset != null ? le.pageXOffset : O.documentElement.scrollLeft != null ? O.documentElement.scrollLeft : O.body.scrollLeft, K = l.pointerX - xt.scrollLeft, X = l.pointerY - xt.scrollTop; M && !$; )
          $ = wr(M.parentNode), j = $ ? xt : M.parentNode, F = $ ? {
            bottom: Math.max(ut.clientHeight, le.innerHeight || 0),
            right: Math.max(ut.clientWidth, le.innerWidth || 0),
            left: 0,
            top: 0
          } : j.getBoundingClientRect(), se = ee = 0, f && (oe = j._gsMaxScrollY - j.scrollTop, oe < 0 ? ee = oe : X > F.bottom - P && oe ? (v = !0, ee = Math.min(oe, E * (1 - Math.max(0, F.bottom - X) / P) | 0)) : X < F.top + b && j.scrollTop && (v = !0, ee = -Math.min(j.scrollTop, E * (1 - Math.max(0, X - F.top) / b) | 0)), ee && (j.scrollTop += ee)), d && (oe = j._gsMaxScrollX - j.scrollLeft, oe < 0 ? se = oe : K > F.right - S && oe ? (v = !0, se = Math.min(oe, E * (1 - Math.max(0, F.right - K) / S) | 0)) : K < F.left + m && j.scrollLeft && (v = !0, se = -Math.min(j.scrollLeft, E * (1 - Math.max(0, K - F.left) / m) | 0)), se && (j.scrollLeft += se)), $ && (se || ee) && (le.scrollTo(j.scrollLeft, j.scrollTop), Pr(l.pointerX + se, l.pointerY + ee)), M = j;
      }
      if (ie) {
        var ge = l.x, De = l.y;
        o ? (l.deltaX = ge - parseFloat(T.rotation), l.rotation = ge, T.rotation = ge + "deg", T.renderTransform(1, T)) : A ? (f && (l.deltaY = De - A.top(), A.top(De)), d && (l.deltaX = ge - A.left(), A.left(ge))) : s ? (f && (l.deltaY = De - parseFloat(T.y), T.y = De + "px"), d && (l.deltaX = ge - parseFloat(T.x), T.x = ge + "px"), T.renderTransform(1, T)) : (f && (l.deltaY = De - parseFloat(t.style.top || 0), t.style.top = De + "px"), d && (l.deltaX = ge - parseFloat(t.style.left || 0), t.style.left = ge + "px")), W && !x && !Pi && (Pi = !0, me(l, "drag", "onDrag") === !1 && (d && (l.x -= l.deltaX), f && (l.y -= l.deltaY), z(!0)), Pi = !1);
      }
      ie = !1;
    }, Xt = function(x, M) {
      var E = l.x, j = l.y, $, F;
      t._gsap || (T = Q.core.getCache(t)), T.uncache && Q.getProperty(t, "x"), s ? (l.x = parseFloat(T.x), l.y = parseFloat(T.y)) : o ? l.x = l.rotation = parseFloat(T.rotation) : A ? (l.y = A.top(), l.x = A.left()) : (l.y = parseFloat(t.style.top || (F = ei(t)) && F.top) || 0, l.x = parseFloat(t.style.left || (F || {}).left) || 0), (dt || Et || Bt) && !M && (l.isDragging || l.isThrowing) && (Bt && (or.x = l.x, or.y = l.y, $ = Bt(or), $.x !== l.x && (l.x = $.x, ie = !0), $.y !== l.y && (l.y = $.y, ie = !0)), dt && ($ = dt(l.x), $ !== l.x && (l.x = $, o && (l.rotation = $), ie = !0)), Et && ($ = Et(l.y), $ !== l.y && (l.y = $), ie = !0)), ie && ft(!0), x || (l.deltaX = l.x - E, l.deltaY = l.y - j, me(l, "throwupdate", "onThrowUpdate"));
    }, Di = function(x, M, E, j) {
      return M == null && (M = -Vt), E == null && (E = Vt), Rt(x) ? function($) {
        var F = l.isPressed ? 1 - l.edgeResistance : 1;
        return x.call(l, ($ > E ? E + ($ - E) * F : $ < M ? M + ($ - M) * F : $) * j) * j;
      } : Mr(x) ? function($) {
        for (var F = x.length, K = 0, X = Vt, se, ee; --F > -1; )
          se = x[F], ee = se - $, ee < 0 && (ee = -ee), ee < X && se >= M && se <= E && (K = F, X = ee);
        return x[K];
      } : isNaN(x) ? function($) {
        return $;
      } : function() {
        return x * j;
      };
    }, Uo = function(x, M, E, j, $, F, K) {
      return F = F && F < Vt ? F * F : Vt, Rt(x) ? function(X) {
        var se = l.isPressed ? 1 - l.edgeResistance : 1, ee = X.x, oe = X.y, ge, De, mt;
        return X.x = ee = ee > E ? E + (ee - E) * se : ee < M ? M + (ee - M) * se : ee, X.y = oe = oe > $ ? $ + (oe - $) * se : oe < j ? j + (oe - j) * se : oe, ge = x.call(l, X), ge !== X && (X.x = ge.x, X.y = ge.y), K !== 1 && (X.x *= K, X.y *= K), F < Vt && (De = X.x - ee, mt = X.y - oe, De * De + mt * mt > F && (X.x = ee, X.y = oe)), X;
      } : Mr(x) ? function(X) {
        for (var se = x.length, ee = 0, oe = Vt, ge, De, mt, Qe; --se > -1; )
          mt = x[se], ge = mt.x - X.x, De = mt.y - X.y, Qe = ge * ge + De * De, Qe < oe && (ee = se, oe = Qe);
        return oe <= F ? x[ee] : X;
      } : function(X) {
        return X;
      };
    }, Ri = function() {
      var x, M, E, j;
      I = !1, A ? (A.calibrate(), l.minX = N = -A.maxScrollLeft(), l.minY = B = -A.maxScrollTop(), l.maxX = w = l.maxY = V = 0, I = !0) : r.bounds && (x = ks(r.bounds, t.parentNode), o ? (l.minX = N = x.left, l.maxX = w = x.left + x.width, l.minY = B = l.maxY = V = 0) : !lt(r.bounds.maxX) || !lt(r.bounds.maxY) ? (x = r.bounds, l.minX = N = x.minX, l.minY = B = x.minY, l.maxX = w = x.maxX, l.maxY = V = x.maxY) : (M = ks(t, t.parentNode), l.minX = N = Math.round(C(c, "px") + x.left - M.left), l.minY = B = Math.round(C(u, "px") + x.top - M.top), l.maxX = w = Math.round(N + (x.width - M.width)), l.maxY = V = Math.round(B + (x.height - M.height))), N > w && (l.minX = w, l.maxX = w = N, N = l.minX), B > V && (l.minY = V, l.maxY = V = B, B = l.minY), o && (l.minRotation = N, l.maxRotation = w), I = !0), r.liveSnap && (E = r.liveSnap === !0 ? r.snap || {} : r.liveSnap, j = Mr(E) || Rt(E), o ? (dt = Di(j ? E : E.rotation, N, w, 1), Et = null) : E.points ? Bt = Uo(j ? E : E.points, N, w, B, V, E.radius, A ? -1 : 1) : (d && (dt = Di(j ? E : E.x || E.left || E.scrollLeft, N, w, A ? -1 : 1)), f && (Et = Di(j ? E : E.y || E.top || E.scrollTop, B, V, A ? -1 : 1))));
    }, qo = function() {
      l.isThrowing = !1, me(l, "throwcomplete", "onThrowComplete");
    }, Ho = function() {
      l.isThrowing = !1;
    }, Mi = function(x, M) {
      var E, j, $, F;
      x && at ? (x === !0 && (E = r.snap || r.liveSnap || {}, j = Mr(E) || Rt(E), x = {
        resistance: (r.throwResistance || r.resistance || 1e3) / (o ? 10 : 1)
      }, o ? x.rotation = Wi(l, j ? E : E.rotation, w, N, 1, M) : (d && (x[c] = Wi(l, j ? E : E.points || E.x || E.left, w, N, A ? -1 : 1, M || l.lockedAxis === "x")), f && (x[u] = Wi(l, j ? E : E.points || E.y || E.top, V, B, A ? -1 : 1, M || l.lockedAxis === "y")), (E.points || Mr(E) && Yr(E[0])) && (x.linkedProps = c + "," + u, x.radius = E.radius))), l.isThrowing = !0, F = isNaN(r.overshootTolerance) ? r.edgeResistance === 1 ? 0 : 1 - l.edgeResistance + 0.2 : r.overshootTolerance, x.duration || (x.duration = {
        max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
        min: isNaN(r.minDuration) ? F === 0 || Yr(x) && x.resistance > 1e3 ? 0 : 0.5 : r.minDuration,
        overshoot: F
      }), l.tween = $ = Q.to(A || t, {
        inertia: x,
        data: "_draggable",
        inherit: !1,
        onComplete: qo,
        onInterrupt: Ho,
        onUpdate: r.fastMode ? me : Xt,
        onUpdateParams: r.fastMode ? [l, "onthrowupdate", "onThrowUpdate"] : E && E.radius ? [!1, !0] : []
      }), r.fastMode || (A && (A._skip = !0), $.render(1e9, !0, !0), Xt(!0, !0), l.endX = l.x, l.endY = l.y, o && (l.endRotation = l.x), $.play(0), Xt(!0, !0), A && (A._skip = !1))) : I && l.applyBounds();
    }, Wn = function(x) {
      var M = ne, E;
      ne = qt(t.parentNode, !0), x && l.isPressed && !ne.equals(M || new ir()) && (E = M.inverse().apply({
        x: H,
        y: U
      }), ne.apply(E, E), H = E.x, U = E.y), ne.equals(Tl) && (ne = null);
    }, ii = function() {
      var x = 1 - l.edgeResistance, M = R ? _r(O) : 0, E = R ? pr(O) : 0, j, $, F;
      s && (T.x = C(c, "px") + "px", T.y = C(u, "px") + "px", T.renderTransform()), Wn(!1), Je.x = l.pointerX - M, Je.y = l.pointerY - E, ne && ne.apply(Je, Je), H = Je.x, U = Je.y, ie && (Pr(l.pointerX, l.pointerY), ft(!0)), Gn = qt(t), A ? (Ri(), L = A.top(), G = A.left()) : (Sr() ? (Xt(!0, !0), Ri()) : l.applyBounds(), o ? (j = t.ownerSVGElement ? [T.xOrigin - t.getBBox().x, T.yOrigin - t.getBBox().y] : (ei(t)[gn] || "0 0").split(" "), re = l.rotationOrigin = qt(t).apply({
        x: parseFloat(j[0]) || 0,
        y: parseFloat(j[1]) || 0
      }), Xt(!0, !0), $ = l.pointerX - re.x - M, F = re.y - l.pointerY + E, G = l.x, L = l.y = Math.atan2(F, $) * _s) : (L = C(u, "px"), G = C(c, "px"))), I && x && (G > w ? G = w + (G - w) / x : G < N && (G = N - (N - G) / x), o || (L > V ? L = V + (L - V) / x : L < B && (L = B - (B - L) / x))), l.startX = G = Ct(G), l.startY = L = Ct(L);
    }, Sr = function() {
      return l.tween && l.tween.isActive();
    }, Ko = function() {
      bt.parentNode && !Sr() && !l.isDragging && bt.parentNode.removeChild(bt);
    }, Er = function(x, M) {
      var E;
      if (!Y || l.isPressed || !x || (x.type === "mousedown" || x.type === "pointerdown") && !M && Dt() - k < 30 && Jr[l.pointerEvent.type]) {
        Xe && x && Y && Ze(x);
        return;
      }
      if (Yn = Sr(), ri = !1, l.pointerEvent = x, Jr[x.type] ? (Ee = ~x.type.indexOf("touch") ? x.currentTarget || x.target : O, ke(Ee, "touchend", st), ke(Ee, "touchmove", Yt), ke(Ee, "touchcancel", st), ke(O, "touchstart", vs)) : (Ee = null, ke(O, "mousemove", Yt)), nt = null, (!fi || !Ee) && (ke(O, "mouseup", st), x && x.target && ke(x.target, "mouseup", st)), kr = D.call(l, x.target) && r.dragClickables === !1 && !M, kr) {
        ke(x.target, "change", st), me(l, "pressInit", "onPressInit"), me(l, "press", "onPress"), ai(g, !0), Xe = !1;
        return;
      }
      if (Ke = !Ee || d === f || l.vars.allowNativeTouchScrolling === !1 || l.vars.allowContextMenu && x && (x.ctrlKey || x.which > 2) ? !1 : d ? "y" : "x", Xe = !Ke && !l.allowEventDefault, Xe && (Ze(x), ke(le, "touchforcechange", Ze)), x.changedTouches ? (x = de = x.changedTouches[0], _e = x.identifier) : x.pointerId ? _e = x.pointerId : de = _e = null, wi++, Pl(ft), U = l.pointerY = x.pageY, H = l.pointerX = x.pageX, me(l, "pressInit", "onPressInit"), (Ke || l.autoScroll) && Gi(t.parentNode), t.parentNode && l.autoScroll && !A && !o && t.parentNode._gsMaxScrollX && !bt.parentNode && !t.getBBox && (bt.style.width = t.parentNode.scrollWidth + "px", t.parentNode.appendChild(bt)), ii(), l.tween && l.tween.kill(), l.isThrowing = !1, Q.killTweensOf(A || t, h, !0), A && Q.killTweensOf(t, {
        scrollTo: 1
      }, !0), l.tween = l.lockedAxis = null, (r.zIndexBoost || !o && !A && r.zIndexBoost !== !1) && (t.style.zIndex = e.zIndex++), l.isPressed = !0, W = !!(r.onDrag || l._listeners.drag), q = !!(r.onMove || l._listeners.move), r.cursor !== !1 || r.activeCursor)
        for (E = g.length; --E > -1; )
          Q.set(g[E], {
            cursor: r.activeCursor || r.cursor || (Lr === "grab" ? "grabbing" : Lr)
          });
      me(l, "press", "onPress");
    }, Yt = function(x) {
      var M = x, E, j, $, F, K, X;
      if (!Y || Fn || !l.isPressed || !x) {
        Xe && x && Y && Ze(x);
        return;
      }
      if (l.pointerEvent = x, E = x.changedTouches, E) {
        if (x = E[0], x !== de && x.identifier !== _e) {
          for (F = E.length; --F > -1 && (x = E[F]).identifier !== _e && x.target !== t; )
            ;
          if (F < 0)
            return;
        }
      } else if (x.pointerId && _e && x.pointerId !== _e)
        return;
      if (Ee && Ke && !nt && (Je.x = x.pageX - (R ? _r(O) : 0), Je.y = x.pageY - (R ? pr(O) : 0), ne && ne.apply(Je, Je), j = Je.x, $ = Je.y, K = Math.abs(j - H), X = Math.abs($ - U), (K !== X && (K > _ || X > _) || $r && Ke === nt) && (nt = K > X && d ? "x" : "y", Ke && nt !== Ke && ke(le, "touchforcechange", Ze), l.vars.lockAxisOnTouchScroll !== !1 && d && f && (l.lockedAxis = nt === "x" ? "y" : "x", Rt(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, M)), $r && Ke === nt))) {
        st(M);
        return;
      }
      !l.allowEventDefault && (!Ke || nt && Ke !== nt) && M.cancelable !== !1 ? (Ze(M), Xe = !0) : Xe && (Xe = !1), l.autoScroll && (v = !0), Pr(x.pageX, x.pageY, q);
    }, Pr = function(x, M, E) {
      var j = 1 - l.dragResistance, $ = 1 - l.edgeResistance, F = l.pointerX, K = l.pointerY, X = L, se = l.x, ee = l.y, oe = l.endX, ge = l.endY, De = l.endRotation, mt = ie, Qe, Pt, Pe, ve, Ni, ot;
      l.pointerX = x, l.pointerY = M, R && (x -= _r(O), M -= pr(O)), o ? (ve = Math.atan2(re.y - M, x - re.x) * _s, Ni = l.y - ve, Ni > 180 ? (L -= 360, l.y = ve) : Ni < -180 && (L += 360, l.y = ve), l.x !== G || Math.max(Math.abs(H - x), Math.abs(U - M)) > _ ? (l.y = ve, Pe = G + (L - ve) * j) : Pe = G) : (ne && (ot = x * ne.a + M * ne.c + ne.e, M = x * ne.b + M * ne.d + ne.f, x = ot), Pt = M - U, Qe = x - H, Pt < _ && Pt > -_ && (Pt = 0), Qe < _ && Qe > -_ && (Qe = 0), (l.lockAxis || l.lockedAxis) && (Qe || Pt) && (ot = l.lockedAxis, ot || (l.lockedAxis = ot = d && Math.abs(Qe) > Math.abs(Pt) ? "y" : f ? "x" : null, ot && Rt(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, l.pointerEvent)), ot === "y" ? Pt = 0 : ot === "x" && (Qe = 0)), Pe = Ct(G + Qe * j), ve = Ct(L + Pt * j)), (dt || Et || Bt) && (l.x !== Pe || l.y !== ve && !o) && (Bt && (or.x = Pe, or.y = ve, ot = Bt(or), Pe = Ct(ot.x), ve = Ct(ot.y)), dt && (Pe = Ct(dt(Pe))), Et && (ve = Ct(Et(ve)))), I && (Pe > w ? Pe = w + Math.round((Pe - w) * $) : Pe < N && (Pe = N + Math.round((Pe - N) * $)), o || (ve > V ? ve = Math.round(V + (ve - V) * $) : ve < B && (ve = Math.round(B + (ve - B) * $)))), (l.x !== Pe || l.y !== ve && !o) && (o ? (l.endRotation = l.x = l.endX = Pe, ie = !0) : (f && (l.y = l.endY = ve, ie = !0), d && (l.x = l.endX = Pe, ie = !0)), !E || me(l, "move", "onMove") !== !1 ? !l.isDragging && l.isPressed && (l.isDragging = ri = !0, me(l, "dragstart", "onDragStart")) : (l.pointerX = F, l.pointerY = K, L = X, l.x = se, l.y = ee, l.endX = oe, l.endY = ge, l.endRotation = De, ie = mt));
    }, st = function z(x, M) {
      if (!Y || !l.isPressed || x && _e != null && !M && (x.pointerId && x.pointerId !== _e && x.target !== t || x.changedTouches && !Dl(x.changedTouches, _e))) {
        Xe && x && Y && Ze(x);
        return;
      }
      l.isPressed = !1;
      var E = x, j = l.isDragging, $ = l.vars.allowContextMenu && x && (x.ctrlKey || x.which > 2), F = Q.delayedCall(1e-3, Ko), K, X, se, ee, oe;
      if (Ee ? (be(Ee, "touchend", z), be(Ee, "touchmove", Yt), be(Ee, "touchcancel", z), be(O, "touchstart", vs)) : be(O, "mousemove", Yt), be(le, "touchforcechange", Ze), (!fi || !Ee) && (be(O, "mouseup", z), x && x.target && be(x.target, "mouseup", z)), ie = !1, j && (y = gs = Dt(), l.isDragging = !1), ys(ft), kr && !$) {
        x && (be(x.target, "change", z), l.pointerEvent = E), ai(g, !1), me(l, "release", "onRelease"), me(l, "click", "onClick"), kr = !1;
        return;
      }
      for (X = g.length; --X > -1; )
        Vi(g[X], "cursor", r.cursor || (r.cursor !== !1 ? Lr : null));
      if (wi--, x) {
        if (K = x.changedTouches, K && (x = K[0], x !== de && x.identifier !== _e)) {
          for (X = K.length; --X > -1 && (x = K[X]).identifier !== _e && x.target !== t; )
            ;
          if (X < 0 && !M)
            return;
        }
        l.pointerEvent = E, l.pointerX = x.pageX, l.pointerY = x.pageY;
      }
      return $ && E ? (Ze(E), Xe = !0, me(l, "release", "onRelease")) : E && !j ? (Xe = !1, Yn && (r.snap || r.bounds) && Mi(r.inertia || r.throwProps), me(l, "release", "onRelease"), (!$r || E.type !== "touchmove") && E.type.indexOf("cancel") === -1 && (me(l, "click", "onClick"), Dt() - k < 300 && me(l, "doubleclick", "onDoubleClick"), ee = E.target || t, k = Dt(), oe = function() {
        k !== Ci && l.enabled() && !l.isPressed && !E.defaultPrevented && (ee.click ? ee.click() : O.createEvent && (se = O.createEvent("MouseEvents"), se.initMouseEvent("click", !0, !0, le, 1, l.pointerEvent.screenX, l.pointerEvent.screenY, l.pointerX, l.pointerY, !1, !1, !1, !1, 0, null), ee.dispatchEvent(se)));
      }, !$r && !E.defaultPrevented && Q.delayedCall(0.05, oe))) : (Mi(r.inertia || r.throwProps), !l.allowEventDefault && E && (r.dragClickables !== !1 || !D.call(l, E.target)) && j && (!Ke || nt && Ke === nt) && E.cancelable !== !1 ? (Xe = !0, Ze(E)) : Xe = !1, me(l, "release", "onRelease")), Sr() && F.duration(l.tween.duration()), j && me(l, "dragend", "onDragEnd"), !0;
    }, ni = function(x) {
      if (x && l.isDragging && !A) {
        var M = x.target || t.parentNode, E = M.scrollLeft - M._gsScrollX, j = M.scrollTop - M._gsScrollY;
        (E || j) && (ne ? (H -= E * ne.a + j * ne.c, U -= j * ne.d + E * ne.b) : (H -= E, U -= j), M._gsScrollX += E, M._gsScrollY += j, Pr(l.pointerX, l.pointerY));
      }
    }, Un = function(x) {
      var M = Dt(), E = M - k < 100, j = M - y < 50, $ = E && Ci === k, F = l.pointerEvent && l.pointerEvent.defaultPrevented, K = E && zn === k, X = x.isTrusted || x.isTrusted == null && E && $;
      if (($ || j && l.vars.suppressClickOnDrag !== !1) && x.stopImmediatePropagation && x.stopImmediatePropagation(), E && !(l.pointerEvent && l.pointerEvent.defaultPrevented) && (!$ || X && !K)) {
        X && $ && (zn = k), Ci = k;
        return;
      }
      (l.isPressed || j || E) && (!X || !x.detail || !E || F) && Ze(x), !E && !j && !ri && (x && x.target && (l.pointerEvent = x), me(l, "click", "onClick"));
    }, qn = function(x) {
      return ne ? {
        x: x.x * ne.a + x.y * ne.c + ne.e,
        y: x.x * ne.b + x.y * ne.d + ne.f
      } : {
        x: x.x,
        y: x.y
      };
    };
    return Be = e.get(t), Be && Be.kill(), i.startDrag = function(z, x) {
      var M, E, j, $;
      Er(z || l.pointerEvent, !0), x && !l.hitTest(z || l.pointerEvent) && (M = ar(z || l.pointerEvent), E = ar(t), j = qn({
        x: M.left + M.width / 2,
        y: M.top + M.height / 2
      }), $ = qn({
        x: E.left + E.width / 2,
        y: E.top + E.height / 2
      }), H -= j.x - $.x, U -= j.y - $.y), l.isDragging || (l.isDragging = ri = !0, me(l, "dragstart", "onDragStart"));
    }, i.drag = Yt, i.endDrag = function(z) {
      return st(z || l.pointerEvent, !0);
    }, i.timeSinceDrag = function() {
      return l.isDragging ? 0 : (Dt() - y) / 1e3;
    }, i.timeSinceClick = function() {
      return (Dt() - k) / 1e3;
    }, i.hitTest = function(z, x) {
      return e.hitTest(l.target, z, x);
    }, i.getDirection = function(z, x) {
      var M = z === "velocity" && at ? z : Yr(z) && !o ? "element" : "start", E, j, $, F, K, X;
      return M === "element" && (K = ar(l.target), X = ar(z)), E = M === "start" ? l.x - G : M === "velocity" ? at.getVelocity(t, c) : K.left + K.width / 2 - (X.left + X.width / 2), o ? E < 0 ? "counter-clockwise" : "clockwise" : (x = x || 2, j = M === "start" ? l.y - L : M === "velocity" ? at.getVelocity(t, u) : K.top + K.height / 2 - (X.top + X.height / 2), $ = Math.abs(E / j), F = $ < 1 / x ? "" : E < 0 ? "left" : "right", $ < x && (F !== "" && (F += "-"), F += j < 0 ? "up" : "down"), F);
    }, i.applyBounds = function(z, x) {
      var M, E, j, $, F, K;
      if (z && r.bounds !== z)
        return r.bounds = z, l.update(!0, x);
      if (Xt(!0), Ri(), I && !Sr()) {
        if (M = l.x, E = l.y, M > w ? M = w : M < N && (M = N), E > V ? E = V : E < B && (E = B), (l.x !== M || l.y !== E) && (j = !0, l.x = l.endX = M, o ? l.endRotation = M : l.y = l.endY = E, ie = !0, ft(!0), l.autoScroll && !l.isDragging))
          for (Gi(t.parentNode), $ = t, xt.scrollTop = le.pageYOffset != null ? le.pageYOffset : O.documentElement.scrollTop != null ? O.documentElement.scrollTop : O.body.scrollTop, xt.scrollLeft = le.pageXOffset != null ? le.pageXOffset : O.documentElement.scrollLeft != null ? O.documentElement.scrollLeft : O.body.scrollLeft; $ && !K; )
            K = wr($.parentNode), F = K ? xt : $.parentNode, f && F.scrollTop > F._gsMaxScrollY && (F.scrollTop = F._gsMaxScrollY), d && F.scrollLeft > F._gsMaxScrollX && (F.scrollLeft = F._gsMaxScrollX), $ = F;
        l.isThrowing && (j || l.endX > w || l.endX < N || l.endY > V || l.endY < B) && Mi(r.inertia || r.throwProps, j);
      }
      return l;
    }, i.update = function(z, x, M) {
      if (x && l.isPressed) {
        var E = qt(t), j = Gn.apply({
          x: l.x - G,
          y: l.y - L
        }), $ = qt(t.parentNode, !0);
        $.apply({
          x: E.e - j.x,
          y: E.f - j.y
        }, j), l.x -= j.x - $.e, l.y -= j.y - $.f, ft(!0), ii();
      }
      var F = l.x, K = l.y;
      return Wn(!x), z ? l.applyBounds() : (ie && M && ft(!0), Xt(!0)), x && (Pr(l.pointerX, l.pointerY), ie && ft(!0)), l.isPressed && !x && (d && Math.abs(F - l.x) > 0.01 || f && Math.abs(K - l.y) > 0.01 && !o) && ii(), l.autoScroll && (Gi(t.parentNode, l.isDragging), v = l.isDragging, ft(!0), ws(t, ni), bs(t, ni)), l;
    }, i.enable = function(z) {
      var x = {
        lazy: !0
      }, M, E, j;
      if (r.cursor !== !1 && (x.cursor = r.cursor || Lr), Q.utils.checkPrefix("touchCallout") && (x.touchCallout = "none"), z !== "soft") {
        for (ms(g, d === f ? "none" : r.allowNativeTouchScrolling && t.scrollHeight === t.clientHeight == (t.scrollWidth === t.clientHeight) || r.allowEventDefault ? "manipulation" : d ? "pan-y" : "pan-x"), E = g.length; --E > -1; )
          j = g[E], fi || ke(j, "mousedown", Er), ke(j, "touchstart", Er), ke(j, "click", Un, !0), Q.set(j, x), j.getBBox && j.ownerSVGElement && d !== f && Q.set(j.ownerSVGElement, {
            touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : d ? "pan-y" : "pan-x"
          }), r.allowContextMenu || ke(j, "contextmenu", Vn);
        ai(g, !1);
      }
      return bs(t, ni), Y = !0, at && z !== "soft" && at.track(A || t, s ? "x,y" : o ? "rotation" : "top,left"), t._gsDragID = M = t._gsDragID || "d" + kl++, hr[M] = l, A && (A.enable(), A.element._gsDragID = M), (r.bounds || o) && ii(), r.bounds && l.applyBounds(), l;
    }, i.disable = function(z) {
      for (var x = l.isDragging, M = g.length, E; --M > -1; )
        Vi(g[M], "cursor", null);
      if (z !== "soft") {
        for (ms(g, null), M = g.length; --M > -1; )
          E = g[M], Vi(E, "touchCallout", null), be(E, "mousedown", Er), be(E, "touchstart", Er), be(E, "click", Un, !0), be(E, "contextmenu", Vn);
        ai(g, !0), Ee && (be(Ee, "touchcancel", st), be(Ee, "touchend", st), be(Ee, "touchmove", Yt)), be(O, "mouseup", st), be(O, "mousemove", Yt);
      }
      return ws(t, ni), Y = !1, at && z !== "soft" && (at.untrack(A || t, s ? "x,y" : o ? "rotation" : "top,left"), l.tween && l.tween.kill()), A && A.disable(), ys(ft), l.isDragging = l.isPressed = kr = !1, x && me(l, "dragend", "onDragEnd"), l;
    }, i.enabled = function(z, x) {
      return arguments.length ? z ? l.enable(x) : l.disable(x) : Y;
    }, i.kill = function() {
      return l.isThrowing = !1, l.tween && l.tween.kill(), l.disable(), Q.set(g, {
        clearProps: "userSelect"
      }), delete hr[t._gsDragID], l;
    }, i.revert = function() {
      this.kill(), this.styles && this.styles.revert();
    }, ~n.indexOf("scroll") && (A = i.scrollProxy = new Ol(t, El({
      onKill: function() {
        l.isPressed && st(null);
      }
    }, r)), t.style.overflowY = f && !pn ? "auto" : "hidden", t.style.overflowX = d && !pn ? "auto" : "hidden", t = A.content), o ? h.rotation = 1 : (d && (h[c] = 1), f && (h[u] = 1)), T.force3D = "force3D" in r ? r.force3D : !0, Ao(ps(i)), i.enable(), i;
  }
  return e.register = function(r) {
    Q = r, Ui();
  }, e.create = function(r, i) {
    return hn || Ui(!0), Ot(r).map(function(n) {
      return new e(n, i);
    });
  }, e.get = function(r) {
    return hr[(Ot(r)[0] || {})._gsDragID];
  }, e.timeSinceDrag = function() {
    return (Dt() - gs) / 1e3;
  }, e.hitTest = function(r, i, n) {
    if (r === i)
      return !1;
    var s = ar(r), o = ar(i), c = s.top, u = s.left, d = s.right, f = s.bottom, _ = s.width, l = s.height, g = o.left > d || o.right < u || o.top > f || o.bottom < c, h, y, v;
    return g || !n ? !g : (v = (n + "").indexOf("%") !== -1, n = parseFloat(n) || 0, h = {
      left: Math.max(u, o.left),
      top: Math.max(c, o.top)
    }, h.width = Math.min(d, o.right) - h.left, h.height = Math.min(f, o.bottom) - h.top, h.width < 0 || h.height < 0 ? !1 : v ? (n *= 0.01, y = h.width * h.height, y >= _ * l * n || y >= o.width * o.height * n) : h.width > n && h.height > n);
  }, e;
}(Al);
Cl(Tr.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1
});
Tr.zIndex = 1e3;
Tr.version = "3.13.0";
Lo() && Q.registerPlugin(Tr);
const $l = {};
Oe.registerPlugin(Tr);
const sc = ({
  label: a = "toggle",
  checked: e,
  defaultChecked: t = !1,
  disabled: r = !1,
  required: i = !1,
  onChange: n,
  name: s,
  id: o,
  value: c
}) => {
  const u = te(null), d = te(null), f = te(
    o || `switch-${Math.random().toString(36).slice(2, 9)}`
  ), [_, l] = Ne(t), g = e !== void 0, h = g ? !!e : _, y = te({
    theme: "light",
    complete: h ? 100 : 0,
    active: !1,
    deviation: 2,
    alpha: 16,
    bounce: !0,
    hue: 200,
    // Will be updated from CSS variable in useEffect
    delta: !0,
    bubble: !0,
    mapped: !1,
    debug: !1
  }), v = te(y.current.complete), b = Vr(
    (m) => {
      const D = m ? 100 : 0;
      g || l(m), y.current.complete = D, v.current = D, u.current && (u.current.setAttribute("aria-pressed", m ? "true" : "false"), u.current.style.setProperty("--complete", `${D}`));
    },
    [g]
  );
  Z(() => {
    g && b(!!e);
  }, [e, g, b]), Z(() => {
    g || b(t);
  }, [t, g, b]);
  const S = Vr(
    (m) => {
      if (n) {
        const D = {
          checked: m,
          name: s || "",
          value: c || "",
          type: "checkbox"
        }, k = {
          target: D,
          currentTarget: D,
          preventDefault: () => {
          },
          stopPropagation: () => {
          },
          nativeEvent: new Event("change"),
          bubbles: !0,
          cancelable: !1,
          defaultPrevented: !1,
          eventPhase: 0,
          isTrusted: !1,
          timeStamp: Date.now(),
          type: "change"
        };
        n(k);
      }
    },
    [s, n, c]
  );
  Z(() => {
    if (r) return;
    const m = u.current;
    if (!m) return;
    let D = null, k = !1;
    const T = y.current;
    T.complete = h ? 100 : T.complete, v.current = T.complete;
    const C = getComputedStyle(document.documentElement).getPropertyValue("--color-switch-checked-hue").trim();
    if (C) {
      const L = parseInt(C, 10);
      isNaN(L) || (T.hue = L);
    }
    m.style.setProperty("--complete", `${T.complete}`), m.style.setProperty("--hue", `${T.hue}`), m.setAttribute("aria-pressed", h ? "true" : "false");
    const O = () => {
      Oe.set("#goo feGaussianBlur", {
        attr: {
          stdDeviation: T.deviation
        }
      }), Oe.set("#goo feColorMatrix", {
        attr: {
          values: `
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 ${T.alpha} -10
      `
        }
      }), document.documentElement.dataset.theme = T.theme, document.documentElement.dataset.mapped = String(T.mapped), document.documentElement.dataset.delta = String(T.delta), document.documentElement.dataset.debug = String(T.debug), document.documentElement.dataset.active = String(T.active), document.documentElement.dataset.bounce = String(T.bounce), m.style.setProperty("--complete", `${T.complete}`), m.style.setProperty("--hue", `${T.hue}`);
    }, Y = async () => {
      if (r) return;
      m.dataset.pressed = "true", T.bubble && (m.dataset.active = "true"), await Promise.allSettled(
        T.bounce ? [] : m.getAnimations({ subtree: !0 }).map((I) => I.finished)
      );
      const L = m.matches("[aria-pressed=true]");
      Oe.timeline({
        onComplete: () => {
          Oe.delayedCall(0.05, () => {
            m.dataset.active = "false", m.dataset.pressed = "false";
            const I = !L;
            b(I), S(I);
          });
        }
      }).to(m, {
        "--complete": L ? 0 : 100,
        duration: 0.12,
        delay: T.bounce && T.bubble ? 0.18 : 0
      });
    }, A = document.createElement("div");
    D = Tr.create(A, {
      allowContextMenu: !0,
      handle: m,
      onDragStart: function() {
        const I = this, W = m.getBoundingClientRect(), w = m.matches("[aria-pressed=true]") ? W.left - (I.pointerX ?? 0) : W.left + W.width - (I.pointerX ?? 0);
        I.dragBounds = w, m.dataset.active = "true";
      },
      onDrag: function() {
        const I = this, W = m.matches("[aria-pressed=true]"), q = (I.x ?? 0) - (I.startX ?? 0), w = Oe.utils.clamp(
          0,
          100,
          W ? Oe.utils.mapRange(I.dragBounds ?? 0, 0, 0, 100, q) : Oe.utils.mapRange(0, I.dragBounds ?? 0, 0, 100, q)
        );
        I.complete = w, Oe.set(m, {
          "--complete": w,
          "--delta": Math.min(Math.abs(I.deltaX), 12)
        }), v.current = w;
      },
      onDragEnd: function() {
        const W = this.complete ?? v.current;
        Oe.fromTo(
          m,
          {
            "--complete": W
          },
          {
            "--complete": W >= 50 ? 100 : 0,
            duration: 0.15,
            onComplete: () => {
              Oe.delayedCall(0.05, () => {
                m.dataset.active = "false", m.style.setProperty("--delta", "0");
                const q = W >= 50;
                b(q), S(q);
              });
            }
          }
        );
      },
      onPress: function() {
        const I = this;
        I.__pressTime = Date.now(), "ontouchstart" in window && navigator.maxTouchPoints > 0 && (m.dataset.active = "true");
      },
      onRelease: function() {
        const I = this;
        I.__releaseTime = Date.now(), Oe.set(m, { "--delta": 0 }), "ontouchstart" in window && navigator.maxTouchPoints > 0 && (I.startX !== void 0 && I.endX !== void 0 && Math.abs(I.endX - I.startX) < 4 || I.endX === void 0) && (m.dataset.active = "false");
        const q = (I.__releaseTime ?? 0) - (I.__pressTime ?? 0) <= 150, N = (I.startX !== void 0 && I.endX !== void 0 ? Math.abs(I.endX - I.startX) : 0) < 4;
        if (q && N) {
          const V = m.getBoundingClientRect(), de = (I.endX ?? I.pointerX ?? I.startX ?? 0) - V.left, _e = V.width, re = de < _e / 2, Be = m.matches("[aria-pressed=true]");
          (Be && re || !Be && !re) && Y();
        }
      }
    })[0];
    const H = (L) => {
      L.key === "Enter" && Y(), L.key === " " && L.preventDefault();
    }, U = (L) => {
      L.key === " " && Y();
    };
    return m.addEventListener("keydown", H), m.addEventListener("keyup", U), (async () => {
      if (typeof window > "u" || k) {
        O();
        return;
      }
      if (typeof import.meta < "u" && $l) {
        O();
        return;
      }
      try {
        let L = null;
        try {
          L = await new Function(
            "specifier",
            "return import(specifier)"
          )("tweakpane");
        } catch {
          O();
          return;
        }
        if (!L || k) {
          O();
          return;
        }
        const { Pane: I } = L;
        if (!I) {
          O();
          return;
        }
        const W = new I({ title: "config" });
        d.current = W;
        const q = (B) => {
          var re, ie, Be;
          const de = (Be = (ie = (re = B == null ? void 0 : B.target) == null ? void 0 : re.controller) == null ? void 0 : ie.view) == null ? void 0 : Be.labelElement, _e = document.startViewTransition;
          if (!_e || (de == null ? void 0 : de.innerText) !== "theme") {
            O();
            return;
          }
          _e(() => O());
        }, w = W.addFolder({
          title: "debug",
          expanded: !1
        });
        w.addBinding(T, "debug"), w.addBinding(T, "active"), w.addBinding(T, "complete", {
          min: 0,
          max: 100,
          label: "complete (%)",
          step: 1
        });
        const N = W.addFolder({
          title: "behavior",
          expanded: !1
        });
        N.addBinding(T, "bounce"), N.addBinding(T, "mapped"), N.addBinding(T, "bubble"), N.addBinding(T, "delta"), N.addBinding(T, "hue", {
          min: 0,
          max: 359,
          step: 1
        });
        const V = W.addFolder({
          title: "filter",
          expanded: !1
        });
        V.addBinding(T, "deviation", {
          min: 0,
          max: 50,
          step: 1,
          label: "stdDeviation"
        }), V.addBinding(T, "alpha", {
          min: 0,
          max: 50,
          step: 1,
          label: "alpha"
        }), W.addBinding(T, "theme", {
          label: "theme",
          options: {
            system: "system",
            light: "light",
            dark: "dark"
          }
        }), W.on("change", q), O();
      } catch {
        O();
      }
    })(), O(), () => {
      k = !0, m.removeEventListener("keydown", H), m.removeEventListener("keyup", U), d.current && (d.current.dispose(), d.current = null), D && D.kill();
    };
  }, [h, r, S, b]);
  const P = f.current;
  return /* @__PURE__ */ p.jsx("div", { className: "switch-stage", children: /* @__PURE__ */ p.jsx("main", { children: /* @__PURE__ */ p.jsxs(
    "button",
    {
      id: P,
      ref: u,
      "aria-label": a,
      "aria-pressed": h,
      "aria-required": i,
      "aria-disabled": r,
      className: "liquid-toggle",
      disabled: r,
      "data-pressed": h,
      children: [
        /* @__PURE__ */ p.jsxs("div", { className: "debug debug--knockout", children: [
          /* @__PURE__ */ p.jsx("div", { className: "arrow", children: /* @__PURE__ */ p.jsx("span", { children: "knockout backdrop." }) }),
          /* @__PURE__ */ p.jsx("div", { className: "knockout knockout--debug", children: /* @__PURE__ */ p.jsx("div", { className: "indicator indicator--masked", children: /* @__PURE__ */ p.jsx("div", { className: "mask" }) }) })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "knockout", children: /* @__PURE__ */ p.jsx("div", { className: "indicator indicator--masked", children: /* @__PURE__ */ p.jsx("div", { className: "mask" }) }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "debug debug--indicator", children: [
          /* @__PURE__ */ p.jsx("div", { className: "arrow", children: /* @__PURE__ */ p.jsx("span", { children: "goo window." }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "indicator__liquid indicator__liquid--debug", children: [
            /* @__PURE__ */ p.jsx("div", { className: "shadow" }),
            /* @__PURE__ */ p.jsx("div", { className: "wrapper", children: /* @__PURE__ */ p.jsxs("div", { className: "liquids", children: [
              /* @__PURE__ */ p.jsx("div", { className: "liquid__shadow" }),
              /* @__PURE__ */ p.jsx("div", { className: "liquid__track" })
            ] }) }),
            /* @__PURE__ */ p.jsx("div", { className: "cover" })
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "indicator__liquid", children: [
          /* @__PURE__ */ p.jsx("div", { className: "shadow" }),
          /* @__PURE__ */ p.jsx("div", { className: "wrapper", children: /* @__PURE__ */ p.jsxs("div", { className: "liquids", children: [
            /* @__PURE__ */ p.jsx("div", { className: "liquid__shadow" }),
            /* @__PURE__ */ p.jsx("div", { className: "liquid__track" })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "cover" })
        ] })
      ]
    }
  ) }) });
}, Xo = process.env.NODE_ENV === "development";
function Ue(a, e) {
  Xo && console.warn(`[${e}] ${a}`);
}
function Yo(a, e, t, r, i) {
  return a < e || a > t ? (Ue(
    `${i} (${a}) is outside valid range [${e}, ${t}]. Value will be clamped.`,
    r
  ), !1) : !0;
}
function Ll(a, e, t, r, i) {
  const n = (o) => o;
  return !e.some((o) => n(o) === a) && a !== void 0 && a !== null && a !== "" ? (Ue(
    `${r} (${a}) does not exist in options.`,
    t
  ), !1) : !0;
}
function zo(a, e, t, r) {
  const i = a.map(e), n = i.filter((s, o) => i.indexOf(s) !== o);
  return n.length > 0 ? (Ue(
    `${r} contains duplicate keys: ${n.join(", ")}. Each item must have a unique key.`,
    t
  ), !1) : !0;
}
function Bn(a, e, t, r) {
  if (!Array.isArray(a))
    return Ue(`${r} must be an array.`, t), !1;
  if (a.length === 0)
    return !0;
  const i = a[0], n = e.filter((s) => !(s in i));
  return n.length > 0 ? (Ue(
    `${r} items must have the following fields: ${e.join(", ")}. Missing: ${n.join(", ")}.`,
    t
  ), !1) : !0;
}
function Il(a, e, t) {
  if (!Array.isArray(a) || a.length === 0)
    return Ue("columns must be a non-empty array.", t), !1;
  if (!Array.isArray(e))
    return Ue("data must be an array.", t), !1;
  const r = a.map((n) => n.key), i = r.filter((n, s) => r.indexOf(n) !== s);
  if (i.length > 0)
    return Ue(`columns contain duplicate keys: ${i.join(", ")}.`, t), !1;
  if (e.length > 0) {
    const n = e[0], s = r.filter((o) => !(o in n));
    s.length > 0 && Xo && console.info(
      `[${t}] Some data rows may be missing column keys: ${s.join(", ")}.`
    );
  }
  return !0;
}
function Fl(a, e, t) {
  return a == null || a === "" ? (Ue(`${t} is required but was not provided.`, e), !1) : !0;
}
function Bl(a, e, t = "children") {
  return !a || typeof a != "object" || !("$$typeof" in a) ? (Ue(`${t} must be a valid React element.`, e), !1) : !0;
}
function Go(a, e, t) {
  return a <= 0 ? (Ue(`${t} must be a positive number. Got: ${a}`, e), !1) : !0;
}
function Vo(a, e, t) {
  return a === void 0 ? !0 : typeof a == "number" && a <= 0 ? (Ue(`${t} must be a positive number. Got: ${a}`, e), !1) : typeof a == "string" && !/^(\d+(\.\d+)?(px|rem|em|%|vh|vw)|auto)$/.test(a.trim()) ? (Ue(`${t} must be a valid CSS size value. Got: ${a}`, e), !1) : !0;
}
const oc = ({
  label: a,
  options: e,
  value: t,
  defaultValue: r,
  placeholder: i = "Select an option...",
  disabled: n = !1,
  required: s = !1,
  variant: o = "default",
  error: c,
  helperText: u,
  onChange: d,
  name: f,
  id: _
}) => {
  const [l, g] = Ne(!1), [h, y] = Ne(r || ""), v = _ || `select-${Math.random().toString(36).substr(2, 9)}`, b = te(null), S = t !== void 0, P = S ? t : h, m = o === "error" || !!c, D = c || u, k = e.find((C) => C.value === P);
  Z(() => {
    Bn(e, ["value", "label"], "Select", "options"), P !== void 0 && P !== "" && Ll(
      P,
      e.map((C) => C.value),
      "Select",
      "value"
    );
  }, [e, P]), Z(() => {
    const C = (O) => {
      b.current && !b.current.contains(O.target) && g(!1);
    };
    if (l)
      return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [l]), Z(() => {
    const C = (O) => {
      O.key === "Escape" && l && g(!1);
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [l]);
  const T = (C) => {
    S || y(C), d == null || d(C), g(!1);
  }, R = (C) => {
    if (!n) {
      if (C.key === "Enter" || C.key === " ")
        C.preventDefault(), g(!l);
      else if (C.key === "ArrowDown")
        if (C.preventDefault(), !l)
          g(!0);
        else {
          const O = e.findIndex((A) => A.value === P), Y = O < e.length - 1 ? O + 1 : 0;
          T(e[Y].value);
        }
      else if (C.key === "ArrowUp" && (C.preventDefault(), l)) {
        const O = e.findIndex((A) => A.value === P), Y = O > 0 ? O - 1 : e.length - 1;
        T(e[Y].value);
      }
    }
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "select-wrapper", ref: b, children: [
    a && /* @__PURE__ */ p.jsxs("label", { htmlFor: v, className: "select-label", children: [
      a,
      s && /* @__PURE__ */ p.jsx("span", { className: "select-required", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "select-container", children: [
      /* @__PURE__ */ p.jsx(ye, { hugWidth: !1, width: "100%", height: 50, children: /* @__PURE__ */ p.jsxs(
        "button",
        {
          id: v,
          type: "button",
          role: "combobox",
          "aria-expanded": l,
          "aria-haspopup": "listbox",
          "aria-controls": `${v}-listbox`,
          disabled: n,
          className: `select-trigger ${o} ${m ? "error" : ""} ${n ? "disabled" : ""} ${l ? "open" : ""}`,
          onClick: () => !n && g(!l),
          onKeyDown: R,
          "aria-invalid": m,
          "aria-describedby": D ? `${v}-helper` : void 0,
          children: [
            /* @__PURE__ */ p.jsx("span", { className: k ? "" : "select-placeholder", children: k ? k.label : i }),
            /* @__PURE__ */ p.jsx("span", { className: "select-arrow" })
          ]
        }
      ) }),
      l && /* @__PURE__ */ p.jsx(
        ye,
        {
          hugWidth: !0,
          height: "auto",
          className: "select-dropdown-wrapper",
          children: /* @__PURE__ */ p.jsx(
            "ul",
            {
              id: `${v}-listbox`,
              role: "listbox",
              className: "select-dropdown",
              children: e.map((C) => {
                const O = C.value === P;
                return /* @__PURE__ */ p.jsx(
                  "li",
                  {
                    role: "option",
                    "aria-selected": O,
                    className: `select-option ${O ? "selected" : ""} ${C.disabled ? "disabled" : ""}`,
                    onClick: () => !C.disabled && T(C.value),
                    children: O ? /* @__PURE__ */ p.jsx(
                      ye,
                      {
                        hugWidth: !1,
                        width: "100%",
                        height: "auto",
                        className: "select-option-glass",
                        borderRadius: 8,
                        children: C.label
                      }
                    ) : C.label
                  },
                  C.value
                );
              })
            }
          )
        }
      )
    ] }),
    D && /* @__PURE__ */ p.jsx(
      "span",
      {
        id: `${v}-helper`,
        className: `select-helper ${m ? "error" : ""}`,
        children: D
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "select",
      {
        name: f,
        value: P,
        defaultValue: r,
        required: s,
        disabled: n,
        className: "select-native",
        onChange: (C) => T(C.target.value),
        "aria-hidden": "true",
        tabIndex: -1,
        children: [
          /* @__PURE__ */ p.jsx("option", { value: "", children: i }),
          e.map((C) => /* @__PURE__ */ p.jsx(
            "option",
            {
              value: C.value,
              disabled: C.disabled,
              children: C.label
            },
            C.value
          ))
        ]
      }
    )
  ] });
}, ac = ({
  value: a = 40,
  onChange: e,
  id: t
}) => {
  const r = te(null), i = te(null), n = te(null), [s, o] = Ne(!1), [c, u] = Ne(null), d = (b) => {
    if (b = Math.max(0, Math.min(100, b)), i.current && n.current && c) {
      const S = b / 100 * c.width;
      i.current.style.width = `${b}%`, n.current.style.left = `${S}px`;
    }
  }, f = (b) => c ? (b - c.left) / c.width * 100 : 0, _ = (b) => {
    const S = f(b);
    d(S), e == null || e(S);
  }, l = (b) => {
    var S;
    b.preventDefault(), r.current && (o(!0), u(r.current.getBoundingClientRect()), _(b.clientX), (S = n.current) == null || S.classList.add("active"));
  }, g = (b) => {
    var S;
    r.current && (o(!0), u(r.current.getBoundingClientRect()), _(b.touches[0].clientX), (S = n.current) == null || S.classList.add("active"));
  }, h = () => {
    var b;
    o(!1), (b = n.current) == null || b.classList.remove("active");
  };
  Z(() => {
    if (r.current) {
      const b = r.current.getBoundingClientRect();
      u(b), d(a);
    }
  }, [a]), Z(() => {
    s || d(a);
  }, [a, s]), Z(() => {
    const b = (P) => {
      s && _(P.clientX);
    }, S = () => {
      h();
    };
    return s && (document.addEventListener("mousemove", b), document.addEventListener("mouseup", S)), () => {
      document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", S);
    };
  }, [s, c]), Z(() => {
    const b = (P) => {
      s && (P.preventDefault(), _(P.touches[0].clientX));
    }, S = () => {
      h();
    };
    return s && (document.addEventListener("touchmove", b, { passive: !1 }), document.addEventListener("touchend", S)), () => {
      document.removeEventListener("touchmove", b), document.removeEventListener("touchend", S);
    };
  }, [s, c]);
  const y = (b) => {
    var S;
    r.current && (o(!0), u(r.current.getBoundingClientRect()), (S = n.current) == null || S.classList.add("active"), _(b.clientX));
  }, v = (b) => {
    var S;
    r.current && (o(!0), u(r.current.getBoundingClientRect()), (S = n.current) == null || S.classList.add("active"), _(b.touches[0].clientX));
  };
  return Z(() => {
    const b = () => {
      r.current && u(r.current.getBoundingClientRect());
    };
    return window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, []), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "slider-container",
        id: t,
        ref: r,
        onMouseDown: y,
        onTouchStart: v,
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "slider-progress", ref: i }),
          /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: "slider-thumb-glass",
              ref: n,
              onMouseDown: l,
              onTouchStart: g,
              children: [
                /* @__PURE__ */ p.jsx("div", { className: "slider-thumb-glass-filter" }),
                /* @__PURE__ */ p.jsx("div", { className: "slider-thumb-glass-overlay" }),
                /* @__PURE__ */ p.jsx("div", { className: "slider-thumb-glass-specular" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ p.jsx("svg", { width: "0", height: "0", style: { position: "absolute" }, children: /* @__PURE__ */ p.jsxs(
      "filter",
      {
        id: "mini-liquid-lens",
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ p.jsx(
            "feImage",
            {
              x: "0",
              y: "0",
              result: "normalMap",
              href: `data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
        <radialGradient id='invmap' cx='50%' cy='50%' r='75%'>
          <stop offset='0%' stop-color='rgb(128,128,255)'/>
          <stop offset='90%' stop-color='rgb(255,255,255)'/>
        </radialGradient>
        <rect width='100%' height='100%' fill='url(%23invmap)'/>
      </svg>`
            }
          ),
          /* @__PURE__ */ p.jsx(
            "feDisplacementMap",
            {
              in: "SourceGraphic",
              in2: "normalMap",
              scale: "-252",
              xChannelSelector: "R",
              yChannelSelector: "G",
              result: "displaced"
            }
          ),
          /* @__PURE__ */ p.jsx("feMerge", { children: /* @__PURE__ */ p.jsx("feMergeNode", { in: "displaced" }) })
        ]
      }
    ) })
  ] });
}, lc = ({
  header: a,
  children: e,
  footer: t,
  image: r,
  imageAlt: i,
  hoverable: n = !1,
  clickable: s = !1,
  onClick: o,
  variant: c = "default",
  className: u = ""
}) => /* @__PURE__ */ p.jsxs(
  "div",
  {
    className: `card ${c} ${n ? "hoverable" : ""} ${s ? "clickable" : ""} ${r ? "has-image" : ""} gl ${u}`,
    onClick: s ? o : void 0,
    role: s ? "button" : void 0,
    tabIndex: s ? 0 : void 0,
    onKeyDown: s ? (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), o == null || o());
    } : void 0,
    children: [
      r && /* @__PURE__ */ p.jsx("img", { src: r, alt: i || "", className: "card-image" }),
      a && /* @__PURE__ */ p.jsx("div", { className: "card-header", children: a }),
      /* @__PURE__ */ p.jsx("div", { className: "card-body", children: e }),
      t && /* @__PURE__ */ p.jsx("div", { className: "card-footer", children: t })
    ]
  }
), cc = ({
  children: a,
  variant: e = "primary",
  size: t = "medium",
  dot: r = !1,
  max: i,
  count: n,
  className: s = ""
}) => {
  const o = n !== void 0 && i !== void 0 && n > i ? `${i}+` : n == null ? void 0 : n.toString(), u = (() => {
    if (r)
      switch (t) {
        case "small":
          return { width: 6, height: 6 };
        case "large":
          return { width: 10, height: 10 };
        default:
          return { width: 8, height: 8 };
      }
    switch (t) {
      case "small":
        return { width: "auto", height: 18 };
      case "large":
        return { width: "auto", height: 24 };
      default:
        return { width: "auto", height: 20 };
    }
  })();
  return r ? /* @__PURE__ */ p.jsx(
    ye,
    {
      borderRadius: 999,
      className: "badge-wrapper",
      width: u.width,
      height: u.height,
      children: /* @__PURE__ */ p.jsx("span", { className: `badge badge-dot ${e} ${t} ${s}` })
    }
  ) : n !== void 0 ? /* @__PURE__ */ p.jsx(
    ye,
    {
      borderRadius: 999,
      className: "badge-wrapper",
      width: u.width,
      height: u.height,
      children: /* @__PURE__ */ p.jsx("span", { className: `badge badge-count ${e} ${t} ${s}`, children: o })
    }
  ) : /* @__PURE__ */ p.jsx(
    ye,
    {
      borderRadius: 999,
      className: "badge-wrapper",
      width: u.width,
      height: u.height,
      children: /* @__PURE__ */ p.jsx("span", { className: `badge ${e} ${t} ${s}`, children: a })
    }
  );
}, uc = ({
  children: a,
  removable: e = !1,
  onRemove: t,
  variant: r = "default",
  size: i = "medium",
  disabled: n = !1,
  className: s = ""
}) => {
  const o = (d) => {
    d.stopPropagation(), !n && t && t();
  }, c = (d) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), o(d));
  }, u = i === "small" ? 24 : i === "medium" ? 28 : 32;
  return /* @__PURE__ */ p.jsx(
    ye,
    {
      height: u,
      hugWidth: !0,
      borderRadius: 999,
      className: s,
      children: /* @__PURE__ */ p.jsxs("span", { className: `chip ${r} ${i} ${n ? "disabled" : ""}`, children: [
        /* @__PURE__ */ p.jsx("span", { className: "chip-content", children: a }),
        e && /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            className: "chip-remove",
            onClick: o,
            onKeyDown: c,
            disabled: n,
            "aria-label": "Remove",
            children: "×"
          }
        )
      ] })
    }
  );
}, dc = ({
  children: a,
  variant: e = "default",
  size: t = "medium",
  className: r = ""
}) => {
  const i = te(null), [n, s] = Ne(null);
  Z(() => {
    if (i.current) {
      const c = () => {
        var _;
        const f = (_ = i.current) == null ? void 0 : _.getBoundingClientRect();
        f && f.width > 0 && f.height > 0 && s({ width: f.width, height: f.height });
      }, u = setTimeout(c, 0), d = new ResizeObserver(c);
      return d.observe(i.current), () => {
        clearTimeout(u), d.disconnect();
      };
    }
  }, [a, t, e]);
  const o = /* @__PURE__ */ p.jsx("span", { ref: i, className: `tag ${e} ${t} ${r}`, children: a });
  return /* @__PURE__ */ p.jsx(
    ye,
    {
      width: (n == null ? void 0 : n.width) || "auto",
      height: (n == null ? void 0 : n.height) || "auto",
      hugWidth: !n,
      borderRadius: 4,
      children: o
    }
  );
}, fc = ({
  src: a,
  alt: e,
  initials: t,
  size: r = "medium",
  shape: i = "circle",
  className: n = ""
}) => {
  const [s, o] = Ne(!1), c = () => ({
    small: 32,
    medium: 40,
    large: 56,
    xlarge: 80
  })[r], u = (g) => i === "circle" ? g / 2 : 8, d = () => {
    if (t) return t;
    if (e) {
      const g = e.trim().split(/\s+/);
      return g.length >= 2 ? (g[0][0] + g[1][0]).toUpperCase() : g[0][0].toUpperCase();
    }
    return "?";
  }, f = !a || s, _ = c(), l = u(_);
  return /* @__PURE__ */ p.jsx(
    ye,
    {
      height: _,
      width: _,
      borderRadius: l,
      className: "slider-glass-surface",
      children: /* @__PURE__ */ p.jsxs("div", { className: `avatar ${r} ${i} ${n}`, children: [
        a && !s && /* @__PURE__ */ p.jsx(
          "img",
          {
            src: a,
            alt: e || "Avatar",
            className: "avatar-image",
            onError: () => o(!0)
          }
        ),
        f && /* @__PURE__ */ p.jsx("span", { className: "avatar-fallback", children: d() })
      ] })
    }
  );
}, hc = ({
  children: a,
  variant: e = "info",
  title: t,
  dismissible: r = !1,
  onDismiss: i,
  className: n = ""
}) => {
  const s = () => {
    i == null || i();
  }, o = (c) => {
    (c.key === "Enter" || c.key === " ") && (c.preventDefault(), s());
  };
  return /* @__PURE__ */ p.jsx(
    ye,
    {
      height: "auto",
      borderRadius: 8,
      className: `alert-glass-surface ${n}`,
      children: /* @__PURE__ */ p.jsxs("div", { className: `alert ${e}`, role: "alert", "aria-live": "polite", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "alert-content", children: [
          t && /* @__PURE__ */ p.jsx("div", { className: "alert-title", children: t }),
          /* @__PURE__ */ p.jsx("div", { className: "alert-message", children: a })
        ] }),
        r && /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            className: "alert-dismiss",
            onClick: s,
            onKeyDown: o,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ] })
    }
  );
}, pc = ({
  value: a,
  max: e = 100,
  showValue: t = !1,
  variant: r = "default",
  size: i = "medium",
  indeterminate: n = !1,
  className: s = ""
}) => {
  Z(() => {
    Go(e, "Progress", "max"), n || Yo(a, 0, e, "Progress", "value");
  }, [a, e, n]);
  const o = Math.min(100, Math.max(0, a / e * 100)), c = () => {
    switch (r) {
      case "success":
        return 144;
      case "warning":
        return 55;
      case "error":
        return 5;
      default:
        return 200;
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("svg", { className: "progress-svg-filters", "aria-hidden": "true", children: /* @__PURE__ */ p.jsxs("defs", { children: [
      /* @__PURE__ */ p.jsxs("filter", { id: "progress-goo", children: [
        /* @__PURE__ */ p.jsx(
          "feGaussianBlur",
          {
            result: "SvgjsFeGaussianBlur1000",
            in: "SourceGraphic",
            stdDeviation: "8"
          }
        ),
        /* @__PURE__ */ p.jsx(
          "feColorMatrix",
          {
            result: "SvgjsFeColorMatrix1001",
            in: "SvgjsFeGaussianBlur1000",
            values: `
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 13 -10
              `,
            type: "matrix"
          }
        ),
        /* @__PURE__ */ p.jsx(
          "feComposite",
          {
            result: "SvgjsFeComposite1002",
            in: "SvgjsFeColorMatrix1001",
            operator: "atop"
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("filter", { id: "progress-knockout", colorInterpolationFilters: "sRGB", children: [
        /* @__PURE__ */ p.jsx(
          "feColorMatrix",
          {
            result: "knocked",
            type: "matrix",
            values: `1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 1 0`
          }
        ),
        /* @__PURE__ */ p.jsxs("feComponentTransfer", { children: [
          /* @__PURE__ */ p.jsx("feFuncR", { type: "linear", slope: "3", intercept: "-1" }),
          /* @__PURE__ */ p.jsx("feFuncG", { type: "linear", slope: "3", intercept: "-1" }),
          /* @__PURE__ */ p.jsx("feFuncB", { type: "linear", slope: "3", intercept: "-1" })
        ] }),
        /* @__PURE__ */ p.jsxs("feComponentTransfer", { children: [
          /* @__PURE__ */ p.jsx("feFuncR", { type: "table", tableValues: "0 0 0 0 0 1 1 1 1 1" }),
          /* @__PURE__ */ p.jsx("feFuncG", { type: "table", tableValues: "0 0 0 0 0 1 1 1 1 1" }),
          /* @__PURE__ */ p.jsx("feFuncB", { type: "table", tableValues: "0 0 0 0 0 1 1 1 1 1" })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("filter", { id: "progress-remove-black", colorInterpolationFilters: "sRGB", children: [
        /* @__PURE__ */ p.jsx(
          "feColorMatrix",
          {
            type: "matrix",
            values: `1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -255 -255 -255 0 1`,
            result: "black-pixels"
          }
        ),
        /* @__PURE__ */ p.jsx(
          "feMorphology",
          {
            in: "black-pixels",
            operator: "dilate",
            radius: "0.5",
            result: "smoothed"
          }
        ),
        /* @__PURE__ */ p.jsx("feComposite", { in: "SourceGraphic", in2: "smoothed", operator: "out" })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs("div", { className: `progress-wrapper ${s}`, children: [
      t && !n && /* @__PURE__ */ p.jsxs("div", { className: "progress-label", children: [
        Math.round(o),
        "%"
      ] }),
      /* @__PURE__ */ p.jsx(
        ye,
        {
          height: 20,
          width: "100%",
          borderRadius: 999,
          className: "progress-glass-surface",
          children: /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `progress-track ${i} ${r} ${n ? "indeterminate" : ""}`,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": e,
              "aria-valuenow": n ? void 0 : a,
              "aria-label": "Progress",
              style: {
                "--complete": `${o}`,
                "--hue": c(),
                height: "20px"
              },
              children: [
                /* @__PURE__ */ p.jsx("div", { className: "progress-knockout", children: /* @__PURE__ */ p.jsx("div", { className: "progress-indicator progress-indicator--masked", children: /* @__PURE__ */ p.jsx("div", { className: "progress-mask" }) }) }),
                /* @__PURE__ */ p.jsxs("div", { className: "progress-fill-liquid", children: [
                  /* @__PURE__ */ p.jsx("div", { className: "progress-shadow" }),
                  /* @__PURE__ */ p.jsx("div", { className: "progress-wrapper-inner", children: /* @__PURE__ */ p.jsxs("div", { className: "progress-liquids", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "progress-liquid-shadow" }),
                    /* @__PURE__ */ p.jsx("div", { className: "progress-liquid-track" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("div", { className: "progress-cover" })
                ] })
              ]
            }
          )
        }
      )
    ] })
  ] });
}, _c = ({
  columns: a,
  data: e,
  striped: t = !1,
  hoverable: r = !1,
  className: i = ""
}) => (Z(() => {
  Il(a, e, "Table");
}, [a, e]), /* @__PURE__ */ p.jsx("div", { className: `table-wrapper ${i}`, children: /* @__PURE__ */ p.jsxs("table", { className: `table ${t ? "striped" : ""} ${r ? "hoverable" : ""}`, children: [
  /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsx("tr", { children: a.map((n) => /* @__PURE__ */ p.jsx("th", { children: n.header }, n.key)) }) }),
  /* @__PURE__ */ p.jsx("tbody", { children: e.map((n, s) => /* @__PURE__ */ p.jsx("tr", { children: a.map((o) => /* @__PURE__ */ p.jsx("td", { children: o.render ? o.render(n[o.key], n) : n[o.key] }, o.key)) }, s)) })
] }) })), gc = ({
  items: a,
  defaultActiveKey: e,
  activeKey: t,
  onChange: r,
  className: i = ""
}) => {
  var D;
  const [n, s] = Ne(
    e || ((D = a[0]) == null ? void 0 : D.key) || ""
  ), o = t !== void 0, c = o ? t : n, u = te(null), d = te(null), f = te(null), _ = te(/* @__PURE__ */ new Map()), [l, g] = Ne(!1), h = te(!1), y = te(0), v = te(null), b = Vr(
    (k, T = !0) => {
      const R = _.current.get(k), C = f.current, O = u.current, Y = d.current;
      if (!R || !C || !O) return;
      const A = Y ? Y.getBoundingClientRect() : O.getBoundingClientRect(), H = R.getBoundingClientRect(), U = H.left - A.left, G = H.top - A.top, L = Math.min(H.width, 80), I = Math.min(H.height, 60);
      T && !l ? (g(!0), y.current = 0, C.style.setProperty("--complete", "0"), C.style.setProperty("--delta", "0"), C.dataset.active = "true", C.dataset.pressed = "true", C.dataset.bounce = "true", Oe.timeline({
        onComplete: () => {
          y.current = 100, C.style.setProperty("--complete", "100"), C.style.setProperty("--delta", "0"), C.dataset.active = "false", C.dataset.pressed = "false", g(!1), v.current = { left: U, top: G, width: L, height: I };
        }
      }).to(
        C,
        {
          "--target-x": `${U}px`,
          "--target-y": `${G}px`,
          "--target-width": `${L}px`,
          "--target-height": `${I * 1.5}px`,
          // Scale height to 1.5x during transition
          "--complete": 100,
          "--delta": "12",
          duration: 0.3,
          ease: "power2.out",
          onUpdate: function() {
            const q = this.progress() * 100;
            y.current = q, C.style.setProperty("--complete", `${q}`);
            const w = 12 * (1 - this.progress());
            C.style.setProperty("--delta", `${w}`);
            const N = 1.5 - this.progress() * 0.5;
            C.style.setProperty("--height-scale", `${N}`);
          }
        },
        0
      ).to(
        C,
        {
          "--target-height": `${I}px`,
          "--height-scale": "1",
          "--delta": "0",
          duration: 0.2,
          ease: "power2.out"
        },
        "-=0.1"
      )) : (C.style.setProperty("--target-x", `${U}px`), C.style.setProperty("--target-y", `${G}px`), C.style.setProperty("--target-width", `${L}px`), C.style.setProperty("--target-height", `${I}px`), C.style.setProperty("--height-scale", "1"), y.current = 100, C.style.setProperty("--complete", "100"), C.style.setProperty("--delta", "0"), v.current = { left: U, top: G, width: L, height: I });
    },
    [l]
  ), S = (k, T) => {
    T || l || (h.current = !0, o || s(k), r == null || r(k), requestAnimationFrame(() => {
      b(k, !0), setTimeout(() => {
        h.current = !1;
      }, 500);
    }));
  }, P = (k, T, R) => {
    if (k.key === "Enter" || k.key === " ")
      k.preventDefault(), S(T);
    else if (k.key === "ArrowRight") {
      k.preventDefault();
      const C = (R + 1) % a.length;
      a[C].disabled || S(a[C].key);
    } else if (k.key === "ArrowLeft") {
      k.preventDefault();
      const C = (R - 1 + a.length) % a.length;
      a[C].disabled || S(a[C].key);
    }
  };
  Z(() => {
    Bn(a, ["key", "label", "content"], "Tabs", "items"), zo(a, (k) => k.key, "Tabs", "items");
  }, [a]), Z(() => {
    c && _.current.size > 0 && !h.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        b(c, !1);
      });
    });
  }, [c, a.length, b]), Z(() => {
    if (c && _.current.size > 0 && f.current && !v.current) {
      const k = setTimeout(() => {
        b(c, !1);
      }, 0);
      return () => clearTimeout(k);
    }
  }, [c, a.length, b]);
  const m = a.find((k) => k.key === c);
  return /* @__PURE__ */ p.jsxs("div", { className: `tabs ${i}`, children: [
    /* @__PURE__ */ p.jsx(
      "svg",
      {
        className: "tabs-svg-filters",
        "aria-hidden": "true",
        style: { position: "absolute", width: 0, height: 0 },
        children: /* @__PURE__ */ p.jsxs("defs", { children: [
          /* @__PURE__ */ p.jsxs("filter", { id: "tabs-goo", children: [
            /* @__PURE__ */ p.jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2", result: "blur" }),
            /* @__PURE__ */ p.jsx(
              "feColorMatrix",
              {
                in: "blur",
                values: `1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 16 -10`,
                type: "matrix"
              }
            )
          ] }),
          /* @__PURE__ */ p.jsxs("filter", { id: "tabs-remove-black", colorInterpolationFilters: "sRGB", children: [
            /* @__PURE__ */ p.jsx(
              "feColorMatrix",
              {
                type: "matrix",
                values: `1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 1 0`
              }
            ),
            /* @__PURE__ */ p.jsxs("feComponentTransfer", { children: [
              /* @__PURE__ */ p.jsx("feFuncR", { type: "linear", slope: "3", intercept: "-1" }),
              /* @__PURE__ */ p.jsx("feFuncG", { type: "linear", slope: "3", intercept: "-1" }),
              /* @__PURE__ */ p.jsx("feFuncB", { type: "linear", slope: "3", intercept: "-1" })
            ] }),
            /* @__PURE__ */ p.jsxs("feComponentTransfer", { children: [
              /* @__PURE__ */ p.jsx("feFuncR", { type: "table", tableValues: "0 0 0 0 0 1 1 1 1 1" }),
              /* @__PURE__ */ p.jsx("feFuncG", { type: "table", tableValues: "0 0 0 0 0 1 1 1 1 1" }),
              /* @__PURE__ */ p.jsx("feFuncB", { type: "table", tableValues: "0 0 0 0 0 1 1 1 1 1" })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "tabs-header-wrapper", ref: d, children: c && /* @__PURE__ */ p.jsx("div", { ref: f, className: "tab-glass-drop-wrapper", children: /* @__PURE__ */ p.jsxs(
      ye,
      {
        hugWidth: !1,
        width: "100%",
        height: "100%",
        borderRadius: 20,
        brightness: 100,
        opacity: 0.4,
        blur: 12,
        className: "tab-glass-drop-indicator__liquid",
        children: [
          m && /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-label", children: m.icon && /* @__PURE__ */ p.jsx("span", { className: "tab-glass-drop-label__icon", children: m.icon }) }),
          /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-shadow" }),
          /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-wrapper-inner", children: /* @__PURE__ */ p.jsxs("div", { className: "tab-glass-drop-liquids", children: [
            /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-liquid__shadow" }),
            /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-liquid__track" })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-cover" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ p.jsx("div", { className: "tabs-header", ref: u, role: "tablist", children: a.map((k, T) => {
      const R = k.key === c;
      return /* @__PURE__ */ p.jsxs(
        "button",
        {
          ref: (C) => {
            C ? _.current.set(k.key, C) : _.current.delete(k.key);
          },
          role: "tab",
          "aria-selected": R,
          "aria-controls": `tabpanel-${k.key}`,
          id: `tab-${k.key}`,
          className: `tab-button ${R ? "active" : ""} ${k.disabled ? "disabled" : ""}`,
          onClick: () => S(k.key, k.disabled),
          onKeyDown: (C) => P(C, k.key, T),
          disabled: k.disabled,
          tabIndex: R ? 0 : -1,
          children: [
            k.icon && /* @__PURE__ */ p.jsx("span", { className: "tab-button__icon", children: k.icon }),
            /* @__PURE__ */ p.jsx("span", { className: "tab-button__label", children: k.label })
          ]
        },
        k.key
      );
    }) }),
    m && /* @__PURE__ */ p.jsx(
      "div",
      {
        id: `tabpanel-${m.key}`,
        role: "tabpanel",
        "aria-labelledby": `tab-${m.key}`,
        className: "tabs-content",
        children: m.content
      }
    )
  ] });
};
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yl = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Ss = (a) => {
  const e = Yl(a);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Wo = (...a) => a.filter((e, t, r) => !!e && e.trim() !== "" && r.indexOf(e) === t).join(" ").trim(), zl = (a) => {
  for (const e in a)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Gl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = Ds(
  ({
    color: a = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: n,
    iconNode: s,
    ...o
  }, c) => qi(
    "svg",
    {
      ref: c,
      ...Gl,
      width: e,
      height: e,
      stroke: a,
      strokeWidth: r ? Number(t) * 24 / Number(e) : t,
      className: Wo("lucide", i),
      ...!n && !zl(o) && { "aria-hidden": "true" },
      ...o
    },
    [
      ...s.map(([u, d]) => qi(u, d)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = (a, e) => {
  const t = Ds(
    ({ className: r, ...i }, n) => qi(Vl, {
      ref: n,
      iconNode: e,
      className: Wo(
        `lucide-${Xl(Ss(a))}`,
        `lucide-${a}`,
        r
      ),
      ...i
    })
  );
  return t.displayName = Ss(a), t;
};
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Es = Wl("plus", Ul), mc = ({
  items: a,
  multiple: e = !1,
  defaultOpenKeys: t = [],
  openKeys: r,
  onChange: i,
  className: n = ""
}) => {
  const [s, o] = Ne(t), c = r !== void 0, u = c ? r : s, d = te(/* @__PURE__ */ new Map()), f = (l, g) => {
    if (g) return;
    const h = u.includes(l);
    let y;
    h ? y = u.filter((v) => v !== l) : y = e ? [...u, l] : [l], c || o(y), i == null || i(y);
  };
  Gr.useEffect(() => {
    Bn(a, ["key", "title"], "Accordion", "items"), zo(a, (l) => l.key, "Accordion", "items");
  }, [a]);
  const _ = (l, g) => {
    (l.key === "Enter" || l.key === " ") && (l.preventDefault(), f(g));
  };
  return /* @__PURE__ */ p.jsx("div", { className: `accordion ${n}`, children: a.map((l) => {
    const g = u.includes(l.key), h = l.children || l.content;
    return /* @__PURE__ */ p.jsxs(
      ye,
      {
        hugWidth: !1,
        width: "100%",
        height: "auto",
        borderRadius: 12,
        brightness: g ? 85 : 95,
        opacity: g ? 0.4 : 0.1,
        blur: 8,
        className: `accordion-item ${g ? "accordion-item--open" : ""}`,
        children: [
          /* @__PURE__ */ p.jsxs("div", { className: "accordion-header-wrapper", children: [
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                className: `accordion-header ${g ? "accordion-header--open" : ""} ${l.disabled ? "accordion-header--disabled" : ""}`,
                onClick: () => {
                  var y;
                  f(l.key, l.disabled), (y = l.onClick) == null || y.call(l);
                },
                onKeyDown: (y) => _(y, l.key),
                disabled: l.disabled,
                "aria-expanded": g,
                "aria-controls": `accordion-content-${l.key}`,
                children: [
                  l.icon && /* @__PURE__ */ p.jsx("div", { className: "accordion-header-icon", children: l.icon }),
                  /* @__PURE__ */ p.jsxs("div", { className: "accordion-header-text", children: [
                    /* @__PURE__ */ p.jsx("span", { className: "accordion-title", children: l.title }),
                    l.subtitle && /* @__PURE__ */ p.jsx("span", { className: "accordion-subtitle", children: l.subtitle })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: "accordion-toggle-icon-wrapper", children: g ? (
              // Plus icon that rotates 45deg to become cross
              /* @__PURE__ */ p.jsx(
                Es,
                {
                  className: "accordion-toggle-icon accordion-toggle-icon--open",
                  size: 15
                }
              )
            ) : (
              // Chevron down when closed
              /* @__PURE__ */ p.jsx(Es, { className: "accordion-toggle-icon", size: 15 })
            ) })
          ] }),
          h && /* @__PURE__ */ p.jsx(
            "div",
            {
              ref: (y) => {
                y ? d.current.set(l.key, y) : d.current.delete(l.key);
              },
              id: `accordion-content-${l.key}`,
              className: `accordion-content ${g ? "accordion-content--open" : ""}`,
              children: /* @__PURE__ */ p.jsx("div", { className: "accordion-content-inner", children: h })
            }
          )
        ]
      },
      l.key
    );
  }) });
}, ql = ({
  items: a,
  selectedKey: e,
  onSelect: t,
  className: r = ""
}) => {
  const i = (s, o) => {
    o || t == null || t(s);
  }, n = (s, o, c) => {
    var u, d;
    if (s.key === "Enter" || s.key === " ")
      s.preventDefault(), i(o);
    else if (s.key === "ArrowDown") {
      s.preventDefault();
      const f = (c + 1) % a.length, _ = a[f];
      !_.disabled && !_.divider && ((u = document.getElementById(`menu-item-${_.key}`)) == null || u.focus());
    } else if (s.key === "ArrowUp") {
      s.preventDefault();
      const f = (c - 1 + a.length) % a.length, _ = a[f];
      !_.disabled && !_.divider && ((d = document.getElementById(`menu-item-${_.key}`)) == null || d.focus());
    }
  };
  return /* @__PURE__ */ p.jsx(
    ye,
    {
      hugWidth: !0,
      height: "auto",
      blur: 50,
      borderRadius: 12,
      className: r,
      children: /* @__PURE__ */ p.jsx("ul", { className: "menu", role: "menu", children: a.map((s, o) => s.divider ? /* @__PURE__ */ p.jsx("li", { className: "menu-divider", role: "separator" }, s.key) : /* @__PURE__ */ p.jsx("li", { role: "none", children: /* @__PURE__ */ p.jsxs(
        "button",
        {
          id: `menu-item-${s.key}`,
          role: "menuitem",
          className: `menu-item ${e === s.key ? "selected" : ""} ${s.disabled ? "disabled" : ""}`,
          onClick: () => i(s.key, s.disabled),
          onKeyDown: (c) => n(c, s.key, o),
          disabled: s.disabled,
          tabIndex: s.disabled ? -1 : 0,
          children: [
            s.icon && /* @__PURE__ */ p.jsx("span", { className: "menu-icon", children: s.icon }),
            /* @__PURE__ */ p.jsx("span", { className: "menu-label", children: s.label })
          ]
        }
      ) }, s.key)) })
    }
  );
}, xc = ({
  trigger: a,
  items: e,
  selectedKey: t,
  onSelect: r,
  placement: i = "bottom",
  className: n = ""
}) => {
  const [s, o] = Ne(!1), c = te(null);
  Z(() => {
    const d = (f) => {
      c.current && !c.current.contains(f.target) && o(!1);
    };
    if (s)
      return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [s]), Z(() => {
    const d = (f) => {
      f.key === "Escape" && s && o(!1);
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [s]);
  const u = (d) => {
    r == null || r(d), o(!1);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: `dropdown ${n}`, ref: c, children: [
    /* @__PURE__ */ p.jsxs(
      "button",
      {
        type: "button",
        className: "dropdown-trigger",
        onClick: () => o(!s),
        "aria-expanded": s,
        "aria-haspopup": "true",
        children: [
          /* @__PURE__ */ p.jsx("span", { className: "dropdown-trigger-content", children: a }),
          /* @__PURE__ */ p.jsx("span", { className: "dropdown-trigger-chevron", children: /* @__PURE__ */ p.jsx(
            "svg",
            {
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ p.jsx(
                "path",
                {
                  d: "M3 4.5L6 7.5L9 4.5",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          ) })
        ]
      }
    ),
    s && /* @__PURE__ */ p.jsx(
      ye,
      {
        hugWidth: !0,
        height: "auto",
        className: `dropdown-menu ${i}`,
        blur: 50,
        children: /* @__PURE__ */ p.jsx(
          ql,
          {
            items: e,
            selectedKey: t,
            onSelect: u
          }
        )
      }
    )
  ] });
}, yc = ({
  current: a,
  total: e,
  pageSize: t = 5,
  onChange: r,
  showFirstLast: i = !0,
  showPrevNext: n = !0,
  className: s = ""
}) => {
  Z(() => {
    Go(e, "Pagination", "total"), Yo(a, 1, e, "Pagination", "current");
  }, [a, e]);
  const o = () => {
    const f = [], _ = Math.floor(t / 2);
    let l = Math.max(1, a - _), g = Math.min(e, a + _);
    a <= _ && (g = Math.min(e, t)), a >= e - _ && (l = Math.max(1, e - t + 1)), l > 1 && i && (f.push(1), l > 2 && f.push("ellipsis-start"));
    for (let h = l; h <= g; h++)
      f.push(h);
    return g < e && i && (g < e - 1 && f.push("ellipsis-end"), f.push(e)), f;
  }, c = (f) => {
    f >= 1 && f <= e && f !== a && (r == null || r(f));
  }, u = (f, _) => {
    (f.key === "Enter" || f.key === " ") && (f.preventDefault(), c(_));
  }, d = o();
  return /* @__PURE__ */ p.jsx("nav", { className: `pagination ${s}`, "aria-label": "Pagination", children: /* @__PURE__ */ p.jsxs("ul", { className: "pagination-list", children: [
    n && /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "pagination-button pagination-prev",
        onClick: () => c(a - 1),
        onKeyDown: (f) => u(f, a - 1),
        disabled: a === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ) }),
    d.map((f, _) => typeof f == "string" ? /* @__PURE__ */ p.jsx("li", { className: "pagination-ellipsis", children: "..." }, `${f}-${_}`) : /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: `pagination-button ${f === a ? "active" : ""}`,
        onClick: () => c(f),
        onKeyDown: (l) => u(l, f),
        "aria-label": `Page ${f}`,
        "aria-current": f === a ? "page" : void 0,
        children: f
      }
    ) }, f)),
    n && /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "pagination-button pagination-next",
        onClick: () => c(a + 1),
        onKeyDown: (f) => u(f, a + 1),
        disabled: a === e,
        "aria-label": "Next page",
        children: "›"
      }
    ) })
  ] }) });
};
let xn = /* @__PURE__ */ new Map(), Ps = 1e3;
function Cs(a = "interface-ui-portal") {
  if (typeof document > "u")
    return {};
  let e = xn.get(a);
  return e || (e = document.createElement("div"), e.id = a, e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%", e.style.pointerEvents = "none", e.setAttribute("data-portal-container", a), document.body.appendChild(e), xn.set(a, e)), e;
}
function Hl(a) {
  return Ps += 10, Ps;
}
function Kl(a, e) {
  const t = xn.get(a);
  t && (t.style.zIndex = e.toString());
}
const Xn = ({
  children: a,
  containerId: e = "interface-ui-portal",
  zIndex: t,
  disablePortal: r = !1
}) => {
  const i = te(null), n = te(null);
  return Z(() => {
    if (r) return;
    const s = Cs(e);
    i.current = s;
    const o = t ?? Hl();
    return n.current = o, Kl(e, o), s.style.pointerEvents = "auto", () => {
      s && s.children.length === 0 && (s.style.pointerEvents = "none");
    };
  }, [e, t, r]), r || typeof document > "u" ? /* @__PURE__ */ p.jsx(p.Fragment, { children: a }) : (i.current || (i.current = Cs(e)), Zo(a, i.current));
}, vc = ({
  open: a,
  children: e,
  title: t,
  closable: r = !0,
  onClose: i,
  maskClosable: n = !0,
  width: s = 520,
  className: o = ""
}) => {
  const c = te(null), u = te(null);
  if (Z(() => {
    a && (Vo(s, "Modal", "width"), r && !i && console.warn("[Modal] closable is true but onClose handler is not provided."));
  }, [a, s, r, i]), Z(() => {
    if (a) {
      u.current = document.activeElement, document.body.style.overflow = "hidden";
      const _ = (l) => {
        var v;
        if (l.key !== "Tab") return;
        const g = (v = c.current) == null ? void 0 : v.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!g || g.length === 0) return;
        const h = g[0], y = g[g.length - 1];
        l.shiftKey ? document.activeElement === h && (l.preventDefault(), y.focus()) : document.activeElement === y && (l.preventDefault(), h.focus());
      };
      return document.addEventListener("keydown", _), () => {
        var l;
        document.removeEventListener("keydown", _), document.body.style.overflow = "", (l = u.current) == null || l.focus();
      };
    } else
      document.body.style.overflow = "";
  }, [a]), Z(() => {
    const _ = (l) => {
      l.key === "Escape" && a && r && (i == null || i());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [a, r, i]), !a) return null;
  const d = (_) => {
    n && _.target === _.currentTarget && (i == null || i());
  }, f = /* @__PURE__ */ p.jsx("div", { className: "modal-mask", onClick: d, children: /* @__PURE__ */ p.jsxs(
    "div",
    {
      ref: c,
      className: `modal ${o}`,
      style: { width: typeof s == "number" ? `${s}px` : s },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": t ? "modal-title" : void 0,
      children: [
        (t || r) && /* @__PURE__ */ p.jsxs("div", { className: "modal-header", children: [
          t && /* @__PURE__ */ p.jsx("h2", { id: "modal-title", className: "modal-title", children: t }),
          r && /* @__PURE__ */ p.jsx(
            "button",
            {
              className: "modal-close",
              onClick: i,
              "aria-label": "Close modal",
              children: "×"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "modal-body", children: e })
      ]
    }
  ) });
  return /* @__PURE__ */ p.jsx(Xn, { containerId: "interface-ui-modal", zIndex: 1050, children: f });
}, bc = ({
  open: a,
  children: e,
  title: t,
  placement: r = "right",
  size: i = 378,
  closable: n = !0,
  onClose: s,
  maskClosable: o = !0,
  className: c = ""
}) => {
  const u = te(null);
  if (Z(() => {
    a && (Vo(i, "Drawer", "size"), n && !s && console.warn("[Drawer] closable is true but onClose handler is not provided."));
  }, [a, i, n, s]), Z(() => {
    if (a)
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = "";
      };
  }, [a]), Z(() => {
    const g = (h) => {
      h.key === "Escape" && a && n && (s == null || s());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [a, n, s]), !a) return null;
  const d = (g) => {
    o && g.target === g.currentTarget && (s == null || s());
  }, f = typeof i == "number" ? `${i}px` : i, _ = {};
  r === "left" || r === "right" ? _.width = f : _.height = f;
  const l = /* @__PURE__ */ p.jsx("div", { className: "drawer-mask", onClick: d, children: /* @__PURE__ */ p.jsxs(
    "div",
    {
      ref: u,
      className: `drawer drawer-${r} ${c}`,
      style: _,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": t ? "drawer-title" : void 0,
      children: [
        (t || n) && /* @__PURE__ */ p.jsxs("div", { className: "drawer-header", children: [
          t && /* @__PURE__ */ p.jsx("h2", { id: "drawer-title", className: "drawer-title", children: t }),
          n && /* @__PURE__ */ p.jsx(
            "button",
            {
              className: "drawer-close",
              onClick: s,
              "aria-label": "Close drawer",
              children: "×"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "drawer-body", children: e })
      ]
    }
  ) });
  return /* @__PURE__ */ p.jsx(Xn, { containerId: "interface-ui-drawer", zIndex: 1050, children: l });
}, wc = ({
  title: a,
  children: e,
  placement: t = "top",
  trigger: r = "hover",
  className: i = ""
}) => {
  const [n, s] = Ne(!1), [o, c] = Ne({ top: 0, left: 0 }), u = te(null), d = te(null);
  Z(() => {
    Fl(a, "Tooltip", "title"), Bl(e, "Tooltip", "children");
  }, [a, e]);
  const f = () => {
    if (!u.current || !d.current) return;
    const v = u.current.getBoundingClientRect(), b = d.current.getBoundingClientRect(), S = window.scrollX || window.pageXOffset, P = window.scrollY || window.pageYOffset;
    let m = 0, D = 0;
    switch (t) {
      case "top":
        m = v.top + P - b.height - 8, D = v.left + S + v.width / 2 - b.width / 2;
        break;
      case "bottom":
        m = v.bottom + P + 8, D = v.left + S + v.width / 2 - b.width / 2;
        break;
      case "left":
        m = v.top + P + v.height / 2 - b.height / 2, D = v.left + S - b.width - 8;
        break;
      case "right":
        m = v.top + P + v.height / 2 - b.height / 2, D = v.right + S + 8;
        break;
    }
    c({ top: m, left: D });
  };
  Z(() => {
    if (n) {
      f();
      const v = () => f(), b = () => f();
      return window.addEventListener("scroll", v, !0), window.addEventListener("resize", b), () => {
        window.removeEventListener("scroll", v, !0), window.removeEventListener("resize", b);
      };
    }
  }, [n, t]);
  const _ = () => {
    s(!0);
  }, l = () => {
    s(!1);
  }, g = () => {
    r === "click" && s(!n);
  }, h = {
    ref: u
  };
  r === "hover" ? (h.onMouseEnter = _, h.onMouseLeave = l) : r === "focus" ? (h.onFocus = _, h.onBlur = l) : r === "click" && (h.onClick = g);
  const y = Gr.cloneElement(e, h);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    y,
    n && /* @__PURE__ */ p.jsx(Xn, { containerId: "interface-ui-tooltip", zIndex: 1070, children: /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: d,
        className: `tooltip tooltip-${t} ${i}`,
        style: { top: `${o.top}px`, left: `${o.left}px` },
        role: "tooltip",
        children: a
      }
    ) })
  ] });
}, Tc = ({
  icon: a,
  onClick: e,
  variant: t = "primary",
  size: r = "medium",
  disabled: i = !1,
  "aria-label": n,
  className: s = ""
}) => /* @__PURE__ */ p.jsx(ye, { hugWidth: !1, width: "40px", height: 40, children: /* @__PURE__ */ p.jsx(
  "button",
  {
    className: `icon-button ${t} ${r} ${i ? "disabled" : ""} ${s}`,
    onClick: e,
    disabled: i,
    "aria-label": n,
    children: /* @__PURE__ */ p.jsx("span", { className: "icon-button__icon", children: a })
  }
) }), kc = ({
  items: a,
  size: e = "medium",
  clickable: t = !1,
  className: r = ""
}) => /* @__PURE__ */ p.jsx("ul", { className: `list ${e} ${r}`, children: a.map((i) => /* @__PURE__ */ p.jsxs(
  "li",
  {
    className: `list-item ${t && i.onClick ? "clickable" : ""} ${i.disabled ? "disabled" : ""}`,
    onClick: i.disabled ? void 0 : i.onClick,
    role: t && i.onClick ? "button" : void 0,
    tabIndex: t && i.onClick && !i.disabled ? 0 : void 0,
    children: [
      i.icon && /* @__PURE__ */ p.jsx("span", { className: "list-icon", children: i.icon }),
      /* @__PURE__ */ p.jsx("span", { className: "list-content", children: i.content })
    ]
  },
  i.key
)) });
function Ql() {
  const [a, e] = Ne([]), t = te(null), [r, i] = Ne(10), n = () => {
    const o = [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation ullamco",
      "Laboris nisi ut aliquip ex ea",
      "Duis aute irure dolor in reprehenderit",
      "Excepteur sint occaecat cupidatat",
      "Sunt in culpa qui officia deserunt"
    ], c = Math.floor(Math.random() * 3) + 1;
    let u = "";
    for (let d = 0; d < c; d++) {
      const f = Math.floor(Math.random() * o.length);
      u += o[f] + ". ";
    }
    return u;
  };
  Z(() => {
    e(Array.from({ length: r }, () => `${n()}`));
  }, [r]), Z(() => {
    setTimeout(() => {
      var o, c;
      (c = t.current) == null || c.scrollTo({
        top: (o = t.current) == null ? void 0 : o.scrollHeight
      });
    }, 0);
  }, []);
  const s = () => {
    const o = t.current;
    if (o && o.scrollTop <= 100) {
      const c = o.scrollHeight, u = o.scrollTop;
      i((d) => d + 10), e((d) => [
        ...Array.from({ length: 10 }, () => `${n()}`),
        ...d
      ]), setTimeout(() => {
        if (o) {
          const d = o.scrollHeight;
          o.scrollTop = u + (d - c);
        }
      }, 0);
    }
  };
  return /* @__PURE__ */ p.jsx("div", { style: {
    width: "600px",
    height: "100%",
    overflow: "hidden"
  }, children: /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: t,
      className: "test-overflow-items",
      style: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        maxHeight: "500px"
      },
      onScroll: s,
      children: a.map((o, c) => /* @__PURE__ */ p.jsx("div", { className: "test-overflow-item", style: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        backgroundColor: "#f0f0f0"
      }, children: /* @__PURE__ */ p.jsx("div", { className: "test-overflow-item-content", children: /* @__PURE__ */ p.jsx("p", { children: o }) }) }, c))
    }
  ) });
}
function Sc({ children: a }) {
  return /* @__PURE__ */ p.jsx(Ql, {});
}
export {
  mc as Accordion,
  hc as Alert,
  fc as Avatar,
  cc as Badge,
  ec as Button,
  lc as Card,
  ic as Checkbox,
  uc as Chip,
  bc as Drawer,
  xc as Dropdown,
  Tc as IconButton,
  tc as Input,
  kc as List,
  ql as Menu,
  vc as Modal,
  yc as Pagination,
  Sc as Pane,
  pc as Progress,
  nc as Radio,
  oc as Select,
  ac as Slider,
  sc as Switch,
  _c as Table,
  gc as Tabs,
  dc as Tag,
  rc as Textarea,
  wc as Tooltip
};
