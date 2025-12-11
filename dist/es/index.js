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
        case m:
          return "Fragment";
        case v:
          return "Profiler";
        case b:
          return "StrictMode";
        case D:
          return "Suspense";
        case T:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof w == "object")
        switch (typeof w.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), w.$$typeof) {
          case f:
            return "Portal";
          case E:
            return w.displayName || "Context";
          case S:
            return (w._context.displayName || "Context") + ".Consumer";
          case x:
            var N = w.render;
            return w = w.displayName, w || (w = N.displayName || N.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
          case k:
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
      if (w === m) return "<>";
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
      var w = z.A;
      return w === null ? null : w.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function s(w) {
      if ($.call(w, "key")) {
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
              h(re[B]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(re);
      if ($.call(N, "key")) {
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
    function h(w) {
      _(w) ? w._store && (w._store.validated = 1) : typeof w == "object" && w !== null && w.$$typeof === R && (w._payload.status === "fulfilled" ? _(w._payload.value) && w._payload.value._store && (w._payload.value._store.validated = 1) : w._store && (w._store.validated = 1));
    }
    function _(w) {
      return typeof w == "object" && w !== null && w.$$typeof === g;
    }
    var l = Gr, g = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), E = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, H = Array.isArray, U = console.createTask ? console.createTask : function() {
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
    Dr.Fragment = m, Dr.jsx = function(w, N, V) {
      var B = 1e4 > z.recentlyCreatedOwnerStacks++;
      return d(
        w,
        N,
        V,
        !1,
        B ? Error("react-stack-top-frame") : I,
        B ? U(r(w)) : W
      );
    }, Dr.jsxs = function(w, N, V) {
      var B = 1e4 > z.recentlyCreatedOwnerStacks++;
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
  distortionScale: h = -180,
  redOffset: _ = 0,
  greenOffset: l = 2,
  blueOffset: g = 2,
  xChannel: f = "R",
  yChannel: m = "G",
  mixBlendMode: b = "difference",
  hugWidth: v = !1,
  className: S = "",
  style: E = {}
}) => {
  const x = Qo(), D = `glass-filter-${x}`, T = `red-grad-${x}`, k = `blue-grad-${x}`, R = te(null), C = te(null), O = te(null), z = te(null), $ = te(null), H = te(null), U = Vr(() => {
    var B;
    const W = (B = R.current) == null ? void 0 : B.getBoundingClientRect();
    if (!W || W.width === 0 || W.height === 0)
      return;
    const q = W.width, w = W.height, N = Math.min(q, w) * (i * 0.5), V = `
      <svg viewBox="0 0 ${q} ${w}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${T}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${k}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${q}" height="${w}" fill="black"></rect>
        <rect x="0" y="0" width="${q}" height="${w}" rx="${r}" fill="url(#${T})" />
        <rect x="0" y="0" width="${q}" height="${w}" rx="${r}" fill="url(#${k})" style="mix-blend-mode: ${b}" />
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
    b,
    T,
    k
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
        { ref: z, offset: l },
        { ref: $, offset: g }
      ].forEach(({ ref: w, offset: N }) => {
        w.current && (w.current.setAttribute(
          "scale",
          (h + N).toString()
        ), w.current.setAttribute("xChannelSelector", f), w.current.setAttribute("yChannelSelector", m));
      }), (q = H.current) == null || q.setAttribute(
        "stdDeviation",
        c.toString()
      );
    });
    return () => cancelAnimationFrame(W);
  }, [
    G,
    c,
    h,
    _,
    l,
    g,
    f,
    m
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
    ...E,
    width: v ? "auto" : typeof e == "number" ? `${e}px` : e,
    height: typeof t == "number" ? `${t}px` : t,
    borderRadius: `${r}px`,
    display: v ? "inline-flex" : "flex",
    "--glass-frost": u,
    "--glass-saturation": d,
    "--filter-id": `url(#${D})`,
    border: `1px solid rgba(255, 255, 255, ${i})`
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      ref: R,
      className: `glass-surface ${L() ? "glass-surface--svg" : "glass-surface--fallback"} ${v ? "glass-surface--hug-width" : ""} ${S}`,
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
                  ref: z,
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
                  ref: $,
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
  onBlur: h,
  onFocus: _,
  name: l,
  id: g,
  width: f
}) => {
  const m = g || `input-${Math.random().toString(36).substr(2, 9)}`, b = o === "error" || !!c, v = c || u;
  return /* @__PURE__ */ p.jsxs("div", { className: "input-wrapper", children: [
    a && /* @__PURE__ */ p.jsxs("label", { htmlFor: m, className: "input-label", children: [
      a,
      s && /* @__PURE__ */ p.jsx("span", { className: "input-required", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsx(ye, { hugWidth: !f, width: f, height: 50, children: /* @__PURE__ */ p.jsx(
      "input",
      {
        id: m,
        name: l,
        type: i,
        value: t,
        defaultValue: r,
        placeholder: e,
        disabled: n,
        required: s,
        className: `input ${o} ${b ? "error" : ""} ${n ? "disabled" : ""}`,
        onChange: d,
        onBlur: h,
        onFocus: _,
        "aria-invalid": b,
        "aria-describedby": v ? `${m}-helper` : void 0
      }
    ) }),
    v && /* @__PURE__ */ p.jsx(
      "span",
      {
        id: `${m}-helper`,
        className: `input-helper ${b ? "error" : ""}`,
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
  helperText: h,
  onChange: _,
  onBlur: l,
  onFocus: g,
  name: f,
  id: m,
  width: b
}) => {
  const v = m || `textarea-${Math.random().toString(36).substr(2, 9)}`, S = u === "error" || !!d, E = d || h, x = (t == null ? void 0 : t.length) || 0;
  return /* @__PURE__ */ p.jsxs("div", { className: "textarea-wrapper", children: [
    a && /* @__PURE__ */ p.jsxs("label", { htmlFor: v, className: "textarea-label", children: [
      a,
      s && /* @__PURE__ */ p.jsx("span", { className: "textarea-required", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsx(ye, { hugWidth: !b, width: b, height: 100, children: /* @__PURE__ */ p.jsx(
      "textarea",
      {
        id: v,
        name: f,
        value: t,
        defaultValue: r,
        placeholder: e,
        rows: i,
        disabled: n,
        required: s,
        maxLength: c,
        className: `textarea ${u} ${S ? "error" : ""} ${n ? "disabled" : ""} ${o ? "" : "no-resize"}`,
        onChange: _,
        onBlur: l,
        onFocus: g,
        "aria-invalid": S,
        "aria-describedby": E || c ? `${v}-helper` : void 0
      }
    ) }),
    (E || c) && /* @__PURE__ */ p.jsxs("div", { className: "textarea-footer", children: [
      E && /* @__PURE__ */ p.jsx(
        "span",
        {
          id: `${v}-helper`,
          className: `textarea-helper ${S ? "error" : ""}`,
          children: E
        }
      ),
      c && /* @__PURE__ */ p.jsxs("span", { className: "textarea-counter", children: [
        x,
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
  const d = c || `checkbox-${Math.random().toString(36).substr(2, 9)}`, h = Gr.useRef(null), _ = te(null), [l, g] = Ne(!1);
  return Gr.useEffect(() => {
    h.current && (h.current.indeterminate = n);
  }, [n]), Z(() => {
    const f = _.current;
    if (!f || r) return;
    const m = () => {
      g(!0);
    }, b = () => {
      setTimeout(() => g(!1), 150);
    }, v = () => {
      g(!1);
    };
    return f.addEventListener("mousedown", m), f.addEventListener("mouseup", b), f.addEventListener("mouseleave", v), () => {
      f.removeEventListener("mousedown", m), f.removeEventListener("mouseup", b), f.removeEventListener("mouseleave", v);
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
                  ref: h,
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
}, $e = function(e) {
  return e !== !1;
}, bn = function() {
  return typeof window < "u";
}, si = function(e) {
  return pe(e) || Se(e);
}, Ns = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Me = Array.isArray, Qi = /(?:-?\.?\d|\.)+/gi, js = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ji = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Os = /[+-]=-?[.\d]+/, $s = /[^,'"\[\]\s]+/gi, sa = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, fe, ht, Zi, wn, qe = {}, pi = {}, As, Ls = function(e) {
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
}, kn = {}, $t = [], Ji = {}, Fs, ze = {}, Oi = {}, Qn = 30, ci = [], Sn = "", En = function(e) {
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
}, Ae = function(e, t) {
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
  var e = $t.length, t = $t.slice(0), r, i;
  for (Ji = {}, $t.length = 0, r = 0; r < e; r++)
    i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Pn = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Xs = function(e, t, r, i) {
  $t.length && !Ce && _i(), e.render(t, r, !!(Ce && t < 0 && Pn(e))), $t.length && !Ce && _i();
}, zs = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match($s).length < 2 ? t : Se(e) ? e.trim() : e;
}, Ys = function(e) {
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
  if ($e(e.inherit))
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
  if (!r && e._pt && !Ce && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Fs !== Ye.frame)
    return $t.push(e), e._lazy = [n, i], 1;
}, ha = function a(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || a(t));
}, tn = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, pa = function(e, t, r, i) {
  var n = e.ratio, s = t < 0 || !t && (!e._start && ha(e) && !(!e._initted && tn(e)) || (e._ts < 0 || e._dp._ts < 0) && !tn(e)) ? 0 : 1, o = e._rDelay, c = 0, u, d, h;
  if (o && e._repeat && (c = ti(0, e._tDur, t), d = xr(c, o), e._yoyo && d & 1 && (s = 1 - s), d !== xr(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Ce || i || e._zTime === ce || !t && e._zTime) {
    if (!e._initted && Us(e, t, i, r, c))
      return;
    for (h = e._zTime, e._zTime = t || (r ? ce : 0), r || (r = t && !h), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = c, u = e._pt; u; )
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
      o = c.vars.defaults || {}, c = $e(c.vars.inherit) && c.parent;
    s.immediateRender = $e(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1];
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
  }, r = Zt(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, s = {}, o = i > 0 && i < 1, c = isNaN(i) || o, u = t.axis, d = i, h = i;
  return Se(i) ? d = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && c && (d = i[0], h = i[1]), function(_, l, g) {
    var f = (g || t).length, m = s[f], b, v, S, E, x, D, T, k, R;
    if (!m) {
      if (R = t.grid === "auto" ? 0 : (t.grid || [1, tt])[1], !R) {
        for (T = -tt; T < (T = g[R++].getBoundingClientRect().left) && R < f; )
          ;
        R < f && R--;
      }
      for (m = s[f] = [], b = c ? Math.min(R, f) * d - 0.5 : i % R, v = R === tt ? 0 : c ? f * h / R - 0.5 : i / R | 0, T = 0, k = tt, D = 0; D < f; D++)
        S = D % R - b, E = v - (D / R | 0), m[D] = x = u ? Math.abs(u === "y" ? E : S) : Ms(S * S + E * E), x > T && (T = x), x < k && (k = x);
      i === "random" && Hs(m), m.max = T - k, m.min = k, m.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (R > f ? f - 1 : u ? u === "y" ? f / R : R : Math.max(R, f / R)) || 0) * (i === "edges" ? -1 : 1), m.b = f < 0 ? n - f : n, m.u = Re(t.amount || t.each) || 0, r = r && f < 0 ? oo(r) : r;
    }
    return f = (m[_] - m.min) / m.max || 0, Te(m.b + (r ? r(f) : f) * m.v) + m.u;
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
    for (var o = parseFloat(n ? s.x : s), c = parseFloat(n ? s.y : 0), u = tt, d = 0, h = e.length, _, l; h--; )
      n ? (_ = e[h].x - o, l = e[h].y - c, _ = _ * _ + l * l) : _ = Math.abs(e[h] - o), _ < u && (u = _, d = h);
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
    s = e.indexOf(")", i), o = e.charAt(i + 7) === "[", n = e.substr(i + 7, s - i - 7).match(o ? $s : Qi), r += e.substr(t, i - t) + Zs(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), t = s + 1;
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
    var s = Se(e), o = {}, c, u, d, h, _;
    if (r === !0 && (i = 1) && (r = null), s)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Me(e) && !Me(t)) {
      for (d = [], h = e.length, _ = h - 2, u = 1; u < h; u++)
        d.push(a(e[u - 1], e[u]));
      h--, n = function(g) {
        g *= h;
        var f = Math.min(_, ~~g);
        return d[f](g - f);
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
    return c = i[t + "Params"], u = i.callbackScope || e, r && $t.length && _i(), o && (ue = o), d = c ? n.apply(u, c) : n.call(u), ue = s, d;
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
        if (ze[t])
          return;
        He(i, He(gi(e, n), s)), mr(i.prototype, mr(n, gi(e, s))), ze[i.prop = t] = i, e.targetTest && (ci.push(i), kn[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
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
}, $i = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * ae + 0.5 | 0;
}, io = function(e, t, r) {
  var i = e ? kt(e) ? [e >> 16, e >> 8 & ae, e & ae] : 0 : jr.black, n, s, o, c, u, d, h, _, l, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), jr[e])
      i = jr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & ae, i & ae, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & ae, e & ae];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(Qi), !t)
        c = +i[0] % 360 / 360, u = +i[1] / 100, d = +i[2] / 100, s = d <= 0.5 ? d * (u + 1) : d + u - d * u, n = d * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = $i(c + 1 / 3, n, s), i[1] = $i(c, n, s), i[2] = $i(c - 1 / 3, n, s);
      else if (~e.indexOf("="))
        return i = e.match(js), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Qi) || jr.transparent;
    i = i.map(Number);
  }
  return t && !g && (n = i[0] / ae, s = i[1] / ae, o = i[2] / ae, h = Math.max(n, s, o), _ = Math.min(n, s, o), d = (h + _) / 2, h === _ ? c = u = 0 : (l = h - _, u = d > 0.5 ? l / (2 - h - _) : l / (h + _), c = h === n ? (s - o) / l + (s < o ? 6 : 0) : h === s ? (o - n) / l + 2 : (n - s) / l + 4, c *= 60), i[0] = ~~(c + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(d * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, no = function(e) {
  var t = [], r = [], i = -1;
  return e.split(At).forEach(function(n) {
    var s = n.match(lr) || [];
    t.push.apply(t, s), r.push(i += s.length + 1);
  }), t.c = r, t;
}, rs = function(e, t, r) {
  var i = "", n = (e + i).match(At), s = t ? "hsla(" : "rgba(", o = 0, c, u, d, h;
  if (!n)
    return e;
  if (n = n.map(function(_) {
    return (_ = io(_, t, 1)) && s + (t ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), r && (d = no(e), c = r.c, c.join(i) !== d.c.join(i)))
    for (u = e.replace(At, "1").split(lr), h = u.length - 1; o < h; o++)
      i += u[o] + (~c.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (d.length ? d : n.length ? n : r).shift());
  if (!u)
    for (u = e.split(At), h = u.length - 1; o < h; o++)
      i += u[o] + n[o];
  return i + u[h];
}, At = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in jr)
    a += "|" + e + "\\b";
  return new RegExp(a + ")", "gi");
}(), Sa = /hsl[a]?\(/, so = function(e) {
  var t = e.join(" "), r;
  if (At.lastIndex = 0, At.test(t))
    return r = Sa.test(t), e[1] = rs(e[1], r), e[0] = rs(e[0], r, no(e[1])), !0;
}, Hr, Ye = function() {
  var a = Date.now, e = 500, t = 33, r = a(), i = r, n = 1e3 / 240, s = n, o = [], c, u, d, h, _, l, g = function f(m) {
    var b = a() - i, v = m === !0, S, E, x, D;
    if ((b > e || b < 0) && (r += b - t), i += b, x = i - r, S = x - s, (S > 0 || v) && (D = ++h.frame, _ = x - h.time * 1e3, h.time = x = x / 1e3, s += S + (S >= n ? 4 : n - S), E = 1), v || (c = u(f)), E)
      for (l = 0; l < o.length; l++)
        o[l](x, _, D, m);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(m) {
      return _ / (1e3 / (m || 60));
    },
    wake: function() {
      As && (!Zi && bn() && (ht = Zi = window, wn = ht.document || {}, qe.gsap = Fe, (ht.gsapVersions || (ht.gsapVersions = [])).push(Fe.version), Ls(pi || ht.GreenSockGlobals || !ht.gsap && ht || {}), to.forEach(ro)), d = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && h.sleep(), u = d || function(m) {
        return setTimeout(m, s - h.time * 1e3 + 1 | 0);
      }, Hr = 1, g(2));
    },
    sleep: function() {
      (d ? cancelAnimationFrame : clearTimeout)(c), Hr = 0, u = Ur;
    },
    lagSmoothing: function(m, b) {
      e = m || 1 / 0, t = Math.min(b || 33, e);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = h.time * 1e3 + n;
    },
    add: function(m, b, v) {
      var S = b ? function(E, x, D, T) {
        m(E, x, D, T), h.remove(S);
      } : m;
      return h.remove(m), o[v ? "unshift" : "push"](S), vr(), S;
    },
    remove: function(m, b) {
      ~(b = o.indexOf(m)) && o.splice(b, 1) && l >= b && l--;
    },
    _listeners: o
  }, h;
}(), vr = function() {
  return !Hr && Ye.wake();
}, J = {}, Ea = /^[\d.\-M][\d.\-,\s]/, Pa = /["']/g, Ca = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, o, c, u; n < s; n++)
    c = r[n], o = n !== s - 1 ? c.lastIndexOf(",") : c.length, u = c.substr(0, o), t[i] = isNaN(u) ? u.replace(Pa, "").trim() : +u, i = c.substr(o + 1).trim();
  return t;
}, Da = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, Ra = function(e) {
  var t = (e + "").split("("), r = J[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Ca(t[1])] : Da(e).split(",").map(zs)) : J._CE && Ea.test(e) ? J._CE("", e) : r;
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
  return Ae(e, function(o) {
    J[o] = qe[o] = n, J[s = o.toLowerCase()] = r;
    for (var c in n)
      J[s + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = J[o + "." + c] = n[c];
  }), n;
}, lo = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Ai = function a(e, t, r) {
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
Ae("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, e) {
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
nr("Elastic", Ai("in"), Ai("out"), Ai());
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
Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return Sn += a + "," + a + "Params,";
});
var co = function(e, t) {
  this.id = ra++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Bs, this.set = t ? t.getSetter : Mn;
}, Kr = /* @__PURE__ */ function() {
  function a(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, yr(this, +t.duration, 1, 1), this.data = t.data, ue && (this._ctx = ue, ue.data.push(this)), Hr || Ye.wake();
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
    return this._start + ($e(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
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
    return this.totalTime(et(this, r), $e(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, $e(i)), this._dur || (this._zTime = -ce), this;
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
      var s = pe(r) ? r : Ys, o = function() {
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
    return r === void 0 && (r = {}), n = a.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = $e(r.sortChildren), fe && pt(r.parent || fe, yt(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Ws(yt(n), r.scrollTrigger), n;
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
    return s.runBackwards = 1, Ir(s).immediateRender = $e(s.immediateRender), this.staggerTo(i, n, s, o, c, u, d);
  }, t.staggerFromTo = function(i, n, s, o, c, u, d, h) {
    return o.startAt = s, Ir(o).immediateRender = $e(o.immediateRender), this.staggerTo(i, n, o, c, u, d, h);
  }, t.render = function(i, n, s) {
    var o = this._time, c = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, d = i <= 0 ? 0 : Te(i), h = this._zTime < 0 != i < 0 && (this._initted || !u), _, l, g, f, m, b, v, S, E, x, D, T;
    if (this !== fe && d > c && i >= 0 && (d = c), d !== this._tTime || s || h) {
      if (o !== this._time && u && (d += this._time - o, i += this._time - o), _ = d, E = this._start, S = this._ts, b = !S, h && (u || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (D = this._yoyo, m = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, s);
        if (_ = Te(d % m), d === c ? (f = this._repeat, _ = u) : (x = Te(d / m), f = ~~x, f && f === x && (_ = u, f--), _ > u && (_ = u)), x = xr(this._tTime, m), !o && this._tTime && x !== f && this._tTime - x * m - this._dur <= 0 && (x = f), D && f & 1 && (_ = u - _, T = 1), f !== x && !this._lock) {
          var k = D && x & 1, R = k === (D && f & 1);
          if (f < x && (k = !k), o = k ? 0 : d % u ? u : d, this._lock = 1, this.render(o || (T ? 0 : Te(f * m)), n, !u)._lock = 0, this._tTime = d, !n && this.parent && Ve(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), o && o !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, c = this._tDur, R && (this._lock = 2, o = k ? u : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
          ao(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = _a(this, Te(o), Te(_)), v && (d -= _ - (_ = v._start))), this._tTime = d, this._time = _, this._act = !S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && d && !n && !x && (Ve(this, "onStart"), this._tTime !== d))
        return this;
      if (_ >= o && i >= 0)
        for (l = this._first; l; ) {
          if (g = l._next, (l._act || _ >= l._start) && l._ts && v !== l) {
            if (l.parent !== this)
              return this.render(i, n, s);
            if (l.render(l._ts > 0 ? (_ - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (_ - l._start) * l._ts, n, s), _ !== this._time || !this._ts && !b) {
              v = 0, g && (d += this._zTime = -ce);
              break;
            }
          }
          l = g;
        }
      else {
        l = this._last;
        for (var C = i < 0 ? i : _; l; ) {
          if (g = l._prev, (l._act || C <= l._end) && l._ts && v !== l) {
            if (l.parent !== this)
              return this.render(i, n, s);
            if (l.render(l._ts > 0 ? (C - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (C - l._start) * l._ts, n, s || Ce && Pn(l)), _ !== this._time || !this._ts && !b) {
              v = 0, g && (d += this._zTime = C ? -ce : ce);
              break;
            }
          }
          l = g;
        }
      }
      if (v && !n && (this.pause(), v.render(_ >= o ? 0 : -ce)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = E, ki(this), this.render(i, n, s);
      this._onUpdate && !n && Ve(this, "onUpdate", !0), (d === c && this._tTime >= this.totalDuration() || !d && o) && (E === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (d === c && this._ts > 0 || !d && this._ts < 0) && Lt(this, 1), !n && !(i < 0 && !o) && (d || o || !c) && (Ve(this, d === c && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < c && this.timeScale() > 0) && this._prom())));
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
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Te(Ye.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
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
    var s = this, o = et(s, i), c = n, u = c.startAt, d = c.onStart, h = c.onStartParams, _ = c.immediateRender, l, g = we.to(s, He({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || ce,
      onStart: function() {
        if (s.pause(), !l) {
          var m = n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale());
          g._dur !== m && yr(g, m, 0, 1).render(g._time, !0, !0), l = 1;
        }
        d && d.apply(g, h || []);
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
    var n = 0, s = this, o = s._last, c = tt, u, d, h;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (h = s.parent; o; )
        u = o._prev, o._dirty && o.totalDuration(), d = o._start, d > c && s._sort && o._ts && !s._lock ? (s._lock = 1, pt(s, o, d - o._delay, 1)._lock = 0) : c = d, d < 0 && o._ts && (n -= d, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += d / s._ts, s._time -= d, s._tTime -= d), s.shiftChildren(-d, !1, -1 / 0), c = 0), o._end > n && o._ts && (n = o._end), o = u;
      yr(s, s === fe && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, e.updateRoot = function(i) {
    if (fe._ts && (Xs(fe, mi(i, fe)), Fs = Ye.frame), Ye.frame >= Qn) {
      Qn += We.autoSleep || 120;
      var n = fe._first;
      if ((!n || !n._ts) && We.autoSleep && Ye._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Ye.sleep();
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
  var c = new Le(this._pt, e, t, 0, 1, go, null, n), u = 0, d = 0, h, _, l, g, f, m, b, v;
  for (c.b = r, c.e = i, r += "", i += "", (b = ~i.indexOf("random(")) && (i = qr(i)), s && (v = [r, i], s(v, e, t), r = v[0], i = v[1]), _ = r.match(ji) || []; h = ji.exec(i); )
    g = h[0], f = i.substring(u, h.index), l ? l = (l + 1) % 5 : f.substr(-5) === "rgba(" && (l = 1), g !== _[d++] && (m = parseFloat(_[d - 1]) || 0, c._pt = {
      _next: c._pt,
      p: f || d === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: g.charAt(1) === "=" ? ur(m, g) - m : parseFloat(g) - m,
      m: l && l < 4 ? Math.round : 0
    }, u = ji.lastIndex);
  return c.c = u < i.length ? i.substring(u, i.length) : "", c.fp = o, (Os.test(i) || b) && (c.e = 0), this._pt = c, c;
}, Cn = function(e, t, r, i, n, s, o, c, u, d) {
  pe(i) && (i = i(n || 0, e, s));
  var h = e[t], _ = r !== "get" ? r : pe(h) ? u ? e[t.indexOf("set") || !pe(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : h, l = pe(h) ? u ? Aa : po : Rn, g;
  if (Se(i) && (~i.indexOf("random(") && (i = qr(i)), i.charAt(1) === "=" && (g = ur(_, i) + (Re(_) || 0), (g || g === 0) && (i = g))), !d || _ !== i || on)
    return !isNaN(_ * i) && i !== "" ? (g = new Le(this._pt, e, t, +_ || 0, i - (_ || 0), typeof h == "boolean" ? Ia : _o, 0, l), u && (g.fp = u), o && g.modifier(o, this, e), this._pt = g) : (!h && !(t in e) && Tn(t, i), Ma.call(this, e, t, _, i, l, c || We.stringFilter, u));
}, Na = function(e, t, r, i, n) {
  if (pe(e) && (e = Br(e, n, t, r, i)), !gt(e) || e.style && e.nodeType || Me(e) || Ns(e))
    return Se(e) ? Br(e, n, t, r, i) : e;
  var s = {}, o;
  for (o in e)
    s[o] = Br(e[o], n, t, r, i);
  return s;
}, uo = function(e, t, r, i, n, s) {
  var o, c, u, d;
  if (ze[e] && (o = new ze[e]()).init(n, o.rawVars ? t[e] : Na(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = c = new Le(r._pt, n, e, 0, 1, o.render, o, 0, o.priority), r !== cr))
    for (u = r._ptLookup[r._targets.indexOf(n)], d = o._props.length; d--; )
      u[o._props[d]] = c;
  return o;
}, Mt, on, Dn = function a(e, t, r) {
  var i = e.vars, n = i.ease, s = i.startAt, o = i.immediateRender, c = i.lazy, u = i.onUpdate, d = i.runBackwards, h = i.yoyoEase, _ = i.keyframes, l = i.autoRevert, g = e._dur, f = e._startAt, m = e._targets, b = e.parent, v = b && b.data === "nested" ? b.vars.targets : m, S = e._overwrite === "auto" && !yn, E = e.timeline, x, D, T, k, R, C, O, z, $, H, U, G, L;
  if (E && (!_ || !n) && (n = "none"), e._ease = Zt(n, gr.ease), e._yEase = h ? oo(Zt(h === !0 ? n : h, gr.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !E && !!i.runBackwards, !E || _ && !i.stagger) {
    if (z = m[0] ? Kt(m[0]).harness : 0, G = z && i[z.prop], x = gi(i, kn), f && (f._zTime < 0 && f.progress(1), t < 0 && d && o && !l ? f.render(-1, !0) : f.revert(d && g ? li : oa), f._lazy = 0), s) {
      if (Lt(e._startAt = we.set(m, He({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !f && $e(c),
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
    } else if (d && g && !f) {
      if (t && (o = !1), T = He({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !f && $e(c),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, x), G && (T[z.prop] = G), Lt(e._startAt = we.set(m, T)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ce ? e._startAt.revert(li) : e._startAt.render(-1, !0)), e._zTime = t, !o)
        a(e._startAt, ce, ce);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, c = g && $e(c) || c && !g, D = 0; D < m.length; D++) {
      if (R = m[D], O = R._gsap || En(m)[D]._gsap, e._ptLookup[D] = H = {}, Ji[O.id] && $t.length && _i(), U = v === m ? D : v.indexOf(R), z && ($ = new z()).init(R, G || x, e, U, v) !== !1 && (e._pt = k = new Le(e._pt, R, $.name, 0, 1, $.render, $, 0, $.priority), $._props.forEach(function(I) {
        H[I] = k;
      }), $.priority && (C = 1)), !z || G)
        for (T in x)
          ze[T] && ($ = uo(T, x, e, U, R, v)) ? $.priority && (C = 1) : H[T] = k = Cn.call(e, R, T, "get", x[T], U, v, 0, i.stringFilter);
      e._op && e._op[D] && e.kill(R, e._op[D]), S && e._pt && (Mt = e, fe.killTweensOf(R, H, e.globalTime(t)), L = !e.parent, Mt = 0), e._pt && c && (Ji[O.id] = 1);
    }
    C && mo(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !L, _ && t <= 0 && E.render(tt, !0, !0);
}, ja = function(e, t, r, i, n, s, o, c) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], d, h, _, l;
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
    h = u[l], d = h._pt || h, d.s = (i || i === 0) && !n ? i : d.s + (i || 0) + s * d.c, d.c = r - d.s, h.e && (h.e = xe(r) + Re(h.e)), h.b && (h.b = d.s + Re(h.b));
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
}, $a = function(e, t, r, i) {
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
Ae(fo + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return ho[a] = 1;
});
var we = /* @__PURE__ */ function(a) {
  Rs(e, a);
  function e(r, i, n, s) {
    var o;
    typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : Ir(i)) || this;
    var c = o.vars, u = c.duration, d = c.delay, h = c.immediateRender, _ = c.stagger, l = c.overwrite, g = c.keyframes, f = c.defaults, m = c.scrollTrigger, b = c.yoyoEase, v = i.parent || fe, S = (Me(r) || Ns(r) ? kt(r[0]) : "length" in i) ? [r] : rt(r), E, x, D, T, k, R, C, O;
    if (o._targets = S.length ? En(S) : Wr("GSAP target " + r + " not found. https://gsap.com", !We.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = l, g || _ || si(u) || si(d)) {
      if (i = o.vars, E = o.timeline = new je({
        data: "nested",
        defaults: f || {},
        targets: v && v.data === "nested" ? v.vars.targets : S
      }), E.kill(), E.parent = E._dp = yt(o), E._start = 0, _ || si(u) || si(d)) {
        if (T = S.length, C = _ && Ks(_), gt(_))
          for (k in _)
            ~fo.indexOf(k) && (O || (O = {}), O[k] = _[k]);
        for (x = 0; x < T; x++)
          D = gi(i, ho), D.stagger = 0, b && (D.yoyoEase = b), O && mr(D, O), R = S[x], D.duration = +Br(u, yt(o), x, R, S), D.delay = (+Br(d, yt(o), x, R, S) || 0) - o._delay, !_ && T === 1 && D.delay && (o._delay = d = D.delay, o._start += d, D.delay = 0), E.to(R, D, C ? C(x, R, S) : 0), E._ease = J.none;
        E.duration() ? u = d = 0 : o.timeline = 0;
      } else if (g) {
        Ir(He(E.vars.defaults, {
          ease: "none"
        })), E._ease = Zt(g.ease || i.ease || "none");
        var z = 0, $, H, U;
        if (Me(g))
          g.forEach(function(G) {
            return E.to(S, G, ">");
          }), E.duration();
        else {
          D = {};
          for (k in g)
            k === "ease" || k === "easeEach" || $a(k, g[k], D, g.easeEach);
          for (k in D)
            for ($ = D[k].sort(function(G, L) {
              return G.t - L.t;
            }), z = 0, x = 0; x < $.length; x++)
              H = $[x], U = {
                ease: H.e,
                duration: (H.t - (x ? $[x - 1].t : 0)) / 100 * u
              }, U[k] = H.v, E.to(S, U, z), z += U.duration;
          E.duration() < u && E.to({}, {
            duration: u - E.duration()
          });
        }
      }
      u || o.duration(u = E.duration());
    } else
      o.timeline = 0;
    return l === !0 && !yn && (Mt = yt(o), fe.killTweensOf(S), Mt = 0), pt(v, yt(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (h || !u && !g && o._start === Te(v._time) && $e(h) && fa(yt(o)) && v.data !== "nested") && (o._tTime = -ce, o.render(Math.max(0, -d) || 0)), m && Ws(yt(o), m), o;
  }
  var t = e.prototype;
  return t.render = function(i, n, s) {
    var o = this._time, c = this._tDur, u = this._dur, d = i < 0, h = i > c - ce && !d ? c : i < ce ? 0 : i, _, l, g, f, m, b, v, S, E;
    if (!u)
      pa(this, i, n, s);
    else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d || this._lazy) {
      if (_ = h, S = this.timeline, this._repeat) {
        if (f = u + this._rDelay, this._repeat < -1 && d)
          return this.totalTime(f * 100 + i, n, s);
        if (_ = Te(h % f), h === c ? (g = this._repeat, _ = u) : (m = Te(h / f), g = ~~m, g && g === m ? (_ = u, g--) : _ > u && (_ = u)), b = this._yoyo && g & 1, b && (E = this._yEase, _ = u - _), m = xr(this._tTime, f), _ === o && !s && this._initted && g === m)
          return this._tTime = h, this;
        g !== m && (S && this._yEase && ao(S, b), this.vars.repeatRefresh && !b && !this._lock && _ !== f && this._initted && (this._lock = s = 1, this.render(Te(f * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Us(this, d ? i : _, s, n, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && g !== m))
          return this;
        if (u !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = h, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (E || this._ease)(_ / u), this._from && (this.ratio = v = 1 - v), !o && h && !n && !m && (Ve(this, "onStart"), this._tTime !== h))
        return this;
      for (l = this._pt; l; )
        l.r(v, l.d), l = l._next;
      S && S.render(i < 0 ? i : S._dur * S._ease(_ / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (d && en(this, i, n, s), Ve(this, "onUpdate")), this._repeat && g !== m && this.vars.onRepeat && !n && this.parent && Ve(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (d && !this._onUpdate && en(this, i, !0, !0), (i || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Lt(this, 1), !n && !(d && !o) && (h || o || b) && (Ve(this, h === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < c && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, s, o, c) {
    Hr || Ye.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), d;
    return this._initted || Dn(this, u), d = this._ease(u / this._dur), ja(this, i, n, s, o, d, u, c) ? this.resetTo(i, n, s, o, 1) : (Si(this, 0), this.parent || Gs(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Nr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ce), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Mt && Mt.vars.overwrite !== !0)._first || Nr(this), this.parent && s !== this.timeline.totalDuration() && yr(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, c = i ? rt(i) : o, u = this._ptLookup, d = this._pt, h, _, l, g, f, m, b;
    if ((!n || n === "all") && ua(o, c))
      return n === "all" && (this._pt = 0), Nr(this);
    for (h = this._op = this._op || [], n !== "all" && (Se(n) && (f = {}, Ae(n, function(v) {
      return f[v] = 1;
    }), n = f), n = Oa(o, n)), b = o.length; b--; )
      if (~c.indexOf(o[b])) {
        _ = u[b], n === "all" ? (h[b] = n, g = _, l = {}) : (l = h[b] = h[b] || {}, g = n);
        for (f in g)
          m = _ && _[f], m && ((!("kill" in m.d) || m.d.kill(f) === !0) && Ti(this, m, "_pt"), delete _[f]), l !== "all" && (l[f] = 1);
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
Ae("staggerTo,staggerFrom,staggerFromTo", function(a) {
  we[a] = function() {
    var e = new je(), t = rn.call(arguments, 0);
    return t.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, t);
  };
});
var Rn = function(e, t, r) {
  return e[t] = r;
}, po = function(e, t, r) {
  return e[t](r);
}, Aa = function(e, t, r, i) {
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
Ae(Sn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
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
var Jt = [], ui = {}, za = [], is = 0, Ya = 0, Ii = function(e) {
  return (ui[e] || za).map(function(t) {
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
    this.selector = r && nn(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Ya++, t && this.add(t);
  }
  var e = a.prototype;
  return e.add = function(r, i, n) {
    pe(r) && (n = i, i = r, r = pe);
    var s = this, o = function() {
      var u = ue, d = s.selector, h;
      return u && u !== s && u.data.push(s), n && (s.selector = nn(n)), ue = s, h = i.apply(s, arguments), pe(h) && s._r.push(h), ue = u, s.selector = d, s.isReverted = !1, h;
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
      }).sort(function(d, h) {
        return h.g - d.g || -1 / 0;
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
    return d && i(s, function(h) {
      return s.add(null, h);
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
    var n = Kt(e || {}).get, s = r ? Ys : zs;
    return r === "native" && (r = ""), e && (t ? s((ze[t] && ze[t].get || n)(e, t, r, i)) : function(o, c, u) {
      return s((ze[o] && ze[o].get || n)(e, o, c, u));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = rt(e), e.length > 1) {
      var i = e.map(function(d) {
        return Fe.quickSetter(d, t, r);
      }), n = i.length;
      return function(d) {
        for (var h = n; h--; )
          i[h](d);
      };
    }
    e = e[0] || {};
    var s = ze[t], o = Kt(e), c = o.harness && (o.harness.aliases || {})[t] || t, u = s ? function(d) {
      var h = new s();
      cr._pt = 0, h.init(e, r ? d + r : d, cr, 0, [e]), h.render(1, h), cr._pt && Nn(1, cr);
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
      return o && !ze[o] && !qe[o] && Wr(t + " effect requires " + o + " plugin.");
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
    for (r.smoothChildTiming = $e(e.smoothChildTiming), fe.remove(r), r._dp = 0, r._time = r._tTime = fe._time, i = fe._first; i; )
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
  ticker: Ye,
  updateRoot: je.updateRoot,
  plugins: ze,
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
Ae("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return xi[a] = we[a];
});
Ye.add(je.updateRoot);
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
        if (Se(n) && (c = {}, Ae(n, function(d) {
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
As = 1;
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
}, St = {}, Ut = 180 / Math.PI, fr = Math.PI / 180, sr = Math.atan2, os = 1e8, $n = /([A-Z])/g, qa = /(left|right|width|margin|padding|x)/i, Ha = /[\s,\(]\S/, _t = {
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
    e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace($n, "-$1").toLowerCase());
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
  return i[t] || i.getPropertyValue(t.replace($n, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && a(e, br(t) || t, 1) || "";
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
    t in St && t !== Ie && (t = he), r.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(i === "--" ? t : t.replace($n, "-$1").toLowerCase())) : r.removeAttribute(t);
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
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", o = Ht.style, c = qa.test(t), u = e.tagName.toLowerCase() === "svg", d = (u ? "client" : "offset") + (c ? "Width" : "Height"), h = 100, _ = i === "px", l = i === "%", g, f, m, b;
  if (i === s || !n || us[i] || us[s])
    return n;
  if (s !== "px" && !_ && (n = a(e, t, r, "px")), b = e.getCTM && So(e), (l || s === "%") && (St[t] || ~t.indexOf("adius")))
    return g = b ? e.getBBox()[c ? "width" : "height"] : e[d], xe(l ? n / g * h : n / 100 * g);
  if (o[c ? "width" : "height"] = h + (_ ? s : i), f = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, b && (f = (e.ownerSVGElement || {}).parentNode), (!f || f === Nt || !f.appendChild) && (f = Nt.body), m = f._gsap, m && l && m.width && c && m.time === Ye.time && !m.uncache)
    return xe(n / m.width * h);
  if (l && (t === "height" || t === "width")) {
    var v = e.style[t];
    e.style[t] = h + i, g = e[d], v ? e.style[t] = v : rr(e, t);
  } else
    (l || s === "%") && !al[it(f, "display")] && (o.position = it(e, "position")), f === e && (o.position = "static"), f.appendChild(Ht), g = Ht[d], f.removeChild(Ht), o.position = "absolute";
  return c && l && (m = Kt(f), m.time = Ye.time, m.width = f[d]), xe(_ ? g * n / h : g && n ? h / g * n : 0);
}, vt = function(e, t, r, i) {
  var n;
  return jn || un(), t in _t && t !== "transform" && (t = _t[t], ~t.indexOf(",") && (t = t.split(",")[0])), St[t] && t !== "transform" ? (n = Zr(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : vi(it(e, Ie)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = yi[t] && yi[t](e, t, r) || it(e, t) || Bs(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? It(e, t, n, r) + r : n;
}, ll = function(e, t, r, i) {
  if (!r || r === "none") {
    var n = br(t, e, 1), s = n && it(e, n, 1);
    s && s !== r ? (t = n, r = s) : t === "borderColor" && (r = it(e, "borderTopColor"));
  }
  var o = new Le(this._pt, e.style, t, 0, 1, go), c = 0, u = 0, d, h, _, l, g, f, m, b, v, S, E, x;
  if (o.b = r, o.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = it(e, i.substring(4, i.indexOf(")")))), i === "auto" && (f = e.style[t], e.style[t] = i, i = it(e, t) || i, f ? e.style[t] = f : rr(e, t)), d = [r, i], so(d), r = d[0], i = d[1], _ = r.match(lr) || [], x = i.match(lr) || [], x.length) {
    for (; h = lr.exec(i); )
      m = h[0], v = i.substring(c, h.index), g ? g = (g + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (g = 1), m !== (f = _[u++] || "") && (l = parseFloat(f) || 0, E = f.substr((l + "").length), m.charAt(1) === "=" && (m = ur(l, m) + E), b = parseFloat(m), S = m.substr((b + "").length), c = lr.lastIndex - S.length, S || (S = S || We.units[t] || E, c === i.length && (i += S, o.e += S)), E !== S && (l = It(e, t, f, S) || 0), o._pt = {
        _next: o._pt,
        p: v || u === 1 ? v : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: l,
        c: b - l,
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
}, An = function(e, t) {
  var r = e._gsap || Kt(e), i = e.style, n = fs(e), s, o, c, u;
  return r.svg && e.getAttribute("transform") ? (c = e.transform.baseVal.consolidate().matrix, n = [c.a, c.b, c.c, c.d, c.e, c.f], n.join(",") === "1,0,0,1,0,0" ? Qr : n) : (n === Qr && !e.offsetParent && e !== dr && !r.svg && (c = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, o = e.nextElementSibling, dr.appendChild(e)), n = fs(e), c ? i.display = c : rr(e, "display"), u && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : dr.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, dn = function(e, t, r, i, n, s) {
  var o = e._gsap, c = n || An(e, !0), u = o.xOrigin || 0, d = o.yOrigin || 0, h = o.xOffset || 0, _ = o.yOffset || 0, l = c[0], g = c[1], f = c[2], m = c[3], b = c[4], v = c[5], S = t.split(" "), E = parseFloat(S[0]) || 0, x = parseFloat(S[1]) || 0, D, T, k, R;
  r ? c !== Qr && (T = l * m - g * f) && (k = E * (m / T) + x * (-f / T) + (f * v - m * b) / T, R = E * (-g / T) + x * (l / T) - (l * v - g * b) / T, E = k, x = R) : (D = ko(e), E = D.x + (~S[0].indexOf("%") ? E / 100 * D.width : E), x = D.y + (~(S[1] || S[0]).indexOf("%") ? x / 100 * D.height : x)), i || i !== !1 && o.smooth ? (b = E - u, v = x - d, o.xOffset = h + (b * l + v * f) - b, o.yOffset = _ + (b * g + v * m) - v) : o.xOffset = o.yOffset = 0, o.xOrigin = E, o.yOrigin = x, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!r, e.style[Ie] = "0px 0px", s && (jt(s, o, "xOrigin", u, E), jt(s, o, "yOrigin", d, x), jt(s, o, "xOffset", h, o.xOffset), jt(s, o, "yOffset", _, o.yOffset)), e.setAttribute("data-svg-origin", E + " " + x);
}, Zr = function(e, t) {
  var r = e._gsap || new co(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var i = e.style, n = r.scaleX < 0, s = "px", o = "deg", c = getComputedStyle(e), u = it(e, Ie) || "0", d, h, _, l, g, f, m, b, v, S, E, x, D, T, k, R, C, O, z, $, H, U, G, L, I, W, q, w, N, V, B, de;
  return d = h = _ = f = m = b = v = S = E = 0, l = g = 1, r.svg = !!(e.getCTM && So(e)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (i[he] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[he] !== "none" ? c[he] : "")), i.scale = i.rotate = i.translate = "none"), T = An(e, r.svg), r.svg && (r.uncache ? (I = e.getBBox(), u = r.xOrigin - I.x + "px " + (r.yOrigin - I.y) + "px", L = "") : L = !t && e.getAttribute("data-svg-origin"), dn(e, L || u, !!L || r.originIsAbsolute, r.smooth !== !1, T)), x = r.xOrigin || 0, D = r.yOrigin || 0, T !== Qr && (O = T[0], z = T[1], $ = T[2], H = T[3], d = U = T[4], h = G = T[5], T.length === 6 ? (l = Math.sqrt(O * O + z * z), g = Math.sqrt(H * H + $ * $), f = O || z ? sr(z, O) * Ut : 0, v = $ || H ? sr($, H) * Ut + f : 0, v && (g *= Math.abs(Math.cos(v * fr))), r.svg && (d -= x - (x * O + D * $), h -= D - (x * z + D * H))) : (de = T[6], V = T[7], q = T[8], w = T[9], N = T[10], B = T[11], d = T[12], h = T[13], _ = T[14], k = sr(de, N), m = k * Ut, k && (R = Math.cos(-k), C = Math.sin(-k), L = U * R + q * C, I = G * R + w * C, W = de * R + N * C, q = U * -C + q * R, w = G * -C + w * R, N = de * -C + N * R, B = V * -C + B * R, U = L, G = I, de = W), k = sr(-$, N), b = k * Ut, k && (R = Math.cos(-k), C = Math.sin(-k), L = O * R - q * C, I = z * R - w * C, W = $ * R - N * C, B = H * C + B * R, O = L, z = I, $ = W), k = sr(z, O), f = k * Ut, k && (R = Math.cos(k), C = Math.sin(k), L = O * R + z * C, I = U * R + G * C, z = z * R - O * C, G = G * R - U * C, O = L, U = I), m && Math.abs(m) + Math.abs(f) > 359.9 && (m = f = 0, b = 180 - b), l = xe(Math.sqrt(O * O + z * z + $ * $)), g = xe(Math.sqrt(G * G + de * de)), k = sr(U, G), v = Math.abs(k) > 2e-4 ? k * Ut : 0, E = B ? 1 / (B < 0 ? -B : B) : 0), r.svg && (L = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Po(it(e, he)), L && e.setAttribute("transform", L))), Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (l *= -1, v += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (g *= -1, v += v <= 0 ? 180 : -180)), t = t || r.uncache, r.x = d - ((r.xPercent = d && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s, r.y = h - ((r.yPercent = h && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s, r.z = _ + s, r.scaleX = xe(l), r.scaleY = xe(g), r.rotation = xe(f) + o, r.rotationX = xe(m) + o, r.rotationY = xe(b) + o, r.skewX = v + o, r.skewY = S + o, r.transformPerspective = E + s, (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (i[Ie] = vi(u)), r.xOffset = r.yOffset = 0, r.force3D = We.force3D, r.renderTransform = r.svg ? fl : To ? Co : dl, r.uncache = 0, r;
}, vi = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Bi = function(e, t, r) {
  var i = Re(t);
  return xe(parseFloat(t) + parseFloat(It(e, "x", r + "px", i))) + i;
}, dl = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Co(e, t);
}, Yt = "0deg", Rr = "0px", Gt = ") ", Co = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, c = r.z, u = r.rotation, d = r.rotationY, h = r.rotationX, _ = r.skewX, l = r.skewY, g = r.scaleX, f = r.scaleY, m = r.transformPerspective, b = r.force3D, v = r.target, S = r.zOrigin, E = "", x = b === "auto" && e && e !== 1 || b === !0;
  if (S && (h !== Yt || d !== Yt)) {
    var D = parseFloat(d) * fr, T = Math.sin(D), k = Math.cos(D), R;
    D = parseFloat(h) * fr, R = Math.cos(D), s = Bi(v, s, T * R * -S), o = Bi(v, o, -Math.sin(D) * -S), c = Bi(v, c, k * R * -S + S);
  }
  m !== Rr && (E += "perspective(" + m + Gt), (i || n) && (E += "translate(" + i + "%, " + n + "%) "), (x || s !== Rr || o !== Rr || c !== Rr) && (E += c !== Rr || x ? "translate3d(" + s + ", " + o + ", " + c + ") " : "translate(" + s + ", " + o + Gt), u !== Yt && (E += "rotate(" + u + Gt), d !== Yt && (E += "rotateY(" + d + Gt), h !== Yt && (E += "rotateX(" + h + Gt), (_ !== Yt || l !== Yt) && (E += "skew(" + _ + ", " + l + Gt), (g !== 1 || f !== 1) && (E += "scale(" + g + ", " + f + Gt), v.style[he] = E || "translate(0, 0)";
}, fl = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, c = r.rotation, u = r.skewX, d = r.skewY, h = r.scaleX, _ = r.scaleY, l = r.target, g = r.xOrigin, f = r.yOrigin, m = r.xOffset, b = r.yOffset, v = r.forceCSS, S = parseFloat(s), E = parseFloat(o), x, D, T, k, R;
  c = parseFloat(c), u = parseFloat(u), d = parseFloat(d), d && (d = parseFloat(d), u += d, c += d), c || u ? (c *= fr, u *= fr, x = Math.cos(c) * h, D = Math.sin(c) * h, T = Math.sin(c - u) * -_, k = Math.cos(c - u) * _, u && (d *= fr, R = Math.tan(u - d), R = Math.sqrt(1 + R * R), T *= R, k *= R, d && (R = Math.tan(d), R = Math.sqrt(1 + R * R), x *= R, D *= R)), x = xe(x), D = xe(D), T = xe(T), k = xe(k)) : (x = h, k = _, D = T = 0), (S && !~(s + "").indexOf("px") || E && !~(o + "").indexOf("px")) && (S = It(l, "x", s, "px"), E = It(l, "y", o, "px")), (g || f || m || b) && (S = xe(S + g - (g * x + f * T) + m), E = xe(E + f - (g * D + f * k) + b)), (i || n) && (R = l.getBBox(), S = xe(S + i / 100 * R.width), E = xe(E + n / 100 * R.height)), R = "matrix(" + x + "," + D + "," + T + "," + k + "," + S + "," + E + ")", l.setAttribute("transform", R), v && (l.style[he] = R);
}, hl = function(e, t, r, i, n) {
  var s = 360, o = Se(n), c = parseFloat(n) * (o && ~n.indexOf("rad") ? Ut : 1), u = c - i, d = i + u + "deg", h, _;
  return o && (h = n.split("_")[1], h === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), h === "cw" && u < 0 ? u = (u + s * os) % s - ~~(u / s) * s : h === "ccw" && u > 0 && (u = (u - s * os) % s - ~~(u / s) * s)), e._pt = _ = new Le(e._pt, t, r, i, u, Ka), _.e = d, _.u = "deg", e._props.push(r), _;
}, hs = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, pl = function(e, t, r) {
  var i = hs({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, o, c, u, d, h, _, l, g;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), s[he] = t, o = Zr(r, 1), rr(r, he), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[he], s[he] = t, o = Zr(r, 1), s[he] = u);
  for (c in St)
    u = i[c], d = o[c], u !== d && n.indexOf(c) < 0 && (l = Re(u), g = Re(d), h = l !== g ? It(r, c, u, g) : parseFloat(u), _ = parseFloat(d), e._pt = new Le(e._pt, o, c, h, _ - h, ln), e._pt.u = g || 0, e._props.push(c));
  hs(o, i);
};
Ae("padding,margin,Width,Radius", function(a, e) {
  var t = "Top", r = "Right", i = "Bottom", n = "Left", s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(o) {
    return e < 2 ? a + o : "border" + o + a;
  });
  yi[e > 1 ? "border" + a : a] = function(o, c, u, d, h) {
    var _, l;
    if (arguments.length < 4)
      return _ = s.map(function(g) {
        return vt(o, g, u);
      }), l = _.join(" "), l.split(_[0]).length === 5 ? _[0] : l;
    _ = (d + "").split(" "), l = {}, s.forEach(function(g, f) {
      return l[g] = _[f] = _[f] || _[(f - 1) / 2 | 0];
    }), o.init(c, l, h);
  };
});
var Do = {
  name: "css",
  register: un,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, i, n) {
    var s = this._props, o = e.style, c = r.vars.startAt, u, d, h, _, l, g, f, m, b, v, S, E, x, D, T, k;
    jn || un(), this.styles = this.styles || wo(e), k = this.styles.props, this.tween = r;
    for (f in t)
      if (f !== "autoRound" && (d = t[f], !(ze[f] && uo(f, t, r, i, e, n)))) {
        if (l = typeof d, g = yi[f], l === "function" && (d = d.call(r, i, e, n), l = typeof d), l === "string" && ~d.indexOf("random(") && (d = qr(d)), g)
          g(this, e, f, d, r) && (T = 1);
        else if (f.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(f) + "").trim(), d += "", At.lastIndex = 0, At.test(u) || (m = Re(u), b = Re(d)), b ? m !== b && (u = It(e, f, u, b) + b) : m && (d += m), this.add(o, "setProperty", u, d, i, n, 0, 0, f), s.push(f), k.push(f, 0, o[f]);
        else if (l !== "undefined") {
          if (c && f in c ? (u = typeof c[f] == "function" ? c[f].call(r, i, e, n) : c[f], Se(u) && ~u.indexOf("random(") && (u = qr(u)), Re(u + "") || u === "auto" || (u += We.units[f] || Re(vt(e, f)) || ""), (u + "").charAt(1) === "=" && (u = vt(e, f))) : u = vt(e, f), _ = parseFloat(u), v = l === "string" && d.charAt(1) === "=" && d.substr(0, 2), v && (d = d.substr(2)), h = parseFloat(d), f in _t && (f === "autoAlpha" && (_ === 1 && vt(e, "visibility") === "hidden" && h && (_ = 0), k.push("visibility", 0, o.visibility), jt(this, o, "visibility", _ ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), f !== "scale" && f !== "transform" && (f = _t[f], ~f.indexOf(",") && (f = f.split(",")[0]))), S = f in St, S) {
            if (this.styles.save(f), l === "string" && d.substring(0, 6) === "var(--" && (d = it(e, d.substring(4, d.indexOf(")"))), h = parseFloat(d)), E || (x = e._gsap, x.renderTransform && !t.parseTransform || Zr(e, t.parseTransform), D = t.smoothOrigin !== !1 && x.smooth, E = this._pt = new Le(this._pt, o, he, 0, 1, x.renderTransform, x, 0, -1), E.dep = 1), f === "scale")
              this._pt = new Le(this._pt, x, "scaleY", x.scaleY, (v ? ur(x.scaleY, v + h) : h) - x.scaleY || 0, ln), this._pt.u = 0, s.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              k.push(Ie, 0, o[Ie]), d = cl(d), x.svg ? dn(e, d, 0, D, 0, this) : (b = parseFloat(d.split(" ")[2]) || 0, b !== x.zOrigin && jt(this, x, "zOrigin", x.zOrigin, b), jt(this, o, f, vi(u), vi(d)));
              continue;
            } else if (f === "svgOrigin") {
              dn(e, d, 1, D, 0, this);
              continue;
            } else if (f in Eo) {
              hl(this, x, f, _, v ? ur(_, v + d) : d);
              continue;
            } else if (f === "smoothOrigin") {
              jt(this, x, "smooth", x.smooth, d);
              continue;
            } else if (f === "force3D") {
              x[f] = d;
              continue;
            } else if (f === "transform") {
              pl(this, d, e);
              continue;
            }
          } else f in o || (f = br(f) || f);
          if (S || (h || h === 0) && (_ || _ === 0) && !Ha.test(d) && f in o)
            m = (u + "").substr((_ + "").length), h || (h = 0), b = Re(d) || (f in We.units ? We.units[f] : m), m !== b && (_ = It(e, f, u, b)), this._pt = new Le(this._pt, S ? x : o, f, _, (v ? ur(_, v + h) : h) - _, !S && (b === "px" || f === "zIndex") && t.autoRound !== !1 ? Za : ln), this._pt.u = b || 0, m !== b && b !== "%" && (this._pt.b = u, this._pt.r = Qa);
          else if (f in o)
            ll.call(this, e, f, u, v ? v + d : d);
          else if (f in e)
            this.add(e, f, u || e[f], v ? v + d : d, i, n);
          else if (f !== "parseTransform") {
            Tn(f, d);
            continue;
          }
          S || (f in o ? k.push(f, 0, o[f]) : typeof e[f] == "function" ? k.push(f, 2, e[f]()) : k.push(f, 1, u || e[f])), s.push(f);
        }
      }
    T && mo(this);
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
    _getMatrix: An
  }
};
Fe.utils.checkPrefix = br;
Fe.core.getStyleSaver = wo;
(function(a, e, t, r) {
  var i = Ae(a + "," + e + "," + t, function(n) {
    St[n] = 1;
  });
  Ae(e, function(n) {
    We.units[n] = "deg", Eo[n] = 1;
  }), _t[i[13]] = a + "," + e, Ae(r, function(n) {
    var s = n.split(":");
    _t[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
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
  var r = In(e), i = e === r, n = r ? No : jo, s = e.parentNode, o = s && !r && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s, c, u, d, h, _, l;
  if (e === er)
    return e;
  if (n.length || n.push(Xi(e, 1), Xi(e, 2), Xi(e, 3)), c = r ? di : Or, r)
    i ? (d = vl(e), h = -d.e / d.a, _ = -d.f / d.d, u = bi) : e.getBBox ? (d = e.getBBox(), u = e.transform ? e.transform.baseVal : {}, u = u.numberOfItems ? u.numberOfItems > 1 ? yl(u) : u.getItem(0).matrix : bi, h = u.a * d.x + u.c * d.y, _ = u.b * d.x + u.d * d.y) : (u = new ir(), h = _ = 0), (i ? r : s).appendChild(c), c.setAttribute("transform", "matrix(" + u.a + "," + u.b + "," + u.c + "," + u.d + "," + (u.e + h) + "," + (u.f + _) + ")");
  else {
    if (h = _ = 0, Ro)
      for (u = e.offsetParent, d = e; d && (d = d.parentNode) && d !== u && d.parentNode; )
        (er.getComputedStyle(d)[ct] + "").length > 4 && (h = d.offsetLeft, _ = d.offsetTop, d = 0);
    if (l = er.getComputedStyle(e), l.position !== "absolute" && l.position !== "fixed")
      for (u = e.offsetParent; s && s !== u; )
        h += s.scrollLeft || 0, _ += s.scrollTop || 0, s = s.parentNode;
    d = c.style, d.top = e.offsetTop - _ + "px", d.left = e.offsetLeft - h + "px", d[ct] = l[ct], d[fn] = l[fn], d.position = l.position === "fixed" ? "fixed" : "absolute", o.appendChild(c);
  }
  return c;
}, zi = function(e, t, r, i, n, s, o) {
  return e.a = t, e.b = r, e.c = i, e.d = n, e.e = s, e.f = o, e;
}, ir = /* @__PURE__ */ function() {
  function a(t, r, i, n, s, o) {
    t === void 0 && (t = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), o === void 0 && (o = 0), zi(this, t, r, i, n, s, o);
  }
  var e = a.prototype;
  return e.inverse = function() {
    var r = this.a, i = this.b, n = this.c, s = this.d, o = this.e, c = this.f, u = r * s - i * n || 1e-10;
    return zi(this, s / u, -i / u, -n / u, r / u, (n * c - s * o) / u, -(r * c - i * o) / u);
  }, e.multiply = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, c = this.e, u = this.f, d = r.a, h = r.c, _ = r.b, l = r.d, g = r.e, f = r.f;
    return zi(this, d * i + _ * s, d * n + _ * o, h * i + l * s, h * n + l * o, c + g * i + f * s, u + g * n + f * o);
  }, e.clone = function() {
    return new a(this.a, this.b, this.c, this.d, this.e, this.f);
  }, e.equals = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, c = this.e, u = this.f;
    return i === r.a && n === r.b && s === r.c && o === r.d && c === r.e && u === r.f;
  }, e.apply = function(r, i) {
    i === void 0 && (i = {});
    var n = r.x, s = r.y, o = this.a, c = this.b, u = this.c, d = this.d, h = this.e, _ = this.f;
    return i.x = n * o + s * u + h || 0, i.y = n * c + s * d + _ || 0, i;
  }, a;
}();
function qt(a, e, t, r) {
  if (!a || !a.parentNode || (wt || Mo(a)).documentElement === a)
    return new ir();
  var i = _l(a), n = In(a), s = n ? No : jo, o = bl(a), c = s[0].getBoundingClientRect(), u = s[1].getBoundingClientRect(), d = s[2].getBoundingClientRect(), h = o.parentNode, _ = xl(a), l = new ir((u.left - c.left) / 100, (u.top - c.top) / 100, (d.left - c.left) / 100, (d.top - c.top) / 100, c.left + (_ ? 0 : ml()), c.top + (_ ? 0 : gl()));
  if (h.removeChild(o), i)
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
var Q, le, Ge, ut, Tt, Yi, bt, hn, $r, Ot, Oo, pn, Jr, Fn, Ar, at, Lr, fi, $o, _n, wi = 0, Ao = function() {
  return typeof window < "u";
}, Lo = function() {
  return Q || Ao() && (Q = window.gsap) && Q.registerPlugin && Q;
}, Rt = function(e) {
  return typeof e == "function";
}, zr = function(e) {
  return typeof e == "object";
}, lt = function(e) {
  return typeof e > "u";
}, hi = function() {
  return !1;
}, Yr = "transform", gn = "transformOrigin", Ct = function(e) {
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
  i && (lt(i[t]) && (t = $r(t, e) || t), r == null ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = r);
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
  var r = e.getBBox && e.ownerSVGElement, i = e.ownerDocument || Ge, n, s, o, c, u, d, h, _, l, g, f, m, b;
  if (e === le)
    o = pr(i), n = _r(i), s = n + (i.documentElement.clientWidth || e.innerWidth || i.body.clientWidth || 0), c = o + ((e.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : e.innerHeight || i.body.clientHeight || 0);
  else {
    if (t === le || lt(t))
      return e.getBoundingClientRect();
    n = o = 0, r ? (g = e.getBBox(), f = g.width, m = g.height) : (e.viewBox && (g = e.viewBox.baseVal) && (n = g.x || 0, o = g.y || 0, f = g.width, m = g.height), f || (b = ei(e), g = b.boxSizing === "border-box", f = (parseFloat(b.width) || e.clientWidth || 0) + (g ? 0 : parseFloat(b.borderLeftWidth) + parseFloat(b.borderRightWidth)), m = (parseFloat(b.height) || e.clientHeight || 0) + (g ? 0 : parseFloat(b.borderTopWidth) + parseFloat(b.borderBottomWidth)))), s = f, c = m;
  }
  return e === t ? {
    left: n,
    top: o,
    width: s - n,
    height: c - o
  } : (u = qt(t, !0).multiply(qt(e)), d = u.apply({
    x: n,
    y: o
  }), h = u.apply({
    x: s,
    y: o
  }), _ = u.apply({
    x: s,
    y: c
  }), l = u.apply({
    x: n,
    y: c
  }), n = Math.min(d.x, h.x, _.x, l.x), o = Math.min(d.y, h.y, _.y, l.y), {
    left: n,
    top: o,
    width: Math.max(d.x, h.x, _.x, l.x) - n,
    height: Math.max(d.y, h.y, _.y, l.y) - o
  });
}, Wi = function(e, t, r, i, n, s) {
  var o = {}, c, u, d;
  if (t)
    if (n !== 1 && t instanceof Array) {
      if (o.end = c = [], d = t.length, zr(t[0]))
        for (u = 0; u < d; u++)
          c[u] = Io(t[u], n);
      else
        for (u = 0; u < d; u++)
          c[u] = t[u] * n;
      r += 1.1, i -= 1.1;
    } else Rt(t) ? o.end = function(h) {
      var _ = t.call(e, h), l, g;
      if (n !== 1)
        if (zr(_)) {
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
  var r = document.createElement("div"), i = r.style, n = e.firstChild, s = 0, o = 0, c = e.scrollTop, u = e.scrollLeft, d = e.scrollWidth, h = e.scrollHeight, _ = 0, l = 0, g = 0, f, m, b, v, S, E;
  Bo && t.force3D !== !1 ? (S = "translate3d(", E = "px,0px)") : Yr && (S = "translate(", E = "px)"), this.scrollTop = function(x, D) {
    if (!arguments.length)
      return -this.top();
    this.top(-x, D);
  }, this.scrollLeft = function(x, D) {
    if (!arguments.length)
      return -this.left();
    this.left(-x, D);
  }, this.left = function(x, D) {
    if (!arguments.length)
      return -(e.scrollLeft + o);
    var T = e.scrollLeft - u, k = o;
    if ((T > 2 || T < -2) && !D) {
      u = e.scrollLeft, Q.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      }), this.left(-u), t.onKill && t.onKill();
      return;
    }
    x = -x, x < 0 ? (o = x - 0.5 | 0, x = 0) : x > l ? (o = x - l | 0, x = l) : o = 0, (o || k) && (this._skip || (i[Yr] = S + -o + "px," + -s + E), o + _ >= 0 && (i.paddingRight = o + _ + "px")), e.scrollLeft = x | 0, u = e.scrollLeft;
  }, this.top = function(x, D) {
    if (!arguments.length)
      return -(e.scrollTop + s);
    var T = e.scrollTop - c, k = s;
    if ((T > 2 || T < -2) && !D) {
      c = e.scrollTop, Q.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      }), this.top(-c), t.onKill && t.onKill();
      return;
    }
    x = -x, x < 0 ? (s = x - 0.5 | 0, x = 0) : x > g ? (s = x - g | 0, x = g) : s = 0, (s || k) && (this._skip || (i[Yr] = S + -o + "px," + -s + E)), e.scrollTop = x | 0, c = e.scrollTop;
  }, this.maxScrollTop = function() {
    return g;
  }, this.maxScrollLeft = function() {
    return l;
  }, this.disable = function() {
    for (n = r.firstChild; n; )
      v = n.nextSibling, e.appendChild(n), n = v;
    e === r.parentNode && e.removeChild(r);
  }, this.enable = function() {
    if (n = e.firstChild, n !== r) {
      for (; n; )
        v = n.nextSibling, r.appendChild(n), n = v;
      e.appendChild(r), this.calibrate();
    }
  }, this.calibrate = function(x) {
    var D = e.clientWidth === f, T, k, R;
    c = e.scrollTop, u = e.scrollLeft, !(D && e.clientHeight === m && r.offsetHeight === b && d === e.scrollWidth && h === e.scrollHeight && !x) && ((s || o) && (k = this.left(), R = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), T = ei(e), (!D || x) && (i.display = "block", i.width = "auto", i.paddingRight = "0px", _ = Math.max(0, e.scrollWidth - e.clientWidth), _ && (_ += parseFloat(T.paddingLeft) + (mn ? parseFloat(T.paddingRight) : 0))), i.display = "inline-block", i.position = "relative", i.overflow = "visible", i.verticalAlign = "top", i.boxSizing = "content-box", i.width = "100%", i.paddingRight = _ + "px", mn && (i.paddingBottom = T.paddingBottom), f = e.clientWidth, m = e.clientHeight, d = e.scrollWidth, h = e.scrollHeight, l = e.scrollWidth - f, g = e.scrollHeight - m, b = r.offsetHeight, i.display = "block", (k || R) && (this.left(k), this.top(R)));
  }, this.content = r, this.element = e, this._skip = !1, this.enable();
}, Ui = function(e) {
  if (Ao() && document.body) {
    var t = window && window.navigator;
    le = window, Ge = document, ut = Ge.documentElement, Tt = Ge.body, Yi = oi("div"), fi = !!window.PointerEvent, bt = oi("div"), bt.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Lr = bt.style.cursor === "grab" ? "grab" : "move", Ar = t && t.userAgent.toLowerCase().indexOf("android") !== -1, pn = "ontouchstart" in ut && "orientation" in le || t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0), mn = function() {
      var r = oi("div"), i = oi("div"), n = i.style, s = Tt, o;
      return n.display = "inline-block", n.position = "relative", r.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", r.appendChild(i), s.appendChild(r), o = i.offsetHeight + 18 > r.scrollHeight, s.removeChild(r), o;
    }(), Jr = function(r) {
      for (var i = r.split(","), n = ("onpointerdown" in Yi ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Yi ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : r).split(","), s = {}, o = 4; --o > -1; )
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
  Q ? (at = Q.plugins.inertia, $o = Q.core.context || function() {
  }, $r = Q.utils.checkPrefix, Yr = $r(Yr), gn = $r(gn), Ot = Q.utils.toArray, _n = Q.core.getStyleSaver, Bo = !!$r("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)");
}, $l = /* @__PURE__ */ function() {
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
    var n = (r.type || "x,y").toLowerCase(), s = ~n.indexOf("x") || ~n.indexOf("y"), o = n.indexOf("rotation") !== -1, c = o ? "rotation" : s ? "x" : "left", u = s ? "y" : "top", d = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"), h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"), _ = r.minimumMovement || 2, l = ps(i), g = Ot(r.trigger || r.handle || t), f = {}, m = 0, b = !1, v = r.autoScrollMarginTop || 40, S = r.autoScrollMarginRight || 40, E = r.autoScrollMarginBottom || 40, x = r.autoScrollMarginLeft || 40, D = r.clickableTest || Nl, T = 0, k = t._gsap || Q.core.getCache(t), R = jl(t), C = function(y, M) {
      return parseFloat(k.get(t, y, M));
    }, O = t.ownerDocument || Ge, z, $, H, U, G, L, I, W, q, w, N, V, B, de, _e, re, ie, Be, dt, Et, Bt, kr, Ee, ne, zn, Ke, nt, Pi, Ci, Yn, Xe, Gn, ri, Vn = function(y) {
      return Ze(y), y.stopImmediatePropagation && y.stopImmediatePropagation(), !1;
    }, ft = function Y(y) {
      if (l.autoScroll && l.isDragging && (b || ie)) {
        var M = t, P = l.autoScroll * 15, j, A, F, K, X, se, ee, oe;
        for (b = !1, xt.scrollTop = le.pageYOffset != null ? le.pageYOffset : O.documentElement.scrollTop != null ? O.documentElement.scrollTop : O.body.scrollTop, xt.scrollLeft = le.pageXOffset != null ? le.pageXOffset : O.documentElement.scrollLeft != null ? O.documentElement.scrollLeft : O.body.scrollLeft, K = l.pointerX - xt.scrollLeft, X = l.pointerY - xt.scrollTop; M && !A; )
          A = wr(M.parentNode), j = A ? xt : M.parentNode, F = A ? {
            bottom: Math.max(ut.clientHeight, le.innerHeight || 0),
            right: Math.max(ut.clientWidth, le.innerWidth || 0),
            left: 0,
            top: 0
          } : j.getBoundingClientRect(), se = ee = 0, h && (oe = j._gsMaxScrollY - j.scrollTop, oe < 0 ? ee = oe : X > F.bottom - E && oe ? (b = !0, ee = Math.min(oe, P * (1 - Math.max(0, F.bottom - X) / E) | 0)) : X < F.top + v && j.scrollTop && (b = !0, ee = -Math.min(j.scrollTop, P * (1 - Math.max(0, X - F.top) / v) | 0)), ee && (j.scrollTop += ee)), d && (oe = j._gsMaxScrollX - j.scrollLeft, oe < 0 ? se = oe : K > F.right - S && oe ? (b = !0, se = Math.min(oe, P * (1 - Math.max(0, F.right - K) / S) | 0)) : K < F.left + x && j.scrollLeft && (b = !0, se = -Math.min(j.scrollLeft, P * (1 - Math.max(0, K - F.left) / x) | 0)), se && (j.scrollLeft += se)), A && (se || ee) && (le.scrollTo(j.scrollLeft, j.scrollTop), Pr(l.pointerX + se, l.pointerY + ee)), M = j;
      }
      if (ie) {
        var ge = l.x, De = l.y;
        o ? (l.deltaX = ge - parseFloat(k.rotation), l.rotation = ge, k.rotation = ge + "deg", k.renderTransform(1, k)) : $ ? (h && (l.deltaY = De - $.top(), $.top(De)), d && (l.deltaX = ge - $.left(), $.left(ge))) : s ? (h && (l.deltaY = De - parseFloat(k.y), k.y = De + "px"), d && (l.deltaX = ge - parseFloat(k.x), k.x = ge + "px"), k.renderTransform(1, k)) : (h && (l.deltaY = De - parseFloat(t.style.top || 0), t.style.top = De + "px"), d && (l.deltaX = ge - parseFloat(t.style.left || 0), t.style.left = ge + "px")), W && !y && !Pi && (Pi = !0, me(l, "drag", "onDrag") === !1 && (d && (l.x -= l.deltaX), h && (l.y -= l.deltaY), Y(!0)), Pi = !1);
      }
      ie = !1;
    }, Xt = function(y, M) {
      var P = l.x, j = l.y, A, F;
      t._gsap || (k = Q.core.getCache(t)), k.uncache && Q.getProperty(t, "x"), s ? (l.x = parseFloat(k.x), l.y = parseFloat(k.y)) : o ? l.x = l.rotation = parseFloat(k.rotation) : $ ? (l.y = $.top(), l.x = $.left()) : (l.y = parseFloat(t.style.top || (F = ei(t)) && F.top) || 0, l.x = parseFloat(t.style.left || (F || {}).left) || 0), (dt || Et || Bt) && !M && (l.isDragging || l.isThrowing) && (Bt && (or.x = l.x, or.y = l.y, A = Bt(or), A.x !== l.x && (l.x = A.x, ie = !0), A.y !== l.y && (l.y = A.y, ie = !0)), dt && (A = dt(l.x), A !== l.x && (l.x = A, o && (l.rotation = A), ie = !0)), Et && (A = Et(l.y), A !== l.y && (l.y = A), ie = !0)), ie && ft(!0), y || (l.deltaX = l.x - P, l.deltaY = l.y - j, me(l, "throwupdate", "onThrowUpdate"));
    }, Di = function(y, M, P, j) {
      return M == null && (M = -Vt), P == null && (P = Vt), Rt(y) ? function(A) {
        var F = l.isPressed ? 1 - l.edgeResistance : 1;
        return y.call(l, (A > P ? P + (A - P) * F : A < M ? M + (A - M) * F : A) * j) * j;
      } : Mr(y) ? function(A) {
        for (var F = y.length, K = 0, X = Vt, se, ee; --F > -1; )
          se = y[F], ee = se - A, ee < 0 && (ee = -ee), ee < X && se >= M && se <= P && (K = F, X = ee);
        return y[K];
      } : isNaN(y) ? function(A) {
        return A;
      } : function() {
        return y * j;
      };
    }, Uo = function(y, M, P, j, A, F, K) {
      return F = F && F < Vt ? F * F : Vt, Rt(y) ? function(X) {
        var se = l.isPressed ? 1 - l.edgeResistance : 1, ee = X.x, oe = X.y, ge, De, mt;
        return X.x = ee = ee > P ? P + (ee - P) * se : ee < M ? M + (ee - M) * se : ee, X.y = oe = oe > A ? A + (oe - A) * se : oe < j ? j + (oe - j) * se : oe, ge = y.call(l, X), ge !== X && (X.x = ge.x, X.y = ge.y), K !== 1 && (X.x *= K, X.y *= K), F < Vt && (De = X.x - ee, mt = X.y - oe, De * De + mt * mt > F && (X.x = ee, X.y = oe)), X;
      } : Mr(y) ? function(X) {
        for (var se = y.length, ee = 0, oe = Vt, ge, De, mt, Qe; --se > -1; )
          mt = y[se], ge = mt.x - X.x, De = mt.y - X.y, Qe = ge * ge + De * De, Qe < oe && (ee = se, oe = Qe);
        return oe <= F ? y[ee] : X;
      } : function(X) {
        return X;
      };
    }, Ri = function() {
      var y, M, P, j;
      I = !1, $ ? ($.calibrate(), l.minX = N = -$.maxScrollLeft(), l.minY = B = -$.maxScrollTop(), l.maxX = w = l.maxY = V = 0, I = !0) : r.bounds && (y = ks(r.bounds, t.parentNode), o ? (l.minX = N = y.left, l.maxX = w = y.left + y.width, l.minY = B = l.maxY = V = 0) : !lt(r.bounds.maxX) || !lt(r.bounds.maxY) ? (y = r.bounds, l.minX = N = y.minX, l.minY = B = y.minY, l.maxX = w = y.maxX, l.maxY = V = y.maxY) : (M = ks(t, t.parentNode), l.minX = N = Math.round(C(c, "px") + y.left - M.left), l.minY = B = Math.round(C(u, "px") + y.top - M.top), l.maxX = w = Math.round(N + (y.width - M.width)), l.maxY = V = Math.round(B + (y.height - M.height))), N > w && (l.minX = w, l.maxX = w = N, N = l.minX), B > V && (l.minY = V, l.maxY = V = B, B = l.minY), o && (l.minRotation = N, l.maxRotation = w), I = !0), r.liveSnap && (P = r.liveSnap === !0 ? r.snap || {} : r.liveSnap, j = Mr(P) || Rt(P), o ? (dt = Di(j ? P : P.rotation, N, w, 1), Et = null) : P.points ? Bt = Uo(j ? P : P.points, N, w, B, V, P.radius, $ ? -1 : 1) : (d && (dt = Di(j ? P : P.x || P.left || P.scrollLeft, N, w, $ ? -1 : 1)), h && (Et = Di(j ? P : P.y || P.top || P.scrollTop, B, V, $ ? -1 : 1))));
    }, qo = function() {
      l.isThrowing = !1, me(l, "throwcomplete", "onThrowComplete");
    }, Ho = function() {
      l.isThrowing = !1;
    }, Mi = function(y, M) {
      var P, j, A, F;
      y && at ? (y === !0 && (P = r.snap || r.liveSnap || {}, j = Mr(P) || Rt(P), y = {
        resistance: (r.throwResistance || r.resistance || 1e3) / (o ? 10 : 1)
      }, o ? y.rotation = Wi(l, j ? P : P.rotation, w, N, 1, M) : (d && (y[c] = Wi(l, j ? P : P.points || P.x || P.left, w, N, $ ? -1 : 1, M || l.lockedAxis === "x")), h && (y[u] = Wi(l, j ? P : P.points || P.y || P.top, V, B, $ ? -1 : 1, M || l.lockedAxis === "y")), (P.points || Mr(P) && zr(P[0])) && (y.linkedProps = c + "," + u, y.radius = P.radius))), l.isThrowing = !0, F = isNaN(r.overshootTolerance) ? r.edgeResistance === 1 ? 0 : 1 - l.edgeResistance + 0.2 : r.overshootTolerance, y.duration || (y.duration = {
        max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
        min: isNaN(r.minDuration) ? F === 0 || zr(y) && y.resistance > 1e3 ? 0 : 0.5 : r.minDuration,
        overshoot: F
      }), l.tween = A = Q.to($ || t, {
        inertia: y,
        data: "_draggable",
        inherit: !1,
        onComplete: qo,
        onInterrupt: Ho,
        onUpdate: r.fastMode ? me : Xt,
        onUpdateParams: r.fastMode ? [l, "onthrowupdate", "onThrowUpdate"] : P && P.radius ? [!1, !0] : []
      }), r.fastMode || ($ && ($._skip = !0), A.render(1e9, !0, !0), Xt(!0, !0), l.endX = l.x, l.endY = l.y, o && (l.endRotation = l.x), A.play(0), Xt(!0, !0), $ && ($._skip = !1))) : I && l.applyBounds();
    }, Wn = function(y) {
      var M = ne, P;
      ne = qt(t.parentNode, !0), y && l.isPressed && !ne.equals(M || new ir()) && (P = M.inverse().apply({
        x: H,
        y: U
      }), ne.apply(P, P), H = P.x, U = P.y), ne.equals(Tl) && (ne = null);
    }, ii = function() {
      var y = 1 - l.edgeResistance, M = R ? _r(O) : 0, P = R ? pr(O) : 0, j, A, F;
      s && (k.x = C(c, "px") + "px", k.y = C(u, "px") + "px", k.renderTransform()), Wn(!1), Je.x = l.pointerX - M, Je.y = l.pointerY - P, ne && ne.apply(Je, Je), H = Je.x, U = Je.y, ie && (Pr(l.pointerX, l.pointerY), ft(!0)), Gn = qt(t), $ ? (Ri(), L = $.top(), G = $.left()) : (Sr() ? (Xt(!0, !0), Ri()) : l.applyBounds(), o ? (j = t.ownerSVGElement ? [k.xOrigin - t.getBBox().x, k.yOrigin - t.getBBox().y] : (ei(t)[gn] || "0 0").split(" "), re = l.rotationOrigin = qt(t).apply({
        x: parseFloat(j[0]) || 0,
        y: parseFloat(j[1]) || 0
      }), Xt(!0, !0), A = l.pointerX - re.x - M, F = re.y - l.pointerY + P, G = l.x, L = l.y = Math.atan2(F, A) * _s) : (L = C(u, "px"), G = C(c, "px"))), I && y && (G > w ? G = w + (G - w) / y : G < N && (G = N - (N - G) / y), o || (L > V ? L = V + (L - V) / y : L < B && (L = B - (B - L) / y))), l.startX = G = Ct(G), l.startY = L = Ct(L);
    }, Sr = function() {
      return l.tween && l.tween.isActive();
    }, Ko = function() {
      bt.parentNode && !Sr() && !l.isDragging && bt.parentNode.removeChild(bt);
    }, Er = function(y, M) {
      var P;
      if (!z || l.isPressed || !y || (y.type === "mousedown" || y.type === "pointerdown") && !M && Dt() - T < 30 && Jr[l.pointerEvent.type]) {
        Xe && y && z && Ze(y);
        return;
      }
      if (zn = Sr(), ri = !1, l.pointerEvent = y, Jr[y.type] ? (Ee = ~y.type.indexOf("touch") ? y.currentTarget || y.target : O, ke(Ee, "touchend", st), ke(Ee, "touchmove", zt), ke(Ee, "touchcancel", st), ke(O, "touchstart", vs)) : (Ee = null, ke(O, "mousemove", zt)), nt = null, (!fi || !Ee) && (ke(O, "mouseup", st), y && y.target && ke(y.target, "mouseup", st)), kr = D.call(l, y.target) && r.dragClickables === !1 && !M, kr) {
        ke(y.target, "change", st), me(l, "pressInit", "onPressInit"), me(l, "press", "onPress"), ai(g, !0), Xe = !1;
        return;
      }
      if (Ke = !Ee || d === h || l.vars.allowNativeTouchScrolling === !1 || l.vars.allowContextMenu && y && (y.ctrlKey || y.which > 2) ? !1 : d ? "y" : "x", Xe = !Ke && !l.allowEventDefault, Xe && (Ze(y), ke(le, "touchforcechange", Ze)), y.changedTouches ? (y = de = y.changedTouches[0], _e = y.identifier) : y.pointerId ? _e = y.pointerId : de = _e = null, wi++, Pl(ft), U = l.pointerY = y.pageY, H = l.pointerX = y.pageX, me(l, "pressInit", "onPressInit"), (Ke || l.autoScroll) && Gi(t.parentNode), t.parentNode && l.autoScroll && !$ && !o && t.parentNode._gsMaxScrollX && !bt.parentNode && !t.getBBox && (bt.style.width = t.parentNode.scrollWidth + "px", t.parentNode.appendChild(bt)), ii(), l.tween && l.tween.kill(), l.isThrowing = !1, Q.killTweensOf($ || t, f, !0), $ && Q.killTweensOf(t, {
        scrollTo: 1
      }, !0), l.tween = l.lockedAxis = null, (r.zIndexBoost || !o && !$ && r.zIndexBoost !== !1) && (t.style.zIndex = e.zIndex++), l.isPressed = !0, W = !!(r.onDrag || l._listeners.drag), q = !!(r.onMove || l._listeners.move), r.cursor !== !1 || r.activeCursor)
        for (P = g.length; --P > -1; )
          Q.set(g[P], {
            cursor: r.activeCursor || r.cursor || (Lr === "grab" ? "grabbing" : Lr)
          });
      me(l, "press", "onPress");
    }, zt = function(y) {
      var M = y, P, j, A, F, K, X;
      if (!z || Fn || !l.isPressed || !y) {
        Xe && y && z && Ze(y);
        return;
      }
      if (l.pointerEvent = y, P = y.changedTouches, P) {
        if (y = P[0], y !== de && y.identifier !== _e) {
          for (F = P.length; --F > -1 && (y = P[F]).identifier !== _e && y.target !== t; )
            ;
          if (F < 0)
            return;
        }
      } else if (y.pointerId && _e && y.pointerId !== _e)
        return;
      if (Ee && Ke && !nt && (Je.x = y.pageX - (R ? _r(O) : 0), Je.y = y.pageY - (R ? pr(O) : 0), ne && ne.apply(Je, Je), j = Je.x, A = Je.y, K = Math.abs(j - H), X = Math.abs(A - U), (K !== X && (K > _ || X > _) || Ar && Ke === nt) && (nt = K > X && d ? "x" : "y", Ke && nt !== Ke && ke(le, "touchforcechange", Ze), l.vars.lockAxisOnTouchScroll !== !1 && d && h && (l.lockedAxis = nt === "x" ? "y" : "x", Rt(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, M)), Ar && Ke === nt))) {
        st(M);
        return;
      }
      !l.allowEventDefault && (!Ke || nt && Ke !== nt) && M.cancelable !== !1 ? (Ze(M), Xe = !0) : Xe && (Xe = !1), l.autoScroll && (b = !0), Pr(y.pageX, y.pageY, q);
    }, Pr = function(y, M, P) {
      var j = 1 - l.dragResistance, A = 1 - l.edgeResistance, F = l.pointerX, K = l.pointerY, X = L, se = l.x, ee = l.y, oe = l.endX, ge = l.endY, De = l.endRotation, mt = ie, Qe, Pt, Pe, ve, Ni, ot;
      l.pointerX = y, l.pointerY = M, R && (y -= _r(O), M -= pr(O)), o ? (ve = Math.atan2(re.y - M, y - re.x) * _s, Ni = l.y - ve, Ni > 180 ? (L -= 360, l.y = ve) : Ni < -180 && (L += 360, l.y = ve), l.x !== G || Math.max(Math.abs(H - y), Math.abs(U - M)) > _ ? (l.y = ve, Pe = G + (L - ve) * j) : Pe = G) : (ne && (ot = y * ne.a + M * ne.c + ne.e, M = y * ne.b + M * ne.d + ne.f, y = ot), Pt = M - U, Qe = y - H, Pt < _ && Pt > -_ && (Pt = 0), Qe < _ && Qe > -_ && (Qe = 0), (l.lockAxis || l.lockedAxis) && (Qe || Pt) && (ot = l.lockedAxis, ot || (l.lockedAxis = ot = d && Math.abs(Qe) > Math.abs(Pt) ? "y" : h ? "x" : null, ot && Rt(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, l.pointerEvent)), ot === "y" ? Pt = 0 : ot === "x" && (Qe = 0)), Pe = Ct(G + Qe * j), ve = Ct(L + Pt * j)), (dt || Et || Bt) && (l.x !== Pe || l.y !== ve && !o) && (Bt && (or.x = Pe, or.y = ve, ot = Bt(or), Pe = Ct(ot.x), ve = Ct(ot.y)), dt && (Pe = Ct(dt(Pe))), Et && (ve = Ct(Et(ve)))), I && (Pe > w ? Pe = w + Math.round((Pe - w) * A) : Pe < N && (Pe = N + Math.round((Pe - N) * A)), o || (ve > V ? ve = Math.round(V + (ve - V) * A) : ve < B && (ve = Math.round(B + (ve - B) * A)))), (l.x !== Pe || l.y !== ve && !o) && (o ? (l.endRotation = l.x = l.endX = Pe, ie = !0) : (h && (l.y = l.endY = ve, ie = !0), d && (l.x = l.endX = Pe, ie = !0)), !P || me(l, "move", "onMove") !== !1 ? !l.isDragging && l.isPressed && (l.isDragging = ri = !0, me(l, "dragstart", "onDragStart")) : (l.pointerX = F, l.pointerY = K, L = X, l.x = se, l.y = ee, l.endX = oe, l.endY = ge, l.endRotation = De, ie = mt));
    }, st = function Y(y, M) {
      if (!z || !l.isPressed || y && _e != null && !M && (y.pointerId && y.pointerId !== _e && y.target !== t || y.changedTouches && !Dl(y.changedTouches, _e))) {
        Xe && y && z && Ze(y);
        return;
      }
      l.isPressed = !1;
      var P = y, j = l.isDragging, A = l.vars.allowContextMenu && y && (y.ctrlKey || y.which > 2), F = Q.delayedCall(1e-3, Ko), K, X, se, ee, oe;
      if (Ee ? (be(Ee, "touchend", Y), be(Ee, "touchmove", zt), be(Ee, "touchcancel", Y), be(O, "touchstart", vs)) : be(O, "mousemove", zt), be(le, "touchforcechange", Ze), (!fi || !Ee) && (be(O, "mouseup", Y), y && y.target && be(y.target, "mouseup", Y)), ie = !1, j && (m = gs = Dt(), l.isDragging = !1), ys(ft), kr && !A) {
        y && (be(y.target, "change", Y), l.pointerEvent = P), ai(g, !1), me(l, "release", "onRelease"), me(l, "click", "onClick"), kr = !1;
        return;
      }
      for (X = g.length; --X > -1; )
        Vi(g[X], "cursor", r.cursor || (r.cursor !== !1 ? Lr : null));
      if (wi--, y) {
        if (K = y.changedTouches, K && (y = K[0], y !== de && y.identifier !== _e)) {
          for (X = K.length; --X > -1 && (y = K[X]).identifier !== _e && y.target !== t; )
            ;
          if (X < 0 && !M)
            return;
        }
        l.pointerEvent = P, l.pointerX = y.pageX, l.pointerY = y.pageY;
      }
      return A && P ? (Ze(P), Xe = !0, me(l, "release", "onRelease")) : P && !j ? (Xe = !1, zn && (r.snap || r.bounds) && Mi(r.inertia || r.throwProps), me(l, "release", "onRelease"), (!Ar || P.type !== "touchmove") && P.type.indexOf("cancel") === -1 && (me(l, "click", "onClick"), Dt() - T < 300 && me(l, "doubleclick", "onDoubleClick"), ee = P.target || t, T = Dt(), oe = function() {
        T !== Ci && l.enabled() && !l.isPressed && !P.defaultPrevented && (ee.click ? ee.click() : O.createEvent && (se = O.createEvent("MouseEvents"), se.initMouseEvent("click", !0, !0, le, 1, l.pointerEvent.screenX, l.pointerEvent.screenY, l.pointerX, l.pointerY, !1, !1, !1, !1, 0, null), ee.dispatchEvent(se)));
      }, !Ar && !P.defaultPrevented && Q.delayedCall(0.05, oe))) : (Mi(r.inertia || r.throwProps), !l.allowEventDefault && P && (r.dragClickables !== !1 || !D.call(l, P.target)) && j && (!Ke || nt && Ke === nt) && P.cancelable !== !1 ? (Xe = !0, Ze(P)) : Xe = !1, me(l, "release", "onRelease")), Sr() && F.duration(l.tween.duration()), j && me(l, "dragend", "onDragEnd"), !0;
    }, ni = function(y) {
      if (y && l.isDragging && !$) {
        var M = y.target || t.parentNode, P = M.scrollLeft - M._gsScrollX, j = M.scrollTop - M._gsScrollY;
        (P || j) && (ne ? (H -= P * ne.a + j * ne.c, U -= j * ne.d + P * ne.b) : (H -= P, U -= j), M._gsScrollX += P, M._gsScrollY += j, Pr(l.pointerX, l.pointerY));
      }
    }, Un = function(y) {
      var M = Dt(), P = M - T < 100, j = M - m < 50, A = P && Ci === T, F = l.pointerEvent && l.pointerEvent.defaultPrevented, K = P && Yn === T, X = y.isTrusted || y.isTrusted == null && P && A;
      if ((A || j && l.vars.suppressClickOnDrag !== !1) && y.stopImmediatePropagation && y.stopImmediatePropagation(), P && !(l.pointerEvent && l.pointerEvent.defaultPrevented) && (!A || X && !K)) {
        X && A && (Yn = T), Ci = T;
        return;
      }
      (l.isPressed || j || P) && (!X || !y.detail || !P || F) && Ze(y), !P && !j && !ri && (y && y.target && (l.pointerEvent = y), me(l, "click", "onClick"));
    }, qn = function(y) {
      return ne ? {
        x: y.x * ne.a + y.y * ne.c + ne.e,
        y: y.x * ne.b + y.y * ne.d + ne.f
      } : {
        x: y.x,
        y: y.y
      };
    };
    return Be = e.get(t), Be && Be.kill(), i.startDrag = function(Y, y) {
      var M, P, j, A;
      Er(Y || l.pointerEvent, !0), y && !l.hitTest(Y || l.pointerEvent) && (M = ar(Y || l.pointerEvent), P = ar(t), j = qn({
        x: M.left + M.width / 2,
        y: M.top + M.height / 2
      }), A = qn({
        x: P.left + P.width / 2,
        y: P.top + P.height / 2
      }), H -= j.x - A.x, U -= j.y - A.y), l.isDragging || (l.isDragging = ri = !0, me(l, "dragstart", "onDragStart"));
    }, i.drag = zt, i.endDrag = function(Y) {
      return st(Y || l.pointerEvent, !0);
    }, i.timeSinceDrag = function() {
      return l.isDragging ? 0 : (Dt() - m) / 1e3;
    }, i.timeSinceClick = function() {
      return (Dt() - T) / 1e3;
    }, i.hitTest = function(Y, y) {
      return e.hitTest(l.target, Y, y);
    }, i.getDirection = function(Y, y) {
      var M = Y === "velocity" && at ? Y : zr(Y) && !o ? "element" : "start", P, j, A, F, K, X;
      return M === "element" && (K = ar(l.target), X = ar(Y)), P = M === "start" ? l.x - G : M === "velocity" ? at.getVelocity(t, c) : K.left + K.width / 2 - (X.left + X.width / 2), o ? P < 0 ? "counter-clockwise" : "clockwise" : (y = y || 2, j = M === "start" ? l.y - L : M === "velocity" ? at.getVelocity(t, u) : K.top + K.height / 2 - (X.top + X.height / 2), A = Math.abs(P / j), F = A < 1 / y ? "" : P < 0 ? "left" : "right", A < y && (F !== "" && (F += "-"), F += j < 0 ? "up" : "down"), F);
    }, i.applyBounds = function(Y, y) {
      var M, P, j, A, F, K;
      if (Y && r.bounds !== Y)
        return r.bounds = Y, l.update(!0, y);
      if (Xt(!0), Ri(), I && !Sr()) {
        if (M = l.x, P = l.y, M > w ? M = w : M < N && (M = N), P > V ? P = V : P < B && (P = B), (l.x !== M || l.y !== P) && (j = !0, l.x = l.endX = M, o ? l.endRotation = M : l.y = l.endY = P, ie = !0, ft(!0), l.autoScroll && !l.isDragging))
          for (Gi(t.parentNode), A = t, xt.scrollTop = le.pageYOffset != null ? le.pageYOffset : O.documentElement.scrollTop != null ? O.documentElement.scrollTop : O.body.scrollTop, xt.scrollLeft = le.pageXOffset != null ? le.pageXOffset : O.documentElement.scrollLeft != null ? O.documentElement.scrollLeft : O.body.scrollLeft; A && !K; )
            K = wr(A.parentNode), F = K ? xt : A.parentNode, h && F.scrollTop > F._gsMaxScrollY && (F.scrollTop = F._gsMaxScrollY), d && F.scrollLeft > F._gsMaxScrollX && (F.scrollLeft = F._gsMaxScrollX), A = F;
        l.isThrowing && (j || l.endX > w || l.endX < N || l.endY > V || l.endY < B) && Mi(r.inertia || r.throwProps, j);
      }
      return l;
    }, i.update = function(Y, y, M) {
      if (y && l.isPressed) {
        var P = qt(t), j = Gn.apply({
          x: l.x - G,
          y: l.y - L
        }), A = qt(t.parentNode, !0);
        A.apply({
          x: P.e - j.x,
          y: P.f - j.y
        }, j), l.x -= j.x - A.e, l.y -= j.y - A.f, ft(!0), ii();
      }
      var F = l.x, K = l.y;
      return Wn(!y), Y ? l.applyBounds() : (ie && M && ft(!0), Xt(!0)), y && (Pr(l.pointerX, l.pointerY), ie && ft(!0)), l.isPressed && !y && (d && Math.abs(F - l.x) > 0.01 || h && Math.abs(K - l.y) > 0.01 && !o) && ii(), l.autoScroll && (Gi(t.parentNode, l.isDragging), b = l.isDragging, ft(!0), ws(t, ni), bs(t, ni)), l;
    }, i.enable = function(Y) {
      var y = {
        lazy: !0
      }, M, P, j;
      if (r.cursor !== !1 && (y.cursor = r.cursor || Lr), Q.utils.checkPrefix("touchCallout") && (y.touchCallout = "none"), Y !== "soft") {
        for (ms(g, d === h ? "none" : r.allowNativeTouchScrolling && t.scrollHeight === t.clientHeight == (t.scrollWidth === t.clientHeight) || r.allowEventDefault ? "manipulation" : d ? "pan-y" : "pan-x"), P = g.length; --P > -1; )
          j = g[P], fi || ke(j, "mousedown", Er), ke(j, "touchstart", Er), ke(j, "click", Un, !0), Q.set(j, y), j.getBBox && j.ownerSVGElement && d !== h && Q.set(j.ownerSVGElement, {
            touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : d ? "pan-y" : "pan-x"
          }), r.allowContextMenu || ke(j, "contextmenu", Vn);
        ai(g, !1);
      }
      return bs(t, ni), z = !0, at && Y !== "soft" && at.track($ || t, s ? "x,y" : o ? "rotation" : "top,left"), t._gsDragID = M = t._gsDragID || "d" + kl++, hr[M] = l, $ && ($.enable(), $.element._gsDragID = M), (r.bounds || o) && ii(), r.bounds && l.applyBounds(), l;
    }, i.disable = function(Y) {
      for (var y = l.isDragging, M = g.length, P; --M > -1; )
        Vi(g[M], "cursor", null);
      if (Y !== "soft") {
        for (ms(g, null), M = g.length; --M > -1; )
          P = g[M], Vi(P, "touchCallout", null), be(P, "mousedown", Er), be(P, "touchstart", Er), be(P, "click", Un, !0), be(P, "contextmenu", Vn);
        ai(g, !0), Ee && (be(Ee, "touchcancel", st), be(Ee, "touchend", st), be(Ee, "touchmove", zt)), be(O, "mouseup", st), be(O, "mousemove", zt);
      }
      return ws(t, ni), z = !1, at && Y !== "soft" && (at.untrack($ || t, s ? "x,y" : o ? "rotation" : "top,left"), l.tween && l.tween.kill()), $ && $.disable(), ys(ft), l.isDragging = l.isPressed = kr = !1, y && me(l, "dragend", "onDragEnd"), l;
    }, i.enabled = function(Y, y) {
      return arguments.length ? Y ? l.enable(y) : l.disable(y) : z;
    }, i.kill = function() {
      return l.isThrowing = !1, l.tween && l.tween.kill(), l.disable(), Q.set(g, {
        clearProps: "userSelect"
      }), delete hr[t._gsDragID], l;
    }, i.revert = function() {
      this.kill(), this.styles && this.styles.revert();
    }, ~n.indexOf("scroll") && ($ = i.scrollProxy = new Ol(t, El({
      onKill: function() {
        l.isPressed && st(null);
      }
    }, r)), t.style.overflowY = h && !pn ? "auto" : "hidden", t.style.overflowX = d && !pn ? "auto" : "hidden", t = $.content), o ? f.rotation = 1 : (d && (f[c] = 1), h && (f[u] = 1)), k.force3D = "force3D" in r ? r.force3D : !0, $o(ps(i)), i.enable(), i;
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
    var s = ar(r), o = ar(i), c = s.top, u = s.left, d = s.right, h = s.bottom, _ = s.width, l = s.height, g = o.left > d || o.right < u || o.top > h || o.bottom < c, f, m, b;
    return g || !n ? !g : (b = (n + "").indexOf("%") !== -1, n = parseFloat(n) || 0, f = {
      left: Math.max(u, o.left),
      top: Math.max(c, o.top)
    }, f.width = Math.min(d, o.right) - f.left, f.height = Math.min(h, o.bottom) - f.top, f.width < 0 || f.height < 0 ? !1 : b ? (n *= 0.01, m = f.width * f.height, m >= _ * l * n || m >= o.width * o.height * n) : f.width > n && f.height > n);
  }, e;
}($l);
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
const Al = {};
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
  const u = te(null), d = te(null), h = te(
    o || `switch-${Math.random().toString(36).slice(2, 9)}`
  ), [_, l] = Ne(t), g = e !== void 0, f = g ? !!e : _, m = te({
    theme: "light",
    complete: f ? 100 : 0,
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
  }), b = te(m.current.complete), v = Vr(
    (x) => {
      const D = x ? 100 : 0;
      g || l(x), m.current.complete = D, b.current = D, u.current && (u.current.setAttribute("aria-pressed", x ? "true" : "false"), u.current.style.setProperty("--complete", `${D}`));
    },
    [g]
  );
  Z(() => {
    g && v(!!e);
  }, [e, g, v]), Z(() => {
    g || v(t);
  }, [t, g, v]);
  const S = Vr(
    (x) => {
      if (n) {
        const D = {
          checked: x,
          name: s || "",
          value: c || "",
          type: "checkbox"
        }, T = {
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
        n(T);
      }
    },
    [s, n, c]
  );
  Z(() => {
    if (r) return;
    const x = u.current;
    if (!x) return;
    let D = null, T = !1;
    const k = m.current;
    k.complete = f ? 100 : k.complete, b.current = k.complete;
    const C = getComputedStyle(document.documentElement).getPropertyValue("--color-switch-checked-hue").trim();
    if (C) {
      const L = parseInt(C, 10);
      isNaN(L) || (k.hue = L);
    }
    x.style.setProperty("--complete", `${k.complete}`), x.style.setProperty("--hue", `${k.hue}`), x.setAttribute("aria-pressed", f ? "true" : "false");
    const O = () => {
      Oe.set("#goo feGaussianBlur", {
        attr: {
          stdDeviation: k.deviation
        }
      }), Oe.set("#goo feColorMatrix", {
        attr: {
          values: `
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 ${k.alpha} -10
      `
        }
      }), document.documentElement.dataset.theme = k.theme, document.documentElement.dataset.mapped = String(k.mapped), document.documentElement.dataset.delta = String(k.delta), document.documentElement.dataset.debug = String(k.debug), document.documentElement.dataset.active = String(k.active), document.documentElement.dataset.bounce = String(k.bounce), x.style.setProperty("--complete", `${k.complete}`), x.style.setProperty("--hue", `${k.hue}`);
    }, z = async () => {
      if (r) return;
      x.dataset.pressed = "true", k.bubble && (x.dataset.active = "true"), await Promise.allSettled(
        k.bounce ? [] : x.getAnimations({ subtree: !0 }).map((I) => I.finished)
      );
      const L = x.matches("[aria-pressed=true]");
      Oe.timeline({
        onComplete: () => {
          Oe.delayedCall(0.05, () => {
            x.dataset.active = "false", x.dataset.pressed = "false";
            const I = !L;
            v(I), S(I);
          });
        }
      }).to(x, {
        "--complete": L ? 0 : 100,
        duration: 0.12,
        delay: k.bounce && k.bubble ? 0.18 : 0
      });
    }, $ = document.createElement("div");
    D = Tr.create($, {
      allowContextMenu: !0,
      handle: x,
      onDragStart: function() {
        const I = this, W = x.getBoundingClientRect(), w = x.matches("[aria-pressed=true]") ? W.left - (I.pointerX ?? 0) : W.left + W.width - (I.pointerX ?? 0);
        I.dragBounds = w, x.dataset.active = "true";
      },
      onDrag: function() {
        const I = this, W = x.matches("[aria-pressed=true]"), q = (I.x ?? 0) - (I.startX ?? 0), w = Oe.utils.clamp(
          0,
          100,
          W ? Oe.utils.mapRange(I.dragBounds ?? 0, 0, 0, 100, q) : Oe.utils.mapRange(0, I.dragBounds ?? 0, 0, 100, q)
        );
        I.complete = w, Oe.set(x, {
          "--complete": w,
          "--delta": Math.min(Math.abs(I.deltaX), 12)
        }), b.current = w;
      },
      onDragEnd: function() {
        const W = this.complete ?? b.current;
        Oe.fromTo(
          x,
          {
            "--complete": W
          },
          {
            "--complete": W >= 50 ? 100 : 0,
            duration: 0.15,
            onComplete: () => {
              Oe.delayedCall(0.05, () => {
                x.dataset.active = "false", x.style.setProperty("--delta", "0");
                const q = W >= 50;
                v(q), S(q);
              });
            }
          }
        );
      },
      onPress: function() {
        const I = this;
        I.__pressTime = Date.now(), "ontouchstart" in window && navigator.maxTouchPoints > 0 && (x.dataset.active = "true");
      },
      onRelease: function() {
        const I = this;
        I.__releaseTime = Date.now(), Oe.set(x, { "--delta": 0 }), "ontouchstart" in window && navigator.maxTouchPoints > 0 && (I.startX !== void 0 && I.endX !== void 0 && Math.abs(I.endX - I.startX) < 4 || I.endX === void 0) && (x.dataset.active = "false");
        const q = (I.__releaseTime ?? 0) - (I.__pressTime ?? 0) <= 150, N = (I.startX !== void 0 && I.endX !== void 0 ? Math.abs(I.endX - I.startX) : 0) < 4;
        if (q && N) {
          const V = x.getBoundingClientRect(), de = (I.endX ?? I.pointerX ?? I.startX ?? 0) - V.left, _e = V.width, re = de < _e / 2, Be = x.matches("[aria-pressed=true]");
          (Be && re || !Be && !re) && z();
        }
      }
    })[0];
    const H = (L) => {
      L.key === "Enter" && z(), L.key === " " && L.preventDefault();
    }, U = (L) => {
      L.key === " " && z();
    };
    return x.addEventListener("keydown", H), x.addEventListener("keyup", U), (async () => {
      if (typeof window > "u" || T) {
        O();
        return;
      }
      if (typeof import.meta < "u" && Al) {
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
        if (!L || T) {
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
        w.addBinding(k, "debug"), w.addBinding(k, "active"), w.addBinding(k, "complete", {
          min: 0,
          max: 100,
          label: "complete (%)",
          step: 1
        });
        const N = W.addFolder({
          title: "behavior",
          expanded: !1
        });
        N.addBinding(k, "bounce"), N.addBinding(k, "mapped"), N.addBinding(k, "bubble"), N.addBinding(k, "delta"), N.addBinding(k, "hue", {
          min: 0,
          max: 359,
          step: 1
        });
        const V = W.addFolder({
          title: "filter",
          expanded: !1
        });
        V.addBinding(k, "deviation", {
          min: 0,
          max: 50,
          step: 1,
          label: "stdDeviation"
        }), V.addBinding(k, "alpha", {
          min: 0,
          max: 50,
          step: 1,
          label: "alpha"
        }), W.addBinding(k, "theme", {
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
      T = !0, x.removeEventListener("keydown", H), x.removeEventListener("keyup", U), d.current && (d.current.dispose(), d.current = null), D && D.kill();
    };
  }, [f, r, S, v]);
  const E = h.current;
  return /* @__PURE__ */ p.jsx("div", { className: "switch-stage", children: /* @__PURE__ */ p.jsx("main", { children: /* @__PURE__ */ p.jsxs(
    "button",
    {
      id: E,
      ref: u,
      "aria-label": a,
      "aria-pressed": f,
      "aria-required": i,
      "aria-disabled": r,
      className: "liquid-toggle",
      disabled: r,
      "data-pressed": f,
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
function zo(a, e, t, r, i) {
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
function Yo(a, e, t, r) {
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
  name: h,
  id: _
}) => {
  const [l, g] = Ne(!1), [f, m] = Ne(r || ""), b = _ || `select-${Math.random().toString(36).substr(2, 9)}`, v = te(null), S = t !== void 0, E = S ? t : f, x = o === "error" || !!c, D = c || u, T = e.find((C) => C.value === E);
  Z(() => {
    Bn(e, ["value", "label"], "Select", "options"), E !== void 0 && E !== "" && Ll(
      E,
      e.map((C) => C.value),
      "Select",
      "value"
    );
  }, [e, E]), Z(() => {
    const C = (O) => {
      v.current && !v.current.contains(O.target) && g(!1);
    };
    if (l)
      return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [l]), Z(() => {
    const C = (O) => {
      O.key === "Escape" && l && g(!1);
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [l]);
  const k = (C) => {
    S || m(C), d == null || d(C), g(!1);
  }, R = (C) => {
    if (!n) {
      if (C.key === "Enter" || C.key === " ")
        C.preventDefault(), g(!l);
      else if (C.key === "ArrowDown")
        if (C.preventDefault(), !l)
          g(!0);
        else {
          const O = e.findIndex(($) => $.value === E), z = O < e.length - 1 ? O + 1 : 0;
          k(e[z].value);
        }
      else if (C.key === "ArrowUp" && (C.preventDefault(), l)) {
        const O = e.findIndex(($) => $.value === E), z = O > 0 ? O - 1 : e.length - 1;
        k(e[z].value);
      }
    }
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "select-wrapper", ref: v, children: [
    a && /* @__PURE__ */ p.jsxs("label", { htmlFor: b, className: "select-label", children: [
      a,
      s && /* @__PURE__ */ p.jsx("span", { className: "select-required", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "select-container", children: [
      /* @__PURE__ */ p.jsx(ye, { hugWidth: !1, width: "100%", height: 50, children: /* @__PURE__ */ p.jsxs(
        "button",
        {
          id: b,
          type: "button",
          role: "combobox",
          "aria-expanded": l,
          "aria-haspopup": "listbox",
          "aria-controls": `${b}-listbox`,
          disabled: n,
          className: `select-trigger ${o} ${x ? "error" : ""} ${n ? "disabled" : ""} ${l ? "open" : ""}`,
          onClick: () => !n && g(!l),
          onKeyDown: R,
          "aria-invalid": x,
          "aria-describedby": D ? `${b}-helper` : void 0,
          children: [
            /* @__PURE__ */ p.jsx("span", { className: T ? "" : "select-placeholder", children: T ? T.label : i }),
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
              id: `${b}-listbox`,
              role: "listbox",
              className: "select-dropdown",
              children: e.map((C) => {
                const O = C.value === E;
                return /* @__PURE__ */ p.jsx(
                  "li",
                  {
                    role: "option",
                    "aria-selected": O,
                    className: `select-option ${O ? "selected" : ""} ${C.disabled ? "disabled" : ""}`,
                    onClick: () => !C.disabled && k(C.value),
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
        id: `${b}-helper`,
        className: `select-helper ${x ? "error" : ""}`,
        children: D
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "select",
      {
        name: h,
        value: E,
        defaultValue: r,
        required: s,
        disabled: n,
        className: "select-native",
        onChange: (C) => k(C.target.value),
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
  const r = te(null), i = te(null), n = te(null), [s, o] = Ne(!1), [c, u] = Ne(null), d = (v) => {
    if (v = Math.max(0, Math.min(100, v)), i.current && n.current && c) {
      const S = v / 100 * c.width;
      i.current.style.width = `${v}%`, n.current.style.left = `${S}px`;
    }
  }, h = (v) => c ? (v - c.left) / c.width * 100 : 0, _ = (v) => {
    const S = h(v);
    d(S), e == null || e(S);
  }, l = (v) => {
    var S;
    v.preventDefault(), r.current && (o(!0), u(r.current.getBoundingClientRect()), _(v.clientX), (S = n.current) == null || S.classList.add("active"));
  }, g = (v) => {
    var S;
    r.current && (o(!0), u(r.current.getBoundingClientRect()), _(v.touches[0].clientX), (S = n.current) == null || S.classList.add("active"));
  }, f = () => {
    var v;
    o(!1), (v = n.current) == null || v.classList.remove("active");
  };
  Z(() => {
    if (r.current) {
      const v = r.current.getBoundingClientRect();
      u(v), d(a);
    }
  }, [a]), Z(() => {
    s || d(a);
  }, [a, s]), Z(() => {
    const v = (E) => {
      s && _(E.clientX);
    }, S = () => {
      f();
    };
    return s && (document.addEventListener("mousemove", v), document.addEventListener("mouseup", S)), () => {
      document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", S);
    };
  }, [s, c]), Z(() => {
    const v = (E) => {
      s && (E.preventDefault(), _(E.touches[0].clientX));
    }, S = () => {
      f();
    };
    return s && (document.addEventListener("touchmove", v, { passive: !1 }), document.addEventListener("touchend", S)), () => {
      document.removeEventListener("touchmove", v), document.removeEventListener("touchend", S);
    };
  }, [s, c]);
  const m = (v) => {
    var S;
    r.current && (o(!0), u(r.current.getBoundingClientRect()), (S = n.current) == null || S.classList.add("active"), _(v.clientX));
  }, b = (v) => {
    var S;
    r.current && (o(!0), u(r.current.getBoundingClientRect()), (S = n.current) == null || S.classList.add("active"), _(v.touches[0].clientX));
  };
  return Z(() => {
    const v = () => {
      r.current && u(r.current.getBoundingClientRect());
    };
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, []), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "slider-container",
        id: t,
        ref: r,
        onMouseDown: m,
        onTouchStart: b,
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
        const h = (_ = i.current) == null ? void 0 : _.getBoundingClientRect();
        h && h.width > 0 && h.height > 0 && s({ width: h.width, height: h.height });
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
  badge: n,
  className: s = ""
}) => {
  const [o, c] = Ne(!1), u = () => ({
    small: 32,
    medium: 40,
    large: 56,
    xlarge: 80
  })[r], d = (E) => i === "circle" ? E / 2 : 8, h = () => {
    if (t) return t;
    if (e) {
      const E = e.trim().split(/\s+/);
      return E.length >= 2 ? (E[0][0] + E[1][0]).toUpperCase() : E[0][0].toUpperCase();
    }
    return "?";
  }, _ = !a || o, l = u(), g = d(l), m = (() => {
    if (n == null)
      return null;
    if (typeof n == "string" || typeof n == "number")
      return n === "" || n === 0 ? null : {
        value: n,
        variant: "error"
      };
    const E = n.value;
    return E == null || E === "" || E === 0 ? null : {
      value: E,
      variant: n.variant ?? "error",
      size: n.size,
      color: n.color
    };
  })(), b = m !== null && m.value !== void 0, v = () => {
    if (!m || m.value === void 0) return "";
    const E = m.value;
    return typeof E == "number" && E > 99 ? "99+" : E.toString();
  }, S = () => m != null && m.size ? m.size : r === "small" ? "small" : r === "xlarge" ? "large" : "medium";
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: `avatar-container ${b ? "avatar-container-with-badge" : ""}`,
      children: [
        /* @__PURE__ */ p.jsx(
          ye,
          {
            height: l,
            width: l,
            borderRadius: g,
            className: "slider-glass-surface",
            children: /* @__PURE__ */ p.jsxs("div", { className: `avatar ${r} ${i} ${s}`, children: [
              a && !o && /* @__PURE__ */ p.jsx(
                "img",
                {
                  src: a,
                  alt: e || "Avatar",
                  className: "avatar-image",
                  onError: () => c(!0)
                }
              ),
              _ && /* @__PURE__ */ p.jsx("span", { className: "avatar-fallback", children: h() })
            ] })
          }
        ),
        b && m && /* @__PURE__ */ p.jsx(
          "span",
          {
            className: `avatar-badge avatar-badge-${i} avatar-badge-${S()} avatar-badge-${m.variant}`,
            style: m.color ? { backgroundColor: m.color } : void 0,
            children: v()
          }
        )
      ]
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
    Go(e, "Progress", "max"), n || zo(a, 0, e, "Progress", "value");
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
  ), o = t !== void 0, c = o ? t : n, u = te(null), d = te(null), h = te(null), _ = te(/* @__PURE__ */ new Map()), [l, g] = Ne(!1), f = te(!1), m = te(0), b = te(null), v = Vr(
    (T, k = !0) => {
      const R = _.current.get(T), C = h.current, O = u.current, z = d.current;
      if (!R || !C || !O) return;
      const $ = z ? z.getBoundingClientRect() : O.getBoundingClientRect(), H = R.getBoundingClientRect(), U = H.left - $.left, G = H.top - $.top, L = Math.min(H.width, 80), I = Math.min(H.height, 60);
      k && !l ? (g(!0), m.current = 0, C.style.setProperty("--complete", "0"), C.style.setProperty("--delta", "0"), C.dataset.active = "true", C.dataset.pressed = "true", C.dataset.bounce = "true", Oe.timeline({
        onComplete: () => {
          m.current = 100, C.style.setProperty("--complete", "100"), C.style.setProperty("--delta", "0"), C.dataset.active = "false", C.dataset.pressed = "false", g(!1), b.current = { left: U, top: G, width: L, height: I };
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
            m.current = q, C.style.setProperty("--complete", `${q}`);
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
      )) : (C.style.setProperty("--target-x", `${U}px`), C.style.setProperty("--target-y", `${G}px`), C.style.setProperty("--target-width", `${L}px`), C.style.setProperty("--target-height", `${I}px`), C.style.setProperty("--height-scale", "1"), m.current = 100, C.style.setProperty("--complete", "100"), C.style.setProperty("--delta", "0"), b.current = { left: U, top: G, width: L, height: I });
    },
    [l]
  ), S = (T, k) => {
    k || l || (f.current = !0, o || s(T), r == null || r(T), requestAnimationFrame(() => {
      v(T, !0), setTimeout(() => {
        f.current = !1;
      }, 500);
    }));
  }, E = (T, k, R) => {
    if (T.key === "Enter" || T.key === " ")
      T.preventDefault(), S(k);
    else if (T.key === "ArrowRight") {
      T.preventDefault();
      const C = (R + 1) % a.length;
      a[C].disabled || S(a[C].key);
    } else if (T.key === "ArrowLeft") {
      T.preventDefault();
      const C = (R - 1 + a.length) % a.length;
      a[C].disabled || S(a[C].key);
    }
  };
  Z(() => {
    Bn(a, ["key", "label", "content"], "Tabs", "items"), Yo(a, (T) => T.key, "Tabs", "items");
  }, [a]), Z(() => {
    c && _.current.size > 0 && !f.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        v(c, !1);
      });
    });
  }, [c, a.length, v]), Z(() => {
    if (c && _.current.size > 0 && h.current && !b.current) {
      const T = setTimeout(() => {
        v(c, !1);
      }, 0);
      return () => clearTimeout(T);
    }
  }, [c, a.length, v]);
  const x = a.find((T) => T.key === c);
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
    /* @__PURE__ */ p.jsx("div", { className: "tabs-header-wrapper", ref: d, children: c && /* @__PURE__ */ p.jsx("div", { ref: h, className: "tab-glass-drop-wrapper", children: /* @__PURE__ */ p.jsxs(
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
          x && /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-label", children: x.icon && /* @__PURE__ */ p.jsx("span", { className: "tab-glass-drop-label__icon", children: x.icon }) }),
          /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-shadow" }),
          /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-wrapper-inner", children: /* @__PURE__ */ p.jsxs("div", { className: "tab-glass-drop-liquids", children: [
            /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-liquid__shadow" }),
            /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-liquid__track" })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "tab-glass-drop-cover" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ p.jsx("div", { className: "tabs-header", ref: u, role: "tablist", children: a.map((T, k) => {
      const R = T.key === c;
      return /* @__PURE__ */ p.jsxs(
        "button",
        {
          ref: (C) => {
            C ? _.current.set(T.key, C) : _.current.delete(T.key);
          },
          role: "tab",
          "aria-selected": R,
          "aria-controls": `tabpanel-${T.key}`,
          id: `tab-${T.key}`,
          className: `tab-button ${R ? "active" : ""} ${T.disabled ? "disabled" : ""}`,
          onClick: () => S(T.key, T.disabled),
          onKeyDown: (C) => E(C, T.key, k),
          disabled: T.disabled,
          tabIndex: R ? 0 : -1,
          children: [
            T.icon && /* @__PURE__ */ p.jsx("span", { className: "tab-button__icon", children: T.icon }),
            /* @__PURE__ */ p.jsx("span", { className: "tab-button__label", children: T.label })
          ]
        },
        T.key
      );
    }) }),
    x && /* @__PURE__ */ p.jsx(
      "div",
      {
        id: `tabpanel-${x.key}`,
        role: "tabpanel",
        "aria-labelledby": `tab-${x.key}`,
        className: "tabs-content",
        children: x.content
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
const Xl = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zl = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Ss = (a) => {
  const e = zl(a);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Wo = (...a) => a.filter((e, t, r) => !!e && e.trim() !== "" && r.indexOf(e) === t).join(" ").trim(), Yl = (a) => {
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
      ...!n && !Yl(o) && { "aria-hidden": "true" },
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
  className: n = "",
  showSubtitle: s = !0,
  initialSubtitleShow: o = !0
}) => {
  const [c, u] = Ne(t), d = r !== void 0, h = d ? r : c, _ = te(/* @__PURE__ */ new Map()), l = (f, m) => {
    if (m) return;
    const b = h.includes(f);
    let v;
    b ? v = h.filter((S) => S !== f) : v = e ? [...h, f] : [f], d || u(v), i == null || i(v);
  };
  Gr.useEffect(() => {
    Bn(a, ["key", "title"], "Accordion", "items"), Yo(a, (f) => f.key, "Accordion", "items");
  }, [a]);
  const g = (f, m) => {
    (f.key === "Enter" || f.key === " ") && (f.preventDefault(), l(m));
  };
  return /* @__PURE__ */ p.jsx("div", { className: `accordion ${n}`, children: a.map((f) => {
    const m = h.includes(f.key), b = f.children || f.content, v = f.showSubtitle !== void 0 ? f.showSubtitle : s, S = f.initialSubtitleShow !== void 0 ? f.initialSubtitleShow : o, E = v && f.subtitle && (S || m), x = !m && !S && f.subtitle && v, D = E || m;
    return /* @__PURE__ */ p.jsxs(
      ye,
      {
        hugWidth: !1,
        width: "100%",
        height: "auto",
        borderRadius: 12,
        brightness: m ? 85 : 95,
        opacity: m ? 0.4 : 0.1,
        blur: 8,
        className: `accordion-item ${m ? "accordion-item--open" : ""} ${D ? "accordion-item--align-top" : ""} ${f.badge ? "accordion-item--has-badge" : ""}`,
        children: [
          f.badge && /* @__PURE__ */ p.jsx("div", { className: "accordion-badge-wrapper", children: f.badge }),
          /* @__PURE__ */ p.jsxs("div", { className: "accordion-header-wrapper", children: [
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                className: `accordion-header ${m ? "accordion-header--open" : ""} ${f.disabled ? "accordion-header--disabled" : ""}`,
                onClick: () => {
                  var T;
                  l(f.key, f.disabled), (T = f.onClick) == null || T.call(f);
                },
                onKeyDown: (T) => g(T, f.key),
                disabled: f.disabled,
                "aria-expanded": m,
                "aria-controls": `accordion-content-${f.key}`,
                children: [
                  f.icon && /* @__PURE__ */ p.jsx("div", { className: "accordion-header-icon", children: f.icon }),
                  /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `accordion-header-text ${x ? "accordion-header-text--centered" : ""} ${E ? "accordion-header-text--open" : ""}`,
                      children: [
                        /* @__PURE__ */ p.jsx("span", { className: "accordion-title", children: f.title }),
                        E && /* @__PURE__ */ p.jsx(
                          "span",
                          {
                            className: `accordion-subtitle ${S || m ? "accordion-subtitle--visible" : ""}`,
                            children: f.subtitle
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: "accordion-toggle-icon-wrapper", children: m ? (
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
          b && /* @__PURE__ */ p.jsx(
            "div",
            {
              ref: (T) => {
                T ? _.current.set(f.key, T) : _.current.delete(f.key);
              },
              id: `accordion-content-${f.key}`,
              className: `accordion-content ${m ? "accordion-content--open" : ""}`,
              children: /* @__PURE__ */ p.jsx("div", { className: "accordion-content-inner", children: b })
            }
          )
        ]
      },
      f.key
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
      const h = (c + 1) % a.length, _ = a[h];
      !_.disabled && !_.divider && ((u = document.getElementById(`menu-item-${_.key}`)) == null || u.focus());
    } else if (s.key === "ArrowUp") {
      s.preventDefault();
      const h = (c - 1 + a.length) % a.length, _ = a[h];
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
    const d = (h) => {
      c.current && !c.current.contains(h.target) && o(!1);
    };
    if (s)
      return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [s]), Z(() => {
    const d = (h) => {
      h.key === "Escape" && s && o(!1);
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
    Go(e, "Pagination", "total"), zo(a, 1, e, "Pagination", "current");
  }, [a, e]);
  const o = () => {
    const h = [], _ = Math.floor(t / 2);
    let l = Math.max(1, a - _), g = Math.min(e, a + _);
    a <= _ && (g = Math.min(e, t)), a >= e - _ && (l = Math.max(1, e - t + 1)), l > 1 && i && (h.push(1), l > 2 && h.push("ellipsis-start"));
    for (let f = l; f <= g; f++)
      h.push(f);
    return g < e && i && (g < e - 1 && h.push("ellipsis-end"), h.push(e)), h;
  }, c = (h) => {
    h >= 1 && h <= e && h !== a && (r == null || r(h));
  }, u = (h, _) => {
    (h.key === "Enter" || h.key === " ") && (h.preventDefault(), c(_));
  }, d = o();
  return /* @__PURE__ */ p.jsx("nav", { className: `pagination ${s}`, "aria-label": "Pagination", children: /* @__PURE__ */ p.jsxs("ul", { className: "pagination-list", children: [
    n && /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "pagination-button pagination-prev",
        onClick: () => c(a - 1),
        onKeyDown: (h) => u(h, a - 1),
        disabled: a === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ) }),
    d.map((h, _) => typeof h == "string" ? /* @__PURE__ */ p.jsx("li", { className: "pagination-ellipsis", children: "..." }, `${h}-${_}`) : /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: `pagination-button ${h === a ? "active" : ""}`,
        onClick: () => c(h),
        onKeyDown: (l) => u(l, h),
        "aria-label": `Page ${h}`,
        "aria-current": h === a ? "page" : void 0,
        children: h
      }
    ) }, h)),
    n && /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "pagination-button pagination-next",
        onClick: () => c(a + 1),
        onKeyDown: (h) => u(h, a + 1),
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
        var b;
        if (l.key !== "Tab") return;
        const g = (b = c.current) == null ? void 0 : b.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!g || g.length === 0) return;
        const f = g[0], m = g[g.length - 1];
        l.shiftKey ? document.activeElement === f && (l.preventDefault(), m.focus()) : document.activeElement === m && (l.preventDefault(), f.focus());
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
  }, h = /* @__PURE__ */ p.jsx("div", { className: "modal-mask", onClick: d, children: /* @__PURE__ */ p.jsxs(
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
  return /* @__PURE__ */ p.jsx(Xn, { containerId: "interface-ui-modal", zIndex: 1050, children: h });
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
    const g = (f) => {
      f.key === "Escape" && a && n && (s == null || s());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [a, n, s]), !a) return null;
  const d = (g) => {
    o && g.target === g.currentTarget && (s == null || s());
  }, h = typeof i == "number" ? `${i}px` : i, _ = {};
  r === "left" || r === "right" ? _.width = h : _.height = h;
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
  const h = () => {
    if (!u.current || !d.current) return;
    const b = u.current.getBoundingClientRect(), v = d.current.getBoundingClientRect(), S = window.scrollX || window.pageXOffset, E = window.scrollY || window.pageYOffset;
    let x = 0, D = 0;
    switch (t) {
      case "top":
        x = b.top + E - v.height - 8, D = b.left + S + b.width / 2 - v.width / 2;
        break;
      case "bottom":
        x = b.bottom + E + 8, D = b.left + S + b.width / 2 - v.width / 2;
        break;
      case "left":
        x = b.top + E + b.height / 2 - v.height / 2, D = b.left + S - v.width - 8;
        break;
      case "right":
        x = b.top + E + b.height / 2 - v.height / 2, D = b.right + S + 8;
        break;
    }
    c({ top: x, left: D });
  };
  Z(() => {
    if (n) {
      h();
      const b = () => h(), v = () => h();
      return window.addEventListener("scroll", b, !0), window.addEventListener("resize", v), () => {
        window.removeEventListener("scroll", b, !0), window.removeEventListener("resize", v);
      };
    }
  }, [n, t]);
  const _ = () => {
    s(!0);
  }, l = () => {
    s(!1);
  }, g = () => {
    r === "click" && s(!n);
  }, f = {
    ref: u
  };
  r === "hover" ? (f.onMouseEnter = _, f.onMouseLeave = l) : r === "focus" ? (f.onFocus = _, f.onBlur = l) : r === "click" && (f.onClick = g);
  const m = Gr.cloneElement(e, f);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    m,
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
      const h = Math.floor(Math.random() * o.length);
      u += o[h] + ". ";
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
