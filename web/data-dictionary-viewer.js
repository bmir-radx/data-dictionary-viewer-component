(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`@import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";:root{--gray-100: #f3f4f6;--gray-200: #e5e7eb;--gray-300: #d1d5db;--black: #1f2937;--white: #ffffff;--dd-font-family: "Open Sans", Helvetica, Arial, sans-serif;--dd-color-text: var(--black);--dd-color-body-bg: #f9fafb;--dd-color-primary: #00889d;--dd-color-on-primary: var(--white);--dd-color-secondary: #003e70;--dd-color-on-secondary: var(--white);--dd-color-content-bg: var(--white);--dd-color-content-border: var(--gray-100);--dd-color-card-bg: var(--white);--dd-color-card-border: var(--gray-100);--dd-color-card-block-bg: var(--gray-100);--dd-color-card-block-border: var(--gray-200);--dd-color-button-text: var(--black);--dd-color-button-bg: var(--gray-200);--dd-color-button-bg-hover: var(--gray-300);--dd-color-button-border: var(--gray-300);--dd-color-table-border: var(--white);--dd-color-table-odd: #f7f7f7;--dd-color-table-even: #eeeeee;--dd-color-input-bg: var(--white);--dd-color-input-border: var(--gray-200);--dd-color-tooltip-background: var(--black);--dd-color-filter: yellow;--dd-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);line-height:1.5;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.dark{--gray-100: #1e1e1e;--gray-200: #2a2a2a;--gray-300: #3c3c3c;--black: #000000;--white: #fafafa;--dd-font-family: "Open Sans", Helvetica, Arial, sans-serif;--dd-color-text: var(--white);--dd-color-body-bg: #1f1b24;--dd-color-primary: #03dac6;--dd-color-on-primary: var(--black);--dd-color-secondary: #151c34;--dd-color-on-secondary: var(--white);--dd-color-content-bg: #121212;--dd-color-content-border: var(--gray-300);--dd-color-card-bg: var(--gray-100);--dd-color-card-border: var(--gray-300);--dd-color-card-block-bg: var(--gray-100);--dd-color-card-block-border: var(--gray-300);--dd-color-button-text: var(--black);--dd-color-button-bg: #e0e0e0;--dd-color-button-bg-hover: #c8c8c8;--dd-color-button-border: var(--gray-300);--dd-color-table-border: var(--gray-300);--dd-color-table-odd: var(--gray-100);--dd-color-table-even: var(--gray-200);--dd-color-input-bg: var(--white);--dd-color-input-border: var(--gray-300);--dd-color-tooltip-background: var(--black);--dd-color-filter: yellow;--dd-shadow: 0 1px 2px 0 rgb(255 255 255 / .06)}*,:before,:after{box-sizing:border-box}body{margin:0}button,select,input,label{font-family:var(--dd-font-family)}._container_wy793_1{display:flex;min-width:570px;font-family:var(--dd-font-family);color:var(--dd-color-text);background-color:var(--dd-color-body-bg)}._main_wy793_9{width:1280px;margin:0 auto;padding:1rem}._title_wy793_15{font-size:2em;line-height:1.1;margin:1.5rem 0 2rem;color:var(--dd-color-text)}._search_wy793_22{display:flex;flex-direction:row;flex-wrap:wrap;align-items:baseline;margin:2.5rem 0 1.5rem}._loader_wy793_30{margin-left:.75rem}._fetch_wy793_34{font-size:20px;position:absolute;top:30%;left:50%}._buttons_wy793_41{margin-left:auto;display:flex;justify-content:flex-end;gap:10px}._buttons_wy793_41 button{cursor:pointer;padding:12px 20px;font-size:.95rem;font-weight:700;color:var(--dd-color-button-text);background-color:var(--dd-color-button-bg);border:1px solid var(--dd-color-button-border);border-radius:.25rem;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._buttons_wy793_41 button:hover{background-color:var(--dd-color-button-bg-hover)}._buttons_wy793_41 button._active_wy793_62{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary);pointer-events:none}._buttons_wy793_41 button ._icon_wy793_67{margin-right:.5rem}._search_qqeb0_1{border-radius:.5rem;padding:12px;width:50%;font-size:.95rem;background-color:var(--dd-color-input-bg);border:1px solid var(--dd-color-input-border);box-shadow:var(--dd-shadow)}._search_qqeb0_1:focus{outline:1px solid var(--dd-color-primary)}._content_bbdxn_1{position:relative;background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-content-border);border-radius:.5rem;padding:16px;box-shadow:var(--dd-shadow);min-height:834px}._count_bbdxn_11{font-size:.875rem;text-align:right;margin:5px 0 14px}._container_1yy9g_1{display:flex;flex-direction:column;row-gap:20px}._cards_1yy9g_7{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));justify-items:center;gap:20px}._card_lfenw_1{min-width:90%;padding:1rem;background-color:var(--dd-color-card-bg);border:1px solid var(--dd-color-card-border);border-radius:.75rem;box-shadow:var(--dd-shadow)}._card_lfenw_1 h3{color:var(--dd-color-primary);margin:1rem 0 1.5rem}._card_lfenw_1 ._dd-field-block_lfenw_13{padding:.5rem .75rem;font-size:.875rem;font-weight:400;border-radius:.5rem;background-color:var(--dd-color-card-block-bg);border:1px solid var(--dd-color-card-block-border);box-shadow:var(--dd-shadow);margin-bottom:.75rem}._card_lfenw_1 ._dd-field-block_lfenw_13 ._flex_lfenw_23{display:flex;gap:.5rem}._card_lfenw_1 ._dd-field-block_lfenw_13 ._flex_lfenw_23 ._field_lfenw_27{white-space:nowrap}._card_lfenw_1 ._dd-field-block_lfenw_13 ._flex_lfenw_23 ._text_lfenw_30{word-break:break-word;overflow-wrap:anywhere;display:inline-block}._terms_1cbzn_1{display:flex;flex-wrap:wrap;gap:4px}._terms_1cbzn_1 a{font-size:85%;font-weight:600;color:var(--dd-color-secondary);background-color:var(--dd-color-button-bg);border-radius:5px;padding:4px 8px;text-decoration:none;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out;word-break:break-word;overflow-wrap:anywhere;display:inline-block}._terms_1cbzn_1 a:hover{background-color:var(--dd-color-button-bg-hover)}._values_14176_1{margin:10px 0 4px;line-height:1.2;font-weight:400}._values_14176_1 ._flex_14176_6{display:flex}._values_14176_1 ._flex_14176_6 ._value_14176_1{font-family:monospace;min-width:4rem}._help-icon_12haz_1{margin-right:.5rem;color:var(--dd-color-primary);cursor:help}._help-tooltip_12haz_7{font-weight:400;max-width:190px;white-space:pre-wrap;background-color:var(--dd-color-tooltip-background)!important}._scroll_wasmp_1{cursor:pointer;position:absolute;right:-50px;bottom:8px;color:var(--dd-color-primary);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-primary);border-radius:50%;padding:8px;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._scroll_wasmp_1:hover{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._options_t8263_1{display:flex;justify-content:space-between;margin:14px 0;font-size:1rem;font-weight:600}._options_t8263_1 select{height:35px;margin-left:10px;padding:0 30px 0 10px;font-size:.875rem;font-weight:600;border:1px solid var(--dd-color-input-border);box-shadow:var(--dd-shadow);appearance:none;-moz-appearance:none;-webkit-appearance:none;background-position:right 4px center;background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3e%3cpath%20fill='none'%20stroke='%23343a40'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m2%205%206%206%206-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-size:16px 12px}._options_t8263_1 select:focus{outline:1px solid var(--dd-color-primary)}._wrapper_7j5yf_1{position:relative}._wrapper_7j5yf_1._open_7j5yf_4 ._picker_7j5yf_4{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._wrapper_7j5yf_1._open_7j5yf_4 ._picker_7j5yf_4 ._icon_7j5yf_8{color:var(--dd-color-on-primary)}._wrapper_7j5yf_1._open_7j5yf_4 ._dropdown_7j5yf_11{opacity:1;visibility:visible;transform:translateY(0)}._picker_7j5yf_4{cursor:pointer;height:35px;width:170px;font-size:.875rem;font-weight:600;color:var(--dd-color-primary);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-primary);border-radius:3px;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._picker_7j5yf_4:hover{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._picker_7j5yf_4:hover ._icon_7j5yf_8{color:var(--dd-color-on-primary)}._picker_7j5yf_4 ._icon_7j5yf_8{color:var(--dd-color-text);margin-right:10px;transition:all .15s ease-in-out}._dropdown_7j5yf_11{position:absolute;right:0;top:40px;z-index:3;background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-input-border);border-radius:3px;box-shadow:var(--dd-shadow);padding:10px;font-size:.875rem;font-weight:400;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(-5px);transition:all .25s ease}._dropdown_7j5yf_11 label{display:block}._dropdown_7j5yf_11 label input{margin-right:5px;accent-color:var(--dd-color-primary);vertical-align:middle;position:relative;bottom:1px}._table_8748a_1{height:700px!important}._table_8748a_1 table{font-size:.875rem;border-collapse:separate;border-spacing:0;line-height:1.2;font-weight:600;width:100%}._table_8748a_1 table thead{margin:0}._table_8748a_1 table thead th{color:var(--dd-color-on-secondary);background-color:var(--dd-color-secondary);padding:25px 20px 25px 15px;text-align:left;border:1px solid var(--dd-color-table-border);white-space:nowrap}._table_8748a_1 table tbody tr:nth-child(odd){background-color:var(--dd-color-table-odd)}._table_8748a_1 table tbody tr:nth-child(2n){background-color:var(--dd-color-table-even)}._table_8748a_1 table tbody td{padding:20px 15px}._wrapper_nbs3r_1{position:relative;display:inline}._wrapper_nbs3r_1._open_nbs3r_5 ._icon_nbs3r_5{color:var(--dd-color-button-bg-hover)}._wrapper_nbs3r_1._open_nbs3r_5 ._icon_nbs3r_5._active_nbs3r_8{color:#ff0}._wrapper_nbs3r_1._open_nbs3r_5 ._dropdown_nbs3r_11{opacity:1;visibility:visible;transform:translateY(0)}._icon_nbs3r_5{cursor:pointer;margin-left:1rem;color:var(--dd-color-button-bg);transition:all .15s ease-in-out}._icon_nbs3r_5:hover{color:var(--dd-color-button-bg-hover)}._icon_nbs3r_5._active_nbs3r_8{color:#ff0}._dropdown_nbs3r_11{position:absolute;right:0;top:30px;z-index:3;line-height:1.5;color:var(--dd-color-text);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-input-border);border-radius:3px;box-shadow:var(--dd-shadow);padding:10px;font-size:.875rem;font-weight:400;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(-5px);transition:all .25s ease}._dropdown_nbs3r_11 label{display:block}._dropdown_nbs3r_11 label input{margin-right:5px;accent-color:var(--dd-color-primary);vertical-align:middle;position:relative;bottom:1px}._error_21vtf_1{font-family:var(--dd-font-family);width:400px;margin:200px auto;text-align:center}._error_21vtf_1 p{margin:50px 0}._error_21vtf_1 ._error-button_21vtf_10{display:block;cursor:pointer;text-transform:uppercase;color:#fff;background:#00889d;margin:0 auto;padding:15px 35px;font-size:16px;letter-spacing:1.5px;box-shadow:var(--dd-shadow);border-width:0;border-radius:3px;transition:all .15s ease}._error_21vtf_1 ._error-button_21vtf_10:hover{filter:brightness(1.15)}._error_21vtf_1 ._error-button_21vtf_10 ._icon_21vtf_28{margin-right:12px}`)),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function yl(n) {
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
var sh;
function K0() {
  if (sh) return Ke;
  sh = 1;
  var n = Symbol.for("react.element"), o = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.iterator;
  function x(_) {
    return _ === null || typeof _ != "object" ? null : (_ = y && _[y] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, P = {};
  function E(_, z, G) {
    this.props = _, this.context = z, this.refs = P, this.updater = G || w;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(_, z) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, z, "setState");
  }, E.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function C() {
  }
  C.prototype = E.prototype;
  function I(_, z, G) {
    this.props = _, this.context = z, this.refs = P, this.updater = G || w;
  }
  var D = I.prototype = new C();
  D.constructor = I, O(D, E.prototype), D.isPureReactComponent = !0;
  var $ = Array.isArray, F = Object.prototype.hasOwnProperty, N = { current: null }, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(_, z, G) {
    var q, de = {}, ke = null, ge = null;
    if (z != null) for (q in z.ref !== void 0 && (ge = z.ref), z.key !== void 0 && (ke = "" + z.key), z) F.call(z, q) && !B.hasOwnProperty(q) && (de[q] = z[q]);
    var Ee = arguments.length - 2;
    if (Ee === 1) de.children = G;
    else if (1 < Ee) {
      for (var M = Array(Ee), oe = 0; oe < Ee; oe++) M[oe] = arguments[oe + 2];
      de.children = M;
    }
    if (_ && _.defaultProps) for (q in Ee = _.defaultProps, Ee) de[q] === void 0 && (de[q] = Ee[q]);
    return { $$typeof: n, type: _, key: ke, ref: ge, props: de, _owner: N.current };
  }
  function T(_, z) {
    return { $$typeof: n, type: _.type, key: z, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function L(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === n;
  }
  function V(_) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(G) {
      return z[G];
    });
  }
  var Q = /\/+/g;
  function ie(_, z) {
    return typeof _ == "object" && _ !== null && _.key != null ? V("" + _.key) : z.toString(36);
  }
  function K(_, z, G, q, de) {
    var ke = typeof _;
    (ke === "undefined" || ke === "boolean") && (_ = null);
    var ge = !1;
    if (_ === null) ge = !0;
    else switch (ke) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case n:
          case o:
            ge = !0;
        }
    }
    if (ge) return ge = _, de = de(ge), _ = q === "" ? "." + ie(ge, 0) : q, $(de) ? (G = "", _ != null && (G = _.replace(Q, "$&/") + "/"), K(de, z, G, "", function(oe) {
      return oe;
    })) : de != null && (L(de) && (de = T(de, G + (!de.key || ge && ge.key === de.key ? "" : ("" + de.key).replace(Q, "$&/") + "/") + _)), z.push(de)), 1;
    if (ge = 0, q = q === "" ? "." : q + ":", $(_)) for (var Ee = 0; Ee < _.length; Ee++) {
      ke = _[Ee];
      var M = q + ie(ke, Ee);
      ge += K(ke, z, G, M, de);
    }
    else if (M = x(_), typeof M == "function") for (_ = M.call(_), Ee = 0; !(ke = _.next()).done; ) ke = ke.value, M = q + ie(ke, Ee++), ge += K(ke, z, G, M, de);
    else if (ke === "object") throw z = String(_), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function fe(_, z, G) {
    if (_ == null) return _;
    var q = [], de = 0;
    return K(_, q, "", "", function(ke) {
      return z.call(G, ke, de++);
    }), q;
  }
  function we(_) {
    if (_._status === -1) {
      var z = _._result;
      z = z(), z.then(function(G) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = G);
      }, function(G) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = G);
      }), _._status === -1 && (_._status = 0, _._result = z);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var re = { current: null }, U = { transition: null }, Y = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: U, ReactCurrentOwner: N };
  return Ke.Children = { map: fe, forEach: function(_, z, G) {
    fe(_, function() {
      z.apply(this, arguments);
    }, G);
  }, count: function(_) {
    var z = 0;
    return fe(_, function() {
      z++;
    }), z;
  }, toArray: function(_) {
    return fe(_, function(z) {
      return z;
    }) || [];
  }, only: function(_) {
    if (!L(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Ke.Component = E, Ke.Fragment = l, Ke.Profiler = u, Ke.PureComponent = I, Ke.StrictMode = s, Ke.Suspense = g, Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, Ke.cloneElement = function(_, z, G) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var q = O({}, _.props), de = _.key, ke = _.ref, ge = _._owner;
    if (z != null) {
      if (z.ref !== void 0 && (ke = z.ref, ge = N.current), z.key !== void 0 && (de = "" + z.key), _.type && _.type.defaultProps) var Ee = _.type.defaultProps;
      for (M in z) F.call(z, M) && !B.hasOwnProperty(M) && (q[M] = z[M] === void 0 && Ee !== void 0 ? Ee[M] : z[M]);
    }
    var M = arguments.length - 2;
    if (M === 1) q.children = G;
    else if (1 < M) {
      Ee = Array(M);
      for (var oe = 0; oe < M; oe++) Ee[oe] = arguments[oe + 2];
      q.children = Ee;
    }
    return { $$typeof: n, type: _.type, key: de, ref: ke, props: q, _owner: ge };
  }, Ke.createContext = function(_) {
    return _ = { $$typeof: d, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: f, _context: _ }, _.Consumer = _;
  }, Ke.createElement = S, Ke.createFactory = function(_) {
    var z = S.bind(null, _);
    return z.type = _, z;
  }, Ke.createRef = function() {
    return { current: null };
  }, Ke.forwardRef = function(_) {
    return { $$typeof: p, render: _ };
  }, Ke.isValidElement = L, Ke.lazy = function(_) {
    return { $$typeof: v, _payload: { _status: -1, _result: _ }, _init: we };
  }, Ke.memo = function(_, z) {
    return { $$typeof: m, type: _, compare: z === void 0 ? null : z };
  }, Ke.startTransition = function(_) {
    var z = U.transition;
    U.transition = {};
    try {
      _();
    } finally {
      U.transition = z;
    }
  }, Ke.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ke.useCallback = function(_, z) {
    return re.current.useCallback(_, z);
  }, Ke.useContext = function(_) {
    return re.current.useContext(_);
  }, Ke.useDebugValue = function() {
  }, Ke.useDeferredValue = function(_) {
    return re.current.useDeferredValue(_);
  }, Ke.useEffect = function(_, z) {
    return re.current.useEffect(_, z);
  }, Ke.useId = function() {
    return re.current.useId();
  }, Ke.useImperativeHandle = function(_, z, G) {
    return re.current.useImperativeHandle(_, z, G);
  }, Ke.useInsertionEffect = function(_, z) {
    return re.current.useInsertionEffect(_, z);
  }, Ke.useLayoutEffect = function(_, z) {
    return re.current.useLayoutEffect(_, z);
  }, Ke.useMemo = function(_, z) {
    return re.current.useMemo(_, z);
  }, Ke.useReducer = function(_, z, G) {
    return re.current.useReducer(_, z, G);
  }, Ke.useRef = function(_) {
    return re.current.useRef(_);
  }, Ke.useState = function(_) {
    return re.current.useState(_);
  }, Ke.useSyncExternalStore = function(_, z, G) {
    return re.current.useSyncExternalStore(_, z, G);
  }, Ke.useTransition = function() {
    return re.current.useTransition();
  }, Ke.version = "18.2.0", Ke;
}
var ah;
function Jc() {
  return ah || (ah = 1, Xu.exports = K0()), Xu.exports;
}
var te = Jc();
const ae = /* @__PURE__ */ yl(te);
var Ns = {}, Zu = { exports: {} }, hn = {}, Ju = { exports: {} }, ec = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uh;
function Q0() {
  return uh || (uh = 1, function(n) {
    function o(U, Y) {
      var _ = U.length;
      U.push(Y);
      e: for (; 0 < _; ) {
        var z = _ - 1 >>> 1, G = U[z];
        if (0 < u(G, Y)) U[z] = Y, U[_] = G, _ = z;
        else break e;
      }
    }
    function l(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var Y = U[0], _ = U.pop();
      if (_ !== Y) {
        U[0] = _;
        e: for (var z = 0, G = U.length, q = G >>> 1; z < q; ) {
          var de = 2 * (z + 1) - 1, ke = U[de], ge = de + 1, Ee = U[ge];
          if (0 > u(ke, _)) ge < G && 0 > u(Ee, ke) ? (U[z] = Ee, U[ge] = _, z = ge) : (U[z] = ke, U[de] = _, z = de);
          else if (ge < G && 0 > u(Ee, _)) U[z] = Ee, U[ge] = _, z = ge;
          else break e;
        }
      }
      return Y;
    }
    function u(U, Y) {
      var _ = U.sortIndex - Y.sortIndex;
      return _ !== 0 ? _ : U.id - Y.id;
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
    var g = [], m = [], v = 1, y = null, x = 3, w = !1, O = !1, P = !1, E = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function D(U) {
      for (var Y = l(m); Y !== null; ) {
        if (Y.callback === null) s(m);
        else if (Y.startTime <= U) s(m), Y.sortIndex = Y.expirationTime, o(g, Y);
        else break;
        Y = l(m);
      }
    }
    function $(U) {
      if (P = !1, D(U), !O) if (l(g) !== null) O = !0, we(F);
      else {
        var Y = l(m);
        Y !== null && re($, Y.startTime - U);
      }
    }
    function F(U, Y) {
      O = !1, P && (P = !1, C(S), S = -1), w = !0;
      var _ = x;
      try {
        for (D(Y), y = l(g); y !== null && (!(y.expirationTime > Y) || U && !V()); ) {
          var z = y.callback;
          if (typeof z == "function") {
            y.callback = null, x = y.priorityLevel;
            var G = z(y.expirationTime <= Y);
            Y = n.unstable_now(), typeof G == "function" ? y.callback = G : y === l(g) && s(g), D(Y);
          } else s(g);
          y = l(g);
        }
        if (y !== null) var q = !0;
        else {
          var de = l(m);
          de !== null && re($, de.startTime - Y), q = !1;
        }
        return q;
      } finally {
        y = null, x = _, w = !1;
      }
    }
    var N = !1, B = null, S = -1, T = 5, L = -1;
    function V() {
      return !(n.unstable_now() - L < T);
    }
    function Q() {
      if (B !== null) {
        var U = n.unstable_now();
        L = U;
        var Y = !0;
        try {
          Y = B(!0, U);
        } finally {
          Y ? ie() : (N = !1, B = null);
        }
      } else N = !1;
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
      E(Q, 0);
    };
    function we(U) {
      B = U, N || (N = !0, ie());
    }
    function re(U, Y) {
      S = E(function() {
        U(n.unstable_now());
      }, Y);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, n.unstable_continueExecution = function() {
      O || w || (O = !0, we(F));
    }, n.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < U ? Math.floor(1e3 / U) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_getFirstCallbackNode = function() {
      return l(g);
    }, n.unstable_next = function(U) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = x;
      }
      var _ = x;
      x = Y;
      try {
        return U();
      } finally {
        x = _;
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
      var _ = x;
      x = U;
      try {
        return Y();
      } finally {
        x = _;
      }
    }, n.unstable_scheduleCallback = function(U, Y, _) {
      var z = n.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? z + _ : z) : _ = z, U) {
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
      return G = _ + G, U = { id: v++, callback: Y, priorityLevel: U, startTime: _, expirationTime: G, sortIndex: -1 }, _ > z ? (U.sortIndex = _, o(m, U), l(g) === null && U === l(m) && (P ? (C(S), S = -1) : P = !0, re($, _ - z))) : (U.sortIndex = G, o(g, U), O || w || (O = !0, we(F))), U;
    }, n.unstable_shouldYield = V, n.unstable_wrapCallback = function(U) {
      var Y = x;
      return function() {
        var _ = x;
        x = Y;
        try {
          return U.apply(this, arguments);
        } finally {
          x = _;
        }
      };
    };
  }(ec)), ec;
}
var ch;
function G0() {
  return ch || (ch = 1, Ju.exports = Q0()), Ju.exports;
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
var fh;
function q0() {
  if (fh) return hn;
  fh = 1;
  var n = Jc(), o = G0();
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
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, y = {};
  function x(e) {
    return g.call(y, e) ? !0 : g.call(v, e) ? !1 : m.test(e) ? y[e] = !0 : (v[e] = !0, !1);
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
  function O(e, t, r, i) {
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
  function P(e, t, r, i, a, c, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var C = /[\-:]([a-z])/g;
  function I(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      C,
      I
    );
    E[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(C, I);
    E[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(C, I);
    E[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function D(e, t, r, i) {
    var a = E.hasOwnProperty(t) ? E[t] : null;
    (a !== null ? a.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, r, a, i) && (r = null), i || a === null ? x(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : a.mustUseProperty ? e[a.propertyName] = r === null ? a.type === 3 ? !1 : "" : r : (t = a.attributeName, i = a.attributeNamespace, r === null ? e.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === !0 ? "" : "" + r, i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, F = Symbol.for("react.element"), N = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), V = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, z;
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
`), h = a.length - 1, k = c.length - 1; 1 <= h && 0 <= k && a[h] !== c[k]; ) k--;
        for (; 1 <= h && 0 <= k; h--, k--) if (a[h] !== c[k]) {
          if (h !== 1 || k !== 1)
            do
              if (h--, k--, 0 > k || a[h] !== c[k]) {
                var R = `
` + a[h].replace(" at new ", " at ");
                return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
              }
            while (1 <= h && 0 <= k);
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
      case B:
        return "Fragment";
      case N:
        return "Portal";
      case T:
        return "Profiler";
      case S:
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
        return t === S ? "StrictMode" : "Mode";
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
  function M(e) {
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
      }, set: function(h) {
        i = "" + h, c.call(this, h);
      } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(h) {
        i = "" + h;
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
    return _({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function Re(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    r = M(t.value != null ? t.value : r), e._wrapperState = { initialChecked: i, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ze(e, t) {
    t = t.checked, t != null && D(e, "checked", t, !1);
  }
  function Ve(e, t) {
    ze(e, t);
    var r = M(t.value), i = t.type;
    if (r != null) i === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? _e(e, t.type, r) : t.hasOwnProperty("defaultValue") && _e(e, t.type, M(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
      for (r = "" + M(r), t = null, a = 0; a < e.length; a++) {
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
    return _({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
    e._wrapperState = { initialValue: M(r) };
  }
  function tt(e, t) {
    var r = M(t.value), i = M(t.defaultValue);
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
  var Lo = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function gr(e, t) {
    if (t) {
      if (Lo[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function qn(e, t) {
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
  var vr = null;
  function Xn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Zn = null, gn = null, En = null;
  function ao(e) {
    if (e = Di(e)) {
      if (typeof Zn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Gl(t), Zn(e.stateNode, e.type, t));
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
  function Jn(e, t, r) {
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
    var i = Gl(r);
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
  function Pt(e, t, r, i, a, c, h, k, R) {
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
  function ct(e, t, r, i, a, c, h, k, R) {
    It = !1, tn = null, Pt.apply(an, arguments);
  }
  function Ar(e, t, r, i, a, c, h, k, R) {
    if (ct.apply(this, arguments), It) {
      if (It) {
        var W = tn;
        It = !1, tn = null;
      } else throw Error(l(198));
      nn || (nn = !0, bt = W);
    }
  }
  function yr(e) {
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
  function Il(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gi(e) {
    if (yr(e) !== e) throw Error(l(188));
  }
  function Rl(e) {
    var t = e.alternate;
    if (!t) {
      if (t = yr(e), t === null) throw Error(l(188));
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
        for (var h = !1, k = a.child; k; ) {
          if (k === r) {
            h = !0, r = a, i = c;
            break;
          }
          if (k === i) {
            h = !0, i = a, r = c;
            break;
          }
          k = k.sibling;
        }
        if (!h) {
          for (k = c.child; k; ) {
            if (k === r) {
              h = !0, r = c, i = a;
              break;
            }
            if (k === i) {
              h = !0, i = c, r = a;
              break;
            }
            k = k.sibling;
          }
          if (!h) throw Error(l(189));
        }
      }
      if (r.alternate !== i) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function vi(e) {
    return e = Rl(e), e !== null ? yi(e) : null;
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
  var wi = o.unstable_scheduleCallback, Je = o.unstable_cancelCallback, bn = o.unstable_shouldYield, xi = o.unstable_requestPaint, st = o.unstable_now, va = o.unstable_getCurrentPriorityLevel, uo = o.unstable_ImmediatePriority, bf = o.unstable_UserBlockingPriority, Ol = o.unstable_NormalPriority, sv = o.unstable_LowPriority, jf = o.unstable_IdlePriority, Pl = null, er = null;
  function av(e) {
    if (er && typeof er.onCommitFiberRoot == "function") try {
      er.onCommitFiberRoot(Pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var jn = Math.clz32 ? Math.clz32 : fv, uv = Math.log, cv = Math.LN2;
  function fv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (uv(e) / cv | 0) | 0;
  }
  var Al = 64, Ll = 4194304;
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
  function zl(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0, a = e.suspendedLanes, c = e.pingedLanes, h = r & 268435455;
    if (h !== 0) {
      var k = h & ~a;
      k !== 0 ? i = Si(k) : (c &= h, c !== 0 && (i = Si(c)));
    } else h = r & ~a, h !== 0 ? i = Si(h) : c !== 0 && (i = Si(c));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, c = t & -t, a >= c || a === 16 && (c & 4194240) !== 0)) return t;
    if ((i & 4) !== 0 && (i |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) r = 31 - jn(t), a = 1 << r, i |= e[r], t &= ~a;
    return i;
  }
  function dv(e, t) {
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
  function pv(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var h = 31 - jn(c), k = 1 << h, R = a[h];
      R === -1 ? ((k & r) === 0 || (k & i) !== 0) && (a[h] = dv(k, t)) : R <= t && (e.expiredLanes |= k), c &= ~k;
    }
  }
  function ya(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ff() {
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
  function hv(e, t) {
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
  function Mf(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Df, Sa, Hf, Bf, Wf, ka = !1, Nl = [], Lr = null, zr = null, Nr = null, _i = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), br = [], mv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Uf(e, t) {
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
  function gv(e, t, r, i, a) {
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
  function $f(e) {
    var t = co(e.target);
    if (t !== null) {
      var r = yr(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = Il(r), t !== null) {
            e.blockedOn = t, Wf(e.priority, function() {
              Hf(r);
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
  function bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        vr = i, r.target.dispatchEvent(i), vr = null;
      } else return t = Di(r), t !== null && Sa(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function Vf(e, t, r) {
    bl(e) && r.delete(t);
  }
  function vv() {
    ka = !1, Lr !== null && bl(Lr) && (Lr = null), zr !== null && bl(zr) && (zr = null), Nr !== null && bl(Nr) && (Nr = null), _i.forEach(Vf), Ci.forEach(Vf);
  }
  function Ti(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ka || (ka = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, vv)));
  }
  function Ii(e) {
    function t(a) {
      return Ti(a, e);
    }
    if (0 < Nl.length) {
      Ti(Nl[0], e);
      for (var r = 1; r < Nl.length; r++) {
        var i = Nl[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Lr !== null && Ti(Lr, e), zr !== null && Ti(zr, e), Nr !== null && Ti(Nr, e), _i.forEach(t), Ci.forEach(t), r = 0; r < br.length; r++) i = br[r], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < br.length && (r = br[0], r.blockedOn === null); ) $f(r), r.blockedOn === null && br.shift();
  }
  var zo = $.ReactCurrentBatchConfig, jl = !0;
  function yv(e, t, r, i) {
    var a = rt, c = zo.transition;
    zo.transition = null;
    try {
      rt = 1, _a(e, t, r, i);
    } finally {
      rt = a, zo.transition = c;
    }
  }
  function wv(e, t, r, i) {
    var a = rt, c = zo.transition;
    zo.transition = null;
    try {
      rt = 4, _a(e, t, r, i);
    } finally {
      rt = a, zo.transition = c;
    }
  }
  function _a(e, t, r, i) {
    if (jl) {
      var a = Ca(e, t, r, i);
      if (a === null) Ba(e, t, i, Fl, r), Uf(e, i);
      else if (gv(a, e, t, r, i)) i.stopPropagation();
      else if (Uf(e, i), t & 4 && -1 < mv.indexOf(e)) {
        for (; a !== null; ) {
          var c = Di(a);
          if (c !== null && Df(c), c = Ca(e, t, r, i), c === null && Ba(e, t, i, Fl, r), c === a) break;
          a = c;
        }
        a !== null && i.stopPropagation();
      } else Ba(e, t, i, null, r);
    }
  }
  var Fl = null;
  function Ca(e, t, r, i) {
    if (Fl = null, e = Xn(i), e = co(e), e !== null) if (t = yr(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = Il(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Fl = e, null;
  }
  function Yf(e) {
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
          case bf:
            return 4;
          case Ol:
          case sv:
            return 16;
          case jf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jr = null, Ea = null, Ml = null;
  function Kf() {
    if (Ml) return Ml;
    var e, t = Ea, r = t.length, i, a = "value" in jr ? jr.value : jr.textContent, c = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++) ;
    var h = r - e;
    for (i = 1; i <= h && t[r - i] === a[c - i]; i++) ;
    return Ml = a.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Dl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Hl() {
    return !0;
  }
  function Qf() {
    return !1;
  }
  function vn(e) {
    function t(r, i, a, c, h) {
      this._reactName = r, this._targetInst = a, this.type = i, this.nativeEvent = c, this.target = h, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (r = e[k], this[k] = r ? r(c) : c[k]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Hl : Qf, this.isPropagationStopped = Qf, this;
    }
    return _(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Hl);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Hl);
    }, persist: function() {
    }, isPersistent: Hl }), t;
  }
  var No = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ta = vn(No), Ri = _({}, No, { view: 0, detail: 0 }), xv = vn(Ri), Ia, Ra, Oi, Bl = _({}, Ri, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Oi && (Oi && e.type === "mousemove" ? (Ia = e.screenX - Oi.screenX, Ra = e.screenY - Oi.screenY) : Ra = Ia = 0, Oi = e), Ia);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ra;
  } }), Gf = vn(Bl), Sv = _({}, Bl, { dataTransfer: 0 }), kv = vn(Sv), _v = _({}, Ri, { relatedTarget: 0 }), Oa = vn(_v), Cv = _({}, No, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ev = vn(Cv), Tv = _({}, No, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Iv = vn(Tv), Rv = _({}, No, { data: 0 }), qf = vn(Rv), Ov = {
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
  }, Pv = {
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
  }, Av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Av[e]) ? !!t[e] : !1;
  }
  function Pa() {
    return Lv;
  }
  var zv = _({}, Ri, { key: function(e) {
    if (e.key) {
      var t = Ov[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Dl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pv[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pa, charCode: function(e) {
    return e.type === "keypress" ? Dl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Nv = vn(zv), bv = _({}, Bl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xf = vn(bv), jv = _({}, Ri, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pa }), Fv = vn(jv), Mv = _({}, No, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dv = vn(Mv), Hv = _({}, Bl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bv = vn(Hv), Wv = [9, 13, 27, 32], Aa = p && "CompositionEvent" in window, Pi = null;
  p && "documentMode" in document && (Pi = document.documentMode);
  var Uv = p && "TextEvent" in window && !Pi, Zf = p && (!Aa || Pi && 8 < Pi && 11 >= Pi), Jf = " ", ed = !1;
  function td(e, t) {
    switch (e) {
      case "keyup":
        return Wv.indexOf(t.keyCode) !== -1;
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
  function nd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var bo = !1;
  function $v(e, t) {
    switch (e) {
      case "compositionend":
        return nd(t);
      case "keypress":
        return t.which !== 32 ? null : (ed = !0, Jf);
      case "textInput":
        return e = t.data, e === Jf && ed ? null : e;
      default:
        return null;
    }
  }
  function Vv(e, t) {
    if (bo) return e === "compositionend" || !Aa && td(e, t) ? (e = Kf(), Ml = Ea = jr = null, bo = !1, e) : null;
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
        return Zf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function rd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yv[e.type] : t === "textarea";
  }
  function od(e, t, r, i) {
    Ot(i), t = Yl(t, "onChange"), 0 < t.length && (r = new Ta("onChange", "change", null, r, i), e.push({ event: r, listeners: t }));
  }
  var Ai = null, Li = null;
  function Kv(e) {
    kd(e, 0);
  }
  function Wl(e) {
    var t = Ho(e);
    if (Ie(t)) return e;
  }
  function Qv(e, t) {
    if (e === "change") return t;
  }
  var id = !1;
  if (p) {
    var La;
    if (p) {
      var za = "oninput" in document;
      if (!za) {
        var ld = document.createElement("div");
        ld.setAttribute("oninput", "return;"), za = typeof ld.oninput == "function";
      }
      La = za;
    } else La = !1;
    id = La && (!document.documentMode || 9 < document.documentMode);
  }
  function sd() {
    Ai && (Ai.detachEvent("onpropertychange", ad), Li = Ai = null);
  }
  function ad(e) {
    if (e.propertyName === "value" && Wl(Li)) {
      var t = [];
      od(t, Li, e, Xn(e)), Jn(Kv, t);
    }
  }
  function Gv(e, t, r) {
    e === "focusin" ? (sd(), Ai = t, Li = r, Ai.attachEvent("onpropertychange", ad)) : e === "focusout" && sd();
  }
  function qv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wl(Li);
  }
  function Xv(e, t) {
    if (e === "click") return Wl(t);
  }
  function Zv(e, t) {
    if (e === "input" || e === "change") return Wl(t);
  }
  function Jv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Fn = typeof Object.is == "function" ? Object.is : Jv;
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
  function ud(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cd(e, t) {
    var r = ud(e);
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
      r = ud(r);
    }
  }
  function fd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function dd() {
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
  function e0(e) {
    var t = dd(), r = e.focusedElem, i = e.selectionRange;
    if (t !== r && r && r.ownerDocument && fd(r.ownerDocument.documentElement, r)) {
      if (i !== null && Na(r)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = r.textContent.length, c = Math.min(i.start, a);
          i = i.end === void 0 ? c : Math.min(i.end, a), !e.extend && c > i && (a = i, i = c, c = a), a = cd(r, c);
          var h = cd(
            r,
            i
          );
          a && h && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), c > i ? (e.addRange(t), e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var t0 = p && "documentMode" in document && 11 >= document.documentMode, jo = null, ba = null, Ni = null, ja = !1;
  function pd(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ja || jo == null || jo !== Be(i) || (i = jo, "selectionStart" in i && Na(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Ni && zi(Ni, i) || (Ni = i, i = Yl(ba, "onSelect"), 0 < i.length && (t = new Ta("onSelect", "select", null, t, r), e.push({ event: t, listeners: i }), t.target = jo)));
  }
  function Ul(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var Fo = { animationend: Ul("Animation", "AnimationEnd"), animationiteration: Ul("Animation", "AnimationIteration"), animationstart: Ul("Animation", "AnimationStart"), transitionend: Ul("Transition", "TransitionEnd") }, Fa = {}, hd = {};
  p && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete Fo.animationend.animation, delete Fo.animationiteration.animation, delete Fo.animationstart.animation), "TransitionEvent" in window || delete Fo.transitionend.transition);
  function $l(e) {
    if (Fa[e]) return Fa[e];
    if (!Fo[e]) return e;
    var t = Fo[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in hd) return Fa[e] = t[r];
    return e;
  }
  var md = $l("animationend"), gd = $l("animationiteration"), vd = $l("animationstart"), yd = $l("transitionend"), wd = /* @__PURE__ */ new Map(), xd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fr(e, t) {
    wd.set(e, t), f(t, [e]);
  }
  for (var Ma = 0; Ma < xd.length; Ma++) {
    var Da = xd[Ma], n0 = Da.toLowerCase(), r0 = Da[0].toUpperCase() + Da.slice(1);
    Fr(n0, "on" + r0);
  }
  Fr(md, "onAnimationEnd"), Fr(gd, "onAnimationIteration"), Fr(vd, "onAnimationStart"), Fr("dblclick", "onDoubleClick"), Fr("focusin", "onFocus"), Fr("focusout", "onBlur"), Fr(yd, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), o0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));
  function Sd(e, t, r) {
    var i = e.type || "unknown-event";
    e.currentTarget = r, Ar(i, t, void 0, e), e.currentTarget = null;
  }
  function kd(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], a = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t) for (var h = i.length - 1; 0 <= h; h--) {
          var k = i[h], R = k.instance, W = k.currentTarget;
          if (k = k.listener, R !== c && a.isPropagationStopped()) break e;
          Sd(a, k, W), c = R;
        }
        else for (h = 0; h < i.length; h++) {
          if (k = i[h], R = k.instance, W = k.currentTarget, k = k.listener, R !== c && a.isPropagationStopped()) break e;
          Sd(a, k, W), c = R;
        }
      }
    }
    if (nn) throw e = bt, nn = !1, bt = null, e;
  }
  function ht(e, t) {
    var r = t[Ka];
    r === void 0 && (r = t[Ka] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (_d(t, e, 2, !1), r.add(i));
  }
  function Ha(e, t, r) {
    var i = 0;
    t && (i |= 4), _d(r, e, i, t);
  }
  var Vl = "_reactListening" + Math.random().toString(36).slice(2);
  function ji(e) {
    if (!e[Vl]) {
      e[Vl] = !0, s.forEach(function(r) {
        r !== "selectionchange" && (o0.has(r) || Ha(r, !1, e), Ha(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vl] || (t[Vl] = !0, Ha("selectionchange", !1, t));
    }
  }
  function _d(e, t, r, i) {
    switch (Yf(t)) {
      case 1:
        var a = yv;
        break;
      case 4:
        a = wv;
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
      var h = i.tag;
      if (h === 3 || h === 4) {
        var k = i.stateNode.containerInfo;
        if (k === a || k.nodeType === 8 && k.parentNode === a) break;
        if (h === 4) for (h = i.return; h !== null; ) {
          var R = h.tag;
          if ((R === 3 || R === 4) && (R = h.stateNode.containerInfo, R === a || R.nodeType === 8 && R.parentNode === a)) return;
          h = h.return;
        }
        for (; k !== null; ) {
          if (h = co(k), h === null) return;
          if (R = h.tag, R === 5 || R === 6) {
            i = c = h;
            continue e;
          }
          k = k.parentNode;
        }
      }
      i = i.return;
    }
    Jn(function() {
      var W = c, Z = Xn(r), J = [];
      e: {
        var X = wd.get(e);
        if (X !== void 0) {
          var ce = Ta, ve = e;
          switch (e) {
            case "keypress":
              if (Dl(r) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Nv;
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
              ce = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = kv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Fv;
              break;
            case md:
            case gd:
            case vd:
              ce = Ev;
              break;
            case yd:
              ce = Dv;
              break;
            case "scroll":
              ce = xv;
              break;
            case "wheel":
              ce = Bv;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Iv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = Xf;
          }
          var ye = (t & 4) !== 0, At = !ye && e === "scroll", b = ye ? X !== null ? X + "Capture" : null : X;
          ye = [];
          for (var A = W, H; A !== null; ) {
            H = A;
            var le = H.stateNode;
            if (H.tag === 5 && le !== null && (H = le, b !== null && (le = ue(A, b), le != null && ye.push(Fi(A, le, H)))), At) break;
            A = A.return;
          }
          0 < ye.length && (X = new ce(X, ve, null, r, Z), J.push({ event: X, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (X = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", X && r !== vr && (ve = r.relatedTarget || r.fromElement) && (co(ve) || ve[wr])) break e;
          if ((ce || X) && (X = Z.window === Z ? Z : (X = Z.ownerDocument) ? X.defaultView || X.parentWindow : window, ce ? (ve = r.relatedTarget || r.toElement, ce = W, ve = ve ? co(ve) : null, ve !== null && (At = yr(ve), ve !== At || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (ce = null, ve = W), ce !== ve)) {
            if (ye = Gf, le = "onMouseLeave", b = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ye = Xf, le = "onPointerLeave", b = "onPointerEnter", A = "pointer"), At = ce == null ? X : Ho(ce), H = ve == null ? X : Ho(ve), X = new ye(le, A + "leave", ce, r, Z), X.target = At, X.relatedTarget = H, le = null, co(Z) === W && (ye = new ye(b, A + "enter", ve, r, Z), ye.target = H, ye.relatedTarget = At, le = ye), At = le, ce && ve) t: {
              for (ye = ce, b = ve, A = 0, H = ye; H; H = Mo(H)) A++;
              for (H = 0, le = b; le; le = Mo(le)) H++;
              for (; 0 < A - H; ) ye = Mo(ye), A--;
              for (; 0 < H - A; ) b = Mo(b), H--;
              for (; A--; ) {
                if (ye === b || b !== null && ye === b.alternate) break t;
                ye = Mo(ye), b = Mo(b);
              }
              ye = null;
            }
            else ye = null;
            ce !== null && Cd(J, X, ce, ye, !1), ve !== null && At !== null && Cd(J, At, ve, ye, !0);
          }
        }
        e: {
          if (X = W ? Ho(W) : window, ce = X.nodeName && X.nodeName.toLowerCase(), ce === "select" || ce === "input" && X.type === "file") var Se = Qv;
          else if (rd(X)) if (id) Se = Zv;
          else {
            Se = qv;
            var Pe = Gv;
          }
          else (ce = X.nodeName) && ce.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (Se = Xv);
          if (Se && (Se = Se(e, W))) {
            od(J, Se, r, Z);
            break e;
          }
          Pe && Pe(e, X, W), e === "focusout" && (Pe = X._wrapperState) && Pe.controlled && X.type === "number" && _e(X, "number", X.value);
        }
        switch (Pe = W ? Ho(W) : window, e) {
          case "focusin":
            (rd(Pe) || Pe.contentEditable === "true") && (jo = Pe, ba = W, Ni = null);
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
            ja = !1, pd(J, r, Z);
            break;
          case "selectionchange":
            if (t0) break;
          case "keydown":
          case "keyup":
            pd(J, r, Z);
        }
        var Ae;
        if (Aa) e: {
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
        else bo ? td(e, r) && (je = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (je = "onCompositionStart");
        je && (Zf && r.locale !== "ko" && (bo || je !== "onCompositionStart" ? je === "onCompositionEnd" && bo && (Ae = Kf()) : (jr = Z, Ea = "value" in jr ? jr.value : jr.textContent, bo = !0)), Pe = Yl(W, je), 0 < Pe.length && (je = new qf(je, e, null, r, Z), J.push({ event: je, listeners: Pe }), Ae ? je.data = Ae : (Ae = nd(r), Ae !== null && (je.data = Ae)))), (Ae = Uv ? $v(e, r) : Vv(e, r)) && (W = Yl(W, "onBeforeInput"), 0 < W.length && (Z = new qf("onBeforeInput", "beforeinput", null, r, Z), J.push({ event: Z, listeners: W }), Z.data = Ae));
      }
      kd(J, t);
    });
  }
  function Fi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Yl(e, t) {
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
  function Cd(e, t, r, i, a) {
    for (var c = t._reactName, h = []; r !== null && r !== i; ) {
      var k = r, R = k.alternate, W = k.stateNode;
      if (R !== null && R === i) break;
      k.tag === 5 && W !== null && (k = W, a ? (R = ue(r, c), R != null && h.unshift(Fi(r, R, k))) : a || (R = ue(r, c), R != null && h.push(Fi(r, R, k)))), r = r.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var i0 = /\r\n?/g, l0 = /\u0000|\uFFFD/g;
  function Ed(e) {
    return (typeof e == "string" ? e : "" + e).replace(i0, `
`).replace(l0, "");
  }
  function Kl(e, t, r) {
    if (t = Ed(t), Ed(e) !== t && r) throw Error(l(425));
  }
  function Ql() {
  }
  var Wa = null, Ua = null;
  function $a(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Va = typeof setTimeout == "function" ? setTimeout : void 0, s0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Td = typeof Promise == "function" ? Promise : void 0, a0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Td < "u" ? function(e) {
    return Td.resolve(null).then(e).catch(u0);
  } : Va;
  function u0(e) {
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
  function Id(e) {
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
  var Do = Math.random().toString(36).slice(2), tr = "__reactFiber$" + Do, Mi = "__reactProps$" + Do, wr = "__reactContainer$" + Do, Ka = "__reactEvents$" + Do, c0 = "__reactListeners$" + Do, f0 = "__reactHandles$" + Do;
  function co(e) {
    var t = e[tr];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[wr] || r[tr]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Id(e); e !== null; ) {
          if (r = e[tr]) return r;
          e = Id(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Di(e) {
    return e = e[tr] || e[wr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ho(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Gl(e) {
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
  function ql() {
    mt(un), mt(Qt);
  }
  function Rd(e, t, r) {
    if (Qt.current !== Hr) throw Error(l(168));
    ft(Qt, t), ft(un, r);
  }
  function Od(e, t, r) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return r;
    i = i.getChildContext();
    for (var a in i) if (!(a in t)) throw Error(l(108, Ee(e) || "Unknown", a));
    return _({}, r, i);
  }
  function Xl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Hr, fo = Qt.current, ft(Qt, e), ft(un, un.current), !0;
  }
  function Pd(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(l(169));
    r ? (e = Od(e, t, fo), i.__reactInternalMemoizedMergedChildContext = e, mt(un), mt(Qt), ft(Qt, e)) : mt(un), ft(un, r);
  }
  var xr = null, Zl = !1, Ga = !1;
  function Ad(e) {
    xr === null ? xr = [e] : xr.push(e);
  }
  function d0(e) {
    Zl = !0, Ad(e);
  }
  function Br() {
    if (!Ga && xr !== null) {
      Ga = !0;
      var e = 0, t = rt;
      try {
        var r = xr;
        for (rt = 1; e < r.length; e++) {
          var i = r[e];
          do
            i = i(!0);
          while (i !== null);
        }
        xr = null, Zl = !1;
      } catch (a) {
        throw xr !== null && (xr = xr.slice(e + 1)), wi(uo, Br), a;
      } finally {
        rt = t, Ga = !1;
      }
    }
    return null;
  }
  var Uo = [], $o = 0, Jl = null, es = 0, Tn = [], In = 0, po = null, Sr = 1, kr = "";
  function ho(e, t) {
    Uo[$o++] = es, Uo[$o++] = Jl, Jl = e, es = t;
  }
  function Ld(e, t, r) {
    Tn[In++] = Sr, Tn[In++] = kr, Tn[In++] = po, po = e;
    var i = Sr;
    e = kr;
    var a = 32 - jn(i) - 1;
    i &= ~(1 << a), r += 1;
    var c = 32 - jn(t) + a;
    if (30 < c) {
      var h = a - a % 5;
      c = (i & (1 << h) - 1).toString(32), i >>= h, a -= h, Sr = 1 << 32 - jn(t) + a | r << a | i, kr = c + e;
    } else Sr = 1 << c | r << a | i, kr = e;
  }
  function qa(e) {
    e.return !== null && (ho(e, 1), Ld(e, 1, 0));
  }
  function Xa(e) {
    for (; e === Jl; ) Jl = Uo[--$o], Uo[$o] = null, es = Uo[--$o], Uo[$o] = null;
    for (; e === po; ) po = Tn[--In], Tn[In] = null, kr = Tn[--In], Tn[In] = null, Sr = Tn[--In], Tn[In] = null;
  }
  var yn = null, wn = null, wt = !1, Mn = null;
  function zd(e, t) {
    var r = An(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function Nd(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, yn = e, wn = Mr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, yn = e, wn = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = po !== null ? { id: Sr, overflow: kr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = An(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, yn = e, wn = null, !0) : !1;
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
        if (!Nd(e, t)) {
          if (Za(e)) throw Error(l(418));
          t = Mr(r.nextSibling);
          var i = yn;
          t && Nd(e, t) ? zd(i, r) : (e.flags = e.flags & -4097 | 2, wt = !1, yn = e);
        }
      } else {
        if (Za(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, wt = !1, yn = e;
      }
    }
  }
  function bd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    yn = e;
  }
  function ts(e) {
    if (e !== yn) return !1;
    if (!wt) return bd(e), wt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps)), t && (t = wn)) {
      if (Za(e)) throw jd(), Error(l(418));
      for (; t; ) zd(e, t), t = Mr(t.nextSibling);
    }
    if (bd(e), e.tag === 13) {
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
  function jd() {
    for (var e = wn; e; ) e = Mr(e.nextSibling);
  }
  function Vo() {
    wn = yn = null, wt = !1;
  }
  function eu(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  var p0 = $.ReactCurrentBatchConfig;
  function Dn(e, t) {
    if (e && e.defaultProps) {
      t = _({}, t), e = e.defaultProps;
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  var ns = Dr(null), rs = null, Yo = null, tu = null;
  function nu() {
    tu = Yo = rs = null;
  }
  function ru(e) {
    var t = ns.current;
    mt(ns), e._currentValue = t;
  }
  function ou(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function Ko(e, t) {
    rs = e, tu = Yo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (fn = !0), e.firstContext = null);
  }
  function Rn(e) {
    var t = e._currentValue;
    if (tu !== e) if (e = { context: e, memoizedValue: t, next: null }, Yo === null) {
      if (rs === null) throw Error(l(308));
      Yo = e, rs.dependencies = { lanes: 0, firstContext: e };
    } else Yo = Yo.next = e;
    return t;
  }
  var mo = null;
  function iu(e) {
    mo === null ? mo = [e] : mo.push(e);
  }
  function Fd(e, t, r, i) {
    var a = t.interleaved;
    return a === null ? (r.next = r, iu(t)) : (r.next = a.next, a.next = r), t.interleaved = r, _r(e, i);
  }
  function _r(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var Wr = !1;
  function lu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Md(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Cr(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ur(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ze & 2) !== 0) {
      var a = i.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), i.pending = t, _r(e, r);
    }
    return a = i.interleaved, a === null ? (t.next = t, iu(i)) : (t.next = a.next, a.next = t), i.interleaved = t, _r(e, r);
  }
  function os(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, xa(e, r);
    }
  }
  function Dd(e, t) {
    var r = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, r === i)) {
      var a = null, c = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var h = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          c === null ? a = c = h : c = c.next = h, r = r.next;
        } while (r !== null);
        c === null ? a = c = t : c = c.next = t;
      } else a = c = t;
      r = { baseState: i.baseState, firstBaseUpdate: a, lastBaseUpdate: c, shared: i.shared, effects: i.effects }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  function is(e, t, r, i) {
    var a = e.updateQueue;
    Wr = !1;
    var c = a.firstBaseUpdate, h = a.lastBaseUpdate, k = a.shared.pending;
    if (k !== null) {
      a.shared.pending = null;
      var R = k, W = R.next;
      R.next = null, h === null ? c = W : h.next = W, h = R;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, k = Z.lastBaseUpdate, k !== h && (k === null ? Z.firstBaseUpdate = W : k.next = W, Z.lastBaseUpdate = R));
    }
    if (c !== null) {
      var J = a.baseState;
      h = 0, Z = W = R = null, k = c;
      do {
        var X = k.lane, ce = k.eventTime;
        if ((i & X) === X) {
          Z !== null && (Z = Z.next = {
            eventTime: ce,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ve = e, ye = k;
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
                J = _({}, J, X);
                break e;
              case 2:
                Wr = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, X = a.effects, X === null ? a.effects = [k] : X.push(k));
        } else ce = { eventTime: ce, lane: X, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Z === null ? (W = Z = ce, R = J) : Z = Z.next = ce, h |= X;
        if (k = k.next, k === null) {
          if (k = a.shared.pending, k === null) break;
          X = k, k = X.next, X.next = null, a.lastBaseUpdate = X, a.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (R = J), a.baseState = R, a.firstBaseUpdate = W, a.lastBaseUpdate = Z, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          h |= a.lane, a = a.next;
        while (a !== t);
      } else c === null && (a.shared.lanes = 0);
      yo |= h, e.lanes = h, e.memoizedState = J;
    }
  }
  function Hd(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], a = i.callback;
      if (a !== null) {
        if (i.callback = null, i = r, typeof a != "function") throw Error(l(191, a));
        a.call(i);
      }
    }
  }
  var Bd = new n.Component().refs;
  function su(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : _({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ls = { isMounted: function(e) {
    return (e = e._reactInternals) ? yr(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var i = on(), a = Kr(e), c = Cr(i, a);
    c.payload = t, r != null && (c.callback = r), t = Ur(e, c, a), t !== null && (Wn(t, e, a, i), os(t, e, a));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var i = on(), a = Kr(e), c = Cr(i, a);
    c.tag = 1, c.payload = t, r != null && (c.callback = r), t = Ur(e, c, a), t !== null && (Wn(t, e, a, i), os(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = on(), i = Kr(e), a = Cr(r, i);
    a.tag = 2, t != null && (a.callback = t), t = Ur(e, a, i), t !== null && (Wn(t, e, i, r), os(t, e, i));
  } };
  function Wd(e, t, r, i, a, c, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, c, h) : t.prototype && t.prototype.isPureReactComponent ? !zi(r, i) || !zi(a, c) : !0;
  }
  function Ud(e, t, r) {
    var i = !1, a = Hr, c = t.contextType;
    return typeof c == "object" && c !== null ? c = Rn(c) : (a = cn(t) ? fo : Qt.current, i = t.contextTypes, c = (i = i != null) ? Wo(e, a) : Hr), t = new t(r, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ls, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = c), t;
  }
  function $d(e, t, r, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && ls.enqueueReplaceState(t, t.state, null);
  }
  function au(e, t, r, i) {
    var a = e.stateNode;
    a.props = r, a.state = e.memoizedState, a.refs = Bd, lu(e);
    var c = t.contextType;
    typeof c == "object" && c !== null ? a.context = Rn(c) : (c = cn(t) ? fo : Qt.current, a.context = Wo(e, c)), a.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (su(e, t, c, r), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ls.enqueueReplaceState(a, a.state, null), is(e, r, a, i), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
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
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(h) {
          var k = a.refs;
          k === Bd && (k = a.refs = {}), h === null ? delete k[c] : k[c] = h;
        }, t._stringRef = c, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function ss(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Vd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Yd(e) {
    function t(b, A) {
      if (e) {
        var H = b.deletions;
        H === null ? (b.deletions = [A], b.flags |= 16) : H.push(A);
      }
    }
    function r(b, A) {
      if (!e) return null;
      for (; A !== null; ) t(b, A), A = A.sibling;
      return null;
    }
    function i(b, A) {
      for (b = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? b.set(A.key, A) : b.set(A.index, A), A = A.sibling;
      return b;
    }
    function a(b, A) {
      return b = Gr(b, A), b.index = 0, b.sibling = null, b;
    }
    function c(b, A, H) {
      return b.index = H, e ? (H = b.alternate, H !== null ? (H = H.index, H < A ? (b.flags |= 2, A) : H) : (b.flags |= 2, A)) : (b.flags |= 1048576, A);
    }
    function h(b) {
      return e && b.alternate === null && (b.flags |= 2), b;
    }
    function k(b, A, H, le) {
      return A === null || A.tag !== 6 ? (A = Vu(H, b.mode, le), A.return = b, A) : (A = a(A, H), A.return = b, A);
    }
    function R(b, A, H, le) {
      var Se = H.type;
      return Se === B ? Z(b, A, H.props.children, le, H.key) : A !== null && (A.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === we && Vd(Se) === A.type) ? (le = a(A, H.props), le.ref = Hi(b, A, H), le.return = b, le) : (le = Ts(H.type, H.key, H.props, null, b.mode, le), le.ref = Hi(b, A, H), le.return = b, le);
    }
    function W(b, A, H, le) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== H.containerInfo || A.stateNode.implementation !== H.implementation ? (A = Yu(H, b.mode, le), A.return = b, A) : (A = a(A, H.children || []), A.return = b, A);
    }
    function Z(b, A, H, le, Se) {
      return A === null || A.tag !== 7 ? (A = ko(H, b.mode, le, Se), A.return = b, A) : (A = a(A, H), A.return = b, A);
    }
    function J(b, A, H) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = Vu("" + A, b.mode, H), A.return = b, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case F:
            return H = Ts(A.type, A.key, A.props, null, b.mode, H), H.ref = Hi(b, null, A), H.return = b, H;
          case N:
            return A = Yu(A, b.mode, H), A.return = b, A;
          case we:
            var le = A._init;
            return J(b, le(A._payload), H);
        }
        if (Ge(A) || Y(A)) return A = ko(A, b.mode, H, null), A.return = b, A;
        ss(b, A);
      }
      return null;
    }
    function X(b, A, H, le) {
      var Se = A !== null ? A.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return Se !== null ? null : k(b, A, "" + H, le);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case F:
            return H.key === Se ? R(b, A, H, le) : null;
          case N:
            return H.key === Se ? W(b, A, H, le) : null;
          case we:
            return Se = H._init, X(
              b,
              A,
              Se(H._payload),
              le
            );
        }
        if (Ge(H) || Y(H)) return Se !== null ? null : Z(b, A, H, le, null);
        ss(b, H);
      }
      return null;
    }
    function ce(b, A, H, le, Se) {
      if (typeof le == "string" && le !== "" || typeof le == "number") return b = b.get(H) || null, k(A, b, "" + le, Se);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case F:
            return b = b.get(le.key === null ? H : le.key) || null, R(A, b, le, Se);
          case N:
            return b = b.get(le.key === null ? H : le.key) || null, W(A, b, le, Se);
          case we:
            var Pe = le._init;
            return ce(b, A, H, Pe(le._payload), Se);
        }
        if (Ge(le) || Y(le)) return b = b.get(H) || null, Z(A, b, le, Se, null);
        ss(A, le);
      }
      return null;
    }
    function ve(b, A, H, le) {
      for (var Se = null, Pe = null, Ae = A, je = A = 0, Wt = null; Ae !== null && je < H.length; je++) {
        Ae.index > je ? (Wt = Ae, Ae = null) : Wt = Ae.sibling;
        var et = X(b, Ae, H[je], le);
        if (et === null) {
          Ae === null && (Ae = Wt);
          break;
        }
        e && Ae && et.alternate === null && t(b, Ae), A = c(et, A, je), Pe === null ? Se = et : Pe.sibling = et, Pe = et, Ae = Wt;
      }
      if (je === H.length) return r(b, Ae), wt && ho(b, je), Se;
      if (Ae === null) {
        for (; je < H.length; je++) Ae = J(b, H[je], le), Ae !== null && (A = c(Ae, A, je), Pe === null ? Se = Ae : Pe.sibling = Ae, Pe = Ae);
        return wt && ho(b, je), Se;
      }
      for (Ae = i(b, Ae); je < H.length; je++) Wt = ce(Ae, b, je, H[je], le), Wt !== null && (e && Wt.alternate !== null && Ae.delete(Wt.key === null ? je : Wt.key), A = c(Wt, A, je), Pe === null ? Se = Wt : Pe.sibling = Wt, Pe = Wt);
      return e && Ae.forEach(function(qr) {
        return t(b, qr);
      }), wt && ho(b, je), Se;
    }
    function ye(b, A, H, le) {
      var Se = Y(H);
      if (typeof Se != "function") throw Error(l(150));
      if (H = Se.call(H), H == null) throw Error(l(151));
      for (var Pe = Se = null, Ae = A, je = A = 0, Wt = null, et = H.next(); Ae !== null && !et.done; je++, et = H.next()) {
        Ae.index > je ? (Wt = Ae, Ae = null) : Wt = Ae.sibling;
        var qr = X(b, Ae, et.value, le);
        if (qr === null) {
          Ae === null && (Ae = Wt);
          break;
        }
        e && Ae && qr.alternate === null && t(b, Ae), A = c(qr, A, je), Pe === null ? Se = qr : Pe.sibling = qr, Pe = qr, Ae = Wt;
      }
      if (et.done) return r(
        b,
        Ae
      ), wt && ho(b, je), Se;
      if (Ae === null) {
        for (; !et.done; je++, et = H.next()) et = J(b, et.value, le), et !== null && (A = c(et, A, je), Pe === null ? Se = et : Pe.sibling = et, Pe = et);
        return wt && ho(b, je), Se;
      }
      for (Ae = i(b, Ae); !et.done; je++, et = H.next()) et = ce(Ae, b, je, et.value, le), et !== null && (e && et.alternate !== null && Ae.delete(et.key === null ? je : et.key), A = c(et, A, je), Pe === null ? Se = et : Pe.sibling = et, Pe = et);
      return e && Ae.forEach(function(Y0) {
        return t(b, Y0);
      }), wt && ho(b, je), Se;
    }
    function At(b, A, H, le) {
      if (typeof H == "object" && H !== null && H.type === B && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case F:
            e: {
              for (var Se = H.key, Pe = A; Pe !== null; ) {
                if (Pe.key === Se) {
                  if (Se = H.type, Se === B) {
                    if (Pe.tag === 7) {
                      r(b, Pe.sibling), A = a(Pe, H.props.children), A.return = b, b = A;
                      break e;
                    }
                  } else if (Pe.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === we && Vd(Se) === Pe.type) {
                    r(b, Pe.sibling), A = a(Pe, H.props), A.ref = Hi(b, Pe, H), A.return = b, b = A;
                    break e;
                  }
                  r(b, Pe);
                  break;
                } else t(b, Pe);
                Pe = Pe.sibling;
              }
              H.type === B ? (A = ko(H.props.children, b.mode, le, H.key), A.return = b, b = A) : (le = Ts(H.type, H.key, H.props, null, b.mode, le), le.ref = Hi(b, A, H), le.return = b, b = le);
            }
            return h(b);
          case N:
            e: {
              for (Pe = H.key; A !== null; ) {
                if (A.key === Pe) if (A.tag === 4 && A.stateNode.containerInfo === H.containerInfo && A.stateNode.implementation === H.implementation) {
                  r(b, A.sibling), A = a(A, H.children || []), A.return = b, b = A;
                  break e;
                } else {
                  r(b, A);
                  break;
                }
                else t(b, A);
                A = A.sibling;
              }
              A = Yu(H, b.mode, le), A.return = b, b = A;
            }
            return h(b);
          case we:
            return Pe = H._init, At(b, A, Pe(H._payload), le);
        }
        if (Ge(H)) return ve(b, A, H, le);
        if (Y(H)) return ye(b, A, H, le);
        ss(b, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, A !== null && A.tag === 6 ? (r(b, A.sibling), A = a(A, H), A.return = b, b = A) : (r(b, A), A = Vu(H, b.mode, le), A.return = b, b = A), h(b)) : r(b, A);
    }
    return At;
  }
  var Qo = Yd(!0), Kd = Yd(!1), Bi = {}, nr = Dr(Bi), Wi = Dr(Bi), Ui = Dr(Bi);
  function go(e) {
    if (e === Bi) throw Error(l(174));
    return e;
  }
  function uu(e, t) {
    switch (ft(Ui, t), ft(Wi, e), ft(nr, Bi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lt(t, e);
    }
    mt(nr), ft(nr, t);
  }
  function Go() {
    mt(nr), mt(Wi), mt(Ui);
  }
  function Qd(e) {
    go(Ui.current);
    var t = go(nr.current), r = lt(t, e.type);
    t !== r && (ft(Wi, e), ft(nr, r));
  }
  function cu(e) {
    Wi.current === e && (mt(nr), mt(Wi));
  }
  var _t = Dr(0);
  function as(e) {
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
  var us = $.ReactCurrentDispatcher, pu = $.ReactCurrentBatchConfig, vo = 0, Ct = null, jt = null, Ht = null, cs = !1, $i = !1, Vi = 0, h0 = 0;
  function Gt() {
    throw Error(l(321));
  }
  function hu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Fn(e[r], t[r])) return !1;
    return !0;
  }
  function mu(e, t, r, i, a, c) {
    if (vo = c, Ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, us.current = e === null || e.memoizedState === null ? y0 : w0, e = r(i, a), $i) {
      c = 0;
      do {
        if ($i = !1, Vi = 0, 25 <= c) throw Error(l(301));
        c += 1, Ht = jt = null, t.updateQueue = null, us.current = x0, e = r(i, a);
      } while ($i);
    }
    if (us.current = ps, t = jt !== null && jt.next !== null, vo = 0, Ht = jt = Ct = null, cs = !1, t) throw Error(l(300));
    return e;
  }
  function gu() {
    var e = Vi !== 0;
    return Vi = 0, e;
  }
  function rr() {
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
        var h = a.next;
        a.next = c.next, c.next = h;
      }
      i.baseQueue = a = c, r.pending = null;
    }
    if (a !== null) {
      c = a.next, i = i.baseState;
      var k = h = null, R = null, W = c;
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
          R === null ? (k = R = J, h = i) : R = R.next = J, Ct.lanes |= Z, yo |= Z;
        }
        W = W.next;
      } while (W !== null && W !== c);
      R === null ? h = i : R.next = k, Fn(i, t.memoizedState) || (fn = !0), t.memoizedState = i, t.baseState = h, t.baseQueue = R, r.lastRenderedState = i;
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
      var h = a = a.next;
      do
        c = e(c, h.action), h = h.next;
      while (h !== a);
      Fn(c, t.memoizedState) || (fn = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), r.lastRenderedState = c;
    }
    return [c, i];
  }
  function Gd() {
  }
  function qd(e, t) {
    var r = Ct, i = On(), a = t(), c = !Fn(i.memoizedState, a);
    if (c && (i.memoizedState = a, fn = !0), i = i.queue, wu(Jd.bind(null, r, i, e), [e]), i.getSnapshot !== t || c || Ht !== null && Ht.memoizedState.tag & 1) {
      if (r.flags |= 2048, Ki(9, Zd.bind(null, r, i, a, t), void 0, null), Bt === null) throw Error(l(349));
      (vo & 30) !== 0 || Xd(r, t, a);
    }
    return a;
  }
  function Xd(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ct.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function Zd(e, t, r, i) {
    t.value = r, t.getSnapshot = i, ep(t) && tp(e);
  }
  function Jd(e, t, r) {
    return r(function() {
      ep(t) && tp(e);
    });
  }
  function ep(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Fn(e, r);
    } catch {
      return !0;
    }
  }
  function tp(e) {
    var t = _r(e, 1);
    t !== null && Wn(t, e, 1, -1);
  }
  function np(e) {
    var t = rr();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yi, lastRenderedState: e }, t.queue = e, e = e.dispatch = v0.bind(null, Ct, e), [t.memoizedState, e];
  }
  function Ki(e, t, r, i) {
    return e = { tag: e, create: t, destroy: r, deps: i, next: null }, t = Ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ct.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function rp() {
    return On().memoizedState;
  }
  function fs(e, t, r, i) {
    var a = rr();
    Ct.flags |= e, a.memoizedState = Ki(1 | t, r, void 0, i === void 0 ? null : i);
  }
  function ds(e, t, r, i) {
    var a = On();
    i = i === void 0 ? null : i;
    var c = void 0;
    if (jt !== null) {
      var h = jt.memoizedState;
      if (c = h.destroy, i !== null && hu(i, h.deps)) {
        a.memoizedState = Ki(t, r, c, i);
        return;
      }
    }
    Ct.flags |= e, a.memoizedState = Ki(1 | t, r, c, i);
  }
  function op(e, t) {
    return fs(8390656, 8, e, t);
  }
  function wu(e, t) {
    return ds(2048, 8, e, t);
  }
  function ip(e, t) {
    return ds(4, 2, e, t);
  }
  function lp(e, t) {
    return ds(4, 4, e, t);
  }
  function sp(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function ap(e, t, r) {
    return r = r != null ? r.concat([e]) : null, ds(4, 4, sp.bind(null, t, e), r);
  }
  function xu() {
  }
  function up(e, t) {
    var r = On();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && hu(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function cp(e, t) {
    var r = On();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && hu(t, i[1]) ? i[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function fp(e, t, r) {
    return (vo & 21) === 0 ? (e.baseState && (e.baseState = !1, fn = !0), e.memoizedState = r) : (Fn(r, t) || (r = Ff(), Ct.lanes |= r, yo |= r, e.baseState = !0), t);
  }
  function m0(e, t) {
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
  function dp() {
    return On().memoizedState;
  }
  function g0(e, t, r) {
    var i = Kr(e);
    if (r = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null }, pp(e)) hp(t, r);
    else if (r = Fd(e, t, r, i), r !== null) {
      var a = on();
      Wn(r, e, i, a), mp(r, t, i);
    }
  }
  function v0(e, t, r) {
    var i = Kr(e), a = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (pp(e)) hp(t, a);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var h = t.lastRenderedState, k = c(h, r);
        if (a.hasEagerState = !0, a.eagerState = k, Fn(k, h)) {
          var R = t.interleaved;
          R === null ? (a.next = a, iu(t)) : (a.next = R.next, R.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      r = Fd(e, t, a, i), r !== null && (a = on(), Wn(r, e, i, a), mp(r, t, i));
    }
  }
  function pp(e) {
    var t = e.alternate;
    return e === Ct || t !== null && t === Ct;
  }
  function hp(e, t) {
    $i = cs = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function mp(e, t, r) {
    if ((r & 4194240) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, xa(e, r);
    }
  }
  var ps = { readContext: Rn, useCallback: Gt, useContext: Gt, useEffect: Gt, useImperativeHandle: Gt, useInsertionEffect: Gt, useLayoutEffect: Gt, useMemo: Gt, useReducer: Gt, useRef: Gt, useState: Gt, useDebugValue: Gt, useDeferredValue: Gt, useTransition: Gt, useMutableSource: Gt, useSyncExternalStore: Gt, useId: Gt, unstable_isNewReconciler: !1 }, y0 = { readContext: Rn, useCallback: function(e, t) {
    return rr().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Rn, useEffect: op, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, fs(
      4194308,
      4,
      sp.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return fs(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return fs(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = rr();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var i = rr();
    return t = r !== void 0 ? r(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = g0.bind(null, Ct, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = rr();
    return e = { current: e }, t.memoizedState = e;
  }, useState: np, useDebugValue: xu, useDeferredValue: function(e) {
    return rr().memoizedState = e;
  }, useTransition: function() {
    var e = np(!1), t = e[0];
    return e = m0.bind(null, e[1]), rr().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var i = Ct, a = rr();
    if (wt) {
      if (r === void 0) throw Error(l(407));
      r = r();
    } else {
      if (r = t(), Bt === null) throw Error(l(349));
      (vo & 30) !== 0 || Xd(i, t, r);
    }
    a.memoizedState = r;
    var c = { value: r, getSnapshot: t };
    return a.queue = c, op(Jd.bind(
      null,
      i,
      c,
      e
    ), [e]), i.flags |= 2048, Ki(9, Zd.bind(null, i, c, r, t), void 0, null), r;
  }, useId: function() {
    var e = rr(), t = Bt.identifierPrefix;
    if (wt) {
      var r = kr, i = Sr;
      r = (i & ~(1 << 32 - jn(i) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Vi++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = h0++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, w0 = {
    readContext: Rn,
    useCallback: up,
    useContext: Rn,
    useEffect: wu,
    useImperativeHandle: ap,
    useInsertionEffect: ip,
    useLayoutEffect: lp,
    useMemo: cp,
    useReducer: vu,
    useRef: rp,
    useState: function() {
      return vu(Yi);
    },
    useDebugValue: xu,
    useDeferredValue: function(e) {
      var t = On();
      return fp(t, jt.memoizedState, e);
    },
    useTransition: function() {
      var e = vu(Yi)[0], t = On().memoizedState;
      return [e, t];
    },
    useMutableSource: Gd,
    useSyncExternalStore: qd,
    useId: dp,
    unstable_isNewReconciler: !1
  }, x0 = { readContext: Rn, useCallback: up, useContext: Rn, useEffect: wu, useImperativeHandle: ap, useInsertionEffect: ip, useLayoutEffect: lp, useMemo: cp, useReducer: yu, useRef: rp, useState: function() {
    return yu(Yi);
  }, useDebugValue: xu, useDeferredValue: function(e) {
    var t = On();
    return jt === null ? t.memoizedState = e : fp(t, jt.memoizedState, e);
  }, useTransition: function() {
    var e = yu(Yi)[0], t = On().memoizedState;
    return [e, t];
  }, useMutableSource: Gd, useSyncExternalStore: qd, useId: dp, unstable_isNewReconciler: !1 };
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
  var S0 = typeof WeakMap == "function" ? WeakMap : Map;
  function gp(e, t, r) {
    r = Cr(-1, r), r.tag = 3, r.payload = { element: null };
    var i = t.value;
    return r.callback = function() {
      xs || (xs = !0, Fu = i), ku(e, t);
    }, r;
  }
  function vp(e, t, r) {
    r = Cr(-1, r), r.tag = 3;
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
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), r;
  }
  function yp(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new S0();
      var a = /* @__PURE__ */ new Set();
      i.set(t, a);
    } else a = i.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(t, a));
    a.has(r) || (a.add(r), e = b0.bind(null, e, t, r), t.then(e, e));
  }
  function wp(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function xp(e, t, r, i, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Cr(-1, 1), t.tag = 2, Ur(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var k0 = $.ReactCurrentOwner, fn = !1;
  function rn(e, t, r, i) {
    t.child = e === null ? Kd(t, null, r, i) : Qo(t, e.child, r, i);
  }
  function Sp(e, t, r, i, a) {
    r = r.render;
    var c = t.ref;
    return Ko(t, a), i = mu(e, t, r, i, c, a), r = gu(), e !== null && !fn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Er(e, t, a)) : (wt && r && qa(t), t.flags |= 1, rn(e, t, i, a), t.child);
  }
  function kp(e, t, r, i, a) {
    if (e === null) {
      var c = r.type;
      return typeof c == "function" && !$u(c) && c.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = c, _p(e, t, c, i, a)) : (e = Ts(r.type, null, i, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, (e.lanes & a) === 0) {
      var h = c.memoizedProps;
      if (r = r.compare, r = r !== null ? r : zi, r(h, i) && e.ref === t.ref) return Er(e, t, a);
    }
    return t.flags |= 1, e = Gr(c, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _p(e, t, r, i, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (zi(c, i) && e.ref === t.ref) if (fn = !1, t.pendingProps = i = c, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (fn = !0);
      else return t.lanes = e.lanes, Er(e, t, a);
    }
    return _u(e, t, r, i, a);
  }
  function Cp(e, t, r) {
    var i = t.pendingProps, a = i.children, c = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ft(Zo, xn), xn |= r;
    else {
      if ((r & 1073741824) === 0) return e = c !== null ? c.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ft(Zo, xn), xn |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = c !== null ? c.baseLanes : r, ft(Zo, xn), xn |= i;
    }
    else c !== null ? (i = c.baseLanes | r, t.memoizedState = null) : i = r, ft(Zo, xn), xn |= i;
    return rn(e, t, a, r), t.child;
  }
  function Ep(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function _u(e, t, r, i, a) {
    var c = cn(r) ? fo : Qt.current;
    return c = Wo(t, c), Ko(t, a), r = mu(e, t, r, i, c, a), i = gu(), e !== null && !fn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Er(e, t, a)) : (wt && i && qa(t), t.flags |= 1, rn(e, t, r, a), t.child);
  }
  function Tp(e, t, r, i, a) {
    if (cn(r)) {
      var c = !0;
      Xl(t);
    } else c = !1;
    if (Ko(t, a), t.stateNode === null) ms(e, t), Ud(t, r, i), au(t, r, i, a), i = !0;
    else if (e === null) {
      var h = t.stateNode, k = t.memoizedProps;
      h.props = k;
      var R = h.context, W = r.contextType;
      typeof W == "object" && W !== null ? W = Rn(W) : (W = cn(r) ? fo : Qt.current, W = Wo(t, W));
      var Z = r.getDerivedStateFromProps, J = typeof Z == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      J || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== i || R !== W) && $d(t, h, i, W), Wr = !1;
      var X = t.memoizedState;
      h.state = X, is(t, i, h, a), R = t.memoizedState, k !== i || X !== R || un.current || Wr ? (typeof Z == "function" && (su(t, r, Z, i), R = t.memoizedState), (k = Wr || Wd(t, r, k, i, X, R, W)) ? (J || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = R), h.props = i, h.state = R, h.context = W, i = k) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      h = t.stateNode, Md(e, t), k = t.memoizedProps, W = t.type === t.elementType ? k : Dn(t.type, k), h.props = W, J = t.pendingProps, X = h.context, R = r.contextType, typeof R == "object" && R !== null ? R = Rn(R) : (R = cn(r) ? fo : Qt.current, R = Wo(t, R));
      var ce = r.getDerivedStateFromProps;
      (Z = typeof ce == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (k !== J || X !== R) && $d(t, h, i, R), Wr = !1, X = t.memoizedState, h.state = X, is(t, i, h, a);
      var ve = t.memoizedState;
      k !== J || X !== ve || un.current || Wr ? (typeof ce == "function" && (su(t, r, ce, i), ve = t.memoizedState), (W = Wr || Wd(t, r, W, i, X, ve, R) || !1) ? (Z || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, ve, R), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(i, ve, R)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ve), h.props = i, h.state = ve, h.context = R, i = W) : (typeof h.componentDidUpdate != "function" || k === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Cu(e, t, r, i, c, a);
  }
  function Cu(e, t, r, i, a, c) {
    Ep(e, t);
    var h = (t.flags & 128) !== 0;
    if (!i && !h) return a && Pd(t, r, !1), Er(e, t, c);
    i = t.stateNode, k0.current = t;
    var k = h && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && h ? (t.child = Qo(t, e.child, null, c), t.child = Qo(t, null, k, c)) : rn(e, t, k, c), t.memoizedState = i.state, a && Pd(t, r, !0), t.child;
  }
  function Ip(e) {
    var t = e.stateNode;
    t.pendingContext ? Rd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rd(e, t.context, !1), uu(e, t.containerInfo);
  }
  function Rp(e, t, r, i, a) {
    return Vo(), eu(a), t.flags |= 256, rn(e, t, r, i), t.child;
  }
  var Eu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Op(e, t, r) {
    var i = t.pendingProps, a = _t.current, c = !1, h = (t.flags & 128) !== 0, k;
    if ((k = h) || (k = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), k ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ft(_t, a & 1), e === null)
      return Ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = i.children, e = i.fallback, c ? (i = t.mode, c = t.child, h = { mode: "hidden", children: h }, (i & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = h) : c = Is(h, i, 0, null), e = ko(e, i, r, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Tu(r), t.memoizedState = Eu, e) : Iu(t, h));
    if (a = e.memoizedState, a !== null && (k = a.dehydrated, k !== null)) return _0(e, t, h, i, k, a, r);
    if (c) {
      c = i.fallback, h = t.mode, a = e.child, k = a.sibling;
      var R = { mode: "hidden", children: i.children };
      return (h & 1) === 0 && t.child !== a ? (i = t.child, i.childLanes = 0, i.pendingProps = R, t.deletions = null) : (i = Gr(a, R), i.subtreeFlags = a.subtreeFlags & 14680064), k !== null ? c = Gr(k, c) : (c = ko(c, h, r, null), c.flags |= 2), c.return = t, i.return = t, i.sibling = c, t.child = i, i = c, c = t.child, h = e.child.memoizedState, h = h === null ? Tu(r) : { baseLanes: h.baseLanes | r, cachePool: null, transitions: h.transitions }, c.memoizedState = h, c.childLanes = e.childLanes & ~r, t.memoizedState = Eu, i;
    }
    return c = e.child, e = c.sibling, i = Gr(c, { mode: "visible", children: i.children }), (t.mode & 1) === 0 && (i.lanes = r), i.return = t, i.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Iu(e, t) {
    return t = Is({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function hs(e, t, r, i) {
    return i !== null && eu(i), Qo(t, e.child, null, r), e = Iu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function _0(e, t, r, i, a, c, h) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, i = Su(Error(l(422))), hs(e, t, h, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = i.fallback, a = t.mode, i = Is({ mode: "visible", children: i.children }, a, 0, null), c = ko(c, a, h, null), c.flags |= 2, i.return = t, c.return = t, i.sibling = c, t.child = i, (t.mode & 1) !== 0 && Qo(t, e.child, null, h), t.child.memoizedState = Tu(h), t.memoizedState = Eu, c);
    if ((t.mode & 1) === 0) return hs(e, t, h, null);
    if (a.data === "$!") {
      if (i = a.nextSibling && a.nextSibling.dataset, i) var k = i.dgst;
      return i = k, c = Error(l(419)), i = Su(c, i, void 0), hs(e, t, h, i);
    }
    if (k = (h & e.childLanes) !== 0, fn || k) {
      if (i = Bt, i !== null) {
        switch (h & -h) {
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
        a = (a & (i.suspendedLanes | h)) !== 0 ? 0 : a, a !== 0 && a !== c.retryLane && (c.retryLane = a, _r(e, a), Wn(i, e, a, -1));
      }
      return Uu(), i = Su(Error(l(421))), hs(e, t, h, i);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = j0.bind(null, e), a._reactRetry = t, null) : (e = c.treeContext, wn = Mr(a.nextSibling), yn = t, wt = !0, Mn = null, e !== null && (Tn[In++] = Sr, Tn[In++] = kr, Tn[In++] = po, Sr = e.id, kr = e.overflow, po = t), t = Iu(t, i.children), t.flags |= 4096, t);
  }
  function Pp(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), ou(e.return, t, r);
  }
  function Ru(e, t, r, i, a) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: r, tailMode: a } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = r, c.tailMode = a);
  }
  function Ap(e, t, r) {
    var i = t.pendingProps, a = i.revealOrder, c = i.tail;
    if (rn(e, t, i.children, r), i = _t.current, (i & 2) !== 0) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pp(e, r, t);
        else if (e.tag === 19) Pp(e, r, t);
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
        for (r = t.child, a = null; r !== null; ) e = r.alternate, e !== null && as(e) === null && (a = r), r = r.sibling;
        r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), Ru(t, !1, a, r, c);
        break;
      case "backwards":
        for (r = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && as(e) === null) {
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
  function ms(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Er(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), yo |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = Gr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Gr(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function C0(e, t, r) {
    switch (t.tag) {
      case 3:
        Ip(t), Vo();
        break;
      case 5:
        Qd(t);
        break;
      case 1:
        cn(t.type) && Xl(t);
        break;
      case 4:
        uu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, a = t.memoizedProps.value;
        ft(ns, i._currentValue), i._currentValue = a;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (ft(_t, _t.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Op(e, t, r) : (ft(_t, _t.current & 1), e = Er(e, t, r), e !== null ? e.sibling : null);
        ft(_t, _t.current & 1);
        break;
      case 19:
        if (i = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Ap(e, t, r);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ft(_t, _t.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Cp(e, t, r);
    }
    return Er(e, t, r);
  }
  var Lp, Ou, zp, Np;
  Lp = function(e, t) {
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
  }, zp = function(e, t, r, i) {
    var a = e.memoizedProps;
    if (a !== i) {
      e = t.stateNode, go(nr.current);
      var c = null;
      switch (r) {
        case "input":
          a = Ue(e, a), i = Ue(e, i), c = [];
          break;
        case "select":
          a = _({}, a, { value: void 0 }), i = _({}, i, { value: void 0 }), c = [];
          break;
        case "textarea":
          a = kt(e, a), i = kt(e, i), c = [];
          break;
        default:
          typeof a.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ql);
      }
      gr(r, i);
      var h;
      r = null;
      for (W in a) if (!i.hasOwnProperty(W) && a.hasOwnProperty(W) && a[W] != null) if (W === "style") {
        var k = a[W];
        for (h in k) k.hasOwnProperty(h) && (r || (r = {}), r[h] = "");
      } else W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (u.hasOwnProperty(W) ? c || (c = []) : (c = c || []).push(W, null));
      for (W in i) {
        var R = i[W];
        if (k = a != null ? a[W] : void 0, i.hasOwnProperty(W) && R !== k && (R != null || k != null)) if (W === "style") if (k) {
          for (h in k) !k.hasOwnProperty(h) || R && R.hasOwnProperty(h) || (r || (r = {}), r[h] = "");
          for (h in R) R.hasOwnProperty(h) && k[h] !== R[h] && (r || (r = {}), r[h] = R[h]);
        } else r || (c || (c = []), c.push(
          W,
          r
        )), r = R;
        else W === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, k = k ? k.__html : void 0, R != null && k !== R && (c = c || []).push(W, R)) : W === "children" ? typeof R != "string" && typeof R != "number" || (c = c || []).push(W, "" + R) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (u.hasOwnProperty(W) ? (R != null && W === "onScroll" && ht("scroll", e), c || k === R || (c = [])) : (c = c || []).push(W, R));
      }
      r && (c = c || []).push("style", r);
      var W = c;
      (t.updateQueue = W) && (t.flags |= 4);
    }
  }, Np = function(e, t, r, i) {
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
  function E0(e, t, r) {
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
        return cn(t.type) && ql(), qt(t), null;
      case 3:
        return i = t.stateNode, Go(), mt(un), mt(Qt), du(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (ts(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mn !== null && (Hu(Mn), Mn = null))), Ou(e, t), qt(t), null;
      case 5:
        cu(t);
        var a = go(Ui.current);
        if (r = t.type, e !== null && t.stateNode != null) zp(e, t, r, i, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166));
            return qt(t), null;
          }
          if (e = go(nr.current), ts(t)) {
            i = t.stateNode, r = t.type;
            var c = t.memoizedProps;
            switch (i[tr] = t, i[Mi] = c, e = (t.mode & 1) !== 0, r) {
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
            gr(r, c), a = null;
            for (var h in c) if (c.hasOwnProperty(h)) {
              var k = c[h];
              h === "children" ? typeof k == "string" ? i.textContent !== k && (c.suppressHydrationWarning !== !0 && Kl(i.textContent, k, e), a = ["children", k]) : typeof k == "number" && i.textContent !== "" + k && (c.suppressHydrationWarning !== !0 && Kl(
                i.textContent,
                k,
                e
              ), a = ["children", "" + k]) : u.hasOwnProperty(h) && k != null && h === "onScroll" && ht("scroll", i);
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
                typeof c.onClick == "function" && (i.onclick = Ql);
            }
            i = a, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            h = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = h.createElement(r, { is: i.is }) : (e = h.createElement(r), r === "select" && (h = e, i.multiple ? h.multiple = !0 : i.size && (h.size = i.size))) : e = h.createElementNS(e, r), e[tr] = t, e[Mi] = i, Lp(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = qn(r, i), r) {
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
                  e._wrapperState = { wasMultiple: !!i.multiple }, a = _({}, i, { value: void 0 }), ht("invalid", e);
                  break;
                case "textarea":
                  Nt(e, i), a = kt(e, i), ht("invalid", e);
                  break;
                default:
                  a = i;
              }
              gr(r, a), k = a;
              for (c in k) if (k.hasOwnProperty(c)) {
                var R = k[c];
                c === "style" ? ut(e, R) : c === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && Kt(e, R)) : c === "children" ? typeof R == "string" ? (r !== "textarea" || R !== "") && sn(e, R) : typeof R == "number" && sn(e, "" + R) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (u.hasOwnProperty(c) ? R != null && c === "onScroll" && ht("scroll", e) : R != null && D(e, c, R, h));
              }
              switch (r) {
                case "input":
                  pe(e), Ne(e, i, !1);
                  break;
                case "textarea":
                  pe(e), it(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + M(i.value));
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
                  typeof a.onClick == "function" && (e.onclick = Ql);
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
        if (e && t.stateNode != null) Np(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(l(166));
          if (r = go(Ui.current), go(nr.current), ts(t)) {
            if (i = t.stateNode, r = t.memoizedProps, i[tr] = t, (c = i.nodeValue !== r) && (e = yn, e !== null)) switch (e.tag) {
              case 3:
                Kl(i.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Kl(i.nodeValue, r, (e.mode & 1) !== 0);
            }
            c && (t.flags |= 4);
          } else i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i), i[tr] = t, t.stateNode = i;
        }
        return qt(t), null;
      case 13:
        if (mt(_t), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (wt && wn !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) jd(), Vo(), t.flags |= 98560, c = !1;
          else if (c = ts(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(l(317));
              c[tr] = t;
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
        return cn(t.type) && ql(), qt(t), null;
      case 19:
        if (mt(_t), c = t.memoizedState, c === null) return qt(t), null;
        if (i = (t.flags & 128) !== 0, h = c.rendering, h === null) if (i) Qi(c, !1);
        else {
          if (Ft !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = as(e), h !== null) {
              for (t.flags |= 128, Qi(c, !1), i = h.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = r, r = t.child; r !== null; ) c = r, e = i, c.flags &= 14680066, h = c.alternate, h === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = h.childLanes, c.lanes = h.lanes, c.child = h.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = h.memoizedProps, c.memoizedState = h.memoizedState, c.updateQueue = h.updateQueue, c.type = h.type, e = h.dependencies, c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return ft(_t, _t.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          c.tail !== null && st() > Jo && (t.flags |= 128, i = !0, Qi(c, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = as(h), e !== null) {
            if (t.flags |= 128, i = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Qi(c, !0), c.tail === null && c.tailMode === "hidden" && !h.alternate && !wt) return qt(t), null;
          } else 2 * st() - c.renderingStartTime > Jo && r !== 1073741824 && (t.flags |= 128, i = !0, Qi(c, !1), t.lanes = 4194304);
          c.isBackwards ? (h.sibling = t.child, t.child = h) : (r = c.last, r !== null ? r.sibling = h : t.child = h, c.last = h);
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
  function T0(e, t) {
    switch (Xa(t), t.tag) {
      case 1:
        return cn(t.type) && ql(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
  var gs = !1, Xt = !1, I0 = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function Xo(e, t) {
    var r = e.ref;
    if (r !== null) if (typeof r == "function") try {
      r(null);
    } catch (i) {
      Rt(e, t, i);
    }
    else r.current = null;
  }
  function Pu(e, t, r) {
    try {
      r();
    } catch (i) {
      Rt(e, t, i);
    }
  }
  var bp = !1;
  function R0(e, t) {
    if (Wa = jl, e = dd(), Na(e)) {
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
          var h = 0, k = -1, R = -1, W = 0, Z = 0, J = e, X = null;
          t: for (; ; ) {
            for (var ce; J !== r || a !== 0 && J.nodeType !== 3 || (k = h + a), J !== c || i !== 0 && J.nodeType !== 3 || (R = h + i), J.nodeType === 3 && (h += J.nodeValue.length), (ce = J.firstChild) !== null; )
              X = J, J = ce;
            for (; ; ) {
              if (J === e) break t;
              if (X === r && ++W === a && (k = h), X === c && ++Z === i && (R = h), (ce = J.nextSibling) !== null) break;
              J = X, X = J.parentNode;
            }
            J = ce;
          }
          r = k === -1 || R === -1 ? null : { start: k, end: R };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ua = { focusedElem: e, selectionRange: r }, jl = !1, he = t; he !== null; ) if (t = he, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, he = e;
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
              var ye = ve.memoizedProps, At = ve.memoizedState, b = t.stateNode, A = b.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : Dn(t.type, ye), At);
              b.__reactInternalSnapshotBeforeUpdate = A;
            }
            break;
          case 3:
            var H = t.stateNode.containerInfo;
            H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
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
    return ve = bp, bp = !1, ve;
  }
  function Gi(e, t, r) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var a = i = i.next;
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          a.destroy = void 0, c !== void 0 && Pu(t, r, c);
        }
        a = a.next;
      } while (a !== i);
    }
  }
  function vs(e, t) {
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
  function Au(e) {
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
  function jp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, jp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[tr], delete t[Mi], delete t[Ka], delete t[c0], delete t[f0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Fp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Mp(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fp(e.return)) return null;
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
    if (i === 5 || i === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Ql));
    else if (i !== 4 && (e = e.child, e !== null)) for (Lu(e, t, r), e = e.sibling; e !== null; ) Lu(e, t, r), e = e.sibling;
  }
  function zu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (zu(e, t, r), e = e.sibling; e !== null; ) zu(e, t, r), e = e.sibling;
  }
  var Vt = null, Hn = !1;
  function $r(e, t, r) {
    for (r = r.child; r !== null; ) Dp(e, t, r), r = r.sibling;
  }
  function Dp(e, t, r) {
    if (er && typeof er.onCommitFiberUnmount == "function") try {
      er.onCommitFiberUnmount(Pl, r);
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
            var c = a, h = c.destroy;
            c = c.tag, h !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && Pu(r, t, h), a = a.next;
          } while (a !== i);
        }
        $r(e, t, r);
        break;
      case 1:
        if (!Xt && (Xo(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = r.memoizedProps, i.state = r.memoizedState, i.componentWillUnmount();
        } catch (k) {
          Rt(r, t, k);
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
  function Hp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new I0()), t.forEach(function(i) {
        var a = F0.bind(null, e, i);
        r.has(i) || (r.add(i), i.then(a, a));
      });
    }
  }
  function Bn(e, t) {
    var r = t.deletions;
    if (r !== null) for (var i = 0; i < r.length; i++) {
      var a = r[i];
      try {
        var c = e, h = t, k = h;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Vt = k.stateNode, Hn = !1;
              break e;
            case 3:
              Vt = k.stateNode.containerInfo, Hn = !0;
              break e;
            case 4:
              Vt = k.stateNode.containerInfo, Hn = !0;
              break e;
          }
          k = k.return;
        }
        if (Vt === null) throw Error(l(160));
        Dp(c, h, a), Vt = null, Hn = !1;
        var R = a.alternate;
        R !== null && (R.return = null), a.return = null;
      } catch (W) {
        Rt(a, t, W);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Bp(t, e), t = t.sibling;
  }
  function Bp(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Bn(t, e), or(e), i & 4) {
          try {
            Gi(3, e, e.return), vs(3, e);
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
        Bn(t, e), or(e), i & 512 && r !== null && Xo(r, r.return);
        break;
      case 5:
        if (Bn(t, e), or(e), i & 512 && r !== null && Xo(r, r.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            sn(a, "");
          } catch (ye) {
            Rt(e, e.return, ye);
          }
        }
        if (i & 4 && (a = e.stateNode, a != null)) {
          var c = e.memoizedProps, h = r !== null ? r.memoizedProps : c, k = e.type, R = e.updateQueue;
          if (e.updateQueue = null, R !== null) try {
            k === "input" && c.type === "radio" && c.name != null && ze(a, c), qn(k, h);
            var W = qn(k, c);
            for (h = 0; h < R.length; h += 2) {
              var Z = R[h], J = R[h + 1];
              Z === "style" ? ut(a, J) : Z === "dangerouslySetInnerHTML" ? Kt(a, J) : Z === "children" ? sn(a, J) : D(a, Z, J, W);
            }
            switch (k) {
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
        if (Bn(t, e), or(e), i & 4) {
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
        if (Bn(t, e), or(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Ii(t.containerInfo);
        } catch (ye) {
          Rt(e, e.return, ye);
        }
        break;
      case 4:
        Bn(t, e), or(e);
        break;
      case 13:
        Bn(t, e), or(e), a = e.child, a.flags & 8192 && (c = a.memoizedState !== null, a.stateNode.isHidden = c, !c || a.alternate !== null && a.alternate.memoizedState !== null || (ju = st())), i & 4 && Hp(e);
        break;
      case 22:
        if (Z = r !== null && r.memoizedState !== null, e.mode & 1 ? (Xt = (W = Xt) || Z, Bn(t, e), Xt = W) : Bn(t, e), or(e), i & 8192) {
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
                    $p(J);
                    continue;
                  }
              }
              ce !== null ? (ce.return = X, he = ce) : $p(J);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, J = e; ; ) {
            if (J.tag === 5) {
              if (Z === null) {
                Z = J;
                try {
                  a = J.stateNode, W ? (c = a.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (k = J.stateNode, R = J.memoizedProps.style, h = R != null && R.hasOwnProperty("display") ? R.display : null, k.style.display = Lt("display", h));
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
        Bn(t, e), or(e), i & 4 && Hp(e);
        break;
      case 21:
        break;
      default:
        Bn(
          t,
          e
        ), or(e);
    }
  }
  function or(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Fp(r)) {
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
            var c = Mp(e);
            zu(e, c, a);
            break;
          case 3:
          case 4:
            var h = i.stateNode.containerInfo, k = Mp(e);
            Lu(e, k, h);
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
  function O0(e, t, r) {
    he = e, Wp(e);
  }
  function Wp(e, t, r) {
    for (var i = (e.mode & 1) !== 0; he !== null; ) {
      var a = he, c = a.child;
      if (a.tag === 22 && i) {
        var h = a.memoizedState !== null || gs;
        if (!h) {
          var k = a.alternate, R = k !== null && k.memoizedState !== null || Xt;
          k = gs;
          var W = Xt;
          if (gs = h, (Xt = R) && !W) for (he = a; he !== null; ) h = he, R = h.child, h.tag === 22 && h.memoizedState !== null ? Vp(a) : R !== null ? (R.return = h, he = R) : Vp(a);
          for (; c !== null; ) he = c, Wp(c), c = c.sibling;
          he = a, gs = k, Xt = W;
        }
        Up(e);
      } else (a.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = a, he = c) : Up(e);
    }
  }
  function Up(e) {
    for (; he !== null; ) {
      var t = he;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xt || vs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Xt) if (r === null) i.componentDidMount();
              else {
                var a = t.elementType === t.type ? r.memoizedProps : Dn(t.type, r.memoizedProps);
                i.componentDidUpdate(a, r.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var c = t.updateQueue;
              c !== null && Hd(t, c, i);
              break;
            case 3:
              var h = t.updateQueue;
              if (h !== null) {
                if (r = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    r = t.child.stateNode;
                    break;
                  case 1:
                    r = t.child.stateNode;
                }
                Hd(t, h, r);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (r === null && t.flags & 4) {
                r = k;
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
          Xt || t.flags & 512 && Au(t);
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
  function $p(e) {
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
  function Vp(e) {
    for (; he !== null; ) {
      var t = he;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              vs(4, t);
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
              Au(t);
            } catch (R) {
              Rt(t, c, R);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Au(t);
            } catch (R) {
              Rt(t, h, R);
            }
        }
      } catch (R) {
        Rt(t, t.return, R);
      }
      if (t === e) {
        he = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, he = k;
        break;
      }
      he = t.return;
    }
  }
  var P0 = Math.ceil, ys = $.ReactCurrentDispatcher, Nu = $.ReactCurrentOwner, Pn = $.ReactCurrentBatchConfig, Ze = 0, Bt = null, zt = null, Yt = 0, xn = 0, Zo = Dr(0), Ft = 0, qi = null, yo = 0, ws = 0, bu = 0, Xi = null, dn = null, ju = 0, Jo = 1 / 0, Tr = null, xs = !1, Fu = null, Vr = null, Ss = !1, Yr = null, ks = 0, Zi = 0, Mu = null, _s = -1, Cs = 0;
  function on() {
    return (Ze & 6) !== 0 ? st() : _s !== -1 ? _s : _s = st();
  }
  function Kr(e) {
    return (e.mode & 1) === 0 ? 1 : (Ze & 2) !== 0 && Yt !== 0 ? Yt & -Yt : p0.transition !== null ? (Cs === 0 && (Cs = Ff()), Cs) : (e = rt, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yf(e.type)), e);
  }
  function Wn(e, t, r, i) {
    if (50 < Zi) throw Zi = 0, Mu = null, Error(l(185));
    ki(e, r, i), ((Ze & 2) === 0 || e !== Bt) && (e === Bt && ((Ze & 2) === 0 && (ws |= r), Ft === 4 && Qr(e, Yt)), pn(e, i), r === 1 && Ze === 0 && (t.mode & 1) === 0 && (Jo = st() + 500, Zl && Br()));
  }
  function pn(e, t) {
    var r = e.callbackNode;
    pv(e, t);
    var i = zl(e, e === Bt ? Yt : 0);
    if (i === 0) r !== null && Je(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (r != null && Je(r), t === 1) e.tag === 0 ? d0(Kp.bind(null, e)) : Ad(Kp.bind(null, e)), a0(function() {
        (Ze & 6) === 0 && Br();
      }), r = null;
      else {
        switch (Mf(i)) {
          case 1:
            r = uo;
            break;
          case 4:
            r = bf;
            break;
          case 16:
            r = Ol;
            break;
          case 536870912:
            r = jf;
            break;
          default:
            r = Ol;
        }
        r = th(r, Yp.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function Yp(e, t) {
    if (_s = -1, Cs = 0, (Ze & 6) !== 0) throw Error(l(327));
    var r = e.callbackNode;
    if (ei() && e.callbackNode !== r) return null;
    var i = zl(e, e === Bt ? Yt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Es(e, i);
    else {
      t = i;
      var a = Ze;
      Ze |= 2;
      var c = Gp();
      (Bt !== e || Yt !== t) && (Tr = null, Jo = st() + 500, xo(e, t));
      do
        try {
          z0();
          break;
        } catch (k) {
          Qp(e, k);
        }
      while (!0);
      nu(), ys.current = c, Ze = a, zt !== null ? t = 0 : (Bt = null, Yt = 0, t = Ft);
    }
    if (t !== 0) {
      if (t === 2 && (a = ya(e), a !== 0 && (i = a, t = Du(e, a))), t === 1) throw r = qi, xo(e, 0), Qr(e, i), pn(e, st()), r;
      if (t === 6) Qr(e, i);
      else {
        if (a = e.current.alternate, (i & 30) === 0 && !A0(a) && (t = Es(e, i), t === 2 && (c = ya(e), c !== 0 && (i = c, t = Du(e, c))), t === 1)) throw r = qi, xo(e, 0), Qr(e, i), pn(e, st()), r;
        switch (e.finishedWork = a, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            So(e, dn, Tr);
            break;
          case 3:
            if (Qr(e, i), (i & 130023424) === i && (t = ju + 500 - st(), 10 < t)) {
              if (zl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & i) !== i) {
                on(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Va(So.bind(null, e, dn, Tr), t);
              break;
            }
            So(e, dn, Tr);
            break;
          case 4:
            if (Qr(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, a = -1; 0 < i; ) {
              var h = 31 - jn(i);
              c = 1 << h, h = t[h], h > a && (a = h), i &= ~c;
            }
            if (i = a, i = st() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * P0(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = Va(So.bind(null, e, dn, Tr), i);
              break;
            }
            So(e, dn, Tr);
            break;
          case 5:
            So(e, dn, Tr);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return pn(e, st()), e.callbackNode === r ? Yp.bind(null, e) : null;
  }
  function Du(e, t) {
    var r = Xi;
    return e.current.memoizedState.isDehydrated && (xo(e, t).flags |= 256), e = Es(e, t), e !== 2 && (t = dn, dn = r, t !== null && Hu(t)), e;
  }
  function Hu(e) {
    dn === null ? dn = e : dn.push.apply(dn, e);
  }
  function A0(e) {
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
    for (t &= ~bu, t &= ~ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - jn(t), i = 1 << r;
      e[r] = -1, t &= ~i;
    }
  }
  function Kp(e) {
    if ((Ze & 6) !== 0) throw Error(l(327));
    ei();
    var t = zl(e, 0);
    if ((t & 1) === 0) return pn(e, st()), null;
    var r = Es(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = ya(e);
      i !== 0 && (t = i, r = Du(e, i));
    }
    if (r === 1) throw r = qi, xo(e, 0), Qr(e, t), pn(e, st()), r;
    if (r === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, So(e, dn, Tr), pn(e, st()), null;
  }
  function Bu(e, t) {
    var r = Ze;
    Ze |= 1;
    try {
      return e(t);
    } finally {
      Ze = r, Ze === 0 && (Jo = st() + 500, Zl && Br());
    }
  }
  function wo(e) {
    Yr !== null && Yr.tag === 0 && (Ze & 6) === 0 && ei();
    var t = Ze;
    Ze |= 1;
    var r = Pn.transition, i = rt;
    try {
      if (Pn.transition = null, rt = 1, e) return e();
    } finally {
      rt = i, Pn.transition = r, Ze = t, (Ze & 6) === 0 && Br();
    }
  }
  function Wu() {
    xn = Zo.current, mt(Zo);
  }
  function xo(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, s0(r)), zt !== null) for (r = zt.return; r !== null; ) {
      var i = r;
      switch (Xa(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && ql();
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
    if (Bt = e, zt = e = Gr(e.current, null), Yt = xn = t, Ft = 0, qi = null, bu = ws = yo = 0, dn = Xi = null, mo !== null) {
      for (t = 0; t < mo.length; t++) if (r = mo[t], i = r.interleaved, i !== null) {
        r.interleaved = null;
        var a = i.next, c = r.pending;
        if (c !== null) {
          var h = c.next;
          c.next = a, i.next = h;
        }
        r.pending = i;
      }
      mo = null;
    }
    return e;
  }
  function Qp(e, t) {
    do {
      var r = zt;
      try {
        if (nu(), us.current = ps, cs) {
          for (var i = Ct.memoizedState; i !== null; ) {
            var a = i.queue;
            a !== null && (a.pending = null), i = i.next;
          }
          cs = !1;
        }
        if (vo = 0, Ht = jt = Ct = null, $i = !1, Vi = 0, Nu.current = null, r === null || r.return === null) {
          Ft = 1, qi = t, zt = null;
          break;
        }
        e: {
          var c = e, h = r.return, k = r, R = t;
          if (t = Yt, k.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var W = R, Z = k, J = Z.tag;
            if ((Z.mode & 1) === 0 && (J === 0 || J === 11 || J === 15)) {
              var X = Z.alternate;
              X ? (Z.updateQueue = X.updateQueue, Z.memoizedState = X.memoizedState, Z.lanes = X.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var ce = wp(h);
            if (ce !== null) {
              ce.flags &= -257, xp(ce, h, k, c, t), ce.mode & 1 && yp(c, W, t), t = ce, R = W;
              var ve = t.updateQueue;
              if (ve === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(R), t.updateQueue = ye;
              } else ve.add(R);
              break e;
            } else {
              if ((t & 1) === 0) {
                yp(c, W, t), Uu();
                break e;
              }
              R = Error(l(426));
            }
          } else if (wt && k.mode & 1) {
            var At = wp(h);
            if (At !== null) {
              (At.flags & 65536) === 0 && (At.flags |= 256), xp(At, h, k, c, t), eu(qo(R, k));
              break e;
            }
          }
          c = R = qo(R, k), Ft !== 4 && (Ft = 2), Xi === null ? Xi = [c] : Xi.push(c), c = h;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, t &= -t, c.lanes |= t;
                var b = gp(c, R, t);
                Dd(c, b);
                break e;
              case 1:
                k = R;
                var A = c.type, H = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (Vr === null || !Vr.has(H)))) {
                  c.flags |= 65536, t &= -t, c.lanes |= t;
                  var le = vp(c, k, t);
                  Dd(c, le);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Xp(r);
      } catch (Se) {
        t = Se, zt === r && r !== null && (zt = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gp() {
    var e = ys.current;
    return ys.current = ps, e === null ? ps : e;
  }
  function Uu() {
    (Ft === 0 || Ft === 3 || Ft === 2) && (Ft = 4), Bt === null || (yo & 268435455) === 0 && (ws & 268435455) === 0 || Qr(Bt, Yt);
  }
  function Es(e, t) {
    var r = Ze;
    Ze |= 2;
    var i = Gp();
    (Bt !== e || Yt !== t) && (Tr = null, xo(e, t));
    do
      try {
        L0();
        break;
      } catch (a) {
        Qp(e, a);
      }
    while (!0);
    if (nu(), Ze = r, ys.current = i, zt !== null) throw Error(l(261));
    return Bt = null, Yt = 0, Ft;
  }
  function L0() {
    for (; zt !== null; ) qp(zt);
  }
  function z0() {
    for (; zt !== null && !bn(); ) qp(zt);
  }
  function qp(e) {
    var t = eh(e.alternate, e, xn);
    e.memoizedProps = e.pendingProps, t === null ? Xp(e) : zt = t, Nu.current = null;
  }
  function Xp(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (r = E0(r, t, xn), r !== null) {
          zt = r;
          return;
        }
      } else {
        if (r = T0(r, t), r !== null) {
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
    var i = rt, a = Pn.transition;
    try {
      Pn.transition = null, rt = 1, N0(e, t, r, i);
    } finally {
      Pn.transition = a, rt = i;
    }
    return null;
  }
  function N0(e, t, r, i) {
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
    if (hv(e, c), e === Bt && (zt = Bt = null, Yt = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || Ss || (Ss = !0, th(Ol, function() {
      return ei(), null;
    })), c = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || c) {
      c = Pn.transition, Pn.transition = null;
      var h = rt;
      rt = 1;
      var k = Ze;
      Ze |= 4, Nu.current = null, R0(e, r), Bp(r, e), e0(Ua), jl = !!Wa, Ua = Wa = null, e.current = r, O0(r), xi(), Ze = k, rt = h, Pn.transition = c;
    } else e.current = r;
    if (Ss && (Ss = !1, Yr = e, ks = a), c = e.pendingLanes, c === 0 && (Vr = null), av(r.stateNode), pn(e, st()), t !== null) for (i = e.onRecoverableError, r = 0; r < t.length; r++) a = t[r], i(a.value, { componentStack: a.stack, digest: a.digest });
    if (xs) throw xs = !1, e = Fu, Fu = null, e;
    return (ks & 1) !== 0 && e.tag !== 0 && ei(), c = e.pendingLanes, (c & 1) !== 0 ? e === Mu ? Zi++ : (Zi = 0, Mu = e) : Zi = 0, Br(), null;
  }
  function ei() {
    if (Yr !== null) {
      var e = Mf(ks), t = Pn.transition, r = rt;
      try {
        if (Pn.transition = null, rt = 16 > e ? 16 : e, Yr === null) var i = !1;
        else {
          if (e = Yr, Yr = null, ks = 0, (Ze & 6) !== 0) throw Error(l(331));
          var a = Ze;
          for (Ze |= 4, he = e.current; he !== null; ) {
            var c = he, h = c.child;
            if ((he.flags & 16) !== 0) {
              var k = c.deletions;
              if (k !== null) {
                for (var R = 0; R < k.length; R++) {
                  var W = k[R];
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
                      if (jp(Z), Z === W) {
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
                      var At = ye.sibling;
                      ye.sibling = null, ye = At;
                    } while (ye !== null);
                  }
                }
                he = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && h !== null) h.return = c, he = h;
            else e: for (; he !== null; ) {
              if (c = he, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Gi(9, c, c.return);
              }
              var b = c.sibling;
              if (b !== null) {
                b.return = c.return, he = b;
                break e;
              }
              he = c.return;
            }
          }
          var A = e.current;
          for (he = A; he !== null; ) {
            h = he;
            var H = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && H !== null) H.return = h, he = H;
            else e: for (h = A; he !== null; ) {
              if (k = he, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vs(9, k);
                }
              } catch (Se) {
                Rt(k, k.return, Se);
              }
              if (k === h) {
                he = null;
                break e;
              }
              var le = k.sibling;
              if (le !== null) {
                le.return = k.return, he = le;
                break e;
              }
              he = k.return;
            }
          }
          if (Ze = a, Br(), er && typeof er.onPostCommitFiberRoot == "function") try {
            er.onPostCommitFiberRoot(Pl, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        rt = r, Pn.transition = t;
      }
    }
    return !1;
  }
  function Zp(e, t, r) {
    t = qo(r, t), t = gp(e, t, 1), e = Ur(e, t, 1), t = on(), e !== null && (ki(e, 1, t), pn(e, t));
  }
  function Rt(e, t, r) {
    if (e.tag === 3) Zp(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Zp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Vr === null || !Vr.has(i))) {
          e = qo(r, e), e = vp(t, e, 1), t = Ur(t, e, 1), e = on(), t !== null && (ki(t, 1, e), pn(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function b0(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = on(), e.pingedLanes |= e.suspendedLanes & r, Bt === e && (Yt & r) === r && (Ft === 4 || Ft === 3 && (Yt & 130023424) === Yt && 500 > st() - ju ? xo(e, 0) : bu |= r), pn(e, t);
  }
  function Jp(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ll, Ll <<= 1, (Ll & 130023424) === 0 && (Ll = 4194304)));
    var r = on();
    e = _r(e, t), e !== null && (ki(e, t, r), pn(e, r));
  }
  function j0(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), Jp(e, r);
  }
  function F0(e, t) {
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
    i !== null && i.delete(t), Jp(e, r);
  }
  var eh;
  eh = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || un.current) fn = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return fn = !1, C0(e, t, r);
      fn = (e.flags & 131072) !== 0;
    }
    else fn = !1, wt && (t.flags & 1048576) !== 0 && Ld(t, es, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        ms(e, t), e = t.pendingProps;
        var a = Wo(t, Qt.current);
        Ko(t, r), a = mu(null, t, i, e, a, r);
        var c = gu();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, cn(i) ? (c = !0, Xl(t)) : c = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, lu(t), a.updater = ls, t.stateNode = a, a._reactInternals = t, au(t, i, e, r), t = Cu(null, t, i, !0, c, r)) : (t.tag = 0, wt && c && qa(t), rn(null, t, a, r), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (ms(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = D0(i), e = Dn(i, e), a) {
            case 0:
              t = _u(null, t, i, e, r);
              break e;
            case 1:
              t = Tp(null, t, i, e, r);
              break e;
            case 11:
              t = Sp(null, t, i, e, r);
              break e;
            case 14:
              t = kp(null, t, i, Dn(i.type, e), r);
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
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Dn(i, a), Tp(e, t, i, a, r);
      case 3:
        e: {
          if (Ip(t), e === null) throw Error(l(387));
          i = t.pendingProps, c = t.memoizedState, a = c.element, Md(e, t), is(t, i, null, r);
          var h = t.memoizedState;
          if (i = h.element, c.isDehydrated) if (c = { element: i, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            a = qo(Error(l(423)), t), t = Rp(e, t, i, r, a);
            break e;
          } else if (i !== a) {
            a = qo(Error(l(424)), t), t = Rp(e, t, i, r, a);
            break e;
          } else for (wn = Mr(t.stateNode.containerInfo.firstChild), yn = t, wt = !0, Mn = null, r = Kd(t, null, i, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (Vo(), i === a) {
              t = Er(e, t, r);
              break e;
            }
            rn(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Qd(t), e === null && Ja(t), i = t.type, a = t.pendingProps, c = e !== null ? e.memoizedProps : null, h = a.children, $a(i, a) ? h = null : c !== null && $a(i, c) && (t.flags |= 32), Ep(e, t), rn(e, t, h, r), t.child;
      case 6:
        return e === null && Ja(t), null;
      case 13:
        return Op(e, t, r);
      case 4:
        return uu(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Qo(t, null, i, r) : rn(e, t, i, r), t.child;
      case 11:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Dn(i, a), Sp(e, t, i, a, r);
      case 7:
        return rn(e, t, t.pendingProps, r), t.child;
      case 8:
        return rn(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return rn(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (i = t.type._context, a = t.pendingProps, c = t.memoizedProps, h = a.value, ft(ns, i._currentValue), i._currentValue = h, c !== null) if (Fn(c.value, h)) {
            if (c.children === a.children && !un.current) {
              t = Er(e, t, r);
              break e;
            }
          } else for (c = t.child, c !== null && (c.return = t); c !== null; ) {
            var k = c.dependencies;
            if (k !== null) {
              h = c.child;
              for (var R = k.firstContext; R !== null; ) {
                if (R.context === i) {
                  if (c.tag === 1) {
                    R = Cr(-1, r & -r), R.tag = 2;
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
                  ), k.lanes |= r;
                  break;
                }
                R = R.next;
              }
            } else if (c.tag === 10) h = c.type === t.type ? null : c.child;
            else if (c.tag === 18) {
              if (h = c.return, h === null) throw Error(l(341));
              h.lanes |= r, k = h.alternate, k !== null && (k.lanes |= r), ou(h, r, t), h = c.sibling;
            } else h = c.child;
            if (h !== null) h.return = c;
            else for (h = c; h !== null; ) {
              if (h === t) {
                h = null;
                break;
              }
              if (c = h.sibling, c !== null) {
                c.return = h.return, h = c;
                break;
              }
              h = h.return;
            }
            c = h;
          }
          rn(e, t, a.children, r), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, i = t.pendingProps.children, Ko(t, r), a = Rn(a), i = i(a), t.flags |= 1, rn(e, t, i, r), t.child;
      case 14:
        return i = t.type, a = Dn(i, t.pendingProps), a = Dn(i.type, a), kp(e, t, i, a, r);
      case 15:
        return _p(e, t, t.type, t.pendingProps, r);
      case 17:
        return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Dn(i, a), ms(e, t), t.tag = 1, cn(i) ? (e = !0, Xl(t)) : e = !1, Ko(t, r), Ud(t, i, a), au(t, i, a, r), Cu(null, t, i, !0, e, r);
      case 19:
        return Ap(e, t, r);
      case 22:
        return Cp(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function th(e, t) {
    return wi(e, t);
  }
  function M0(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function An(e, t, r, i) {
    return new M0(e, t, r, i);
  }
  function $u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function D0(e) {
    if (typeof e == "function") return $u(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Q) return 11;
      if (e === fe) return 14;
    }
    return 2;
  }
  function Gr(e, t) {
    var r = e.alternate;
    return r === null ? (r = An(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function Ts(e, t, r, i, a, c) {
    var h = 2;
    if (i = e, typeof e == "function") $u(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case B:
        return ko(r.children, a, c, t);
      case S:
        h = 8, a |= 8;
        break;
      case T:
        return e = An(12, r, t, a | 2), e.elementType = T, e.lanes = c, e;
      case ie:
        return e = An(13, r, t, a), e.elementType = ie, e.lanes = c, e;
      case K:
        return e = An(19, r, t, a), e.elementType = K, e.lanes = c, e;
      case re:
        return Is(r, a, c, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case L:
            h = 10;
            break e;
          case V:
            h = 9;
            break e;
          case Q:
            h = 11;
            break e;
          case fe:
            h = 14;
            break e;
          case we:
            h = 16, i = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = An(h, r, t, a), t.elementType = e, t.type = i, t.lanes = c, t;
  }
  function ko(e, t, r, i) {
    return e = An(7, e, i, t), e.lanes = r, e;
  }
  function Is(e, t, r, i) {
    return e = An(22, e, i, t), e.elementType = re, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function Vu(e, t, r) {
    return e = An(6, e, null, t), e.lanes = r, e;
  }
  function Yu(e, t, r) {
    return t = An(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function H0(e, t, r, i, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wa(0), this.expirationTimes = wa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wa(0), this.identifierPrefix = i, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Ku(e, t, r, i, a, c, h, k, R) {
    return e = new H0(e, t, r, k, R), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = An(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = { element: i, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lu(c), e;
  }
  function B0(e, t, r) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: N, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: r };
  }
  function nh(e) {
    if (!e) return Hr;
    e = e._reactInternals;
    e: {
      if (yr(e) !== e || e.tag !== 1) throw Error(l(170));
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
      if (cn(r)) return Od(e, r, t);
    }
    return t;
  }
  function rh(e, t, r, i, a, c, h, k, R) {
    return e = Ku(r, i, !0, e, a, c, h, k, R), e.context = nh(null), r = e.current, i = on(), a = Kr(r), c = Cr(i, a), c.callback = t ?? null, Ur(r, c, a), e.current.lanes = a, ki(e, a, i), pn(e, i), e;
  }
  function Rs(e, t, r, i) {
    var a = t.current, c = on(), h = Kr(a);
    return r = nh(r), t.context === null ? t.context = r : t.pendingContext = r, t = Cr(c, h), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Ur(a, t, h), e !== null && (Wn(e, a, h, c), os(e, a, h)), h;
  }
  function Os(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function oh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Qu(e, t) {
    oh(e, t), (e = e.alternate) && oh(e, t);
  }
  function W0() {
    return null;
  }
  var ih = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Gu(e) {
    this._internalRoot = e;
  }
  Ps.prototype.render = Gu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    Rs(e, t, null, null);
  }, Ps.prototype.unmount = Gu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      wo(function() {
        Rs(null, e, null, null);
      }), t[wr] = null;
    }
  };
  function Ps(e) {
    this._internalRoot = e;
  }
  Ps.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Bf();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < br.length && t !== 0 && t < br[r].priority; r++) ;
      br.splice(r, 0, e), r === 0 && $f(e);
    }
  };
  function qu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function As(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function lh() {
  }
  function U0(e, t, r, i, a) {
    if (a) {
      if (typeof i == "function") {
        var c = i;
        i = function() {
          var W = Os(h);
          c.call(W);
        };
      }
      var h = rh(t, i, e, 0, null, !1, !1, "", lh);
      return e._reactRootContainer = h, e[wr] = h.current, ji(e.nodeType === 8 ? e.parentNode : e), wo(), h;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof i == "function") {
      var k = i;
      i = function() {
        var W = Os(R);
        k.call(W);
      };
    }
    var R = Ku(e, 0, !1, null, null, !1, !1, "", lh);
    return e._reactRootContainer = R, e[wr] = R.current, ji(e.nodeType === 8 ? e.parentNode : e), wo(function() {
      Rs(t, R, r, i);
    }), R;
  }
  function Ls(e, t, r, i, a) {
    var c = r._reactRootContainer;
    if (c) {
      var h = c;
      if (typeof a == "function") {
        var k = a;
        a = function() {
          var R = Os(h);
          k.call(R);
        };
      }
      Rs(t, h, e, a);
    } else h = U0(r, t, e, a, i);
    return Os(h);
  }
  Df = function(e) {
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
          var i = _r(e, 1);
          if (i !== null) {
            var a = on();
            Wn(i, e, 1, a);
          }
        }), Qu(e, 1);
    }
  }, Sa = function(e) {
    if (e.tag === 13) {
      var t = _r(e, 134217728);
      if (t !== null) {
        var r = on();
        Wn(t, e, 134217728, r);
      }
      Qu(e, 134217728);
    }
  }, Hf = function(e) {
    if (e.tag === 13) {
      var t = Kr(e), r = _r(e, t);
      if (r !== null) {
        var i = on();
        Wn(r, e, t, i);
      }
      Qu(e, t);
    }
  }, Bf = function() {
    return rt;
  }, Wf = function(e, t) {
    var r = rt;
    try {
      return rt = e, t();
    } finally {
      rt = r;
    }
  }, Zn = function(e, t, r) {
    switch (t) {
      case "input":
        if (Ve(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var i = r[t];
            if (i !== e && i.form === e.form) {
              var a = Gl(i);
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
  var $0 = { usingClientEntryPoint: !1, Events: [Di, Ho, Gl, Ot, en, Bu] }, Ji = { findFiberByHostInstance: co, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, V0 = { bundleType: Ji.bundleType, version: Ji.version, rendererPackageName: Ji.rendererPackageName, rendererConfig: Ji.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = vi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ji.findFiberByHostInstance || W0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zs.isDisabled && zs.supportsFiber) try {
      Pl = zs.inject(V0), er = zs;
    } catch {
    }
  }
  return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $0, hn.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qu(t)) throw Error(l(200));
    return B0(e, t, null, r);
  }, hn.createRoot = function(e, t) {
    if (!qu(e)) throw Error(l(299));
    var r = !1, i = "", a = ih;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ku(e, 1, !1, null, null, r, !1, i, a), e[wr] = t.current, ji(e.nodeType === 8 ? e.parentNode : e), new Gu(t);
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
    return Ls(null, e, t, !0, r);
  }, hn.hydrateRoot = function(e, t, r) {
    if (!qu(e)) throw Error(l(405));
    var i = r != null && r.hydratedSources || null, a = !1, c = "", h = ih;
    if (r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), t = rh(t, null, e, 1, r ?? null, a, !1, c, h), e[wr] = t.current, ji(e), i) for (e = 0; e < i.length; e++) r = i[e], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(
      r,
      a
    );
    return new Ps(t);
  }, hn.render = function(e, t, r) {
    if (!As(t)) throw Error(l(200));
    return Ls(null, e, t, !1, r);
  }, hn.unmountComponentAtNode = function(e) {
    if (!As(e)) throw Error(l(40));
    return e._reactRootContainer ? (wo(function() {
      Ls(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wr] = null;
      });
    }), !0) : !1;
  }, hn.unstable_batchedUpdates = Bu, hn.unstable_renderSubtreeIntoContainer = function(e, t, r, i) {
    if (!As(r)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return Ls(e, t, r, !1, i);
  }, hn.version = "18.2.0-next-9e3b772b8-20220608", hn;
}
var dh;
function bm() {
  if (dh) return Zu.exports;
  dh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), Zu.exports = q0(), Zu.exports;
}
var ph;
function X0() {
  if (ph) return Ns;
  ph = 1;
  var n = bm();
  return Ns.createRoot = n.createRoot, Ns.hydrateRoot = n.hydrateRoot, Ns;
}
var Z0 = X0(), J0 = Object.defineProperty, ey = (n, o, l) => o in n ? J0(n, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[o] = l, bs = (n, o, l) => ey(n, typeof o != "symbol" ? o + "" : o, l);
const ty = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, ny = {
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
}, ry = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
}, oy = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, iy = {
  stringify: (n) => n,
  parse: (n) => n
}, tc = {
  string: iy,
  number: oy,
  boolean: ty,
  function: ny,
  json: ry
};
function ly(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (o, l, s) => `${l}-${s.toLowerCase()}`
  );
}
const js = Symbol.for("r2wc.render"), Fs = Symbol.for("r2wc.connected"), _o = Symbol.for("r2wc.context"), Ir = Symbol.for("r2wc.props");
function sy(n, o, l) {
  var s, u, f;
  o.props || (o.props = n.propTypes ? Object.keys(n.propTypes) : []), o.events || (o.events = []);
  const d = Array.isArray(o.props) ? o.props.slice() : Object.keys(o.props), p = Array.isArray(o.events) ? o.events.slice() : Object.keys(o.events), g = {}, m = {}, v = {}, y = {};
  for (const w of d) {
    g[w] = Array.isArray(o.props) ? "string" : o.props[w];
    const O = ly(w);
    v[w] = O, y[O] = w;
  }
  for (const w of p)
    m[w] = Array.isArray(o.events) ? {} : o.events[w];
  class x extends HTMLElement {
    constructor() {
      super(), bs(this, f, !0), bs(this, u), bs(this, s, {}), bs(this, "container"), o.shadow ? this.container = this.attachShadow({
        mode: o.shadow
      }) : this.container = this, this[Ir].container = this.container;
      for (const O of d) {
        const P = v[O], E = this.getAttribute(P), C = g[O], I = C ? tc[C] : null;
        I != null && I.parse && E && (this[Ir][O] = I.parse(E, P, this));
      }
      for (const O of p)
        this[Ir][O] = (P) => {
          const E = O.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(E, { detail: P, ...m[O] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(y);
    }
    connectedCallback() {
      this[Fs] = !0, this[js]();
    }
    disconnectedCallback() {
      this[Fs] = !1, this[_o] && l.unmount(this[_o]), delete this[_o];
    }
    attributeChangedCallback(O, P, E) {
      const C = y[O], I = g[C], D = I ? tc[I] : null;
      C in g && D != null && D.parse && E && (this[Ir][C] = D.parse(E, O, this), this[js]());
    }
    [(f = Fs, u = _o, s = Ir, js)]() {
      this[Fs] && (this[_o] ? l.update(this[_o], this[Ir]) : this[_o] = l.mount(
        this.container,
        n,
        this[Ir]
      ));
    }
  }
  for (const w of d) {
    const O = v[w], P = g[w];
    Object.defineProperty(x.prototype, w, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ir][w];
      },
      set(E) {
        this[Ir][w] = E;
        const C = P ? tc[P] : null;
        if (C != null && C.stringify) {
          const I = C.stringify(E, O, this);
          this.getAttribute(O) !== I && this.setAttribute(O, I);
        } else
          this[js]();
      }
    });
  }
  return x;
}
function ay(n, o, l) {
  const s = Z0.createRoot(n), u = ae.createElement(o, l);
  return s.render(u), {
    root: s,
    ReactComponent: o
  };
}
function uy({ root: n, ReactComponent: o }, l) {
  const s = ae.createElement(o, l);
  n.render(s);
}
function cy({ root: n }) {
  n.unmount();
}
function fy(n, o = {}) {
  return sy(n, o, { mount: ay, update: uy, unmount: cy });
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
var hh;
function dy() {
  if (hh) return el;
  hh = 1;
  var n = Jc(), o = Symbol.for("react.element"), l = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, g, m) {
    var v, y = {}, x = null, w = null;
    m !== void 0 && (x = "" + m), g.key !== void 0 && (x = "" + g.key), g.ref !== void 0 && (w = g.ref);
    for (v in g) s.call(g, v) && !f.hasOwnProperty(v) && (y[v] = g[v]);
    if (p && p.defaultProps) for (v in g = p.defaultProps, g) y[v] === void 0 && (y[v] = g[v]);
    return { $$typeof: o, type: p, key: x, ref: w, props: y, _owner: u.current };
  }
  return el.Fragment = l, el.jsx = d, el.jsxs = d, el;
}
var mh;
function py() {
  return mh || (mh = 1, nc.exports = dy()), nc.exports;
}
var j = py();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function hy(n, o, l) {
  return (o = gy(o)) in n ? Object.defineProperty(n, o, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[o] = l, n;
}
function gh(n, o) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    o && (s = s.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function ne(n) {
  for (var o = 1; o < arguments.length; o++) {
    var l = arguments[o] != null ? arguments[o] : {};
    o % 2 ? gh(Object(l), !0).forEach(function(s) {
      hy(n, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : gh(Object(l)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return n;
}
function my(n, o) {
  if (typeof n != "object" || !n) return n;
  var l = n[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(n, o);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(n);
}
function gy(n) {
  var o = my(n, "string");
  return typeof o == "symbol" ? o : o + "";
}
const vh = () => {
};
let ef = {}, jm = {}, Fm = null, Mm = {
  mark: vh,
  measure: vh
};
try {
  typeof window < "u" && (ef = window), typeof document < "u" && (jm = document), typeof MutationObserver < "u" && (Fm = MutationObserver), typeof performance < "u" && (Mm = performance);
} catch {
}
const {
  userAgent: yh = ""
} = ef.navigator || {}, to = ef, vt = jm, wh = Fm, Ms = Mm;
to.document;
const Pr = !!vt.documentElement && !!vt.head && typeof vt.addEventListener == "function" && typeof vt.createElement == "function", Dm = ~yh.indexOf("MSIE") || ~yh.indexOf("Trident/");
var vy = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, yy = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Hm = {
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
}, wy = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Bm = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Jt = "classic", oa = "duotone", xy = "sharp", Sy = "sharp-duotone", Wm = [Jt, oa, xy, Sy], ky = {
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
}, _y = {
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
}, Cy = /* @__PURE__ */ new Map([["classic", {
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
}]]), Ey = {
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
}, Ty = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], xh = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Iy = ["kit"], Ry = {
  kit: {
    "fa-kit": "fak"
  }
}, Oy = ["fak", "fakd"], Py = {
  kit: {
    fak: "fa-kit"
  }
}, Sh = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ds = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ay = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Ly = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], zy = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Ny = {
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
}, by = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Cc = {
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
}, jy = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Ec = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Ay, ...jy], Fy = ["solid", "regular", "light", "thin", "duotone", "brands"], Um = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], My = Um.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Dy = [...Object.keys(by), ...Fy, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ds.GROUP, Ds.SWAP_OPACITY, Ds.PRIMARY, Ds.SECONDARY].concat(Um.map((n) => "".concat(n, "x"))).concat(My.map((n) => "w-".concat(n))), Hy = {
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
const Rr = "___FONT_AWESOME___", Tc = 16, $m = "fa", Vm = "svg-inline--fa", Io = "data-fa-i2svg", Ic = "data-fa-pseudo-element", By = "data-fa-pseudo-element-pending", tf = "data-prefix", nf = "data-icon", kh = "fontawesome-i2svg", Wy = "async", Uy = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ym = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function wl(n) {
  return new Proxy(n, {
    get(o, l) {
      return l in o ? o[l] : o[Jt];
    }
  });
}
const Km = ne({}, Hm);
Km[Jt] = ne(ne(ne(ne({}, {
  "fa-duotone": "duotone"
}), Hm[Jt]), xh.kit), xh["kit-duotone"]);
const $y = wl(Km), Rc = ne({}, Ey);
Rc[Jt] = ne(ne(ne(ne({}, {
  duotone: "fad"
}), Rc[Jt]), Sh.kit), Sh["kit-duotone"]);
const _h = wl(Rc), Oc = ne({}, Cc);
Oc[Jt] = ne(ne({}, Oc[Jt]), Py.kit);
const rf = wl(Oc), Pc = ne({}, Ny);
Pc[Jt] = ne(ne({}, Pc[Jt]), Ry.kit);
wl(Pc);
const Vy = vy, Qm = "fa-layers-text", Yy = yy, Ky = ne({}, ky);
wl(Ky);
const Qy = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], rc = wy, Gy = [...Iy, ...Dy], il = to.FontAwesomeConfig || {};
function qy(n) {
  var o = vt.querySelector("script[" + n + "]");
  if (o)
    return o.getAttribute(n);
}
function Xy(n) {
  return n === "" ? !0 : n === "false" ? !1 : n === "true" ? !0 : n;
}
vt && typeof vt.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((o) => {
  let [l, s] = o;
  const u = Xy(qy(l));
  u != null && (il[s] = u);
});
const Gm = {
  styleDefault: "solid",
  familyDefault: Jt,
  cssPrefix: $m,
  replacementClass: Vm,
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
il.familyPrefix && (il.cssPrefix = il.familyPrefix);
const si = ne(ne({}, Gm), il);
si.autoReplaceSvg || (si.observeMutations = !1);
const Ce = {};
Object.keys(Gm).forEach((n) => {
  Object.defineProperty(Ce, n, {
    enumerable: !0,
    set: function(o) {
      si[n] = o, ll.forEach((l) => l(Ce));
    },
    get: function() {
      return si[n];
    }
  });
});
Object.defineProperty(Ce, "familyPrefix", {
  enumerable: !0,
  set: function(n) {
    si.cssPrefix = n, ll.forEach((o) => o(Ce));
  },
  get: function() {
    return si.cssPrefix;
  }
});
to.FontAwesomeConfig = Ce;
const ll = [];
function Zy(n) {
  return ll.push(n), () => {
    ll.splice(ll.indexOf(n), 1);
  };
}
const Xr = Tc, sr = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Jy(n) {
  if (!n || !Pr)
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
const e1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ul() {
  let n = 12, o = "";
  for (; n-- > 0; )
    o += e1[Math.random() * 62 | 0];
  return o;
}
function fi(n) {
  const o = [];
  for (let l = (n || []).length >>> 0; l--; )
    o[l] = n[l];
  return o;
}
function of(n) {
  return n.classList ? fi(n.classList) : (n.getAttribute("class") || "").split(" ").filter((o) => o);
}
function qm(n) {
  return "".concat(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function t1(n) {
  return Object.keys(n || {}).reduce((o, l) => o + "".concat(l, '="').concat(qm(n[l]), '" '), "").trim();
}
function ia(n) {
  return Object.keys(n || {}).reduce((o, l) => o + "".concat(l, ": ").concat(n[l].trim(), ";"), "");
}
function lf(n) {
  return n.size !== sr.size || n.x !== sr.x || n.y !== sr.y || n.rotate !== sr.rotate || n.flipX || n.flipY;
}
function n1(n) {
  let {
    transform: o,
    containerWidth: l,
    iconWidth: s
  } = n;
  const u = {
    transform: "translate(".concat(l / 2, " 256)")
  }, f = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "), d = "scale(".concat(o.size / 16 * (o.flipX ? -1 : 1), ", ").concat(o.size / 16 * (o.flipY ? -1 : 1), ") "), p = "rotate(".concat(o.rotate, " 0 0)"), g = {
    transform: "".concat(f, " ").concat(d, " ").concat(p)
  }, m = {
    transform: "translate(".concat(s / 2 * -1, " -256)")
  };
  return {
    outer: u,
    inner: g,
    path: m
  };
}
function r1(n) {
  let {
    transform: o,
    width: l = Tc,
    height: s = Tc,
    startCentered: u = !1
  } = n, f = "";
  return u && Dm ? f += "translate(".concat(o.x / Xr - l / 2, "em, ").concat(o.y / Xr - s / 2, "em) ") : u ? f += "translate(calc(-50% + ".concat(o.x / Xr, "em), calc(-50% + ").concat(o.y / Xr, "em)) ") : f += "translate(".concat(o.x / Xr, "em, ").concat(o.y / Xr, "em) "), f += "scale(".concat(o.size / Xr * (o.flipX ? -1 : 1), ", ").concat(o.size / Xr * (o.flipY ? -1 : 1), ") "), f += "rotate(".concat(o.rotate, "deg) "), f;
}
var o1 = `:root, :host {
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
function Xm() {
  const n = $m, o = Vm, l = Ce.cssPrefix, s = Ce.replacementClass;
  let u = o1;
  if (l !== n || s !== o) {
    const f = new RegExp("\\.".concat(n, "\\-"), "g"), d = new RegExp("\\--".concat(n, "\\-"), "g"), p = new RegExp("\\.".concat(o), "g");
    u = u.replace(f, ".".concat(l, "-")).replace(d, "--".concat(l, "-")).replace(p, ".".concat(s));
  }
  return u;
}
let Ch = !1;
function oc() {
  Ce.autoAddCss && !Ch && (Jy(Xm()), Ch = !0);
}
var i1 = {
  mixout() {
    return {
      dom: {
        css: Xm,
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
var ar = Or[Rr];
const Zm = [], Jm = function() {
  vt.removeEventListener("DOMContentLoaded", Jm), Qs = 1, Zm.map((n) => n());
};
let Qs = !1;
Pr && (Qs = (vt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(vt.readyState), Qs || vt.addEventListener("DOMContentLoaded", Jm));
function l1(n) {
  Pr && (Qs ? setTimeout(n, 0) : Zm.push(n));
}
function xl(n) {
  const {
    tag: o,
    attributes: l = {},
    children: s = []
  } = n;
  return typeof n == "string" ? qm(n) : "<".concat(o, " ").concat(t1(l), ">").concat(s.map(xl).join(""), "</").concat(o, ">");
}
function Eh(n, o, l) {
  if (n && n[o] && n[o][l])
    return {
      prefix: o,
      iconName: l,
      icon: n[o][l]
    };
}
var ic = function(o, l, s, u) {
  var f = Object.keys(o), d = f.length, p = l, g, m, v;
  for (s === void 0 ? (g = 1, v = o[f[0]]) : (g = 0, v = s); g < d; g++)
    m = f[g], v = p(v, o[m], m, o);
  return v;
};
function s1(n) {
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
function Ac(n) {
  const o = s1(n);
  return o.length === 1 ? o[0].toString(16) : null;
}
function a1(n, o) {
  const l = n.length;
  let s = n.charCodeAt(o), u;
  return s >= 55296 && s <= 56319 && l > o + 1 && (u = n.charCodeAt(o + 1), u >= 56320 && u <= 57343) ? (s - 55296) * 1024 + u - 56320 + 65536 : s;
}
function Th(n) {
  return Object.keys(n).reduce((o, l) => {
    const s = n[l];
    return !!s.icon ? o[s.iconName] = s.icon : o[l] = s, o;
  }, {});
}
function Lc(n, o) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: s = !1
  } = l, u = Th(o);
  typeof ar.hooks.addPack == "function" && !s ? ar.hooks.addPack(n, Th(o)) : ar.styles[n] = ne(ne({}, ar.styles[n] || {}), u), n === "fas" && Lc("fa", o);
}
const {
  styles: cl,
  shims: u1
} = ar, eg = Object.keys(rf), c1 = eg.reduce((n, o) => (n[o] = Object.keys(rf[o]), n), {});
let sf = null, tg = {}, ng = {}, rg = {}, og = {}, ig = {};
function f1(n) {
  return ~Gy.indexOf(n);
}
function d1(n, o) {
  const l = o.split("-"), s = l[0], u = l.slice(1).join("-");
  return s === n && u !== "" && !f1(u) ? u : null;
}
const lg = () => {
  const n = (s) => ic(cl, (u, f, d) => (u[d] = ic(f, s, {}), u), {});
  tg = n((s, u, f) => (u[3] && (s[u[3]] = f), u[2] && u[2].filter((p) => typeof p == "number").forEach((p) => {
    s[p.toString(16)] = f;
  }), s)), ng = n((s, u, f) => (s[f] = f, u[2] && u[2].filter((p) => typeof p == "string").forEach((p) => {
    s[p] = f;
  }), s)), ig = n((s, u, f) => {
    const d = u[2];
    return s[f] = f, d.forEach((p) => {
      s[p] = f;
    }), s;
  });
  const o = "far" in cl || Ce.autoFetchSvg, l = ic(u1, (s, u) => {
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
  rg = l.names, og = l.unicodes, sf = la(Ce.styleDefault, {
    family: Ce.familyDefault
  });
};
Zy((n) => {
  sf = la(n.styleDefault, {
    family: Ce.familyDefault
  });
});
lg();
function af(n, o) {
  return (tg[n] || {})[o];
}
function p1(n, o) {
  return (ng[n] || {})[o];
}
function Co(n, o) {
  return (ig[n] || {})[o];
}
function sg(n) {
  return rg[n] || {
    prefix: null,
    iconName: null
  };
}
function h1(n) {
  const o = og[n], l = af("fas", n);
  return o || (l ? {
    prefix: "fas",
    iconName: l
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function no() {
  return sf;
}
const ag = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function m1(n) {
  let o = Jt;
  const l = eg.reduce((s, u) => (s[u] = "".concat(Ce.cssPrefix, "-").concat(u), s), {});
  return Wm.forEach((s) => {
    (n.includes(l[s]) || n.some((u) => c1[s].includes(u))) && (o = s);
  }), o;
}
function la(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: l = Jt
  } = o, s = $y[l][n];
  if (l === oa && !n)
    return "fad";
  const u = _h[l][n] || _h[l][s], f = n in ar.styles ? n : null;
  return u || f || null;
}
function g1(n) {
  let o = [], l = null;
  return n.forEach((s) => {
    const u = d1(Ce.cssPrefix, s);
    u ? l = u : s && o.push(s);
  }), {
    iconName: l,
    rest: o
  };
}
function Ih(n) {
  return n.sort().filter((o, l, s) => s.indexOf(o) === l);
}
function sa(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: l = !1
  } = o;
  let s = null;
  const u = Ec.concat(Ly), f = Ih(n.filter((y) => u.includes(y))), d = Ih(n.filter((y) => !Ec.includes(y))), p = f.filter((y) => (s = y, !Bm.includes(y))), [g = null] = p, m = m1(f), v = ne(ne({}, g1(d)), {}, {
    prefix: la(g, {
      family: m
    })
  });
  return ne(ne(ne({}, v), x1({
    values: n,
    family: m,
    styles: cl,
    config: Ce,
    canonical: v,
    givenPrefix: s
  })), v1(l, s, v));
}
function v1(n, o, l) {
  let {
    prefix: s,
    iconName: u
  } = l;
  if (n || !s || !u)
    return {
      prefix: s,
      iconName: u
    };
  const f = o === "fa" ? sg(u) : {}, d = Co(s, u);
  return u = f.iconName || d || u, s = f.prefix || s, s === "far" && !cl.far && cl.fas && !Ce.autoFetchSvg && (s = "fas"), {
    prefix: s,
    iconName: u
  };
}
const y1 = Wm.filter((n) => n !== Jt || n !== oa), w1 = Object.keys(Cc).filter((n) => n !== Jt).map((n) => Object.keys(Cc[n])).flat();
function x1(n) {
  const {
    values: o,
    family: l,
    canonical: s,
    givenPrefix: u = "",
    styles: f = {},
    config: d = {}
  } = n, p = l === oa, g = o.includes("fa-duotone") || o.includes("fad"), m = d.familyDefault === "duotone", v = s.prefix === "fad" || s.prefix === "fa-duotone";
  if (!p && (g || m || v) && (s.prefix = "fad"), (o.includes("fa-brands") || o.includes("fab")) && (s.prefix = "fab"), !s.prefix && y1.includes(l) && (Object.keys(f).find((x) => w1.includes(x)) || d.autoFetchSvg)) {
    const x = Cy.get(l).defaultShortPrefixId;
    s.prefix = x, s.iconName = Co(s.prefix, s.iconName) || s.iconName;
  }
  return (s.prefix === "fa" || u === "fa") && (s.prefix = no() || "fas"), s;
}
class S1 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++)
      l[s] = arguments[s];
    const u = l.reduce(this._pullDefinitions, {});
    Object.keys(u).forEach((f) => {
      this.definitions[f] = ne(ne({}, this.definitions[f] || {}), u[f]), Lc(f, u[f]);
      const d = rf[Jt][f];
      d && Lc(d, u[f]), lg();
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
      o[f] || (o[f] = {}), g.length > 0 && g.forEach((m) => {
        typeof m == "string" && (o[f][m] = p);
      }), o[f][d] = p;
    }), o;
  }
}
let Rh = [], ni = {};
const oi = {}, k1 = Object.keys(oi);
function _1(n, o) {
  let {
    mixoutsTo: l
  } = o;
  return Rh = n, ni = {}, Object.keys(oi).forEach((s) => {
    k1.indexOf(s) === -1 && delete oi[s];
  }), Rh.forEach((s) => {
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
function zc(n, o) {
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
function Nc(n) {
  n.prefix === "fa" && (n.prefix = "fas");
  let {
    iconName: o
  } = n;
  const l = n.prefix || no();
  if (o)
    return o = Co(l, o) || o, Eh(ug.definitions, l, o) || Eh(ar.styles, l, o);
}
const ug = new S1(), C1 = () => {
  Ce.autoReplaceSvg = !1, Ce.observeMutations = !1, Ro("noAuto");
}, E1 = {
  i2svg: function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Pr ? (Ro("beforeI2svg", n), ro("pseudoElements2svg", n), ro("i2svg", n)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: o
    } = n;
    Ce.autoReplaceSvg === !1 && (Ce.autoReplaceSvg = !0), Ce.observeMutations = !0, l1(() => {
      I1({
        autoReplaceSvgRoot: o
      }), Ro("watch", n);
    });
  }
}, T1 = {
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
    if (typeof n == "string" && (n.indexOf("".concat(Ce.cssPrefix, "-")) > -1 || n.match(Vy))) {
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
  noAuto: C1,
  config: Ce,
  dom: E1,
  parse: T1,
  library: ug,
  findIconDefinition: Nc,
  toHtml: xl
}, I1 = function() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: o = vt
  } = n;
  (Object.keys(ar.styles).length > 0 || Ce.autoFetchSvg) && Pr && Ce.autoReplaceSvg && Cn.dom.i2svg({
    node: o
  });
};
function aa(n, o) {
  return Object.defineProperty(n, "abstract", {
    get: o
  }), Object.defineProperty(n, "html", {
    get: function() {
      return n.abstract.map((l) => xl(l));
    }
  }), Object.defineProperty(n, "node", {
    get: function() {
      if (!Pr) return;
      const l = vt.createElement("div");
      return l.innerHTML = n.html, l.children;
    }
  }), n;
}
function R1(n) {
  let {
    children: o,
    main: l,
    mask: s,
    attributes: u,
    styles: f,
    transform: d
  } = n;
  if (lf(d) && l.found && !s.found) {
    const {
      width: p,
      height: g
    } = l, m = {
      x: p / g / 2,
      y: 0.5
    };
    u.style = ia(ne(ne({}, f), {}, {
      "transform-origin": "".concat(m.x + d.x / 16, "em ").concat(m.y + d.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: u,
    children: o
  }];
}
function O1(n) {
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
      attributes: ne(ne({}, u), {}, {
        id: d
      }),
      children: s
    }]
  }];
}
function uf(n) {
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
    titleId: m,
    extra: v,
    watchable: y = !1
  } = n, {
    width: x,
    height: w
  } = l.found ? l : o, O = Oy.includes(s), P = [Ce.replacementClass, u ? "".concat(Ce.cssPrefix, "-").concat(u) : ""].filter((F) => v.classes.indexOf(F) === -1).filter((F) => F !== "" || !!F).concat(v.classes).join(" ");
  let E = {
    children: [],
    attributes: ne(ne({}, v.attributes), {}, {
      "data-prefix": s,
      "data-icon": u,
      class: P,
      role: v.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat(w)
    })
  };
  const C = O && !~v.classes.indexOf("fa-fw") ? {
    width: "".concat(x / w * 16 * 0.0625, "em")
  } : {};
  y && (E.attributes[Io] = ""), p && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(m || ul())
    },
    children: [p]
  }), delete E.attributes.title);
  const I = ne(ne({}, E), {}, {
    prefix: s,
    iconName: u,
    main: o,
    mask: l,
    maskId: g,
    transform: f,
    symbol: d,
    styles: ne(ne({}, C), v.styles)
  }), {
    children: D,
    attributes: $
  } = l.found && o.found ? ro("generateAbstractMask", I) || {
    children: [],
    attributes: {}
  } : ro("generateAbstractIcon", I) || {
    children: [],
    attributes: {}
  };
  return I.children = D, I.attributes = $, d ? O1(I) : R1(I);
}
function Oh(n) {
  const {
    content: o,
    width: l,
    height: s,
    transform: u,
    title: f,
    extra: d,
    watchable: p = !1
  } = n, g = ne(ne(ne({}, d.attributes), f ? {
    title: f
  } : {}), {}, {
    class: d.classes.join(" ")
  });
  p && (g[Io] = "");
  const m = ne({}, d.styles);
  lf(u) && (m.transform = r1({
    transform: u,
    startCentered: !0,
    width: l,
    height: s
  }), m["-webkit-transform"] = m.transform);
  const v = ia(m);
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
function P1(n) {
  const {
    content: o,
    title: l,
    extra: s
  } = n, u = ne(ne(ne({}, s.attributes), l ? {
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
} = ar;
function bc(n) {
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
const A1 = {
  found: !1,
  width: 512,
  height: 512
};
function L1(n, o) {
  !Ym && !Ce.showMissingIcons && n && console.error('Icon with name "'.concat(n, '" and prefix "').concat(o, '" is missing.'));
}
function jc(n, o) {
  let l = o;
  return o === "fa" && Ce.styleDefault !== null && (o = no()), new Promise((s, u) => {
    if (l === "fa") {
      const f = sg(n) || {};
      n = f.iconName || n, o = f.prefix || o;
    }
    if (n && o && lc[o] && lc[o][n]) {
      const f = lc[o][n];
      return s(bc(f));
    }
    L1(n, o), s(ne(ne({}, A1), {}, {
      icon: Ce.showMissingIcons && n ? ro("missingIconAbstract") || {} : {}
    }));
  });
}
const Ph = () => {
}, Fc = Ce.measurePerformance && Ms && Ms.mark && Ms.measure ? Ms : {
  mark: Ph,
  measure: Ph
}, ol = 'FA "6.7.2"', z1 = (n) => (Fc.mark("".concat(ol, " ").concat(n, " begins")), () => cg(n)), cg = (n) => {
  Fc.mark("".concat(ol, " ").concat(n, " ends")), Fc.measure("".concat(ol, " ").concat(n), "".concat(ol, " ").concat(n, " begins"), "".concat(ol, " ").concat(n, " ends"));
};
var cf = {
  begin: z1,
  end: cg
};
const Us = () => {
};
function Ah(n) {
  return typeof (n.getAttribute ? n.getAttribute(Io) : null) == "string";
}
function N1(n) {
  const o = n.getAttribute ? n.getAttribute(tf) : null, l = n.getAttribute ? n.getAttribute(nf) : null;
  return o && l;
}
function b1(n) {
  return n && n.classList && n.classList.contains && n.classList.contains(Ce.replacementClass);
}
function j1() {
  return Ce.autoReplaceSvg === !0 ? $s.replace : $s[Ce.autoReplaceSvg] || $s.replace;
}
function F1(n) {
  return vt.createElementNS("http://www.w3.org/2000/svg", n);
}
function M1(n) {
  return vt.createElement(n);
}
function fg(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: l = n.tag === "svg" ? F1 : M1
  } = o;
  if (typeof n == "string")
    return vt.createTextNode(n);
  const s = l(n.tag);
  return Object.keys(n.attributes || []).forEach(function(f) {
    s.setAttribute(f, n.attributes[f]);
  }), (n.children || []).forEach(function(f) {
    s.appendChild(fg(f, {
      ceFn: l
    }));
  }), s;
}
function D1(n) {
  let o = " ".concat(n.outerHTML, " ");
  return o = "".concat(o, "Font Awesome fontawesome.com "), o;
}
const $s = {
  replace: function(n) {
    const o = n[0];
    if (o.parentNode)
      if (n[1].forEach((l) => {
        o.parentNode.insertBefore(fg(l), o);
      }), o.getAttribute(Io) === null && Ce.keepOriginalSource) {
        let l = vt.createComment(D1(o));
        o.parentNode.replaceChild(l, o);
      } else
        o.remove();
  },
  nest: function(n) {
    const o = n[0], l = n[1];
    if (~of(o).indexOf(Ce.replacementClass))
      return $s.replace(n);
    const s = new RegExp("".concat(Ce.cssPrefix, "-.*"));
    if (delete l[0].attributes.id, l[0].attributes.class) {
      const f = l[0].attributes.class.split(" ").reduce((d, p) => (p === Ce.replacementClass || p.match(s) ? d.toSvg.push(p) : d.toNode.push(p), d), {
        toNode: [],
        toSvg: []
      });
      l[0].attributes.class = f.toSvg.join(" "), f.toNode.length === 0 ? o.removeAttribute("class") : o.setAttribute("class", f.toNode.join(" "));
    }
    const u = l.map((f) => xl(f)).join(`
`);
    o.setAttribute(Io, ""), o.innerHTML = u;
  }
};
function Lh(n) {
  n();
}
function dg(n, o) {
  const l = typeof o == "function" ? o : Us;
  if (n.length === 0)
    l();
  else {
    let s = Lh;
    Ce.mutateApproach === Wy && (s = to.requestAnimationFrame || Lh), s(() => {
      const u = j1(), f = cf.begin("mutate");
      n.map(u), f(), l();
    });
  }
}
let ff = !1;
function pg() {
  ff = !0;
}
function Mc() {
  ff = !1;
}
let Gs = null;
function zh(n) {
  if (!wh || !Ce.observeMutations)
    return;
  const {
    treeCallback: o = Us,
    nodeCallback: l = Us,
    pseudoElementsCallback: s = Us,
    observeMutationsRoot: u = vt
  } = n;
  Gs = new wh((f) => {
    if (ff) return;
    const d = no();
    fi(f).forEach((p) => {
      if (p.type === "childList" && p.addedNodes.length > 0 && !Ah(p.addedNodes[0]) && (Ce.searchPseudoElements && s(p.target), o(p.target)), p.type === "attributes" && p.target.parentNode && Ce.searchPseudoElements && s(p.target.parentNode), p.type === "attributes" && Ah(p.target) && ~Qy.indexOf(p.attributeName))
        if (p.attributeName === "class" && N1(p.target)) {
          const {
            prefix: g,
            iconName: m
          } = sa(of(p.target));
          p.target.setAttribute(tf, g || d), m && p.target.setAttribute(nf, m);
        } else b1(p.target) && l(p.target);
    });
  }), Pr && Gs.observe(u, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function H1() {
  Gs && Gs.disconnect();
}
function B1(n) {
  const o = n.getAttribute("style");
  let l = [];
  return o && (l = o.split(";").reduce((s, u) => {
    const f = u.split(":"), d = f[0], p = f.slice(1);
    return d && p.length > 0 && (s[d] = p.join(":").trim()), s;
  }, {})), l;
}
function W1(n) {
  const o = n.getAttribute("data-prefix"), l = n.getAttribute("data-icon"), s = n.innerText !== void 0 ? n.innerText.trim() : "";
  let u = sa(of(n));
  return u.prefix || (u.prefix = no()), o && l && (u.prefix = o, u.iconName = l), u.iconName && u.prefix || (u.prefix && s.length > 0 && (u.iconName = p1(u.prefix, n.innerText) || af(u.prefix, Ac(n.innerText))), !u.iconName && Ce.autoFetchSvg && n.firstChild && n.firstChild.nodeType === Node.TEXT_NODE && (u.iconName = n.firstChild.data)), u;
}
function U1(n) {
  const o = fi(n.attributes).reduce((u, f) => (u.name !== "class" && u.name !== "style" && (u[f.name] = f.value), u), {}), l = n.getAttribute("title"), s = n.getAttribute("data-fa-title-id");
  return Ce.autoA11y && (l ? o["aria-labelledby"] = "".concat(Ce.replacementClass, "-title-").concat(s || ul()) : (o["aria-hidden"] = "true", o.focusable = "false")), o;
}
function $1() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: sr,
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
function Nh(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: l,
    prefix: s,
    rest: u
  } = W1(n), f = U1(n), d = zc("parseNodeAttributes", {}, n);
  let p = o.styleParser ? B1(n) : [];
  return ne({
    iconName: l,
    title: n.getAttribute("title"),
    titleId: n.getAttribute("data-fa-title-id"),
    prefix: s,
    transform: sr,
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
  styles: V1
} = ar;
function hg(n) {
  const o = Ce.autoReplaceSvg === "nest" ? Nh(n, {
    styleParser: !1
  }) : Nh(n);
  return ~o.extra.classes.indexOf(Qm) ? ro("generateLayersText", n, o) : ro("generateSvgReplacementMutation", n, o);
}
function Y1() {
  return [...Ty, ...Ec];
}
function bh(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Pr) return Promise.resolve();
  const l = vt.documentElement.classList, s = (v) => l.add("".concat(kh, "-").concat(v)), u = (v) => l.remove("".concat(kh, "-").concat(v)), f = Ce.autoFetchSvg ? Y1() : Bm.concat(Object.keys(V1));
  f.includes("fa") || f.push("fa");
  const d = [".".concat(Qm, ":not([").concat(Io, "])")].concat(f.map((v) => ".".concat(v, ":not([").concat(Io, "])"))).join(", ");
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
  const g = cf.begin("onTree"), m = p.reduce((v, y) => {
    try {
      const x = hg(y);
      x && v.push(x);
    } catch (x) {
      Ym || x.name === "MissingIcon" && console.error(x);
    }
    return v;
  }, []);
  return new Promise((v, y) => {
    Promise.all(m).then((x) => {
      dg(x, () => {
        s("active"), s("complete"), u("pending"), typeof o == "function" && o(), g(), v();
      });
    }).catch((x) => {
      g(), y(x);
    });
  });
}
function K1(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  hg(n).then((l) => {
    l && dg([l], o);
  });
}
function Q1(n) {
  return function(o) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = (o || {}).icon ? o : Nc(o || {});
    let {
      mask: u
    } = l;
    return u && (u = (u || {}).icon ? u : Nc(u || {})), n(s, ne(ne({}, l), {}, {
      mask: u
    }));
  };
}
const G1 = function(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: l = sr,
    symbol: s = !1,
    mask: u = null,
    maskId: f = null,
    title: d = null,
    titleId: p = null,
    classes: g = [],
    attributes: m = {},
    styles: v = {}
  } = o;
  if (!n) return;
  const {
    prefix: y,
    iconName: x,
    icon: w
  } = n;
  return aa(ne({
    type: "icon"
  }, n), () => (Ro("beforeDOMElementCreation", {
    iconDefinition: n,
    params: o
  }), Ce.autoA11y && (d ? m["aria-labelledby"] = "".concat(Ce.replacementClass, "-title-").concat(p || ul()) : (m["aria-hidden"] = "true", m.focusable = "false")), uf({
    icons: {
      main: bc(w),
      mask: u ? bc(u.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: y,
    iconName: x,
    transform: ne(ne({}, sr), l),
    symbol: s,
    title: d,
    maskId: f,
    titleId: p,
    extra: {
      attributes: m,
      styles: v,
      classes: g
    }
  })));
};
var q1 = {
  mixout() {
    return {
      icon: Q1(G1)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return n.treeCallback = bh, n.nodeCallback = K1, n;
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
      return bh(l, s);
    }, n.generateSvgReplacementMutation = function(o, l) {
      const {
        iconName: s,
        title: u,
        titleId: f,
        prefix: d,
        transform: p,
        symbol: g,
        mask: m,
        maskId: v,
        extra: y
      } = l;
      return new Promise((x, w) => {
        Promise.all([jc(s, d), m.iconName ? jc(m.iconName, m.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((O) => {
          let [P, E] = O;
          x([o, uf({
            icons: {
              main: P,
              mask: E
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
      return lf(f) && (g = ro("generateAbstractTransformGrouping", {
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
}, X1 = {
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
}, Z1 = {
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
        }), P1({
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
}, J1 = {
  mixout() {
    return {
      text(n) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: l = sr,
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
        }), Oh({
          content: n,
          transform: ne(ne({}, sr), l),
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
      if (Dm) {
        const g = parseInt(getComputedStyle(o).fontSize, 10), m = o.getBoundingClientRect();
        d = m.width / g, p = m.height / g;
      }
      return Ce.autoA11y && !s && (f.attributes["aria-hidden"] = "true"), Promise.resolve([o, Oh({
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
const ew = new RegExp('"', "ug"), jh = [1105920, 1112319], Fh = ne(ne(ne(ne({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), _y), Hy), zy), Dc = Object.keys(Fh).reduce((n, o) => (n[o.toLowerCase()] = Fh[o], n), {}), tw = Object.keys(Dc).reduce((n, o) => {
  const l = Dc[o];
  return n[o] = l[900] || [...Object.entries(l)][0][1], n;
}, {});
function nw(n) {
  const o = n.replace(ew, ""), l = a1(o, 0), s = l >= jh[0] && l <= jh[1], u = o.length === 2 ? o[0] === o[1] : !1;
  return {
    value: Ac(u ? o[0] : o),
    isSecondary: s || u
  };
}
function rw(n, o) {
  const l = n.replace(/^['"]|['"]$/g, "").toLowerCase(), s = parseInt(o), u = isNaN(s) ? "normal" : s;
  return (Dc[l] || {})[u] || tw[l];
}
function Mh(n, o) {
  const l = "".concat(By).concat(o.replace(":", "-"));
  return new Promise((s, u) => {
    if (n.getAttribute(l) !== null)
      return s();
    const d = fi(n.children).filter((x) => x.getAttribute(Ic) === o)[0], p = to.getComputedStyle(n, o), g = p.getPropertyValue("font-family"), m = g.match(Yy), v = p.getPropertyValue("font-weight"), y = p.getPropertyValue("content");
    if (d && !m)
      return n.removeChild(d), s();
    if (m && y !== "none" && y !== "") {
      const x = p.getPropertyValue("content");
      let w = rw(g, v);
      const {
        value: O,
        isSecondary: P
      } = nw(x), E = m[0].startsWith("FontAwesome");
      let C = af(w, O), I = C;
      if (E) {
        const D = h1(O);
        D.iconName && D.prefix && (C = D.iconName, w = D.prefix);
      }
      if (C && !P && (!d || d.getAttribute(tf) !== w || d.getAttribute(nf) !== I)) {
        n.setAttribute(l, I), d && n.removeChild(d);
        const D = $1(), {
          extra: $
        } = D;
        $.attributes[Ic] = o, jc(C, w).then((F) => {
          const N = uf(ne(ne({}, D), {}, {
            icons: {
              main: F,
              mask: ag()
            },
            prefix: w,
            iconName: I,
            extra: $,
            watchable: !0
          })), B = vt.createElementNS("http://www.w3.org/2000/svg", "svg");
          o === "::before" ? n.insertBefore(B, n.firstChild) : n.appendChild(B), B.outerHTML = N.map((S) => xl(S)).join(`
`), n.removeAttribute(l), s();
        }).catch(u);
      } else
        s();
    } else
      s();
  });
}
function ow(n) {
  return Promise.all([Mh(n, "::before"), Mh(n, "::after")]);
}
function iw(n) {
  return n.parentNode !== document.head && !~Uy.indexOf(n.tagName.toUpperCase()) && !n.getAttribute(Ic) && (!n.parentNode || n.parentNode.tagName !== "svg");
}
function Dh(n) {
  if (Pr)
    return new Promise((o, l) => {
      const s = fi(n.querySelectorAll("*")).filter(iw).map(ow), u = cf.begin("searchPseudoElements");
      pg(), Promise.all(s).then(() => {
        u(), Mc(), o();
      }).catch(() => {
        u(), Mc(), l();
      });
    });
}
var lw = {
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return n.pseudoElementsCallback = Dh, n;
      }
    };
  },
  provides(n) {
    n.pseudoElements2svg = function(o) {
      const {
        node: l = vt
      } = o;
      Ce.searchPseudoElements && Dh(l);
    };
  }
};
let Hh = !1;
var sw = {
  mixout() {
    return {
      dom: {
        unwatch() {
          pg(), Hh = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        zh(zc("mutationObserverCallbacks", {}));
      },
      noAuto() {
        H1();
      },
      watch(n) {
        const {
          observeMutationsRoot: o
        } = n;
        Hh ? Mc() : zh(zc("mutationObserverCallbacks", {
          observeMutationsRoot: o
        }));
      }
    };
  }
};
const Bh = (n) => {
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
var aw = {
  mixout() {
    return {
      parse: {
        transform: (n) => Bh(n)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-transform");
        return l && (n.transform = Bh(l)), n;
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
      }, p = "translate(".concat(s.x * 32, ", ").concat(s.y * 32, ") "), g = "scale(".concat(s.size / 16 * (s.flipX ? -1 : 1), ", ").concat(s.size / 16 * (s.flipY ? -1 : 1), ") "), m = "rotate(".concat(s.rotate, " 0 0)"), v = {
        transform: "".concat(p, " ").concat(g, " ").concat(m)
      }, y = {
        transform: "translate(".concat(f / 2 * -1, " -256)")
      }, x = {
        outer: d,
        inner: v,
        path: y
      };
      return {
        tag: "g",
        attributes: ne({}, x.outer),
        children: [{
          tag: "g",
          attributes: ne({}, x.inner),
          children: [{
            tag: l.icon.tag,
            children: l.icon.children,
            attributes: ne(ne({}, l.icon.attributes), x.path)
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
function Wh(n) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.attributes && (n.attributes.fill || o) && (n.attributes.fill = "black"), n;
}
function uw(n) {
  return n.tag === "g" ? n.children : [n];
}
var cw = {
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-mask"), s = l ? sa(l.split(" ").map((u) => u.trim())) : ag();
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
        icon: m
      } = u, {
        width: v,
        icon: y
      } = f, x = n1({
        transform: p,
        containerWidth: v,
        iconWidth: g
      }), w = {
        tag: "rect",
        attributes: ne(ne({}, sc), {}, {
          fill: "white"
        })
      }, O = m.children ? {
        children: m.children.map(Wh)
      } : {}, P = {
        tag: "g",
        attributes: ne({}, x.inner),
        children: [Wh(ne({
          tag: m.tag,
          attributes: ne(ne({}, m.attributes), x.path)
        }, O))]
      }, E = {
        tag: "g",
        attributes: ne({}, x.outer),
        children: [P]
      }, C = "mask-".concat(d || ul()), I = "clip-".concat(d || ul()), D = {
        tag: "mask",
        attributes: ne(ne({}, sc), {}, {
          id: C,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [w, E]
      }, $ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: I
          },
          children: uw(y)
        }, D]
      };
      return l.push($, {
        tag: "rect",
        attributes: ne({
          fill: "currentColor",
          "clip-path": "url(#".concat(I, ")"),
          mask: "url(#".concat(C, ")")
        }, sc)
      }), {
        children: l,
        attributes: s
      };
    };
  }
}, fw = {
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
        attributes: ne(ne({}, s), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const f = ne(ne({}, u), {}, {
        attributeName: "opacity"
      }), d = {
        tag: "circle",
        attributes: ne(ne({}, s), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return o || d.children.push({
        tag: "animate",
        attributes: ne(ne({}, u), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: ne(ne({}, f), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), l.push(d), l.push({
        tag: "path",
        attributes: ne(ne({}, s), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: o ? [] : [{
          tag: "animate",
          attributes: ne(ne({}, f), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), o || l.push({
        tag: "path",
        attributes: ne(ne({}, s), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: ne(ne({}, f), {}, {
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
}, dw = {
  hooks() {
    return {
      parseNodeAttributes(n, o) {
        const l = o.getAttribute("data-fa-symbol"), s = l === null ? !1 : l === "" ? !0 : l;
        return n.symbol = s, n;
      }
    };
  }
}, pw = [i1, q1, X1, Z1, J1, lw, sw, aw, cw, fw, dw];
_1(pw, {
  mixoutsTo: Cn
});
Cn.noAuto;
Cn.config;
Cn.library;
Cn.dom;
const Hc = Cn.parse;
Cn.findIconDefinition;
Cn.toHtml;
const hw = Cn.icon;
Cn.layer;
Cn.text;
Cn.counter;
var ac = { exports: {} }, uc, Uh;
function mw() {
  if (Uh) return uc;
  Uh = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return uc = n, uc;
}
var cc, $h;
function gw() {
  if ($h) return cc;
  $h = 1;
  var n = /* @__PURE__ */ mw();
  function o() {
  }
  function l() {
  }
  return l.resetWarningCache = o, cc = function() {
    function s(d, p, g, m, v, y) {
      if (y !== n) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
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
var Vh;
function vw() {
  return Vh || (Vh = 1, ac.exports = /* @__PURE__ */ gw()()), ac.exports;
}
var yw = /* @__PURE__ */ vw();
const Qe = /* @__PURE__ */ yl(yw);
function Yh(n, o) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    o && (s = s.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function ir(n) {
  for (var o = 1; o < arguments.length; o++) {
    var l = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Yh(Object(l), !0).forEach(function(s) {
      ri(n, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : Yh(Object(l)).forEach(function(s) {
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
function ww(n, o) {
  if (n == null) return {};
  var l = {}, s = Object.keys(n), u, f;
  for (f = 0; f < s.length; f++)
    u = s[f], !(o.indexOf(u) >= 0) && (l[u] = n[u]);
  return l;
}
function xw(n, o) {
  if (n == null) return {};
  var l = ww(n, o), s, u;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (u = 0; u < f.length; u++)
      s = f[u], !(o.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (l[s] = n[s]);
  }
  return l;
}
function Bc(n) {
  return Sw(n) || kw(n) || _w(n) || Cw();
}
function Sw(n) {
  if (Array.isArray(n)) return Wc(n);
}
function kw(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function _w(n, o) {
  if (n) {
    if (typeof n == "string") return Wc(n, o);
    var l = Object.prototype.toString.call(n).slice(8, -1);
    if (l === "Object" && n.constructor && (l = n.constructor.name), l === "Map" || l === "Set") return Array.from(n);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return Wc(n, o);
  }
}
function Wc(n, o) {
  (o == null || o > n.length) && (o = n.length);
  for (var l = 0, s = new Array(o); l < o; l++) s[l] = n[l];
  return s;
}
function Cw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ew(n) {
  var o, l = n.beat, s = n.fade, u = n.beatFade, f = n.bounce, d = n.shake, p = n.flash, g = n.spin, m = n.spinPulse, v = n.spinReverse, y = n.pulse, x = n.fixedWidth, w = n.inverse, O = n.border, P = n.listItem, E = n.flip, C = n.size, I = n.rotation, D = n.pull, $ = (o = {
    "fa-beat": l,
    "fa-fade": s,
    "fa-beat-fade": u,
    "fa-bounce": f,
    "fa-shake": d,
    "fa-flash": p,
    "fa-spin": g,
    "fa-spin-reverse": v,
    "fa-spin-pulse": m,
    "fa-pulse": y,
    "fa-fw": x,
    "fa-inverse": w,
    "fa-border": O,
    "fa-li": P,
    "fa-flip": E === !0,
    "fa-flip-horizontal": E === "horizontal" || E === "both",
    "fa-flip-vertical": E === "vertical" || E === "both"
  }, ri(o, "fa-".concat(C), typeof C < "u" && C !== null), ri(o, "fa-rotate-".concat(I), typeof I < "u" && I !== null && I !== 0), ri(o, "fa-pull-".concat(D), typeof D < "u" && D !== null), ri(o, "fa-swap-opacity", n.swapOpacity), o);
  return Object.keys($).map(function(F) {
    return $[F] ? F : null;
  }).filter(function(F) {
    return F;
  });
}
function Tw(n) {
  return n = n - 0, n === n;
}
function mg(n) {
  return Tw(n) ? n : (n = n.replace(/[\-_\s]+(.)?/g, function(o, l) {
    return l ? l.toUpperCase() : "";
  }), n.substr(0, 1).toLowerCase() + n.substr(1));
}
var Iw = ["style"];
function Rw(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Ow(n) {
  return n.split(";").map(function(o) {
    return o.trim();
  }).filter(function(o) {
    return o;
  }).reduce(function(o, l) {
    var s = l.indexOf(":"), u = mg(l.slice(0, s)), f = l.slice(s + 1).trim();
    return u.startsWith("webkit") ? o[Rw(u)] = f : o[u] = f, o;
  }, {});
}
function gg(n, o) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof o == "string")
    return o;
  var s = (o.children || []).map(function(g) {
    return gg(n, g);
  }), u = Object.keys(o.attributes || {}).reduce(function(g, m) {
    var v = o.attributes[m];
    switch (m) {
      case "class":
        g.attrs.className = v, delete o.attributes.class;
        break;
      case "style":
        g.attrs.style = Ow(v);
        break;
      default:
        m.indexOf("aria-") === 0 || m.indexOf("data-") === 0 ? g.attrs[m.toLowerCase()] = v : g.attrs[mg(m)] = v;
    }
    return g;
  }, {
    attrs: {}
  }), f = l.style, d = f === void 0 ? {} : f, p = xw(l, Iw);
  return u.attrs.style = ir(ir({}, u.attrs.style), d), n.apply(void 0, [o.tag, ir(ir({}, u.attrs), p)].concat(Bc(s)));
}
var vg = !1;
try {
  vg = !0;
} catch {
}
function Pw() {
  if (!vg && console && typeof console.error == "function") {
    var n;
    (n = console).error.apply(n, arguments);
  }
}
function Kh(n) {
  if (n && qs(n) === "object" && n.prefix && n.iconName && n.icon)
    return n;
  if (Hc.icon)
    return Hc.icon(n);
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
var Qh = {
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
}, $n = /* @__PURE__ */ ae.forwardRef(function(n, o) {
  var l = ir(ir({}, Qh), n), s = l.icon, u = l.mask, f = l.symbol, d = l.className, p = l.title, g = l.titleId, m = l.maskId, v = Kh(s), y = fc("classes", [].concat(Bc(Ew(l)), Bc((d || "").split(" ")))), x = fc("transform", typeof l.transform == "string" ? Hc.transform(l.transform) : l.transform), w = fc("mask", Kh(u)), O = hw(v, ir(ir(ir(ir({}, y), x), w), {}, {
    symbol: f,
    title: p,
    titleId: g,
    maskId: m
  }));
  if (!O)
    return Pw("Could not find icon", v), null;
  var P = O.abstract, E = {
    ref: o
  };
  return Object.keys(l).forEach(function(C) {
    Qh.hasOwnProperty(C) || (E[C] = l[C]);
  }), Aw(P[0], E);
});
$n.displayName = "FontAwesomeIcon";
$n.propTypes = {
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
var Aw = gg.bind(null, ae.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Lw = {
  prefix: "fas",
  iconName: "list",
  icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]
}, zw = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Nw = {
  prefix: "fas",
  iconName: "table-columns",
  icon: [512, 512, ["columns"], "f0db", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 160 0 0-256L64 160zm384 0l-160 0 0 256 160 0 0-256z"]
}, bw = {
  prefix: "fas",
  iconName: "filter",
  icon: [512, 512, [], "f0b0", "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]
}, jw = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Fw = {
  prefix: "fas",
  iconName: "arrow-rotate-right",
  icon: [512, 512, [8635, "arrow-right-rotate", "arrow-rotate-forward", "redo"], "f01e", "M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]
}, Gh = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Mw = {
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
var Dw = Vs.exports, qh;
function Hw() {
  return qh || (qh = 1, function(n, o) {
    ((l, s) => {
      n.exports = s();
    })(Dw, function l() {
      var s = typeof self < "u" ? self : typeof window < "u" ? window : s !== void 0 ? s : {}, u, f = !s.document && !!s.postMessage, d = s.IS_PAPA_WORKER || !1, p = {}, g = 0, m = {};
      function v(S) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(T) {
          var L = F(T);
          L.chunkSize = parseInt(L.chunkSize), T.step || T.chunk || (L.chunkSize = null), this._handle = new P(L), (this._handle.streamer = this)._config = L;
        }).call(this, S), this.parseChunk = function(T, L) {
          var V = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < V) {
            let ie = this._config.newline;
            ie || (Q = this._config.quoteChar || '"', ie = this._handle.guessLineEndings(T, Q)), T = [...T.split(ie).slice(V)].join(ie);
          }
          this.isFirstChunk && B(this._config.beforeFirstChunk) && (Q = this._config.beforeFirstChunk(T)) !== void 0 && (T = Q), this.isFirstChunk = !1, this._halted = !1;
          var V = this._partialLine + T, Q = (this._partialLine = "", this._handle.parse(V, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (T = Q.meta.cursor, V = (this._finished || (this._partialLine = V.substring(T - this._baseIndex), this._baseIndex = T), Q && Q.data && (this._rowCount += Q.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), d) s.postMessage({ results: Q, workerId: m.WORKER_ID, finished: V });
            else if (B(this._config.chunk) && !L) {
              if (this._config.chunk(Q, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = Q = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(Q.data), this._completeResults.errors = this._completeResults.errors.concat(Q.errors), this._completeResults.meta = Q.meta), this._completed || !V || !B(this._config.complete) || Q && Q.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), V || Q && Q.meta.paused || this._nextChunk(), Q;
          }
          this._halted = !0;
        }, this._sendError = function(T) {
          B(this._config.error) ? this._config.error(T) : d && this._config.error && s.postMessage({ workerId: m.WORKER_ID, error: T, finished: !1 });
        };
      }
      function y(S) {
        var T;
        (S = S || {}).chunkSize || (S.chunkSize = m.RemoteChunkSize), v.call(this, S), this._nextChunk = f ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(L) {
          this._input = L, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (T = new XMLHttpRequest(), this._config.withCredentials && (T.withCredentials = this._config.withCredentials), f || (T.onload = N(this._chunkLoaded, this), T.onerror = N(this._chunkError, this)), T.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !f), this._config.downloadRequestHeaders) {
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
      function x(S) {
        (S = S || {}).chunkSize || (S.chunkSize = m.LocalChunkSize), v.call(this, S);
        var T, L, V = typeof FileReader < "u";
        this.stream = function(Q) {
          this._input = Q, L = Q.slice || Q.webkitSlice || Q.mozSlice, V ? ((T = new FileReader()).onload = N(this._chunkLoaded, this), T.onerror = N(this._chunkError, this)) : T = new FileReaderSync(), this._nextChunk();
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
      function w(S) {
        var T;
        v.call(this, S = S || {}), this.stream = function(L) {
          return T = L, this._nextChunk();
        }, this._nextChunk = function() {
          var L, V;
          if (!this._finished) return L = this._config.chunkSize, T = L ? (V = T.substring(0, L), T.substring(L)) : (V = T, ""), this._finished = !T, this.parseChunk(V);
        };
      }
      function O(S) {
        v.call(this, S = S || {});
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
        }, this._streamData = N(function(Q) {
          try {
            T.push(typeof Q == "string" ? Q : Q.toString(this._config.encoding)), L && (L = !1, this._checkIsFinished(), this.parseChunk(T.shift()));
          } catch (ie) {
            this._streamError(ie);
          }
        }, this), this._streamError = N(function(Q) {
          this._streamCleanUp(), this._sendError(Q);
        }, this), this._streamEnd = N(function() {
          this._streamCleanUp(), V = !0, this._streamData("");
        }, this), this._streamCleanUp = N(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function P(S) {
        var T, L, V, Q, ie = Math.pow(2, 53), K = -ie, fe = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, we = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, re = this, U = 0, Y = 0, _ = !1, z = !1, G = [], q = { data: [], errors: [], meta: {} };
        function de(M) {
          return S.skipEmptyLines === "greedy" ? M.join("").trim() === "" : M.length === 1 && M[0].length === 0;
        }
        function ke() {
          if (q && V && (Ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + m.DefaultDelimiter + "'"), V = !1), S.skipEmptyLines && (q.data = q.data.filter(function(Ie) {
            return !de(Ie);
          })), ge()) {
            let Ie = function(Be, Ue) {
              B(S.transformHeader) && (Be = S.transformHeader(Be, Ue)), G.push(Be);
            };
            var pe = Ie;
            if (q) if (Array.isArray(q.data[0])) {
              for (var M = 0; ge() && M < q.data.length; M++) q.data[M].forEach(Ie);
              q.data.splice(0, 1);
            } else q.data.forEach(Ie);
          }
          function oe(Ie, Be) {
            for (var Ue = S.header ? {} : [], Re = 0; Re < Ie.length; Re++) {
              var ze = Re, Ve = Ie[Re], Ve = ((Ne, _e) => ((Ge) => (S.dynamicTypingFunction && S.dynamicTyping[Ge] === void 0 && (S.dynamicTyping[Ge] = S.dynamicTypingFunction(Ge)), (S.dynamicTyping[Ge] || S.dynamicTyping) === !0))(Ne) ? _e === "true" || _e === "TRUE" || _e !== "false" && _e !== "FALSE" && (((Ge) => {
                if (fe.test(Ge) && (Ge = parseFloat(Ge), K < Ge && Ge < ie))
                  return 1;
              })(_e) ? parseFloat(_e) : we.test(_e) ? new Date(_e) : _e === "" ? null : _e) : _e)(ze = S.header ? Re >= G.length ? "__parsed_extra" : G[Re] : ze, Ve = S.transform ? S.transform(Ve, ze) : Ve);
              ze === "__parsed_extra" ? (Ue[ze] = Ue[ze] || [], Ue[ze].push(Ve)) : Ue[ze] = Ve;
            }
            return S.header && (Re > G.length ? Ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + G.length + " fields but parsed " + Re, Y + Be) : Re < G.length && Ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + G.length + " fields but parsed " + Re, Y + Be)), Ue;
          }
          var xe;
          q && (S.header || S.dynamicTyping || S.transform) && (xe = 1, !q.data.length || Array.isArray(q.data[0]) ? (q.data = q.data.map(oe), xe = q.data.length) : q.data = oe(q.data, 0), S.header && q.meta && (q.meta.fields = G), Y += xe);
        }
        function ge() {
          return S.header && G.length === 0;
        }
        function Ee(M, oe, xe, pe) {
          M = { type: M, code: oe, message: xe }, pe !== void 0 && (M.row = pe), q.errors.push(M);
        }
        B(S.step) && (Q = S.step, S.step = function(M) {
          q = M, ge() ? ke() : (ke(), q.data.length !== 0 && (U += M.data.length, S.preview && U > S.preview ? L.abort() : (q.data = q.data[0], Q(q, re))));
        }), this.parse = function(M, oe, xe) {
          var pe = S.quoteChar || '"', pe = (S.newline || (S.newline = this.guessLineEndings(M, pe)), V = !1, S.delimiter ? B(S.delimiter) && (S.delimiter = S.delimiter(M), q.meta.delimiter = S.delimiter) : ((pe = ((Ie, Be, Ue, Re, ze) => {
            var Ve, Ne, _e, Ge;
            ze = ze || [",", "	", "|", ";", m.RECORD_SEP, m.UNIT_SEP];
            for (var St = 0; St < ze.length; St++) {
              for (var kt, Nt = ze[St], tt = 0, it = 0, Xe = 0, lt = (_e = void 0, new C({ comments: Re, delimiter: Nt, newline: Be, preview: 10 }).parse(Ie)), pt = 0; pt < lt.data.length; pt++) Ue && de(lt.data[pt]) ? Xe++ : (kt = lt.data[pt].length, it += kt, _e === void 0 ? _e = kt : 0 < kt && (tt += Math.abs(kt - _e), _e = kt));
              0 < lt.data.length && (it /= lt.data.length - Xe), (Ne === void 0 || tt <= Ne) && (Ge === void 0 || Ge < it) && 1.99 < it && (Ne = tt, Ve = Nt, Ge = it);
            }
            return { successful: !!(S.delimiter = Ve), bestDelimiter: Ve };
          })(M, S.newline, S.skipEmptyLines, S.comments, S.delimitersToGuess)).successful ? S.delimiter = pe.bestDelimiter : (V = !0, S.delimiter = m.DefaultDelimiter), q.meta.delimiter = S.delimiter), F(S));
          return S.preview && S.header && pe.preview++, T = M, L = new C(pe), q = L.parse(T, oe, xe), ke(), _ ? { meta: { paused: !0 } } : q || { meta: { paused: !1 } };
        }, this.paused = function() {
          return _;
        }, this.pause = function() {
          _ = !0, L.abort(), T = B(S.chunk) ? "" : T.substring(L.getCharIndex());
        }, this.resume = function() {
          re.streamer._halted ? (_ = !1, re.streamer.parseChunk(T, !0)) : setTimeout(re.resume, 3);
        }, this.aborted = function() {
          return z;
        }, this.abort = function() {
          z = !0, L.abort(), q.meta.aborted = !0, B(S.complete) && S.complete(q), T = "";
        }, this.guessLineEndings = function(Ie, pe) {
          Ie = Ie.substring(0, 1048576);
          var pe = new RegExp(E(pe) + "([^]*?)" + E(pe), "gm"), xe = (Ie = Ie.replace(pe, "")).split("\r"), pe = Ie.split(`
`), Ie = 1 < pe.length && pe[0].length < xe[0].length;
          if (xe.length === 1 || Ie) return `
`;
          for (var Be = 0, Ue = 0; Ue < xe.length; Ue++) xe[Ue][0] === `
` && Be++;
          return Be >= xe.length / 2 ? `\r
` : "\r";
        };
      }
      function E(S) {
        return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function C(S) {
        var T = (S = S || {}).delimiter, L = S.newline, V = S.comments, Q = S.step, ie = S.preview, K = S.fastMode, fe = null, we = !1, re = S.quoteChar == null ? '"' : S.quoteChar, U = re;
        if (S.escapeChar !== void 0 && (U = S.escapeChar), (typeof T != "string" || -1 < m.BAD_DELIMITERS.indexOf(T)) && (T = ","), V === T) throw new Error("Comment character same as delimiter");
        V === !0 ? V = "#" : (typeof V != "string" || -1 < m.BAD_DELIMITERS.indexOf(V)) && (V = !1), L !== `
` && L !== "\r" && L !== `\r
` && (L = `
`);
        var Y = 0, _ = !1;
        this.parse = function(z, G, q) {
          if (typeof z != "string") throw new Error("Input must be a string");
          var de = z.length, ke = T.length, ge = L.length, Ee = V.length, M = B(Q), oe = [], xe = [], pe = [], Ie = Y = 0;
          if (!z) return tt();
          if (K || K !== !1 && z.indexOf(re) === -1) {
            for (var Be = z.split(L), Ue = 0; Ue < Be.length; Ue++) {
              if (pe = Be[Ue], Y += pe.length, Ue !== Be.length - 1) Y += L.length;
              else if (q) return tt();
              if (!V || pe.substring(0, Ee) !== V) {
                if (M) {
                  if (oe = [], Ge(pe.split(T)), it(), _) return tt();
                } else Ge(pe.split(T));
                if (ie && ie <= Ue) return oe = oe.slice(0, ie), tt(!0);
              }
            }
            return tt();
          }
          for (var Re = z.indexOf(T, Y), ze = z.indexOf(L, Y), Ve = new RegExp(E(U) + E(re), "g"), Ne = z.indexOf(re, Y); ; ) if (z[Y] === re) for (Ne = Y, Y++; ; ) {
            if ((Ne = z.indexOf(re, Ne + 1)) === -1) return q || xe.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: oe.length, index: Y }), kt();
            if (Ne === de - 1) return kt(z.substring(Y, Ne).replace(Ve, re));
            if (re === U && z[Ne + 1] === U) Ne++;
            else if (re === U || Ne === 0 || z[Ne - 1] !== U) {
              Re !== -1 && Re < Ne + 1 && (Re = z.indexOf(T, Ne + 1));
              var _e = St((ze = ze !== -1 && ze < Ne + 1 ? z.indexOf(L, Ne + 1) : ze) === -1 ? Re : Math.min(Re, ze));
              if (z.substr(Ne + 1 + _e, ke) === T) {
                pe.push(z.substring(Y, Ne).replace(Ve, re)), z[Y = Ne + 1 + _e + ke] !== re && (Ne = z.indexOf(re, Y)), Re = z.indexOf(T, Y), ze = z.indexOf(L, Y);
                break;
              }
              if (_e = St(ze), z.substring(Ne + 1 + _e, Ne + 1 + _e + ge) === L) {
                if (pe.push(z.substring(Y, Ne).replace(Ve, re)), Nt(Ne + 1 + _e + ge), Re = z.indexOf(T, Y), Ne = z.indexOf(re, Y), M && (it(), _)) return tt();
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
            if (pe.push(z.substring(Y, ze)), Nt(ze + ge), M && (it(), _)) return tt();
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
            return q || (Xe === void 0 && (Xe = z.substring(Y)), pe.push(Xe), Y = de, Ge(pe), M && it()), tt();
          }
          function Nt(Xe) {
            Y = Xe, Ge(pe), pe = [], ze = z.indexOf(L, Y);
          }
          function tt(Xe) {
            if (S.header && !G && oe.length && !we) {
              var lt = oe[0], pt = /* @__PURE__ */ Object.create(null), Kt = new Set(lt);
              let sn = !1;
              for (let Et = 0; Et < lt.length; Et++) {
                let Tt = lt[Et];
                if (pt[Tt = B(S.transformHeader) ? S.transformHeader(Tt, Et) : Tt]) {
                  let Lt, ut = pt[Tt];
                  for (; Lt = Tt + "_" + ut, ut++, Kt.has(Lt); ) ;
                  Kt.add(Lt), lt[Et] = Lt, pt[Tt]++, sn = !0, (fe = fe === null ? {} : fe)[Lt] = Tt;
                } else pt[Tt] = 1, lt[Et] = Tt;
                Kt.add(Tt);
              }
              sn && console.warn("Duplicate headers found and renamed."), we = !0;
            }
            return { data: oe, errors: xe, meta: { delimiter: T, linebreak: L, aborted: _, truncated: !!Xe, cursor: Ie + (G || 0), renamedHeaders: fe } };
          }
          function it() {
            Q(tt()), oe = [], xe = [];
          }
        }, this.abort = function() {
          _ = !0;
        }, this.getCharIndex = function() {
          return Y;
        };
      }
      function I(S) {
        var T = S.data, L = p[T.workerId], V = !1;
        if (T.error) L.userError(T.error, T.file);
        else if (T.results && T.results.data) {
          var Q = { abort: function() {
            V = !0, D(T.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: $, resume: $ };
          if (B(L.userStep)) {
            for (var ie = 0; ie < T.results.data.length && (L.userStep({ data: T.results.data[ie], errors: T.results.errors, meta: T.results.meta }, Q), !V); ie++) ;
            delete T.results;
          } else B(L.userChunk) && (L.userChunk(T.results, Q, T.file), delete T.results);
        }
        T.finished && !V && D(T.workerId, T.results);
      }
      function D(S, T) {
        var L = p[S];
        B(L.userComplete) && L.userComplete(T), L.terminate(), delete p[S];
      }
      function $() {
        throw new Error("Not implemented.");
      }
      function F(S) {
        if (typeof S != "object" || S === null) return S;
        var T, L = Array.isArray(S) ? [] : {};
        for (T in S) L[T] = F(S[T]);
        return L;
      }
      function N(S, T) {
        return function() {
          S.apply(T, arguments);
        };
      }
      function B(S) {
        return typeof S == "function";
      }
      return m.parse = function(S, T) {
        var L = (T = T || {}).dynamicTyping || !1;
        if (B(L) && (T.dynamicTypingFunction = L, L = {}), T.dynamicTyping = L, T.transform = !!B(T.transform) && T.transform, !T.worker || !m.WORKERS_SUPPORTED) return L = null, m.NODE_STREAM_INPUT, typeof S == "string" ? (S = ((V) => V.charCodeAt(0) !== 65279 ? V : V.slice(1))(S), L = new (T.download ? y : w)(T)) : S.readable === !0 && B(S.read) && B(S.on) ? L = new O(T) : (s.File && S instanceof File || S instanceof Object) && (L = new x(T)), L.stream(S);
        (L = (() => {
          var V;
          return !!m.WORKERS_SUPPORTED && (V = (() => {
            var Q = s.URL || s.webkitURL || null, ie = l.toString();
            return m.BLOB_URL || (m.BLOB_URL = Q.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", ie, ")();"], { type: "text/javascript" })));
          })(), (V = new s.Worker(V)).onmessage = I, V.id = g++, p[V.id] = V);
        })()).userStep = T.step, L.userChunk = T.chunk, L.userComplete = T.complete, L.userError = T.error, T.step = B(T.step), T.chunk = B(T.chunk), T.complete = B(T.complete), T.error = B(T.error), delete T.worker, L.postMessage({ input: S, config: T, workerId: L.id });
      }, m.unparse = function(S, T) {
        var L = !1, V = !0, Q = ",", ie = `\r
`, K = '"', fe = K + K, we = !1, re = null, U = !1, Y = ((() => {
          if (typeof T == "object") {
            if (typeof T.delimiter != "string" || m.BAD_DELIMITERS.filter(function(G) {
              return T.delimiter.indexOf(G) !== -1;
            }).length || (Q = T.delimiter), typeof T.quotes != "boolean" && typeof T.quotes != "function" && !Array.isArray(T.quotes) || (L = T.quotes), typeof T.skipEmptyLines != "boolean" && typeof T.skipEmptyLines != "string" || (we = T.skipEmptyLines), typeof T.newline == "string" && (ie = T.newline), typeof T.quoteChar == "string" && (K = T.quoteChar), typeof T.header == "boolean" && (V = T.header), Array.isArray(T.columns)) {
              if (T.columns.length === 0) throw new Error("Option columns is empty");
              re = T.columns;
            }
            T.escapeChar !== void 0 && (fe = T.escapeChar + K), T.escapeFormulae instanceof RegExp ? U = T.escapeFormulae : typeof T.escapeFormulae == "boolean" && T.escapeFormulae && (U = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(E(K), "g"));
        if (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S)) {
          if (!S.length || Array.isArray(S[0])) return _(null, S, we);
          if (typeof S[0] == "object") return _(re || Object.keys(S[0]), S, we);
        } else if (typeof S == "object") return typeof S.data == "string" && (S.data = JSON.parse(S.data)), Array.isArray(S.data) && (S.fields || (S.fields = S.meta && S.meta.fields || re), S.fields || (S.fields = Array.isArray(S.data[0]) ? S.fields : typeof S.data[0] == "object" ? Object.keys(S.data[0]) : []), Array.isArray(S.data[0]) || typeof S.data[0] == "object" || (S.data = [S.data])), _(S.fields || [], S.data || [], we);
        throw new Error("Unable to serialize unrecognized input");
        function _(G, q, de) {
          var ke = "", ge = (typeof G == "string" && (G = JSON.parse(G)), typeof q == "string" && (q = JSON.parse(q)), Array.isArray(G) && 0 < G.length), Ee = !Array.isArray(q[0]);
          if (ge && V) {
            for (var M = 0; M < G.length; M++) 0 < M && (ke += Q), ke += z(G[M], M);
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
            for (var M = 0; M < Ee.length; M++) if (-1 < ge.indexOf(Ee[M])) return !0;
            return !1;
          })(de, m.BAD_DELIMITERS) || -1 < de.indexOf(Q) || de.charAt(0) === " " || de.charAt(de.length - 1) === " ") ? K + de + K : de);
        }
      }, m.RECORD_SEP = "", m.UNIT_SEP = "", m.BYTE_ORDER_MARK = "\uFEFF", m.BAD_DELIMITERS = ["\r", `
`, '"', m.BYTE_ORDER_MARK], m.WORKERS_SUPPORTED = !f && !!s.Worker, m.NODE_STREAM_INPUT = 1, m.LocalChunkSize = 10485760, m.RemoteChunkSize = 5242880, m.DefaultDelimiter = ",", m.Parser = C, m.ParserHandle = P, m.NetworkStreamer = y, m.FileStreamer = x, m.StringStreamer = w, m.ReadableStreamStreamer = O, s.jQuery && ((u = s.jQuery).fn.parse = function(S) {
        var T = S.config || {}, L = [];
        return this.each(function(ie) {
          if (!(u(this).prop("tagName").toUpperCase() === "INPUT" && u(this).attr("type").toLowerCase() === "file" && s.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var K = 0; K < this.files.length; K++) L.push({ file: this.files[K], inputElem: this, instanceConfig: u.extend({}, T) });
        }), V(), this;
        function V() {
          if (L.length === 0) B(S.complete) && S.complete();
          else {
            var ie, K, fe, we, re = L[0];
            if (B(S.before)) {
              var U = S.before(re.file, re.inputElem);
              if (typeof U == "object") {
                if (U.action === "abort") return ie = "AbortError", K = re.file, fe = re.inputElem, we = U.reason, void (B(S.error) && S.error({ name: ie }, K, fe, we));
                if (U.action === "skip") return void Q();
                typeof U.config == "object" && (re.instanceConfig = u.extend(re.instanceConfig, U.config));
              } else if (U === "skip") return void Q();
            }
            var Y = re.instanceConfig.complete;
            re.instanceConfig.complete = function(_) {
              B(Y) && Y(_, re.file, re.inputElem), Q();
            }, m.parse(re.file, re.instanceConfig);
          }
        }
        function Q() {
          L.splice(0, 1), V();
        }
      }), d && (s.onmessage = function(S) {
        S = S.data, m.WORKER_ID === void 0 && S && (m.WORKER_ID = S.workerId), typeof S.input == "string" ? s.postMessage({ workerId: m.WORKER_ID, results: m.parse(S.input, S.config), finished: !0 }) : (s.File && S.input instanceof File || S.input instanceof Object) && (S = m.parse(S.input, S.config)) && s.postMessage({ workerId: m.WORKER_ID, results: S, finished: !0 });
      }), (y.prototype = Object.create(v.prototype)).constructor = y, (x.prototype = Object.create(v.prototype)).constructor = x, (w.prototype = Object.create(w.prototype)).constructor = w, (O.prototype = Object.create(v.prototype)).constructor = O, m;
    });
  }(Vs)), Vs.exports;
}
var Bw = Hw();
const Ww = /* @__PURE__ */ yl(Bw), Uw = "_container_wy793_1", $w = "_main_wy793_9", Vw = "_title_wy793_15", Yw = "_search_wy793_22", Kw = "_loader_wy793_30", Qw = "_fetch_wy793_34", Gw = "_buttons_wy793_41", qw = "_active_wy793_62", Xw = "_icon_wy793_67", Un = {
  container: Uw,
  main: $w,
  title: Vw,
  search: Yw,
  loader: Kw,
  fetch: Qw,
  buttons: Gw,
  active: qw,
  icon: Xw
}, Zw = "_search_qqeb0_1", Jw = {
  search: Zw
};
function ex({ changeHandler: n }) {
  return /* @__PURE__ */ j.jsx("input", { className: Jw.search, name: "search", type: "text", autoComplete: "off", placeholder: "🔍  Search data elements...", onChange: n });
}
const tx = "_content_bbdxn_1", nx = "_count_bbdxn_11", Xh = {
  content: tx,
  count: nx
};
var rx = bm();
const ox = /* @__PURE__ */ yl(rx), ua = 0, io = 1, di = 2, yg = 4;
function Zh(n) {
  return () => n;
}
function ix(n) {
  n();
}
function fl(n, o) {
  return (l) => n(o(l));
}
function Jh(n, o) {
  return () => n(o);
}
function lx(n, o) {
  return (l) => n(o, l);
}
function df(n) {
  return n !== void 0;
}
function sx(...n) {
  return () => {
    n.map(ix);
  };
}
function pi() {
}
function ca(n, o) {
  return o(n), n;
}
function ax(n, o) {
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
function pf(n) {
  n(di);
}
function Ut(n) {
  return n(yg);
}
function Te(n, o) {
  return ot(n, lx(o, ua));
}
function fr(n, o) {
  const l = n(io, (s) => {
    l(), o(s);
  });
  return l;
}
function em(n) {
  let o, l;
  return (s) => (u) => {
    o = u, l && clearTimeout(l), l = setTimeout(() => {
      s(o);
    }, n);
  };
}
function wg(n, o) {
  return n === o;
}
function gt(n = wg) {
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
  return (o) => fl(o, n);
}
function lr(n) {
  return (o) => () => {
    o(n);
  };
}
function ee(n, ...o) {
  const l = ux(...o);
  return (s, u) => {
    switch (s) {
      case di:
        pf(n);
        return;
      case io:
        return ot(n, l(u));
    }
  };
}
function ur(n, o) {
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
      const m = l;
      l = l | p, o[d] = g, m !== u && l === u && s && (s(), s = null);
    });
  }), (f) => (d) => {
    const p = () => {
      f([d].concat(o));
    };
    l === u ? p() : s = p;
  };
}
function ux(...n) {
  return (o) => n.reduceRight(ax, o);
}
function cx(n) {
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
      case yg:
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
    id: fx(),
    singleton: l
  };
}
const fx = () => Symbol();
function dx(n) {
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
        pf(o);
        return;
      }
      case io:
        return s === u && d(l), ot(o, d);
    }
  };
}
function Me(n, o = wg) {
  return ee(n, gt(o));
}
function tm(...n) {
  return function(o, l) {
    switch (o) {
      case di:
        return;
      case io:
        return sx(...n.map((s) => ot(s, l)));
    }
  };
}
var mn = /* @__PURE__ */ ((n) => (n[n.DEBUG = 0] = "DEBUG", n[n.INFO = 1] = "INFO", n[n.WARN = 2] = "WARN", n[n.ERROR = 3] = "ERROR", n))(mn || {});
const px = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, hx = () => typeof globalThis > "u" ? window : globalThis, lo = nt(
  () => {
    const n = se(
      3
      /* ERROR */
    );
    return {
      log: se((o, l, s = 1) => {
        var u;
        const f = (u = hx().VIRTUOSO_LOG_LEVEL) != null ? u : Ut(n);
        s >= f && console[px[s]](
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
function dr(n, o, l) {
  return hf(n, o, l).callbackRef;
}
function hf(n, o, l) {
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
function xg(n, o, l, s, u, f, d, p, g) {
  const m = ae.useCallback(
    (v) => {
      const y = mx(v.children, o, p ? "offsetWidth" : "offsetHeight", u);
      let x = v.parentElement;
      for (; !x.dataset.virtuosoScroller; )
        x = x.parentElement;
      const w = x.lastElementChild.dataset.viewportType === "window";
      let O;
      w && (O = x.ownerDocument.defaultView);
      const P = d ? p ? d.scrollLeft : d.scrollTop : w ? p ? O.scrollX || O.document.documentElement.scrollLeft : O.scrollY || O.document.documentElement.scrollTop : p ? x.scrollLeft : x.scrollTop, E = d ? p ? d.scrollWidth : d.scrollHeight : w ? p ? O.document.documentElement.scrollWidth : O.document.documentElement.scrollHeight : p ? x.scrollWidth : x.scrollHeight, C = d ? p ? d.offsetWidth : d.offsetHeight : w ? p ? O.innerWidth : O.innerHeight : p ? x.offsetWidth : x.offsetHeight;
      s({
        scrollHeight: E,
        scrollTop: Math.max(P, 0),
        viewportHeight: C
      }), f == null || f(
        p ? nm("column-gap", getComputedStyle(v).columnGap, u) : nm("row-gap", getComputedStyle(v).rowGap, u)
      ), y !== null && n(y);
    },
    [n, o, u, f, d, s, p]
  );
  return hf(m, l, g);
}
function mx(n, o, l, s) {
  const u = n.length;
  if (u === 0)
    return null;
  const f = [];
  for (let d = 0; d < u; d++) {
    const p = n.item(d);
    if (p.dataset.index === void 0)
      continue;
    const g = parseInt(p.dataset.index), m = parseFloat(p.dataset.knownSize), v = o(p, l);
    if (v === 0 && s("Zero-sized element, this should not happen", { child: p }, mn.ERROR), v === m)
      continue;
    const y = f[f.length - 1];
    f.length === 0 || y.size !== v || y.endIndex !== g - 1 ? f.push({ endIndex: g, size: v, startIndex: g }) : f[f.length - 1].endIndex++;
  }
  return f;
}
function nm(n, o, l) {
  return o !== "normal" && !(o != null && o.endsWith("px")) && l(`${n} was not resolved to pixel value correctly`, o, mn.WARN), o === "normal" ? 0 : parseInt(o ?? "0", 10);
}
function mf(n, o, l) {
  const s = ae.useRef(null), u = ae.useCallback(
    (g) => {
      if (!(g != null && g.offsetParent))
        return;
      const m = g.getBoundingClientRect(), v = m.width;
      let y, x;
      if (o) {
        const w = o.getBoundingClientRect(), O = m.top - w.top;
        x = w.height - Math.max(0, O), y = O + o.scrollTop;
      } else {
        const w = d.current.ownerDocument.defaultView;
        x = w.innerHeight - Math.max(0, m.top), y = m.top + w.scrollY;
      }
      s.current = {
        offsetTop: y,
        visibleHeight: x,
        visibleWidth: v
      }, n(s.current);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, o]
  ), { callbackRef: f, ref: d } = hf(u, !0, l), p = ae.useCallback(() => {
    u(d.current);
  }, [u, d]);
  return ae.useEffect(() => {
    var g;
    if (o) {
      o.addEventListener("scroll", p);
      const m = new ResizeObserver(() => {
        requestAnimationFrame(p);
      });
      return m.observe(o), () => {
        o.removeEventListener("scroll", p), m.unobserve(o);
      };
    } else {
      const m = (g = d.current) == null ? void 0 : g.ownerDocument.defaultView;
      return m == null || m.addEventListener("scroll", p), m == null || m.addEventListener("resize", p), () => {
        m == null || m.removeEventListener("scroll", p), m == null || m.removeEventListener("resize", p);
      };
    }
  }, [p, o, d]), f;
}
const ln = nt(
  () => {
    const n = qe(), o = qe(), l = se(0), s = qe(), u = se(0), f = qe(), d = qe(), p = se(0), g = se(0), m = se(0), v = se(0), y = qe(), x = qe(), w = se(!1), O = se(!1), P = se(!1);
    return Te(
      ee(
        n,
        me(({ scrollTop: E }) => E)
      ),
      o
    ), Te(
      ee(
        n,
        me(({ scrollHeight: E }) => E)
      ),
      d
    ), Te(o, u), {
      deviation: l,
      fixedFooterHeight: m,
      fixedHeaderHeight: g,
      footerHeight: v,
      headerHeight: p,
      horizontalDirection: O,
      scrollBy: x,
      // input
      scrollContainerState: n,
      scrollHeight: d,
      scrollingInProgress: w,
      // signals
      scrollTo: y,
      scrollTop: o,
      skipAnimationFrameInResizeObserver: P,
      smoothScrollTargetReached: s,
      // state
      statefulScrollTop: u,
      viewportHeight: f
    };
  },
  [],
  { singleton: !0 }
), dl = { lvl: 0 };
function Sg(n, o) {
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
  return n === dl;
}
function pl(n, o) {
  if (!at(n))
    return o === n.k ? n.v : o < n.k ? pl(n.l, o) : pl(n.r, o);
}
function Yn(n, o, l = "k") {
  if (at(n))
    return [-1 / 0, void 0];
  if (Number(n[l]) === o)
    return [n.k, n.v];
  if (Number(n[l]) < o) {
    const s = Yn(n.r, o, l);
    return s[0] === -1 / 0 ? [n.k, n.v] : s;
  }
  return Yn(n.l, o, l);
}
function Sn(n, o, l) {
  return at(n) ? Cg(o, l, 1) : o === n.k ? Mt(n, { k: o, v: l }) : o < n.k ? rm(Mt(n, { l: Sn(n.l, o, l) })) : rm(Mt(n, { r: Sn(n.r, o, l) }));
}
function ii() {
  return dl;
}
function fa(n, o, l) {
  if (at(n))
    return [];
  const s = Yn(n, o)[0];
  return gx($c(n, s, l));
}
function Uc(n, o) {
  if (at(n)) return dl;
  const { k: l, l: s, r: u } = n;
  if (o === l) {
    if (at(s))
      return u;
    if (at(u))
      return s;
    {
      const [f, d] = _g(s);
      return Ys(Mt(n, { k: f, l: kg(s), v: d }));
    }
  } else return o < l ? Ys(Mt(n, { l: Uc(s, o) })) : Ys(Mt(n, { r: Uc(u, o) }));
}
function Eo(n) {
  return at(n) ? [] : [...Eo(n.l), { k: n.k, v: n.v }, ...Eo(n.r)];
}
function $c(n, o, l) {
  if (at(n))
    return [];
  const { k: s, l: u, r: f, v: d } = n;
  let p = [];
  return s > o && (p = p.concat($c(u, o, l))), s >= o && s <= l && p.push({ k: s, v: d }), s <= l && (p = p.concat($c(f, o, l))), p;
}
function Ys(n) {
  const { l: o, lvl: l, r: s } = n;
  if (s.lvl >= l - 1 && o.lvl >= l - 1)
    return n;
  if (l > s.lvl + 1) {
    if (dc(o))
      return Eg(Mt(n, { lvl: l - 1 }));
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
      return Vc(Mt(n, { lvl: l - 1 }));
    if (!at(s) && !at(s.l)) {
      const u = s.l, f = dc(u) ? s.lvl - 1 : s.lvl;
      return Mt(u, {
        l: Mt(n, {
          lvl: l - 1,
          r: u.l
        }),
        lvl: u.lvl + 1,
        r: Vc(Mt(s, { l: u.r, lvl: f }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function Mt(n, o) {
  return Cg(
    o.k !== void 0 ? o.k : n.k,
    o.v !== void 0 ? o.v : n.v,
    o.lvl !== void 0 ? o.lvl : n.lvl,
    o.l !== void 0 ? o.l : n.l,
    o.r !== void 0 ? o.r : n.r
  );
}
function kg(n) {
  return at(n.r) ? n.l : Ys(Mt(n, { r: kg(n.r) }));
}
function dc(n) {
  return at(n) || n.lvl > n.r.lvl;
}
function _g(n) {
  return at(n.r) ? [n.k, n.v] : _g(n.r);
}
function Cg(n, o, l, s = dl, u = dl) {
  return { k: n, l: s, lvl: l, r: u, v: o };
}
function rm(n) {
  return Vc(Eg(n));
}
function Eg(n) {
  const { l: o } = n;
  return !at(o) && o.lvl === n.lvl ? Mt(o, { r: Mt(n, { l: o.r }) }) : n;
}
function Vc(n) {
  const { lvl: o, r: l } = n;
  return !at(l) && !at(l.r) && l.lvl === o && l.r.lvl === o ? Mt(l, { l: Mt(n, { r: l.l }), lvl: o + 1 }) : n;
}
function gx(n) {
  return Sg(n, ({ k: o, v: l }) => ({ index: o, value: l }));
}
function Tg(n, o) {
  return !!(n && n.startIndex === o.startIndex && n.endIndex === o.endIndex);
}
function hl(n, o) {
  return !!(n && n[0] === o[0] && n[1] === o[1]);
}
const gf = nt(
  () => ({ recalcInProgress: se(!1) }),
  [],
  { singleton: !0 }
);
function Ig(n, o, l) {
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
function vx(n, o, l, s) {
  const u = Xs(n, o, s), f = Xs(n, l, s, u);
  return n.slice(u, f + 1);
}
function Kn(n, o) {
  return Math.round(n.getBoundingClientRect()[o]);
}
function da(n) {
  return !at(n.groupOffsetTree);
}
function vf({ index: n }, o) {
  return o === n ? 0 : o < n ? -1 : 1;
}
function yx() {
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
function wx(n, o) {
  let l = at(n) ? 0 : 1 / 0;
  for (const s of o) {
    const { endIndex: u, size: f, startIndex: d } = s;
    if (l = Math.min(l, d), at(n)) {
      n = Sn(n, 0, f);
      continue;
    }
    const p = fa(n, d - 1, u + 1);
    if (p.some(Tx(s)))
      continue;
    let g = !1, m = !1;
    for (const { end: v, start: y, value: x } of p)
      g ? (u >= y || f === x) && (n = Uc(n, y)) : (m = x !== f, g = !0), v > u && u >= y && x !== f && (n = Sn(n, u + 1, x));
    m && (n = Sn(n, d, f));
  }
  return [n, l];
}
function xx(n) {
  return typeof n.groupIndex < "u";
}
function Sx({ offset: n }, o) {
  return o === n ? 0 : o < n ? -1 : 1;
}
function ml(n, o, l) {
  if (o.length === 0)
    return 0;
  const { index: s, offset: u, size: f } = Ig(o, n, vf), d = n - s, p = f * d + (d - 1) * l + u;
  return p > 0 ? p + l : p;
}
function Rg(n, o) {
  if (!da(o))
    return n;
  let l = 0;
  for (; o.groupIndices[l] <= n + l; )
    l++;
  return n + l;
}
function Og(n, o, l) {
  if (xx(n))
    return o.groupIndices[n.groupIndex] + 1;
  {
    const s = n.index === "LAST" ? l : n.index;
    let u = Rg(s, o);
    return u = Math.max(0, u, Math.min(l, u)), u;
  }
}
function kx(n, o, l, s = 0) {
  return s > 0 && (o = Math.max(o, Ig(n, s, vf).offset)), Sg(vx(n, o, l, Sx), Ex);
}
function _x(n, [o, l, s, u]) {
  o.length > 0 && s("received item sizes", o, mn.DEBUG);
  const f = n.sizeTree;
  let d = f, p = 0;
  if (l.length > 0 && at(f) && o.length === 2) {
    const x = o[0].size, w = o[1].size;
    d = l.reduce((O, P) => Sn(Sn(O, P, x), P + 1, w), d);
  } else
    [d, p] = wx(d, o);
  if (d === f)
    return n;
  const { lastIndex: g, lastOffset: m, lastSize: v, offsetTree: y } = Yc(n.offsetTree, p, d, u);
  return {
    groupIndices: l,
    groupOffsetTree: l.reduce((x, w) => Sn(x, w, ml(w, y, u)), ii()),
    lastIndex: g,
    lastOffset: m,
    lastSize: v,
    offsetTree: y,
    sizeTree: d
  };
}
function Cx(n) {
  return Eo(n).map(({ k: o, v: l }, s, u) => {
    const f = u[s + 1];
    return { endIndex: f ? f.k - 1 : 1 / 0, size: l, startIndex: o };
  });
}
function om(n, o) {
  let l = 0, s = 0;
  for (; l < n; )
    l += o[s + 1] - o[s] - 1, s++;
  return s - (l === n ? 0 : 1);
}
function Yc(n, o, l, s) {
  let u = n, f = 0, d = 0, p = 0, g = 0;
  if (o !== 0) {
    g = Xs(u, o - 1, vf), p = u[g].offset;
    const m = Yn(l, o - 1);
    f = m[0], d = m[1], u.length && u[g].size === Yn(l, o)[1] && (g -= 1), u = u.slice(0, g + 1);
  } else
    u = [];
  for (const { start: m, value: v } of fa(l, o, 1 / 0)) {
    const y = m - f, x = y * d + p + y * s;
    u.push({
      index: m,
      offset: x,
      size: v
    }), f = m, p = x, d = v;
  }
  return {
    lastIndex: f,
    lastOffset: p,
    lastSize: d,
    offsetTree: u
  };
}
function Ex(n) {
  return { index: n.index, value: n };
}
function Tx(n) {
  const { endIndex: o, size: l, startIndex: s } = n;
  return (u) => u.start === s && (u.end === o || u.end === 1 / 0) && u.value === l;
}
const Ix = {
  offsetHeight: "height",
  offsetWidth: "width"
}, hr = nt(
  ([{ log: n }, { recalcInProgress: o }]) => {
    const l = qe(), s = qe(), u = Zt(s, 0), f = qe(), d = qe(), p = se(0), g = se([]), m = se(void 0), v = se(void 0), y = se((F, N) => Kn(F, Ix[N])), x = se(void 0), w = se(0), O = yx(), P = Zt(
      ee(l, $e(g, n, w), ur(_x, O), gt()),
      O
    ), E = Zt(
      ee(
        g,
        gt(),
        ur((F, N) => ({ current: N, prev: F.current }), {
          current: [],
          prev: []
        }),
        me(({ prev: F }) => F)
      ),
      []
    );
    Te(
      ee(
        g,
        Fe((F) => F.length > 0),
        $e(P, w),
        me(([F, N, B]) => {
          const S = F.reduce((T, L, V) => Sn(T, L, ml(L, N.offsetTree, B) || V), ii());
          return {
            ...N,
            groupIndices: F,
            groupOffsetTree: S
          };
        })
      ),
      P
    ), Te(
      ee(
        s,
        $e(P),
        Fe(([F, { lastIndex: N }]) => F < N),
        me(([F, { lastIndex: N, lastSize: B }]) => [
          {
            endIndex: N,
            size: B,
            startIndex: F
          }
        ])
      ),
      l
    ), Te(m, v);
    const C = Zt(
      ee(
        m,
        me((F) => F === void 0)
      ),
      !0
    );
    Te(
      ee(
        v,
        Fe((F) => F !== void 0 && at(Ut(P).sizeTree)),
        me((F) => [{ endIndex: 0, size: F, startIndex: 0 }])
      ),
      l
    );
    const I = kn(
      ee(
        l,
        $e(P),
        ur(
          ({ sizes: F }, [N, B]) => ({
            changed: B !== F,
            sizes: B
          }),
          { changed: !1, sizes: O }
        ),
        me((F) => F.changed)
      )
    );
    ot(
      ee(
        p,
        ur(
          (F, N) => ({ diff: F.prev - N, prev: N }),
          { diff: 0, prev: 0 }
        ),
        me((F) => F.diff)
      ),
      (F) => {
        const { groupIndices: N } = Ut(P);
        if (F > 0)
          We(o, !0), We(f, F + om(F, N));
        else if (F < 0) {
          const B = Ut(E);
          B.length > 0 && (F -= om(-F, B)), We(d, F);
        }
      }
    ), ot(ee(p, $e(n)), ([F, N]) => {
      F < 0 && N(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: p },
        mn.ERROR
      );
    });
    const D = kn(f);
    Te(
      ee(
        f,
        $e(P),
        me(([F, N]) => {
          const B = N.groupIndices.length > 0, S = [], T = N.lastSize;
          if (B) {
            const L = pl(N.sizeTree, 0);
            let V = 0, Q = 0;
            for (; V < F; ) {
              const K = N.groupIndices[Q], fe = N.groupIndices.length === Q + 1 ? 1 / 0 : N.groupIndices[Q + 1] - K - 1;
              S.push({
                endIndex: K,
                size: L,
                startIndex: K
              }), S.push({
                endIndex: K + 1 + fe - 1,
                size: T,
                startIndex: K + 1
              }), Q++, V += fe + 1;
            }
            const ie = Eo(N.sizeTree);
            return V !== F && ie.shift(), ie.reduce(
              (K, { k: fe, v: we }) => {
                let re = K.ranges;
                return K.prevSize !== 0 && (re = [
                  ...K.ranges,
                  {
                    endIndex: fe + F - 1,
                    size: K.prevSize,
                    startIndex: K.prevIndex
                  }
                ]), {
                  prevIndex: fe + F,
                  prevSize: we,
                  ranges: re
                };
              },
              {
                prevIndex: F,
                prevSize: 0,
                ranges: S
              }
            ).ranges;
          }
          return Eo(N.sizeTree).reduce(
            (L, { k: V, v: Q }) => ({
              prevIndex: V + F,
              prevSize: Q,
              ranges: [...L.ranges, { endIndex: V + F - 1, size: L.prevSize, startIndex: L.prevIndex }]
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
        $e(P, w),
        me(([F, { offsetTree: N }, B]) => {
          const S = -F;
          return ml(S, N, B);
        })
      )
    );
    return Te(
      ee(
        d,
        $e(P, w),
        me(([F, N, B]) => {
          if (N.groupIndices.length > 0) {
            if (at(N.sizeTree))
              return N;
            let S = ii();
            const T = Ut(E);
            let L = 0, V = 0, Q = 0;
            for (; L < -F; ) {
              Q = T[V];
              const ie = T[V + 1] - Q - 1;
              V++, L += ie + 1;
            }
            if (S = Eo(N.sizeTree).reduce((ie, { k: K, v: fe }) => Sn(ie, Math.max(0, K + F), fe), S), L !== -F) {
              const ie = pl(N.sizeTree, Q);
              S = Sn(S, 0, ie);
              const K = Yn(N.sizeTree, -F + 1)[1];
              S = Sn(S, 1, K);
            }
            return {
              ...N,
              sizeTree: S,
              ...Yc(N.offsetTree, 0, S, B)
            };
          } else {
            const S = Eo(N.sizeTree).reduce((T, { k: L, v: V }) => Sn(T, Math.max(0, L + F), V), ii());
            return {
              ...N,
              sizeTree: S,
              ...Yc(N.offsetTree, 0, S, B)
            };
          }
        })
      ),
      P
    ), {
      beforeUnshiftWith: D,
      // input
      data: x,
      defaultItemSize: v,
      firstItemIndex: p,
      fixedItemSize: m,
      gap: w,
      groupIndices: g,
      itemSize: y,
      listRefresh: I,
      shiftWith: d,
      shiftWithOffset: $,
      sizeRanges: l,
      // output
      sizes: P,
      statefulTotalCount: u,
      totalCount: s,
      trackItemSizes: C,
      unshiftWith: f
    };
  },
  yt(lo, gf),
  { singleton: !0 }
);
function Rx(n) {
  return n.reduce(
    (o, l) => (o.groupIndices.push(o.totalCount), o.totalCount += l + 1, o),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Pg = nt(
  ([{ groupIndices: n, sizes: o, totalCount: l }, { headerHeight: s, scrollTop: u }]) => {
    const f = qe(), d = qe(), p = kn(ee(f, me(Rx)));
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
        Fe(([g, m]) => da(m)),
        me(([g, m, v]) => Yn(m.groupOffsetTree, Math.max(g - v, 0), "v")[0]),
        gt(),
        me((g) => [g])
      ),
      d
    ), { groupCounts: f, topItemsIndexes: d };
  },
  yt(hr, ln)
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
), Ox = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function Ag(n) {
  const o = typeof n == "number" ? { index: n } : n;
  return o.align || (o.align = "start"), (!o.behavior || !Ox) && (o.behavior = "auto"), o.offset || (o.offset = 0), o;
}
const Sl = nt(
  ([
    { gap: n, listRefresh: o, sizes: l, totalCount: s },
    {
      fixedFooterHeight: u,
      fixedHeaderHeight: f,
      footerHeight: d,
      headerHeight: p,
      scrollingInProgress: g,
      scrollTo: m,
      smoothScrollTargetReached: v,
      viewportHeight: y
    },
    { log: x }
  ]) => {
    const w = qe(), O = qe(), P = se(0);
    let E = null, C = null, I = null;
    function D() {
      E && (E(), E = null), I && (I(), I = null), C && (clearTimeout(C), C = null), We(g, !1);
    }
    return Te(
      ee(
        w,
        $e(l, y, s, P, p, d, x),
        $e(n, f, u),
        me(
          ([
            [$, F, N, B, S, T, L, V],
            Q,
            ie,
            K
          ]) => {
            const fe = Ag($), { align: we, behavior: re, offset: U } = fe, Y = B - 1, _ = Og(fe, F, Y);
            let z = ml(_, F.offsetTree, Q) + T;
            we === "end" ? (z += ie + Yn(F.sizeTree, _)[1] - N + K, _ === Y && (z += L)) : we === "center" ? z += (ie + Yn(F.sizeTree, _)[1] - N + K) / 2 : z -= S, U && (z += U);
            const G = (q) => {
              D(), q ? (V("retrying to scroll to", { location: $ }, mn.DEBUG), We(w, $)) : (We(O, !0), V("list did not change, scroll successful", {}, mn.DEBUG));
            };
            if (D(), re === "smooth") {
              let q = !1;
              I = ot(o, (de) => {
                q = q || de;
              }), E = fr(v, () => {
                G(q);
              });
            } else
              E = fr(ee(o, Px(150)), G);
            return C = setTimeout(() => {
              D();
            }, 1200), We(g, !0), V("scrolling from index to", { behavior: re, index: _, top: z }, mn.DEBUG), { behavior: re, top: z };
          }
        )
      ),
      m
    ), {
      scrollTargetReached: O,
      scrollToIndex: w,
      topListHeight: P
    };
  },
  yt(hr, ln, lo),
  { singleton: !0 }
);
function Px(n) {
  return (o) => {
    const l = setTimeout(() => {
      o(!1);
    }, n);
    return (s) => {
      s && (o(!0), clearTimeout(l));
    };
  };
}
function yf(n, o) {
  n == 0 ? o() : requestAnimationFrame(() => {
    yf(n - 1, o);
  });
}
function wf(n, o) {
  const l = o - 1;
  return typeof n == "number" ? n : n.index === "LAST" ? l : n.index;
}
const kl = nt(
  ([{ defaultItemSize: n, listRefresh: o, sizes: l }, { scrollTop: s }, { scrollTargetReached: u, scrollToIndex: f }, { didMount: d }]) => {
    const p = se(!0), g = se(0), m = se(!0);
    return Te(
      ee(
        d,
        $e(g),
        Fe(([v, y]) => !!y),
        lr(!1)
      ),
      p
    ), Te(
      ee(
        d,
        $e(g),
        Fe(([v, y]) => !!y),
        lr(!1)
      ),
      m
    ), ot(
      ee(
        Dt(o, d),
        $e(p, l, n, m),
        Fe(([[, v], y, { sizeTree: x }, w, O]) => v && (!at(x) || df(w)) && !y && !O),
        $e(g)
      ),
      ([, v]) => {
        fr(u, () => {
          We(m, !0);
        }), yf(4, () => {
          fr(s, () => {
            We(p, !0);
          }), We(f, v);
        });
      }
    ), {
      initialItemFinalLocationReached: m,
      initialTopMostItemIndex: g,
      scrolledToInitialItem: p
    };
  },
  yt(hr, ln, Sl, so),
  { singleton: !0 }
);
function Lg(n, o) {
  return Math.abs(n - o) < 1.01;
}
const gl = "up", sl = "down", Ax = "none", Lx = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, zx = 0, _l = nt(([{ footerHeight: n, headerHeight: o, scrollBy: l, scrollContainerState: s, scrollTop: u, viewportHeight: f }]) => {
  const d = se(!1), p = se(!0), g = qe(), m = qe(), v = se(4), y = se(zx), x = Zt(
    ee(
      tm(ee(Me(u), ai(1), lr(!0)), ee(Me(u), ai(1), lr(!1), em(100))),
      gt()
    ),
    !1
  ), w = Zt(
    ee(tm(ee(l, lr(!0)), ee(l, lr(!1), em(200))), gt()),
    !1
  );
  Te(
    ee(
      Dt(Me(u), Me(y)),
      me(([I, D]) => I <= D),
      gt()
    ),
    p
  ), Te(ee(p, Zr(50)), m);
  const O = kn(
    ee(
      Dt(s, Me(f), Me(o), Me(n), Me(v)),
      ur((I, [{ scrollHeight: D, scrollTop: $ }, F, N, B, S]) => {
        const T = $ + F - D > -S, L = {
          scrollHeight: D,
          scrollTop: $,
          viewportHeight: F
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
        return L.scrollHeight > I.state.scrollHeight ? V = "SIZE_INCREASED" : F < I.state.viewportHeight ? V = "VIEWPORT_HEIGHT_DECREASING" : $ < I.state.scrollTop ? V = "SCROLLING_UPWARDS" : V = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: V,
          state: L
        };
      }, Lx),
      gt((I, D) => I && I.atBottom === D.atBottom)
    )
  ), P = Zt(
    ee(
      s,
      ur(
        (I, { scrollHeight: D, scrollTop: $, viewportHeight: F }) => {
          if (Lg(I.scrollHeight, D))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: D,
              scrollTop: $
            };
          {
            const N = D - ($ + F) < 1;
            return I.scrollTop !== $ && N ? {
              changed: !0,
              jump: I.scrollTop - $,
              scrollHeight: D,
              scrollTop: $
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: D,
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
      O,
      me((I) => I.atBottom)
    ),
    d
  ), Te(ee(d, Zr(50)), g);
  const E = se(sl);
  Te(
    ee(
      s,
      me(({ scrollTop: I }) => I),
      gt(),
      ur(
        (I, D) => Ut(w) ? { direction: I.direction, prevScrollTop: D } : { direction: D < I.prevScrollTop ? gl : sl, prevScrollTop: D },
        { direction: sl, prevScrollTop: 0 }
      ),
      me((I) => I.direction)
    ),
    E
  ), Te(ee(s, Zr(50), lr(Ax)), E);
  const C = se(0);
  return Te(
    ee(
      x,
      Fe((I) => !I),
      lr(0)
    ),
    C
  ), Te(
    ee(
      u,
      Zr(100),
      $e(x),
      Fe(([I, D]) => !!D),
      ur(([I, D], [$]) => [D, $], [0, 0]),
      me(([I, D]) => D - I)
    ),
    C
  ), {
    atBottomState: O,
    atBottomStateChange: g,
    atBottomThreshold: v,
    atTopStateChange: m,
    atTopThreshold: y,
    isAtBottom: d,
    isAtTop: p,
    isScrolling: x,
    lastJumpDueToItemResize: P,
    scrollDirection: E,
    scrollVelocity: C
  };
}, yt(ln)), Zs = "top", Js = "bottom", im = "none";
function lm(n, o, l) {
  return typeof n == "number" ? l === gl && o === Zs || l === sl && o === Js ? n : 0 : l === gl ? o === Zs ? n.main : n.reverse : o === Js ? n.main : n.reverse;
}
function sm(n, o) {
  var l;
  return typeof n == "number" ? n : (l = n[o]) != null ? l : 0;
}
const xf = nt(
  ([{ deviation: n, fixedHeaderHeight: o, headerHeight: l, scrollTop: s, viewportHeight: u }]) => {
    const f = qe(), d = se(0), p = se(0), g = se(0), m = Zt(
      ee(
        Dt(
          Me(s),
          Me(u),
          Me(l),
          Me(f, hl),
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
            x,
            [w, O],
            P,
            E,
            C,
            I,
            D
          ]) => {
            const $ = v - I, F = E + C, N = Math.max(x - $, 0);
            let B = im;
            const S = sm(D, Zs), T = sm(D, Js);
            return w -= I, w += x + C, O += x + C, O -= I, w > v + F - S && (B = gl), O < v - N + y + T && (B = sl), B !== im ? [
              Math.max($ - x - lm(P, Zs, B) - S, 0),
              $ - N - C + y + lm(P, Js, B) + T
            ] : null;
          }
        ),
        Fe((v) => v != null),
        gt(hl)
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
      visibleRange: m
    };
  },
  yt(ln),
  { singleton: !0 }
);
function Nx(n, o, l) {
  if (da(o)) {
    const s = Rg(n, o);
    return [
      { index: Yn(o.groupOffsetTree, s)[0], offset: 0, size: 0 },
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
  let m = 0, v = 0;
  if (n.length > 0) {
    m = n[0].offset;
    const P = n[n.length - 1];
    v = P.offset + P.size;
  }
  const y = l - d, x = p + y * g + (y - 1) * s, w = m, O = x - v;
  return {
    bottom: v,
    firstItemIndex: f,
    items: am(n, u, f),
    offsetBottom: O,
    offsetTop: m,
    top: w,
    topItems: am(o, u, f),
    topListHeight: o.reduce((P, E) => E.size + P, 0),
    totalCount: l
  };
}
function zg(n, o, l, s, u, f) {
  let d = 0;
  if (l.groupIndices.length > 0)
    for (const v of l.groupIndices) {
      if (v - d >= n)
        break;
      d++;
    }
  const p = n + d, g = wf(o, p), m = Array.from({ length: p }).map((v, y) => ({
    data: f[y + g],
    index: y + g,
    offset: 0,
    size: 0
  }));
  return Ks(m, [], p, u, l, s);
}
function am(n, o, l) {
  if (n.length === 0)
    return [];
  if (!da(o))
    return n.map((m) => ({ ...m, index: m.index + l, originalIndex: m.index }));
  const s = n[0].index, u = n[n.length - 1].index, f = [], d = fa(o.groupOffsetTree, s, u);
  let p, g = 0;
  for (const m of n) {
    (!p || p.end < m.index) && (p = d.shift(), g = o.groupIndices.indexOf(p.start));
    let v;
    m.index === p.start ? v = {
      index: g,
      type: "group"
    } : v = {
      groupIndex: g,
      index: m.index - (g + 1) + l
    }, f.push({
      ...v,
      data: m.data,
      offset: m.offset,
      originalIndex: m.index,
      size: m.size
    });
  }
  return f;
}
const Ao = nt(
  ([
    { data: n, firstItemIndex: o, gap: l, sizes: s, totalCount: u },
    f,
    { listBoundary: d, topListHeight: p, visibleRange: g },
    { initialTopMostItemIndex: m, scrolledToInitialItem: v },
    { topListHeight: y },
    x,
    { didMount: w },
    { recalcInProgress: O }
  ]) => {
    const P = se([]), E = se(0), C = qe();
    Te(f.topItemsIndexes, P);
    const I = Zt(
      ee(
        Dt(
          w,
          O,
          Me(g, hl),
          Me(u),
          Me(s),
          Me(m),
          v,
          Me(P),
          Me(o),
          Me(l),
          n
        ),
        Fe(([N, B, , S, , , , , , , T]) => {
          const L = T && T.length !== S;
          return N && !B && !L;
        }),
        me(
          ([
            ,
            ,
            [N, B],
            S,
            T,
            L,
            V,
            Q,
            ie,
            K,
            fe
          ]) => {
            const we = T, { offsetTree: re, sizeTree: U } = we, Y = Ut(E);
            if (S === 0)
              return { ...pc, totalCount: S };
            if (N === 0 && B === 0)
              return Y === 0 ? { ...pc, totalCount: S } : zg(Y, L, T, ie, K, fe || []);
            if (at(U))
              return Y > 0 ? null : Ks(
                Nx(wf(L, S), we, fe),
                [],
                S,
                K,
                we,
                ie
              );
            const _ = [];
            if (Q.length > 0) {
              const ke = Q[0], ge = Q[Q.length - 1];
              let Ee = 0;
              for (const M of fa(U, ke, ge)) {
                const oe = M.value, xe = Math.max(M.start, ke), pe = Math.min(M.end, ge);
                for (let Ie = xe; Ie <= pe; Ie++)
                  _.push({ data: fe == null ? void 0 : fe[Ie], index: Ie, offset: Ee, size: oe }), Ee += oe;
              }
            }
            if (!V)
              return Ks([], _, S, K, we, ie);
            const z = Q.length > 0 ? Q[Q.length - 1] + 1 : 0, G = kx(re, N, B, z);
            if (G.length === 0)
              return null;
            const q = S - 1, de = ca([], (ke) => {
              for (const ge of G) {
                const Ee = ge.value;
                let M = Ee.offset, oe = ge.start;
                const xe = Ee.size;
                if (Ee.offset < N) {
                  oe += Math.floor((N - Ee.offset + K) / (xe + K));
                  const Ie = oe - ge.start;
                  M += Ie * xe + Ie * K;
                }
                oe < z && (M += (z - oe) * xe, oe = z);
                const pe = Math.min(ge.end, q);
                for (let Ie = oe; Ie <= pe && !(M >= B); Ie++)
                  ke.push({ data: fe == null ? void 0 : fe[Ie], index: Ie, offset: M, size: xe }), M += xe + K;
              }
            });
            return Ks(de, _, S, K, we, ie);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        Fe((N) => N !== null),
        gt()
      ),
      pc
    );
    Te(
      ee(
        n,
        Fe(df),
        me((N) => N == null ? void 0 : N.length)
      ),
      u
    ), Te(
      ee(
        I,
        me((N) => N.topListHeight)
      ),
      y
    ), Te(y, p), Te(
      ee(
        I,
        me((N) => [N.top, N.bottom])
      ),
      d
    ), Te(
      ee(
        I,
        me((N) => N.items)
      ),
      C
    );
    const D = kn(
      ee(
        I,
        Fe(({ items: N }) => N.length > 0),
        $e(u, n),
        Fe(([{ items: N }, B]) => N[N.length - 1].originalIndex === B - 1),
        me(([, N, B]) => [N - 1, B]),
        gt(hl),
        me(([N]) => N)
      )
    ), $ = kn(
      ee(
        I,
        Zr(200),
        Fe(({ items: N, topItems: B }) => N.length > 0 && N[0].originalIndex === B.length),
        me(({ items: N }) => N[0].index),
        gt()
      )
    ), F = kn(
      ee(
        I,
        Fe(({ items: N }) => N.length > 0),
        me(({ items: N }) => {
          let B = 0, S = N.length - 1;
          for (; N[B].type === "group" && B < S; )
            B++;
          for (; N[S].type === "group" && S > B; )
            S--;
          return {
            endIndex: N[S].index,
            startIndex: N[B].index
          };
        }),
        gt(Tg)
      )
    );
    return { endReached: D, initialItemCount: E, itemsRendered: C, listState: I, rangeChanged: F, startReached: $, topItemsIndexes: P, ...x };
  },
  yt(
    hr,
    Pg,
    xf,
    kl,
    Sl,
    _l,
    so,
    gf
  ),
  { singleton: !0 }
), Ng = nt(
  ([{ fixedFooterHeight: n, fixedHeaderHeight: o, footerHeight: l, headerHeight: s }, { listState: u }]) => {
    const f = qe(), d = Zt(
      ee(
        Dt(l, n, s, o, u),
        me(([p, g, m, v, y]) => p + g + m + v + y.offsetBottom + y.bottom)
      ),
      0
    );
    return Te(Me(d), f), { totalListHeight: d, totalListHeightChanged: f };
  },
  yt(ln, Ao),
  { singleton: !0 }
), bx = nt(
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
  yt(ln, Ng),
  { singleton: !0 }
);
function um(n) {
  return n ? n === "smooth" ? "smooth" : "auto" : !1;
}
const jx = (n, o) => typeof n == "function" ? um(n(o)) : o && um(n), Fx = nt(
  ([
    { listRefresh: n, totalCount: o, fixedItemSize: l },
    { atBottomState: s, isAtBottom: u },
    { scrollToIndex: f },
    { scrolledToInitialItem: d },
    { didMount: p, propsReady: g },
    { log: m },
    { scrollingInProgress: v }
  ]) => {
    const y = se(!1), x = qe();
    let w = null;
    function O(E) {
      We(f, {
        align: "end",
        behavior: E,
        index: "LAST"
      });
    }
    ot(
      ee(
        Dt(ee(Me(o), ai(1)), p),
        $e(Me(y), u, d, v),
        me(([[E, C], I, D, $, F]) => {
          let N = C && $, B = "auto";
          return N && (B = jx(I, D || F), N = N && !!B), { followOutputBehavior: B, shouldFollow: N, totalCount: E };
        }),
        Fe(({ shouldFollow: E }) => E)
      ),
      ({ followOutputBehavior: E, totalCount: C }) => {
        w && (w(), w = null), Ut(l) ? requestAnimationFrame(() => {
          Ut(m)("following output to ", { totalCount: C }, mn.DEBUG), O(E);
        }) : w = fr(n, () => {
          Ut(m)("following output to ", { totalCount: C }, mn.DEBUG), O(E), w = null;
        });
      }
    );
    function P(E) {
      const C = fr(s, (I) => {
        E && !I.atBottom && I.notAtBottomBecause === "SIZE_INCREASED" && !w && (Ut(m)("scrolling to bottom due to increased size", {}, mn.DEBUG), O("auto"));
      });
      setTimeout(C, 100);
    }
    return ot(
      ee(
        Dt(Me(y), o, g),
        Fe(([E, , C]) => E && C),
        ur(
          ({ value: E }, [, C]) => ({ refreshed: E === C, value: C }),
          { refreshed: !1, value: 0 }
        ),
        Fe(({ refreshed: E }) => E),
        $e(y, o)
      ),
      ([, E]) => {
        Ut(d) && P(E !== !1);
      }
    ), ot(x, () => {
      P(Ut(y) !== !1);
    }), ot(Dt(Me(y), s), ([E, C]) => {
      E && !C.atBottom && C.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && O("auto");
    }), { autoscrollToBottom: x, followOutput: y };
  },
  yt(hr, _l, Sl, kl, so, lo, ln)
), Mx = nt(
  ([{ data: n, firstItemIndex: o, gap: l, sizes: s }, { initialTopMostItemIndex: u }, { initialItemCount: f, listState: d }, { didMount: p }]) => (Te(
    ee(
      p,
      $e(f),
      Fe(([, g]) => g !== 0),
      $e(u, s, o, l, n),
      me(([[, g], m, v, y, x, w = []]) => zg(g, m, v, y, x, w))
    ),
    d
  ), {}),
  yt(hr, kl, Ao, so),
  { singleton: !0 }
), Dx = nt(
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
        fr(
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
  yt(so, ln, Ao),
  { singleton: !0 }
), Hx = ({
  itemBottom: n,
  itemTop: o,
  locationParams: { align: l, behavior: s, ...u },
  viewportBottom: f,
  viewportTop: d
}) => o < d ? { ...u, align: l ?? "start", behavior: s } : n > f ? { ...u, align: l ?? "end", behavior: s } : null, Bx = nt(
  ([
    { gap: n, sizes: o, totalCount: l },
    { fixedFooterHeight: s, fixedHeaderHeight: u, headerHeight: f, scrollingInProgress: d, scrollTop: p, viewportHeight: g },
    { scrollToIndex: m }
  ]) => {
    const v = qe();
    return Te(
      ee(
        v,
        $e(o, g, l, f, u, s, p),
        $e(n),
        me(([[y, x, w, O, P, E, C, I], D]) => {
          const { align: $, behavior: F, calculateViewLocation: N = Hx, done: B, ...S } = y, T = Og(y, x, O - 1), L = ml(T, x.offsetTree, D) + P + E, V = L + Yn(x.sizeTree, T)[1], Q = I + E, ie = I + w - C, K = N({
            itemBottom: V,
            itemTop: L,
            locationParams: { align: $, behavior: F, ...S },
            viewportBottom: ie,
            viewportTop: Q
          });
          return K ? B && fr(
            ee(
              d,
              Fe((fe) => !fe),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              ai(Ut(d) ? 1 : 2)
            ),
            B
          ) : B && B(), K;
        }),
        Fe((y) => y !== null)
      ),
      m
    ), {
      scrollIntoView: v
    };
  },
  yt(hr, ln, Sl, Ao, lo),
  { singleton: !0 }
), bg = nt(
  ([{ scrollVelocity: n }]) => {
    const o = se(!1), l = qe(), s = se(!1);
    return Te(
      ee(
        n,
        $e(s, o, l),
        Fe(([u, f]) => !!f),
        me(([u, f, d, p]) => {
          const { enter: g, exit: m } = f;
          if (d) {
            if (m(u, p))
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
  yt(_l),
  { singleton: !0 }
), Sf = nt(([{ scrollContainerState: n, scrollTo: o }]) => {
  const l = qe(), s = qe(), u = qe(), f = se(!1), d = se(void 0);
  return Te(
    ee(
      Dt(l, s),
      me(([{ scrollHeight: p, scrollTop: g, viewportHeight: m }, { offsetTop: v }]) => ({
        scrollHeight: p,
        scrollTop: Math.max(0, g - v),
        viewportHeight: m
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
}, yt(ln)), Wx = nt(
  ([
    { sizeRanges: n, sizes: o },
    { headerHeight: l, scrollTop: s },
    { initialTopMostItemIndex: u },
    { didMount: f },
    { useWindowScroll: d, windowScrollContainerState: p, windowViewportRect: g }
  ]) => {
    const m = qe(), v = se(void 0), y = se(null), x = se(null);
    return Te(p, y), Te(g, x), ot(
      ee(
        m,
        $e(o, s, d, y, x, l)
      ),
      ([w, O, P, E, C, I, D]) => {
        const $ = Cx(O.sizeTree);
        E && C !== null && I !== null && (P = C.scrollTop - I.offsetTop), P -= D, w({ ranges: $, scrollTop: P });
      }
    ), Te(ee(v, Fe(df), me(Ux)), u), Te(
      ee(
        f,
        $e(v),
        Fe(([, w]) => w !== void 0),
        gt(),
        me(([, w]) => w.ranges)
      ),
      n
    ), {
      getState: m,
      restoreStateFrom: v
    };
  },
  yt(hr, ln, kl, so, Sf)
);
function Ux(n) {
  return { align: "start", index: 0, offset: n.scrollTop };
}
const $x = nt(([{ topItemsIndexes: n }]) => {
  const o = se(0);
  return Te(
    ee(
      o,
      Fe((l) => l >= 0),
      me((l) => Array.from({ length: l }).map((s, u) => u))
    ),
    n
  ), { topItemCount: o };
}, yt(Ao));
function jg(n) {
  let o = !1, l;
  return () => (o || (o = !0, l = n()), l);
}
const Vx = jg(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Yx = nt(
  ([
    { deviation: n, scrollBy: o, scrollingInProgress: l, scrollTop: s },
    { isAtBottom: u, isScrolling: f, lastJumpDueToItemResize: d, scrollDirection: p },
    { listState: g },
    { beforeUnshiftWith: m, gap: v, shiftWithOffset: y, sizes: x },
    { log: w },
    { recalcInProgress: O }
  ]) => {
    const P = kn(
      ee(
        g,
        $e(d),
        ur(
          ([, C, I, D], [{ bottom: $, items: F, offsetBottom: N, totalCount: B }, S]) => {
            const T = $ + N;
            let L = 0;
            return I === B && C.length > 0 && F.length > 0 && (F[0].originalIndex === 0 && C[0].originalIndex === 0 || (L = T - D, L !== 0 && (L += S))), [L, F, B, T];
          },
          [0, [], 0, 0]
        ),
        Fe(([C]) => C !== 0),
        $e(s, p, l, u, w, O),
        Fe(([, C, I, D, , , $]) => !$ && !D && C !== 0 && I === gl),
        me(([[C], , , , , I]) => (I("Upward scrolling compensation", { amount: C }, mn.DEBUG), C))
      )
    );
    function E(C) {
      C > 0 ? (We(o, { behavior: "auto", top: -C }), We(n, 0)) : (We(n, 0), We(o, { behavior: "auto", top: -C }));
    }
    return ot(ee(P, $e(n, f)), ([C, I, D]) => {
      D && Vx() ? We(n, I - C) : E(-C);
    }), ot(
      ee(
        Dt(Zt(f, !1), n, O),
        Fe(([C, I, D]) => !C && !D && I !== 0),
        me(([C, I]) => I),
        Zr(1)
      ),
      E
    ), Te(
      ee(
        y,
        me((C) => ({ top: -C }))
      ),
      o
    ), ot(
      ee(
        m,
        $e(x, v),
        me(([C, { groupIndices: I, lastSize: D, sizeTree: $ }, F]) => {
          function N(B) {
            return B * (D + F);
          }
          if (I.length === 0)
            return N(C);
          {
            let B = 0;
            const S = pl($, 0);
            let T = 0, L = 0;
            for (; T < C; ) {
              T++, B += S;
              let V = I.length === L + 1 ? 1 / 0 : I[L + 1] - I[L] - 1;
              T + V > C && (B -= S, V = C - T + 1), T += V, B += N(V), L++;
            }
            return B;
          }
        })
      ),
      (C) => {
        We(n, C), requestAnimationFrame(() => {
          We(o, { top: C }), requestAnimationFrame(() => {
            We(n, 0), We(O, !1);
          });
        });
      }
    ), { deviation: n };
  },
  yt(ln, _l, Ao, hr, lo, gf)
), Kx = nt(
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
    m
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
    ...m
  }),
  yt(
    xf,
    Mx,
    so,
    bg,
    Ng,
    Dx,
    bx,
    Sf,
    Bx,
    lo
  )
), Fg = nt(
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
      statefulTotalCount: m,
      totalCount: v,
      trackItemSizes: y
    },
    { initialItemFinalLocationReached: x, initialTopMostItemIndex: w, scrolledToInitialItem: O },
    P,
    E,
    C,
    { listState: I, topItemsIndexes: D, ...$ },
    { scrollToIndex: F },
    N,
    { topItemCount: B },
    { groupCounts: S },
    T
  ]) => (Te($.rangeChanged, T.scrollSeekRangeChanged), Te(
    ee(
      T.windowViewportRect,
      me((L) => L.visibleHeight)
    ),
    P.viewportHeight
  ), {
    data: n,
    defaultItemHeight: o,
    firstItemIndex: l,
    fixedItemHeight: s,
    gap: u,
    groupCounts: S,
    initialItemFinalLocationReached: x,
    initialTopMostItemIndex: w,
    scrolledToInitialItem: O,
    sizeRanges: p,
    topItemCount: B,
    topItemsIndexes: D,
    // input
    totalCount: v,
    ...C,
    groupIndices: f,
    itemSize: d,
    listState: I,
    scrollToIndex: F,
    // output
    statefulTotalCount: m,
    trackItemSizes: y,
    // exported from stateFlagsSystem
    ...$,
    // the bag of IO from featureGroup1System
    ...T,
    ...P,
    sizes: g,
    ...E
  }),
  yt(
    hr,
    kl,
    ln,
    Wx,
    Fx,
    Ao,
    Sl,
    Yx,
    $x,
    Pg,
    Kx
  )
);
function Qx(n, o) {
  const l = {}, s = {};
  let u = 0;
  const f = n.length;
  for (; u < f; )
    s[n[u]] = 1, u += 1;
  for (const d in o)
    Object.hasOwn(s, d) || (l[d] = o[d]);
  return l;
}
const Hs = typeof document < "u" ? ae.useLayoutEffect : ae.useEffect;
function kf(n, o, l) {
  const s = Object.keys(o.required || {}), u = Object.keys(o.optional || {}), f = Object.keys(o.methods || {}), d = Object.keys(o.events || {}), p = ae.createContext({});
  function g(E, C) {
    E.propsReady && We(E.propsReady, !1);
    for (const I of s) {
      const D = E[o.required[I]];
      We(D, C[I]);
    }
    for (const I of u)
      if (I in C) {
        const D = E[o.optional[I]];
        We(D, C[I]);
      }
    E.propsReady && We(E.propsReady, !0);
  }
  function m(E) {
    return f.reduce((C, I) => (C[I] = (D) => {
      const $ = E[o.methods[I]];
      We($, D);
    }, C), {});
  }
  function v(E) {
    return d.reduce((C, I) => (C[I] = cx(E[o.events[I]]), C), {});
  }
  const y = ae.forwardRef((E, C) => {
    const { children: I, ...D } = E, [$] = ae.useState(() => ca(dx(n), (B) => {
      g(B, D);
    })), [F] = ae.useState(Jh(v, $));
    Hs(() => {
      for (const B of d)
        B in D && ot(F[B], D[B]);
      return () => {
        Object.values(F).map(pf);
      };
    }, [D, F, $]), Hs(() => {
      g($, D);
    }), ae.useImperativeHandle(C, Zh(m($)));
    const N = l;
    return /* @__PURE__ */ j.jsx(p.Provider, { value: $, children: l ? /* @__PURE__ */ j.jsx(N, { ...Qx([...s, ...u, ...d], D), children: I }) : I });
  }), x = (E) => {
    const C = ae.useContext(p);
    return ae.useCallback(
      (I) => {
        We(C[E], I);
      },
      [C, E]
    );
  }, w = (E) => {
    const C = ae.useContext(p)[E], I = ae.useCallback(
      (D) => ot(C, D),
      [C]
    );
    return ae.useSyncExternalStore(
      I,
      () => Ut(C),
      () => Ut(C)
    );
  }, O = (E) => {
    const C = ae.useContext(p)[E], [I, D] = ae.useState(Jh(Ut, C));
    return Hs(
      () => ot(C, ($) => {
        $ !== I && D(Zh($));
      }),
      [C, I]
    ), I;
  }, P = ae.version.startsWith("18") ? w : O;
  return {
    Component: y,
    useEmitter: (E, C) => {
      const I = ae.useContext(p)[E];
      Hs(() => ot(I, C), [C, I]);
    },
    useEmitterValue: P,
    usePublisher: x
  };
}
const pa = ae.createContext(void 0), Mg = ae.createContext(void 0), Dg = typeof document < "u" ? ae.useLayoutEffect : ae.useEffect;
function hc(n) {
  return "self" in n;
}
function Gx(n) {
  return "body" in n;
}
function Hg(n, o, l, s = pi, u, f) {
  const d = ae.useRef(null), p = ae.useRef(null), g = ae.useRef(null), m = ae.useCallback(
    (x) => {
      let w, O, P;
      const E = x.target;
      if (Gx(E) || hc(E)) {
        const I = hc(E) ? E : E.defaultView;
        P = f ? I.scrollX : I.scrollY, w = f ? I.document.documentElement.scrollWidth : I.document.documentElement.scrollHeight, O = f ? I.innerWidth : I.innerHeight;
      } else
        P = f ? E.scrollLeft : E.scrollTop, w = f ? E.scrollWidth : E.scrollHeight, O = f ? E.offsetWidth : E.offsetHeight;
      const C = () => {
        n({
          scrollHeight: w,
          scrollTop: Math.max(P, 0),
          viewportHeight: O
        });
      };
      x.suppressFlushSync ? C() : ox.flushSync(C), p.current !== null && (P === p.current || P <= 0 || P === w - O) && (p.current = null, o(!0), g.current && (clearTimeout(g.current), g.current = null));
    },
    [n, o, f]
  );
  ae.useEffect(() => {
    const x = u || d.current;
    return s(u || d.current), m({ suppressFlushSync: !0, target: x }), x.addEventListener("scroll", m, { passive: !0 }), () => {
      s(null), x.removeEventListener("scroll", m);
    };
  }, [d, m, l, s, u]);
  function v(x) {
    const w = d.current;
    if (!w || (f ? "offsetWidth" in w && w.offsetWidth === 0 : "offsetHeight" in w && w.offsetHeight === 0))
      return;
    const O = x.behavior === "smooth";
    let P, E, C;
    hc(w) ? (E = Math.max(
      Kn(w.document.documentElement, f ? "width" : "height"),
      f ? w.document.documentElement.scrollWidth : w.document.documentElement.scrollHeight
    ), P = f ? w.innerWidth : w.innerHeight, C = f ? window.scrollX : window.scrollY) : (E = w[f ? "scrollWidth" : "scrollHeight"], P = Kn(w, f ? "width" : "height"), C = w[f ? "scrollLeft" : "scrollTop"]);
    const I = E - P;
    if (x.top = Math.ceil(Math.max(Math.min(I, x.top), 0)), Lg(P, E) || x.top === C) {
      n({ scrollHeight: E, scrollTop: C, viewportHeight: P }), O && o(!0);
      return;
    }
    O ? (p.current = x.top, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
      g.current = null, p.current = null, o(!0);
    }, 1e3)) : p.current = null, f && (x = { behavior: x.behavior, left: x.top }), w.scrollTo(x);
  }
  function y(x) {
    f && (x = { behavior: x.behavior, left: x.top }), d.current.scrollBy(x);
  }
  return { scrollByCallback: y, scrollerRef: d, scrollToCallback: v };
}
const mc = "-webkit-sticky", cm = "sticky", _f = jg(() => {
  if (typeof document > "u")
    return cm;
  const n = document.createElement("div");
  return n.style.position = mc, n.style.position === mc ? mc : cm;
});
function Cf(n) {
  return n;
}
const qx = /* @__PURE__ */ nt(() => {
  const n = se((g) => `Item ${g}`), o = se(null), l = se((g) => `Group ${g}`), s = se({}), u = se(Cf), f = se("div"), d = se(pi), p = (g, m = null) => Zt(
    ee(
      s,
      me((v) => v[g]),
      gt()
    ),
    m
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
}), Xx = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(Fg, qx)
), Zx = ({ height: n }) => /* @__PURE__ */ j.jsx("div", { style: { height: n } }), Jx = { overflowAnchor: "none", position: _f(), zIndex: 1 }, Bg = { overflowAnchor: "none" }, eS = { ...Bg, display: "inline-block", height: "100%" }, fm = /* @__PURE__ */ ae.memo(function({ showTopList: n = !1 }) {
  const o = De("listState"), l = zn("sizeRanges"), s = De("useWindowScroll"), u = De("customScrollParent"), f = zn("windowScrollContainerState"), d = zn("scrollContainerState"), p = u || s ? f : d, g = De("itemContent"), m = De("context"), v = De("groupContent"), y = De("trackItemSizes"), x = De("itemSize"), w = De("log"), O = zn("gap"), P = De("horizontalDirection"), { callbackRef: E } = xg(
    l,
    x,
    y,
    n ? pi : p,
    w,
    O,
    u,
    P,
    De("skipAnimationFrameInResizeObserver")
  ), [C, I] = ae.useState(0);
  If("deviation", (K) => {
    C !== K && I(K);
  });
  const D = De("EmptyPlaceholder"), $ = De("ScrollSeekPlaceholder") || Zx, F = De("ListComponent"), N = De("ItemComponent"), B = De("GroupComponent"), S = De("computeItemKey"), T = De("isSeeking"), L = De("groupIndices").length > 0, V = De("alignToBottom"), Q = De("initialItemFinalLocationReached"), ie = n ? {} : {
    boxSizing: "border-box",
    ...P ? {
      display: "inline-block",
      height: "100%",
      marginLeft: C !== 0 ? C : V ? "auto" : 0,
      paddingLeft: o.offsetTop,
      paddingRight: o.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: C !== 0 ? C : V ? "auto" : 0,
      paddingBottom: o.offsetBottom,
      paddingTop: o.offsetTop
    },
    ...Q ? {} : { visibility: "hidden" }
  };
  return !n && o.totalCount === 0 && D ? /* @__PURE__ */ j.jsx(D, { ...dt(D, m) }) : /* @__PURE__ */ j.jsx(
    F,
    {
      ...dt(F, m),
      "data-testid": n ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: E,
      style: ie,
      children: (n ? o.topItems : o.items).map((K) => {
        const fe = K.originalIndex, we = S(fe + o.firstItemIndex, K.data, m);
        return T ? /* @__PURE__ */ te.createElement(
          $,
          {
            ...dt($, m),
            height: K.size,
            index: K.index,
            key: we,
            type: K.type || "item",
            ...K.type === "group" ? {} : { groupIndex: K.groupIndex }
          }
        ) : K.type === "group" ? /* @__PURE__ */ te.createElement(
          B,
          {
            ...dt(B, m),
            "data-index": fe,
            "data-item-index": K.index,
            "data-known-size": K.size,
            key: we,
            style: Jx
          },
          v(K.index, m)
        ) : /* @__PURE__ */ te.createElement(
          N,
          {
            ...dt(N, m),
            ...Wg(N, K.data),
            "data-index": fe,
            "data-item-group-index": K.groupIndex,
            "data-item-index": K.index,
            "data-known-size": K.size,
            key: we,
            style: P ? eS : Bg
          },
          L ? g(K.index, K.groupIndex, K.data, m) : g(K.index, K.data, m)
        );
      })
    }
  );
}), tS = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, nS = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, hi = (n) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...n ? { display: "flex", flexDirection: "column" } : {}
}), rS = {
  position: _f(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function dt(n, o) {
  if (typeof n != "string")
    return { context: o };
}
function Wg(n, o) {
  return { item: typeof n == "string" ? void 0 : o };
}
const oS = /* @__PURE__ */ ae.memo(function() {
  const n = De("HeaderComponent"), o = zn("headerHeight"), l = De("HeaderFooterTag"), s = dr(
    ae.useMemo(
      () => (f) => {
        o(Kn(f, "height"));
      },
      [o]
    ),
    !0,
    De("skipAnimationFrameInResizeObserver")
  ), u = De("context");
  return n ? /* @__PURE__ */ j.jsx(l, { ref: s, children: /* @__PURE__ */ j.jsx(n, { ...dt(n, u) }) }) : null;
}), iS = /* @__PURE__ */ ae.memo(function() {
  const n = De("FooterComponent"), o = zn("footerHeight"), l = De("HeaderFooterTag"), s = dr(
    ae.useMemo(
      () => (f) => {
        o(Kn(f, "height"));
      },
      [o]
    ),
    !0,
    De("skipAnimationFrameInResizeObserver")
  ), u = De("context");
  return n ? /* @__PURE__ */ j.jsx(l, { ref: s, children: /* @__PURE__ */ j.jsx(n, { ...dt(n, u) }) }) : null;
});
function Ef({ useEmitter: n, useEmitterValue: o, usePublisher: l }) {
  return ae.memo(function({ children: s, style: u, ...f }) {
    const d = l("scrollContainerState"), p = o("ScrollerComponent"), g = l("smoothScrollTargetReached"), m = o("scrollerRef"), v = o("context"), y = o("horizontalDirection") || !1, { scrollByCallback: x, scrollerRef: w, scrollToCallback: O } = Hg(
      d,
      g,
      p,
      m,
      void 0,
      y
    );
    return n("scrollTo", O), n("scrollBy", x), /* @__PURE__ */ j.jsx(
      p,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: w,
        style: { ...y ? nS : tS, ...u },
        tabIndex: 0,
        ...f,
        ...dt(p, v),
        children: s
      }
    );
  });
}
function Tf({ useEmitter: n, useEmitterValue: o, usePublisher: l }) {
  return ae.memo(function({ children: s, style: u, ...f }) {
    const d = l("windowScrollContainerState"), p = o("ScrollerComponent"), g = l("smoothScrollTargetReached"), m = o("totalListHeight"), v = o("deviation"), y = o("customScrollParent"), x = o("context"), w = ae.useRef(null), O = o("scrollerRef"), { scrollByCallback: P, scrollerRef: E, scrollToCallback: C } = Hg(
      d,
      g,
      p,
      O,
      y
    );
    return Dg(() => {
      var I;
      return E.current = y || ((I = w.current) == null ? void 0 : I.ownerDocument.defaultView), () => {
        E.current = null;
      };
    }, [E, y]), n("windowScrollTo", C), n("scrollBy", P), /* @__PURE__ */ j.jsx(
      p,
      {
        ref: w,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...u, ...m !== 0 ? { height: m + v } : {} },
        ...f,
        ...dt(p, x),
        children: s
      }
    );
  });
}
const lS = ({ children: n }) => {
  const o = ae.useContext(pa), l = zn("viewportHeight"), s = zn("fixedItemHeight"), u = De("alignToBottom"), f = De("horizontalDirection"), d = ae.useMemo(
    () => fl(l, (g) => Kn(g, f ? "width" : "height")),
    [l, f]
  ), p = dr(d, !0, De("skipAnimationFrameInResizeObserver"));
  return ae.useEffect(() => {
    o && (l(o.viewportHeight), s(o.itemHeight));
  }, [o, l, s]), /* @__PURE__ */ j.jsx("div", { "data-viewport-type": "element", ref: p, style: hi(u), children: n });
}, sS = ({ children: n }) => {
  const o = ae.useContext(pa), l = zn("windowViewportRect"), s = zn("fixedItemHeight"), u = De("customScrollParent"), f = mf(
    l,
    u,
    De("skipAnimationFrameInResizeObserver")
  ), d = De("alignToBottom");
  return ae.useEffect(() => {
    o && (s(o.itemHeight), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: 100 }));
  }, [o, l, s]), /* @__PURE__ */ j.jsx("div", { "data-viewport-type": "window", ref: f, style: hi(d), children: n });
}, aS = ({ children: n }) => {
  const o = De("TopItemListComponent") || "div", l = De("headerHeight"), s = { ...rS, marginTop: `${l}px` }, u = De("context");
  return /* @__PURE__ */ j.jsx(o, { style: s, ...dt(o, u), children: n });
}, uS = /* @__PURE__ */ ae.memo(function(n) {
  const o = De("useWindowScroll"), l = De("topItemsIndexes").length > 0, s = De("customScrollParent"), u = De("context"), f = s || o ? dS : fS, d = s || o ? sS : lS;
  return /* @__PURE__ */ j.jsxs(f, { ...n, ...dt(f, u), children: [
    l && /* @__PURE__ */ j.jsx(aS, { children: /* @__PURE__ */ j.jsx(fm, { showTopList: !0 }) }),
    /* @__PURE__ */ j.jsxs(d, { children: [
      /* @__PURE__ */ j.jsx(oS, {}),
      /* @__PURE__ */ j.jsx(fm, {}),
      /* @__PURE__ */ j.jsx(iS, {})
    ] })
  ] });
}), {
  Component: cS,
  useEmitter: If,
  useEmitterValue: De,
  usePublisher: zn
} = /* @__PURE__ */ kf(
  Xx,
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
  uS
), fS = /* @__PURE__ */ Ef({ useEmitter: If, useEmitterValue: De, usePublisher: zn }), dS = /* @__PURE__ */ Tf({ useEmitter: If, useEmitterValue: De, usePublisher: zn }), pS = cS, hS = /* @__PURE__ */ nt(() => {
  const n = se((m) => /* @__PURE__ */ j.jsxs("td", { children: [
    "Item $",
    m
  ] })), o = se(null), l = se((m) => /* @__PURE__ */ j.jsxs("td", { colSpan: 1e3, children: [
    "Group ",
    m
  ] })), s = se(null), u = se(null), f = se({}), d = se(Cf), p = se(pi), g = (m, v = null) => Zt(
    ee(
      f,
      me((y) => y[m]),
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
}), mS = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(Fg, hS)
), gS = ({ height: n }) => /* @__PURE__ */ j.jsx("tr", { children: /* @__PURE__ */ j.jsx("td", { style: { height: n } }) }), vS = ({ height: n }) => /* @__PURE__ */ j.jsx("tr", { children: /* @__PURE__ */ j.jsx("td", { style: { border: 0, height: n, padding: 0 } }) }), yS = { overflowAnchor: "none" }, dm = { position: _f(), zIndex: 2, overflowAnchor: "none" }, pm = /* @__PURE__ */ ae.memo(function({ showTopList: n = !1 }) {
  const o = He("listState"), l = He("computeItemKey"), s = He("firstItemIndex"), u = He("context"), f = He("isSeeking"), d = He("fixedHeaderHeight"), p = He("groupIndices").length > 0, g = He("itemContent"), m = He("groupContent"), v = He("ScrollSeekPlaceholder") || gS, y = He("GroupComponent"), x = He("TableRowComponent"), w = (n ? o.topItems : []).reduce((P, E, C) => (C === 0 ? P.push(E.size) : P.push(P[C - 1] + E.size), P), []), O = (n ? o.topItems : o.items).map((P) => {
    const E = P.originalIndex, C = l(E + s, P.data, u), I = n ? E === 0 ? 0 : w[E - 1] : 0;
    return f ? /* @__PURE__ */ te.createElement(
      v,
      {
        ...dt(v, u),
        height: P.size,
        index: P.index,
        key: C,
        type: P.type || "item"
      }
    ) : P.type === "group" ? /* @__PURE__ */ te.createElement(
      y,
      {
        ...dt(y, u),
        "data-index": E,
        "data-item-index": P.index,
        "data-known-size": P.size,
        key: C,
        style: {
          ...dm,
          top: d
        }
      },
      m(P.index, u)
    ) : /* @__PURE__ */ te.createElement(
      x,
      {
        ...dt(x, u),
        ...Wg(x, P.data),
        "data-index": E,
        "data-item-index": P.index,
        "data-known-size": P.size,
        "data-item-group-index": P.groupIndex,
        key: C,
        style: n ? { ...dm, top: d + I } : yS
      },
      p ? g(P.index, P.groupIndex, P.data, u) : g(P.index, P.data, u)
    );
  });
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: O });
}), wS = /* @__PURE__ */ ae.memo(function() {
  const n = He("listState"), o = He("topItemsIndexes").length > 0, l = Vn("sizeRanges"), s = He("useWindowScroll"), u = He("customScrollParent"), f = Vn("windowScrollContainerState"), d = Vn("scrollContainerState"), p = u || s ? f : d, g = He("trackItemSizes"), m = He("itemSize"), v = He("log"), { callbackRef: y, ref: x } = xg(
    l,
    m,
    g,
    p,
    v,
    void 0,
    u,
    !1,
    He("skipAnimationFrameInResizeObserver")
  ), [w, O] = ae.useState(0);
  Rf("deviation", (L) => {
    w !== L && (x.current.style.marginTop = `${L}px`, O(L));
  });
  const P = He("EmptyPlaceholder"), E = He("FillerRow") || vS, C = He("TableBodyComponent"), I = He("paddingTopAddition"), D = He("statefulTotalCount"), $ = He("context");
  if (D === 0 && P)
    return /* @__PURE__ */ j.jsx(P, { ...dt(P, $) });
  const F = (o ? n.topItems : []).reduce((L, V) => L + V.size, 0), N = n.offsetTop + I + w - F, B = n.offsetBottom, S = N > 0 ? /* @__PURE__ */ j.jsx(E, { context: $, height: N }, "padding-top") : null, T = B > 0 ? /* @__PURE__ */ j.jsx(E, { context: $, height: B }, "padding-bottom") : null;
  return /* @__PURE__ */ j.jsxs(C, { "data-testid": "virtuoso-item-list", ref: y, ...dt(C, $), children: [
    S,
    o && /* @__PURE__ */ j.jsx(pm, { showTopList: !0 }),
    /* @__PURE__ */ j.jsx(pm, {}),
    T
  ] });
}), xS = ({ children: n }) => {
  const o = ae.useContext(pa), l = Vn("viewportHeight"), s = Vn("fixedItemHeight"), u = dr(
    ae.useMemo(() => fl(l, (f) => Kn(f, "height")), [l]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  );
  return ae.useEffect(() => {
    o && (l(o.viewportHeight), s(o.itemHeight));
  }, [o, l, s]), /* @__PURE__ */ j.jsx("div", { "data-viewport-type": "element", ref: u, style: hi(!1), children: n });
}, SS = ({ children: n }) => {
  const o = ae.useContext(pa), l = Vn("windowViewportRect"), s = Vn("fixedItemHeight"), u = He("customScrollParent"), f = mf(
    l,
    u,
    He("skipAnimationFrameInResizeObserver")
  );
  return ae.useEffect(() => {
    o && (s(o.itemHeight), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: 100 }));
  }, [o, l, s]), /* @__PURE__ */ j.jsx("div", { "data-viewport-type": "window", ref: f, style: hi(!1), children: n });
}, kS = /* @__PURE__ */ ae.memo(function(n) {
  const o = He("useWindowScroll"), l = He("customScrollParent"), s = Vn("fixedHeaderHeight"), u = Vn("fixedFooterHeight"), f = He("fixedHeaderContent"), d = He("fixedFooterContent"), p = He("context"), g = dr(
    ae.useMemo(() => fl(s, (C) => Kn(C, "height")), [s]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  ), m = dr(
    ae.useMemo(() => fl(u, (C) => Kn(C, "height")), [u]),
    !0,
    He("skipAnimationFrameInResizeObserver")
  ), v = l || o ? ES : CS, y = l || o ? SS : xS, x = He("TableComponent"), w = He("TableHeadComponent"), O = He("TableFooterComponent"), P = f ? /* @__PURE__ */ j.jsx(
    w,
    {
      ref: g,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...dt(w, p),
      children: f()
    },
    "TableHead"
  ) : null, E = d ? /* @__PURE__ */ j.jsx(
    O,
    {
      ref: m,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...dt(O, p),
      children: d()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ j.jsx(v, { ...n, ...dt(v, p), children: /* @__PURE__ */ j.jsx(y, { children: /* @__PURE__ */ j.jsxs(x, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...dt(x, p), children: [
    P,
    /* @__PURE__ */ j.jsx(wS, {}, "TableBody"),
    E
  ] }) }) });
}), {
  Component: _S,
  useEmitter: Rf,
  useEmitterValue: He,
  usePublisher: Vn
} = /* @__PURE__ */ kf(
  mS,
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
  kS
), CS = /* @__PURE__ */ Ef({ useEmitter: Rf, useEmitterValue: He, usePublisher: Vn }), ES = /* @__PURE__ */ Tf({ useEmitter: Rf, useEmitterValue: He, usePublisher: Vn }), TS = _S, hm = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, IS = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: mm, floor: ea, max: al, min: gc, round: gm } = Math;
function vm(n, o, l) {
  return Array.from({ length: o - n + 1 }).map((s, u) => ({ data: l === null ? null : l[u + n], index: u + n }));
}
function RS(n) {
  return {
    ...IS,
    items: n
  };
}
function Bs(n, o) {
  return n && n.width === o.width && n.height === o.height;
}
function OS(n, o) {
  return n && n.column === o.column && n.row === o.row;
}
const PS = /* @__PURE__ */ nt(
  ([
    { increaseViewportBy: n, listBoundary: o, overscan: l, visibleRange: s },
    { footerHeight: u, headerHeight: f, scrollBy: d, scrollContainerState: p, scrollTo: g, scrollTop: m, smoothScrollTargetReached: v, viewportHeight: y },
    x,
    w,
    { didMount: O, propsReady: P },
    { customScrollParent: E, useWindowScroll: C, windowScrollContainerState: I, windowScrollTo: D, windowViewportRect: $ },
    F
  ]) => {
    const N = se(0), B = se(0), S = se(hm), T = se({ height: 0, width: 0 }), L = se({ height: 0, width: 0 }), V = qe(), Q = qe(), ie = se(0), K = se(null), fe = se({ column: 0, row: 0 }), we = qe(), re = qe(), U = se(!1), Y = se(0), _ = se(!0), z = se(!1), G = se(!1);
    ot(
      ee(
        O,
        $e(Y),
        Fe(([M, oe]) => !!oe)
      ),
      () => {
        We(_, !1);
      }
    ), ot(
      ee(
        Dt(O, _, L, T, Y, z),
        Fe(([M, oe, xe, pe, , Ie]) => M && !oe && xe.height !== 0 && pe.height !== 0 && !Ie)
      ),
      ([, , , , M]) => {
        We(z, !0), yf(1, () => {
          We(V, M);
        }), fr(ee(m), () => {
          We(o, [0, 0]), We(_, !0);
        });
      }
    ), Te(
      ee(
        re,
        Fe((M) => M != null && M.scrollTop > 0),
        lr(0)
      ),
      B
    ), ot(
      ee(
        O,
        $e(re),
        Fe(([, M]) => M != null)
      ),
      ([, M]) => {
        M && (We(T, M.viewport), We(L, M.item), We(fe, M.gap), M.scrollTop > 0 && (We(U, !0), fr(ee(m, ai(1)), (oe) => {
          We(U, !1);
        }), We(g, { top: M.scrollTop })));
      }
    ), Te(
      ee(
        T,
        me(({ height: M }) => M)
      ),
      y
    ), Te(
      ee(
        Dt(
          Me(T, Bs),
          Me(L, Bs),
          Me(fe, (M, oe) => M && M.column === oe.column && M.row === oe.row),
          Me(m)
        ),
        me(([M, oe, xe, pe]) => ({
          gap: xe,
          item: oe,
          scrollTop: pe,
          viewport: M
        }))
      ),
      we
    ), Te(
      ee(
        Dt(
          Me(N),
          s,
          Me(fe, OS),
          Me(L, Bs),
          Me(T, Bs),
          Me(K),
          Me(B),
          Me(U),
          Me(_),
          Me(Y)
        ),
        Fe(([, , , , , , , M]) => !M),
        me(
          ([
            M,
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
            if (Re === 0 && (M === 0 || kt === 0))
              return hm;
            if (St === 0) {
              const Et = wf(Ve, M), Tt = Et + Math.max(Re - 1, 0);
              return RS(vm(Et, Tt, Ue));
            }
            const Nt = Ug(kt, St, Ne);
            let tt, it;
            ze ? oe === 0 && xe === 0 && Re > 0 ? (tt = 0, it = Re - 1) : (tt = Nt * ea((oe + _e) / (Ge + _e)), it = Nt * mm((xe + _e) / (Ge + _e)) - 1, it = gc(M - 1, al(it, Nt - 1)), tt = gc(it, al(0, tt))) : (tt = 0, it = -1);
            const Xe = vm(tt, it, Ue), { bottom: lt, top: pt } = ym(Be, pe, Ie, Xe), Kt = mm(M / Nt), sn = Kt * Ge + (Kt - 1) * _e - lt;
            return { bottom: lt, itemHeight: Ge, items: Xe, itemWidth: St, offsetBottom: sn, offsetTop: pt, top: pt };
          }
        )
      ),
      S
    ), Te(
      ee(
        K,
        Fe((M) => M !== null),
        me((M) => M.length)
      ),
      N
    ), Te(
      ee(
        Dt(T, L, S, fe),
        Fe(([M, oe, { items: xe }]) => xe.length > 0 && oe.height !== 0 && M.height !== 0),
        me(([M, oe, { items: xe }, pe]) => {
          const { bottom: Ie, top: Be } = ym(M, pe, oe, xe);
          return [Be, Ie];
        }),
        gt(hl)
      ),
      o
    );
    const q = se(!1);
    Te(
      ee(
        m,
        $e(q),
        me(([M, oe]) => oe || M !== 0)
      ),
      q
    );
    const de = kn(
      ee(
        Dt(S, N),
        Fe(([{ items: M }]) => M.length > 0),
        $e(q),
        Fe(([[M, oe], xe]) => {
          const pe = M.items[M.items.length - 1].index === oe - 1;
          return (xe || M.bottom > 0 && M.itemHeight > 0 && M.offsetBottom === 0 && M.items.length === oe) && pe;
        }),
        me(([[, M]]) => M - 1),
        gt()
      )
    ), ke = kn(
      ee(
        Me(S),
        Fe(({ items: M }) => M.length > 0 && M[0].index === 0),
        lr(0),
        gt()
      )
    ), ge = kn(
      ee(
        Me(S),
        $e(U),
        Fe(([{ items: M }, oe]) => M.length > 0 && !oe),
        me(([{ items: M }]) => ({
          endIndex: M[M.length - 1].index,
          startIndex: M[0].index
        })),
        gt(Tg),
        Zr(0)
      )
    );
    Te(ge, w.scrollSeekRangeChanged), Te(
      ee(
        V,
        $e(T, L, N, fe),
        me(([M, oe, xe, pe, Ie]) => {
          const Be = Ag(M), { align: Ue, behavior: Re, offset: ze } = Be;
          let Ve = Be.index;
          Ve === "LAST" && (Ve = pe - 1), Ve = al(0, Ve, gc(pe - 1, Ve));
          let Ne = Kc(oe, Ie, xe, Ve);
          return Ue === "end" ? Ne = gm(Ne - oe.height + xe.height) : Ue === "center" && (Ne = gm(Ne - oe.height / 2 + xe.height / 2)), ze && (Ne += ze), { behavior: Re, top: Ne };
        })
      ),
      g
    );
    const Ee = Zt(
      ee(
        S,
        me((M) => M.offsetBottom + M.bottom)
      ),
      0
    );
    return Te(
      ee(
        $,
        me((M) => ({ height: M.visibleHeight, width: M.visibleWidth }))
      ),
      T
    ), {
      customScrollParent: E,
      // input
      data: K,
      deviation: ie,
      footerHeight: u,
      gap: fe,
      headerHeight: f,
      increaseViewportBy: n,
      initialItemCount: B,
      itemDimensions: L,
      overscan: l,
      restoreStateFrom: re,
      scrollBy: d,
      scrollContainerState: p,
      scrollHeight: Q,
      scrollTo: g,
      scrollToIndex: V,
      scrollTop: m,
      smoothScrollTargetReached: v,
      totalCount: N,
      useWindowScroll: C,
      viewportDimensions: T,
      windowScrollContainerState: I,
      windowScrollTo: D,
      windowViewportRect: $,
      ...w,
      // output
      gridState: S,
      horizontalDirection: G,
      initialTopMostItemIndex: Y,
      totalListHeight: Ee,
      ...x,
      endReached: de,
      propsReady: P,
      rangeChanged: ge,
      startReached: ke,
      stateChanged: we,
      stateRestoreInProgress: U,
      ...F
    };
  },
  yt(xf, ln, _l, bg, so, Sf, lo)
);
function Ug(n, o, l) {
  return al(1, ea((n + l) / (ea(o) + l)));
}
function ym(n, o, l, s) {
  const { height: u } = l;
  if (u === void 0 || s.length === 0)
    return { bottom: 0, top: 0 };
  const f = Kc(n, o, l, s[0].index);
  return { bottom: Kc(n, o, l, s[s.length - 1].index) + u, top: f };
}
function Kc(n, o, l, s) {
  const u = Ug(n.width, l.width, o.column), f = ea(s / u), d = f * l.height + al(0, f - 1) * o.row;
  return d > 0 ? d + o.row : d;
}
const AS = /* @__PURE__ */ nt(() => {
  const n = se((y) => `Item ${y}`), o = se({}), l = se(null), s = se("virtuoso-grid-item"), u = se("virtuoso-grid-list"), f = se(Cf), d = se("div"), p = se(pi), g = (y, x = null) => Zt(
    ee(
      o,
      me((w) => w[y]),
      gt()
    ),
    x
  ), m = se(!1), v = se(!1);
  return Te(Me(v), m), {
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
    readyStateChanged: m,
    reportReadyState: v,
    ScrollerComponent: g("Scroller", "div"),
    scrollerRef: p,
    ScrollSeekPlaceholder: g("ScrollSeekPlaceholder", "div")
  };
}), LS = /* @__PURE__ */ nt(
  ([n, o]) => ({ ...n, ...o }),
  yt(PS, AS)
), zS = /* @__PURE__ */ ae.memo(function() {
  const n = xt("gridState"), o = xt("listClassName"), l = xt("itemClassName"), s = xt("itemContent"), u = xt("computeItemKey"), f = xt("isSeeking"), d = Nn("scrollHeight"), p = xt("ItemComponent"), g = xt("ListComponent"), m = xt("ScrollSeekPlaceholder"), v = xt("context"), y = Nn("itemDimensions"), x = Nn("gap"), w = xt("log"), O = xt("stateRestoreInProgress"), P = Nn("reportReadyState"), E = dr(
    ae.useMemo(
      () => (C) => {
        const I = C.parentElement.parentElement.scrollHeight;
        d(I);
        const D = C.firstChild;
        if (D) {
          const { height: $, width: F } = D.getBoundingClientRect();
          y({ height: $, width: F });
        }
        x({
          column: wm("column-gap", getComputedStyle(C).columnGap, w),
          row: wm("row-gap", getComputedStyle(C).rowGap, w)
        });
      },
      [d, y, x, w]
    ),
    !0,
    !1
  );
  return Dg(() => {
    n.itemHeight > 0 && n.itemWidth > 0 && P(!0);
  }, [n]), O ? null : /* @__PURE__ */ j.jsx(
    g,
    {
      className: o,
      ref: E,
      ...dt(g, v),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: n.offsetBottom, paddingTop: n.offsetTop },
      children: n.items.map((C) => {
        const I = u(C.index, C.data, v);
        return f ? /* @__PURE__ */ j.jsx(
          m,
          {
            ...dt(m, v),
            height: n.itemHeight,
            index: C.index,
            width: n.itemWidth
          },
          I
        ) : /* @__PURE__ */ te.createElement(
          p,
          {
            ...dt(p, v),
            className: l,
            "data-index": C.index,
            key: I
          },
          s(C.index, C.data, v)
        );
      })
    }
  );
}), NS = ae.memo(function() {
  const n = xt("HeaderComponent"), o = Nn("headerHeight"), l = xt("headerFooterTag"), s = dr(
    ae.useMemo(
      () => (f) => {
        o(Kn(f, "height"));
      },
      [o]
    ),
    !0,
    !1
  ), u = xt("context");
  return n ? /* @__PURE__ */ j.jsx(l, { ref: s, children: /* @__PURE__ */ j.jsx(n, { ...dt(n, u) }) }) : null;
}), bS = ae.memo(function() {
  const n = xt("FooterComponent"), o = Nn("footerHeight"), l = xt("headerFooterTag"), s = dr(
    ae.useMemo(
      () => (f) => {
        o(Kn(f, "height"));
      },
      [o]
    ),
    !0,
    !1
  ), u = xt("context");
  return n ? /* @__PURE__ */ j.jsx(l, { ref: s, children: /* @__PURE__ */ j.jsx(n, { ...dt(n, u) }) }) : null;
}), jS = ({ children: n }) => {
  const o = ae.useContext(Mg), l = Nn("itemDimensions"), s = Nn("viewportDimensions"), u = dr(
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
  }, [o, s, l]), /* @__PURE__ */ j.jsx("div", { ref: u, style: hi(!1), children: n });
}, FS = ({ children: n }) => {
  const o = ae.useContext(Mg), l = Nn("windowViewportRect"), s = Nn("itemDimensions"), u = xt("customScrollParent"), f = mf(l, u, !1);
  return ae.useEffect(() => {
    o && (s({ height: o.itemHeight, width: o.itemWidth }), l({ offsetTop: 0, visibleHeight: o.viewportHeight, visibleWidth: o.viewportWidth }));
  }, [o, l, s]), /* @__PURE__ */ j.jsx("div", { ref: f, style: hi(!1), children: n });
}, MS = /* @__PURE__ */ ae.memo(function({ ...n }) {
  const o = xt("useWindowScroll"), l = xt("customScrollParent"), s = l || o ? HS : DS, u = l || o ? FS : jS, f = xt("context");
  return /* @__PURE__ */ j.jsx(s, { ...n, ...dt(s, f), children: /* @__PURE__ */ j.jsxs(u, { children: [
    /* @__PURE__ */ j.jsx(NS, {}),
    /* @__PURE__ */ j.jsx(zS, {}),
    /* @__PURE__ */ j.jsx(bS, {})
  ] }) });
}), {
  useEmitter: $g,
  useEmitterValue: xt,
  usePublisher: Nn
} = /* @__PURE__ */ kf(
  LS,
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
  MS
), DS = /* @__PURE__ */ Ef({ useEmitter: $g, useEmitterValue: xt, usePublisher: Nn }), HS = /* @__PURE__ */ Tf({ useEmitter: $g, useEmitterValue: xt, usePublisher: Nn });
function wm(n, o, l) {
  return o !== "normal" && !(o != null && o.endsWith("px")) && l(`${n} was not resolved to pixel value correctly`, o, mn.WARN), o === "normal" ? 0 : parseInt(o ?? "0", 10);
}
function BS() {
  const n = te.useRef(null), [o, l] = te.useState(1120);
  return te.useEffect(() => {
    const s = n.current;
    if (!s) return;
    const u = new ResizeObserver(([f]) => {
      f.contentRect.width && l(f.contentRect.width);
    });
    return u.observe(s), () => u.disconnect();
  }, []), [n, o];
}
const WS = "_container_1yy9g_1", US = "_cards_1yy9g_7", xm = {
  container: WS,
  cards: US
}, $S = "_card_lfenw_1", VS = "_flex_lfenw_23", YS = "_field_lfenw_27", KS = "_text_lfenw_30", tl = {
  card: $S,
  "dd-field-block": "_dd-field-block_lfenw_13",
  flex: VS,
  field: YS,
  text: KS
}, QS = "_terms_1cbzn_1", vc = {
  terms: QS
};
function eo({ text: n, searchTerm: o }) {
  let l;
  return n && o && n.toLowerCase().includes(o.toLowerCase()) && (l = n.split(new RegExp(`(${o.replace(/[\\^$.*+?()[\]{}|/]/g, "\\$&")})`, "gi")).map((u, f) => u.toLowerCase() === o.toLowerCase() ? /* @__PURE__ */ j.jsx("mark", { children: u }, f) : /* @__PURE__ */ j.jsx("span", { children: u }, f))), /* @__PURE__ */ j.jsx(j.Fragment, { children: l ?? n });
}
function Vg({ terms: n, searchTerm: o }) {
  if (!n) return /* @__PURE__ */ j.jsx(j.Fragment, {});
  const l = (p) => p.trim().split(/\s+/), s = (p) => /^[A-Z]+:[A-Za-z0-9_]+$/.test(p), u = (p) => /^https?:\/\/\S+/.test(p), f = (p, g) => {
    if (s(p)) {
      const [m, v] = p.split(":"), y = encodeURIComponent(m === "NCIT" ? `http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#${v}` : `http://purl.obolibrary.org/obo/${m}_${v}`), x = `https://bioportal.bioontology.org/ontologies/${m}/?p=classes&conceptid=${y}`;
      return /* @__PURE__ */ j.jsx("a", { href: x, target: "_blank", rel: "noopener noreferrer", className: vc.link, children: /* @__PURE__ */ j.jsx(eo, { text: p, searchTerm: o }) }, g);
    }
    return u(p) ? /* @__PURE__ */ j.jsx("a", { href: p, target: "_blank", rel: "noopener noreferrer", className: vc.link, children: /* @__PURE__ */ j.jsx(eo, { text: p, searchTerm: o }) }, g) : /* @__PURE__ */ j.jsx("span", { children: /* @__PURE__ */ j.jsx(eo, { text: p, searchTerm: o }) }, g);
  }, d = l(n);
  return /* @__PURE__ */ j.jsx("span", { className: vc.terms, children: d.map(f) });
}
const GS = "_values_14176_1", qS = "_flex_14176_6", XS = "_value_14176_1", yc = {
  values: GS,
  flex: qS,
  value: XS
};
function Yg({ values: n, searchTerm: o }) {
  const l = n.split("|").map((s, u) => {
    const f = s.split("=");
    return /* @__PURE__ */ j.jsxs("div", { className: yc.flex, children: [
      /* @__PURE__ */ j.jsx("span", { className: yc.value, children: /* @__PURE__ */ j.jsx(eo, { text: f[0].trim().replace(/"/g, ""), searchTerm: o }) }),
      /* @__PURE__ */ j.jsx("span", { children: /* @__PURE__ */ j.jsx(eo, { text: f[1].trim().replace(/\[|\]/g, ""), searchTerm: o }) })
    ] }, u);
  });
  return /* @__PURE__ */ j.jsx("div", { className: yc.values, children: l });
}
const ui = Math.min, To = Math.max, ta = Math.round, Ws = Math.floor, cr = (n) => ({
  x: n,
  y: n
}), ZS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, JS = {
  start: "end",
  end: "start"
};
function Qc(n, o, l) {
  return To(n, ui(o, l));
}
function Cl(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Oo(n) {
  return n.split("-")[0];
}
function El(n) {
  return n.split("-")[1];
}
function Kg(n) {
  return n === "x" ? "y" : "x";
}
function Of(n) {
  return n === "y" ? "height" : "width";
}
function Jr(n) {
  return ["top", "bottom"].includes(Oo(n)) ? "y" : "x";
}
function Pf(n) {
  return Kg(Jr(n));
}
function e2(n, o, l) {
  l === void 0 && (l = !1);
  const s = El(n), u = Pf(n), f = Of(u);
  let d = u === "x" ? s === (l ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return o.reference[f] > o.floating[f] && (d = na(d)), [d, na(d)];
}
function t2(n) {
  const o = na(n);
  return [Gc(n), o, Gc(o)];
}
function Gc(n) {
  return n.replace(/start|end/g, (o) => JS[o]);
}
function n2(n, o, l) {
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
function r2(n, o, l, s) {
  const u = El(n);
  let f = n2(Oo(n), l === "start", s);
  return u && (f = f.map((d) => d + "-" + u), o && (f = f.concat(f.map(Gc)))), f;
}
function na(n) {
  return n.replace(/left|right|bottom|top/g, (o) => ZS[o]);
}
function o2(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Qg(n) {
  return typeof n != "number" ? o2(n) : {
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
function Sm(n, o, l) {
  let {
    reference: s,
    floating: u
  } = n;
  const f = Jr(o), d = Pf(o), p = Of(d), g = Oo(o), m = f === "y", v = s.x + s.width / 2 - u.width / 2, y = s.y + s.height / 2 - u.height / 2, x = s[p] / 2 - u[p] / 2;
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
  switch (El(o)) {
    case "start":
      w[d] -= x * (l && m ? -1 : 1);
      break;
    case "end":
      w[d] += x * (l && m ? -1 : 1);
      break;
  }
  return w;
}
const i2 = async (n, o, l) => {
  const {
    placement: s = "bottom",
    strategy: u = "absolute",
    middleware: f = [],
    platform: d
  } = l, p = f.filter(Boolean), g = await (d.isRTL == null ? void 0 : d.isRTL(o));
  let m = await d.getElementRects({
    reference: n,
    floating: o,
    strategy: u
  }), {
    x: v,
    y
  } = Sm(m, s, g), x = s, w = {}, O = 0;
  for (let P = 0; P < p.length; P++) {
    const {
      name: E,
      fn: C
    } = p[P], {
      x: I,
      y: D,
      data: $,
      reset: F
    } = await C({
      x: v,
      y,
      initialPlacement: s,
      placement: x,
      strategy: u,
      middlewareData: w,
      rects: m,
      platform: d,
      elements: {
        reference: n,
        floating: o
      }
    });
    v = I ?? v, y = D ?? y, w = {
      ...w,
      [E]: {
        ...w[E],
        ...$
      }
    }, F && O <= 50 && (O++, typeof F == "object" && (F.placement && (x = F.placement), F.rects && (m = F.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: o,
      strategy: u
    }) : F.rects), {
      x: v,
      y
    } = Sm(m, x, g)), P = -1);
  }
  return {
    x: v,
    y,
    placement: x,
    strategy: u,
    middlewareData: w
  };
};
async function Gg(n, o) {
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
    boundary: m = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: y = "floating",
    altBoundary: x = !1,
    padding: w = 0
  } = Cl(o, n), O = Qg(w), E = p[x ? y === "floating" ? "reference" : "floating" : y], C = ra(await f.getClippingRect({
    element: (l = await (f.isElement == null ? void 0 : f.isElement(E))) == null || l ? E : E.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
    boundary: m,
    rootBoundary: v,
    strategy: g
  })), I = y === "floating" ? {
    x: s,
    y: u,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, D = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating)), $ = await (f.isElement == null ? void 0 : f.isElement(D)) ? await (f.getScale == null ? void 0 : f.getScale(D)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, F = ra(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: I,
    offsetParent: D,
    strategy: g
  }) : I);
  return {
    top: (C.top - F.top + O.top) / $.y,
    bottom: (F.bottom - C.bottom + O.bottom) / $.y,
    left: (C.left - F.left + O.left) / $.x,
    right: (F.right - C.right + O.right) / $.x
  };
}
const l2 = (n) => ({
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
      element: m,
      padding: v = 0
    } = Cl(n, o) || {};
    if (m == null)
      return {};
    const y = Qg(v), x = {
      x: l,
      y: s
    }, w = Pf(u), O = Of(w), P = await d.getDimensions(m), E = w === "y", C = E ? "top" : "left", I = E ? "bottom" : "right", D = E ? "clientHeight" : "clientWidth", $ = f.reference[O] + f.reference[w] - x[w] - f.floating[O], F = x[w] - f.reference[w], N = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m));
    let B = N ? N[D] : 0;
    (!B || !await (d.isElement == null ? void 0 : d.isElement(N))) && (B = p.floating[D] || f.floating[O]);
    const S = $ / 2 - F / 2, T = B / 2 - P[O] / 2 - 1, L = ui(y[C], T), V = ui(y[I], T), Q = L, ie = B - P[O] - V, K = B / 2 - P[O] / 2 + S, fe = Qc(Q, K, ie), we = !g.arrow && El(u) != null && K !== fe && f.reference[O] / 2 - (K < Q ? L : V) - P[O] / 2 < 0, re = we ? K < Q ? K - Q : K - ie : 0;
    return {
      [w]: x[w] + re,
      data: {
        [w]: fe,
        centerOffset: K - fe - re,
        ...we && {
          alignmentOffset: re
        }
      },
      reset: we
    };
  }
}), s2 = function(n) {
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
        elements: m
      } = o, {
        mainAxis: v = !0,
        crossAxis: y = !0,
        fallbackPlacements: x,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: P = !0,
        ...E
      } = Cl(n, o);
      if ((l = f.arrow) != null && l.alignmentOffset)
        return {};
      const C = Oo(u), I = Jr(p), D = Oo(p) === p, $ = await (g.isRTL == null ? void 0 : g.isRTL(m.floating)), F = x || (D || !P ? [na(p)] : t2(p)), N = O !== "none";
      !x && N && F.push(...r2(p, P, O, $));
      const B = [p, ...F], S = await Gg(o, E), T = [];
      let L = ((s = f.flip) == null ? void 0 : s.overflows) || [];
      if (v && T.push(S[C]), y) {
        const K = e2(u, d, $);
        T.push(S[K[0]], S[K[1]]);
      }
      if (L = [...L, {
        placement: u,
        overflows: T
      }], !T.every((K) => K <= 0)) {
        var V, Q;
        const K = (((V = f.flip) == null ? void 0 : V.index) || 0) + 1, fe = B[K];
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
        let we = (Q = L.filter((re) => re.overflows[0] <= 0).sort((re, U) => re.overflows[1] - U.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!we)
          switch (w) {
            case "bestFit": {
              var ie;
              const re = (ie = L.filter((U) => {
                if (N) {
                  const Y = Jr(U.placement);
                  return Y === I || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((Y) => Y > 0).reduce((Y, _) => Y + _, 0)]).sort((U, Y) => U[1] - Y[1])[0]) == null ? void 0 : ie[0];
              re && (we = re);
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
async function a2(n, o) {
  const {
    placement: l,
    platform: s,
    elements: u
  } = n, f = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), d = Oo(l), p = El(l), g = Jr(l) === "y", m = ["left", "top"].includes(d) ? -1 : 1, v = f && g ? -1 : 1, y = Cl(o, n);
  let {
    mainAxis: x,
    crossAxis: w,
    alignmentAxis: O
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return p && typeof O == "number" && (w = p === "end" ? O * -1 : O), g ? {
    x: w * v,
    y: x * m
  } : {
    x: x * m,
    y: w * v
  };
}
const u2 = function(n) {
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
      } = o, g = await a2(o, n);
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
}, c2 = function(n) {
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
          fn: (E) => {
            let {
              x: C,
              y: I
            } = E;
            return {
              x: C,
              y: I
            };
          }
        },
        ...g
      } = Cl(n, o), m = {
        x: l,
        y: s
      }, v = await Gg(o, g), y = Jr(Oo(u)), x = Kg(y);
      let w = m[x], O = m[y];
      if (f) {
        const E = x === "y" ? "top" : "left", C = x === "y" ? "bottom" : "right", I = w + v[E], D = w - v[C];
        w = Qc(I, w, D);
      }
      if (d) {
        const E = y === "y" ? "top" : "left", C = y === "y" ? "bottom" : "right", I = O + v[E], D = O - v[C];
        O = Qc(I, O, D);
      }
      const P = p.fn({
        ...o,
        [x]: w,
        [y]: O
      });
      return {
        ...P,
        data: {
          x: P.x - l,
          y: P.y - s,
          enabled: {
            [x]: f,
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
  return qg(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function _n(n) {
  var o;
  return (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function mr(n) {
  var o;
  return (o = (qg(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : o.documentElement;
}
function qg(n) {
  return ha() ? n instanceof Node || n instanceof _n(n).Node : !1;
}
function Qn(n) {
  return ha() ? n instanceof Element || n instanceof _n(n).Element : !1;
}
function pr(n) {
  return ha() ? n instanceof HTMLElement || n instanceof _n(n).HTMLElement : !1;
}
function km(n) {
  return !ha() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof _n(n).ShadowRoot;
}
function Tl(n) {
  const {
    overflow: o,
    overflowX: l,
    overflowY: s,
    display: u
  } = Gn(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + s + l) && !["inline", "contents"].includes(u);
}
function f2(n) {
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
function Af(n) {
  const o = Lf(), l = Qn(n) ? Gn(n) : n;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((s) => l[s] ? l[s] !== "none" : !1) || (l.containerType ? l.containerType !== "normal" : !1) || !o && (l.backdropFilter ? l.backdropFilter !== "none" : !1) || !o && (l.filter ? l.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((s) => (l.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (l.contain || "").includes(s));
}
function d2(n) {
  let o = oo(n);
  for (; pr(o) && !ci(o); ) {
    if (Af(o))
      return o;
    if (ma(o))
      return null;
    o = oo(o);
  }
  return null;
}
function Lf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ci(n) {
  return ["html", "body", "#document"].includes(mi(n));
}
function Gn(n) {
  return _n(n).getComputedStyle(n);
}
function ga(n) {
  return Qn(n) ? {
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
    km(n) && n.host || // Fallback.
    mr(n)
  );
  return km(o) ? o.host : o;
}
function Xg(n) {
  const o = oo(n);
  return ci(o) ? n.ownerDocument ? n.ownerDocument.body : n.body : pr(o) && Tl(o) ? o : Xg(o);
}
function vl(n, o, l) {
  var s;
  o === void 0 && (o = []), l === void 0 && (l = !0);
  const u = Xg(n), f = u === ((s = n.ownerDocument) == null ? void 0 : s.body), d = _n(u);
  if (f) {
    const p = qc(d);
    return o.concat(d, d.visualViewport || [], Tl(u) ? u : [], p && l ? vl(p) : []);
  }
  return o.concat(u, vl(u, [], l));
}
function qc(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Zg(n) {
  const o = Gn(n);
  let l = parseFloat(o.width) || 0, s = parseFloat(o.height) || 0;
  const u = pr(n), f = u ? n.offsetWidth : l, d = u ? n.offsetHeight : s, p = ta(l) !== f || ta(s) !== d;
  return p && (l = f, s = d), {
    width: l,
    height: s,
    $: p
  };
}
function zf(n) {
  return Qn(n) ? n : n.contextElement;
}
function li(n) {
  const o = zf(n);
  if (!pr(o))
    return cr(1);
  const l = o.getBoundingClientRect(), {
    width: s,
    height: u,
    $: f
  } = Zg(o);
  let d = (f ? ta(l.width) : l.width) / s, p = (f ? ta(l.height) : l.height) / u;
  return (!d || !Number.isFinite(d)) && (d = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: d,
    y: p
  };
}
const p2 = /* @__PURE__ */ cr(0);
function Jg(n) {
  const o = _n(n);
  return !Lf() || !o.visualViewport ? p2 : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function h2(n, o, l) {
  return o === void 0 && (o = !1), !l || o && l !== _n(n) ? !1 : o;
}
function Po(n, o, l, s) {
  o === void 0 && (o = !1), l === void 0 && (l = !1);
  const u = n.getBoundingClientRect(), f = zf(n);
  let d = cr(1);
  o && (s ? Qn(s) && (d = li(s)) : d = li(n));
  const p = h2(f, l, s) ? Jg(f) : cr(0);
  let g = (u.left + p.x) / d.x, m = (u.top + p.y) / d.y, v = u.width / d.x, y = u.height / d.y;
  if (f) {
    const x = _n(f), w = s && Qn(s) ? _n(s) : s;
    let O = x, P = qc(O);
    for (; P && s && w !== O; ) {
      const E = li(P), C = P.getBoundingClientRect(), I = Gn(P), D = C.left + (P.clientLeft + parseFloat(I.paddingLeft)) * E.x, $ = C.top + (P.clientTop + parseFloat(I.paddingTop)) * E.y;
      g *= E.x, m *= E.y, v *= E.x, y *= E.y, g += D, m += $, O = _n(P), P = qc(O);
    }
  }
  return ra({
    width: v,
    height: y,
    x: g,
    y: m
  });
}
function Nf(n, o) {
  const l = ga(n).scrollLeft;
  return o ? o.left + l : Po(mr(n)).left + l;
}
function ev(n, o, l) {
  l === void 0 && (l = !1);
  const s = n.getBoundingClientRect(), u = s.left + o.scrollLeft - (l ? 0 : (
    // RTL <body> scrollbar.
    Nf(n, s)
  )), f = s.top + o.scrollTop;
  return {
    x: u,
    y: f
  };
}
function m2(n) {
  let {
    elements: o,
    rect: l,
    offsetParent: s,
    strategy: u
  } = n;
  const f = u === "fixed", d = mr(s), p = o ? ma(o.floating) : !1;
  if (s === d || p && f)
    return l;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = cr(1);
  const v = cr(0), y = pr(s);
  if ((y || !y && !f) && ((mi(s) !== "body" || Tl(d)) && (g = ga(s)), pr(s))) {
    const w = Po(s);
    m = li(s), v.x = w.x + s.clientLeft, v.y = w.y + s.clientTop;
  }
  const x = d && !y && !f ? ev(d, g, !0) : cr(0);
  return {
    width: l.width * m.x,
    height: l.height * m.y,
    x: l.x * m.x - g.scrollLeft * m.x + v.x + x.x,
    y: l.y * m.y - g.scrollTop * m.y + v.y + x.y
  };
}
function g2(n) {
  return Array.from(n.getClientRects());
}
function v2(n) {
  const o = mr(n), l = ga(n), s = n.ownerDocument.body, u = To(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), f = To(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
  let d = -l.scrollLeft + Nf(n);
  const p = -l.scrollTop;
  return Gn(s).direction === "rtl" && (d += To(o.clientWidth, s.clientWidth) - u), {
    width: u,
    height: f,
    x: d,
    y: p
  };
}
function y2(n, o) {
  const l = _n(n), s = mr(n), u = l.visualViewport;
  let f = s.clientWidth, d = s.clientHeight, p = 0, g = 0;
  if (u) {
    f = u.width, d = u.height;
    const m = Lf();
    (!m || m && o === "fixed") && (p = u.offsetLeft, g = u.offsetTop);
  }
  return {
    width: f,
    height: d,
    x: p,
    y: g
  };
}
function w2(n, o) {
  const l = Po(n, !0, o === "fixed"), s = l.top + n.clientTop, u = l.left + n.clientLeft, f = pr(n) ? li(n) : cr(1), d = n.clientWidth * f.x, p = n.clientHeight * f.y, g = u * f.x, m = s * f.y;
  return {
    width: d,
    height: p,
    x: g,
    y: m
  };
}
function _m(n, o, l) {
  let s;
  if (o === "viewport")
    s = y2(n, l);
  else if (o === "document")
    s = v2(mr(n));
  else if (Qn(o))
    s = w2(o, l);
  else {
    const u = Jg(n);
    s = {
      x: o.x - u.x,
      y: o.y - u.y,
      width: o.width,
      height: o.height
    };
  }
  return ra(s);
}
function tv(n, o) {
  const l = oo(n);
  return l === o || !Qn(l) || ci(l) ? !1 : Gn(l).position === "fixed" || tv(l, o);
}
function x2(n, o) {
  const l = o.get(n);
  if (l)
    return l;
  let s = vl(n, [], !1).filter((p) => Qn(p) && mi(p) !== "body"), u = null;
  const f = Gn(n).position === "fixed";
  let d = f ? oo(n) : n;
  for (; Qn(d) && !ci(d); ) {
    const p = Gn(d), g = Af(d);
    !g && p.position === "fixed" && (u = null), (f ? !g && !u : !g && p.position === "static" && !!u && ["absolute", "fixed"].includes(u.position) || Tl(d) && !g && tv(n, d)) ? s = s.filter((v) => v !== d) : u = p, d = oo(d);
  }
  return o.set(n, s), s;
}
function S2(n) {
  let {
    element: o,
    boundary: l,
    rootBoundary: s,
    strategy: u
  } = n;
  const d = [...l === "clippingAncestors" ? ma(o) ? [] : x2(o, this._c) : [].concat(l), s], p = d[0], g = d.reduce((m, v) => {
    const y = _m(o, v, u);
    return m.top = To(y.top, m.top), m.right = ui(y.right, m.right), m.bottom = ui(y.bottom, m.bottom), m.left = To(y.left, m.left), m;
  }, _m(o, p, u));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function k2(n) {
  const {
    width: o,
    height: l
  } = Zg(n);
  return {
    width: o,
    height: l
  };
}
function _2(n, o, l) {
  const s = pr(o), u = mr(o), f = l === "fixed", d = Po(n, !0, f, o);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = cr(0);
  function m() {
    g.x = Nf(u);
  }
  if (s || !s && !f)
    if ((mi(o) !== "body" || Tl(u)) && (p = ga(o)), s) {
      const w = Po(o, !0, f, o);
      g.x = w.x + o.clientLeft, g.y = w.y + o.clientTop;
    } else u && m();
  f && !s && u && m();
  const v = u && !s && !f ? ev(u, p) : cr(0), y = d.left + p.scrollLeft - g.x - v.x, x = d.top + p.scrollTop - g.y - v.y;
  return {
    x: y,
    y: x,
    width: d.width,
    height: d.height
  };
}
function wc(n) {
  return Gn(n).position === "static";
}
function Cm(n, o) {
  if (!pr(n) || Gn(n).position === "fixed")
    return null;
  if (o)
    return o(n);
  let l = n.offsetParent;
  return mr(n) === l && (l = l.ownerDocument.body), l;
}
function nv(n, o) {
  const l = _n(n);
  if (ma(n))
    return l;
  if (!pr(n)) {
    let u = oo(n);
    for (; u && !ci(u); ) {
      if (Qn(u) && !wc(u))
        return u;
      u = oo(u);
    }
    return l;
  }
  let s = Cm(n, o);
  for (; s && f2(s) && wc(s); )
    s = Cm(s, o);
  return s && ci(s) && wc(s) && !Af(s) ? l : s || d2(n) || l;
}
const C2 = async function(n) {
  const o = this.getOffsetParent || nv, l = this.getDimensions, s = await l(n.floating);
  return {
    reference: _2(n.reference, await o(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function E2(n) {
  return Gn(n).direction === "rtl";
}
const T2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m2,
  getDocumentElement: mr,
  getClippingRect: S2,
  getOffsetParent: nv,
  getElementRects: C2,
  getClientRects: g2,
  getDimensions: k2,
  getScale: li,
  isElement: Qn,
  isRTL: E2
};
function rv(n, o) {
  return n.x === o.x && n.y === o.y && n.width === o.width && n.height === o.height;
}
function I2(n, o) {
  let l = null, s;
  const u = mr(n);
  function f() {
    var p;
    clearTimeout(s), (p = l) == null || p.disconnect(), l = null;
  }
  function d(p, g) {
    p === void 0 && (p = !1), g === void 0 && (g = 1), f();
    const m = n.getBoundingClientRect(), {
      left: v,
      top: y,
      width: x,
      height: w
    } = m;
    if (p || o(), !x || !w)
      return;
    const O = Ws(y), P = Ws(u.clientWidth - (v + x)), E = Ws(u.clientHeight - (y + w)), C = Ws(v), D = {
      rootMargin: -O + "px " + -P + "px " + -E + "px " + -C + "px",
      threshold: To(0, ui(1, g)) || 1
    };
    let $ = !0;
    function F(N) {
      const B = N[0].intersectionRatio;
      if (B !== g) {
        if (!$)
          return d();
        B ? d(!1, B) : s = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      B === 1 && !rv(m, n.getBoundingClientRect()) && d(), $ = !1;
    }
    try {
      l = new IntersectionObserver(F, {
        ...D,
        // Handle <iframe>s
        root: u.ownerDocument
      });
    } catch {
      l = new IntersectionObserver(F, D);
    }
    l.observe(n);
  }
  return d(!0), f;
}
function R2(n, o, l, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: u = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = s, m = zf(n), v = u || f ? [...m ? vl(m) : [], ...vl(o)] : [];
  v.forEach((C) => {
    u && C.addEventListener("scroll", l, {
      passive: !0
    }), f && C.addEventListener("resize", l);
  });
  const y = m && p ? I2(m, l) : null;
  let x = -1, w = null;
  d && (w = new ResizeObserver((C) => {
    let [I] = C;
    I && I.target === m && w && (w.unobserve(o), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var D;
      (D = w) == null || D.observe(o);
    })), l();
  }), m && !g && w.observe(m), w.observe(o));
  let O, P = g ? Po(n) : null;
  g && E();
  function E() {
    const C = Po(n);
    P && !rv(P, C) && l(), P = C, O = requestAnimationFrame(E);
  }
  return l(), () => {
    var C;
    v.forEach((I) => {
      u && I.removeEventListener("scroll", l), f && I.removeEventListener("resize", l);
    }), y == null || y(), (C = w) == null || C.disconnect(), w = null, g && cancelAnimationFrame(O);
  };
}
const O2 = u2, P2 = c2, A2 = s2, L2 = l2, Em = (n, o, l) => {
  const s = /* @__PURE__ */ new Map(), u = {
    platform: T2,
    ...l
  }, f = {
    ...u.platform,
    _c: s
  };
  return i2(n, o, {
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
var Tm;
function z2() {
  return Tm || (Tm = 1, function(n) {
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
var N2 = z2();
const Xc = /* @__PURE__ */ yl(N2);
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const b2 = "react-tooltip-core-styles", j2 = "react-tooltip-base-styles", Im = { core: !1, base: !1 };
function Rm({ css: n, id: o = j2, type: l = "base", ref: s }) {
  var u, f;
  if (!n || typeof document > "u" || Im[l] || l === "core" && typeof process < "u" && (!((u = process == null ? void 0 : process.env) === null || u === void 0) && u.REACT_TOOLTIP_DISABLE_CORE_STYLES) || l !== "base" && typeof process < "u" && (!((f = process == null ? void 0 : process.env) === null || f === void 0) && f.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  l === "core" && (o = b2), s || (s = {});
  const { insertAt: d } = s;
  if (document.getElementById(o)) return;
  const p = document.head || document.getElementsByTagName("head")[0], g = document.createElement("style");
  g.id = o, g.type = "text/css", d === "top" && p.firstChild ? p.insertBefore(g, p.firstChild) : p.appendChild(g), g.styleSheet ? g.styleSheet.cssText = n : g.appendChild(document.createTextNode(n)), Im[l] = !0;
}
const Om = async ({ elementReference: n = null, tooltipReference: o = null, tooltipArrowReference: l = null, place: s = "top", offset: u = 10, strategy: f = "absolute", middlewares: d = [O2(Number(u)), A2({ fallbackAxisSideDirection: "start" }), P2({ padding: 5 })], border: p }) => {
  if (!n) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: s };
  if (o === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: s };
  const g = d;
  return l ? (g.push(L2({ element: l, padding: 5 })), Em(n, o, { placement: s, strategy: f, middleware: g }).then(({ x: m, y: v, placement: y, middlewareData: x }) => {
    var w, O;
    const P = { left: `${m}px`, top: `${v}px`, border: p }, { x: E, y: C } = (w = x.arrow) !== null && w !== void 0 ? w : { x: 0, y: 0 }, I = (O = { top: "bottom", right: "left", bottom: "top", left: "right" }[y.split("-")[0]]) !== null && O !== void 0 ? O : "bottom", D = p && { borderBottom: p, borderRight: p };
    let $ = 0;
    if (p) {
      const F = `${p}`.match(/(\d+)px/);
      $ = F != null && F[1] ? Number(F[1]) : 1;
    }
    return { tooltipStyles: P, tooltipArrowStyles: { left: E != null ? `${E}px` : "", top: C != null ? `${C}px` : "", right: "", bottom: "", ...D, [I]: `-${4 + $}px` }, place: y };
  })) : Em(n, o, { placement: "bottom", strategy: f, middleware: g }).then(({ x: m, y: v, placement: y }) => ({ tooltipStyles: { left: `${m}px`, top: `${v}px` }, tooltipArrowStyles: {}, place: y }));
}, Pm = (n, o) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(n, o), Am = (n, o, l) => {
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
}, Lm = (n) => n !== null && !Array.isArray(n) && typeof n == "object", Zc = (n, o) => {
  if (n === o) return !0;
  if (Array.isArray(n) && Array.isArray(o)) return n.length === o.length && n.every((u, f) => Zc(u, o[f]));
  if (Array.isArray(n) !== Array.isArray(o)) return !1;
  if (!Lm(n) || !Lm(o)) return n === o;
  const l = Object.keys(n), s = Object.keys(o);
  return l.length === s.length && l.every((u) => Zc(n[u], o[u]));
}, F2 = (n) => {
  if (!(n instanceof HTMLElement || n instanceof SVGElement)) return !1;
  const o = getComputedStyle(n);
  return ["overflow", "overflow-x", "overflow-y"].some((l) => {
    const s = o.getPropertyValue(l);
    return s === "auto" || s === "scroll";
  });
}, zm = (n) => {
  if (!n) return null;
  let o = n.parentElement;
  for (; o; ) {
    if (F2(o)) return o;
    o = o.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, M2 = typeof window < "u" ? te.useLayoutEffect : te.useEffect, Ln = (n) => {
  n.current && (clearTimeout(n.current), n.current = null);
}, D2 = "DEFAULT_TOOLTIP_ID", H2 = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, B2 = te.createContext({ getTooltipData: () => H2 });
function ov(n = D2) {
  return te.useContext(B2).getTooltipData(n);
}
var ti = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Sc = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const W2 = ({ forwardRef: n, id: o, className: l, classNameArrow: s, variant: u = "dark", anchorId: f, anchorSelect: d, place: p = "top", offset: g = 10, events: m = ["hover"], openOnClick: v = !1, positionStrategy: y = "absolute", middlewares: x, wrapper: w, delayShow: O = 0, delayHide: P = 0, float: E = !1, hidden: C = !1, noArrow: I = !1, clickable: D = !1, closeOnEsc: $ = !1, closeOnScroll: F = !1, closeOnResize: N = !1, openEvents: B, closeEvents: S, globalCloseEvents: T, imperativeModeOnly: L, style: V, position: Q, afterShow: ie, afterHide: K, disableTooltip: fe, content: we, contentWrapperRef: re, isOpen: U, defaultIsOpen: Y = !1, setIsOpen: _, activeAnchor: z, setActiveAnchor: G, border: q, opacity: de, arrowColor: ke, role: ge = "tooltip" }) => {
  var Ee;
  const M = te.useRef(null), oe = te.useRef(null), xe = te.useRef(null), pe = te.useRef(null), Ie = te.useRef(null), [Be, Ue] = te.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: p }), [Re, ze] = te.useState(!1), [Ve, Ne] = te.useState(!1), [_e, Ge] = te.useState(null), St = te.useRef(!1), kt = te.useRef(null), { anchorRefs: Nt, setActiveAnchor: tt } = ov(o), it = te.useRef(!1), [Xe, lt] = te.useState([]), pt = te.useRef(!1), Kt = v || m.includes("click"), sn = Kt || (B == null ? void 0 : B.click) || (B == null ? void 0 : B.dblclick) || (B == null ? void 0 : B.mousedown), Et = B ? { ...B } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !B && Kt && Object.assign(Et, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const Tt = S ? { ...S } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !S && Kt && Object.assign(Tt, { mouseleave: !1, blur: !1, mouseout: !1 });
  const Lt = T ? { ...T } : { escape: $ || !1, scroll: F || !1, resize: N || !1, clickOutsideAnchor: sn || !1 };
  L && (Object.assign(Et, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Tt, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(Lt, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), M2(() => (pt.current = !0, () => {
    pt.current = !1;
  }), []);
  const ut = (ue) => {
    pt.current && (ue && Ne(!0), setTimeout(() => {
      pt.current && (_ == null || _(ue), U === void 0 && ze(ue));
    }, 10));
  };
  te.useEffect(() => {
    if (U === void 0) return () => null;
    U && Ne(!0);
    const ue = setTimeout(() => {
      ze(U);
    }, 10);
    return () => {
      clearTimeout(ue);
    };
  }, [U]), te.useEffect(() => {
    if (Re !== St.current) if (Ln(Ie), St.current = Re, Re) ie == null || ie();
    else {
      const ue = ((Le) => {
        const be = Le.match(/^([\d.]+)(ms|s)$/);
        if (!be) return 0;
        const [, Pt, It] = be;
        return Number(Pt) * (It === "ms" ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      Ie.current = setTimeout(() => {
        Ne(!1), Ge(null), K == null || K();
      }, ue + 25);
    }
  }, [Re]);
  const Lo = (ue) => {
    Ue((Le) => Zc(Le, ue) ? Le : ue);
  }, gr = (ue = O) => {
    Ln(xe), Ve ? ut(!0) : xe.current = setTimeout(() => {
      ut(!0);
    }, ue);
  }, qn = (ue = P) => {
    Ln(pe), pe.current = setTimeout(() => {
      it.current || ut(!1);
    }, ue);
  }, vr = (ue) => {
    var Le;
    if (!ue) return;
    const be = (Le = ue.currentTarget) !== null && Le !== void 0 ? Le : ue.target;
    if (!(be != null && be.isConnected)) return G(null), void tt({ current: null });
    O ? gr() : ut(!0), G(be), tt({ current: be }), Ln(pe);
  }, Xn = () => {
    D ? qn(P || 100) : P ? qn() : ut(!1), Ln(xe);
  }, Zn = ({ x: ue, y: Le }) => {
    var be;
    const Pt = { getBoundingClientRect: () => ({ x: ue, y: Le, width: 0, height: 0, top: Le, left: ue, right: ue, bottom: Le }) };
    Om({ place: (be = _e == null ? void 0 : _e.place) !== null && be !== void 0 ? be : p, offset: g, elementReference: Pt, tooltipReference: M.current, tooltipArrowReference: oe.current, strategy: y, middlewares: x, border: q }).then((It) => {
      Lo(It);
    });
  }, gn = (ue) => {
    if (!ue) return;
    const Le = ue, be = { x: Le.clientX, y: Le.clientY };
    Zn(be), kt.current = be;
  }, En = (ue) => {
    var Le;
    if (!Re) return;
    const be = ue.target;
    be.isConnected && (!((Le = M.current) === null || Le === void 0) && Le.contains(be) || [document.querySelector(`[id='${f}']`), ...Xe].some((Pt) => Pt == null ? void 0 : Pt.contains(be)) || (ut(!1), Ln(xe)));
  }, ao = Am(vr, 50), Ot = Am(Xn, 50), en = (ue) => {
    Ot.cancel(), ao(ue);
  }, Oe = () => {
    ao.cancel(), Ot();
  }, Ye = te.useCallback(() => {
    var ue, Le;
    const be = (ue = _e == null ? void 0 : _e.position) !== null && ue !== void 0 ? ue : Q;
    be ? Zn(be) : E ? kt.current && Zn(kt.current) : z != null && z.isConnected && Om({ place: (Le = _e == null ? void 0 : _e.place) !== null && Le !== void 0 ? Le : p, offset: g, elementReference: z, tooltipReference: M.current, tooltipArrowReference: oe.current, strategy: y, middlewares: x, border: q }).then((Pt) => {
      pt.current && Lo(Pt);
    });
  }, [Re, z, we, V, p, _e == null ? void 0 : _e.place, g, y, Q, _e == null ? void 0 : _e.position, E]);
  te.useEffect(() => {
    var ue, Le;
    const be = new Set(Nt);
    Xe.forEach((Je) => {
      fe != null && fe(Je) || be.add({ current: Je });
    });
    const Pt = document.querySelector(`[id='${f}']`);
    Pt && !(fe != null && fe(Pt)) && be.add({ current: Pt });
    const It = () => {
      ut(!1);
    }, tn = zm(z), nn = zm(M.current);
    Lt.scroll && (window.addEventListener("scroll", It), tn == null || tn.addEventListener("scroll", It), nn == null || nn.addEventListener("scroll", It));
    let bt = null;
    Lt.resize ? window.addEventListener("resize", It) : z && M.current && (bt = R2(z, M.current, Ye, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const an = (Je) => {
      Je.key === "Escape" && ut(!1);
    };
    Lt.escape && window.addEventListener("keydown", an), Lt.clickOutsideAnchor && window.addEventListener("click", En);
    const ct = [], Ar = (Je) => !!(Je != null && Je.target && (z != null && z.contains(Je.target))), yr = (Je) => {
      Re && Ar(Je) || vr(Je);
    }, Il = (Je) => {
      Re && Ar(Je) && Xn();
    }, gi = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], Rl = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Et).forEach(([Je, bn]) => {
      bn && (gi.includes(Je) ? ct.push({ event: Je, listener: en }) : Rl.includes(Je) && ct.push({ event: Je, listener: yr }));
    }), Object.entries(Tt).forEach(([Je, bn]) => {
      bn && (gi.includes(Je) ? ct.push({ event: Je, listener: Oe }) : Rl.includes(Je) && ct.push({ event: Je, listener: Il }));
    }), E && ct.push({ event: "pointermove", listener: gn });
    const vi = () => {
      it.current = !0;
    }, yi = () => {
      it.current = !1, Xn();
    }, wi = D && (Tt.mouseout || Tt.mouseleave);
    return wi && ((ue = M.current) === null || ue === void 0 || ue.addEventListener("mouseover", vi), (Le = M.current) === null || Le === void 0 || Le.addEventListener("mouseout", yi)), ct.forEach(({ event: Je, listener: bn }) => {
      be.forEach((xi) => {
        var st;
        (st = xi.current) === null || st === void 0 || st.addEventListener(Je, bn);
      });
    }), () => {
      var Je, bn;
      Lt.scroll && (window.removeEventListener("scroll", It), tn == null || tn.removeEventListener("scroll", It), nn == null || nn.removeEventListener("scroll", It)), Lt.resize ? window.removeEventListener("resize", It) : bt == null || bt(), Lt.clickOutsideAnchor && window.removeEventListener("click", En), Lt.escape && window.removeEventListener("keydown", an), wi && ((Je = M.current) === null || Je === void 0 || Je.removeEventListener("mouseover", vi), (bn = M.current) === null || bn === void 0 || bn.removeEventListener("mouseout", yi)), ct.forEach(({ event: xi, listener: st }) => {
        be.forEach((va) => {
          var uo;
          (uo = va.current) === null || uo === void 0 || uo.removeEventListener(xi, st);
        });
      });
    };
  }, [z, Ye, Ve, Nt, Xe, B, S, T, Kt, O, P]), te.useEffect(() => {
    var ue, Le;
    let be = (Le = (ue = _e == null ? void 0 : _e.anchorSelect) !== null && ue !== void 0 ? ue : d) !== null && Le !== void 0 ? Le : "";
    !be && o && (be = `[data-tooltip-id='${o.replace(/'/g, "\\'")}']`);
    const Pt = new MutationObserver((It) => {
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
              var Ar;
              return !!(!((Ar = ct == null ? void 0 : ct.contains) === null || Ar === void 0) && Ar.call(ct, z)) && (Ne(!1), ut(!1), G(null), Ln(xe), Ln(pe), !0);
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
    return Pt.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      Pt.disconnect();
    };
  }, [o, d, _e == null ? void 0 : _e.anchorSelect, z]), te.useEffect(() => {
    Ye();
  }, [Ye]), te.useEffect(() => {
    if (!(re != null && re.current)) return () => null;
    const ue = new ResizeObserver(() => {
      setTimeout(() => Ye());
    });
    return ue.observe(re.current), () => {
      ue.disconnect();
    };
  }, [we, re == null ? void 0 : re.current]), te.useEffect(() => {
    var ue;
    const Le = document.querySelector(`[id='${f}']`), be = [...Xe, Le];
    z && be.includes(z) || G((ue = Xe[0]) !== null && ue !== void 0 ? ue : Le);
  }, [f, Xe, z]), te.useEffect(() => (Y && ut(!0), () => {
    Ln(xe), Ln(pe);
  }), []), te.useEffect(() => {
    var ue;
    let Le = (ue = _e == null ? void 0 : _e.anchorSelect) !== null && ue !== void 0 ? ue : d;
    if (!Le && o && (Le = `[data-tooltip-id='${o.replace(/'/g, "\\'")}']`), Le) try {
      const be = Array.from(document.querySelectorAll(Le));
      lt(be);
    } catch {
      lt([]);
    }
  }, [o, d, _e == null ? void 0 : _e.anchorSelect]), te.useEffect(() => {
    xe.current && (Ln(xe), gr(O));
  }, [O]);
  const $t = (Ee = _e == null ? void 0 : _e.content) !== null && Ee !== void 0 ? Ee : we, Jn = Re && Object.keys(Be.tooltipStyles).length > 0;
  return te.useImperativeHandle(n, () => ({ open: (ue) => {
    if (ue != null && ue.anchorSelect) try {
      document.querySelector(ue.anchorSelect);
    } catch {
      return void console.warn(`[react-tooltip] "${ue.anchorSelect}" is not a valid CSS selector`);
    }
    Ge(ue ?? null), ue != null && ue.delay ? gr(ue.delay) : ut(!0);
  }, close: (ue) => {
    ue != null && ue.delay ? qn(ue.delay) : ut(!1);
  }, activeAnchor: z, place: Be.place, isOpen: !!(Ve && !C && $t && Jn) })), Ve && !C && $t ? ae.createElement(w, { id: o, role: ge, className: Xc("react-tooltip", ti.tooltip, Sc.tooltip, Sc[u], l, `react-tooltip__place-${Be.place}`, ti[Jn ? "show" : "closing"], Jn ? "react-tooltip__show" : "react-tooltip__closing", y === "fixed" && ti.fixed, D && ti.clickable), onTransitionEnd: (ue) => {
    Ln(Ie), Re || ue.propertyName !== "opacity" || (Ne(!1), Ge(null), K == null || K());
  }, style: { ...V, ...Be.tooltipStyles, opacity: de !== void 0 && Jn ? de : void 0 }, ref: M }, $t, ae.createElement(w, { className: Xc("react-tooltip-arrow", ti.arrow, Sc.arrow, s, I && ti.noArrow), style: { ...Be.tooltipArrowStyles, background: ke ? `linear-gradient(to right bottom, transparent 50%, ${ke} 50%)` : void 0 }, ref: oe })) : null;
}, U2 = ({ content: n }) => ae.createElement("span", { dangerouslySetInnerHTML: { __html: n } }), $2 = ae.forwardRef(({ id: n, anchorId: o, anchorSelect: l, content: s, html: u, render: f, className: d, classNameArrow: p, variant: g = "dark", place: m = "top", offset: v = 10, wrapper: y = "div", children: x = null, events: w = ["hover"], openOnClick: O = !1, positionStrategy: P = "absolute", middlewares: E, delayShow: C = 0, delayHide: I = 0, float: D = !1, hidden: $ = !1, noArrow: F = !1, clickable: N = !1, closeOnEsc: B = !1, closeOnScroll: S = !1, closeOnResize: T = !1, openEvents: L, closeEvents: V, globalCloseEvents: Q, imperativeModeOnly: ie = !1, style: K, position: fe, isOpen: we, defaultIsOpen: re = !1, disableStyleInjection: U = !1, border: Y, opacity: _, arrowColor: z, setIsOpen: G, afterShow: q, afterHide: de, disableTooltip: ke, role: ge = "tooltip" }, Ee) => {
  const [M, oe] = te.useState(s), [xe, pe] = te.useState(u), [Ie, Be] = te.useState(m), [Ue, Re] = te.useState(g), [ze, Ve] = te.useState(v), [Ne, _e] = te.useState(C), [Ge, St] = te.useState(I), [kt, Nt] = te.useState(D), [tt, it] = te.useState($), [Xe, lt] = te.useState(y), [pt, Kt] = te.useState(w), [sn, Et] = te.useState(P), [Tt, Lt] = te.useState(null), [ut, Lo] = te.useState(null), gr = te.useRef(U), { anchorRefs: qn, activeAnchor: vr } = ov(n), Xn = (Ot) => Ot == null ? void 0 : Ot.getAttributeNames().reduce((en, Oe) => {
    var Ye;
    return Oe.startsWith("data-tooltip-") && (en[Oe.replace(/^data-tooltip-/, "")] = (Ye = Ot == null ? void 0 : Ot.getAttribute(Oe)) !== null && Ye !== void 0 ? Ye : null), en;
  }, {}), Zn = (Ot) => {
    const en = { place: (Oe) => {
      var Ye;
      Be((Ye = Oe) !== null && Ye !== void 0 ? Ye : m);
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
      Et((Ye = Oe) !== null && Ye !== void 0 ? Ye : P);
    }, "delay-show": (Oe) => {
      _e(Oe === null ? C : Number(Oe));
    }, "delay-hide": (Oe) => {
      St(Oe === null ? I : Number(Oe));
    }, float: (Oe) => {
      Nt(Oe === null ? D : Oe === "true");
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
  te.useEffect(() => {
    oe(s);
  }, [s]), te.useEffect(() => {
    pe(u);
  }, [u]), te.useEffect(() => {
    Be(m);
  }, [m]), te.useEffect(() => {
    Re(g);
  }, [g]), te.useEffect(() => {
    Ve(v);
  }, [v]), te.useEffect(() => {
    _e(C);
  }, [C]), te.useEffect(() => {
    St(I);
  }, [I]), te.useEffect(() => {
    Nt(D);
  }, [D]), te.useEffect(() => {
    it($);
  }, [$]), te.useEffect(() => {
    Et(P);
  }, [P]), te.useEffect(() => {
    gr.current !== U && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [U]), te.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: U === "core", disableBase: U } }));
  }, []), te.useEffect(() => {
    var Ot;
    const en = new Set(qn);
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
    const $t = (Ot = ut ?? Ye) !== null && Ot !== void 0 ? Ot : vr.current, Jn = new MutationObserver((Le) => {
      Le.forEach((be) => {
        var Pt;
        if (!$t || be.type !== "attributes" || !(!((Pt = be.attributeName) === null || Pt === void 0) && Pt.startsWith("data-tooltip-"))) return;
        const It = Xn($t);
        Zn(It);
      });
    }), ue = { attributes: !0, childList: !1, subtree: !1 };
    if ($t) {
      const Le = Xn($t);
      Zn(Le), Jn.observe($t, ue);
    }
    return () => {
      Jn.disconnect();
    };
  }, [qn, vr, ut, o, l]), te.useEffect(() => {
    K != null && K.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), Y && !Pm("border", `${Y}`) && console.warn(`[react-tooltip] "${Y}" is not a valid \`border\`.`), K != null && K.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), _ && !Pm("opacity", `${_}`) && console.warn(`[react-tooltip] "${_}" is not a valid \`opacity\`.`);
  }, []);
  let gn = x;
  const En = te.useRef(null);
  if (f) {
    const Ot = f({ content: (ut == null ? void 0 : ut.getAttribute("data-tooltip-content")) || M || null, activeAnchor: ut });
    gn = Ot ? ae.createElement("div", { ref: En, className: "react-tooltip-content-wrapper" }, Ot) : null;
  } else M && (gn = M);
  xe && (gn = ae.createElement(U2, { content: xe }));
  const ao = { forwardRef: Ee, id: n, anchorId: o, anchorSelect: l, className: Xc(d, Tt), classNameArrow: p, content: gn, contentWrapperRef: En, place: Ie, variant: Ue, offset: ze, wrapper: Xe, events: pt, openOnClick: O, positionStrategy: sn, middlewares: E, delayShow: Ne, delayHide: Ge, float: kt, hidden: tt, noArrow: F, clickable: N, closeOnEsc: B, closeOnScroll: S, closeOnResize: T, openEvents: L, closeEvents: V, globalCloseEvents: Q, imperativeModeOnly: ie, style: K, position: fe, isOpen: we, defaultIsOpen: re, border: Y, opacity: _, arrowColor: z, setIsOpen: G, afterShow: q, afterHide: de, disableTooltip: ke, activeAnchor: ut, setActiveAnchor: (Ot) => Lo(Ot), role: ge };
  return ae.createElement(W2, { ...ao });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (n) => {
  n.detail.disableCore || Rm({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), n.detail.disableBase || Rm({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const Nm = {
  "help-icon": "_help-icon_12haz_1",
  "help-tooltip": "_help-tooltip_12haz_7"
}, V2 = {
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
  MissingValueCodes: "Reasons for missing values",
  Notes: "Free-text field for additional comments",
  Provenance: "Provenance source",
  SeeAlso: "URL to additional documentation"
};
function iv({ id: n, field: o }) {
  const l = V2[o];
  return l ? /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsx($n, { icon: jw, className: Nm["help-icon"], "data-tooltip-place": "top", "data-tooltip-position-strategy": "fixed", "data-tooltip-id": "help-tooltip-" + n + "-" + o, "data-tooltip-content": l }),
    /* @__PURE__ */ j.jsx($2, { id: "help-tooltip-" + n + "-" + o, className: Nm["help-tooltip"], opacity: 1 })
  ] }) : null;
}
function Y2({ variable: n, searchTerm: o, allFields: l }) {
  const s = l.filter((u) => u !== "Id").map((u, f) => {
    if (n[u] === "" || n[u] === void 0) return;
    const d = ["Enumeration", "MissingValueCodes"].includes(u);
    let p = /* @__PURE__ */ j.jsx("span", { className: tl.text, children: /* @__PURE__ */ j.jsx(eo, { text: n[u], searchTerm: o }) });
    return u === "Terms" && (p = /* @__PURE__ */ j.jsx(Vg, { terms: n[u], searchTerm: o })), /* @__PURE__ */ j.jsxs("div", { className: tl["dd-field-block"], children: [
      /* @__PURE__ */ j.jsxs("div", { className: tl.flex, children: [
        /* @__PURE__ */ j.jsxs("span", { className: tl.field, children: [
          /* @__PURE__ */ j.jsx(iv, { id: n.Id, field: u }),
          /* @__PURE__ */ j.jsxs("strong", { children: [
            u,
            ":"
          ] })
        ] }),
        !d && p
      ] }),
      d && /* @__PURE__ */ j.jsx(Yg, { values: n[u], searchTerm: o })
    ] }, f);
  });
  return /* @__PURE__ */ j.jsxs("div", { className: tl.card, children: [
    /* @__PURE__ */ j.jsx("h3", { children: /* @__PURE__ */ j.jsx(eo, { text: n.Id, searchTerm: o }) }),
    s
  ] });
}
const K2 = "_scroll_wasmp_1", Q2 = {
  scroll: K2
};
function lv({ scrollRef: n }) {
  return /* @__PURE__ */ j.jsx($n, { icon: zw, className: Q2.scroll, onClick: () => {
    var o;
    return (o = n.current) == null ? void 0 : o.scrollToIndex({ index: 0, behavior: "smooth" });
  } });
}
function G2({ activeView: n, variables: o, searchTerm: l, allFields: s }) {
  const u = te.useRef(null), [f, d] = te.useState(!1), [p, g] = BS(), m = g < 1120 ? 2 : 3, v = Math.ceil(o.length / m);
  return /* @__PURE__ */ j.jsxs("div", { ref: p, style: { display: n === "list" ? "block" : "none" }, children: [
    /* @__PURE__ */ j.jsx(
      pS,
      {
        ref: u,
        style: { height: 750 },
        totalCount: v,
        itemContent: (y) => {
          const x = o.slice(
            y * m,
            (y + 1) * m
          );
          return /* @__PURE__ */ j.jsx("div", { className: xm.cards, children: x.map((w, O) => /* @__PURE__ */ j.jsx(Y2, { variable: w, searchTerm: l, allFields: s }, O)) });
        },
        atTopStateChange: (y) => d(!y),
        components: {
          List: te.forwardRef((y, x) => /* @__PURE__ */ j.jsx("div", { ref: x, ...y, className: xm.container }))
        }
      }
    ),
    f && /* @__PURE__ */ j.jsx(lv, { scrollRef: u })
  ] });
}
const q2 = "_options_t8263_1", X2 = {
  options: q2
}, Z2 = "_wrapper_7j5yf_1", J2 = "_open_7j5yf_4", ek = "_picker_7j5yf_4", tk = "_icon_7j5yf_8", nk = "_dropdown_7j5yf_11", nl = {
  wrapper: Z2,
  open: J2,
  picker: ek,
  icon: tk,
  dropdown: nk
};
function rk({ checkedColumns: n, setCheckedColumns: o, allFields: l }) {
  const [s, u] = te.useState(!1), f = te.useRef(null);
  return te.useEffect(() => {
    const d = (p) => {
      var g;
      (g = f.current) != null && g.contains(p.target) || u(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }), /* @__PURE__ */ j.jsxs("div", { className: `${nl.wrapper} ${s ? nl.open : ""}`, ref: f, children: [
    /* @__PURE__ */ j.jsxs("button", { className: nl.picker, onClick: () => u(!s), children: [
      /* @__PURE__ */ j.jsx($n, { icon: Nw, className: nl.icon }),
      "Manage Columns"
    ] }),
    /* @__PURE__ */ j.jsx("div", { className: nl.dropdown, children: l.map((d, p) => /* @__PURE__ */ j.jsxs("label", { children: [
      /* @__PURE__ */ j.jsx("input", { type: "checkbox", checked: n.includes(d), disabled: d === "Id", value: d, onChange: (g) => g.target.checked ? o((m) => [...m, g.target.value]) : o((m) => m.filter((v) => v !== g.target.value)) }),
      d
    ] }, p)) })
  ] });
}
function ok({ sortField: n, setSortField: o, sortDirection: l, setSortDirection: s, checkedColumns: u, setCheckedColumns: f, sortableColumns: d, allFields: p }) {
  return /* @__PURE__ */ j.jsxs("div", { className: X2.options, children: [
    /* @__PURE__ */ j.jsxs("div", { children: [
      "Sort by:",
      /* @__PURE__ */ j.jsx("select", { onChange: (g) => o(g.target.value), value: n, children: d.map((g, m) => /* @__PURE__ */ j.jsx("option", { value: g, children: g }, m)) }),
      /* @__PURE__ */ j.jsxs("select", { onChange: (g) => s(g.target.value), value: l, children: [
        /* @__PURE__ */ j.jsx("option", { value: "Ascending", children: "Ascending" }),
        /* @__PURE__ */ j.jsx("option", { value: "Descending", children: "Descending" })
      ] })
    ] }),
    /* @__PURE__ */ j.jsx(rk, { checkedColumns: u, setCheckedColumns: f, allFields: p })
  ] });
}
const ik = "_table_8748a_1", lk = {
  table: ik
}, sk = "_wrapper_nbs3r_1", ak = "_open_nbs3r_5", uk = "_icon_nbs3r_5", ck = "_active_nbs3r_8", fk = "_dropdown_nbs3r_11", rl = {
  wrapper: sk,
  open: ak,
  icon: uk,
  active: ck,
  dropdown: fk
};
function dk({ field: n, filters: o, setFilters: l, allValues: s, filteredValues: u }) {
  const [f, d] = te.useState(!1), p = te.useRef(null);
  return te.useEffect(() => {
    const g = (m) => {
      var v;
      (v = p.current) != null && v.contains(m.target) || d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }), /* @__PURE__ */ j.jsxs("div", { className: `${rl.wrapper} ${f ? rl.open : ""}`, ref: p, children: [
    /* @__PURE__ */ j.jsx($n, { icon: bw, className: `${rl.icon} ${o[n].length > 0 ? rl.active : ""}`, onClick: () => d(!f) }),
    /* @__PURE__ */ j.jsx("div", { className: rl.dropdown, children: s[n].map((g, m) => /* @__PURE__ */ j.jsxs("label", { children: [
      /* @__PURE__ */ j.jsx("input", { type: "checkbox", checked: o[n].includes(g), disabled: !u[n].includes(g), value: g, onChange: (v) => v.target.checked ? l((y) => ({ ...y, [n]: [...y[n], v.target.value] })) : l((y) => ({ ...y, [n]: y[n].filter((x) => x !== v.target.value) })) }),
      g
    ] }, m)) })
  ] });
}
function pk({ variables: n, searchTerm: o, checkedColumns: l, filters: s, setFilters: u, allValues: f, filteredValues: d, tableRef: p, setShowScrollTop: g }) {
  const m = {
    Id: 200,
    Section: 120,
    Label: 200,
    Datatype: void 0,
    Terms: 140,
    Cardinality: void 0,
    Pattern: void 0,
    Unit: void 0,
    Description: void 0,
    Enumeration: 300,
    MissingValueCodes: 350,
    Notes: void 0,
    Provenance: void 0,
    SeeAlso: void 0
  }, v = Object.keys(m).filter((w) => l.includes(w)), y = v.map((w, O) => /* @__PURE__ */ j.jsxs("th", { style: m[w] !== void 0 ? { minWidth: m[w] } : void 0, children: [
    /* @__PURE__ */ j.jsx(iv, { id: "table", field: w }),
    w,
    Object.keys(s).includes(w) && /* @__PURE__ */ j.jsx(dk, { field: w, filters: s, setFilters: u, allValues: f, filteredValues: d })
  ] }, O)), x = n.map((w) => v.map((O, P) => {
    let E = /* @__PURE__ */ j.jsx(eo, { text: w[O], searchTerm: o });
    return O === "Terms" ? E = /* @__PURE__ */ j.jsx(Vg, { terms: w[O], searchTerm: o }) : ["Enumeration", "MissingValueCodes"].includes(O) && (E = w[O] === "" || w[O] === void 0 ? /* @__PURE__ */ j.jsx(j.Fragment, { children: w[O] }) : /* @__PURE__ */ j.jsx(Yg, { values: w[O], searchTerm: o })), /* @__PURE__ */ j.jsx("td", { children: E }, P);
  }));
  return /* @__PURE__ */ j.jsx(
    TS,
    {
      ref: p,
      className: lk.table,
      totalCount: x.length,
      itemContent: (w) => x[w],
      fixedHeaderContent: () => /* @__PURE__ */ j.jsx("tr", { children: y }),
      atTopStateChange: (w) => g(!w)
    }
  );
}
function hk({ activeView: n, variables: o, allValues: l, filteredValues: s, searchTerm: u, filters: f, setFilters: d, allFields: p }) {
  const [g, m] = te.useState(!1), [v, y] = te.useState(["Id", "Section", "Label", "Datatype", "Cardinality", "Enumeration", "MissingValueCodes"].filter((D) => p.includes(D))), [x, w] = te.useState("Id"), [O, P] = te.useState("Ascending"), E = o.sort((D, $) => O === "Ascending" ? D[x].localeCompare($[x]) : $[x].localeCompare(D[x])), C = te.useRef(null), I = ["Id", "Section", "Label", "Datatype", "Cardinality"].filter((D) => p.includes(D));
  return /* @__PURE__ */ j.jsxs("div", { style: { display: n === "table" ? "block" : "none" }, children: [
    I.length > 0 && /* @__PURE__ */ j.jsx(ok, { sortField: x, setSortField: w, sortDirection: O, setSortDirection: P, checkedColumns: v, setCheckedColumns: y, sortableColumns: I, allFields: p }),
    /* @__PURE__ */ j.jsx(pk, { variables: E, searchTerm: u, checkedColumns: v, filters: f, setFilters: d, allValues: l, filteredValues: s, tableRef: C, setShowScrollTop: m }),
    g && /* @__PURE__ */ j.jsx(lv, { scrollRef: C })
  ] });
}
function mk({ activeView: n, variables: o, searchTerm: l, allFields: s }) {
  const u = ["Section", "Datatype", "Cardinality", "Unit"].filter((y) => s.includes(y)), [f, d] = te.useState(u.reduce((y, x) => (y[x] = [], y), {})), p = u.reduce((y, x) => (y[x] = [...new Set(o.map((w) => w[x]).filter((w) => w.trim() !== ""))].sort(), y), {}), g = o.filter((y) => {
    for (const x in y)
      if (y[x].toLowerCase().includes(l.toLowerCase())) return !0;
  }), m = u.reduce((y, x) => (y[x] = [...new Set(g.map((w) => w[x]).filter((w) => w.trim() !== ""))], y), {}), v = u.reduce((y, x) => {
    const w = f[x].filter((O) => m[x].includes(O));
    return w.length === 0 ? y : y.filter((O) => w.includes(O[x]));
  }, g);
  return /* @__PURE__ */ j.jsxs("div", { className: Xh.content, children: [
    /* @__PURE__ */ j.jsxs("p", { className: Xh.count, children: [
      n === "table" && Object.values(f).some((y) => y.length > 0) ? `${v.length} of ` : "",
      g.length,
      " Result(s)"
    ] }),
    /* @__PURE__ */ j.jsx(G2, { activeView: n, variables: g, searchTerm: l, allFields: s }),
    /* @__PURE__ */ j.jsx(hk, { activeView: n, variables: v, allValues: p, filteredValues: m, searchTerm: l, filters: f, setFilters: d, allFields: s })
  ] });
}
const gk = "_error_21vtf_1", vk = "_icon_21vtf_28", kc = {
  error: gk,
  "error-button": "_error-button_21vtf_10",
  icon: vk
};
function _c({ message: n }) {
  return /* @__PURE__ */ j.jsxs("div", { className: kc.error, children: [
    /* @__PURE__ */ j.jsx("h2", { children: "Hmm..." }),
    /* @__PURE__ */ j.jsx("p", { children: n }),
    /* @__PURE__ */ j.jsxs("button", { className: kc["error-button"], onClick: () => window.location.reload(), children: [
      /* @__PURE__ */ j.jsx($n, { icon: Fw, className: kc.icon }),
      "Reload"
    ] })
  ] });
}
function yk({ data: n = "", theme: o = "light", initialView: l = "list", showSearch: s = !0, heading: u = "Data Dictionary Viewer" }) {
  const [f, d] = te.useState(l), [p, g] = te.useState(""), [m, v] = te.useState([]), [y, x] = te.useState(!0), [w, O] = te.useState(!1), [P, E] = te.useTransition(), C = (F) => {
    E(() => g(F.target.value));
  }, I = (F) => {
    Ww.parse(F, {
      header: !0,
      skipEmptyLines: !0,
      complete: (N) => {
        v(N.data), x(!1);
      }
    });
  }, D = (F) => {
    F.toLowerCase().endsWith(".csv") ? fetch(F).then((N) => {
      if (N.ok) return N.text();
      throw new Error("Request failed!");
    }).then((N) => I(N)).catch(() => {
      x(!1), O(!0);
    }) : F.toLowerCase().includes("radxdatahub") ? fetch(F).then((N) => {
      if (N.ok) return N.json();
      throw new Error("Request failed!");
    }).then((N) => I(N.data)).catch(() => {
      x(!1), O(!0);
    }) : I(F);
  };
  if (te.useEffect(() => {
    D(n);
  }, [n]), y)
    return /* @__PURE__ */ j.jsx($n, { icon: Gh, spin: !0, className: Un.fetch });
  if (w)
    return /* @__PURE__ */ j.jsx(_c, { message: "Unable to fetch data." });
  if (m.length === 0)
    return /* @__PURE__ */ j.jsx(_c, { message: "No data provided." });
  const $ = ["Id", "Section", "Label", "Datatype", "Terms", "Cardinality", "Pattern", "Unit", "Description", "Enumeration", "MissingValueCodes", "Notes", "Provenance", "SeeAlso"].filter((F) => Object.keys(m[0]).includes(F));
  return $.length === 0 || !$.includes("Id") ? /* @__PURE__ */ j.jsx(_c, { message: /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    "Invalid data format.",
    /* @__PURE__ */ j.jsx("br", {}),
    /* @__PURE__ */ j.jsx("br", {}),
    "Expected CSV format following ",
    /* @__PURE__ */ j.jsx("a", { href: "https://github.com/bmir-radx/radx-data-dictionary-specification/blob/main/radx-data-dictionary-specification.md", target: "_blank", children: "these specifications" }),
    ". The ",
    /* @__PURE__ */ j.jsx("code", { children: "Id" }),
    " column is required."
  ] }) }) : /* @__PURE__ */ j.jsx("div", { className: `${Un.container} ${o}`, children: /* @__PURE__ */ j.jsxs("div", { className: Un.main, children: [
    u && /* @__PURE__ */ j.jsx("h1", { className: Un.title, children: u }),
    /* @__PURE__ */ j.jsxs("div", { className: Un.search, children: [
      s && /* @__PURE__ */ j.jsx(ex, { changeHandler: C }),
      P && /* @__PURE__ */ j.jsx($n, { icon: Gh, spin: !0, className: Un.loader }),
      /* @__PURE__ */ j.jsxs("div", { className: Un.buttons, children: [
        /* @__PURE__ */ j.jsxs(
          "button",
          {
            className: f === "list" ? Un.active : "",
            onClick: () => d("list"),
            children: [
              /* @__PURE__ */ j.jsx($n, { icon: Lw, className: Un.icon }),
              "List"
            ]
          }
        ),
        /* @__PURE__ */ j.jsxs(
          "button",
          {
            className: f === "table" ? Un.active : "",
            onClick: () => d("table"),
            children: [
              /* @__PURE__ */ j.jsx($n, { icon: Mw, className: Un.icon }),
              "Table"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ j.jsx(mk, { activeView: f, variables: m, searchTerm: p, allFields: $ })
  ] }) });
}
customElements.define(
  "data-dictionary-viewer",
  fy(yk, {
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
