(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`@import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";:root{--gray-100: #f3f4f6;--gray-200: #e5e7eb;--gray-300: #d1d5db;--black: #1f2937;--white: #ffffff;--dd-font-family: "Open Sans", Helvetica, Arial, sans-serif;--dd-color-text: var(--black);--dd-color-body-bg: #f9fafb;--dd-color-primary: #00889d;--dd-color-on-primary: var(--white);--dd-color-secondary: #003e70;--dd-color-on-secondary: var(--white);--dd-color-content-bg: var(--white);--dd-color-content-border: var(--gray-100);--dd-color-card-bg: var(--white);--dd-color-card-border: var(--gray-100);--dd-color-card-block-bg: var(--gray-100);--dd-color-card-block-border: var(--gray-200);--dd-color-button-text: var(--black);--dd-color-button-bg: var(--gray-200);--dd-color-button-bg-hover: var(--gray-300);--dd-color-button-border: var(--gray-300);--dd-color-table-border: var(--white);--dd-color-table-odd: #f7f7f7;--dd-color-table-even: #eeeeee;--dd-color-input-bg: var(--white);--dd-color-input-border: var(--gray-200);--dd-color-tooltip-background: var(--black);--dd-color-filter: yellow;--dd-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);line-height:1.5;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.dark{--gray-100: #1e1e1e;--gray-200: #2a2a2a;--gray-300: #3c3c3c;--black: #000000;--white: #fafafa;--dd-font-family: "Open Sans", Helvetica, Arial, sans-serif;--dd-color-text: var(--white);--dd-color-body-bg: #1f1b24;--dd-color-primary: #03dac6;--dd-color-on-primary: var(--black);--dd-color-secondary: #151c34;--dd-color-on-secondary: var(--white);--dd-color-content-bg: #121212;--dd-color-content-border: var(--gray-300);--dd-color-card-bg: var(--gray-100);--dd-color-card-border: var(--gray-300);--dd-color-card-block-bg: var(--gray-100);--dd-color-card-block-border: var(--gray-300);--dd-color-button-text: var(--black);--dd-color-button-bg: #e0e0e0;--dd-color-button-bg-hover: #c8c8c8;--dd-color-button-border: var(--gray-300);--dd-color-table-border: var(--gray-300);--dd-color-table-odd: var(--gray-100);--dd-color-table-even: var(--gray-200);--dd-color-input-bg: var(--white);--dd-color-input-border: var(--gray-300);--dd-color-tooltip-background: var(--black);--dd-color-filter: yellow;--dd-shadow: 0 1px 2px 0 rgb(255 255 255 / .06)}*,:before,:after{box-sizing:border-box}body{margin:0}button,select,input,label{font-family:var(--dd-font-family)}._container_1chpv_1{display:flex;min-width:570px;font-family:var(--dd-font-family);color:var(--dd-color-text);background-color:var(--dd-color-body-bg)}._main_1chpv_9{width:1280px;margin:0 auto;padding:1rem}._title_1chpv_15{font-size:2em;line-height:1.1;margin:1.5rem 0 2rem;color:var(--dd-color-text)}._search_1chpv_22{display:flex;flex-direction:row;flex-wrap:wrap;align-items:baseline;margin:2.5rem 0 1.5rem}._loader_1chpv_30{margin-left:.75rem}._buttons_1chpv_34{margin-left:auto;display:flex;justify-content:flex-end;gap:10px}._buttons_1chpv_34 button{cursor:pointer;padding:12px 20px;font-size:.95rem;font-weight:700;color:var(--dd-color-button-text);background-color:var(--dd-color-button-bg);border:1px solid var(--dd-color-button-border);border-radius:.25rem;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._buttons_1chpv_34 button:hover{background-color:var(--dd-color-button-bg-hover)}._buttons_1chpv_34 button._active_1chpv_55{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary);pointer-events:none}._buttons_1chpv_34 button ._icon_1chpv_60{margin-right:.5rem}._search_qqeb0_1{border-radius:.5rem;padding:12px;width:50%;font-size:.95rem;background-color:var(--dd-color-input-bg);border:1px solid var(--dd-color-input-border);box-shadow:var(--dd-shadow)}._search_qqeb0_1:focus{outline:1px solid var(--dd-color-primary)}._content_bbdxn_1{position:relative;background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-content-border);border-radius:.5rem;padding:16px;box-shadow:var(--dd-shadow);min-height:834px}._count_bbdxn_11{font-size:.875rem;text-align:right;margin:5px 0 14px}._container_1yy9g_1{display:flex;flex-direction:column;row-gap:20px}._cards_1yy9g_7{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));justify-items:center;gap:20px}._card_1ada5_1{min-width:90%;padding:1rem;background-color:var(--dd-color-card-bg);border:1px solid var(--dd-color-card-border);border-radius:.75rem;box-shadow:var(--dd-shadow)}._card_1ada5_1 h3{color:var(--dd-color-primary);margin:1rem 0 1.5rem}._card_1ada5_1 ._dd-field-block_1ada5_13{padding:.5rem .75rem;font-size:.875rem;font-weight:400;border-radius:.5rem;background-color:var(--dd-color-card-block-bg);border:1px solid var(--dd-color-card-block-border);box-shadow:var(--dd-shadow);margin-bottom:.75rem}._card_1ada5_1 ._dd-field-block_1ada5_13 ._flex_1ada5_23{display:flex;gap:.5rem}._card_1ada5_1 ._dd-field-block_1ada5_13 ._flex_1ada5_23 ._field_1ada5_27{white-space:nowrap}._terms_1cbzn_1{display:flex;flex-wrap:wrap;gap:4px}._terms_1cbzn_1 a{font-size:85%;font-weight:600;color:var(--dd-color-secondary);background-color:var(--dd-color-button-bg);border-radius:5px;padding:4px 8px;text-decoration:none;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out;word-break:break-word;overflow-wrap:anywhere;display:inline-block}._terms_1cbzn_1 a:hover{background-color:var(--dd-color-button-bg-hover)}._values_14176_1{margin:10px 0 4px;line-height:1.2;font-weight:400}._values_14176_1 ._flex_14176_6{display:flex}._values_14176_1 ._flex_14176_6 ._value_14176_1{font-family:monospace;min-width:4rem}._help-icon_12haz_1{margin-right:.5rem;color:var(--dd-color-primary);cursor:help}._help-tooltip_12haz_7{font-weight:400;max-width:190px;white-space:pre-wrap;background-color:var(--dd-color-tooltip-background)!important}._scroll_wasmp_1{cursor:pointer;position:absolute;right:-50px;bottom:8px;color:var(--dd-color-primary);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-primary);border-radius:50%;padding:8px;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._scroll_wasmp_1:hover{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._options_t8263_1{display:flex;justify-content:space-between;margin:14px 0;font-size:1rem;font-weight:600}._options_t8263_1 select{height:35px;margin-left:10px;padding:0 30px 0 10px;font-size:.875rem;font-weight:600;border:1px solid var(--dd-color-input-border);box-shadow:var(--dd-shadow);appearance:none;-moz-appearance:none;-webkit-appearance:none;background-position:right 4px center;background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3e%3cpath%20fill='none'%20stroke='%23343a40'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m2%205%206%206%206-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-size:16px 12px}._options_t8263_1 select:focus{outline:1px solid var(--dd-color-primary)}._wrapper_7j5yf_1{position:relative}._wrapper_7j5yf_1._open_7j5yf_4 ._picker_7j5yf_4{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._wrapper_7j5yf_1._open_7j5yf_4 ._picker_7j5yf_4 ._icon_7j5yf_8{color:var(--dd-color-on-primary)}._wrapper_7j5yf_1._open_7j5yf_4 ._dropdown_7j5yf_11{opacity:1;visibility:visible;transform:translateY(0)}._picker_7j5yf_4{cursor:pointer;height:35px;width:170px;font-size:.875rem;font-weight:600;color:var(--dd-color-primary);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-primary);border-radius:3px;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._picker_7j5yf_4:hover{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._picker_7j5yf_4:hover ._icon_7j5yf_8{color:var(--dd-color-on-primary)}._picker_7j5yf_4 ._icon_7j5yf_8{color:var(--dd-color-text);margin-right:10px;transition:all .15s ease-in-out}._dropdown_7j5yf_11{position:absolute;right:0;top:40px;z-index:3;background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-input-border);border-radius:3px;box-shadow:var(--dd-shadow);padding:10px;font-size:.875rem;font-weight:400;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(-5px);transition:all .25s ease}._dropdown_7j5yf_11 label{display:block}._dropdown_7j5yf_11 label input{margin-right:5px;accent-color:var(--dd-color-primary);vertical-align:middle;position:relative;bottom:1px}._table_8748a_1{height:700px!important}._table_8748a_1 table{font-size:.875rem;border-collapse:separate;border-spacing:0;line-height:1.2;font-weight:600;width:100%}._table_8748a_1 table thead{margin:0}._table_8748a_1 table thead th{color:var(--dd-color-on-secondary);background-color:var(--dd-color-secondary);padding:25px 20px 25px 15px;text-align:left;border:1px solid var(--dd-color-table-border);white-space:nowrap}._table_8748a_1 table tbody tr:nth-child(odd){background-color:var(--dd-color-table-odd)}._table_8748a_1 table tbody tr:nth-child(2n){background-color:var(--dd-color-table-even)}._table_8748a_1 table tbody td{padding:20px 15px}._wrapper_nbs3r_1{position:relative;display:inline}._wrapper_nbs3r_1._open_nbs3r_5 ._icon_nbs3r_5{color:var(--dd-color-button-bg-hover)}._wrapper_nbs3r_1._open_nbs3r_5 ._icon_nbs3r_5._active_nbs3r_8{color:#ff0}._wrapper_nbs3r_1._open_nbs3r_5 ._dropdown_nbs3r_11{opacity:1;visibility:visible;transform:translateY(0)}._icon_nbs3r_5{cursor:pointer;margin-left:1rem;color:var(--dd-color-button-bg);transition:all .15s ease-in-out}._icon_nbs3r_5:hover{color:var(--dd-color-button-bg-hover)}._icon_nbs3r_5._active_nbs3r_8{color:#ff0}._dropdown_nbs3r_11{position:absolute;right:0;top:30px;z-index:3;line-height:1.5;color:var(--dd-color-text);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-input-border);border-radius:3px;box-shadow:var(--dd-shadow);padding:10px;font-size:.875rem;font-weight:400;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(-5px);transition:all .25s ease}._dropdown_nbs3r_11 label{display:block}._dropdown_nbs3r_11 label input{margin-right:5px;accent-color:var(--dd-color-primary);vertical-align:middle;position:relative;bottom:1px}`)),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function vl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xu = { exports: {} }, Ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ih;
function $0() {
  if (ih) return Ke;
  ih = 1;
  var n = Symbol.for("react.element"), o = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.iterator;
  function _(k) {
    return k === null || typeof k != "object" ? null : (k = y && k[y] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, O = {};
  function C(k, z, G) {
    this.props = k, this.context = z, this.refs = O, this.updater = G || w;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(k, z) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, z, "setState");
  }, C.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function E() {
  }
  E.prototype = C.prototype;
  function I(k, z, G) {
    this.props = k, this.context = z, this.refs = O, this.updater = G || w;
  }
  var j = I.prototype = new E();
  j.constructor = I, A(j, C.prototype), j.isPureReactComponent = !0;
  var $ = Array.isArray, B = Object.prototype.hasOwnProperty, F = { current: null }, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(k, z, G) {
    var q, de = {}, ke = null, ge = null;
    if (z != null) for (q in z.ref !== void 0 && (ge = z.ref), z.key !== void 0 && (ke = "" + z.key), z) B.call(z, q) && !H.hasOwnProperty(q) && (de[q] = z[q]);
    var Ee = arguments.length - 2;
    if (Ee === 1) de.children = G;
    else if (1 < Ee) {
      for (var b = Array(Ee), oe = 0; oe < Ee; oe++) b[oe] = arguments[oe + 2];
      de.children = b;
    }
    if (k && k.defaultProps) for (q in Ee = k.defaultProps, Ee) de[q] === void 0 && (de[q] = Ee[q]);
    return { $$typeof: n, type: k, key: ke, ref: ge, props: de, _owner: F.current };
  }
  function T(k, z) {
    return { $$typeof: n, type: k.type, key: z, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function L(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function V(k) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(G) {
      return z[G];
    });
  }
  var Q = /\/+/g;
  function ie(k, z) {
    return typeof k == "object" && k !== null && k.key != null ? V("" + k.key) : z.toString(36);
  }
  function K(k, z, G, q, de) {
    var ke = typeof k;
    (ke === "undefined" || ke === "boolean") && (k = null);
    var ge = !1;
    if (k === null) ge = !0;
    else switch (ke) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case n:
          case o:
            ge = !0;
        }
    }
    if (ge) return ge = k, de = de(ge), k = q === "" ? "." + ie(ge, 0) : q, $(de) ? (G = "", k != null && (G = k.replace(Q, "$&/") + "/"), K(de, z, G, "", function(oe) {
      return oe;
    })) : de != null && (L(de) && (de = T(de, G + (!de.key || ge && ge.key === de.key ? "" : ("" + de.key).replace(Q, "$&/") + "/") + k)), z.push(de)), 1;
    if (ge = 0, q = q === "" ? "." : q + ":", $(k)) for (var Ee = 0; Ee < k.length; Ee++) {
      ke = k[Ee];
      var b = q + ie(ke, Ee);
      ge += K(ke, z, G, b, de);
    }
    else if (b = _(k), typeof b == "function") for (k = b.call(k), Ee = 0; !(ke = k.next()).done; ) ke = ke.value, b = q + ie(ke, Ee++), ge += K(ke, z, G, b, de);
    else if (ke === "object") throw z = String(k), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function fe(k, z, G) {
    if (k == null) return k;
    var q = [], de = 0;
    return K(k, q, "", "", function(ke) {
      return z.call(G, ke, de++);
    }), q;
  }
  function we(k) {
    if (k._status === -1) {
      var z = k._result;
      z = z(), z.then(function(G) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = G);
      }, function(G) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = G);
      }), k._status === -1 && (k._status = 0, k._result = z);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ne = { current: null }, U = { transition: null }, Y = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: U, ReactCurrentOwner: F };
  return Ke.Children = { map: fe, forEach: function(k, z, G) {
    fe(k, function() {
      z.apply(this, arguments);
    }, G);
  }, count: function(k) {
    var z = 0;
    return fe(k, function() {
      z++;
    }), z;
  }, toArray: function(k) {
    return fe(k, function(z) {
      return z;
    }) || [];
  }, only: function(k) {
    if (!L(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Ke.Component = C, Ke.Fragment = l, Ke.Profiler = u, Ke.PureComponent = I, Ke.StrictMode = s, Ke.Suspense = g, Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, Ke.cloneElement = function(k, z, G) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var q = A({}, k.props), de = k.key, ke = k.ref, ge = k._owner;
    if (z != null) {
      if (z.ref !== void 0 && (ke = z.ref, ge = F.current), z.key !== void 0 && (de = "" + z.key), k.type && k.type.defaultProps) var Ee = k.type.defaultProps;
      for (b in z) B.call(z, b) && !H.hasOwnProperty(b) && (q[b] = z[b] === void 0 && Ee !== void 0 ? Ee[b] : z[b]);
    }
    var b = arguments.length - 2;
    if (b === 1) q.children = G;
    else if (1 < b) {
      Ee = Array(b);
      for (var oe = 0; oe < b; oe++) Ee[oe] = arguments[oe + 2];
      q.children = Ee;
    }
    return { $$typeof: n, type: k.type, key: de, ref: ke, props: q, _owner: ge };
  }, Ke.createContext = function(k) {
    return k = { $$typeof: d, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: f, _context: k }, k.Consumer = k;
  }, Ke.createElement = x, Ke.createFactory = function(k) {
    var z = x.bind(null, k);
    return z.type = k, z;
  }, Ke.createRef = function() {
    return { current: null };
  }, Ke.forwardRef = function(k) {
    return { $$typeof: p, render: k };
  }, Ke.isValidElement = L, Ke.lazy = function(k) {
    return { $$typeof: v, _payload: { _status: -1, _result: k }, _init: we };
  }, Ke.memo = function(k, z) {
    return { $$typeof: h, type: k, compare: z === void 0 ? null : z };
  }, Ke.startTransition = function(k) {
    var z = U.transition;
    U.transition = {};
    try {
      k();
    } finally {
      U.transition = z;
    }
  }, Ke.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ke.useCallback = function(k, z) {
    return ne.current.useCallback(k, z);
  }, Ke.useContext = function(k) {
    return ne.current.useContext(k);
  }, Ke.useDebugValue = function() {
  }, Ke.useDeferredValue = function(k) {
    return ne.current.useDeferredValue(k);
  }, Ke.useEffect = function(k, z) {
    return ne.current.useEffect(k, z);
  }, Ke.useId = function() {
    return ne.current.useId();
  }, Ke.useImperativeHandle = function(k, z, G) {
    return ne.current.useImperativeHandle(k, z, G);
  }, Ke.useInsertionEffect = function(k, z) {
    return ne.current.useInsertionEffect(k, z);
  }, Ke.useLayoutEffect = function(k, z) {
    return ne.current.useLayoutEffect(k, z);
  }, Ke.useMemo = function(k, z) {
    return ne.current.useMemo(k, z);
  }, Ke.useReducer = function(k, z, G) {
    return ne.current.useReducer(k, z, G);
  }, Ke.useRef = function(k) {
    return ne.current.useRef(k);
  }, Ke.useState = function(k) {
    return ne.current.useState(k);
  }, Ke.useSyncExternalStore = function(k, z, G) {
    return ne.current.useSyncExternalStore(k, z, G);
  }, Ke.useTransition = function() {
    return ne.current.useTransition();
  }, Ke.version = "18.2.0", Ke;
}
var lh;
function Xc() {
  return lh || (lh = 1, Xu.exports = $0()), Xu.exports;
}
var re = Xc();
const ae = /* @__PURE__ */ vl(re);
var zs = {}, Zu = { exports: {} }, hn = {}, Ju = { exports: {} }, ec = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sh;
function V0() {
  return sh || (sh = 1, function(n) {
    function o(U, Y) {
      var k = U.length;
      U.push(Y);
      e: for (; 0 < k; ) {
        var z = k - 1 >>> 1, G = U[z];
        if (0 < u(G, Y)) U[z] = Y, U[k] = G, k = z;
        else break e;
      }
    }
    function l(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var Y = U[0], k = U.pop();
      if (k !== Y) {
        U[0] = k;
        e: for (var z = 0, G = U.length, q = G >>> 1; z < q; ) {
          var de = 2 * (z + 1) - 1, ke = U[de], ge = de + 1, Ee = U[ge];
          if (0 > u(ke, k)) ge < G && 0 > u(Ee, ke) ? (U[z] = Ee, U[ge] = k, z = ge) : (U[z] = ke, U[de] = k, z = de);
          else if (ge < G && 0 > u(Ee, k)) U[z] = Ee, U[ge] = k, z = ge;
          else break e;
        }
      }
      return Y;
    }
    function u(U, Y) {
      var k = U.sortIndex - Y.sortIndex;
      return k !== 0 ? k : U.id - Y.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      n.unstable_now = function() {
        return d.now() - p;
      };
    }
    var g = [], h = [], v = 1, y = null, _ = 3, w = !1, A = !1, O = !1, C = typeof setTimeout == "function" ? setTimeout : null, E = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function j(U) {
      for (var Y = l(h); Y !== null; ) {
        if (Y.callback === null) s(h);
        else if (Y.startTime <= U) s(h), Y.sortIndex = Y.expirationTime, o(g, Y);
        else break;
        Y = l(h);
      }
    }
    function $(U) {
      if (O = !1, j(U), !A) if (l(g) !== null) A = !0, we(B);
      else {
        var Y = l(h);
        Y !== null && ne($, Y.startTime - U);
      }
    }
    function B(U, Y) {
      A = !1, O && (O = !1, E(x), x = -1), w = !0;
      var k = _;
      try {
        for (j(Y), y = l(g); y !== null && (!(y.expirationTime > Y) || U && !V()); ) {
          var z = y.callback;
          if (typeof z == "function") {
            y.callback = null, _ = y.priorityLevel;
            var G = z(y.expirationTime <= Y);
            Y = n.unstable_now(), typeof G == "function" ? y.callback = G : y === l(g) && s(g), j(Y);
          } else s(g);
          y = l(g);
        }
        if (y !== null) var q = !0;
        else {
          var de = l(h);
          de !== null && ne($, de.startTime - Y), q = !1;
        }
        return q;
      } finally {
        y = null, _ = k, w = !1;
      }
    }
    var F = !1, H = null, x = -1, T = 5, L = -1;
    function V() {
      return !(n.unstable_now() - L < T);
    }
    function Q() {
      if (H !== null) {
        var U = n.unstable_now();
        L = U;
        var Y = !0;
        try {
          Y = H(!0, U);
        } finally {
          Y ? ie() : (F = !1, H = null);
        }
      } else F = !1;
    }
    var ie;
    if (typeof I == "function") ie = function() {
      I(Q);
    };
    else if (typeof MessageChannel < "u") {
      var K = new MessageChannel(), fe = K.port2;
      K.port1.onmessage = Q, ie = function() {
        fe.postMessage(null);
      };
    } else ie = function() {
      C(Q, 0);
    };
    function we(U) {
      H = U, F || (F = !0, ie());
    }
    function ne(U, Y) {
      x = C(function() {
        U(n.unstable_now());
      }, Y);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, n.unstable_continueExecution = function() {
      A || w || (A = !0, we(B));
    }, n.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < U ? Math.floor(1e3 / U) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, n.unstable_getFirstCallbackNode = function() {
      return l(g);
    }, n.unstable_next = function(U) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = _;
      }
      var k = _;
      _ = Y;
      try {
        return U();
      } finally {
        _ = k;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(U, Y) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var k = _;
      _ = U;
      try {
        return Y();
      } finally {
        _ = k;
      }
    }, n.unstable_scheduleCallback = function(U, Y, k) {
      var z = n.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? z + k : z) : k = z, U) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = k + G, U = { id: v++, callback: Y, priorityLevel: U, startTime: k, expirationTime: G, sortIndex: -1 }, k > z ? (U.sortIndex = k, o(h, U), l(g) === null && U === l(h) && (O ? (E(x), x = -1) : O = !0, ne($, k - z))) : (U.sortIndex = G, o(g, U), A || w || (A = !0, we(B))), U;
    }, n.unstable_shouldYield = V, n.unstable_wrapCallback = function(U) {
      var Y = _;
      return function() {
        var k = _;
        _ = Y;
        try {
          return U.apply(this, arguments);
        } finally {
          _ = k;
        }
      };
    };
  }(ec)), ec;
}
var ah;
function Y0() {
  return ah || (ah = 1, Ju.exports = V0()), Ju.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uh;
function K0() {
  if (uh) return hn;
  uh = 1;
  var n = Xc(), o = Y0();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var s = /* @__PURE__ */ new Set(), u = {};
  function f(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, y = {};
  function _(e) {
    return g.call(y, e) ? !0 : g.call(v, e) ? !1 : h.test(e) ? y[e] = !0 : (v[e] = !0, !1);
  }
  function w(e, t, r, i) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function A(e, t, r, i) {
    if (t === null || typeof t > "u" || w(e, t, r, i)) return !0;
    if (i) return !1;
    if (r !== null) switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function O(e, t, r, i, a, c, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = m;
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    C[e] = new O(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    C[t] = new O(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    C[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    C[e] = new O(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    C[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    C[e] = new O(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    C[e] = new O(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    C[e] = new O(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    C[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var E = /[\-:]([a-z])/g;
  function I(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      E,
      I
    );
    C[t] = new O(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(E, I);
    C[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(E, I);
    C[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    C[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), C.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    C[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function j(e, t, r, i) {
    var a = C.hasOwnProperty(t) ? C[t] : null;
    (a !== null ? a.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (A(t, r, a, i) && (r = null), i || a === null ? _(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : a.mustUseProperty ? e[a.propertyName] = r === null ? a.type === 3 ? !1 : "" : r : (t = a.attributeName, i = a.attributeNamespace, r === null ? e.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === !0 ? "" : "" + r, i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), F = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), V = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var k = Object.assign, z;
  function G(e) {
    if (z === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      z = t && t[1] || "";
    }
    return `
` + z + e;
  }
  var q = !1;
  function de(e, t) {
    if (!e || q) return "";
    q = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (W) {
          var i = W;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (W) {
          i = W;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (W) {
          i = W;
        }
        e();
      }
    } catch (W) {
      if (W && i && typeof W.stack == "string") {
        for (var a = W.stack.split(`
`), c = i.stack.split(`
`), m = a.length - 1, S = c.length - 1; 1 <= m && 0 <= S && a[m] !== c[S]; ) S--;
        for (; 1 <= m && 0 <= S; m--, S--) if (a[m] !== c[S]) {
          if (m !== 1 || S !== 1)
            do
              if (m--, S--, 0 > S || a[m] !== c[S]) {
                var R = `
` + a[m].replace(" at new ", " at ");
                return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
              }
            while (1 <= m && 0 <= S);
          break;
        }
      }
    } finally {
      q = !1, Error.prepareStackTrace = r;
    }
    return (e = e ? e.displayName || e.name : "") ? G(e) : "";
  }
  function ke(e) {
    switch (e.tag) {
      case 5:
        return G(e.type);
      case 16:
        return G("Lazy");
      case 13:
        return G("Suspense");
      case 19:
        return G("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
      default:
        return "";
    }
  }
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case F:
        return "Portal";
      case T:
        return "Profiler";
      case x:
        return "StrictMode";
      case ie:
        return "Suspense";
      case K:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case V:
        return (e.displayName || "Context") + ".Consumer";
      case L:
        return (e._context.displayName || "Context") + ".Provider";
      case Q:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case fe:
        return t = e.displayName || null, t !== null ? t : ge(e.type) || "Memo";
      case we:
        t = e._payload, e = e._init;
        try {
          return ge(e(t));
        } catch {
        }
    }
    return null;
  }
  function Ee(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ge(t);
      case 8:
        return t === x ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function b(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function oe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xe(e) {
    var t = oe(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var a = r.get, c = r.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(m) {
        i = "" + m, c.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(m) {
        i = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function pe(e) {
    e._valueTracker || (e._valueTracker = xe(e));
  }
  function Ie(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), i = "";
    return e && (i = oe(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (t.setValue(e), !0) : !1;
  }
  function Be(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ue(e, t) {
    var r = t.checked;
    return k({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function Re(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    r = b(t.value != null ? t.value : r), e._wrapperState = { initialChecked: i, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ze(e, t) {
    t = t.checked, t != null && j(e, "checked", t, !1);
  }
  function Ve(e, t) {
    ze(e, t);
    var r = b(t.value), i = t.type;
    if (r != null) i === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? _e(e, t.type, r) : t.hasOwnProperty("defaultValue") && _e(e, t.type, b(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ne(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
  }
  function _e(e, t, r) {
    (t !== "number" || Be(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Ge = Array.isArray;
  function St(e, t, r, i) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++) a = t.hasOwnProperty("$" + e[r].value), e[r].selected !== a && (e[r].selected = a), a && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + b(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          e[a].selected = !0, i && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return k({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Nt(e, t) {
    var r = t.value;
    if (r == null) {
      if (r = t.children, t = t.defaultValue, r != null) {
        if (t != null) throw Error(l(92));
        if (Ge(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), r = t;
    }
    e._wrapperState = { initialValue: b(r) };
  }
  function tt(e, t) {
    var r = b(t.value), i = b(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), i != null && (e.defaultValue = "" + i);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Xe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var pt, Kt = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, i, a);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (pt = pt || document.createElement("div"), pt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function sn(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Et = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Et).forEach(function(e) {
    Tt.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Et[t] = Et[e];
    });
  });
  function Lt(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Et.hasOwnProperty(e) && Et[e] ? ("" + t).trim() : t + "px";
  }
  function ut(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
      var i = r.indexOf("--") === 0, a = Lt(r, t[r], i);
      r === "float" && (r = "cssFloat"), i ? e.setProperty(r, a) : e[r] = a;
    }
  }
  var Lo = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function mr(e, t) {
    if (t) {
      if (Lo[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function Qn(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gr = null;
  function Gn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var qn = null, gn = null, En = null;
  function ao(e) {
    if (e = Di(e)) {
      if (typeof qn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Ql(t), qn(e.stateNode, e.type, t));
    }
  }
  function Ot(e) {
    gn ? En ? En.push(e) : En = [e] : gn = e;
  }
  function en() {
    if (gn) {
      var e = gn, t = En;
      if (En = gn = null, ao(e), t) for (e = 0; e < t.length; e++) ao(t[e]);
    }
  }
  function Oe(e, t) {
    return e(t);
  }
  function Ye() {
  }
  var $t = !1;
  function Xn(e, t, r) {
    if ($t) return e(t, r);
    $t = !0;
    try {
      return Oe(e, t, r);
    } finally {
      $t = !1, (gn !== null || En !== null) && (Ye(), en());
    }
  }
  function ue(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = Ql(r);
    if (i === null) return null;
    r = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(l(231, t, typeof r));
    return r;
  }
  var Le = !1;
  if (p) try {
    var be = {};
    Object.defineProperty(be, "passive", { get: function() {
      Le = !0;
    } }), window.addEventListener("test", be, be), window.removeEventListener("test", be, be);
  } catch {
    Le = !1;
  }
  function At(e, t, r, i, a, c, m, S, R) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, W);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var It = !1, tn = null, nn = !1, bt = null, an = { onError: function(e) {
    It = !0, tn = e;
  } };
  function ct(e, t, r, i, a, c, m, S, R) {
    It = !1, tn = null, At.apply(an, arguments);
  }
  function Pr(e, t, r, i, a, c, m, S, R) {
    if (ct.apply(this, arguments), It) {
      if (It) {
        var W = tn;
        It = !1, tn = null;
      } else throw Error(l(198));
      nn || (nn = !0, bt = W);
    }
  }
  function vr(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Tl(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gi(e) {
    if (vr(e) !== e) throw Error(l(188));
  }
  function Il(e) {
    var t = e.alternate;
    if (!t) {
      if (t = vr(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var c = a.alternate;
      if (c === null) {
        if (i = a.return, i !== null) {
          r = i;
          continue;
        }
        break;
      }
      if (a.child === c.child) {
        for (c = a.child; c; ) {
          if (c === r) return gi(a), e;
          if (c === i) return gi(a), t;
          c = c.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== i.return) r = a, i = c;
      else {
        for (var m = !1, S = a.child; S; ) {
          if (S === r) {
            m = !0, r = a, i = c;
            break;
          }
          if (S === i) {
            m = !0, i = a, r = c;
            break;
          }
          S = S.sibling;
        }
        if (!m) {
          for (S = c.child; S; ) {
            if (S === r) {
              m = !0, r = c, i = a;
              break;
            }
            if (S === i) {
              m = !0, i = c, r = a;
              break;
            }
            S = S.sibling;
          }
          if (!m) throw Error(l(189));
        }
      }
      if (r.alternate !== i) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function vi(e) {
    return e = Il(e), e !== null ? yi(e) : null;
  }
  function yi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = yi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wi = o.unstable_scheduleCallback, Je = o.unstable_cancelCallback, bn = o.unstable_shouldYield, xi = o.unstable_requestPaint, st = o.unstable_now, va = o.unstable_getCurrentPriorityLevel, uo = o.unstable_ImmediatePriority, zf = o.unstable_UserBlockingPriority, Rl = o.unstable_NormalPriority, ov = o.unstable_LowPriority, Nf = o.unstable_IdlePriority, Ol = null, Zn = null;
  function iv(e) {
    if (Zn && typeof Zn.onCommitFiberRoot == "function") try {
      Zn.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var jn = Math.clz32 ? Math.clz32 : av, lv = Math.log, sv = Math.LN2;
  function av(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (lv(e) / sv | 0) | 0;
  }
  var Al = 64, Pl = 4194304;
  function Si(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ll(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0, a = e.suspendedLanes, c = e.pingedLanes, m = r & 268435455;
    if (m !== 0) {
      var S = m & ~a;
      S !== 0 ? i = Si(S) : (c &= m, c !== 0 && (i = Si(c)));
    } else m = r & ~a, m !== 0 ? i = Si(m) : c !== 0 && (i = Si(c));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, c = t & -t, a >= c || a === 16 && (c & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) r = 31 - jn(t), a = 1 << r, i |= e[r], t &= ~a;
    return i;
  }
  function uv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cv(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var m = 31 - jn(c), S = 1 << m, R = a[m];
      R === -1 ? ((S & r) === 0 || (S & i) !== 0) && (a[m] = uv(S, t)) : R <= t && (e.expiredLanes |= S), c &= ~S;
    }
  }
  function ya(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function bf() {
    var e = Al;
    return Al <<= 1, (Al & 4194240) === 0 && (Al = 64), e;
  }
  function wa(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function ki(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jn(t), e[t] = r;
  }
  function fv(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - jn(r), c = 1 << a;
      t[a] = 0, i[a] = -1, e[a] = -1, r &= ~c;
    }
  }
  function xa(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var i = 31 - jn(r), a = 1 << i;
      a & t | e[i] & t && (e[i] |= t), r &= ~a;
    }
  }
  var rt = 0;
  function jf(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ff, Sa, Mf, Df, Hf, ka = !1, zl = [], Lr = null, zr = null, Nr = null, _i = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), br = [], dv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Bf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lr = null;
        break;
      case "dragenter":
      case "dragleave":
        zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Nr = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ci.delete(t.pointerId);
    }
  }
  function Ei(e, t, r, i, a, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: i, nativeEvent: c, targetContainers: [a] }, t !== null && (t = Di(t), t !== null && Sa(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function pv(e, t, r, i, a) {
    switch (t) {
      case "focusin":
        return Lr = Ei(Lr, e, t, r, i, a), !0;
      case "dragenter":
        return zr = Ei(zr, e, t, r, i, a), !0;
      case "mouseover":
        return Nr = Ei(Nr, e, t, r, i, a), !0;
      case "pointerover":
        var c = a.pointerId;
        return _i.set(c, Ei(_i.get(c) || null, e, t, r, i, a)), !0;
      case "gotpointercapture":
        return c = a.pointerId, Ci.set(c, Ei(Ci.get(c) || null, e, t, r, i, a)), !0;
    }
    return !1;
  }
  function Wf(e) {
    var t = co(e.target);
    if (t !== null) {
      var r = vr(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = Tl(r), t !== null) {
            e.blockedOn = t, Hf(e.priority, function() {
              Mf(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Nl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        gr = i, r.target.dispatchEvent(i), gr = null;
      } else return t = Di(r), t !== null && Sa(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function Uf(e, t, r) {
    Nl(e) && r.delete(t);
  }
  function hv() {
    ka = !1, Lr !== null && Nl(Lr) && (Lr = null), zr !== null && Nl(zr) && (zr = null), Nr !== null && Nl(Nr) && (Nr = null), _i.forEach(Uf), Ci.forEach(Uf);
  }
  function Ti(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ka || (ka = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, hv)));
  }
  function Ii(e) {
    function t(a) {
      return Ti(a, e);
    }
    if (0 < zl.length) {
      Ti(zl[0], e);
      for (var r = 1; r < zl.length; r++) {
        var i = zl[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Lr !== null && Ti(Lr, e), zr !== null && Ti(zr, e), Nr !== null && Ti(Nr, e), _i.forEach(t), Ci.forEach(t), r = 0; r < br.length; r++) i = br[r], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < br.length && (r = br[0], r.blockedOn === null); ) Wf(r), r.blockedOn === null && br.shift();
  }
  var zo = $.ReactCurrentBatchConfig, bl = !0;
  function mv(e, t, r, i) {
    var a = rt, c = zo.transition;
    zo.transition = null;
    try {
      rt = 1, _a(e, t, r, i);
    } finally {
      rt = a, zo.transition = c;
    }
  }
  function gv(e, t, r, i) {
    var a = rt, c = zo.transition;
    zo.transition = null;
    try {
      rt = 4, _a(e, t, r, i);
    } finally {
      rt = a, zo.transition = c;
    }
  }
  function _a(e, t, r, i) {
    if (bl) {
      var a = Ca(e, t, r, i);
      if (a === null) Ba(e, t, i, jl, r), Bf(e, i);
      else if (pv(a, e, t, r, i)) i.stopPropagation();
      else if (Bf(e, i), t & 4 && -1 < dv.indexOf(e)) {
        for (; a !== null; ) {
          var c = Di(a);
          if (c !== null && Ff(c), c = Ca(e, t, r, i), c === null && Ba(e, t, i, jl, r), c === a) break;
          a = c;
        }
        a !== null && i.stopPropagation();
      } else Ba(e, t, i, null, r);
    }
  }
  var jl = null;
  function Ca(e, t, r, i) {
    if (jl = null, e = Gn(i), e = co(e), e !== null) if (t = vr(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = Tl(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return jl = e, null;
  }
  function $f(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (va()) {
          case uo:
            return 1;
          case zf:
            return 4;
          case Rl:
          case ov:
            return 16;
          case Nf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jr = null, Ea = null, Fl = null;
  function Vf() {
    if (Fl) return Fl;
    var e, t = Ea, r = t.length, i, a = "value" in jr ? jr.value : jr.textContent, c = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++) ;
    var m = r - e;
    for (i = 1; i <= m && t[r - i] === a[c - i]; i++) ;
    return Fl = a.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Ml(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Dl() {
    return !0;
  }
  function Yf() {
    return !1;
  }
  function vn(e) {
    function t(r, i, a, c, m) {
      this._reactName = r, this._targetInst = a, this.type = i, this.nativeEvent = c, this.target = m, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (r = e[S], this[S] = r ? r(c) : c[S]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Dl : Yf, this.isPropagationStopped = Yf, this;
    }
    return k(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Dl);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Dl);
    }, persist: function() {
    }, isPersistent: Dl }), t;
  }
  var No = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ta = vn(No), Ri = k({}, No, { view: 0, detail: 0 }), vv = vn(Ri), Ia, Ra, Oi, Hl = k({}, Ri, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Aa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Oi && (Oi && e.type === "mousemove" ? (Ia = e.screenX - Oi.screenX, Ra = e.screenY - Oi.screenY) : Ra = Ia = 0, Oi = e), Ia);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ra;
  } }), Kf = vn(Hl), yv = k({}, Hl, { dataTransfer: 0 }), wv = vn(yv), xv = k({}, Ri, { relatedTarget: 0 }), Oa = vn(xv), Sv = k({}, No, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), kv = vn(Sv), _v = k({}, No, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Cv = vn(_v), Ev = k({}, No, { data: 0 }), Qf = vn(Ev), Tv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Iv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Rv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ov(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Rv[e]) ? !!t[e] : !1;
  }
  function Aa() {
    return Ov;
  }
  var Av = k({}, Ri, { key: function(e) {
    if (e.key) {
      var t = Tv[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Iv[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Aa, charCode: function(e) {
    return e.type === "keypress" ? Ml(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Pv = vn(Av), Lv = k({}, Hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gf = vn(Lv), zv = k({}, Ri, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Aa }), Nv = vn(zv), bv = k({}, No, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), jv = vn(bv), Fv = k({}, Hl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mv = vn(Fv), Dv = [9, 13, 27, 32], Pa = p && "CompositionEvent" in window, Ai = null;
  p && "documentMode" in document && (Ai = document.documentMode);
  var Hv = p && "TextEvent" in window && !Ai, qf = p && (!Pa || Ai && 8 < Ai && 11 >= Ai), Xf = " ", Zf = !1;
  function Jf(e, t) {
    switch (e) {
      case "keyup":
        return Dv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ed(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var bo = !1;
  function Bv(e, t) {
    switch (e) {
      case "compositionend":
        return ed(t);
      case "keypress":
        return t.which !== 32 ? null : (Zf = !0, Xf);
      case "textInput":
        return e = t.data, e === Xf && Zf ? null : e;
      default:
        return null;
    }
  }
  function Wv(e, t) {
    if (bo) return e === "compositionend" || !Pa && Jf(e, t) ? (e = Vf(), Fl = Ea = jr = null, bo = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Uv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function td(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uv[e.type] : t === "textarea";
  }
  function nd(e, t, r, i) {
    Ot(i), t = Vl(t, "onChange"), 0 < t.length && (r = new Ta("onChange", "change", null, r, i), e.push({ event: r, listeners: t }));
  }
  var Pi = null, Li = null;
  function $v(e) {
    xd(e, 0);
  }
  function Bl(e) {
    var t = Ho(e);
    if (Ie(t)) return e;
  }
  function Vv(e, t) {
    if (e === "change") return t;
  }
  var rd = !1;
  if (p) {
    var La;
    if (p) {
      var za = "oninput" in document;
      if (!za) {
        var od = document.createElement("div");
        od.setAttribute("oninput", "return;"), za = typeof od.oninput == "function";
      }
      La = za;
    } else La = !1;
    rd = La && (!document.documentMode || 9 < document.documentMode);
  }
  function id() {
    Pi && (Pi.detachEvent("onpropertychange", ld), Li = Pi = null);
  }
  function ld(e) {
    if (e.propertyName === "value" && Bl(Li)) {
      var t = [];
      nd(t, Li, e, Gn(e)), Xn($v, t);
    }
  }
  function Yv(e, t, r) {
    e === "focusin" ? (id(), Pi = t, Li = r, Pi.attachEvent("onpropertychange", ld)) : e === "focusout" && id();
  }
  function Kv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bl(Li);
  }
  function Qv(e, t) {
    if (e === "click") return Bl(t);
  }
  function Gv(e, t) {
    if (e === "input" || e === "change") return Bl(t);
  }
  function qv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Fn = typeof Object.is == "function" ? Object.is : qv;
  function zi(e, t) {
    if (Fn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var a = r[i];
      if (!g.call(t, a) || !Fn(e[a], t[a])) return !1;
    }
    return !0;
  }
  function sd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ad(e, t) {
    var r = sd(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (i = e + r.textContent.length, e <= t && i >= t) return { node: r, offset: t - e };
        e = i;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = sd(r);
    }
  }
  function ud(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ud(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function cd() {
    for (var e = window, t = Be(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Be(e.document);
    }
    return t;
  }
  function Na(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Xv(e) {
    var t = cd(), r = e.focusedElem, i = e.selectionRange;
    if (t !== r && r && r.ownerDocument && ud(r.ownerDocument.documentElement, r)) {
      if (i !== null && Na(r)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = r.textContent.length, c = Math.min(i.start, a);
          i = i.end === void 0 ? c : Math.min(i.end, a), !e.extend && c > i && (a = i, i = c, c = a), a = ad(r, c);
          var m = ad(
            r,
            i
          );
          a && m && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), c > i ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Zv = p && "documentMode" in document && 11 >= document.documentMode, jo = null, ba = null, Ni = null, ja = !1;
  function fd(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ja || jo == null || jo !== Be(i) || (i = jo, "selectionStart" in i && Na(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Ni && zi(Ni, i) || (Ni = i, i = Vl(ba, "onSelect"), 0 < i.length && (t = new Ta("onSelect", "select", null, t, r), e.push({ event: t, listeners: i }), t.target = jo)));
  }
  function Wl(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var Fo = { animationend: Wl("Animation", "AnimationEnd"), animationiteration: Wl("Animation", "AnimationIteration"), animationstart: Wl("Animation", "AnimationStart"), transitionend: Wl("Transition", "TransitionEnd") }, Fa = {}, dd = {};
  p && (dd = document.createElement("div").style, "AnimationEvent" in window || (delete Fo.animationend.animation, delete Fo.animationiteration.animation, delete Fo.animationstart.animation), "TransitionEvent" in window || delete Fo.transitionend.transition);
  function Ul(e) {
    if (Fa[e]) return Fa[e];
    if (!Fo[e]) return e;
    var t = Fo[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in dd) return Fa[e] = t[r];
    return e;
  }
  var pd = Ul("animationend"), hd = Ul("animationiteration"), md = Ul("animationstart"), gd = Ul("transitionend"), vd = /* @__PURE__ */ new Map(), yd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fr(e, t) {
    vd.set(e, t), f(t, [e]);
  }
  for (var Ma = 0; Ma < yd.length; Ma++) {
    var Da = yd[Ma], Jv = Da.toLowerCase(), e0 = Da[0].toUpperCase() + Da.slice(1);
    Fr(Jv, "on" + e0);
  }
  Fr(pd, "onAnimationEnd"), Fr(hd, "onAnimationIteration"), Fr(md, "onAnimationStart"), Fr("dblclick", "onDoubleClick"), Fr("focusin", "onFocus"), Fr("focusout", "onBlur"), Fr(gd, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), t0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));
  function wd(e, t, r) {
    var i = e.type || "unknown-event";
    e.currentTarget = r, Pr(i, t, void 0, e), e.currentTarget = null;
  }
  function xd(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], a = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t) for (var m = i.length - 1; 0 <= m; m--) {
          var S = i[m], R = S.instance, W = S.currentTarget;
          if (S = S.listener, R !== c && a.isPropagationStopped()) break e;
          wd(a, S, W), c = R;
        }
        else for (m = 0; m < i.length; m++) {
          if (S = i[m], R = S.instance, W = S.currentTarget, S = S.listener, R !== c && a.isPropagationStopped()) break e;
          wd(a, S, W), c = R;
        }
      }
    }
    if (nn) throw e = bt, nn = !1, bt = null, e;
  }
  function ht(e, t) {
    var r = t[Ka];
    r === void 0 && (r = t[Ka] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (Sd(t, e, 2, !1), r.add(i));
  }
  function Ha(e, t, r) {
    var i = 0;
    t && (i |= 4), Sd(r, e, i, t);
  }
  var $l = "_reactListening" + Math.random().toString(36).slice(2);
  function ji(e) {
    if (!e[$l]) {
      e[$l] = !0, s.forEach(function(r) {
        r !== "selectionchange" && (t0.has(r) || Ha(r, !1, e), Ha(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$l] || (t[$l] = !0, Ha("selectionchange", !1, t));
    }
  }
  function Sd(e, t, r, i) {
    switch ($f(t)) {
      case 1:
        var a = mv;
        break;
      case 4:
        a = gv;
        break;
      default:
        a = _a;
    }
    r = a.bind(null, t, r, e), a = void 0, !Le || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), i ? a !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: a }) : e.addEventListener(t, r, !0) : a !== void 0 ? e.addEventListener(t, r, { passive: a }) : e.addEventListener(t, r, !1);
  }
  function Ba(e, t, r, i, a) {
    var c = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var m = i.tag;
      if (m === 3 || m === 4) {
        var S = i.stateNode.containerInfo;
        if (S === a || S.nodeType === 8 && S.parentNode === a) break;
        if (m === 4) for (m = i.return; m !== null; ) {
          var R = m.tag;
          if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === a || R.nodeType === 8 && R.parentNode === a)) return;
          m = m.return;
        }
        for (; S !== null; ) {
          if (m = co(S), m === null) return;
          if (R = m.tag, R === 5 || R === 6) {
            i = c = m;
            continue e;
          }
          S = S.parentNode;
        }
      }
      i = i.return;
    }
    Xn(function() {
      var W = c, Z = Gn(r), J = [];
      e: {
        var X = vd.get(e);
        if (X !== void 0) {
          var ce = Ta, ve = e;
          switch (e) {
            case "keypress":
              if (Ml(r) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Pv;
              break;
            case "focusin":
              ve = "focus", ce = Oa;
              break;
            case "focusout":
              ve = "blur", ce = Oa;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Oa;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = Kf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = wv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Nv;
              break;
            case pd:
            case hd:
            case md:
              ce = kv;
              break;
            case gd:
              ce = jv;
              break;
            case "scroll":
              ce = vv;
              break;
            case "wheel":
              ce = Mv;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = Gf;
          }
          var ye = (t & 4) !== 0, Pt = !ye && e === "scroll", N = ye ? X !== null ? X + "Capture" : null : X;
          ye = [];
          for (var P = W, M; P !== null; ) {
            M = P;
            var le = M.stateNode;
            if (M.tag === 5 && le !== null && (M = le, N !== null && (le = ue(P, N), le != null && ye.push(Fi(P, le, M)))), Pt) break;
            P = P.return;
          }
          0 < ye.length && (X = new ce(X, ve, null, r, Z), J.push({ event: X, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (X = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", X && r !== gr && (ve = r.relatedTarget || r.fromElement) && (co(ve) || ve[yr])) break e;
          if ((ce || X) && (X = Z.window === Z ? Z : (X = Z.ownerDocument) ? X.defaultView || X.parentWindow : window, ce ? (ve = r.relatedTarget || r.toElement, ce = W, ve = ve ? co(ve) : null, ve !== null && (Pt = vr(ve), ve !== Pt || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (ce = null, ve = W), ce !== ve)) {
            if (ye = Kf, le = "onMouseLeave", N = "onMouseEnter", P = "mouse", (e === "pointerout" || e === "pointerover") && (ye = Gf, le = "onPointerLeave", N = "onPointerEnter", P = "pointer"), Pt = ce == null ? X : Ho(ce), M = ve == null ? X : Ho(ve), X = new ye(le, P + "leave", ce, r, Z), X.target = Pt, X.relatedTarget = M, le = null, co(Z) === W && (ye = new ye(N, P + "enter", ve, r, Z), ye.target = M, ye.relatedTarget = Pt, le = ye), Pt = le, ce && ve) t: {
              for (ye = ce, N = ve, P = 0, M = ye; M; M = Mo(M)) P++;
              for (M = 0, le = N; le; le = Mo(le)) M++;
              for (; 0 < P - M; ) ye = Mo(ye), P--;
              for (; 0 < M - P; ) N = Mo(N), M--;
              for (; P--; ) {
                if (ye === N || N !== null && ye === N.alternate) break t;
                ye = Mo(ye), N = Mo(N);
              }
              ye = null;
            }
            else ye = null;
            ce !== null && kd(J, X, ce, ye, !1), ve !== null && Pt !== null && kd(J, Pt, ve, ye, !0);
          }
        }
        e: {
          if (X = W ? Ho(W) : window, ce = X.nodeName && X.nodeName.toLowerCase(), ce === "select" || ce === "input" && X.type === "file") var Se = Vv;
          else if (td(X)) if (rd) Se = Gv;
          else {
            Se = Kv;
            var Ae = Yv;
          }
          else (ce = X.nodeName) && ce.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (Se = Qv);
          if (Se && (Se = Se(e, W))) {
            nd(J, Se, r, Z);
            break e;
          }
          Ae && Ae(e, X, W), e === "focusout" && (Ae = X._wrapperState) && Ae.controlled && X.type === "number" && _e(X, "number", X.value);
        }
        switch (Ae = W ? Ho(W) : window, e) {
          case "focusin":
            (td(Ae) || Ae.contentEditable === "true") && (jo = Ae, ba = W, Ni = null);
            break;
          case "focusout":
            Ni = ba = jo = null;
            break;
          case "mousedown":
            ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ja = !1, fd(J, r, Z);
            break;
          case "selectionchange":
            if (Zv) break;
          case "keydown":
          case "keyup":
            fd(J, r, Z);
        }
        var Pe;
        if (Pa) e: {
          switch (e) {
            case "compositionstart":
              var je = "onCompositionStart";
              break e;
            case "compositionend":
              je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              je = "onCompositionUpdate";
              break e;
          }
          je = void 0;
        }
        else bo ? Jf(e, r) && (je = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (je = "onCompositionStart");
        je && (qf && r.locale !== "ko" && (bo || je !== "onCompositionStart" ? je === "onCompositionEnd" && bo && (Pe = Vf()) : (jr = Z, Ea = "value" in jr ? jr.value : jr.textContent, bo = !0)), Ae = Vl(W, je), 0 < Ae.length && (je = new Qf(je, e, null, r, Z), J.push({ event: je, listeners: Ae }), Pe ? je.data = Pe : (Pe = ed(r), Pe !== null && (je.data = Pe)))), (Pe = Hv ? Bv(e, r) : Wv(e, r)) && (W = Vl(W, "onBeforeInput"), 0 < W.length && (Z = new Qf("onBeforeInput", "beforeinput", null, r, Z), J.push({ event: Z, listeners: W }), Z.data = Pe));
      }
      xd(J, t);
    });
  }
  function Fi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Vl(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var a = e, c = a.stateNode;
      a.tag === 5 && c !== null && (a = c, c = ue(e, r), c != null && i.unshift(Fi(e, c, a)), c = ue(e, t), c != null && i.push(Fi(e, c, a))), e = e.return;
    }
    return i;
  }
  function Mo(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function kd(e, t, r, i, a) {
    for (var c = t._reactName, m = []; r !== null && r !== i; ) {
      var S = r, R = S.alternate, W = S.stateNode;
      if (R !== null && R === i) break;
      S.tag === 5 && W !== null && (S = W, a ? (R = ue(r, c), R != null && m.unshift(Fi(r, R, S))) : a || (R = ue(r, c), R != null && m.push(Fi(r, R, S)))), r = r.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var n0 = /\r\n?/g, r0 = /\u0000|\uFFFD/g;
  function _d(e) {
    return (typeof e == "string" ? e : "" + e).replace(n0, `
`).replace(r0, "");
  }
  function Yl(e, t, r) {
    if (t = _d(t), _d(e) !== t && r) throw Error(l(425));
  }
  function Kl() {
  }
  var Wa = null, Ua = null;
  function $a(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Va = typeof setTimeout == "function" ? setTimeout : void 0, o0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Cd = typeof Promise == "function" ? Promise : void 0, i0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cd < "u" ? function(e) {
    return Cd.resolve(null).then(e).catch(l0);
  } : Va;
  function l0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ya(e, t) {
    var r = t, i = 0;
    do {
      var a = r.nextSibling;
      if (e.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
        if (i === 0) {
          e.removeChild(a), Ii(t);
          return;
        }
        i--;
      } else r !== "$" && r !== "$?" && r !== "$!" || i++;
      r = a;
    } while (r);
    Ii(t);
  }
  function Mr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ed(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Do = Math.random().toString(36).slice(2), Jn = "__reactFiber$" + Do, Mi = "__reactProps$" + Do, yr = "__reactContainer$" + Do, Ka = "__reactEvents$" + Do, s0 = "__reactListeners$" + Do, a0 = "__reactHandles$" + Do;
  function co(e) {
    var t = e[Jn];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[yr] || r[Jn]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Ed(e); e !== null; ) {
          if (r = e[Jn]) return r;
          e = Ed(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Di(e) {
    return e = e[Jn] || e[yr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ho(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Ql(e) {
    return e[Mi] || null;
  }
  var Qa = [], Bo = -1;
  function Dr(e) {
    return { current: e };
  }
  function mt(e) {
    0 > Bo || (e.current = Qa[Bo], Qa[Bo] = null, Bo--);
  }
  function ft(e, t) {
    Bo++, Qa[Bo] = e.current, e.current = t;
  }
  var Hr = {}, Qt = Dr(Hr), un = Dr(!1), fo = Hr;
  function Wo(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Hr;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var a = {}, c;
    for (c in r) a[c] = t[c];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function cn(e) {
    return e = e.childContextTypes, e != null;
  }
  function Gl() {
    mt(un), mt(Qt);
  }
  function Td(e, t, r) {
    if (Qt.current !== Hr) throw Error(l(168));
    ft(Qt, t), ft(un, r);
  }
  function Id(e, t, r) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return r;
    i = i.getChildContext();
    for (var a in i) if (!(a in t)) throw Error(l(108, Ee(e) || "Unknown", a));
    return k({}, r, i);
  }
  function ql(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Hr, fo = Qt.current, ft(Qt, e), ft(un, un.current), !0;
  }
  function Rd(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(l(169));
    r ? (e = Id(e, t, fo), i.__reactInternalMemoizedMergedChildContext = e, mt(un), mt(Qt), ft(Qt, e)) : mt(un), ft(un, r);
  }
  var wr = null, Xl = !1, Ga = !1;
  function Od(e) {
    wr === null ? wr = [e] : wr.push(e);
  }
  function u0(e) {
    Xl = !0, Od(e);
  }
  function Br() {
    if (!Ga && wr !== null) {
      Ga = !0;
      var e = 0, t = rt;
      try {
        var r = wr;
        for (rt = 1; e < r.length; e++) {
          var i = r[e];
          do
            i = i(!0);
          while (i !== null);
        }
        wr = null, Xl = !1;
      } catch (a) {
        throw wr !== null && (wr = wr.slice(e + 1)), wi(uo, Br), a;
      } finally {
        rt = t, Ga = !1;
      }
    }
    return null;
  }
  var Uo = [], $o = 0, Zl = null, Jl = 0, Tn = [], In = 0, po = null, xr = 1, Sr = "";
  function ho(e, t) {
    Uo[$o++] = Jl, Uo[$o++] = Zl, Zl = e, Jl = t;
  }
  function Ad(e, t, r) {
    Tn[In++] = xr, Tn[In++] = Sr, Tn[In++] = po, po = e;
    var i = xr;
    e = Sr;
    var a = 32 - jn(i) - 1;
    i &= ~(1 << a), r += 1;
    var c = 32 - jn(t) + a;
    if (30 < c) {
      var m = a - a % 5;
      c = (i & (1 << m) - 1).toString(32), i >>= m, a -= m, xr = 1 << 32 - jn(t) + a | r << a | i, Sr = c + e;
    } else xr = 1 << c | r << a | i, Sr = e;
  }
  function qa(e) {
    e.return !== null && (ho(e, 1), Ad(e, 1, 0));
  }
  function Xa(e) {
    for (; e === Zl; ) Zl = Uo[--$o], Uo[$o] = null, Jl = Uo[--$o], Uo[$o] = null;
    for (; e === po; ) po = Tn[--In], Tn[In] = null, Sr = Tn[--In], Tn[In] = null, xr = Tn[--In], Tn[In] = null;
  }
  var yn = null, wn = null, wt = !1, Mn = null;
  function Pd(e, t) {
    var r = Pn(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function Ld(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, yn = e, wn = Mr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, yn = e, wn = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = po !== null ? { id: xr, overflow: Sr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Pn(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, yn = e, wn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Za(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ja(e) {
    if (wt) {
      var t = wn;
      if (t) {
        var r = t;
        if (!Ld(e, t)) {
          if (Za(e)) throw Error(l(418));
          t = Mr(r.nextSibling);
          var i = yn;
          t && Ld(e, t) ? Pd(i, r) : (e.flags = e.flags & -4097 | 2, wt = !1, yn = e);
        }
      } else {
        if (Za(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, wt = !1, yn = e;
      }
    }
  }
  function zd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    yn = e;
  }
  function es(e) {
    if (e !== yn) return !1;
    if (!wt) return zd(e), wt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps)), t && (t = wn)) {
      if (Za(e)) throw Nd(), Error(l(418));
      for (; t; ) Pd(e, t), t = Mr(t.nextSibling);
    }
    if (zd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                wn = Mr(e.nextSibling);
                break e;
              }
              t--;
            } else r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        wn = null;
      }
    } else wn = yn ? Mr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Nd() {
    for (var e = wn; e; ) e = Mr(e.nextSibling);
  }
  function Vo() {
    wn = yn = null, wt = !1;
  }
  function eu(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  var c0 = $.ReactCurrentBatchConfig;
  function Dn(e, t) {
    if (e && e.defaultProps) {
      t = k({}, t), e = e.defaultProps;
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  var ts = Dr(null), ns = null, Yo = null, tu = null;
  function nu() {
    tu = Yo = ns = null;
  }
  function ru(e) {
    var t = ts.current;
    mt(ts), e._currentValue = t;
  }
  function ou(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function Ko(e, t) {
    ns = e, tu = Yo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (fn = !0), e.firstContext = null);
  }
  function Rn(e) {
    var t = e._currentValue;
    if (tu !== e) if (e = { context: e, memoizedValue: t, next: null }, Yo === null) {
      if (ns === null) throw Error(l(308));
      Yo = e, ns.dependencies = { lanes: 0, firstContext: e };
    } else Yo = Yo.next = e;
    return t;
  }
  var mo = null;
  function iu(e) {
    mo === null ? mo = [e] : mo.push(e);
  }
  function bd(e, t, r, i) {
    var a = t.interleaved;
    return a === null ? (r.next = r, iu(t)) : (r.next = a.next, a.next = r), t.interleaved = r, kr(e, i);
  }
  function kr(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var Wr = !1;
  function lu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function jd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _r(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ur(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ze & 2) !== 0) {
      var a = i.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), i.pending = t, kr(e, r);
    }
    return a = i.interleaved, a === null ? (t.next = t, iu(i)) : (t.next = a.next, a.next = t), i.interleaved = t, kr(e, r);
  }
  function rs(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, xa(e, r);
    }
  }
  function Fd(e, t) {
    var r = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, r === i)) {
      var a = null, c = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var m = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          c === null ? a = c = m : c = c.next = m, r = r.next;
        } while (r !== null);
        c === null ? a = c = t : c = c.next = t;
      } else a = c = t;
      r = { baseState: i.baseState, firstBaseUpdate: a, lastBaseUpdate: c, shared: i.shared, effects: i.effects }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  function os(e, t, r, i) {
    var a = e.updateQueue;
    Wr = !1;
    var c = a.firstBaseUpdate, m = a.lastBaseUpdate, S = a.shared.pending;
    if (S !== null) {
      a.shared.pending = null;
      var R = S, W = R.next;
      R.next = null, m === null ? c = W : m.next = W, m = R;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, S = Z.lastBaseUpdate, S !== m && (S === null ? Z.firstBaseUpdate = W : S.next = W, Z.lastBaseUpdate = R));
    }
    if (c !== null) {
      var J = a.baseState;
      m = 0, Z = W = R = null, S = c;
      do {
        var X = S.lane, ce = S.eventTime;
        if ((i & X) === X) {
          Z !== null && (Z = Z.next = {
            eventTime: ce,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ve = e, ye = S;
            switch (X = t, ce = r, ye.tag) {
              case 1:
                if (ve = ye.payload, typeof ve == "function") {
                  J = ve.call(ce, J, X);
                  break e;
                }
                J = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ye.payload, X = typeof ve == "function" ? ve.call(ce, J, X) : ve, X == null) break e;
                J = k({}, J, X);
                break e;
              case 2:
                Wr = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (e.flags |= 64, X = a.effects, X === null ? a.effects = [S] : X.push(S));
        } else ce = { eventTime: ce, lane: X, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, Z === null ? (W = Z = ce, R = J) : Z = Z.next = ce, m |= X;
        if (S = S.next, S === null) {
          if (S = a.shared.pending, S === null) break;
          X = S, S = X.next, X.next = null, a.lastBaseUpdate = X, a.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (R = J), a.baseState = R, a.firstBaseUpdate = W, a.lastBaseUpdate = Z, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          m |= a.lane, a = a.next;
        while (a !== t);
      } else c === null && (a.shared.lanes = 0);
      yo |= m, e.lanes = m, e.memoizedState = J;
    }
  }
  function Md(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], a = i.callback;
      if (a !== null) {
        if (i.callback = null, i = r, typeof a != "function") throw Error(l(191, a));
        a.call(i);
      }
    }
  }
  var Dd = new n.Component().refs;
  function su(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : k({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var is = { isMounted: function(e) {
    return (e = e._reactInternals) ? vr(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var i = on(), a = Kr(e), c = _r(i, a);
    c.payload = t, r != null && (c.callback = r), t = Ur(e, c, a), t !== null && (Wn(t, e, a, i), rs(t, e, a));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var i = on(), a = Kr(e), c = _r(i, a);
    c.tag = 1, c.payload = t, r != null && (c.callback = r), t = Ur(e, c, a), t !== null && (Wn(t, e, a, i), rs(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = on(), i = Kr(e), a = _r(r, i);
    a.tag = 2, t != null && (a.callback = t), t = Ur(e, a, i), t !== null && (Wn(t, e, i, r), rs(t, e, i));
  } };
  function Hd(e, t, r, i, a, c, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, c, m) : t.prototype && t.prototype.isPureReactComponent ? !zi(r, i) || !zi(a, c) : !0;
  }
  function Bd(e, t, r) {
    var i = !1, a = Hr, c = t.contextType;
    return typeof c == "object" && c !== null ? c = Rn(c) : (a = cn(t) ? fo : Qt.current, i = t.contextTypes, c = (i = i != null) ? Wo(e, a) : Hr), t = new t(r, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = is, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = c), t;
  }
  function Wd(e, t, r, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && is.enqueueReplaceState(t, t.state, null);
  }
  function au(e, t, r, i) {
    var a = e.stateNode;
    a.props = r, a.state = e.memoizedState, a.refs = Dd, lu(e);
    var c = t.contextType;
    typeof c == "object" && c !== null ? a.context = Rn(c) : (c = cn(t) ? fo : Qt.current, a.context = Wo(e, c)), a.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (su(e, t, c, r), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && is.enqueueReplaceState(a, a.state, null), os(e, r, a, i), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Hi(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1) throw Error(l(309));
          var i = r.stateNode;
        }
        if (!i) throw Error(l(147, e));
        var a = i, c = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(m) {
          var S = a.refs;
          S === Dd && (S = a.refs = {}), m === null ? delete S[c] : S[c] = m;
        }, t._stringRef = c, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function ls(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ud(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $d(e) {
    function t(N, P) {
      if (e) {
        var M = N.deletions;
        M === null ? (N.deletions = [P], N.flags |= 16) : M.push(P);
      }
    }
    function r(N, P) {
      if (!e) return null;
      for (; P !== null; ) t(N, P), P = P.sibling;
      return null;
    }
    function i(N, P) {
      for (N = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? N.set(P.key, P) : N.set(P.index, P), P = P.sibling;
      return N;
    }
    function a(N, P) {
      return N = Gr(N, P), N.index = 0, N.sibling = null, N;
    }
    function c(N, P, M) {
      return N.index = M, e ? (M = N.alternate, M !== null ? (M = M.index, M < P ? (N.flags |= 2, P) : M) : (N.flags |= 2, P)) : (N.flags |= 1048576, P);
    }
    function m(N) {
      return e && N.alternate === null && (N.flags |= 2), N;
    }
    function S(N, P, M, le) {
      return P === null || P.tag !== 6 ? (P = Vu(M, N.mode, le), P.return = N, P) : (P = a(P, M), P.return = N, P);
    }
    function R(N, P, M, le) {
      var Se = M.type;
      return Se === H ? Z(N, P, M.props.children, le, M.key) : P !== null && (P.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === we && Ud(Se) === P.type) ? (le = a(P, M.props), le.ref = Hi(N, P, M), le.return = N, le) : (le = Es(M.type, M.key, M.props, null, N.mode, le), le.ref = Hi(N, P, M), le.return = N, le);
    }
    function W(N, P, M, le) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== M.containerInfo || P.stateNode.implementation !== M.implementation ? (P = Yu(M, N.mode, le), P.return = N, P) : (P = a(P, M.children || []), P.return = N, P);
    }
    function Z(N, P, M, le, Se) {
      return P === null || P.tag !== 7 ? (P = ko(M, N.mode, le, Se), P.return = N, P) : (P = a(P, M), P.return = N, P);
    }
    function J(N, P, M) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = Vu("" + P, N.mode, M), P.return = N, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case B:
            return M = Es(P.type, P.key, P.props, null, N.mode, M), M.ref = Hi(N, null, P), M.return = N, M;
          case F:
            return P = Yu(P, N.mode, M), P.return = N, P;
          case we:
            var le = P._init;
            return J(N, le(P._payload), M);
        }
        if (Ge(P) || Y(P)) return P = ko(P, N.mode, M, null), P.return = N, P;
        ls(N, P);
      }
      return null;
    }
    function X(N, P, M, le) {
      var Se = P !== null ? P.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return Se !== null ? null : S(N, P, "" + M, le);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case B:
            return M.key === Se ? R(N, P, M, le) : null;
          case F:
            return M.key === Se ? W(N, P, M, le) : null;
          case we:
            return Se = M._init, X(
              N,
              P,
              Se(M._payload),
              le
            );
        }
        if (Ge(M) || Y(M)) return Se !== null ? null : Z(N, P, M, le, null);
        ls(N, M);
      }
      return null;
    }
    function ce(N, P, M, le, Se) {
      if (typeof le == "string" && le !== "" || typeof le == "number") return N = N.get(M) || null, S(P, N, "" + le, Se);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case B:
            return N = N.get(le.key === null ? M : le.key) || null, R(P, N, le, Se);
          case F:
            return N = N.get(le.key === null ? M : le.key) || null, W(P, N, le, Se);
          case we:
            var Ae = le._init;
            return ce(N, P, M, Ae(le._payload), Se);
        }
        if (Ge(le) || Y(le)) return N = N.get(M) || null, Z(P, N, le, Se, null);
        ls(P, le);
      }
      return null;
    }
    function ve(N, P, M, le) {
      for (var Se = null, Ae = null, Pe = P, je = P = 0, Wt = null; Pe !== null && je < M.length; je++) {
        Pe.index > je ? (Wt = Pe, Pe = null) : Wt = Pe.sibling;
        var et = X(N, Pe, M[je], le);
        if (et === null) {
          Pe === null && (Pe = Wt);
          break;
        }
        e && Pe && et.alternate === null && t(N, Pe), P = c(et, P, je), Ae === null ? Se = et : Ae.sibling = et, Ae = et, Pe = Wt;
      }
      if (je === M.length) return r(N, Pe), wt && ho(N, je), Se;
      if (Pe === null) {
        for (; je < M.length; je++) Pe = J(N, M[je], le), Pe !== null && (P = c(Pe, P, je), Ae === null ? Se = Pe : Ae.sibling = Pe, Ae = Pe);
        return wt && ho(N, je), Se;
      }
      for (Pe = i(N, Pe); je < M.length; je++) Wt = ce(Pe, N, je, M[je], le), Wt !== null && (e && Wt.alternate !== null && Pe.delete(Wt.key === null ? je : Wt.key), P = c(Wt, P, je), Ae === null ? Se = Wt : Ae.sibling = Wt, Ae = Wt);
      return e && Pe.forEach(function(qr) {
        return t(N, qr);
      }), wt && ho(N, je), Se;
    }
    function ye(N, P, M, le) {
      var Se = Y(M);
      if (typeof Se != "function") throw Error(l(150));
      if (M = Se.call(M), M == null) throw Error(l(151));
      for (var Ae = Se = null, Pe = P, je = P = 0, Wt = null, et = M.next(); Pe !== null && !et.done; je++, et = M.next()) {
        Pe.index > je ? (Wt = Pe, Pe = null) : Wt = Pe.sibling;
        var qr = X(N, Pe, et.value, le);
        if (qr === null) {
          Pe === null && (Pe = Wt);
          break;
        }
        e && Pe && qr.alternate === null && t(N, Pe), P = c(qr, P, je), Ae === null ? Se = qr : Ae.sibling = qr, Ae = qr, Pe = Wt;
      }
      if (et.done) return r(
        N,
        Pe
      ), wt && ho(N, je), Se;
      if (Pe === null) {
        for (; !et.done; je++, et = M.next()) et = J(N, et.value, le), et !== null && (P = c(et, P, je), Ae === null ? Se = et : Ae.sibling = et, Ae = et);
        return wt && ho(N, je), Se;
      }
      for (Pe = i(N, Pe); !et.done; je++, et = M.next()) et = ce(Pe, N, je, et.value, le), et !== null && (e && et.alternate !== null && Pe.delete(et.key === null ? je : et.key), P = c(et, P, je), Ae === null ? Se = et : Ae.sibling = et, Ae = et);
      return e && Pe.forEach(function(U0) {
        return t(N, U0);
      }), wt && ho(N, je), Se;
    }
    function Pt(N, P, M, le) {
      if (typeof M == "object" && M !== null && M.type === H && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case B:
            e: {
              for (var Se = M.key, Ae = P; Ae !== null; ) {
                if (Ae.key === Se) {
                  if (Se = M.type, Se === H) {
                    if (Ae.tag === 7) {
                      r(N, Ae.sibling), P = a(Ae, M.props.children), P.return = N, N = P;
                      break e;
                    }
                  } else if (Ae.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === we && Ud(Se) === Ae.type) {
                    r(N, Ae.sibling), P = a(Ae, M.props), P.ref = Hi(N, Ae, M), P.return = N, N = P;
                    break e;
                  }
                  r(N, Ae);
                  break;
                } else t(N, Ae);
                Ae = Ae.sibling;
              }
              M.type === H ? (P = ko(M.props.children, N.mode, le, M.key), P.return = N, N = P) : (le = Es(M.type, M.key, M.props, null, N.mode, le), le.ref = Hi(N, P, M), le.return = N, N = le);
            }
            return m(N);
          case F:
            e: {
              for (Ae = M.key; P !== null; ) {
                if (P.key === Ae) if (P.tag === 4 && P.stateNode.containerInfo === M.containerInfo && P.stateNode.implementation === M.implementation) {
                  r(N, P.sibling), P = a(P, M.children || []), P.return = N, N = P;
                  break e;
                } else {
                  r(N, P);
                  break;
                }
                else t(N, P);
                P = P.sibling;
              }
              P = Yu(M, N.mode, le), P.return = N, N = P;
            }
            return m(N);
          case we:
            return Ae = M._init, Pt(N, P, Ae(M._payload), le);
        }
        if (Ge(M)) return ve(N, P, M, le);
        if (Y(M)) return ye(N, P, M, le);
        ls(N, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, P !== null && P.tag === 6 ? (r(N, P.sibling), P = a(P, M), P.return = N, N = P) : (r(N, P), P = Vu(M, N.mode, le), P.return = N, N = P), m(N)) : r(N, P);
    }
    return Pt;
  }
  var Qo = $d(!0), Vd = $d(!1), Bi = {}, er = Dr(Bi), Wi = Dr(Bi), Ui = Dr(Bi);
  function go(e) {
    if (e === Bi) throw Error(l(174));
    return e;
  }
  function uu(e, t) {
    switch (ft(Ui, t), ft(Wi, e), ft(er, Bi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lt(t, e);
    }
    mt(er), ft(er, t);
  }
  function Go() {
    mt(er), mt(Wi), mt(Ui);
  }
  function Yd(e) {
    go(Ui.current);
    var t = go(er.current), r = lt(t, e.type);
    t !== r && (ft(Wi, e), ft(er, r));
  }
  function cu(e) {
    Wi.current === e && (mt(er), mt(Wi));
  }
  var _t = Dr(0);
  function ss(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var fu = [];
  function du() {
    for (var e = 0; e < fu.length; e++) fu[e]._workInProgressVersionPrimary = null;
    fu.length = 0;
  }
  var as = $.ReactCurrentDispatcher, pu = $.ReactCurrentBatchConfig, vo = 0, Ct = null, jt = null, Ht = null, us = !1, $i = !1, Vi = 0, f0 = 0;
  function Gt() {
    throw Error(l(321));
  }
  function hu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Fn(e[r], t[r])) return !1;
    return !0;
  }
  function mu(e, t, r, i, a, c) {
    if (vo = c, Ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, as.current = e === null || e.memoizedState === null ? m0 : g0, e = r(i, a), $i) {
      c = 0;
      do {
        if ($i = !1, Vi = 0, 25 <= c) throw Error(l(301));
        c += 1, Ht = jt = null, t.updateQueue = null, as.current = v0, e = r(i, a);
      } while ($i);
    }
    if (as.current = ds, t = jt !== null && jt.next !== null, vo = 0, Ht = jt = Ct = null, us = !1, t) throw Error(l(300));
    return e;
  }
  function gu() {
    var e = Vi !== 0;
    return Vi = 0, e;
  }
  function tr() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ht === null ? Ct.memoizedState = Ht = e : Ht = Ht.next = e, Ht;
  }
  function On() {
    if (jt === null) {
      var e = Ct.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = jt.next;
    var t = Ht === null ? Ct.memoizedState : Ht.next;
    if (t !== null) Ht = t, jt = e;
    else {
      if (e === null) throw Error(l(310));
      jt = e, e = { memoizedState: jt.memoizedState, baseState: jt.baseState, baseQueue: jt.baseQueue, queue: jt.queue, next: null }, Ht === null ? Ct.memoizedState = Ht = e : Ht = Ht.next = e;
    }
    return Ht;
  }
  function Yi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vu(e) {
    var t = On(), r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var i = jt, a = i.baseQueue, c = r.pending;
    if (c !== null) {
      if (a !== null) {
        var m = a.next;
        a.next = c.next, c.next = m;
      }
      i.baseQueue = a = c, r.pending = null;
    }
    if (a !== null) {
      c = a.next, i = i.baseState;
      var S = m = null, R = null, W = c;
      do {
        var Z = W.lane;
        if ((vo & Z) === Z) R !== null && (R = R.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), i = W.hasEagerState ? W.eagerState : e(i, W.action);
        else {
          var J = {
            lane: Z,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          R === null ? (S = R = J, m = i) : R = R.next = J, Ct.lanes |= Z, yo |= Z;
        }
        W = W.next;
      } while (W !== null && W !== c);
      R === null ? m = i : R.next = S, Fn(i, t.memoizedState) || (fn = !0), t.memoizedState = i, t.baseState = m, t.baseQueue = R, r.lastRenderedState = i;
    }
    if (e = r.interleaved, e !== null) {
      a = e;
      do
        c = a.lane, Ct.lanes |= c, yo |= c, a = a.next;
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function yu(e) {
    var t = On(), r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch, a = r.pending, c = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var m = a = a.next;
      do
        c = e(c, m.action), m = m.next;
      while (m !== a);
      Fn(c, t.memoizedState) || (fn = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), r.lastRenderedState = c;
    }
    return [c, i];
  }
  function Kd() {
  }
  function Qd(e, t) {
    var r = Ct, i = On(), a = t(), c = !Fn(i.memoizedState, a);
    if (c && (i.memoizedState = a, fn = !0), i = i.queue, wu(Xd.bind(null, r, i, e), [e]), i.getSnapshot !== t || c || Ht !== null && Ht.memoizedState.tag & 1) {
      if (r.flags |= 2048, Ki(9, qd.bind(null, r, i, a, t), void 0, null), Bt === null) throw Error(l(349));
      (vo & 30) !== 0 || Gd(r, t, a);
    }
    return a;
  }
  function Gd(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ct.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function qd(e, t, r, i) {
    t.value = r, t.getSnapshot = i, Zd(t) && Jd(e);
  }
  function Xd(e, t, r) {
    return r(function() {
      Zd(t) && Jd(e);
    });
  }
  function Zd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Fn(e, r);
    } catch {
      return !0;
    }
  }
  function Jd(e) {
    var t = kr(e, 1);
    t !== null && Wn(t, e, 1, -1);
  }
  function ep(e) {
    var t = tr();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yi, lastRenderedState: e }, t.queue = e, e = e.dispatch = h0.bind(null, Ct, e), [t.memoizedState, e];
  }
  function Ki(e, t, r, i) {
    return e = { tag: e, create: t, destroy: r, deps: i, next: null }, t = Ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ct.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function tp() {
    return On().memoizedState;
  }
  function cs(e, t, r, i) {
    var a = tr();
    Ct.flags |= e, a.memoizedState = Ki(1 | t, r, void 0, i === void 0 ? null : i);
  }
  function fs(e, t, r, i) {
    var a = On();
    i = i === void 0 ? null : i;
    var c = void 0;
    if (jt !== null) {
      var m = jt.memoizedState;
      if (c = m.destroy, i !== null && hu(i, m.deps)) {
        a.memoizedState = Ki(t, r, c, i);
        return;
      }
    }
    Ct.flags |= e, a.memoizedState = Ki(1 | t, r, c, i);
  }
  function np(e, t) {
    return cs(8390656, 8, e, t);
  }
  function wu(e, t) {
    return fs(2048, 8, e, t);
  }
  function rp(e, t) {
    return fs(4, 2, e, t);
  }
  function op(e, t) {
    return fs(4, 4, e, t);
  }
  function ip(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function lp(e, t, r) {
    return r = r != null ? r.concat([e]) : null, fs(4, 4, ip.bind(null, t, e), r);
  }
  function xu() {
  }
  function sp(e, t) {
    var r = On();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && hu(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function ap(e, t) {
    var r = On();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && hu(t, i[1]) ? i[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function up(e, t, r) {
    return (vo & 21) === 0 ? (e.baseState && (e.baseState = !1, fn = !0), e.memoizedState = r) : (Fn(r, t) || (r = bf(), Ct.lanes |= r, yo |= r, e.baseState = !0), t);
  }
  function d0(e, t) {
    var r = rt;
    rt = r !== 0 && 4 > r ? r : 4, e(!0);
    var i = pu.transition;
    pu.transition = {};
    try {
      e(!1), t();
    } finally {
      rt = r, pu.transition = i;
    }
  }
  function cp() {
    return On().memoizedState;
  }
  function p0(e, t, r) {
    var i = Kr(e);
    if (r = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null }, fp(e)) dp(t, r);
    else if (r = bd(e, t, r, i), r !== null) {
      var a = on();
      Wn(r, e, i, a), pp(r, t, i);
    }
  }
  function h0(e, t, r) {
    var i = Kr(e), a = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (fp(e)) dp(t, a);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var m = t.lastRenderedState, S = c(m, r);
        if (a.hasEagerState = !0, a.eagerState = S, Fn(S, m)) {
          var R = t.interleaved;
          R === null ? (a.next = a, iu(t)) : (a.next = R.next, R.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      r = bd(e, t, a, i), r !== null && (a = on(), Wn(r, e, i, a), pp(r, t, i));
    }
  }
  function fp(e) {
    var t = e.alternate;
    return e === Ct || t !== null && t === Ct;
  }
  function dp(e, t) {
    $i = us = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function pp(e, t, r) {
    if ((r & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, xa(e, r);
    }
  }
  var ds = { readContext: Rn, useCallback: Gt, useContext: Gt, useEffect: Gt, useImperativeHandle: Gt, useInsertionEffect: Gt, useLayoutEffect: Gt, useMemo: Gt, useReducer: Gt, useRef: Gt, useState: Gt, useDebugValue: Gt, useDeferredValue: Gt, useTransition: Gt, useMutableSource: Gt, useSyncExternalStore: Gt, useId: Gt, unstable_isNewReconciler: !1 }, m0 = { readContext: Rn, useCallback: function(e, t) {
    return tr().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Rn, useEffect: np, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, cs(
      4194308,
      4,
      ip.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return cs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return cs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = tr();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var i = tr();
    return t = r !== void 0 ? r(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = p0.bind(null, Ct, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = tr();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ep, useDebugValue: xu, useDeferredValue: function(e) {
    return tr().memoizedState = e;
  }, useTransition: function() {
    var e = ep(!1), t = e[0];
    return e = d0.bind(null, e[1]), tr().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var i = Ct, a = tr();
    if (wt) {
      if (r === void 0) throw Error(l(407));
      r = r();
    } else {
      if (r = t(), Bt === null) throw Error(l(349));
      (vo & 30) !== 0 || Gd(i, t, r);
    }
    a.memoizedState = r;
    var c = { value: r, getSnapshot: t };
    return a.queue = c, np(Xd.bind(
      null,
      i,
      c,
      e
    ), [e]), i.flags |= 2048, Ki(9, qd.bind(null, i, c, r, t), void 0, null), r;
  }, useId: function() {
    var e = tr(), t = Bt.identifierPrefix;
    if (wt) {
      var r = Sr, i = xr;
      r = (i & ~(1 << 32 - jn(i) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Vi++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = f0++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, g0 = {
    readContext: Rn,
    useCallback: sp,
    useContext: Rn,
    useEffect: wu,
    useImperativeHandle: lp,
    useInsertionEffect: rp,
    useLayoutEffect: op,
    useMemo: ap,
    useReducer: vu,
    useRef: tp,
    useState: function() {
      return vu(Yi);
    },
    useDebugValue: xu,
    useDeferredValue: function(e) {
      var t = On();
      return up(t, jt.memoizedState, e);
    },
    useTransition: function() {
      var e = vu(Yi)[0], t = On().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Qd,
    useId: cp,
    unstable_isNewReconciler: !1
  }, v0 = { readContext: Rn, useCallback: sp, useContext: Rn, useEffect: wu, useImperativeHandle: lp, useInsertionEffect: rp, useLayoutEffect: op, useMemo: ap, useReducer: yu, useRef: tp, useState: function() {
    return yu(Yi);
  }, useDebugValue: xu, useDeferredValue: function(e) {
    var t = On();
    return jt === null ? t.memoizedState = e : up(t, jt.memoizedState, e);
  }, useTransition: function() {
    var e = yu(Yi)[0], t = On().memoizedState;
    return [e, t];
  }, useMutableSource: Kd, useSyncExternalStore: Qd, useId: cp, unstable_isNewReconciler: !1 };
  function qo(e, t) {
    try {
      var r = "", i = t;
      do
        r += ke(i), i = i.return;
      while (i);
      var a = r;
    } catch (c) {
      a = `
Error generating stack: ` + c.message + `
` + c.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Su(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ku(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var y0 = typeof WeakMap == "function" ? WeakMap : Map;
  function hp(e, t, r) {
    r = _r(-1, r), r.tag = 3, r.payload = { element: null };
    var i = t.value;
    return r.callback = function() {
      ws || (ws = !0, Fu = i), ku(e, t);
    }, r;
  }
  function mp(e, t, r) {
    r = _r(-1, r), r.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var a = t.value;
      r.payload = function() {
        return i(a);
      }, r.callback = function() {
        ku(e, t);
      };
    }
    var c = e.stateNode;
    return c !== null && typeof c.componentDidCatch == "function" && (r.callback = function() {
      ku(e, t), typeof i != "function" && (Vr === null ? Vr = /* @__PURE__ */ new Set([this]) : Vr.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), r;
  }
  function gp(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new y0();
      var a = /* @__PURE__ */ new Set();
      i.set(t, a);
    } else a = i.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(t, a));
    a.has(r) || (a.add(r), e = L0.bind(null, e, t, r), t.then(e, e));
  }
  function vp(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function yp(e, t, r, i, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = _r(-1, 1), t.tag = 2, Ur(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var w0 = $.ReactCurrentOwner, fn = !1;
  function rn(e, t, r, i) {
    t.child = e === null ? Vd(t, null, r, i) : Qo(t, e.child, r, i);
  }
  function wp(e, t, r, i, a) {
    r = r.render;
    var c = t.ref;
    return Ko(t, a), i = mu(e, t, r, i, c, a), r = gu(), e !== null && !fn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Cr(e, t, a)) : (wt && r && qa(t), t.flags |= 1, rn(e, t, i, a), t.child);
  }
  function xp(e, t, r, i, a) {
    if (e === null) {
      var c = r.type;
      return typeof c == "function" && !$u(c) && c.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = c, Sp(e, t, c, i, a)) : (e = Es(r.type, null, i, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, (e.lanes & a) === 0) {
      var m = c.memoizedProps;
      if (r = r.compare, r = r !== null ? r : zi, r(m, i) && e.ref === t.ref) return Cr(e, t, a);
    }
    return t.flags |= 1, e = Gr(c, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sp(e, t, r, i, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (zi(c, i) && e.ref === t.ref) if (fn = !1, t.pendingProps = i = c, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (fn = !0);
      else return t.lanes = e.lanes, Cr(e, t, a);
    }
    return _u(e, t, r, i, a);
  }
  function kp(e, t, r) {
    var i = t.pendingProps, a = i.children, c = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ft(Zo, xn), xn |= r;
    else {
      if ((r & 1073741824) === 0) return e = c !== null ? c.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ft(Zo, xn), xn |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = c !== null ? c.baseLanes : r, ft(Zo, xn), xn |= i;
    }
    else c !== null ? (i = c.baseLanes | r, t.memoizedState = null) : i = r, ft(Zo, xn), xn |= i;
    return rn(e, t, a, r), t.child;
  }
  function _p(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function _u(e, t, r, i, a) {
    var c = cn(r) ? fo : Qt.current;
    return c = Wo(t, c), Ko(t, a), r = mu(e, t, r, i, c, a), i = gu(), e !== null && !fn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Cr(e, t, a)) : (wt && i && qa(t), t.flags |= 1, rn(e, t, r, a), t.child);
  }
  function Cp(e, t, r, i, a) {
    if (cn(r)) {
      var c = !0;
      ql(t);
    } else c = !1;
    if (Ko(t, a), t.stateNode === null) hs(e, t), Bd(t, r, i), au(t, r, i, a), i = !0;
    else if (e === null) {
      var m = t.stateNode, S = t.memoizedProps;
      m.props = S;
      var R = m.context, W = r.contextType;
      typeof W == "object" && W !== null ? W = Rn(W) : (W = cn(r) ? fo : Qt.current, W = Wo(t, W));
      var Z = r.getDerivedStateFromProps, J = typeof Z == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      J || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== i || R !== W) && Wd(t, m, i, W), Wr = !1;
      var X = t.memoizedState;
      m.state = X, os(t, i, m, a), R = t.memoizedState, S !== i || X !== R || un.current || Wr ? (typeof Z == "function" && (su(t, r, Z, i), R = t.memoizedState), (S = Wr || Hd(t, r, S, i, X, R, W)) ? (J || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = R), m.props = i, m.state = R, m.context = W, i = S) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      m = t.stateNode, jd(e, t), S = t.memoizedProps, W = t.type === t.elementType ? S : Dn(t.type, S), m.props = W, J = t.pendingProps, X = m.context, R = r.contextType, typeof R == "object" && R !== null ? R = Rn(R) : (R = cn(r) ? fo : Qt.current, R = Wo(t, R));
      var ce = r.getDerivedStateFromProps;
      (Z = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== J || X !== R) && Wd(t, m, i, R), Wr = !1, X = t.memoizedState, m.state = X, os(t, i, m, a);
      var ve = t.memoizedState;
      S !== J || X !== ve || un.current || Wr ? (typeof ce == "function" && (su(t, r, ce, i), ve = t.memoizedState), (W = Wr || Hd(t, r, W, i, X, ve, R) || !1) ? (Z || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(i, ve, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(i, ve, R)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || S === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), m.props = i, m.state = ve, m.context = R, i = W) : (typeof m.componentDidUpdate != "function" || S === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Cu(e, t, r, i, c, a);
  }
  function Cu(e, t, r, i, a, c) {
    _p(e, t);
    var m = (t.flags & 128) !== 0;
    if (!i && !m) return a && Rd(t, r, !1), Cr(e, t, c);
    i = t.stateNode, w0.current = t;
    var S = m && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && m ? (t.child = Qo(t, e.child, null, c), t.child = Qo(t, null, S, c)) : rn(e, t, S, c), t.memoizedState = i.state, a && Rd(t, r, !0), t.child;
  }
  function Ep(e) {
    var t = e.stateNode;
    t.pendingContext ? Td(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Td(e, t.context, !1), uu(e, t.containerInfo);
  }
  function Tp(e, t, r, i, a) {
    return Vo(), eu(a), t.flags |= 256, rn(e, t, r, i), t.child;
  }
  var Eu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ip(e, t, r) {
    var i = t.pendingProps, a = _t.current, c = !1, m = (t.flags & 128) !== 0, S;
    if ((S = m) || (S = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), S ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ft(_t, a & 1), e === null)
      return Ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = i.children, e = i.fallback, c ? (i = t.mode, c = t.child, m = { mode: "hidden", children: m }, (i & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = m) : c = Ts(m, i, 0, null), e = ko(e, i, r, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Tu(r), t.memoizedState = Eu, e) : Iu(t, m));
    if (a = e.memoizedState, a !== null && (S = a.dehydrated, S !== null)) return x0(e, t, m, i, S, a, r);
    if (c) {
      c = i.fallback, m = t.mode, a = e.child, S = a.sibling;
      var R = { mode: "hidden", children: i.children };
      return (m & 1) === 0 && t.child !== a ? (i = t.child, i.childLanes = 0, i.pendingProps = R, t.deletions = null) : (i = Gr(a, R), i.subtreeFlags = a.subtreeFlags & 14680064), S !== null ? c = Gr(S, c) : (c = ko(c, m, r, null), c.flags |= 2), c.return = t, i.return = t, i.sibling = c, t.child = i, i = c, c = t.child, m = e.child.memoizedState, m = m === null ? Tu(r) : { baseLanes: m.baseLanes | r, cachePool: null, transitions: m.transitions }, c.memoizedState = m, c.childLanes = e.childLanes & ~r, t.memoizedState = Eu, i;
    }
    return c = e.child, e = c.sibling, i = Gr(c, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = r), i.return = t, i.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Iu(e, t) {
    return t = Ts({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ps(e, t, r, i) {
    return i !== null && eu(i), Qo(t, e.child, null, r), e = Iu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function x0(e, t, r, i, a, c, m) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, i = Su(Error(l(422))), ps(e, t, m, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = i.fallback, a = t.mode, i = Ts({ mode: "visible", children: i.children }, a, 0, null), c = ko(c, a, m, null), c.flags |= 2, i.return = t, c.return = t, i.sibling = c, t.child = i, (t.mode & 1) !== 0 && Qo(t, e.child, null, m), t.child.memoizedState = Tu(m), t.memoizedState = Eu, c);
    if ((t.mode & 1) === 0) return ps(e, t, m, null);
    if (a.data === "$!") {
      if (i = a.nextSibling && a.nextSibling.dataset, i) var S = i.dgst;
      return i = S, c = Error(l(419)), i = Su(c, i, void 0), ps(e, t, m, i);
    }
    if (S = (m & e.childLanes) !== 0, fn || S) {
      if (i = Bt, i !== null) {
        switch (m & -m) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (i.suspendedLanes | m)) !== 0 ? 0 : a, a !== 0 && a !== c.retryLane && (c.retryLane = a, kr(e, a), Wn(i, e, a, -1));
      }
      return Uu(), i = Su(Error(l(421))), ps(e, t, m, i);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = z0.bind(null, e), a._reactRetry = t, null) : (e = c.treeContext, wn = Mr(a.nextSibling), yn = t, wt = !0, Mn = null, e !== null && (Tn[In++] = xr, Tn[In++] = Sr, Tn[In++] = po, xr = e.id, Sr = e.overflow, po = t), t = Iu(t, i.children), t.flags |= 4096, t);
  }
  function Rp(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), ou(e.return, t, r);
  }
  function Ru(e, t, r, i, a) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: r, tailMode: a } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = r, c.tailMode = a);
  }
  function Op(e, t, r) {
    var i = t.pendingProps, a = i.revealOrder, c = i.tail;
    if (rn(e, t, i.children, r), i = _t.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rp(e, r, t);
        else if (e.tag === 19) Rp(e, r, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      i &= 1;
    }
    if (ft(_t, i), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (r = t.child, a = null; r !== null; ) e = r.alternate, e !== null && ss(e) === null && (a = r), r = r.sibling;
        r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), Ru(t, !1, a, r, c);
        break;
      case "backwards":
        for (r = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && ss(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = r, r = a, a = e;
        }
        Ru(t, !0, r, null, c);
        break;
      case "together":
        Ru(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function hs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Cr(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), yo |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = Gr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Gr(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function S0(e, t, r) {
    switch (t.tag) {
      case 3:
        Ep(t), Vo();
        break;
      case 5:
        Yd(t);
        break;
      case 1:
        cn(t.type) && ql(t);
        break;
      case 4:
        uu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, a = t.memoizedProps.value;
        ft(ts, i._currentValue), i._currentValue = a;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (ft(_t, _t.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Ip(e, t, r) : (ft(_t, _t.current & 1), e = Cr(e, t, r), e !== null ? e.sibling : null);
        ft(_t, _t.current & 1);
        break;
      case 19:
        if (i = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Op(e, t, r);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ft(_t, _t.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, kp(e, t, r);
    }
    return Cr(e, t, r);
  }
  var Ap, Ou, Pp, Lp;
  Ap = function(e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, Ou = function() {
  }, Pp = function(e, t, r, i) {
    var a = e.memoizedProps;
    if (a !== i) {
      e = t.stateNode, go(er.current);
      var c = null;
      switch (r) {
        case "input":
          a = Ue(e, a), i = Ue(e, i), c = [];
          break;
        case "select":
          a = k({}, a, { value: void 0 }), i = k({}, i, { value: void 0 }), c = [];
          break;
        case "textarea":
          a = kt(e, a), i = kt(e, i), c = [];
          break;
        default:
          typeof a.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Kl);
      }
      mr(r, i);
      var m;
      r = null;
      for (W in a) if (!i.hasOwnProperty(W) && a.hasOwnProperty(W) && a[W] != null) if (W === "style") {
        var S = a[W];
        for (m in S) S.hasOwnProperty(m) && (r || (r = {}), r[m] = "");
      } else W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (u.hasOwnProperty(W) ? c || (c = []) : (c = c || []).push(W, null));
      for (W in i) {
        var R = i[W];
        if (S = a != null ? a[W] : void 0, i.hasOwnProperty(W) && R !== S && (R != null || S != null)) if (W === "style") if (S) {
          for (m in S) !S.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (r || (r = {}), r[m] = "");
          for (m in R) R.hasOwnProperty(m) && S[m] !== R[m] && (r || (r = {}), r[m] = R[m]);
        } else r || (c || (c = []), c.push(
          W,
          r
        )), r = R;
        else W === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, S = S ? S.__html : void 0, R != null && S !== R && (c = c || []).push(W, R)) : W === "children" ? typeof R != "string" && typeof R != "number" || (c = c || []).push(W, "" + R) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (u.hasOwnProperty(W) ? (R != null && W === "onScroll" && ht("scroll", e), c || S === R || (c = [])) : (c = c || []).push(W, R));
      }
      r && (c = c || []).push("style", r);
      var W = c;
      (t.updateQueue = W) && (t.flags |= 4);
    }
  }, Lp = function(e, t, r, i) {
    r !== i && (t.flags |= 4);
  };
  function Qi(e, t) {
    if (!wt) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var i = null; r !== null; ) r.alternate !== null && (i = r), r = r.sibling;
        i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
  }
  function qt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, i = 0;
    if (t) for (var a = e.child; a !== null; ) r |= a.lanes | a.childLanes, i |= a.subtreeFlags & 14680064, i |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) r |= a.lanes | a.childLanes, i |= a.subtreeFlags, i |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= i, e.childLanes = r, t;
  }
  function k0(e, t, r) {
    var i = t.pendingProps;
    switch (Xa(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(t), null;
      case 1:
        return cn(t.type) && Gl(), qt(t), null;
      case 3:
        return i = t.stateNode, Go(), mt(un), mt(Qt), du(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (es(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mn !== null && (Hu(Mn), Mn = null))), Ou(e, t), qt(t), null;
      case 5:
        cu(t);
        var a = go(Ui.current);
        if (r = t.type, e !== null && t.stateNode != null) Pp(e, t, r, i, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166));
            return qt(t), null;
          }
          if (e = go(er.current), es(t)) {
            i = t.stateNode, r = t.type;
            var c = t.memoizedProps;
            switch (i[Jn] = t, i[Mi] = c, e = (t.mode & 1) !== 0, r) {
              case "dialog":
                ht("cancel", i), ht("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                ht("load", i);
                break;
              case "video":
              case "audio":
                for (a = 0; a < bi.length; a++) ht(bi[a], i);
                break;
              case "source":
                ht("error", i);
                break;
              case "img":
              case "image":
              case "link":
                ht(
                  "error",
                  i
                ), ht("load", i);
                break;
              case "details":
                ht("toggle", i);
                break;
              case "input":
                Re(i, c), ht("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!c.multiple }, ht("invalid", i);
                break;
              case "textarea":
                Nt(i, c), ht("invalid", i);
            }
            mr(r, c), a = null;
            for (var m in c) if (c.hasOwnProperty(m)) {
              var S = c[m];
              m === "children" ? typeof S == "string" ? i.textContent !== S && (c.suppressHydrationWarning !== !0 && Yl(i.textContent, S, e), a = ["children", S]) : typeof S == "number" && i.textContent !== "" + S && (c.suppressHydrationWarning !== !0 && Yl(
                i.textContent,
                S,
                e
              ), a = ["children", "" + S]) : u.hasOwnProperty(m) && S != null && m === "onScroll" && ht("scroll", i);
            }
            switch (r) {
              case "input":
                pe(i), Ne(i, c, !0);
                break;
              case "textarea":
                pe(i), it(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (i.onclick = Kl);
            }
            i = a, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            m = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = m.createElement(r, { is: i.is }) : (e = m.createElement(r), r === "select" && (m = e, i.multiple ? m.multiple = !0 : i.size && (m.size = i.size))) : e = m.createElementNS(e, r), e[Jn] = t, e[Mi] = i, Ap(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = Qn(r, i), r) {
                case "dialog":
                  ht("cancel", e), ht("close", e), a = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ht("load", e), a = i;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < bi.length; a++) ht(bi[a], e);
                  a = i;
                  break;
                case "source":
                  ht("error", e), a = i;
                  break;
                case "img":
                case "image":
                case "link":
                  ht(
                    "error",
                    e
                  ), ht("load", e), a = i;
                  break;
                case "details":
                  ht("toggle", e), a = i;
                  break;
                case "input":
                  Re(e, i), a = Ue(e, i), ht("invalid", e);
                  break;
                case "option":
                  a = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, a = k({}, i, { value: void 0 }), ht("invalid", e);
                  break;
                case "textarea":
                  Nt(e, i), a = kt(e, i), ht("invalid", e);
                  break;
                default:
                  a = i;
              }
              mr(r, a), S = a;
              for (c in S) if (S.hasOwnProperty(c)) {
                var R = S[c];
                c === "style" ? ut(e, R) : c === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && Kt(e, R)) : c === "children" ? typeof R == "string" ? (r !== "textarea" || R !== "") && sn(e, R) : typeof R == "number" && sn(e, "" + R) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (u.hasOwnProperty(c) ? R != null && c === "onScroll" && ht("scroll", e) : R != null && j(e, c, R, m));
              }
              switch (r) {
                case "input":
                  pe(e), Ne(e, i, !1);
                  break;
                case "textarea":
                  pe(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + b(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, c = i.value, c != null ? St(e, !!i.multiple, c, !1) : i.defaultValue != null && St(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Kl);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return qt(t), null;
      case 6:
        if (e && t.stateNode != null) Lp(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(l(166));
          if (r = go(Ui.current), go(er.current), es(t)) {
            if (i = t.stateNode, r = t.memoizedProps, i[Jn] = t, (c = i.nodeValue !== r) && (e = yn, e !== null)) switch (e.tag) {
              case 3:
                Yl(i.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yl(i.nodeValue, r, (e.mode & 1) !== 0);
            }
            c && (t.flags |= 4);
          } else i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i), i[Jn] = t, t.stateNode = i;
        }
        return qt(t), null;
      case 13:
        if (mt(_t), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (wt && wn !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Nd(), Vo(), t.flags |= 98560, c = !1;
          else if (c = es(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(l(317));
              c[Jn] = t;
            } else Vo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qt(t), c = !1;
          } else Mn !== null && (Hu(Mn), Mn = null), c = !0;
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (_t.current & 1) !== 0 ? Ft === 0 && (Ft = 3) : Uu())), t.updateQueue !== null && (t.flags |= 4), qt(t), null);
      case 4:
        return Go(), Ou(e, t), e === null && ji(t.stateNode.containerInfo), qt(t), null;
      case 10:
        return ru(t.type._context), qt(t), null;
      case 17:
        return cn(t.type) && Gl(), qt(t), null;
      case 19:
        if (mt(_t), c = t.memoizedState, c === null) return qt(t), null;
        if (i = (t.flags & 128) !== 0, m = c.rendering, m === null) if (i) Qi(c, !1);
        else {
          if (Ft !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = ss(e), m !== null) {
              for (t.flags |= 128, Qi(c, !1), i = m.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = r, r = t.child; r !== null; ) c = r, e = i, c.flags &= 14680066, m = c.alternate, m === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = m.childLanes, c.lanes = m.lanes, c.child = m.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = m.memoizedProps, c.memoizedState = m.memoizedState, c.updateQueue = m.updateQueue, c.type = m.type, e = m.dependencies, c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return ft(_t, _t.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          c.tail !== null && st() > Jo && (t.flags |= 128, i = !0, Qi(c, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = ss(m), e !== null) {
            if (t.flags |= 128, i = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Qi(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !wt) return qt(t), null;
          } else 2 * st() - c.renderingStartTime > Jo && r !== 1073741824 && (t.flags |= 128, i = !0, Qi(c, !1), t.lanes = 4194304);
          c.isBackwards ? (m.sibling = t.child, t.child = m) : (r = c.last, r !== null ? r.sibling = m : t.child = m, c.last = m);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = st(), t.sibling = null, r = _t.current, ft(_t, i ? r & 1 | 2 : r & 1), t) : (qt(t), null);
      case 22:
      case 23:
        return Wu(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && (t.mode & 1) !== 0 ? (xn & 1073741824) !== 0 && (qt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function _0(e, t) {
    switch (Xa(t), t.tag) {
      case 1:
        return cn(t.type) && Gl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Go(), mt(un), mt(Qt), du(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return cu(t), null;
      case 13:
        if (mt(_t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          Vo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return mt(_t), null;
      case 4:
        return Go(), null;
      case 10:
        return ru(t.type._context), null;
      case 22:
      case 23:
        return Wu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ms = !1, Xt = !1, C0 = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function Xo(e, t) {
    var r = e.ref;
    if (r !== null) if (typeof r == "function") try {
      r(null);
    } catch (i) {
      Rt(e, t, i);
    }
    else r.current = null;
  }
  function Au(e, t, r) {
    try {
      r();
    } catch (i) {
      Rt(e, t, i);
    }
  }
  var zp = !1;
  function E0(e, t) {
    if (Wa = bl, e = cd(), Na(e)) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var i = r.getSelection && r.getSelection();
        if (i && i.rangeCount !== 0) {
          r = i.anchorNode;
          var a = i.anchorOffset, c = i.focusNode;
          i = i.focusOffset;
          try {
            r.nodeType, c.nodeType;
          } catch {
            r = null;
            break e;
          }
          var m = 0, S = -1, R = -1, W = 0, Z = 0, J = e, X = null;
          t: for (; ; ) {
            for (var ce; J !== r || a !== 0 && J.nodeType !== 3 || (S = m + a), J !== c || i !== 0 && J.nodeType !== 3 || (R = m + i), J.nodeType === 3 && (m += J.nodeValue.length), (ce = J.firstChild) !== null; )
              X = J, J = ce;
            for (; ; ) {
              if (J === e) break t;
              if (X === r && ++W === a && (S = m), X === c && ++Z === i && (R = m), (ce = J.nextSibling) !== null) break;
              J = X, X = J.parentNode;
            }
            J = ce;
          }
          r = S === -1 || R === -1 ? null : { start: S, end: R };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ua = { focusedElem: e, selectionRange: r }, bl = !1, he = t; he !== null; ) if (t = he, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, he = e;
    else for (; he !== null; ) {
      t = he;
      try {
        var ve = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ve !== null) {
              var ye = ve.memoizedProps, Pt = ve.memoizedState, N = t.stateNode, P = N.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : Dn(t.type, ye), Pt);
              N.__reactInternalSnapshotBeforeUpdate = P;
            }
            break;
          case 3:
            var M = t.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (le) {
        Rt(t, t.return, le);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, he = e;
        break;
      }
      he = t.return;
    }
    return ve = zp, zp = !1, ve;
  }
  function Gi(e, t, r) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var a = i = i.next;
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          a.destroy = void 0, c !== void 0 && Au(t, r, c);
        }
        a = a.next;
      } while (a !== i);
    }
  }
  function gs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var r = t = t.next;
      do {
        if ((r.tag & e) === e) {
          var i = r.create;
          r.destroy = i();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Pu(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Np(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Np(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Jn], delete t[Mi], delete t[Ka], delete t[s0], delete t[a0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function bp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function jp(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || bp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Lu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Kl));
    else if (i !== 4 && (e = e.child, e !== null)) for (Lu(e, t, r), e = e.sibling; e !== null; ) Lu(e, t, r), e = e.sibling;
  }
  function zu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (zu(e, t, r), e = e.sibling; e !== null; ) zu(e, t, r), e = e.sibling;
  }
  var Vt = null, Hn = !1;
  function $r(e, t, r) {
    for (r = r.child; r !== null; ) Fp(e, t, r), r = r.sibling;
  }
  function Fp(e, t, r) {
    if (Zn && typeof Zn.onCommitFiberUnmount == "function") try {
      Zn.onCommitFiberUnmount(Ol, r);
    } catch {
    }
    switch (r.tag) {
      case 5:
        Xt || Xo(r, t);
      case 6:
        var i = Vt, a = Hn;
        Vt = null, $r(e, t, r), Vt = i, Hn = a, Vt !== null && (Hn ? (e = Vt, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Vt.removeChild(r.stateNode));
        break;
      case 18:
        Vt !== null && (Hn ? (e = Vt, r = r.stateNode, e.nodeType === 8 ? Ya(e.parentNode, r) : e.nodeType === 1 && Ya(e, r), Ii(e)) : Ya(Vt, r.stateNode));
        break;
      case 4:
        i = Vt, a = Hn, Vt = r.stateNode.containerInfo, Hn = !0, $r(e, t, r), Vt = i, Hn = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xt && (i = r.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          a = i = i.next;
          do {
            var c = a, m = c.destroy;
            c = c.tag, m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && Au(r, t, m), a = a.next;
          } while (a !== i);
        }
        $r(e, t, r);
        break;
      case 1:
        if (!Xt && (Xo(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = r.memoizedProps, i.state = r.memoizedState, i.componentWillUnmount();
        } catch (S) {
          Rt(r, t, S);
        }
        $r(e, t, r);
        break;
      case 21:
        $r(e, t, r);
        break;
      case 22:
        r.mode & 1 ? (Xt = (i = Xt) || r.memoizedState !== null, $r(e, t, r), Xt = i) : $r(e, t, r);
        break;
      default:
        $r(e, t, r);
    }
  }
  function Mp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new C0()), t.forEach(function(i) {
        var a = N0.bind(null, e, i);
        r.has(i) || (r.add(i), i.then(a, a));
      });
    }
  }
  function Bn(e, t) {
    var r = t.deletions;
    if (r !== null) for (var i = 0; i < r.length; i++) {
      var a = r[i];
      try {
        var c = e, m = t, S = m;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              Vt = S.stateNode, Hn = !1;
              break e;
            case 3:
              Vt = S.stateNode.containerInfo, Hn = !0;
              break e;
            case 4:
              Vt = S.stateNode.containerInfo, Hn = !0;
              break e;
          }
          S = S.return;
        }
        if (Vt === null) throw Error(l(160));
        Fp(c, m, a), Vt = null, Hn = !1;
        var R = a.alternate;
        R !== null && (R.return = null), a.return = null;
      } catch (W) {
        Rt(a, t, W);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Dp(t, e), t = t.sibling;
  }
  function Dp(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Bn(t, e), nr(e), i & 4) {
          try {
            Gi(3, e, e.return), gs(3, e);
          } catch (ye) {
            Rt(e, e.return, ye);
          }
          try {
            Gi(5, e, e.return);
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        break;
      case 1:
        Bn(t, e), nr(e), i & 512 && r !== null && Xo(r, r.return);
        break;
      case 5:
        if (Bn(t, e), nr(e), i & 512 && r !== null && Xo(r, r.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            sn(a, "");
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        if (i & 4 && (a = e.stateNode, a != null)) {
          var c = e.memoizedProps, m = r !== null ? r.memoizedProps : c, S = e.type, R = e.updateQueue;
          if (e.updateQueue = null, R !== null) try {
            S === "input" && c.type === "radio" && c.name != null && ze(a, c), Qn(S, m);
            var W = Qn(S, c);
            for (m = 0; m < R.length; m += 2) {
              var Z = R[m], J = R[m + 1];
              Z === "style" ? ut(a, J) : Z === "dangerouslySetInnerHTML" ? Kt(a, J) : Z === "children" ? sn(a, J) : j(a, Z, J, W);
            }
            switch (S) {
              case "input":
                Ve(a, c);
                break;
              case "textarea":
                tt(a, c);
                break;
              case "select":
                var X = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!c.multiple;
                var ce = c.value;
                ce != null ? St(a, !!c.multiple, ce, !1) : X !== !!c.multiple && (c.defaultValue != null ? St(
                  a,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                ) : St(a, !!c.multiple, c.multiple ? [] : "", !1));
            }
            a[Mi] = c;
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (Bn(t, e), nr(e), i & 4) {
          if (e.stateNode === null) throw Error(l(162));
          a = e.stateNode, c = e.memoizedProps;
          try {
            a.nodeValue = c;
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (Bn(t, e), nr(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Ii(t.containerInfo);
        } catch (ye) {
          Rt(e, e.return, ye);
        }
        break;
      case 4:
        Bn(t, e), nr(e);
        break;
      case 13:
        Bn(t, e), nr(e), a = e.child, a.flags & 8192 && (c = a.memoizedState !== null, a.stateNode.isHidden = c, !c || a.alternate !== null && a.alternate.memoizedState !== null || (ju = st())), i & 4 && Mp(e);
        break;
      case 22:
        if (Z = r !== null && r.memoizedState !== null, e.mode & 1 ? (Xt = (W = Xt) || Z, Bn(t, e), Xt = W) : Bn(t, e), nr(e), i & 8192) {
          if (W = e.memoizedState !== null, (e.stateNode.isHidden = W) && !Z && (e.mode & 1) !== 0) for (he = e, Z = e.child; Z !== null; ) {
            for (J = he = Z; he !== null; ) {
              switch (X = he, ce = X.child, X.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gi(4, X, X.return);
                  break;
                case 1:
                  Xo(X, X.return);
                  var ve = X.stateNode;
                  if (typeof ve.componentWillUnmount == "function") {
                    i = X, r = X.return;
                    try {
                      t = i, ve.props = t.memoizedProps, ve.state = t.memoizedState, ve.componentWillUnmount();
                    } catch (ye) {
                      Rt(i, r, ye);
                    }
                  }
                  break;
                case 5:
                  Xo(X, X.return);
                  break;
                case 22:
                  if (X.memoizedState !== null) {
                    Wp(J);
                    continue;
                  }
              }
              ce !== null ? (ce.return = X, he = ce) : Wp(J);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, J = e; ; ) {
            if (J.tag === 5) {
              if (Z === null) {
                Z = J;
                try {
                  a = J.stateNode, W ? (c = a.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (S = J.stateNode, R = J.memoizedProps.style, m = R != null && R.hasOwnProperty("display") ? R.display : null, S.style.display = Lt("display", m));
                } catch (ye) {
                  Rt(e, e.return, ye);
                }
              }
            } else if (J.tag === 6) {
              if (Z === null) try {
                J.stateNode.nodeValue = W ? "" : J.memoizedProps;
              } catch (ye) {
                Rt(e, e.return, ye);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === e) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === e) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === e) break e;
              Z === J && (Z = null), J = J.return;
            }
            Z === J && (Z = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        Bn(t, e), nr(e), i & 4 && Mp(e);
        break;
      case 21:
        break;
      default:
        Bn(
          t,
          e
        ), nr(e);
    }
  }
  function nr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (bp(r)) {
              var i = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (i.tag) {
          case 5:
            var a = i.stateNode;
            i.flags & 32 && (sn(a, ""), i.flags &= -33);
            var c = jp(e);
            zu(e, c, a);
            break;
          case 3:
          case 4:
            var m = i.stateNode.containerInfo, S = jp(e);
            Lu(e, S, m);
            break;
          default:
            throw Error(l(161));
        }
      } catch (R) {
        Rt(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function T0(e, t, r) {
    he = e, Hp(e);
  }
  function Hp(e, t, r) {
    for (var i = (e.mode & 1) !== 0; he !== null; ) {
      var a = he, c = a.child;
      if (a.tag === 22 && i) {
        var m = a.memoizedState !== null || ms;
        if (!m) {
          var S = a.alternate, R = S !== null && S.memoizedState !== null || Xt;
          S = ms;
          var W = Xt;
          if (ms = m, (Xt = R) && !W) for (he = a; he !== null; ) m = he, R = m.child, m.tag === 22 && m.memoizedState !== null ? Up(a) : R !== null ? (R.return = m, he = R) : Up(a);
          for (; c !== null; ) he = c, Hp(c), c = c.sibling;
          he = a, ms = S, Xt = W;
        }
        Bp(e);
      } else (a.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = a, he = c) : Bp(e);
    }
  }
  function Bp(e) {
    for (; he !== null; ) {
      var t = he;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xt || gs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Xt) if (r === null) i.componentDidMount();
              else {
                var a = t.elementType === t.type ? r.memoizedProps : Dn(t.type, r.memoizedProps);
                i.componentDidUpdate(a, r.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var c = t.updateQueue;
              c !== null && Md(t, c, i);
              break;
            case 3:
              var m = t.updateQueue;
              if (m !== null) {
                if (r = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    r = t.child.stateNode;
                    break;
                  case 1:
                    r = t.child.stateNode;
                }
                Md(t, m, r);
              }
              break;
            case 5:
              var S = t.stateNode;
              if (r === null && t.flags & 4) {
                r = S;
                var R = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && r.focus();
                    break;
                  case "img":
                    R.src && (r.src = R.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var W = t.alternate;
                if (W !== null) {
                  var Z = W.memoizedState;
                  if (Z !== null) {
                    var J = Z.dehydrated;
                    J !== null && Ii(J);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(l(163));
          }
          Xt || t.flags & 512 && Pu(t);
        } catch (X) {
          Rt(t, t.return, X);
        }
      }
      if (t === e) {
        he = null;
        break;
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, he = r;
        break;
      }
      he = t.return;
    }
  }
  function Wp(e) {
    for (; he !== null; ) {
      var t = he;
      if (t === e) {
        he = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, he = r;
        break;
      }
      he = t.return;
    }
  }
  function Up(e) {
    for (; he !== null; ) {
      var t = he;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              gs(4, t);
            } catch (R) {
              Rt(t, r, R);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var a = t.return;
              try {
                i.componentDidMount();
              } catch (R) {
                Rt(t, a, R);
              }
            }
            var c = t.return;
            try {
              Pu(t);
            } catch (R) {
              Rt(t, c, R);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Pu(t);
            } catch (R) {
              Rt(t, m, R);
            }
        }
      } catch (R) {
        Rt(t, t.return, R);
      }
      if (t === e) {
        he = null;
        break;
      }
      var S = t.sibling;
      if (S !== null) {
        S.return = t.return, he = S;
        break;
      }
      he = t.return;
    }
  }
  var I0 = Math.ceil, vs = $.ReactCurrentDispatcher, Nu = $.ReactCurrentOwner, An = $.ReactCurrentBatchConfig, Ze = 0, Bt = null, zt = null, Yt = 0, xn = 0, Zo = Dr(0), Ft = 0, qi = null, yo = 0, ys = 0, bu = 0, Xi = null, dn = null, ju = 0, Jo = 1 / 0, Er = null, ws = !1, Fu = null, Vr = null, xs = !1, Yr = null, Ss = 0, Zi = 0, Mu = null, ks = -1, _s = 0;
  function on() {
    return (Ze & 6) !== 0 ? st() : ks !== -1 ? ks : ks = st();
  }
  function Kr(e) {
    return (e.mode & 1) === 0 ? 1 : (Ze & 2) !== 0 && Yt !== 0 ? Yt & -Yt : c0.transition !== null ? (_s === 0 && (_s = bf()), _s) : (e = rt, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $f(e.type)), e);
  }
  function Wn(e, t, r, i) {
    if (50 < Zi) throw Zi = 0, Mu = null, Error(l(185));
    ki(e, r, i), ((Ze & 2) === 0 || e !== Bt) && (e === Bt && ((Ze & 2) === 0 && (ys |= r), Ft === 4 && Qr(e, Yt)), pn(e, i), r === 1 && Ze === 0 && (t.mode & 1) === 0 && (Jo = st() + 500, Xl && Br()));
  }
  function pn(e, t) {
    var r = e.callbackNode;
    cv(e, t);
    var i = Ll(e, e === Bt ? Yt : 0);
    if (i === 0) r !== null && Je(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (r != null && Je(r), t === 1) e.tag === 0 ? u0(Vp.bind(null, e)) : Od(Vp.bind(null, e)), i0(function() {
        (Ze & 6) === 0 && Br();
      }), r = null;
      else {
        switch (jf(i)) {
          case 1:
            r = uo;
            break;
          case 4:
            r = zf;
            break;
          case 16:
            r = Rl;
            break;
          case 536870912:
            r = Nf;
            break;
          default:
            r = Rl;
        }
        r = Jp(r, $p.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function $p(e, t) {
    if (ks = -1, _s = 0, (Ze & 6) !== 0) throw Error(l(327));
    var r = e.callbackNode;
    if (ei() && e.callbackNode !== r) return null;
    var i = Ll(e, e === Bt ? Yt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Cs(e, i);
    else {
      t = i;
      var a = Ze;
      Ze |= 2;
      var c = Kp();
      (Bt !== e || Yt !== t) && (Er = null, Jo = st() + 500, xo(e, t));
      do
        try {
          A0();
          break;
        } catch (S) {
          Yp(e, S);
        }
      while (!0);
      nu(), vs.current = c, Ze = a, zt !== null ? t = 0 : (Bt = null, Yt = 0, t = Ft);
    }
    if (t !== 0) {
      if (t === 2 && (a = ya(e), a !== 0 && (i = a, t = Du(e, a))), t === 1) throw r = qi, xo(e, 0), Qr(e, i), pn(e, st()), r;
      if (t === 6) Qr(e, i);
      else {
        if (a = e.current.alternate, (i & 30) === 0 && !R0(a) && (t = Cs(e, i), t === 2 && (c = ya(e), c !== 0 && (i = c, t = Du(e, c))), t === 1)) throw r = qi, xo(e, 0), Qr(e, i), pn(e, st()), r;
        switch (e.finishedWork = a, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            So(e, dn, Er);
            break;
          case 3:
            if (Qr(e, i), (i & 130023424) === i && (t = ju + 500 - st(), 10 < t)) {
              if (Ll(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & i) !== i) {
                on(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Va(So.bind(null, e, dn, Er), t);
              break;
            }
            So(e, dn, Er);
            break;
          case 4:
            if (Qr(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, a = -1; 0 < i; ) {
              var m = 31 - jn(i);
              c = 1 << m, m = t[m], m > a && (a = m), i &= ~c;
            }
            if (i = a, i = st() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * I0(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = Va(So.bind(null, e, dn, Er), i);
              break;
            }
            So(e, dn, Er);
            break;
          case 5:
            So(e, dn, Er);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return pn(e, st()), e.callbackNode === r ? $p.bind(null, e) : null;
  }
  function Du(e, t) {
    var r = Xi;
    return e.current.memoizedState.isDehydrated && (xo(e, t).flags |= 256), e = Cs(e, t), e !== 2 && (t = dn, dn = r, t !== null && Hu(t)), e;
  }
  function Hu(e) {
    dn === null ? dn = e : dn.push.apply(dn, e);
  }
  function R0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && (r = r.stores, r !== null)) for (var i = 0; i < r.length; i++) {
          var a = r[i], c = a.getSnapshot;
          a = a.value;
          try {
            if (!Fn(c(), a)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Qr(e, t) {
    for (t &= ~bu, t &= ~ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - jn(t), i = 1 << r;
      e[r] = -1, t &= ~i;
    }
  }
  function Vp(e) {
    if ((Ze & 6) !== 0) throw Error(l(327));
    ei();
    var t = Ll(e, 0);
    if ((t & 1) === 0) return pn(e, st()), null;
    var r = Cs(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = ya(e);
      i !== 0 && (t = i, r = Du(e, i));
    }
    if (r === 1) throw r = qi, xo(e, 0), Qr(e, t), pn(e, st()), r;
    if (r === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, So(e, dn, Er), pn(e, st()), null;
  }
  function Bu(e, t) {
    var r = Ze;
    Ze |= 1;
    try {
      return e(t);
    } finally {
      Ze = r, Ze === 0 && (Jo = st() + 500, Xl && Br());
    }
  }
  function wo(e) {
    Yr !== null && Yr.tag === 0 && (Ze & 6) === 0 && ei();
    var t = Ze;
    Ze |= 1;
    var r = An.transition, i = rt;
    try {
      if (An.transition = null, rt = 1, e) return e();
    } finally {
      rt = i, An.transition = r, Ze = t, (Ze & 6) === 0 && Br();
    }
  }
  function Wu() {
    xn = Zo.current, mt(Zo);
  }
  function xo(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, o0(r)), zt !== null) for (r = zt.return; r !== null; ) {
      var i = r;
      switch (Xa(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Gl();
          break;
        case 3:
          Go(), mt(un), mt(Qt), du();
          break;
        case 5:
          cu(i);
          break;
        case 4:
          Go();
          break;
        case 13:
          mt(_t);
          break;
        case 19:
          mt(_t);
          break;
        case 10:
          ru(i.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      r = r.return;
    }
    if (Bt = e, zt = e = Gr(e.current, null), Yt = xn = t, Ft = 0, qi = null, bu = ys = yo = 0, dn = Xi = null, mo !== null) {
      for (t = 0; t < mo.length; t++) if (r = mo[t], i = r.interleaved, i !== null) {
        r.interleaved = null;
        var a = i.next, c = r.pending;
        if (c !== null) {
          var m = c.next;
          c.next = a, i.next = m;
        }
        r.pending = i;
      }
      mo = null;
    }
    return e;
  }
  function Yp(e, t) {
    do {
      var r = zt;
      try {
        if (nu(), as.current = ds, us) {
          for (var i = Ct.memoizedState; i !== null; ) {
            var a = i.queue;
            a !== null && (a.pending = null), i = i.next;
          }
          us = !1;
        }
        if (vo = 0, Ht = jt = Ct = null, $i = !1, Vi = 0, Nu.current = null, r === null || r.return === null) {
          Ft = 1, qi = t, zt = null;
          break;
        }
        e: {
          var c = e, m = r.return, S = r, R = t;
          if (t = Yt, S.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var W = R, Z = S, J = Z.tag;
            if ((Z.mode & 1) === 0 && (J === 0 || J === 11 || J === 15)) {
              var X = Z.alternate;
              X ? (Z.updateQueue = X.updateQueue, Z.memoizedState = X.memoizedState, Z.lanes = X.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var ce = vp(m);
            if (ce !== null) {
              ce.flags &= -257, yp(ce, m, S, c, t), ce.mode & 1 && gp(c, W, t), t = ce, R = W;
              var ve = t.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(R), t.updateQueue = ye;
              } else ve.add(R);
              break e;
            } else {
              if ((t & 1) === 0) {
                gp(c, W, t), Uu();
                break e;
              }
              R = Error(l(426));
            }
          } else if (wt && S.mode & 1) {
            var Pt = vp(m);
            if (Pt !== null) {
              (Pt.flags & 65536) === 0 && (Pt.flags |= 256), yp(Pt, m, S, c, t), eu(qo(R, S));
              break e;
            }
          }
          c = R = qo(R, S), Ft !== 4 && (Ft = 2), Xi === null ? Xi = [c] : Xi.push(c), c = m;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, t &= -t, c.lanes |= t;
                var N = hp(c, R, t);
                Fd(c, N);
                break e;
              case 1:
                S = R;
                var P = c.type, M = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Vr === null || !Vr.has(M)))) {
                  c.flags |= 65536, t &= -t, c.lanes |= t;
                  var le = mp(c, S, t);
                  Fd(c, le);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Gp(r);
      } catch (Se) {
        t = Se, zt === r && r !== null && (zt = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Kp() {
    var e = vs.current;
    return vs.current = ds, e === null ? ds : e;
  }
  function Uu() {
    (Ft === 0 || Ft === 3 || Ft === 2) && (Ft = 4), Bt === null || (yo & 268435455) === 0 && (ys & 268435455) === 0 || Qr(Bt, Yt);
  }
  function Cs(e, t) {
    var r = Ze;
    Ze |= 2;
    var i = Kp();
    (Bt !== e || Yt !== t) && (Er = null, xo(e, t));
    do
      try {
        O0();
        break;
      } catch (a) {
        Yp(e, a);
      }
    while (!0);
    if (nu(), Ze = r, vs.current = i, zt !== null) throw Error(l(261));
    return Bt = null, Yt = 0, Ft;
  }
  function O0() {
    for (; zt !== null; ) Qp(zt);
  }
  function A0() {
    for (; zt !== null && !bn(); ) Qp(zt);
  }
  function Qp(e) {
    var t = Zp(e.alternate, e, xn);
    e.memoizedProps = e.pendingProps, t === null ? Gp(e) : zt = t, Nu.current = null;
  }
  function Gp(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (r = k0(r, t, xn), r !== null) {
          zt = r;
          return;
        }
      } else {
        if (r = _0(r, t), r !== null) {
          r.flags &= 32767, zt = r;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ft = 6, zt = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        zt = t;
        return;
      }
      zt = t = e;
    } while (t !== null);
    Ft === 0 && (Ft = 5);
  }
  function So(e, t, r) {
    var i = rt, a = An.transition;
    try {
      An.transition = null, rt = 1, P0(e, t, r, i);
    } finally {
      An.transition = a, rt = i;
    }
    return null;
  }
  function P0(e, t, r, i) {
    do
      ei();
    while (Yr !== null);
    if ((Ze & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var c = r.lanes | r.childLanes;
    if (fv(e, c), e === Bt && (zt = Bt = null, Yt = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || xs || (xs = !0, Jp(Rl, function() {
      return ei(), null;
    })), c = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || c) {
      c = An.transition, An.transition = null;
      var m = rt;
      rt = 1;
      var S = Ze;
      Ze |= 4, Nu.current = null, E0(e, r), Dp(r, e), Xv(Ua), bl = !!Wa, Ua = Wa = null, e.current = r, T0(r), xi(), Ze = S, rt = m, An.transition = c;
    } else e.current = r;
    if (xs && (xs = !1, Yr = e, Ss = a), c = e.pendingLanes, c === 0 && (Vr = null), iv(r.stateNode), pn(e, st()), t !== null) for (i = e.onRecoverableError, r = 0; r < t.length; r++) a = t[r], i(a.value, { componentStack: a.stack, digest: a.digest });
    if (ws) throw ws = !1, e = Fu, Fu = null, e;
    return (Ss & 1) !== 0 && e.tag !== 0 && ei(), c = e.pendingLanes, (c & 1) !== 0 ? e === Mu ? Zi++ : (Zi = 0, Mu = e) : Zi = 0, Br(), null;
  }
  function ei() {
    if (Yr !== null) {
      var e = jf(Ss), t = An.transition, r = rt;
      try {
        if (An.transition = null, rt = 16 > e ? 16 : e, Yr === null) var i = !1;
        else {
          if (e = Yr, Yr = null, Ss = 0, (Ze & 6) !== 0) throw Error(l(331));
          var a = Ze;
          for (Ze |= 4, he = e.current; he !== null; ) {
            var c = he, m = c.child;
            if ((he.flags & 16) !== 0) {
              var S = c.deletions;
              if (S !== null) {
                for (var R = 0; R < S.length; R++) {
                  var W = S[R];
                  for (he = W; he !== null; ) {
                    var Z = he;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gi(8, Z, c);
                    }
                    var J = Z.child;
                    if (J !== null) J.return = Z, he = J;
                    else for (; he !== null; ) {
                      Z = he;
                      var X = Z.sibling, ce = Z.return;
                      if (Np(Z), Z === W) {
                        he = null;
                        break;
                      }
                      if (X !== null) {
                        X.return = ce, he = X;
                        break;
                      }
                      he = ce;
                    }
                  }
                }
                var ve = c.alternate;
                if (ve !== null) {
                  var ye = ve.child;
                  if (ye !== null) {
                    ve.child = null;
                    do {
                      var Pt = ye.sibling;
                      ye.sibling = null, ye = Pt;
                    } while (ye !== null);
                  }
                }
                he = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && m !== null) m.return = c, he = m;
            else e: for (; he !== null; ) {
              if (c = he, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Gi(9, c, c.return);
              }
              var N = c.sibling;
              if (N !== null) {
                N.return = c.return, he = N;
                break e;
              }
              he = c.return;
            }
          }
          var P = e.current;
          for (he = P; he !== null; ) {
            m = he;
            var M = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && M !== null) M.return = m, he = M;
            else e: for (m = P; he !== null; ) {
              if (S = he, (S.flags & 2048) !== 0) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gs(9, S);
                }
              } catch (Se) {
                Rt(S, S.return, Se);
              }
              if (S === m) {
                he = null;
                break e;
              }
              var le = S.sibling;
              if (le !== null) {
                le.return = S.return, he = le;
                break e;
              }
              he = S.return;
            }
          }
          if (Ze = a, Br(), Zn && typeof Zn.onPostCommitFiberRoot == "function") try {
            Zn.onPostCommitFiberRoot(Ol, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        rt = r, An.transition = t;
      }
    }
    return !1;
  }
  function qp(e, t, r) {
    t = qo(r, t), t = hp(e, t, 1), e = Ur(e, t, 1), t = on(), e !== null && (ki(e, 1, t), pn(e, t));
  }
  function Rt(e, t, r) {
    if (e.tag === 3) qp(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        qp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Vr === null || !Vr.has(i))) {
          e = qo(r, e), e = mp(t, e, 1), t = Ur(t, e, 1), e = on(), t !== null && (ki(t, 1, e), pn(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function L0(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = on(), e.pingedLanes |= e.suspendedLanes & r, Bt === e && (Yt & r) === r && (Ft === 4 || Ft === 3 && (Yt & 130023424) === Yt && 500 > st() - ju ? xo(e, 0) : bu |= r), pn(e, t);
  }
  function Xp(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Pl, Pl <<= 1, (Pl & 130023424) === 0 && (Pl = 4194304)));
    var r = on();
    e = kr(e, t), e !== null && (ki(e, t, r), pn(e, r));
  }
  function z0(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), Xp(e, r);
  }
  function N0(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    i !== null && i.delete(t), Xp(e, r);
  }
  var Zp;
  Zp = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || un.current) fn = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return fn = !1, S0(e, t, r);
      fn = (e.flags & 131072) !== 0;
    }
    else fn = !1, wt && (t.flags & 1048576) !== 0 && Ad(t, Jl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        hs(e, t), e = t.pendingProps;
        var a = Wo(t, Qt.current);
        Ko(t, r), a = mu(null, t, i, e, a, r);
        var c = gu();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, cn(i) ? (c = !0, ql(t)) : c = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, lu(t), a.updater = is, t.stateNode = a, a._reactInternals = t, au(t, i, e, r), t = Cu(null, t, i, !0, c, r)) : (t.tag = 0, wt && c && qa(t), rn(null, t, a, r), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (hs(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = j0(i), e = Dn(i, e), a) {
            case 0:
              t = _u(null, t, i, e, r);
              break e;
            case 1:
              t = Cp(null, t, i, e, r);
              break e;
            case 11:
              t = wp(null, t, i, e, r);
              break e;
            case 14:
              t = xp(null, t, i, Dn(i.type, e), r);
              break e;
          }
          throw Error(l(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Dn(i, a), _u(e, t, i, a, r);
      case 1:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Dn(i, a), Cp(e, t, i, a, r);
      case 3:
        e: {
          if (Ep(t), e === null) throw Error(l(387));
          i = t.pendingProps, c = t.memoizedState, a = c.element, jd(e, t), os(t, i, null, r);
          var m = t.memoizedState;
          if (i = m.element, c.isDehydrated) if (c = { element: i, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            a = qo(Error(l(423)), t), t = Tp(e, t, i, r, a);
            break e;
          } else if (i !== a) {
            a = qo(Error(l(424)), t), t = Tp(e, t, i, r, a);
            break e;
          } else for (wn = Mr(t.stateNode.containerInfo.firstChild), yn = t, wt = !0, Mn = null, r = Vd(t, null, i, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (Vo(), i === a) {
              t = Cr(e, t, r);
              break e;
            }
            rn(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Yd(t), e === null && Ja(t), i = t.type, a = t.pendingProps, c = e !== null ? e.memoizedProps : null, m = a.children, $a(i, a) ? m = null : c !== null && $a(i, c) && (t.flags |= 32), _p(e, t), rn(e, t, m, r), t.child;
      case 6:
        return e === null && Ja(t), null;
      case 13:
        return Ip(e, t, r);
      case 4:
        return uu(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Qo(t, null, i, r) : rn(e, t, i, r), t.child;
      case 11:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Dn(i, a), wp(e, t, i, a, r);
      case 7:
        return rn(e, t, t.pendingProps, r), t.child;
      case 8:
        return rn(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return rn(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (i = t.type._context, a = t.pendingProps, c = t.memoizedProps, m = a.value, ft(ts, i._currentValue), i._currentValue = m, c !== null) if (Fn(c.value, m)) {
            if (c.children === a.children && !un.current) {
              t = Cr(e, t, r);
              break e;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var S = c.dependencies;
            if (S !== null) {
              m = c.child;
              for (var R = S.firstContext; R !== null; ) {
                if (R.context === i) {
                  if (c.tag === 1) {
                    R = _r(-1, r & -r), R.tag = 2;
                    var W = c.updateQueue;
                    if (W !== null) {
                      W = W.shared;
                      var Z = W.pending;
                      Z === null ? R.next = R : (R.next = Z.next, Z.next = R), W.pending = R;
                    }
                  }
                  c.lanes |= r, R = c.alternate, R !== null && (R.lanes |= r), ou(
                    c.return,
                    r,
                    t
                  ), S.lanes |= r;
                  break;
                }
                R = R.next;
              }
            } else if (c.tag === 10) m = c.type === t.type ? null : c.child;
            else if (c.tag === 18) {
              if (m = c.return, m === null) throw Error(l(341));
              m.lanes |= r, S = m.alternate, S !== null && (S.lanes |= r), ou(m, r, t), m = c.sibling;
            } else m = c.child;
            if (m !== null) m.return = c;
            else for (m = c; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (c = m.sibling, c !== null) {
                c.return = m.return, m = c;
                break;
              }
              m = m.return;
            }
            c = m;
          }
          rn(e, t, a.children, r), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, i = t.pendingProps.children, Ko(t, r), a = Rn(a), i = i(a), t.flags |= 1, rn(e, t, i, r), t.child;
      case 14:
        return i = t.type, a = Dn(i, t.pendingProps), a = Dn(i.type, a), xp(e, t, i, a, r);
      case 15:
        return Sp(e, t, t.type, t.pendingProps, r);
      case 17:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Dn(i, a), hs(e, t), t.tag = 1, cn(i) ? (e = !0, ql(t)) : e = !1, Ko(t, r), Bd(t, i, a), au(t, i, a, r), Cu(null, t, i, !0, e, r);
      case 19:
        return Op(e, t, r);
      case 22:
        return kp(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function Jp(e, t) {
    return wi(e, t);
  }
  function b0(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pn(e, t, r, i) {
    return new b0(e, t, r, i);
  }
  function $u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function j0(e) {
    if (typeof e == "function") return $u(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Q) return 11;
      if (e === fe) return 14;
    }
    return 2;
  }
  function Gr(e, t) {
    var r = e.alternate;
    return r === null ? (r = Pn(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function Es(e, t, r, i, a, c) {
    var m = 2;
    if (i = e, typeof e == "function") $u(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case H:
        return ko(r.children, a, c, t);
      case x:
        m = 8, a |= 8;
        break;
      case T:
        return e = Pn(12, r, t, a | 2), e.elementType = T, e.lanes = c, e;
      case ie:
        return e = Pn(13, r, t, a), e.elementType = ie, e.lanes = c, e;
      case K:
        return e = Pn(19, r, t, a), e.elementType = K, e.lanes = c, e;
      case ne:
        return Ts(r, a, c, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case L:
            m = 10;
            break e;
          case V:
            m = 9;
            break e;
          case Q:
            m = 11;
            break e;
          case fe:
            m = 14;
            break e;
          case we:
            m = 16, i = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = Pn(m, r, t, a), t.elementType = e, t.type = i, t.lanes = c, t;
  }
  function ko(e, t, r, i) {
    return e = Pn(7, e, i, t), e.lanes = r, e;
  }
  function Ts(e, t, r, i) {
    return e = Pn(22, e, i, t), e.elementType = ne, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function Vu(e, t, r) {
    return e = Pn(6, e, null, t), e.lanes = r, e;
  }
  function Yu(e, t, r) {
    return t = Pn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function F0(e, t, r, i, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wa(0), this.expirationTimes = wa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wa(0), this.identifierPrefix = i, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Ku(e, t, r, i, a, c, m, S, R) {
    return e = new F0(e, t, r, S, R), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = Pn(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = { element: i, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lu(c), e;
  }
  function M0(e, t, r) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: F, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: r };
  }
  function eh(e) {
    if (!e) return Hr;
    e = e._reactInternals;
    e: {
      if (vr(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (cn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (cn(r)) return Id(e, r, t);
    }
    return t;
  }
  function th(e, t, r, i, a, c, m, S, R) {
    return e = Ku(r, i, !0, e, a, c, m, S, R), e.context = eh(null), r = e.current, i = on(), a = Kr(r), c = _r(i, a), c.callback = t ?? null, Ur(r, c, a), e.current.lanes = a, ki(e, a, i), pn(e, i), e;
  }
  function Is(e, t, r, i) {
    var a = t.current, c = on(), m = Kr(a);
    return r = eh(r), t.context === null ? t.context = r : t.pendingContext = r, t = _r(c, m), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Ur(a, t, m), e !== null && (Wn(e, a, m, c), rs(e, a, m)), m;
  }
  function Rs(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function nh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Qu(e, t) {
    nh(e, t), (e = e.alternate) && nh(e, t);
  }
  function D0() {
    return null;
  }
  var rh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Gu(e) {
    this._internalRoot = e;
  }
  Os.prototype.render = Gu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    Is(e, t, null, null);
  }, Os.prototype.unmount = Gu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      wo(function() {
        Is(null, e, null, null);
      }), t[yr] = null;
    }
  };
  function Os(e) {
    this._internalRoot = e;
  }
  Os.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Df();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < br.length && t !== 0 && t < br[r].priority; r++) ;
      br.splice(r, 0, e), r === 0 && Wf(e);
    }
  };
  function qu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function As(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function oh() {
  }
  function H0(e, t, r, i, a) {
    if (a) {
      if (typeof i == "function") {
        var c = i;
        i = function() {
          var W = Rs(m);
          c.call(W);
        };
      }
      var m = th(t, i, e, 0, null, !1, !1, "", oh);
      return e._reactRootContainer = m, e[yr] = m.current, ji(e.nodeType === 8 ? e.parentNode : e), wo(), m;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof i == "function") {
      var S = i;
      i = function() {
        var W = Rs(R);
        S.call(W);
      };
    }
    var R = Ku(e, 0, !1, null, null, !1, !1, "", oh);
    return e._reactRootContainer = R, e[yr] = R.current, ji(e.nodeType === 8 ? e.parentNode : e), wo(function() {
      Is(t, R, r, i);
    }), R;
  }
  function Ps(e, t, r, i, a) {
    var c = r._reactRootContainer;
    if (c) {
      var m = c;
      if (typeof a == "function") {
        var S = a;
        a = function() {
          var R = Rs(m);
          S.call(R);
        };
      }
      Is(t, m, e, a);
    } else m = H0(r, t, e, a, i);
    return Rs(m);
  }
  Ff = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Si(t.pendingLanes);
          r !== 0 && (xa(t, r | 1), pn(t, st()), (Ze & 6) === 0 && (Jo = st() + 500, Br()));
        }
        break;
      case 13:
        wo(function() {
          var i = kr(e, 1);
          if (i !== null) {
            var a = on();
            Wn(i, e, 1, a);
          }
        }), Qu(e, 1);
    }
  }, Sa = function(e) {
    if (e.tag === 13) {
      var t = kr(e, 134217728);
      if (t !== null) {
        var r = on();
        Wn(t, e, 134217728, r);
      }
      Qu(e, 134217728);
    }
  }, Mf = function(e) {
    if (e.tag === 13) {
      var t = Kr(e), r = kr(e, t);
      if (r !== null) {
        var i = on();
        Wn(r, e, t, i);
      }
      Qu(e, t);
    }
  }, Df = function() {
    return rt;
  }, Hf = function(e, t) {
    var r = rt;
    try {
      return rt = e, t();
    } finally {
      rt = r;
    }
  }, qn = function(e, t, r) {
    switch (t) {
      case "input":
        if (Ve(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var i = r[t];
            if (i !== e && i.form === e.form) {
              var a = Ql(i);
              if (!a) throw Error(l(90));
              Ie(i), Ve(i, a);
            }
          }
        }
        break;
      case "textarea":
        tt(e, r);
        break;
      case "select":
        t = r.value, t != null && St(e, !!r.multiple, t, !1);
    }
  }, Oe = Bu, Ye = wo;
  var B0 = { usingClientEntryPoint: !1, Events: [Di, Ho, Ql, Ot, en, Bu] }, Ji = { findFiberByHostInstance: co, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, W0 = { bundleType: Ji.bundleType, version: Ji.version, rendererPackageName: Ji.rendererPackageName, rendererConfig: Ji.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = vi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ji.findFiberByHostInstance || D0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber) try {
      Ol = Ls.inject(W0), Zn = Ls;
    } catch {
    }
  }
  return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B0, hn.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qu(t)) throw Error(l(200));
    return M0(e, t, null, r);
  }, hn.createRoot = function(e, t) {
    if (!qu(e)) throw Error(l(299));
    var r = !1, i = "", a = rh;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ku(e, 1, !1, null, null, r, !1, i, a), e[yr] = t.current, ji(e.nodeType === 8 ? e.parentNode : e), new Gu(t);
  }, hn.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = vi(t), e = e === null ? null : e.stateNode, e;
  }, hn.flushSync = function(e) {
    return wo(e);
  }, hn.hydrate = function(e, t, r) {
    if (!As(t)) throw Error(l(200));
    return Ps(null, e, t, !0, r);
  }, hn.hydrateRoot = function(e, t, r) {
    if (!qu(e)) throw Error(l(405));
    var i = r != null && r.hydratedSources || null, a = !1, c = "", m = rh;
    if (r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (m = r.onRecoverableError)), t = th(t, null, e, 1, r ?? null, a, !1, c, m), e[yr] = t.current, ji(e), i) for (e = 0; e < i.length; e++) r = i[e], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(
      r,
      a
    );
    return new Os(t);
  }, hn.render = function(e, t, r) {
    if (!As(t)) throw Error(l(200));
    return Ps(null, e, t, !1, r);
  }, hn.unmountComponentAtNode = function(e) {
    if (!As(e)) throw Error(l(40));
    return e._reactRootContainer ? (wo(function() {
      Ps(null, null, e, !1, function() {
        e._reactRootContainer = null, e[yr] = null;
      });
    }), !0) : !1;
  }, hn.unstable_batchedUpdates = Bu, hn.unstable_renderSubtreeIntoContainer = function(e, t, r, i) {
    if (!As(r)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return Ps(e, t, r, !1, i);
  }, hn.version = "18.2.0-next-9e3b772b8-20220608", hn;
}
var ch;
function Lm() {
  if (ch) return Zu.exports;
  ch = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), Zu.exports = K0(), Zu.exports;
}
var fh;
function Q0() {
  if (fh) return zs;
  fh = 1;
  var n = Lm();
  return zs.createRoot = n.createRoot, zs.hydrateRoot = n.hydrateRoot, zs;
}
var G0 = Q0(), q0 = Object.defineProperty, X0 = (n, o, l) => o in n ? q0(n, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[o] = l, Ns = (n, o, l) => X0(n, typeof o != "symbol" ? o + "" : o, l);
const Z0 = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, J0 = {
  stringify: (n) => n.name,
  parse: (n, o, l) => {
    const s = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof s == "function" ? s.bind(l) : void 0;
  }
}, ey = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
}, ty = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, ny = {
  stringify: (n) => n,
  parse: (n) => n
}, tc = {
  string: ny,
  number: ty,
  boolean: Z0,
  function: J0,
  json: ey
};
function ry(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (o, l, s) => `${l}-${s.toLowerCase()}`
  );
}
const bs = Symbol.for("r2wc.render"), js = Symbol.for("r2wc.connected"), _o = Symbol.for("r2wc.context"), Tr = Symbol.for("r2wc.props");
function oy(n, o, l) {
  var s, u, f;
  o.props || (o.props = n.propTypes ? Object.keys(n.propTypes) : []), o.events || (o.events = []);
  const d = Array.isArray(o.props) ? o.props.slice() : Object.keys(o.props), p = Array.isArray(o.events) ? o.events.slice() : Object.keys(o.events), g = {}, h = {}, v = {}, y = {};
  for (const w of d) {
    g[w] = Array.isArray(o.props) ? "string" : o.props[w];
    const A = ry(w);
    v[w] = A, y[A] = w;
  }
  for (const w of p)
    h[w] = Array.isArray(o.events) ? {} : o.events[w];
  class _ extends HTMLElement {
    constructor() {
      super(), Ns(this, f, !0), Ns(this, u), Ns(this, s, {}), Ns(this, "container"), o.shadow ? this.container = this.attachShadow({
        mode: o.shadow
      }) : this.container = this, this[Tr].container = this.container;
      for (const A of d) {
        const O = v[A], C = this.getAttribute(O), E = g[A], I = E ? tc[E] : null;
        I != null && I.parse && C && (this[Tr][A] = I.parse(C, O, this));
      }
      for (const A of p)
        this[Tr][A] = (O) => {
          const C = A.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(C, { detail: O, ...h[A] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(y);
    }
    connectedCallback() {
      this[js] = !0, this[bs]();
    }
    disconnectedCallback() {
      this[js] = !1, this[_o] && l.unmount(this[_o]), delete this[_o];
    }
    attributeChangedCallback(A, O, C) {
      const E = y[A], I = g[E], j = I ? tc[I] : null;
      E in g && j != null && j.parse && C && (this[Tr][E] = j.parse(C, A, this), this[bs]());
    }
    [(f = js, u = _o, s = Tr, bs)]() {
      this[js] && (this[_o] ? l.update(this[_o], this[Tr]) : this[_o] = l.mount(
        this.container,
        n,
        this[Tr]
      ));
    }
  }
  for (const w of d) {
    const A = v[w], O = g[w];
    Object.defineProperty(_.prototype, w, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Tr][w];
      },
      set(C) {
        this[Tr][w] = C;
        const E = O ? tc[O] : null;
        if (E != null && E.stringify) {
          const I = E.stringify(C, A, this);
          this.getAttribute(A) !== I && this.setAttribute(A, I);
        } else
          this[bs]();
      }
    });
  }
  return _;
}
function iy(n, o, l) {
  const s = G0.createRoot(n), u = ae.createElement(o, l);
  return s.render(u), {
    root: s,
    ReactComponent: o
  };
}
function ly({ root: n, ReactComponent: o }, l) {
  const s = ae.createElement(o, l);
  n.render(s);
}
function sy({ root: n }) {
  n.unmount();
}
function ay(n, o = {}) {
  return oy(n, o, { mount: iy, update: ly, unmount: sy });
}
var nc = { exports: {} }, el = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dh;
function uy() {
  if (dh) return el;
  dh = 1;
  var n = Xc(), o = Symbol.for("react.element"), l = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, g, h) {
    var v, y = {}, _ = null, w = null;
    h !== void 0 && (_ = "" + h), g.key !== void 0 && (_ = "" + g.key), g.ref !== void 0 && (w = g.ref);
    for (v in g) s.call(g, v) && !f.hasOwnProperty(v) && (y[v] = g[v]);
    if (p && p.defaultProps) for (v in g = p.defaultProps, g) y[v] === void 0 && (y[v] = g[v]);
    return { $$typeof: o, type: p, key: _, ref: w, props: y, _owner: u.current };
  }
  return el.Fragment = l, el.jsx = d, el.jsxs = d, el;
}
var ph;
function cy() {
  return ph || (ph = 1, nc.exports = uy()), nc.exports;
}
var D = cy();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function fy(n, o, l) {
  return (o = py(o)) in n ? Object.defineProperty(n, o, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[o] = l, n;
}
function hh(n, o) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    o && (s = s.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function te(n) {
  for (var o = 1; o < arguments.length; o++) {
    var l = arguments[o] != null ? arguments[o] : {};
    o % 2 ? hh(Object(l), !0).forEach(function(s) {
      fy(n, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : hh(Object(l)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return n;
}
function dy(n, o) {
  if (typeof n != "object" || !n) return n;
  var l = n[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(n, o);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(n);
}
function py(n) {
  var o = dy(n, "string");
  return typeof o == "symbol" ? o : o + "";
}
const mh = () => {
};
let Zc = {}, zm = {}, Nm = null, bm = {
  mark: mh,
  measure: mh
};
try {
  typeof window < "u" && (Zc = window), typeof document < "u" && (zm = document), typeof MutationObserver < "u" && (Nm = MutationObserver), typeof performance < "u" && (bm = performance);
} catch {
}
const {
  userAgent: gh = ""
} = Zc.navigator || {}, to = Zc, vt = zm, vh = Nm, Fs = bm;
to.document;
const Ar = !!vt.documentElement && !!vt.head && typeof vt.addEventListener == "function" && typeof vt.createElement == "function", jm = ~gh.indexOf("MSIE") || ~gh.indexOf("Trident/");
var hy = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, my = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Fm = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, gy = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Mm = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Jt = "classic", oa = "duotone", vy = "sharp", yy = "sharp-duotone", Dm = [Jt, oa, vy, yy], wy = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, xy = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Sy = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), ky = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, _y = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], yh = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Cy = ["kit"], Ey = {
  kit: {
    "fa-kit": "fak"
  }
}, Ty = ["fak", "fakd"], Iy = {
  kit: {
    fak: "fa-kit"
  }
}, wh = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ms = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ry = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Oy = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ay = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Py = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, Ly = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, kc = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, zy = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], _c = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Ry, ...zy], Ny = ["solid", "regular", "light", "thin", "duotone", "brands"], Hm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], by = Hm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), jy = [...Object.keys(Ly), ...Ny, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ms.GROUP, Ms.SWAP_OPACITY, Ms.PRIMARY, Ms.SECONDARY].concat(Hm.map((n) => "".concat(n, "x"))).concat(by.map((n) => "w-".concat(n))), Fy = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const Rr = "___FONT_AWESOME___", Cc = 16, Bm = "fa", Wm = "svg-inline--fa", Io = "data-fa-i2svg", Ec = "data-fa-pseudo-element", My = "data-fa-pseudo-element-pending", Jc = "data-prefix", ef = "data-icon", xh = "fontawesome-i2svg", Dy = "async", Hy = ["HTML", "HEAD", "STYLE", "SCRIPT"], Um = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function yl(n) {
  return new Proxy(n, {
    get(o, l) {
      return l in o ? o[l] : o[Jt];
    }
  });
}
const $m = te({}, Fm);
$m[Jt] = te(te(te(te({}, {
  "fa-duotone": "duotone"
}), Fm[Jt]), yh.kit), yh["kit-duotone"]);
const By = yl($m), Tc = te({}, ky);
Tc[Jt] = te(te(te(te({}, {
  duotone: "fad"
}), Tc[Jt]), wh.kit), wh["kit-duotone"]);
const Sh = yl(Tc), Ic = te({}, kc);
Ic[Jt] = te(te({}, Ic[Jt]), Iy.kit);
const tf = yl(Ic), Rc = te({}, Py);
Rc[Jt] = te(te({}, Rc[Jt]), Ey.kit);
yl(Rc);
const Wy = hy, Vm = "fa-layers-text", Uy = my, $y = te({}, wy);
yl($y);
const Vy = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], rc = gy, Yy = [...Cy, ...jy], ol = to.FontAwesomeConfig || {};
function Ky(n) {
  var o = vt.querySelector("script[" + n + "]");
  if (o)
    return o.getAttribute(n);
}
function Qy(n) {
  return n === "" ? !0 : n === "false" ? !1 : n === "true" ? !0 : n;
}
vt && typeof vt.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((o) => {
  let [l, s] = o;
  const u = Qy(Ky(l));
  u != null && (ol[s] = u);
});
const Ym = {
  styleDefault: "solid",
  familyDefault: Jt,
  cssPrefix: Bm,
  replacementClass: Wm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
ol.familyPrefix && (ol.cssPrefix = ol.familyPrefix);
const si = te(te({}, Ym), ol);
si.autoReplaceSvg || (si.observeMutations = !1);
const Ce = {};
Object.keys(Ym).forEach((n) => {
  Object.defineProperty(Ce, n, {
    enumerable: !0,
    set: function(o) {
      si[n] = o, il.forEach((l) => l(Ce));
    },
    get: function() {
      return si[n];
    }
  });
});
Object.defineProperty(Ce, "familyPrefix", {
  enumerable: !0,
  set: function(n) {
    si.cssPrefix = n, il.forEach((o) => o(Ce));
  },
  get: function() {
    return si.cssPrefix;
  }
});
to.FontAwesomeConfig = Ce;
const il = [];
function Gy(n) {
  return il.push(n), () => {
    il.splice(il.indexOf(n), 1);
  };
}
const Xr = Cc, lr = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function qy(n) {
  if (!n || !Ar)
    return;
  const o = vt.createElement("style");
  o.setAttribute("type", "text/css"), o.innerHTML = n;
  const l = vt.head.childNodes;
  let s = null;
  for (let u = l.length - 1; u > -1; u--) {
    const f = l[u], d = (f.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(d) > -1 && (s = f);
  }
  return vt.head.insertBefore(o, s), n;
}
const Xy = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function al() {
  let n = 12, o = "";
  for (; n-- > 0; )
    o += Xy[Math.random() * 62 | 0];
  return o;
}
function fi(n) {
  const o = [];
  for (let l = (n || []).length >>> 0; l--; )
    o[l] = n[l];
  return o;
}
function nf(n) {
  return n.classList ? fi(n.classList) : (n.getAttribute("class") || "").split(" ").filter((o) => o);
}
function Km(n) {
  return "".concat(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Zy(n) {
  return Object.keys(n || {}).reduce((o, l) => o + "".concat(l, '="').concat(Km(n[l]), '" '), "").trim();
}
function ia(n) {
  return Object.keys(n || {}).reduce((o, l) => o + "".concat(l, ": ").concat(n[l].trim(), ";"), "");
}
function rf(n) {
  return n.size !== lr.size || n.x !== lr.x || n.y !== lr.y || n.rotate !== lr.rotate || n.flipX || n.flipY;
}
function Jy(n) {
  let {
    transform: o,
    containerWidth: l,
    iconWidth: s
  } = n;
  const u = {
    transform: "translate(".concat(l / 2, " 256)")
  }, f = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "), d = "scale(".concat(o.size / 16 * (o.flipX ? -1 : 1), ", ").concat(o.size / 16 * (o.flipY ? -1 : 1), ") "), p = "rotate(".concat(o.rotate, " 0 0)"), g = {
    transform: "".concat(f, " ").concat(d, " ").concat(p)
  }, h = {
    transform: "translate(".concat(s / 2 * -1, " -256)")
  };
  return {
    outer: u,
    inner: g,
    path: h
  };
}
function e1(n) {
  let {
    transform: o,
    width: l = Cc,
    height: s = Cc,
    startCentered: u = !1
  } = n, f = "";
  return u && jm ? f += "translate(".concat(o.x / Xr - l / 2, "em, ").concat(o.y / Xr - s / 2, "em) ") : u ? f += "translate(calc(-50% + ".concat(o.x / Xr, "em), calc(-50% + ").concat(o.y / Xr, "em)) ") : f += "translate(".concat(o.x / Xr, "em, ").concat(o.y / Xr, "em) "), f += "scale(".concat(o.size / Xr * (o.flipX ? -1 : 1), ", ").concat(o.size / Xr * (o.flipY ? -1 : 1), ") "), f += "rotate(".concat(o.rotate, "deg) "), f;
}
var t1 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Qm() {
  const n = Bm, o = Wm, l = Ce.cssPrefix, s = Ce.replacementClass;
  let u = t1;
  if (l !== n || s !== o) {
    const f = new RegExp("\\.".concat(n, "\\-"), "g"), d = new RegExp("\\--".concat(n, "\\-"), "g"), p = new RegExp("\\.".concat(o), "g");
    u = u.replace(f, ".".concat(l, "-")).replace(d, "--".concat(l, "-")).replace(p, ".".concat(s));
  }
  return u;
}
let kh = !1;
function oc() {
  Ce.autoAddCss && !kh && (qy(Qm()), kh = !0);
}
var n1 = {
  mixout() {
    return {
      dom: {
        css: Qm,
        insertCss: oc
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        oc();
      },
      beforeI2svg() {
        oc();
      }
    };
  }
};
const Or = to || {};
Or[Rr] || (Or[Rr] = {});
Or[Rr].styles || (Or[Rr].styles = {});
Or[Rr].hooks || (Or[Rr].hooks = {});
Or[Rr].shims || (Or[Rr].shims = []);
var sr = Or[Rr];
const Gm = [], qm = function() {
  vt.removeEventListener("DOMContentLoaded", qm), Qs = 1, Gm.map((n) => n());
};
let Qs = !1;
Ar && (Qs = (vt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(vt.readyState), Qs || vt.addEventListener("DOMContentLoaded", qm));
function r1(n) {
  Ar && (Qs ? setTimeout(n, 0) : Gm.push(n));
}
function wl(n) {
  const {
    tag: o,
    attributes: l = {},
    children: s = []
  } = n;
  return typeof n == "string" ? Km(n) : "<".concat(o, " ").concat(Zy(l), ">").concat(s.map(wl).join(""), "</").concat(o, ">");
}
function _h(n, o, l) {
  if (n && n[o] && n[o][l])
    return {
      prefix: o,
      iconName: l,
      icon: n[o][l]
    };
}
var ic = function(o, l, s, u) {
  var f = Object.keys(o), d = f.length, p = l, g, h, v;
  for (s === void 0 ? (g = 1, v = o[f[0]]) : (g = 0, v = s); g < d; g++)
    h = f[g], v = p(v, o[h], h, o);
  return v;
};
function o1(n) {
  const o = [];
  let l = 0;
  const s = n.length;
  for (; l < s; ) {
    const u = n.charCodeAt(l++);
    if (u >= 55296 && u <= 56319 && l < s) {
      const f = n.charCodeAt(l++);
      (f & 64512) == 56320 ? o.push(((u & 1023) << 10) + (f & 1023) + 65536) : (o.push(u), l--);
    } else
      o.push(u);
  }
  return o;
}
function Oc(n) {
  const o = o1(n);
  return o.length === 1 ? o[0].toString(16) : null;
}
function i1(n, o) {
  const l = n.length;
  let s = n.charCodeAt(o), u;
  return s >= 55296 && s <= 56319 && l > o + 1 && (u = n.charCodeAt(o + 1), u >= 56320 && u <= 57343) ? (s - 55296) * 1024 + u - 56320 + 65536 : s;
}
function Ch(n) {
  return Object.keys(n).reduce((o, l) => {
    const s = n[l];
    return !!s.icon ? o[s.iconName] = s.icon : o[l] = s, o;
  }, {});
}
function Ac(n, o) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: s = !1
  } = l, u = Ch(o);
  typeof sr.hooks.addPack == "function" && !s ? sr.hooks.addPack(n, Ch(o)) : sr.styles[n] = te(te({}, sr.styles[n] || {}), u), n === "fas" && Ac("fa", o);
}
const {
  styles: ul,
  shims: l1
} = sr, Xm = Object.keys(tf), s1 = Xm.reduce((n, o) => (n[o] = Object.keys(tf[o]), n), {});
let of = null, Zm = {}, Jm = {}, eg = {}, tg = {}, ng = {};
function a1(n) {
  return ~Yy.indexOf(n);
}
function u1(n, o) {
  const l = o.split("-"), s = l[0], u = l.slice(1).join("-");
  return s === n && u !== "" && !a1(u) ? u : null;
}
const rg = () => {
  const n = (s) => ic(ul, (u, f, d) => (u[d] = ic(f, s, {}), u), {});
  Zm = n((s, u, f) => (u[3] && (s[u[3]] = f), u[2] && u[2].filter((p) => typeof p == "number").forEach((p) => {
    s[p.toString(16)] = f;
  }), s)), Jm = n((s, u, f) => (s[f] = f, u[2] && u[2].filter((p) => typeof p == "string").forEach((p) => {
    s[p] = f;
  }), s)), ng = n((s, u, f) => {
    const d = u[2];
    return s[f] = f, d.forEach((p) => {
      s[p] = f;
    }), s;
  });
  const o = "far" in ul || Ce.autoFetchSvg, l = ic(l1, (s, u) => {
    const f = u[0];
    let d = u[1];
    const p = u[2];
    return d === "far" && !o && (d = "fas"), typeof f == "string" && (s.names[f] = {
      prefix: d,
      iconName: p
    }), typeof f == "number" && (s.unicodes[f.toString(16)] = {
      prefix: d,
      iconName: p
    }), s;
  }, {
    names: {},
    unicodes: {}
  });
  eg = l.names, tg = l.unicodes, of = la(Ce.styleDefault, {
    family: Ce.familyDefault
  });
};
Gy((n) => {
  of = la(n.styleDefault, {
    family: Ce.familyDefault
  });
});
rg();
function lf(n, o) {
  return (Zm[n] || {})[o];
}
function c1(n, o) {
  return (Jm[n] || {})[o];
}
function Co(n, o) {
  return (ng[n] || {})[o];
}
function og(n) {
  return eg[n] || {
    prefix: null,
    iconName: null
  };
}
function f1(n) {
  const o = tg[n], l = lf("fas", n);
  return o || (l ? {
    prefix: "fas",
    iconName: l
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function no() {
  return of;
}
const ig = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function d1(n) {
  let o = Jt;
  const l = Xm.reduce((s, u) => (s[u] = "".concat(Ce.cssPrefix, "-").concat(u), s), {});
  return Dm.forEach((s) => {
    (n.includes(l[s]) || n.some((u) => s1[s].includes(u))) && (o = s);
  }), o;
}
function la(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: l = Jt
  } = o, s = By[l][n];
  if (l === oa && !n)
    return "fad";
  const u = Sh[l][n] || Sh[l][s], f = n in sr.styles ? n : null;
  return u || f || null;
}
function p1(n) {
  let o = [], l = null;
  return n.forEach((s) => {
    const u = u1(Ce.cssPrefix, s);
    u ? l = u : s && o.push(s);
  }), {
    iconName: l,
    rest: o
  };
}
function Eh(n) {
  return n.sort().filter((o, l, s) => s.indexOf(o) === l);
}
function sa(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: l = !1
  } = o;
  let s = null;
  const u = _c.concat(Oy), f = Eh(n.filter((y) => u.includes(y))), d = Eh(n.filter((y) => !_c.includes(y))), p = f.filter((y) => (s = y, !Mm.includes(y))), [g = null] = p, h = d1(f), v = te(te({}, p1(d)), {}, {
    prefix: la(g, {
      family: h
    })
  });
  return te(te(te({}, v), v1({
    values: n,
    family: h,
    styles: ul,
    config: Ce,
    canonical: v,
    givenPrefix: s
  })), h1(l, s, v));
}
function h1(n, o, l) {
  let {
    prefix: s,
    iconName: u
  } = l;
  if (n || !s || !u)
    return {
      prefix: s,
      iconName: u
    };
  const f = o === "fa" ? og(u) : {}, d = Co(s, u);
  return u = f.iconName || d || u, s = f.prefix || s, s === "far" && !ul.far && ul.fas && !Ce.autoFetchSvg && (s = "fas"), {
    prefix: s,
    iconName: u
  };
}
const m1 = Dm.filter((n) => n !== Jt || n !== oa), g1 = Object.keys(kc).filter((n) => n !== Jt).map((n) => Object.keys(kc[n])).flat();
function v1(n) {
  const {
    values: o,
    family: l,
    canonical: s,
    givenPrefix: u = "",
    styles: f = {},
    config: d = {}
  } = n, p = l === oa, g = o.includes("fa-duotone") || o.includes("fad"), h = d.familyDefault === "duotone", v = s.prefix === "fad" || s.prefix === "fa-duotone";
  if (!p && (g || h || v) && (s.prefix = "fad"), (o.includes("fa-brands") || o.includes("fab")) && (s.prefix = "fab"), !s.prefix && m1.includes(l) && (Object.keys(f).find((_) => g1.includes(_)) || d.autoFetchSvg)) {
    const _ = Sy.get(l).defaultShortPrefixId;
    s.prefix = _, s.iconName = Co(s.prefix, s.iconName) || s.iconName;
  }
  return (s.prefix === "fa" || u === "fa") && (s.prefix = no() || "fas"), s;
}
class y1 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++)
      l[s] = arguments[s];
    const u = l.reduce(this._pullDefinitions, {});
    Object.keys(u).forEach((f) => {
      this.definitions[f] = te(te({}, this.definitions[f] || {}), u[f]), Ac(f, u[f]);
      const d = tf[Jt][f];
      d && Ac(d, u[f]), rg();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(o, l) {
    const s = l.prefix && l.iconName && l.icon ? {
      0: l
    } : l;
    return Object.keys(s).map((u) => {
      const {
        prefix: f,
        iconName: d,
        icon: p
      } = s[u], g = p[2];
      o[f] || (o[f] = {}), g.length > 0 && g.forEach((h) => {
        typeof h == "string" && (o[f][h] = p);
      }), o[f][d] = p;
    }), o;
  }
}
let Th = [], ni = {};
const oi = {}, w1 = Object.keys(oi);
function x1(n, o) {
  let {
    mixoutsTo: l
  } = o;
  return Th = n, ni = {}, Object.keys(oi).forEach((s) => {
    w1.indexOf(s) === -1 && delete oi[s];
  }), Th.forEach((s) => {
    const u = s.mixout ? s.mixout() : {};
    if (Object.keys(u).forEach((f) => {
      typeof u[f] == "function" && (l[f] = u[f]), typeof u[f] == "object" && Object.keys(u[f]).forEach((d) => {
        l[f] || (l[f] = {}), l[f][d] = u[f][d];
      });
    }), s.hooks) {
      const f = s.hooks();
      Object.keys(f).forEach((d) => {
        ni[d] || (ni[d] = []), ni[d].push(f[d]);
      });
    }
    s.provides && s.provides(oi);
  }), l;
}
function Pc(n, o) {
  for (var l = arguments.length, s = new Array(l > 2 ? l - 2 : 0), u = 2; u < l; u++)
    s[u - 2] = arguments[u];
  return (ni[n] || []).forEach((d) => {
    o = d.apply(null, [o, ...s]);
  }), o;
}
function Ro(n) {
  for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
    l[s - 1] = arguments[s];
  (ni[n] || []).forEach((f) => {
    f.apply(null, l);
  });
}
function ro() {
  const n = arguments[0], o = Array.prototype.slice.call(arguments, 1);
  return oi[n] ? oi[n].apply(null, o) : void 0;
}
function Lc(n) {
  n.prefix === "fa" && (n.prefix = "fas");
  let {
    iconName: o
  } = n;
  const l = n.prefix || no();
  if (o)
    return o = Co(l, o) || o, _h(lg.definitions, l, o) || _h(sr.styles, l, o);
}
const lg = new y1(), S1 = () => {
  Ce.autoReplaceSvg = !1, Ce.observeMutations = !1, Ro("noAuto");
}, k1 = {
  i2svg: function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ar ? (Ro("beforeI2svg", n), ro("pseudoElements2svg", n), ro("i2svg", n)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: o
    } = n;
    Ce.autoReplaceSvg === !1 && (Ce.autoReplaceSvg = !0), Ce.observeMutations = !0, r1(() => {
      C1({
        autoReplaceSvgRoot: o
      }), Ro("watch", n);
    });
  }
}, _1 = {
  icon: (n) => {
    if (n === null)
      return null;
    if (typeof n == "object" && n.prefix && n.iconName)
      return {
        prefix: n.prefix,
        iconName: Co(n.prefix, n.iconName) || n.iconName
      };
    if (Array.isArray(n) && n.length === 2) {
      const o = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1], l = la(n[0]);
      return {
        prefix: l,
        iconName: Co(l, o) || o
      };
    }
    if (typeof n == "string" && (n.indexOf("".concat(Ce.cssPrefix, "-")) > -1 || n.match(Wy))) {
      const o = sa(n.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: o.prefix || no(),
        iconName: Co(o.prefix, o.iconName) || o.iconName
      };
    }
    if (typeof n == "string") {
      const o = no();
      return {
        prefix: o,
        iconName: Co(o, n) || n
      };
    }
  }
}, Cn = {
  noAuto: S1,
  config: Ce,
  dom: k1,
  parse: _1,
  library: lg,
  findIconDefinition: Lc,
  toHtml: wl
}, C1 = function() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: o = vt
  } = n;
  (Object.keys(sr.styles).length > 0 || Ce.autoFetchSvg) && Ar && Ce.autoReplaceSvg && Cn.dom.i2svg({
    node: o
  });
};
function aa(n, o) {
  return Object.defineProperty(n, "abstract", {
    get: o
  }), Object.defineProperty(n, "html", {
    get: function() {
      return n.abstract.map((l) => wl(l));
    }
  }), Object.defineProperty(n, "node", {
    get: function() {
      if (!Ar) return;
      const l = vt.createElement("div");
      return l.innerHTML = n.html, l.children;
    }
  }), n;
}
function E1(n) {
  let {
    children: o,
    main: l,
    mask: s,
    attributes: u,
    styles: f,
    transform: d
  } = n;
  if (rf(d) && l.found && !s.found) {
    const {
      width: p,
      height: g
    } = l, h = {
      x: p / g / 2,
      y: 0.5
    };
    u.style = ia(te(te({}, f), {}, {
      "transform-origin": "".concat(h.x + d.x / 16, "em ").concat(h.y + d.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: u,
    children: o
  }];
}
function T1(n) {
  let {
    prefix: o,
    iconName: l,
    children: s,
    attributes: u,
    symbol: f
  } = n;
  const d = f === !0 ? "".concat(o, "-").concat(Ce.cssPrefix, "-").concat(l) : f;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: te(te({}, u), {}, {
        id: d
      }),
      children: s
    }]
  }];
}
function sf(n) {
  const {
    icons: {
      main: o,
      mask: l
    },
    prefix: s,
    iconName: u,
    transform: f,
    symbol: d,
    title: p,
    maskId: g,
    titleId: h,
    extra: v,
    watchable: y = !1
  } = n, {
    width: _,
    height: w
  } = l.found ? l : o, A = Ty.includes(s), O = [Ce.replacementClass, u ? "".concat(Ce.cssPrefix, "-").concat(u) : ""].filter((B) => v.classes.indexOf(B) === -1).filter((B) => B !== "" || !!B).concat(v.classes).join(" ");
  let C = {
    children: [],
    attributes: te(te({}, v.attributes), {}, {
      "data-prefix": s,
      "data-icon": u,
      class: O,
      role: v.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(_, " ").concat(w)
    })
  };
  const E = A && !~v.classes.indexOf("fa-fw") ? {
    width: "".concat(_ / w * 16 * 0.0625, "em")
  } : {};
  y && (C.attributes[Io] = ""), p && (C.children.push({
    tag: "title",
    attributes: {
      id: C.attributes["aria-labelledby"] || "title-".concat(h || al())
    },
    children: [p]
  }), delete C.attributes.title);
  const I = te(te({}, C), {}, {
    prefix: s,
    iconName: u,
    main: o,
    mask: l,
    maskId: g,
    transform: f,
    symbol: d,
    styles: te(te({}, E), v.styles)
  }), {
    children: j,
    attributes: $
  } = l.found && o.found ? ro("generateAbstractMask", I) || {
    children: [],
    attributes: {}
  } : ro("generateAbstractIcon", I) || {
    children: [],
    attributes: {}
  };
  return I.children = j, I.attributes = $, d ? T1(I) : E1(I);
}
function Ih(n) {
  const {
    content: o,
    width: l,
    height: s,
    transform: u,
    title: f,
    extra: d,
    watchable: p = !1
  } = n, g = te(te(te({}, d.attributes), f ? {
    title: f
  } : {}), {}, {
    class: d.classes.join(" ")
  });
  p && (g[Io] = "");
  const h = te({}, d.styles);
  rf(u) && (h.transform = e1({
    transform: u,
    startCentered: !0,
    width: l,
    height: s
  }), h["-webkit-transform"] = h.transform);
  const v = ia(h);
  v.length > 0 && (g.style = v);
  const y = [];
  return y.push({
    tag: "span",
    attributes: g,
    children: [o]
  }), f && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [f]
  }), y;
}
function I1(n) {
  const {
    content: o,
    title: l,
    extra: s
  } = n, u = te(te(te({}, s.attributes), l ? {
    title: l
  } : {}), {}, {
    class: s.classes.join(" ")
  }), f = ia(s.styles);
  f.length > 0 && (u.style = f);
  const d = [];
  return d.push({
    tag: "span",
    attributes: u,
    children: [o]
  }), l && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [l]
  }), d;
}
const {
  styles: lc
} = sr;
function zc(n) {
  const o = n[0], l = n[1], [s] = n.slice(4);
  let u = null;
  return Array.isArray(s) ? u = {
    tag: "g",
    attributes: {
      class: "".concat(Ce.cssPrefix, "-").concat(rc.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Ce.cssPrefix, "-").concat(rc.SECONDARY),
        fill: "currentColor",
        d: s[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Ce.cssPrefix, "-").concat(rc.PRIMARY),
        fill: "currentColor",
        d: s[1]
      }
    }]
  } : u = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: s
    }
  }, {
    found: !0,
    width: o,
    height: l,
    icon: u
  };
}
const R1 = {
  found: !1,
  width: 512,
  height: 512
};
function O1(n, o) {
  !Um && !Ce.showMissingIcons && n && console.error('Icon with name "'.concat(n, '" and prefix "').concat(o, '" is missing.'));
}
function Nc(n, o) {
  let l = o;
  return o === "fa" && Ce.styleDefault !== null && (o = no()), new Promise((s, u) => {
    if (l === "fa") {
      const f = og(n) || {};
      n = f.iconName || n, o = f.prefix || o;
    }
    if (n && o && lc[o] && lc[o][n]) {
      const f = lc[o][n];
      return s(zc(f));
    }
    O1(n, o), s(te(te({}, R1), {}, {
      icon: Ce.showMissingIcons && n ? ro("missingIconAbstract") || {} : {}
    }));
  });
}
const Rh = () => {
}, bc = Ce.measurePerformance && Fs && Fs.mark && Fs.measure ? Fs : {
  mark: Rh,
  measure: Rh
}, rl = 'FA "6.7.2"', A1 = (n) => (bc.mark("".concat(rl, " ").concat(n, " begins")), () => sg(n)), sg = (n) => {
  bc.mark("".concat(rl, " ").concat(n, " ends")), bc.measure("".concat(rl, " ").concat(n), "".concat(rl, " ").concat(n, " begins"), "".concat(rl, " ").concat(n, " ends"));
};
var af = {
  begin: A1,
  end: sg
};
const Us = () => {
};
function Oh(n) {
  return typeof (n.getAttribute ? n.getAttribute(Io) : null) == "string";
}
function P1(n) {
  const o = n.getAttribute ? n.getAttribute(Jc) : null, l = n.getAttribute ? n.getAttribute(ef) : null;
  return o && l;
}
function L1(n) {
  return n && n.classList && n.classList.contains && n.classList.contains(Ce.replacementClass);
}
function z1() {
  return Ce.autoReplaceSvg === !0 ? $s.replace : $s[Ce.autoReplaceSvg] || $s.replace;
}
function N1(n) {
  return vt.createElementNS("http://www.w3.org/2000/svg", n);
}
function b1(n) {
  return vt.createElement(n);
}
function ag(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: l = n.tag === "svg" ? N1 : b1
  } = o;
  if (typeof n == "string")
    return vt.createTextNode(n);
  const s = l(n.tag);
  return Object.keys(n.attributes || []).forEach(function(f) {
    s.setAttribute(f, n.attributes[f]);
  }), (n.children || []).forEach(function(f) {
    s.appendChild(ag(f, {
      ceFn: l
    }));
  }), s;
}
function j1(n) {
  let o = " ".concat(n.outerHTML, " ");
  return o = "".concat(o, "Font Awesome fontawesome.com "), o;
}
const $s = {
  replace: function(n) {
    const o = n[0];
    if (o.parentNode)
      if (n[1].forEach((l) => {
        o.parentNode.insertBefore(ag(l), o);
      }), o.getAttribute(Io) === null && Ce.keepOriginalSource) {
        let l = vt.createComment(j1(o));
        o.parentNode.replaceChild(l, o);
      } else
        o.remove();
  },
  nest: function(n) {
    const o = n[0], l = n[1];
    if (~nf(o).indexOf(Ce.replacementClass))
      return $s.replace(n);
    const s = new RegExp("".concat(Ce.cssPrefix, "-.*"));
    if (delete l[0].attributes.id, l[0].attributes.class) {
      const f = l[0].attributes.class.split(" ").reduce((d, p) => (p === Ce.replacementClass || p.match(s) ? d.toSvg.push(p) : d.toNode.push(p), d), {
        toNode: [],
        toSvg: []
      });
      l[0].attributes.class = f.toSvg.join(" "), f.toNode.length === 0 ? o.removeAttribute("class") : o.setAttribute("class", f.toNode.join(" "));
    }
    const u = l.map((f) => wl(f)).join(`
`);
    o.setAttribute(Io, ""), o.innerHTML = u;
  }
};
function Ah(n) {
  n();
}
function ug(n, o) {
  const l = typeof o == "function" ? o : Us;
  if (n.length === 0)
    l();
  else {
    let s = Ah;
    Ce.mutateApproach === Dy && (s = to.requestAnimationFrame || Ah), s(() => {
      const u = z1(), f = af.begin("mutate");
      n.map(u), f(), l();
    });
  }
}
let uf = !1;
function cg() {
  uf = !0;
}
function jc() {
  uf = !1;
}
let Gs = null;
function Ph(n) {
  if (!vh || !Ce.observeMutations)
    return;
  const {
    treeCallback: o = Us,
    nodeCallback: l = Us,
    pseudoElementsCallback: s = Us,
    observeMutationsRoot: u = vt
  } = n;
  Gs = new vh((f) => {
    if (uf) return;
    const d = no();
    fi(f).forEach((p) => {
      if (p.type === "childList" && p.addedNodes.length > 0 && !Oh(p.addedNodes[0]) && (Ce.searchPseudoElements && s(p.target), o(p.target)), p.type === "attributes" && p.target.parentNode && Ce.searchPseudoElements && s(p.target.parentNode), p.type === "attributes" && Oh(p.target) && ~Vy.indexOf(p.attributeName))
        if (p.attributeName === "class" && P1(p.target)) {
          const {
            prefix: g,
            iconName: h
          } = sa(nf(p.target));
          p.target.setAttribute(Jc, g || d), h && p.target.setAttribute(ef, h);
        } else L1(p.target) && l(p.target);
    });
  }), Ar && Gs.observe(u, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function F1() {
  Gs && Gs.disconnect();
}
function M1(n) {
  const o = n.getAttribute("style");
  let l = [];
  return o && (l = o.split(";").reduce((s, u) => {
    const f = u.split(":"), d = f[0], p = f.slice(1);
    return d && p.length > 0 && (s[d] = p.join(":").trim()), s;
  }, {})), l;
}
function D1(n) {
  const o = n.getAttribute("data-prefix"), l = n.getAttribute("data-icon"), s = n.innerText !== void 0 ? n.innerText.trim() : "";
  let u = sa(nf(n));
  return u.prefix || (u.prefix = no()), o && l && (u.prefix = o, u.iconName = l), u.iconName && u.prefix || (u.prefix && s.length > 0 && (u.iconName = c1(u.prefix, n.innerText) || lf(u.prefix, Oc(n.innerText))), !u.iconName && Ce.autoFetchSvg && n.firstChild && n.firstChild.nodeType === Node.TEXT_NODE && (u.iconName = n.firstChild.data)), u;
}
function H1(n) {
  const o = fi(n.attributes).reduce((u, f) => (u.name !== "class" && u.name !== "style" && (u[f.name] = f.value), u), {}), l = n.getAttribute("title"), s = n.getAttribute("data-fa-title-id");
  return Ce.autoA11y && (l ? o["aria-labelledby"] = "".concat(Ce.replacementClass, "-title-").concat(s || al()) : (o["aria-hidden"] = "true", o.focusable = "false")), o;
}
function B1() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: lr,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Lh(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: l,
    prefix: s,
    rest: u
  } = D1(n), f = H1(n), d = Pc("parseNodeAttributes", {}, n);
  let p = o.styleParser ? M1(n) : [];
  return te({
    iconName: l,
    title: n.getAttribute("title"),
    titleId: n.getAttribute("data-fa-title-id"),
    prefix: s,
    transform: lr,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: u,
      styles: p,
      attributes: f
    }
  }, d);
}
const {
  styles: W1
} = sr;
function fg(n) {
  const o = Ce.autoReplaceSvg === "nest" ? Lh(n, {
    styleParser: !1
  }) : Lh(n);
  return ~o.extra.classes.indexOf(Vm) ? ro("generateLayersText", n, o) : ro("generateSvgReplacementMutation", n, o);
}
function U1() {
  return [..._y, ..._c];
}
function zh(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ar) return Promise.resolve();
  const l = vt.documentElement.classList, s = (v) => l.add("".concat(xh, "-").concat(v)), u = (v) => l.remove("".concat(xh, "-").concat(v)), f = Ce.autoFetchSvg ? U1() : Mm.concat(Object.keys(W1));
  f.includes("fa") || f.push("fa");
  const d = [".".concat(Vm, ":not([").concat(Io, "])")].concat(f.map((v) => ".".concat(v, ":not([").concat(Io, "])"))).join(", ");
  if (d.length === 0)
    return Promise.resolve();
  let p = [];
  try {
    p = fi(n.querySelectorAll(d));
  } catch {
  }
  if (p.length > 0)
    s("pending"), u("complete");
  else
    return Promise.resolve();
  const g = af.begin("onTree"), h = p.reduce((v, y) => {
    try {
      const _ = fg(y);
      _ && v.push(_);
    } catch (_) {
      Um || _.name === "MissingIcon" && console.error(_);
    }
    return v;
  }, []);
  return new Promise((v, y) => {
    Promise.all(h).then((_) => {
      ug(_, () => {
        s("active"), s("complete"), u("pending"), typeof o == "function" && o(), g(), v();
      });
    }).catch((_) => {
      g(), y(_);
    });
  });
}
function $1(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  fg(n).then((l) => {
    l && ug([l], o);
  });
}
function V1(n) {
  return function(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = (o || {}).icon ? o : Lc(o || {});
    let {
      mask: u
    } = l;
    return u && (u = (u || {}).icon ? u : Lc(u || {})), n(s, te(te({}, l), {}, {
      mask: u
    }));
  };
}
const Y1 = function(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: l = lr,
    symbol: s = !1,
    mask: u = null,
    maskId: f = null,
    title: d = null,
    titleId: p = null,
    classes: g = [],
    attributes: h = {},
    styles: v = {}
  } = o;
  if (!n) return;
  const {
    prefix: y,
    iconName: _,
    icon: w
  } = n;
  return aa(te({
    type: "icon"
  }, n), () => (Ro("beforeDOMElementCreation", {
    iconDefinition: n,
    params: o
  }), Ce.autoA11y && (d ? h["aria-labelledby"] = "".concat(Ce.replacementClass, "-title-").concat(p || al()) : (h["aria-hidden"] = "true", h.focusable = "false")), sf({
    icons: {
      main: zc(w),
      mask: u ? zc(u.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: _,
    transform: te(te({}, lr), l),
    symbol: s,
    title: d,
    maskId: f,
    titleId: p,
    extra: {
      attributes: h,
      styles: v,
      classes: g
    }
  })));
};
var K1 = {
  mixout() {
    return {
      icon: V1(Y1)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return n.treeCallback = zh, n.nodeCallback = $1, n;
      }
    };
  },
  provides(n) {
    n.i2svg = function(o) {
      const {
        node: l = vt,
        callback: s = () => {
        }
      } = o;
      return zh(l, s);
    }, n.generateSvgReplacementMutation = function(o, l) {
      const {
        iconName: s,
        title: u,
        titleId: f,
        prefix: d,
        transform: p,
        symbol: g,
        mask: h,
        maskId: v,
        extra: y
      } = l;
      return new Promise((_, w) => {
        Promise.all([Nc(s, d), h.iconName ? Nc(h.iconName, h.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((A) => {
          let [O, C] = A;
          _([o, sf({
            icons: {
              main: O,
              mask: C
            },
            prefix: d,
            iconName: s,
            transform: p,
            symbol: g,
            maskId: v,
            title: u,
            titleId: f,
            extra: y,
            watchable: !0
          })]);
        }).catch(w);
      });
    }, n.generateAbstractIcon = function(o) {
      let {
        children: l,
        attributes: s,
        main: u,
        transform: f,
        styles: d
      } = o;
      const p = ia(d);
      p.length > 0 && (s.style = p);
      let g;
      return rf(f) && (g = ro("generateAbstractTransformGrouping", {
        main: u,
        transform: f,
        containerWidth: u.width,
        iconWidth: u.width
      })), l.push(g || u.icon), {
        children: l,
        attributes: s
      };
    };
  }
}, Q1 = {
  mixout() {
    return {
      layer(n) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: l = []
        } = o;
        return aa({
          type: "layer"
        }, () => {
          Ro("beforeDOMElementCreation", {
            assembler: n,
            params: o
          });
          let s = [];
          return n((u) => {
            Array.isArray(u) ? u.map((f) => {
              s = s.concat(f.abstract);
            }) : s = s.concat(u.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Ce.cssPrefix, "-layers"), ...l].join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, G1 = {
  mixout() {
    return {
      counter(n) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: l = null,
          classes: s = [],
          attributes: u = {},
          styles: f = {}
        } = o;
        return aa({
          type: "counter",
          content: n
        }, () => (Ro("beforeDOMElementCreation", {
          content: n,
          params: o
        }), I1({
          content: n.toString(),
          title: l,
          extra: {
            attributes: u,
            styles: f,
            classes: ["".concat(Ce.cssPrefix, "-layers-counter"), ...s]
          }
        })));
      }
    };
  }
}, q1 = {
  mixout() {
    return {
      text(n) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: l = lr,
          title: s = null,
          classes: u = [],
          attributes: f = {},
          styles: d = {}
        } = o;
        return aa({
          type: "text",
          content: n
        }, () => (Ro("beforeDOMElementCreation", {
          content: n,
          params: o
        }), Ih({
          content: n,
          transform: te(te({}, lr), l),
          title: s,
          extra: {
            attributes: f,
            styles: d,
            classes: ["".concat(Ce.cssPrefix, "-layers-text"), ...u]
          }
        })));
      }
    };
  },
  provides(n) {
    n.generateLayersText = function(o, l) {
      const {
        title: s,
        transform: u,
        extra: f
      } = l;
      let d = null, p = null;
      if (jm) {
        const g = parseInt(getComputedStyle(o).fontSize, 10), h = o.getBoundingClientRect();
        d = h.width / g, p = h.height / g;
      }
      return Ce.autoA11y && !s && (f.attributes["aria-hidden"] = "true"), Promise.resolve([o, Ih({
        content: o.innerHTML,
        width: d,
        height: p,
        transform: u,
        title: s,
        extra: f,
        watchable: !0
      })]);
    };
  }
};
const X1 = new RegExp('"', "ug"), Nh = [1105920, 1112319], bh = te(te(te(te({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), xy), Fy), Ay), Fc = Object.keys(bh).reduce((n, o) => (n[o.toLowerCase()] = bh[o], n), {}), Z1 = Object.keys(Fc).reduce((n, o) => {
  const l = Fc[o];
  return n[o] = l[900] || [...Object.entries(l)][0][1], n;
}, {});
function J1(n) {
  const o = n.replace(X1, ""), l = i1(o, 0), s = l >= Nh[0] && l <= Nh[1], u = o.length === 2 ? o[0] === o[1] : !1;
  return {
    value: Oc(u ? o[0] : o),
    isSecondary: s || u
  };
}
function ew(n, o) {
  const l = n.replace(/^['"]|['"]$/g, "").toLowerCase(), s = parseInt(o), u = isNaN(s) ? "normal" : s;
  return (Fc[l] || {})[u] || Z1[l];
}
function jh(n, o) {
  const l = "".concat(My).concat(o.replace(":", "-"));
  return new Promise((s, u) => {
    if (n.getAttribute(l) !== null)
      return s();
    const d = fi(n.children).filter((_) => _.getAttribute(Ec) === o)[0], p = to.getComputedStyle(n, o), g = p.getPropertyValue("font-family"), h = g.match(Uy), v = p.getPropertyValue("font-weight"), y = p.getPropertyValue("content");
    if (d && !h)
      return n.removeChild(d), s();
    if (h && y !== "none" && y !== "") {
      const _ = p.getPropertyValue("content");
      let w = ew(g, v);
      const {
        value: A,
        isSecondary: O
      } = J1(_), C = h[0].startsWith("FontAwesome");
      let E = lf(w, A), I = E;
      if (C) {
        const j = f1(A);
        j.iconName && j.prefix && (E = j.iconName, w = j.prefix);
      }
      if (E && !O && (!d || d.getAttribute(Jc) !== w || d.getAttribute(ef) !== I)) {
        n.setAttribute(l, I), d && n.removeChild(d);
        const j = B1(), {
          extra: $
        } = j;
        $.attributes[Ec] = o, Nc(E, w).then((B) => {
          const F = sf(te(te({}, j), {}, {
            icons: {
              main: B,
              mask: ig()
            },
            prefix: w,
            iconName: I,
            extra: $,
            watchable: !0
          })), H = vt.createElementNS("http://www.w3.org/2000/svg", "svg");
          o === "::before" ? n.insertBefore(H, n.firstChild) : n.appendChild(H), H.outerHTML = F.map((x) => wl(x)).join(`
`), n.removeAttribute(l), s();
        }).catch(u);
      } else
        s();
    } else
      s();
  });
}
function tw(n) {
  return Promise.all([jh(n, "::before"), jh(n, "::after")]);
}
function nw(n) {
  return n.parentNode !== document.head && !~Hy.indexOf(n.tagName.toUpperCase()) && !n.getAttribute(Ec) && (!n.parentNode || n.parentNode.tagName !== "svg");
}
function Fh(n) {
  if (Ar)
    return new Promise((o, l) => {
      const s = fi(n.querySelectorAll("*")).filter(nw).map(tw), u = af.begin("searchPseudoElements");
      cg(), Promise.all(s).then(() => {
        u(), jc(), o();
      }).catch(() => {
        u(), jc(), l();
      });
    });
}
var rw = {
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return n.pseudoElementsCallback = Fh, n;
      }
    };
  },
  provides(n) {
    n.pseudoElements2svg = function(o) {
      const {
        node: l = vt
      } = o;
      Ce.searchPseudoElements && Fh(l);
    };
  }
};
let Mh = !1;
var ow = {
  mixout() {
    return {
      dom: {
        unwatch() {
          cg(), Mh = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Ph(Pc("mutationObserverCallbacks", {}));
      },
      noAuto() {
        F1();
      },
      watch(n) {
        const {
          observeMutationsRoot: o
        } = n;
        Mh ? jc() : Ph(Pc("mutationObserverCallbacks", {
          observeMutationsRoot: o
        }));
      }
    };
  }
};
const Dh = (n) => {
  let o = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return n.toLowerCase().split(" ").reduce((l, s) => {
    const u = s.toLowerCase().split("-"), f = u[0];
    let d = u.slice(1).join("-");
    if (f && d === "h")
      return l.flipX = !0, l;
    if (f && d === "v")
      return l.flipY = !0, l;
    if (d = parseFloat(d), isNaN(d))
      return l;
    switch (f) {
      case "grow":
        l.size = l.size + d;
        break;
      case "shrink":
        l.size = l.size - d;
        break;
      case "left":
        l.x = l.x - d;
        break;
      case "right":
        l.x = l.x + d;
        break;
      case "up":
        l.y = l.y - d;
        break;
      case "down":
        l.y = l.y + d;
        break;
      case "rotate":
        l.rotate = l.rotate + d;
        break;
    }
    return l;
  }, o);
};
var iw = {
  mixout() {
    return {
      parse: {
        transform: (n) => Dh(n)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-transform");
        return l && (n.transform = Dh(l)), n;
      }
    };
  },
  provides(n) {
    n.generateAbstractTransformGrouping = function(o) {
      let {
        main: l,
        transform: s,
        containerWidth: u,
        iconWidth: f
      } = o;
      const d = {
        transform: "translate(".concat(u / 2, " 256)")
      }, p = "translate(".concat(s.x * 32, ", ").concat(s.y * 32, ") "), g = "scale(".concat(s.size / 16 * (s.flipX ? -1 : 1), ", ").concat(s.size / 16 * (s.flipY ? -1 : 1), ") "), h = "rotate(".concat(s.rotate, " 0 0)"), v = {
        transform: "".concat(p, " ").concat(g, " ").concat(h)
      }, y = {
        transform: "translate(".concat(f / 2 * -1, " -256)")
      }, _ = {
        outer: d,
        inner: v,
        path: y
      };
      return {
        tag: "g",
        attributes: te({}, _.outer),
        children: [{
          tag: "g",
          attributes: te({}, _.inner),
          children: [{
            tag: l.icon.tag,
            children: l.icon.children,
            attributes: te(te({}, l.icon.attributes), _.path)
          }]
        }]
      };
    };
  }
};
const sc = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Hh(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.attributes && (n.attributes.fill || o) && (n.attributes.fill = "black"), n;
}
function lw(n) {
  return n.tag === "g" ? n.children : [n];
}
var sw = {
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-mask"), s = l ? sa(l.split(" ").map((u) => u.trim())) : ig();
        return s.prefix || (s.prefix = no()), n.mask = s, n.maskId = o.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides(n) {
    n.generateAbstractMask = function(o) {
      let {
        children: l,
        attributes: s,
        main: u,
        mask: f,
        maskId: d,
        transform: p
      } = o;
      const {
        width: g,
        icon: h
      } = u, {
        width: v,
        icon: y
      } = f, _ = Jy({
        transform: p,
        containerWidth: v,
        iconWidth: g
      }), w = {
        tag: "rect",
        attributes: te(te({}, sc), {}, {
          fill: "white"
        })
      }, A = h.children ? {
        children: h.children.map(Hh)
      } : {}, O = {
        tag: "g",
        attributes: te({}, _.inner),
        children: [Hh(te({
          tag: h.tag,
          attributes: te(te({}, h.attributes), _.path)
        }, A))]
      }, C = {
        tag: "g",
        attributes: te({}, _.outer),
        children: [O]
      }, E = "mask-".concat(d || al()), I = "clip-".concat(d || al()), j = {
        tag: "mask",
        attributes: te(te({}, sc), {}, {
          id: E,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [w, C]
      }, $ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: I
          },
          children: lw(y)
        }, j]
      };
      return l.push($, {
        tag: "rect",
        attributes: te({
          fill: "currentColor",
          "clip-path": "url(#".concat(I, ")"),
          mask: "url(#".concat(E, ")")
        }, sc)
      }), {
        children: l,
        attributes: s
      };
    };
  }
}, aw = {
  provides(n) {
    let o = !1;
    to.matchMedia && (o = to.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
      const l = [], s = {
        fill: "currentColor"
      }, u = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      l.push({
        tag: "path",
        attributes: te(te({}, s), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const f = te(te({}, u), {}, {
        attributeName: "opacity"
      }), d = {
        tag: "circle",
        attributes: te(te({}, s), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return o || d.children.push({
        tag: "animate",
        attributes: te(te({}, u), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: te(te({}, f), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), l.push(d), l.push({
        tag: "path",
        attributes: te(te({}, s), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: o ? [] : [{
          tag: "animate",
          attributes: te(te({}, f), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), o || l.push({
        tag: "path",
        attributes: te(te({}, s), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: te(te({}, f), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: l
      };
    };
  }
}, uw = {
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-symbol"), s = l === null ? !1 : l === "" ? !0 : l;
        return n.symbol = s, n;
      }
    };
  }
}, cw = [n1, K1, Q1, G1, q1, rw, ow, iw, sw, aw, uw];
x1(cw, {
  mixoutsTo: Cn
});
Cn.noAuto;
Cn.config;
Cn.library;
Cn.dom;
const Mc = Cn.parse;
Cn.findIconDefinition;
Cn.toHtml;
const fw = Cn.icon;
Cn.layer;
Cn.text;
Cn.counter;
var ac = { exports: {} }, uc, Bh;
function dw() {
  if (Bh) return uc;
  Bh = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return uc = n, uc;
}
var cc, Wh;
function pw() {
  if (Wh) return cc;
  Wh = 1;
  var n = /* @__PURE__ */ dw();
  function o() {
  }
  function l() {
  }
  return l.resetWarningCache = o, cc = function() {
    function s(d, p, g, h, v, y) {
      if (y !== n) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    s.isRequired = s;
    function u() {
      return s;
    }
    var f = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: u,
      element: s,
      elementType: s,
      instanceOf: u,
      node: s,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: l,
      resetWarningCache: o
    };
    return f.PropTypes = f, f;
  }, cc;
}
var Uh;
function hw() {
  return Uh || (Uh = 1, ac.exports = /* @__PURE__ */ pw()()), ac.exports;
}
var mw = /* @__PURE__ */ hw();
const Qe = /* @__PURE__ */ vl(mw);
function $h(n, o) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    o && (s = s.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function or(n) {
  for (var o = 1; o < arguments.length; o++) {
    var l = arguments[o] != null ? arguments[o] : {};
    o % 2 ? $h(Object(l), !0).forEach(function(s) {
      ri(n, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : $h(Object(l)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return n;
}
function qs(n) {
  "@babel/helpers - typeof";
  return qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, qs(n);
}
function ri(n, o, l) {
  return o in n ? Object.defineProperty(n, o, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[o] = l, n;
}
function gw(n, o) {
  if (n == null) return {};
  var l = {}, s = Object.keys(n), u, f;
  for (f = 0; f < s.length; f++)
    u = s[f], !(o.indexOf(u) >= 0) && (l[u] = n[u]);
  return l;
}
function vw(n, o) {
  if (n == null) return {};
  var l = gw(n, o), s, u;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (u = 0; u < f.length; u++)
      s = f[u], !(o.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (l[s] = n[s]);
  }
  return l;
}
function Dc(n) {
  return yw(n) || ww(n) || xw(n) || Sw();
}
function yw(n) {
  if (Array.isArray(n)) return Hc(n);
}
function ww(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function xw(n, o) {
  if (n) {
    if (typeof n == "string") return Hc(n, o);
    var l = Object.prototype.toString.call(n).slice(8, -1);
    if (l === "Object" && n.constructor && (l = n.constructor.name), l === "Map" || l === "Set") return Array.from(n);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return Hc(n, o);
  }
}
function Hc(n, o) {
  (o == null || o > n.length) && (o = n.length);
  for (var l = 0, s = new Array(o); l < o; l++) s[l] = n[l];
  return s;
}
function Sw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kw(n) {
  var o, l = n.beat, s = n.fade, u = n.beatFade, f = n.bounce, d = n.shake, p = n.flash, g = n.spin, h = n.spinPulse, v = n.spinReverse, y = n.pulse, _ = n.fixedWidth, w = n.inverse, A = n.border, O = n.listItem, C = n.flip, E = n.size, I = n.rotation, j = n.pull, $ = (o = {
    "fa-beat": l,
    "fa-fade": s,
    "fa-beat-fade": u,
    "fa-bounce": f,
    "fa-shake": d,
    "fa-flash": p,
    "fa-spin": g,
    "fa-spin-reverse": v,
    "fa-spin-pulse": h,
    "fa-pulse": y,
    "fa-fw": _,
    "fa-inverse": w,
    "fa-border": A,
    "fa-li": O,
    "fa-flip": C === !0,
    "fa-flip-horizontal": C === "horizontal" || C === "both",
    "fa-flip-vertical": C === "vertical" || C === "both"
  }, ri(o, "fa-".concat(E), typeof E < "u" && E !== null), ri(o, "fa-rotate-".concat(I), typeof I < "u" && I !== null && I !== 0), ri(o, "fa-pull-".concat(j), typeof j < "u" && j !== null), ri(o, "fa-swap-opacity", n.swapOpacity), o);
  return Object.keys($).map(function(B) {
    return $[B] ? B : null;
  }).filter(function(B) {
    return B;
  });
}
function _w(n) {
  return n = n - 0, n === n;
}
function dg(n) {
  return _w(n) ? n : (n = n.replace(/[\-_\s]+(.)?/g, function(o, l) {
    return l ? l.toUpperCase() : "";
  }), n.substr(0, 1).toLowerCase() + n.substr(1));
}
var Cw = ["style"];
function Ew(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Tw(n) {
  return n.split(";").map(function(o) {
    return o.trim();
  }).filter(function(o) {
    return o;
  }).reduce(function(o, l) {
    var s = l.indexOf(":"), u = dg(l.slice(0, s)), f = l.slice(s + 1).trim();
    return u.startsWith("webkit") ? o[Ew(u)] = f : o[u] = f, o;
  }, {});
}
function pg(n, o) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof o == "string")
    return o;
  var s = (o.children || []).map(function(g) {
    return pg(n, g);
  }), u = Object.keys(o.attributes || {}).reduce(function(g, h) {
    var v = o.attributes[h];
    switch (h) {
      case "class":
        g.attrs.className = v, delete o.attributes.class;
        break;
      case "style":
        g.attrs.style = Tw(v);
        break;
      default:
        h.indexOf("aria-") === 0 || h.indexOf("data-") === 0 ? g.attrs[h.toLowerCase()] = v : g.attrs[dg(h)] = v;
    }
    return g;
  }, {
    attrs: {}
  }), f = l.style, d = f === void 0 ? {} : f, p = vw(l, Cw);
  return u.attrs.style = or(or({}, u.attrs.style), d), n.apply(void 0, [o.tag, or(or({}, u.attrs), p)].concat(Dc(s)));
}
var hg = !1;
try {
  hg = !0;
} catch {
}
function Iw() {
  if (!hg && console && typeof console.error == "function") {
    var n;
    (n = console).error.apply(n, arguments);
  }
}
function Vh(n) {
  if (n && qs(n) === "object" && n.prefix && n.iconName && n.icon)
    return n;
  if (Mc.icon)
    return Mc.icon(n);
  if (n === null)
    return null;
  if (n && qs(n) === "object" && n.prefix && n.iconName)
    return n;
  if (Array.isArray(n) && n.length === 2)
    return {
      prefix: n[0],
      iconName: n[1]
    };
  if (typeof n == "string")
    return {
      prefix: "fas",
      iconName: n
    };
}
function fc(n, o) {
  return Array.isArray(o) && o.length > 0 || !Array.isArray(o) && o ? ri({}, n, o) : {};
}
var Yh = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, Ir = /* @__PURE__ */ ae.forwardRef(function(n, o) {
  var l = or(or({}, Yh), n), s = l.icon, u = l.mask, f = l.symbol, d = l.className, p = l.title, g = l.titleId, h = l.maskId, v = Vh(s), y = fc("classes", [].concat(Dc(kw(l)), Dc((d || "").split(" ")))), _ = fc("transform", typeof l.transform == "string" ? Mc.transform(l.transform) : l.transform), w = fc("mask", Vh(u)), A = fw(v, or(or(or(or({}, y), _), w), {}, {
    symbol: f,
    title: p,
    titleId: g,
    maskId: h
  }));
  if (!A)
    return Iw("Could not find icon", v), null;
  var O = A.abstract, C = {
    ref: o
  };
  return Object.keys(l).forEach(function(E) {
    Yh.hasOwnProperty(E) || (C[E] = l[E]);
  }), Rw(O[0], C);
});
Ir.displayName = "FontAwesomeIcon";
Ir.propTypes = {
  beat: Qe.bool,
  border: Qe.bool,
  beatFade: Qe.bool,
  bounce: Qe.bool,
  className: Qe.string,
  fade: Qe.bool,
  flash: Qe.bool,
  mask: Qe.oneOfType([Qe.object, Qe.array, Qe.string]),
  maskId: Qe.string,
  fixedWidth: Qe.bool,
  inverse: Qe.bool,
  flip: Qe.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Qe.oneOfType([Qe.object, Qe.array, Qe.string]),
  listItem: Qe.bool,
  pull: Qe.oneOf(["right", "left"]),
  pulse: Qe.bool,
  rotation: Qe.oneOf([0, 90, 180, 270]),
  shake: Qe.bool,
  size: Qe.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: Qe.bool,
  spinPulse: Qe.bool,
  spinReverse: Qe.bool,
  symbol: Qe.oneOfType([Qe.bool, Qe.string]),
  title: Qe.string,
  titleId: Qe.string,
  transform: Qe.oneOfType([Qe.string, Qe.object]),
  swapOpacity: Qe.bool
};
var Rw = pg.bind(null, ae.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ow = {
  prefix: "fas",
  iconName: "list",
  icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]
}, Aw = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Pw = {
  prefix: "fas",
  iconName: "table-columns",
  icon: [512, 512, ["columns"], "f0db", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 160 0 0-256L64 160zm384 0l-160 0 0 256 160 0 0-256z"]
}, Lw = {
  prefix: "fas",
  iconName: "filter",
  icon: [512, 512, [], "f0b0", "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]
}, zw = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Nw = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, bw = {
  prefix: "fas",
  iconName: "border-all",
  icon: [448, 512, [], "f84c", "M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
var Vs = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
var jw = Vs.exports, Kh;
function Fw() {
  return Kh || (Kh = 1, function(n, o) {
    ((l, s) => {
      n.exports = s();
    })(jw, function l() {
      var s = typeof self < "u" ? self : typeof window < "u" ? window : s !== void 0 ? s : {}, u, f = !s.document && !!s.postMessage, d = s.IS_PAPA_WORKER || !1, p = {}, g = 0, h = {};
      function v(x) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(T) {
          var L = B(T);
          L.chunkSize = parseInt(L.chunkSize), T.step || T.chunk || (L.chunkSize = null), this._handle = new O(L), (this._handle.streamer = this)._config = L;
        }).call(this, x), this.parseChunk = function(T, L) {
          var V = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < V) {
            let ie = this._config.newline;
            ie || (Q = this._config.quoteChar || '"', ie = this._handle.guessLineEndings(T, Q)), T = [...T.split(ie).slice(V)].join(ie);
          }
          this.isFirstChunk && H(this._config.beforeFirstChunk) && (Q = this._config.beforeFirstChunk(T)) !== void 0 && (T = Q), this.isFirstChunk = !1, this._halted = !1;
          var V = this._partialLine + T, Q = (this._partialLine = "", this._handle.parse(V, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (T = Q.meta.cursor, V = (this._finished || (this._partialLine = V.substring(T - this._baseIndex), this._baseIndex = T), Q && Q.data && (this._rowCount += Q.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), d) s.postMessage({ results: Q, workerId: h.WORKER_ID, finished: V });
            else if (H(this._config.chunk) && !L) {
              if (this._config.chunk(Q, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = Q = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(Q.data), this._completeResults.errors = this._completeResults.errors.concat(Q.errors), this._completeResults.meta = Q.meta), this._completed || !V || !H(this._config.complete) || Q && Q.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), V || Q && Q.meta.paused || this._nextChunk(), Q;
          }
          this._halted = !0;
        }, this._sendError = function(T) {
          H(this._config.error) ? this._config.error(T) : d && this._config.error && s.postMessage({ workerId: h.WORKER_ID, error: T, finished: !1 });
        };
      }
      function y(x) {
        var T;
        (x = x || {}).chunkSize || (x.chunkSize = h.RemoteChunkSize), v.call(this, x), this._nextChunk = f ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(L) {
          this._input = L, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (T = new XMLHttpRequest(), this._config.withCredentials && (T.withCredentials = this._config.withCredentials), f || (T.onload = F(this._chunkLoaded, this), T.onerror = F(this._chunkError, this)), T.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !f), this._config.downloadRequestHeaders) {
              var L, V = this._config.downloadRequestHeaders;
              for (L in V) T.setRequestHeader(L, V[L]);
            }
            var Q;
            this._config.chunkSize && (Q = this._start + this._config.chunkSize - 1, T.setRequestHeader("Range", "bytes=" + this._start + "-" + Q));
            try {
              T.send(this._config.downloadRequestBody);
            } catch (ie) {
              this._chunkError(ie.message);
            }
            f && T.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          T.readyState === 4 && (T.status < 200 || 400 <= T.status ? this._chunkError() : (this._start += this._config.chunkSize || T.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((L) => (L = L.getResponseHeader("Content-Range")) !== null ? parseInt(L.substring(L.lastIndexOf("/") + 1)) : -1)(T), this.parseChunk(T.responseText)));
        }, this._chunkError = function(L) {
          L = T.statusText || L, this._sendError(new Error(L));
        };
      }
      function _(x) {
        (x = x || {}).chunkSize || (x.chunkSize = h.LocalChunkSize), v.call(this, x);
        var T, L, V = typeof FileReader < "u";
        this.stream = function(Q) {
          this._input = Q, L = Q.slice || Q.webkitSlice || Q.mozSlice, V ? ((T = new FileReader()).onload = F(this._chunkLoaded, this), T.onerror = F(this._chunkError, this)) : T = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var Q = this._input, ie = (this._config.chunkSize && (ie = Math.min(this._start + this._config.chunkSize, this._input.size), Q = L.call(Q, this._start, ie)), T.readAsText(Q, this._config.encoding));
          V || this._chunkLoaded({ target: { result: ie } });
        }, this._chunkLoaded = function(Q) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(Q.target.result);
        }, this._chunkError = function() {
          this._sendError(T.error);
        };
      }
      function w(x) {
        var T;
        v.call(this, x = x || {}), this.stream = function(L) {
          return T = L, this._nextChunk();
        }, this._nextChunk = function() {
          var L, V;
          if (!this._finished) return L = this._config.chunkSize, T = L ? (V = T.substring(0, L), T.substring(L)) : (V = T, ""), this._finished = !T, this.parseChunk(V);
        };
      }
      function A(x) {
        v.call(this, x = x || {});
        var T = [], L = !0, V = !1;
        this.pause = function() {
          v.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          v.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(Q) {
          this._input = Q, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          V && T.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), T.length ? this.parseChunk(T.shift()) : L = !0;
        }, this._streamData = F(function(Q) {
          try {
            T.push(typeof Q == "string" ? Q : Q.toString(this._config.encoding)), L && (L = !1, this._checkIsFinished(), this.parseChunk(T.shift()));
          } catch (ie) {
            this._streamError(ie);
          }
        }, this), this._streamError = F(function(Q) {
          this._streamCleanUp(), this._sendError(Q);
        }, this), this._streamEnd = F(function() {
          this._streamCleanUp(), V = !0, this._streamData("");
        }, this), this._streamCleanUp = F(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function O(x) {
        var T, L, V, Q, ie = Math.pow(2, 53), K = -ie, fe = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, we = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, ne = this, U = 0, Y = 0, k = !1, z = !1, G = [], q = { data: [], errors: [], meta: {} };
        function de(b) {
          return x.skipEmptyLines === "greedy" ? b.join("").trim() === "" : b.length === 1 && b[0].length === 0;
        }
        function ke() {
          if (q && V && (Ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + h.DefaultDelimiter + "'"), V = !1), x.skipEmptyLines && (q.data = q.data.filter(function(Ie) {
            return !de(Ie);
          })), ge()) {
            let Ie = function(Be, Ue) {
              H(x.transformHeader) && (Be = x.transformHeader(Be, Ue)), G.push(Be);
            };
            var pe = Ie;
            if (q) if (Array.isArray(q.data[0])) {
              for (var b = 0; ge() && b < q.data.length; b++) q.data[b].forEach(Ie);
              q.data.splice(0, 1);
            } else q.data.forEach(Ie);
          }
          function oe(Ie, Be) {
            for (var Ue = x.header ? {} : [], Re = 0; Re < Ie.length; Re++) {
              var ze = Re, Ve = Ie[Re], Ve = ((Ne, _e) => ((Ge) => (x.dynamicTypingFunction && x.dynamicTyping[Ge] === void 0 && (x.dynamicTyping[Ge] = x.dynamicTypingFunction(Ge)), (x.dynamicTyping[Ge] || x.dynamicTyping) === !0))(Ne) ? _e === "true" || _e === "TRUE" || _e !== "false" && _e !== "FALSE" && (((Ge) => {
                if (fe.test(Ge) && (Ge = parseFloat(Ge), K < Ge && Ge < ie))
                  return 1;
              })(_e) ? parseFloat(_e) : we.test(_e) ? new Date(_e) : _e === "" ? null : _e) : _e)(ze = x.header ? Re >= G.length ? "__parsed_extra" : G[Re] : ze, Ve = x.transform ? x.transform(Ve, ze) : Ve);
              ze === "__parsed_extra" ? (Ue[ze] = Ue[ze] || [], Ue[ze].push(Ve)) : Ue[ze] = Ve;
            }
            return x.header && (Re > G.length ? Ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + G.length + " fields but parsed " + Re, Y + Be) : Re < G.length && Ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + G.length + " fields but parsed " + Re, Y + Be)), Ue;
          }
          var xe;
          q && (x.header || x.dynamicTyping || x.transform) && (xe = 1, !q.data.length || Array.isArray(q.data[0]) ? (q.data = q.data.map(oe), xe = q.data.length) : q.data = oe(q.data, 0), x.header && q.meta && (q.meta.fields = G), Y += xe);
        }
        function ge() {
          return x.header && G.length === 0;
        }
        function Ee(b, oe, xe, pe) {
          b = { type: b, code: oe, message: xe }, pe !== void 0 && (b.row = pe), q.errors.push(b);
        }
        H(x.step) && (Q = x.step, x.step = function(b) {
          q = b, ge() ? ke() : (ke(), q.data.length !== 0 && (U += b.data.length, x.preview && U > x.preview ? L.abort() : (q.data = q.data[0], Q(q, ne))));
        }), this.parse = function(b, oe, xe) {
          var pe = x.quoteChar || '"', pe = (x.newline || (x.newline = this.guessLineEndings(b, pe)), V = !1, x.delimiter ? H(x.delimiter) && (x.delimiter = x.delimiter(b), q.meta.delimiter = x.delimiter) : ((pe = ((Ie, Be, Ue, Re, ze) => {
            var Ve, Ne, _e, Ge;
            ze = ze || [",", "	", "|", ";", h.RECORD_SEP, h.UNIT_SEP];
            for (var St = 0; St < ze.length; St++) {
              for (var kt, Nt = ze[St], tt = 0, it = 0, Xe = 0, lt = (_e = void 0, new E({ comments: Re, delimiter: Nt, newline: Be, preview: 10 }).parse(Ie)), pt = 0; pt < lt.data.length; pt++) Ue && de(lt.data[pt]) ? Xe++ : (kt = lt.data[pt].length, it += kt, _e === void 0 ? _e = kt : 0 < kt && (tt += Math.abs(kt - _e), _e = kt));
              0 < lt.data.length && (it /= lt.data.length - Xe), (Ne === void 0 || tt <= Ne) && (Ge === void 0 || Ge < it) && 1.99 < it && (Ne = tt, Ve = Nt, Ge = it);
            }
            return { successful: !!(x.delimiter = Ve), bestDelimiter: Ve };
          })(b, x.newline, x.skipEmptyLines, x.comments, x.delimitersToGuess)).successful ? x.delimiter = pe.bestDelimiter : (V = !0, x.delimiter = h.DefaultDelimiter), q.meta.delimiter = x.delimiter), B(x));
          return x.preview && x.header && pe.preview++, T = b, L = new E(pe), q = L.parse(T, oe, xe), ke(), k ? { meta: { paused: !0 } } : q || { meta: { paused: !1 } };
        }, this.paused = function() {
          return k;
        }, this.pause = function() {
          k = !0, L.abort(), T = H(x.chunk) ? "" : T.substring(L.getCharIndex());
        }, this.resume = function() {
          ne.streamer._halted ? (k = !1, ne.streamer.parseChunk(T, !0)) : setTimeout(ne.resume, 3);
        }, this.aborted = function() {
          return z;
        }, this.abort = function() {
          z = !0, L.abort(), q.meta.aborted = !0, H(x.complete) && x.complete(q), T = "";
        }, this.guessLineEndings = function(Ie, pe) {
          Ie = Ie.substring(0, 1048576);
          var pe = new RegExp(C(pe) + "([^]*?)" + C(pe), "gm"), xe = (Ie = Ie.replace(pe, "")).split("\r"), pe = Ie.split(`
`), Ie = 1 < pe.length && pe[0].length < xe[0].length;
          if (xe.length === 1 || Ie) return `
`;
          for (var Be = 0, Ue = 0; Ue < xe.length; Ue++) xe[Ue][0] === `
` && Be++;
          return Be >= xe.length / 2 ? `\r
` : "\r";
        };
      }
      function C(x) {
        return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function E(x) {
        var T = (x = x || {}).delimiter, L = x.newline, V = x.comments, Q = x.step, ie = x.preview, K = x.fastMode, fe = null, we = !1, ne = x.quoteChar == null ? '"' : x.quoteChar, U = ne;
        if (x.escapeChar !== void 0 && (U = x.escapeChar), (typeof T != "string" || -1 < h.BAD_DELIMITERS.indexOf(T)) && (T = ","), V === T) throw new Error("Comment character same as delimiter");
        V === !0 ? V = "#" : (typeof V != "string" || -1 < h.BAD_DELIMITERS.indexOf(V)) && (V = !1), L !== `
` && L !== "\r" && L !== `\r
` && (L = `
`);
        var Y = 0, k = !1;
        this.parse = function(z, G, q) {
          if (typeof z != "string") throw new Error("Input must be a string");
          var de = z.length, ke = T.length, ge = L.length, Ee = V.length, b = H(Q), oe = [], xe = [], pe = [], Ie = Y = 0;
          if (!z) return tt();
          if (K || K !== !1 && z.indexOf(ne) === -1) {
            for (var Be = z.split(L), Ue = 0; Ue < Be.length; Ue++) {
              if (pe = Be[Ue], Y += pe.length, Ue !== Be.length - 1) Y += L.length;
              else if (q) return tt();
              if (!V || pe.substring(0, Ee) !== V) {
                if (b) {
                  if (oe = [], Ge(pe.split(T)), it(), k) return tt();
                } else Ge(pe.split(T));
                if (ie && ie <= Ue) return oe = oe.slice(0, ie), tt(!0);
              }
            }
            return tt();
          }
          for (var Re = z.indexOf(T, Y), ze = z.indexOf(L, Y), Ve = new RegExp(C(U) + C(ne), "g"), Ne = z.indexOf(ne, Y); ; ) if (z[Y] === ne) for (Ne = Y, Y++; ; ) {
            if ((Ne = z.indexOf(ne, Ne + 1)) === -1) return q || xe.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: oe.length, index: Y }), kt();
            if (Ne === de - 1) return kt(z.substring(Y, Ne).replace(Ve, ne));
            if (ne === U && z[Ne + 1] === U) Ne++;
            else if (ne === U || Ne === 0 || z[Ne - 1] !== U) {
              Re !== -1 && Re < Ne + 1 && (Re = z.indexOf(T, Ne + 1));
              var _e = St((ze = ze !== -1 && ze < Ne + 1 ? z.indexOf(L, Ne + 1) : ze) === -1 ? Re : Math.min(Re, ze));
              if (z.substr(Ne + 1 + _e, ke) === T) {
                pe.push(z.substring(Y, Ne).replace(Ve, ne)), z[Y = Ne + 1 + _e + ke] !== ne && (Ne = z.indexOf(ne, Y)), Re = z.indexOf(T, Y), ze = z.indexOf(L, Y);
                break;
              }
              if (_e = St(ze), z.substring(Ne + 1 + _e, Ne + 1 + _e + ge) === L) {
                if (pe.push(z.substring(Y, Ne).replace(Ve, ne)), Nt(Ne + 1 + _e + ge), Re = z.indexOf(T, Y), Ne = z.indexOf(ne, Y), b && (it(), k)) return tt();
                if (ie && oe.length >= ie) return tt(!0);
                break;
              }
              xe.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: oe.length, index: Y }), Ne++;
            }
          }
          else if (V && pe.length === 0 && z.substring(Y, Y + Ee) === V) {
            if (ze === -1) return tt();
            Y = ze + ge, ze = z.indexOf(L, Y), Re = z.indexOf(T, Y);
          } else if (Re !== -1 && (Re < ze || ze === -1)) pe.push(z.substring(Y, Re)), Y = Re + ke, Re = z.indexOf(T, Y);
          else {
            if (ze === -1) break;
            if (pe.push(z.substring(Y, ze)), Nt(ze + ge), b && (it(), k)) return tt();
            if (ie && oe.length >= ie) return tt(!0);
          }
          return kt();
          function Ge(Xe) {
            oe.push(Xe), Ie = Y;
          }
          function St(Xe) {
            var lt = 0;
            return lt = Xe !== -1 && (Xe = z.substring(Ne + 1, Xe)) && Xe.trim() === "" ? Xe.length : lt;
          }
          function kt(Xe) {
            return q || (Xe === void 0 && (Xe = z.substring(Y)), pe.push(Xe), Y = de, Ge(pe), b && it()), tt();
          }
          function Nt(Xe) {
            Y = Xe, Ge(pe), pe = [], ze = z.indexOf(L, Y);
          }
          function tt(Xe) {
            if (x.header && !G && oe.length && !we) {
              var lt = oe[0], pt = /* @__PURE__ */ Object.create(null), Kt = new Set(lt);
              let sn = !1;
              for (let Et = 0; Et < lt.length; Et++) {
                let Tt = lt[Et];
                if (pt[Tt = H(x.transformHeader) ? x.transformHeader(Tt, Et) : Tt]) {
                  let Lt, ut = pt[Tt];
                  for (; Lt = Tt + "_" + ut, ut++, Kt.has(Lt); ) ;
                  Kt.add(Lt), lt[Et] = Lt, pt[Tt]++, sn = !0, (fe = fe === null ? {} : fe)[Lt] = Tt;
                } else pt[Tt] = 1, lt[Et] = Tt;
                Kt.add(Tt);
              }
              sn && console.warn("Duplicate headers found and renamed."), we = !0;
            }
            return { data: oe, errors: xe, meta: { delimiter: T, linebreak: L, aborted: k, truncated: !!Xe, cursor: Ie + (G || 0), renamedHeaders: fe } };
          }
          function it() {
            Q(tt()), oe = [], xe = [];
          }
        }, this.abort = function() {
          k = !0;
        }, this.getCharIndex = function() {
          return Y;
        };
      }
      function I(x) {
        var T = x.data, L = p[T.workerId], V = !1;
        if (T.error) L.userError(T.error, T.file);
        else if (T.results && T.results.data) {
          var Q = { abort: function() {
            V = !0, j(T.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: $, resume: $ };
          if (H(L.userStep)) {
            for (var ie = 0; ie < T.results.data.length && (L.userStep({ data: T.results.data[ie], errors: T.results.errors, meta: T.results.meta }, Q), !V); ie++) ;
            delete T.results;
          } else H(L.userChunk) && (L.userChunk(T.results, Q, T.file), delete T.results);
        }
        T.finished && !V && j(T.workerId, T.results);
      }
      function j(x, T) {
        var L = p[x];
        H(L.userComplete) && L.userComplete(T), L.terminate(), delete p[x];
      }
      function $() {
        throw new Error("Not implemented.");
      }
      function B(x) {
        if (typeof x != "object" || x === null) return x;
        var T, L = Array.isArray(x) ? [] : {};
        for (T in x) L[T] = B(x[T]);
        return L;
      }
      function F(x, T) {
        return function() {
          x.apply(T, arguments);
        };
      }
      function H(x) {
        return typeof x == "function";
      }
      return h.parse = function(x, T) {
        var L = (T = T || {}).dynamicTyping || !1;
        if (H(L) && (T.dynamicTypingFunction = L, L = {}), T.dynamicTyping = L, T.transform = !!H(T.transform) && T.transform, !T.worker || !h.WORKERS_SUPPORTED) return L = null, h.NODE_STREAM_INPUT, typeof x == "string" ? (x = ((V) => V.charCodeAt(0) !== 65279 ? V : V.slice(1))(x), L = new (T.download ? y : w)(T)) : x.readable === !0 && H(x.read) && H(x.on) ? L = new A(T) : (s.File && x instanceof File || x instanceof Object) && (L = new _(T)), L.stream(x);
        (L = (() => {
          var V;
          return !!h.WORKERS_SUPPORTED && (V = (() => {
            var Q = s.URL || s.webkitURL || null, ie = l.toString();
            return h.BLOB_URL || (h.BLOB_URL = Q.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", ie, ")();"], { type: "text/javascript" })));
          })(), (V = new s.Worker(V)).onmessage = I, V.id = g++, p[V.id] = V);
        })()).userStep = T.step, L.userChunk = T.chunk, L.userComplete = T.complete, L.userError = T.error, T.step = H(T.step), T.chunk = H(T.chunk), T.complete = H(T.complete), T.error = H(T.error), delete T.worker, L.postMessage({ input: x, config: T, workerId: L.id });
      }, h.unparse = function(x, T) {
        var L = !1, V = !0, Q = ",", ie = `\r
`, K = '"', fe = K + K, we = !1, ne = null, U = !1, Y = ((() => {
          if (typeof T == "object") {
            if (typeof T.delimiter != "string" || h.BAD_DELIMITERS.filter(function(G) {
              return T.delimiter.indexOf(G) !== -1;
            }).length || (Q = T.delimiter), typeof T.quotes != "boolean" && typeof T.quotes != "function" && !Array.isArray(T.quotes) || (L = T.quotes), typeof T.skipEmptyLines != "boolean" && typeof T.skipEmptyLines != "string" || (we = T.skipEmptyLines), typeof T.newline == "string" && (ie = T.newline), typeof T.quoteChar == "string" && (K = T.quoteChar), typeof T.header == "boolean" && (V = T.header), Array.isArray(T.columns)) {
              if (T.columns.length === 0) throw new Error("Option columns is empty");
              ne = T.columns;
            }
            T.escapeChar !== void 0 && (fe = T.escapeChar + K), T.escapeFormulae instanceof RegExp ? U = T.escapeFormulae : typeof T.escapeFormulae == "boolean" && T.escapeFormulae && (U = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(C(K), "g"));
        if (typeof x == "string" && (x = JSON.parse(x)), Array.isArray(x)) {
          if (!x.length || Array.isArray(x[0])) return k(null, x, we);
          if (typeof x[0] == "object") return k(ne || Object.keys(x[0]), x, we);
        } else if (typeof x == "object") return typeof x.data == "string" && (x.data = JSON.parse(x.data)), Array.isArray(x.data) && (x.fields || (x.fields = x.meta && x.meta.fields || ne), x.fields || (x.fields = Array.isArray(x.data[0]) ? x.fields : typeof x.data[0] == "object" ? Object.keys(x.data[0]) : []), Array.isArray(x.data[0]) || typeof x.data[0] == "object" || (x.data = [x.data])), k(x.fields || [], x.data || [], we);
        throw new Error("Unable to serialize unrecognized input");
        function k(G, q, de) {
          var ke = "", ge = (typeof G == "string" && (G = JSON.parse(G)), typeof q == "string" && (q = JSON.parse(q)), Array.isArray(G) && 0 < G.length), Ee = !Array.isArray(q[0]);
          if (ge && V) {
            for (var b = 0; b < G.length; b++) 0 < b && (ke += Q), ke += z(G[b], b);
            0 < q.length && (ke += ie);
          }
          for (var oe = 0; oe < q.length; oe++) {
            var xe = (ge ? G : q[oe]).length, pe = !1, Ie = ge ? Object.keys(q[oe]).length === 0 : q[oe].length === 0;
            if (de && !ge && (pe = de === "greedy" ? q[oe].join("").trim() === "" : q[oe].length === 1 && q[oe][0].length === 0), de === "greedy" && ge) {
              for (var Be = [], Ue = 0; Ue < xe; Ue++) {
                var Re = Ee ? G[Ue] : Ue;
                Be.push(q[oe][Re]);
              }
              pe = Be.join("").trim() === "";
            }
            if (!pe) {
              for (var ze = 0; ze < xe; ze++) {
                0 < ze && !Ie && (ke += Q);
                var Ve = ge && Ee ? G[ze] : ze;
                ke += z(q[oe][Ve], ze);
              }
              oe < q.length - 1 && (!de || 0 < xe && !Ie) && (ke += ie);
            }
          }
          return ke;
        }
        function z(G, q) {
          var de, ke;
          return G == null ? "" : G.constructor === Date ? JSON.stringify(G).slice(1, 25) : (ke = !1, U && typeof G == "string" && U.test(G) && (G = "'" + G, ke = !0), de = G.toString().replace(Y, fe), (ke = ke || L === !0 || typeof L == "function" && L(G, q) || Array.isArray(L) && L[q] || ((ge, Ee) => {
            for (var b = 0; b < Ee.length; b++) if (-1 < ge.indexOf(Ee[b])) return !0;
            return !1;
          })(de, h.BAD_DELIMITERS) || -1 < de.indexOf(Q) || de.charAt(0) === " " || de.charAt(de.length - 1) === " ") ? K + de + K : de);
        }
      }, h.RECORD_SEP = "", h.UNIT_SEP = "", h.BYTE_ORDER_MARK = "\uFEFF", h.BAD_DELIMITERS = ["\r", `
`, '"', h.BYTE_ORDER_MARK], h.WORKERS_SUPPORTED = !f && !!s.Worker, h.NODE_STREAM_INPUT = 1, h.LocalChunkSize = 10485760, h.RemoteChunkSize = 5242880, h.DefaultDelimiter = ",", h.Parser = E, h.ParserHandle = O, h.NetworkStreamer = y, h.FileStreamer = _, h.StringStreamer = w, h.ReadableStreamStreamer = A, s.jQuery && ((u = s.jQuery).fn.parse = function(x) {
        var T = x.config || {}, L = [];
        return this.each(function(ie) {
          if (!(u(this).prop("tagName").toUpperCase() === "INPUT" && u(this).attr("type").toLowerCase() === "file" && s.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var K = 0; K < this.files.length; K++) L.push({ file: this.files[K], inputElem: this, instanceConfig: u.extend({}, T) });
        }), V(), this;
        function V() {
          if (L.length === 0) H(x.complete) && x.complete();
          else {
            var ie, K, fe, we, ne = L[0];
            if (H(x.before)) {
              var U = x.before(ne.file, ne.inputElem);
              if (typeof U == "object") {
                if (U.action === "abort") return ie = "AbortError", K = ne.file, fe = ne.inputElem, we = U.reason, void (H(x.error) && x.error({ name: ie }, K, fe, we));
                if (U.action === "skip") return void Q();
                typeof U.config == "object" && (ne.instanceConfig = u.extend(ne.instanceConfig, U.config));
              } else if (U === "skip") return void Q();
            }
            var Y = ne.instanceConfig.complete;
            ne.instanceConfig.complete = function(k) {
              H(Y) && Y(k, ne.file, ne.inputElem), Q();
            }, h.parse(ne.file, ne.instanceConfig);
          }
        }
        function Q() {
          L.splice(0, 1), V();
        }
      }), d && (s.onmessage = function(x) {
        x = x.data, h.WORKER_ID === void 0 && x && (h.WORKER_ID = x.workerId), typeof x.input == "string" ? s.postMessage({ workerId: h.WORKER_ID, results: h.parse(x.input, x.config), finished: !0 }) : (s.File && x.input instanceof File || x.input instanceof Object) && (x = h.parse(x.input, x.config)) && s.postMessage({ workerId: h.WORKER_ID, results: x, finished: !0 });
      }), (y.prototype = Object.create(v.prototype)).constructor = y, (_.prototype = Object.create(v.prototype)).constructor = _, (w.prototype = Object.create(w.prototype)).constructor = w, (A.prototype = Object.create(v.prototype)).constructor = A, h;
    });
  }(Vs)), Vs.exports;
}
var Mw = Fw();
const Dw = /* @__PURE__ */ vl(Mw), Hw = "_container_1chpv_1", Bw = "_main_1chpv_9", Ww = "_title_1chpv_15", Uw = "_search_1chpv_22", $w = "_loader_1chpv_30", Vw = "_buttons_1chpv_34", Yw = "_active_1chpv_55", Kw = "_icon_1chpv_60", rr = {
  container: Hw,
  main: Bw,
  title: Ww,
  search: Uw,
  loader: $w,
  buttons: Vw,
  active: Yw,
  icon: Kw
}, Qw = "_search_qqeb0_1", Gw = {
  search: Qw
};
function qw({ changeHandler: n }) {
  return /* @__PURE__ */ D.jsx("input", { className: Gw.search, name: "search", type: "text", autoComplete: "off", placeholder: "🔍  Search data elements...", onChange: n });
}
const Xw = "_content_bbdxn_1", Zw = "_count_bbdxn_11", Qh = {
  content: Xw,
  count: Zw
};
var Jw = Lm();
const ex = /* @__PURE__ */ vl(Jw), ua = 0, io = 1, di = 2, mg = 4;
function Gh(n) {
  return () => n;
}
function tx(n) {
  n();
}
function cl(n, o) {
  return (l) => n(o(l));
}
function qh(n, o) {
  return () => n(o);
}
function nx(n, o) {
  return (l) => n(o, l);
}
function cf(n) {
  return n !== void 0;
}
function rx(...n) {
  return () => {
    n.map(tx);
  };
}
function pi() {
}
function ca(n, o) {
  return o(n), n;
}
function ox(n, o) {
  return o(n);
}
function yt(...n) {
  return n;
}
function ot(n, o) {
  return n(io, o);
}
function We(n, o) {
  n(ua, o);
}
function ff(n) {
  n(di);
}
function Ut(n) {
  return n(mg);
}
function Te(n, o) {
  return ot(n, nx(o, ua));
}
function cr(n, o) {
  const l = n(io, (s) => {
    l(), o(s);
  });
  return l;
}
function Xh(n) {
  let o, l;
  return (s) => (u) => {
    o = u, l && clearTimeout(l), l = setTimeout(() => {
      s(o);
    }, n);
  };
}
function gg(n, o) {
  return n === o;
}
function gt(n = gg) {
  let o;
  return (l) => (s) => {
    n(o, s) || (o = s, l(s));
  };
}
function Fe(n) {
  return (o) => (l) => {
    n(l) && o(l);
  };
}
function me(n) {
  return (o) => cl(o, n);
}
function ir(n) {
  return (o) => () => {
    o(n);
  };
}
function ee(n, ...o) {
  const l = ix(...o);
  return (s, u) => {
    switch (s) {
      case di:
        ff(n);
        return;
      case io:
        return ot(n, l(u));
    }
  };
}
function ar(n, o) {
  return (l) => (s) => {
    l(o = n(o, s));
  };
}
function ai(n) {
  return (o) => (l) => {
    n > 0 ? n-- : o(l);
  };
}
function Zr(n) {
  let o = null, l;
  return (s) => (u) => {
    o = u, !l && (l = setTimeout(() => {
      l = void 0, s(o);
    }, n));
  };
}
function $e(...n) {
  const o = new Array(n.length);
  let l = 0, s = null;
  const u = Math.pow(2, n.length) - 1;
  return n.forEach((f, d) => {
    const p = Math.pow(2, d);
    ot(f, (g) => {
      const h = l;
      l = l | p, o[d] = g, h !== u && l === u && s && (s(), s = null);
    });
  }), (f) => (d) => {
    const p = () => {
      f([d].concat(o));
    };
    l === u ? p() : s = p;
  };
}
function ix(...n) {
  return (o) => n.reduceRight(ox, o);
}
function lx(n) {
  let o, l;
  const s = () => o == null ? void 0 : o();
  return function(u, f) {
    switch (u) {
      case io:
        return f ? l === f ? void 0 : (s(), l = f, o = ot(n, f), o) : (s(), pi);
      case di:
        s(), l = null;
        return;
    }
  };
}
function se(n) {
  let o = n;
  const l = qe();
  return (s, u) => {
    switch (s) {
      case ua:
        o = u;
        break;
      case io: {
        u(o);
        break;
      }
      case mg:
        return o;
    }
    return l(s, u);
  };
}
function Zt(n, o) {
  return ca(se(o), (l) => Te(n, l));
}
function qe() {
  const n = [];
  return (o, l) => {
    switch (o) {
      case ua:
        n.slice().forEach((s) => {
          s(l);
        });
        return;
      case di:
        n.splice(0, n.length);
        return;
      case io:
        return n.push(l), () => {
          const s = n.indexOf(l);
          s > -1 && n.splice(s, 1);
        };
    }
  };
}
function kn(n) {
  return ca(qe(), (o) => Te(n, o));
}
function nt(n, o = [], { singleton: l } = { singleton: !0 }) {
  return {
    constructor: n,
    dependencies: o,
    id: sx(),
    singleton: l
  };
}
const sx = () => Symbol();
function ax(n) {
  const o = /* @__PURE__ */ new Map(), l = ({ constructor: s, dependencies: u, id: f, singleton: d }) => {
    if (d && o.has(f))
      return o.get(f);
    const p = s(u.map((g) => l(g)));
    return d && o.set(f, p), p;
  };
  return l(n);
}
function Dt(...n) {
  const o = qe(), l = new Array(n.length);
  let s = 0;
  const u = Math.pow(2, n.length) - 1;
  return n.forEach((f, d) => {
    const p = Math.pow(2, d);
    ot(f, (g) => {
      l[d] = g, s = s | p, s === u && We(o, l);
    });
  }), function(f, d) {
    switch (f) {
      case di: {
        ff(o);
        return;
      }
      case io:
        return s === u && d(l), ot(o, d);
    }
  };
}
function Me(n, o = gg) {
  return ee(n, gt(o));
}
function Zh(...n) {
  return function(o, l) {
    switch (o) {
      case di:
        return;
      case io:
        return rx(...n.map((s) => ot(s, l)));
    }
  };
}
var mn = /* @__PURE__ */ ((n) => (n[n.DEBUG = 0] = "DEBUG", n[n.INFO = 1] = "INFO", n[n.WARN = 2] = "WARN", n[n.ERROR = 3] = "ERROR", n))(mn || {});
const ux = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, cx = () => typeof globalThis > "u" ? window : globalThis, lo = nt(
  () => {
    const n = se(
      3
      /* ERROR */
    );
    return {
      log: se((o, l, s = 1) => {
        var u;
        const f = (u = cx().VIRTUOSO_LOG_LEVEL) != null ? u : Ut(n);
        s >= f && console[ux[s]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          o,
          l
        );
      }),
      logLevel: n
    };
  },
  [],
  { singleton: !0 }
);
function fr(n, o, l) {
  return df(n, o, l).callbackRef;
}
function df(n, o, l) {
  const s = ae.useRef(null);
  let u = (d) => {
  };
  const f = ae.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((d) => {
    const p = () => {
      const g = d[0].target;
      g.offsetParent !== null && n(g);
    };
    l ? p() : requestAnimationFrame(p);
  }) : null, [n, l]);
  return u = (d) => {
    d && o ? (f == null || f.observe(d), s.current = d) : (s.current && (f == null || f.unobserve(s.current)), s.current = null);
  }, { callbackRef: u, ref: s };
}
function vg(n, o, l, s, u, f, d, p, g) {
  const h = ae.useCallback(
    (v) => {
      const y = fx(v.children, o, p ? "offsetWidth" : "offsetHeight", u);
      let _ = v.parentElement;
      for (; !_.dataset.virtuosoScroller; )
        _ = _.parentElement;
      const w = _.lastElementChild.dataset.viewportType === "window";
      let A;
      w && (A = _.ownerDocument.defaultView);
      const O = d ? p ? d.scrollLeft : d.scrollTop : w ? p ? A.scrollX || A.document.documentElement.scrollLeft : A.scrollY || A.document.documentElement.scrollTop : p ? _.scrollLeft : _.scrollTop, C = d ? p ? d.scrollWidth : d.scrollHeight : w ? p ? A.document.documentElement.scrollWidth : A.document.documentElement.scrollHeight : p ? _.scrollWidth : _.scrollHeight, E = d ? p ? d.offsetWidth : d.offsetHeight : w ? p ? A.innerWidth : A.innerHeight : p ? _.offsetWidth : _.offsetHeight;
      s({
        scrollHeight: C,
        scrollTop: Math.max(O, 0),
        viewportHeight: E
      }), f == null || f(
        p ? Jh("column-gap", getComputedStyle(v).columnGap, u) : Jh("row-gap", getComputedStyle(v).rowGap, u)
      ), y !== null && n(y);
    },
    [n, o, u, f, d, s, p]
  );
  return df(h, l, g);
}
function fx(n, o, l, s) {
  const u = n.length;
  if (u === 0)
    return null;
  const f = [];
  for (let d = 0; d < u; d++) {
    const p = n.item(d);
    if (p.dataset.index === void 0)
      continue;
    const g = parseInt(p.dataset.index), h = parseFloat(p.dataset.knownSize), v = o(p, l);
    if (v === 0 && s("Zero-sized element, this should not happen", { child: p }, mn.ERROR), v === h)
      continue;
    const y = f[f.length - 1];
    f.length === 0 || y.size !== v || y.endIndex !== g - 1 ? f.push({ endIndex: g, size: v, startIndex: g }) : f[f.length - 1].endIndex++;
  }
  return f;
}
function Jh(n, o, l) {
  return o !== "normal" && !(o != null && o.endsWith("px")) && l(`${n} was not resolved to pixel value correctly`, o, mn.WARN), o === "normal" ? 0 : parseInt(o ?? "0", 10);
}
function pf(n, o, l) {
  const s = ae.useRef(null), u = ae.useCallback(
    (g) => {
      if (!(g != null && g.offsetParent))
        return;
      const h = g.getBoundingClientRect(), v = h.width;
      let y, _;
      if (o) {
        const w = o.getBoundingClientRect(), A = h.top - w.top;
        _ = w.height - Math.max(0, A), y = A + o.scrollTop;
      } else {
        const w = d.current.ownerDocument.defaultView;
        _ = w.innerHeight - Math.max(0, h.top), y = h.top + w.scrollY;
      }
      s.current = {
        offsetTop: y,
        visibleHeight: _,
        visibleWidth: v
      }, n(s.current);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, o]
  ), { callbackRef: f, ref: d } = df(u, !0, l), p = ae.useCallback(() => {
    u(d.current);
  }, [u, d]);
  return ae.useEffect(() => {
    var g;
    if (o) {
      o.addEventListener("scroll", p);
      const h = new ResizeObserver(() => {
        requestAnimationFrame(p);
      });
      return h.observe(o), () => {
        o.removeEventListener("scroll", p), h.unobserve(o);
      };
    } else {
      const h = (g = d.current) == null ? void 0 : g.ownerDocument.defaultView;
      return h == null || h.addEventListener("scroll", p), h == null || h.addEventListener("resize", p), () => {
        h == null || h.removeEventListener("scroll", p), h == null || h.removeEventListener("resize", p);
      };
    }
  }, [p, o, d]), f;
}
const ln = nt(
  () => {
    const n = qe(), o = qe(), l = se(0), s = qe(), u = se(0), f = qe(), d = qe(), p = se(0), g = se(0), h = se(0), v = se(0), y = qe(), _ = qe(), w = se(!1), A = se(!1), O = se(!1);
    return Te(
      ee(
        n,
        me(({ scrollTop: C }) => C)
      ),
      o
    ), Te(
      ee(
        n,
        me(({ scrollHeight: C }) => C)
      ),
      d
    ), Te(o, u), {
      deviation: l,
      fixedFooterHeight: h,
      fixedHeaderHeight: g,
      footerHeight: v,
      headerHeight: p,
      horizontalDirection: A,
      scrollBy: _,
      // input
      scrollContainerState: n,
      scrollHeight: d,
      scrollingInProgress: w,
      // signals
      scrollTo: y,
      scrollTop: o,
      skipAnimationFrameInResizeObserver: O,
      smoothScrollTargetReached: s,
      // state
      statefulScrollTop: u,
      viewportHeight: f
    };
  },
  [],
  { singleton: !0 }
), fl = { lvl: 0 };
function yg(n, o) {
  const l = n.length;
  if (l === 0)
    return [];
  let { index: s, value: u } = o(n[0]);
  const f = [];
  for (let d = 1; d < l; d++) {
    const { index: p, value: g } = o(n[d]);
    f.push({ end: p - 1, start: s, value: u }), s = p, u = g;
  }
  return f.push({ end: 1 / 0, start: s, value: u }), f;
}
function at(n) {
  return n === fl;
}
function dl(n, o) {
  if (!at(n))
    return o === n.k ? n.v : o < n.k ? dl(n.l, o) : dl(n.r, o);
}
function $n(n, o, l = "k") {
  if (at(n))
    return [-1 / 0, void 0];
  if (Number(n[l]) === o)
    return [n.k, n.v];
  if (Number(n[l]) < o) {
    const s = $n(n.r, o, l);
    return s[0] === -1 / 0 ? [n.k, n.v] : s;
  }
  return $n(n.l, o, l);
}
function Sn(n, o, l) {
  return at(n) ? Sg(o, l, 1) : o === n.k ? Mt(n, { k: o, v: l }) : o < n.k ? em(Mt(n, { l: Sn(n.l, o, l) })) : em(Mt(n, { r: Sn(n.r, o, l) }));
}
function ii() {
  return fl;
}
function fa(n, o, l) {
  if (at(n))
    return [];
  const s = $n(n, o)[0];
  return dx(Wc(n, s, l));
}
function Bc(n, o) {
  if (at(n)) return fl;
  const { k: l, l: s, r: u } = n;
  if (o === l) {
    if (at(s))
      return u;
    if (at(u))
      return s;
    {
      const [f, d] = xg(s);
      return Ys(Mt(n, { k: f, l: wg(s), v: d }));
    }
  } else return o < l ? Ys(Mt(n, { l: Bc(s, o) })) : Ys(Mt(n, { r: Bc(u, o) }));
}
function Eo(n) {
  return at(n) ? [] : [...Eo(n.l), { k: n.k, v: n.v }, ...Eo(n.r)];
}
function Wc(n, o, l) {
  if (at(n))
    return [];
  const { k: s, l: u, r: f, v: d } = n;
  let p = [];
  return s > o && (p = p.concat(Wc(u, o, l))), s >= o && s <= l && p.push({ k: s, v: d }), s <= l && (p = p.concat(Wc(f, o, l))), p;
}
function Ys(n) {
  const { l: o, lvl: l, r: s } = n;
  if (s.lvl >= l - 1 && o.lvl >= l - 1)
    return n;
  if (l > s.lvl + 1) {
    if (dc(o))
      return kg(Mt(n, { lvl: l - 1 }));
    if (!at(o) && !at(o.r))
      return Mt(o.r, {
        l: Mt(o, { r: o.r.l }),
        lvl: l,
        r: Mt(n, {
          l: o.r.r,
          lvl: l - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (dc(n))
      return Uc(Mt(n, { lvl: l - 1 }));
    if (!at(s) && !at(s.l)) {
      const u = s.l, f = dc(u) ? s.lvl - 1 : s.lvl;
      return Mt(u, {
        l: Mt(n, {
          lvl: l - 1,
          r: u.l
        }),
        lvl: u.lvl + 1,
        r: Uc(Mt(s, { l: u.r, lvl: f }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function Mt(n, o) {
  return Sg(
    o.k !== void 0 ? o.k : n.k,
    o.v !== void 0 ? o.v : n.v,
    o.lvl !== void 0 ? o.lvl : n.lvl,
    o.l !== void 0 ? o.l : n.l,
    o.r !== void 0 ? o.r : n.r
  );
}
function wg(n) {
  return at(n.r) ? n.l : Ys(Mt(n, { r: wg(n.r) }));
}
function dc(n) {
  return at(n) || n.lvl > n.r.lvl;
}
function xg(n) {
  return at(n.r) ? [n.k, n.v] : xg(n.r);
}
function Sg(n, o, l, s = fl, u = fl) {
  return { k: n, l: s, lvl: l, r: u, v: o };
}
function em(n) {
  return Uc(kg(n));
}
function kg(n) {
  const { l: o } = n;
  return !at(o) && o.lvl === n.lvl ? Mt(o, { r: Mt(n, { l: o.r }) }) : n;
}
function Uc(n) {
  const { lvl: o, r: l } = n;
  return !at(l) && !at(l.r) && l.lvl === o && l.r.lvl === o ? Mt(l, { l: Mt(n, { r: l.l }), lvl: o + 1 }) : n;
}
function dx(n) {
  return yg(n, ({ k: o, v: l }) => ({ index: o, value: l }));
}
function _g(n, o) {
  return !!(n && n.startIndex === o.startIndex && n.endIndex === o.endIndex);
}
function pl(n, o) {
  return !!(n && n[0] === o[0] && n[1] === o[1]);
}
const hf = nt(
  () => ({ recalcInProgress: se(!1) }),
  [],
  { singleton: !0 }
);
function Cg(n, o, l) {
  return n[Xs(n, o, l)];
}
function Xs(n, o, l, s = 0) {
  let u = n.length - 1;
  for (; s <= u; ) {
    const f = Math.floor((s + u) / 2), d = n[f], p = l(d, o);
    if (p === 0)
      return f;
    if (p === -1) {
      if (u - s < 2)
        return f - 1;
      u = f - 1;
    } else {
      if (u === s)
        return f;
      s = f + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${n.join(",")}, searched for ${o}`);
}
function px(n, o, l, s) {
  const u = Xs(n, o, s), f = Xs(n, l, s, u);
  return n.slice(u, f + 1);
}
function Vn(n, o) {
  return Math.round(n.getBoundingClientRect()[o]);
}
function da(n) {
  return !at(n.groupOffsetTree);
}
function mf({ index: n }, o) {
  return o === n ? 0 : o < n ? -1 : 1;
}
function hx() {
  return {
    groupIndices: [],
    groupOffsetTree: ii(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: ii()
  };
}
function mx(n, o) {
  let l = at(n) ? 0 : 1 / 0;
  for (const s of o) {
    const { endIndex: u, size: f, startIndex: d } = s;
    if (l = Math.min(l, d), at(n)) {
      n = Sn(n, 0, f);
      continue;
    }
    const p = fa(n, d - 1, u + 1);
    if (p.some(kx(s)))
      continue;
    let g = !1, h = !1;
    for (const { end: v, start: y, value: _ } of p)
      g ? (u >= y || f === _) && (n = Bc(n, y)) : (h = _ !== f, g = !0), v > u && u >= y && _ !== f && (n = Sn(n, u + 1, _));
    h && (n = Sn(n, d, f));
  }
  return [n, l];
}
function gx(n) {
  return typeof n.groupIndex < "u";
}
function vx({ offset: n }, o) {
  return o === n ? 0 : o < n ? -1 : 1;
}
function hl(n, o, l) {
  if (o.length === 0)
    return 0;
  const { index: s, offset: u, size: f } = Cg(o, n, mf), d = n - s, p = f * d + (d - 1) * l + u;
  return p > 0 ? p + l : p;
}
function Eg(n, o) {
  if (!da(o))
    return n;
  let l = 0;
  for (; o.groupIndices[l] <= n + l; )
    l++;
  return n + l;
}
function Tg(n, o, l) {
  if (gx(n))
    return o.groupIndices[n.groupIndex] + 1;
  {
    const s = n.index === "LAST" ? l : n.index;
    let u = Eg(s, o);
    return u = Math.max(0, u, Math.min(l, u)), u;
  }
}
function yx(n, o, l, s = 0) {
  return s > 0 && (o = Math.max(o, Cg(n, s, mf).offset)), yg(px(n, o, l, vx), Sx);
}
function wx(n, [o, l, s, u]) {
  o.length > 0 && s("received item sizes", o, mn.DEBUG);
  const f = n.sizeTree;
  let d = f, p = 0;
  if (l.length > 0 && at(f) && o.length === 2) {
    const _ = o[0].size, w = o[1].size;
    d = l.reduce((A, O) => Sn(Sn(A, O, _), O + 1, w), d);
  } else
    [d, p] = mx(d, o);
  if (d === f)
    return n;
  const { lastIndex: g, lastOffset: h, lastSize: v, offsetTree: y } = $c(n.offsetTree, p, d, u);
  return {
    groupIndices: l,
    groupOffsetTree: l.reduce((_, w) => Sn(_, w, hl(w, y, u)), ii()),
    lastIndex: g,
    lastOffset: h,
    lastSize: v,
    offsetTree: y,
    sizeTree: d
  };
}
function xx(n) {
  return Eo(n).map(({ k: o, v: l }, s, u) => {
    const f = u[s + 1];
    return { endIndex: f ? f.k - 1 : 1 / 0, size: l, startIndex: o };
  });
}
function tm(n, o) {
  let l = 0, s = 0;
  for (; l < n; )
    l += o[s + 1] - o[s] - 1, s++;
  return s - (l === n ? 0 : 1);
}
function $c(n, o, l, s) {
  let u = n, f = 0, d = 0, p = 0, g = 0;
  if (o !== 0) {
    g = Xs(u, o - 1, mf), p = u[g].offset;
    const h = $n(l, o - 1);
    f = h[0], d = h[1], u.length && u[g].size === $n(l, o)[1] && (g -= 1), u = u.slice(0, g + 1);
  } else
    u = [];
  for (const { start: h, value: v } of fa(l, o, 1 / 0)) {
    const y = h - f, _ = y * d + p + y * s;
    u.push({
      index: h,
      offset: _,
      size: v
    }), f = h, p = _, d = v;
  }
  return {
    lastIndex: f,
    lastOffset: p,
    lastSize: d,
    offsetTree: u
  };
}
function Sx(n) {
  return { index: n.index, value: n };
}
function kx(n) {
  const { endIndex: o, size: l, startIndex: s } = n;
  return (u) => u.start === s && (u.end === o || u.end === 1 / 0) && u.value === l;
}
const _x = {
  offsetHeight: "height",
  offsetWidth: "width"
}, pr = nt(
  ([{ log: n }, { recalcInProgress: o }]) => {
    const l = qe(), s = qe(), u = Zt(s, 0), f = qe(), d = qe(), p = se(0), g = se([]), h = se(void 0), v = se(void 0), y = se((B, F) => Vn(B, _x[F])), _ = se(void 0), w = se(0), A = hx(), O = Zt(
      ee(l, $e(g, n, w), ar(wx, A), gt()),
      A
    ), C = Zt(
      ee(
        g,
        gt(),
        ar((B, F) => ({ current: F, prev: B.current }), {
          current: [],
          prev: []
        }),
        me(({ prev: B }) => B)
      ),
      []
    );
    Te(
      ee(
        g,
        Fe((B) => B.length > 0),
        $e(O, w),
        me(([B, F, H]) => {
          const x = B.reduce((T, L, V) => Sn(T, L, hl(L, F.offsetTree, H) || V), ii());
          return {
            ...F,
            groupIndices: B,
            groupOffsetTree: x
          };
        })
      ),
      O
    ), Te(
      ee(
        s,
        $e(O),
        Fe(([B, { lastIndex: F }]) => B < F),
        me(([B, { lastIndex: F, lastSize: H }]) => [
          {
            endIndex: F,
            size: H,
            startIndex: B
          }
        ])
      ),
      l
    ), Te(h, v);
    const E = Zt(
      ee(
        h,
        me((B) => B === void 0)
      ),
      !0
    );
    Te(
      ee(
        v,
        Fe((B) => B !== void 0 && at(Ut(O).sizeTree)),
        me((B) => [{ endIndex: 0, size: B, startIndex: 0 }])
      ),
      l
    );
    const I = kn(
      ee(
        l,
        $e(O),
        ar(
          ({ sizes: B }, [F, H]) => ({
            changed: H !== B,
            sizes: H
          }),
          { changed: !1, sizes: A }
        ),
        me((B) => B.changed)
      )
    );
    ot(
      ee(
        p,
        ar(
          (B, F) => ({ diff: B.prev - F, prev: F }),
          { diff: 0, prev: 0 }
        ),
        me((B) => B.diff)
      ),
      (B) => {
        const { groupIndices: F } = Ut(O);
        if (B > 0)
          We(o, !0), We(f, B + tm(B, F));
        else if (B < 0) {
          const H = Ut(C);
          H.length > 0 && (B -= tm(-B, H)), We(d, B);
        }
      }
    ), ot(ee(p, $e(n)), ([B, F]) => {
      B < 0 && F(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: p },
        mn.ERROR
      );
    });
    const j = kn(f);
    Te(
      ee(
        f,
        $e(O),
        me(([B, F]) => {
          const H = F.groupIndices.length > 0, x = [], T = F.lastSize;
          if (H) {
            const L = dl(F.sizeTree, 0);
            let V = 0, Q = 0;
            for (; V < B; ) {
              const K = F.groupIndices[Q], fe = F.groupIndices.length === Q + 1 ? 1 / 0 : F.groupIndices[Q + 1] - K - 1;
              x.push({
                endIndex: K,
                size: L,
                startIndex: K
              }), x.push({
                endIndex: K + 1 + fe - 1,
                size: T,
                startIndex: K + 1
              }), Q++, V += fe + 1;
            }
            const ie = Eo(F.sizeTree);
            return V !== B && ie.shift(), ie.reduce(
              (K, { k: fe, v: we }) => {
                let ne = K.ranges;
                return K.prevSize !== 0 && (ne = [
                  ...K.ranges,
                  {
                    endIndex: fe + B - 1,
                    size: K.prevSize,
                    startIndex: K.prevIndex
                  }
                ]), {
                  prevIndex: fe + B,
                  prevSize: we,
                  ranges: ne
                };
              },
              {
                prevIndex: B,
                prevSize: 0,
                ranges: x
              }
            ).ranges;
          }
          return Eo(F.sizeTree).reduce(
            (L, { k: V, v: Q }) => ({
              prevIndex: V + B,
              prevSize: Q,
              ranges: [...L.ranges, { endIndex: V + B - 1, size: L.prevSize, startIndex: L.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: T,
              ranges: []
            }
          ).ranges;
        })
      ),
      l
    );
    const $ = kn(
      ee(
        d,
        $e(O, w),
        me(([B, { offsetTree: F }, H]) => {
          const x = -B;
          return hl(x, F, H);
        })
      )
    );
    return Te(
      ee(
        d,
        $e(O, w),
        me(([B, F, H]) => {
          if (F.groupIndices.length > 0) {
            if (at(F.sizeTree))
              return F;
            let x = ii();
            const T = Ut(C);
            let L = 0, V = 0, Q = 0;
            for (; L < -B; ) {
              Q = T[V];
              const ie = T[V + 1] - Q - 1;
              V++, L += ie + 1;
            }
            if (x = Eo(F.sizeTree).reduce((ie, { k: K, v: fe }) => Sn(ie, Math.max(0, K + B), fe), x), L !== -B) {
              const ie = dl(F.sizeTree, Q);
              x = Sn(x, 0, ie);
              const K = $n(F.sizeTree, -B + 1)[1];
              x = Sn(x, 1, K);
            }
            return {
              ...F,
              sizeTree: x,
              ...$c(F.offsetTree, 0, x, H)
            };
          } else {
            const x = Eo(F.sizeTree).reduce((T, { k: L, v: V }) => Sn(T, Math.max(0, L + B), V), ii());
            return {
              ...F,
              sizeTree: x,
              ...$c(F.offsetTree, 0, x, H)
            };
          }
        })
      ),
      O
    ), {
      beforeUnshiftWith: j,
      // input
      data: _,
      defaultItemSize: v,
      firstItemIndex: p,
      fixedItemSize: h,
      gap: w,
      groupIndices: g,
      itemSize: y,
      listRefresh: I,
      shiftWith: d,
      shiftWithOffset: $,
      sizeRanges: l,
      // output
      sizes: O,
      statefulTotalCount: u,
      totalCount: s,
      trackItemSizes: E,
      unshiftWith: f
    };
  },
  yt(lo, hf),
  { singleton: !0 }
);
function Cx(n) {
  return n.reduce(
    (o, l) => (o.groupIndices.push(o.totalCount), o.totalCount += l + 1, o),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Ig = nt(
  ([{ groupIndices: n, sizes: o, totalCount: l }, { headerHeight: s, scrollTop: u }]) => {
    const f = qe(), d = qe(), p = kn(ee(f, me(Cx)));
    return Te(
      ee(
        p,
        me((g) => g.totalCount)
      ),
      l
    ), Te(
      ee(
        p,
        me((g) => g.groupIndices)
      ),
      n
    ), Te(
      ee(
        Dt(u, o, s),
        Fe(([g, h]) => da(h)),
        me(([g, h, v]) => $n(h.groupOffsetTree, Math.max(g - v, 0), "v")[0]),
        gt(),
        me((g) => [g])
      ),
      d
    ), { groupCounts: f, topItemsIndexes: d };
  },
  yt(pr, ln)
), so = nt(
  ([{ log: n }]) => {
    const o = se(!1), l = kn(
      ee(
        o,
        Fe((s) => s),
        gt()
      )
    );
    return ot(o, (s) => {
      s && Ut(n)("props updated", {}, mn.DEBUG);
    }), { didMount: l, propsReady: o };
  },
  yt(lo),
  { singleton: !0 }
), Ex = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function Rg(n) {
  const o = typeof n == "number" ? { index: n } : n;
  return o.align || (o.align = "start"), (!o.behavior || !Ex) && (o.behavior = "auto"), o.offset || (o.offset = 0), o;
}
const xl = nt(
  ([
    { gap: n, listRefresh: o, sizes: l, totalCount: s },
    {
      fixedFooterHeight: u,
      fixedHeaderHeight: f,
      footerHeight: d,
      headerHeight: p,
      scrollingInProgress: g,
      scrollTo: h,
      smoothScrollTargetReached: v,
      viewportHeight: y
    },
    { log: _ }
  ]) => {
    const w = qe(), A = qe(), O = se(0);
    let C = null, E = null, I = null;
    function j() {
      C && (C(), C = null), I && (I(), I = null), E && (clearTimeout(E), E = null), We(g, !1);
    }
    return Te(
      ee(
        w,
        $e(l, y, s, O, p, d, _),
        $e(n, f, u),
        me(
          ([
            [$, B, F, H, x, T, L, V],
            Q,
            ie,
            K
          ]) => {
            const fe = Rg($), { align: we, behavior: ne, offset: U } = fe, Y = H - 1, k = Tg(fe, B, Y);
            let z = hl(k, B.offsetTree, Q) + T;
            we === "end" ? (z += ie + $n(B.sizeTree, k)[1] - F + K, k === Y && (z += L)) : we === "center" ? z += (ie + $n(B.sizeTree, k)[1] - F + K) / 2 : z -= x, U && (z += U);
            const G = (q) => {
              j(), q ? (V("retrying to scroll to", { location: $ }, mn.DEBUG), We(w, $)) : (We(A, !0), V("list did not change, scroll successful", {}, mn.DEBUG));
            };
            if (j(), ne === "smooth") {
              let q = !1;
              I = ot(o, (de) => {
                q = q || de;
              }), C = cr(v, () => {
                G(q);
              });
            } else
              C = cr(ee(o, Tx(150)), G);
            return E = setTimeout(() => {
              j();
            }, 1200), We(g, !0), V("scrolling from index to", { behavior: ne, index: k, top: z }, mn.DEBUG), { behavior: ne, top: z };
          }
        )
      ),
      h
    ), {
      scrollTargetReached: A,
      scrollToIndex: w,
      topListHeight: O
    };
  },
  yt(pr, ln, lo),
  { singleton: !0 }
);
function Tx(n) {
  return (o) => {
    const l = setTimeout(() => {
      o(!1);
    }, n);
    return (s) => {
      s && (o(!0), clearTimeout(l));
    };
  };
}
function gf(n, o) {
  n == 0 ? o() : requestAnimationFrame(() => {
    gf(n - 1, o);
  });
}
function vf(n, o) {
  const l = o - 1;
  return typeof n == "number" ? n : n.index === "LAST" ? l : n.index;
}
const Sl = nt(
  ([{ defaultItemSize: n, listRefresh: o, sizes: l }, { scrollTop: s }, { scrollTargetReached: u, scrollToIndex: f }, { didMount: d }]) => {
    const p = se(!0), g = se(0), h = se(!0);
    return Te(
      ee(
        d,
        $e(g),
        Fe(([v, y]) => !!y),
        ir(!1)
      ),
      p
    ), Te(
      ee(
        d,
        $e(g),
        Fe(([v, y]) => !!y),
        ir(!1)
      ),
      h
    ), ot(
      ee(
        Dt(o, d),
        $e(p, l, n, h),
        Fe(([[, v], y, { sizeTree: _ }, w, A]) => v && (!at(_) || cf(w)) && !y && !A),
        $e(g)
      ),
      ([, v]) => {
        cr(u, () => {
          We(h, !0);
        }), gf(4, () => {
          cr(s, () => {
            We(p, !0);
          }), We(f, v);
        });
      }
    ), {
      initialItemFinalLocationReached: h,
      initialTopMostItemIndex: g,
      scrolledToInitialItem: p
    };
  },
  yt(pr, ln, xl, so),
  { singleton: !0 }
);
function Og(n, o) {
  return Math.abs(n - o) < 1.01;
}
const ml = "up", ll = "down", Ix = "none", Rx = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, Ox = 0, kl = nt(([{ footerHeight: n, headerHeight: o, scrollBy: l, scrollContainerState: s, scrollTop: u, viewportHeight: f }]) => {
  const d = se(!1), p = se(!0), g = qe(), h = qe(), v = se(4), y = se(Ox), _ = Zt(
    ee(
      Zh(ee(Me(u), ai(1), ir(!0)), ee(Me(u), ai(1), ir(!1), Xh(100))),
      gt()
    ),
    !1
  ), w = Zt(
    ee(Zh(ee(l, ir(!0)), ee(l, ir(!1), Xh(200))), gt()),
    !1
  );
  Te(
    ee(
      Dt(Me(u), Me(y)),
      me(([I, j]) => I <= j),
      gt()
    ),
    p
  ), Te(ee(p, Zr(50)), h);
  const A = kn(
    ee(
      Dt(s, Me(f), Me(o), Me(n), Me(v)),
      ar((I, [{ scrollHeight: j, scrollTop: $ }, B, F, H, x]) => {
        const T = $ + B - j > -x, L = {
          scrollHeight: j,
          scrollTop: $,
          viewportHeight: B
        };
        if (T) {
          let Q, ie;
          return $ > I.state.scrollTop ? (Q = "SCROLLED_DOWN", ie = I.state.scrollTop - $) : (Q = "SIZE_DECREASED", ie = I.state.scrollTop - $ || I.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: Q,
            scrollTopDelta: ie,
            state: L
          };
        }
        let V;
        return L.scrollHeight > I.state.scrollHeight ? V = "SIZE_INCREASED" : B < I.state.viewportHeight ? V = "VIEWPORT_HEIGHT_DECREASING" : $ < I.state.scrollTop ? V = "SCROLLING_UPWARDS" : V = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: V,
          state: L
        };
      }, Rx),
      gt((I, j) => I && I.atBottom === j.atBottom)
    )
  ), O = Zt(
    ee(
      s,
      ar(
        (I, { scrollHeight: j, scrollTop: $, viewportHeight: B }) => {
          if (Og(I.scrollHeight, j))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: j,
              scrollTop: $
            };
          {
            const F = j - ($ + B) < 1;
            return I.scrollTop !== $ && F ? {
              changed: !0,
              jump: I.scrollTop - $,
              scrollHeight: j,
              scrollTop: $
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: j,
              scrollTop: $
            };
          }
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      Fe((I) => I.changed),
      me((I) => I.jump)
    ),
    0
  );
  Te(
    ee(
      A,
      me((I) => I.atBottom)
    ),
    d
  ), Te(ee(d, Zr(50)), g);
  const C = se(ll);
  Te(
    ee(
      s,
      me(({ scrollTop: I }) => I),
      gt(),
      ar(
        (I, j) => Ut(w) ? { direction: I.direction, prevScrollTop: j } : { direction: j < I.prevScrollTop ? ml : ll, prevScrollTop: j },
        { direction: ll, prevScrollTop: 0 }
      ),
      me((I) => I.direction)
    ),
    C
  ), Te(ee(s, Zr(50), ir(Ix)), C);
  const E = se(0);
  return Te(
    ee(
      _,
      Fe((I) => !I),
      ir(0)
    ),
    E
  ), Te(
    ee(
      u,
      Zr(100),
      $e(_),
      Fe(([I, j]) => !!j),
      ar(([I, j], [$]) => [j, $], [0, 0]),
      me(([I, j]) => j - I)
    ),
    E
  ), {
    atBottomState: A,
    atBottomStateChange: g,
    atBottomThreshold: v,
    atTopStateChange: h,
    atTopThreshold: y,
    isAtBottom: d,
    isAtTop: p,
    isScrolling: _,
    lastJumpDueToItemResize: O,
    scrollDirection: C,
    scrollVelocity: E
  };
}, yt(ln)), Zs = "top", Js = "bottom", nm = "none";
function rm(n, o, l) {
  return typeof n == "number" ? l === ml && o === Zs || l === ll && o === Js ? n : 0 : l === ml ? o === Zs ? n.main : n.reverse : o === Js ? n.main : n.reverse;
}
function om(n, o) {
  var l;
  return typeof n == "number" ? n : (l = n[o]) != null ? l : 0;
}
const yf = nt(
  ([{ deviation: n, fixedHeaderHeight: o, headerHeight: l, scrollTop: s, viewportHeight: u }]) => {
    const f = qe(), d = se(0), p = se(0), g = se(0), h = Zt(
      ee(
        Dt(
          Me(s),
          Me(u),
          Me(l),
          Me(f, pl),
          Me(g),
          Me(d),
          Me(o),
          Me(n),
          Me(p)
        ),
        me(
          ([
            v,
            y,
            _,
            [w, A],
            O,
            C,
            E,
            I,
            j
          ]) => {
            const $ = v - I, B = C + E, F = Math.max(_ - $, 0);
            let H = nm;
            const x = om(j, Zs), T = om(j, Js);
            return w -= I, w += _ + E, A += _ + E, A -= I, w > v + B - x && (H = ml), A < v - F + y + T && (H = ll), H !== nm ? [
              Math.max($ - _ - rm(O, Zs, H) - x, 0),
              $ - F - E + y + rm(O, Js, H) + T
            ] : null;
          }
        ),
        Fe((v) => v != null),
        gt(pl)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: p,
      // input
      listBoundary: f,
      overscan: g,
      topListHeight: d,
      // output
      visibleRange: h
    };
  },
  yt(ln),
  { singleton: !0 }
);
function Ax(n, o, l) {
  if (da(o)) {
    const s = Eg(n, o);
    return [
      { index: $n(o.groupOffsetTree, s)[0], offset: 0, size: 0 },
      { data: l == null ? void 0 : l[0], index: s, offset: 0, size: 0 }
    ];
  }
  return [{ data: l == null ? void 0 : l[0], index: n, offset: 0, size: 0 }];
}
const pc = {
  bottom: 0,
  firstItemIndex: 0,
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  topItems: [],
  topListHeight: 0,
  totalCount: 0
};
function Ks(n, o, l, s, u, f) {
  const { lastIndex: d, lastOffset: p, lastSize: g } = u;
  let h = 0, v = 0;
  if (n.length > 0) {
    h = n[0].offset;
    const O = n[n.length - 1];
    v = O.offset + O.size;
  }
  const y = l - d, _ = p + y * g + (y - 1) * s, w = h, A = _ - v;
  return {
    bottom: v,
    firstItemIndex: f,
    items: im(n, u, f),
    offsetBottom: A,
    offsetTop: h,
    top: w,
    topItems: im(o, u, f),
    topListHeight: o.reduce((O, C) => C.size + O, 0),
    totalCount: l
  };
}
function Ag(n, o, l, s, u, f) {
  let d = 0;
  if (l.groupIndices.length > 0)
    for (const v of l.groupIndices) {
      if (v - d >= n)
        break;
      d++;
    }
  const p = n + d, g = vf(o, p), h = Array.from({ length: p }).map((v, y) => ({
    data: f[y + g],
    index: y + g,
    offset: 0,
    size: 0
  }));
  return Ks(h, [], p, u, l, s);
}
function im(n, o, l) {
  if (n.length === 0)
    return [];
  if (!da(o))
    return n.map((h) => ({ ...h, index: h.index + l, originalIndex: h.index }));
  const s = n[0].index, u = n[n.length - 1].index, f = [], d = fa(o.groupOffsetTree, s, u);
  let p, g = 0;
  for (const h of n) {
    (!p || p.end < h.index) && (p = d.shift(), g = o.groupIndices.indexOf(p.start));
    let v;
    h.index === p.start ? v = {
      index: g,
      type: "group"
    } : v = {
      groupIndex: g,
      index: h.index - (g + 1) + l
    }, f.push({
      ...v,
      data: h.data,
      offset: h.offset,
      originalIndex: h.index,
      size: h.size
    });
  }
  return f;
}
const Po = nt(
  ([
    { data: n, firstItemIndex: o, gap: l, sizes: s, totalCount: u },
    f,
    { listBoundary: d, topListHeight: p, visibleRange: g },
    { initialTopMostItemIndex: h, scrolledToInitialItem: v },
    { topListHeight: y },
    _,
    { didMount: w },
    { recalcInProgress: A }
  ]) => {
    const O = se([]), C = se(0), E = qe();
    Te(f.topItemsIndexes, O);
    const I = Zt(
      ee(
        Dt(
          w,
          A,
          Me(g, pl),
          Me(u),
          Me(s),
          Me(h),
          v,
          Me(O),
          Me(o),
          Me(l),
          n
        ),
        Fe(([F, H, , x, , , , , , , T]) => {
          const L = T && T.length !== x;
          return F && !H && !L;
        }),
        me(
          ([
            ,
            ,
            [F, H],
            x,
            T,
            L,
            V,
            Q,
            ie,
            K,
            fe
          ]) => {
            const we = T, { offsetTree: ne, sizeTree: U } = we, Y = Ut(C);
            if (x === 0)
              return { ...pc, totalCount: x };
            if (F === 0 && H === 0)
              return Y === 0 ? { ...pc, totalCount: x } : Ag(Y, L, T, ie, K, fe || []);
            if (at(U))
              return Y > 0 ? null : Ks(
                Ax(vf(L, x), we, fe),
                [],
                x,
                K,
                we,
                ie
              );
            const k = [];
            if (Q.length > 0) {
              const ke = Q[0], ge = Q[Q.length - 1];
              let Ee = 0;
              for (const b of fa(U, ke, ge)) {
                const oe = b.value, xe = Math.max(b.start, ke), pe = Math.min(b.end, ge);
                for (let Ie = xe; Ie <= pe; Ie++)
                  k.push({ data: fe == null ? void 0 : fe[Ie], index: Ie, offset: Ee, size: oe }), Ee += oe;
              }
            }
            if (!V)
              return Ks([], k, x, K, we, ie);
            const z = Q.length > 0 ? Q[Q.length - 1] + 1 : 0, G = yx(ne, F, H, z);
            if (G.length === 0)
              return null;
            const q = x - 1, de = ca([], (ke) => {
              for (const ge of G) {
                const Ee = ge.value;
                let b = Ee.offset, oe = ge.start;
                const xe = Ee.size;
                if (Ee.offset < F) {
                  oe += Math.floor((F - Ee.offset + K) / (xe + K));
                  const Ie = oe - ge.start;
                  b += Ie * xe + Ie * K;
                }
                oe < z && (b += (z - oe) * xe, oe = z);
                const pe = Math.min(ge.end, q);
                for (let Ie = oe; Ie <= pe && !(b >= H); Ie++)
                  ke.push({ data: fe == null ? void 0 : fe[Ie], index: Ie, offset: b, size: xe }), b += xe + K;
              }
            });
            return Ks(de, k, x, K, we, ie);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        Fe((F) => F !== null),
        gt()
      ),
      pc
    );
    Te(
      ee(
        n,
        Fe(cf),
        me((F) => F == null ? void 0 : F.length)
      ),
      u
    ), Te(
      ee(
        I,
        me((F) => F.topListHeight)
      ),
      y
    ), Te(y, p), Te(
      ee(
        I,
        me((F) => [F.top, F.bottom])
      ),
      d
    ), Te(
      ee(
        I,
        me((F) => F.items)
      ),
      E
    );
    const j = kn(
      ee(
        I,
        Fe(({ items: F }) => F.length > 0),
        $e(u, n),
        Fe(([{ items: F }, H]) => F[F.length - 1].originalIndex === H - 1),
        me(([, F, H]) => [F - 1, H]),
        gt(pl),
        me(([F]) => F)
      )
    ), $ = kn(
      ee(
        I,
        Zr(200),
        Fe(({ items: F, topItems: H }) => F.length > 0 && F[0].originalIndex === H.length),
        me(({ items: F }) => F[0].index),
        gt()
      )
    ), B = kn(
      ee(
        I,
        Fe(({ items: F }) => F.length > 0),
        me(({ items: F }) => {
          let H = 0, x = F.length - 1;
          for (; F[H].type === "group" && H < x; )
            H++;
          for (; F[x].type === "group" && x > H; )
            x--;
          return {
            endIndex: F[x].index,
            startIndex: F[H].index
          };
        }),
        gt(_g)
      )
    );
    return { endReached: j, initialItemCount: C, itemsRendered: E, listState: I, rangeChanged: B, startReached: $, topItemsIndexes: O, ..._ };
  },
  yt(
    pr,
    Ig,
    yf,
    Sl,
    xl,
    kl,
    so,
    hf
  ),
  { singleton: !0 }
), Pg = nt(
  ([{ fixedFooterHeight: n, fixedHeaderHeight: o, footerHeight: l, headerHeight: s }, { listState: u }]) => {
    const f = qe(), d = Zt(
      ee(
        Dt(l, n, s, o, u),
        me(([p, g, h, v, y]) => p + g + h + v + y.offsetBottom + y.bottom)
      ),
      0
    );
    return Te(Me(d), f), { totalListHeight: d, totalListHeightChanged: f };
  },
  yt(ln, Po),
  { singleton: !0 }
), Px = nt(
  ([{ viewportHeight: n }, { totalListHeight: o }]) => {
    const l = se(!1), s = Zt(
      ee(
        Dt(l, n, o),
        Fe(([u]) => u),
        me(([, u, f]) => Math.max(0, u - f)),
        Zr(0),
        gt()
      ),
      0
    );
    return { alignToBottom: l, paddingTopAddition: s };
  },
  yt(ln, Pg),
  { singleton: !0 }
);
function lm(n) {
  return n ? n === "smooth" ? "smooth" : "auto" : !1;
}
const Lx = (n, o) => typeof n == "function" ? lm(n(o)) : o && lm(n), zx = nt(
  ([
    { listRefresh: n, totalCount: o, fixedItemSize: l },
    { atBottomState: s, isAtBottom: u },
    { scrollToIndex: f },
    { scrolledToInitialItem: d },
    { didMount: p, propsReady: g },
    { log: h },
    { scrollingInProgress: v }
  ]) => {
    const y = se(!1), _ = qe();
    let w = null;
    function A(C) {
      We(f, {
        align: "end",
        behavior: C,
        index: "LAST"
      });
    }
    ot(
      ee(
        Dt(ee(Me(o), ai(1)), p),
        $e(Me(y), u, d, v),
        me(([[C, E], I, j, $, B]) => {
          let F = E && $, H = "auto";
          return F && (H = Lx(I, j || B), F = F && !!H), { followOutputBehavior: H, shouldFollow: F, totalCount: C };
        }),
        Fe(({ shouldFollow: C }) => C)
      ),
      ({ followOutputBehavior: C, totalCount: E }) => {
        w && (w(), w = null), Ut(l) ? requestAnimationFrame(() => {
          Ut(h)("following output to ", { totalCount: E }, mn.DEBUG), A(C);
        }) : w = cr(n, () => {
          Ut(h)("following output to ", { totalCount: E }, mn.DEBUG), A(C), w = null;
        });
      }
    );
    function O(C) {
      const E = cr(s, (I) => {
        C && !I.atBottom && I.notAtBottomBecause === "SIZE_INCREASED" && !w && (Ut(h)("scrolling to bottom due to increased size", {}, mn.DEBUG), A("auto"));
      });
      setTimeout(E, 100);
    }
    return ot(
      ee(
        Dt(Me(y), o, g),
        Fe(([C, , E]) => C && E),
        ar(
          ({ value: C }, [, E]) => ({ refreshed: C === E, value: E }),
          { refreshed: !1, value: 0 }
        ),
        Fe(({ refreshed: C }) => C),
        $e(y, o)
      ),
      ([, C]) => {
        Ut(d) && O(C !== !1);
      }
    ), ot(_, () => {
      O(Ut(y) !== !1);
    }), ot(Dt(Me(y), s), ([C, E]) => {
      C && !E.atBottom && E.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && A("auto");
    }), { autoscrollToBottom: _, followOutput: y };
  },
  yt(pr, kl, xl, Sl, so, lo, ln)
), Nx = nt(
  ([{ data: n, firstItemIndex: o, gap: l, sizes: s }, { initialTopMostItemIndex: u }, { initialItemCount: f, listState: d }, { didMount: p }]) => (Te(
    ee(
      p,
      $e(f),
      Fe(([, g]) => g !== 0),
      $e(u, s, o, l, n),
      me(([[, g], h, v, y, _, w = []]) => Ag(g, h, v, y, _, w))
    ),
    d
  ), {}),
  yt(pr, Sl, Po, so),
  { singleton: !0 }
), bx = nt(
  ([{ didMount: n }, { scrollTo: o }, { listState: l }]) => {
    const s = se(0);
    return ot(
      ee(
        n,
        $e(s),
        Fe(([, u]) => u !== 0),
        me(([, u]) => ({ top: u }))
      ),
      (u) => {
        cr(
          ee(
            l,
            ai(1),
            Fe((f) => f.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              We(o, u);
            });
          }
        );
      }
    ), {
      initialScrollTop: s
    };
  },
  yt(so, ln, Po),
  { singleton: !0 }
), jx = ({
  itemBottom: n,
  itemTop: o,
  locationParams: { align: l, behavior: s, ...u },
  viewportBottom: f,
  viewportTop: d
}) => o < d ? { ...u, align: l ?? "start", behavior: s } : n > f ? { ...u, align: l ?? "end", behavior: s } : null, Fx = nt(
  ([
    { gap: n, sizes: o, totalCount: l },
    { fixedFooterHeight: s, fixedHeaderHeight: u, headerHeight: f, scrollingInProgress: d, scrollTop: p, viewportHeight: g },
    { scrollToIndex: h }
  ]) => {
    const v = qe();
    return Te(
      ee(
        v,
        $e(o, g, l, f, u, s, p),
        $e(n),
        me(([[y, _, w, A, O, C, E, I], j]) => {
          const { align: $, behavior: B, calculateViewLocation: F = jx, done: H, ...x } = y, T = Tg(y, _, A - 1), L = hl(T, _.offsetTree, j) + O + C, V = L + $n(_.sizeTree, T)[1], Q = I + C, ie = I + w - E, K = F({
            itemBottom: V,
            itemTop: L,
            locationParams: { align: $, behavior: B, ...x },
            viewportBottom: ie,
            viewportTop: Q
          });
          return K ? H && cr(
            ee(
              d,
              Fe((fe) => !fe),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              ai(Ut(d) ? 1 : 2)
            ),
            H
          ) : H && H(), K;
        }),
        Fe((y) => y !== null)
      ),
      h
    ), {
      scrollIntoView: v
    };
  },
  yt(pr, ln, xl, Po, lo),
  { singleton: !0 }
), Lg = nt(
  ([{ scrollVelocity: n }]) => {
    const o = se(!1), l = qe(), s = se(!1);
    return Te(
      ee(
        n,
        $e(s, o, l),
        Fe(([u, f]) => !!f),
        me(([u, f, d, p]) => {
          const { enter: g, exit: h } = f;
          if (d) {
            if (h(u, p))
              return !1;
          } else if (g(u, p))
            return !0;
          return d;
        }),
        gt()
      ),
      o
    ), ot(
      ee(Dt(o, n, l), $e(s)),
      ([[u, f, d], p]) => {
        u && p && p.change && p.change(f, d);
      }
    ), { isSeeking: o, scrollSeekConfiguration: s, scrollSeekRangeChanged: l, scrollVelocity: n };
  },
  yt(kl),
  { singleton: !0 }
), wf = nt(([{ scrollContainerState: n, scrollTo: o }]) => {
  const l = qe(), s = qe(), u = qe(), f = se(!1), d = se(void 0);
  return Te(
    ee(
      Dt(l, s),
      me(([{ scrollHeight: p, scrollTop: g, viewportHeight: h }, { offsetTop: v }]) => ({
        scrollHeight: p,
        scrollTop: Math.max(0, g - v),
        viewportHeight: h
      }))
    ),
    n
  ), Te(
    ee(
      o,
      $e(s),
      me(([p, { offsetTop: g }]) => ({
        ...p,
        top: p.top + g
      }))
    ),
    u
  ), {
    customScrollParent: d,
    // config
    useWindowScroll: f,
    // input
    windowScrollContainerState: l,
    // signals
    windowScrollTo: u,
    windowViewportRect: s
  };
}, yt(ln)), Mx = nt(
  ([
    { sizeRanges: n, sizes: o },
    { headerHeight: l, scrollTop: s },
    { initialTopMostItemIndex: u },
    { didMount: f },
    { useWindowScroll: d, windowScrollContainerState: p, windowViewportRect: g }
  ]) => {
    const h = qe(), v = se(void 0), y = se(null), _ = se(null);
    return Te(p, y), Te(g, _), ot(
      ee(
        h,
        $e(o, s, d, y, _, l)
      ),
      ([w, A, O, C, E, I, j]) => {
        const $ = xx(A.sizeTree);
        C && E !== null && I !== null && (O = E.scrollTop - I.offsetTop), O -= j, w({ ranges: $, scrollTop: O });
      }
    ), Te(ee(v, Fe(cf), me(Dx)), u), Te(
      ee(
        f,
        $e(v),
        Fe(([, w]) => w !== void 0),
        gt(),
        me(([, w]) => w.ranges)
      ),
      n
    ), {
      getState: h,
      restoreStateFrom: v
    };
  },
  yt(pr, ln, Sl, so, wf)
);
function Dx(n) {
  return { align: "start", index: 0, offset: n.scrollTop };
}
const Hx = nt(([{ topItemsIndexes: n }]) => {
  const o = se(0);
  return Te(
    ee(
      o,
      Fe((l) => l >= 0),
      me((l) => Array.from({ length: l }).map((s, u) => u))
    ),
    n
  ), { topItemCount: o };
}, yt(Po));
function zg(n) {
  let o = !1, l;
  return () => (o || (o = !0, l = n()), l);
}
const Bx = zg(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Wx = nt(
  ([
    { deviation: n, scrollBy: o, scrollingInProgress: l, scrollTop: s },
    { isAtBottom: u, isScrolling: f, lastJumpDueToItemResize: d, scrollDirection: p },
    { listState: g },
    { beforeUnshiftWith: h, gap: v, shiftWithOffset: y, sizes: _ },
    { log: w },
    { recalcInProgress: A }
  ]) => {
    const O = kn(
      ee(
        g,
        $e(d),
        ar(
          ([, E, I, j], [{ bottom: $, items: B, offsetBottom: F, totalCount: H }, x]) => {
            const T = $ + F;
            let L = 0;
            return I === H && E.length > 0 && B.length > 0 && (B[0].originalIndex === 0 && E[0].originalIndex === 0 || (L = T - j, L !== 0 && (L += x))), [L, B, H, T];
          },
          [0, [], 0, 0]
        ),
        Fe(([E]) => E !== 0),
        $e(s, p, l, u, w, A),
        Fe(([, E, I, j, , , $]) => !$ && !j && E !== 0 && I === ml),
        me(([[E], , , , , I]) => (I("Upward scrolling compensation", { amount: E }, mn.DEBUG), E))
      )
    );
    function C(E) {
      E > 0 ? (We(o, { behavior: "auto", top: -E }), We(n, 0)) : (We(n, 0), We(o, { behavior: "auto", top: -E }));
    }
    return ot(ee(O, $e(n, f)), ([E, I, j]) => {
      j && Bx() ? We(n, I - E) : C(-E);
    }), ot(
      ee(
        Dt(Zt(f, !1), n, A),
        Fe(([E, I, j]) => !E && !j && I !== 0),
        me(([E, I]) => I),
        Zr(1)
      ),
      C
    ), Te(
      ee(
        y,
        me((E) => ({ top: -E }))
      ),
      o
    ), ot(
      ee(
        h,
        $e(_, v),
        me(([E, { groupIndices: I, lastSize: j, sizeTree: $ }, B]) => {
          function F(H) {
            return H * (j + B);
          }
          if (I.length === 0)
            return F(E);
          {
            let H = 0;
            const x = dl($, 0);
            let T = 0, L = 0;
            for (; T < E; ) {
              T++, H += x;
              let V = I.length === L + 1 ? 1 / 0 : I[L + 1] - I[L] - 1;
              T + V > E && (H -= x, V = E - T + 1), T += V, H += F(V), L++;
            }
            return H;
          }
        })
      ),
      (E) => {
        We(n, E), requestAnimationFrame(() => {
          We(o, { top: E }), requestAnimationFrame(() => {
            We(n, 0), We(A, !1);
          });
        });
      }
    ), { deviation: n };
  },
  yt(ln, kl, Po, pr, lo, hf)
), Ux = nt(
  ([
    n,
    o,
    l,
    s,
    u,
    f,
    d,
    p,
    g,
    h
  ]) => ({
    ...n,
    ...o,
    ...l,
    ...s,
    ...u,
    ...f,
    ...d,
    ...p,
    ...g,
    ...h
  }),
  yt(
    yf,
    Nx,
    so,
    Lg,
    Pg,
    bx,
    Px,
    wf,
    Fx,
    lo
  )
), Ng = nt(
  ([
    {
      data: n,
      defaultItemSize: o,
      firstItemIndex: l,
      fixedItemSize: s,
      gap: u,
      groupIndices: f,
      itemSize: d,
      sizeRanges: p,
      sizes: g,
      statefulTotalCount: h,
      totalCount: v,
      trackItemSizes: y
    },
    { initialItemFinalLocationReached: _, initialTopMostItemIndex: w, scrolledToInitialItem: A },
    O,
    C,
    E,
    { listState: I, topItemsIndexes: j, ...$ },
    { scrollToIndex: B },
    F,
    { topItemCount: H },
    { groupCounts: x },
    T
  ]) => (Te($.rangeChanged, T.scrollSeekRangeChanged), Te(
    ee(
      T.windowViewportRect,
      me((L) => L.visibleHeight)
    ),
    O.viewportHeight
  ), {
    data: n,
    defaultItemHeight: o,
    firstItemIndex: l,
    fixedItemHeight: s,
    gap: u,
    groupCounts: x,
    initialItemFinalLocationReached: _,
    initialTopMostItemIndex: w,
    scrolledToInitialItem: A,
    sizeRanges: p,
    topItemCount: H,
    topItemsIndexes: j,
    // input
    totalCount: v,
    ...E,
    groupIndices: f,
    itemSize: d,
    listState: I,
    scrollToIndex: B,
    // output
    statefulTotalCount: h,
    trackItemSizes: y,
    // exported from stateFlagsSystem
    ...$,
    // the bag of IO from featureGroup1System
    ...T,
    ...O,
    sizes: g,
    ...C
  }),
  yt(
    pr,
    Sl,
    ln,
    Mx,
    zx,
    Po,
    xl,
    Wx,
    Hx,
    Ig,
    Ux
  )
);
function $x(n, o) {
  const l = {}, s = {};
  let u = 0;
  const f = n.length;
  for (; u < f; )
    s[n[u]] = 1, u += 1;
  for (const d in o)
    Object.hasOwn(s, d) || (l[d] = o[d]);
  return l;
}
const Ds = typeof document < "u" ? ae.useLayoutEffect : ae.useEffect;
function xf(n, o, l) {
  const s = Object.keys(o.required || {}), u = Object.keys(o.optional || {}), f = Object.keys(o.methods || {}), d = Object.keys(o.events || {}), p = ae.createContext({});
  function g(C, E) {
    C.propsReady && We(C.propsReady, !1);
    for (const I of s) {
      const j = C[o.required[I]];
      We(j, E[I]);
    }
    for (const I of u)
      if (I in E) {
        const j = C[o.optional[I]];
        We(j, E[I]);
      }
    C.propsReady && We(C.propsReady, !0);
  }
  function h(C) {
    return f.reduce((E, I) => (E[I] = (j) => {
      const $ = C[o.methods[I]];
      We($, j);
    }, E), {});
  }
  function v(C) {
    return d.reduce((E, I) => (E[I] = lx(C[o.events[I]]), E), {});
  }
  const y = ae.forwardRef((C, E) => {
    const { children: I, ...j } = C, [$] = ae.useState(() => ca(ax(n), (H) => {
      g(H, j);
    })), [B] = ae.useState(qh(v, $));
    Ds(() => {
      for (const H of d)
        H in j && ot(B[H], j[H]);
      return () => {
        Object.values(B).map(ff);
      };
    }, [j, B, $]), Ds(() => {
      g($, j);
    }), ae.useImperativeHandle(E, Gh(h($)));
    const F = l;
    return /* @__PURE__ */ D.jsx(p.Provider, { value: $, children: l ? /* @__PURE__ */ D.jsx(F, { ...$x([...s, ...u, ...d], j), children: I }) : I });
  }), _ = (C) => {
    const E = ae.useContext(p);
    return ae.useCallback(
      (I) => {
        We(E[C], I);
      },
      [E, C]
    );
  }, w = (C) => {
    const E = ae.useContext(p)[C], I = ae.useCallback(
      (j) => ot(E, j),
      [E]
    );
    return ae.useSyncExternalStore(
      I,
      () => Ut(E),
      () => Ut(E)
    );
  }, A = (C) => {
    const E = ae.useContext(p)[C], [I, j] = ae.useState(qh(Ut, E));
    return Ds(
      () => ot(E, ($) => {
        $ !== I && j(Gh($));
      }),
      [E, I]
    ), I;
  }, O = ae.version.startsWith("18") ? w : A;
  return {
    Component: y,
    useEmitter: (C, E) => {
      const I = ae.useContext(p)[C];
      Ds(() => ot(I, E), [E, I]);
    },
    useEmitterValue: O,
    usePublisher: _
  };
}
const pa = ae.createContext(void 0), bg = ae.createContext(void 0), jg = typeof document < "u" ? ae.useLayoutEffect : ae.useEffect;
function hc(n) {
  return "self" in n;
}
function Vx(n) {
  return "body" in n;
}
function Fg(n, o, l, s = pi, u, f) {
  const d = ae.useRef(null), p = ae.useRef(null), g = ae.useRef(null), h = ae.useCallback(
    (_) => {
      let w, A, O;
      const C = _.target;
      if (Vx(C) || hc(C)) {
        const I = hc(C) ? C : C.defaultView;
        O = f ? I.scrollX : I.scrollY, w = f ? I.document.documentElement.scrollWidth : I.document.documentElement.scrollHeight, A = f ? I.innerWidth : I.innerHeight;
      } else
        O = f ? C.scrollLeft : C.scrollTop, w = f ? C.scrollWidth : C.scrollHeight, A = f ? C.offsetWidth : C.offsetHeight;
      const E = () => {
        n({
          scrollHeight: w,
          scrollTop: Math.max(O, 0),
          viewportHeight: A
        });
      };
      _.suppressFlushSync ? E() : ex.flushSync(E), p.current !== null && (O === p.current || O <= 0 || O === w - A) && (p.current = null, o(!0), g.current && (clearTimeout(g.current), g.current = null));
    },
    [n, o, f]
  );
  ae.useEffect(() => {
    const _ = u || d.current;
    return s(u || d.current), h({ suppressFlushSync: !0, target: _ }), _.addEventListener("scroll", h, { passive: !0 }), () => {
      s(null), _.removeEventListener("scroll", h);
    };
  }, [d, h, l, s, u]);
  function v(_) {
    const w = d.current;
    if (!w || (f ? "offsetWidth" in w && w.offsetWidth === 0 : "offsetHeight" in w && w.offsetHeight === 0))
      return;
    const A = _.behavior === "smooth";
    let O, C, E;
    hc(w) ? (C = Math.max(
      Vn(w.document.documentElement, f ? "width" : "height"),
      f ? w.document.documentElement.scrollWidth : w.document.documentElement.scrollHeight
    ), O = f ? w.innerWidth : w.innerHeight, E = f ? window.scrollX : window.scrollY) : (C = w[f ? "scrollWidth" : "scrollHeight"], O = Vn(w, f ? "width" : "height"), E = w[f ? "scrollLeft" : "scrollTop"]);
    const I = C - O;
    if (_.top = Math.ceil(Math.max(Math.min(I, _.top), 0)), Og(O, C) || _.top === E) {
      n({ scrollHeight: C, scrollTop: E, viewportHeight: O }), A && o(!0);
      return;
    }
    A ? (p.current = _.top, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
      g.current = null, p.current = null, o(!0);
    }, 1e3)) : p.current = null, f && (_ = { behavior: _.behavior, left: _.top }), w.scrollTo(_);
  }
  function y(_) {
    f && (_ = { behavior: _.behavior, left: _.top }), d.current.scrollBy(_);
  }
  return { scrollByCallback: y, scrollerRef: d, scrollToCallback: v };
}
const mc = "-webkit-sticky", sm = "sticky", Sf = zg(() => {
  if (typeof document > "u")
    return sm;
  const n = document.createElement("div");
  return n.style.position = mc, n.style.position === mc ? mc : sm;
});
function kf(n) {
  return n;
}
const Yx = /* @__PURE__ */ nt(() => {
  const n = se((g) => `Item ${g}`), o = se(null), l = se((g) => `Group ${g}`), s = se({}), u = se(kf), f = se("div"), d = se(pi), p = (g, h = null) => Zt(
    ee(
      s,
      me((v) => v[g]),
      gt()
    ),
    h
  );
  return {
    components: s,
    computeItemKey: u,
    context: o,
    EmptyPlaceholder: p("EmptyPlaceholder"),
    FooterComponent: p("Footer"),
    GroupComponent: p("Group", "div"),
    groupContent: l,
    HeaderComponent: p("Header"),
    HeaderFooterTag: f,
    ItemComponent: p("Item", "div"),
    itemContent: n,
    ListComponent: p("List", "div"),
    ScrollerComponent: p("Scroller", "div"),
    scrollerRef: d,
    ScrollSeekPlaceholder: p("ScrollSeekPlaceholder"),
    TopItemListComponent: p("TopItemList")
  };
}), Kx = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(Ng, Yx)
), Qx = ({ height: n }) => /* @__PURE__ */ D.jsx("div", { style: { height: n } }), Gx = { overflowAnchor: "none", position: Sf(), zIndex: 1 }, Mg = { overflowAnchor: "none" }, qx = { ...Mg, display: "inline-block", height: "100%" }, am = /* @__PURE__ */ ae.memo(function({ showTopList: n = !1 }) {
  const o = De("listState"), l = zn("sizeRanges"), s = De("useWindowScroll"), u = De("customScrollParent"), f = zn("windowScrollContainerState"), d = zn("scrollContainerState"), p = u || s ? f : d, g = De("itemContent"), h = De("context"), v = De("groupContent"), y = De("trackItemSizes"), _ = De("itemSize"), w = De("log"), A = zn("gap"), O = De("horizontalDirection"), { callbackRef: C } = vg(
    l,
    _,
    y,
    n ? pi : p,
    w,
    A,
    u,
    O,
    De("skipAnimationFrameInResizeObserver")
  ), [E, I] = ae.useState(0);
  Ef("deviation", (K) => {
    E !== K && I(K);
  });
  const j = De("EmptyPlaceholder"), $ = De("ScrollSeekPlaceholder") || Qx, B = De("ListComponent"), F = De("ItemComponent"), H = De("GroupComponent"), x = De("computeItemKey"), T = De("isSeeking"), L = De("groupIndices").length > 0, V = De("alignToBottom"), Q = De("initialItemFinalLocationReached"), ie = n ? {} : {
    boxSizing: "border-box",
    ...O ? {
      display: "inline-block",
      height: "100%",
      marginLeft: E !== 0 ? E : V ? "auto" : 0,
      paddingLeft: o.offsetTop,
      paddingRight: o.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: E !== 0 ? E : V ? "auto" : 0,
      paddingBottom: o.offsetBottom,
      paddingTop: o.offsetTop
    },
    ...Q ? {} : { visibility: "hidden" }
  };
  return !n && o.totalCount === 0 && j ? /* @__PURE__ */ D.jsx(j, { ...dt(j, h) }) : /* @__PURE__ */ D.jsx(
    B,
    {
      ...dt(B, h),
      "data-testid": n ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: C,
      style: ie,
      children: (n ? o.topItems : o.items).map((K) => {
        const fe = K.originalIndex, we = x(fe + o.firstItemIndex, K.data, h);
        return T ? /* @__PURE__ */ re.createElement(
          $,
          {
            ...dt($, h),
            height: K.size,
            index: K.index,
            key: we,
            type: K.type || "item",
            ...K.type === "group" ? {} : { groupIndex: K.groupIndex }
          }
        ) : K.type === "group" ? /* @__PURE__ */ re.createElement(
          H,
          {
            ...dt(H, h),
            "data-index": fe,
            "data-item-index": K.index,
            "data-known-size": K.size,
            key: we,
            style: Gx
          },
          v(K.index, h)
        ) : /* @__PURE__ */ re.createElement(
          F,
          {
            ...dt(F, h),
            ...Dg(F, K.data),
            "data-index": fe,
            "data-item-group-index": K.groupIndex,
            "data-item-index": K.index,
            "data-known-size": K.size,
            key: we,
            style: O ? qx : Mg
          },
          L ? g(K.index, K.groupIndex, K.data, h) : g(K.index, K.data, h)
        );
      })
    }
  );
}), Xx = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, Zx = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, hi = (n) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...n ? { display: "flex", flexDirection: "column" } : {}
}), Jx = {
  position: Sf(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function dt(n, o) {
  if (typeof n != "string")
    return { context: o };
}
function Dg(n, o) {
  return { item: typeof n == "string" ? void 0 : o };
}
const eS = /* @__PURE__ */ ae.memo(function() {
  const n = De("HeaderComponent"), o = zn("headerHeight"), l = De("HeaderFooterTag"), s = fr(
    ae.useMemo(
      () => (f) => {
        o(Vn(f, "height"));
      },
      [o]
    ),
    !0,
    De("skipAnimationFrameInResizeObserver")
  ), u = De("context");
  return n ? /* @__PURE__ */ D.jsx(l, { ref: s, children: /* @__PURE__ */ D.jsx(n, { ...dt(n, u) }) }) : null;
}), tS = /* @__PURE__ */ ae.memo(function() {
  const n = De("FooterComponent"), o = zn("footerHeight"), l = De("HeaderFooterTag"), s = fr(
    ae.useMemo(
      () => (f) => {
        o(Vn(f, "height"));
      },
      [o]
    ),
    !0,
    De("skipAnimationFrameInResizeObserver")
  ), u = De("context");
  return n ? /* @__PURE__ */ D.jsx(l, { ref: s, children: /* @__PURE__ */ D.jsx(n, { ...dt(n, u) }) }) : null;
});
function _f({ useEmitter: n, useEmitterValue: o, usePublisher: l }) {
  return ae.memo(function({ children: s, style: u, ...f }) {
    const d = l("scrollContainerState"), p = o("ScrollerComponent"), g = l("smoothScrollTargetReached"), h = o("scrollerRef"), v = o("context"), y = o("horizontalDirection") || !1, { scrollByCallback: _, scrollerRef: w, scrollToCallback: A } = Fg(
      d,
      g,
      p,
      h,
      void 0,
      y
    );
    return n("scrollTo", A), n("scrollBy", _), /* @__PURE__ */ D.jsx(
      p,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: w,
        style: { ...y ? Zx : Xx, ...u },
        tabIndex: 0,
        ...f,
        ...dt(p, v),
        children: s
      }
    );
  });
}
function Cf({ useEmitter: n, useEmitterValue: o, usePublisher: l }) {
  return ae.memo(function({ children: s, style: u, ...f }) {
    const d = l("windowScrollContainerState"), p = o("ScrollerComponent"), g = l("smoothScrollTargetReached"), h = o("totalListHeight"), v = o("deviation"), y = o("customScrollParent"), _ = o("context"), w = ae.useRef(null), A = o("scrollerRef"), { scrollByCallback: O, scrollerRef: C, scrollToCallback: E } = Fg(
      d,
      g,
      p,
      A,
      y
    );
    return jg(() => {
      var I;
      return C.current = y || ((I = w.current) == null ? void 0 : I.ownerDocument.defaultView), () => {
        C.current = null;
      };
    }, [C, y]), n("windowScrollTo", E), n("scrollBy", O), /* @__PURE__ */ D.jsx(
      p,
      {
        ref: w,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...u, ...h !== 0 ? { height: h + v } : {} },
        ...f,
        ...dt(p, _),
        children: s
      }
    );
  });
}
const nS = ({ children: n }) => {
  const o = ae.useContext(pa), l = zn("viewportHeight"), s = zn("fixedItemHeight"), u = De("alignToBottom"), f = De("horizontalDirection"), d = ae.useMemo(
    () => cl(l, (g) => Vn(g, f ? "width" : "height")),
    [l, f]
  ), p = fr(d, !0, De("skipAnimationFrameInResizeObserver"));
  return ae.useEffect(() => {
    o && (l(o.viewportHeight), s(o.itemHeight));
  }, [o, l, s]), /* @__PURE__ */ D.jsx("div", { "data-viewport-type": "element", ref: p, style: hi(u), children: n });
}, rS = ({ children: n }) => {
  const o = ae.useContext(pa), l = zn("windowViewportRect"), s = zn("fixedItemHeight"), u = De("customScrollParent"), f = pf(
    l,
    u,
    De("skipAnimationFrameInResizeObserver")
  ), d = De("alignToBottom");
  return ae.useEffect(() => {
    o && (s(o.itemHeight), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: 100 }));
  }, [o, l, s]), /* @__PURE__ */ D.jsx("div", { "data-viewport-type": "window", ref: f, style: hi(d), children: n });
}, oS = ({ children: n }) => {
  const o = De("TopItemListComponent") || "div", l = De("headerHeight"), s = { ...Jx, marginTop: `${l}px` }, u = De("context");
  return /* @__PURE__ */ D.jsx(o, { style: s, ...dt(o, u), children: n });
}, iS = /* @__PURE__ */ ae.memo(function(n) {
  const o = De("useWindowScroll"), l = De("topItemsIndexes").length > 0, s = De("customScrollParent"), u = De("context"), f = s || o ? aS : sS, d = s || o ? rS : nS;
  return /* @__PURE__ */ D.jsxs(f, { ...n, ...dt(f, u), children: [
    l && /* @__PURE__ */ D.jsx(oS, { children: /* @__PURE__ */ D.jsx(am, { showTopList: !0 }) }),
    /* @__PURE__ */ D.jsxs(d, { children: [
      /* @__PURE__ */ D.jsx(eS, {}),
      /* @__PURE__ */ D.jsx(am, {}),
      /* @__PURE__ */ D.jsx(tS, {})
    ] })
  ] });
}), {
  Component: lS,
  useEmitter: Ef,
  useEmitterValue: De,
  usePublisher: zn
} = /* @__PURE__ */ xf(
  Kx,
  {
    required: {},
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      itemContent: "itemContent",
      groupContent: "groupContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      totalCount: "totalCount",
      groupCounts: "groupCounts",
      topItemCount: "topItemCount",
      firstItemIndex: "firstItemIndex",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "HeaderFooterTag",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      horizontalDirection: "horizontalDirection",
      skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      autoscrollToBottom: "autoscrollToBottom",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  iS
), sS = /* @__PURE__ */ _f({ useEmitter: Ef, useEmitterValue: De, usePublisher: zn }), aS = /* @__PURE__ */ Cf({ useEmitter: Ef, useEmitterValue: De, usePublisher: zn }), uS = lS, cS = /* @__PURE__ */ nt(() => {
  const n = se((h) => /* @__PURE__ */ D.jsxs("td", { children: [
    "Item $",
    h
  ] })), o = se(null), l = se((h) => /* @__PURE__ */ D.jsxs("td", { colSpan: 1e3, children: [
    "Group ",
    h
  ] })), s = se(null), u = se(null), f = se({}), d = se(kf), p = se(pi), g = (h, v = null) => Zt(
    ee(
      f,
      me((y) => y[h]),
      gt()
    ),
    v
  );
  return {
    components: f,
    computeItemKey: d,
    context: o,
    EmptyPlaceholder: g("EmptyPlaceholder"),
    FillerRow: g("FillerRow"),
    fixedFooterContent: u,
    fixedHeaderContent: s,
    itemContent: n,
    groupContent: l,
    ScrollerComponent: g("Scroller", "div"),
    scrollerRef: p,
    ScrollSeekPlaceholder: g("ScrollSeekPlaceholder"),
    TableBodyComponent: g("TableBody", "tbody"),
    TableComponent: g("Table", "table"),
    TableFooterComponent: g("TableFoot", "tfoot"),
    TableHeadComponent: g("TableHead", "thead"),
    TableRowComponent: g("TableRow", "tr"),
    GroupComponent: g("Group", "tr")
  };
}), fS = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(Ng, cS)
), dS = ({ height: n }) => /* @__PURE__ */ D.jsx("tr", { children: /* @__PURE__ */ D.jsx("td", { style: { height: n } }) }), pS = ({ height: n }) => /* @__PURE__ */ D.jsx("tr", { children: /* @__PURE__ */ D.jsx("td", { style: { border: 0, height: n, padding: 0 } }) }), hS = { overflowAnchor: "none" }, um = { position: Sf(), zIndex: 2, overflowAnchor: "none" }, cm = /* @__PURE__ */ ae.memo(function({ showTopList: n = !1 }) {
  const o = He("listState"), l = He("computeItemKey"), s = He("firstItemIndex"), u = He("context"), f = He("isSeeking"), d = He("fixedHeaderHeight"), p = He("groupIndices").length > 0, g = He("itemContent"), h = He("groupContent"), v = He("ScrollSeekPlaceholder") || dS, y = He("GroupComponent"), _ = He("TableRowComponent"), w = (n ? o.topItems : []).reduce((O, C, E) => (E === 0 ? O.push(C.size) : O.push(O[E - 1] + C.size), O), []), A = (n ? o.topItems : o.items).map((O) => {
    const C = O.originalIndex, E = l(C + s, O.data, u), I = n ? C === 0 ? 0 : w[C - 1] : 0;
    return f ? /* @__PURE__ */ re.createElement(
      v,
      {
        ...dt(v, u),
        height: O.size,
        index: O.index,
        key: E,
        type: O.type || "item"
      }
    ) : O.type === "group" ? /* @__PURE__ */ re.createElement(
      y,
      {
        ...dt(y, u),
        "data-index": C,
        "data-item-index": O.index,
        "data-known-size": O.size,
        key: E,
        style: {
          ...um,
          top: d
        }
      },
      h(O.index, u)
    ) : /* @__PURE__ */ re.createElement(
      _,
      {
        ...dt(_, u),
        ...Dg(_, O.data),
        "data-index": C,
        "data-item-index": O.index,
        "data-known-size": O.size,
        "data-item-group-index": O.groupIndex,
        key: E,
        style: n ? { ...um, top: d + I } : hS
      },
      p ? g(O.index, O.groupIndex, O.data, u) : g(O.index, O.data, u)
    );
  });
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: A });
}), mS = /* @__PURE__ */ ae.memo(function() {
  const n = He("listState"), o = He("topItemsIndexes").length > 0, l = Un("sizeRanges"), s = He("useWindowScroll"), u = He("customScrollParent"), f = Un("windowScrollContainerState"), d = Un("scrollContainerState"), p = u || s ? f : d, g = He("trackItemSizes"), h = He("itemSize"), v = He("log"), { callbackRef: y, ref: _ } = vg(
    l,
    h,
    g,
    p,
    v,
    void 0,
    u,
    !1,
    He("skipAnimationFrameInResizeObserver")
  ), [w, A] = ae.useState(0);
  Tf("deviation", (L) => {
    w !== L && (_.current.style.marginTop = `${L}px`, A(L));
  });
  const O = He("EmptyPlaceholder"), C = He("FillerRow") || pS, E = He("TableBodyComponent"), I = He("paddingTopAddition"), j = He("statefulTotalCount"), $ = He("context");
  if (j === 0 && O)
    return /* @__PURE__ */ D.jsx(O, { ...dt(O, $) });
  const B = (o ? n.topItems : []).reduce((L, V) => L + V.size, 0), F = n.offsetTop + I + w - B, H = n.offsetBottom, x = F > 0 ? /* @__PURE__ */ D.jsx(C, { context: $, height: F }, "padding-top") : null, T = H > 0 ? /* @__PURE__ */ D.jsx(C, { context: $, height: H }, "padding-bottom") : null;
  return /* @__PURE__ */ D.jsxs(E, { "data-testid": "virtuoso-item-list", ref: y, ...dt(E, $), children: [
    x,
    o && /* @__PURE__ */ D.jsx(cm, { showTopList: !0 }),
    /* @__PURE__ */ D.jsx(cm, {}),
    T
  ] });
}), gS = ({ children: n }) => {
  const o = ae.useContext(pa), l = Un("viewportHeight"), s = Un("fixedItemHeight"), u = fr(
    ae.useMemo(() => cl(l, (f) => Vn(f, "height")), [l]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  );
  return ae.useEffect(() => {
    o && (l(o.viewportHeight), s(o.itemHeight));
  }, [o, l, s]), /* @__PURE__ */ D.jsx("div", { "data-viewport-type": "element", ref: u, style: hi(!1), children: n });
}, vS = ({ children: n }) => {
  const o = ae.useContext(pa), l = Un("windowViewportRect"), s = Un("fixedItemHeight"), u = He("customScrollParent"), f = pf(
    l,
    u,
    He("skipAnimationFrameInResizeObserver")
  );
  return ae.useEffect(() => {
    o && (s(o.itemHeight), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: 100 }));
  }, [o, l, s]), /* @__PURE__ */ D.jsx("div", { "data-viewport-type": "window", ref: f, style: hi(!1), children: n });
}, yS = /* @__PURE__ */ ae.memo(function(n) {
  const o = He("useWindowScroll"), l = He("customScrollParent"), s = Un("fixedHeaderHeight"), u = Un("fixedFooterHeight"), f = He("fixedHeaderContent"), d = He("fixedFooterContent"), p = He("context"), g = fr(
    ae.useMemo(() => cl(s, (E) => Vn(E, "height")), [s]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  ), h = fr(
    ae.useMemo(() => cl(u, (E) => Vn(E, "height")), [u]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  ), v = l || o ? SS : xS, y = l || o ? vS : gS, _ = He("TableComponent"), w = He("TableHeadComponent"), A = He("TableFooterComponent"), O = f ? /* @__PURE__ */ D.jsx(
    w,
    {
      ref: g,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...dt(w, p),
      children: f()
    },
    "TableHead"
  ) : null, C = d ? /* @__PURE__ */ D.jsx(
    A,
    {
      ref: h,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...dt(A, p),
      children: d()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ D.jsx(v, { ...n, ...dt(v, p), children: /* @__PURE__ */ D.jsx(y, { children: /* @__PURE__ */ D.jsxs(_, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...dt(_, p), children: [
    O,
    /* @__PURE__ */ D.jsx(mS, {}, "TableBody"),
    C
  ] }) }) });
}), {
  Component: wS,
  useEmitter: Tf,
  useEmitterValue: He,
  usePublisher: Un
} = /* @__PURE__ */ xf(
  fS,
  {
    required: {},
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      firstItemIndex: "firstItemIndex",
      itemContent: "itemContent",
      groupContent: "groupContent",
      fixedHeaderContent: "fixedHeaderContent",
      fixedFooterContent: "fixedFooterContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      totalCount: "totalCount",
      topItemCount: "topItemCount",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      groupCounts: "groupCounts",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  yS
), xS = /* @__PURE__ */ _f({ useEmitter: Tf, useEmitterValue: He, usePublisher: Un }), SS = /* @__PURE__ */ Cf({ useEmitter: Tf, useEmitterValue: He, usePublisher: Un }), kS = wS, fm = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, _S = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: dm, floor: ea, max: sl, min: gc, round: pm } = Math;
function hm(n, o, l) {
  return Array.from({ length: o - n + 1 }).map((s, u) => ({ data: l === null ? null : l[u + n], index: u + n }));
}
function CS(n) {
  return {
    ..._S,
    items: n
  };
}
function Hs(n, o) {
  return n && n.width === o.width && n.height === o.height;
}
function ES(n, o) {
  return n && n.column === o.column && n.row === o.row;
}
const TS = /* @__PURE__ */ nt(
  ([
    { increaseViewportBy: n, listBoundary: o, overscan: l, visibleRange: s },
    { footerHeight: u, headerHeight: f, scrollBy: d, scrollContainerState: p, scrollTo: g, scrollTop: h, smoothScrollTargetReached: v, viewportHeight: y },
    _,
    w,
    { didMount: A, propsReady: O },
    { customScrollParent: C, useWindowScroll: E, windowScrollContainerState: I, windowScrollTo: j, windowViewportRect: $ },
    B
  ]) => {
    const F = se(0), H = se(0), x = se(fm), T = se({ height: 0, width: 0 }), L = se({ height: 0, width: 0 }), V = qe(), Q = qe(), ie = se(0), K = se(null), fe = se({ column: 0, row: 0 }), we = qe(), ne = qe(), U = se(!1), Y = se(0), k = se(!0), z = se(!1), G = se(!1);
    ot(
      ee(
        A,
        $e(Y),
        Fe(([b, oe]) => !!oe)
      ),
      () => {
        We(k, !1);
      }
    ), ot(
      ee(
        Dt(A, k, L, T, Y, z),
        Fe(([b, oe, xe, pe, , Ie]) => b && !oe && xe.height !== 0 && pe.height !== 0 && !Ie)
      ),
      ([, , , , b]) => {
        We(z, !0), gf(1, () => {
          We(V, b);
        }), cr(ee(h), () => {
          We(o, [0, 0]), We(k, !0);
        });
      }
    ), Te(
      ee(
        ne,
        Fe((b) => b != null && b.scrollTop > 0),
        ir(0)
      ),
      H
    ), ot(
      ee(
        A,
        $e(ne),
        Fe(([, b]) => b != null)
      ),
      ([, b]) => {
        b && (We(T, b.viewport), We(L, b.item), We(fe, b.gap), b.scrollTop > 0 && (We(U, !0), cr(ee(h, ai(1)), (oe) => {
          We(U, !1);
        }), We(g, { top: b.scrollTop })));
      }
    ), Te(
      ee(
        T,
        me(({ height: b }) => b)
      ),
      y
    ), Te(
      ee(
        Dt(
          Me(T, Hs),
          Me(L, Hs),
          Me(fe, (b, oe) => b && b.column === oe.column && b.row === oe.row),
          Me(h)
        ),
        me(([b, oe, xe, pe]) => ({
          gap: xe,
          item: oe,
          scrollTop: pe,
          viewport: b
        }))
      ),
      we
    ), Te(
      ee(
        Dt(
          Me(F),
          s,
          Me(fe, ES),
          Me(L, Hs),
          Me(T, Hs),
          Me(K),
          Me(H),
          Me(U),
          Me(k),
          Me(Y)
        ),
        Fe(([, , , , , , , b]) => !b),
        me(
          ([
            b,
            [oe, xe],
            pe,
            Ie,
            Be,
            Ue,
            Re,
            ,
            ze,
            Ve
          ]) => {
            const { column: Ne, row: _e } = pe, { height: Ge, width: St } = Ie, { width: kt } = Be;
            if (Re === 0 && (b === 0 || kt === 0))
              return fm;
            if (St === 0) {
              const Et = vf(Ve, b), Tt = Et + Math.max(Re - 1, 0);
              return CS(hm(Et, Tt, Ue));
            }
            const Nt = Hg(kt, St, Ne);
            let tt, it;
            ze ? oe === 0 && xe === 0 && Re > 0 ? (tt = 0, it = Re - 1) : (tt = Nt * ea((oe + _e) / (Ge + _e)), it = Nt * dm((xe + _e) / (Ge + _e)) - 1, it = gc(b - 1, sl(it, Nt - 1)), tt = gc(it, sl(0, tt))) : (tt = 0, it = -1);
            const Xe = hm(tt, it, Ue), { bottom: lt, top: pt } = mm(Be, pe, Ie, Xe), Kt = dm(b / Nt), sn = Kt * Ge + (Kt - 1) * _e - lt;
            return { bottom: lt, itemHeight: Ge, items: Xe, itemWidth: St, offsetBottom: sn, offsetTop: pt, top: pt };
          }
        )
      ),
      x
    ), Te(
      ee(
        K,
        Fe((b) => b !== null),
        me((b) => b.length)
      ),
      F
    ), Te(
      ee(
        Dt(T, L, x, fe),
        Fe(([b, oe, { items: xe }]) => xe.length > 0 && oe.height !== 0 && b.height !== 0),
        me(([b, oe, { items: xe }, pe]) => {
          const { bottom: Ie, top: Be } = mm(b, pe, oe, xe);
          return [Be, Ie];
        }),
        gt(pl)
      ),
      o
    );
    const q = se(!1);
    Te(
      ee(
        h,
        $e(q),
        me(([b, oe]) => oe || b !== 0)
      ),
      q
    );
    const de = kn(
      ee(
        Dt(x, F),
        Fe(([{ items: b }]) => b.length > 0),
        $e(q),
        Fe(([[b, oe], xe]) => {
          const pe = b.items[b.items.length - 1].index === oe - 1;
          return (xe || b.bottom > 0 && b.itemHeight > 0 && b.offsetBottom === 0 && b.items.length === oe) && pe;
        }),
        me(([[, b]]) => b - 1),
        gt()
      )
    ), ke = kn(
      ee(
        Me(x),
        Fe(({ items: b }) => b.length > 0 && b[0].index === 0),
        ir(0),
        gt()
      )
    ), ge = kn(
      ee(
        Me(x),
        $e(U),
        Fe(([{ items: b }, oe]) => b.length > 0 && !oe),
        me(([{ items: b }]) => ({
          endIndex: b[b.length - 1].index,
          startIndex: b[0].index
        })),
        gt(_g),
        Zr(0)
      )
    );
    Te(ge, w.scrollSeekRangeChanged), Te(
      ee(
        V,
        $e(T, L, F, fe),
        me(([b, oe, xe, pe, Ie]) => {
          const Be = Rg(b), { align: Ue, behavior: Re, offset: ze } = Be;
          let Ve = Be.index;
          Ve === "LAST" && (Ve = pe - 1), Ve = sl(0, Ve, gc(pe - 1, Ve));
          let Ne = Vc(oe, Ie, xe, Ve);
          return Ue === "end" ? Ne = pm(Ne - oe.height + xe.height) : Ue === "center" && (Ne = pm(Ne - oe.height / 2 + xe.height / 2)), ze && (Ne += ze), { behavior: Re, top: Ne };
        })
      ),
      g
    );
    const Ee = Zt(
      ee(
        x,
        me((b) => b.offsetBottom + b.bottom)
      ),
      0
    );
    return Te(
      ee(
        $,
        me((b) => ({ height: b.visibleHeight, width: b.visibleWidth }))
      ),
      T
    ), {
      customScrollParent: C,
      // input
      data: K,
      deviation: ie,
      footerHeight: u,
      gap: fe,
      headerHeight: f,
      increaseViewportBy: n,
      initialItemCount: H,
      itemDimensions: L,
      overscan: l,
      restoreStateFrom: ne,
      scrollBy: d,
      scrollContainerState: p,
      scrollHeight: Q,
      scrollTo: g,
      scrollToIndex: V,
      scrollTop: h,
      smoothScrollTargetReached: v,
      totalCount: F,
      useWindowScroll: E,
      viewportDimensions: T,
      windowScrollContainerState: I,
      windowScrollTo: j,
      windowViewportRect: $,
      ...w,
      // output
      gridState: x,
      horizontalDirection: G,
      initialTopMostItemIndex: Y,
      totalListHeight: Ee,
      ..._,
      endReached: de,
      propsReady: O,
      rangeChanged: ge,
      startReached: ke,
      stateChanged: we,
      stateRestoreInProgress: U,
      ...B
    };
  },
  yt(yf, ln, kl, Lg, so, wf, lo)
);
function Hg(n, o, l) {
  return sl(1, ea((n + l) / (ea(o) + l)));
}
function mm(n, o, l, s) {
  const { height: u } = l;
  if (u === void 0 || s.length === 0)
    return { bottom: 0, top: 0 };
  const f = Vc(n, o, l, s[0].index);
  return { bottom: Vc(n, o, l, s[s.length - 1].index) + u, top: f };
}
function Vc(n, o, l, s) {
  const u = Hg(n.width, l.width, o.column), f = ea(s / u), d = f * l.height + sl(0, f - 1) * o.row;
  return d > 0 ? d + o.row : d;
}
const IS = /* @__PURE__ */ nt(() => {
  const n = se((y) => `Item ${y}`), o = se({}), l = se(null), s = se("virtuoso-grid-item"), u = se("virtuoso-grid-list"), f = se(kf), d = se("div"), p = se(pi), g = (y, _ = null) => Zt(
    ee(
      o,
      me((w) => w[y]),
      gt()
    ),
    _
  ), h = se(!1), v = se(!1);
  return Te(Me(v), h), {
    components: o,
    computeItemKey: f,
    context: l,
    FooterComponent: g("Footer"),
    HeaderComponent: g("Header"),
    headerFooterTag: d,
    itemClassName: s,
    ItemComponent: g("Item", "div"),
    itemContent: n,
    listClassName: u,
    ListComponent: g("List", "div"),
    readyStateChanged: h,
    reportReadyState: v,
    ScrollerComponent: g("Scroller", "div"),
    scrollerRef: p,
    ScrollSeekPlaceholder: g("ScrollSeekPlaceholder", "div")
  };
}), RS = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(TS, IS)
), OS = /* @__PURE__ */ ae.memo(function() {
  const n = xt("gridState"), o = xt("listClassName"), l = xt("itemClassName"), s = xt("itemContent"), u = xt("computeItemKey"), f = xt("isSeeking"), d = Nn("scrollHeight"), p = xt("ItemComponent"), g = xt("ListComponent"), h = xt("ScrollSeekPlaceholder"), v = xt("context"), y = Nn("itemDimensions"), _ = Nn("gap"), w = xt("log"), A = xt("stateRestoreInProgress"), O = Nn("reportReadyState"), C = fr(
    ae.useMemo(
      () => (E) => {
        const I = E.parentElement.parentElement.scrollHeight;
        d(I);
        const j = E.firstChild;
        if (j) {
          const { height: $, width: B } = j.getBoundingClientRect();
          y({ height: $, width: B });
        }
        _({
          column: gm("column-gap", getComputedStyle(E).columnGap, w),
          row: gm("row-gap", getComputedStyle(E).rowGap, w)
        });
      },
      [d, y, _, w]
    ),
    !0,
    !1
  );
  return jg(() => {
    n.itemHeight > 0 && n.itemWidth > 0 && O(!0);
  }, [n]), A ? null : /* @__PURE__ */ D.jsx(
    g,
    {
      className: o,
      ref: C,
      ...dt(g, v),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: n.offsetBottom, paddingTop: n.offsetTop },
      children: n.items.map((E) => {
        const I = u(E.index, E.data, v);
        return f ? /* @__PURE__ */ D.jsx(
          h,
          {
            ...dt(h, v),
            height: n.itemHeight,
            index: E.index,
            width: n.itemWidth
          },
          I
        ) : /* @__PURE__ */ re.createElement(
          p,
          {
            ...dt(p, v),
            className: l,
            "data-index": E.index,
            key: I
          },
          s(E.index, E.data, v)
        );
      })
    }
  );
}), AS = ae.memo(function() {
  const n = xt("HeaderComponent"), o = Nn("headerHeight"), l = xt("headerFooterTag"), s = fr(
    ae.useMemo(
      () => (f) => {
        o(Vn(f, "height"));
      },
      [o]
    ),
    !0,
    !1
  ), u = xt("context");
  return n ? /* @__PURE__ */ D.jsx(l, { ref: s, children: /* @__PURE__ */ D.jsx(n, { ...dt(n, u) }) }) : null;
}), PS = ae.memo(function() {
  const n = xt("FooterComponent"), o = Nn("footerHeight"), l = xt("headerFooterTag"), s = fr(
    ae.useMemo(
      () => (f) => {
        o(Vn(f, "height"));
      },
      [o]
    ),
    !0,
    !1
  ), u = xt("context");
  return n ? /* @__PURE__ */ D.jsx(l, { ref: s, children: /* @__PURE__ */ D.jsx(n, { ...dt(n, u) }) }) : null;
}), LS = ({ children: n }) => {
  const o = ae.useContext(bg), l = Nn("itemDimensions"), s = Nn("viewportDimensions"), u = fr(
    ae.useMemo(
      () => (f) => {
        s(f.getBoundingClientRect());
      },
      [s]
    ),
    !0,
    !1
  );
  return ae.useEffect(() => {
    o && (s({ height: o.viewportHeight, width: o.viewportWidth }), l({ height: o.itemHeight, width: o.itemWidth }));
  }, [o, s, l]), /* @__PURE__ */ D.jsx("div", { ref: u, style: hi(!1), children: n });
}, zS = ({ children: n }) => {
  const o = ae.useContext(bg), l = Nn("windowViewportRect"), s = Nn("itemDimensions"), u = xt("customScrollParent"), f = pf(l, u, !1);
  return ae.useEffect(() => {
    o && (s({ height: o.itemHeight, width: o.itemWidth }), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: o.viewportWidth }));
  }, [o, l, s]), /* @__PURE__ */ D.jsx("div", { ref: f, style: hi(!1), children: n });
}, NS = /* @__PURE__ */ ae.memo(function({ ...n }) {
  const o = xt("useWindowScroll"), l = xt("customScrollParent"), s = l || o ? jS : bS, u = l || o ? zS : LS, f = xt("context");
  return /* @__PURE__ */ D.jsx(s, { ...n, ...dt(s, f), children: /* @__PURE__ */ D.jsxs(u, { children: [
    /* @__PURE__ */ D.jsx(AS, {}),
    /* @__PURE__ */ D.jsx(OS, {}),
    /* @__PURE__ */ D.jsx(PS, {})
  ] }) });
}), {
  useEmitter: Bg,
  useEmitterValue: xt,
  usePublisher: Nn
} = /* @__PURE__ */ xf(
  RS,
  {
    optional: {
      context: "context",
      totalCount: "totalCount",
      overscan: "overscan",
      itemContent: "itemContent",
      components: "components",
      computeItemKey: "computeItemKey",
      data: "data",
      initialItemCount: "initialItemCount",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "headerFooterTag",
      listClassName: "listClassName",
      itemClassName: "itemClassName",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      restoreStateFrom: "restoreStateFrom",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      increaseViewportBy: "increaseViewportBy"
    },
    methods: {
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      scrollToIndex: "scrollToIndex"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      stateChanged: "stateChanged",
      readyStateChanged: "readyStateChanged"
    }
  },
  NS
), bS = /* @__PURE__ */ _f({ useEmitter: Bg, useEmitterValue: xt, usePublisher: Nn }), jS = /* @__PURE__ */ Cf({ useEmitter: Bg, useEmitterValue: xt, usePublisher: Nn });
function gm(n, o, l) {
  return o !== "normal" && !(o != null && o.endsWith("px")) && l(`${n} was not resolved to pixel value correctly`, o, mn.WARN), o === "normal" ? 0 : parseInt(o ?? "0", 10);
}
function FS() {
  const n = re.useRef(null), [o, l] = re.useState(1120);
  return re.useEffect(() => {
    const s = n.current;
    if (!s) return;
    const u = new ResizeObserver(([f]) => {
      f.contentRect.width && l(f.contentRect.width);
    });
    return u.observe(s), () => u.disconnect();
  }, []), [n, o];
}
const MS = "_container_1yy9g_1", DS = "_cards_1yy9g_7", vm = {
  container: MS,
  cards: DS
}, HS = "_card_1ada5_1", BS = "_flex_1ada5_23", WS = "_field_1ada5_27", Bs = {
  card: HS,
  "dd-field-block": "_dd-field-block_1ada5_13",
  flex: BS,
  field: WS
}, US = "_terms_1cbzn_1", vc = {
  terms: US
};
function eo({ text: n, searchTerm: o }) {
  let l = n;
  return n && o && n.toLowerCase().includes(o.toLowerCase()) && (l = n.split(new RegExp(`(${o.replace(/[\\^$.*+?()[\]{}|/]/g, "\\$&")})`, "gi")).map((u, f) => u.toLowerCase() === o.toLowerCase() ? /* @__PURE__ */ D.jsx("mark", { children: u }, f) : /* @__PURE__ */ D.jsx("span", { children: u }, f))), /* @__PURE__ */ D.jsx(D.Fragment, { children: l });
}
function Wg({ terms: n, searchTerm: o }) {
  if (!n) return /* @__PURE__ */ D.jsx(D.Fragment, {});
  const l = (p) => p.trim().split(/\s+/), s = (p) => /^[A-Z]+:[A-Za-z0-9_]+$/.test(p), u = (p) => /^https?:\/\/\S+/.test(p), f = (p, g) => {
    if (s(p)) {
      const [h, v] = p.split(":"), y = encodeURIComponent(h === "NCIT" ? `http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#${v}` : `http://purl.obolibrary.org/obo/${h}_${v}`), _ = `https://bioportal.bioontology.org/ontologies/${h}/?p=classes&conceptid=${y}`;
      return /* @__PURE__ */ D.jsx("a", { href: _, target: "_blank", rel: "noopener noreferrer", className: vc.link, children: /* @__PURE__ */ D.jsx(eo, { text: p, searchTerm: o }) }, g);
    }
    return u(p) ? /* @__PURE__ */ D.jsx("a", { href: p, target: "_blank", rel: "noopener noreferrer", className: vc.link, children: /* @__PURE__ */ D.jsx(eo, { text: p, searchTerm: o }) }, g) : /* @__PURE__ */ D.jsx("span", { children: /* @__PURE__ */ D.jsx(eo, { text: p, searchTerm: o }) }, g);
  }, d = l(n);
  return /* @__PURE__ */ D.jsx("span", { className: vc.terms, children: d.map(f) });
}
const $S = "_values_14176_1", VS = "_flex_14176_6", YS = "_value_14176_1", yc = {
  values: $S,
  flex: VS,
  value: YS
};
function Ug({ values: n, searchTerm: o }) {
  const l = n.split("|").map((s, u) => {
    const f = s.split("=");
    return /* @__PURE__ */ D.jsxs("div", { className: yc.flex, children: [
      /* @__PURE__ */ D.jsx("span", { className: yc.value, children: /* @__PURE__ */ D.jsx(eo, { text: f[0].trim().replace(/"/g, ""), searchTerm: o }) }),
      /* @__PURE__ */ D.jsx("span", { children: /* @__PURE__ */ D.jsx(eo, { text: f[1].trim().replace(/\[|\]/g, ""), searchTerm: o }) })
    ] }, u);
  });
  return /* @__PURE__ */ D.jsx("div", { className: yc.values, children: l });
}
const ui = Math.min, To = Math.max, ta = Math.round, Ws = Math.floor, ur = (n) => ({
  x: n,
  y: n
}), KS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, QS = {
  start: "end",
  end: "start"
};
function Yc(n, o, l) {
  return To(n, ui(o, l));
}
function _l(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Oo(n) {
  return n.split("-")[0];
}
function Cl(n) {
  return n.split("-")[1];
}
function $g(n) {
  return n === "x" ? "y" : "x";
}
function If(n) {
  return n === "y" ? "height" : "width";
}
function Jr(n) {
  return ["top", "bottom"].includes(Oo(n)) ? "y" : "x";
}
function Rf(n) {
  return $g(Jr(n));
}
function GS(n, o, l) {
  l === void 0 && (l = !1);
  const s = Cl(n), u = Rf(n), f = If(u);
  let d = u === "x" ? s === (l ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return o.reference[f] > o.floating[f] && (d = na(d)), [d, na(d)];
}
function qS(n) {
  const o = na(n);
  return [Kc(n), o, Kc(o)];
}
function Kc(n) {
  return n.replace(/start|end/g, (o) => QS[o]);
}
function XS(n, o, l) {
  const s = ["left", "right"], u = ["right", "left"], f = ["top", "bottom"], d = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return l ? o ? u : s : o ? s : u;
    case "left":
    case "right":
      return o ? f : d;
    default:
      return [];
  }
}
function ZS(n, o, l, s) {
  const u = Cl(n);
  let f = XS(Oo(n), l === "start", s);
  return u && (f = f.map((d) => d + "-" + u), o && (f = f.concat(f.map(Kc)))), f;
}
function na(n) {
  return n.replace(/left|right|bottom|top/g, (o) => KS[o]);
}
function JS(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Vg(n) {
  return typeof n != "number" ? JS(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function ra(n) {
  const {
    x: o,
    y: l,
    width: s,
    height: u
  } = n;
  return {
    width: s,
    height: u,
    top: l,
    left: o,
    right: o + s,
    bottom: l + u,
    x: o,
    y: l
  };
}
function ym(n, o, l) {
  let {
    reference: s,
    floating: u
  } = n;
  const f = Jr(o), d = Rf(o), p = If(d), g = Oo(o), h = f === "y", v = s.x + s.width / 2 - u.width / 2, y = s.y + s.height / 2 - u.height / 2, _ = s[p] / 2 - u[p] / 2;
  let w;
  switch (g) {
    case "top":
      w = {
        x: v,
        y: s.y - u.height
      };
      break;
    case "bottom":
      w = {
        x: v,
        y: s.y + s.height
      };
      break;
    case "right":
      w = {
        x: s.x + s.width,
        y
      };
      break;
    case "left":
      w = {
        x: s.x - u.width,
        y
      };
      break;
    default:
      w = {
        x: s.x,
        y: s.y
      };
  }
  switch (Cl(o)) {
    case "start":
      w[d] -= _ * (l && h ? -1 : 1);
      break;
    case "end":
      w[d] += _ * (l && h ? -1 : 1);
      break;
  }
  return w;
}
const ek = async (n, o, l) => {
  const {
    placement: s = "bottom",
    strategy: u = "absolute",
    middleware: f = [],
    platform: d
  } = l, p = f.filter(Boolean), g = await (d.isRTL == null ? void 0 : d.isRTL(o));
  let h = await d.getElementRects({
    reference: n,
    floating: o,
    strategy: u
  }), {
    x: v,
    y
  } = ym(h, s, g), _ = s, w = {}, A = 0;
  for (let O = 0; O < p.length; O++) {
    const {
      name: C,
      fn: E
    } = p[O], {
      x: I,
      y: j,
      data: $,
      reset: B
    } = await E({
      x: v,
      y,
      initialPlacement: s,
      placement: _,
      strategy: u,
      middlewareData: w,
      rects: h,
      platform: d,
      elements: {
        reference: n,
        floating: o
      }
    });
    v = I ?? v, y = j ?? y, w = {
      ...w,
      [C]: {
        ...w[C],
        ...$
      }
    }, B && A <= 50 && (A++, typeof B == "object" && (B.placement && (_ = B.placement), B.rects && (h = B.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: o,
      strategy: u
    }) : B.rects), {
      x: v,
      y
    } = ym(h, _, g)), O = -1);
  }
  return {
    x: v,
    y,
    placement: _,
    strategy: u,
    middlewareData: w
  };
};
async function Yg(n, o) {
  var l;
  o === void 0 && (o = {});
  const {
    x: s,
    y: u,
    platform: f,
    rects: d,
    elements: p,
    strategy: g
  } = n, {
    boundary: h = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: y = "floating",
    altBoundary: _ = !1,
    padding: w = 0
  } = _l(o, n), A = Vg(w), C = p[_ ? y === "floating" ? "reference" : "floating" : y], E = ra(await f.getClippingRect({
    element: (l = await (f.isElement == null ? void 0 : f.isElement(C))) == null || l ? C : C.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
    boundary: h,
    rootBoundary: v,
    strategy: g
  })), I = y === "floating" ? {
    x: s,
    y: u,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, j = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating)), $ = await (f.isElement == null ? void 0 : f.isElement(j)) ? await (f.getScale == null ? void 0 : f.getScale(j)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, B = ra(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: I,
    offsetParent: j,
    strategy: g
  }) : I);
  return {
    top: (E.top - B.top + A.top) / $.y,
    bottom: (B.bottom - E.bottom + A.bottom) / $.y,
    left: (E.left - B.left + A.left) / $.x,
    right: (B.right - E.right + A.right) / $.x
  };
}
const tk = (n) => ({
  name: "arrow",
  options: n,
  async fn(o) {
    const {
      x: l,
      y: s,
      placement: u,
      rects: f,
      platform: d,
      elements: p,
      middlewareData: g
    } = o, {
      element: h,
      padding: v = 0
    } = _l(n, o) || {};
    if (h == null)
      return {};
    const y = Vg(v), _ = {
      x: l,
      y: s
    }, w = Rf(u), A = If(w), O = await d.getDimensions(h), C = w === "y", E = C ? "top" : "left", I = C ? "bottom" : "right", j = C ? "clientHeight" : "clientWidth", $ = f.reference[A] + f.reference[w] - _[w] - f.floating[A], B = _[w] - f.reference[w], F = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
    let H = F ? F[j] : 0;
    (!H || !await (d.isElement == null ? void 0 : d.isElement(F))) && (H = p.floating[j] || f.floating[A]);
    const x = $ / 2 - B / 2, T = H / 2 - O[A] / 2 - 1, L = ui(y[E], T), V = ui(y[I], T), Q = L, ie = H - O[A] - V, K = H / 2 - O[A] / 2 + x, fe = Yc(Q, K, ie), we = !g.arrow && Cl(u) != null && K !== fe && f.reference[A] / 2 - (K < Q ? L : V) - O[A] / 2 < 0, ne = we ? K < Q ? K - Q : K - ie : 0;
    return {
      [w]: _[w] + ne,
      data: {
        [w]: fe,
        centerOffset: K - fe - ne,
        ...we && {
          alignmentOffset: ne
        }
      },
      reset: we
    };
  }
}), nk = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(o) {
      var l, s;
      const {
        placement: u,
        middlewareData: f,
        rects: d,
        initialPlacement: p,
        platform: g,
        elements: h
      } = o, {
        mainAxis: v = !0,
        crossAxis: y = !0,
        fallbackPlacements: _,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: A = "none",
        flipAlignment: O = !0,
        ...C
      } = _l(n, o);
      if ((l = f.arrow) != null && l.alignmentOffset)
        return {};
      const E = Oo(u), I = Jr(p), j = Oo(p) === p, $ = await (g.isRTL == null ? void 0 : g.isRTL(h.floating)), B = _ || (j || !O ? [na(p)] : qS(p)), F = A !== "none";
      !_ && F && B.push(...ZS(p, O, A, $));
      const H = [p, ...B], x = await Yg(o, C), T = [];
      let L = ((s = f.flip) == null ? void 0 : s.overflows) || [];
      if (v && T.push(x[E]), y) {
        const K = GS(u, d, $);
        T.push(x[K[0]], x[K[1]]);
      }
      if (L = [...L, {
        placement: u,
        overflows: T
      }], !T.every((K) => K <= 0)) {
        var V, Q;
        const K = (((V = f.flip) == null ? void 0 : V.index) || 0) + 1, fe = H[K];
        if (fe && (!(y === "alignment" ? I !== Jr(fe) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((U) => U.overflows[0] > 0 && Jr(U.placement) === I)))
          return {
            data: {
              index: K,
              overflows: L
            },
            reset: {
              placement: fe
            }
          };
        let we = (Q = L.filter((ne) => ne.overflows[0] <= 0).sort((ne, U) => ne.overflows[1] - U.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!we)
          switch (w) {
            case "bestFit": {
              var ie;
              const ne = (ie = L.filter((U) => {
                if (F) {
                  const Y = Jr(U.placement);
                  return Y === I || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((Y) => Y > 0).reduce((Y, k) => Y + k, 0)]).sort((U, Y) => U[1] - Y[1])[0]) == null ? void 0 : ie[0];
              ne && (we = ne);
              break;
            }
            case "initialPlacement":
              we = p;
              break;
          }
        if (u !== we)
          return {
            reset: {
              placement: we
            }
          };
      }
      return {};
    }
  };
};
async function rk(n, o) {
  const {
    placement: l,
    platform: s,
    elements: u
  } = n, f = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), d = Oo(l), p = Cl(l), g = Jr(l) === "y", h = ["left", "top"].includes(d) ? -1 : 1, v = f && g ? -1 : 1, y = _l(o, n);
  let {
    mainAxis: _,
    crossAxis: w,
    alignmentAxis: A
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return p && typeof A == "number" && (w = p === "end" ? A * -1 : A), g ? {
    x: w * v,
    y: _ * h
  } : {
    x: _ * h,
    y: w * v
  };
}
const ok = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(o) {
      var l, s;
      const {
        x: u,
        y: f,
        placement: d,
        middlewareData: p
      } = o, g = await rk(o, n);
      return d === ((l = p.offset) == null ? void 0 : l.placement) && (s = p.arrow) != null && s.alignmentOffset ? {} : {
        x: u + g.x,
        y: f + g.y,
        data: {
          ...g,
          placement: d
        }
      };
    }
  };
}, ik = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(o) {
      const {
        x: l,
        y: s,
        placement: u
      } = o, {
        mainAxis: f = !0,
        crossAxis: d = !1,
        limiter: p = {
          fn: (C) => {
            let {
              x: E,
              y: I
            } = C;
            return {
              x: E,
              y: I
            };
          }
        },
        ...g
      } = _l(n, o), h = {
        x: l,
        y: s
      }, v = await Yg(o, g), y = Jr(Oo(u)), _ = $g(y);
      let w = h[_], A = h[y];
      if (f) {
        const C = _ === "y" ? "top" : "left", E = _ === "y" ? "bottom" : "right", I = w + v[C], j = w - v[E];
        w = Yc(I, w, j);
      }
      if (d) {
        const C = y === "y" ? "top" : "left", E = y === "y" ? "bottom" : "right", I = A + v[C], j = A - v[E];
        A = Yc(I, A, j);
      }
      const O = p.fn({
        ...o,
        [_]: w,
        [y]: A
      });
      return {
        ...O,
        data: {
          x: O.x - l,
          y: O.y - s,
          enabled: {
            [_]: f,
            [y]: d
          }
        }
      };
    }
  };
};
function ha() {
  return typeof window < "u";
}
function mi(n) {
  return Kg(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function _n(n) {
  var o;
  return (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function hr(n) {
  var o;
  return (o = (Kg(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : o.documentElement;
}
function Kg(n) {
  return ha() ? n instanceof Node || n instanceof _n(n).Node : !1;
}
function Yn(n) {
  return ha() ? n instanceof Element || n instanceof _n(n).Element : !1;
}
function dr(n) {
  return ha() ? n instanceof HTMLElement || n instanceof _n(n).HTMLElement : !1;
}
function wm(n) {
  return !ha() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof _n(n).ShadowRoot;
}
function El(n) {
  const {
    overflow: o,
    overflowX: l,
    overflowY: s,
    display: u
  } = Kn(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + s + l) && !["inline", "contents"].includes(u);
}
function lk(n) {
  return ["table", "td", "th"].includes(mi(n));
}
function ma(n) {
  return [":popover-open", ":modal"].some((o) => {
    try {
      return n.matches(o);
    } catch {
      return !1;
    }
  });
}
function Of(n) {
  const o = Af(), l = Yn(n) ? Kn(n) : n;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((s) => l[s] ? l[s] !== "none" : !1) || (l.containerType ? l.containerType !== "normal" : !1) || !o && (l.backdropFilter ? l.backdropFilter !== "none" : !1) || !o && (l.filter ? l.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((s) => (l.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (l.contain || "").includes(s));
}
function sk(n) {
  let o = oo(n);
  for (; dr(o) && !ci(o); ) {
    if (Of(o))
      return o;
    if (ma(o))
      return null;
    o = oo(o);
  }
  return null;
}
function Af() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ci(n) {
  return ["html", "body", "#document"].includes(mi(n));
}
function Kn(n) {
  return _n(n).getComputedStyle(n);
}
function ga(n) {
  return Yn(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function oo(n) {
  if (mi(n) === "html")
    return n;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    wm(n) && n.host || // Fallback.
    hr(n)
  );
  return wm(o) ? o.host : o;
}
function Qg(n) {
  const o = oo(n);
  return ci(o) ? n.ownerDocument ? n.ownerDocument.body : n.body : dr(o) && El(o) ? o : Qg(o);
}
function gl(n, o, l) {
  var s;
  o === void 0 && (o = []), l === void 0 && (l = !0);
  const u = Qg(n), f = u === ((s = n.ownerDocument) == null ? void 0 : s.body), d = _n(u);
  if (f) {
    const p = Qc(d);
    return o.concat(d, d.visualViewport || [], El(u) ? u : [], p && l ? gl(p) : []);
  }
  return o.concat(u, gl(u, [], l));
}
function Qc(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Gg(n) {
  const o = Kn(n);
  let l = parseFloat(o.width) || 0, s = parseFloat(o.height) || 0;
  const u = dr(n), f = u ? n.offsetWidth : l, d = u ? n.offsetHeight : s, p = ta(l) !== f || ta(s) !== d;
  return p && (l = f, s = d), {
    width: l,
    height: s,
    $: p
  };
}
function Pf(n) {
  return Yn(n) ? n : n.contextElement;
}
function li(n) {
  const o = Pf(n);
  if (!dr(o))
    return ur(1);
  const l = o.getBoundingClientRect(), {
    width: s,
    height: u,
    $: f
  } = Gg(o);
  let d = (f ? ta(l.width) : l.width) / s, p = (f ? ta(l.height) : l.height) / u;
  return (!d || !Number.isFinite(d)) && (d = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: d,
    y: p
  };
}
const ak = /* @__PURE__ */ ur(0);
function qg(n) {
  const o = _n(n);
  return !Af() || !o.visualViewport ? ak : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function uk(n, o, l) {
  return o === void 0 && (o = !1), !l || o && l !== _n(n) ? !1 : o;
}
function Ao(n, o, l, s) {
  o === void 0 && (o = !1), l === void 0 && (l = !1);
  const u = n.getBoundingClientRect(), f = Pf(n);
  let d = ur(1);
  o && (s ? Yn(s) && (d = li(s)) : d = li(n));
  const p = uk(f, l, s) ? qg(f) : ur(0);
  let g = (u.left + p.x) / d.x, h = (u.top + p.y) / d.y, v = u.width / d.x, y = u.height / d.y;
  if (f) {
    const _ = _n(f), w = s && Yn(s) ? _n(s) : s;
    let A = _, O = Qc(A);
    for (; O && s && w !== A; ) {
      const C = li(O), E = O.getBoundingClientRect(), I = Kn(O), j = E.left + (O.clientLeft + parseFloat(I.paddingLeft)) * C.x, $ = E.top + (O.clientTop + parseFloat(I.paddingTop)) * C.y;
      g *= C.x, h *= C.y, v *= C.x, y *= C.y, g += j, h += $, A = _n(O), O = Qc(A);
    }
  }
  return ra({
    width: v,
    height: y,
    x: g,
    y: h
  });
}
function Lf(n, o) {
  const l = ga(n).scrollLeft;
  return o ? o.left + l : Ao(hr(n)).left + l;
}
function Xg(n, o, l) {
  l === void 0 && (l = !1);
  const s = n.getBoundingClientRect(), u = s.left + o.scrollLeft - (l ? 0 : (
    // RTL <body> scrollbar.
    Lf(n, s)
  )), f = s.top + o.scrollTop;
  return {
    x: u,
    y: f
  };
}
function ck(n) {
  let {
    elements: o,
    rect: l,
    offsetParent: s,
    strategy: u
  } = n;
  const f = u === "fixed", d = hr(s), p = o ? ma(o.floating) : !1;
  if (s === d || p && f)
    return l;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = ur(1);
  const v = ur(0), y = dr(s);
  if ((y || !y && !f) && ((mi(s) !== "body" || El(d)) && (g = ga(s)), dr(s))) {
    const w = Ao(s);
    h = li(s), v.x = w.x + s.clientLeft, v.y = w.y + s.clientTop;
  }
  const _ = d && !y && !f ? Xg(d, g, !0) : ur(0);
  return {
    width: l.width * h.x,
    height: l.height * h.y,
    x: l.x * h.x - g.scrollLeft * h.x + v.x + _.x,
    y: l.y * h.y - g.scrollTop * h.y + v.y + _.y
  };
}
function fk(n) {
  return Array.from(n.getClientRects());
}
function dk(n) {
  const o = hr(n), l = ga(n), s = n.ownerDocument.body, u = To(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), f = To(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
  let d = -l.scrollLeft + Lf(n);
  const p = -l.scrollTop;
  return Kn(s).direction === "rtl" && (d += To(o.clientWidth, s.clientWidth) - u), {
    width: u,
    height: f,
    x: d,
    y: p
  };
}
function pk(n, o) {
  const l = _n(n), s = hr(n), u = l.visualViewport;
  let f = s.clientWidth, d = s.clientHeight, p = 0, g = 0;
  if (u) {
    f = u.width, d = u.height;
    const h = Af();
    (!h || h && o === "fixed") && (p = u.offsetLeft, g = u.offsetTop);
  }
  return {
    width: f,
    height: d,
    x: p,
    y: g
  };
}
function hk(n, o) {
  const l = Ao(n, !0, o === "fixed"), s = l.top + n.clientTop, u = l.left + n.clientLeft, f = dr(n) ? li(n) : ur(1), d = n.clientWidth * f.x, p = n.clientHeight * f.y, g = u * f.x, h = s * f.y;
  return {
    width: d,
    height: p,
    x: g,
    y: h
  };
}
function xm(n, o, l) {
  let s;
  if (o === "viewport")
    s = pk(n, l);
  else if (o === "document")
    s = dk(hr(n));
  else if (Yn(o))
    s = hk(o, l);
  else {
    const u = qg(n);
    s = {
      x: o.x - u.x,
      y: o.y - u.y,
      width: o.width,
      height: o.height
    };
  }
  return ra(s);
}
function Zg(n, o) {
  const l = oo(n);
  return l === o || !Yn(l) || ci(l) ? !1 : Kn(l).position === "fixed" || Zg(l, o);
}
function mk(n, o) {
  const l = o.get(n);
  if (l)
    return l;
  let s = gl(n, [], !1).filter((p) => Yn(p) && mi(p) !== "body"), u = null;
  const f = Kn(n).position === "fixed";
  let d = f ? oo(n) : n;
  for (; Yn(d) && !ci(d); ) {
    const p = Kn(d), g = Of(d);
    !g && p.position === "fixed" && (u = null), (f ? !g && !u : !g && p.position === "static" && !!u && ["absolute", "fixed"].includes(u.position) || El(d) && !g && Zg(n, d)) ? s = s.filter((v) => v !== d) : u = p, d = oo(d);
  }
  return o.set(n, s), s;
}
function gk(n) {
  let {
    element: o,
    boundary: l,
    rootBoundary: s,
    strategy: u
  } = n;
  const d = [...l === "clippingAncestors" ? ma(o) ? [] : mk(o, this._c) : [].concat(l), s], p = d[0], g = d.reduce((h, v) => {
    const y = xm(o, v, u);
    return h.top = To(y.top, h.top), h.right = ui(y.right, h.right), h.bottom = ui(y.bottom, h.bottom), h.left = To(y.left, h.left), h;
  }, xm(o, p, u));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function vk(n) {
  const {
    width: o,
    height: l
  } = Gg(n);
  return {
    width: o,
    height: l
  };
}
function yk(n, o, l) {
  const s = dr(o), u = hr(o), f = l === "fixed", d = Ao(n, !0, f, o);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = ur(0);
  function h() {
    g.x = Lf(u);
  }
  if (s || !s && !f)
    if ((mi(o) !== "body" || El(u)) && (p = ga(o)), s) {
      const w = Ao(o, !0, f, o);
      g.x = w.x + o.clientLeft, g.y = w.y + o.clientTop;
    } else u && h();
  f && !s && u && h();
  const v = u && !s && !f ? Xg(u, p) : ur(0), y = d.left + p.scrollLeft - g.x - v.x, _ = d.top + p.scrollTop - g.y - v.y;
  return {
    x: y,
    y: _,
    width: d.width,
    height: d.height
  };
}
function wc(n) {
  return Kn(n).position === "static";
}
function Sm(n, o) {
  if (!dr(n) || Kn(n).position === "fixed")
    return null;
  if (o)
    return o(n);
  let l = n.offsetParent;
  return hr(n) === l && (l = l.ownerDocument.body), l;
}
function Jg(n, o) {
  const l = _n(n);
  if (ma(n))
    return l;
  if (!dr(n)) {
    let u = oo(n);
    for (; u && !ci(u); ) {
      if (Yn(u) && !wc(u))
        return u;
      u = oo(u);
    }
    return l;
  }
  let s = Sm(n, o);
  for (; s && lk(s) && wc(s); )
    s = Sm(s, o);
  return s && ci(s) && wc(s) && !Of(s) ? l : s || sk(n) || l;
}
const wk = async function(n) {
  const o = this.getOffsetParent || Jg, l = this.getDimensions, s = await l(n.floating);
  return {
    reference: yk(n.reference, await o(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function xk(n) {
  return Kn(n).direction === "rtl";
}
const Sk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ck,
  getDocumentElement: hr,
  getClippingRect: gk,
  getOffsetParent: Jg,
  getElementRects: wk,
  getClientRects: fk,
  getDimensions: vk,
  getScale: li,
  isElement: Yn,
  isRTL: xk
};
function ev(n, o) {
  return n.x === o.x && n.y === o.y && n.width === o.width && n.height === o.height;
}
function kk(n, o) {
  let l = null, s;
  const u = hr(n);
  function f() {
    var p;
    clearTimeout(s), (p = l) == null || p.disconnect(), l = null;
  }
  function d(p, g) {
    p === void 0 && (p = !1), g === void 0 && (g = 1), f();
    const h = n.getBoundingClientRect(), {
      left: v,
      top: y,
      width: _,
      height: w
    } = h;
    if (p || o(), !_ || !w)
      return;
    const A = Ws(y), O = Ws(u.clientWidth - (v + _)), C = Ws(u.clientHeight - (y + w)), E = Ws(v), j = {
      rootMargin: -A + "px " + -O + "px " + -C + "px " + -E + "px",
      threshold: To(0, ui(1, g)) || 1
    };
    let $ = !0;
    function B(F) {
      const H = F[0].intersectionRatio;
      if (H !== g) {
        if (!$)
          return d();
        H ? d(!1, H) : s = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      H === 1 && !ev(h, n.getBoundingClientRect()) && d(), $ = !1;
    }
    try {
      l = new IntersectionObserver(B, {
        ...j,
        // Handle <iframe>s
        root: u.ownerDocument
      });
    } catch {
      l = new IntersectionObserver(B, j);
    }
    l.observe(n);
  }
  return d(!0), f;
}
function _k(n, o, l, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: u = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = s, h = Pf(n), v = u || f ? [...h ? gl(h) : [], ...gl(o)] : [];
  v.forEach((E) => {
    u && E.addEventListener("scroll", l, {
      passive: !0
    }), f && E.addEventListener("resize", l);
  });
  const y = h && p ? kk(h, l) : null;
  let _ = -1, w = null;
  d && (w = new ResizeObserver((E) => {
    let [I] = E;
    I && I.target === h && w && (w.unobserve(o), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
      var j;
      (j = w) == null || j.observe(o);
    })), l();
  }), h && !g && w.observe(h), w.observe(o));
  let A, O = g ? Ao(n) : null;
  g && C();
  function C() {
    const E = Ao(n);
    O && !ev(O, E) && l(), O = E, A = requestAnimationFrame(C);
  }
  return l(), () => {
    var E;
    v.forEach((I) => {
      u && I.removeEventListener("scroll", l), f && I.removeEventListener("resize", l);
    }), y == null || y(), (E = w) == null || E.disconnect(), w = null, g && cancelAnimationFrame(A);
  };
}
const Ck = ok, Ek = ik, Tk = nk, Ik = tk, km = (n, o, l) => {
  const s = /* @__PURE__ */ new Map(), u = {
    platform: Sk,
    ...l
  }, f = {
    ...u.platform,
    _c: s
  };
  return ek(n, o, {
    ...u,
    platform: f
  });
};
var xc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var _m;
function Rk() {
  return _m || (_m = 1, function(n) {
    (function() {
      var o = {}.hasOwnProperty;
      function l() {
        for (var f = "", d = 0; d < arguments.length; d++) {
          var p = arguments[d];
          p && (f = u(f, s(p)));
        }
        return f;
      }
      function s(f) {
        if (typeof f == "string" || typeof f == "number")
          return f;
        if (typeof f != "object")
          return "";
        if (Array.isArray(f))
          return l.apply(null, f);
        if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
          return f.toString();
        var d = "";
        for (var p in f)
          o.call(f, p) && f[p] && (d = u(d, p));
        return d;
      }
      function u(f, d) {
        return d ? f ? f + " " + d : f + d : f;
      }
      n.exports ? (l.default = l, n.exports = l) : window.classNames = l;
    })();
  }(xc)), xc.exports;
}
var Ok = Rk();
const Gc = /* @__PURE__ */ vl(Ok);
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const Ak = "react-tooltip-core-styles", Pk = "react-tooltip-base-styles", Cm = { core: !1, base: !1 };
function Em({ css: n, id: o = Pk, type: l = "base", ref: s }) {
  var u, f;
  if (!n || typeof document > "u" || Cm[l] || l === "core" && typeof process < "u" && (!((u = process == null ? void 0 : process.env) === null || u === void 0) && u.REACT_TOOLTIP_DISABLE_CORE_STYLES) || l !== "base" && typeof process < "u" && (!((f = process == null ? void 0 : process.env) === null || f === void 0) && f.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  l === "core" && (o = Ak), s || (s = {});
  const { insertAt: d } = s;
  if (document.getElementById(o)) return;
  const p = document.head || document.getElementsByTagName("head")[0], g = document.createElement("style");
  g.id = o, g.type = "text/css", d === "top" && p.firstChild ? p.insertBefore(g, p.firstChild) : p.appendChild(g), g.styleSheet ? g.styleSheet.cssText = n : g.appendChild(document.createTextNode(n)), Cm[l] = !0;
}
const Tm = async ({ elementReference: n = null, tooltipReference: o = null, tooltipArrowReference: l = null, place: s = "top", offset: u = 10, strategy: f = "absolute", middlewares: d = [Ck(Number(u)), Tk({ fallbackAxisSideDirection: "start" }), Ek({ padding: 5 })], border: p }) => {
  if (!n) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: s };
  if (o === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: s };
  const g = d;
  return l ? (g.push(Ik({ element: l, padding: 5 })), km(n, o, { placement: s, strategy: f, middleware: g }).then(({ x: h, y: v, placement: y, middlewareData: _ }) => {
    var w, A;
    const O = { left: `${h}px`, top: `${v}px`, border: p }, { x: C, y: E } = (w = _.arrow) !== null && w !== void 0 ? w : { x: 0, y: 0 }, I = (A = { top: "bottom", right: "left", bottom: "top", left: "right" }[y.split("-")[0]]) !== null && A !== void 0 ? A : "bottom", j = p && { borderBottom: p, borderRight: p };
    let $ = 0;
    if (p) {
      const B = `${p}`.match(/(\d+)px/);
      $ = B != null && B[1] ? Number(B[1]) : 1;
    }
    return { tooltipStyles: O, tooltipArrowStyles: { left: C != null ? `${C}px` : "", top: E != null ? `${E}px` : "", right: "", bottom: "", ...j, [I]: `-${4 + $}px` }, place: y };
  })) : km(n, o, { placement: "bottom", strategy: f, middleware: g }).then(({ x: h, y: v, placement: y }) => ({ tooltipStyles: { left: `${h}px`, top: `${v}px` }, tooltipArrowStyles: {}, place: y }));
}, Im = (n, o) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(n, o), Rm = (n, o, l) => {
  let s = null;
  const u = function(...f) {
    const d = () => {
      s = null;
    };
    !s && (n.apply(this, f), s = setTimeout(d, o));
  };
  return u.cancel = () => {
    s && (clearTimeout(s), s = null);
  }, u;
}, Om = (n) => n !== null && !Array.isArray(n) && typeof n == "object", qc = (n, o) => {
  if (n === o) return !0;
  if (Array.isArray(n) && Array.isArray(o)) return n.length === o.length && n.every((u, f) => qc(u, o[f]));
  if (Array.isArray(n) !== Array.isArray(o)) return !1;
  if (!Om(n) || !Om(o)) return n === o;
  const l = Object.keys(n), s = Object.keys(o);
  return l.length === s.length && l.every((u) => qc(n[u], o[u]));
}, Lk = (n) => {
  if (!(n instanceof HTMLElement || n instanceof SVGElement)) return !1;
  const o = getComputedStyle(n);
  return ["overflow", "overflow-x", "overflow-y"].some((l) => {
    const s = o.getPropertyValue(l);
    return s === "auto" || s === "scroll";
  });
}, Am = (n) => {
  if (!n) return null;
  let o = n.parentElement;
  for (; o; ) {
    if (Lk(o)) return o;
    o = o.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, zk = typeof window < "u" ? re.useLayoutEffect : re.useEffect, Ln = (n) => {
  n.current && (clearTimeout(n.current), n.current = null);
}, Nk = "DEFAULT_TOOLTIP_ID", bk = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, jk = re.createContext({ getTooltipData: () => bk });
function tv(n = Nk) {
  return re.useContext(jk).getTooltipData(n);
}
var ti = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Sc = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Fk = ({ forwardRef: n, id: o, className: l, classNameArrow: s, variant: u = "dark", anchorId: f, anchorSelect: d, place: p = "top", offset: g = 10, events: h = ["hover"], openOnClick: v = !1, positionStrategy: y = "absolute", middlewares: _, wrapper: w, delayShow: A = 0, delayHide: O = 0, float: C = !1, hidden: E = !1, noArrow: I = !1, clickable: j = !1, closeOnEsc: $ = !1, closeOnScroll: B = !1, closeOnResize: F = !1, openEvents: H, closeEvents: x, globalCloseEvents: T, imperativeModeOnly: L, style: V, position: Q, afterShow: ie, afterHide: K, disableTooltip: fe, content: we, contentWrapperRef: ne, isOpen: U, defaultIsOpen: Y = !1, setIsOpen: k, activeAnchor: z, setActiveAnchor: G, border: q, opacity: de, arrowColor: ke, role: ge = "tooltip" }) => {
  var Ee;
  const b = re.useRef(null), oe = re.useRef(null), xe = re.useRef(null), pe = re.useRef(null), Ie = re.useRef(null), [Be, Ue] = re.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: p }), [Re, ze] = re.useState(!1), [Ve, Ne] = re.useState(!1), [_e, Ge] = re.useState(null), St = re.useRef(!1), kt = re.useRef(null), { anchorRefs: Nt, setActiveAnchor: tt } = tv(o), it = re.useRef(!1), [Xe, lt] = re.useState([]), pt = re.useRef(!1), Kt = v || h.includes("click"), sn = Kt || (H == null ? void 0 : H.click) || (H == null ? void 0 : H.dblclick) || (H == null ? void 0 : H.mousedown), Et = H ? { ...H } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !H && Kt && Object.assign(Et, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const Tt = x ? { ...x } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !x && Kt && Object.assign(Tt, { mouseleave: !1, blur: !1, mouseout: !1 });
  const Lt = T ? { ...T } : { escape: $ || !1, scroll: B || !1, resize: F || !1, clickOutsideAnchor: sn || !1 };
  L && (Object.assign(Et, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Tt, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(Lt, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), zk(() => (pt.current = !0, () => {
    pt.current = !1;
  }), []);
  const ut = (ue) => {
    pt.current && (ue && Ne(!0), setTimeout(() => {
      pt.current && (k == null || k(ue), U === void 0 && ze(ue));
    }, 10));
  };
  re.useEffect(() => {
    if (U === void 0) return () => null;
    U && Ne(!0);
    const ue = setTimeout(() => {
      ze(U);
    }, 10);
    return () => {
      clearTimeout(ue);
    };
  }, [U]), re.useEffect(() => {
    if (Re !== St.current) if (Ln(Ie), St.current = Re, Re) ie == null || ie();
    else {
      const ue = ((Le) => {
        const be = Le.match(/^([\d.]+)(ms|s)$/);
        if (!be) return 0;
        const [, At, It] = be;
        return Number(At) * (It === "ms" ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      Ie.current = setTimeout(() => {
        Ne(!1), Ge(null), K == null || K();
      }, ue + 25);
    }
  }, [Re]);
  const Lo = (ue) => {
    Ue((Le) => qc(Le, ue) ? Le : ue);
  }, mr = (ue = A) => {
    Ln(xe), Ve ? ut(!0) : xe.current = setTimeout(() => {
      ut(!0);
    }, ue);
  }, Qn = (ue = O) => {
    Ln(pe), pe.current = setTimeout(() => {
      it.current || ut(!1);
    }, ue);
  }, gr = (ue) => {
    var Le;
    if (!ue) return;
    const be = (Le = ue.currentTarget) !== null && Le !== void 0 ? Le : ue.target;
    if (!(be != null && be.isConnected)) return G(null), void tt({ current: null });
    A ? mr() : ut(!0), G(be), tt({ current: be }), Ln(pe);
  }, Gn = () => {
    j ? Qn(O || 100) : O ? Qn() : ut(!1), Ln(xe);
  }, qn = ({ x: ue, y: Le }) => {
    var be;
    const At = { getBoundingClientRect: () => ({ x: ue, y: Le, width: 0, height: 0, top: Le, left: ue, right: ue, bottom: Le }) };
    Tm({ place: (be = _e == null ? void 0 : _e.place) !== null && be !== void 0 ? be : p, offset: g, elementReference: At, tooltipReference: b.current, tooltipArrowReference: oe.current, strategy: y, middlewares: _, border: q }).then((It) => {
      Lo(It);
    });
  }, gn = (ue) => {
    if (!ue) return;
    const Le = ue, be = { x: Le.clientX, y: Le.clientY };
    qn(be), kt.current = be;
  }, En = (ue) => {
    var Le;
    if (!Re) return;
    const be = ue.target;
    be.isConnected && (!((Le = b.current) === null || Le === void 0) && Le.contains(be) || [document.querySelector(`[id='${f}']`), ...Xe].some((At) => At == null ? void 0 : At.contains(be)) || (ut(!1), Ln(xe)));
  }, ao = Rm(gr, 50), Ot = Rm(Gn, 50), en = (ue) => {
    Ot.cancel(), ao(ue);
  }, Oe = () => {
    ao.cancel(), Ot();
  }, Ye = re.useCallback(() => {
    var ue, Le;
    const be = (ue = _e == null ? void 0 : _e.position) !== null && ue !== void 0 ? ue : Q;
    be ? qn(be) : C ? kt.current && qn(kt.current) : z != null && z.isConnected && Tm({ place: (Le = _e == null ? void 0 : _e.place) !== null && Le !== void 0 ? Le : p, offset: g, elementReference: z, tooltipReference: b.current, tooltipArrowReference: oe.current, strategy: y, middlewares: _, border: q }).then((At) => {
      pt.current && Lo(At);
    });
  }, [Re, z, we, V, p, _e == null ? void 0 : _e.place, g, y, Q, _e == null ? void 0 : _e.position, C]);
  re.useEffect(() => {
    var ue, Le;
    const be = new Set(Nt);
    Xe.forEach((Je) => {
      fe != null && fe(Je) || be.add({ current: Je });
    });
    const At = document.querySelector(`[id='${f}']`);
    At && !(fe != null && fe(At)) && be.add({ current: At });
    const It = () => {
      ut(!1);
    }, tn = Am(z), nn = Am(b.current);
    Lt.scroll && (window.addEventListener("scroll", It), tn == null || tn.addEventListener("scroll", It), nn == null || nn.addEventListener("scroll", It));
    let bt = null;
    Lt.resize ? window.addEventListener("resize", It) : z && b.current && (bt = _k(z, b.current, Ye, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const an = (Je) => {
      Je.key === "Escape" && ut(!1);
    };
    Lt.escape && window.addEventListener("keydown", an), Lt.clickOutsideAnchor && window.addEventListener("click", En);
    const ct = [], Pr = (Je) => !!(Je != null && Je.target && (z != null && z.contains(Je.target))), vr = (Je) => {
      Re && Pr(Je) || gr(Je);
    }, Tl = (Je) => {
      Re && Pr(Je) && Gn();
    }, gi = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], Il = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Et).forEach(([Je, bn]) => {
      bn && (gi.includes(Je) ? ct.push({ event: Je, listener: en }) : Il.includes(Je) && ct.push({ event: Je, listener: vr }));
    }), Object.entries(Tt).forEach(([Je, bn]) => {
      bn && (gi.includes(Je) ? ct.push({ event: Je, listener: Oe }) : Il.includes(Je) && ct.push({ event: Je, listener: Tl }));
    }), C && ct.push({ event: "pointermove", listener: gn });
    const vi = () => {
      it.current = !0;
    }, yi = () => {
      it.current = !1, Gn();
    }, wi = j && (Tt.mouseout || Tt.mouseleave);
    return wi && ((ue = b.current) === null || ue === void 0 || ue.addEventListener("mouseover", vi), (Le = b.current) === null || Le === void 0 || Le.addEventListener("mouseout", yi)), ct.forEach(({ event: Je, listener: bn }) => {
      be.forEach((xi) => {
        var st;
        (st = xi.current) === null || st === void 0 || st.addEventListener(Je, bn);
      });
    }), () => {
      var Je, bn;
      Lt.scroll && (window.removeEventListener("scroll", It), tn == null || tn.removeEventListener("scroll", It), nn == null || nn.removeEventListener("scroll", It)), Lt.resize ? window.removeEventListener("resize", It) : bt == null || bt(), Lt.clickOutsideAnchor && window.removeEventListener("click", En), Lt.escape && window.removeEventListener("keydown", an), wi && ((Je = b.current) === null || Je === void 0 || Je.removeEventListener("mouseover", vi), (bn = b.current) === null || bn === void 0 || bn.removeEventListener("mouseout", yi)), ct.forEach(({ event: xi, listener: st }) => {
        be.forEach((va) => {
          var uo;
          (uo = va.current) === null || uo === void 0 || uo.removeEventListener(xi, st);
        });
      });
    };
  }, [z, Ye, Ve, Nt, Xe, H, x, T, Kt, A, O]), re.useEffect(() => {
    var ue, Le;
    let be = (Le = (ue = _e == null ? void 0 : _e.anchorSelect) !== null && ue !== void 0 ? ue : d) !== null && Le !== void 0 ? Le : "";
    !be && o && (be = `[data-tooltip-id='${o.replace(/'/g, "\\'")}']`);
    const At = new MutationObserver((It) => {
      const tn = [], nn = [];
      It.forEach((bt) => {
        if (bt.type === "attributes" && bt.attributeName === "data-tooltip-id" && (bt.target.getAttribute("data-tooltip-id") === o ? tn.push(bt.target) : bt.oldValue === o && nn.push(bt.target)), bt.type === "childList") {
          if (z) {
            const an = [...bt.removedNodes].filter((ct) => ct.nodeType === 1);
            if (be) try {
              nn.push(...an.filter((ct) => ct.matches(be))), nn.push(...an.flatMap((ct) => [...ct.querySelectorAll(be)]));
            } catch {
            }
            an.some((ct) => {
              var Pr;
              return !!(!((Pr = ct == null ? void 0 : ct.contains) === null || Pr === void 0) && Pr.call(ct, z)) && (Ne(!1), ut(!1), G(null), Ln(xe), Ln(pe), !0);
            });
          }
          if (be) try {
            const an = [...bt.addedNodes].filter((ct) => ct.nodeType === 1);
            tn.push(...an.filter((ct) => ct.matches(be))), tn.push(...an.flatMap((ct) => [...ct.querySelectorAll(be)]));
          } catch {
          }
        }
      }), (tn.length || nn.length) && lt((bt) => [...bt.filter((an) => !nn.includes(an)), ...tn]);
    });
    return At.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      At.disconnect();
    };
  }, [o, d, _e == null ? void 0 : _e.anchorSelect, z]), re.useEffect(() => {
    Ye();
  }, [Ye]), re.useEffect(() => {
    if (!(ne != null && ne.current)) return () => null;
    const ue = new ResizeObserver(() => {
      setTimeout(() => Ye());
    });
    return ue.observe(ne.current), () => {
      ue.disconnect();
    };
  }, [we, ne == null ? void 0 : ne.current]), re.useEffect(() => {
    var ue;
    const Le = document.querySelector(`[id='${f}']`), be = [...Xe, Le];
    z && be.includes(z) || G((ue = Xe[0]) !== null && ue !== void 0 ? ue : Le);
  }, [f, Xe, z]), re.useEffect(() => (Y && ut(!0), () => {
    Ln(xe), Ln(pe);
  }), []), re.useEffect(() => {
    var ue;
    let Le = (ue = _e == null ? void 0 : _e.anchorSelect) !== null && ue !== void 0 ? ue : d;
    if (!Le && o && (Le = `[data-tooltip-id='${o.replace(/'/g, "\\'")}']`), Le) try {
      const be = Array.from(document.querySelectorAll(Le));
      lt(be);
    } catch {
      lt([]);
    }
  }, [o, d, _e == null ? void 0 : _e.anchorSelect]), re.useEffect(() => {
    xe.current && (Ln(xe), mr(A));
  }, [A]);
  const $t = (Ee = _e == null ? void 0 : _e.content) !== null && Ee !== void 0 ? Ee : we, Xn = Re && Object.keys(Be.tooltipStyles).length > 0;
  return re.useImperativeHandle(n, () => ({ open: (ue) => {
    if (ue != null && ue.anchorSelect) try {
      document.querySelector(ue.anchorSelect);
    } catch {
      return void console.warn(`[react-tooltip] "${ue.anchorSelect}" is not a valid CSS selector`);
    }
    Ge(ue ?? null), ue != null && ue.delay ? mr(ue.delay) : ut(!0);
  }, close: (ue) => {
    ue != null && ue.delay ? Qn(ue.delay) : ut(!1);
  }, activeAnchor: z, place: Be.place, isOpen: !!(Ve && !E && $t && Xn) })), Ve && !E && $t ? ae.createElement(w, { id: o, role: ge, className: Gc("react-tooltip", ti.tooltip, Sc.tooltip, Sc[u], l, `react-tooltip__place-${Be.place}`, ti[Xn ? "show" : "closing"], Xn ? "react-tooltip__show" : "react-tooltip__closing", y === "fixed" && ti.fixed, j && ti.clickable), onTransitionEnd: (ue) => {
    Ln(Ie), Re || ue.propertyName !== "opacity" || (Ne(!1), Ge(null), K == null || K());
  }, style: { ...V, ...Be.tooltipStyles, opacity: de !== void 0 && Xn ? de : void 0 }, ref: b }, $t, ae.createElement(w, { className: Gc("react-tooltip-arrow", ti.arrow, Sc.arrow, s, I && ti.noArrow), style: { ...Be.tooltipArrowStyles, background: ke ? `linear-gradient(to right bottom, transparent 50%, ${ke} 50%)` : void 0 }, ref: oe })) : null;
}, Mk = ({ content: n }) => ae.createElement("span", { dangerouslySetInnerHTML: { __html: n } }), Dk = ae.forwardRef(({ id: n, anchorId: o, anchorSelect: l, content: s, html: u, render: f, className: d, classNameArrow: p, variant: g = "dark", place: h = "top", offset: v = 10, wrapper: y = "div", children: _ = null, events: w = ["hover"], openOnClick: A = !1, positionStrategy: O = "absolute", middlewares: C, delayShow: E = 0, delayHide: I = 0, float: j = !1, hidden: $ = !1, noArrow: B = !1, clickable: F = !1, closeOnEsc: H = !1, closeOnScroll: x = !1, closeOnResize: T = !1, openEvents: L, closeEvents: V, globalCloseEvents: Q, imperativeModeOnly: ie = !1, style: K, position: fe, isOpen: we, defaultIsOpen: ne = !1, disableStyleInjection: U = !1, border: Y, opacity: k, arrowColor: z, setIsOpen: G, afterShow: q, afterHide: de, disableTooltip: ke, role: ge = "tooltip" }, Ee) => {
  const [b, oe] = re.useState(s), [xe, pe] = re.useState(u), [Ie, Be] = re.useState(h), [Ue, Re] = re.useState(g), [ze, Ve] = re.useState(v), [Ne, _e] = re.useState(E), [Ge, St] = re.useState(I), [kt, Nt] = re.useState(j), [tt, it] = re.useState($), [Xe, lt] = re.useState(y), [pt, Kt] = re.useState(w), [sn, Et] = re.useState(O), [Tt, Lt] = re.useState(null), [ut, Lo] = re.useState(null), mr = re.useRef(U), { anchorRefs: Qn, activeAnchor: gr } = tv(n), Gn = (Ot) => Ot == null ? void 0 : Ot.getAttributeNames().reduce((en, Oe) => {
    var Ye;
    return Oe.startsWith("data-tooltip-") && (en[Oe.replace(/^data-tooltip-/, "")] = (Ye = Ot == null ? void 0 : Ot.getAttribute(Oe)) !== null && Ye !== void 0 ? Ye : null), en;
  }, {}), qn = (Ot) => {
    const en = { place: (Oe) => {
      var Ye;
      Be((Ye = Oe) !== null && Ye !== void 0 ? Ye : h);
    }, content: (Oe) => {
      oe(Oe ?? s);
    }, html: (Oe) => {
      pe(Oe ?? u);
    }, variant: (Oe) => {
      var Ye;
      Re((Ye = Oe) !== null && Ye !== void 0 ? Ye : g);
    }, offset: (Oe) => {
      Ve(Oe === null ? v : Number(Oe));
    }, wrapper: (Oe) => {
      var Ye;
      lt((Ye = Oe) !== null && Ye !== void 0 ? Ye : y);
    }, events: (Oe) => {
      const Ye = Oe == null ? void 0 : Oe.split(" ");
      Kt(Ye ?? w);
    }, "position-strategy": (Oe) => {
      var Ye;
      Et((Ye = Oe) !== null && Ye !== void 0 ? Ye : O);
    }, "delay-show": (Oe) => {
      _e(Oe === null ? E : Number(Oe));
    }, "delay-hide": (Oe) => {
      St(Oe === null ? I : Number(Oe));
    }, float: (Oe) => {
      Nt(Oe === null ? j : Oe === "true");
    }, hidden: (Oe) => {
      it(Oe === null ? $ : Oe === "true");
    }, "class-name": (Oe) => {
      Lt(Oe);
    } };
    Object.values(en).forEach((Oe) => Oe(null)), Object.entries(Ot).forEach(([Oe, Ye]) => {
      var $t;
      ($t = en[Oe]) === null || $t === void 0 || $t.call(en, Ye);
    });
  };
  re.useEffect(() => {
    oe(s);
  }, [s]), re.useEffect(() => {
    pe(u);
  }, [u]), re.useEffect(() => {
    Be(h);
  }, [h]), re.useEffect(() => {
    Re(g);
  }, [g]), re.useEffect(() => {
    Ve(v);
  }, [v]), re.useEffect(() => {
    _e(E);
  }, [E]), re.useEffect(() => {
    St(I);
  }, [I]), re.useEffect(() => {
    Nt(j);
  }, [j]), re.useEffect(() => {
    it($);
  }, [$]), re.useEffect(() => {
    Et(O);
  }, [O]), re.useEffect(() => {
    mr.current !== U && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [U]), re.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: U === "core", disableBase: U } }));
  }, []), re.useEffect(() => {
    var Ot;
    const en = new Set(Qn);
    let Oe = l;
    if (!Oe && n && (Oe = `[data-tooltip-id='${n.replace(/'/g, "\\'")}']`), Oe) try {
      document.querySelectorAll(Oe).forEach((Le) => {
        en.add({ current: Le });
      });
    } catch {
      console.warn(`[react-tooltip] "${Oe}" is not a valid CSS selector`);
    }
    const Ye = document.querySelector(`[id='${o}']`);
    if (Ye && en.add({ current: Ye }), !en.size) return () => null;
    const $t = (Ot = ut ?? Ye) !== null && Ot !== void 0 ? Ot : gr.current, Xn = new MutationObserver((Le) => {
      Le.forEach((be) => {
        var At;
        if (!$t || be.type !== "attributes" || !(!((At = be.attributeName) === null || At === void 0) && At.startsWith("data-tooltip-"))) return;
        const It = Gn($t);
        qn(It);
      });
    }), ue = { attributes: !0, childList: !1, subtree: !1 };
    if ($t) {
      const Le = Gn($t);
      qn(Le), Xn.observe($t, ue);
    }
    return () => {
      Xn.disconnect();
    };
  }, [Qn, gr, ut, o, l]), re.useEffect(() => {
    K != null && K.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), Y && !Im("border", `${Y}`) && console.warn(`[react-tooltip] "${Y}" is not a valid \`border\`.`), K != null && K.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), k && !Im("opacity", `${k}`) && console.warn(`[react-tooltip] "${k}" is not a valid \`opacity\`.`);
  }, []);
  let gn = _;
  const En = re.useRef(null);
  if (f) {
    const Ot = f({ content: (ut == null ? void 0 : ut.getAttribute("data-tooltip-content")) || b || null, activeAnchor: ut });
    gn = Ot ? ae.createElement("div", { ref: En, className: "react-tooltip-content-wrapper" }, Ot) : null;
  } else b && (gn = b);
  xe && (gn = ae.createElement(Mk, { content: xe }));
  const ao = { forwardRef: Ee, id: n, anchorId: o, anchorSelect: l, className: Gc(d, Tt), classNameArrow: p, content: gn, contentWrapperRef: En, place: Ie, variant: Ue, offset: ze, wrapper: Xe, events: pt, openOnClick: A, positionStrategy: sn, middlewares: C, delayShow: Ne, delayHide: Ge, float: kt, hidden: tt, noArrow: B, clickable: F, closeOnEsc: H, closeOnScroll: x, closeOnResize: T, openEvents: L, closeEvents: V, globalCloseEvents: Q, imperativeModeOnly: ie, style: K, position: fe, isOpen: we, defaultIsOpen: ne, border: Y, opacity: k, arrowColor: z, setIsOpen: G, afterShow: q, afterHide: de, disableTooltip: ke, activeAnchor: ut, setActiveAnchor: (Ot) => Lo(Ot), role: ge };
  return ae.createElement(Fk, { ...ao });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (n) => {
  n.detail.disableCore || Em({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), n.detail.disableBase || Em({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const Pm = {
  "help-icon": "_help-icon_12haz_1",
  "help-tooltip": "_help-tooltip_12haz_7"
};
function nv({ id: n, field: o }) {
  const l = {
    Id: "Unique identifier for the datafile field",
    Label: "Specifies a presentation label for the datafile field being described",
    Description: "Detailed explanation or definition of what the field captures",
    Section: "Specifies a section, or group name, for each entry",
    Cardinality: "Indicates if the field accepts one or multiple values",
    Terms: "Ontology terms that describe the field",
    Datatype: "Expected data type (e.g., string, integer, date)",
    Pattern: "Regex pattern values must match",
    Unit: "Units for values that represent quantities",
    Enumeration: "List of allowed values and meanings",
    "Additional Missing Value Codes": "Reasons for missing values",
    Notes: "Free-text field for additional comments",
    Provenance: "Provenance source",
    SeeAlso: "URL to additional documentation"
  };
  return /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    /* @__PURE__ */ D.jsx(Ir, { icon: zw, className: Pm["help-icon"], "data-tooltip-place": "top", "data-tooltip-position-strategy": "fixed", "data-tooltip-id": "help-tooltip-" + n + "-" + o, "data-tooltip-content": l[o] }),
    /* @__PURE__ */ D.jsx(Dk, { id: "help-tooltip-" + n + "-" + o, className: Pm["help-tooltip"], opacity: 1 })
  ] });
}
function Hk({ variable: n, searchTerm: o }) {
  const s = ["Section", "Label", "Datatype", "Terms", "Cardinality", "Unit", "Enumeration", "Additional Missing Value Codes"].map((u, f) => {
    if (n[u] === "" || n[u] === void 0) return;
    const d = ["Enumeration", "Additional Missing Value Codes"].includes(u);
    let p = /* @__PURE__ */ D.jsx("span", { children: /* @__PURE__ */ D.jsx(eo, { text: n[u], searchTerm: o }) });
    return u === "Terms" && (p = /* @__PURE__ */ D.jsx(Wg, { terms: n[u], searchTerm: o })), /* @__PURE__ */ D.jsxs("div", { className: Bs["dd-field-block"], children: [
      /* @__PURE__ */ D.jsxs("div", { className: Bs.flex, children: [
        /* @__PURE__ */ D.jsxs("span", { className: Bs.field, children: [
          /* @__PURE__ */ D.jsx(nv, { id: n.Id, field: u }),
          /* @__PURE__ */ D.jsxs("strong", { children: [
            u,
            ":"
          ] })
        ] }),
        !d && p
      ] }),
      d && /* @__PURE__ */ D.jsx(Ug, { values: n[u], searchTerm: o })
    ] }, f);
  });
  return /* @__PURE__ */ D.jsxs("div", { className: Bs.card, children: [
    /* @__PURE__ */ D.jsx("h3", { children: /* @__PURE__ */ D.jsx(eo, { text: n.Id, searchTerm: o }) }),
    s
  ] });
}
const Bk = "_scroll_wasmp_1", Wk = {
  scroll: Bk
};
function rv({ scrollRef: n }) {
  return /* @__PURE__ */ D.jsx(Ir, { icon: Aw, className: Wk.scroll, onClick: () => n.current.scrollToIndex({ index: 0, behavior: "smooth" }) });
}
function Uk({ activeView: n, variables: o, searchTerm: l }) {
  const s = re.useRef(), [u, f] = re.useState(!1), [d, p] = FS(), g = p < 1120 ? 2 : 3, h = Math.ceil(o.length / g);
  return /* @__PURE__ */ D.jsxs("div", { ref: d, style: { display: n === "list" ? "block" : "none" }, children: [
    /* @__PURE__ */ D.jsx(
      uS,
      {
        ref: s,
        style: { height: 750 },
        totalCount: h,
        itemContent: (v) => {
          const y = o.slice(
            v * g,
            (v + 1) * g
          );
          return /* @__PURE__ */ D.jsx("div", { className: vm.cards, children: y.map((_, w) => /* @__PURE__ */ D.jsx(Hk, { variable: _, searchTerm: l }, w)) });
        },
        atTopStateChange: (v) => f(!v),
        components: {
          List: re.forwardRef((v, y) => /* @__PURE__ */ D.jsx("div", { ref: y, ...v, className: vm.container }))
        }
      }
    ),
    u && /* @__PURE__ */ D.jsx(rv, { scrollRef: s })
  ] });
}
const $k = "_options_t8263_1", Vk = {
  options: $k
}, Yk = "_wrapper_7j5yf_1", Kk = "_open_7j5yf_4", Qk = "_picker_7j5yf_4", Gk = "_icon_7j5yf_8", qk = "_dropdown_7j5yf_11", tl = {
  wrapper: Yk,
  open: Kk,
  picker: Qk,
  icon: Gk,
  dropdown: qk
};
function Xk({ checkedColumns: n, setCheckedColumns: o }) {
  const l = ["Id", "Section", "Label", "Datatype", "Terms", "Cardinality", "Unit", "Enumeration", "Additional Missing Value Codes"], [s, u] = re.useState(!1), f = re.useRef();
  return re.useEffect(() => {
    const d = (p) => {
      f.current.contains(p.target) || u(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }), /* @__PURE__ */ D.jsxs("div", { className: `${tl.wrapper} ${s ? tl.open : ""}`, ref: f, children: [
    /* @__PURE__ */ D.jsxs("button", { className: tl.picker, onClick: () => u(!s), children: [
      /* @__PURE__ */ D.jsx(Ir, { icon: Pw, className: tl.icon }),
      "Manage Columns"
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: tl.dropdown, children: l.map((d, p) => /* @__PURE__ */ D.jsxs("label", { children: [
      /* @__PURE__ */ D.jsx("input", { type: "checkbox", checked: n.includes(d), disabled: d === "Id", value: d, onChange: (g) => g.target.checked ? o((h) => [...h, g.target.value]) : o((h) => h.filter((v) => v !== g.target.value)) }),
      d
    ] }, p)) })
  ] });
}
function Zk({ sortField: n, setSortField: o, sortDirection: l, setSortDirection: s, checkedColumns: u, setCheckedColumns: f }) {
  return /* @__PURE__ */ D.jsxs("div", { className: Vk.options, children: [
    /* @__PURE__ */ D.jsxs("div", { children: [
      "Sort by:",
      /* @__PURE__ */ D.jsxs("select", { onChange: (d) => o(d.target.value), value: n, children: [
        /* @__PURE__ */ D.jsx("option", { value: "Id", children: "Id" }),
        /* @__PURE__ */ D.jsx("option", { value: "Section", children: "Section" }),
        /* @__PURE__ */ D.jsx("option", { value: "Label", children: "Label" }),
        /* @__PURE__ */ D.jsx("option", { value: "Datatype", children: "Datatype" }),
        /* @__PURE__ */ D.jsx("option", { value: "Cardinality", children: "Cardinality" })
      ] }),
      /* @__PURE__ */ D.jsxs("select", { onChange: (d) => s(d.target.value), value: l, children: [
        /* @__PURE__ */ D.jsx("option", { value: "Ascending", children: "Ascending" }),
        /* @__PURE__ */ D.jsx("option", { value: "Descending", children: "Descending" })
      ] })
    ] }),
    /* @__PURE__ */ D.jsx(Xk, { checkedColumns: u, setCheckedColumns: f })
  ] });
}
const Jk = "_table_8748a_1", e2 = {
  table: Jk
}, t2 = "_wrapper_nbs3r_1", n2 = "_open_nbs3r_5", r2 = "_icon_nbs3r_5", o2 = "_active_nbs3r_8", i2 = "_dropdown_nbs3r_11", nl = {
  wrapper: t2,
  open: n2,
  icon: r2,
  active: o2,
  dropdown: i2
};
function l2({ field: n, filters: o, setFilters: l, allValues: s, filteredValues: u }) {
  const [f, d] = re.useState(!1), p = re.useRef();
  return re.useEffect(() => {
    const g = (h) => {
      p.current.contains(h.target) || d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }), /* @__PURE__ */ D.jsxs("div", { className: `${nl.wrapper} ${f ? nl.open : ""}`, ref: p, children: [
    /* @__PURE__ */ D.jsx(Ir, { icon: Lw, className: `${nl.icon} ${o[n].length > 0 ? nl.active : ""}`, onClick: () => d(!f) }),
    /* @__PURE__ */ D.jsx("div", { className: nl.dropdown, children: s[n].map((g, h) => /* @__PURE__ */ D.jsxs("label", { children: [
      /* @__PURE__ */ D.jsx("input", { type: "checkbox", checked: o[n].includes(g), disabled: !u[n].includes(g), value: g, onChange: (v) => v.target.checked ? l((y) => ({ ...y, [n]: [...y[n], v.target.value] })) : l((y) => ({ ...y, [n]: y[n].filter((_) => _ !== v.target.value) })) }),
      g
    ] }, h)) })
  ] });
}
function s2({ variables: n, searchTerm: o, checkedColumns: l, filters: s, setFilters: u, allValues: f, filteredValues: d, tableRef: p, setShowScrollTop: g }) {
  const h = {
    Id: 200,
    Section: 120,
    Label: 200,
    Datatype: void 0,
    Terms: 140,
    Cardinality: void 0,
    Unit: void 0,
    Enumeration: 300,
    "Additional Missing Value Codes": 350
  }, v = Object.keys(h).filter((w) => l.includes(w)), y = v.map((w, A) => /* @__PURE__ */ D.jsxs("th", { style: h[w] && { minWidth: h[w] }, children: [
    /* @__PURE__ */ D.jsx(nv, { id: "table", field: w }),
    w,
    ["Section", "Datatype", "Cardinality", "Unit"].includes(w) && /* @__PURE__ */ D.jsx(l2, { field: w, filters: s, setFilters: u, allValues: f, filteredValues: d })
  ] }, A)), _ = n.map((w) => v.map((A, O) => {
    let C = /* @__PURE__ */ D.jsx(eo, { text: w[A], searchTerm: o });
    return A === "Terms" ? C = /* @__PURE__ */ D.jsx(Wg, { terms: w[A], searchTerm: o }) : ["Enumeration", "Additional Missing Value Codes"].includes(A) && (C = w[A] === "" || w[A] === void 0 ? w[A] : /* @__PURE__ */ D.jsx(Ug, { values: w[A], searchTerm: o })), /* @__PURE__ */ D.jsx("td", { children: C }, O);
  }));
  return /* @__PURE__ */ D.jsx(
    kS,
    {
      ref: p,
      className: e2.table,
      totalCount: _.length,
      itemContent: (w) => _[w],
      fixedHeaderContent: () => /* @__PURE__ */ D.jsx("tr", { children: y }),
      atTopStateChange: (w) => g(!w)
    }
  );
}
function a2({ activeView: n, variables: o, allValues: l, filteredValues: s, searchTerm: u, filters: f, setFilters: d }) {
  const [p, g] = re.useState(!1), [h, v] = re.useState(["Id", "Section", "Label", "Datatype", "Cardinality", "Enumeration", "Additional Missing Value Codes"]), [y, _] = re.useState("Id"), [w, A] = re.useState("Ascending"), O = o.sort((E, I) => w === "Ascending" ? E[y].localeCompare(I[y]) : I[y].localeCompare(E[y])), C = re.useRef();
  return /* @__PURE__ */ D.jsxs("div", { style: { display: n === "table" ? "block" : "none" }, children: [
    /* @__PURE__ */ D.jsx(Zk, { sortField: y, setSortField: _, sortDirection: w, setSortDirection: A, checkedColumns: h, setCheckedColumns: v }),
    /* @__PURE__ */ D.jsx(s2, { variables: O, searchTerm: u, checkedColumns: h, filters: f, setFilters: d, allValues: l, filteredValues: s, tableRef: C, setShowScrollTop: g }),
    p && /* @__PURE__ */ D.jsx(rv, { scrollRef: C })
  ] });
}
function u2({ activeView: n, variables: o, searchTerm: l }) {
  const [s, u] = re.useState({ Section: [], Datatype: [], Cardinality: [], Unit: [] }), f = Object.keys(s).reduce((h, v) => (h[v] = [...new Set(o.map((y) => y[v]).filter((y) => y.trim() !== ""))].sort(), h), {}), d = o.filter((h) => {
    for (const v in h)
      if (h[v].toLowerCase().includes(l.toLowerCase())) return !0;
  }), p = Object.keys(s).reduce((h, v) => (h[v] = [...new Set(d.map((y) => y[v]).filter((y) => y.trim() !== ""))].sort(), h), {}), g = Object.keys(s).reduce((h, v) => {
    const y = s[v].filter((_) => p[v].includes(_));
    return y.length === 0 ? h : h.filter((_) => y.includes(_[v]));
  }, d);
  return /* @__PURE__ */ D.jsxs("div", { className: Qh.content, children: [
    /* @__PURE__ */ D.jsxs("p", { className: Qh.count, children: [
      n === "table" && Object.values(s).some((h) => h.length > 0) ? `${g.length} of ` : "",
      d.length,
      " Result(s)"
    ] }),
    /* @__PURE__ */ D.jsx(Uk, { activeView: n, variables: d, searchTerm: l }),
    /* @__PURE__ */ D.jsx(a2, { activeView: n, variables: g, allValues: f, filteredValues: p, searchTerm: l, filters: s, setFilters: u })
  ] });
}
function c2({ theme: n, data: o, initialView: l = "list", showSearch: s = !0, heading: u = "Data Dictionary Viewer" }) {
  const [f, d] = re.useState(l), [p, g] = re.useState(""), [h, v] = re.useState([]), [y, _] = re.useState(!0), [w, A] = re.useTransition(), O = (I) => {
    A(() => g(I.target.value));
  }, C = (I) => {
    Dw.parse(I, {
      header: !0,
      skipEmptyLines: !0,
      complete: (j) => {
        v(j.data), _(!1);
      }
    });
  }, E = (I) => {
    try {
      I.toLowerCase().endsWith(".csv") && fetch(I).then((j) => j.text()).then((j) => C(j)), I.toLowerCase().includes("radxdatahub") ? fetch(I).then((j) => j.json()).then((j) => C(j.data)) : C(I);
    } catch (j) {
      console.log(j);
    }
  };
  return re.useEffect(() => {
    E(o);
  }, [o]), y ? /* @__PURE__ */ D.jsx(D.Fragment, {}) : /* @__PURE__ */ D.jsx("div", { className: `${rr.container} ${n}`, children: /* @__PURE__ */ D.jsxs("div", { className: rr.main, children: [
    u && /* @__PURE__ */ D.jsx("h1", { className: rr.title, children: u }),
    /* @__PURE__ */ D.jsxs("div", { className: rr.search, children: [
      s && /* @__PURE__ */ D.jsx(qw, { changeHandler: O }),
      w && /* @__PURE__ */ D.jsx(Ir, { icon: Nw, spin: !0, className: rr.loader }),
      /* @__PURE__ */ D.jsxs("div", { className: rr.buttons, children: [
        /* @__PURE__ */ D.jsxs(
          "button",
          {
            className: f === "list" ? rr.active : "",
            onClick: () => d("list"),
            children: [
              /* @__PURE__ */ D.jsx(Ir, { icon: Ow, className: rr.icon }),
              "List"
            ]
          }
        ),
        /* @__PURE__ */ D.jsxs(
          "button",
          {
            className: f === "table" ? rr.active : "",
            onClick: () => d("table"),
            children: [
              /* @__PURE__ */ D.jsx(Ir, { icon: bw, className: rr.icon }),
              "Table"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ D.jsx(u2, { activeView: f, variables: h, searchTerm: p })
  ] }) });
}
customElements.define(
  "data-dictionary-viewer",
  ay(c2, {
    props: {
      theme: "string",
      data: "string",
      initialView: "string",
      showSearch: "boolean",
      heading: "string"
    }
  })
);
//# sourceMappingURL=data-dictionary-viewer.js.map
