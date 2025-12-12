import Vr, { useId as Zo, useRef as te, useCallback as gr, useEffect as Q, useState as Se, forwardRef as Rs, createElement as qi } from "react";
import { createPortal as Jo } from "react-dom";
var Hi = { exports: {} }, Rr = {};
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
function ea() {
  if (Hn) return Rr;
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
  return Rr.Fragment = e, Rr.jsx = t, Rr.jsxs = t, Rr;
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
function ta() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    function a(w) {
      if (w == null) return null;
      if (typeof w == "function")
        return w.$$typeof === O ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case m:
          return "Fragment";
        case y:
          return "Profiler";
        case b:
          return "StrictMode";
        case R:
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
          case f:
            return "Portal";
          case E:
            return w.displayName || "Context";
          case S:
            return (w._context.displayName || "Context") + ".Consumer";
          case x:
            var M = w.render;
            return w = w.displayName, w || (w = M.displayName || M.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
          case T:
            return M = w.displayName || null, M !== null ? M : a(w.type) || "Memo";
          case D:
            M = w._payload, w = w._init;
            try {
              return a(w(M));
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
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var V = M.error, B = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return V.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), e(w);
      }
    }
    function r(w) {
      if (w === m) return "<>";
      if (typeof w == "object" && w !== null && w.$$typeof === D)
        return "<...>";
      try {
        var M = a(w);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var w = X.A;
      return w === null ? null : w.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function s(w) {
      if ($.call(w, "key")) {
        var M = Object.getOwnPropertyDescriptor(w, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return w.key !== void 0;
    }
    function o(w, M) {
      function V() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(w, "key", {
        get: V,
        configurable: !0
      });
    }
    function u() {
      var w = a(this.type);
      return A[w] || (A[w] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), w = this.props.ref, w !== void 0 ? w : null;
    }
    function c(w, M, V, B, de, _e) {
      var re = V.ref;
      return w = {
        $$typeof: g,
        type: w,
        key: M,
        props: V,
        _owner: B
      }, (re !== void 0 ? re : null) !== null ? Object.defineProperty(w, "ref", {
        enumerable: !1,
        get: u
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
    function d(w, M, V, B, de, _e) {
      var re = M.children;
      if (re !== void 0)
        if (B)
          if (q(re)) {
            for (B = 0; B < re.length; B++)
              h(re[B]);
            Object.freeze && Object.freeze(re);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(re);
      if ($.call(M, "key")) {
        re = a(w);
        var ie = Object.keys(M).filter(function(dt) {
          return dt !== "key";
        });
        B = 0 < ie.length ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}", H[re + B] || (ie = 0 < ie.length ? "{" + ie.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), H[re + B] = !0);
      }
      if (re = null, V !== void 0 && (t(V), re = "" + V), s(M) && (t(M.key), re = "" + M.key), "key" in M) {
        V = {};
        for (var Be in M)
          Be !== "key" && (V[Be] = M[Be]);
      } else V = M;
      return re && o(
        V,
        typeof w == "function" ? w.displayName || w.name || "Unknown" : w
      ), c(
        w,
        re,
        V,
        i(),
        de,
        _e
      );
    }
    function h(w) {
      _(w) ? w._store && (w._store.validated = 1) : typeof w == "object" && w !== null && w.$$typeof === D && (w._payload.status === "fulfilled" ? _(w._payload.value) && w._payload.value._store && (w._payload.value._store.validated = 1) : w._store && (w._store.validated = 1));
    }
    function _(w) {
      return typeof w == "object" && w !== null && w.$$typeof === g;
    }
    var l = Vr, g = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), E = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), X = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, q = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(w) {
        return w();
      }
    };
    var z, A = {}, I = l.react_stack_bottom_frame.bind(
      l,
      n
    )(), W = U(r(n)), H = {};
    Dr.Fragment = m, Dr.jsx = function(w, M, V) {
      var B = 1e4 > X.recentlyCreatedOwnerStacks++;
      return d(
        w,
        M,
        V,
        !1,
        B ? Error("react-stack-top-frame") : I,
        B ? U(r(w)) : W
      );
    }, Dr.jsxs = function(w, M, V) {
      var B = 1e4 > X.recentlyCreatedOwnerStacks++;
      return d(
        w,
        M,
        V,
        !0,
        B ? Error("react-stack-top-frame") : I,
        B ? U(r(w)) : W
      );
    };
  }()), Dr;
}
process.env.NODE_ENV === "production" ? Hi.exports = ea() : Hi.exports = ta();
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
  displace: u = 0.5,
  backgroundOpacity: c = 0.1,
  saturation: d = 1,
  distortionScale: h = -180,
  redOffset: _ = 0,
  greenOffset: l = 2,
  blueOffset: g = 2,
  xChannel: f = "R",
  yChannel: m = "G",
  mixBlendMode: b = "difference",
  hugWidth: y = !1,
  className: S = "",
  style: E = {}
}) => {
  const x = Zo(), R = `glass-filter-${x}`, k = `red-grad-${x}`, T = `blue-grad-${x}`, D = te(null), C = te(null), O = te(null), X = te(null), $ = te(null), q = te(null), U = gr(() => {
    var B;
    const W = (B = D.current) == null ? void 0 : B.getBoundingClientRect();
    if (!W || W.width === 0 || W.height === 0)
      return;
    const H = W.width, w = W.height, M = Math.min(H, w) * (i * 0.5), V = `
      <svg viewBox="0 0 ${H} ${w}" xmlns="http://www.w3.org/2000/svg">
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
        <rect x="0" y="0" width="${H}" height="${w}" fill="black"></rect>
        <rect x="0" y="0" width="${H}" height="${w}" rx="${r}" fill="url(#${k})" />
        <rect x="0" y="0" width="${H}" height="${w}" rx="${r}" fill="url(#${T})" style="mix-blend-mode: ${b}" />
        <rect x="${M}" y="${M}" width="${H - M * 2}" height="${w - M * 2}" rx="${r}" fill="hsl(0 0% ${n}% / ${s})" style="filter:blur(${o}px)" />
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
    k,
    T
  ]), z = gr(() => {
    if (!C.current) return;
    const W = U();
    W && C.current.setAttribute("href", W);
  }, [U]);
  Q(() => {
    const W = requestAnimationFrame(() => {
      var H;
      z(), [
        { ref: O, offset: _ },
        { ref: X, offset: l },
        { ref: $, offset: g }
      ].forEach(({ ref: w, offset: M }) => {
        w.current && (w.current.setAttribute(
          "scale",
          (h + M).toString()
        ), w.current.setAttribute("xChannelSelector", f), w.current.setAttribute("yChannelSelector", m));
      }), (H = q.current) == null || H.setAttribute(
        "stdDeviation",
        u.toString()
      );
    });
    return () => cancelAnimationFrame(W);
  }, [
    z,
    u,
    h,
    _,
    l,
    g,
    f,
    m
  ]), Q(() => {
    if (!D.current) return;
    let W = null, H = null;
    const w = () => {
      H !== null && clearTimeout(H), H = setTimeout(() => {
        W !== null && cancelAnimationFrame(W), W = requestAnimationFrame(() => {
          z(), W = null;
        });
      }, 100);
    }, M = new ResizeObserver(w);
    return M.observe(D.current), () => {
      H !== null && clearTimeout(H), W !== null && cancelAnimationFrame(W), M.disconnect();
    };
  }, [z]), Q(() => {
    const W = requestAnimationFrame(() => {
      z();
    });
    return () => cancelAnimationFrame(W);
  }, [e, t]);
  const A = () => {
    const W = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent), H = /Firefox/.test(navigator.userAgent);
    if (W || H)
      return !1;
    const w = document.createElement("div");
    return w.style.backdropFilter = `url(#${R})`, w.style.backdropFilter !== "";
  }, I = {
    ...E,
    width: y ? "auto" : typeof e == "number" ? `${e}px` : e,
    height: typeof t == "number" ? `${t}px` : t,
    borderRadius: `${r}px`,
    display: y ? "inline-flex" : "flex",
    "--glass-frost": c,
    "--glass-saturation": d,
    "--filter-id": `url(#${R})`,
    border: `1px solid rgba(255, 255, 255, ${i})`
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      ref: D,
      className: `glass-surface ${A() ? "glass-surface--svg" : "glass-surface--fallback"} ${y ? "glass-surface--hug-width" : ""} ${S}`,
      style: I,
      children: [
        /* @__PURE__ */ p.jsx("svg", { className: "glass-surface__filter", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ p.jsx("defs", { children: /* @__PURE__ */ p.jsxs(
          "filter",
          {
            id: R,
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
                  ref: X,
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
                  ref: q,
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
}, rc = ({
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
), ic = ({
  label: a,
  placeholder: e,
  value: t,
  defaultValue: r,
  type: i = "text",
  disabled: n = !1,
  required: s = !1,
  variant: o = "default",
  error: u,
  helperText: c,
  onChange: d,
  onBlur: h,
  onFocus: _,
  name: l,
  id: g,
  width: f
}) => {
  const m = g || `input-${Math.random().toString(36).substr(2, 9)}`, b = o === "error" || !!u, y = u || c;
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
        "aria-describedby": y ? `${m}-helper` : void 0
      }
    ) }),
    y && /* @__PURE__ */ p.jsx(
      "span",
      {
        id: `${m}-helper`,
        className: `input-helper ${b ? "error" : ""}`,
        children: y
      }
    )
  ] });
}, nc = ({
  label: a,
  placeholder: e,
  value: t,
  defaultValue: r,
  rows: i = 4,
  disabled: n = !1,
  required: s = !1,
  resizable: o = !0,
  maxLength: u,
  variant: c = "default",
  error: d,
  helperText: h,
  onChange: _,
  onBlur: l,
  onFocus: g,
  name: f,
  id: m,
  width: b
}) => {
  const y = m || `textarea-${Math.random().toString(36).substr(2, 9)}`, S = c === "error" || !!d, E = d || h, x = (t == null ? void 0 : t.length) || 0;
  return /* @__PURE__ */ p.jsxs("div", { className: "textarea-wrapper", children: [
    a && /* @__PURE__ */ p.jsxs("label", { htmlFor: y, className: "textarea-label", children: [
      a,
      s && /* @__PURE__ */ p.jsx("span", { className: "textarea-required", children: "*" })
    ] }),
    /* @__PURE__ */ p.jsx(ye, { hugWidth: !b, width: b, height: 100, children: /* @__PURE__ */ p.jsx(
      "textarea",
      {
        id: y,
        name: f,
        value: t,
        defaultValue: r,
        placeholder: e,
        rows: i,
        disabled: n,
        required: s,
        maxLength: u,
        className: `textarea ${c} ${S ? "error" : ""} ${n ? "disabled" : ""} ${o ? "" : "no-resize"}`,
        onChange: _,
        onBlur: l,
        onFocus: g,
        "aria-invalid": S,
        "aria-describedby": E || u ? `${y}-helper` : void 0
      }
    ) }),
    (E || u) && /* @__PURE__ */ p.jsxs("div", { className: "textarea-footer", children: [
      E && /* @__PURE__ */ p.jsx(
        "span",
        {
          id: `${y}-helper`,
          className: `textarea-helper ${S ? "error" : ""}`,
          children: E
        }
      ),
      u && /* @__PURE__ */ p.jsxs("span", { className: "textarea-counter", children: [
        x,
        " / ",
        u
      ] })
    ] })
  ] });
}, sc = ({
  label: a,
  checked: e,
  defaultChecked: t,
  disabled: r = !1,
  required: i = !1,
  indeterminate: n = !1,
  onChange: s,
  name: o,
  id: u,
  value: c
}) => {
  const d = u || `checkbox-${Math.random().toString(36).substr(2, 9)}`, h = Vr.useRef(null), _ = te(null), [l, g] = Se(!1);
  return Vr.useEffect(() => {
    h.current && (h.current.indeterminate = n);
  }, [n]), Q(() => {
    const f = _.current;
    if (!f || r) return;
    const m = () => {
      g(!0);
    }, b = () => {
      setTimeout(() => g(!1), 150);
    }, y = () => {
      g(!1);
    };
    return f.addEventListener("mousedown", m), f.addEventListener("mouseup", b), f.addEventListener("mouseleave", y), () => {
      f.removeEventListener("mousedown", m), f.removeEventListener("mouseup", b), f.removeEventListener("mouseleave", y);
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
                  value: c,
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
}, oc = ({
  label: a,
  checked: e,
  defaultChecked: t,
  disabled: r = !1,
  required: i = !1,
  onChange: n,
  name: s,
  id: o,
  value: u
}) => {
  const c = o || `radio-${Math.random().toString(36).substr(2, 9)}`;
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
            id: c,
            type: "radio",
            name: s,
            value: u,
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
        htmlFor: c,
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
function Ds(a, e) {
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
}, mr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, yn, Re, ue, tt = 1e8, ce = 1 / tt, Ki = Math.PI * 2, ra = Ki / 4, ia = 0, Ns = Math.sqrt, na = Math.cos, sa = Math.sin, Ee = function(e) {
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
  return pe(e) || Ee(e);
}, Ms = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Me = Array.isArray, Qi = /(?:-?\.?\d|\.)+/gi, js = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ji = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Os = /[+-]=-?[.\d]+/, $s = /[^,'"\[\]\s]+/gi, oa = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, fe, ht, Zi, wn, qe = {}, pi = {}, As, Ls = function(e) {
  return (pi = xr(e, qe)) && Fe;
}, Tn = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Wr = function(e, t) {
  return !t && console.warn(e);
}, Is = function(e, t) {
  return e && (qe[e] = t) && pi && (pi[e] = t) || qe;
}, Ur = function() {
  return 0;
}, aa = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, li = {
  suppressEvents: !0,
  kill: !1
}, la = {
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
}, ca = function(e, t) {
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
  $t.length && !Re && _i(), e.render(t, r, !!(Re && t < 0 && Pn(e))), $t.length && !Re && _i();
}, zs = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match($s).length < 2 ? t : Ee(e) ? e.trim() : e;
}, Ys = function(e) {
  return e;
}, He = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, ua = function(e) {
  return function(t, r) {
    for (var i in r)
      i in t || i === "duration" && e || i === "ease" || (t[i] = r[i]);
  };
}, xr = function(e, t) {
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
}, Fr = function(e) {
  var t = e.parent || fe, r = e.keyframes ? ua(Me(e.keyframes)) : He;
  if ($e(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, da = function(e, t) {
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
}, fa = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, en = function(e, t, r, i) {
  return e._startAt && (Re ? e._startAt.revert(li) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, ha = function a(e) {
  return !e || e._ts && a(e.parent);
}, Jn = function(e) {
  return e._repeat ? yr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, yr = function(e, t) {
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
  if (Rn(e, t, n), !e._initted)
    return 1;
  if (!r && e._pt && !Re && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Fs !== Ye.frame)
    return $t.push(e), e._lazy = [n, i], 1;
}, pa = function a(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || a(t));
}, tn = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, _a = function(e, t, r, i) {
  var n = e.ratio, s = t < 0 || !t && (!e._start && pa(e) && !(!e._initted && tn(e)) || (e._ts < 0 || e._dp._ts < 0) && !tn(e)) ? 0 : 1, o = e._rDelay, u = 0, c, d, h;
  if (o && e._repeat && (u = ti(0, e._tDur, t), d = yr(u, o), e._yoyo && d & 1 && (s = 1 - s), d !== yr(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Re || i || e._zTime === ce || !t && e._zTime) {
    if (!e._initted && Us(e, t, i, r, u))
      return;
    for (h = e._zTime, e._zTime = t || (r ? ce : 0), r || (r = t && !h), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = u, c = e._pt; c; )
      c.r(s, c.d), c = c._next;
    t < 0 && en(e, t, r, !0), e._onUpdate && !r && Ve(e, "onUpdate"), u && e._repeat && !r && e.parent && Ve(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Lt(e, 1), !r && !Re && (Ve(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, ga = function(e, t, r) {
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
}, vr = function(e, t, r, i) {
  var n = e._repeat, s = Te(t) || 0, o = e._tTime / e._tDur;
  return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : Te(s * (n + 1) + e._rDelay * n) : s, o > 0 && !i && Si(e, e._tTime = e._tDur * o), e.parent && ki(e), r || Qt(e.parent, e), e;
}, es = function(e) {
  return e instanceof je ? Qt(e) : vr(e, e._dur);
}, ma = {
  _start: 0,
  endTime: Ur,
  totalDuration: Ur
}, et = function a(e, t, r) {
  var i = e.labels, n = e._recent || ma, s = e.duration() >= tt ? n.endTime(!1) : e._dur, o, u, c;
  return Ee(t) && (isNaN(t) || t in i) ? (u = t.charAt(0), c = t.substr(-1) === "%", o = t.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (o < 0 ? n : r).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = s), i[t]) : (u = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), c && r && (u = u / 100 * (Me(r) ? r[0] : r).totalDuration()), o > 1 ? a(e, t.substr(0, o - 1), r) + u : s + u)) : t == null ? s : +t;
}, Br = function(e, t, r) {
  var i = kt(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = t[n], o, u;
  if (i && (s.duration = t[1]), s.parent = r, e) {
    for (o = s, u = r; u && !("immediateRender" in o); )
      o = u.vars.defaults || {}, u = $e(u.vars.inherit) && u.parent;
    s.immediateRender = $e(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1];
  }
  return new we(t[0], s, t[n + 1]);
}, Ft = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, ti = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, Ne = function(e, t) {
  return !Ee(e) || !(t = oa.exec(e)) ? "" : t[1];
}, xa = function(e, t, r) {
  return Ft(r, function(i) {
    return ti(e, t, i);
  });
}, rn = [].slice, qs = function(e, t) {
  return e && gt(e) && "length" in e && (!t && !e.length || e.length - 1 in e && gt(e[0])) && !e.nodeType && e !== ht;
}, ya = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var n;
    return Ee(i) && !t || qs(i, 1) ? (n = r).push.apply(n, rt(i)) : r.push(i);
  }) || r;
}, rt = function(e, t, r) {
  return ue && !t && ue.selector ? ue.selector(e) : Ee(e) && !r && (Zi || !br()) ? rn.call((t || wn).querySelectorAll(e), 0) : Me(e) ? ya(e, r) : qs(e) ? rn.call(e, 0) : e ? [e] : [];
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
  }, r = Zt(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, s = {}, o = i > 0 && i < 1, u = isNaN(i) || o, c = t.axis, d = i, h = i;
  return Ee(i) ? d = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && u && (d = i[0], h = i[1]), function(_, l, g) {
    var f = (g || t).length, m = s[f], b, y, S, E, x, R, k, T, D;
    if (!m) {
      if (D = t.grid === "auto" ? 0 : (t.grid || [1, tt])[1], !D) {
        for (k = -tt; k < (k = g[D++].getBoundingClientRect().left) && D < f; )
          ;
        D < f && D--;
      }
      for (m = s[f] = [], b = u ? Math.min(D, f) * d - 0.5 : i % D, y = D === tt ? 0 : u ? f * h / D - 0.5 : i / D | 0, k = 0, T = tt, R = 0; R < f; R++)
        S = R % D - b, E = y - (R / D | 0), m[R] = x = c ? Math.abs(c === "y" ? E : S) : Ns(S * S + E * E), x > k && (k = x), x < T && (T = x);
      i === "random" && Hs(m), m.max = k - T, m.min = T, m.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (D > f ? f - 1 : c ? c === "y" ? f / D : D : Math.max(D, f / D)) || 0) * (i === "edges" ? -1 : 1), m.b = f < 0 ? n - f : n, m.u = Ne(t.amount || t.each) || 0, r = r && f < 0 ? oo(r) : r;
    }
    return f = (m[_] - m.min) / m.max || 0, Te(m.b + (r ? r(f) : f) * m.v) + m.u;
  };
}, sn = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = Te(Math.round(parseFloat(r) / e) * e * t);
    return (i - i % 1) / t + (kt(r) ? 0 : Ne(r));
  };
}, Qs = function(e, t) {
  var r = Me(e), i, n;
  return !r && gt(e) && (i = r = e.radius || tt, e.values ? (e = rt(e.values), (n = !kt(e[0])) && (i *= i)) : e = sn(e.increment)), Ft(t, r ? pe(e) ? function(s) {
    return n = e(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), c = tt, d = 0, h = e.length, _, l; h--; )
      n ? (_ = e[h].x - o, l = e[h].y - u, _ = _ * _ + l * l) : _ = Math.abs(e[h] - o), _ < c && (c = _, d = h);
    return d = !i || c <= i ? e[d] : s, n || d === s || kt(s) ? d : d + Ne(s);
  } : sn(e));
}, Zs = function(e, t, r, i) {
  return Ft(Me(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
    return Me(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * i) / i;
  });
}, va = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    return t.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, ba = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || Ne(r));
  };
}, wa = function(e, t, r) {
  return eo(e, t, 0, 1, r);
}, Js = function(e, t, r) {
  return Ft(r, function(i) {
    return e[~~t(i)];
  });
}, Ta = function a(e, t, r) {
  var i = t - e;
  return Me(e) ? Js(e, a(0, e.length), t) : Ft(r, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, ka = function a(e, t, r) {
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
  return Ft(n, function(u) {
    return r + ((u - e) / s * o || 0);
  });
}, Sa = function a(e, t, r, i) {
  var n = isNaN(e + t) ? 0 : function(l) {
    return (1 - l) * e + l * t;
  };
  if (!n) {
    var s = Ee(e), o = {}, u, c, d, h, _;
    if (r === !0 && (i = 1) && (r = null), s)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Me(e) && !Me(t)) {
      for (d = [], h = e.length, _ = h - 2, c = 1; c < h; c++)
        d.push(a(e[c - 1], e[c]));
      h--, n = function(g) {
        g *= h;
        var f = Math.min(_, ~~g);
        return d[f](g - f);
      }, r = t;
    } else i || (e = xr(Me(e) ? [] : {}, e));
    if (!d) {
      for (u in t)
        Cn.call(o, e, u, "get", t[u]);
      n = function(g) {
        return Mn(g, o) || (s ? e.p : e);
      };
    }
  }
  return Ft(r, n);
}, ts = function(e, t, r) {
  var i = e.labels, n = tt, s, o, u;
  for (s in i)
    o = i[s] - t, o < 0 == !!r && o && n > (o = Math.abs(o)) && (u = s, n = o);
  return u;
}, Ve = function(e, t, r) {
  var i = e.vars, n = i[t], s = ue, o = e._ctx, u, c, d;
  if (n)
    return u = i[t + "Params"], c = i.callbackScope || e, r && $t.length && _i(), o && (ue = o), d = u ? n.apply(c, u) : n.call(c), ue = s, d;
}, jr = function(e) {
  return Lt(e), e.scrollTrigger && e.scrollTrigger.kill(!!Re), e.progress() < 1 && Ve(e, "onInterrupt"), e;
}, cr, to = [], ro = function(e) {
  if (e)
    if (e = !e.name && e.default || e, bn() || e.headless) {
      var t = e.name, r = pe(e), i = t && !r && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: Ur,
        render: Mn,
        add: Cn,
        kill: Xa,
        modifier: Ba,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: Nn,
        aliases: {},
        register: 0
      };
      if (br(), e !== i) {
        if (ze[t])
          return;
        He(i, He(gi(e, n), s)), xr(i.prototype, xr(n, gi(e, s))), ze[i.prop = t] = i, e.targetTest && (ci.push(i), kn[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Is(t, i), e.register && e.register(Fe, i, Le);
    } else
      to.push(e);
}, ae = 255, Or = {
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
  var i = e ? kt(e) ? [e >> 16, e >> 8 & ae, e & ae] : 0 : Or.black, n, s, o, u, c, d, h, _, l, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Or[e])
      i = Or[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & ae, i & ae, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & ae, e & ae];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(Qi), !t)
        u = +i[0] % 360 / 360, c = +i[1] / 100, d = +i[2] / 100, s = d <= 0.5 ? d * (c + 1) : d + c - d * c, n = d * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = $i(u + 1 / 3, n, s), i[1] = $i(u, n, s), i[2] = $i(u - 1 / 3, n, s);
      else if (~e.indexOf("="))
        return i = e.match(js), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Qi) || Or.transparent;
    i = i.map(Number);
  }
  return t && !g && (n = i[0] / ae, s = i[1] / ae, o = i[2] / ae, h = Math.max(n, s, o), _ = Math.min(n, s, o), d = (h + _) / 2, h === _ ? u = c = 0 : (l = h - _, c = d > 0.5 ? l / (2 - h - _) : l / (h + _), u = h === n ? (s - o) / l + (s < o ? 6 : 0) : h === s ? (o - n) / l + 2 : (n - s) / l + 4, u *= 60), i[0] = ~~(u + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(d * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, no = function(e) {
  var t = [], r = [], i = -1;
  return e.split(At).forEach(function(n) {
    var s = n.match(lr) || [];
    t.push.apply(t, s), r.push(i += s.length + 1);
  }), t.c = r, t;
}, rs = function(e, t, r) {
  var i = "", n = (e + i).match(At), s = t ? "hsla(" : "rgba(", o = 0, u, c, d, h;
  if (!n)
    return e;
  if (n = n.map(function(_) {
    return (_ = io(_, t, 1)) && s + (t ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), r && (d = no(e), u = r.c, u.join(i) !== d.c.join(i)))
    for (c = e.replace(At, "1").split(lr), h = c.length - 1; o < h; o++)
      i += c[o] + (~u.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (d.length ? d : n.length ? n : r).shift());
  if (!c)
    for (c = e.split(At), h = c.length - 1; o < h; o++)
      i += c[o] + n[o];
  return i + c[h];
}, At = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Or)
    a += "|" + e + "\\b";
  return new RegExp(a + ")", "gi");
}(), Ea = /hsl[a]?\(/, so = function(e) {
  var t = e.join(" "), r;
  if (At.lastIndex = 0, At.test(t))
    return r = Ea.test(t), e[1] = rs(e[1], r), e[0] = rs(e[0], r, no(e[1])), !0;
}, Hr, Ye = function() {
  var a = Date.now, e = 500, t = 33, r = a(), i = r, n = 1e3 / 240, s = n, o = [], u, c, d, h, _, l, g = function f(m) {
    var b = a() - i, y = m === !0, S, E, x, R;
    if ((b > e || b < 0) && (r += b - t), i += b, x = i - r, S = x - s, (S > 0 || y) && (R = ++h.frame, _ = x - h.time * 1e3, h.time = x = x / 1e3, s += S + (S >= n ? 4 : n - S), E = 1), y || (u = c(f)), E)
      for (l = 0; l < o.length; l++)
        o[l](x, _, R, m);
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
      As && (!Zi && bn() && (ht = Zi = window, wn = ht.document || {}, qe.gsap = Fe, (ht.gsapVersions || (ht.gsapVersions = [])).push(Fe.version), Ls(pi || ht.GreenSockGlobals || !ht.gsap && ht || {}), to.forEach(ro)), d = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && h.sleep(), c = d || function(m) {
        return setTimeout(m, s - h.time * 1e3 + 1 | 0);
      }, Hr = 1, g(2));
    },
    sleep: function() {
      (d ? cancelAnimationFrame : clearTimeout)(u), Hr = 0, c = Ur;
    },
    lagSmoothing: function(m, b) {
      e = m || 1 / 0, t = Math.min(b || 33, e);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = h.time * 1e3 + n;
    },
    add: function(m, b, y) {
      var S = b ? function(E, x, R, k) {
        m(E, x, R, k), h.remove(S);
      } : m;
      return h.remove(m), o[y ? "unshift" : "push"](S), br(), S;
    },
    remove: function(m, b) {
      ~(b = o.indexOf(m)) && o.splice(b, 1) && l >= b && l--;
    },
    _listeners: o
  }, h;
}(), br = function() {
  return !Hr && Ye.wake();
}, J = {}, Pa = /^[\d.\-M][\d.\-,\s]/, Ca = /["']/g, Ra = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, o, u, c; n < s; n++)
    u = r[n], o = n !== s - 1 ? u.lastIndexOf(",") : u.length, c = u.substr(0, o), t[i] = isNaN(c) ? c.replace(Ca, "").trim() : +c, i = u.substr(o + 1).trim();
  return t;
}, Da = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, Na = function(e) {
  var t = (e + "").split("("), r = J[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Ra(t[1])] : Da(e).split(",").map(zs)) : J._CE && Pa.test(e) ? J._CE("", e) : r;
}, oo = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, ao = function a(e, t) {
  for (var r = e._first, i; r; )
    r instanceof je ? a(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? a(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next;
}, Zt = function(e, t) {
  return e && (pe(e) ? e : J[e] || Na(e)) || t;
}, nr = function(e, t, r, i) {
  r === void 0 && (r = function(u) {
    return 1 - t(1 - u);
  }), i === void 0 && (i = function(u) {
    return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
  });
  var n = {
    easeIn: t,
    easeOut: r,
    easeInOut: i
  }, s;
  return Ae(e, function(o) {
    J[o] = qe[o] = n, J[s = o.toLowerCase()] = r;
    for (var u in n)
      J[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = J[o + "." + u] = n[u];
  }), n;
}, lo = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Ai = function a(e, t, r) {
  var i = t >= 1 ? t : 1, n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), s = n / Ki * (Math.asin(1 / i) || 0), o = function(d) {
    return d === 1 ? 1 : i * Math.pow(2, -10 * d) * sa((d - s) * n) + 1;
  }, u = e === "out" ? o : e === "in" ? function(c) {
    return 1 - o(1 - c);
  } : lo(o);
  return n = Ki / n, u.config = function(c, d) {
    return a(e, c, d);
  }, u;
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
  return -(Ns(1 - a * a) - 1);
});
nr("Sine", function(a) {
  return a === 1 ? 1 : -na(a * ra) + 1;
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
mr.ease = J["quad.out"];
Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return Sn += a + "," + a + "Params,";
});
var co = function(e, t) {
  this.id = ia++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Bs, this.set = t ? t.getSetter : Nn;
}, Kr = /* @__PURE__ */ function() {
  function a(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, vr(this, +t.duration, 1, 1), this.data = t.data, ue && (this._ctx = ue, ue.data.push(this)), Hr || Ye.wake();
  }
  var e = a.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, vr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (br(), !arguments.length)
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
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? yr(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -ce ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? mi(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -ce ? 0 : this._rts, this.totalTime(ti(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), ki(this), fa(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (br(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ce && (this._tTime -= ce)))), this) : this._ps;
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
    r === void 0 && (r = la);
    var i = Re;
    return Re = r, Pn(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Re = i, this;
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
        var c = i.then;
        i.then = null, pe(s) && (s = s(i)) && (s.then || s === i) && (i.then = c), n(s), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, e.kill = function() {
    jr(this);
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
  Ds(e, a);
  function e(r, i) {
    var n;
    return r === void 0 && (r = {}), n = a.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = $e(r.sortChildren), fe && pt(r.parent || fe, yt(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Ws(yt(n), r.scrollTrigger), n;
  }
  var t = e.prototype;
  return t.to = function(i, n, s) {
    return Br(0, arguments, this), this;
  }, t.from = function(i, n, s) {
    return Br(1, arguments, this), this;
  }, t.fromTo = function(i, n, s, o) {
    return Br(2, arguments, this), this;
  }, t.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, Fr(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new we(i, n, et(this, s), 1), this;
  }, t.call = function(i, n, s) {
    return pt(this, we.delayedCall(0, i, n), s);
  }, t.staggerTo = function(i, n, s, o, u, c, d) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = c, s.onCompleteParams = d, s.parent = this, new we(i, s, et(this, u)), this;
  }, t.staggerFrom = function(i, n, s, o, u, c, d) {
    return s.runBackwards = 1, Fr(s).immediateRender = $e(s.immediateRender), this.staggerTo(i, n, s, o, u, c, d);
  }, t.staggerFromTo = function(i, n, s, o, u, c, d, h) {
    return o.startAt = s, Fr(o).immediateRender = $e(o.immediateRender), this.staggerTo(i, n, o, u, c, d, h);
  }, t.render = function(i, n, s) {
    var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, d = i <= 0 ? 0 : Te(i), h = this._zTime < 0 != i < 0 && (this._initted || !c), _, l, g, f, m, b, y, S, E, x, R, k;
    if (this !== fe && d > u && i >= 0 && (d = u), d !== this._tTime || s || h) {
      if (o !== this._time && c && (d += this._time - o, i += this._time - o), _ = d, E = this._start, S = this._ts, b = !S, h && (c || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (R = this._yoyo, m = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, s);
        if (_ = Te(d % m), d === u ? (f = this._repeat, _ = c) : (x = Te(d / m), f = ~~x, f && f === x && (_ = c, f--), _ > c && (_ = c)), x = yr(this._tTime, m), !o && this._tTime && x !== f && this._tTime - x * m - this._dur <= 0 && (x = f), R && f & 1 && (_ = c - _, k = 1), f !== x && !this._lock) {
          var T = R && x & 1, D = T === (R && f & 1);
          if (f < x && (T = !T), o = T ? 0 : d % c ? c : d, this._lock = 1, this.render(o || (k ? 0 : Te(f * m)), n, !c)._lock = 0, this._tTime = d, !n && this.parent && Ve(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), o && o !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, u = this._tDur, D && (this._lock = 2, o = T ? c : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
          ao(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = ga(this, Te(o), Te(_)), y && (d -= _ - (_ = y._start))), this._tTime = d, this._time = _, this._act = !S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && d && !n && !x && (Ve(this, "onStart"), this._tTime !== d))
        return this;
      if (_ >= o && i >= 0)
        for (l = this._first; l; ) {
          if (g = l._next, (l._act || _ >= l._start) && l._ts && y !== l) {
            if (l.parent !== this)
              return this.render(i, n, s);
            if (l.render(l._ts > 0 ? (_ - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (_ - l._start) * l._ts, n, s), _ !== this._time || !this._ts && !b) {
              y = 0, g && (d += this._zTime = -ce);
              break;
            }
          }
          l = g;
        }
      else {
        l = this._last;
        for (var C = i < 0 ? i : _; l; ) {
          if (g = l._prev, (l._act || C <= l._end) && l._ts && y !== l) {
            if (l.parent !== this)
              return this.render(i, n, s);
            if (l.render(l._ts > 0 ? (C - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (C - l._start) * l._ts, n, s || Re && Pn(l)), _ !== this._time || !this._ts && !b) {
              y = 0, g && (d += this._zTime = C ? -ce : ce);
              break;
            }
          }
          l = g;
        }
      }
      if (y && !n && (this.pause(), y.render(_ >= o ? 0 : -ce)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = E, ki(this), this.render(i, n, s);
      this._onUpdate && !n && Ve(this, "onUpdate", !0), (d === u && this._tTime >= this.totalDuration() || !d && o) && (E === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (d === u && this._ts > 0 || !d && this._ts < 0) && Lt(this, 1), !n && !(i < 0 && !o) && (d || o || !u) && (Ve(this, d === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var s = this;
    if (kt(n) || (n = et(this, n, i)), !(i instanceof Kr)) {
      if (Me(i))
        return i.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (Ee(i))
        return this.addLabel(i, n);
      if (pe(i))
        i = we.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? pt(this, i, n) : this;
  }, t.getChildren = function(i, n, s, o) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -tt);
    for (var u = [], c = this._first; c; )
      c._start >= o && (c instanceof we ? n && u.push(c) : (s && u.push(c), i && u.push.apply(u, c.getChildren(!0, n, s)))), c = c._next;
    return u;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, t.remove = function(i) {
    return Ee(i) ? this.removeLabel(i) : pe(i) ? this.killTweensOf(i) : (i.parent === this && Ti(this, i), i === this._recent && (this._recent = this._last), Qt(this));
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
    for (var o = this.getTweensOf(i, s), u = o.length; u--; )
      Nt !== o[u] && o[u].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var s = [], o = rt(i), u = this._first, c = kt(n), d; u; )
      u instanceof we ? ca(u._targets, o) && (c ? (!Nt || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (d = u.getTweensOf(o, n)).length && s.push.apply(s, d), u = u._next;
    return s;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var s = this, o = et(s, i), u = n, c = u.startAt, d = u.onStart, h = u.onStartParams, _ = u.immediateRender, l, g = we.to(s, He({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (c && "time" in c ? c.time : s._time)) / s.timeScale()) || ce,
      onStart: function() {
        if (s.pause(), !l) {
          var m = n.duration || Math.abs((o - (c && "time" in c ? c.time : s._time)) / s.timeScale());
          g._dur !== m && vr(g, m, 0, 1).render(g._time, !0, !0), l = 1;
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
    for (var o = this._first, u = this.labels, c; o; )
      o._start >= s && (o._start += i, o._end += i), o = o._next;
    if (n)
      for (c in u)
        u[c] >= s && (u[c] += i);
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
    var n = 0, s = this, o = s._last, u = tt, c, d, h;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (h = s.parent; o; )
        c = o._prev, o._dirty && o.totalDuration(), d = o._start, d > u && s._sort && o._ts && !s._lock ? (s._lock = 1, pt(s, o, d - o._delay, 1)._lock = 0) : u = d, d < 0 && o._ts && (n -= d, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += d / s._ts, s._time -= d, s._tTime -= d), s.shiftChildren(-d, !1, -1 / 0), u = 0), o._end > n && o._ts && (n = o._end), o = c;
      vr(s, s === fe && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
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
  var u = new Le(this._pt, e, t, 0, 1, go, null, n), c = 0, d = 0, h, _, l, g, f, m, b, y;
  for (u.b = r, u.e = i, r += "", i += "", (b = ~i.indexOf("random(")) && (i = qr(i)), s && (y = [r, i], s(y, e, t), r = y[0], i = y[1]), _ = r.match(ji) || []; h = ji.exec(i); )
    g = h[0], f = i.substring(c, h.index), l ? l = (l + 1) % 5 : f.substr(-5) === "rgba(" && (l = 1), g !== _[d++] && (m = parseFloat(_[d - 1]) || 0, u._pt = {
      _next: u._pt,
      p: f || d === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: g.charAt(1) === "=" ? ur(m, g) - m : parseFloat(g) - m,
      m: l && l < 4 ? Math.round : 0
    }, c = ji.lastIndex);
  return u.c = c < i.length ? i.substring(c, i.length) : "", u.fp = o, (Os.test(i) || b) && (u.e = 0), this._pt = u, u;
}, Cn = function(e, t, r, i, n, s, o, u, c, d) {
  pe(i) && (i = i(n || 0, e, s));
  var h = e[t], _ = r !== "get" ? r : pe(h) ? c ? e[t.indexOf("set") || !pe(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : h, l = pe(h) ? c ? La : po : Dn, g;
  if (Ee(i) && (~i.indexOf("random(") && (i = qr(i)), i.charAt(1) === "=" && (g = ur(_, i) + (Ne(_) || 0), (g || g === 0) && (i = g))), !d || _ !== i || on)
    return !isNaN(_ * i) && i !== "" ? (g = new Le(this._pt, e, t, +_ || 0, i - (_ || 0), typeof h == "boolean" ? Fa : _o, 0, l), c && (g.fp = c), o && g.modifier(o, this, e), this._pt = g) : (!h && !(t in e) && Tn(t, i), Ma.call(this, e, t, _, i, l, u || We.stringFilter, c));
}, ja = function(e, t, r, i, n) {
  if (pe(e) && (e = Xr(e, n, t, r, i)), !gt(e) || e.style && e.nodeType || Me(e) || Ms(e))
    return Ee(e) ? Xr(e, n, t, r, i) : e;
  var s = {}, o;
  for (o in e)
    s[o] = Xr(e[o], n, t, r, i);
  return s;
}, uo = function(e, t, r, i, n, s) {
  var o, u, c, d;
  if (ze[e] && (o = new ze[e]()).init(n, o.rawVars ? t[e] : ja(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = u = new Le(r._pt, n, e, 0, 1, o.render, o, 0, o.priority), r !== cr))
    for (c = r._ptLookup[r._targets.indexOf(n)], d = o._props.length; d--; )
      c[o._props[d]] = u;
  return o;
}, Nt, on, Rn = function a(e, t, r) {
  var i = e.vars, n = i.ease, s = i.startAt, o = i.immediateRender, u = i.lazy, c = i.onUpdate, d = i.runBackwards, h = i.yoyoEase, _ = i.keyframes, l = i.autoRevert, g = e._dur, f = e._startAt, m = e._targets, b = e.parent, y = b && b.data === "nested" ? b.vars.targets : m, S = e._overwrite === "auto" && !yn, E = e.timeline, x, R, k, T, D, C, O, X, $, q, U, z, A;
  if (E && (!_ || !n) && (n = "none"), e._ease = Zt(n, mr.ease), e._yEase = h ? oo(Zt(h === !0 ? n : h, mr.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !E && !!i.runBackwards, !E || _ && !i.stagger) {
    if (X = m[0] ? Kt(m[0]).harness : 0, z = X && i[X.prop], x = gi(i, kn), f && (f._zTime < 0 && f.progress(1), t < 0 && d && o && !l ? f.render(-1, !0) : f.revert(d && g ? li : aa), f._lazy = 0), s) {
      if (Lt(e._startAt = we.set(m, He({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !f && $e(u),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return Ve(e, "onUpdate");
        },
        stagger: 0
      }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Re || !o && !l) && e._startAt.revert(li), o && g && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (d && g && !f) {
      if (t && (o = !1), k = He({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !f && $e(u),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, x), z && (k[X.prop] = z), Lt(e._startAt = we.set(m, k)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Re ? e._startAt.revert(li) : e._startAt.render(-1, !0)), e._zTime = t, !o)
        a(e._startAt, ce, ce);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, u = g && $e(u) || u && !g, R = 0; R < m.length; R++) {
      if (D = m[R], O = D._gsap || En(m)[R]._gsap, e._ptLookup[R] = q = {}, Ji[O.id] && $t.length && _i(), U = y === m ? R : y.indexOf(D), X && ($ = new X()).init(D, z || x, e, U, y) !== !1 && (e._pt = T = new Le(e._pt, D, $.name, 0, 1, $.render, $, 0, $.priority), $._props.forEach(function(I) {
        q[I] = T;
      }), $.priority && (C = 1)), !X || z)
        for (k in x)
          ze[k] && ($ = uo(k, x, e, U, D, y)) ? $.priority && (C = 1) : q[k] = T = Cn.call(e, D, k, "get", x[k], U, y, 0, i.stringFilter);
      e._op && e._op[R] && e.kill(D, e._op[R]), S && e._pt && (Nt = e, fe.killTweensOf(D, q, e.globalTime(t)), A = !e.parent, Nt = 0), e._pt && u && (Ji[O.id] = 1);
    }
    C && mo(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !A, _ && t <= 0 && E.render(tt, !0, !0);
}, Oa = function(e, t, r, i, n, s, o, u) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], d, h, _, l;
  if (!c)
    for (c = e._ptCache[t] = [], _ = e._ptLookup, l = e._targets.length; l--; ) {
      if (d = _[l][t], d && d.d && d.d._pt)
        for (d = d.d._pt; d && d.p !== t && d.fp !== t; )
          d = d._next;
      if (!d)
        return on = 1, e.vars[t] = "+=0", Rn(e, o), on = 0, u ? Wr(t + " not eligible for reset") : 1;
      c.push(d);
    }
  for (l = c.length; l--; )
    h = c[l], d = h._pt || h, d.s = (i || i === 0) && !n ? i : d.s + (i || 0) + s * d.c, d.c = r - d.s, h.e && (h.e = xe(r) + Ne(h.e)), h.b && (h.b = d.s + Ne(h.b));
}, $a = function(e, t) {
  var r = e[0] ? Kt(e[0]).harness : 0, i = r && r.aliases, n, s, o, u;
  if (!i)
    return t;
  n = xr({}, t);
  for (s in i)
    if (s in n)
      for (u = i[s].split(","), o = u.length; o--; )
        n[u[o]] = n[s];
  return n;
}, Aa = function(e, t, r, i) {
  var n = t.ease || i || "power1.inOut", s, o;
  if (Me(t))
    o = r[e] || (r[e] = []), t.forEach(function(u, c) {
      return o.push({
        t: c / (t.length - 1) * 100,
        v: u,
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
}, Xr = function(e, t, r, i, n) {
  return pe(e) ? e.call(t, r, i, n) : Ee(e) && ~e.indexOf("random(") ? qr(e) : e;
}, fo = Sn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ho = {};
Ae(fo + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return ho[a] = 1;
});
var we = /* @__PURE__ */ function(a) {
  Ds(e, a);
  function e(r, i, n, s) {
    var o;
    typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : Fr(i)) || this;
    var u = o.vars, c = u.duration, d = u.delay, h = u.immediateRender, _ = u.stagger, l = u.overwrite, g = u.keyframes, f = u.defaults, m = u.scrollTrigger, b = u.yoyoEase, y = i.parent || fe, S = (Me(r) || Ms(r) ? kt(r[0]) : "length" in i) ? [r] : rt(r), E, x, R, k, T, D, C, O;
    if (o._targets = S.length ? En(S) : Wr("GSAP target " + r + " not found. https://gsap.com", !We.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = l, g || _ || si(c) || si(d)) {
      if (i = o.vars, E = o.timeline = new je({
        data: "nested",
        defaults: f || {},
        targets: y && y.data === "nested" ? y.vars.targets : S
      }), E.kill(), E.parent = E._dp = yt(o), E._start = 0, _ || si(c) || si(d)) {
        if (k = S.length, C = _ && Ks(_), gt(_))
          for (T in _)
            ~fo.indexOf(T) && (O || (O = {}), O[T] = _[T]);
        for (x = 0; x < k; x++)
          R = gi(i, ho), R.stagger = 0, b && (R.yoyoEase = b), O && xr(R, O), D = S[x], R.duration = +Xr(c, yt(o), x, D, S), R.delay = (+Xr(d, yt(o), x, D, S) || 0) - o._delay, !_ && k === 1 && R.delay && (o._delay = d = R.delay, o._start += d, R.delay = 0), E.to(D, R, C ? C(x, D, S) : 0), E._ease = J.none;
        E.duration() ? c = d = 0 : o.timeline = 0;
      } else if (g) {
        Fr(He(E.vars.defaults, {
          ease: "none"
        })), E._ease = Zt(g.ease || i.ease || "none");
        var X = 0, $, q, U;
        if (Me(g))
          g.forEach(function(z) {
            return E.to(S, z, ">");
          }), E.duration();
        else {
          R = {};
          for (T in g)
            T === "ease" || T === "easeEach" || Aa(T, g[T], R, g.easeEach);
          for (T in R)
            for ($ = R[T].sort(function(z, A) {
              return z.t - A.t;
            }), X = 0, x = 0; x < $.length; x++)
              q = $[x], U = {
                ease: q.e,
                duration: (q.t - (x ? $[x - 1].t : 0)) / 100 * c
              }, U[T] = q.v, E.to(S, U, X), X += U.duration;
          E.duration() < c && E.to({}, {
            duration: c - E.duration()
          });
        }
      }
      c || o.duration(c = E.duration());
    } else
      o.timeline = 0;
    return l === !0 && !yn && (Nt = yt(o), fe.killTweensOf(S), Nt = 0), pt(y, yt(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (h || !c && !g && o._start === Te(y._time) && $e(h) && ha(yt(o)) && y.data !== "nested") && (o._tTime = -ce, o.render(Math.max(0, -d) || 0)), m && Ws(yt(o), m), o;
  }
  var t = e.prototype;
  return t.render = function(i, n, s) {
    var o = this._time, u = this._tDur, c = this._dur, d = i < 0, h = i > u - ce && !d ? u : i < ce ? 0 : i, _, l, g, f, m, b, y, S, E;
    if (!c)
      _a(this, i, n, s);
    else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d || this._lazy) {
      if (_ = h, S = this.timeline, this._repeat) {
        if (f = c + this._rDelay, this._repeat < -1 && d)
          return this.totalTime(f * 100 + i, n, s);
        if (_ = Te(h % f), h === u ? (g = this._repeat, _ = c) : (m = Te(h / f), g = ~~m, g && g === m ? (_ = c, g--) : _ > c && (_ = c)), b = this._yoyo && g & 1, b && (E = this._yEase, _ = c - _), m = yr(this._tTime, f), _ === o && !s && this._initted && g === m)
          return this._tTime = h, this;
        g !== m && (S && this._yEase && ao(S, b), this.vars.repeatRefresh && !b && !this._lock && _ !== f && this._initted && (this._lock = s = 1, this.render(Te(f * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Us(this, d ? i : _, s, n, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && g !== m))
          return this;
        if (c !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = h, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (E || this._ease)(_ / c), this._from && (this.ratio = y = 1 - y), !o && h && !n && !m && (Ve(this, "onStart"), this._tTime !== h))
        return this;
      for (l = this._pt; l; )
        l.r(y, l.d), l = l._next;
      S && S.render(i < 0 ? i : S._dur * S._ease(_ / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (d && en(this, i, n, s), Ve(this, "onUpdate")), this._repeat && g !== m && this.vars.onRepeat && !n && this.parent && Ve(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (d && !this._onUpdate && en(this, i, !0, !0), (i || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Lt(this, 1), !n && !(d && !o) && (h || o || b) && (Ve(this, h === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, s, o, u) {
    Hr || Ye.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), d;
    return this._initted || Rn(this, c), d = this._ease(c / this._dur), Oa(this, i, n, s, o, d, c, u) ? this.resetTo(i, n, s, o, 1) : (Si(this, 0), this.parent || Gs(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? jr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Re), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Nt && Nt.vars.overwrite !== !0)._first || jr(this), this.parent && s !== this.timeline.totalDuration() && vr(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, u = i ? rt(i) : o, c = this._ptLookup, d = this._pt, h, _, l, g, f, m, b;
    if ((!n || n === "all") && da(o, u))
      return n === "all" && (this._pt = 0), jr(this);
    for (h = this._op = this._op || [], n !== "all" && (Ee(n) && (f = {}, Ae(n, function(y) {
      return f[y] = 1;
    }), n = f), n = $a(o, n)), b = o.length; b--; )
      if (~u.indexOf(o[b])) {
        _ = c[b], n === "all" ? (h[b] = n, g = _, l = {}) : (l = h[b] = h[b] || {}, g = n);
        for (f in g)
          m = _ && _[f], m && ((!("kill" in m.d) || m.d.kill(f) === !0) && Ti(this, m, "_pt"), delete _[f]), l !== "all" && (l[f] = 1);
      }
    return this._initted && !this._pt && d && jr(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return Br(1, arguments);
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
    return Br(2, arguments);
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
var Dn = function(e, t, r) {
  return e[t] = r;
}, po = function(e, t, r) {
  return e[t](r);
}, La = function(e, t, r, i) {
  return e[t](i.fp, r);
}, Ia = function(e, t, r) {
  return e.setAttribute(t, r);
}, Nn = function(e, t) {
  return pe(e[t]) ? po : vn(e[t]) && e.setAttribute ? Ia : Dn;
}, _o = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Fa = function(e, t) {
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
}, Mn = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, Ba = function(e, t, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(e, t, r), n = s;
}, Xa = function(e) {
  for (var t = this._pt, r, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Ti(this, t, "_pt") : t.dep || (r = 1), t = i;
  return !r;
}, za = function(e, t, r, i) {
  i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
}, mo = function(e) {
  for (var t = e._pt, r, i, n, s; t; ) {
    for (r = t._next, i = n; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : s) ? t._prev._next = t : n = t, (t._next = i) ? i._prev = t : s = t, t = r;
  }
  e._pt = n;
}, Le = /* @__PURE__ */ function() {
  function a(t, r, i, n, s, o, u, c, d) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = o || _o, this.d = u || this, this.set = c || Dn, this.pr = d || 0, this._next = t, t && (t._prev = this);
  }
  var e = a.prototype;
  return e.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = za, this.m = r, this.mt = n, this.tween = i;
  }, a;
}();
Ae(Sn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return kn[a] = 1;
});
qe.TweenMax = qe.TweenLite = we;
qe.TimelineLite = qe.TimelineMax = je;
fe = new je({
  sortChildren: !1,
  defaults: mr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
We.stringFilter = so;
var Jt = [], ui = {}, Ya = [], is = 0, Ga = 0, Ii = function(e) {
  return (ui[e] || Ya).map(function(t) {
    return t();
  });
}, an = function() {
  var e = Date.now(), t = [];
  e - is > 2 && (Ii("matchMediaInit"), Jt.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, o, u, c;
    for (o in i)
      s = ht.matchMedia(i[o]).matches, s && (u = 1), s !== n[o] && (n[o] = s, c = 1);
    c && (r.revert(), u && t.push(r));
  }), Ii("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), is = e, Ii("matchMedia"));
}, xo = /* @__PURE__ */ function() {
  function a(t, r) {
    this.selector = r && nn(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Ga++, t && this.add(t);
  }
  var e = a.prototype;
  return e.add = function(r, i, n) {
    pe(r) && (n = i, i = r, r = pe);
    var s = this, o = function() {
      var c = ue, d = s.selector, h;
      return c && c !== s && c.data.push(s), n && (s.selector = nn(n)), ue = s, h = i.apply(s, arguments), pe(h) && s._r.push(h), ue = c, s.selector = d, s.isReverted = !1, h;
    };
    return s.last = o, r === pe ? o(s, function(u) {
      return s.add(null, u);
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
      for (var o = n.getTweens(), u = n.data.length, c; u--; )
        c = n.data[u], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(d) {
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
      }), u = n.data.length; u--; )
        c = n.data[u], c instanceof je ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof we) && c.revert && c.revert(r);
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
}(), Va = /* @__PURE__ */ function() {
  function a(t) {
    this.contexts = [], this.scope = t, ue && ue.data.push(this);
  }
  var e = a.prototype;
  return e.add = function(r, i, n) {
    gt(r) || (r = {
      matches: r
    });
    var s = new xo(0, n || this.scope), o = s.conditions = {}, u, c, d;
    ue && !s.selector && (s.selector = ue.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (c in r)
      c === "all" ? d = 1 : (u = ht.matchMedia(r[c]), u && (Jt.indexOf(s) < 0 && Jt.push(s), (o[c] = u.matches) && (d = 1), u.addListener ? u.addListener(an) : u.addEventListener("change", an)));
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
    Ee(e) && (e = rt(e)[0]);
    var n = Kt(e || {}).get, s = r ? Ys : zs;
    return r === "native" && (r = ""), e && (t ? s((ze[t] && ze[t].get || n)(e, t, r, i)) : function(o, u, c) {
      return s((ze[o] && ze[o].get || n)(e, o, u, c));
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
    var s = ze[t], o = Kt(e), u = o.harness && (o.harness.aliases || {})[t] || t, c = s ? function(d) {
      var h = new s();
      cr._pt = 0, h.init(e, r ? d + r : d, cr, 0, [e]), h.render(1, h), cr._pt && Mn(1, cr);
    } : o.set(e, u);
    return s ? c : function(d) {
      return c(e, u, r ? d + r : d, o, 1);
    };
  },
  quickTo: function(e, t, r) {
    var i, n = Fe.to(e, He((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), s = function(u, c, d) {
      return n.resetTo(t, u, c, d);
    };
    return s.tween = n, s;
  },
  isTweening: function(e) {
    return fe.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Zt(e.ease, mr.ease)), Zn(mr, e || {});
  },
  config: function(e) {
    return Zn(We, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, i = e.plugins, n = e.defaults, s = e.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !ze[o] && !qe[o] && Wr(t + " effect requires " + o + " plugin.");
    }), Oi[t] = function(o, u, c) {
      return r(rt(o), He(u || {}, n), c);
    }, s && (je.prototype[t] = function(o, u, c) {
      return this.add(Oi[t](o, gt(u) ? u : (c = u) && {}, this), c);
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
    return new Va(e);
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
    wrap: Ta,
    wrapYoyo: ka,
    distribute: Ks,
    random: Zs,
    snap: Qs,
    normalize: wa,
    getUnit: Ne,
    clamp: xa,
    splitColor: io,
    toArray: rt,
    selector: nn,
    mapRange: eo,
    pipe: va,
    unitize: ba,
    interpolate: Sa,
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
      return Re;
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
var Wa = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, Ua = function(e, t) {
  var r = e._targets, i, n, s;
  for (i in t)
    for (n = r.length; n--; )
      s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = Wa(s, i)), s && s.modifier && s.modifier(t[i], e, r[n], i));
}, Fi = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(o) {
        var u, c;
        if (Ee(n) && (u = {}, Ae(n, function(d) {
          return u[d] = 1;
        }), n = u), t) {
          u = {};
          for (c in n)
            u[c] = t(n[c]);
          n = u;
        }
        Ua(o, n);
      };
    }
  };
}, Fe = xi.registerPlugin({
  name: "attr",
  init: function(e, t, r, i, n) {
    var s, o, u;
    this.tween = r;
    for (s in t)
      u = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (u || 0) + "", t[s], i, n, 0, 0, s), o.op = s, o.b = u, this._props.push(s);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      Re ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
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
bn() && br();
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
var ns, Mt, dr, jn, Ht, ss, On, qa = function() {
  return typeof window < "u";
}, St = {}, Ut = 180 / Math.PI, fr = Math.PI / 180, sr = Math.atan2, os = 1e8, $n = /([A-Z])/g, Ha = /(left|right|width|margin|padding|x)/i, Ka = /[\s,\(]\S/, _t = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ln = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Qa = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Za = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Ja = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, yo = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, vo = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, el = function(e, t, r) {
  return e.style[t] = r;
}, tl = function(e, t, r) {
  return e.style.setProperty(t, r);
}, rl = function(e, t, r) {
  return e._gsap[t] = r;
}, il = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, nl = function(e, t, r, i, n) {
  var s = e._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, sl = function(e, t, r, i, n) {
  var s = e._gsap;
  s[t] = r, s.renderTransform(n, s);
}, he = "transform", Ie = he + "Origin", ol = function a(e, t) {
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
}, al = function() {
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
    revert: al,
    save: ol
  };
  return e._gsap || Fe.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, To, cn = function(e, t) {
  var r = Mt.createElementNS ? Mt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Mt.createElement(e);
  return r && r.style ? r : Mt.createElement(e);
}, it = function a(e, t, r) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace($n, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && a(e, wr(t) || t, 1) || "";
}, as = "O,Moz,ms,Ms,Webkit".split(","), wr = function(e, t, r) {
  var i = t || Ht, n = i.style, s = 5;
  if (e in n && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(as[s] + e in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? as[s] : "") + e;
}, un = function() {
  qa() && window.document && (ns = window, Mt = ns.document, dr = Mt.documentElement, Ht = cn("div") || {
    style: {}
  }, cn("div"), he = wr(he), Ie = he + "Origin", Ht.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", To = !!wr("perspective"), On = Fe.core.reverting, jn = 1);
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
}, ll = {
  grid: 1,
  flex: 1
}, It = function a(e, t, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", o = Ht.style, u = Ha.test(t), c = e.tagName.toLowerCase() === "svg", d = (c ? "client" : "offset") + (u ? "Width" : "Height"), h = 100, _ = i === "px", l = i === "%", g, f, m, b;
  if (i === s || !n || us[i] || us[s])
    return n;
  if (s !== "px" && !_ && (n = a(e, t, r, "px")), b = e.getCTM && So(e), (l || s === "%") && (St[t] || ~t.indexOf("adius")))
    return g = b ? e.getBBox()[u ? "width" : "height"] : e[d], xe(l ? n / g * h : n / 100 * g);
  if (o[u ? "width" : "height"] = h + (_ ? s : i), f = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, b && (f = (e.ownerSVGElement || {}).parentNode), (!f || f === Mt || !f.appendChild) && (f = Mt.body), m = f._gsap, m && l && m.width && u && m.time === Ye.time && !m.uncache)
    return xe(n / m.width * h);
  if (l && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = h + i, g = e[d], y ? e.style[t] = y : rr(e, t);
  } else
    (l || s === "%") && !ll[it(f, "display")] && (o.position = it(e, "position")), f === e && (o.position = "static"), f.appendChild(Ht), g = Ht[d], f.removeChild(Ht), o.position = "absolute";
  return u && l && (m = Kt(f), m.time = Ye.time, m.width = f[d]), xe(_ ? g * n / h : g && n ? h / g * n : 0);
}, vt = function(e, t, r, i) {
  var n;
  return jn || un(), t in _t && t !== "transform" && (t = _t[t], ~t.indexOf(",") && (t = t.split(",")[0])), St[t] && t !== "transform" ? (n = Zr(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : vi(it(e, Ie)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = yi[t] && yi[t](e, t, r) || it(e, t) || Bs(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? It(e, t, n, r) + r : n;
}, cl = function(e, t, r, i) {
  if (!r || r === "none") {
    var n = wr(t, e, 1), s = n && it(e, n, 1);
    s && s !== r ? (t = n, r = s) : t === "borderColor" && (r = it(e, "borderTopColor"));
  }
  var o = new Le(this._pt, e.style, t, 0, 1, go), u = 0, c = 0, d, h, _, l, g, f, m, b, y, S, E, x;
  if (o.b = r, o.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = it(e, i.substring(4, i.indexOf(")")))), i === "auto" && (f = e.style[t], e.style[t] = i, i = it(e, t) || i, f ? e.style[t] = f : rr(e, t)), d = [r, i], so(d), r = d[0], i = d[1], _ = r.match(lr) || [], x = i.match(lr) || [], x.length) {
    for (; h = lr.exec(i); )
      m = h[0], y = i.substring(u, h.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), m !== (f = _[c++] || "") && (l = parseFloat(f) || 0, E = f.substr((l + "").length), m.charAt(1) === "=" && (m = ur(l, m) + E), b = parseFloat(m), S = m.substr((b + "").length), u = lr.lastIndex - S.length, S || (S = S || We.units[t] || E, u === i.length && (i += S, o.e += S)), E !== S && (l = It(e, t, f, S) || 0), o._pt = {
        _next: o._pt,
        p: y || c === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: l,
        c: b - l,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    o.c = u < i.length ? i.substring(u, i.length) : "";
  } else
    o.r = t === "display" && i === "none" ? vo : yo;
  return Os.test(i) && (o.e = 0), this._pt = o, o;
}, ds = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ul = function(e) {
  var t = e.split(" "), r = t[0], i = t[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = ds[r] || r, t[1] = ds[i] || i, t.join(" ");
}, dl = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, i = r.style, n = t.u, s = r._gsap, o, u, c;
    if (n === "all" || n === !0)
      i.cssText = "", u = 1;
    else
      for (n = n.split(","), c = n.length; --c > -1; )
        o = n[c], St[o] && (u = 1, o = o === "transformOrigin" ? Ie : he), rr(r, o);
    u && (rr(r, he), s && (s.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Zr(r, 1), s.uncache = 1, bo(i)));
  }
}, yi = {
  clearProps: function(e, t, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = e._pt = new Le(e._pt, t, r, 0, 0, dl);
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
  var r = e._gsap || Kt(e), i = e.style, n = fs(e), s, o, u, c;
  return r.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? Qr : n) : (n === Qr && !e.offsetParent && e !== dr && !r.svg && (u = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, o = e.nextElementSibling, dr.appendChild(e)), n = fs(e), u ? i.display = u : rr(e, "display"), c && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : dr.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, dn = function(e, t, r, i, n, s) {
  var o = e._gsap, u = n || An(e, !0), c = o.xOrigin || 0, d = o.yOrigin || 0, h = o.xOffset || 0, _ = o.yOffset || 0, l = u[0], g = u[1], f = u[2], m = u[3], b = u[4], y = u[5], S = t.split(" "), E = parseFloat(S[0]) || 0, x = parseFloat(S[1]) || 0, R, k, T, D;
  r ? u !== Qr && (k = l * m - g * f) && (T = E * (m / k) + x * (-f / k) + (f * y - m * b) / k, D = E * (-g / k) + x * (l / k) - (l * y - g * b) / k, E = T, x = D) : (R = ko(e), E = R.x + (~S[0].indexOf("%") ? E / 100 * R.width : E), x = R.y + (~(S[1] || S[0]).indexOf("%") ? x / 100 * R.height : x)), i || i !== !1 && o.smooth ? (b = E - c, y = x - d, o.xOffset = h + (b * l + y * f) - b, o.yOffset = _ + (b * g + y * m) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = E, o.yOrigin = x, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!r, e.style[Ie] = "0px 0px", s && (jt(s, o, "xOrigin", c, E), jt(s, o, "yOrigin", d, x), jt(s, o, "xOffset", h, o.xOffset), jt(s, o, "yOffset", _, o.yOffset)), e.setAttribute("data-svg-origin", E + " " + x);
}, Zr = function(e, t) {
  var r = e._gsap || new co(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var i = e.style, n = r.scaleX < 0, s = "px", o = "deg", u = getComputedStyle(e), c = it(e, Ie) || "0", d, h, _, l, g, f, m, b, y, S, E, x, R, k, T, D, C, O, X, $, q, U, z, A, I, W, H, w, M, V, B, de;
  return d = h = _ = f = m = b = y = S = E = 0, l = g = 1, r.svg = !!(e.getCTM && So(e)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[he] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[he] !== "none" ? u[he] : "")), i.scale = i.rotate = i.translate = "none"), k = An(e, r.svg), r.svg && (r.uncache ? (I = e.getBBox(), c = r.xOrigin - I.x + "px " + (r.yOrigin - I.y) + "px", A = "") : A = !t && e.getAttribute("data-svg-origin"), dn(e, A || c, !!A || r.originIsAbsolute, r.smooth !== !1, k)), x = r.xOrigin || 0, R = r.yOrigin || 0, k !== Qr && (O = k[0], X = k[1], $ = k[2], q = k[3], d = U = k[4], h = z = k[5], k.length === 6 ? (l = Math.sqrt(O * O + X * X), g = Math.sqrt(q * q + $ * $), f = O || X ? sr(X, O) * Ut : 0, y = $ || q ? sr($, q) * Ut + f : 0, y && (g *= Math.abs(Math.cos(y * fr))), r.svg && (d -= x - (x * O + R * $), h -= R - (x * X + R * q))) : (de = k[6], V = k[7], H = k[8], w = k[9], M = k[10], B = k[11], d = k[12], h = k[13], _ = k[14], T = sr(de, M), m = T * Ut, T && (D = Math.cos(-T), C = Math.sin(-T), A = U * D + H * C, I = z * D + w * C, W = de * D + M * C, H = U * -C + H * D, w = z * -C + w * D, M = de * -C + M * D, B = V * -C + B * D, U = A, z = I, de = W), T = sr(-$, M), b = T * Ut, T && (D = Math.cos(-T), C = Math.sin(-T), A = O * D - H * C, I = X * D - w * C, W = $ * D - M * C, B = q * C + B * D, O = A, X = I, $ = W), T = sr(X, O), f = T * Ut, T && (D = Math.cos(T), C = Math.sin(T), A = O * D + X * C, I = U * D + z * C, X = X * D - O * C, z = z * D - U * C, O = A, U = I), m && Math.abs(m) + Math.abs(f) > 359.9 && (m = f = 0, b = 180 - b), l = xe(Math.sqrt(O * O + X * X + $ * $)), g = xe(Math.sqrt(z * z + de * de)), T = sr(U, z), y = Math.abs(T) > 2e-4 ? T * Ut : 0, E = B ? 1 / (B < 0 ? -B : B) : 0), r.svg && (A = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Po(it(e, he)), A && e.setAttribute("transform", A))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (l *= -1, y += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), t = t || r.uncache, r.x = d - ((r.xPercent = d && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s, r.y = h - ((r.yPercent = h && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s, r.z = _ + s, r.scaleX = xe(l), r.scaleY = xe(g), r.rotation = xe(f) + o, r.rotationX = xe(m) + o, r.rotationY = xe(b) + o, r.skewX = y + o, r.skewY = S + o, r.transformPerspective = E + s, (r.zOrigin = parseFloat(c.split(" ")[2]) || !t && r.zOrigin || 0) && (i[Ie] = vi(c)), r.xOffset = r.yOffset = 0, r.force3D = We.force3D, r.renderTransform = r.svg ? hl : To ? Co : fl, r.uncache = 0, r;
}, vi = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Bi = function(e, t, r) {
  var i = Ne(t);
  return xe(parseFloat(t) + parseFloat(It(e, "x", r + "px", i))) + i;
}, fl = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Co(e, t);
}, Yt = "0deg", Nr = "0px", Gt = ") ", Co = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, u = r.z, c = r.rotation, d = r.rotationY, h = r.rotationX, _ = r.skewX, l = r.skewY, g = r.scaleX, f = r.scaleY, m = r.transformPerspective, b = r.force3D, y = r.target, S = r.zOrigin, E = "", x = b === "auto" && e && e !== 1 || b === !0;
  if (S && (h !== Yt || d !== Yt)) {
    var R = parseFloat(d) * fr, k = Math.sin(R), T = Math.cos(R), D;
    R = parseFloat(h) * fr, D = Math.cos(R), s = Bi(y, s, k * D * -S), o = Bi(y, o, -Math.sin(R) * -S), u = Bi(y, u, T * D * -S + S);
  }
  m !== Nr && (E += "perspective(" + m + Gt), (i || n) && (E += "translate(" + i + "%, " + n + "%) "), (x || s !== Nr || o !== Nr || u !== Nr) && (E += u !== Nr || x ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + Gt), c !== Yt && (E += "rotate(" + c + Gt), d !== Yt && (E += "rotateY(" + d + Gt), h !== Yt && (E += "rotateX(" + h + Gt), (_ !== Yt || l !== Yt) && (E += "skew(" + _ + ", " + l + Gt), (g !== 1 || f !== 1) && (E += "scale(" + g + ", " + f + Gt), y.style[he] = E || "translate(0, 0)";
}, hl = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, u = r.rotation, c = r.skewX, d = r.skewY, h = r.scaleX, _ = r.scaleY, l = r.target, g = r.xOrigin, f = r.yOrigin, m = r.xOffset, b = r.yOffset, y = r.forceCSS, S = parseFloat(s), E = parseFloat(o), x, R, k, T, D;
  u = parseFloat(u), c = parseFloat(c), d = parseFloat(d), d && (d = parseFloat(d), c += d, u += d), u || c ? (u *= fr, c *= fr, x = Math.cos(u) * h, R = Math.sin(u) * h, k = Math.sin(u - c) * -_, T = Math.cos(u - c) * _, c && (d *= fr, D = Math.tan(c - d), D = Math.sqrt(1 + D * D), k *= D, T *= D, d && (D = Math.tan(d), D = Math.sqrt(1 + D * D), x *= D, R *= D)), x = xe(x), R = xe(R), k = xe(k), T = xe(T)) : (x = h, T = _, R = k = 0), (S && !~(s + "").indexOf("px") || E && !~(o + "").indexOf("px")) && (S = It(l, "x", s, "px"), E = It(l, "y", o, "px")), (g || f || m || b) && (S = xe(S + g - (g * x + f * k) + m), E = xe(E + f - (g * R + f * T) + b)), (i || n) && (D = l.getBBox(), S = xe(S + i / 100 * D.width), E = xe(E + n / 100 * D.height)), D = "matrix(" + x + "," + R + "," + k + "," + T + "," + S + "," + E + ")", l.setAttribute("transform", D), y && (l.style[he] = D);
}, pl = function(e, t, r, i, n) {
  var s = 360, o = Ee(n), u = parseFloat(n) * (o && ~n.indexOf("rad") ? Ut : 1), c = u - i, d = i + c + "deg", h, _;
  return o && (h = n.split("_")[1], h === "short" && (c %= s, c !== c % (s / 2) && (c += c < 0 ? s : -s)), h === "cw" && c < 0 ? c = (c + s * os) % s - ~~(c / s) * s : h === "ccw" && c > 0 && (c = (c - s * os) % s - ~~(c / s) * s)), e._pt = _ = new Le(e._pt, t, r, i, c, Qa), _.e = d, _.u = "deg", e._props.push(r), _;
}, hs = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, _l = function(e, t, r) {
  var i = hs({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, o, u, c, d, h, _, l, g;
  i.svg ? (c = r.getAttribute("transform"), r.setAttribute("transform", ""), s[he] = t, o = Zr(r, 1), rr(r, he), r.setAttribute("transform", c)) : (c = getComputedStyle(r)[he], s[he] = t, o = Zr(r, 1), s[he] = c);
  for (u in St)
    c = i[u], d = o[u], c !== d && n.indexOf(u) < 0 && (l = Ne(c), g = Ne(d), h = l !== g ? It(r, u, c, g) : parseFloat(c), _ = parseFloat(d), e._pt = new Le(e._pt, o, u, h, _ - h, ln), e._pt.u = g || 0, e._props.push(u));
  hs(o, i);
};
Ae("padding,margin,Width,Radius", function(a, e) {
  var t = "Top", r = "Right", i = "Bottom", n = "Left", s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(o) {
    return e < 2 ? a + o : "border" + o + a;
  });
  yi[e > 1 ? "border" + a : a] = function(o, u, c, d, h) {
    var _, l;
    if (arguments.length < 4)
      return _ = s.map(function(g) {
        return vt(o, g, c);
      }), l = _.join(" "), l.split(_[0]).length === 5 ? _[0] : l;
    _ = (d + "").split(" "), l = {}, s.forEach(function(g, f) {
      return l[g] = _[f] = _[f] || _[(f - 1) / 2 | 0];
    }), o.init(u, l, h);
  };
});
var Ro = {
  name: "css",
  register: un,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, i, n) {
    var s = this._props, o = e.style, u = r.vars.startAt, c, d, h, _, l, g, f, m, b, y, S, E, x, R, k, T;
    jn || un(), this.styles = this.styles || wo(e), T = this.styles.props, this.tween = r;
    for (f in t)
      if (f !== "autoRound" && (d = t[f], !(ze[f] && uo(f, t, r, i, e, n)))) {
        if (l = typeof d, g = yi[f], l === "function" && (d = d.call(r, i, e, n), l = typeof d), l === "string" && ~d.indexOf("random(") && (d = qr(d)), g)
          g(this, e, f, d, r) && (k = 1);
        else if (f.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(f) + "").trim(), d += "", At.lastIndex = 0, At.test(c) || (m = Ne(c), b = Ne(d)), b ? m !== b && (c = It(e, f, c, b) + b) : m && (d += m), this.add(o, "setProperty", c, d, i, n, 0, 0, f), s.push(f), T.push(f, 0, o[f]);
        else if (l !== "undefined") {
          if (u && f in u ? (c = typeof u[f] == "function" ? u[f].call(r, i, e, n) : u[f], Ee(c) && ~c.indexOf("random(") && (c = qr(c)), Ne(c + "") || c === "auto" || (c += We.units[f] || Ne(vt(e, f)) || ""), (c + "").charAt(1) === "=" && (c = vt(e, f))) : c = vt(e, f), _ = parseFloat(c), y = l === "string" && d.charAt(1) === "=" && d.substr(0, 2), y && (d = d.substr(2)), h = parseFloat(d), f in _t && (f === "autoAlpha" && (_ === 1 && vt(e, "visibility") === "hidden" && h && (_ = 0), T.push("visibility", 0, o.visibility), jt(this, o, "visibility", _ ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), f !== "scale" && f !== "transform" && (f = _t[f], ~f.indexOf(",") && (f = f.split(",")[0]))), S = f in St, S) {
            if (this.styles.save(f), l === "string" && d.substring(0, 6) === "var(--" && (d = it(e, d.substring(4, d.indexOf(")"))), h = parseFloat(d)), E || (x = e._gsap, x.renderTransform && !t.parseTransform || Zr(e, t.parseTransform), R = t.smoothOrigin !== !1 && x.smooth, E = this._pt = new Le(this._pt, o, he, 0, 1, x.renderTransform, x, 0, -1), E.dep = 1), f === "scale")
              this._pt = new Le(this._pt, x, "scaleY", x.scaleY, (y ? ur(x.scaleY, y + h) : h) - x.scaleY || 0, ln), this._pt.u = 0, s.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              T.push(Ie, 0, o[Ie]), d = ul(d), x.svg ? dn(e, d, 0, R, 0, this) : (b = parseFloat(d.split(" ")[2]) || 0, b !== x.zOrigin && jt(this, x, "zOrigin", x.zOrigin, b), jt(this, o, f, vi(c), vi(d)));
              continue;
            } else if (f === "svgOrigin") {
              dn(e, d, 1, R, 0, this);
              continue;
            } else if (f in Eo) {
              pl(this, x, f, _, y ? ur(_, y + d) : d);
              continue;
            } else if (f === "smoothOrigin") {
              jt(this, x, "smooth", x.smooth, d);
              continue;
            } else if (f === "force3D") {
              x[f] = d;
              continue;
            } else if (f === "transform") {
              _l(this, d, e);
              continue;
            }
          } else f in o || (f = wr(f) || f);
          if (S || (h || h === 0) && (_ || _ === 0) && !Ka.test(d) && f in o)
            m = (c + "").substr((_ + "").length), h || (h = 0), b = Ne(d) || (f in We.units ? We.units[f] : m), m !== b && (_ = It(e, f, c, b)), this._pt = new Le(this._pt, S ? x : o, f, _, (y ? ur(_, y + h) : h) - _, !S && (b === "px" || f === "zIndex") && t.autoRound !== !1 ? Ja : ln), this._pt.u = b || 0, m !== b && b !== "%" && (this._pt.b = c, this._pt.r = Za);
          else if (f in o)
            cl.call(this, e, f, c, y ? y + d : d);
          else if (f in e)
            this.add(e, f, c || e[f], y ? y + d : d, i, n);
          else if (f !== "parseTransform") {
            Tn(f, d);
            continue;
          }
          S || (f in o ? T.push(f, 0, o[f]) : typeof e[f] == "function" ? T.push(f, 2, e[f]()) : T.push(f, 1, c || e[f])), s.push(f);
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
    return i && i.indexOf(",") < 0 && (t = i), t in St && t !== Ie && (e._gsap.x || vt(e, "x")) ? r && ss === r ? t === "scale" ? il : rl : (ss = r || {}) && (t === "scale" ? nl : sl) : e.style && !vn(e.style[t]) ? el : ~t.indexOf("-") ? tl : Nn(e, t);
  },
  core: {
    _removeProperty: rr,
    _getMatrix: An
  }
};
Fe.utils.checkPrefix = wr;
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
Fe.registerPlugin(Ro);
var Oe = Fe.registerPlugin(Ro) || Fe;
Oe.core.Tween;
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var wt, er, Ln, Ei, $r, di, bi, zr, ct = "transform", fn = ct + "Origin", Do, No = function(e) {
  var t = e.ownerDocument || e;
  for (!(ct in e.style) && ("msTransform" in e.style) && (ct = "msTransform", fn = ct + "Origin"); t.parentNode && (t = t.parentNode); )
    ;
  if (er = window, bi = new ir(), t) {
    wt = t, Ln = t.documentElement, Ei = t.body, zr = wt.createElementNS("http://www.w3.org/2000/svg", "g"), zr.style.transform = "none";
    var r = t.createElement("div"), i = t.createElement("div"), n = t && (t.body || t.firstElementChild);
    n && n.appendChild && (n.appendChild(r), r.appendChild(i), r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), Do = i.offsetParent !== r, n.removeChild(r));
  }
  return t;
}, gl = function(e) {
  for (var t, r; e && e !== Ei; )
    r = e._gsap, r && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), t ? t.push(r) : t = [r]), e = e.parentNode;
  return t;
}, Mo = [], jo = [], ml = function() {
  return er.pageYOffset || wt.scrollTop || Ln.scrollTop || Ei.scrollTop || 0;
}, xl = function() {
  return er.pageXOffset || wt.scrollLeft || Ln.scrollLeft || Ei.scrollLeft || 0;
}, In = function(e) {
  return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, yl = function a(e) {
  if (er.getComputedStyle(e).position === "fixed")
    return !0;
  if (e = e.parentNode, e && e.nodeType === 1)
    return a(e);
}, Xi = function a(e, t) {
  if (e.parentNode && (wt || No(e))) {
    var r = In(e), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = r ? t ? "rect" : "g" : "div", s = t !== 2 ? 0 : 100, o = t === 3 ? 100 : 0, u = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", c = wt.createElementNS ? wt.createElementNS(i.replace(/^https/, "http"), n) : wt.createElement(n);
    return t && (r ? (di || (di = a(e)), c.setAttribute("width", 0.01), c.setAttribute("height", 0.01), c.setAttribute("transform", "translate(" + s + "," + o + ")"), di.appendChild(c)) : ($r || ($r = a(e), $r.style.cssText = u), c.style.cssText = u + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", $r.appendChild(c))), c;
  }
  throw "Need document and parent.";
}, vl = function(e) {
  for (var t = new ir(), r = 0; r < e.numberOfItems; r++)
    t.multiply(e.getItem(r).matrix);
  return t;
}, bl = function(e) {
  var t = e.getCTM(), r;
  return t || (r = e.style[ct], e.style[ct] = "none", e.appendChild(zr), t = zr.getCTM(), e.removeChild(zr), r ? e.style[ct] = r : e.style.removeProperty(ct.replace(/([A-Z])/g, "-$1").toLowerCase())), t || bi.clone();
}, wl = function(e, t) {
  var r = In(e), i = e === r, n = r ? Mo : jo, s = e.parentNode, o = s && !r && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s, u, c, d, h, _, l;
  if (e === er)
    return e;
  if (n.length || n.push(Xi(e, 1), Xi(e, 2), Xi(e, 3)), u = r ? di : $r, r)
    i ? (d = bl(e), h = -d.e / d.a, _ = -d.f / d.d, c = bi) : e.getBBox ? (d = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? vl(c) : c.getItem(0).matrix : bi, h = c.a * d.x + c.c * d.y, _ = c.b * d.x + c.d * d.y) : (c = new ir(), h = _ = 0), (i ? r : s).appendChild(u), u.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + h) + "," + (c.f + _) + ")");
  else {
    if (h = _ = 0, Do)
      for (c = e.offsetParent, d = e; d && (d = d.parentNode) && d !== c && d.parentNode; )
        (er.getComputedStyle(d)[ct] + "").length > 4 && (h = d.offsetLeft, _ = d.offsetTop, d = 0);
    if (l = er.getComputedStyle(e), l.position !== "absolute" && l.position !== "fixed")
      for (c = e.offsetParent; s && s !== c; )
        h += s.scrollLeft || 0, _ += s.scrollTop || 0, s = s.parentNode;
    d = u.style, d.top = e.offsetTop - _ + "px", d.left = e.offsetLeft - h + "px", d[ct] = l[ct], d[fn] = l[fn], d.position = l.position === "fixed" ? "fixed" : "absolute", o.appendChild(u);
  }
  return u;
}, zi = function(e, t, r, i, n, s, o) {
  return e.a = t, e.b = r, e.c = i, e.d = n, e.e = s, e.f = o, e;
}, ir = /* @__PURE__ */ function() {
  function a(t, r, i, n, s, o) {
    t === void 0 && (t = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), o === void 0 && (o = 0), zi(this, t, r, i, n, s, o);
  }
  var e = a.prototype;
  return e.inverse = function() {
    var r = this.a, i = this.b, n = this.c, s = this.d, o = this.e, u = this.f, c = r * s - i * n || 1e-10;
    return zi(this, s / c, -i / c, -n / c, r / c, (n * u - s * o) / c, -(r * u - i * o) / c);
  }, e.multiply = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, u = this.e, c = this.f, d = r.a, h = r.c, _ = r.b, l = r.d, g = r.e, f = r.f;
    return zi(this, d * i + _ * s, d * n + _ * o, h * i + l * s, h * n + l * o, u + g * i + f * s, c + g * n + f * o);
  }, e.clone = function() {
    return new a(this.a, this.b, this.c, this.d, this.e, this.f);
  }, e.equals = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, u = this.e, c = this.f;
    return i === r.a && n === r.b && s === r.c && o === r.d && u === r.e && c === r.f;
  }, e.apply = function(r, i) {
    i === void 0 && (i = {});
    var n = r.x, s = r.y, o = this.a, u = this.b, c = this.c, d = this.d, h = this.e, _ = this.f;
    return i.x = n * o + s * c + h || 0, i.y = n * u + s * d + _ || 0, i;
  }, a;
}();
function qt(a, e, t, r) {
  if (!a || !a.parentNode || (wt || No(a)).documentElement === a)
    return new ir();
  var i = gl(a), n = In(a), s = n ? Mo : jo, o = wl(a), u = s[0].getBoundingClientRect(), c = s[1].getBoundingClientRect(), d = s[2].getBoundingClientRect(), h = o.parentNode, _ = yl(a), l = new ir((c.left - u.left) / 100, (c.top - u.top) / 100, (d.left - u.left) / 100, (d.top - u.top) / 100, u.left + (_ ? 0 : xl()), u.top + (_ ? 0 : ml()));
  if (h.removeChild(o), i)
    for (u = i.length; u--; )
      c = i[u], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
  return e ? l.inverse() : l;
}
function ps(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Tl(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e;
}
var Z, le, Ge, ut, Tt, Yi, bt, hn, Ar, Ot, Oo, pn, Jr, Fn, Lr, at, Ir, fi, $o, _n, wi = 0, Ao = function() {
  return typeof window < "u";
}, Lo = function() {
  return Z || Ao() && (Z = window.gsap) && Z.registerPlugin && Z;
}, Dt = function(e) {
  return typeof e == "function";
}, Yr = function(e) {
  return typeof e == "object";
}, lt = function(e) {
  return typeof e > "u";
}, hi = function() {
  return !1;
}, Gr = "transform", gn = "transformOrigin", Ct = function(e) {
  return Math.round(e * 1e4) / 1e4;
}, Mr = Array.isArray, oi = function(e, t) {
  var r = Ge.createElementNS ? Ge.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/, "http"), e) : Ge.createElement(e);
  return r.style ? r : Ge.createElement(e);
}, _s = 180 / Math.PI, Vt = 1e20, kl = new ir(), Rt = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
}, tr = [], hr = {}, Sl = 0, El = /^(?:a|input|textarea|button|select)$/i, gs = 0, or = {}, xt = {}, Io = function(e, t) {
  var r = {}, i;
  for (i in e)
    r[i] = t ? e[i] * t : e[i];
  return r;
}, Pl = function(e, t) {
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
}, Cl = function(e) {
  tr.push(e), tr.length === 1 && Z.ticker.add(Fo);
}, xs = function() {
  return !tr.length && Z.ticker.remove(Fo);
}, ys = function(e) {
  for (var t = tr.length; t--; )
    tr[t] === e && tr.splice(t, 1);
  Z.to(xs, {
    overwrite: !0,
    delay: 15,
    duration: 0,
    onComplete: xs,
    data: "_draggable"
  });
}, Rl = function(e, t) {
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
}, Nl = function a(e) {
  Fn = e.touches && wi < e.touches.length, be(e.target, "touchend", a);
}, vs = function(e) {
  Fn = e.touches && wi < e.touches.length, ke(e.target, "touchend", Nl);
}, pr = function(e) {
  return le.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0;
}, _r = function(e) {
  return le.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0;
}, bs = function a(e, t) {
  ke(e, "scroll", t), Tr(e.parentNode) || a(e.parentNode, t);
}, ws = function a(e, t) {
  be(e, "scroll", t), Tr(e.parentNode) || a(e.parentNode, t);
}, Tr = function(e) {
  return !e || e === ut || e.nodeType === 9 || e === Ge.body || e === le || !e.nodeType || !e.parentNode;
}, Ts = function(e, t) {
  var r = t === "x" ? "Width" : "Height", i = "scroll" + r, n = "client" + r;
  return Math.max(0, Tr(e) ? Math.max(ut[i], Tt[i]) - (le["inner" + r] || ut[n] || Tt[n]) : e[i] - e[n]);
}, Gi = function a(e, t) {
  var r = Ts(e, "x"), i = Ts(e, "y");
  Tr(e) ? e = xt : a(e.parentNode, t), e._gsMaxScrollX = r, e._gsMaxScrollY = i, t || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0);
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
  return Dt(n) && (o = n.apply(i.callbackScope || e, i[r + "Params"] || [e.pointerEvent])), s && e.dispatchEvent(t) === !1 && (o = !1), o;
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
  var r = e.getBBox && e.ownerSVGElement, i = e.ownerDocument || Ge, n, s, o, u, c, d, h, _, l, g, f, m, b;
  if (e === le)
    o = pr(i), n = _r(i), s = n + (i.documentElement.clientWidth || e.innerWidth || i.body.clientWidth || 0), u = o + ((e.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : e.innerHeight || i.body.clientHeight || 0);
  else {
    if (t === le || lt(t))
      return e.getBoundingClientRect();
    n = o = 0, r ? (g = e.getBBox(), f = g.width, m = g.height) : (e.viewBox && (g = e.viewBox.baseVal) && (n = g.x || 0, o = g.y || 0, f = g.width, m = g.height), f || (b = ei(e), g = b.boxSizing === "border-box", f = (parseFloat(b.width) || e.clientWidth || 0) + (g ? 0 : parseFloat(b.borderLeftWidth) + parseFloat(b.borderRightWidth)), m = (parseFloat(b.height) || e.clientHeight || 0) + (g ? 0 : parseFloat(b.borderTopWidth) + parseFloat(b.borderBottomWidth)))), s = f, u = m;
  }
  return e === t ? {
    left: n,
    top: o,
    width: s - n,
    height: u - o
  } : (c = qt(t, !0).multiply(qt(e)), d = c.apply({
    x: n,
    y: o
  }), h = c.apply({
    x: s,
    y: o
  }), _ = c.apply({
    x: s,
    y: u
  }), l = c.apply({
    x: n,
    y: u
  }), n = Math.min(d.x, h.x, _.x, l.x), o = Math.min(d.y, h.y, _.y, l.y), {
    left: n,
    top: o,
    width: Math.max(d.x, h.x, _.x, l.x) - n,
    height: Math.max(d.y, h.y, _.y, l.y) - o
  });
}, Wi = function(e, t, r, i, n, s) {
  var o = {}, u, c, d;
  if (t)
    if (n !== 1 && t instanceof Array) {
      if (o.end = u = [], d = t.length, Yr(t[0]))
        for (c = 0; c < d; c++)
          u[c] = Io(t[c], n);
      else
        for (c = 0; c < d; c++)
          u[c] = t[c] * n;
      r += 1.1, i -= 1.1;
    } else Dt(t) ? o.end = function(h) {
      var _ = t.call(e, h), l, g;
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
}, jl = function a(e) {
  var t;
  return !e || !e.getAttribute || e === Tt ? !1 : (t = e.getAttribute("data-clickable")) === "true" || t !== "false" && (El.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : a(e.parentNode);
}, ai = function(e, t) {
  for (var r = e.length, i; r--; )
    i = e[r], i.ondragstart = i.onselectstart = t ? null : hi, Z.set(i, {
      lazy: !0,
      userSelect: t ? "text" : "none"
    });
}, Ol = function a(e) {
  if (ei(e).position === "fixed")
    return !0;
  if (e = e.parentNode, e && e.nodeType === 1)
    return a(e);
}, Bo, mn, $l = function(e, t) {
  e = Z.utils.toArray(e)[0], t = t || {};
  var r = document.createElement("div"), i = r.style, n = e.firstChild, s = 0, o = 0, u = e.scrollTop, c = e.scrollLeft, d = e.scrollWidth, h = e.scrollHeight, _ = 0, l = 0, g = 0, f, m, b, y, S, E;
  Bo && t.force3D !== !1 ? (S = "translate3d(", E = "px,0px)") : Gr && (S = "translate(", E = "px)"), this.scrollTop = function(x, R) {
    if (!arguments.length)
      return -this.top();
    this.top(-x, R);
  }, this.scrollLeft = function(x, R) {
    if (!arguments.length)
      return -this.left();
    this.left(-x, R);
  }, this.left = function(x, R) {
    if (!arguments.length)
      return -(e.scrollLeft + o);
    var k = e.scrollLeft - c, T = o;
    if ((k > 2 || k < -2) && !R) {
      c = e.scrollLeft, Z.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      }), this.left(-c), t.onKill && t.onKill();
      return;
    }
    x = -x, x < 0 ? (o = x - 0.5 | 0, x = 0) : x > l ? (o = x - l | 0, x = l) : o = 0, (o || T) && (this._skip || (i[Gr] = S + -o + "px," + -s + E), o + _ >= 0 && (i.paddingRight = o + _ + "px")), e.scrollLeft = x | 0, c = e.scrollLeft;
  }, this.top = function(x, R) {
    if (!arguments.length)
      return -(e.scrollTop + s);
    var k = e.scrollTop - u, T = s;
    if ((k > 2 || k < -2) && !R) {
      u = e.scrollTop, Z.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      }), this.top(-u), t.onKill && t.onKill();
      return;
    }
    x = -x, x < 0 ? (s = x - 0.5 | 0, x = 0) : x > g ? (s = x - g | 0, x = g) : s = 0, (s || T) && (this._skip || (i[Gr] = S + -o + "px," + -s + E)), e.scrollTop = x | 0, u = e.scrollTop;
  }, this.maxScrollTop = function() {
    return g;
  }, this.maxScrollLeft = function() {
    return l;
  }, this.disable = function() {
    for (n = r.firstChild; n; )
      y = n.nextSibling, e.appendChild(n), n = y;
    e === r.parentNode && e.removeChild(r);
  }, this.enable = function() {
    if (n = e.firstChild, n !== r) {
      for (; n; )
        y = n.nextSibling, r.appendChild(n), n = y;
      e.appendChild(r), this.calibrate();
    }
  }, this.calibrate = function(x) {
    var R = e.clientWidth === f, k, T, D;
    u = e.scrollTop, c = e.scrollLeft, !(R && e.clientHeight === m && r.offsetHeight === b && d === e.scrollWidth && h === e.scrollHeight && !x) && ((s || o) && (T = this.left(), D = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), k = ei(e), (!R || x) && (i.display = "block", i.width = "auto", i.paddingRight = "0px", _ = Math.max(0, e.scrollWidth - e.clientWidth), _ && (_ += parseFloat(k.paddingLeft) + (mn ? parseFloat(k.paddingRight) : 0))), i.display = "inline-block", i.position = "relative", i.overflow = "visible", i.verticalAlign = "top", i.boxSizing = "content-box", i.width = "100%", i.paddingRight = _ + "px", mn && (i.paddingBottom = k.paddingBottom), f = e.clientWidth, m = e.clientHeight, d = e.scrollWidth, h = e.scrollHeight, l = e.scrollWidth - f, g = e.scrollHeight - m, b = r.offsetHeight, i.display = "block", (T || D) && (this.left(T), this.top(D)));
  }, this.content = r, this.element = e, this._skip = !1, this.enable();
}, Ui = function(e) {
  if (Ao() && document.body) {
    var t = window && window.navigator;
    le = window, Ge = document, ut = Ge.documentElement, Tt = Ge.body, Yi = oi("div"), fi = !!window.PointerEvent, bt = oi("div"), bt.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Ir = bt.style.cursor === "grab" ? "grab" : "move", Lr = t && t.userAgent.toLowerCase().indexOf("android") !== -1, pn = "ontouchstart" in ut && "orientation" in le || t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0), mn = function() {
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
    }), Z = hn = Lo();
  }
  Z ? (at = Z.plugins.inertia, $o = Z.core.context || function() {
  }, Ar = Z.utils.checkPrefix, Gr = Ar(Gr), gn = Ar(gn), Ot = Z.utils.toArray, _n = Z.core.getStyleSaver, Bo = !!Ar("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)");
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
}(), kr = /* @__PURE__ */ function(a) {
  Tl(e, a);
  function e(t, r) {
    var i;
    i = a.call(this) || this, hn || Ui(1), t = Ot(t)[0], i.styles = _n && _n(t, "transform,left,top"), at || (at = Z.plugins.inertia), i.vars = r = Io(r || {}), i.target = t, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(r.dragResistance) || 0, i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0, i.lockAxis = r.lockAxis, i.autoScroll = r.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!r.allowEventDefault, Z.getProperty(t, "x");
    var n = (r.type || "x,y").toLowerCase(), s = ~n.indexOf("x") || ~n.indexOf("y"), o = n.indexOf("rotation") !== -1, u = o ? "rotation" : s ? "x" : "left", c = s ? "y" : "top", d = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"), h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"), _ = r.minimumMovement || 2, l = ps(i), g = Ot(r.trigger || r.handle || t), f = {}, m = 0, b = !1, y = r.autoScrollMarginTop || 40, S = r.autoScrollMarginRight || 40, E = r.autoScrollMarginBottom || 40, x = r.autoScrollMarginLeft || 40, R = r.clickableTest || jl, k = 0, T = t._gsap || Z.core.getCache(t), D = Ol(t), C = function(v, N) {
      return parseFloat(T.get(t, v, N));
    }, O = t.ownerDocument || Ge, X, $, q, U, z, A, I, W, H, w, M, V, B, de, _e, re, ie, Be, dt, Et, Bt, Sr, Pe, ne, zn, Ke, nt, Pi, Ci, Yn, Xe, Gn, ri, Vn = function(v) {
      return Ze(v), v.stopImmediatePropagation && v.stopImmediatePropagation(), !1;
    }, ft = function G(v) {
      if (l.autoScroll && l.isDragging && (b || ie)) {
        var N = t, P = l.autoScroll * 15, j, L, F, K, Y, se, ee, oe;
        for (b = !1, xt.scrollTop = le.pageYOffset != null ? le.pageYOffset : O.documentElement.scrollTop != null ? O.documentElement.scrollTop : O.body.scrollTop, xt.scrollLeft = le.pageXOffset != null ? le.pageXOffset : O.documentElement.scrollLeft != null ? O.documentElement.scrollLeft : O.body.scrollLeft, K = l.pointerX - xt.scrollLeft, Y = l.pointerY - xt.scrollTop; N && !L; )
          L = Tr(N.parentNode), j = L ? xt : N.parentNode, F = L ? {
            bottom: Math.max(ut.clientHeight, le.innerHeight || 0),
            right: Math.max(ut.clientWidth, le.innerWidth || 0),
            left: 0,
            top: 0
          } : j.getBoundingClientRect(), se = ee = 0, h && (oe = j._gsMaxScrollY - j.scrollTop, oe < 0 ? ee = oe : Y > F.bottom - E && oe ? (b = !0, ee = Math.min(oe, P * (1 - Math.max(0, F.bottom - Y) / E) | 0)) : Y < F.top + y && j.scrollTop && (b = !0, ee = -Math.min(j.scrollTop, P * (1 - Math.max(0, Y - F.top) / y) | 0)), ee && (j.scrollTop += ee)), d && (oe = j._gsMaxScrollX - j.scrollLeft, oe < 0 ? se = oe : K > F.right - S && oe ? (b = !0, se = Math.min(oe, P * (1 - Math.max(0, F.right - K) / S) | 0)) : K < F.left + x && j.scrollLeft && (b = !0, se = -Math.min(j.scrollLeft, P * (1 - Math.max(0, K - F.left) / x) | 0)), se && (j.scrollLeft += se)), L && (se || ee) && (le.scrollTo(j.scrollLeft, j.scrollTop), Cr(l.pointerX + se, l.pointerY + ee)), N = j;
      }
      if (ie) {
        var ge = l.x, De = l.y;
        o ? (l.deltaX = ge - parseFloat(T.rotation), l.rotation = ge, T.rotation = ge + "deg", T.renderTransform(1, T)) : $ ? (h && (l.deltaY = De - $.top(), $.top(De)), d && (l.deltaX = ge - $.left(), $.left(ge))) : s ? (h && (l.deltaY = De - parseFloat(T.y), T.y = De + "px"), d && (l.deltaX = ge - parseFloat(T.x), T.x = ge + "px"), T.renderTransform(1, T)) : (h && (l.deltaY = De - parseFloat(t.style.top || 0), t.style.top = De + "px"), d && (l.deltaX = ge - parseFloat(t.style.left || 0), t.style.left = ge + "px")), W && !v && !Pi && (Pi = !0, me(l, "drag", "onDrag") === !1 && (d && (l.x -= l.deltaX), h && (l.y -= l.deltaY), G(!0)), Pi = !1);
      }
      ie = !1;
    }, Xt = function(v, N) {
      var P = l.x, j = l.y, L, F;
      t._gsap || (T = Z.core.getCache(t)), T.uncache && Z.getProperty(t, "x"), s ? (l.x = parseFloat(T.x), l.y = parseFloat(T.y)) : o ? l.x = l.rotation = parseFloat(T.rotation) : $ ? (l.y = $.top(), l.x = $.left()) : (l.y = parseFloat(t.style.top || (F = ei(t)) && F.top) || 0, l.x = parseFloat(t.style.left || (F || {}).left) || 0), (dt || Et || Bt) && !N && (l.isDragging || l.isThrowing) && (Bt && (or.x = l.x, or.y = l.y, L = Bt(or), L.x !== l.x && (l.x = L.x, ie = !0), L.y !== l.y && (l.y = L.y, ie = !0)), dt && (L = dt(l.x), L !== l.x && (l.x = L, o && (l.rotation = L), ie = !0)), Et && (L = Et(l.y), L !== l.y && (l.y = L), ie = !0)), ie && ft(!0), v || (l.deltaX = l.x - P, l.deltaY = l.y - j, me(l, "throwupdate", "onThrowUpdate"));
    }, Ri = function(v, N, P, j) {
      return N == null && (N = -Vt), P == null && (P = Vt), Dt(v) ? function(L) {
        var F = l.isPressed ? 1 - l.edgeResistance : 1;
        return v.call(l, (L > P ? P + (L - P) * F : L < N ? N + (L - N) * F : L) * j) * j;
      } : Mr(v) ? function(L) {
        for (var F = v.length, K = 0, Y = Vt, se, ee; --F > -1; )
          se = v[F], ee = se - L, ee < 0 && (ee = -ee), ee < Y && se >= N && se <= P && (K = F, Y = ee);
        return v[K];
      } : isNaN(v) ? function(L) {
        return L;
      } : function() {
        return v * j;
      };
    }, qo = function(v, N, P, j, L, F, K) {
      return F = F && F < Vt ? F * F : Vt, Dt(v) ? function(Y) {
        var se = l.isPressed ? 1 - l.edgeResistance : 1, ee = Y.x, oe = Y.y, ge, De, mt;
        return Y.x = ee = ee > P ? P + (ee - P) * se : ee < N ? N + (ee - N) * se : ee, Y.y = oe = oe > L ? L + (oe - L) * se : oe < j ? j + (oe - j) * se : oe, ge = v.call(l, Y), ge !== Y && (Y.x = ge.x, Y.y = ge.y), K !== 1 && (Y.x *= K, Y.y *= K), F < Vt && (De = Y.x - ee, mt = Y.y - oe, De * De + mt * mt > F && (Y.x = ee, Y.y = oe)), Y;
      } : Mr(v) ? function(Y) {
        for (var se = v.length, ee = 0, oe = Vt, ge, De, mt, Qe; --se > -1; )
          mt = v[se], ge = mt.x - Y.x, De = mt.y - Y.y, Qe = ge * ge + De * De, Qe < oe && (ee = se, oe = Qe);
        return oe <= F ? v[ee] : Y;
      } : function(Y) {
        return Y;
      };
    }, Di = function() {
      var v, N, P, j;
      I = !1, $ ? ($.calibrate(), l.minX = M = -$.maxScrollLeft(), l.minY = B = -$.maxScrollTop(), l.maxX = w = l.maxY = V = 0, I = !0) : r.bounds && (v = ks(r.bounds, t.parentNode), o ? (l.minX = M = v.left, l.maxX = w = v.left + v.width, l.minY = B = l.maxY = V = 0) : !lt(r.bounds.maxX) || !lt(r.bounds.maxY) ? (v = r.bounds, l.minX = M = v.minX, l.minY = B = v.minY, l.maxX = w = v.maxX, l.maxY = V = v.maxY) : (N = ks(t, t.parentNode), l.minX = M = Math.round(C(u, "px") + v.left - N.left), l.minY = B = Math.round(C(c, "px") + v.top - N.top), l.maxX = w = Math.round(M + (v.width - N.width)), l.maxY = V = Math.round(B + (v.height - N.height))), M > w && (l.minX = w, l.maxX = w = M, M = l.minX), B > V && (l.minY = V, l.maxY = V = B, B = l.minY), o && (l.minRotation = M, l.maxRotation = w), I = !0), r.liveSnap && (P = r.liveSnap === !0 ? r.snap || {} : r.liveSnap, j = Mr(P) || Dt(P), o ? (dt = Ri(j ? P : P.rotation, M, w, 1), Et = null) : P.points ? Bt = qo(j ? P : P.points, M, w, B, V, P.radius, $ ? -1 : 1) : (d && (dt = Ri(j ? P : P.x || P.left || P.scrollLeft, M, w, $ ? -1 : 1)), h && (Et = Ri(j ? P : P.y || P.top || P.scrollTop, B, V, $ ? -1 : 1))));
    }, Ho = function() {
      l.isThrowing = !1, me(l, "throwcomplete", "onThrowComplete");
    }, Ko = function() {
      l.isThrowing = !1;
    }, Ni = function(v, N) {
      var P, j, L, F;
      v && at ? (v === !0 && (P = r.snap || r.liveSnap || {}, j = Mr(P) || Dt(P), v = {
        resistance: (r.throwResistance || r.resistance || 1e3) / (o ? 10 : 1)
      }, o ? v.rotation = Wi(l, j ? P : P.rotation, w, M, 1, N) : (d && (v[u] = Wi(l, j ? P : P.points || P.x || P.left, w, M, $ ? -1 : 1, N || l.lockedAxis === "x")), h && (v[c] = Wi(l, j ? P : P.points || P.y || P.top, V, B, $ ? -1 : 1, N || l.lockedAxis === "y")), (P.points || Mr(P) && Yr(P[0])) && (v.linkedProps = u + "," + c, v.radius = P.radius))), l.isThrowing = !0, F = isNaN(r.overshootTolerance) ? r.edgeResistance === 1 ? 0 : 1 - l.edgeResistance + 0.2 : r.overshootTolerance, v.duration || (v.duration = {
        max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
        min: isNaN(r.minDuration) ? F === 0 || Yr(v) && v.resistance > 1e3 ? 0 : 0.5 : r.minDuration,
        overshoot: F
      }), l.tween = L = Z.to($ || t, {
        inertia: v,
        data: "_draggable",
        inherit: !1,
        onComplete: Ho,
        onInterrupt: Ko,
        onUpdate: r.fastMode ? me : Xt,
        onUpdateParams: r.fastMode ? [l, "onthrowupdate", "onThrowUpdate"] : P && P.radius ? [!1, !0] : []
      }), r.fastMode || ($ && ($._skip = !0), L.render(1e9, !0, !0), Xt(!0, !0), l.endX = l.x, l.endY = l.y, o && (l.endRotation = l.x), L.play(0), Xt(!0, !0), $ && ($._skip = !1))) : I && l.applyBounds();
    }, Wn = function(v) {
      var N = ne, P;
      ne = qt(t.parentNode, !0), v && l.isPressed && !ne.equals(N || new ir()) && (P = N.inverse().apply({
        x: q,
        y: U
      }), ne.apply(P, P), q = P.x, U = P.y), ne.equals(kl) && (ne = null);
    }, ii = function() {
      var v = 1 - l.edgeResistance, N = D ? _r(O) : 0, P = D ? pr(O) : 0, j, L, F;
      s && (T.x = C(u, "px") + "px", T.y = C(c, "px") + "px", T.renderTransform()), Wn(!1), Je.x = l.pointerX - N, Je.y = l.pointerY - P, ne && ne.apply(Je, Je), q = Je.x, U = Je.y, ie && (Cr(l.pointerX, l.pointerY), ft(!0)), Gn = qt(t), $ ? (Di(), A = $.top(), z = $.left()) : (Er() ? (Xt(!0, !0), Di()) : l.applyBounds(), o ? (j = t.ownerSVGElement ? [T.xOrigin - t.getBBox().x, T.yOrigin - t.getBBox().y] : (ei(t)[gn] || "0 0").split(" "), re = l.rotationOrigin = qt(t).apply({
        x: parseFloat(j[0]) || 0,
        y: parseFloat(j[1]) || 0
      }), Xt(!0, !0), L = l.pointerX - re.x - N, F = re.y - l.pointerY + P, z = l.x, A = l.y = Math.atan2(F, L) * _s) : (A = C(c, "px"), z = C(u, "px"))), I && v && (z > w ? z = w + (z - w) / v : z < M && (z = M - (M - z) / v), o || (A > V ? A = V + (A - V) / v : A < B && (A = B - (B - A) / v))), l.startX = z = Ct(z), l.startY = A = Ct(A);
    }, Er = function() {
      return l.tween && l.tween.isActive();
    }, Qo = function() {
      bt.parentNode && !Er() && !l.isDragging && bt.parentNode.removeChild(bt);
    }, Pr = function(v, N) {
      var P;
      if (!X || l.isPressed || !v || (v.type === "mousedown" || v.type === "pointerdown") && !N && Rt() - k < 30 && Jr[l.pointerEvent.type]) {
        Xe && v && X && Ze(v);
        return;
      }
      if (zn = Er(), ri = !1, l.pointerEvent = v, Jr[v.type] ? (Pe = ~v.type.indexOf("touch") ? v.currentTarget || v.target : O, ke(Pe, "touchend", st), ke(Pe, "touchmove", zt), ke(Pe, "touchcancel", st), ke(O, "touchstart", vs)) : (Pe = null, ke(O, "mousemove", zt)), nt = null, (!fi || !Pe) && (ke(O, "mouseup", st), v && v.target && ke(v.target, "mouseup", st)), Sr = R.call(l, v.target) && r.dragClickables === !1 && !N, Sr) {
        ke(v.target, "change", st), me(l, "pressInit", "onPressInit"), me(l, "press", "onPress"), ai(g, !0), Xe = !1;
        return;
      }
      if (Ke = !Pe || d === h || l.vars.allowNativeTouchScrolling === !1 || l.vars.allowContextMenu && v && (v.ctrlKey || v.which > 2) ? !1 : d ? "y" : "x", Xe = !Ke && !l.allowEventDefault, Xe && (Ze(v), ke(le, "touchforcechange", Ze)), v.changedTouches ? (v = de = v.changedTouches[0], _e = v.identifier) : v.pointerId ? _e = v.pointerId : de = _e = null, wi++, Cl(ft), U = l.pointerY = v.pageY, q = l.pointerX = v.pageX, me(l, "pressInit", "onPressInit"), (Ke || l.autoScroll) && Gi(t.parentNode), t.parentNode && l.autoScroll && !$ && !o && t.parentNode._gsMaxScrollX && !bt.parentNode && !t.getBBox && (bt.style.width = t.parentNode.scrollWidth + "px", t.parentNode.appendChild(bt)), ii(), l.tween && l.tween.kill(), l.isThrowing = !1, Z.killTweensOf($ || t, f, !0), $ && Z.killTweensOf(t, {
        scrollTo: 1
      }, !0), l.tween = l.lockedAxis = null, (r.zIndexBoost || !o && !$ && r.zIndexBoost !== !1) && (t.style.zIndex = e.zIndex++), l.isPressed = !0, W = !!(r.onDrag || l._listeners.drag), H = !!(r.onMove || l._listeners.move), r.cursor !== !1 || r.activeCursor)
        for (P = g.length; --P > -1; )
          Z.set(g[P], {
            cursor: r.activeCursor || r.cursor || (Ir === "grab" ? "grabbing" : Ir)
          });
      me(l, "press", "onPress");
    }, zt = function(v) {
      var N = v, P, j, L, F, K, Y;
      if (!X || Fn || !l.isPressed || !v) {
        Xe && v && X && Ze(v);
        return;
      }
      if (l.pointerEvent = v, P = v.changedTouches, P) {
        if (v = P[0], v !== de && v.identifier !== _e) {
          for (F = P.length; --F > -1 && (v = P[F]).identifier !== _e && v.target !== t; )
            ;
          if (F < 0)
            return;
        }
      } else if (v.pointerId && _e && v.pointerId !== _e)
        return;
      if (Pe && Ke && !nt && (Je.x = v.pageX - (D ? _r(O) : 0), Je.y = v.pageY - (D ? pr(O) : 0), ne && ne.apply(Je, Je), j = Je.x, L = Je.y, K = Math.abs(j - q), Y = Math.abs(L - U), (K !== Y && (K > _ || Y > _) || Lr && Ke === nt) && (nt = K > Y && d ? "x" : "y", Ke && nt !== Ke && ke(le, "touchforcechange", Ze), l.vars.lockAxisOnTouchScroll !== !1 && d && h && (l.lockedAxis = nt === "x" ? "y" : "x", Dt(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, N)), Lr && Ke === nt))) {
        st(N);
        return;
      }
      !l.allowEventDefault && (!Ke || nt && Ke !== nt) && N.cancelable !== !1 ? (Ze(N), Xe = !0) : Xe && (Xe = !1), l.autoScroll && (b = !0), Cr(v.pageX, v.pageY, H);
    }, Cr = function(v, N, P) {
      var j = 1 - l.dragResistance, L = 1 - l.edgeResistance, F = l.pointerX, K = l.pointerY, Y = A, se = l.x, ee = l.y, oe = l.endX, ge = l.endY, De = l.endRotation, mt = ie, Qe, Pt, Ce, ve, Mi, ot;
      l.pointerX = v, l.pointerY = N, D && (v -= _r(O), N -= pr(O)), o ? (ve = Math.atan2(re.y - N, v - re.x) * _s, Mi = l.y - ve, Mi > 180 ? (A -= 360, l.y = ve) : Mi < -180 && (A += 360, l.y = ve), l.x !== z || Math.max(Math.abs(q - v), Math.abs(U - N)) > _ ? (l.y = ve, Ce = z + (A - ve) * j) : Ce = z) : (ne && (ot = v * ne.a + N * ne.c + ne.e, N = v * ne.b + N * ne.d + ne.f, v = ot), Pt = N - U, Qe = v - q, Pt < _ && Pt > -_ && (Pt = 0), Qe < _ && Qe > -_ && (Qe = 0), (l.lockAxis || l.lockedAxis) && (Qe || Pt) && (ot = l.lockedAxis, ot || (l.lockedAxis = ot = d && Math.abs(Qe) > Math.abs(Pt) ? "y" : h ? "x" : null, ot && Dt(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, l.pointerEvent)), ot === "y" ? Pt = 0 : ot === "x" && (Qe = 0)), Ce = Ct(z + Qe * j), ve = Ct(A + Pt * j)), (dt || Et || Bt) && (l.x !== Ce || l.y !== ve && !o) && (Bt && (or.x = Ce, or.y = ve, ot = Bt(or), Ce = Ct(ot.x), ve = Ct(ot.y)), dt && (Ce = Ct(dt(Ce))), Et && (ve = Ct(Et(ve)))), I && (Ce > w ? Ce = w + Math.round((Ce - w) * L) : Ce < M && (Ce = M + Math.round((Ce - M) * L)), o || (ve > V ? ve = Math.round(V + (ve - V) * L) : ve < B && (ve = Math.round(B + (ve - B) * L)))), (l.x !== Ce || l.y !== ve && !o) && (o ? (l.endRotation = l.x = l.endX = Ce, ie = !0) : (h && (l.y = l.endY = ve, ie = !0), d && (l.x = l.endX = Ce, ie = !0)), !P || me(l, "move", "onMove") !== !1 ? !l.isDragging && l.isPressed && (l.isDragging = ri = !0, me(l, "dragstart", "onDragStart")) : (l.pointerX = F, l.pointerY = K, A = Y, l.x = se, l.y = ee, l.endX = oe, l.endY = ge, l.endRotation = De, ie = mt));
    }, st = function G(v, N) {
      if (!X || !l.isPressed || v && _e != null && !N && (v.pointerId && v.pointerId !== _e && v.target !== t || v.changedTouches && !Dl(v.changedTouches, _e))) {
        Xe && v && X && Ze(v);
        return;
      }
      l.isPressed = !1;
      var P = v, j = l.isDragging, L = l.vars.allowContextMenu && v && (v.ctrlKey || v.which > 2), F = Z.delayedCall(1e-3, Qo), K, Y, se, ee, oe;
      if (Pe ? (be(Pe, "touchend", G), be(Pe, "touchmove", zt), be(Pe, "touchcancel", G), be(O, "touchstart", vs)) : be(O, "mousemove", zt), be(le, "touchforcechange", Ze), (!fi || !Pe) && (be(O, "mouseup", G), v && v.target && be(v.target, "mouseup", G)), ie = !1, j && (m = gs = Rt(), l.isDragging = !1), ys(ft), Sr && !L) {
        v && (be(v.target, "change", G), l.pointerEvent = P), ai(g, !1), me(l, "release", "onRelease"), me(l, "click", "onClick"), Sr = !1;
        return;
      }
      for (Y = g.length; --Y > -1; )
        Vi(g[Y], "cursor", r.cursor || (r.cursor !== !1 ? Ir : null));
      if (wi--, v) {
        if (K = v.changedTouches, K && (v = K[0], v !== de && v.identifier !== _e)) {
          for (Y = K.length; --Y > -1 && (v = K[Y]).identifier !== _e && v.target !== t; )
            ;
          if (Y < 0 && !N)
            return;
        }
        l.pointerEvent = P, l.pointerX = v.pageX, l.pointerY = v.pageY;
      }
      return L && P ? (Ze(P), Xe = !0, me(l, "release", "onRelease")) : P && !j ? (Xe = !1, zn && (r.snap || r.bounds) && Ni(r.inertia || r.throwProps), me(l, "release", "onRelease"), (!Lr || P.type !== "touchmove") && P.type.indexOf("cancel") === -1 && (me(l, "click", "onClick"), Rt() - k < 300 && me(l, "doubleclick", "onDoubleClick"), ee = P.target || t, k = Rt(), oe = function() {
        k !== Ci && l.enabled() && !l.isPressed && !P.defaultPrevented && (ee.click ? ee.click() : O.createEvent && (se = O.createEvent("MouseEvents"), se.initMouseEvent("click", !0, !0, le, 1, l.pointerEvent.screenX, l.pointerEvent.screenY, l.pointerX, l.pointerY, !1, !1, !1, !1, 0, null), ee.dispatchEvent(se)));
      }, !Lr && !P.defaultPrevented && Z.delayedCall(0.05, oe))) : (Ni(r.inertia || r.throwProps), !l.allowEventDefault && P && (r.dragClickables !== !1 || !R.call(l, P.target)) && j && (!Ke || nt && Ke === nt) && P.cancelable !== !1 ? (Xe = !0, Ze(P)) : Xe = !1, me(l, "release", "onRelease")), Er() && F.duration(l.tween.duration()), j && me(l, "dragend", "onDragEnd"), !0;
    }, ni = function(v) {
      if (v && l.isDragging && !$) {
        var N = v.target || t.parentNode, P = N.scrollLeft - N._gsScrollX, j = N.scrollTop - N._gsScrollY;
        (P || j) && (ne ? (q -= P * ne.a + j * ne.c, U -= j * ne.d + P * ne.b) : (q -= P, U -= j), N._gsScrollX += P, N._gsScrollY += j, Cr(l.pointerX, l.pointerY));
      }
    }, Un = function(v) {
      var N = Rt(), P = N - k < 100, j = N - m < 50, L = P && Ci === k, F = l.pointerEvent && l.pointerEvent.defaultPrevented, K = P && Yn === k, Y = v.isTrusted || v.isTrusted == null && P && L;
      if ((L || j && l.vars.suppressClickOnDrag !== !1) && v.stopImmediatePropagation && v.stopImmediatePropagation(), P && !(l.pointerEvent && l.pointerEvent.defaultPrevented) && (!L || Y && !K)) {
        Y && L && (Yn = k), Ci = k;
        return;
      }
      (l.isPressed || j || P) && (!Y || !v.detail || !P || F) && Ze(v), !P && !j && !ri && (v && v.target && (l.pointerEvent = v), me(l, "click", "onClick"));
    }, qn = function(v) {
      return ne ? {
        x: v.x * ne.a + v.y * ne.c + ne.e,
        y: v.x * ne.b + v.y * ne.d + ne.f
      } : {
        x: v.x,
        y: v.y
      };
    };
    return Be = e.get(t), Be && Be.kill(), i.startDrag = function(G, v) {
      var N, P, j, L;
      Pr(G || l.pointerEvent, !0), v && !l.hitTest(G || l.pointerEvent) && (N = ar(G || l.pointerEvent), P = ar(t), j = qn({
        x: N.left + N.width / 2,
        y: N.top + N.height / 2
      }), L = qn({
        x: P.left + P.width / 2,
        y: P.top + P.height / 2
      }), q -= j.x - L.x, U -= j.y - L.y), l.isDragging || (l.isDragging = ri = !0, me(l, "dragstart", "onDragStart"));
    }, i.drag = zt, i.endDrag = function(G) {
      return st(G || l.pointerEvent, !0);
    }, i.timeSinceDrag = function() {
      return l.isDragging ? 0 : (Rt() - m) / 1e3;
    }, i.timeSinceClick = function() {
      return (Rt() - k) / 1e3;
    }, i.hitTest = function(G, v) {
      return e.hitTest(l.target, G, v);
    }, i.getDirection = function(G, v) {
      var N = G === "velocity" && at ? G : Yr(G) && !o ? "element" : "start", P, j, L, F, K, Y;
      return N === "element" && (K = ar(l.target), Y = ar(G)), P = N === "start" ? l.x - z : N === "velocity" ? at.getVelocity(t, u) : K.left + K.width / 2 - (Y.left + Y.width / 2), o ? P < 0 ? "counter-clockwise" : "clockwise" : (v = v || 2, j = N === "start" ? l.y - A : N === "velocity" ? at.getVelocity(t, c) : K.top + K.height / 2 - (Y.top + Y.height / 2), L = Math.abs(P / j), F = L < 1 / v ? "" : P < 0 ? "left" : "right", L < v && (F !== "" && (F += "-"), F += j < 0 ? "up" : "down"), F);
    }, i.applyBounds = function(G, v) {
      var N, P, j, L, F, K;
      if (G && r.bounds !== G)
        return r.bounds = G, l.update(!0, v);
      if (Xt(!0), Di(), I && !Er()) {
        if (N = l.x, P = l.y, N > w ? N = w : N < M && (N = M), P > V ? P = V : P < B && (P = B), (l.x !== N || l.y !== P) && (j = !0, l.x = l.endX = N, o ? l.endRotation = N : l.y = l.endY = P, ie = !0, ft(!0), l.autoScroll && !l.isDragging))
          for (Gi(t.parentNode), L = t, xt.scrollTop = le.pageYOffset != null ? le.pageYOffset : O.documentElement.scrollTop != null ? O.documentElement.scrollTop : O.body.scrollTop, xt.scrollLeft = le.pageXOffset != null ? le.pageXOffset : O.documentElement.scrollLeft != null ? O.documentElement.scrollLeft : O.body.scrollLeft; L && !K; )
            K = Tr(L.parentNode), F = K ? xt : L.parentNode, h && F.scrollTop > F._gsMaxScrollY && (F.scrollTop = F._gsMaxScrollY), d && F.scrollLeft > F._gsMaxScrollX && (F.scrollLeft = F._gsMaxScrollX), L = F;
        l.isThrowing && (j || l.endX > w || l.endX < M || l.endY > V || l.endY < B) && Ni(r.inertia || r.throwProps, j);
      }
      return l;
    }, i.update = function(G, v, N) {
      if (v && l.isPressed) {
        var P = qt(t), j = Gn.apply({
          x: l.x - z,
          y: l.y - A
        }), L = qt(t.parentNode, !0);
        L.apply({
          x: P.e - j.x,
          y: P.f - j.y
        }, j), l.x -= j.x - L.e, l.y -= j.y - L.f, ft(!0), ii();
      }
      var F = l.x, K = l.y;
      return Wn(!v), G ? l.applyBounds() : (ie && N && ft(!0), Xt(!0)), v && (Cr(l.pointerX, l.pointerY), ie && ft(!0)), l.isPressed && !v && (d && Math.abs(F - l.x) > 0.01 || h && Math.abs(K - l.y) > 0.01 && !o) && ii(), l.autoScroll && (Gi(t.parentNode, l.isDragging), b = l.isDragging, ft(!0), ws(t, ni), bs(t, ni)), l;
    }, i.enable = function(G) {
      var v = {
        lazy: !0
      }, N, P, j;
      if (r.cursor !== !1 && (v.cursor = r.cursor || Ir), Z.utils.checkPrefix("touchCallout") && (v.touchCallout = "none"), G !== "soft") {
        for (ms(g, d === h ? "none" : r.allowNativeTouchScrolling && t.scrollHeight === t.clientHeight == (t.scrollWidth === t.clientHeight) || r.allowEventDefault ? "manipulation" : d ? "pan-y" : "pan-x"), P = g.length; --P > -1; )
          j = g[P], fi || ke(j, "mousedown", Pr), ke(j, "touchstart", Pr), ke(j, "click", Un, !0), Z.set(j, v), j.getBBox && j.ownerSVGElement && d !== h && Z.set(j.ownerSVGElement, {
            touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : d ? "pan-y" : "pan-x"
          }), r.allowContextMenu || ke(j, "contextmenu", Vn);
        ai(g, !1);
      }
      return bs(t, ni), X = !0, at && G !== "soft" && at.track($ || t, s ? "x,y" : o ? "rotation" : "top,left"), t._gsDragID = N = t._gsDragID || "d" + Sl++, hr[N] = l, $ && ($.enable(), $.element._gsDragID = N), (r.bounds || o) && ii(), r.bounds && l.applyBounds(), l;
    }, i.disable = function(G) {
      for (var v = l.isDragging, N = g.length, P; --N > -1; )
        Vi(g[N], "cursor", null);
      if (G !== "soft") {
        for (ms(g, null), N = g.length; --N > -1; )
          P = g[N], Vi(P, "touchCallout", null), be(P, "mousedown", Pr), be(P, "touchstart", Pr), be(P, "click", Un, !0), be(P, "contextmenu", Vn);
        ai(g, !0), Pe && (be(Pe, "touchcancel", st), be(Pe, "touchend", st), be(Pe, "touchmove", zt)), be(O, "mouseup", st), be(O, "mousemove", zt);
      }
      return ws(t, ni), X = !1, at && G !== "soft" && (at.untrack($ || t, s ? "x,y" : o ? "rotation" : "top,left"), l.tween && l.tween.kill()), $ && $.disable(), ys(ft), l.isDragging = l.isPressed = Sr = !1, v && me(l, "dragend", "onDragEnd"), l;
    }, i.enabled = function(G, v) {
      return arguments.length ? G ? l.enable(v) : l.disable(v) : X;
    }, i.kill = function() {
      return l.isThrowing = !1, l.tween && l.tween.kill(), l.disable(), Z.set(g, {
        clearProps: "userSelect"
      }), delete hr[t._gsDragID], l;
    }, i.revert = function() {
      this.kill(), this.styles && this.styles.revert();
    }, ~n.indexOf("scroll") && ($ = i.scrollProxy = new $l(t, Pl({
      onKill: function() {
        l.isPressed && st(null);
      }
    }, r)), t.style.overflowY = h && !pn ? "auto" : "hidden", t.style.overflowX = d && !pn ? "auto" : "hidden", t = $.content), o ? f.rotation = 1 : (d && (f[u] = 1), h && (f[c] = 1)), T.force3D = "force3D" in r ? r.force3D : !0, $o(ps(i)), i.enable(), i;
  }
  return e.register = function(r) {
    Z = r, Ui();
  }, e.create = function(r, i) {
    return hn || Ui(!0), Ot(r).map(function(n) {
      return new e(n, i);
    });
  }, e.get = function(r) {
    return hr[(Ot(r)[0] || {})._gsDragID];
  }, e.timeSinceDrag = function() {
    return (Rt() - gs) / 1e3;
  }, e.hitTest = function(r, i, n) {
    if (r === i)
      return !1;
    var s = ar(r), o = ar(i), u = s.top, c = s.left, d = s.right, h = s.bottom, _ = s.width, l = s.height, g = o.left > d || o.right < c || o.top > h || o.bottom < u, f, m, b;
    return g || !n ? !g : (b = (n + "").indexOf("%") !== -1, n = parseFloat(n) || 0, f = {
      left: Math.max(c, o.left),
      top: Math.max(u, o.top)
    }, f.width = Math.min(d, o.right) - f.left, f.height = Math.min(h, o.bottom) - f.top, f.width < 0 || f.height < 0 ? !1 : b ? (n *= 0.01, m = f.width * f.height, m >= _ * l * n || m >= o.width * o.height * n) : f.width > n && f.height > n);
  }, e;
}(Al);
Rl(kr.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1
});
kr.zIndex = 1e3;
kr.version = "3.13.0";
Lo() && Z.registerPlugin(kr);
const Ll = {};
Oe.registerPlugin(kr);
const ac = ({
  label: a = "toggle",
  checked: e,
  defaultChecked: t = !1,
  disabled: r = !1,
  required: i = !1,
  onChange: n,
  name: s,
  id: o,
  value: u
}) => {
  const c = te(null), d = te(null), h = te(
    o || `switch-${Math.random().toString(36).slice(2, 9)}`
  ), [_, l] = Se(t), g = e !== void 0, f = g ? !!e : _, m = te({
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
  }), b = te(m.current.complete), y = gr(
    (x) => {
      const R = x ? 100 : 0;
      g || l(x), m.current.complete = R, b.current = R, c.current && (c.current.setAttribute("aria-pressed", x ? "true" : "false"), c.current.style.setProperty("--complete", `${R}`));
    },
    [g]
  );
  Q(() => {
    g && y(!!e);
  }, [e, g, y]), Q(() => {
    g || y(t);
  }, [t, g, y]);
  const S = gr(
    (x) => {
      if (n) {
        const R = {
          checked: x,
          name: s || "",
          value: u || "",
          type: "checkbox"
        }, k = {
          target: R,
          currentTarget: R,
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
    [s, n, u]
  );
  Q(() => {
    if (r) return;
    const x = c.current;
    if (!x) return;
    let R = null, k = !1;
    const T = m.current;
    T.complete = f ? 100 : T.complete, b.current = T.complete;
    const C = getComputedStyle(document.documentElement).getPropertyValue("--color-switch-checked-hue").trim();
    if (C) {
      const A = parseInt(C, 10);
      isNaN(A) || (T.hue = A);
    }
    x.style.setProperty("--complete", `${T.complete}`), x.style.setProperty("--hue", `${T.hue}`), x.setAttribute("aria-pressed", f ? "true" : "false");
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
      }), document.documentElement.dataset.theme = T.theme, document.documentElement.dataset.mapped = String(T.mapped), document.documentElement.dataset.delta = String(T.delta), document.documentElement.dataset.debug = String(T.debug), document.documentElement.dataset.active = String(T.active), document.documentElement.dataset.bounce = String(T.bounce), x.style.setProperty("--complete", `${T.complete}`), x.style.setProperty("--hue", `${T.hue}`);
    }, X = async () => {
      if (r) return;
      x.dataset.pressed = "true", T.bubble && (x.dataset.active = "true"), await Promise.allSettled(
        T.bounce ? [] : x.getAnimations({ subtree: !0 }).map((I) => I.finished)
      );
      const A = x.matches("[aria-pressed=true]");
      Oe.timeline({
        onComplete: () => {
          Oe.delayedCall(0.05, () => {
            x.dataset.active = "false", x.dataset.pressed = "false";
            const I = !A;
            y(I), S(I);
          });
        }
      }).to(x, {
        "--complete": A ? 0 : 100,
        duration: 0.12,
        delay: T.bounce && T.bubble ? 0.18 : 0
      });
    }, $ = document.createElement("div");
    R = kr.create($, {
      allowContextMenu: !0,
      handle: x,
      onDragStart: function() {
        const I = this, W = x.getBoundingClientRect(), w = x.matches("[aria-pressed=true]") ? W.left - (I.pointerX ?? 0) : W.left + W.width - (I.pointerX ?? 0);
        I.dragBounds = w, x.dataset.active = "true";
      },
      onDrag: function() {
        const I = this, W = x.matches("[aria-pressed=true]"), H = (I.x ?? 0) - (I.startX ?? 0), w = Oe.utils.clamp(
          0,
          100,
          W ? Oe.utils.mapRange(I.dragBounds ?? 0, 0, 0, 100, H) : Oe.utils.mapRange(0, I.dragBounds ?? 0, 0, 100, H)
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
                const H = W >= 50;
                y(H), S(H);
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
        const H = (I.__releaseTime ?? 0) - (I.__pressTime ?? 0) <= 150, M = (I.startX !== void 0 && I.endX !== void 0 ? Math.abs(I.endX - I.startX) : 0) < 4;
        if (H && M) {
          const V = x.getBoundingClientRect(), de = (I.endX ?? I.pointerX ?? I.startX ?? 0) - V.left, _e = V.width, re = de < _e / 2, Be = x.matches("[aria-pressed=true]");
          (Be && re || !Be && !re) && X();
        }
      }
    })[0];
    const q = (A) => {
      A.key === "Enter" && X(), A.key === " " && A.preventDefault();
    }, U = (A) => {
      A.key === " " && X();
    };
    return x.addEventListener("keydown", q), x.addEventListener("keyup", U), (async () => {
      if (typeof window > "u" || k) {
        O();
        return;
      }
      if (typeof import.meta < "u" && Ll) {
        O();
        return;
      }
      try {
        let A = null;
        try {
          A = await new Function(
            "specifier",
            "return import(specifier)"
          )("tweakpane");
        } catch {
          O();
          return;
        }
        if (!A || k) {
          O();
          return;
        }
        const { Pane: I } = A;
        if (!I) {
          O();
          return;
        }
        const W = new I({ title: "config" });
        d.current = W;
        const H = (B) => {
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
        const M = W.addFolder({
          title: "behavior",
          expanded: !1
        });
        M.addBinding(T, "bounce"), M.addBinding(T, "mapped"), M.addBinding(T, "bubble"), M.addBinding(T, "delta"), M.addBinding(T, "hue", {
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
        }), W.on("change", H), O();
      } catch {
        O();
      }
    })(), O(), () => {
      k = !0, x.removeEventListener("keydown", q), x.removeEventListener("keyup", U), d.current && (d.current.dispose(), d.current = null), R && R.kill();
    };
  }, [f, r, S, y]);
  const E = h.current;
  return /* @__PURE__ */ p.jsx("div", { className: "switch-stage", children: /* @__PURE__ */ p.jsx("main", { children: /* @__PURE__ */ p.jsxs(
    "button",
    {
      id: E,
      ref: c,
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
function Il(a, e, t, r, i) {
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
function Fl(a, e, t) {
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
function Bl(a, e, t) {
  return a == null || a === "" ? (Ue(`${t} is required but was not provided.`, e), !1) : !0;
}
function Xl(a, e, t = "children") {
  return !a || typeof a != "object" || !("$$typeof" in a) ? (Ue(`${t} must be a valid React element.`, e), !1) : !0;
}
function Go(a, e, t) {
  return a <= 0 ? (Ue(`${t} must be a positive number. Got: ${a}`, e), !1) : !0;
}
function Vo(a, e, t) {
  return a === void 0 ? !0 : typeof a == "number" && a <= 0 ? (Ue(`${t} must be a positive number. Got: ${a}`, e), !1) : typeof a == "string" && !/^(\d+(\.\d+)?(px|rem|em|%|vh|vw)|auto)$/.test(a.trim()) ? (Ue(`${t} must be a valid CSS size value. Got: ${a}`, e), !1) : !0;
}
const lc = ({
  label: a,
  options: e,
  value: t,
  defaultValue: r,
  placeholder: i = "Select an option...",
  disabled: n = !1,
  required: s = !1,
  variant: o = "default",
  error: u,
  helperText: c,
  onChange: d,
  name: h,
  id: _
}) => {
  const [l, g] = Se(!1), [f, m] = Se(r || ""), b = _ || `select-${Math.random().toString(36).substr(2, 9)}`, y = te(null), S = t !== void 0, E = S ? t : f, x = o === "error" || !!u, R = u || c, k = e.find((C) => C.value === E);
  Q(() => {
    Bn(e, ["value", "label"], "Select", "options"), E !== void 0 && E !== "" && Il(
      E,
      e.map((C) => C.value),
      "Select",
      "value"
    );
  }, [e, E]), Q(() => {
    const C = (O) => {
      y.current && !y.current.contains(O.target) && g(!1);
    };
    if (l)
      return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [l]), Q(() => {
    const C = (O) => {
      O.key === "Escape" && l && g(!1);
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [l]);
  const T = (C) => {
    S || m(C), d == null || d(C), g(!1);
  }, D = (C) => {
    if (!n) {
      if (C.key === "Enter" || C.key === " ")
        C.preventDefault(), g(!l);
      else if (C.key === "ArrowDown")
        if (C.preventDefault(), !l)
          g(!0);
        else {
          const O = e.findIndex(($) => $.value === E), X = O < e.length - 1 ? O + 1 : 0;
          T(e[X].value);
        }
      else if (C.key === "ArrowUp" && (C.preventDefault(), l)) {
        const O = e.findIndex(($) => $.value === E), X = O > 0 ? O - 1 : e.length - 1;
        T(e[X].value);
      }
    }
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "select-wrapper", ref: y, children: [
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
          onKeyDown: D,
          "aria-invalid": x,
          "aria-describedby": R ? `${b}-helper` : void 0,
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
    R && /* @__PURE__ */ p.jsx(
      "span",
      {
        id: `${b}-helper`,
        className: `select-helper ${x ? "error" : ""}`,
        children: R
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
}, cc = ({
  value: a = 40,
  onChange: e,
  id: t
}) => {
  const r = te(null), i = te(null), n = te(null), [s, o] = Se(!1), [u, c] = Se(null), d = (y) => {
    if (y = Math.max(0, Math.min(100, y)), i.current && n.current && u) {
      const S = y / 100 * u.width;
      i.current.style.width = `${y}%`, n.current.style.left = `${S}px`;
    }
  }, h = (y) => u ? (y - u.left) / u.width * 100 : 0, _ = (y) => {
    const S = h(y);
    d(S), e == null || e(S);
  }, l = (y) => {
    var S;
    y.preventDefault(), r.current && (o(!0), c(r.current.getBoundingClientRect()), _(y.clientX), (S = n.current) == null || S.classList.add("active"));
  }, g = (y) => {
    var S;
    r.current && (o(!0), c(r.current.getBoundingClientRect()), _(y.touches[0].clientX), (S = n.current) == null || S.classList.add("active"));
  }, f = () => {
    var y;
    o(!1), (y = n.current) == null || y.classList.remove("active");
  };
  Q(() => {
    if (r.current) {
      const y = r.current.getBoundingClientRect();
      c(y), d(a);
    }
  }, [a]), Q(() => {
    s || d(a);
  }, [a, s]), Q(() => {
    const y = (E) => {
      s && _(E.clientX);
    }, S = () => {
      f();
    };
    return s && (document.addEventListener("mousemove", y), document.addEventListener("mouseup", S)), () => {
      document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", S);
    };
  }, [s, u]), Q(() => {
    const y = (E) => {
      s && (E.preventDefault(), _(E.touches[0].clientX));
    }, S = () => {
      f();
    };
    return s && (document.addEventListener("touchmove", y, { passive: !1 }), document.addEventListener("touchend", S)), () => {
      document.removeEventListener("touchmove", y), document.removeEventListener("touchend", S);
    };
  }, [s, u]);
  const m = (y) => {
    var S;
    r.current && (o(!0), c(r.current.getBoundingClientRect()), (S = n.current) == null || S.classList.add("active"), _(y.clientX));
  }, b = (y) => {
    var S;
    r.current && (o(!0), c(r.current.getBoundingClientRect()), (S = n.current) == null || S.classList.add("active"), _(y.touches[0].clientX));
  };
  return Q(() => {
    const y = () => {
      r.current && c(r.current.getBoundingClientRect());
    };
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
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
}, uc = ({
  header: a,
  children: e,
  footer: t,
  image: r,
  imageAlt: i,
  hoverable: n = !1,
  clickable: s = !1,
  onClick: o,
  variant: u = "default",
  className: c = ""
}) => /* @__PURE__ */ p.jsxs(
  "div",
  {
    className: `card ${u} ${n ? "hoverable" : ""} ${s ? "clickable" : ""} ${r ? "has-image" : ""} gl ${c}`,
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
), dc = ({
  children: a,
  variant: e = "primary",
  size: t = "medium",
  dot: r = !1,
  max: i,
  count: n,
  className: s = ""
}) => {
  const o = n !== void 0 && i !== void 0 && n > i ? `${i}+` : n == null ? void 0 : n.toString(), c = (() => {
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
      width: c.width,
      height: c.height,
      children: /* @__PURE__ */ p.jsx("span", { className: `badge badge-dot ${e} ${t} ${s}` })
    }
  ) : n !== void 0 ? /* @__PURE__ */ p.jsx(
    ye,
    {
      borderRadius: 999,
      className: "badge-wrapper",
      width: c.width,
      height: c.height,
      children: /* @__PURE__ */ p.jsx("span", { className: `badge badge-count ${e} ${t} ${s}`, children: o })
    }
  ) : /* @__PURE__ */ p.jsx(
    ye,
    {
      borderRadius: 999,
      className: "badge-wrapper",
      width: c.width,
      height: c.height,
      children: /* @__PURE__ */ p.jsx("span", { className: `badge ${e} ${t} ${s}`, children: a })
    }
  );
}, fc = ({
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
  }, u = (d) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), o(d));
  }, c = i === "small" ? 24 : i === "medium" ? 28 : 32;
  return /* @__PURE__ */ p.jsx(
    ye,
    {
      height: c,
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
            onKeyDown: u,
            disabled: n,
            "aria-label": "Remove",
            children: "×"
          }
        )
      ] })
    }
  );
}, hc = ({
  children: a,
  variant: e = "default",
  size: t = "medium",
  className: r = ""
}) => {
  const i = te(null), [n, s] = Se(null);
  Q(() => {
    if (i.current) {
      const u = () => {
        var _;
        const h = (_ = i.current) == null ? void 0 : _.getBoundingClientRect();
        h && h.width > 0 && h.height > 0 && s({ width: h.width, height: h.height });
      }, c = setTimeout(u, 0), d = new ResizeObserver(u);
      return d.observe(i.current), () => {
        clearTimeout(c), d.disconnect();
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
}, pc = ({
  src: a,
  alt: e,
  initials: t,
  size: r = "medium",
  shape: i = "circle",
  badge: n,
  className: s = ""
}) => {
  const [o, u] = Se(!1), c = () => ({
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
  }, _ = !a || o, l = c(), g = d(l), m = (() => {
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
  })(), b = m !== null && m.value !== void 0, y = () => {
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
                  onError: () => u(!0)
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
            children: y()
          }
        )
      ]
    }
  );
};
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yl = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Ss = (a) => {
  const e = Yl(a);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Wo = (...a) => a.filter((e, t, r) => !!e && e.trim() !== "" && r.indexOf(e) === t).join(" ").trim(), Gl = (a) => {
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
var Vl = {
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
const Wl = Rs(
  ({
    color: a = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: n,
    iconNode: s,
    ...o
  }, u) => qi(
    "svg",
    {
      ref: u,
      ...Vl,
      width: e,
      height: e,
      stroke: a,
      strokeWidth: r ? Number(t) * 24 / Number(e) : t,
      className: Wo("lucide", i),
      ...!n && !Gl(o) && { "aria-hidden": "true" },
      ...o
    },
    [
      ...s.map(([c, d]) => qi(c, d)),
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
const Uo = (a, e) => {
  const t = Rs(
    ({ className: r, ...i }, n) => qi(Wl, {
      ref: n,
      iconNode: e,
      className: Wo(
        `lucide-${zl(Ss(a))}`,
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
], Es = Uo("plus", Ul);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Hl = Uo("x", ql), _c = ({
  children: a,
  variant: e = "default",
  title: t,
  showBar: r = !1,
  showIcon: i = !0,
  icon: n,
  dismissible: s = !1,
  onDismiss: o,
  actionText: u,
  onAction: c,
  dismissLabel: d = "dismiss",
  className: h = "",
  width: _ = "100%",
  blur: l,
  size: g = "medium",
  animation: f,
  removeAnimation: m,
  showCloseIcon: b,
  removeAnimationOnWrapper: y = !1,
  timeout: S
}) => {
  const [E, x] = Se(!1), [R, k] = Se(!1), T = gr(() => {
    m ? (k(!0), setTimeout(() => {
      o == null || o();
    }, m === "bounce" ? 700 : m === "slide" || m === "slideUp" || m === "slideDown" ? 600 : 500)) : o == null || o();
  }, [m, o]);
  Q(() => {
    f && x(!0);
  }, [f]), Q(() => {
    if (S && S > 0 && o) {
      const A = setTimeout(() => {
        T();
      }, S);
      return () => {
        clearTimeout(A);
      };
    }
  }, [S, o, T]);
  const D = b !== void 0 ? b : !0, C = (A) => {
    (A.key === "Enter" || A.key === " ") && (A.preventDefault(), T());
  }, O = (A) => {
    (A.key === "Enter" || A.key === " ") && (A.preventDefault(), c == null || c());
  }, $ = n !== void 0 ? n : i ? /* @__PURE__ */ p.jsx("div", { className: "alert-icon-default", children: /* @__PURE__ */ p.jsx("span", { children: "i" }) }) : null, q = f && E ? `alert-animate-${f}` : "", U = m && R && !y ? `alert-remove-animate-${m}` : "", z = m && R && y ? `alert-wrapper-remove-animate-${m}` : "";
  return /* @__PURE__ */ p.jsx(
    ye,
    {
      height: "auto",
      borderRadius: 8,
      width: _ || "100%",
      blur: l,
      className: `alert-glass-surface ${z} ${h}`,
      children: /* @__PURE__ */ p.jsxs(
        "div",
        {
          className: `alert ${e} ${r ? "alert-bar" : ""} ${g} ${q} ${U}`,
          role: "alert",
          "aria-live": "polite",
          style: { width: _ || "100%" },
          children: [
            $ && /* @__PURE__ */ p.jsx("div", { className: "alert-icon-wrapper", children: $ }),
            /* @__PURE__ */ p.jsxs("div", { className: "alert-content", children: [
              t && /* @__PURE__ */ p.jsx("div", { className: "alert-title", children: t }),
              /* @__PURE__ */ p.jsx("div", { className: "alert-message", children: a }),
              (u || s) && /* @__PURE__ */ p.jsxs("div", { className: "alert-actions", children: [
                u && /* @__PURE__ */ p.jsx(
                  "button",
                  {
                    type: "button",
                    className: "alert-action-link",
                    onClick: c,
                    onKeyDown: O,
                    children: u
                  }
                ),
                s && /* @__PURE__ */ p.jsx(
                  "button",
                  {
                    type: "button",
                    className: "alert-dismiss-link",
                    onClick: T,
                    onKeyDown: C,
                    children: d
                  }
                )
              ] })
            ] }),
            D && /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                className: "alert-dismiss",
                onClick: T,
                onKeyDown: C,
                "aria-label": "Dismiss alert",
                children: /* @__PURE__ */ p.jsx(Hl, { size: 18 })
              }
            )
          ]
        }
      )
    }
  );
}, gc = ({
  value: a,
  max: e = 100,
  showValue: t = !1,
  variant: r = "default",
  size: i = "medium",
  indeterminate: n = !1,
  className: s = ""
}) => {
  Q(() => {
    Go(e, "Progress", "max"), n || zo(a, 0, e, "Progress", "value");
  }, [a, e, n]);
  const o = Math.min(100, Math.max(0, a / e * 100)), u = () => {
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
                "--hue": u(),
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
}, mc = ({
  columns: a,
  data: e,
  striped: t = !1,
  hoverable: r = !1,
  className: i = ""
}) => (Q(() => {
  Fl(a, e, "Table");
}, [a, e]), /* @__PURE__ */ p.jsx("div", { className: `table-wrapper ${i}`, children: /* @__PURE__ */ p.jsxs("table", { className: `table ${t ? "striped" : ""} ${r ? "hoverable" : ""}`, children: [
  /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsx("tr", { children: a.map((n) => /* @__PURE__ */ p.jsx("th", { children: n.header }, n.key)) }) }),
  /* @__PURE__ */ p.jsx("tbody", { children: e.map((n, s) => /* @__PURE__ */ p.jsx("tr", { children: a.map((o) => /* @__PURE__ */ p.jsx("td", { children: o.render ? o.render(n[o.key], n) : n[o.key] }, o.key)) }, s)) })
] }) })), xc = ({
  items: a,
  defaultActiveKey: e,
  activeKey: t,
  onChange: r,
  className: i = ""
}) => {
  var R;
  const [n, s] = Se(
    e || ((R = a[0]) == null ? void 0 : R.key) || ""
  ), o = t !== void 0, u = o ? t : n, c = te(null), d = te(null), h = te(null), _ = te(/* @__PURE__ */ new Map()), [l, g] = Se(!1), f = te(!1), m = te(0), b = te(null), y = gr(
    (k, T = !0) => {
      const D = _.current.get(k), C = h.current, O = c.current, X = d.current;
      if (!D || !C || !O) return;
      const $ = X ? X.getBoundingClientRect() : O.getBoundingClientRect(), q = D.getBoundingClientRect(), U = q.left - $.left, z = q.top - $.top, A = Math.min(q.width, 80), I = Math.min(q.height, 60);
      T && !l ? (g(!0), m.current = 0, C.style.setProperty("--complete", "0"), C.style.setProperty("--delta", "0"), C.dataset.active = "true", C.dataset.pressed = "true", C.dataset.bounce = "true", Oe.timeline({
        onComplete: () => {
          m.current = 100, C.style.setProperty("--complete", "100"), C.style.setProperty("--delta", "0"), C.dataset.active = "false", C.dataset.pressed = "false", g(!1), b.current = { left: U, top: z, width: A, height: I };
        }
      }).to(
        C,
        {
          "--target-x": `${U}px`,
          "--target-y": `${z}px`,
          "--target-width": `${A}px`,
          "--target-height": `${I * 1.5}px`,
          // Scale height to 1.5x during transition
          "--complete": 100,
          "--delta": "12",
          duration: 0.15,
          ease: "power2.out",
          onUpdate: function() {
            const H = this.progress() * 100;
            m.current = H, C.style.setProperty("--complete", `${H}`);
            const w = 12 * (1 - this.progress());
            C.style.setProperty("--delta", `${w}`);
            const M = 1.5 - this.progress() * 0.5;
            C.style.setProperty("--height-scale", `${M}`);
          }
        },
        0
      ).to(
        C,
        {
          "--target-height": `${I}px`,
          "--height-scale": "1",
          "--delta": "0",
          duration: 0.1,
          ease: "power2.out"
        },
        "-=0.05"
      )) : (C.style.setProperty("--target-x", `${U}px`), C.style.setProperty("--target-y", `${z}px`), C.style.setProperty("--target-width", `${A}px`), C.style.setProperty("--target-height", `${I}px`), C.style.setProperty("--height-scale", "1"), m.current = 100, C.style.setProperty("--complete", "100"), C.style.setProperty("--delta", "0"), b.current = { left: U, top: z, width: A, height: I });
    },
    [l]
  ), S = (k, T) => {
    T || l || (f.current = !0, o || s(k), r == null || r(k), requestAnimationFrame(() => {
      y(k, !0), setTimeout(() => {
        f.current = !1;
      }, 250);
    }));
  }, E = (k, T, D) => {
    if (k.key === "Enter" || k.key === " ")
      k.preventDefault(), S(T);
    else if (k.key === "ArrowRight") {
      k.preventDefault();
      const C = (D + 1) % a.length;
      a[C].disabled || S(a[C].key);
    } else if (k.key === "ArrowLeft") {
      k.preventDefault();
      const C = (D - 1 + a.length) % a.length;
      a[C].disabled || S(a[C].key);
    }
  };
  Q(() => {
    Bn(a, ["key", "label", "content"], "Tabs", "items"), Yo(a, (k) => k.key, "Tabs", "items");
  }, [a]), Q(() => {
    u && _.current.size > 0 && !f.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        y(u, !1);
      });
    });
  }, [u, a.length, y]), Q(() => {
    if (u && _.current.size > 0 && h.current && !b.current) {
      const k = setTimeout(() => {
        y(u, !1);
      }, 0);
      return () => clearTimeout(k);
    }
  }, [u, a.length, y]);
  const x = a.find((k) => k.key === u);
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
    /* @__PURE__ */ p.jsx("div", { className: "tabs-header-wrapper", ref: d, children: u && /* @__PURE__ */ p.jsx("div", { ref: h, className: "tab-glass-drop-wrapper", children: /* @__PURE__ */ p.jsxs(
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
    /* @__PURE__ */ p.jsx("div", { className: "tabs-header", ref: c, role: "tablist", children: a.map((k, T) => {
      const D = k.key === u;
      return /* @__PURE__ */ p.jsxs(
        "button",
        {
          ref: (C) => {
            C ? _.current.set(k.key, C) : _.current.delete(k.key);
          },
          role: "tab",
          "aria-selected": D,
          "aria-controls": `tabpanel-${k.key}`,
          id: `tab-${k.key}`,
          className: `tab-button ${D ? "active" : ""} ${k.disabled ? "disabled" : ""}`,
          onClick: () => S(k.key, k.disabled),
          onKeyDown: (C) => E(C, k.key, T),
          disabled: k.disabled,
          tabIndex: D ? 0 : -1,
          children: [
            k.icon && /* @__PURE__ */ p.jsx("span", { className: "tab-button__icon", children: k.icon }),
            /* @__PURE__ */ p.jsx("span", { className: "tab-button__label", children: k.label })
          ]
        },
        k.key
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
}, yc = ({
  items: a,
  multiple: e = !1,
  defaultOpenKeys: t = [],
  openKeys: r,
  onChange: i,
  className: n = "",
  showSubtitle: s = !0,
  initialSubtitleShow: o = !0
}) => {
  const [u, c] = Se(t), d = r !== void 0, h = d ? r : u, _ = te(/* @__PURE__ */ new Map()), l = (f, m) => {
    if (m) return;
    const b = h.includes(f);
    let y;
    b ? y = h.filter((S) => S !== f) : y = e ? [...h, f] : [f], d || c(y), i == null || i(y);
  };
  Vr.useEffect(() => {
    Bn(a, ["key", "title"], "Accordion", "items"), Yo(a, (f) => f.key, "Accordion", "items");
  }, [a]);
  const g = (f, m) => {
    (f.key === "Enter" || f.key === " ") && (f.preventDefault(), l(m));
  };
  return /* @__PURE__ */ p.jsx("div", { className: `accordion ${n}`, children: a.map((f) => {
    const m = h.includes(f.key), b = f.children || f.content, y = f.showSubtitle !== void 0 ? f.showSubtitle : s, S = f.initialSubtitleShow !== void 0 ? f.initialSubtitleShow : o, E = y && f.subtitle && (S || m), x = !m && !S && f.subtitle && y, R = E || m;
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
        className: `accordion-item ${m ? "accordion-item--open" : ""} ${R ? "accordion-item--align-top" : ""} ${f.badge ? "accordion-item--has-badge" : ""}`,
        children: [
          f.badge && /* @__PURE__ */ p.jsx("div", { className: "accordion-badge-wrapper", children: f.badge }),
          /* @__PURE__ */ p.jsxs("div", { className: "accordion-header-wrapper", children: [
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                className: `accordion-header ${m ? "accordion-header--open" : ""} ${f.disabled ? "accordion-header--disabled" : ""}`,
                onClick: () => {
                  var k;
                  l(f.key, f.disabled), (k = f.onClick) == null || k.call(f);
                },
                onKeyDown: (k) => g(k, f.key),
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
              ref: (k) => {
                k ? _.current.set(f.key, k) : _.current.delete(f.key);
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
}, Kl = ({
  items: a,
  selectedKey: e,
  onSelect: t,
  className: r = ""
}) => {
  const i = (s, o) => {
    o || t == null || t(s);
  }, n = (s, o, u) => {
    var c, d;
    if (s.key === "Enter" || s.key === " ")
      s.preventDefault(), i(o);
    else if (s.key === "ArrowDown") {
      s.preventDefault();
      const h = (u + 1) % a.length, _ = a[h];
      !_.disabled && !_.divider && ((c = document.getElementById(`menu-item-${_.key}`)) == null || c.focus());
    } else if (s.key === "ArrowUp") {
      s.preventDefault();
      const h = (u - 1 + a.length) % a.length, _ = a[h];
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
          onKeyDown: (u) => n(u, s.key, o),
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
}, vc = ({
  trigger: a,
  items: e,
  selectedKey: t,
  onSelect: r,
  placement: i = "bottom",
  className: n = ""
}) => {
  const [s, o] = Se(!1), u = te(null);
  Q(() => {
    const d = (h) => {
      u.current && !u.current.contains(h.target) && o(!1);
    };
    if (s)
      return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [s]), Q(() => {
    const d = (h) => {
      h.key === "Escape" && s && o(!1);
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [s]);
  const c = (d) => {
    r == null || r(d), o(!1);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: `dropdown ${n}`, ref: u, children: [
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
          Kl,
          {
            items: e,
            selectedKey: t,
            onSelect: c
          }
        )
      }
    )
  ] });
}, bc = ({
  current: a,
  total: e,
  pageSize: t = 5,
  onChange: r,
  showFirstLast: i = !0,
  showPrevNext: n = !0,
  className: s = ""
}) => {
  Q(() => {
    Go(e, "Pagination", "total"), zo(a, 1, e, "Pagination", "current");
  }, [a, e]);
  const o = () => {
    const h = [], _ = Math.floor(t / 2);
    let l = Math.max(1, a - _), g = Math.min(e, a + _);
    a <= _ && (g = Math.min(e, t)), a >= e - _ && (l = Math.max(1, e - t + 1)), l > 1 && i && (h.push(1), l > 2 && h.push("ellipsis-start"));
    for (let f = l; f <= g; f++)
      h.push(f);
    return g < e && i && (g < e - 1 && h.push("ellipsis-end"), h.push(e)), h;
  }, u = (h) => {
    h >= 1 && h <= e && h !== a && (r == null || r(h));
  }, c = (h, _) => {
    (h.key === "Enter" || h.key === " ") && (h.preventDefault(), u(_));
  }, d = o();
  return /* @__PURE__ */ p.jsx("nav", { className: `pagination ${s}`, "aria-label": "Pagination", children: /* @__PURE__ */ p.jsxs("ul", { className: "pagination-list", children: [
    n && /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "pagination-button pagination-prev",
        onClick: () => u(a - 1),
        onKeyDown: (h) => c(h, a - 1),
        disabled: a === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ) }),
    d.map((h, _) => typeof h == "string" ? /* @__PURE__ */ p.jsx("li", { className: "pagination-ellipsis", children: "..." }, `${h}-${_}`) : /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: `pagination-button ${h === a ? "active" : ""}`,
        onClick: () => u(h),
        onKeyDown: (l) => c(l, h),
        "aria-label": `Page ${h}`,
        "aria-current": h === a ? "page" : void 0,
        children: h
      }
    ) }, h)),
    n && /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "pagination-button pagination-next",
        onClick: () => u(a + 1),
        onKeyDown: (h) => c(h, a + 1),
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
function Ql(a) {
  return Ps += 10, Ps;
}
function Zl(a, e) {
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
  return Q(() => {
    if (r) return;
    const s = Cs(e);
    i.current = s;
    const o = t ?? Ql();
    return n.current = o, Zl(e, o), s.style.pointerEvents = "auto", () => {
      s && s.children.length === 0 && (s.style.pointerEvents = "none");
    };
  }, [e, t, r]), r || typeof document > "u" ? /* @__PURE__ */ p.jsx(p.Fragment, { children: a }) : (i.current || (i.current = Cs(e)), Jo(a, i.current));
}, wc = ({
  open: a,
  children: e,
  title: t,
  closable: r = !0,
  onClose: i,
  maskClosable: n = !0,
  width: s = 520,
  className: o = ""
}) => {
  const u = te(null), c = te(null);
  if (Q(() => {
    a && (Vo(s, "Modal", "width"), r && !i && console.warn("[Modal] closable is true but onClose handler is not provided."));
  }, [a, s, r, i]), Q(() => {
    if (a) {
      c.current = document.activeElement, document.body.style.overflow = "hidden";
      const _ = (l) => {
        var b;
        if (l.key !== "Tab") return;
        const g = (b = u.current) == null ? void 0 : b.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!g || g.length === 0) return;
        const f = g[0], m = g[g.length - 1];
        l.shiftKey ? document.activeElement === f && (l.preventDefault(), m.focus()) : document.activeElement === m && (l.preventDefault(), f.focus());
      };
      return document.addEventListener("keydown", _), () => {
        var l;
        document.removeEventListener("keydown", _), document.body.style.overflow = "", (l = c.current) == null || l.focus();
      };
    } else
      document.body.style.overflow = "";
  }, [a]), Q(() => {
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
      ref: u,
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
}, Tc = ({
  open: a,
  children: e,
  title: t,
  placement: r = "right",
  size: i = 378,
  closable: n = !0,
  onClose: s,
  maskClosable: o = !0,
  className: u = ""
}) => {
  const c = te(null);
  if (Q(() => {
    a && (Vo(i, "Drawer", "size"), n && !s && console.warn("[Drawer] closable is true but onClose handler is not provided."));
  }, [a, i, n, s]), Q(() => {
    if (a)
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = "";
      };
  }, [a]), Q(() => {
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
      ref: c,
      className: `drawer drawer-${r} ${u}`,
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
}, kc = ({
  title: a,
  children: e,
  placement: t = "top",
  trigger: r = "hover",
  className: i = ""
}) => {
  const [n, s] = Se(!1), [o, u] = Se({ top: 0, left: 0 }), c = te(null), d = te(null);
  Q(() => {
    Bl(a, "Tooltip", "title"), Xl(e, "Tooltip", "children");
  }, [a, e]);
  const h = () => {
    if (!c.current || !d.current) return;
    const b = c.current.getBoundingClientRect(), y = d.current.getBoundingClientRect(), S = window.scrollX || window.pageXOffset, E = window.scrollY || window.pageYOffset;
    let x = 0, R = 0;
    switch (t) {
      case "top":
        x = b.top + E - y.height - 8, R = b.left + S + b.width / 2 - y.width / 2;
        break;
      case "bottom":
        x = b.bottom + E + 8, R = b.left + S + b.width / 2 - y.width / 2;
        break;
      case "left":
        x = b.top + E + b.height / 2 - y.height / 2, R = b.left + S - y.width - 8;
        break;
      case "right":
        x = b.top + E + b.height / 2 - y.height / 2, R = b.right + S + 8;
        break;
    }
    u({ top: x, left: R });
  };
  Q(() => {
    if (n) {
      h();
      const b = () => h(), y = () => h();
      return window.addEventListener("scroll", b, !0), window.addEventListener("resize", y), () => {
        window.removeEventListener("scroll", b, !0), window.removeEventListener("resize", y);
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
    ref: c
  };
  r === "hover" ? (f.onMouseEnter = _, f.onMouseLeave = l) : r === "focus" ? (f.onFocus = _, f.onBlur = l) : r === "click" && (f.onClick = g);
  const m = Vr.cloneElement(e, f);
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
}, Sc = ({
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
) }), Ec = ({
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
function Jl() {
  const [a, e] = Se([]), t = te(null), [r, i] = Se(10), n = () => {
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
    ], u = Math.floor(Math.random() * 3) + 1;
    let c = "";
    for (let d = 0; d < u; d++) {
      const h = Math.floor(Math.random() * o.length);
      c += o[h] + ". ";
    }
    return c;
  };
  Q(() => {
    e(Array.from({ length: r }, () => `${n()}`));
  }, [r]), Q(() => {
    setTimeout(() => {
      var o, u;
      (u = t.current) == null || u.scrollTo({
        top: (o = t.current) == null ? void 0 : o.scrollHeight
      });
    }, 0);
  }, []);
  const s = () => {
    const o = t.current;
    if (o && o.scrollTop <= 100) {
      const u = o.scrollHeight, c = o.scrollTop;
      i((d) => d + 10), e((d) => [
        ...Array.from({ length: 10 }, () => `${n()}`),
        ...d
      ]), setTimeout(() => {
        if (o) {
          const d = o.scrollHeight;
          o.scrollTop = c + (d - u);
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
      children: a.map((o, u) => /* @__PURE__ */ p.jsx("div", { className: "test-overflow-item", style: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        backgroundColor: "#f0f0f0"
      }, children: /* @__PURE__ */ p.jsx("div", { className: "test-overflow-item-content", children: /* @__PURE__ */ p.jsx("p", { children: o }) }) }, u))
    }
  ) });
}
function Pc({ children: a }) {
  return /* @__PURE__ */ p.jsx(Jl, {});
}
export {
  yc as Accordion,
  _c as Alert,
  pc as Avatar,
  dc as Badge,
  rc as Button,
  uc as Card,
  sc as Checkbox,
  fc as Chip,
  Tc as Drawer,
  vc as Dropdown,
  Sc as IconButton,
  ic as Input,
  Ec as List,
  Kl as Menu,
  wc as Modal,
  bc as Pagination,
  Pc as Pane,
  gc as Progress,
  oc as Radio,
  lc as Select,
  cc as Slider,
  ac as Switch,
  mc as Table,
  xc as Tabs,
  hc as Tag,
  nc as Textarea,
  kc as Tooltip
};
