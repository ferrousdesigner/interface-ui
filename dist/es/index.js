import re, { useState as U, useRef as B, useEffect as W } from "react";
import { createPortal as pe } from "react-dom";
var ve = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function pr() {
  if (Le) return Z;
  Le = 1;
  var n = re, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(d, c, b) {
    var p, h = {}, v = null, f = null;
    b !== void 0 && (v = "" + b), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (f = c.ref);
    for (p in c) u.call(c, p) && !o.hasOwnProperty(p) && (h[p] = c[p]);
    if (d && d.defaultProps) for (p in c = d.defaultProps, c) h[p] === void 0 && (h[p] = c[p]);
    return { $$typeof: i, type: d, key: v, ref: f, props: h, _owner: a.current };
  }
  return Z.Fragment = l, Z.jsx = t, Z.jsxs = t, Z;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function mr() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var n = re, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), x = Symbol.iterator, E = "@@iterator";
    function _(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = x && e[x] || e[E];
      return typeof s == "function" ? s : null;
    }
    var g = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var s = arguments.length, m = new Array(s > 1 ? s - 1 : 0), y = 1; y < s; y++)
          m[y - 1] = arguments[y];
        O("error", e, m);
      }
    }
    function O(e, s, m) {
      {
        var y = g.ReactDebugCurrentFrame, N = y.getStackAddendum();
        N !== "" && (s += "%s", m = m.concat([N]));
        var R = m.map(function($) {
          return String($);
        });
        R.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var S = !1, F = !1, C = !1, H = !1, P = !1, L;
    L = Symbol.for("react.module.reference");
    function j(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === o || P || e === a || e === b || e === p || H || e === f || S || F || C || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === h || e.$$typeof === t || e.$$typeof === d || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function K(e, s, m) {
      var y = e.displayName;
      if (y)
        return y;
      var N = s.displayName || s.name || "";
      return N !== "" ? m + "(" + N + ")" : m;
    }
    function V(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case l:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case b:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var s = e;
            return V(s) + ".Consumer";
          case t:
            var m = e;
            return V(m._context) + ".Provider";
          case c:
            return K(e, e.render, "ForwardRef");
          case h:
            var y = e.displayName || null;
            return y !== null ? y : M(e.type) || "Memo";
          case v: {
            var N = e, R = N._payload, $ = N._init;
            try {
              return M($(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, z = 0, me, be, xe, ye, ge, je, we;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ue() {
      {
        if (z === 0) {
          me = console.log, be = console.info, xe = console.warn, ye = console.error, ge = console.group, je = console.groupCollapsed, we = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        z++;
      }
    }
    function We() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, e, {
              value: me
            }),
            info: q({}, e, {
              value: be
            }),
            warn: q({}, e, {
              value: xe
            }),
            error: q({}, e, {
              value: ye
            }),
            group: q({}, e, {
              value: ge
            }),
            groupCollapsed: q({}, e, {
              value: je
            }),
            groupEnd: q({}, e, {
              value: we
            })
          });
        }
        z < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = g.ReactCurrentDispatcher, le;
    function te(e, s, m) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (N) {
            var y = N.stack.trim().match(/\n( *(at )?)/);
            le = y && y[1] || "";
          }
        return `
` + le + e;
      }
    }
    var oe = !1, ne;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Be();
    }
    function ke(e, s) {
      if (!e || oe)
        return "";
      {
        var m = ne.get(e);
        if (m !== void 0)
          return m;
      }
      var y;
      oe = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = ie.current, ie.current = null, Ue();
      try {
        if (s) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (A) {
              y = A;
            }
            Reflect.construct(e, [], $);
          } else {
            try {
              $.call();
            } catch (A) {
              y = A;
            }
            e.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            y = A;
          }
          e();
        }
      } catch (A) {
        if (A && y && typeof A.stack == "string") {
          for (var k = A.stack.split(`
`), I = y.stack.split(`
`), T = k.length - 1, D = I.length - 1; T >= 1 && D >= 0 && k[T] !== I[D]; )
            D--;
          for (; T >= 1 && D >= 0; T--, D--)
            if (k[T] !== I[D]) {
              if (T !== 1 || D !== 1)
                do
                  if (T--, D--, D < 0 || k[T] !== I[D]) {
                    var Y = `
` + k[T].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, Y), Y;
                  }
                while (T >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ie.current = R, We(), Error.prepareStackTrace = N;
      }
      var G = e ? e.displayName || e.name : "", J = G ? te(G) : "";
      return typeof e == "function" && ne.set(e, J), J;
    }
    function Ve(e, s, m) {
      return ke(e, !1);
    }
    function He(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function ae(e, s, m) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, He(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case b:
          return te("Suspense");
        case p:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case h:
            return ae(e.type, s, m);
          case v: {
            var y = e, N = y._payload, R = y._init;
            try {
              return ae(R(N), s, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, $e = {}, Ne = g.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var s = e._owner, m = ae(e.type, e._source, s ? s.type : null);
        Ne.setExtraStackFrame(m);
      } else
        Ne.setExtraStackFrame(null);
    }
    function qe(e, s, m, y, N) {
      {
        var R = Function.call.bind(Q);
        for (var $ in e)
          if (R(e, $)) {
            var k = void 0;
            try {
              if (typeof e[$] != "function") {
                var I = Error((y || "React class") + ": " + m + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              k = e[$](s, $, y, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              k = T;
            }
            k && !(k instanceof Error) && (se(N), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", m, $, typeof k), se(null)), k instanceof Error && !(k.message in $e) && ($e[k.message] = !0, se(N), w("Failed %s type: %s", m, k.message), se(null));
          }
      }
    }
    var Je = Array.isArray;
    function ce(e) {
      return Je(e);
    }
    function Xe(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, m = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return m;
      }
    }
    function Ge(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ge(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Re(e);
    }
    var Te = g.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Se;
    function Qe(e) {
      if (Q.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (Q.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, s) {
      typeof e.ref == "string" && Te.current;
    }
    function rr(e, s) {
      {
        var m = function() {
          De || (De = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        m.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function tr(e, s) {
      {
        var m = function() {
          Se || (Se = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        m.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var nr = function(e, s, m, y, N, R, $) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: m,
        props: $,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function ar(e, s, m, y, N) {
      {
        var R, $ = {}, k = null, I = null;
        m !== void 0 && (_e(m), k = "" + m), Ze(s) && (_e(s.key), k = "" + s.key), Qe(s) && (I = s.ref, er(s, N));
        for (R in s)
          Q.call(s, R) && !ze.hasOwnProperty(R) && ($[R] = s[R]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (R in T)
            $[R] === void 0 && ($[R] = T[R]);
        }
        if (k || I) {
          var D = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && rr($, D), I && tr($, D);
        }
        return nr(e, k, I, N, y, Te.current, $);
      }
    }
    var de = g.ReactCurrentOwner, Oe = g.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var s = e._owner, m = ae(e.type, e._source, s ? s.type : null);
        Oe.setExtraStackFrame(m);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Pe() {
      {
        if (de.current) {
          var e = M(de.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      return "";
    }
    var Ie = {};
    function ir(e) {
      {
        var s = Pe();
        if (!s) {
          var m = typeof e == "string" ? e : e.displayName || e.name;
          m && (s = `

Check the top-level render call using <` + m + ">.");
        }
        return s;
      }
    }
    function Ce(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var m = ir(s);
        if (Ie[m])
          return;
        Ie[m] = !0;
        var y = "";
        e && e._owner && e._owner !== de.current && (y = " It was passed a child from " + M(e._owner.type) + "."), X(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, y), X(null);
      }
    }
    function Me(e, s) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var m = 0; m < e.length; m++) {
            var y = e[m];
            fe(y) && Ce(y, s);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var N = _(e);
          if (typeof N == "function" && N !== e.entries)
            for (var R = N.call(e), $; !($ = R.next()).done; )
              fe($.value) && Ce($.value, s);
        }
      }
    }
    function lr(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var m;
        if (typeof s == "function")
          m = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === h))
          m = s.propTypes;
        else
          return;
        if (m) {
          var y = M(s);
          qe(m, e.props, "prop", y, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var N = M(s);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var s = Object.keys(e.props), m = 0; m < s.length; m++) {
          var y = s[m];
          if (y !== "children" && y !== "key") {
            X(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Ae = {};
    function Fe(e, s, m, y, N, R) {
      {
        var $ = j(e);
        if (!$) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = sr();
          I ? k += I : k += Pe();
          var T;
          e === null ? T = "null" : ce(e) ? T = "array" : e !== void 0 && e.$$typeof === i ? (T = "<" + (M(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, k);
        }
        var D = ar(e, s, m, N, R);
        if (D == null)
          return D;
        if ($) {
          var Y = s.children;
          if (Y !== void 0)
            if (y)
              if (ce(Y)) {
                for (var G = 0; G < Y.length; G++)
                  Me(Y[G], e);
                Object.freeze && Object.freeze(Y);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(Y, e);
        }
        if (Q.call(s, "key")) {
          var J = M(e), A = Object.keys(s).filter(function(vr) {
            return vr !== "key";
          }), he = A.length > 0 ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[J + he]) {
            var hr = A.length > 0 ? "{" + A.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, J, hr, J), Ae[J + he] = !0;
          }
        }
        return e === u ? or(D) : lr(D), D;
      }
    }
    function cr(e, s, m) {
      return Fe(e, s, m, !0);
    }
    function dr(e, s, m) {
      return Fe(e, s, m, !1);
    }
    var ur = dr, fr = cr;
    ee.Fragment = u, ee.jsx = ur, ee.jsxs = fr;
  }()), ee;
}
process.env.NODE_ENV === "production" ? ve.exports = pr() : ve.exports = mr();
var r = ve.exports;
const Ye = ({
  children: n,
  onClick: i,
  variant: l = "primary"
}) => /* @__PURE__ */ r.jsx(
  "button",
  {
    className: `button ${l}`,
    onClick: i,
    children: n
  }
), wr = ({
  label: n,
  placeholder: i,
  value: l,
  defaultValue: u,
  type: a = "text",
  disabled: o = !1,
  required: t = !1,
  variant: d = "default",
  error: c,
  helperText: b,
  onChange: p,
  onBlur: h,
  onFocus: v,
  name: f,
  id: x
}) => {
  const E = x || `input-${Math.random().toString(36).substr(2, 9)}`, _ = d === "error" || !!c, g = c || b;
  return /* @__PURE__ */ r.jsxs("div", { className: "input-wrapper", children: [
    n && /* @__PURE__ */ r.jsxs("label", { htmlFor: E, className: "input-label", children: [
      n,
      t && /* @__PURE__ */ r.jsx("span", { className: "input-required", children: "*" })
    ] }),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        id: E,
        name: f,
        type: a,
        value: l,
        defaultValue: u,
        placeholder: i,
        disabled: o,
        required: t,
        className: `input ${d} ${_ ? "error" : ""} ${o ? "disabled" : ""}`,
        onChange: p,
        onBlur: h,
        onFocus: v,
        "aria-invalid": _,
        "aria-describedby": g ? `${E}-helper` : void 0
      }
    ),
    g && /* @__PURE__ */ r.jsx(
      "span",
      {
        id: `${E}-helper`,
        className: `input-helper ${_ ? "error" : ""}`,
        children: g
      }
    )
  ] });
}, Er = ({
  label: n,
  placeholder: i,
  value: l,
  defaultValue: u,
  rows: a = 4,
  disabled: o = !1,
  required: t = !1,
  resizable: d = !0,
  maxLength: c,
  variant: b = "default",
  error: p,
  helperText: h,
  onChange: v,
  onBlur: f,
  onFocus: x,
  name: E,
  id: _
}) => {
  const g = _ || `textarea-${Math.random().toString(36).substr(2, 9)}`, w = b === "error" || !!p, O = p || h, S = (l == null ? void 0 : l.length) || 0;
  return /* @__PURE__ */ r.jsxs("div", { className: "textarea-wrapper", children: [
    n && /* @__PURE__ */ r.jsxs("label", { htmlFor: g, className: "textarea-label", children: [
      n,
      t && /* @__PURE__ */ r.jsx("span", { className: "textarea-required", children: "*" })
    ] }),
    /* @__PURE__ */ r.jsx(
      "textarea",
      {
        id: g,
        name: E,
        value: l,
        defaultValue: u,
        placeholder: i,
        rows: a,
        disabled: o,
        required: t,
        maxLength: c,
        className: `textarea ${b} ${w ? "error" : ""} ${o ? "disabled" : ""} ${d ? "" : "no-resize"}`,
        onChange: v,
        onBlur: f,
        onFocus: x,
        "aria-invalid": w,
        "aria-describedby": O || c ? `${g}-helper` : void 0
      }
    ),
    (O || c) && /* @__PURE__ */ r.jsxs("div", { className: "textarea-footer", children: [
      O && /* @__PURE__ */ r.jsx(
        "span",
        {
          id: `${g}-helper`,
          className: `textarea-helper ${w ? "error" : ""}`,
          children: O
        }
      ),
      c && /* @__PURE__ */ r.jsxs("span", { className: "textarea-counter", children: [
        S,
        " / ",
        c
      ] })
    ] })
  ] });
}, kr = ({
  label: n,
  checked: i,
  defaultChecked: l,
  disabled: u = !1,
  required: a = !1,
  indeterminate: o = !1,
  onChange: t,
  name: d,
  id: c,
  value: b
}) => {
  const p = c || `checkbox-${Math.random().toString(36).substr(2, 9)}`, h = re.useRef(null);
  return re.useEffect(() => {
    h.current && (h.current.indeterminate = o);
  }, [o]), /* @__PURE__ */ r.jsxs("div", { className: "checkbox-wrapper", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: h,
        id: p,
        type: "checkbox",
        name: d,
        value: b,
        checked: i,
        defaultChecked: l,
        disabled: u,
        required: a,
        onChange: t,
        className: "checkbox-input",
        "aria-checked": o ? "mixed" : i,
        "aria-required": a
      }
    ),
    n && /* @__PURE__ */ r.jsxs("label", { htmlFor: p, className: `checkbox-label ${u ? "disabled" : ""}`, children: [
      n,
      a && /* @__PURE__ */ r.jsx("span", { className: "checkbox-required", children: "*" })
    ] })
  ] });
}, $r = ({
  label: n,
  checked: i,
  defaultChecked: l,
  disabled: u = !1,
  required: a = !1,
  onChange: o,
  name: t,
  id: d,
  value: c
}) => {
  const b = d || `radio-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ r.jsxs("div", { className: "radio-wrapper", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        id: b,
        type: "radio",
        name: t,
        value: c,
        checked: i,
        defaultChecked: l,
        disabled: u,
        required: a,
        onChange: o,
        className: "radio-input",
        "aria-checked": i,
        "aria-required": a
      }
    ),
    n && /* @__PURE__ */ r.jsxs("label", { htmlFor: b, className: `radio-label ${u ? "disabled" : ""}`, children: [
      n,
      a && /* @__PURE__ */ r.jsx("span", { className: "radio-required", children: "*" })
    ] })
  ] });
}, Nr = ({
  label: n,
  checked: i,
  defaultChecked: l,
  disabled: u = !1,
  required: a = !1,
  onChange: o,
  name: t,
  id: d,
  value: c,
  size: b = "medium"
}) => {
  const p = d || `switch-${Math.random().toString(36).substr(2, 9)}`;
  return /* @__PURE__ */ r.jsxs("div", { className: "switch-wrapper", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        id: p,
        type: "checkbox",
        role: "switch",
        name: t,
        value: c,
        checked: i,
        defaultChecked: l,
        disabled: u,
        required: a,
        onChange: o,
        className: `switch-input ${b}`,
        "aria-checked": i,
        "aria-required": a
      }
    ),
    n && /* @__PURE__ */ r.jsxs("label", { htmlFor: p, className: `switch-label ${u ? "disabled" : ""}`, children: [
      n,
      a && /* @__PURE__ */ r.jsx("span", { className: "switch-required", children: "*" })
    ] })
  ] });
}, Rr = ({
  label: n,
  options: i,
  value: l,
  defaultValue: u,
  placeholder: a = "Select an option...",
  disabled: o = !1,
  required: t = !1,
  variant: d = "default",
  error: c,
  helperText: b,
  onChange: p,
  name: h,
  id: v
}) => {
  const [f, x] = U(!1), [E, _] = U(u || ""), g = v || `select-${Math.random().toString(36).substr(2, 9)}`, w = B(null), O = l !== void 0, S = O ? l : E, F = d === "error" || !!c, C = c || b, H = i.find((j) => j.value === S);
  W(() => {
    const j = (K) => {
      w.current && !w.current.contains(K.target) && x(!1);
    };
    if (f)
      return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, [f]), W(() => {
    const j = (K) => {
      K.key === "Escape" && f && x(!1);
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [f]);
  const P = (j) => {
    O || _(j), p == null || p(j), x(!1);
  }, L = (j) => {
    if (!o) {
      if (j.key === "Enter" || j.key === " ")
        j.preventDefault(), x(!f);
      else if (j.key === "ArrowDown")
        if (j.preventDefault(), !f)
          x(!0);
        else {
          const K = i.findIndex((M) => M.value === S), V = K < i.length - 1 ? K + 1 : 0;
          P(i[V].value);
        }
      else if (j.key === "ArrowUp" && (j.preventDefault(), f)) {
        const K = i.findIndex((M) => M.value === S), V = K > 0 ? K - 1 : i.length - 1;
        P(i[V].value);
      }
    }
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "select-wrapper", ref: w, children: [
    n && /* @__PURE__ */ r.jsxs("label", { htmlFor: g, className: "select-label", children: [
      n,
      t && /* @__PURE__ */ r.jsx("span", { className: "select-required", children: "*" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "select-container", children: [
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          id: g,
          type: "button",
          role: "combobox",
          "aria-expanded": f,
          "aria-haspopup": "listbox",
          "aria-controls": `${g}-listbox`,
          disabled: o,
          className: `select-trigger ${d} ${F ? "error" : ""} ${o ? "disabled" : ""} ${f ? "open" : ""}`,
          onClick: () => !o && x(!f),
          onKeyDown: L,
          "aria-invalid": F,
          "aria-describedby": C ? `${g}-helper` : void 0,
          children: [
            /* @__PURE__ */ r.jsx("span", { className: H ? "" : "select-placeholder", children: H ? H.label : a }),
            /* @__PURE__ */ r.jsx("span", { className: "select-arrow", children: "▼" })
          ]
        }
      ),
      f && /* @__PURE__ */ r.jsx(
        "ul",
        {
          id: `${g}-listbox`,
          role: "listbox",
          className: "select-dropdown",
          children: i.map((j) => /* @__PURE__ */ r.jsx(
            "li",
            {
              role: "option",
              "aria-selected": j.value === S,
              className: `select-option ${j.value === S ? "selected" : ""} ${j.disabled ? "disabled" : ""}`,
              onClick: () => !j.disabled && P(j.value),
              children: j.label
            },
            j.value
          ))
        }
      )
    ] }),
    C && /* @__PURE__ */ r.jsx(
      "span",
      {
        id: `${g}-helper`,
        className: `select-helper ${F ? "error" : ""}`,
        children: C
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "select",
      {
        name: h,
        value: S,
        defaultValue: u,
        required: t,
        disabled: o,
        className: "select-native",
        onChange: (j) => P(j.target.value),
        "aria-hidden": "true",
        tabIndex: -1,
        children: [
          /* @__PURE__ */ r.jsx("option", { value: "", children: a }),
          i.map((j) => /* @__PURE__ */ r.jsx("option", { value: j.value, disabled: j.disabled, children: j.label }, j.value))
        ]
      }
    )
  ] });
}, _r = ({
  label: n,
  min: i = 0,
  max: l = 100,
  step: u = 1,
  value: a,
  defaultValue: o = 0,
  disabled: t = !1,
  showValue: d = !1,
  onChange: c,
  name: b,
  id: p
}) => {
  const [h, v] = U(o), [f, x] = U(!1), E = p || `slider-${Math.random().toString(36).substr(2, 9)}`, _ = B(null), g = a !== void 0, w = g ? a : h, O = (w - i) / (l - i) * 100, S = (P) => {
    const L = Math.max(i, Math.min(l, P));
    g || v(L), c == null || c(L);
  }, F = (P) => {
    t || (x(!0), C(P));
  }, C = (P) => {
    if (!_.current || t) return;
    const L = _.current.getBoundingClientRect(), j = P.clientX - L.left, K = Math.max(0, Math.min(100, j / L.width * 100)), V = i + K / 100 * (l - i), M = Math.round(V / u) * u;
    S(M);
  };
  W(() => {
    if (f) {
      const P = (j) => C(j), L = () => x(!1);
      return document.addEventListener("mousemove", P), document.addEventListener("mouseup", L), () => {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", L);
      };
    }
  }, [f]);
  const H = (P) => {
    S(Number(P.target.value));
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "slider-wrapper", children: [
    (n || d) && /* @__PURE__ */ r.jsxs("div", { className: "slider-header", children: [
      n && /* @__PURE__ */ r.jsx("label", { htmlFor: E, className: "slider-label", children: n }),
      d && /* @__PURE__ */ r.jsx("span", { className: "slider-value", children: w })
    ] }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: _,
        className: `slider-track ${t ? "disabled" : ""}`,
        onMouseDown: F,
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "slider-fill",
              style: { width: `${O}%` }
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "slider-thumb",
              style: { left: `${O}%` },
              role: "slider",
              "aria-valuemin": i,
              "aria-valuemax": l,
              "aria-valuenow": w,
              "aria-disabled": t,
              tabIndex: t ? -1 : 0
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        id: E,
        type: "range",
        name: b,
        min: i,
        max: l,
        step: u,
        value: w,
        disabled: t,
        onChange: H,
        className: "slider-input",
        "aria-label": n
      }
    )
  ] });
}, Tr = ({
  header: n,
  children: i,
  footer: l,
  hoverable: u = !1,
  clickable: a = !1,
  onClick: o,
  variant: t = "default",
  className: d = ""
}) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: `card ${t} ${u ? "hoverable" : ""} ${a ? "clickable" : ""} ${d}`,
    onClick: a ? o : void 0,
    role: a ? "button" : void 0,
    tabIndex: a ? 0 : void 0,
    onKeyDown: a ? (c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), o == null || o());
    } : void 0,
    children: [
      n && /* @__PURE__ */ r.jsx("div", { className: "card-header", children: n }),
      /* @__PURE__ */ r.jsx("div", { className: "card-body", children: i }),
      l && /* @__PURE__ */ r.jsx("div", { className: "card-footer", children: l })
    ]
  }
), Dr = ({
  children: n,
  variant: i = "primary",
  size: l = "medium",
  dot: u = !1,
  max: a,
  count: o,
  className: t = ""
}) => {
  const d = o !== void 0 && a !== void 0 && o > a ? `${a}+` : o == null ? void 0 : o.toString();
  return u ? /* @__PURE__ */ r.jsx("span", { className: `badge badge-dot ${i} ${l} ${t}` }) : o !== void 0 ? /* @__PURE__ */ r.jsx("span", { className: `badge badge-count ${i} ${l} ${t}`, children: d }) : /* @__PURE__ */ r.jsx("span", { className: `badge ${i} ${l} ${t}`, children: n });
}, Sr = ({
  children: n,
  removable: i = !1,
  onRemove: l,
  variant: u = "default",
  size: a = "medium",
  disabled: o = !1,
  className: t = ""
}) => {
  const d = (b) => {
    b.stopPropagation(), !o && l && l();
  }, c = (b) => {
    (b.key === "Enter" || b.key === " ") && (b.preventDefault(), d(b));
  };
  return /* @__PURE__ */ r.jsxs("span", { className: `chip ${u} ${a} ${o ? "disabled" : ""} ${t}`, children: [
    /* @__PURE__ */ r.jsx("span", { className: "chip-content", children: n }),
    i && /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: "chip-remove",
        onClick: d,
        onKeyDown: c,
        disabled: o,
        "aria-label": "Remove",
        children: "×"
      }
    )
  ] });
}, Or = ({
  children: n,
  variant: i = "default",
  size: l = "medium",
  className: u = ""
}) => /* @__PURE__ */ r.jsx("span", { className: `tag ${i} ${l} ${u}`, children: n }), Pr = ({
  src: n,
  alt: i,
  initials: l,
  size: u = "medium",
  shape: a = "circle",
  className: o = ""
}) => {
  const [t, d] = U(!1), c = () => {
    if (l) return l;
    if (i) {
      const p = i.trim().split(/\s+/);
      return p.length >= 2 ? (p[0][0] + p[1][0]).toUpperCase() : p[0][0].toUpperCase();
    }
    return "?";
  }, b = !n || t;
  return /* @__PURE__ */ r.jsxs("div", { className: `avatar ${u} ${a} ${o}`, children: [
    n && !t && /* @__PURE__ */ r.jsx(
      "img",
      {
        src: n,
        alt: i || "Avatar",
        className: "avatar-image",
        onError: () => d(!0)
      }
    ),
    b && /* @__PURE__ */ r.jsx("span", { className: "avatar-fallback", children: c() })
  ] });
}, Ir = ({
  children: n,
  variant: i = "info",
  title: l,
  dismissible: u = !1,
  onDismiss: a,
  className: o = ""
}) => {
  const t = () => {
    a == null || a();
  }, d = (c) => {
    (c.key === "Enter" || c.key === " ") && (c.preventDefault(), t());
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `alert ${i} ${o}`,
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "alert-content", children: [
          l && /* @__PURE__ */ r.jsx("div", { className: "alert-title", children: l }),
          /* @__PURE__ */ r.jsx("div", { className: "alert-message", children: n })
        ] }),
        u && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "alert-dismiss",
            onClick: t,
            onKeyDown: d,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}, Cr = ({
  value: n,
  max: i = 100,
  showValue: l = !1,
  variant: u = "default",
  size: a = "medium",
  indeterminate: o = !1,
  className: t = ""
}) => {
  const d = Math.min(100, Math.max(0, n / i * 100));
  return /* @__PURE__ */ r.jsxs("div", { className: `progress-wrapper ${t}`, children: [
    l && !o && /* @__PURE__ */ r.jsxs("div", { className: "progress-label", children: [
      Math.round(d),
      "%"
    ] }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `progress-track ${a} ${u}`,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": i,
        "aria-valuenow": o ? void 0 : n,
        "aria-label": "Progress",
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            className: `progress-fill ${o ? "indeterminate" : ""} ${u}`,
            style: o ? {} : { width: `${d}%` }
          }
        )
      }
    )
  ] });
}, Mr = ({
  columns: n,
  data: i,
  striped: l = !1,
  hoverable: u = !1,
  className: a = ""
}) => /* @__PURE__ */ r.jsx("div", { className: `table-wrapper ${a}`, children: /* @__PURE__ */ r.jsxs("table", { className: `table ${l ? "striped" : ""} ${u ? "hoverable" : ""}`, children: [
  /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsx("tr", { children: n.map((o) => /* @__PURE__ */ r.jsx("th", { children: o.header }, o.key)) }) }),
  /* @__PURE__ */ r.jsx("tbody", { children: i.map((o, t) => /* @__PURE__ */ r.jsx("tr", { children: n.map((d) => /* @__PURE__ */ r.jsx("td", { children: d.render ? d.render(o[d.key], o) : o[d.key] }, d.key)) }, t)) })
] }) }), Ar = ({
  items: n,
  defaultActiveKey: i,
  activeKey: l,
  onChange: u,
  className: a = ""
}) => {
  var v;
  const [o, t] = U(
    i || ((v = n[0]) == null ? void 0 : v.key) || ""
  ), d = l !== void 0, c = d ? l : o, b = (f, x) => {
    x || (d || t(f), u == null || u(f));
  }, p = (f, x, E) => {
    if (f.key === "Enter" || f.key === " ")
      f.preventDefault(), b(x);
    else if (f.key === "ArrowRight") {
      f.preventDefault();
      const _ = (E + 1) % n.length;
      n[_].disabled || b(n[_].key);
    } else if (f.key === "ArrowLeft") {
      f.preventDefault();
      const _ = (E - 1 + n.length) % n.length;
      n[_].disabled || b(n[_].key);
    }
  }, h = n.find((f) => f.key === c);
  return /* @__PURE__ */ r.jsxs("div", { className: `tabs ${a}`, children: [
    /* @__PURE__ */ r.jsx("div", { className: "tabs-header", role: "tablist", children: n.map((f, x) => /* @__PURE__ */ r.jsx(
      "button",
      {
        role: "tab",
        "aria-selected": f.key === c,
        "aria-controls": `tabpanel-${f.key}`,
        id: `tab-${f.key}`,
        className: `tab-button ${f.key === c ? "active" : ""} ${f.disabled ? "disabled" : ""}`,
        onClick: () => b(f.key, f.disabled),
        onKeyDown: (E) => p(E, f.key, x),
        disabled: f.disabled,
        tabIndex: f.key === c ? 0 : -1,
        children: f.label
      },
      f.key
    )) }),
    h && /* @__PURE__ */ r.jsx(
      "div",
      {
        id: `tabpanel-${h.key}`,
        role: "tabpanel",
        "aria-labelledby": `tab-${h.key}`,
        className: "tabs-content",
        children: h.content
      }
    )
  ] });
}, Fr = ({
  items: n,
  multiple: i = !1,
  defaultOpenKeys: l = [],
  openKeys: u,
  onChange: a,
  className: o = ""
}) => {
  const [t, d] = U(l), c = u !== void 0, b = c ? u : t, p = (v, f) => {
    if (f) return;
    let x;
    b.includes(v) ? x = b.filter((E) => E !== v) : x = i ? [...b, v] : [v], c || d(x), a == null || a(x);
  }, h = (v, f) => {
    (v.key === "Enter" || v.key === " ") && (v.preventDefault(), p(f));
  };
  return /* @__PURE__ */ r.jsx("div", { className: `accordion ${o}`, children: n.map((v) => {
    const f = b.includes(v.key);
    return /* @__PURE__ */ r.jsxs("div", { className: "accordion-item", children: [
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: `accordion-header ${f ? "open" : ""} ${v.disabled ? "disabled" : ""}`,
          onClick: () => p(v.key, v.disabled),
          onKeyDown: (x) => h(x, v.key),
          disabled: v.disabled,
          "aria-expanded": f,
          "aria-controls": `accordion-content-${v.key}`,
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "accordion-header-content", children: v.header }),
            /* @__PURE__ */ r.jsx("span", { className: "accordion-arrow", children: f ? "▼" : "▶" })
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          id: `accordion-content-${v.key}`,
          className: `accordion-content ${f ? "open" : ""}`,
          children: /* @__PURE__ */ r.jsx("div", { className: "accordion-content-inner", children: v.content })
        }
      )
    ] }, v.key);
  }) });
}, br = ({
  items: n,
  selectedKey: i,
  onSelect: l,
  className: u = ""
}) => {
  const a = (t, d) => {
    d || l == null || l(t);
  }, o = (t, d, c) => {
    var b, p;
    if (t.key === "Enter" || t.key === " ")
      t.preventDefault(), a(d);
    else if (t.key === "ArrowDown") {
      t.preventDefault();
      const h = (c + 1) % n.length, v = n[h];
      !v.disabled && !v.divider && ((b = document.getElementById(`menu-item-${v.key}`)) == null || b.focus());
    } else if (t.key === "ArrowUp") {
      t.preventDefault();
      const h = (c - 1 + n.length) % n.length, v = n[h];
      !v.disabled && !v.divider && ((p = document.getElementById(`menu-item-${v.key}`)) == null || p.focus());
    }
  };
  return /* @__PURE__ */ r.jsx("ul", { className: `menu ${u}`, role: "menu", children: n.map((t, d) => t.divider ? /* @__PURE__ */ r.jsx("li", { className: "menu-divider", role: "separator" }, t.key) : /* @__PURE__ */ r.jsx("li", { role: "none", children: /* @__PURE__ */ r.jsxs(
    "button",
    {
      id: `menu-item-${t.key}`,
      role: "menuitem",
      className: `menu-item ${i === t.key ? "selected" : ""} ${t.disabled ? "disabled" : ""}`,
      onClick: () => a(t.key, t.disabled),
      onKeyDown: (c) => o(c, t.key, d),
      disabled: t.disabled,
      tabIndex: t.disabled ? -1 : 0,
      children: [
        t.icon && /* @__PURE__ */ r.jsx("span", { className: "menu-icon", children: t.icon }),
        /* @__PURE__ */ r.jsx("span", { className: "menu-label", children: t.label })
      ]
    }
  ) }, t.key)) });
}, Lr = ({
  trigger: n,
  items: i,
  selectedKey: l,
  onSelect: u,
  placement: a = "bottom",
  className: o = ""
}) => {
  const [t, d] = U(!1), c = B(null);
  W(() => {
    const p = (h) => {
      c.current && !c.current.contains(h.target) && d(!1);
    };
    if (t)
      return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [t]), W(() => {
    const p = (h) => {
      h.key === "Escape" && t && d(!1);
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [t]);
  const b = (p) => {
    u == null || u(p), d(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: `dropdown ${o}`, ref: c, children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: "dropdown-trigger",
        onClick: () => d(!t),
        "aria-expanded": t,
        "aria-haspopup": "true",
        children: n
      }
    ),
    t && /* @__PURE__ */ r.jsx("div", { className: `dropdown-menu ${a}`, children: /* @__PURE__ */ r.jsx(br, { items: i, selectedKey: l, onSelect: b }) })
  ] });
}, Kr = ({
  current: n,
  total: i,
  pageSize: l = 5,
  onChange: u,
  showFirstLast: a = !0,
  showPrevNext: o = !0,
  className: t = ""
}) => {
  const d = () => {
    const h = [], v = Math.floor(l / 2);
    let f = Math.max(1, n - v), x = Math.min(i, n + v);
    n <= v && (x = Math.min(i, l)), n >= i - v && (f = Math.max(1, i - l + 1)), f > 1 && a && (h.push(1), f > 2 && h.push("ellipsis-start"));
    for (let E = f; E <= x; E++)
      h.push(E);
    return x < i && a && (x < i - 1 && h.push("ellipsis-end"), h.push(i)), h;
  }, c = (h) => {
    h >= 1 && h <= i && h !== n && (u == null || u(h));
  }, b = (h, v) => {
    (h.key === "Enter" || h.key === " ") && (h.preventDefault(), c(v));
  }, p = d();
  return /* @__PURE__ */ r.jsx("nav", { className: `pagination ${t}`, "aria-label": "Pagination", children: /* @__PURE__ */ r.jsxs("ul", { className: "pagination-list", children: [
    o && /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "pagination-button pagination-prev",
        onClick: () => c(n - 1),
        onKeyDown: (h) => b(h, n - 1),
        disabled: n === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ) }),
    p.map((h, v) => typeof h == "string" ? /* @__PURE__ */ r.jsx("li", { className: "pagination-ellipsis", children: "..." }, `${h}-${v}`) : /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
      "button",
      {
        className: `pagination-button ${h === n ? "active" : ""}`,
        onClick: () => c(h),
        onKeyDown: (f) => b(f, h),
        "aria-label": `Page ${h}`,
        "aria-current": h === n ? "page" : void 0,
        children: h
      }
    ) }, h)),
    o && /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "pagination-button pagination-next",
        onClick: () => c(n + 1),
        onKeyDown: (h) => b(h, n + 1),
        disabled: n === i,
        "aria-label": "Next page",
        children: "›"
      }
    ) })
  ] }) });
}, xr = ({
  open: n,
  children: i,
  title: l,
  closable: u = !0,
  onClose: a,
  maskClosable: o = !0,
  width: t = 520,
  className: d = ""
}) => {
  const c = B(null), b = B(null);
  if (W(() => {
    if (n) {
      b.current = document.activeElement, document.body.style.overflow = "hidden";
      const v = (f) => {
        var g;
        if (f.key !== "Tab") return;
        const x = (g = c.current) == null ? void 0 : g.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!x || x.length === 0) return;
        const E = x[0], _ = x[x.length - 1];
        f.shiftKey ? document.activeElement === E && (f.preventDefault(), _.focus()) : document.activeElement === _ && (f.preventDefault(), E.focus());
      };
      return document.addEventListener("keydown", v), () => {
        var f;
        document.removeEventListener("keydown", v), document.body.style.overflow = "", (f = b.current) == null || f.focus();
      };
    } else
      document.body.style.overflow = "";
  }, [n]), W(() => {
    const v = (f) => {
      f.key === "Escape" && n && u && (a == null || a());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [n, u, a]), !n) return null;
  const p = (v) => {
    o && v.target === v.currentTarget && (a == null || a());
  }, h = /* @__PURE__ */ r.jsx("div", { className: "modal-mask", onClick: p, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: c,
      className: `modal ${d}`,
      style: { width: typeof t == "number" ? `${t}px` : t },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": l ? "modal-title" : void 0,
      children: [
        (l || u) && /* @__PURE__ */ r.jsxs("div", { className: "modal-header", children: [
          l && /* @__PURE__ */ r.jsx("h2", { id: "modal-title", className: "modal-title", children: l }),
          u && /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "modal-close",
              onClick: a,
              "aria-label": "Close modal",
              children: "×"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "modal-body", children: i })
      ]
    }
  ) });
  return pe(h, document.body);
}, Yr = ({
  children: n,
  okText: i = "OK",
  cancelText: l = "Cancel",
  showCancel: u = !0,
  onOk: a,
  onCancel: o,
  onClose: t,
  ...d
}) => {
  const c = () => {
    a == null || a(), t == null || t();
  }, b = () => {
    o == null || o(), t == null || t();
  };
  return /* @__PURE__ */ r.jsxs(xr, { ...d, onClose: t || b, children: [
    /* @__PURE__ */ r.jsx("div", { className: "dialog-content", children: n }),
    /* @__PURE__ */ r.jsxs("div", { className: "dialog-footer", children: [
      u && /* @__PURE__ */ r.jsx(Ye, { variant: "secondary", onClick: b, children: l }),
      /* @__PURE__ */ r.jsx(Ye, { variant: "primary", onClick: c, children: i })
    ] })
  ] });
}, Ur = ({
  open: n,
  children: i,
  title: l,
  placement: u = "right",
  size: a = 378,
  closable: o = !0,
  onClose: t,
  maskClosable: d = !0,
  className: c = ""
}) => {
  const b = B(null);
  if (W(() => {
    if (n)
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = "";
      };
  }, [n]), W(() => {
    const x = (E) => {
      E.key === "Escape" && n && o && (t == null || t());
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [n, o, t]), !n) return null;
  const p = (x) => {
    d && x.target === x.currentTarget && (t == null || t());
  }, h = typeof a == "number" ? `${a}px` : a, v = {};
  u === "left" || u === "right" ? v.width = h : v.height = h;
  const f = /* @__PURE__ */ r.jsx("div", { className: "drawer-mask", onClick: p, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: b,
      className: `drawer drawer-${u} ${c}`,
      style: v,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": l ? "drawer-title" : void 0,
      children: [
        (l || o) && /* @__PURE__ */ r.jsxs("div", { className: "drawer-header", children: [
          l && /* @__PURE__ */ r.jsx("h2", { id: "drawer-title", className: "drawer-title", children: l }),
          o && /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "drawer-close",
              onClick: t,
              "aria-label": "Close drawer",
              children: "×"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "drawer-body", children: i })
      ]
    }
  ) });
  return pe(f, document.body);
}, Wr = ({
  title: n,
  children: i,
  placement: l = "top",
  trigger: u = "hover",
  className: a = ""
}) => {
  const [o, t] = U(!1), [d, c] = U({ top: 0, left: 0 }), b = B(null), p = B(null), h = () => {
    if (!b.current || !p.current) return;
    const g = b.current.getBoundingClientRect(), w = p.current.getBoundingClientRect(), O = window.scrollX || window.pageXOffset, S = window.scrollY || window.pageYOffset;
    let F = 0, C = 0;
    switch (l) {
      case "top":
        F = g.top + S - w.height - 8, C = g.left + O + g.width / 2 - w.width / 2;
        break;
      case "bottom":
        F = g.bottom + S + 8, C = g.left + O + g.width / 2 - w.width / 2;
        break;
      case "left":
        F = g.top + S + g.height / 2 - w.height / 2, C = g.left + O - w.width - 8;
        break;
      case "right":
        F = g.top + S + g.height / 2 - w.height / 2, C = g.right + O + 8;
        break;
    }
    c({ top: F, left: C });
  };
  W(() => {
    if (o) {
      h();
      const g = () => h(), w = () => h();
      return window.addEventListener("scroll", g, !0), window.addEventListener("resize", w), () => {
        window.removeEventListener("scroll", g, !0), window.removeEventListener("resize", w);
      };
    }
  }, [o, l]);
  const v = () => {
    t(!0);
  }, f = () => {
    t(!1);
  }, x = () => {
    u === "click" && t(!o);
  }, E = {
    ref: b
  };
  u === "hover" ? (E.onMouseEnter = v, E.onMouseLeave = f) : u === "focus" ? (E.onFocus = v, E.onBlur = f) : u === "click" && (E.onClick = x);
  const _ = re.cloneElement(i, E);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    _,
    o && pe(
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: p,
          className: `tooltip tooltip-${l} ${a}`,
          style: { top: `${d.top}px`, left: `${d.left}px` },
          role: "tooltip",
          children: n
        }
      ),
      document.body
    )
  ] });
}, Br = ({
  icon: n,
  onClick: i,
  variant: l = "primary",
  size: u = "medium",
  disabled: a = !1,
  "aria-label": o,
  className: t = ""
}) => /* @__PURE__ */ r.jsx(
  "button",
  {
    className: `icon-button ${l} ${u} ${a ? "disabled" : ""} ${t}`,
    onClick: i,
    disabled: a,
    "aria-label": o,
    children: n
  }
), Vr = ({
  items: n,
  size: i = "medium",
  clickable: l = !1,
  className: u = ""
}) => /* @__PURE__ */ r.jsx("ul", { className: `list ${i} ${u}`, children: n.map((a) => /* @__PURE__ */ r.jsxs(
  "li",
  {
    className: `list-item ${l && a.onClick ? "clickable" : ""} ${a.disabled ? "disabled" : ""}`,
    onClick: a.disabled ? void 0 : a.onClick,
    role: l && a.onClick ? "button" : void 0,
    tabIndex: l && a.onClick && !a.disabled ? 0 : void 0,
    children: [
      a.icon && /* @__PURE__ */ r.jsx("span", { className: "list-icon", children: a.icon }),
      /* @__PURE__ */ r.jsx("span", { className: "list-content", children: a.content })
    ]
  },
  a.key
)) });
function yr() {
  const [n, i] = U([]), l = B(null), [u, a] = U(10), o = () => {
    const d = [
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
    let b = "";
    for (let p = 0; p < c; p++) {
      const h = Math.floor(Math.random() * d.length);
      b += d[h] + ". ";
    }
    return b;
  };
  W(() => {
    i(Array.from({ length: u }, () => `${o()}`));
  }, [u]), W(() => {
    setTimeout(() => {
      var d, c;
      (c = l.current) == null || c.scrollTo({
        top: (d = l.current) == null ? void 0 : d.scrollHeight
      });
    }, 0);
  }, []);
  const t = () => {
    const d = l.current;
    if (d && d.scrollTop <= 100) {
      const c = d.scrollHeight, b = d.scrollTop;
      a((p) => p + 10), i((p) => [
        ...Array.from({ length: 10 }, () => `${o()}`),
        ...p
      ]), setTimeout(() => {
        if (d) {
          const p = d.scrollHeight;
          d.scrollTop = b + (p - c);
        }
      }, 0);
    }
  };
  return /* @__PURE__ */ r.jsx("div", { style: {
    width: "600px",
    height: "100%",
    overflow: "hidden"
  }, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: l,
      className: "test-overflow-items",
      style: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        maxHeight: "500px"
      },
      onScroll: t,
      children: n.map((d, c) => /* @__PURE__ */ r.jsx("div", { className: "test-overflow-item", style: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        backgroundColor: "#f0f0f0"
      }, children: /* @__PURE__ */ r.jsx("div", { className: "test-overflow-item-content", children: /* @__PURE__ */ r.jsx("p", { children: d }) }) }, c))
    }
  ) });
}
function Hr({ children: n }) {
  return /* @__PURE__ */ r.jsx(yr, {});
}
export {
  Fr as Accordion,
  Ir as Alert,
  Pr as Avatar,
  Dr as Badge,
  Ye as Button,
  Tr as Card,
  kr as Checkbox,
  Sr as Chip,
  Yr as Dialog,
  Ur as Drawer,
  Lr as Dropdown,
  Br as IconButton,
  wr as Input,
  Vr as List,
  br as Menu,
  xr as Modal,
  Kr as Pagination,
  Hr as Pane,
  Cr as Progress,
  $r as Radio,
  Rr as Select,
  _r as Slider,
  Nr as Switch,
  Mr as Table,
  Ar as Tabs,
  Or as Tag,
  Er as Textarea,
  Wr as Tooltip
};
