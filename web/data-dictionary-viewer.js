(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`@import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";:root{--gray-100: #f3f4f6;--gray-200: #e5e7eb;--gray-300: #d1d5db;--black: #1f2937;--white: #ffffff;--dd-font-family: "Open Sans", Helvetica, Arial, sans-serif;--dd-color-text: var(--black);--dd-color-body-bg: #f9fafb;--dd-color-primary: #00889d;--dd-color-on-primary: var(--white);--dd-color-secondary: #003e70;--dd-color-on-secondary: var(--white);--dd-color-content-bg: var(--white);--dd-color-content-border: var(--gray-100);--dd-color-card-bg: var(--white);--dd-color-card-border: var(--gray-100);--dd-color-card-block-bg: var(--gray-100);--dd-color-card-block-border: var(--gray-200);--dd-color-button-text: var(--black);--dd-color-button-bg: var(--gray-200);--dd-color-button-bg-hover: var(--gray-300);--dd-color-button-border: var(--gray-300);--dd-color-table-border: var(--white);--dd-color-table-odd: #f7f7f7;--dd-color-table-even: #eeeeee;--dd-color-input-bg: var(--white);--dd-color-input-border: var(--gray-200);--dd-color-tooltip-background: var(--black);--dd-color-filter: yellow;--dd-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);font-family:var(--dd-font-family);line-height:1.5;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.dark{--gray-100: #1e1e1e;--gray-200: #2a2a2a;--gray-300: #3c3c3c;--black: #000000;--white: #fafafa;--dd-font-family: "Open Sans", Helvetica, Arial, sans-serif;--dd-color-text: var(--white);--dd-color-body-bg: #1f1b24;--dd-color-primary: #03dac6;--dd-color-on-primary: var(--black);--dd-color-secondary: #151c34;--dd-color-on-secondary: var(--white);--dd-color-content-bg: #121212;--dd-color-content-border: var(--gray-300);--dd-color-card-bg: var(--gray-100);--dd-color-card-border: var(--gray-300);--dd-color-card-block-bg: var(--gray-100);--dd-color-card-block-border: var(--gray-300);--dd-color-button-text: var(--black);--dd-color-button-bg: #e0e0e0;--dd-color-button-bg-hover: #c8c8c8;--dd-color-button-border: var(--gray-300);--dd-color-table-border: var(--gray-300);--dd-color-table-odd: var(--gray-100);--dd-color-table-even: var(--gray-200);--dd-color-input-bg: var(--white);--dd-color-input-border: var(--gray-300);--dd-color-tooltip-background: var(--black);--dd-color-filter: yellow;--dd-shadow: 0 1px 2px 0 rgb(255 255 255 / .06)}*,:before,:after{box-sizing:border-box}body{margin:0}button,select,input{font-family:var(--dd-font-family)}._container_14ydf_1{display:flex;min-width:570px;color:var(--dd-color-text);background-color:var(--dd-color-body-bg)}._main_14ydf_8{width:1280px;margin:0 auto;padding:1rem}._title_14ydf_14{font-size:2em;line-height:1.1;margin:1.5rem 0 2rem;color:var(--dd-color-text)}._search_14ydf_21{display:flex;flex-direction:row;flex-wrap:wrap;align-items:baseline;margin:2.5rem 0 1.5rem}._loader_14ydf_29{margin-left:.75rem}._buttons_14ydf_33{margin-left:auto;display:flex;justify-content:flex-end;gap:10px}._buttons_14ydf_33 button{cursor:pointer;padding:12px 20px;font-size:.95rem;font-weight:700;color:var(--dd-color-button-text);background-color:var(--dd-color-button-bg);border:1px solid var(--dd-color-button-border);border-radius:.25rem;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._buttons_14ydf_33 button:hover{background-color:var(--dd-color-button-bg-hover)}._buttons_14ydf_33 button._active_14ydf_54{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary);pointer-events:none}._buttons_14ydf_33 button ._icon_14ydf_59{margin-right:.5rem}._search_qqeb0_1{border-radius:.5rem;padding:12px;width:50%;font-size:.95rem;background-color:var(--dd-color-input-bg);border:1px solid var(--dd-color-input-border);box-shadow:var(--dd-shadow)}._search_qqeb0_1:focus{outline:1px solid var(--dd-color-primary)}._content_bbdxn_1{position:relative;background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-content-border);border-radius:.5rem;padding:16px;box-shadow:var(--dd-shadow);min-height:834px}._count_bbdxn_11{font-size:.875rem;text-align:right;margin:5px 0 14px}._container_1yy9g_1{display:flex;flex-direction:column;row-gap:20px}._cards_1yy9g_7{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));justify-items:center;gap:20px}._card_1ada5_1{min-width:90%;padding:1rem;background-color:var(--dd-color-card-bg);border:1px solid var(--dd-color-card-border);border-radius:.75rem;box-shadow:var(--dd-shadow)}._card_1ada5_1 h3{color:var(--dd-color-primary);margin:1rem 0 1.5rem}._card_1ada5_1 ._dd-field-block_1ada5_13{padding:.5rem .75rem;font-size:.875rem;font-weight:400;border-radius:.5rem;background-color:var(--dd-color-card-block-bg);border:1px solid var(--dd-color-card-block-border);box-shadow:var(--dd-shadow);margin-bottom:.75rem}._card_1ada5_1 ._dd-field-block_1ada5_13 ._flex_1ada5_23{display:flex;gap:.5rem}._card_1ada5_1 ._dd-field-block_1ada5_13 ._flex_1ada5_23 ._field_1ada5_27{white-space:nowrap}._terms_1cbzn_1{display:flex;flex-wrap:wrap;gap:4px}._terms_1cbzn_1 a{font-size:85%;font-weight:600;color:var(--dd-color-secondary);background-color:var(--dd-color-button-bg);border-radius:5px;padding:4px 8px;text-decoration:none;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out;word-break:break-word;overflow-wrap:anywhere;display:inline-block}._terms_1cbzn_1 a:hover{background-color:var(--dd-color-button-bg-hover)}._values_14176_1{margin:10px 0 4px;line-height:1.2;font-weight:400}._values_14176_1 ._flex_14176_6{display:flex}._values_14176_1 ._flex_14176_6 ._value_14176_1{font-family:monospace;min-width:4rem}._help-icon_12haz_1{margin-right:.5rem;color:var(--dd-color-primary);cursor:help}._help-tooltip_12haz_7{font-weight:400;max-width:190px;white-space:pre-wrap;background-color:var(--dd-color-tooltip-background)!important}._scroll_wasmp_1{cursor:pointer;position:absolute;right:-50px;bottom:8px;color:var(--dd-color-primary);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-primary);border-radius:50%;padding:8px;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._scroll_wasmp_1:hover{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._options_t8263_1{display:flex;justify-content:space-between;margin:14px 0;font-size:1rem;font-weight:600}._options_t8263_1 select{height:35px;margin-left:10px;padding:0 30px 0 10px;font-size:.875rem;font-weight:600;border:1px solid var(--dd-color-input-border);box-shadow:var(--dd-shadow);appearance:none;-moz-appearance:none;-webkit-appearance:none;background-position:right 4px center;background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3e%3cpath%20fill='none'%20stroke='%23343a40'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m2%205%206%206%206-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-size:16px 12px}._options_t8263_1 select:focus{outline:1px solid var(--dd-color-primary)}._wrapper_7j5yf_1{position:relative}._wrapper_7j5yf_1._open_7j5yf_4 ._picker_7j5yf_4{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._wrapper_7j5yf_1._open_7j5yf_4 ._picker_7j5yf_4 ._icon_7j5yf_8{color:var(--dd-color-on-primary)}._wrapper_7j5yf_1._open_7j5yf_4 ._dropdown_7j5yf_11{opacity:1;visibility:visible;transform:translateY(0)}._picker_7j5yf_4{cursor:pointer;height:35px;width:170px;font-size:.875rem;font-weight:600;color:var(--dd-color-primary);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-primary);border-radius:3px;box-shadow:var(--dd-shadow);transition:all .15s ease-in-out}._picker_7j5yf_4:hover{color:var(--dd-color-on-primary);background-color:var(--dd-color-primary)}._picker_7j5yf_4:hover ._icon_7j5yf_8{color:var(--dd-color-on-primary)}._picker_7j5yf_4 ._icon_7j5yf_8{color:var(--dd-color-text);margin-right:10px;transition:all .15s ease-in-out}._dropdown_7j5yf_11{position:absolute;right:0;top:40px;z-index:3;background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-input-border);border-radius:3px;box-shadow:var(--dd-shadow);padding:10px;font-size:.875rem;font-weight:400;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(-5px);transition:all .25s ease}._dropdown_7j5yf_11 label{display:block}._dropdown_7j5yf_11 label input{margin-right:5px;accent-color:var(--dd-color-primary);vertical-align:middle;position:relative;bottom:1px}._table_8748a_1{height:700px!important}._table_8748a_1 table{font-size:.875rem;border-collapse:separate;border-spacing:0;line-height:1.2;font-weight:600;width:100%}._table_8748a_1 table thead{margin:0}._table_8748a_1 table thead th{color:var(--dd-color-on-secondary);background-color:var(--dd-color-secondary);padding:25px 20px 25px 15px;text-align:left;border:1px solid var(--dd-color-table-border);white-space:nowrap}._table_8748a_1 table tbody tr:nth-child(odd){background-color:var(--dd-color-table-odd)}._table_8748a_1 table tbody tr:nth-child(2n){background-color:var(--dd-color-table-even)}._table_8748a_1 table tbody td{padding:20px 15px}._wrapper_nbs3r_1{position:relative;display:inline}._wrapper_nbs3r_1._open_nbs3r_5 ._icon_nbs3r_5{color:var(--dd-color-button-bg-hover)}._wrapper_nbs3r_1._open_nbs3r_5 ._icon_nbs3r_5._active_nbs3r_8{color:#ff0}._wrapper_nbs3r_1._open_nbs3r_5 ._dropdown_nbs3r_11{opacity:1;visibility:visible;transform:translateY(0)}._icon_nbs3r_5{cursor:pointer;margin-left:1rem;color:var(--dd-color-button-bg);transition:all .15s ease-in-out}._icon_nbs3r_5:hover{color:var(--dd-color-button-bg-hover)}._icon_nbs3r_5._active_nbs3r_8{color:#ff0}._dropdown_nbs3r_11{position:absolute;right:0;top:30px;z-index:3;line-height:1.5;color:var(--dd-color-text);background-color:var(--dd-color-content-bg);border:1px solid var(--dd-color-input-border);border-radius:3px;box-shadow:var(--dd-shadow);padding:10px;font-size:.875rem;font-weight:400;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(-5px);transition:all .25s ease}._dropdown_nbs3r_11 label{display:block}._dropdown_nbs3r_11 label input{margin-right:5px;accent-color:var(--dd-color-primary);vertical-align:middle;position:relative;bottom:1px}`)),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function fr(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Sf = { exports: {} }, Bt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jg;
function Yb() {
  if (jg) return Bt;
  jg = 1;
  var l = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
  function T(E) {
    return E === null || typeof E != "object" ? null : (E = b && E[b] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, M = {};
  function R(E, D, $) {
    this.props = E, this.context = D, this.refs = M, this.updater = $ || S;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(E, D) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, D, "setState");
  }, R.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function w() {
  }
  w.prototype = R.prototype;
  function O(E, D, $) {
    this.props = E, this.context = D, this.refs = M, this.updater = $ || S;
  }
  var U = O.prototype = new w();
  U.constructor = O, C(U, R.prototype), U.isPureReactComponent = !0;
  var W = Array.isArray, j = { H: null, A: null, T: null, S: null, V: null }, q = Object.prototype.hasOwnProperty;
  function X(E, D, $, I, ct, gt) {
    return $ = gt.ref, {
      $$typeof: l,
      type: E,
      key: D,
      ref: $ !== void 0 ? $ : null,
      props: gt
    };
  }
  function x(E, D) {
    return X(
      E.type,
      D,
      void 0,
      void 0,
      void 0,
      E.props
    );
  }
  function _(E) {
    return typeof E == "object" && E !== null && E.$$typeof === l;
  }
  function H(E) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function($) {
      return D[$];
    });
  }
  var K = /\/+/g;
  function F(E, D) {
    return typeof E == "object" && E !== null && E.key != null ? H("" + E.key) : D.toString(36);
  }
  function st() {
  }
  function tt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(st, st) : (E.status = "pending", E.then(
          function(D) {
            E.status === "pending" && (E.status = "fulfilled", E.value = D);
          },
          function(D) {
            E.status === "pending" && (E.status = "rejected", E.reason = D);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function mt(E, D, $, I, ct) {
    var gt = typeof E;
    (gt === "undefined" || gt === "boolean") && (E = null);
    var ht = !1;
    if (E === null) ht = !0;
    else
      switch (gt) {
        case "bigint":
        case "string":
        case "number":
          ht = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case l:
            case i:
              ht = !0;
              break;
            case y:
              return ht = E._init, mt(
                ht(E._payload),
                D,
                $,
                I,
                ct
              );
          }
      }
    if (ht)
      return ct = ct(E), ht = I === "" ? "." + F(E, 0) : I, W(ct) ? ($ = "", ht != null && ($ = ht.replace(K, "$&/") + "/"), mt(ct, D, $, "", function(ut) {
        return ut;
      })) : ct != null && (_(ct) && (ct = x(
        ct,
        $ + (ct.key == null || E && E.key === ct.key ? "" : ("" + ct.key).replace(
          K,
          "$&/"
        ) + "/") + ht
      )), D.push(ct)), 1;
    ht = 0;
    var kt = I === "" ? "." : I + ":";
    if (W(E))
      for (var Y = 0; Y < E.length; Y++)
        I = E[Y], gt = kt + F(I, Y), ht += mt(
          I,
          D,
          $,
          gt,
          ct
        );
    else if (Y = T(E), typeof Y == "function")
      for (E = Y.call(E), Y = 0; !(I = E.next()).done; )
        I = I.value, gt = kt + F(I, Y++), ht += mt(
          I,
          D,
          $,
          gt,
          ct
        );
    else if (gt === "object") {
      if (typeof E.then == "function")
        return mt(
          tt(E),
          D,
          $,
          I,
          ct
        );
      throw D = String(E), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ht;
  }
  function L(E, D, $) {
    if (E == null) return E;
    var I = [], ct = 0;
    return mt(E, I, "", "", function(gt) {
      return D.call($, gt, ct++);
    }), I;
  }
  function Z(E) {
    if (E._status === -1) {
      var D = E._result;
      D = D(), D.then(
        function($) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = $);
        },
        function($) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = $);
        }
      ), E._status === -1 && (E._status = 0, E._result = D);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var nt = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function lt() {
  }
  return Bt.Children = {
    map: L,
    forEach: function(E, D, $) {
      L(
        E,
        function() {
          D.apply(this, arguments);
        },
        $
      );
    },
    count: function(E) {
      var D = 0;
      return L(E, function() {
        D++;
      }), D;
    },
    toArray: function(E) {
      return L(E, function(D) {
        return D;
      }) || [];
    },
    only: function(E) {
      if (!_(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  }, Bt.Component = R, Bt.Fragment = u, Bt.Profiler = c, Bt.PureComponent = O, Bt.StrictMode = r, Bt.Suspense = g, Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, Bt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return j.H.useMemoCache(E);
    }
  }, Bt.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, Bt.cloneElement = function(E, D, $) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var I = C({}, E.props), ct = E.key, gt = void 0;
    if (D != null)
      for (ht in D.ref !== void 0 && (gt = void 0), D.key !== void 0 && (ct = "" + D.key), D)
        !q.call(D, ht) || ht === "key" || ht === "__self" || ht === "__source" || ht === "ref" && D.ref === void 0 || (I[ht] = D[ht]);
    var ht = arguments.length - 2;
    if (ht === 1) I.children = $;
    else if (1 < ht) {
      for (var kt = Array(ht), Y = 0; Y < ht; Y++)
        kt[Y] = arguments[Y + 2];
      I.children = kt;
    }
    return X(E.type, ct, void 0, void 0, gt, I);
  }, Bt.createContext = function(E) {
    return E = {
      $$typeof: d,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: f,
      _context: E
    }, E;
  }, Bt.createElement = function(E, D, $) {
    var I, ct = {}, gt = null;
    if (D != null)
      for (I in D.key !== void 0 && (gt = "" + D.key), D)
        q.call(D, I) && I !== "key" && I !== "__self" && I !== "__source" && (ct[I] = D[I]);
    var ht = arguments.length - 2;
    if (ht === 1) ct.children = $;
    else if (1 < ht) {
      for (var kt = Array(ht), Y = 0; Y < ht; Y++)
        kt[Y] = arguments[Y + 2];
      ct.children = kt;
    }
    if (E && E.defaultProps)
      for (I in ht = E.defaultProps, ht)
        ct[I] === void 0 && (ct[I] = ht[I]);
    return X(E, gt, void 0, void 0, null, ct);
  }, Bt.createRef = function() {
    return { current: null };
  }, Bt.forwardRef = function(E) {
    return { $$typeof: p, render: E };
  }, Bt.isValidElement = _, Bt.lazy = function(E) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: E },
      _init: Z
    };
  }, Bt.memo = function(E, D) {
    return {
      $$typeof: h,
      type: E,
      compare: D === void 0 ? null : D
    };
  }, Bt.startTransition = function(E) {
    var D = j.T, $ = {};
    j.T = $;
    try {
      var I = E(), ct = j.S;
      ct !== null && ct($, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(lt, nt);
    } catch (gt) {
      nt(gt);
    } finally {
      j.T = D;
    }
  }, Bt.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, Bt.use = function(E) {
    return j.H.use(E);
  }, Bt.useActionState = function(E, D, $) {
    return j.H.useActionState(E, D, $);
  }, Bt.useCallback = function(E, D) {
    return j.H.useCallback(E, D);
  }, Bt.useContext = function(E) {
    return j.H.useContext(E);
  }, Bt.useDebugValue = function() {
  }, Bt.useDeferredValue = function(E, D) {
    return j.H.useDeferredValue(E, D);
  }, Bt.useEffect = function(E, D, $) {
    var I = j.H;
    if (typeof $ == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return I.useEffect(E, D);
  }, Bt.useId = function() {
    return j.H.useId();
  }, Bt.useImperativeHandle = function(E, D, $) {
    return j.H.useImperativeHandle(E, D, $);
  }, Bt.useInsertionEffect = function(E, D) {
    return j.H.useInsertionEffect(E, D);
  }, Bt.useLayoutEffect = function(E, D) {
    return j.H.useLayoutEffect(E, D);
  }, Bt.useMemo = function(E, D) {
    return j.H.useMemo(E, D);
  }, Bt.useOptimistic = function(E, D) {
    return j.H.useOptimistic(E, D);
  }, Bt.useReducer = function(E, D, $) {
    return j.H.useReducer(E, D, $);
  }, Bt.useRef = function(E) {
    return j.H.useRef(E);
  }, Bt.useState = function(E) {
    return j.H.useState(E);
  }, Bt.useSyncExternalStore = function(E, D, $) {
    return j.H.useSyncExternalStore(
      E,
      D,
      $
    );
  }, Bt.useTransition = function() {
    return j.H.useTransition();
  }, Bt.version = "19.1.0", Bt;
}
var Lg;
function xd() {
  return Lg || (Lg = 1, Sf.exports = Yb()), Sf.exports;
}
var ot = xd();
const ft = /* @__PURE__ */ fr(ot);
var xf = { exports: {} }, Zo = {}, Tf = { exports: {} }, Ef = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ug;
function Gb() {
  return Ug || (Ug = 1, function(l) {
    function i(L, Z) {
      var nt = L.length;
      L.push(Z);
      t: for (; 0 < nt; ) {
        var lt = nt - 1 >>> 1, E = L[lt];
        if (0 < c(E, Z))
          L[lt] = Z, L[nt] = E, nt = lt;
        else break t;
      }
    }
    function u(L) {
      return L.length === 0 ? null : L[0];
    }
    function r(L) {
      if (L.length === 0) return null;
      var Z = L[0], nt = L.pop();
      if (nt !== Z) {
        L[0] = nt;
        t: for (var lt = 0, E = L.length, D = E >>> 1; lt < D; ) {
          var $ = 2 * (lt + 1) - 1, I = L[$], ct = $ + 1, gt = L[ct];
          if (0 > c(I, nt))
            ct < E && 0 > c(gt, I) ? (L[lt] = gt, L[ct] = nt, lt = ct) : (L[lt] = I, L[$] = nt, lt = $);
          else if (ct < E && 0 > c(gt, nt))
            L[lt] = gt, L[ct] = nt, lt = ct;
          else break t;
        }
      }
      return Z;
    }
    function c(L, Z) {
      var nt = L.sortIndex - Z.sortIndex;
      return nt !== 0 ? nt : L.id - Z.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      l.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      l.unstable_now = function() {
        return d.now() - p;
      };
    }
    var g = [], h = [], y = 1, b = null, T = 3, S = !1, C = !1, M = !1, R = !1, w = typeof setTimeout == "function" ? setTimeout : null, O = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    function W(L) {
      for (var Z = u(h); Z !== null; ) {
        if (Z.callback === null) r(h);
        else if (Z.startTime <= L)
          r(h), Z.sortIndex = Z.expirationTime, i(g, Z);
        else break;
        Z = u(h);
      }
    }
    function j(L) {
      if (M = !1, W(L), !C)
        if (u(g) !== null)
          C = !0, q || (q = !0, F());
        else {
          var Z = u(h);
          Z !== null && mt(j, Z.startTime - L);
        }
    }
    var q = !1, X = -1, x = 5, _ = -1;
    function H() {
      return R ? !0 : !(l.unstable_now() - _ < x);
    }
    function K() {
      if (R = !1, q) {
        var L = l.unstable_now();
        _ = L;
        var Z = !0;
        try {
          t: {
            C = !1, M && (M = !1, O(X), X = -1), S = !0;
            var nt = T;
            try {
              e: {
                for (W(L), b = u(g); b !== null && !(b.expirationTime > L && H()); ) {
                  var lt = b.callback;
                  if (typeof lt == "function") {
                    b.callback = null, T = b.priorityLevel;
                    var E = lt(
                      b.expirationTime <= L
                    );
                    if (L = l.unstable_now(), typeof E == "function") {
                      b.callback = E, W(L), Z = !0;
                      break e;
                    }
                    b === u(g) && r(g), W(L);
                  } else r(g);
                  b = u(g);
                }
                if (b !== null) Z = !0;
                else {
                  var D = u(h);
                  D !== null && mt(
                    j,
                    D.startTime - L
                  ), Z = !1;
                }
              }
              break t;
            } finally {
              b = null, T = nt, S = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? F() : q = !1;
        }
      }
    }
    var F;
    if (typeof U == "function")
      F = function() {
        U(K);
      };
    else if (typeof MessageChannel < "u") {
      var st = new MessageChannel(), tt = st.port2;
      st.port1.onmessage = K, F = function() {
        tt.postMessage(null);
      };
    } else
      F = function() {
        w(K, 0);
      };
    function mt(L, Z) {
      X = w(function() {
        L(l.unstable_now());
      }, Z);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, l.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : x = 0 < L ? Math.floor(1e3 / L) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, l.unstable_next = function(L) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = T;
      }
      var nt = T;
      T = Z;
      try {
        return L();
      } finally {
        T = nt;
      }
    }, l.unstable_requestPaint = function() {
      R = !0;
    }, l.unstable_runWithPriority = function(L, Z) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var nt = T;
      T = L;
      try {
        return Z();
      } finally {
        T = nt;
      }
    }, l.unstable_scheduleCallback = function(L, Z, nt) {
      var lt = l.unstable_now();
      switch (typeof nt == "object" && nt !== null ? (nt = nt.delay, nt = typeof nt == "number" && 0 < nt ? lt + nt : lt) : nt = lt, L) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = nt + E, L = {
        id: y++,
        callback: Z,
        priorityLevel: L,
        startTime: nt,
        expirationTime: E,
        sortIndex: -1
      }, nt > lt ? (L.sortIndex = nt, i(h, L), u(g) === null && L === u(h) && (M ? (O(X), X = -1) : M = !0, mt(j, nt - lt))) : (L.sortIndex = E, i(g, L), C || S || (C = !0, q || (q = !0, F()))), L;
    }, l.unstable_shouldYield = H, l.unstable_wrapCallback = function(L) {
      var Z = T;
      return function() {
        var nt = T;
        T = Z;
        try {
          return L.apply(this, arguments);
        } finally {
          T = nt;
        }
      };
    };
  }(Ef)), Ef;
}
var kg;
function Vb() {
  return kg || (kg = 1, Tf.exports = Gb()), Tf.exports;
}
var _f = { exports: {} }, on = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bg;
function Xb() {
  if (Bg) return on;
  Bg = 1;
  var l = xd();
  function i(g) {
    var h = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        h += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + g + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var r = {
    d: {
      f: u,
      r: function() {
        throw Error(i(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function f(g, h, y) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: h,
      implementation: y
    };
  }
  var d = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, h) {
    if (g === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, on.createPortal = function(g, h) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return f(g, h, null, y);
  }, on.flushSync = function(g) {
    var h = d.T, y = r.p;
    try {
      if (d.T = null, r.p = 2, g) return g();
    } finally {
      d.T = h, r.p = y, r.d.f();
    }
  }, on.preconnect = function(g, h) {
    typeof g == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(g, h));
  }, on.prefetchDNS = function(g) {
    typeof g == "string" && r.d.D(g);
  }, on.preinit = function(g, h) {
    if (typeof g == "string" && h && typeof h.as == "string") {
      var y = h.as, b = p(y, h.crossOrigin), T = typeof h.integrity == "string" ? h.integrity : void 0, S = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      y === "style" ? r.d.S(
        g,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: b,
          integrity: T,
          fetchPriority: S
        }
      ) : y === "script" && r.d.X(g, {
        crossOrigin: b,
        integrity: T,
        fetchPriority: S,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, on.preinitModule = function(g, h) {
    if (typeof g == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var y = p(
            h.as,
            h.crossOrigin
          );
          r.d.M(g, {
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(g);
  }, on.preload = function(g, h) {
    if (typeof g == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var y = h.as, b = p(y, h.crossOrigin);
      r.d.L(g, y, {
        crossOrigin: b,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, on.preloadModule = function(g, h) {
    if (typeof g == "string")
      if (h) {
        var y = p(h.as, h.crossOrigin);
        r.d.m(g, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(g);
  }, on.requestFormReset = function(g) {
    r.d.r(g);
  }, on.unstable_batchedUpdates = function(g, h) {
    return g(h);
  }, on.useFormState = function(g, h, y) {
    return d.H.useFormState(g, h, y);
  }, on.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, on.version = "19.1.0", on;
}
var qg;
function sv() {
  if (qg) return _f.exports;
  qg = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), _f.exports = Xb(), _f.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yg;
function Qb() {
  if (Yg) return Zo;
  Yg = 1;
  var l = Vb(), i = xd(), u = sv();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function f(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (f(t) !== t)
      throw Error(r(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var o = n.return;
      if (o === null) break;
      var s = o.alternate;
      if (s === null) {
        if (a = o.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (o.child === s.child) {
        for (s = o.child; s; ) {
          if (s === n) return p(o), t;
          if (s === a) return p(o), e;
          s = s.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = o, a = s;
      else {
        for (var m = !1, v = o.child; v; ) {
          if (v === n) {
            m = !0, n = o, a = s;
            break;
          }
          if (v === a) {
            m = !0, a = o, n = s;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = s.child; v; ) {
            if (v === n) {
              m = !0, n = s, a = o;
              break;
            }
            if (v === a) {
              m = !0, a = s, n = o;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function h(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = h(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var y = Object.assign, b = Symbol.for("react.element"), T = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), O = Symbol.for("react.consumer"), U = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), H = Symbol.for("react.memo_cache_sentinel"), K = Symbol.iterator;
  function F(t) {
    return t === null || typeof t != "object" ? null : (t = K && t[K] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var st = Symbol.for("react.client.reference");
  function tt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === st ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case R:
        return "Profiler";
      case M:
        return "StrictMode";
      case j:
        return "Suspense";
      case q:
        return "SuspenseList";
      case _:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case S:
          return "Portal";
        case U:
          return (t.displayName || "Context") + ".Provider";
        case O:
          return (t._context.displayName || "Context") + ".Consumer";
        case W:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case X:
          return e = t.displayName || null, e !== null ? e : tt(t.type) || "Memo";
        case x:
          e = t._payload, t = t._init;
          try {
            return tt(t(e));
          } catch {
          }
      }
    return null;
  }
  var mt = Array.isArray, L = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, nt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, lt = [], E = -1;
  function D(t) {
    return { current: t };
  }
  function $(t) {
    0 > E || (t.current = lt[E], lt[E] = null, E--);
  }
  function I(t, e) {
    E++, lt[E] = t.current, t.current = e;
  }
  var ct = D(null), gt = D(null), ht = D(null), kt = D(null);
  function Y(t, e) {
    switch (I(ht, e), I(gt, t), I(ct, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? sg(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = sg(e), t = cg(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    $(ct), I(ct, t);
  }
  function ut() {
    $(ct), $(gt), $(ht);
  }
  function St(t) {
    t.memoizedState !== null && I(kt, t);
    var e = ct.current, n = cg(e, t.type);
    e !== n && (I(gt, t), I(ct, n));
  }
  function pt(t) {
    gt.current === t && ($(ct), $(gt)), kt.current === t && ($(kt), Go._currentValue = nt);
  }
  var At = Object.prototype.hasOwnProperty, Yt = l.unstable_scheduleCallback, Xt = l.unstable_cancelCallback, Rt = l.unstable_shouldYield, Mt = l.unstable_requestPaint, Lt = l.unstable_now, Dt = l.unstable_getCurrentPriorityLevel, Et = l.unstable_ImmediatePriority, ne = l.unstable_UserBlockingPriority, Ne = l.unstable_NormalPriority, He = l.unstable_LowPriority, Ge = l.unstable_IdlePriority, oe = l.log, ge = l.unstable_setDisableYieldValue, $t = null, Kt = null;
  function re(t) {
    if (typeof oe == "function" && ge(t), Kt && typeof Kt.setStrictMode == "function")
      try {
        Kt.setStrictMode($t, t);
      } catch {
      }
  }
  var ve = Math.clz32 ? Math.clz32 : Ce, el = Math.log, Ze = Math.LN2;
  function Ce(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (el(t) / Ze | 0) | 0;
  }
  var ze = 256, fe = 4194304;
  function Cn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function nl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var o = 0, s = t.suspendedLanes, m = t.pingedLanes;
    t = t.warmLanes;
    var v = a & 134217727;
    return v !== 0 ? (a = v & ~s, a !== 0 ? o = Cn(a) : (m &= v, m !== 0 ? o = Cn(m) : n || (n = v & ~t, n !== 0 && (o = Cn(n))))) : (v = a & ~s, v !== 0 ? o = Cn(v) : m !== 0 ? o = Cn(m) : n || (n = a & ~t, n !== 0 && (o = Cn(n)))), o === 0 ? 0 : e !== 0 && e !== o && (e & s) === 0 && (s = o & -o, n = e & -e, s >= n || s === 32 && (n & 4194048) !== 0) ? e : o;
  }
  function zn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Ra(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Tl() {
    var t = ze;
    return ze <<= 1, (ze & 4194048) === 0 && (ze = 256), t;
  }
  function El() {
    var t = fe;
    return fe <<= 1, (fe & 62914560) === 0 && (fe = 4194304), t;
  }
  function ll(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Qn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function ei(t, e, n, a, o, s) {
    var m = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var v = t.entanglements, A = t.expirationTimes, B = t.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var J = 31 - ve(n), et = 1 << J;
      v[J] = 0, A[J] = -1;
      var V = B[J];
      if (V !== null)
        for (B[J] = null, J = 0; J < V.length; J++) {
          var Q = V[J];
          Q !== null && (Q.lane &= -536870913);
        }
      n &= ~et;
    }
    a !== 0 && je(t, a, 0), s !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(m & ~e));
  }
  function je(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 4194090;
  }
  function sn(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - ve(n), o = 1 << a;
      o & e | t[a] & e && (t[a] |= e), n &= ~o;
    }
  }
  function Ot(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Qt(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ln() {
    var t = Z.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Cg(t.type));
  }
  function _l(t, e) {
    var n = Z.p;
    try {
      return Z.p = t, e();
    } finally {
      Z.p = n;
    }
  }
  var dt = Math.random().toString(36).slice(2), yt = "__reactFiber$" + dt, xt = "__reactProps$" + dt, Se = "__reactContainer$" + dt, Be = "__reactEvents$" + dt, Mn = "__reactListeners$" + dt, Dn = "__reactHandles$" + dt, Ke = "__reactResources$" + dt, Fe = "__reactMarker$" + dt;
  function de(t) {
    delete t[yt], delete t[xt], delete t[Be], delete t[Mn], delete t[Dn];
  }
  function vn(t) {
    var e = t[yt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Se] || n[yt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = mg(t); t !== null; ) {
            if (n = t[yt]) return n;
            t = mg(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Il(t) {
    if (t = t[yt] || t[Se]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ca(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Al(t) {
    var e = t[Ke];
    return e || (e = t[Ke] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Le(t) {
    t[Fe] = !0;
  }
  var $i = /* @__PURE__ */ new Set(), Pi = {};
  function al(t, e) {
    Pt(t, e), Pt(t + "Capture", e);
  }
  function Pt(t, e) {
    for (Pi[t] = e, t = 0; t < e.length; t++)
      $i.add(e[t]);
  }
  var In = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ni = {}, Zl = {};
  function ds(t) {
    return At.call(Zl, t) ? !0 : At.call(ni, t) ? !1 : In.test(t) ? Zl[t] = !0 : (ni[t] = !0, !1);
  }
  function Kl(t, e, n) {
    if (ds(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Sr(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function wl(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  var hs, nh;
  function li(t) {
    if (hs === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        hs = e && e[1] || "", nh = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + hs + t + nh;
  }
  var ms = !1;
  function ps(t, e) {
    if (!t || ms) return "";
    ms = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var et = function() {
                throw Error();
              };
              if (Object.defineProperty(et.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(et, []);
                } catch (Q) {
                  var V = Q;
                }
                Reflect.construct(t, [], et);
              } else {
                try {
                  et.call();
                } catch (Q) {
                  V = Q;
                }
                t.call(et.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                V = Q;
              }
              (et = t()) && typeof et.catch == "function" && et.catch(function() {
              });
            }
          } catch (Q) {
            if (Q && V && typeof Q.stack == "string")
              return [Q.stack, V.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = a.DetermineComponentFrameRoot(), m = s[0], v = s[1];
      if (m && v) {
        var A = m.split(`
`), B = v.split(`
`);
        for (o = a = 0; a < A.length && !A[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; o < B.length && !B[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (a === A.length || o === B.length)
          for (a = A.length - 1, o = B.length - 1; 1 <= a && 0 <= o && A[a] !== B[o]; )
            o--;
        for (; 1 <= a && 0 <= o; a--, o--)
          if (A[a] !== B[o]) {
            if (a !== 1 || o !== 1)
              do
                if (a--, o--, 0 > o || A[a] !== B[o]) {
                  var J = `
` + A[a].replace(" at new ", " at ");
                  return t.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", t.displayName)), J;
                }
              while (1 <= a && 0 <= o);
            break;
          }
      }
    } finally {
      ms = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? li(n) : "";
  }
  function jy(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return li(t.type);
      case 16:
        return li("Lazy");
      case 13:
        return li("Suspense");
      case 19:
        return li("SuspenseList");
      case 0:
      case 15:
        return ps(t.type, !1);
      case 11:
        return ps(t.type.render, !1);
      case 1:
        return ps(t.type, !0);
      case 31:
        return li("Activity");
      default:
        return "";
    }
  }
  function lh(t) {
    try {
      var e = "";
      do
        e += jy(t), t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function Nn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ah(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Ly(t) {
    var e = ah(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    ), a = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, s = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(m) {
          a = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(m) {
          a = "" + m;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function xr(t) {
    t._valueTracker || (t._valueTracker = Ly(t));
  }
  function ih(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = ah(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  function Tr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Uy = /[\n"\\]/g;
  function Hn(t) {
    return t.replace(
      Uy,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function gs(t, e, n, a, o, s, m, v) {
    t.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.type = m : t.removeAttribute("type"), e != null ? m === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Nn(e)) : t.value !== "" + Nn(e) && (t.value = "" + Nn(e)) : m !== "submit" && m !== "reset" || t.removeAttribute("value"), e != null ? vs(t, m, Nn(e)) : n != null ? vs(t, m, Nn(n)) : a != null && t.removeAttribute("value"), o == null && s != null && (t.defaultChecked = !!s), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Nn(v) : t.removeAttribute("name");
  }
  function oh(t, e, n, a, o, s, m, v) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null))
        return;
      n = n != null ? "" + Nn(n) : "", e = e != null ? "" + Nn(e) : n, v || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = v ? t.checked : !!a, t.defaultChecked = !!a, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (t.name = m);
  }
  function vs(t, e, n) {
    e === "number" && Tr(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function ai(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var o = 0; o < n.length; o++)
        e["$" + n[o]] = !0;
      for (n = 0; n < t.length; n++)
        o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Nn(n), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === n) {
          t[o].selected = !0, a && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function rh(t, e, n) {
    if (e != null && (e = "" + Nn(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Nn(n) : "";
  }
  function uh(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (mt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Nn(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a);
  }
  function ii(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ky = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function sh(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || ky.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function ch(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var o in e)
        a = e[o], e.hasOwnProperty(o) && n[o] !== a && sh(t, o, a);
    } else
      for (var s in e)
        e.hasOwnProperty(s) && sh(t, s, e[s]);
  }
  function ys(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var By = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), qy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Er(t) {
    return qy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var bs = null;
  function Ss(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var oi = null, ri = null;
  function fh(t) {
    var e = Il(t);
    if (e && (t = e.stateNode)) {
      var n = t[xt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (gs(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Hn(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var o = a[xt] || null;
                if (!o) throw Error(r(90));
                gs(
                  a,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && ih(a);
          }
          break t;
        case "textarea":
          rh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && ai(t, !!n.multiple, e, !1);
      }
    }
  }
  var xs = !1;
  function dh(t, e, n) {
    if (xs) return t(e, n);
    xs = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (xs = !1, (oi !== null || ri !== null) && (uu(), oi && (e = oi, t = ri, ri = oi = null, fh(e), t)))
        for (e = 0; e < t.length; e++) fh(t[e]);
    }
  }
  function to(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[xt] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var Ol = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ts = !1;
  if (Ol)
    try {
      var eo = {};
      Object.defineProperty(eo, "passive", {
        get: function() {
          Ts = !0;
        }
      }), window.addEventListener("test", eo, eo), window.removeEventListener("test", eo, eo);
    } catch {
      Ts = !1;
    }
  var Fl = null, Es = null, _r = null;
  function hh() {
    if (_r) return _r;
    var t, e = Es, n = e.length, a, o = "value" in Fl ? Fl.value : Fl.textContent, s = o.length;
    for (t = 0; t < n && e[t] === o[t]; t++) ;
    var m = n - t;
    for (a = 1; a <= m && e[n - a] === o[s - a]; a++) ;
    return _r = o.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ar(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function wr() {
    return !0;
  }
  function mh() {
    return !1;
  }
  function dn(t) {
    function e(n, a, o, s, m) {
      this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var v in t)
        t.hasOwnProperty(v) && (n = t[v], this[v] = n ? n(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wr : mh, this.isPropagationStopped = mh, this;
    }
    return y(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wr);
      },
      persist: function() {
      },
      isPersistent: wr
    }), e;
  }
  var za = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Or = dn(za), no = y({}, za, { view: 0, detail: 0 }), Yy = dn(no), _s, As, lo, Rr = y({}, no, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Os,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== lo && (lo && t.type === "mousemove" ? (_s = t.screenX - lo.screenX, As = t.screenY - lo.screenY) : As = _s = 0, lo = t), _s);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : As;
    }
  }), ph = dn(Rr), Gy = y({}, Rr, { dataTransfer: 0 }), Vy = dn(Gy), Xy = y({}, no, { relatedTarget: 0 }), ws = dn(Xy), Qy = y({}, za, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Iy = dn(Qy), Zy = y({}, za, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Ky = dn(Zy), Fy = y({}, za, { data: 0 }), gh = dn(Fy), Jy = {
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
  }, Wy = {
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
  }, $y = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Py(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = $y[t]) ? !!e[t] : !1;
  }
  function Os() {
    return Py;
  }
  var t1 = y({}, no, {
    key: function(t) {
      if (t.key) {
        var e = Jy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ar(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Wy[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Os,
    charCode: function(t) {
      return t.type === "keypress" ? Ar(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ar(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), e1 = dn(t1), n1 = y({}, Rr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), vh = dn(n1), l1 = y({}, no, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Os
  }), a1 = dn(l1), i1 = y({}, za, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), o1 = dn(i1), r1 = y({}, Rr, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), u1 = dn(r1), s1 = y({}, za, {
    newState: 0,
    oldState: 0
  }), c1 = dn(s1), f1 = [9, 13, 27, 32], Rs = Ol && "CompositionEvent" in window, ao = null;
  Ol && "documentMode" in document && (ao = document.documentMode);
  var d1 = Ol && "TextEvent" in window && !ao, yh = Ol && (!Rs || ao && 8 < ao && 11 >= ao), bh = " ", Sh = !1;
  function xh(t, e) {
    switch (t) {
      case "keyup":
        return f1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Th(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ui = !1;
  function h1(t, e) {
    switch (t) {
      case "compositionend":
        return Th(e);
      case "keypress":
        return e.which !== 32 ? null : (Sh = !0, bh);
      case "textInput":
        return t = e.data, t === bh && Sh ? null : t;
      default:
        return null;
    }
  }
  function m1(t, e) {
    if (ui)
      return t === "compositionend" || !Rs && xh(t, e) ? (t = hh(), _r = Es = Fl = null, ui = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return yh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var p1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Eh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!p1[t.type] : e === "textarea";
  }
  function _h(t, e, n, a) {
    oi ? ri ? ri.push(a) : ri = [a] : oi = a, e = mu(e, "onChange"), 0 < e.length && (n = new Or(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var io = null, oo = null;
  function g1(t) {
    ag(t, 0);
  }
  function Cr(t) {
    var e = Ca(t);
    if (ih(e)) return t;
  }
  function Ah(t, e) {
    if (t === "change") return e;
  }
  var wh = !1;
  if (Ol) {
    var Cs;
    if (Ol) {
      var zs = "oninput" in document;
      if (!zs) {
        var Oh = document.createElement("div");
        Oh.setAttribute("oninput", "return;"), zs = typeof Oh.oninput == "function";
      }
      Cs = zs;
    } else Cs = !1;
    wh = Cs && (!document.documentMode || 9 < document.documentMode);
  }
  function Rh() {
    io && (io.detachEvent("onpropertychange", Ch), oo = io = null);
  }
  function Ch(t) {
    if (t.propertyName === "value" && Cr(oo)) {
      var e = [];
      _h(
        e,
        oo,
        t,
        Ss(t)
      ), dh(g1, e);
    }
  }
  function v1(t, e, n) {
    t === "focusin" ? (Rh(), io = e, oo = n, io.attachEvent("onpropertychange", Ch)) : t === "focusout" && Rh();
  }
  function y1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Cr(oo);
  }
  function b1(t, e) {
    if (t === "click") return Cr(e);
  }
  function S1(t, e) {
    if (t === "input" || t === "change")
      return Cr(e);
  }
  function x1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var yn = typeof Object.is == "function" ? Object.is : x1;
  function ro(t, e) {
    if (yn(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var o = n[a];
      if (!At.call(e, o) || !yn(t[o], e[o]))
        return !1;
    }
    return !0;
  }
  function zh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Mh(t, e) {
    var n = zh(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = zh(n);
    }
  }
  function Dh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Dh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Nh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Tr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Tr(t.document);
    }
    return e;
  }
  function Ms(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var T1 = Ol && "documentMode" in document && 11 >= document.documentMode, si = null, Ds = null, uo = null, Ns = !1;
  function Hh(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ns || si == null || si !== Tr(a) || (a = si, "selectionStart" in a && Ms(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), uo && ro(uo, a) || (uo = a, a = mu(Ds, "onSelect"), 0 < a.length && (e = new Or(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = si)));
  }
  function Ma(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var ci = {
    animationend: Ma("Animation", "AnimationEnd"),
    animationiteration: Ma("Animation", "AnimationIteration"),
    animationstart: Ma("Animation", "AnimationStart"),
    transitionrun: Ma("Transition", "TransitionRun"),
    transitionstart: Ma("Transition", "TransitionStart"),
    transitioncancel: Ma("Transition", "TransitionCancel"),
    transitionend: Ma("Transition", "TransitionEnd")
  }, Hs = {}, jh = {};
  Ol && (jh = document.createElement("div").style, "AnimationEvent" in window || (delete ci.animationend.animation, delete ci.animationiteration.animation, delete ci.animationstart.animation), "TransitionEvent" in window || delete ci.transitionend.transition);
  function Da(t) {
    if (Hs[t]) return Hs[t];
    if (!ci[t]) return t;
    var e = ci[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in jh)
        return Hs[t] = e[n];
    return t;
  }
  var Lh = Da("animationend"), Uh = Da("animationiteration"), kh = Da("animationstart"), E1 = Da("transitionrun"), _1 = Da("transitionstart"), A1 = Da("transitioncancel"), Bh = Da("transitionend"), qh = /* @__PURE__ */ new Map(), js = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  js.push("scrollEnd");
  function Zn(t, e) {
    qh.set(t, e), al(e, [t]);
  }
  var Yh = /* @__PURE__ */ new WeakMap();
  function jn(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Yh.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: lh(e)
      }, Yh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: lh(e)
    };
  }
  var Ln = [], fi = 0, Ls = 0;
  function zr() {
    for (var t = fi, e = Ls = fi = 0; e < t; ) {
      var n = Ln[e];
      Ln[e++] = null;
      var a = Ln[e];
      Ln[e++] = null;
      var o = Ln[e];
      Ln[e++] = null;
      var s = Ln[e];
      if (Ln[e++] = null, a !== null && o !== null) {
        var m = a.pending;
        m === null ? o.next = o : (o.next = m.next, m.next = o), a.pending = o;
      }
      s !== 0 && Gh(n, o, s);
    }
  }
  function Mr(t, e, n, a) {
    Ln[fi++] = t, Ln[fi++] = e, Ln[fi++] = n, Ln[fi++] = a, Ls |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Us(t, e, n, a) {
    return Mr(t, e, n, a), Dr(t);
  }
  function di(t, e) {
    return Mr(t, null, null, e), Dr(t);
  }
  function Gh(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var o = !1, s = t.return; s !== null; )
      s.childLanes |= n, a = s.alternate, a !== null && (a.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (o = !0)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, o && e !== null && (o = 31 - ve(n), t = s.hiddenUpdates, a = t[o], a === null ? t[o] = [e] : a.push(e), e.lane = n | 536870912), s) : null;
  }
  function Dr(t) {
    if (50 < Ho)
      throw Ho = 0, Vc = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var hi = {};
  function w1(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bn(t, e, n, a) {
    return new w1(t, e, n, a);
  }
  function ks(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Rl(t, e) {
    var n = t.alternate;
    return n === null ? (n = bn(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Vh(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Nr(t, e, n, a, o, s) {
    var m = 0;
    if (a = t, typeof t == "function") ks(t) && (m = 1);
    else if (typeof t == "string")
      m = Rb(
        t,
        n,
        ct.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case _:
          return t = bn(31, n, e, o), t.elementType = _, t.lanes = s, t;
        case C:
          return Na(n.children, o, s, e);
        case M:
          m = 8, o |= 24;
          break;
        case R:
          return t = bn(12, n, e, o | 2), t.elementType = R, t.lanes = s, t;
        case j:
          return t = bn(13, n, e, o), t.elementType = j, t.lanes = s, t;
        case q:
          return t = bn(19, n, e, o), t.elementType = q, t.lanes = s, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case w:
              case U:
                m = 10;
                break t;
              case O:
                m = 9;
                break t;
              case W:
                m = 11;
                break t;
              case X:
                m = 14;
                break t;
              case x:
                m = 16, a = null;
                break t;
            }
          m = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = bn(m, n, e, o), e.elementType = t, e.type = a, e.lanes = s, e;
  }
  function Na(t, e, n, a) {
    return t = bn(7, t, a, e), t.lanes = n, t;
  }
  function Bs(t, e, n) {
    return t = bn(6, t, null, e), t.lanes = n, t;
  }
  function qs(t, e, n) {
    return e = bn(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var mi = [], pi = 0, Hr = null, jr = 0, Un = [], kn = 0, Ha = null, Cl = 1, zl = "";
  function ja(t, e) {
    mi[pi++] = jr, mi[pi++] = Hr, Hr = t, jr = e;
  }
  function Xh(t, e, n) {
    Un[kn++] = Cl, Un[kn++] = zl, Un[kn++] = Ha, Ha = t;
    var a = Cl;
    t = zl;
    var o = 32 - ve(a) - 1;
    a &= ~(1 << o), n += 1;
    var s = 32 - ve(e) + o;
    if (30 < s) {
      var m = o - o % 5;
      s = (a & (1 << m) - 1).toString(32), a >>= m, o -= m, Cl = 1 << 32 - ve(e) + o | n << o | a, zl = s + t;
    } else
      Cl = 1 << s | n << o | a, zl = t;
  }
  function Ys(t) {
    t.return !== null && (ja(t, 1), Xh(t, 1, 0));
  }
  function Gs(t) {
    for (; t === Hr; )
      Hr = mi[--pi], mi[pi] = null, jr = mi[--pi], mi[pi] = null;
    for (; t === Ha; )
      Ha = Un[--kn], Un[kn] = null, zl = Un[--kn], Un[kn] = null, Cl = Un[--kn], Un[kn] = null;
  }
  var cn = null, Me = null, ae = !1, La = null, il = !1, Vs = Error(r(519));
  function Ua(t) {
    var e = Error(r(418, ""));
    throw fo(jn(e, t)), Vs;
  }
  function Qh(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[yt] = t, e[xt] = a, n) {
      case "dialog":
        Jt("cancel", e), Jt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Jt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Lo.length; n++)
          Jt(Lo[n], e);
        break;
      case "source":
        Jt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Jt("error", e), Jt("load", e);
        break;
      case "details":
        Jt("toggle", e);
        break;
      case "input":
        Jt("invalid", e), oh(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), xr(e);
        break;
      case "select":
        Jt("invalid", e);
        break;
      case "textarea":
        Jt("invalid", e), uh(e, a.value, a.defaultValue, a.children), xr(e);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || ug(e.textContent, n) ? (a.popover != null && (Jt("beforetoggle", e), Jt("toggle", e)), a.onScroll != null && Jt("scroll", e), a.onScrollEnd != null && Jt("scrollend", e), a.onClick != null && (e.onclick = pu), e = !0) : e = !1, e || Ua(t);
  }
  function Ih(t) {
    for (cn = t.return; cn; )
      switch (cn.tag) {
        case 5:
        case 13:
          il = !1;
          return;
        case 27:
        case 3:
          il = !0;
          return;
        default:
          cn = cn.return;
      }
  }
  function so(t) {
    if (t !== cn) return !1;
    if (!ae) return Ih(t), ae = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || of(t.type, t.memoizedProps)), n = !n), n && Me && Ua(t), Ih(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (n = t.data, n === "/$") {
              if (e === 0) {
                Me = Fn(t.nextSibling);
                break t;
              }
              e--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || e++;
          t = t.nextSibling;
        }
        Me = null;
      }
    } else
      e === 27 ? (e = Me, fa(t.type) ? (t = cf, cf = null, Me = t) : Me = e) : Me = cn ? Fn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function co() {
    Me = cn = null, ae = !1;
  }
  function Zh() {
    var t = La;
    return t !== null && (pn === null ? pn = t : pn.push.apply(
      pn,
      t
    ), La = null), t;
  }
  function fo(t) {
    La === null ? La = [t] : La.push(t);
  }
  var Xs = D(null), ka = null, Ml = null;
  function Jl(t, e, n) {
    I(Xs, e._currentValue), e._currentValue = n;
  }
  function Dl(t) {
    t._currentValue = Xs.current, $(Xs);
  }
  function Qs(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Is(t, e, n, a) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var s = o.dependencies;
      if (s !== null) {
        var m = o.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var v = s;
          s = o;
          for (var A = 0; A < e.length; A++)
            if (v.context === e[A]) {
              s.lanes |= n, v = s.alternate, v !== null && (v.lanes |= n), Qs(
                s.return,
                n,
                t
              ), a || (m = null);
              break t;
            }
          s = v.next;
        }
      } else if (o.tag === 18) {
        if (m = o.return, m === null) throw Error(r(341));
        m.lanes |= n, s = m.alternate, s !== null && (s.lanes |= n), Qs(m, n, t), m = null;
      } else m = o.child;
      if (m !== null) m.return = o;
      else
        for (m = o; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (o = m.sibling, o !== null) {
            o.return = m.return, m = o;
            break;
          }
          m = m.return;
        }
      o = m;
    }
  }
  function ho(t, e, n, a) {
    t = null;
    for (var o = e, s = !1; o !== null; ) {
      if (!s) {
        if ((o.flags & 524288) !== 0) s = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var m = o.alternate;
        if (m === null) throw Error(r(387));
        if (m = m.memoizedProps, m !== null) {
          var v = o.type;
          yn(o.pendingProps.value, m.value) || (t !== null ? t.push(v) : t = [v]);
        }
      } else if (o === kt.current) {
        if (m = o.alternate, m === null) throw Error(r(387));
        m.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(Go) : t = [Go]);
      }
      o = o.return;
    }
    t !== null && Is(
      e,
      t,
      n,
      a
    ), e.flags |= 262144;
  }
  function Lr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!yn(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ba(t) {
    ka = t, Ml = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function an(t) {
    return Kh(ka, t);
  }
  function Ur(t, e) {
    return ka === null && Ba(t), Kh(t, e);
  }
  function Kh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Ml === null) {
      if (t === null) throw Error(r(308));
      Ml = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ml = Ml.next = e;
    return n;
  }
  var O1 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, R1 = l.unstable_scheduleCallback, C1 = l.unstable_NormalPriority, Ve = {
    $$typeof: U,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Zs() {
    return {
      controller: new O1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function mo(t) {
    t.refCount--, t.refCount === 0 && R1(C1, function() {
      t.controller.abort();
    });
  }
  var po = null, Ks = 0, gi = 0, vi = null;
  function z1(t, e) {
    if (po === null) {
      var n = po = [];
      Ks = 0, gi = Jc(), vi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Ks++, e.then(Fh, Fh), e;
  }
  function Fh() {
    if (--Ks === 0 && po !== null) {
      vi !== null && (vi.status = "fulfilled");
      var t = po;
      po = null, gi = 0, vi = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function M1(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var o = 0; o < n.length; o++) (0, n[o])(e);
      },
      function(o) {
        for (a.status = "rejected", a.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), a;
  }
  var Jh = L.S;
  L.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && z1(t, e), Jh !== null && Jh(t, e);
  };
  var qa = D(null);
  function Fs() {
    var t = qa.current;
    return t !== null ? t : xe.pooledCache;
  }
  function kr(t, e) {
    e === null ? I(qa, qa.current) : I(qa, e.pool);
  }
  function Wh() {
    var t = Fs();
    return t === null ? null : { parent: Ve._currentValue, pool: t };
  }
  var go = Error(r(460)), $h = Error(r(474)), Br = Error(r(542)), Js = { then: function() {
  } };
  function Ph(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function qr() {
  }
  function tm(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(qr, qr), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, nm(t), t;
      default:
        if (typeof e.status == "string") e.then(qr, qr);
        else {
          if (t = xe, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var o = e;
                o.status = "fulfilled", o.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var o = e;
                o.status = "rejected", o.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, nm(t), t;
        }
        throw vo = e, go;
    }
  }
  var vo = null;
  function em() {
    if (vo === null) throw Error(r(459));
    var t = vo;
    return vo = null, t;
  }
  function nm(t) {
    if (t === go || t === Br)
      throw Error(r(483));
  }
  var Wl = !1;
  function Ws(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function $s(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function $l(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Pl(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ue & 2) !== 0) {
      var o = a.pending;
      return o === null ? e.next = e : (e.next = o.next, o.next = e), a.pending = e, e = Dr(t), Gh(t, null, n), e;
    }
    return Mr(t, a, e, n), Dr(t);
  }
  function yo(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, sn(t, n);
    }
  }
  function Ps(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var o = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? o = s = m : s = s.next = m, n = n.next;
        } while (n !== null);
        s === null ? o = s = e : s = s.next = e;
      } else o = s = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: s,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var tc = !1;
  function bo() {
    if (tc) {
      var t = vi;
      if (t !== null) throw t;
    }
  }
  function So(t, e, n, a) {
    tc = !1;
    var o = t.updateQueue;
    Wl = !1;
    var s = o.firstBaseUpdate, m = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var A = v, B = A.next;
      A.next = null, m === null ? s = B : m.next = B, m = A;
      var J = t.alternate;
      J !== null && (J = J.updateQueue, v = J.lastBaseUpdate, v !== m && (v === null ? J.firstBaseUpdate = B : v.next = B, J.lastBaseUpdate = A));
    }
    if (s !== null) {
      var et = o.baseState;
      m = 0, J = B = A = null, v = s;
      do {
        var V = v.lane & -536870913, Q = V !== v.lane;
        if (Q ? (te & V) === V : (a & V) === V) {
          V !== 0 && V === gi && (tc = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var Nt = t, Ct = v;
            V = e;
            var pe = n;
            switch (Ct.tag) {
              case 1:
                if (Nt = Ct.payload, typeof Nt == "function") {
                  et = Nt.call(pe, et, V);
                  break t;
                }
                et = Nt;
                break t;
              case 3:
                Nt.flags = Nt.flags & -65537 | 128;
              case 0:
                if (Nt = Ct.payload, V = typeof Nt == "function" ? Nt.call(pe, et, V) : Nt, V == null) break t;
                et = y({}, et, V);
                break t;
              case 2:
                Wl = !0;
            }
          }
          V = v.callback, V !== null && (t.flags |= 64, Q && (t.flags |= 8192), Q = o.callbacks, Q === null ? o.callbacks = [V] : Q.push(V));
        } else
          Q = {
            lane: V,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, J === null ? (B = J = Q, A = et) : J = J.next = Q, m |= V;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null)
            break;
          Q = v, v = Q.next, Q.next = null, o.lastBaseUpdate = Q, o.shared.pending = null;
        }
      } while (!0);
      J === null && (A = et), o.baseState = A, o.firstBaseUpdate = B, o.lastBaseUpdate = J, s === null && (o.shared.lanes = 0), ra |= m, t.lanes = m, t.memoizedState = et;
    }
  }
  function lm(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function am(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        lm(n[t], e);
  }
  var yi = D(null), Yr = D(0);
  function im(t, e) {
    t = Bl, I(Yr, t), I(yi, e), Bl = t | e.baseLanes;
  }
  function ec() {
    I(Yr, Bl), I(yi, yi.current);
  }
  function nc() {
    Bl = Yr.current, $(yi), $(Yr);
  }
  var ta = 0, Gt = null, he = null, qe = null, Gr = !1, bi = !1, Ya = !1, Vr = 0, xo = 0, Si = null, D1 = 0;
  function Ue() {
    throw Error(r(321));
  }
  function lc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!yn(t[n], e[n])) return !1;
    return !0;
  }
  function ac(t, e, n, a, o, s) {
    return ta = s, Gt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, L.H = t === null || t.memoizedState === null ? Gm : Vm, Ya = !1, s = n(a, o), Ya = !1, bi && (s = rm(
      e,
      n,
      a,
      o
    )), om(t), s;
  }
  function om(t) {
    L.H = Fr;
    var e = he !== null && he.next !== null;
    if (ta = 0, qe = he = Gt = null, Gr = !1, xo = 0, Si = null, e) throw Error(r(300));
    t === null || Je || (t = t.dependencies, t !== null && Lr(t) && (Je = !0));
  }
  function rm(t, e, n, a) {
    Gt = t;
    var o = 0;
    do {
      if (bi && (Si = null), xo = 0, bi = !1, 25 <= o) throw Error(r(301));
      if (o += 1, qe = he = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      L.H = B1, s = e(n, a);
    } while (bi);
    return s;
  }
  function N1() {
    var t = L.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? To(e) : e, t = t.useState()[0], (he !== null ? he.memoizedState : null) !== t && (Gt.flags |= 1024), e;
  }
  function ic() {
    var t = Vr !== 0;
    return Vr = 0, t;
  }
  function oc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function rc(t) {
    if (Gr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Gr = !1;
    }
    ta = 0, qe = he = Gt = null, bi = !1, xo = Vr = 0, Si = null;
  }
  function hn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return qe === null ? Gt.memoizedState = qe = t : qe = qe.next = t, qe;
  }
  function Ye() {
    if (he === null) {
      var t = Gt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = he.next;
    var e = qe === null ? Gt.memoizedState : qe.next;
    if (e !== null)
      qe = e, he = t;
    else {
      if (t === null)
        throw Gt.alternate === null ? Error(r(467)) : Error(r(310));
      he = t, t = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null
      }, qe === null ? Gt.memoizedState = qe = t : qe = qe.next = t;
    }
    return qe;
  }
  function uc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function To(t) {
    var e = xo;
    return xo += 1, Si === null && (Si = []), t = tm(Si, t, e), e = Gt, (qe === null ? e.memoizedState : qe.next) === null && (e = e.alternate, L.H = e === null || e.memoizedState === null ? Gm : Vm), t;
  }
  function Xr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return To(t);
      if (t.$$typeof === U) return an(t);
    }
    throw Error(r(438, String(t)));
  }
  function sc(t) {
    var e = null, n = Gt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = Gt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = uc(), Gt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = H;
    return e.index++, n;
  }
  function Nl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Qr(t) {
    var e = Ye();
    return cc(e, he, t);
  }
  function cc(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var o = t.baseQueue, s = a.pending;
    if (s !== null) {
      if (o !== null) {
        var m = o.next;
        o.next = s.next, s.next = m;
      }
      e.baseQueue = o = s, a.pending = null;
    }
    if (s = t.baseState, o === null) t.memoizedState = s;
    else {
      e = o.next;
      var v = m = null, A = null, B = e, J = !1;
      do {
        var et = B.lane & -536870913;
        if (et !== B.lane ? (te & et) === et : (ta & et) === et) {
          var V = B.revertLane;
          if (V === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), et === gi && (J = !0);
          else if ((ta & V) === V) {
            B = B.next, V === gi && (J = !0);
            continue;
          } else
            et = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, A === null ? (v = A = et, m = s) : A = A.next = et, Gt.lanes |= V, ra |= V;
          et = B.action, Ya && n(s, et), s = B.hasEagerState ? B.eagerState : n(s, et);
        } else
          V = {
            lane: et,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, A === null ? (v = A = V, m = s) : A = A.next = V, Gt.lanes |= et, ra |= et;
        B = B.next;
      } while (B !== null && B !== e);
      if (A === null ? m = s : A.next = v, !yn(s, t.memoizedState) && (Je = !0, J && (n = vi, n !== null)))
        throw n;
      t.memoizedState = s, t.baseState = m, t.baseQueue = A, a.lastRenderedState = s;
    }
    return o === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function fc(t) {
    var e = Ye(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, o = n.pending, s = e.memoizedState;
    if (o !== null) {
      n.pending = null;
      var m = o = o.next;
      do
        s = t(s, m.action), m = m.next;
      while (m !== o);
      yn(s, e.memoizedState) || (Je = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [s, a];
  }
  function um(t, e, n) {
    var a = Gt, o = Ye(), s = ae;
    if (s) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var m = !yn(
      (he || o).memoizedState,
      n
    );
    m && (o.memoizedState = n, Je = !0), o = o.queue;
    var v = fm.bind(null, a, o, t);
    if (Eo(2048, 8, v, [t]), o.getSnapshot !== e || m || qe !== null && qe.memoizedState.tag & 1) {
      if (a.flags |= 2048, xi(
        9,
        Ir(),
        cm.bind(
          null,
          a,
          o,
          n,
          e
        ),
        null
      ), xe === null) throw Error(r(349));
      s || (ta & 124) !== 0 || sm(a, e, n);
    }
    return n;
  }
  function sm(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Gt.updateQueue, e === null ? (e = uc(), Gt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function cm(t, e, n, a) {
    e.value = n, e.getSnapshot = a, dm(e) && hm(t);
  }
  function fm(t, e, n) {
    return n(function() {
      dm(e) && hm(t);
    });
  }
  function dm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !yn(t, n);
    } catch {
      return !0;
    }
  }
  function hm(t) {
    var e = di(t, 2);
    e !== null && _n(e, t, 2);
  }
  function dc(t) {
    var e = hn();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Ya) {
        re(!0);
        try {
          n();
        } finally {
          re(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nl,
      lastRenderedState: t
    }, e;
  }
  function mm(t, e, n, a) {
    return t.baseState = n, cc(
      t,
      he,
      typeof a == "function" ? a : Nl
    );
  }
  function H1(t, e, n, a, o) {
    if (Kr(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var s = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      L.T !== null ? n(!0) : s.isTransition = !1, a(s), n = e.pending, n === null ? (s.next = e.pending = s, pm(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function pm(t, e) {
    var n = e.action, a = e.payload, o = t.state;
    if (e.isTransition) {
      var s = L.T, m = {};
      L.T = m;
      try {
        var v = n(o, a), A = L.S;
        A !== null && A(m, v), gm(t, e, v);
      } catch (B) {
        hc(t, e, B);
      } finally {
        L.T = s;
      }
    } else
      try {
        s = n(o, a), gm(t, e, s);
      } catch (B) {
        hc(t, e, B);
      }
  }
  function gm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        vm(t, e, a);
      },
      function(a) {
        return hc(t, e, a);
      }
    ) : vm(t, e, n);
  }
  function vm(t, e, n) {
    e.status = "fulfilled", e.value = n, ym(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, pm(t, n)));
  }
  function hc(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, ym(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function ym(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function bm(t, e) {
    return e;
  }
  function Sm(t, e) {
    if (ae) {
      var n = xe.formState;
      if (n !== null) {
        t: {
          var a = Gt;
          if (ae) {
            if (Me) {
              e: {
                for (var o = Me, s = il; o.nodeType !== 8; ) {
                  if (!s) {
                    o = null;
                    break e;
                  }
                  if (o = Fn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break e;
                  }
                }
                s = o.data, o = s === "F!" || s === "F" ? o : null;
              }
              if (o) {
                Me = Fn(
                  o.nextSibling
                ), a = o.data === "F!";
                break t;
              }
            }
            Ua(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = hn(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bm,
      lastRenderedState: e
    }, n.queue = a, n = Bm.bind(
      null,
      Gt,
      a
    ), a.dispatch = n, a = dc(!1), s = yc.bind(
      null,
      Gt,
      !1,
      a.queue
    ), a = hn(), o = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = o, n = H1.bind(
      null,
      Gt,
      o,
      s,
      n
    ), o.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function xm(t) {
    var e = Ye();
    return Tm(e, he, t);
  }
  function Tm(t, e, n) {
    if (e = cc(
      t,
      e,
      bm
    )[0], t = Qr(Nl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = To(e);
      } catch (m) {
        throw m === go ? Br : m;
      }
    else a = e;
    e = Ye();
    var o = e.queue, s = o.dispatch;
    return n !== e.memoizedState && (Gt.flags |= 2048, xi(
      9,
      Ir(),
      j1.bind(null, o, n),
      null
    )), [a, s, t];
  }
  function j1(t, e) {
    t.action = e;
  }
  function Em(t) {
    var e = Ye(), n = he;
    if (n !== null)
      return Tm(e, n, t);
    Ye(), e = e.memoizedState, n = Ye();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function xi(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = Gt.updateQueue, e === null && (e = uc(), Gt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Ir() {
    return { destroy: void 0, resource: void 0 };
  }
  function _m() {
    return Ye().memoizedState;
  }
  function Zr(t, e, n, a) {
    var o = hn();
    a = a === void 0 ? null : a, Gt.flags |= t, o.memoizedState = xi(
      1 | e,
      Ir(),
      n,
      a
    );
  }
  function Eo(t, e, n, a) {
    var o = Ye();
    a = a === void 0 ? null : a;
    var s = o.memoizedState.inst;
    he !== null && a !== null && lc(a, he.memoizedState.deps) ? o.memoizedState = xi(e, s, n, a) : (Gt.flags |= t, o.memoizedState = xi(
      1 | e,
      s,
      n,
      a
    ));
  }
  function Am(t, e) {
    Zr(8390656, 8, t, e);
  }
  function wm(t, e) {
    Eo(2048, 8, t, e);
  }
  function Om(t, e) {
    return Eo(4, 2, t, e);
  }
  function Rm(t, e) {
    return Eo(4, 4, t, e);
  }
  function Cm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function zm(t, e, n) {
    n = n != null ? n.concat([t]) : null, Eo(4, 4, Cm.bind(null, e, t), n);
  }
  function mc() {
  }
  function Mm(t, e) {
    var n = Ye();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && lc(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Dm(t, e) {
    var n = Ye();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && lc(e, a[1]))
      return a[0];
    if (a = t(), Ya) {
      re(!0);
      try {
        t();
      } finally {
        re(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function pc(t, e, n) {
    return n === void 0 || (ta & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n, t = jp(), Gt.lanes |= t, ra |= t, n);
  }
  function Nm(t, e, n, a) {
    return yn(n, e) ? n : yi.current !== null ? (t = pc(t, n, a), yn(t, e) || (Je = !0), t) : (ta & 42) === 0 ? (Je = !0, t.memoizedState = n) : (t = jp(), Gt.lanes |= t, ra |= t, e);
  }
  function Hm(t, e, n, a, o) {
    var s = Z.p;
    Z.p = s !== 0 && 8 > s ? s : 8;
    var m = L.T, v = {};
    L.T = v, yc(t, !1, e, n);
    try {
      var A = o(), B = L.S;
      if (B !== null && B(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var J = M1(
          A,
          a
        );
        _o(
          t,
          e,
          J,
          En(t)
        );
      } else
        _o(
          t,
          e,
          a,
          En(t)
        );
    } catch (et) {
      _o(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: et },
        En()
      );
    } finally {
      Z.p = s, L.T = m;
    }
  }
  function L1() {
  }
  function gc(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var o = jm(t).queue;
    Hm(
      t,
      o,
      e,
      nt,
      n === null ? L1 : function() {
        return Lm(t), n(a);
      }
    );
  }
  function jm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: nt,
      baseState: nt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nl,
        lastRenderedState: nt
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nl,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Lm(t) {
    var e = jm(t).next.queue;
    _o(t, e, {}, En());
  }
  function vc() {
    return an(Go);
  }
  function Um() {
    return Ye().memoizedState;
  }
  function km() {
    return Ye().memoizedState;
  }
  function U1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = En();
          t = $l(n);
          var a = Pl(e, t, n);
          a !== null && (_n(a, e, n), yo(a, e, n)), e = { cache: Zs() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function k1(t, e, n) {
    var a = En();
    n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Kr(t) ? qm(e, n) : (n = Us(t, e, n, a), n !== null && (_n(n, t, a), Ym(n, e, a)));
  }
  function Bm(t, e, n) {
    var a = En();
    _o(t, e, n, a);
  }
  function _o(t, e, n, a) {
    var o = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Kr(t)) qm(e, o);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null))
        try {
          var m = e.lastRenderedState, v = s(m, n);
          if (o.hasEagerState = !0, o.eagerState = v, yn(v, m))
            return Mr(t, e, o, 0), xe === null && zr(), !1;
        } catch {
        } finally {
        }
      if (n = Us(t, e, o, a), n !== null)
        return _n(n, t, a), Ym(n, e, a), !0;
    }
    return !1;
  }
  function yc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Jc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Kr(t)) {
      if (e) throw Error(r(479));
    } else
      e = Us(
        t,
        n,
        a,
        2
      ), e !== null && _n(e, t, 2);
  }
  function Kr(t) {
    var e = t.alternate;
    return t === Gt || e !== null && e === Gt;
  }
  function qm(t, e) {
    bi = Gr = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Ym(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, sn(t, n);
    }
  }
  var Fr = {
    readContext: an,
    use: Xr,
    useCallback: Ue,
    useContext: Ue,
    useEffect: Ue,
    useImperativeHandle: Ue,
    useLayoutEffect: Ue,
    useInsertionEffect: Ue,
    useMemo: Ue,
    useReducer: Ue,
    useRef: Ue,
    useState: Ue,
    useDebugValue: Ue,
    useDeferredValue: Ue,
    useTransition: Ue,
    useSyncExternalStore: Ue,
    useId: Ue,
    useHostTransitionStatus: Ue,
    useFormState: Ue,
    useActionState: Ue,
    useOptimistic: Ue,
    useMemoCache: Ue,
    useCacheRefresh: Ue
  }, Gm = {
    readContext: an,
    use: Xr,
    useCallback: function(t, e) {
      return hn().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: an,
    useEffect: Am,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Zr(
        4194308,
        4,
        Cm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Zr(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Zr(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = hn();
      e = e === void 0 ? null : e;
      var a = t();
      if (Ya) {
        re(!0);
        try {
          t();
        } finally {
          re(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = hn();
      if (n !== void 0) {
        var o = n(e);
        if (Ya) {
          re(!0);
          try {
            n(e);
          } finally {
            re(!1);
          }
        }
      } else o = e;
      return a.memoizedState = a.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, a.queue = t, t = t.dispatch = k1.bind(
        null,
        Gt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = hn();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = dc(t);
      var e = t.queue, n = Bm.bind(null, Gt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: mc,
    useDeferredValue: function(t, e) {
      var n = hn();
      return pc(n, t, e);
    },
    useTransition: function() {
      var t = dc(!1);
      return t = Hm.bind(
        null,
        Gt,
        t.queue,
        !0,
        !1
      ), hn().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = Gt, o = hn();
      if (ae) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), xe === null)
          throw Error(r(349));
        (te & 124) !== 0 || sm(a, e, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return o.queue = s, Am(fm.bind(null, a, s, t), [
        t
      ]), a.flags |= 2048, xi(
        9,
        Ir(),
        cm.bind(
          null,
          a,
          s,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = hn(), e = xe.identifierPrefix;
      if (ae) {
        var n = zl, a = Cl;
        n = (a & ~(1 << 32 - ve(a) - 1)).toString(32) + n, e = "«" + e + "R" + n, n = Vr++, 0 < n && (e += "H" + n.toString(32)), e += "»";
      } else
        n = D1++, e = "«" + e + "r" + n.toString(32) + "»";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: vc,
    useFormState: Sm,
    useActionState: Sm,
    useOptimistic: function(t) {
      var e = hn();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = yc.bind(
        null,
        Gt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: sc,
    useCacheRefresh: function() {
      return hn().memoizedState = U1.bind(
        null,
        Gt
      );
    }
  }, Vm = {
    readContext: an,
    use: Xr,
    useCallback: Mm,
    useContext: an,
    useEffect: wm,
    useImperativeHandle: zm,
    useInsertionEffect: Om,
    useLayoutEffect: Rm,
    useMemo: Dm,
    useReducer: Qr,
    useRef: _m,
    useState: function() {
      return Qr(Nl);
    },
    useDebugValue: mc,
    useDeferredValue: function(t, e) {
      var n = Ye();
      return Nm(
        n,
        he.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Qr(Nl)[0], e = Ye().memoizedState;
      return [
        typeof t == "boolean" ? t : To(t),
        e
      ];
    },
    useSyncExternalStore: um,
    useId: Um,
    useHostTransitionStatus: vc,
    useFormState: xm,
    useActionState: xm,
    useOptimistic: function(t, e) {
      var n = Ye();
      return mm(n, he, t, e);
    },
    useMemoCache: sc,
    useCacheRefresh: km
  }, B1 = {
    readContext: an,
    use: Xr,
    useCallback: Mm,
    useContext: an,
    useEffect: wm,
    useImperativeHandle: zm,
    useInsertionEffect: Om,
    useLayoutEffect: Rm,
    useMemo: Dm,
    useReducer: fc,
    useRef: _m,
    useState: function() {
      return fc(Nl);
    },
    useDebugValue: mc,
    useDeferredValue: function(t, e) {
      var n = Ye();
      return he === null ? pc(n, t, e) : Nm(
        n,
        he.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = fc(Nl)[0], e = Ye().memoizedState;
      return [
        typeof t == "boolean" ? t : To(t),
        e
      ];
    },
    useSyncExternalStore: um,
    useId: Um,
    useHostTransitionStatus: vc,
    useFormState: Em,
    useActionState: Em,
    useOptimistic: function(t, e) {
      var n = Ye();
      return he !== null ? mm(n, he, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: sc,
    useCacheRefresh: km
  }, Ti = null, Ao = 0;
  function Jr(t) {
    var e = Ao;
    return Ao += 1, Ti === null && (Ti = []), tm(Ti, t, e);
  }
  function wo(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Wr(t, e) {
    throw e.$$typeof === b ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Xm(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Qm(t) {
    function e(N, z) {
      if (t) {
        var k = N.deletions;
        k === null ? (N.deletions = [z], N.flags |= 16) : k.push(z);
      }
    }
    function n(N, z) {
      if (!t) return null;
      for (; z !== null; )
        e(N, z), z = z.sibling;
      return null;
    }
    function a(N) {
      for (var z = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? z.set(N.key, N) : z.set(N.index, N), N = N.sibling;
      return z;
    }
    function o(N, z) {
      return N = Rl(N, z), N.index = 0, N.sibling = null, N;
    }
    function s(N, z, k) {
      return N.index = k, t ? (k = N.alternate, k !== null ? (k = k.index, k < z ? (N.flags |= 67108866, z) : k) : (N.flags |= 67108866, z)) : (N.flags |= 1048576, z);
    }
    function m(N) {
      return t && N.alternate === null && (N.flags |= 67108866), N;
    }
    function v(N, z, k, P) {
      return z === null || z.tag !== 6 ? (z = Bs(k, N.mode, P), z.return = N, z) : (z = o(z, k), z.return = N, z);
    }
    function A(N, z, k, P) {
      var bt = k.type;
      return bt === C ? J(
        N,
        z,
        k.props.children,
        P,
        k.key
      ) : z !== null && (z.elementType === bt || typeof bt == "object" && bt !== null && bt.$$typeof === x && Xm(bt) === z.type) ? (z = o(z, k.props), wo(z, k), z.return = N, z) : (z = Nr(
        k.type,
        k.key,
        k.props,
        null,
        N.mode,
        P
      ), wo(z, k), z.return = N, z);
    }
    function B(N, z, k, P) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== k.containerInfo || z.stateNode.implementation !== k.implementation ? (z = qs(k, N.mode, P), z.return = N, z) : (z = o(z, k.children || []), z.return = N, z);
    }
    function J(N, z, k, P, bt) {
      return z === null || z.tag !== 7 ? (z = Na(
        k,
        N.mode,
        P,
        bt
      ), z.return = N, z) : (z = o(z, k), z.return = N, z);
    }
    function et(N, z, k) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Bs(
          "" + z,
          N.mode,
          k
        ), z.return = N, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case T:
            return k = Nr(
              z.type,
              z.key,
              z.props,
              null,
              N.mode,
              k
            ), wo(k, z), k.return = N, k;
          case S:
            return z = qs(
              z,
              N.mode,
              k
            ), z.return = N, z;
          case x:
            var P = z._init;
            return z = P(z._payload), et(N, z, k);
        }
        if (mt(z) || F(z))
          return z = Na(
            z,
            N.mode,
            k,
            null
          ), z.return = N, z;
        if (typeof z.then == "function")
          return et(N, Jr(z), k);
        if (z.$$typeof === U)
          return et(
            N,
            Ur(N, z),
            k
          );
        Wr(N, z);
      }
      return null;
    }
    function V(N, z, k, P) {
      var bt = z !== null ? z.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return bt !== null ? null : v(N, z, "" + k, P);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case T:
            return k.key === bt ? A(N, z, k, P) : null;
          case S:
            return k.key === bt ? B(N, z, k, P) : null;
          case x:
            return bt = k._init, k = bt(k._payload), V(N, z, k, P);
        }
        if (mt(k) || F(k))
          return bt !== null ? null : J(N, z, k, P, null);
        if (typeof k.then == "function")
          return V(
            N,
            z,
            Jr(k),
            P
          );
        if (k.$$typeof === U)
          return V(
            N,
            z,
            Ur(N, k),
            P
          );
        Wr(N, k);
      }
      return null;
    }
    function Q(N, z, k, P, bt) {
      if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint")
        return N = N.get(k) || null, v(z, N, "" + P, bt);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case T:
            return N = N.get(
              P.key === null ? k : P.key
            ) || null, A(z, N, P, bt);
          case S:
            return N = N.get(
              P.key === null ? k : P.key
            ) || null, B(z, N, P, bt);
          case x:
            var It = P._init;
            return P = It(P._payload), Q(
              N,
              z,
              k,
              P,
              bt
            );
        }
        if (mt(P) || F(P))
          return N = N.get(k) || null, J(z, N, P, bt, null);
        if (typeof P.then == "function")
          return Q(
            N,
            z,
            k,
            Jr(P),
            bt
          );
        if (P.$$typeof === U)
          return Q(
            N,
            z,
            k,
            Ur(z, P),
            bt
          );
        Wr(z, P);
      }
      return null;
    }
    function Nt(N, z, k, P) {
      for (var bt = null, It = null, _t = z, zt = z = 0, $e = null; _t !== null && zt < k.length; zt++) {
        _t.index > zt ? ($e = _t, _t = null) : $e = _t.sibling;
        var le = V(
          N,
          _t,
          k[zt],
          P
        );
        if (le === null) {
          _t === null && (_t = $e);
          break;
        }
        t && _t && le.alternate === null && e(N, _t), z = s(le, z, zt), It === null ? bt = le : It.sibling = le, It = le, _t = $e;
      }
      if (zt === k.length)
        return n(N, _t), ae && ja(N, zt), bt;
      if (_t === null) {
        for (; zt < k.length; zt++)
          _t = et(N, k[zt], P), _t !== null && (z = s(
            _t,
            z,
            zt
          ), It === null ? bt = _t : It.sibling = _t, It = _t);
        return ae && ja(N, zt), bt;
      }
      for (_t = a(_t); zt < k.length; zt++)
        $e = Q(
          _t,
          N,
          zt,
          k[zt],
          P
        ), $e !== null && (t && $e.alternate !== null && _t.delete(
          $e.key === null ? zt : $e.key
        ), z = s(
          $e,
          z,
          zt
        ), It === null ? bt = $e : It.sibling = $e, It = $e);
      return t && _t.forEach(function(ga) {
        return e(N, ga);
      }), ae && ja(N, zt), bt;
    }
    function Ct(N, z, k, P) {
      if (k == null) throw Error(r(151));
      for (var bt = null, It = null, _t = z, zt = z = 0, $e = null, le = k.next(); _t !== null && !le.done; zt++, le = k.next()) {
        _t.index > zt ? ($e = _t, _t = null) : $e = _t.sibling;
        var ga = V(N, _t, le.value, P);
        if (ga === null) {
          _t === null && (_t = $e);
          break;
        }
        t && _t && ga.alternate === null && e(N, _t), z = s(ga, z, zt), It === null ? bt = ga : It.sibling = ga, It = ga, _t = $e;
      }
      if (le.done)
        return n(N, _t), ae && ja(N, zt), bt;
      if (_t === null) {
        for (; !le.done; zt++, le = k.next())
          le = et(N, le.value, P), le !== null && (z = s(le, z, zt), It === null ? bt = le : It.sibling = le, It = le);
        return ae && ja(N, zt), bt;
      }
      for (_t = a(_t); !le.done; zt++, le = k.next())
        le = Q(_t, N, zt, le.value, P), le !== null && (t && le.alternate !== null && _t.delete(le.key === null ? zt : le.key), z = s(le, z, zt), It === null ? bt = le : It.sibling = le, It = le);
      return t && _t.forEach(function(qb) {
        return e(N, qb);
      }), ae && ja(N, zt), bt;
    }
    function pe(N, z, k, P) {
      if (typeof k == "object" && k !== null && k.type === C && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case T:
            t: {
              for (var bt = k.key; z !== null; ) {
                if (z.key === bt) {
                  if (bt = k.type, bt === C) {
                    if (z.tag === 7) {
                      n(
                        N,
                        z.sibling
                      ), P = o(
                        z,
                        k.props.children
                      ), P.return = N, N = P;
                      break t;
                    }
                  } else if (z.elementType === bt || typeof bt == "object" && bt !== null && bt.$$typeof === x && Xm(bt) === z.type) {
                    n(
                      N,
                      z.sibling
                    ), P = o(z, k.props), wo(P, k), P.return = N, N = P;
                    break t;
                  }
                  n(N, z);
                  break;
                } else e(N, z);
                z = z.sibling;
              }
              k.type === C ? (P = Na(
                k.props.children,
                N.mode,
                P,
                k.key
              ), P.return = N, N = P) : (P = Nr(
                k.type,
                k.key,
                k.props,
                null,
                N.mode,
                P
              ), wo(P, k), P.return = N, N = P);
            }
            return m(N);
          case S:
            t: {
              for (bt = k.key; z !== null; ) {
                if (z.key === bt)
                  if (z.tag === 4 && z.stateNode.containerInfo === k.containerInfo && z.stateNode.implementation === k.implementation) {
                    n(
                      N,
                      z.sibling
                    ), P = o(z, k.children || []), P.return = N, N = P;
                    break t;
                  } else {
                    n(N, z);
                    break;
                  }
                else e(N, z);
                z = z.sibling;
              }
              P = qs(k, N.mode, P), P.return = N, N = P;
            }
            return m(N);
          case x:
            return bt = k._init, k = bt(k._payload), pe(
              N,
              z,
              k,
              P
            );
        }
        if (mt(k))
          return Nt(
            N,
            z,
            k,
            P
          );
        if (F(k)) {
          if (bt = F(k), typeof bt != "function") throw Error(r(150));
          return k = bt.call(k), Ct(
            N,
            z,
            k,
            P
          );
        }
        if (typeof k.then == "function")
          return pe(
            N,
            z,
            Jr(k),
            P
          );
        if (k.$$typeof === U)
          return pe(
            N,
            z,
            Ur(N, k),
            P
          );
        Wr(N, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, z !== null && z.tag === 6 ? (n(N, z.sibling), P = o(z, k), P.return = N, N = P) : (n(N, z), P = Bs(k, N.mode, P), P.return = N, N = P), m(N)) : n(N, z);
    }
    return function(N, z, k, P) {
      try {
        Ao = 0;
        var bt = pe(
          N,
          z,
          k,
          P
        );
        return Ti = null, bt;
      } catch (_t) {
        if (_t === go || _t === Br) throw _t;
        var It = bn(29, _t, null, N.mode);
        return It.lanes = P, It.return = N, It;
      } finally {
      }
    };
  }
  var Ei = Qm(!0), Im = Qm(!1), Bn = D(null), ol = null;
  function ea(t) {
    var e = t.alternate;
    I(Xe, Xe.current & 1), I(Bn, t), ol === null && (e === null || yi.current !== null || e.memoizedState !== null) && (ol = t);
  }
  function Zm(t) {
    if (t.tag === 22) {
      if (I(Xe, Xe.current), I(Bn, t), ol === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (ol = t);
      }
    } else na();
  }
  function na() {
    I(Xe, Xe.current), I(Bn, Bn.current);
  }
  function Hl(t) {
    $(Bn), ol === t && (ol = null), $(Xe);
  }
  var Xe = D(0);
  function $r(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || sf(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  function bc(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : y({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Sc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = En(), o = $l(a);
      o.payload = e, n != null && (o.callback = n), e = Pl(t, o, a), e !== null && (_n(e, t, a), yo(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = En(), o = $l(a);
      o.tag = 1, o.payload = e, n != null && (o.callback = n), e = Pl(t, o, a), e !== null && (_n(e, t, a), yo(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = En(), a = $l(n);
      a.tag = 2, e != null && (a.callback = e), e = Pl(t, a, n), e !== null && (_n(e, t, n), yo(e, t, n));
    }
  };
  function Km(t, e, n, a, o, s, m) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, s, m) : e.prototype && e.prototype.isPureReactComponent ? !ro(n, a) || !ro(o, s) : !0;
  }
  function Fm(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Sc.enqueueReplaceState(e, e.state, null);
  }
  function Ga(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = y({}, n));
      for (var o in t)
        n[o] === void 0 && (n[o] = t[o]);
    }
    return n;
  }
  var Pr = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Jm(t) {
    Pr(t);
  }
  function Wm(t) {
    console.error(t);
  }
  function $m(t) {
    Pr(t);
  }
  function tu(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Pm(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function xc(t, e, n) {
    return n = $l(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      tu(t, e);
    }, n;
  }
  function tp(t) {
    return t = $l(t), t.tag = 3, t;
  }
  function ep(t, e, n, a) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = a.value;
      t.payload = function() {
        return o(s);
      }, t.callback = function() {
        Pm(e, n, a);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (t.callback = function() {
      Pm(e, n, a), typeof o != "function" && (ua === null ? ua = /* @__PURE__ */ new Set([this]) : ua.add(this));
      var v = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function q1(t, e, n, a, o) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && ho(
        e,
        n,
        o,
        !0
      ), n = Bn.current, n !== null) {
        switch (n.tag) {
          case 13:
            return ol === null ? Qc() : n.alternate === null && De === 0 && (De = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, a === Js ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Zc(t, a, o)), !1;
          case 22:
            return n.flags |= 65536, a === Js ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Zc(t, a, o)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Zc(t, a, o), Qc(), !1;
    }
    if (ae)
      return e = Bn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, a !== Vs && (t = Error(r(422), { cause: a }), fo(jn(t, n)))) : (a !== Vs && (e = Error(r(423), {
        cause: a
      }), fo(
        jn(e, n)
      )), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, a = jn(a, n), o = xc(
        t.stateNode,
        a,
        o
      ), Ps(t, o), De !== 4 && (De = 2)), !1;
    var s = Error(r(520), { cause: a });
    if (s = jn(s, n), No === null ? No = [s] : No.push(s), De !== 4 && (De = 2), e === null) return !0;
    a = jn(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = o & -o, n.lanes |= t, t = xc(n.stateNode, a, t), Ps(n, t), !1;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ua === null || !ua.has(s))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = tp(o), ep(
              o,
              t,
              n,
              a
            ), Ps(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var np = Error(r(461)), Je = !1;
  function tn(t, e, n, a) {
    e.child = t === null ? Im(e, null, n, a) : Ei(
      e,
      t.child,
      n,
      a
    );
  }
  function lp(t, e, n, a, o) {
    n = n.render;
    var s = e.ref;
    if ("ref" in a) {
      var m = {};
      for (var v in a)
        v !== "ref" && (m[v] = a[v]);
    } else m = a;
    return Ba(e), a = ac(
      t,
      e,
      n,
      m,
      s,
      o
    ), v = ic(), t !== null && !Je ? (oc(t, e, o), jl(t, e, o)) : (ae && v && Ys(e), e.flags |= 1, tn(t, e, a, o), e.child);
  }
  function ap(t, e, n, a, o) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !ks(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, ip(
        t,
        e,
        s,
        a,
        o
      )) : (t = Nr(
        n.type,
        null,
        a,
        e,
        e.mode,
        o
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !Cc(t, o)) {
      var m = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ro, n(m, a) && t.ref === e.ref)
        return jl(t, e, o);
    }
    return e.flags |= 1, t = Rl(s, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function ip(t, e, n, a, o) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (ro(s, a) && t.ref === e.ref)
        if (Je = !1, e.pendingProps = a = s, Cc(t, o))
          (t.flags & 131072) !== 0 && (Je = !0);
        else
          return e.lanes = t.lanes, jl(t, e, o);
    }
    return Tc(
      t,
      e,
      n,
      a,
      o
    );
  }
  function op(t, e, n) {
    var a = e.pendingProps, o = a.children, s = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (a = s !== null ? s.baseLanes | n : n, t !== null) {
          for (o = e.child = t.child, s = 0; o !== null; )
            s = s | o.lanes | o.childLanes, o = o.sibling;
          e.childLanes = s & ~a;
        } else e.childLanes = 0, e.child = null;
        return rp(
          t,
          e,
          a,
          n
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && kr(
          e,
          s !== null ? s.cachePool : null
        ), s !== null ? im(e, s) : ec(), Zm(e);
      else
        return e.lanes = e.childLanes = 536870912, rp(
          t,
          e,
          s !== null ? s.baseLanes | n : n,
          n
        );
    } else
      s !== null ? (kr(e, s.cachePool), im(e, s), na(), e.memoizedState = null) : (t !== null && kr(e, null), ec(), na());
    return tn(t, e, o, n), e.child;
  }
  function rp(t, e, n, a) {
    var o = Fs();
    return o = o === null ? null : { parent: Ve._currentValue, pool: o }, e.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, t !== null && kr(e, null), ec(), Zm(e), t !== null && ho(t, e, a, !0), null;
  }
  function eu(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Tc(t, e, n, a, o) {
    return Ba(e), n = ac(
      t,
      e,
      n,
      a,
      void 0,
      o
    ), a = ic(), t !== null && !Je ? (oc(t, e, o), jl(t, e, o)) : (ae && a && Ys(e), e.flags |= 1, tn(t, e, n, o), e.child);
  }
  function up(t, e, n, a, o, s) {
    return Ba(e), e.updateQueue = null, n = rm(
      e,
      a,
      n,
      o
    ), om(t), a = ic(), t !== null && !Je ? (oc(t, e, s), jl(t, e, s)) : (ae && a && Ys(e), e.flags |= 1, tn(t, e, n, s), e.child);
  }
  function sp(t, e, n, a, o) {
    if (Ba(e), e.stateNode === null) {
      var s = hi, m = n.contextType;
      typeof m == "object" && m !== null && (s = an(m)), s = new n(a, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Sc, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = a, s.state = e.memoizedState, s.refs = {}, Ws(e), m = n.contextType, s.context = typeof m == "object" && m !== null ? an(m) : hi, s.state = e.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (bc(
        e,
        n,
        m,
        a
      ), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && Sc.enqueueReplaceState(s, s.state, null), So(e, a, s, o), bo(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      s = e.stateNode;
      var v = e.memoizedProps, A = Ga(n, v);
      s.props = A;
      var B = s.context, J = n.contextType;
      m = hi, typeof J == "object" && J !== null && (m = an(J));
      var et = n.getDerivedStateFromProps;
      J = typeof et == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, J || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || B !== m) && Fm(
        e,
        s,
        a,
        m
      ), Wl = !1;
      var V = e.memoizedState;
      s.state = V, So(e, a, s, o), bo(), B = e.memoizedState, v || V !== B || Wl ? (typeof et == "function" && (bc(
        e,
        n,
        et,
        a
      ), B = e.memoizedState), (A = Wl || Km(
        e,
        n,
        A,
        a,
        V,
        B,
        m
      )) ? (J || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = B), s.props = a, s.state = B, s.context = m, a = A) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      s = e.stateNode, $s(t, e), m = e.memoizedProps, J = Ga(n, m), s.props = J, et = e.pendingProps, V = s.context, B = n.contextType, A = hi, typeof B == "object" && B !== null && (A = an(B)), v = n.getDerivedStateFromProps, (B = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== et || V !== A) && Fm(
        e,
        s,
        a,
        A
      ), Wl = !1, V = e.memoizedState, s.state = V, So(e, a, s, o), bo();
      var Q = e.memoizedState;
      m !== et || V !== Q || Wl || t !== null && t.dependencies !== null && Lr(t.dependencies) ? (typeof v == "function" && (bc(
        e,
        n,
        v,
        a
      ), Q = e.memoizedState), (J = Wl || Km(
        e,
        n,
        J,
        a,
        V,
        Q,
        A
      ) || t !== null && t.dependencies !== null && Lr(t.dependencies)) ? (B || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, Q, A), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        a,
        Q,
        A
      )), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === t.memoizedProps && V === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && V === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = Q), s.props = a, s.state = Q, s.context = A, a = J) : (typeof s.componentDidUpdate != "function" || m === t.memoizedProps && V === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && V === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return s = a, eu(t, e), a = (e.flags & 128) !== 0, s || a ? (s = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && a ? (e.child = Ei(
      e,
      t.child,
      null,
      o
    ), e.child = Ei(
      e,
      null,
      n,
      o
    )) : tn(t, e, n, o), e.memoizedState = s.state, t = e.child) : t = jl(
      t,
      e,
      o
    ), t;
  }
  function cp(t, e, n, a) {
    return co(), e.flags |= 256, tn(t, e, n, a), e.child;
  }
  var Ec = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function _c(t) {
    return { baseLanes: t, cachePool: Wh() };
  }
  function Ac(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= qn), t;
  }
  function fp(t, e, n) {
    var a = e.pendingProps, o = !1, s = (e.flags & 128) !== 0, m;
    if ((m = s) || (m = t !== null && t.memoizedState === null ? !1 : (Xe.current & 2) !== 0), m && (o = !0, e.flags &= -129), m = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ae) {
        if (o ? ea(e) : na(), ae) {
          var v = Me, A;
          if (A = v) {
            t: {
              for (A = v, v = il; A.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (A = Fn(
                  A.nextSibling
                ), A === null) {
                  v = null;
                  break t;
                }
              }
              v = A;
            }
            v !== null ? (e.memoizedState = {
              dehydrated: v,
              treeContext: Ha !== null ? { id: Cl, overflow: zl } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, A = bn(
              18,
              null,
              null,
              0
            ), A.stateNode = v, A.return = e, e.child = A, cn = e, Me = null, A = !0) : A = !1;
          }
          A || Ua(e);
        }
        if (v = e.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return sf(v) ? e.lanes = 32 : e.lanes = 536870912, null;
        Hl(e);
      }
      return v = a.children, a = a.fallback, o ? (na(), o = e.mode, v = nu(
        { mode: "hidden", children: v },
        o
      ), a = Na(
        a,
        o,
        n,
        null
      ), v.return = e, a.return = e, v.sibling = a, e.child = v, o = e.child, o.memoizedState = _c(n), o.childLanes = Ac(
        t,
        m,
        n
      ), e.memoizedState = Ec, a) : (ea(e), wc(e, v));
    }
    if (A = t.memoizedState, A !== null && (v = A.dehydrated, v !== null)) {
      if (s)
        e.flags & 256 ? (ea(e), e.flags &= -257, e = Oc(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (na(), e.child = t.child, e.flags |= 128, e = null) : (na(), o = a.fallback, v = e.mode, a = nu(
          { mode: "visible", children: a.children },
          v
        ), o = Na(
          o,
          v,
          n,
          null
        ), o.flags |= 2, a.return = e, o.return = e, a.sibling = o, e.child = a, Ei(
          e,
          t.child,
          null,
          n
        ), a = e.child, a.memoizedState = _c(n), a.childLanes = Ac(
          t,
          m,
          n
        ), e.memoizedState = Ec, e = o);
      else if (ea(e), sf(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var B = m.dgst;
        m = B, a = Error(r(419)), a.stack = "", a.digest = m, fo({ value: a, source: null, stack: null }), e = Oc(
          t,
          e,
          n
        );
      } else if (Je || ho(t, e, n, !1), m = (n & t.childLanes) !== 0, Je || m) {
        if (m = xe, m !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : Ot(a), a = (a & (m.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== A.retryLane))
          throw A.retryLane = a, di(t, a), _n(m, t, a), np;
        v.data === "$?" || Qc(), e = Oc(
          t,
          e,
          n
        );
      } else
        v.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = A.treeContext, Me = Fn(
          v.nextSibling
        ), cn = e, ae = !0, La = null, il = !1, t !== null && (Un[kn++] = Cl, Un[kn++] = zl, Un[kn++] = Ha, Cl = t.id, zl = t.overflow, Ha = e), e = wc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return o ? (na(), o = a.fallback, v = e.mode, A = t.child, B = A.sibling, a = Rl(A, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = A.subtreeFlags & 65011712, B !== null ? o = Rl(B, o) : (o = Na(
      o,
      v,
      n,
      null
    ), o.flags |= 2), o.return = e, a.return = e, a.sibling = o, e.child = a, a = o, o = e.child, v = t.child.memoizedState, v === null ? v = _c(n) : (A = v.cachePool, A !== null ? (B = Ve._currentValue, A = A.parent !== B ? { parent: B, pool: B } : A) : A = Wh(), v = {
      baseLanes: v.baseLanes | n,
      cachePool: A
    }), o.memoizedState = v, o.childLanes = Ac(
      t,
      m,
      n
    ), e.memoizedState = Ec, a) : (ea(e), n = t.child, t = n.sibling, n = Rl(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (m = e.deletions, m === null ? (e.deletions = [t], e.flags |= 16) : m.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function wc(t, e) {
    return e = nu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function nu(t, e) {
    return t = bn(22, t, null, e), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function Oc(t, e, n) {
    return Ei(e, t.child, null, n), t = wc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function dp(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Qs(t.return, e, n);
  }
  function Rc(t, e, n, a, o) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: o
    } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = n, s.tailMode = o);
  }
  function hp(t, e, n) {
    var a = e.pendingProps, o = a.revealOrder, s = a.tail;
    if (tn(t, e, a.children, n), a = Xe.current, (a & 2) !== 0)
      a = a & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && dp(t, n, e);
          else if (t.tag === 19)
            dp(t, n, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      a &= 1;
    }
    switch (I(Xe, a), o) {
      case "forwards":
        for (n = e.child, o = null; n !== null; )
          t = n.alternate, t !== null && $r(t) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), Rc(
          e,
          !1,
          o,
          n,
          s
        );
        break;
      case "backwards":
        for (n = null, o = e.child, e.child = null; o !== null; ) {
          if (t = o.alternate, t !== null && $r(t) === null) {
            e.child = o;
            break;
          }
          t = o.sibling, o.sibling = n, n = o, o = t;
        }
        Rc(
          e,
          !0,
          n,
          null,
          s
        );
        break;
      case "together":
        Rc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function jl(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), ra |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (ho(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = Rl(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Rl(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Cc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Lr(t)));
  }
  function Y1(t, e, n) {
    switch (e.tag) {
      case 3:
        Y(e, e.stateNode.containerInfo), Jl(e, Ve, t.memoizedState.cache), co();
        break;
      case 27:
      case 5:
        St(e);
        break;
      case 4:
        Y(e, e.stateNode.containerInfo);
        break;
      case 10:
        Jl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ea(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? fp(t, e, n) : (ea(e), t = jl(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        ea(e);
        break;
      case 19:
        var o = (t.flags & 128) !== 0;
        if (a = (n & e.childLanes) !== 0, a || (ho(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), o) {
          if (a)
            return hp(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), I(Xe, Xe.current), a) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, op(t, e, n);
      case 24:
        Jl(e, Ve, t.memoizedState.cache);
    }
    return jl(t, e, n);
  }
  function mp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Je = !0;
      else {
        if (!Cc(t, n) && (e.flags & 128) === 0)
          return Je = !1, Y1(
            t,
            e,
            n
          );
        Je = (t.flags & 131072) !== 0;
      }
    else
      Je = !1, ae && (e.flags & 1048576) !== 0 && Xh(e, jr, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType, o = a._init;
          if (a = o(a._payload), e.type = a, typeof a == "function")
            ks(a) ? (t = Ga(a, t), e.tag = 1, e = sp(
              null,
              e,
              a,
              t,
              n
            )) : (e.tag = 0, e = Tc(
              null,
              e,
              a,
              t,
              n
            ));
          else {
            if (a != null) {
              if (o = a.$$typeof, o === W) {
                e.tag = 11, e = lp(
                  null,
                  e,
                  a,
                  t,
                  n
                );
                break t;
              } else if (o === X) {
                e.tag = 14, e = ap(
                  null,
                  e,
                  a,
                  t,
                  n
                );
                break t;
              }
            }
            throw e = tt(a) || a, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Tc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, o = Ga(
          a,
          e.pendingProps
        ), sp(
          t,
          e,
          a,
          o,
          n
        );
      case 3:
        t: {
          if (Y(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var s = e.memoizedState;
          o = s.element, $s(t, e), So(e, a, null, n);
          var m = e.memoizedState;
          if (a = m.cache, Jl(e, Ve, a), a !== s.cache && Is(
            e,
            [Ve],
            n,
            !0
          ), bo(), a = m.element, s.isDehydrated)
            if (s = {
              element: a,
              isDehydrated: !1,
              cache: m.cache
            }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
              e = cp(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== o) {
              o = jn(
                Error(r(424)),
                e
              ), fo(o), e = cp(
                t,
                e,
                a,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Me = Fn(t.firstChild), cn = e, ae = !0, La = null, il = !0, n = Im(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (co(), a === o) {
              e = jl(
                t,
                e,
                n
              );
              break t;
            }
            tn(
              t,
              e,
              a,
              n
            );
          }
          e = e.child;
        }
        return e;
      case 26:
        return eu(t, e), t === null ? (n = yg(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : ae || (n = e.type, t = e.pendingProps, a = gu(
          ht.current
        ).createElement(n), a[yt] = e, a[xt] = t, nn(a, n, t), Le(a), e.stateNode = a) : e.memoizedState = yg(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return St(e), t === null && ae && (a = e.stateNode = pg(
          e.type,
          e.pendingProps,
          ht.current
        ), cn = e, il = !0, o = Me, fa(e.type) ? (cf = o, Me = Fn(
          a.firstChild
        )) : Me = o), tn(
          t,
          e,
          e.pendingProps.children,
          n
        ), eu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ae && ((o = a = Me) && (a = pb(
          a,
          e.type,
          e.pendingProps,
          il
        ), a !== null ? (e.stateNode = a, cn = e, Me = Fn(
          a.firstChild
        ), il = !1, o = !0) : o = !1), o || Ua(e)), St(e), o = e.type, s = e.pendingProps, m = t !== null ? t.memoizedProps : null, a = s.children, of(o, s) ? a = null : m !== null && of(o, m) && (e.flags |= 32), e.memoizedState !== null && (o = ac(
          t,
          e,
          N1,
          null,
          null,
          n
        ), Go._currentValue = o), eu(t, e), tn(t, e, a, n), e.child;
      case 6:
        return t === null && ae && ((t = n = Me) && (n = gb(
          n,
          e.pendingProps,
          il
        ), n !== null ? (e.stateNode = n, cn = e, Me = null, t = !0) : t = !1), t || Ua(e)), null;
      case 13:
        return fp(t, e, n);
      case 4:
        return Y(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Ei(
          e,
          null,
          a,
          n
        ) : tn(
          t,
          e,
          a,
          n
        ), e.child;
      case 11:
        return lp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return tn(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return tn(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return tn(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return a = e.pendingProps, Jl(e, e.type, a.value), tn(
          t,
          e,
          a.children,
          n
        ), e.child;
      case 9:
        return o = e.type._context, a = e.pendingProps.children, Ba(e), o = an(o), a = a(o), e.flags |= 1, tn(t, e, a, n), e.child;
      case 14:
        return ap(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return ip(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return hp(t, e, n);
      case 31:
        return a = e.pendingProps, n = e.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (n = nu(
          a,
          n
        ), n.ref = e.ref, e.child = n, n.return = e, e = n) : (n = Rl(t.child, a), n.ref = e.ref, e.child = n, n.return = e, e = n), e;
      case 22:
        return op(t, e, n);
      case 24:
        return Ba(e), a = an(Ve), t === null ? (o = Fs(), o === null && (o = xe, s = Zs(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= n), o = s), e.memoizedState = {
          parent: a,
          cache: o
        }, Ws(e), Jl(e, Ve, o)) : ((t.lanes & n) !== 0 && ($s(t, e), So(e, null, null, n), bo()), o = t.memoizedState, s = e.memoizedState, o.parent !== a ? (o = { parent: a, cache: a }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Jl(e, Ve, a)) : (a = s.cache, Jl(e, Ve, a), a !== o.cache && Is(
          e,
          [Ve],
          n,
          !0
        ))), tn(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Ll(t) {
    t.flags |= 4;
  }
  function pp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Eg(e)) {
      if (e = Bn.current, e !== null && ((te & 4194048) === te ? ol !== null : (te & 62914560) !== te && (te & 536870912) === 0 || e !== ol))
        throw vo = Js, $h;
      t.flags |= 8192;
    }
  }
  function lu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? El() : 536870912, t.lanes |= e, Oi |= e);
  }
  function Oo(t, e) {
    if (!ae)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Re(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var o = t.child; o !== null; )
        n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = t, o = o.sibling;
    else
      for (o = t.child; o !== null; )
        n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = t, o = o.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function G1(t, e, n) {
    var a = e.pendingProps;
    switch (Gs(e), e.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Re(e), null;
      case 1:
        return Re(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Dl(Ve), ut(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (so(e) ? Ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Zh())), Re(e), null;
      case 26:
        return n = e.memoizedState, t === null ? (Ll(e), n !== null ? (Re(e), pp(e, n)) : (Re(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (Ll(e), Re(e), pp(e, n)) : (Re(e), e.flags &= -16777217) : (t.memoizedProps !== a && Ll(e), Re(e), e.flags &= -16777217), null;
      case 27:
        pt(e), n = ht.current;
        var o = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Re(e), null;
          }
          t = ct.current, so(e) ? Qh(e) : (t = pg(o, a, n), e.stateNode = t, Ll(e));
        }
        return Re(e), null;
      case 5:
        if (pt(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ll(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Re(e), null;
          }
          if (t = ct.current, so(e))
            Qh(e);
          else {
            switch (o = gu(
              ht.current
            ), t) {
              case 1:
                t = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                t = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    t = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    t = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    t = o.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? o.createElement("select", { is: a.is }) : o.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? o.createElement(n, { is: a.is }) : o.createElement(n);
                }
            }
            t[yt] = e, t[xt] = a;
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                t.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e)
                  break t;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            e.stateNode = t;
            t: switch (nn(t, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ll(e);
          }
        }
        return Re(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Ll(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = ht.current, so(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, o = cn, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  a = o.memoizedProps;
              }
            t[yt] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || ug(t.nodeValue, n)), t || Ua(e);
          } else
            t = gu(t).createTextNode(
              a
            ), t[yt] = e, e.stateNode = t;
        }
        return Re(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (o = so(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!o) throw Error(r(318));
              if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(r(317));
              o[yt] = e;
            } else
              co(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Re(e), o = !1;
          } else
            o = Zh(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return e.flags & 256 ? (Hl(e), e) : (Hl(e), null);
        }
        if (Hl(e), (e.flags & 128) !== 0)
          return e.lanes = n, e;
        if (n = a !== null, t = t !== null && t.memoizedState !== null, n) {
          a = e.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool);
          var s = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== o && (a.flags |= 2048);
        }
        return n !== t && n && (e.child.flags |= 8192), lu(e, e.updateQueue), Re(e), null;
      case 4:
        return ut(), t === null && tf(e.stateNode.containerInfo), Re(e), null;
      case 10:
        return Dl(e.type), Re(e), null;
      case 19:
        if ($(Xe), o = e.memoizedState, o === null) return Re(e), null;
        if (a = (e.flags & 128) !== 0, s = o.rendering, s === null)
          if (a) Oo(o, !1);
          else {
            if (De !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (s = $r(t), s !== null) {
                  for (e.flags |= 128, Oo(o, !1), t = s.updateQueue, e.updateQueue = t, lu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Vh(n, t), n = n.sibling;
                  return I(
                    Xe,
                    Xe.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            o.tail !== null && Lt() > ou && (e.flags |= 128, a = !0, Oo(o, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = $r(s), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, lu(e, t), Oo(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ae)
                return Re(e), null;
            } else
              2 * Lt() - o.renderingStartTime > ou && n !== 536870912 && (e.flags |= 128, a = !0, Oo(o, !1), e.lanes = 4194304);
          o.isBackwards ? (s.sibling = e.child, e.child = s) : (t = o.last, t !== null ? t.sibling = s : e.child = s, o.last = s);
        }
        return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Lt(), e.sibling = null, t = Xe.current, I(Xe, a ? t & 1 | 2 : t & 1), e) : (Re(e), null);
      case 22:
      case 23:
        return Hl(e), nc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Re(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Re(e), n = e.updateQueue, n !== null && lu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && $(qa), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Dl(Ve), Re(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function V1(t, e) {
    switch (Gs(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Dl(Ve), ut(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return pt(e), null;
      case 13:
        if (Hl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          co();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return $(Xe), null;
      case 4:
        return ut(), null;
      case 10:
        return Dl(e.type), null;
      case 22:
      case 23:
        return Hl(e), nc(), t !== null && $(qa), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Dl(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function gp(t, e) {
    switch (Gs(e), e.tag) {
      case 3:
        Dl(Ve), ut();
        break;
      case 26:
      case 27:
      case 5:
        pt(e);
        break;
      case 4:
        ut();
        break;
      case 13:
        Hl(e);
        break;
      case 19:
        $(Xe);
        break;
      case 10:
        Dl(e.type);
        break;
      case 22:
      case 23:
        Hl(e), nc(), t !== null && $(qa);
        break;
      case 24:
        Dl(Ve);
    }
  }
  function Ro(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        n = o;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var s = n.create, m = n.inst;
            a = s(), m.destroy = a;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (v) {
      ye(e, e.return, v);
    }
  }
  function la(t, e, n) {
    try {
      var a = e.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        a = s;
        do {
          if ((a.tag & t) === t) {
            var m = a.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, o = e;
              var A = n, B = v;
              try {
                B();
              } catch (J) {
                ye(
                  o,
                  A,
                  J
                );
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (J) {
      ye(e, e.return, J);
    }
  }
  function vp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        am(e, n);
      } catch (a) {
        ye(t, t.return, a);
      }
    }
  }
  function yp(t, e, n) {
    n.props = Ga(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      ye(t, e, a);
    }
  }
  function Co(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (o) {
      ye(t, e, o);
    }
  }
  function rl(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (o) {
          ye(t, e, o);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          ye(t, e, o);
        }
      else n.current = null;
  }
  function bp(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (o) {
      ye(t, t.return, o);
    }
  }
  function zc(t, e, n) {
    try {
      var a = t.stateNode;
      cb(a, t.type, n, e), a[xt] = e;
    } catch (o) {
      ye(t, t.return, o);
    }
  }
  function Sp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && fa(t.type) || t.tag === 4;
  }
  function Mc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Sp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && fa(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Dc(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = pu));
    else if (a !== 4 && (a === 27 && fa(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (Dc(t, e, n), t = t.sibling; t !== null; )
        Dc(t, e, n), t = t.sibling;
  }
  function au(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (a !== 4 && (a === 27 && fa(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (au(t, e, n), t = t.sibling; t !== null; )
        au(t, e, n), t = t.sibling;
  }
  function xp(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      nn(e, a, n), e[yt] = t, e[xt] = n;
    } catch (s) {
      ye(t, t.return, s);
    }
  }
  var Ul = !1, ke = !1, Nc = !1, Tp = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function X1(t, e) {
    if (t = t.containerInfo, lf = Tu, t = Nh(t), Ms(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var o = a.anchorOffset, s = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break t;
            }
            var m = 0, v = -1, A = -1, B = 0, J = 0, et = t, V = null;
            e: for (; ; ) {
              for (var Q; et !== n || o !== 0 && et.nodeType !== 3 || (v = m + o), et !== s || a !== 0 && et.nodeType !== 3 || (A = m + a), et.nodeType === 3 && (m += et.nodeValue.length), (Q = et.firstChild) !== null; )
                V = et, et = Q;
              for (; ; ) {
                if (et === t) break e;
                if (V === n && ++B === o && (v = m), V === s && ++J === a && (A = m), (Q = et.nextSibling) !== null) break;
                et = V, V = et.parentNode;
              }
              et = Q;
            }
            n = v === -1 || A === -1 ? null : { start: v, end: A };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (af = { focusedElem: t, selectionRange: n }, Tu = !1, We = e; We !== null; )
      if (e = We, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = e, We = t;
      else
        for (; We !== null; ) {
          switch (e = We, s = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && s !== null) {
                t = void 0, n = e, o = s.memoizedProps, s = s.memoizedState, a = n.stateNode;
                try {
                  var Nt = Ga(
                    n.type,
                    o,
                    n.elementType === n.type
                  );
                  t = a.getSnapshotBeforeUpdate(
                    Nt,
                    s
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (Ct) {
                  ye(
                    n,
                    n.return,
                    Ct
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  uf(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      uf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, We = t;
            break;
          }
          We = e.return;
        }
  }
  function Ep(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        aa(t, n), a & 4 && Ro(5, n);
        break;
      case 1:
        if (aa(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (m) {
              ye(n, n.return, m);
            }
          else {
            var o = Ga(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                o,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              ye(
                n,
                n.return,
                m
              );
            }
          }
        a & 64 && vp(n), a & 512 && Co(n, n.return);
        break;
      case 3:
        if (aa(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            am(t, e);
          } catch (m) {
            ye(n, n.return, m);
          }
        }
        break;
      case 27:
        e === null && a & 4 && xp(n);
      case 26:
      case 5:
        aa(t, n), e === null && a & 4 && bp(n), a & 512 && Co(n, n.return);
        break;
      case 12:
        aa(t, n);
        break;
      case 13:
        aa(t, n), a & 4 && wp(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = P1.bind(
          null,
          n
        ), vb(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || Ul, !a) {
          e = e !== null && e.memoizedState !== null || ke, o = Ul;
          var s = ke;
          Ul = a, (ke = e) && !s ? ia(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : aa(t, n), Ul = o, ke = s;
        }
        break;
      case 30:
        break;
      default:
        aa(t, n);
    }
  }
  function _p(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, _p(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && de(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var we = null, mn = !1;
  function kl(t, e, n) {
    for (n = n.child; n !== null; )
      Ap(t, e, n), n = n.sibling;
  }
  function Ap(t, e, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
      try {
        Kt.onCommitFiberUnmount($t, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        ke || rl(n, e), kl(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        ke || rl(n, e);
        var a = we, o = mn;
        fa(n.type) && (we = n.stateNode, mn = !1), kl(
          t,
          e,
          n
        ), ko(n.stateNode), we = a, mn = o;
        break;
      case 5:
        ke || rl(n, e);
      case 6:
        if (a = we, o = mn, we = null, kl(
          t,
          e,
          n
        ), we = a, mn = o, we !== null)
          if (mn)
            try {
              (we.nodeType === 9 ? we.body : we.nodeName === "HTML" ? we.ownerDocument.body : we).removeChild(n.stateNode);
            } catch (s) {
              ye(
                n,
                e,
                s
              );
            }
          else
            try {
              we.removeChild(n.stateNode);
            } catch (s) {
              ye(
                n,
                e,
                s
              );
            }
        break;
      case 18:
        we !== null && (mn ? (t = we, hg(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Io(t)) : hg(we, n.stateNode));
        break;
      case 4:
        a = we, o = mn, we = n.stateNode.containerInfo, mn = !0, kl(
          t,
          e,
          n
        ), we = a, mn = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ke || la(2, n, e), ke || la(4, n, e), kl(
          t,
          e,
          n
        );
        break;
      case 1:
        ke || (rl(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && yp(
          n,
          e,
          a
        )), kl(
          t,
          e,
          n
        );
        break;
      case 21:
        kl(
          t,
          e,
          n
        );
        break;
      case 22:
        ke = (a = ke) || n.memoizedState !== null, kl(
          t,
          e,
          n
        ), ke = a;
        break;
      default:
        kl(
          t,
          e,
          n
        );
    }
  }
  function wp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Io(t);
      } catch (n) {
        ye(e, e.return, n);
      }
  }
  function Q1(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Tp()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Tp()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Hc(t, e) {
    var n = Q1(t);
    e.forEach(function(a) {
      var o = tb.bind(null, t, a);
      n.has(a) || (n.add(a), a.then(o, o));
    });
  }
  function Sn(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var o = n[a], s = t, m = e, v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (fa(v.type)) {
                we = v.stateNode, mn = !1;
                break t;
              }
              break;
            case 5:
              we = v.stateNode, mn = !1;
              break t;
            case 3:
            case 4:
              we = v.stateNode.containerInfo, mn = !0;
              break t;
          }
          v = v.return;
        }
        if (we === null) throw Error(r(160));
        Ap(s, m, o), we = null, mn = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        Op(e, t), e = e.sibling;
  }
  var Kn = null;
  function Op(t, e) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Sn(e, t), xn(t), a & 4 && (la(3, t, t.return), Ro(3, t), la(5, t, t.return));
        break;
      case 1:
        Sn(e, t), xn(t), a & 512 && (ke || n === null || rl(n, n.return)), a & 64 && Ul && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var o = Kn;
        if (Sn(e, t), xn(t), a & 512 && (ke || n === null || rl(n, n.return)), a & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (a = t.memoizedState, n === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, n = t.memoizedProps, o = o.ownerDocument || o;
                  e: switch (a) {
                    case "title":
                      s = o.getElementsByTagName("title")[0], (!s || s[Fe] || s[yt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = o.createElement(a), o.head.insertBefore(
                        s,
                        o.querySelector("head > title")
                      )), nn(s, a, n), s[yt] = t, Le(s), a = s;
                      break t;
                    case "link":
                      var m = xg(
                        "link",
                        "href",
                        o
                      ).get(a + (n.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (s = m[v], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      s = o.createElement(a), nn(s, a, n), o.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = xg(
                        "meta",
                        "content",
                        o
                      ).get(a + (n.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (s = m[v], s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      s = o.createElement(a), nn(s, a, n), o.head.appendChild(s);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  s[yt] = t, Le(s), a = s;
                }
                t.stateNode = a;
              } else
                Tg(
                  o,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Sg(
                o,
                a,
                t.memoizedProps
              );
          else
            s !== a ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, a === null ? Tg(
              o,
              t.type,
              t.stateNode
            ) : Sg(
              o,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && zc(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Sn(e, t), xn(t), a & 512 && (ke || n === null || rl(n, n.return)), n !== null && a & 4 && zc(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Sn(e, t), xn(t), a & 512 && (ke || n === null || rl(n, n.return)), t.flags & 32) {
          o = t.stateNode;
          try {
            ii(o, "");
          } catch (Q) {
            ye(t, t.return, Q);
          }
        }
        a & 4 && t.stateNode != null && (o = t.memoizedProps, zc(
          t,
          o,
          n !== null ? n.memoizedProps : o
        )), a & 1024 && (Nc = !0);
        break;
      case 6:
        if (Sn(e, t), xn(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = a;
          } catch (Q) {
            ye(t, t.return, Q);
          }
        }
        break;
      case 3:
        if (bu = null, o = Kn, Kn = vu(e.containerInfo), Sn(e, t), Kn = o, xn(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Io(e.containerInfo);
          } catch (Q) {
            ye(t, t.return, Q);
          }
        Nc && (Nc = !1, Rp(t));
        break;
      case 4:
        a = Kn, Kn = vu(
          t.stateNode.containerInfo
        ), Sn(e, t), xn(t), Kn = a;
        break;
      case 12:
        Sn(e, t), xn(t);
        break;
      case 13:
        Sn(e, t), xn(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (qc = Lt()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Hc(t, a)));
        break;
      case 22:
        o = t.memoizedState !== null;
        var A = n !== null && n.memoizedState !== null, B = Ul, J = ke;
        if (Ul = B || o, ke = J || A, Sn(e, t), ke = J, Ul = B, xn(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, o && (n === null || A || Ul || ke || Va(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                A = n = e;
                try {
                  if (s = A.stateNode, o)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = A.stateNode;
                    var et = A.memoizedProps.style, V = et != null && et.hasOwnProperty("display") ? et.display : null;
                    v.style.display = V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (Q) {
                  ye(A, A.return, Q);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                A = e;
                try {
                  A.stateNode.nodeValue = o ? "" : A.memoizedProps;
                } catch (Q) {
                  ye(A, A.return, Q);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Hc(t, n))));
        break;
      case 19:
        Sn(e, t), xn(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Hc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Sn(e, t), xn(t);
    }
  }
  function xn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Sp(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, s = Mc(t);
            au(t, s, o);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (ii(m, ""), n.flags &= -33);
            var v = Mc(t);
            au(t, v, m);
            break;
          case 3:
          case 4:
            var A = n.stateNode.containerInfo, B = Mc(t);
            Dc(
              t,
              B,
              A
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (J) {
        ye(t, t.return, J);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Rp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Rp(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function aa(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Ep(t, e.alternate, e), e = e.sibling;
  }
  function Va(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          la(4, e, e.return), Va(e);
          break;
        case 1:
          rl(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && yp(
            e,
            e.return,
            n
          ), Va(e);
          break;
        case 27:
          ko(e.stateNode);
        case 26:
        case 5:
          rl(e, e.return), Va(e);
          break;
        case 22:
          e.memoizedState === null && Va(e);
          break;
        case 30:
          Va(e);
          break;
        default:
          Va(e);
      }
      t = t.sibling;
    }
  }
  function ia(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, o = t, s = e, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ia(
            o,
            s,
            n
          ), Ro(4, s);
          break;
        case 1:
          if (ia(
            o,
            s,
            n
          ), a = s, o = a.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (B) {
              ye(a, a.return, B);
            }
          if (a = s, o = a.updateQueue, o !== null) {
            var v = a.stateNode;
            try {
              var A = o.shared.hiddenCallbacks;
              if (A !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < A.length; o++)
                  lm(A[o], v);
            } catch (B) {
              ye(a, a.return, B);
            }
          }
          n && m & 64 && vp(s), Co(s, s.return);
          break;
        case 27:
          xp(s);
        case 26:
        case 5:
          ia(
            o,
            s,
            n
          ), n && a === null && m & 4 && bp(s), Co(s, s.return);
          break;
        case 12:
          ia(
            o,
            s,
            n
          );
          break;
        case 13:
          ia(
            o,
            s,
            n
          ), n && m & 4 && wp(o, s);
          break;
        case 22:
          s.memoizedState === null && ia(
            o,
            s,
            n
          ), Co(s, s.return);
          break;
        case 30:
          break;
        default:
          ia(
            o,
            s,
            n
          );
      }
      e = e.sibling;
    }
  }
  function jc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && mo(n));
  }
  function Lc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && mo(t));
  }
  function ul(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Cp(
          t,
          e,
          n,
          a
        ), e = e.sibling;
  }
  function Cp(t, e, n, a) {
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ul(
          t,
          e,
          n,
          a
        ), o & 2048 && Ro(9, e);
        break;
      case 1:
        ul(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        ul(
          t,
          e,
          n,
          a
        ), o & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && mo(t)));
        break;
      case 12:
        if (o & 2048) {
          ul(
            t,
            e,
            n,
            a
          ), t = e.stateNode;
          try {
            var s = e.memoizedProps, m = s.id, v = s.onPostCommit;
            typeof v == "function" && v(
              m,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (A) {
            ye(e, e.return, A);
          }
        } else
          ul(
            t,
            e,
            n,
            a
          );
        break;
      case 13:
        ul(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        s = e.stateNode, m = e.alternate, e.memoizedState !== null ? s._visibility & 2 ? ul(
          t,
          e,
          n,
          a
        ) : zo(t, e) : s._visibility & 2 ? ul(
          t,
          e,
          n,
          a
        ) : (s._visibility |= 2, _i(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0
        )), o & 2048 && jc(m, e);
        break;
      case 24:
        ul(
          t,
          e,
          n,
          a
        ), o & 2048 && Lc(e.alternate, e);
        break;
      default:
        ul(
          t,
          e,
          n,
          a
        );
    }
  }
  function _i(t, e, n, a, o) {
    for (o = o && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var s = t, m = e, v = n, A = a, B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          _i(
            s,
            m,
            v,
            A,
            o
          ), Ro(8, m);
          break;
        case 23:
          break;
        case 22:
          var J = m.stateNode;
          m.memoizedState !== null ? J._visibility & 2 ? _i(
            s,
            m,
            v,
            A,
            o
          ) : zo(
            s,
            m
          ) : (J._visibility |= 2, _i(
            s,
            m,
            v,
            A,
            o
          )), o && B & 2048 && jc(
            m.alternate,
            m
          );
          break;
        case 24:
          _i(
            s,
            m,
            v,
            A,
            o
          ), o && B & 2048 && Lc(m.alternate, m);
          break;
        default:
          _i(
            s,
            m,
            v,
            A,
            o
          );
      }
      e = e.sibling;
    }
  }
  function zo(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, o = a.flags;
        switch (a.tag) {
          case 22:
            zo(n, a), o & 2048 && jc(
              a.alternate,
              a
            );
            break;
          case 24:
            zo(n, a), o & 2048 && Lc(a.alternate, a);
            break;
          default:
            zo(n, a);
        }
        e = e.sibling;
      }
  }
  var Mo = 8192;
  function Ai(t) {
    if (t.subtreeFlags & Mo)
      for (t = t.child; t !== null; )
        zp(t), t = t.sibling;
  }
  function zp(t) {
    switch (t.tag) {
      case 26:
        Ai(t), t.flags & Mo && t.memoizedState !== null && zb(
          Kn,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ai(t);
        break;
      case 3:
      case 4:
        var e = Kn;
        Kn = vu(t.stateNode.containerInfo), Ai(t), Kn = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Mo, Mo = 16777216, Ai(t), Mo = e) : Ai(t));
        break;
      default:
        Ai(t);
    }
  }
  function Mp(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Do(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          We = a, Np(
            a,
            t
          );
        }
      Mp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Dp(t), t = t.sibling;
  }
  function Dp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Do(t), t.flags & 2048 && la(9, t, t.return);
        break;
      case 3:
        Do(t);
        break;
      case 12:
        Do(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, iu(t)) : Do(t);
        break;
      default:
        Do(t);
    }
  }
  function iu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          We = a, Np(
            a,
            t
          );
        }
      Mp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          la(8, e, e.return), iu(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, iu(e));
          break;
        default:
          iu(e);
      }
      t = t.sibling;
    }
  }
  function Np(t, e) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          la(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          mo(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, We = a;
      else
        t: for (n = t; We !== null; ) {
          a = We;
          var o = a.sibling, s = a.return;
          if (_p(a), a === n) {
            We = null;
            break t;
          }
          if (o !== null) {
            o.return = s, We = o;
            break t;
          }
          We = s;
        }
    }
  }
  var I1 = {
    getCacheForType: function(t) {
      var e = an(Ve), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    }
  }, Z1 = typeof WeakMap == "function" ? WeakMap : Map, ue = 0, xe = null, Ft = null, te = 0, se = 0, Tn = null, oa = !1, wi = !1, Uc = !1, Bl = 0, De = 0, ra = 0, Xa = 0, kc = 0, qn = 0, Oi = 0, No = null, pn = null, Bc = !1, qc = 0, ou = 1 / 0, ru = null, ua = null, en = 0, sa = null, Ri = null, Ci = 0, Yc = 0, Gc = null, Hp = null, Ho = 0, Vc = null;
  function En() {
    if ((ue & 2) !== 0 && te !== 0)
      return te & -te;
    if (L.T !== null) {
      var t = gi;
      return t !== 0 ? t : Jc();
    }
    return ln();
  }
  function jp() {
    qn === 0 && (qn = (te & 536870912) === 0 || ae ? Tl() : 536870912);
    var t = Bn.current;
    return t !== null && (t.flags |= 32), qn;
  }
  function _n(t, e, n) {
    (t === xe && (se === 2 || se === 9) || t.cancelPendingCommit !== null) && (zi(t, 0), ca(
      t,
      te,
      qn,
      !1
    )), Qn(t, n), ((ue & 2) === 0 || t !== xe) && (t === xe && ((ue & 2) === 0 && (Xa |= n), De === 4 && ca(
      t,
      te,
      qn,
      !1
    )), sl(t));
  }
  function Lp(t, e, n) {
    if ((ue & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || zn(t, e), o = a ? J1(t, e) : Ic(t, e, !0), s = a;
    do {
      if (o === 0) {
        wi && !a && ca(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, s && !K1(n)) {
          o = Ic(t, e, !1), s = !1;
          continue;
        }
        if (o === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = t.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            e = m;
            t: {
              var v = t;
              o = No;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (zi(v, m).flags |= 256), m = Ic(
                v,
                m,
                !1
              ), m !== 2) {
                if (Uc && !A) {
                  v.errorRecoveryDisabledLanes |= s, Xa |= s, o = 4;
                  break t;
                }
                s = pn, pn = o, s !== null && (pn === null ? pn = s : pn.push.apply(
                  pn,
                  s
                ));
              }
              o = m;
            }
            if (s = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          zi(t, 0), ca(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, s = o, s) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ca(
                a,
                e,
                qn,
                !oa
              );
              break t;
            case 2:
              pn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (o = qc + 300 - Lt(), 10 < o)) {
            if (ca(
              a,
              e,
              qn,
              !oa
            ), nl(a, 0, !0) !== 0) break t;
            a.timeoutHandle = fg(
              Up.bind(
                null,
                a,
                n,
                pn,
                ru,
                Bc,
                e,
                qn,
                Xa,
                Oi,
                oa,
                s,
                2,
                -0,
                0
              ),
              o
            );
            break t;
          }
          Up(
            a,
            n,
            pn,
            ru,
            Bc,
            e,
            qn,
            Xa,
            Oi,
            oa,
            s,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    sl(t);
  }
  function Up(t, e, n, a, o, s, m, v, A, B, J, et, V, Q) {
    if (t.timeoutHandle = -1, et = e.subtreeFlags, (et & 8192 || (et & 16785408) === 16785408) && (Yo = { stylesheets: null, count: 0, unsuspend: Cb }, zp(e), et = Mb(), et !== null)) {
      t.cancelPendingCommit = et(
        Xp.bind(
          null,
          t,
          e,
          s,
          n,
          a,
          o,
          m,
          v,
          A,
          J,
          1,
          V,
          Q
        )
      ), ca(t, s, m, !B);
      return;
    }
    Xp(
      t,
      e,
      s,
      n,
      a,
      o,
      m,
      v,
      A
    );
  }
  function K1(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var o = n[a], s = o.getSnapshot;
          o = o.value;
          try {
            if (!yn(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function ca(t, e, n, a) {
    e &= ~kc, e &= ~Xa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var o = e; 0 < o; ) {
      var s = 31 - ve(o), m = 1 << s;
      a[s] = -1, o &= ~m;
    }
    n !== 0 && je(t, n, e);
  }
  function uu() {
    return (ue & 6) === 0 ? (jo(0), !1) : !0;
  }
  function Xc() {
    if (Ft !== null) {
      if (se === 0)
        var t = Ft.return;
      else
        t = Ft, Ml = ka = null, rc(t), Ti = null, Ao = 0, t = Ft;
      for (; t !== null; )
        gp(t.alternate, t), t = t.return;
      Ft = null;
    }
  }
  function zi(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, db(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Xc(), xe = t, Ft = n = Rl(t.current, null), te = e, se = 0, Tn = null, oa = !1, wi = zn(t, e), Uc = !1, Oi = qn = kc = Xa = ra = De = 0, pn = No = null, Bc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var o = 31 - ve(a), s = 1 << o;
        e |= t[o], a &= ~s;
      }
    return Bl = e, zr(), n;
  }
  function kp(t, e) {
    Gt = null, L.H = Fr, e === go || e === Br ? (e = em(), se = 3) : e === $h ? (e = em(), se = 4) : se = e === np ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Tn = e, Ft === null && (De = 1, tu(
      t,
      jn(e, t.current)
    ));
  }
  function Bp() {
    var t = L.H;
    return L.H = Fr, t === null ? Fr : t;
  }
  function qp() {
    var t = L.A;
    return L.A = I1, t;
  }
  function Qc() {
    De = 4, oa || (te & 4194048) !== te && Bn.current !== null || (wi = !0), (ra & 134217727) === 0 && (Xa & 134217727) === 0 || xe === null || ca(
      xe,
      te,
      qn,
      !1
    );
  }
  function Ic(t, e, n) {
    var a = ue;
    ue |= 2;
    var o = Bp(), s = qp();
    (xe !== t || te !== e) && (ru = null, zi(t, e)), e = !1;
    var m = De;
    t: do
      try {
        if (se !== 0 && Ft !== null) {
          var v = Ft, A = Tn;
          switch (se) {
            case 8:
              Xc(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Bn.current === null && (e = !0);
              var B = se;
              if (se = 0, Tn = null, Mi(t, v, A, B), n && wi) {
                m = 0;
                break t;
              }
              break;
            default:
              B = se, se = 0, Tn = null, Mi(t, v, A, B);
          }
        }
        F1(), m = De;
        break;
      } catch (J) {
        kp(t, J);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ml = ka = null, ue = a, L.H = o, L.A = s, Ft === null && (xe = null, te = 0, zr()), m;
  }
  function F1() {
    for (; Ft !== null; ) Yp(Ft);
  }
  function J1(t, e) {
    var n = ue;
    ue |= 2;
    var a = Bp(), o = qp();
    xe !== t || te !== e ? (ru = null, ou = Lt() + 500, zi(t, e)) : wi = zn(
      t,
      e
    );
    t: do
      try {
        if (se !== 0 && Ft !== null) {
          e = Ft;
          var s = Tn;
          e: switch (se) {
            case 1:
              se = 0, Tn = null, Mi(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (Ph(s)) {
                se = 0, Tn = null, Gp(e);
                break;
              }
              e = function() {
                se !== 2 && se !== 9 || xe !== t || (se = 7), sl(t);
              }, s.then(e, e);
              break t;
            case 3:
              se = 7;
              break t;
            case 4:
              se = 5;
              break t;
            case 7:
              Ph(s) ? (se = 0, Tn = null, Gp(e)) : (se = 0, Tn = null, Mi(t, e, s, 7));
              break;
            case 5:
              var m = null;
              switch (Ft.tag) {
                case 26:
                  m = Ft.memoizedState;
                case 5:
                case 27:
                  var v = Ft;
                  if (!m || Eg(m)) {
                    se = 0, Tn = null;
                    var A = v.sibling;
                    if (A !== null) Ft = A;
                    else {
                      var B = v.return;
                      B !== null ? (Ft = B, su(B)) : Ft = null;
                    }
                    break e;
                  }
              }
              se = 0, Tn = null, Mi(t, e, s, 5);
              break;
            case 6:
              se = 0, Tn = null, Mi(t, e, s, 6);
              break;
            case 8:
              Xc(), De = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        W1();
        break;
      } catch (J) {
        kp(t, J);
      }
    while (!0);
    return Ml = ka = null, L.H = a, L.A = o, ue = n, Ft !== null ? 0 : (xe = null, te = 0, zr(), De);
  }
  function W1() {
    for (; Ft !== null && !Rt(); )
      Yp(Ft);
  }
  function Yp(t) {
    var e = mp(t.alternate, t, Bl);
    t.memoizedProps = t.pendingProps, e === null ? su(t) : Ft = e;
  }
  function Gp(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = up(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          te
        );
        break;
      case 11:
        e = up(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          te
        );
        break;
      case 5:
        rc(e);
      default:
        gp(n, e), e = Ft = Vh(e, Bl), e = mp(n, e, Bl);
    }
    t.memoizedProps = t.pendingProps, e === null ? su(t) : Ft = e;
  }
  function Mi(t, e, n, a) {
    Ml = ka = null, rc(e), Ti = null, Ao = 0;
    var o = e.return;
    try {
      if (q1(
        t,
        o,
        e,
        n,
        te
      )) {
        De = 1, tu(
          t,
          jn(n, t.current)
        ), Ft = null;
        return;
      }
    } catch (s) {
      if (o !== null) throw Ft = o, s;
      De = 1, tu(
        t,
        jn(n, t.current)
      ), Ft = null;
      return;
    }
    e.flags & 32768 ? (ae || a === 1 ? t = !0 : wi || (te & 536870912) !== 0 ? t = !1 : (oa = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Bn.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Vp(e, t)) : su(e);
  }
  function su(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Vp(
          e,
          oa
        );
        return;
      }
      t = e.return;
      var n = G1(
        e.alternate,
        e,
        Bl
      );
      if (n !== null) {
        Ft = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Ft = e;
        return;
      }
      Ft = e = t;
    } while (e !== null);
    De === 0 && (De = 5);
  }
  function Vp(t, e) {
    do {
      var n = V1(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Ft = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Ft = t;
        return;
      }
      Ft = t = n;
    } while (t !== null);
    De = 6, Ft = null;
  }
  function Xp(t, e, n, a, o, s, m, v, A) {
    t.cancelPendingCommit = null;
    do
      cu();
    while (en !== 0);
    if ((ue & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (s = e.lanes | e.childLanes, s |= Ls, ei(
        t,
        n,
        s,
        m,
        v,
        A
      ), t === xe && (Ft = xe = null, te = 0), Ri = e, sa = t, Ci = n, Yc = s, Gc = o, Hp = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, eb(Ne, function() {
        return Fp(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = L.T, L.T = null, o = Z.p, Z.p = 2, m = ue, ue |= 4;
        try {
          X1(t, e, n);
        } finally {
          ue = m, Z.p = o, L.T = a;
        }
      }
      en = 1, Qp(), Ip(), Zp();
    }
  }
  function Qp() {
    if (en === 1) {
      en = 0;
      var t = sa, e = Ri, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = L.T, L.T = null;
        var a = Z.p;
        Z.p = 2;
        var o = ue;
        ue |= 4;
        try {
          Op(e, t);
          var s = af, m = Nh(t.containerInfo), v = s.focusedElem, A = s.selectionRange;
          if (m !== v && v && v.ownerDocument && Dh(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && Ms(v)) {
              var B = A.start, J = A.end;
              if (J === void 0 && (J = B), "selectionStart" in v)
                v.selectionStart = B, v.selectionEnd = Math.min(
                  J,
                  v.value.length
                );
              else {
                var et = v.ownerDocument || document, V = et && et.defaultView || window;
                if (V.getSelection) {
                  var Q = V.getSelection(), Nt = v.textContent.length, Ct = Math.min(A.start, Nt), pe = A.end === void 0 ? Ct : Math.min(A.end, Nt);
                  !Q.extend && Ct > pe && (m = pe, pe = Ct, Ct = m);
                  var N = Mh(
                    v,
                    Ct
                  ), z = Mh(
                    v,
                    pe
                  );
                  if (N && z && (Q.rangeCount !== 1 || Q.anchorNode !== N.node || Q.anchorOffset !== N.offset || Q.focusNode !== z.node || Q.focusOffset !== z.offset)) {
                    var k = et.createRange();
                    k.setStart(N.node, N.offset), Q.removeAllRanges(), Ct > pe ? (Q.addRange(k), Q.extend(z.node, z.offset)) : (k.setEnd(z.node, z.offset), Q.addRange(k));
                  }
                }
              }
            }
            for (et = [], Q = v; Q = Q.parentNode; )
              Q.nodeType === 1 && et.push({
                element: Q,
                left: Q.scrollLeft,
                top: Q.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < et.length; v++) {
              var P = et[v];
              P.element.scrollLeft = P.left, P.element.scrollTop = P.top;
            }
          }
          Tu = !!lf, af = lf = null;
        } finally {
          ue = o, Z.p = a, L.T = n;
        }
      }
      t.current = e, en = 2;
    }
  }
  function Ip() {
    if (en === 2) {
      en = 0;
      var t = sa, e = Ri, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = L.T, L.T = null;
        var a = Z.p;
        Z.p = 2;
        var o = ue;
        ue |= 4;
        try {
          Ep(t, e.alternate, e);
        } finally {
          ue = o, Z.p = a, L.T = n;
        }
      }
      en = 3;
    }
  }
  function Zp() {
    if (en === 4 || en === 3) {
      en = 0, Mt();
      var t = sa, e = Ri, n = Ci, a = Hp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? en = 5 : (en = 0, Ri = sa = null, Kp(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (o === 0 && (ua = null), Qt(n), e = e.stateNode, Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
          Kt.onCommitFiberRoot(
            $t,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = L.T, o = Z.p, Z.p = 2, L.T = null;
        try {
          for (var s = t.onRecoverableError, m = 0; m < a.length; m++) {
            var v = a[m];
            s(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          L.T = e, Z.p = o;
        }
      }
      (Ci & 3) !== 0 && cu(), sl(t), o = t.pendingLanes, (n & 4194090) !== 0 && (o & 42) !== 0 ? t === Vc ? Ho++ : (Ho = 0, Vc = t) : Ho = 0, jo(0);
    }
  }
  function Kp(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, mo(e)));
  }
  function cu(t) {
    return Qp(), Ip(), Zp(), Fp();
  }
  function Fp() {
    if (en !== 5) return !1;
    var t = sa, e = Yc;
    Yc = 0;
    var n = Qt(Ci), a = L.T, o = Z.p;
    try {
      Z.p = 32 > n ? 32 : n, L.T = null, n = Gc, Gc = null;
      var s = sa, m = Ci;
      if (en = 0, Ri = sa = null, Ci = 0, (ue & 6) !== 0) throw Error(r(331));
      var v = ue;
      if (ue |= 4, Dp(s.current), Cp(
        s,
        s.current,
        m,
        n
      ), ue = v, jo(0, !1), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        try {
          Kt.onPostCommitFiberRoot($t, s);
        } catch {
        }
      return !0;
    } finally {
      Z.p = o, L.T = a, Kp(t, e);
    }
  }
  function Jp(t, e, n) {
    e = jn(n, e), e = xc(t.stateNode, e, 2), t = Pl(t, e, 2), t !== null && (Qn(t, 2), sl(t));
  }
  function ye(t, e, n) {
    if (t.tag === 3)
      Jp(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Jp(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ua === null || !ua.has(a))) {
            t = jn(n, t), n = tp(2), a = Pl(e, n, 2), a !== null && (ep(
              n,
              a,
              e,
              t
            ), Qn(a, 2), sl(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Zc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Z1();
      var o = /* @__PURE__ */ new Set();
      a.set(e, o);
    } else
      o = a.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(e, o));
    o.has(n) || (Uc = !0, o.add(n), t = $1.bind(null, t, e, n), e.then(t, t));
  }
  function $1(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, xe === t && (te & n) === n && (De === 4 || De === 3 && (te & 62914560) === te && 300 > Lt() - qc ? (ue & 2) === 0 && zi(t, 0) : kc |= n, Oi === te && (Oi = 0)), sl(t);
  }
  function Wp(t, e) {
    e === 0 && (e = El()), t = di(t, e), t !== null && (Qn(t, e), sl(t));
  }
  function P1(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Wp(t, n);
  }
  function tb(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode, o = t.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), Wp(t, n);
  }
  function eb(t, e) {
    return Yt(t, e);
  }
  var fu = null, Di = null, Kc = !1, du = !1, Fc = !1, Qa = 0;
  function sl(t) {
    t !== Di && t.next === null && (Di === null ? fu = Di = t : Di = Di.next = t), du = !0, Kc || (Kc = !0, lb());
  }
  function jo(t, e) {
    if (!Fc && du) {
      Fc = !0;
      do
        for (var n = !1, a = fu; a !== null; ) {
          if (t !== 0) {
            var o = a.pendingLanes;
            if (o === 0) var s = 0;
            else {
              var m = a.suspendedLanes, v = a.pingedLanes;
              s = (1 << 31 - ve(42 | t) + 1) - 1, s &= o & ~(m & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, eg(a, s));
          } else
            s = te, s = nl(
              a,
              a === xe ? s : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (s & 3) === 0 || zn(a, s) || (n = !0, eg(a, s));
          a = a.next;
        }
      while (n);
      Fc = !1;
    }
  }
  function nb() {
    $p();
  }
  function $p() {
    du = Kc = !1;
    var t = 0;
    Qa !== 0 && (fb() && (t = Qa), Qa = 0);
    for (var e = Lt(), n = null, a = fu; a !== null; ) {
      var o = a.next, s = Pp(a, e);
      s === 0 ? (a.next = null, n === null ? fu = o : n.next = o, o === null && (Di = n)) : (n = a, (t !== 0 || (s & 3) !== 0) && (du = !0)), a = o;
    }
    jo(t);
  }
  function Pp(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, o = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - ve(s), v = 1 << m, A = o[m];
      A === -1 ? ((v & n) === 0 || (v & a) !== 0) && (o[m] = Ra(v, e)) : A <= e && (t.expiredLanes |= v), s &= ~v;
    }
    if (e = xe, n = te, n = nl(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (se === 2 || se === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Xt(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || zn(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Xt(a), Qt(n)) {
        case 2:
        case 8:
          n = ne;
          break;
        case 32:
          n = Ne;
          break;
        case 268435456:
          n = Ge;
          break;
        default:
          n = Ne;
      }
      return a = tg.bind(null, t), n = Yt(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Xt(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function tg(t, e) {
    if (en !== 0 && en !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (cu() && t.callbackNode !== n)
      return null;
    var a = te;
    return a = nl(
      t,
      t === xe ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Lp(t, a, e), Pp(t, Lt()), t.callbackNode != null && t.callbackNode === n ? tg.bind(null, t) : null);
  }
  function eg(t, e) {
    if (cu()) return null;
    Lp(t, e, !0);
  }
  function lb() {
    hb(function() {
      (ue & 6) !== 0 ? Yt(
        Et,
        nb
      ) : $p();
    });
  }
  function Jc() {
    return Qa === 0 && (Qa = Tl()), Qa;
  }
  function ng(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Er("" + t);
  }
  function lg(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function ab(t, e, n, a, o) {
    if (e === "submit" && n && n.stateNode === o) {
      var s = ng(
        (o[xt] || null).action
      ), m = a.submitter;
      m && (e = (e = m[xt] || null) ? ng(e.formAction) : m.getAttribute("formAction"), e !== null && (s = e, m = null));
      var v = new Or(
        "action",
        "action",
        null,
        a,
        o
      );
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Qa !== 0) {
                  var A = m ? lg(o, m) : new FormData(o);
                  gc(
                    n,
                    {
                      pending: !0,
                      data: A,
                      method: o.method,
                      action: s
                    },
                    null,
                    A
                  );
                }
              } else
                typeof s == "function" && (v.preventDefault(), A = m ? lg(o, m) : new FormData(o), gc(
                  n,
                  {
                    pending: !0,
                    data: A,
                    method: o.method,
                    action: s
                  },
                  s,
                  A
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Wc = 0; Wc < js.length; Wc++) {
    var $c = js[Wc], ib = $c.toLowerCase(), ob = $c[0].toUpperCase() + $c.slice(1);
    Zn(
      ib,
      "on" + ob
    );
  }
  Zn(Lh, "onAnimationEnd"), Zn(Uh, "onAnimationIteration"), Zn(kh, "onAnimationStart"), Zn("dblclick", "onDoubleClick"), Zn("focusin", "onFocus"), Zn("focusout", "onBlur"), Zn(E1, "onTransitionRun"), Zn(_1, "onTransitionStart"), Zn(A1, "onTransitionCancel"), Zn(Bh, "onTransitionEnd"), Pt("onMouseEnter", ["mouseout", "mouseover"]), Pt("onMouseLeave", ["mouseout", "mouseover"]), Pt("onPointerEnter", ["pointerout", "pointerover"]), Pt("onPointerLeave", ["pointerout", "pointerover"]), al(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), al(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), al("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), al(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), al(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), al(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Lo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), rb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo)
  );
  function ag(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], o = a.event;
      a = a.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var m = a.length - 1; 0 <= m; m--) {
            var v = a[m], A = v.instance, B = v.currentTarget;
            if (v = v.listener, A !== s && o.isPropagationStopped())
              break t;
            s = v, o.currentTarget = B;
            try {
              s(o);
            } catch (J) {
              Pr(J);
            }
            o.currentTarget = null, s = A;
          }
        else
          for (m = 0; m < a.length; m++) {
            if (v = a[m], A = v.instance, B = v.currentTarget, v = v.listener, A !== s && o.isPropagationStopped())
              break t;
            s = v, o.currentTarget = B;
            try {
              s(o);
            } catch (J) {
              Pr(J);
            }
            o.currentTarget = null, s = A;
          }
      }
    }
  }
  function Jt(t, e) {
    var n = e[Be];
    n === void 0 && (n = e[Be] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (ig(e, t, 2, !1), n.add(a));
  }
  function Pc(t, e, n) {
    var a = 0;
    e && (a |= 4), ig(
      n,
      t,
      a,
      e
    );
  }
  var hu = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(t) {
    if (!t[hu]) {
      t[hu] = !0, $i.forEach(function(n) {
        n !== "selectionchange" && (rb.has(n) || Pc(n, !1, t), Pc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[hu] || (e[hu] = !0, Pc("selectionchange", !1, e));
    }
  }
  function ig(t, e, n, a) {
    switch (Cg(e)) {
      case 2:
        var o = Hb;
        break;
      case 8:
        o = jb;
        break;
      default:
        o = pf;
    }
    n = o.bind(
      null,
      e,
      n,
      t
    ), o = void 0, !Ts || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), a ? o !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: o
    }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, {
      passive: o
    }) : t.addEventListener(e, n, !1);
  }
  function ef(t, e, n, a, o) {
    var s = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var v = a.stateNode.containerInfo;
          if (v === o) break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === o)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = vn(v), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              a = s = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        a = a.return;
      }
    dh(function() {
      var B = s, J = Ss(n), et = [];
      t: {
        var V = qh.get(t);
        if (V !== void 0) {
          var Q = Or, Nt = t;
          switch (t) {
            case "keypress":
              if (Ar(n) === 0) break t;
            case "keydown":
            case "keyup":
              Q = e1;
              break;
            case "focusin":
              Nt = "focus", Q = ws;
              break;
            case "focusout":
              Nt = "blur", Q = ws;
              break;
            case "beforeblur":
            case "afterblur":
              Q = ws;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = ph;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Vy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = a1;
              break;
            case Lh:
            case Uh:
            case kh:
              Q = Iy;
              break;
            case Bh:
              Q = o1;
              break;
            case "scroll":
            case "scrollend":
              Q = Yy;
              break;
            case "wheel":
              Q = u1;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Ky;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = vh;
              break;
            case "toggle":
            case "beforetoggle":
              Q = c1;
          }
          var Ct = (e & 4) !== 0, pe = !Ct && (t === "scroll" || t === "scrollend"), N = Ct ? V !== null ? V + "Capture" : null : V;
          Ct = [];
          for (var z = B, k; z !== null; ) {
            var P = z;
            if (k = P.stateNode, P = P.tag, P !== 5 && P !== 26 && P !== 27 || k === null || N === null || (P = to(z, N), P != null && Ct.push(
              Uo(z, P, k)
            )), pe) break;
            z = z.return;
          }
          0 < Ct.length && (V = new Q(
            V,
            Nt,
            null,
            n,
            J
          ), et.push({ event: V, listeners: Ct }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (V = t === "mouseover" || t === "pointerover", Q = t === "mouseout" || t === "pointerout", V && n !== bs && (Nt = n.relatedTarget || n.fromElement) && (vn(Nt) || Nt[Se]))
            break t;
          if ((Q || V) && (V = J.window === J ? J : (V = J.ownerDocument) ? V.defaultView || V.parentWindow : window, Q ? (Nt = n.relatedTarget || n.toElement, Q = B, Nt = Nt ? vn(Nt) : null, Nt !== null && (pe = f(Nt), Ct = Nt.tag, Nt !== pe || Ct !== 5 && Ct !== 27 && Ct !== 6) && (Nt = null)) : (Q = null, Nt = B), Q !== Nt)) {
            if (Ct = ph, P = "onMouseLeave", N = "onMouseEnter", z = "mouse", (t === "pointerout" || t === "pointerover") && (Ct = vh, P = "onPointerLeave", N = "onPointerEnter", z = "pointer"), pe = Q == null ? V : Ca(Q), k = Nt == null ? V : Ca(Nt), V = new Ct(
              P,
              z + "leave",
              Q,
              n,
              J
            ), V.target = pe, V.relatedTarget = k, P = null, vn(J) === B && (Ct = new Ct(
              N,
              z + "enter",
              Nt,
              n,
              J
            ), Ct.target = k, Ct.relatedTarget = pe, P = Ct), pe = P, Q && Nt)
              e: {
                for (Ct = Q, N = Nt, z = 0, k = Ct; k; k = Ni(k))
                  z++;
                for (k = 0, P = N; P; P = Ni(P))
                  k++;
                for (; 0 < z - k; )
                  Ct = Ni(Ct), z--;
                for (; 0 < k - z; )
                  N = Ni(N), k--;
                for (; z--; ) {
                  if (Ct === N || N !== null && Ct === N.alternate)
                    break e;
                  Ct = Ni(Ct), N = Ni(N);
                }
                Ct = null;
              }
            else Ct = null;
            Q !== null && og(
              et,
              V,
              Q,
              Ct,
              !1
            ), Nt !== null && pe !== null && og(
              et,
              pe,
              Nt,
              Ct,
              !0
            );
          }
        }
        t: {
          if (V = B ? Ca(B) : window, Q = V.nodeName && V.nodeName.toLowerCase(), Q === "select" || Q === "input" && V.type === "file")
            var bt = Ah;
          else if (Eh(V))
            if (wh)
              bt = S1;
            else {
              bt = y1;
              var It = v1;
            }
          else
            Q = V.nodeName, !Q || Q.toLowerCase() !== "input" || V.type !== "checkbox" && V.type !== "radio" ? B && ys(B.elementType) && (bt = Ah) : bt = b1;
          if (bt && (bt = bt(t, B))) {
            _h(
              et,
              bt,
              n,
              J
            );
            break t;
          }
          It && It(t, V, B), t === "focusout" && B && V.type === "number" && B.memoizedProps.value != null && vs(V, "number", V.value);
        }
        switch (It = B ? Ca(B) : window, t) {
          case "focusin":
            (Eh(It) || It.contentEditable === "true") && (si = It, Ds = B, uo = null);
            break;
          case "focusout":
            uo = Ds = si = null;
            break;
          case "mousedown":
            Ns = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ns = !1, Hh(et, n, J);
            break;
          case "selectionchange":
            if (T1) break;
          case "keydown":
          case "keyup":
            Hh(et, n, J);
        }
        var _t;
        if (Rs)
          t: {
            switch (t) {
              case "compositionstart":
                var zt = "onCompositionStart";
                break t;
              case "compositionend":
                zt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                zt = "onCompositionUpdate";
                break t;
            }
            zt = void 0;
          }
        else
          ui ? xh(t, n) && (zt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (zt = "onCompositionStart");
        zt && (yh && n.locale !== "ko" && (ui || zt !== "onCompositionStart" ? zt === "onCompositionEnd" && ui && (_t = hh()) : (Fl = J, Es = "value" in Fl ? Fl.value : Fl.textContent, ui = !0)), It = mu(B, zt), 0 < It.length && (zt = new gh(
          zt,
          t,
          null,
          n,
          J
        ), et.push({ event: zt, listeners: It }), _t ? zt.data = _t : (_t = Th(n), _t !== null && (zt.data = _t)))), (_t = d1 ? h1(t, n) : m1(t, n)) && (zt = mu(B, "onBeforeInput"), 0 < zt.length && (It = new gh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          J
        ), et.push({
          event: It,
          listeners: zt
        }), It.data = _t)), ab(
          et,
          t,
          B,
          n,
          J
        );
      }
      ag(et, e);
    });
  }
  function Uo(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function mu(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var o = t, s = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = to(t, n), o != null && a.unshift(
        Uo(t, o, s)
      ), o = to(t, e), o != null && a.push(
        Uo(t, o, s)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Ni(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function og(t, e, n, a, o) {
    for (var s = e._reactName, m = []; n !== null && n !== a; ) {
      var v = n, A = v.alternate, B = v.stateNode;
      if (v = v.tag, A !== null && A === a) break;
      v !== 5 && v !== 26 && v !== 27 || B === null || (A = B, o ? (B = to(n, s), B != null && m.unshift(
        Uo(n, B, A)
      )) : o || (B = to(n, s), B != null && m.push(
        Uo(n, B, A)
      ))), n = n.return;
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var ub = /\r\n?/g, sb = /\u0000|\uFFFD/g;
  function rg(t) {
    return (typeof t == "string" ? t : "" + t).replace(ub, `
`).replace(sb, "");
  }
  function ug(t, e) {
    return e = rg(e), rg(t) === e;
  }
  function pu() {
  }
  function me(t, e, n, a, o, s) {
    switch (n) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ii(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ii(t, "" + a);
        break;
      case "className":
        Sr(t, "class", a);
        break;
      case "tabIndex":
        Sr(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Sr(t, n, a);
        break;
      case "style":
        ch(t, a, s);
        break;
      case "data":
        if (e !== "object") {
          Sr(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Er("" + a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (n === "formAction" ? (e !== "input" && me(t, e, "name", o.name, o, null), me(
            t,
            e,
            "formEncType",
            o.formEncType,
            o,
            null
          ), me(
            t,
            e,
            "formMethod",
            o.formMethod,
            o,
            null
          ), me(
            t,
            e,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (me(t, e, "encType", o.encType, o, null), me(t, e, "method", o.method, o, null), me(t, e, "target", o.target, o, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Er("" + a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = pu);
        break;
      case "onScroll":
        a != null && Jt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Jt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Er("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        Jt("beforetoggle", t), Jt("toggle", t), Kl(t, "popover", a);
        break;
      case "xlinkActuate":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        wl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        wl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        wl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Kl(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = By.get(n) || n, Kl(t, n, a));
    }
  }
  function nf(t, e, n, a, o, s) {
    switch (n) {
      case "style":
        ch(t, a, s);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ii(t, a) : (typeof a == "number" || typeof a == "bigint") && ii(t, "" + a);
        break;
      case "onScroll":
        a != null && Jt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Jt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = pu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Pi.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), e = n.slice(2, o ? n.length - 7 : void 0), s = t[xt] || null, s = s != null ? s[n] : null, typeof s == "function" && t.removeEventListener(e, s, o), typeof a == "function")) {
              typeof s != "function" && s !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, o);
              break t;
            }
            n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Kl(t, n, a);
          }
    }
  }
  function nn(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Jt("error", t), Jt("load", t);
        var a = !1, o = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var m = n[s];
            if (m != null)
              switch (s) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  me(t, e, s, m, n, null);
              }
          }
        o && me(t, e, "srcSet", n.srcSet, n, null), a && me(t, e, "src", n.src, n, null);
        return;
      case "input":
        Jt("invalid", t);
        var v = s = m = o = null, A = null, B = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var J = n[a];
            if (J != null)
              switch (a) {
                case "name":
                  o = J;
                  break;
                case "type":
                  m = J;
                  break;
                case "checked":
                  A = J;
                  break;
                case "defaultChecked":
                  B = J;
                  break;
                case "value":
                  s = J;
                  break;
                case "defaultValue":
                  v = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(r(137, e));
                  break;
                default:
                  me(t, e, a, J, n, null);
              }
          }
        oh(
          t,
          s,
          v,
          A,
          B,
          m,
          o,
          !1
        ), xr(t);
        return;
      case "select":
        Jt("invalid", t), a = m = s = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (v = n[o], v != null))
            switch (o) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                a = v;
              default:
                me(t, e, o, v, n, null);
            }
        e = s, n = m, t.multiple = !!a, e != null ? ai(t, !!a, e, !1) : n != null && ai(t, !!a, n, !0);
        return;
      case "textarea":
        Jt("invalid", t), s = o = a = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (v = n[m], v != null))
            switch (m) {
              case "value":
                a = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                s = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                me(t, e, m, v, n, null);
            }
        uh(t, a, o, s), xr(t);
        return;
      case "option":
        for (A in n)
          if (n.hasOwnProperty(A) && (a = n[A], a != null))
            switch (A) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                me(t, e, A, a, n, null);
            }
        return;
      case "dialog":
        Jt("beforetoggle", t), Jt("toggle", t), Jt("cancel", t), Jt("close", t);
        break;
      case "iframe":
      case "object":
        Jt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Lo.length; a++)
          Jt(Lo[a], t);
        break;
      case "image":
        Jt("error", t), Jt("load", t);
        break;
      case "details":
        Jt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Jt("error", t), Jt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in n)
          if (n.hasOwnProperty(B) && (a = n[B], a != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                me(t, e, B, a, n, null);
            }
        return;
      default:
        if (ys(e)) {
          for (J in n)
            n.hasOwnProperty(J) && (a = n[J], a !== void 0 && nf(
              t,
              e,
              J,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && (a = n[v], a != null && me(t, e, v, a, n, null));
  }
  function cb(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, s = null, m = null, v = null, A = null, B = null, J = null;
        for (Q in n) {
          var et = n[Q];
          if (n.hasOwnProperty(Q) && et != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = et;
              default:
                a.hasOwnProperty(Q) || me(t, e, Q, null, a, et);
            }
        }
        for (var V in a) {
          var Q = a[V];
          if (et = n[V], a.hasOwnProperty(V) && (Q != null || et != null))
            switch (V) {
              case "type":
                s = Q;
                break;
              case "name":
                o = Q;
                break;
              case "checked":
                B = Q;
                break;
              case "defaultChecked":
                J = Q;
                break;
              case "value":
                m = Q;
                break;
              case "defaultValue":
                v = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(r(137, e));
                break;
              default:
                Q !== et && me(
                  t,
                  e,
                  V,
                  Q,
                  a,
                  et
                );
            }
        }
        gs(
          t,
          m,
          v,
          A,
          B,
          J,
          s,
          o
        );
        return;
      case "select":
        Q = m = v = V = null;
        for (s in n)
          if (A = n[s], n.hasOwnProperty(s) && A != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                Q = A;
              default:
                a.hasOwnProperty(s) || me(
                  t,
                  e,
                  s,
                  null,
                  a,
                  A
                );
            }
        for (o in a)
          if (s = a[o], A = n[o], a.hasOwnProperty(o) && (s != null || A != null))
            switch (o) {
              case "value":
                V = s;
                break;
              case "defaultValue":
                v = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== A && me(
                  t,
                  e,
                  o,
                  s,
                  a,
                  A
                );
            }
        e = v, n = m, a = Q, V != null ? ai(t, !!n, V, !1) : !!a != !!n && (e != null ? ai(t, !!n, e, !0) : ai(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        Q = V = null;
        for (v in n)
          if (o = n[v], n.hasOwnProperty(v) && o != null && !a.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                me(t, e, v, null, a, o);
            }
        for (m in a)
          if (o = a[m], s = n[m], a.hasOwnProperty(m) && (o != null || s != null))
            switch (m) {
              case "value":
                V = o;
                break;
              case "defaultValue":
                Q = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                o !== s && me(t, e, m, o, a, s);
            }
        rh(t, V, Q);
        return;
      case "option":
        for (var Nt in n)
          if (V = n[Nt], n.hasOwnProperty(Nt) && V != null && !a.hasOwnProperty(Nt))
            switch (Nt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                me(
                  t,
                  e,
                  Nt,
                  null,
                  a,
                  V
                );
            }
        for (A in a)
          if (V = a[A], Q = n[A], a.hasOwnProperty(A) && V !== Q && (V != null || Q != null))
            switch (A) {
              case "selected":
                t.selected = V && typeof V != "function" && typeof V != "symbol";
                break;
              default:
                me(
                  t,
                  e,
                  A,
                  V,
                  a,
                  Q
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ct in n)
          V = n[Ct], n.hasOwnProperty(Ct) && V != null && !a.hasOwnProperty(Ct) && me(t, e, Ct, null, a, V);
        for (B in a)
          if (V = a[B], Q = n[B], a.hasOwnProperty(B) && V !== Q && (V != null || Q != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(r(137, e));
                break;
              default:
                me(
                  t,
                  e,
                  B,
                  V,
                  a,
                  Q
                );
            }
        return;
      default:
        if (ys(e)) {
          for (var pe in n)
            V = n[pe], n.hasOwnProperty(pe) && V !== void 0 && !a.hasOwnProperty(pe) && nf(
              t,
              e,
              pe,
              void 0,
              a,
              V
            );
          for (J in a)
            V = a[J], Q = n[J], !a.hasOwnProperty(J) || V === Q || V === void 0 && Q === void 0 || nf(
              t,
              e,
              J,
              V,
              a,
              Q
            );
          return;
        }
    }
    for (var N in n)
      V = n[N], n.hasOwnProperty(N) && V != null && !a.hasOwnProperty(N) && me(t, e, N, null, a, V);
    for (et in a)
      V = a[et], Q = n[et], !a.hasOwnProperty(et) || V === Q || V == null && Q == null || me(t, e, et, V, a, Q);
  }
  var lf = null, af = null;
  function gu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sg(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function cg(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function of(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var rf = null;
  function fb() {
    var t = window.event;
    return t && t.type === "popstate" ? t === rf ? !1 : (rf = t, !0) : (rf = null, !1);
  }
  var fg = typeof setTimeout == "function" ? setTimeout : void 0, db = typeof clearTimeout == "function" ? clearTimeout : void 0, dg = typeof Promise == "function" ? Promise : void 0, hb = typeof queueMicrotask == "function" ? queueMicrotask : typeof dg < "u" ? function(t) {
    return dg.resolve(null).then(t).catch(mb);
  } : fg;
  function mb(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function fa(t) {
    return t === "head";
  }
  function hg(t, e) {
    var n = e, a = 0, o = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$") {
          if (0 < a && 8 > a) {
            n = a;
            var m = t.ownerDocument;
            if (n & 1 && ko(m.documentElement), n & 2 && ko(m.body), n & 4)
              for (n = m.head, ko(n), m = n.firstChild; m; ) {
                var v = m.nextSibling, A = m.nodeName;
                m[Fe] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && m.rel.toLowerCase() === "stylesheet" || n.removeChild(m), m = v;
              }
          }
          if (o === 0) {
            t.removeChild(s), Io(e);
            return;
          }
          o--;
        } else
          n === "$" || n === "$?" || n === "$!" ? o++ : a = n.charCodeAt(0) - 48;
      else a = 0;
      n = s;
    } while (n);
    Io(e);
  }
  function uf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          uf(n), de(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function pb(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var o = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Fe])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (s !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (s = t.getAttribute("src"), (s !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === s)
          return t;
      } else return t;
      if (t = Fn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function gb(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Fn(t.nextSibling), t === null)) return null;
    return t;
  }
  function sf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function vb(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Fn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var cf = null;
  function mg(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function pg(t, e, n) {
    switch (e = gu(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function ko(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    de(t);
  }
  var Yn = /* @__PURE__ */ new Map(), gg = /* @__PURE__ */ new Set();
  function vu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ql = Z.d;
  Z.d = {
    f: yb,
    r: bb,
    D: Sb,
    C: xb,
    L: Tb,
    m: Eb,
    X: Ab,
    S: _b,
    M: wb
  };
  function yb() {
    var t = ql.f(), e = uu();
    return t || e;
  }
  function bb(t) {
    var e = Il(t);
    e !== null && e.tag === 5 && e.type === "form" ? Lm(e) : ql.r(t);
  }
  var Hi = typeof document > "u" ? null : document;
  function vg(t, e, n) {
    var a = Hi;
    if (a && typeof e == "string" && e) {
      var o = Hn(e);
      o = 'link[rel="' + t + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), gg.has(o) || (gg.add(o), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(o) === null && (e = a.createElement("link"), nn(e, "link", t), Le(e), a.head.appendChild(e)));
    }
  }
  function Sb(t) {
    ql.D(t), vg("dns-prefetch", t, null);
  }
  function xb(t, e) {
    ql.C(t, e), vg("preconnect", t, e);
  }
  function Tb(t, e, n) {
    ql.L(t, e, n);
    var a = Hi;
    if (a && t && e) {
      var o = 'link[rel="preload"][as="' + Hn(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Hn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Hn(
        n.imageSizes
      ) + '"]')) : o += '[href="' + Hn(t) + '"]';
      var s = o;
      switch (e) {
        case "style":
          s = ji(t);
          break;
        case "script":
          s = Li(t);
      }
      Yn.has(s) || (t = y(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Yn.set(s, t), a.querySelector(o) !== null || e === "style" && a.querySelector(Bo(s)) || e === "script" && a.querySelector(qo(s)) || (e = a.createElement("link"), nn(e, "link", t), Le(e), a.head.appendChild(e)));
    }
  }
  function Eb(t, e) {
    ql.m(t, e);
    var n = Hi;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + Hn(a) + '"][href="' + Hn(t) + '"]', s = o;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Li(t);
      }
      if (!Yn.has(s) && (t = y({ rel: "modulepreload", href: t }, e), Yn.set(s, t), n.querySelector(o) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(qo(s)))
              return;
        }
        a = n.createElement("link"), nn(a, "link", t), Le(a), n.head.appendChild(a);
      }
    }
  }
  function _b(t, e, n) {
    ql.S(t, e, n);
    var a = Hi;
    if (a && t) {
      var o = Al(a).hoistableStyles, s = ji(t);
      e = e || "default";
      var m = o.get(s);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = a.querySelector(
          Bo(s)
        ))
          v.loading = 5;
        else {
          t = y(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Yn.get(s)) && ff(t, n);
          var A = m = a.createElement("link");
          Le(A), nn(A, "link", t), A._p = new Promise(function(B, J) {
            A.onload = B, A.onerror = J;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, yu(m, e, a);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, o.set(s, m);
      }
    }
  }
  function Ab(t, e) {
    ql.X(t, e);
    var n = Hi;
    if (n && t) {
      var a = Al(n).hoistableScripts, o = Li(t), s = a.get(o);
      s || (s = n.querySelector(qo(o)), s || (t = y({ src: t, async: !0 }, e), (e = Yn.get(o)) && df(t, e), s = n.createElement("script"), Le(s), nn(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(o, s));
    }
  }
  function wb(t, e) {
    ql.M(t, e);
    var n = Hi;
    if (n && t) {
      var a = Al(n).hoistableScripts, o = Li(t), s = a.get(o);
      s || (s = n.querySelector(qo(o)), s || (t = y({ src: t, async: !0, type: "module" }, e), (e = Yn.get(o)) && df(t, e), s = n.createElement("script"), Le(s), nn(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(o, s));
    }
  }
  function yg(t, e, n, a) {
    var o = (o = ht.current) ? vu(o) : null;
    if (!o) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ji(n.href), n = Al(
          o
        ).hoistableStyles, a = n.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ji(n.href);
          var s = Al(
            o
          ).hoistableStyles, m = s.get(t);
          if (m || (o = o.ownerDocument || o, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(t, m), (s = o.querySelector(
            Bo(t)
          )) && !s._p && (m.instance = s, m.state.loading = 5), Yn.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Yn.set(t, n), s || Ob(
            o,
            t,
            n,
            m.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return m;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Li(n), n = Al(
          o
        ).hoistableScripts, a = n.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function ji(t) {
    return 'href="' + Hn(t) + '"';
  }
  function Bo(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function bg(t) {
    return y({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Ob(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), nn(e, "link", n), Le(e), t.head.appendChild(e));
  }
  function Li(t) {
    return '[src="' + Hn(t) + '"]';
  }
  function qo(t) {
    return "script[async]" + t;
  }
  function Sg(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Hn(n.href) + '"]'
          );
          if (a)
            return e.instance = a, Le(a), a;
          var o = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Le(a), nn(a, "style", o), yu(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          o = ji(n.href);
          var s = t.querySelector(
            Bo(o)
          );
          if (s)
            return e.state.loading |= 4, e.instance = s, Le(s), s;
          a = bg(n), (o = Yn.get(o)) && ff(a, o), s = (t.ownerDocument || t).createElement("link"), Le(s);
          var m = s;
          return m._p = new Promise(function(v, A) {
            m.onload = v, m.onerror = A;
          }), nn(s, "link", a), e.state.loading |= 4, yu(s, n.precedence, t), e.instance = s;
        case "script":
          return s = Li(n.src), (o = t.querySelector(
            qo(s)
          )) ? (e.instance = o, Le(o), o) : (a = n, (o = Yn.get(s)) && (a = y({}, n), df(a, o)), t = t.ownerDocument || t, o = t.createElement("script"), Le(o), nn(o, "link", a), t.head.appendChild(o), e.instance = o);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, yu(a, n.precedence, t));
    return e.instance;
  }
  function yu(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = a.length ? a[a.length - 1] : null, s = o, m = 0; m < a.length; m++) {
      var v = a[m];
      if (v.dataset.precedence === e) s = v;
      else if (s !== o) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function ff(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function df(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var bu = null;
  function xg(t, e, n) {
    if (bu === null) {
      var a = /* @__PURE__ */ new Map(), o = bu = /* @__PURE__ */ new Map();
      o.set(n, a);
    } else
      o = bu, a = o.get(n), a || (a = /* @__PURE__ */ new Map(), o.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), o = 0; o < n.length; o++) {
      var s = n[o];
      if (!(s[Fe] || s[yt] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(e) || "";
        m = t + m;
        var v = a.get(m);
        v ? v.push(s) : a.set(m, [s]);
      }
    }
    return a;
  }
  function Tg(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Rb(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Eg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Yo = null;
  function Cb() {
  }
  function zb(t, e, n) {
    if (Yo === null) throw Error(r(475));
    var a = Yo;
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var o = ji(n.href), s = t.querySelector(
          Bo(o)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Su.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = s, Le(s);
          return;
        }
        s = t.ownerDocument || t, n = bg(n), (o = Yn.get(o)) && ff(n, o), s = s.createElement("link"), Le(s);
        var m = s;
        m._p = new Promise(function(v, A) {
          m.onload = v, m.onerror = A;
        }), nn(s, "link", n), e.instance = s;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = Su.bind(a), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function Mb() {
    if (Yo === null) throw Error(r(475));
    var t = Yo;
    return t.stylesheets && t.count === 0 && hf(t, t.stylesheets), 0 < t.count ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && hf(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function Su() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) hf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var xu = null;
  function hf(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, xu = /* @__PURE__ */ new Map(), e.forEach(Db, t), xu = null, Su.call(t));
  }
  function Db(t, e) {
    if (!(e.state.loading & 4)) {
      var n = xu.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), xu.set(t, n);
        for (var o = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < o.length; s++) {
          var m = o[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), a = m);
        }
        a && n.set(null, a);
      }
      o = e.instance, m = o.getAttribute("data-precedence"), s = n.get(m) || a, s === a && n.set(null, o), n.set(m, o), this.count++, a = Su.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), s ? s.parentNode.insertBefore(o, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Go = {
    $$typeof: U,
    Provider: null,
    Consumer: null,
    _currentValue: nt,
    _currentValue2: nt,
    _threadCount: 0
  };
  function Nb(t, e, n, a, o, s, m, v) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ll(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ll(0), this.hiddenUpdates = ll(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _g(t, e, n, a, o, s, m, v, A, B, J, et) {
    return t = new Nb(
      t,
      e,
      n,
      m,
      v,
      A,
      B,
      et
    ), e = 1, s === !0 && (e |= 24), s = bn(3, null, null, e), t.current = s, s.stateNode = t, e = Zs(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, Ws(s), t;
  }
  function Ag(t) {
    return t ? (t = hi, t) : hi;
  }
  function wg(t, e, n, a, o, s) {
    o = Ag(o), a.context === null ? a.context = o : a.pendingContext = o, a = $l(e), a.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (a.callback = s), n = Pl(t, a, e), n !== null && (_n(n, t, e), yo(n, t, e));
  }
  function Og(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function mf(t, e) {
    Og(t, e), (t = t.alternate) && Og(t, e);
  }
  function Rg(t) {
    if (t.tag === 13) {
      var e = di(t, 67108864);
      e !== null && _n(e, t, 67108864), mf(t, 67108864);
    }
  }
  var Tu = !0;
  function Hb(t, e, n, a) {
    var o = L.T;
    L.T = null;
    var s = Z.p;
    try {
      Z.p = 2, pf(t, e, n, a);
    } finally {
      Z.p = s, L.T = o;
    }
  }
  function jb(t, e, n, a) {
    var o = L.T;
    L.T = null;
    var s = Z.p;
    try {
      Z.p = 8, pf(t, e, n, a);
    } finally {
      Z.p = s, L.T = o;
    }
  }
  function pf(t, e, n, a) {
    if (Tu) {
      var o = gf(a);
      if (o === null)
        ef(
          t,
          e,
          a,
          Eu,
          n
        ), zg(t, a);
      else if (Ub(
        o,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (zg(t, a), e & 4 && -1 < Lb.indexOf(t)) {
        for (; o !== null; ) {
          var s = Il(o);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = Cn(s.pendingLanes);
                  if (m !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - ve(m);
                      v.entanglements[1] |= A, m &= ~A;
                    }
                    sl(s), (ue & 6) === 0 && (ou = Lt() + 500, jo(0));
                  }
                }
                break;
              case 13:
                v = di(s, 2), v !== null && _n(v, s, 2), uu(), mf(s, 2);
            }
          if (s = gf(a), s === null && ef(
            t,
            e,
            a,
            Eu,
            n
          ), s === o) break;
          o = s;
        }
        o !== null && a.stopPropagation();
      } else
        ef(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function gf(t) {
    return t = Ss(t), vf(t);
  }
  var Eu = null;
  function vf(t) {
    if (Eu = null, t = vn(t), t !== null) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Eu = t, null;
  }
  function Cg(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Dt()) {
          case Et:
            return 2;
          case ne:
            return 8;
          case Ne:
          case He:
            return 32;
          case Ge:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yf = !1, da = null, ha = null, ma = null, Vo = /* @__PURE__ */ new Map(), Xo = /* @__PURE__ */ new Map(), pa = [], Lb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        da = null;
        break;
      case "dragenter":
      case "dragleave":
        ha = null;
        break;
      case "mouseover":
      case "mouseout":
        ma = null;
        break;
      case "pointerover":
      case "pointerout":
        Vo.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xo.delete(e.pointerId);
    }
  }
  function Qo(t, e, n, a, o, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: s,
      targetContainers: [o]
    }, e !== null && (e = Il(e), e !== null && Rg(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
  }
  function Ub(t, e, n, a, o) {
    switch (e) {
      case "focusin":
        return da = Qo(
          da,
          t,
          e,
          n,
          a,
          o
        ), !0;
      case "dragenter":
        return ha = Qo(
          ha,
          t,
          e,
          n,
          a,
          o
        ), !0;
      case "mouseover":
        return ma = Qo(
          ma,
          t,
          e,
          n,
          a,
          o
        ), !0;
      case "pointerover":
        var s = o.pointerId;
        return Vo.set(
          s,
          Qo(
            Vo.get(s) || null,
            t,
            e,
            n,
            a,
            o
          )
        ), !0;
      case "gotpointercapture":
        return s = o.pointerId, Xo.set(
          s,
          Qo(
            Xo.get(s) || null,
            t,
            e,
            n,
            a,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Mg(t) {
    var e = vn(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, _l(t.priority, function() {
              if (n.tag === 13) {
                var a = En();
                a = Ot(a);
                var o = di(n, a);
                o !== null && _n(o, n, a), mf(n, a);
              }
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function _u(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = gf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        bs = a, n.target.dispatchEvent(a), bs = null;
      } else
        return e = Il(n), e !== null && Rg(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Dg(t, e, n) {
    _u(t) && n.delete(e);
  }
  function kb() {
    yf = !1, da !== null && _u(da) && (da = null), ha !== null && _u(ha) && (ha = null), ma !== null && _u(ma) && (ma = null), Vo.forEach(Dg), Xo.forEach(Dg);
  }
  function Au(t, e) {
    t.blockedOn === e && (t.blockedOn = null, yf || (yf = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      kb
    )));
  }
  var wu = null;
  function Ng(t) {
    wu !== t && (wu = t, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        wu === t && (wu = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], o = t[e + 2];
          if (typeof a != "function") {
            if (vf(a || n) === null)
              continue;
            break;
          }
          var s = Il(n);
          s !== null && (t.splice(e, 3), e -= 3, gc(
            s,
            {
              pending: !0,
              data: o,
              method: n.method,
              action: a
            },
            a,
            o
          ));
        }
      }
    ));
  }
  function Io(t) {
    function e(A) {
      return Au(A, t);
    }
    da !== null && Au(da, t), ha !== null && Au(ha, t), ma !== null && Au(ma, t), Vo.forEach(e), Xo.forEach(e);
    for (var n = 0; n < pa.length; n++) {
      var a = pa[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < pa.length && (n = pa[0], n.blockedOn === null); )
      Mg(n), n.blockedOn === null && pa.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var o = n[a], s = n[a + 1], m = o[xt] || null;
        if (typeof s == "function")
          m || Ng(n);
        else if (m) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (o = s, m = s[xt] || null)
              v = m.formAction;
            else if (vf(o) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? n[a + 1] = v : (n.splice(a, 3), a -= 3), Ng(n);
        }
      }
  }
  function bf(t) {
    this._internalRoot = t;
  }
  Ou.prototype.render = bf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = En();
    wg(n, a, t, e, null, null);
  }, Ou.prototype.unmount = bf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      wg(t.current, 2, null, t, null, null), uu(), e[Se] = null;
    }
  };
  function Ou(t) {
    this._internalRoot = t;
  }
  Ou.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = ln();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < pa.length && e !== 0 && e < pa[n].priority; n++) ;
      pa.splice(n, 0, t), n === 0 && Mg(t);
    }
  };
  var Hg = i.version;
  if (Hg !== "19.1.0")
    throw Error(
      r(
        527,
        Hg,
        "19.1.0"
      )
    );
  Z.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = g(e), t = t !== null ? h(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Bb = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ru.isDisabled && Ru.supportsFiber)
      try {
        $t = Ru.inject(
          Bb
        ), Kt = Ru;
      } catch {
      }
  }
  return Zo.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, a = "", o = Jm, s = Wm, m = $m, v = null;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (m = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (v = e.unstable_transitionCallbacks)), e = _g(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      o,
      s,
      m,
      v,
      null
    ), t[Se] = e.current, tf(t), new bf(e);
  }, Zo.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var a = !1, o = "", s = Jm, m = Wm, v = $m, A = null, B = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (A = n.unstable_transitionCallbacks), n.formState !== void 0 && (B = n.formState)), e = _g(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      o,
      s,
      m,
      v,
      A,
      B
    ), e.context = Ag(null), n = e.current, a = En(), a = Ot(a), o = $l(a), o.callback = null, Pl(n, o, a), n = a, e.current.lanes = n, Qn(e, n), sl(e), t[Se] = e.current, tf(t), new Ou(e);
  }, Zo.version = "19.1.0", Zo;
}
var Gg;
function Ib() {
  if (Gg) return xf.exports;
  Gg = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), xf.exports = Qb(), xf.exports;
}
var Zb = Ib(), Kb = Object.defineProperty, Fb = (l, i, u) => i in l ? Kb(l, i, { enumerable: !0, configurable: !0, writable: !0, value: u }) : l[i] = u, Cu = (l, i, u) => Fb(l, typeof i != "symbol" ? i + "" : i, u);
const Jb = {
  stringify: (l) => l ? "true" : "false",
  parse: (l) => /^[ty1-9]/i.test(l)
}, Wb = {
  stringify: (l) => l.name,
  parse: (l, i, u) => {
    const r = (() => {
      if (typeof window < "u" && l in window)
        return window[l];
      if (typeof global < "u" && l in global)
        return global[l];
    })();
    return typeof r == "function" ? r.bind(u) : void 0;
  }
}, $b = {
  stringify: (l) => JSON.stringify(l),
  parse: (l) => JSON.parse(l)
}, Pb = {
  stringify: (l) => `${l}`,
  parse: (l) => parseFloat(l)
}, tS = {
  stringify: (l) => l,
  parse: (l) => l
}, Af = {
  string: tS,
  number: Pb,
  boolean: Jb,
  function: Wb,
  json: $b
};
function eS(l) {
  return l.replace(
    /([a-z0-9])([A-Z])/g,
    (i, u, r) => `${u}-${r.toLowerCase()}`
  );
}
const zu = Symbol.for("r2wc.render"), Mu = Symbol.for("r2wc.connected"), Ia = Symbol.for("r2wc.context"), Yl = Symbol.for("r2wc.props");
function nS(l, i, u) {
  var r, c, f;
  i.props || (i.props = l.propTypes ? Object.keys(l.propTypes) : []), i.events || (i.events = []);
  const d = Array.isArray(i.props) ? i.props.slice() : Object.keys(i.props), p = Array.isArray(i.events) ? i.events.slice() : Object.keys(i.events), g = {}, h = {}, y = {}, b = {};
  for (const S of d) {
    g[S] = Array.isArray(i.props) ? "string" : i.props[S];
    const C = eS(S);
    y[S] = C, b[C] = S;
  }
  for (const S of p)
    h[S] = Array.isArray(i.events) ? {} : i.events[S];
  class T extends HTMLElement {
    constructor() {
      super(), Cu(this, f, !0), Cu(this, c), Cu(this, r, {}), Cu(this, "container"), i.shadow ? this.container = this.attachShadow({
        mode: i.shadow
      }) : this.container = this, this[Yl].container = this.container;
      for (const C of d) {
        const M = y[C], R = this.getAttribute(M), w = g[C], O = w ? Af[w] : null;
        O != null && O.parse && R && (this[Yl][C] = O.parse(R, M, this));
      }
      for (const C of p)
        this[Yl][C] = (M) => {
          const R = C.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(R, { detail: M, ...h[C] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(b);
    }
    connectedCallback() {
      this[Mu] = !0, this[zu]();
    }
    disconnectedCallback() {
      this[Mu] = !1, this[Ia] && u.unmount(this[Ia]), delete this[Ia];
    }
    attributeChangedCallback(C, M, R) {
      const w = b[C], O = g[w], U = O ? Af[O] : null;
      w in g && U != null && U.parse && R && (this[Yl][w] = U.parse(R, C, this), this[zu]());
    }
    [(f = Mu, c = Ia, r = Yl, zu)]() {
      this[Mu] && (this[Ia] ? u.update(this[Ia], this[Yl]) : this[Ia] = u.mount(
        this.container,
        l,
        this[Yl]
      ));
    }
  }
  for (const S of d) {
    const C = y[S], M = g[S];
    Object.defineProperty(T.prototype, S, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Yl][S];
      },
      set(R) {
        this[Yl][S] = R;
        const w = M ? Af[M] : null;
        if (w != null && w.stringify) {
          const O = w.stringify(R, C, this);
          this.getAttribute(C) !== O && this.setAttribute(C, O);
        } else
          this[zu]();
      }
    });
  }
  return T;
}
function lS(l, i, u) {
  const r = Zb.createRoot(l), c = ft.createElement(i, u);
  return r.render(c), {
    root: r,
    ReactComponent: i
  };
}
function aS({ root: l, ReactComponent: i }, u) {
  const r = ft.createElement(i, u);
  l.render(r);
}
function iS({ root: l }) {
  l.unmount();
}
function oS(l, i = {}) {
  return nS(l, i, { mount: lS, update: aS, unmount: iS });
}
var wf = { exports: {} }, Ko = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vg;
function rS() {
  if (Vg) return Ko;
  Vg = 1;
  var l = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function u(r, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var p in c)
        p !== "key" && (f[p] = c[p]);
    } else f = c;
    return c = f.ref, {
      $$typeof: l,
      type: r,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return Ko.Fragment = i, Ko.jsx = u, Ko.jsxs = u, Ko;
}
var Xg;
function uS() {
  return Xg || (Xg = 1, wf.exports = rS()), wf.exports;
}
var G = uS();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function sS(l, i, u) {
  return (i = fS(i)) in l ? Object.defineProperty(l, i, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : l[i] = u, l;
}
function Qg(l, i) {
  var u = Object.keys(l);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(l);
    i && (r = r.filter(function(c) {
      return Object.getOwnPropertyDescriptor(l, c).enumerable;
    })), u.push.apply(u, r);
  }
  return u;
}
function it(l) {
  for (var i = 1; i < arguments.length; i++) {
    var u = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Qg(Object(u), !0).forEach(function(r) {
      sS(l, r, u[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(u)) : Qg(Object(u)).forEach(function(r) {
      Object.defineProperty(l, r, Object.getOwnPropertyDescriptor(u, r));
    });
  }
  return l;
}
function cS(l, i) {
  if (typeof l != "object" || !l) return l;
  var u = l[Symbol.toPrimitive];
  if (u !== void 0) {
    var r = u.call(l, i);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(l);
}
function fS(l) {
  var i = cS(l, "string");
  return typeof i == "symbol" ? i : i + "";
}
const Ig = () => {
};
let Td = {}, cv = {}, fv = null, dv = {
  mark: Ig,
  measure: Ig
};
try {
  typeof window < "u" && (Td = window), typeof document < "u" && (cv = document), typeof MutationObserver < "u" && (fv = MutationObserver), typeof performance < "u" && (dv = performance);
} catch {
}
const {
  userAgent: Zg = ""
} = Td.navigator || {}, xa = Td, _e = cv, Kg = fv, Du = dv;
xa.document;
const Ql = !!_e.documentElement && !!_e.head && typeof _e.addEventListener == "function" && typeof _e.createElement == "function", hv = ~Zg.indexOf("MSIE") || ~Zg.indexOf("Trident/");
var dS = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, hS = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, mv = {
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
}, mS = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, pv = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], un = "classic", Pu = "duotone", pS = "sharp", gS = "sharp-duotone", gv = [un, Pu, pS, gS], vS = {
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
}, yS = {
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
}, bS = /* @__PURE__ */ new Map([["classic", {
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
}]]), SS = {
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
}, xS = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Fg = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, TS = ["kit"], ES = {
  kit: {
    "fa-kit": "fak"
  }
}, _S = ["fak", "fakd"], AS = {
  kit: {
    fak: "fa-kit"
  }
}, Jg = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Nu = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, wS = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], OS = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], RS = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, CS = {
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
}, zS = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, If = {
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
}, MS = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Zf = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...wS, ...MS], DS = ["solid", "regular", "light", "thin", "duotone", "brands"], vv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], NS = vv.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), HS = [...Object.keys(zS), ...DS, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Nu.GROUP, Nu.SWAP_OPACITY, Nu.PRIMARY, Nu.SECONDARY].concat(vv.map((l) => "".concat(l, "x"))).concat(NS.map((l) => "w-".concat(l))), jS = {
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
const Vl = "___FONT_AWESOME___", Kf = 16, yv = "fa", bv = "svg-inline--fa", Ja = "data-fa-i2svg", Ff = "data-fa-pseudo-element", LS = "data-fa-pseudo-element-pending", Ed = "data-prefix", _d = "data-icon", Wg = "fontawesome-i2svg", US = "async", kS = ["HTML", "HEAD", "STYLE", "SCRIPT"], Sv = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function dr(l) {
  return new Proxy(l, {
    get(i, u) {
      return u in i ? i[u] : i[un];
    }
  });
}
const xv = it({}, mv);
xv[un] = it(it(it(it({}, {
  "fa-duotone": "duotone"
}), mv[un]), Fg.kit), Fg["kit-duotone"]);
const BS = dr(xv), Jf = it({}, SS);
Jf[un] = it(it(it(it({}, {
  duotone: "fad"
}), Jf[un]), Jg.kit), Jg["kit-duotone"]);
const $g = dr(Jf), Wf = it({}, If);
Wf[un] = it(it({}, Wf[un]), AS.kit);
const Ad = dr(Wf), $f = it({}, CS);
$f[un] = it(it({}, $f[un]), ES.kit);
dr($f);
const qS = dS, Tv = "fa-layers-text", YS = hS, GS = it({}, vS);
dr(GS);
const VS = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Of = mS, XS = [...TS, ...HS], $o = xa.FontAwesomeConfig || {};
function QS(l) {
  var i = _e.querySelector("script[" + l + "]");
  if (i)
    return i.getAttribute(l);
}
function IS(l) {
  return l === "" ? !0 : l === "false" ? !1 : l === "true" ? !0 : l;
}
_e && typeof _e.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((i) => {
  let [u, r] = i;
  const c = IS(QS(u));
  c != null && ($o[r] = c);
});
const Ev = {
  styleDefault: "solid",
  familyDefault: un,
  cssPrefix: yv,
  replacementClass: bv,
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
$o.familyPrefix && ($o.cssPrefix = $o.familyPrefix);
const Vi = it(it({}, Ev), $o);
Vi.autoReplaceSvg || (Vi.observeMutations = !1);
const Tt = {};
Object.keys(Ev).forEach((l) => {
  Object.defineProperty(Tt, l, {
    enumerable: !0,
    set: function(i) {
      Vi[l] = i, Po.forEach((u) => u(Tt));
    },
    get: function() {
      return Vi[l];
    }
  });
});
Object.defineProperty(Tt, "familyPrefix", {
  enumerable: !0,
  set: function(l) {
    Vi.cssPrefix = l, Po.forEach((i) => i(Tt));
  },
  get: function() {
    return Vi.cssPrefix;
  }
});
xa.FontAwesomeConfig = Tt;
const Po = [];
function ZS(l) {
  return Po.push(l), () => {
    Po.splice(Po.indexOf(l), 1);
  };
}
const va = Kf, hl = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function KS(l) {
  if (!l || !Ql)
    return;
  const i = _e.createElement("style");
  i.setAttribute("type", "text/css"), i.innerHTML = l;
  const u = _e.head.childNodes;
  let r = null;
  for (let c = u.length - 1; c > -1; c--) {
    const f = u[c], d = (f.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(d) > -1 && (r = f);
  }
  return _e.head.insertBefore(i, r), l;
}
const FS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nr() {
  let l = 12, i = "";
  for (; l-- > 0; )
    i += FS[Math.random() * 62 | 0];
  return i;
}
function Zi(l) {
  const i = [];
  for (let u = (l || []).length >>> 0; u--; )
    i[u] = l[u];
  return i;
}
function wd(l) {
  return l.classList ? Zi(l.classList) : (l.getAttribute("class") || "").split(" ").filter((i) => i);
}
function _v(l) {
  return "".concat(l).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function JS(l) {
  return Object.keys(l || {}).reduce((i, u) => i + "".concat(u, '="').concat(_v(l[u]), '" '), "").trim();
}
function ts(l) {
  return Object.keys(l || {}).reduce((i, u) => i + "".concat(u, ": ").concat(l[u].trim(), ";"), "");
}
function Od(l) {
  return l.size !== hl.size || l.x !== hl.x || l.y !== hl.y || l.rotate !== hl.rotate || l.flipX || l.flipY;
}
function WS(l) {
  let {
    transform: i,
    containerWidth: u,
    iconWidth: r
  } = l;
  const c = {
    transform: "translate(".concat(u / 2, " 256)")
  }, f = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), d = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), p = "rotate(".concat(i.rotate, " 0 0)"), g = {
    transform: "".concat(f, " ").concat(d, " ").concat(p)
  }, h = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: c,
    inner: g,
    path: h
  };
}
function $S(l) {
  let {
    transform: i,
    width: u = Kf,
    height: r = Kf,
    startCentered: c = !1
  } = l, f = "";
  return c && hv ? f += "translate(".concat(i.x / va - u / 2, "em, ").concat(i.y / va - r / 2, "em) ") : c ? f += "translate(calc(-50% + ".concat(i.x / va, "em), calc(-50% + ").concat(i.y / va, "em)) ") : f += "translate(".concat(i.x / va, "em, ").concat(i.y / va, "em) "), f += "scale(".concat(i.size / va * (i.flipX ? -1 : 1), ", ").concat(i.size / va * (i.flipY ? -1 : 1), ") "), f += "rotate(".concat(i.rotate, "deg) "), f;
}
var PS = `:root, :host {
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
function Av() {
  const l = yv, i = bv, u = Tt.cssPrefix, r = Tt.replacementClass;
  let c = PS;
  if (u !== l || r !== i) {
    const f = new RegExp("\\.".concat(l, "\\-"), "g"), d = new RegExp("\\--".concat(l, "\\-"), "g"), p = new RegExp("\\.".concat(i), "g");
    c = c.replace(f, ".".concat(u, "-")).replace(d, "--".concat(u, "-")).replace(p, ".".concat(r));
  }
  return c;
}
let Pg = !1;
function Rf() {
  Tt.autoAddCss && !Pg && (KS(Av()), Pg = !0);
}
var t2 = {
  mixout() {
    return {
      dom: {
        css: Av,
        insertCss: Rf
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Rf();
      },
      beforeI2svg() {
        Rf();
      }
    };
  }
};
const Xl = xa || {};
Xl[Vl] || (Xl[Vl] = {});
Xl[Vl].styles || (Xl[Vl].styles = {});
Xl[Vl].hooks || (Xl[Vl].hooks = {});
Xl[Vl].shims || (Xl[Vl].shims = []);
var ml = Xl[Vl];
const wv = [], Ov = function() {
  _e.removeEventListener("DOMContentLoaded", Ov), Vu = 1, wv.map((l) => l());
};
let Vu = !1;
Ql && (Vu = (_e.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(_e.readyState), Vu || _e.addEventListener("DOMContentLoaded", Ov));
function e2(l) {
  Ql && (Vu ? setTimeout(l, 0) : wv.push(l));
}
function hr(l) {
  const {
    tag: i,
    attributes: u = {},
    children: r = []
  } = l;
  return typeof l == "string" ? _v(l) : "<".concat(i, " ").concat(JS(u), ">").concat(r.map(hr).join(""), "</").concat(i, ">");
}
function t0(l, i, u) {
  if (l && l[i] && l[i][u])
    return {
      prefix: i,
      iconName: u,
      icon: l[i][u]
    };
}
var Cf = function(i, u, r, c) {
  var f = Object.keys(i), d = f.length, p = u, g, h, y;
  for (r === void 0 ? (g = 1, y = i[f[0]]) : (g = 0, y = r); g < d; g++)
    h = f[g], y = p(y, i[h], h, i);
  return y;
};
function n2(l) {
  const i = [];
  let u = 0;
  const r = l.length;
  for (; u < r; ) {
    const c = l.charCodeAt(u++);
    if (c >= 55296 && c <= 56319 && u < r) {
      const f = l.charCodeAt(u++);
      (f & 64512) == 56320 ? i.push(((c & 1023) << 10) + (f & 1023) + 65536) : (i.push(c), u--);
    } else
      i.push(c);
  }
  return i;
}
function Pf(l) {
  const i = n2(l);
  return i.length === 1 ? i[0].toString(16) : null;
}
function l2(l, i) {
  const u = l.length;
  let r = l.charCodeAt(i), c;
  return r >= 55296 && r <= 56319 && u > i + 1 && (c = l.charCodeAt(i + 1), c >= 56320 && c <= 57343) ? (r - 55296) * 1024 + c - 56320 + 65536 : r;
}
function e0(l) {
  return Object.keys(l).reduce((i, u) => {
    const r = l[u];
    return !!r.icon ? i[r.iconName] = r.icon : i[u] = r, i;
  }, {});
}
function td(l, i) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = u, c = e0(i);
  typeof ml.hooks.addPack == "function" && !r ? ml.hooks.addPack(l, e0(i)) : ml.styles[l] = it(it({}, ml.styles[l] || {}), c), l === "fas" && td("fa", i);
}
const {
  styles: lr,
  shims: a2
} = ml, Rv = Object.keys(Ad), i2 = Rv.reduce((l, i) => (l[i] = Object.keys(Ad[i]), l), {});
let Rd = null, Cv = {}, zv = {}, Mv = {}, Dv = {}, Nv = {};
function o2(l) {
  return ~XS.indexOf(l);
}
function r2(l, i) {
  const u = i.split("-"), r = u[0], c = u.slice(1).join("-");
  return r === l && c !== "" && !o2(c) ? c : null;
}
const Hv = () => {
  const l = (r) => Cf(lr, (c, f, d) => (c[d] = Cf(f, r, {}), c), {});
  Cv = l((r, c, f) => (c[3] && (r[c[3]] = f), c[2] && c[2].filter((p) => typeof p == "number").forEach((p) => {
    r[p.toString(16)] = f;
  }), r)), zv = l((r, c, f) => (r[f] = f, c[2] && c[2].filter((p) => typeof p == "string").forEach((p) => {
    r[p] = f;
  }), r)), Nv = l((r, c, f) => {
    const d = c[2];
    return r[f] = f, d.forEach((p) => {
      r[p] = f;
    }), r;
  });
  const i = "far" in lr || Tt.autoFetchSvg, u = Cf(a2, (r, c) => {
    const f = c[0];
    let d = c[1];
    const p = c[2];
    return d === "far" && !i && (d = "fas"), typeof f == "string" && (r.names[f] = {
      prefix: d,
      iconName: p
    }), typeof f == "number" && (r.unicodes[f.toString(16)] = {
      prefix: d,
      iconName: p
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Mv = u.names, Dv = u.unicodes, Rd = es(Tt.styleDefault, {
    family: Tt.familyDefault
  });
};
ZS((l) => {
  Rd = es(l.styleDefault, {
    family: Tt.familyDefault
  });
});
Hv();
function Cd(l, i) {
  return (Cv[l] || {})[i];
}
function u2(l, i) {
  return (zv[l] || {})[i];
}
function Za(l, i) {
  return (Nv[l] || {})[i];
}
function jv(l) {
  return Mv[l] || {
    prefix: null,
    iconName: null
  };
}
function s2(l) {
  const i = Dv[l], u = Cd("fas", l);
  return i || (u ? {
    prefix: "fas",
    iconName: u
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ta() {
  return Rd;
}
const Lv = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function c2(l) {
  let i = un;
  const u = Rv.reduce((r, c) => (r[c] = "".concat(Tt.cssPrefix, "-").concat(c), r), {});
  return gv.forEach((r) => {
    (l.includes(u[r]) || l.some((c) => i2[r].includes(c))) && (i = r);
  }), i;
}
function es(l) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: u = un
  } = i, r = BS[u][l];
  if (u === Pu && !l)
    return "fad";
  const c = $g[u][l] || $g[u][r], f = l in ml.styles ? l : null;
  return c || f || null;
}
function f2(l) {
  let i = [], u = null;
  return l.forEach((r) => {
    const c = r2(Tt.cssPrefix, r);
    c ? u = c : r && i.push(r);
  }), {
    iconName: u,
    rest: i
  };
}
function n0(l) {
  return l.sort().filter((i, u, r) => r.indexOf(i) === u);
}
function ns(l) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: u = !1
  } = i;
  let r = null;
  const c = Zf.concat(OS), f = n0(l.filter((b) => c.includes(b))), d = n0(l.filter((b) => !Zf.includes(b))), p = f.filter((b) => (r = b, !pv.includes(b))), [g = null] = p, h = c2(f), y = it(it({}, f2(d)), {}, {
    prefix: es(g, {
      family: h
    })
  });
  return it(it(it({}, y), p2({
    values: l,
    family: h,
    styles: lr,
    config: Tt,
    canonical: y,
    givenPrefix: r
  })), d2(u, r, y));
}
function d2(l, i, u) {
  let {
    prefix: r,
    iconName: c
  } = u;
  if (l || !r || !c)
    return {
      prefix: r,
      iconName: c
    };
  const f = i === "fa" ? jv(c) : {}, d = Za(r, c);
  return c = f.iconName || d || c, r = f.prefix || r, r === "far" && !lr.far && lr.fas && !Tt.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: c
  };
}
const h2 = gv.filter((l) => l !== un || l !== Pu), m2 = Object.keys(If).filter((l) => l !== un).map((l) => Object.keys(If[l])).flat();
function p2(l) {
  const {
    values: i,
    family: u,
    canonical: r,
    givenPrefix: c = "",
    styles: f = {},
    config: d = {}
  } = l, p = u === Pu, g = i.includes("fa-duotone") || i.includes("fad"), h = d.familyDefault === "duotone", y = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!p && (g || h || y) && (r.prefix = "fad"), (i.includes("fa-brands") || i.includes("fab")) && (r.prefix = "fab"), !r.prefix && h2.includes(u) && (Object.keys(f).find((T) => m2.includes(T)) || d.autoFetchSvg)) {
    const T = bS.get(u).defaultShortPrefixId;
    r.prefix = T, r.iconName = Za(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || c === "fa") && (r.prefix = Ta() || "fas"), r;
}
class g2 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var i = arguments.length, u = new Array(i), r = 0; r < i; r++)
      u[r] = arguments[r];
    const c = u.reduce(this._pullDefinitions, {});
    Object.keys(c).forEach((f) => {
      this.definitions[f] = it(it({}, this.definitions[f] || {}), c[f]), td(f, c[f]);
      const d = Ad[un][f];
      d && td(d, c[f]), Hv();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(i, u) {
    const r = u.prefix && u.iconName && u.icon ? {
      0: u
    } : u;
    return Object.keys(r).map((c) => {
      const {
        prefix: f,
        iconName: d,
        icon: p
      } = r[c], g = p[2];
      i[f] || (i[f] = {}), g.length > 0 && g.forEach((h) => {
        typeof h == "string" && (i[f][h] = p);
      }), i[f][d] = p;
    }), i;
  }
}
let l0 = [], ki = {};
const qi = {}, v2 = Object.keys(qi);
function y2(l, i) {
  let {
    mixoutsTo: u
  } = i;
  return l0 = l, ki = {}, Object.keys(qi).forEach((r) => {
    v2.indexOf(r) === -1 && delete qi[r];
  }), l0.forEach((r) => {
    const c = r.mixout ? r.mixout() : {};
    if (Object.keys(c).forEach((f) => {
      typeof c[f] == "function" && (u[f] = c[f]), typeof c[f] == "object" && Object.keys(c[f]).forEach((d) => {
        u[f] || (u[f] = {}), u[f][d] = c[f][d];
      });
    }), r.hooks) {
      const f = r.hooks();
      Object.keys(f).forEach((d) => {
        ki[d] || (ki[d] = []), ki[d].push(f[d]);
      });
    }
    r.provides && r.provides(qi);
  }), u;
}
function ed(l, i) {
  for (var u = arguments.length, r = new Array(u > 2 ? u - 2 : 0), c = 2; c < u; c++)
    r[c - 2] = arguments[c];
  return (ki[l] || []).forEach((d) => {
    i = d.apply(null, [i, ...r]);
  }), i;
}
function Wa(l) {
  for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
    u[r - 1] = arguments[r];
  (ki[l] || []).forEach((f) => {
    f.apply(null, u);
  });
}
function Ea() {
  const l = arguments[0], i = Array.prototype.slice.call(arguments, 1);
  return qi[l] ? qi[l].apply(null, i) : void 0;
}
function nd(l) {
  l.prefix === "fa" && (l.prefix = "fas");
  let {
    iconName: i
  } = l;
  const u = l.prefix || Ta();
  if (i)
    return i = Za(u, i) || i, t0(Uv.definitions, u, i) || t0(ml.styles, u, i);
}
const Uv = new g2(), b2 = () => {
  Tt.autoReplaceSvg = !1, Tt.observeMutations = !1, Wa("noAuto");
}, S2 = {
  i2svg: function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ql ? (Wa("beforeI2svg", l), Ea("pseudoElements2svg", l), Ea("i2svg", l)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: i
    } = l;
    Tt.autoReplaceSvg === !1 && (Tt.autoReplaceSvg = !0), Tt.observeMutations = !0, e2(() => {
      T2({
        autoReplaceSvgRoot: i
      }), Wa("watch", l);
    });
  }
}, x2 = {
  icon: (l) => {
    if (l === null)
      return null;
    if (typeof l == "object" && l.prefix && l.iconName)
      return {
        prefix: l.prefix,
        iconName: Za(l.prefix, l.iconName) || l.iconName
      };
    if (Array.isArray(l) && l.length === 2) {
      const i = l[1].indexOf("fa-") === 0 ? l[1].slice(3) : l[1], u = es(l[0]);
      return {
        prefix: u,
        iconName: Za(u, i) || i
      };
    }
    if (typeof l == "string" && (l.indexOf("".concat(Tt.cssPrefix, "-")) > -1 || l.match(qS))) {
      const i = ns(l.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || Ta(),
        iconName: Za(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof l == "string") {
      const i = Ta();
      return {
        prefix: i,
        iconName: Za(i, l) || l
      };
    }
  }
}, Rn = {
  noAuto: b2,
  config: Tt,
  dom: S2,
  parse: x2,
  library: Uv,
  findIconDefinition: nd,
  toHtml: hr
}, T2 = function() {
  let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: i = _e
  } = l;
  (Object.keys(ml.styles).length > 0 || Tt.autoFetchSvg) && Ql && Tt.autoReplaceSvg && Rn.dom.i2svg({
    node: i
  });
};
function ls(l, i) {
  return Object.defineProperty(l, "abstract", {
    get: i
  }), Object.defineProperty(l, "html", {
    get: function() {
      return l.abstract.map((u) => hr(u));
    }
  }), Object.defineProperty(l, "node", {
    get: function() {
      if (!Ql) return;
      const u = _e.createElement("div");
      return u.innerHTML = l.html, u.children;
    }
  }), l;
}
function E2(l) {
  let {
    children: i,
    main: u,
    mask: r,
    attributes: c,
    styles: f,
    transform: d
  } = l;
  if (Od(d) && u.found && !r.found) {
    const {
      width: p,
      height: g
    } = u, h = {
      x: p / g / 2,
      y: 0.5
    };
    c.style = ts(it(it({}, f), {}, {
      "transform-origin": "".concat(h.x + d.x / 16, "em ").concat(h.y + d.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: c,
    children: i
  }];
}
function _2(l) {
  let {
    prefix: i,
    iconName: u,
    children: r,
    attributes: c,
    symbol: f
  } = l;
  const d = f === !0 ? "".concat(i, "-").concat(Tt.cssPrefix, "-").concat(u) : f;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: it(it({}, c), {}, {
        id: d
      }),
      children: r
    }]
  }];
}
function zd(l) {
  const {
    icons: {
      main: i,
      mask: u
    },
    prefix: r,
    iconName: c,
    transform: f,
    symbol: d,
    title: p,
    maskId: g,
    titleId: h,
    extra: y,
    watchable: b = !1
  } = l, {
    width: T,
    height: S
  } = u.found ? u : i, C = _S.includes(r), M = [Tt.replacementClass, c ? "".concat(Tt.cssPrefix, "-").concat(c) : ""].filter((j) => y.classes.indexOf(j) === -1).filter((j) => j !== "" || !!j).concat(y.classes).join(" ");
  let R = {
    children: [],
    attributes: it(it({}, y.attributes), {}, {
      "data-prefix": r,
      "data-icon": c,
      class: M,
      role: y.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(T, " ").concat(S)
    })
  };
  const w = C && !~y.classes.indexOf("fa-fw") ? {
    width: "".concat(T / S * 16 * 0.0625, "em")
  } : {};
  b && (R.attributes[Ja] = ""), p && (R.children.push({
    tag: "title",
    attributes: {
      id: R.attributes["aria-labelledby"] || "title-".concat(h || nr())
    },
    children: [p]
  }), delete R.attributes.title);
  const O = it(it({}, R), {}, {
    prefix: r,
    iconName: c,
    main: i,
    mask: u,
    maskId: g,
    transform: f,
    symbol: d,
    styles: it(it({}, w), y.styles)
  }), {
    children: U,
    attributes: W
  } = u.found && i.found ? Ea("generateAbstractMask", O) || {
    children: [],
    attributes: {}
  } : Ea("generateAbstractIcon", O) || {
    children: [],
    attributes: {}
  };
  return O.children = U, O.attributes = W, d ? _2(O) : E2(O);
}
function a0(l) {
  const {
    content: i,
    width: u,
    height: r,
    transform: c,
    title: f,
    extra: d,
    watchable: p = !1
  } = l, g = it(it(it({}, d.attributes), f ? {
    title: f
  } : {}), {}, {
    class: d.classes.join(" ")
  });
  p && (g[Ja] = "");
  const h = it({}, d.styles);
  Od(c) && (h.transform = $S({
    transform: c,
    startCentered: !0,
    width: u,
    height: r
  }), h["-webkit-transform"] = h.transform);
  const y = ts(h);
  y.length > 0 && (g.style = y);
  const b = [];
  return b.push({
    tag: "span",
    attributes: g,
    children: [i]
  }), f && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [f]
  }), b;
}
function A2(l) {
  const {
    content: i,
    title: u,
    extra: r
  } = l, c = it(it(it({}, r.attributes), u ? {
    title: u
  } : {}), {}, {
    class: r.classes.join(" ")
  }), f = ts(r.styles);
  f.length > 0 && (c.style = f);
  const d = [];
  return d.push({
    tag: "span",
    attributes: c,
    children: [i]
  }), u && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [u]
  }), d;
}
const {
  styles: zf
} = ml;
function ld(l) {
  const i = l[0], u = l[1], [r] = l.slice(4);
  let c = null;
  return Array.isArray(r) ? c = {
    tag: "g",
    attributes: {
      class: "".concat(Tt.cssPrefix, "-").concat(Of.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Tt.cssPrefix, "-").concat(Of.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Tt.cssPrefix, "-").concat(Of.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : c = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: i,
    height: u,
    icon: c
  };
}
const w2 = {
  found: !1,
  width: 512,
  height: 512
};
function O2(l, i) {
  !Sv && !Tt.showMissingIcons && l && console.error('Icon with name "'.concat(l, '" and prefix "').concat(i, '" is missing.'));
}
function ad(l, i) {
  let u = i;
  return i === "fa" && Tt.styleDefault !== null && (i = Ta()), new Promise((r, c) => {
    if (u === "fa") {
      const f = jv(l) || {};
      l = f.iconName || l, i = f.prefix || i;
    }
    if (l && i && zf[i] && zf[i][l]) {
      const f = zf[i][l];
      return r(ld(f));
    }
    O2(l, i), r(it(it({}, w2), {}, {
      icon: Tt.showMissingIcons && l ? Ea("missingIconAbstract") || {} : {}
    }));
  });
}
const i0 = () => {
}, id = Tt.measurePerformance && Du && Du.mark && Du.measure ? Du : {
  mark: i0,
  measure: i0
}, Wo = 'FA "6.7.2"', R2 = (l) => (id.mark("".concat(Wo, " ").concat(l, " begins")), () => kv(l)), kv = (l) => {
  id.mark("".concat(Wo, " ").concat(l, " ends")), id.measure("".concat(Wo, " ").concat(l), "".concat(Wo, " ").concat(l, " begins"), "".concat(Wo, " ").concat(l, " ends"));
};
var Md = {
  begin: R2,
  end: kv
};
const ku = () => {
};
function o0(l) {
  return typeof (l.getAttribute ? l.getAttribute(Ja) : null) == "string";
}
function C2(l) {
  const i = l.getAttribute ? l.getAttribute(Ed) : null, u = l.getAttribute ? l.getAttribute(_d) : null;
  return i && u;
}
function z2(l) {
  return l && l.classList && l.classList.contains && l.classList.contains(Tt.replacementClass);
}
function M2() {
  return Tt.autoReplaceSvg === !0 ? Bu.replace : Bu[Tt.autoReplaceSvg] || Bu.replace;
}
function D2(l) {
  return _e.createElementNS("http://www.w3.org/2000/svg", l);
}
function N2(l) {
  return _e.createElement(l);
}
function Bv(l) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: u = l.tag === "svg" ? D2 : N2
  } = i;
  if (typeof l == "string")
    return _e.createTextNode(l);
  const r = u(l.tag);
  return Object.keys(l.attributes || []).forEach(function(f) {
    r.setAttribute(f, l.attributes[f]);
  }), (l.children || []).forEach(function(f) {
    r.appendChild(Bv(f, {
      ceFn: u
    }));
  }), r;
}
function H2(l) {
  let i = " ".concat(l.outerHTML, " ");
  return i = "".concat(i, "Font Awesome fontawesome.com "), i;
}
const Bu = {
  replace: function(l) {
    const i = l[0];
    if (i.parentNode)
      if (l[1].forEach((u) => {
        i.parentNode.insertBefore(Bv(u), i);
      }), i.getAttribute(Ja) === null && Tt.keepOriginalSource) {
        let u = _e.createComment(H2(i));
        i.parentNode.replaceChild(u, i);
      } else
        i.remove();
  },
  nest: function(l) {
    const i = l[0], u = l[1];
    if (~wd(i).indexOf(Tt.replacementClass))
      return Bu.replace(l);
    const r = new RegExp("".concat(Tt.cssPrefix, "-.*"));
    if (delete u[0].attributes.id, u[0].attributes.class) {
      const f = u[0].attributes.class.split(" ").reduce((d, p) => (p === Tt.replacementClass || p.match(r) ? d.toSvg.push(p) : d.toNode.push(p), d), {
        toNode: [],
        toSvg: []
      });
      u[0].attributes.class = f.toSvg.join(" "), f.toNode.length === 0 ? i.removeAttribute("class") : i.setAttribute("class", f.toNode.join(" "));
    }
    const c = u.map((f) => hr(f)).join(`
`);
    i.setAttribute(Ja, ""), i.innerHTML = c;
  }
};
function r0(l) {
  l();
}
function qv(l, i) {
  const u = typeof i == "function" ? i : ku;
  if (l.length === 0)
    u();
  else {
    let r = r0;
    Tt.mutateApproach === US && (r = xa.requestAnimationFrame || r0), r(() => {
      const c = M2(), f = Md.begin("mutate");
      l.map(c), f(), u();
    });
  }
}
let Dd = !1;
function Yv() {
  Dd = !0;
}
function od() {
  Dd = !1;
}
let Xu = null;
function u0(l) {
  if (!Kg || !Tt.observeMutations)
    return;
  const {
    treeCallback: i = ku,
    nodeCallback: u = ku,
    pseudoElementsCallback: r = ku,
    observeMutationsRoot: c = _e
  } = l;
  Xu = new Kg((f) => {
    if (Dd) return;
    const d = Ta();
    Zi(f).forEach((p) => {
      if (p.type === "childList" && p.addedNodes.length > 0 && !o0(p.addedNodes[0]) && (Tt.searchPseudoElements && r(p.target), i(p.target)), p.type === "attributes" && p.target.parentNode && Tt.searchPseudoElements && r(p.target.parentNode), p.type === "attributes" && o0(p.target) && ~VS.indexOf(p.attributeName))
        if (p.attributeName === "class" && C2(p.target)) {
          const {
            prefix: g,
            iconName: h
          } = ns(wd(p.target));
          p.target.setAttribute(Ed, g || d), h && p.target.setAttribute(_d, h);
        } else z2(p.target) && u(p.target);
    });
  }), Ql && Xu.observe(c, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function j2() {
  Xu && Xu.disconnect();
}
function L2(l) {
  const i = l.getAttribute("style");
  let u = [];
  return i && (u = i.split(";").reduce((r, c) => {
    const f = c.split(":"), d = f[0], p = f.slice(1);
    return d && p.length > 0 && (r[d] = p.join(":").trim()), r;
  }, {})), u;
}
function U2(l) {
  const i = l.getAttribute("data-prefix"), u = l.getAttribute("data-icon"), r = l.innerText !== void 0 ? l.innerText.trim() : "";
  let c = ns(wd(l));
  return c.prefix || (c.prefix = Ta()), i && u && (c.prefix = i, c.iconName = u), c.iconName && c.prefix || (c.prefix && r.length > 0 && (c.iconName = u2(c.prefix, l.innerText) || Cd(c.prefix, Pf(l.innerText))), !c.iconName && Tt.autoFetchSvg && l.firstChild && l.firstChild.nodeType === Node.TEXT_NODE && (c.iconName = l.firstChild.data)), c;
}
function k2(l) {
  const i = Zi(l.attributes).reduce((c, f) => (c.name !== "class" && c.name !== "style" && (c[f.name] = f.value), c), {}), u = l.getAttribute("title"), r = l.getAttribute("data-fa-title-id");
  return Tt.autoA11y && (u ? i["aria-labelledby"] = "".concat(Tt.replacementClass, "-title-").concat(r || nr()) : (i["aria-hidden"] = "true", i.focusable = "false")), i;
}
function B2() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: hl,
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
function s0(l) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: u,
    prefix: r,
    rest: c
  } = U2(l), f = k2(l), d = ed("parseNodeAttributes", {}, l);
  let p = i.styleParser ? L2(l) : [];
  return it({
    iconName: u,
    title: l.getAttribute("title"),
    titleId: l.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: hl,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: c,
      styles: p,
      attributes: f
    }
  }, d);
}
const {
  styles: q2
} = ml;
function Gv(l) {
  const i = Tt.autoReplaceSvg === "nest" ? s0(l, {
    styleParser: !1
  }) : s0(l);
  return ~i.extra.classes.indexOf(Tv) ? Ea("generateLayersText", l, i) : Ea("generateSvgReplacementMutation", l, i);
}
function Y2() {
  return [...xS, ...Zf];
}
function c0(l) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ql) return Promise.resolve();
  const u = _e.documentElement.classList, r = (y) => u.add("".concat(Wg, "-").concat(y)), c = (y) => u.remove("".concat(Wg, "-").concat(y)), f = Tt.autoFetchSvg ? Y2() : pv.concat(Object.keys(q2));
  f.includes("fa") || f.push("fa");
  const d = [".".concat(Tv, ":not([").concat(Ja, "])")].concat(f.map((y) => ".".concat(y, ":not([").concat(Ja, "])"))).join(", ");
  if (d.length === 0)
    return Promise.resolve();
  let p = [];
  try {
    p = Zi(l.querySelectorAll(d));
  } catch {
  }
  if (p.length > 0)
    r("pending"), c("complete");
  else
    return Promise.resolve();
  const g = Md.begin("onTree"), h = p.reduce((y, b) => {
    try {
      const T = Gv(b);
      T && y.push(T);
    } catch (T) {
      Sv || T.name === "MissingIcon" && console.error(T);
    }
    return y;
  }, []);
  return new Promise((y, b) => {
    Promise.all(h).then((T) => {
      qv(T, () => {
        r("active"), r("complete"), c("pending"), typeof i == "function" && i(), g(), y();
      });
    }).catch((T) => {
      g(), b(T);
    });
  });
}
function G2(l) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Gv(l).then((u) => {
    u && qv([u], i);
  });
}
function V2(l) {
  return function(i) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (i || {}).icon ? i : nd(i || {});
    let {
      mask: c
    } = u;
    return c && (c = (c || {}).icon ? c : nd(c || {})), l(r, it(it({}, u), {}, {
      mask: c
    }));
  };
}
const X2 = function(l) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: u = hl,
    symbol: r = !1,
    mask: c = null,
    maskId: f = null,
    title: d = null,
    titleId: p = null,
    classes: g = [],
    attributes: h = {},
    styles: y = {}
  } = i;
  if (!l) return;
  const {
    prefix: b,
    iconName: T,
    icon: S
  } = l;
  return ls(it({
    type: "icon"
  }, l), () => (Wa("beforeDOMElementCreation", {
    iconDefinition: l,
    params: i
  }), Tt.autoA11y && (d ? h["aria-labelledby"] = "".concat(Tt.replacementClass, "-title-").concat(p || nr()) : (h["aria-hidden"] = "true", h.focusable = "false")), zd({
    icons: {
      main: ld(S),
      mask: c ? ld(c.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: b,
    iconName: T,
    transform: it(it({}, hl), u),
    symbol: r,
    title: d,
    maskId: f,
    titleId: p,
    extra: {
      attributes: h,
      styles: y,
      classes: g
    }
  })));
};
var Q2 = {
  mixout() {
    return {
      icon: V2(X2)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(l) {
        return l.treeCallback = c0, l.nodeCallback = G2, l;
      }
    };
  },
  provides(l) {
    l.i2svg = function(i) {
      const {
        node: u = _e,
        callback: r = () => {
        }
      } = i;
      return c0(u, r);
    }, l.generateSvgReplacementMutation = function(i, u) {
      const {
        iconName: r,
        title: c,
        titleId: f,
        prefix: d,
        transform: p,
        symbol: g,
        mask: h,
        maskId: y,
        extra: b
      } = u;
      return new Promise((T, S) => {
        Promise.all([ad(r, d), h.iconName ? ad(h.iconName, h.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((C) => {
          let [M, R] = C;
          T([i, zd({
            icons: {
              main: M,
              mask: R
            },
            prefix: d,
            iconName: r,
            transform: p,
            symbol: g,
            maskId: y,
            title: c,
            titleId: f,
            extra: b,
            watchable: !0
          })]);
        }).catch(S);
      });
    }, l.generateAbstractIcon = function(i) {
      let {
        children: u,
        attributes: r,
        main: c,
        transform: f,
        styles: d
      } = i;
      const p = ts(d);
      p.length > 0 && (r.style = p);
      let g;
      return Od(f) && (g = Ea("generateAbstractTransformGrouping", {
        main: c,
        transform: f,
        containerWidth: c.width,
        iconWidth: c.width
      })), u.push(g || c.icon), {
        children: u,
        attributes: r
      };
    };
  }
}, I2 = {
  mixout() {
    return {
      layer(l) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: u = []
        } = i;
        return ls({
          type: "layer"
        }, () => {
          Wa("beforeDOMElementCreation", {
            assembler: l,
            params: i
          });
          let r = [];
          return l((c) => {
            Array.isArray(c) ? c.map((f) => {
              r = r.concat(f.abstract);
            }) : r = r.concat(c.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Tt.cssPrefix, "-layers"), ...u].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Z2 = {
  mixout() {
    return {
      counter(l) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: u = null,
          classes: r = [],
          attributes: c = {},
          styles: f = {}
        } = i;
        return ls({
          type: "counter",
          content: l
        }, () => (Wa("beforeDOMElementCreation", {
          content: l,
          params: i
        }), A2({
          content: l.toString(),
          title: u,
          extra: {
            attributes: c,
            styles: f,
            classes: ["".concat(Tt.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, K2 = {
  mixout() {
    return {
      text(l) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: u = hl,
          title: r = null,
          classes: c = [],
          attributes: f = {},
          styles: d = {}
        } = i;
        return ls({
          type: "text",
          content: l
        }, () => (Wa("beforeDOMElementCreation", {
          content: l,
          params: i
        }), a0({
          content: l,
          transform: it(it({}, hl), u),
          title: r,
          extra: {
            attributes: f,
            styles: d,
            classes: ["".concat(Tt.cssPrefix, "-layers-text"), ...c]
          }
        })));
      }
    };
  },
  provides(l) {
    l.generateLayersText = function(i, u) {
      const {
        title: r,
        transform: c,
        extra: f
      } = u;
      let d = null, p = null;
      if (hv) {
        const g = parseInt(getComputedStyle(i).fontSize, 10), h = i.getBoundingClientRect();
        d = h.width / g, p = h.height / g;
      }
      return Tt.autoA11y && !r && (f.attributes["aria-hidden"] = "true"), Promise.resolve([i, a0({
        content: i.innerHTML,
        width: d,
        height: p,
        transform: c,
        title: r,
        extra: f,
        watchable: !0
      })]);
    };
  }
};
const F2 = new RegExp('"', "ug"), f0 = [1105920, 1112319], d0 = it(it(it(it({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), yS), jS), RS), rd = Object.keys(d0).reduce((l, i) => (l[i.toLowerCase()] = d0[i], l), {}), J2 = Object.keys(rd).reduce((l, i) => {
  const u = rd[i];
  return l[i] = u[900] || [...Object.entries(u)][0][1], l;
}, {});
function W2(l) {
  const i = l.replace(F2, ""), u = l2(i, 0), r = u >= f0[0] && u <= f0[1], c = i.length === 2 ? i[0] === i[1] : !1;
  return {
    value: Pf(c ? i[0] : i),
    isSecondary: r || c
  };
}
function $2(l, i) {
  const u = l.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(i), c = isNaN(r) ? "normal" : r;
  return (rd[u] || {})[c] || J2[u];
}
function h0(l, i) {
  const u = "".concat(LS).concat(i.replace(":", "-"));
  return new Promise((r, c) => {
    if (l.getAttribute(u) !== null)
      return r();
    const d = Zi(l.children).filter((T) => T.getAttribute(Ff) === i)[0], p = xa.getComputedStyle(l, i), g = p.getPropertyValue("font-family"), h = g.match(YS), y = p.getPropertyValue("font-weight"), b = p.getPropertyValue("content");
    if (d && !h)
      return l.removeChild(d), r();
    if (h && b !== "none" && b !== "") {
      const T = p.getPropertyValue("content");
      let S = $2(g, y);
      const {
        value: C,
        isSecondary: M
      } = W2(T), R = h[0].startsWith("FontAwesome");
      let w = Cd(S, C), O = w;
      if (R) {
        const U = s2(C);
        U.iconName && U.prefix && (w = U.iconName, S = U.prefix);
      }
      if (w && !M && (!d || d.getAttribute(Ed) !== S || d.getAttribute(_d) !== O)) {
        l.setAttribute(u, O), d && l.removeChild(d);
        const U = B2(), {
          extra: W
        } = U;
        W.attributes[Ff] = i, ad(w, S).then((j) => {
          const q = zd(it(it({}, U), {}, {
            icons: {
              main: j,
              mask: Lv()
            },
            prefix: S,
            iconName: O,
            extra: W,
            watchable: !0
          })), X = _e.createElementNS("http://www.w3.org/2000/svg", "svg");
          i === "::before" ? l.insertBefore(X, l.firstChild) : l.appendChild(X), X.outerHTML = q.map((x) => hr(x)).join(`
`), l.removeAttribute(u), r();
        }).catch(c);
      } else
        r();
    } else
      r();
  });
}
function P2(l) {
  return Promise.all([h0(l, "::before"), h0(l, "::after")]);
}
function tx(l) {
  return l.parentNode !== document.head && !~kS.indexOf(l.tagName.toUpperCase()) && !l.getAttribute(Ff) && (!l.parentNode || l.parentNode.tagName !== "svg");
}
function m0(l) {
  if (Ql)
    return new Promise((i, u) => {
      const r = Zi(l.querySelectorAll("*")).filter(tx).map(P2), c = Md.begin("searchPseudoElements");
      Yv(), Promise.all(r).then(() => {
        c(), od(), i();
      }).catch(() => {
        c(), od(), u();
      });
    });
}
var ex = {
  hooks() {
    return {
      mutationObserverCallbacks(l) {
        return l.pseudoElementsCallback = m0, l;
      }
    };
  },
  provides(l) {
    l.pseudoElements2svg = function(i) {
      const {
        node: u = _e
      } = i;
      Tt.searchPseudoElements && m0(u);
    };
  }
};
let p0 = !1;
var nx = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Yv(), p0 = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        u0(ed("mutationObserverCallbacks", {}));
      },
      noAuto() {
        j2();
      },
      watch(l) {
        const {
          observeMutationsRoot: i
        } = l;
        p0 ? od() : u0(ed("mutationObserverCallbacks", {
          observeMutationsRoot: i
        }));
      }
    };
  }
};
const g0 = (l) => {
  let i = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return l.toLowerCase().split(" ").reduce((u, r) => {
    const c = r.toLowerCase().split("-"), f = c[0];
    let d = c.slice(1).join("-");
    if (f && d === "h")
      return u.flipX = !0, u;
    if (f && d === "v")
      return u.flipY = !0, u;
    if (d = parseFloat(d), isNaN(d))
      return u;
    switch (f) {
      case "grow":
        u.size = u.size + d;
        break;
      case "shrink":
        u.size = u.size - d;
        break;
      case "left":
        u.x = u.x - d;
        break;
      case "right":
        u.x = u.x + d;
        break;
      case "up":
        u.y = u.y - d;
        break;
      case "down":
        u.y = u.y + d;
        break;
      case "rotate":
        u.rotate = u.rotate + d;
        break;
    }
    return u;
  }, i);
};
var lx = {
  mixout() {
    return {
      parse: {
        transform: (l) => g0(l)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(l, i) {
        const u = i.getAttribute("data-fa-transform");
        return u && (l.transform = g0(u)), l;
      }
    };
  },
  provides(l) {
    l.generateAbstractTransformGrouping = function(i) {
      let {
        main: u,
        transform: r,
        containerWidth: c,
        iconWidth: f
      } = i;
      const d = {
        transform: "translate(".concat(c / 2, " 256)")
      }, p = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), g = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), h = "rotate(".concat(r.rotate, " 0 0)"), y = {
        transform: "".concat(p, " ").concat(g, " ").concat(h)
      }, b = {
        transform: "translate(".concat(f / 2 * -1, " -256)")
      }, T = {
        outer: d,
        inner: y,
        path: b
      };
      return {
        tag: "g",
        attributes: it({}, T.outer),
        children: [{
          tag: "g",
          attributes: it({}, T.inner),
          children: [{
            tag: u.icon.tag,
            children: u.icon.children,
            attributes: it(it({}, u.icon.attributes), T.path)
          }]
        }]
      };
    };
  }
};
const Mf = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function v0(l) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return l.attributes && (l.attributes.fill || i) && (l.attributes.fill = "black"), l;
}
function ax(l) {
  return l.tag === "g" ? l.children : [l];
}
var ix = {
  hooks() {
    return {
      parseNodeAttributes(l, i) {
        const u = i.getAttribute("data-fa-mask"), r = u ? ns(u.split(" ").map((c) => c.trim())) : Lv();
        return r.prefix || (r.prefix = Ta()), l.mask = r, l.maskId = i.getAttribute("data-fa-mask-id"), l;
      }
    };
  },
  provides(l) {
    l.generateAbstractMask = function(i) {
      let {
        children: u,
        attributes: r,
        main: c,
        mask: f,
        maskId: d,
        transform: p
      } = i;
      const {
        width: g,
        icon: h
      } = c, {
        width: y,
        icon: b
      } = f, T = WS({
        transform: p,
        containerWidth: y,
        iconWidth: g
      }), S = {
        tag: "rect",
        attributes: it(it({}, Mf), {}, {
          fill: "white"
        })
      }, C = h.children ? {
        children: h.children.map(v0)
      } : {}, M = {
        tag: "g",
        attributes: it({}, T.inner),
        children: [v0(it({
          tag: h.tag,
          attributes: it(it({}, h.attributes), T.path)
        }, C))]
      }, R = {
        tag: "g",
        attributes: it({}, T.outer),
        children: [M]
      }, w = "mask-".concat(d || nr()), O = "clip-".concat(d || nr()), U = {
        tag: "mask",
        attributes: it(it({}, Mf), {}, {
          id: w,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [S, R]
      }, W = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: O
          },
          children: ax(b)
        }, U]
      };
      return u.push(W, {
        tag: "rect",
        attributes: it({
          fill: "currentColor",
          "clip-path": "url(#".concat(O, ")"),
          mask: "url(#".concat(w, ")")
        }, Mf)
      }), {
        children: u,
        attributes: r
      };
    };
  }
}, ox = {
  provides(l) {
    let i = !1;
    xa.matchMedia && (i = xa.matchMedia("(prefers-reduced-motion: reduce)").matches), l.missingIconAbstract = function() {
      const u = [], r = {
        fill: "currentColor"
      }, c = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      u.push({
        tag: "path",
        attributes: it(it({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const f = it(it({}, c), {}, {
        attributeName: "opacity"
      }), d = {
        tag: "circle",
        attributes: it(it({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return i || d.children.push({
        tag: "animate",
        attributes: it(it({}, c), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: it(it({}, f), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), u.push(d), u.push({
        tag: "path",
        attributes: it(it({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: i ? [] : [{
          tag: "animate",
          attributes: it(it({}, f), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), i || u.push({
        tag: "path",
        attributes: it(it({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: it(it({}, f), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: u
      };
    };
  }
}, rx = {
  hooks() {
    return {
      parseNodeAttributes(l, i) {
        const u = i.getAttribute("data-fa-symbol"), r = u === null ? !1 : u === "" ? !0 : u;
        return l.symbol = r, l;
      }
    };
  }
}, ux = [t2, Q2, I2, Z2, K2, ex, nx, lx, ix, ox, rx];
y2(ux, {
  mixoutsTo: Rn
});
Rn.noAuto;
Rn.config;
Rn.library;
Rn.dom;
const ud = Rn.parse;
Rn.findIconDefinition;
Rn.toHtml;
const sx = Rn.icon;
Rn.layer;
Rn.text;
Rn.counter;
var Df = { exports: {} }, Nf, y0;
function cx() {
  if (y0) return Nf;
  y0 = 1;
  var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Nf = l, Nf;
}
var Hf, b0;
function fx() {
  if (b0) return Hf;
  b0 = 1;
  var l = /* @__PURE__ */ cx();
  function i() {
  }
  function u() {
  }
  return u.resetWarningCache = i, Hf = function() {
    function r(d, p, g, h, y, b) {
      if (b !== l) {
        var T = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw T.name = "Invariant Violation", T;
      }
    }
    r.isRequired = r;
    function c() {
      return r;
    }
    var f = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: c,
      element: r,
      elementType: r,
      instanceOf: c,
      node: r,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: u,
      resetWarningCache: i
    };
    return f.PropTypes = f, f;
  }, Hf;
}
var S0;
function dx() {
  return S0 || (S0 = 1, Df.exports = /* @__PURE__ */ fx()()), Df.exports;
}
var hx = /* @__PURE__ */ dx();
const Wt = /* @__PURE__ */ fr(hx);
function x0(l, i) {
  var u = Object.keys(l);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(l);
    i && (r = r.filter(function(c) {
      return Object.getOwnPropertyDescriptor(l, c).enumerable;
    })), u.push.apply(u, r);
  }
  return u;
}
function fl(l) {
  for (var i = 1; i < arguments.length; i++) {
    var u = arguments[i] != null ? arguments[i] : {};
    i % 2 ? x0(Object(u), !0).forEach(function(r) {
      Bi(l, r, u[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(u)) : x0(Object(u)).forEach(function(r) {
      Object.defineProperty(l, r, Object.getOwnPropertyDescriptor(u, r));
    });
  }
  return l;
}
function Qu(l) {
  "@babel/helpers - typeof";
  return Qu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Qu(l);
}
function Bi(l, i, u) {
  return i in l ? Object.defineProperty(l, i, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : l[i] = u, l;
}
function mx(l, i) {
  if (l == null) return {};
  var u = {}, r = Object.keys(l), c, f;
  for (f = 0; f < r.length; f++)
    c = r[f], !(i.indexOf(c) >= 0) && (u[c] = l[c]);
  return u;
}
function px(l, i) {
  if (l == null) return {};
  var u = mx(l, i), r, c;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(l);
    for (c = 0; c < f.length; c++)
      r = f[c], !(i.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(l, r) && (u[r] = l[r]);
  }
  return u;
}
function sd(l) {
  return gx(l) || vx(l) || yx(l) || bx();
}
function gx(l) {
  if (Array.isArray(l)) return cd(l);
}
function vx(l) {
  if (typeof Symbol < "u" && l[Symbol.iterator] != null || l["@@iterator"] != null) return Array.from(l);
}
function yx(l, i) {
  if (l) {
    if (typeof l == "string") return cd(l, i);
    var u = Object.prototype.toString.call(l).slice(8, -1);
    if (u === "Object" && l.constructor && (u = l.constructor.name), u === "Map" || u === "Set") return Array.from(l);
    if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return cd(l, i);
  }
}
function cd(l, i) {
  (i == null || i > l.length) && (i = l.length);
  for (var u = 0, r = new Array(i); u < i; u++) r[u] = l[u];
  return r;
}
function bx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sx(l) {
  var i, u = l.beat, r = l.fade, c = l.beatFade, f = l.bounce, d = l.shake, p = l.flash, g = l.spin, h = l.spinPulse, y = l.spinReverse, b = l.pulse, T = l.fixedWidth, S = l.inverse, C = l.border, M = l.listItem, R = l.flip, w = l.size, O = l.rotation, U = l.pull, W = (i = {
    "fa-beat": u,
    "fa-fade": r,
    "fa-beat-fade": c,
    "fa-bounce": f,
    "fa-shake": d,
    "fa-flash": p,
    "fa-spin": g,
    "fa-spin-reverse": y,
    "fa-spin-pulse": h,
    "fa-pulse": b,
    "fa-fw": T,
    "fa-inverse": S,
    "fa-border": C,
    "fa-li": M,
    "fa-flip": R === !0,
    "fa-flip-horizontal": R === "horizontal" || R === "both",
    "fa-flip-vertical": R === "vertical" || R === "both"
  }, Bi(i, "fa-".concat(w), typeof w < "u" && w !== null), Bi(i, "fa-rotate-".concat(O), typeof O < "u" && O !== null && O !== 0), Bi(i, "fa-pull-".concat(U), typeof U < "u" && U !== null), Bi(i, "fa-swap-opacity", l.swapOpacity), i);
  return Object.keys(W).map(function(j) {
    return W[j] ? j : null;
  }).filter(function(j) {
    return j;
  });
}
function xx(l) {
  return l = l - 0, l === l;
}
function Vv(l) {
  return xx(l) ? l : (l = l.replace(/[\-_\s]+(.)?/g, function(i, u) {
    return u ? u.toUpperCase() : "";
  }), l.substr(0, 1).toLowerCase() + l.substr(1));
}
var Tx = ["style"];
function Ex(l) {
  return l.charAt(0).toUpperCase() + l.slice(1);
}
function _x(l) {
  return l.split(";").map(function(i) {
    return i.trim();
  }).filter(function(i) {
    return i;
  }).reduce(function(i, u) {
    var r = u.indexOf(":"), c = Vv(u.slice(0, r)), f = u.slice(r + 1).trim();
    return c.startsWith("webkit") ? i[Ex(c)] = f : i[c] = f, i;
  }, {});
}
function Xv(l, i) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof i == "string")
    return i;
  var r = (i.children || []).map(function(g) {
    return Xv(l, g);
  }), c = Object.keys(i.attributes || {}).reduce(function(g, h) {
    var y = i.attributes[h];
    switch (h) {
      case "class":
        g.attrs.className = y, delete i.attributes.class;
        break;
      case "style":
        g.attrs.style = _x(y);
        break;
      default:
        h.indexOf("aria-") === 0 || h.indexOf("data-") === 0 ? g.attrs[h.toLowerCase()] = y : g.attrs[Vv(h)] = y;
    }
    return g;
  }, {
    attrs: {}
  }), f = u.style, d = f === void 0 ? {} : f, p = px(u, Tx);
  return c.attrs.style = fl(fl({}, c.attrs.style), d), l.apply(void 0, [i.tag, fl(fl({}, c.attrs), p)].concat(sd(r)));
}
var Qv = !1;
try {
  Qv = !0;
} catch {
}
function Ax() {
  if (!Qv && console && typeof console.error == "function") {
    var l;
    (l = console).error.apply(l, arguments);
  }
}
function T0(l) {
  if (l && Qu(l) === "object" && l.prefix && l.iconName && l.icon)
    return l;
  if (ud.icon)
    return ud.icon(l);
  if (l === null)
    return null;
  if (l && Qu(l) === "object" && l.prefix && l.iconName)
    return l;
  if (Array.isArray(l) && l.length === 2)
    return {
      prefix: l[0],
      iconName: l[1]
    };
  if (typeof l == "string")
    return {
      prefix: "fas",
      iconName: l
    };
}
function jf(l, i) {
  return Array.isArray(i) && i.length > 0 || !Array.isArray(i) && i ? Bi({}, l, i) : {};
}
var E0 = {
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
}, Gl = /* @__PURE__ */ ft.forwardRef(function(l, i) {
  var u = fl(fl({}, E0), l), r = u.icon, c = u.mask, f = u.symbol, d = u.className, p = u.title, g = u.titleId, h = u.maskId, y = T0(r), b = jf("classes", [].concat(sd(Sx(u)), sd((d || "").split(" ")))), T = jf("transform", typeof u.transform == "string" ? ud.transform(u.transform) : u.transform), S = jf("mask", T0(c)), C = sx(y, fl(fl(fl(fl({}, b), T), S), {}, {
    symbol: f,
    title: p,
    titleId: g,
    maskId: h
  }));
  if (!C)
    return Ax("Could not find icon", y), null;
  var M = C.abstract, R = {
    ref: i
  };
  return Object.keys(u).forEach(function(w) {
    E0.hasOwnProperty(w) || (R[w] = u[w]);
  }), wx(M[0], R);
});
Gl.displayName = "FontAwesomeIcon";
Gl.propTypes = {
  beat: Wt.bool,
  border: Wt.bool,
  beatFade: Wt.bool,
  bounce: Wt.bool,
  className: Wt.string,
  fade: Wt.bool,
  flash: Wt.bool,
  mask: Wt.oneOfType([Wt.object, Wt.array, Wt.string]),
  maskId: Wt.string,
  fixedWidth: Wt.bool,
  inverse: Wt.bool,
  flip: Wt.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Wt.oneOfType([Wt.object, Wt.array, Wt.string]),
  listItem: Wt.bool,
  pull: Wt.oneOf(["right", "left"]),
  pulse: Wt.bool,
  rotation: Wt.oneOf([0, 90, 180, 270]),
  shake: Wt.bool,
  size: Wt.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: Wt.bool,
  spinPulse: Wt.bool,
  spinReverse: Wt.bool,
  symbol: Wt.oneOfType([Wt.bool, Wt.string]),
  title: Wt.string,
  titleId: Wt.string,
  transform: Wt.oneOfType([Wt.string, Wt.object]),
  swapOpacity: Wt.bool
};
var wx = Xv.bind(null, ft.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ox = {
  prefix: "fas",
  iconName: "list",
  icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]
}, Rx = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Cx = {
  prefix: "fas",
  iconName: "table-columns",
  icon: [512, 512, ["columns"], "f0db", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 160 0 0-256L64 160zm384 0l-160 0 0 256 160 0 0-256z"]
}, zx = {
  prefix: "fas",
  iconName: "filter",
  icon: [512, 512, [], "f0b0", "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]
}, Mx = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Dx = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Nx = {
  prefix: "fas",
  iconName: "border-all",
  icon: [448, 512, [], "f84c", "M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
var qu = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
var Hx = qu.exports, _0;
function jx() {
  return _0 || (_0 = 1, function(l, i) {
    ((u, r) => {
      l.exports = r();
    })(Hx, function u() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, c, f = !r.document && !!r.postMessage, d = r.IS_PAPA_WORKER || !1, p = {}, g = 0, h = {};
      function y(x) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(_) {
          var H = j(_);
          H.chunkSize = parseInt(H.chunkSize), _.step || _.chunk || (H.chunkSize = null), this._handle = new M(H), (this._handle.streamer = this)._config = H;
        }).call(this, x), this.parseChunk = function(_, H) {
          var K = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < K) {
            let st = this._config.newline;
            st || (F = this._config.quoteChar || '"', st = this._handle.guessLineEndings(_, F)), _ = [..._.split(st).slice(K)].join(st);
          }
          this.isFirstChunk && X(this._config.beforeFirstChunk) && (F = this._config.beforeFirstChunk(_)) !== void 0 && (_ = F), this.isFirstChunk = !1, this._halted = !1;
          var K = this._partialLine + _, F = (this._partialLine = "", this._handle.parse(K, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (_ = F.meta.cursor, K = (this._finished || (this._partialLine = K.substring(_ - this._baseIndex), this._baseIndex = _), F && F.data && (this._rowCount += F.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), d) r.postMessage({ results: F, workerId: h.WORKER_ID, finished: K });
            else if (X(this._config.chunk) && !H) {
              if (this._config.chunk(F, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = F = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(F.data), this._completeResults.errors = this._completeResults.errors.concat(F.errors), this._completeResults.meta = F.meta), this._completed || !K || !X(this._config.complete) || F && F.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), K || F && F.meta.paused || this._nextChunk(), F;
          }
          this._halted = !0;
        }, this._sendError = function(_) {
          X(this._config.error) ? this._config.error(_) : d && this._config.error && r.postMessage({ workerId: h.WORKER_ID, error: _, finished: !1 });
        };
      }
      function b(x) {
        var _;
        (x = x || {}).chunkSize || (x.chunkSize = h.RemoteChunkSize), y.call(this, x), this._nextChunk = f ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(H) {
          this._input = H, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (_ = new XMLHttpRequest(), this._config.withCredentials && (_.withCredentials = this._config.withCredentials), f || (_.onload = q(this._chunkLoaded, this), _.onerror = q(this._chunkError, this)), _.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !f), this._config.downloadRequestHeaders) {
              var H, K = this._config.downloadRequestHeaders;
              for (H in K) _.setRequestHeader(H, K[H]);
            }
            var F;
            this._config.chunkSize && (F = this._start + this._config.chunkSize - 1, _.setRequestHeader("Range", "bytes=" + this._start + "-" + F));
            try {
              _.send(this._config.downloadRequestBody);
            } catch (st) {
              this._chunkError(st.message);
            }
            f && _.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          _.readyState === 4 && (_.status < 200 || 400 <= _.status ? this._chunkError() : (this._start += this._config.chunkSize || _.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((H) => (H = H.getResponseHeader("Content-Range")) !== null ? parseInt(H.substring(H.lastIndexOf("/") + 1)) : -1)(_), this.parseChunk(_.responseText)));
        }, this._chunkError = function(H) {
          H = _.statusText || H, this._sendError(new Error(H));
        };
      }
      function T(x) {
        (x = x || {}).chunkSize || (x.chunkSize = h.LocalChunkSize), y.call(this, x);
        var _, H, K = typeof FileReader < "u";
        this.stream = function(F) {
          this._input = F, H = F.slice || F.webkitSlice || F.mozSlice, K ? ((_ = new FileReader()).onload = q(this._chunkLoaded, this), _.onerror = q(this._chunkError, this)) : _ = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var F = this._input, st = (this._config.chunkSize && (st = Math.min(this._start + this._config.chunkSize, this._input.size), F = H.call(F, this._start, st)), _.readAsText(F, this._config.encoding));
          K || this._chunkLoaded({ target: { result: st } });
        }, this._chunkLoaded = function(F) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(F.target.result);
        }, this._chunkError = function() {
          this._sendError(_.error);
        };
      }
      function S(x) {
        var _;
        y.call(this, x = x || {}), this.stream = function(H) {
          return _ = H, this._nextChunk();
        }, this._nextChunk = function() {
          var H, K;
          if (!this._finished) return H = this._config.chunkSize, _ = H ? (K = _.substring(0, H), _.substring(H)) : (K = _, ""), this._finished = !_, this.parseChunk(K);
        };
      }
      function C(x) {
        y.call(this, x = x || {});
        var _ = [], H = !0, K = !1;
        this.pause = function() {
          y.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          y.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(F) {
          this._input = F, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          K && _.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), _.length ? this.parseChunk(_.shift()) : H = !0;
        }, this._streamData = q(function(F) {
          try {
            _.push(typeof F == "string" ? F : F.toString(this._config.encoding)), H && (H = !1, this._checkIsFinished(), this.parseChunk(_.shift()));
          } catch (st) {
            this._streamError(st);
          }
        }, this), this._streamError = q(function(F) {
          this._streamCleanUp(), this._sendError(F);
        }, this), this._streamEnd = q(function() {
          this._streamCleanUp(), K = !0, this._streamData("");
        }, this), this._streamCleanUp = q(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function M(x) {
        var _, H, K, F, st = Math.pow(2, 53), tt = -st, mt = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, L = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, Z = this, nt = 0, lt = 0, E = !1, D = !1, $ = [], I = { data: [], errors: [], meta: {} };
        function ct(Y) {
          return x.skipEmptyLines === "greedy" ? Y.join("").trim() === "" : Y.length === 1 && Y[0].length === 0;
        }
        function gt() {
          if (I && K && (kt("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + h.DefaultDelimiter + "'"), K = !1), x.skipEmptyLines && (I.data = I.data.filter(function(At) {
            return !ct(At);
          })), ht()) {
            let At = function(Yt, Xt) {
              X(x.transformHeader) && (Yt = x.transformHeader(Yt, Xt)), $.push(Yt);
            };
            var pt = At;
            if (I) if (Array.isArray(I.data[0])) {
              for (var Y = 0; ht() && Y < I.data.length; Y++) I.data[Y].forEach(At);
              I.data.splice(0, 1);
            } else I.data.forEach(At);
          }
          function ut(At, Yt) {
            for (var Xt = x.header ? {} : [], Rt = 0; Rt < At.length; Rt++) {
              var Mt = Rt, Lt = At[Rt], Lt = ((Dt, Et) => ((ne) => (x.dynamicTypingFunction && x.dynamicTyping[ne] === void 0 && (x.dynamicTyping[ne] = x.dynamicTypingFunction(ne)), (x.dynamicTyping[ne] || x.dynamicTyping) === !0))(Dt) ? Et === "true" || Et === "TRUE" || Et !== "false" && Et !== "FALSE" && (((ne) => {
                if (mt.test(ne) && (ne = parseFloat(ne), tt < ne && ne < st))
                  return 1;
              })(Et) ? parseFloat(Et) : L.test(Et) ? new Date(Et) : Et === "" ? null : Et) : Et)(Mt = x.header ? Rt >= $.length ? "__parsed_extra" : $[Rt] : Mt, Lt = x.transform ? x.transform(Lt, Mt) : Lt);
              Mt === "__parsed_extra" ? (Xt[Mt] = Xt[Mt] || [], Xt[Mt].push(Lt)) : Xt[Mt] = Lt;
            }
            return x.header && (Rt > $.length ? kt("FieldMismatch", "TooManyFields", "Too many fields: expected " + $.length + " fields but parsed " + Rt, lt + Yt) : Rt < $.length && kt("FieldMismatch", "TooFewFields", "Too few fields: expected " + $.length + " fields but parsed " + Rt, lt + Yt)), Xt;
          }
          var St;
          I && (x.header || x.dynamicTyping || x.transform) && (St = 1, !I.data.length || Array.isArray(I.data[0]) ? (I.data = I.data.map(ut), St = I.data.length) : I.data = ut(I.data, 0), x.header && I.meta && (I.meta.fields = $), lt += St);
        }
        function ht() {
          return x.header && $.length === 0;
        }
        function kt(Y, ut, St, pt) {
          Y = { type: Y, code: ut, message: St }, pt !== void 0 && (Y.row = pt), I.errors.push(Y);
        }
        X(x.step) && (F = x.step, x.step = function(Y) {
          I = Y, ht() ? gt() : (gt(), I.data.length !== 0 && (nt += Y.data.length, x.preview && nt > x.preview ? H.abort() : (I.data = I.data[0], F(I, Z))));
        }), this.parse = function(Y, ut, St) {
          var pt = x.quoteChar || '"', pt = (x.newline || (x.newline = this.guessLineEndings(Y, pt)), K = !1, x.delimiter ? X(x.delimiter) && (x.delimiter = x.delimiter(Y), I.meta.delimiter = x.delimiter) : ((pt = ((At, Yt, Xt, Rt, Mt) => {
            var Lt, Dt, Et, ne;
            Mt = Mt || [",", "	", "|", ";", h.RECORD_SEP, h.UNIT_SEP];
            for (var Ne = 0; Ne < Mt.length; Ne++) {
              for (var He, Ge = Mt[Ne], oe = 0, ge = 0, $t = 0, Kt = (Et = void 0, new w({ comments: Rt, delimiter: Ge, newline: Yt, preview: 10 }).parse(At)), re = 0; re < Kt.data.length; re++) Xt && ct(Kt.data[re]) ? $t++ : (He = Kt.data[re].length, ge += He, Et === void 0 ? Et = He : 0 < He && (oe += Math.abs(He - Et), Et = He));
              0 < Kt.data.length && (ge /= Kt.data.length - $t), (Dt === void 0 || oe <= Dt) && (ne === void 0 || ne < ge) && 1.99 < ge && (Dt = oe, Lt = Ge, ne = ge);
            }
            return { successful: !!(x.delimiter = Lt), bestDelimiter: Lt };
          })(Y, x.newline, x.skipEmptyLines, x.comments, x.delimitersToGuess)).successful ? x.delimiter = pt.bestDelimiter : (K = !0, x.delimiter = h.DefaultDelimiter), I.meta.delimiter = x.delimiter), j(x));
          return x.preview && x.header && pt.preview++, _ = Y, H = new w(pt), I = H.parse(_, ut, St), gt(), E ? { meta: { paused: !0 } } : I || { meta: { paused: !1 } };
        }, this.paused = function() {
          return E;
        }, this.pause = function() {
          E = !0, H.abort(), _ = X(x.chunk) ? "" : _.substring(H.getCharIndex());
        }, this.resume = function() {
          Z.streamer._halted ? (E = !1, Z.streamer.parseChunk(_, !0)) : setTimeout(Z.resume, 3);
        }, this.aborted = function() {
          return D;
        }, this.abort = function() {
          D = !0, H.abort(), I.meta.aborted = !0, X(x.complete) && x.complete(I), _ = "";
        }, this.guessLineEndings = function(At, pt) {
          At = At.substring(0, 1048576);
          var pt = new RegExp(R(pt) + "([^]*?)" + R(pt), "gm"), St = (At = At.replace(pt, "")).split("\r"), pt = At.split(`
`), At = 1 < pt.length && pt[0].length < St[0].length;
          if (St.length === 1 || At) return `
`;
          for (var Yt = 0, Xt = 0; Xt < St.length; Xt++) St[Xt][0] === `
` && Yt++;
          return Yt >= St.length / 2 ? `\r
` : "\r";
        };
      }
      function R(x) {
        return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function w(x) {
        var _ = (x = x || {}).delimiter, H = x.newline, K = x.comments, F = x.step, st = x.preview, tt = x.fastMode, mt = null, L = !1, Z = x.quoteChar == null ? '"' : x.quoteChar, nt = Z;
        if (x.escapeChar !== void 0 && (nt = x.escapeChar), (typeof _ != "string" || -1 < h.BAD_DELIMITERS.indexOf(_)) && (_ = ","), K === _) throw new Error("Comment character same as delimiter");
        K === !0 ? K = "#" : (typeof K != "string" || -1 < h.BAD_DELIMITERS.indexOf(K)) && (K = !1), H !== `
` && H !== "\r" && H !== `\r
` && (H = `
`);
        var lt = 0, E = !1;
        this.parse = function(D, $, I) {
          if (typeof D != "string") throw new Error("Input must be a string");
          var ct = D.length, gt = _.length, ht = H.length, kt = K.length, Y = X(F), ut = [], St = [], pt = [], At = lt = 0;
          if (!D) return oe();
          if (tt || tt !== !1 && D.indexOf(Z) === -1) {
            for (var Yt = D.split(H), Xt = 0; Xt < Yt.length; Xt++) {
              if (pt = Yt[Xt], lt += pt.length, Xt !== Yt.length - 1) lt += H.length;
              else if (I) return oe();
              if (!K || pt.substring(0, kt) !== K) {
                if (Y) {
                  if (ut = [], ne(pt.split(_)), ge(), E) return oe();
                } else ne(pt.split(_));
                if (st && st <= Xt) return ut = ut.slice(0, st), oe(!0);
              }
            }
            return oe();
          }
          for (var Rt = D.indexOf(_, lt), Mt = D.indexOf(H, lt), Lt = new RegExp(R(nt) + R(Z), "g"), Dt = D.indexOf(Z, lt); ; ) if (D[lt] === Z) for (Dt = lt, lt++; ; ) {
            if ((Dt = D.indexOf(Z, Dt + 1)) === -1) return I || St.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ut.length, index: lt }), He();
            if (Dt === ct - 1) return He(D.substring(lt, Dt).replace(Lt, Z));
            if (Z === nt && D[Dt + 1] === nt) Dt++;
            else if (Z === nt || Dt === 0 || D[Dt - 1] !== nt) {
              Rt !== -1 && Rt < Dt + 1 && (Rt = D.indexOf(_, Dt + 1));
              var Et = Ne((Mt = Mt !== -1 && Mt < Dt + 1 ? D.indexOf(H, Dt + 1) : Mt) === -1 ? Rt : Math.min(Rt, Mt));
              if (D.substr(Dt + 1 + Et, gt) === _) {
                pt.push(D.substring(lt, Dt).replace(Lt, Z)), D[lt = Dt + 1 + Et + gt] !== Z && (Dt = D.indexOf(Z, lt)), Rt = D.indexOf(_, lt), Mt = D.indexOf(H, lt);
                break;
              }
              if (Et = Ne(Mt), D.substring(Dt + 1 + Et, Dt + 1 + Et + ht) === H) {
                if (pt.push(D.substring(lt, Dt).replace(Lt, Z)), Ge(Dt + 1 + Et + ht), Rt = D.indexOf(_, lt), Dt = D.indexOf(Z, lt), Y && (ge(), E)) return oe();
                if (st && ut.length >= st) return oe(!0);
                break;
              }
              St.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ut.length, index: lt }), Dt++;
            }
          }
          else if (K && pt.length === 0 && D.substring(lt, lt + kt) === K) {
            if (Mt === -1) return oe();
            lt = Mt + ht, Mt = D.indexOf(H, lt), Rt = D.indexOf(_, lt);
          } else if (Rt !== -1 && (Rt < Mt || Mt === -1)) pt.push(D.substring(lt, Rt)), lt = Rt + gt, Rt = D.indexOf(_, lt);
          else {
            if (Mt === -1) break;
            if (pt.push(D.substring(lt, Mt)), Ge(Mt + ht), Y && (ge(), E)) return oe();
            if (st && ut.length >= st) return oe(!0);
          }
          return He();
          function ne($t) {
            ut.push($t), At = lt;
          }
          function Ne($t) {
            var Kt = 0;
            return Kt = $t !== -1 && ($t = D.substring(Dt + 1, $t)) && $t.trim() === "" ? $t.length : Kt;
          }
          function He($t) {
            return I || ($t === void 0 && ($t = D.substring(lt)), pt.push($t), lt = ct, ne(pt), Y && ge()), oe();
          }
          function Ge($t) {
            lt = $t, ne(pt), pt = [], Mt = D.indexOf(H, lt);
          }
          function oe($t) {
            if (x.header && !$ && ut.length && !L) {
              var Kt = ut[0], re = /* @__PURE__ */ Object.create(null), ve = new Set(Kt);
              let el = !1;
              for (let Ze = 0; Ze < Kt.length; Ze++) {
                let Ce = Kt[Ze];
                if (re[Ce = X(x.transformHeader) ? x.transformHeader(Ce, Ze) : Ce]) {
                  let ze, fe = re[Ce];
                  for (; ze = Ce + "_" + fe, fe++, ve.has(ze); ) ;
                  ve.add(ze), Kt[Ze] = ze, re[Ce]++, el = !0, (mt = mt === null ? {} : mt)[ze] = Ce;
                } else re[Ce] = 1, Kt[Ze] = Ce;
                ve.add(Ce);
              }
              el && console.warn("Duplicate headers found and renamed."), L = !0;
            }
            return { data: ut, errors: St, meta: { delimiter: _, linebreak: H, aborted: E, truncated: !!$t, cursor: At + ($ || 0), renamedHeaders: mt } };
          }
          function ge() {
            F(oe()), ut = [], St = [];
          }
        }, this.abort = function() {
          E = !0;
        }, this.getCharIndex = function() {
          return lt;
        };
      }
      function O(x) {
        var _ = x.data, H = p[_.workerId], K = !1;
        if (_.error) H.userError(_.error, _.file);
        else if (_.results && _.results.data) {
          var F = { abort: function() {
            K = !0, U(_.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: W, resume: W };
          if (X(H.userStep)) {
            for (var st = 0; st < _.results.data.length && (H.userStep({ data: _.results.data[st], errors: _.results.errors, meta: _.results.meta }, F), !K); st++) ;
            delete _.results;
          } else X(H.userChunk) && (H.userChunk(_.results, F, _.file), delete _.results);
        }
        _.finished && !K && U(_.workerId, _.results);
      }
      function U(x, _) {
        var H = p[x];
        X(H.userComplete) && H.userComplete(_), H.terminate(), delete p[x];
      }
      function W() {
        throw new Error("Not implemented.");
      }
      function j(x) {
        if (typeof x != "object" || x === null) return x;
        var _, H = Array.isArray(x) ? [] : {};
        for (_ in x) H[_] = j(x[_]);
        return H;
      }
      function q(x, _) {
        return function() {
          x.apply(_, arguments);
        };
      }
      function X(x) {
        return typeof x == "function";
      }
      return h.parse = function(x, _) {
        var H = (_ = _ || {}).dynamicTyping || !1;
        if (X(H) && (_.dynamicTypingFunction = H, H = {}), _.dynamicTyping = H, _.transform = !!X(_.transform) && _.transform, !_.worker || !h.WORKERS_SUPPORTED) return H = null, h.NODE_STREAM_INPUT, typeof x == "string" ? (x = ((K) => K.charCodeAt(0) !== 65279 ? K : K.slice(1))(x), H = new (_.download ? b : S)(_)) : x.readable === !0 && X(x.read) && X(x.on) ? H = new C(_) : (r.File && x instanceof File || x instanceof Object) && (H = new T(_)), H.stream(x);
        (H = (() => {
          var K;
          return !!h.WORKERS_SUPPORTED && (K = (() => {
            var F = r.URL || r.webkitURL || null, st = u.toString();
            return h.BLOB_URL || (h.BLOB_URL = F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", st, ")();"], { type: "text/javascript" })));
          })(), (K = new r.Worker(K)).onmessage = O, K.id = g++, p[K.id] = K);
        })()).userStep = _.step, H.userChunk = _.chunk, H.userComplete = _.complete, H.userError = _.error, _.step = X(_.step), _.chunk = X(_.chunk), _.complete = X(_.complete), _.error = X(_.error), delete _.worker, H.postMessage({ input: x, config: _, workerId: H.id });
      }, h.unparse = function(x, _) {
        var H = !1, K = !0, F = ",", st = `\r
`, tt = '"', mt = tt + tt, L = !1, Z = null, nt = !1, lt = ((() => {
          if (typeof _ == "object") {
            if (typeof _.delimiter != "string" || h.BAD_DELIMITERS.filter(function($) {
              return _.delimiter.indexOf($) !== -1;
            }).length || (F = _.delimiter), typeof _.quotes != "boolean" && typeof _.quotes != "function" && !Array.isArray(_.quotes) || (H = _.quotes), typeof _.skipEmptyLines != "boolean" && typeof _.skipEmptyLines != "string" || (L = _.skipEmptyLines), typeof _.newline == "string" && (st = _.newline), typeof _.quoteChar == "string" && (tt = _.quoteChar), typeof _.header == "boolean" && (K = _.header), Array.isArray(_.columns)) {
              if (_.columns.length === 0) throw new Error("Option columns is empty");
              Z = _.columns;
            }
            _.escapeChar !== void 0 && (mt = _.escapeChar + tt), _.escapeFormulae instanceof RegExp ? nt = _.escapeFormulae : typeof _.escapeFormulae == "boolean" && _.escapeFormulae && (nt = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(R(tt), "g"));
        if (typeof x == "string" && (x = JSON.parse(x)), Array.isArray(x)) {
          if (!x.length || Array.isArray(x[0])) return E(null, x, L);
          if (typeof x[0] == "object") return E(Z || Object.keys(x[0]), x, L);
        } else if (typeof x == "object") return typeof x.data == "string" && (x.data = JSON.parse(x.data)), Array.isArray(x.data) && (x.fields || (x.fields = x.meta && x.meta.fields || Z), x.fields || (x.fields = Array.isArray(x.data[0]) ? x.fields : typeof x.data[0] == "object" ? Object.keys(x.data[0]) : []), Array.isArray(x.data[0]) || typeof x.data[0] == "object" || (x.data = [x.data])), E(x.fields || [], x.data || [], L);
        throw new Error("Unable to serialize unrecognized input");
        function E($, I, ct) {
          var gt = "", ht = (typeof $ == "string" && ($ = JSON.parse($)), typeof I == "string" && (I = JSON.parse(I)), Array.isArray($) && 0 < $.length), kt = !Array.isArray(I[0]);
          if (ht && K) {
            for (var Y = 0; Y < $.length; Y++) 0 < Y && (gt += F), gt += D($[Y], Y);
            0 < I.length && (gt += st);
          }
          for (var ut = 0; ut < I.length; ut++) {
            var St = (ht ? $ : I[ut]).length, pt = !1, At = ht ? Object.keys(I[ut]).length === 0 : I[ut].length === 0;
            if (ct && !ht && (pt = ct === "greedy" ? I[ut].join("").trim() === "" : I[ut].length === 1 && I[ut][0].length === 0), ct === "greedy" && ht) {
              for (var Yt = [], Xt = 0; Xt < St; Xt++) {
                var Rt = kt ? $[Xt] : Xt;
                Yt.push(I[ut][Rt]);
              }
              pt = Yt.join("").trim() === "";
            }
            if (!pt) {
              for (var Mt = 0; Mt < St; Mt++) {
                0 < Mt && !At && (gt += F);
                var Lt = ht && kt ? $[Mt] : Mt;
                gt += D(I[ut][Lt], Mt);
              }
              ut < I.length - 1 && (!ct || 0 < St && !At) && (gt += st);
            }
          }
          return gt;
        }
        function D($, I) {
          var ct, gt;
          return $ == null ? "" : $.constructor === Date ? JSON.stringify($).slice(1, 25) : (gt = !1, nt && typeof $ == "string" && nt.test($) && ($ = "'" + $, gt = !0), ct = $.toString().replace(lt, mt), (gt = gt || H === !0 || typeof H == "function" && H($, I) || Array.isArray(H) && H[I] || ((ht, kt) => {
            for (var Y = 0; Y < kt.length; Y++) if (-1 < ht.indexOf(kt[Y])) return !0;
            return !1;
          })(ct, h.BAD_DELIMITERS) || -1 < ct.indexOf(F) || ct.charAt(0) === " " || ct.charAt(ct.length - 1) === " ") ? tt + ct + tt : ct);
        }
      }, h.RECORD_SEP = "", h.UNIT_SEP = "", h.BYTE_ORDER_MARK = "\uFEFF", h.BAD_DELIMITERS = ["\r", `
`, '"', h.BYTE_ORDER_MARK], h.WORKERS_SUPPORTED = !f && !!r.Worker, h.NODE_STREAM_INPUT = 1, h.LocalChunkSize = 10485760, h.RemoteChunkSize = 5242880, h.DefaultDelimiter = ",", h.Parser = w, h.ParserHandle = M, h.NetworkStreamer = b, h.FileStreamer = T, h.StringStreamer = S, h.ReadableStreamStreamer = C, r.jQuery && ((c = r.jQuery).fn.parse = function(x) {
        var _ = x.config || {}, H = [];
        return this.each(function(st) {
          if (!(c(this).prop("tagName").toUpperCase() === "INPUT" && c(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var tt = 0; tt < this.files.length; tt++) H.push({ file: this.files[tt], inputElem: this, instanceConfig: c.extend({}, _) });
        }), K(), this;
        function K() {
          if (H.length === 0) X(x.complete) && x.complete();
          else {
            var st, tt, mt, L, Z = H[0];
            if (X(x.before)) {
              var nt = x.before(Z.file, Z.inputElem);
              if (typeof nt == "object") {
                if (nt.action === "abort") return st = "AbortError", tt = Z.file, mt = Z.inputElem, L = nt.reason, void (X(x.error) && x.error({ name: st }, tt, mt, L));
                if (nt.action === "skip") return void F();
                typeof nt.config == "object" && (Z.instanceConfig = c.extend(Z.instanceConfig, nt.config));
              } else if (nt === "skip") return void F();
            }
            var lt = Z.instanceConfig.complete;
            Z.instanceConfig.complete = function(E) {
              X(lt) && lt(E, Z.file, Z.inputElem), F();
            }, h.parse(Z.file, Z.instanceConfig);
          }
        }
        function F() {
          H.splice(0, 1), K();
        }
      }), d && (r.onmessage = function(x) {
        x = x.data, h.WORKER_ID === void 0 && x && (h.WORKER_ID = x.workerId), typeof x.input == "string" ? r.postMessage({ workerId: h.WORKER_ID, results: h.parse(x.input, x.config), finished: !0 }) : (r.File && x.input instanceof File || x.input instanceof Object) && (x = h.parse(x.input, x.config)) && r.postMessage({ workerId: h.WORKER_ID, results: x, finished: !0 });
      }), (b.prototype = Object.create(y.prototype)).constructor = b, (T.prototype = Object.create(y.prototype)).constructor = T, (S.prototype = Object.create(S.prototype)).constructor = S, (C.prototype = Object.create(y.prototype)).constructor = C, h;
    });
  }(qu)), qu.exports;
}
var Lx = jx();
const Ux = /* @__PURE__ */ fr(Lx), kx = "_container_14ydf_1", Bx = "_main_14ydf_8", qx = "_title_14ydf_14", Yx = "_search_14ydf_21", Gx = "_loader_14ydf_29", Vx = "_buttons_14ydf_33", Xx = "_active_14ydf_54", Qx = "_icon_14ydf_59", cl = {
  container: kx,
  main: Bx,
  title: qx,
  search: Yx,
  loader: Gx,
  buttons: Vx,
  active: Xx,
  icon: Qx
}, Ix = "_search_qqeb0_1", Zx = {
  search: Ix
};
function Kx({ changeHandler: l }) {
  return /* @__PURE__ */ G.jsx("input", { className: Zx.search, name: "search", type: "text", autoComplete: "off", placeholder: "🔍  Search data elements...", onChange: l });
}
const Fx = "_content_bbdxn_1", Jx = "_count_bbdxn_11", A0 = {
  content: Fx,
  count: Jx
};
var Wx = sv();
const $x = /* @__PURE__ */ fr(Wx), as = 0, Aa = 1, Ki = 2, Iv = 4;
function w0(l) {
  return () => l;
}
function Px(l) {
  l();
}
function ar(l, i) {
  return (u) => l(i(u));
}
function O0(l, i) {
  return () => l(i);
}
function tT(l, i) {
  return (u) => l(i, u);
}
function Nd(l) {
  return l !== void 0;
}
function eT(...l) {
  return () => {
    l.map(Px);
  };
}
function Fi() {
}
function is(l, i) {
  return i(l), l;
}
function nT(l, i) {
  return i(l);
}
function Ae(...l) {
  return l;
}
function ce(l, i) {
  return l(Aa, i);
}
function Vt(l, i) {
  l(as, i);
}
function Hd(l) {
  l(Ki);
}
function Pe(l) {
  return l(Iv);
}
function wt(l, i) {
  return ce(l, tT(i, as));
}
function vl(l, i) {
  const u = l(Aa, (r) => {
    u(), i(r);
  });
  return u;
}
function R0(l) {
  let i, u;
  return (r) => (c) => {
    i = c, u && clearTimeout(u), u = setTimeout(() => {
      r(i);
    }, l);
  };
}
function Zv(l, i) {
  return l === i;
}
function Ee(l = Zv) {
  let i;
  return (u) => (r) => {
    l(i, r) || (i = r, u(r));
  };
}
function Ht(l) {
  return (i) => (u) => {
    l(u) && i(u);
  };
}
function vt(l) {
  return (i) => ar(i, l);
}
function dl(l) {
  return (i) => () => {
    i(l);
  };
}
function at(l, ...i) {
  const u = lT(...i);
  return (r, c) => {
    switch (r) {
      case Ki:
        Hd(l);
        return;
      case Aa:
        return ce(l, u(c));
    }
  };
}
function pl(l, i) {
  return (u) => (r) => {
    u(i = l(i, r));
  };
}
function Xi(l) {
  return (i) => (u) => {
    l > 0 ? l-- : i(u);
  };
}
function ya(l) {
  let i = null, u;
  return (r) => (c) => {
    i = c, !u && (u = setTimeout(() => {
      u = void 0, r(i);
    }, l));
  };
}
function Zt(...l) {
  const i = new Array(l.length);
  let u = 0, r = null;
  const c = Math.pow(2, l.length) - 1;
  return l.forEach((f, d) => {
    const p = Math.pow(2, d);
    ce(f, (g) => {
      const h = u;
      u = u | p, i[d] = g, h !== c && u === c && r && (r(), r = null);
    });
  }), (f) => (d) => {
    const p = () => {
      f([d].concat(i));
    };
    u === c ? p() : r = p;
  };
}
function lT(...l) {
  return (i) => l.reduceRight(nT, i);
}
function aT(l) {
  let i, u;
  const r = () => i == null ? void 0 : i();
  return function(c, f) {
    switch (c) {
      case Aa:
        return f ? u === f ? void 0 : (r(), u = f, i = ce(l, f), i) : (r(), Fi);
      case Ki:
        r(), u = null;
        return;
    }
  };
}
function rt(l) {
  let i = l;
  const u = ee();
  return (r, c) => {
    switch (r) {
      case as:
        i = c;
        break;
      case Aa: {
        c(i);
        break;
      }
      case Iv:
        return i;
    }
    return u(r, c);
  };
}
function rn(l, i) {
  return is(rt(i), (u) => wt(l, u));
}
function ee() {
  const l = [];
  return (i, u) => {
    switch (i) {
      case as:
        l.slice().forEach((r) => {
          r(u);
        });
        return;
      case Ki:
        l.splice(0, l.length);
        return;
      case Aa:
        return l.push(u), () => {
          const r = l.indexOf(u);
          r > -1 && l.splice(r, 1);
        };
    }
  };
}
function wn(l) {
  return is(ee(), (i) => wt(l, i));
}
function ie(l, i = [], { singleton: u } = { singleton: !0 }) {
  return {
    constructor: l,
    dependencies: i,
    id: iT(),
    singleton: u
  };
}
const iT = () => Symbol();
function oT(l) {
  const i = /* @__PURE__ */ new Map(), u = ({ constructor: r, dependencies: c, id: f, singleton: d }) => {
    if (d && i.has(f))
      return i.get(f);
    const p = r(c.map((g) => u(g)));
    return d && i.set(f, p), p;
  };
  return u(l);
}
function Ie(...l) {
  const i = ee(), u = new Array(l.length);
  let r = 0;
  const c = Math.pow(2, l.length) - 1;
  return l.forEach((f, d) => {
    const p = Math.pow(2, d);
    ce(f, (g) => {
      u[d] = g, r = r | p, r === c && Vt(i, u);
    });
  }), function(f, d) {
    switch (f) {
      case Ki: {
        Hd(i);
        return;
      }
      case Aa:
        return r === c && d(u), ce(i, d);
    }
  };
}
function jt(l, i = Zv) {
  return at(l, Ee(i));
}
function C0(...l) {
  return function(i, u) {
    switch (i) {
      case Ki:
        return;
      case Aa:
        return eT(...l.map((r) => ce(r, u)));
    }
  };
}
var gn = /* @__PURE__ */ ((l) => (l[l.DEBUG = 0] = "DEBUG", l[l.INFO = 1] = "INFO", l[l.WARN = 2] = "WARN", l[l.ERROR = 3] = "ERROR", l))(gn || {});
const rT = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, uT = () => typeof globalThis > "u" ? window : globalThis, wa = ie(
  () => {
    const l = rt(
      3
      /* ERROR */
    );
    return {
      log: rt((i, u, r = 1) => {
        var c;
        const f = (c = uT().VIRTUOSO_LOG_LEVEL) != null ? c : Pe(l);
        r >= f && console[rT[r]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          i,
          u
        );
      }),
      logLevel: l
    };
  },
  [],
  { singleton: !0 }
);
function yl(l, i, u) {
  return jd(l, i, u).callbackRef;
}
function jd(l, i, u) {
  const r = ft.useRef(null);
  let c = (d) => {
  };
  const f = ft.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((d) => {
    const p = () => {
      const g = d[0].target;
      g.offsetParent !== null && l(g);
    };
    u ? p() : requestAnimationFrame(p);
  }) : null, [l, u]);
  return c = (d) => {
    d && i ? (f == null || f.observe(d), r.current = d) : (r.current && (f == null || f.unobserve(r.current)), r.current = null);
  }, { callbackRef: c, ref: r };
}
function Kv(l, i, u, r, c, f, d, p, g) {
  const h = ft.useCallback(
    (y) => {
      const b = sT(y.children, i, p ? "offsetWidth" : "offsetHeight", c);
      let T = y.parentElement;
      for (; !T.dataset.virtuosoScroller; )
        T = T.parentElement;
      const S = T.lastElementChild.dataset.viewportType === "window";
      let C;
      S && (C = T.ownerDocument.defaultView);
      const M = d ? p ? d.scrollLeft : d.scrollTop : S ? p ? C.scrollX || C.document.documentElement.scrollLeft : C.scrollY || C.document.documentElement.scrollTop : p ? T.scrollLeft : T.scrollTop, R = d ? p ? d.scrollWidth : d.scrollHeight : S ? p ? C.document.documentElement.scrollWidth : C.document.documentElement.scrollHeight : p ? T.scrollWidth : T.scrollHeight, w = d ? p ? d.offsetWidth : d.offsetHeight : S ? p ? C.innerWidth : C.innerHeight : p ? T.offsetWidth : T.offsetHeight;
      r({
        scrollHeight: R,
        scrollTop: Math.max(M, 0),
        viewportHeight: w
      }), f == null || f(
        p ? z0("column-gap", getComputedStyle(y).columnGap, c) : z0("row-gap", getComputedStyle(y).rowGap, c)
      ), b !== null && l(b);
    },
    [l, i, c, f, d, r, p]
  );
  return jd(h, u, g);
}
function sT(l, i, u, r) {
  const c = l.length;
  if (c === 0)
    return null;
  const f = [];
  for (let d = 0; d < c; d++) {
    const p = l.item(d);
    if (p.dataset.index === void 0)
      continue;
    const g = parseInt(p.dataset.index), h = parseFloat(p.dataset.knownSize), y = i(p, u);
    if (y === 0 && r("Zero-sized element, this should not happen", { child: p }, gn.ERROR), y === h)
      continue;
    const b = f[f.length - 1];
    f.length === 0 || b.size !== y || b.endIndex !== g - 1 ? f.push({ endIndex: g, size: y, startIndex: g }) : f[f.length - 1].endIndex++;
  }
  return f;
}
function z0(l, i, u) {
  return i !== "normal" && !(i != null && i.endsWith("px")) && u(`${l} was not resolved to pixel value correctly`, i, gn.WARN), i === "normal" ? 0 : parseInt(i ?? "0", 10);
}
function Ld(l, i, u) {
  const r = ft.useRef(null), c = ft.useCallback(
    (g) => {
      if (!(g != null && g.offsetParent))
        return;
      const h = g.getBoundingClientRect(), y = h.width;
      let b, T;
      if (i) {
        const S = i.getBoundingClientRect(), C = h.top - S.top;
        T = S.height - Math.max(0, C), b = C + i.scrollTop;
      } else {
        const S = d.current.ownerDocument.defaultView;
        T = S.innerHeight - Math.max(0, h.top), b = h.top + S.scrollY;
      }
      r.current = {
        offsetTop: b,
        visibleHeight: T,
        visibleWidth: y
      }, l(r.current);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, i]
  ), { callbackRef: f, ref: d } = jd(c, !0, u), p = ft.useCallback(() => {
    c(d.current);
  }, [c, d]);
  return ft.useEffect(() => {
    var g;
    if (i) {
      i.addEventListener("scroll", p);
      const h = new ResizeObserver(() => {
        requestAnimationFrame(p);
      });
      return h.observe(i), () => {
        i.removeEventListener("scroll", p), h.unobserve(i);
      };
    } else {
      const h = (g = d.current) == null ? void 0 : g.ownerDocument.defaultView;
      return h == null || h.addEventListener("scroll", p), h == null || h.addEventListener("resize", p), () => {
        h == null || h.removeEventListener("scroll", p), h == null || h.removeEventListener("resize", p);
      };
    }
  }, [p, i, d]), f;
}
const fn = ie(
  () => {
    const l = ee(), i = ee(), u = rt(0), r = ee(), c = rt(0), f = ee(), d = ee(), p = rt(0), g = rt(0), h = rt(0), y = rt(0), b = ee(), T = ee(), S = rt(!1), C = rt(!1), M = rt(!1);
    return wt(
      at(
        l,
        vt(({ scrollTop: R }) => R)
      ),
      i
    ), wt(
      at(
        l,
        vt(({ scrollHeight: R }) => R)
      ),
      d
    ), wt(i, c), {
      deviation: u,
      fixedFooterHeight: h,
      fixedHeaderHeight: g,
      footerHeight: y,
      headerHeight: p,
      horizontalDirection: C,
      scrollBy: T,
      // input
      scrollContainerState: l,
      scrollHeight: d,
      scrollingInProgress: S,
      // signals
      scrollTo: b,
      scrollTop: i,
      skipAnimationFrameInResizeObserver: M,
      smoothScrollTargetReached: r,
      // state
      statefulScrollTop: c,
      viewportHeight: f
    };
  },
  [],
  { singleton: !0 }
), ir = { lvl: 0 };
function Fv(l, i) {
  const u = l.length;
  if (u === 0)
    return [];
  let { index: r, value: c } = i(l[0]);
  const f = [];
  for (let d = 1; d < u; d++) {
    const { index: p, value: g } = i(l[d]);
    f.push({ end: p - 1, start: r, value: c }), r = p, c = g;
  }
  return f.push({ end: 1 / 0, start: r, value: c }), f;
}
function be(l) {
  return l === ir;
}
function or(l, i) {
  if (!be(l))
    return i === l.k ? l.v : i < l.k ? or(l.l, i) : or(l.r, i);
}
function Wn(l, i, u = "k") {
  if (be(l))
    return [-1 / 0, void 0];
  if (Number(l[u]) === i)
    return [l.k, l.v];
  if (Number(l[u]) < i) {
    const r = Wn(l.r, i, u);
    return r[0] === -1 / 0 ? [l.k, l.v] : r;
  }
  return Wn(l.l, i, u);
}
function An(l, i, u) {
  return be(l) ? $v(i, u, 1) : i === l.k ? Qe(l, { k: i, v: u }) : i < l.k ? M0(Qe(l, { l: An(l.l, i, u) })) : M0(Qe(l, { r: An(l.r, i, u) }));
}
function Yi() {
  return ir;
}
function os(l, i, u) {
  if (be(l))
    return [];
  const r = Wn(l, i)[0];
  return cT(dd(l, r, u));
}
function fd(l, i) {
  if (be(l)) return ir;
  const { k: u, l: r, r: c } = l;
  if (i === u) {
    if (be(r))
      return c;
    if (be(c))
      return r;
    {
      const [f, d] = Wv(r);
      return Yu(Qe(l, { k: f, l: Jv(r), v: d }));
    }
  } else return i < u ? Yu(Qe(l, { l: fd(r, i) })) : Yu(Qe(l, { r: fd(c, i) }));
}
function Ka(l) {
  return be(l) ? [] : [...Ka(l.l), { k: l.k, v: l.v }, ...Ka(l.r)];
}
function dd(l, i, u) {
  if (be(l))
    return [];
  const { k: r, l: c, r: f, v: d } = l;
  let p = [];
  return r > i && (p = p.concat(dd(c, i, u))), r >= i && r <= u && p.push({ k: r, v: d }), r <= u && (p = p.concat(dd(f, i, u))), p;
}
function Yu(l) {
  const { l: i, lvl: u, r } = l;
  if (r.lvl >= u - 1 && i.lvl >= u - 1)
    return l;
  if (u > r.lvl + 1) {
    if (Lf(i))
      return Pv(Qe(l, { lvl: u - 1 }));
    if (!be(i) && !be(i.r))
      return Qe(i.r, {
        l: Qe(i, { r: i.r.l }),
        lvl: u,
        r: Qe(l, {
          l: i.r.r,
          lvl: u - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (Lf(l))
      return hd(Qe(l, { lvl: u - 1 }));
    if (!be(r) && !be(r.l)) {
      const c = r.l, f = Lf(c) ? r.lvl - 1 : r.lvl;
      return Qe(c, {
        l: Qe(l, {
          lvl: u - 1,
          r: c.l
        }),
        lvl: c.lvl + 1,
        r: hd(Qe(r, { l: c.r, lvl: f }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function Qe(l, i) {
  return $v(
    i.k !== void 0 ? i.k : l.k,
    i.v !== void 0 ? i.v : l.v,
    i.lvl !== void 0 ? i.lvl : l.lvl,
    i.l !== void 0 ? i.l : l.l,
    i.r !== void 0 ? i.r : l.r
  );
}
function Jv(l) {
  return be(l.r) ? l.l : Yu(Qe(l, { r: Jv(l.r) }));
}
function Lf(l) {
  return be(l) || l.lvl > l.r.lvl;
}
function Wv(l) {
  return be(l.r) ? [l.k, l.v] : Wv(l.r);
}
function $v(l, i, u, r = ir, c = ir) {
  return { k: l, l: r, lvl: u, r: c, v: i };
}
function M0(l) {
  return hd(Pv(l));
}
function Pv(l) {
  const { l: i } = l;
  return !be(i) && i.lvl === l.lvl ? Qe(i, { r: Qe(l, { l: i.r }) }) : l;
}
function hd(l) {
  const { lvl: i, r: u } = l;
  return !be(u) && !be(u.r) && u.lvl === i && u.r.lvl === i ? Qe(u, { l: Qe(l, { r: u.l }), lvl: i + 1 }) : l;
}
function cT(l) {
  return Fv(l, ({ k: i, v: u }) => ({ index: i, value: u }));
}
function ty(l, i) {
  return !!(l && l.startIndex === i.startIndex && l.endIndex === i.endIndex);
}
function rr(l, i) {
  return !!(l && l[0] === i[0] && l[1] === i[1]);
}
const Ud = ie(
  () => ({ recalcInProgress: rt(!1) }),
  [],
  { singleton: !0 }
);
function ey(l, i, u) {
  return l[Iu(l, i, u)];
}
function Iu(l, i, u, r = 0) {
  let c = l.length - 1;
  for (; r <= c; ) {
    const f = Math.floor((r + c) / 2), d = l[f], p = u(d, i);
    if (p === 0)
      return f;
    if (p === -1) {
      if (c - r < 2)
        return f - 1;
      c = f - 1;
    } else {
      if (c === r)
        return f;
      r = f + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${l.join(",")}, searched for ${i}`);
}
function fT(l, i, u, r) {
  const c = Iu(l, i, r), f = Iu(l, u, r, c);
  return l.slice(c, f + 1);
}
function $n(l, i) {
  return Math.round(l.getBoundingClientRect()[i]);
}
function rs(l) {
  return !be(l.groupOffsetTree);
}
function kd({ index: l }, i) {
  return i === l ? 0 : i < l ? -1 : 1;
}
function dT() {
  return {
    groupIndices: [],
    groupOffsetTree: Yi(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: Yi()
  };
}
function hT(l, i) {
  let u = be(l) ? 0 : 1 / 0;
  for (const r of i) {
    const { endIndex: c, size: f, startIndex: d } = r;
    if (u = Math.min(u, d), be(l)) {
      l = An(l, 0, f);
      continue;
    }
    const p = os(l, d - 1, c + 1);
    if (p.some(ST(r)))
      continue;
    let g = !1, h = !1;
    for (const { end: y, start: b, value: T } of p)
      g ? (c >= b || f === T) && (l = fd(l, b)) : (h = T !== f, g = !0), y > c && c >= b && T !== f && (l = An(l, c + 1, T));
    h && (l = An(l, d, f));
  }
  return [l, u];
}
function mT(l) {
  return typeof l.groupIndex < "u";
}
function pT({ offset: l }, i) {
  return i === l ? 0 : i < l ? -1 : 1;
}
function ur(l, i, u) {
  if (i.length === 0)
    return 0;
  const { index: r, offset: c, size: f } = ey(i, l, kd), d = l - r, p = f * d + (d - 1) * u + c;
  return p > 0 ? p + u : p;
}
function ny(l, i) {
  if (!rs(i))
    return l;
  let u = 0;
  for (; i.groupIndices[u] <= l + u; )
    u++;
  return l + u;
}
function ly(l, i, u) {
  if (mT(l))
    return i.groupIndices[l.groupIndex] + 1;
  {
    const r = l.index === "LAST" ? u : l.index;
    let c = ny(r, i);
    return c = Math.max(0, c, Math.min(u, c)), c;
  }
}
function gT(l, i, u, r = 0) {
  return r > 0 && (i = Math.max(i, ey(l, r, kd).offset)), Fv(fT(l, i, u, pT), bT);
}
function vT(l, [i, u, r, c]) {
  i.length > 0 && r("received item sizes", i, gn.DEBUG);
  const f = l.sizeTree;
  let d = f, p = 0;
  if (u.length > 0 && be(f) && i.length === 2) {
    const T = i[0].size, S = i[1].size;
    d = u.reduce((C, M) => An(An(C, M, T), M + 1, S), d);
  } else
    [d, p] = hT(d, i);
  if (d === f)
    return l;
  const { lastIndex: g, lastOffset: h, lastSize: y, offsetTree: b } = md(l.offsetTree, p, d, c);
  return {
    groupIndices: u,
    groupOffsetTree: u.reduce((T, S) => An(T, S, ur(S, b, c)), Yi()),
    lastIndex: g,
    lastOffset: h,
    lastSize: y,
    offsetTree: b,
    sizeTree: d
  };
}
function yT(l) {
  return Ka(l).map(({ k: i, v: u }, r, c) => {
    const f = c[r + 1];
    return { endIndex: f ? f.k - 1 : 1 / 0, size: u, startIndex: i };
  });
}
function D0(l, i) {
  let u = 0, r = 0;
  for (; u < l; )
    u += i[r + 1] - i[r] - 1, r++;
  return r - (u === l ? 0 : 1);
}
function md(l, i, u, r) {
  let c = l, f = 0, d = 0, p = 0, g = 0;
  if (i !== 0) {
    g = Iu(c, i - 1, kd), p = c[g].offset;
    const h = Wn(u, i - 1);
    f = h[0], d = h[1], c.length && c[g].size === Wn(u, i)[1] && (g -= 1), c = c.slice(0, g + 1);
  } else
    c = [];
  for (const { start: h, value: y } of os(u, i, 1 / 0)) {
    const b = h - f, T = b * d + p + b * r;
    c.push({
      index: h,
      offset: T,
      size: y
    }), f = h, p = T, d = y;
  }
  return {
    lastIndex: f,
    lastOffset: p,
    lastSize: d,
    offsetTree: c
  };
}
function bT(l) {
  return { index: l.index, value: l };
}
function ST(l) {
  const { endIndex: i, size: u, startIndex: r } = l;
  return (c) => c.start === r && (c.end === i || c.end === 1 / 0) && c.value === u;
}
const xT = {
  offsetHeight: "height",
  offsetWidth: "width"
}, Sl = ie(
  ([{ log: l }, { recalcInProgress: i }]) => {
    const u = ee(), r = ee(), c = rn(r, 0), f = ee(), d = ee(), p = rt(0), g = rt([]), h = rt(void 0), y = rt(void 0), b = rt((j, q) => $n(j, xT[q])), T = rt(void 0), S = rt(0), C = dT(), M = rn(
      at(u, Zt(g, l, S), pl(vT, C), Ee()),
      C
    ), R = rn(
      at(
        g,
        Ee(),
        pl((j, q) => ({ current: q, prev: j.current }), {
          current: [],
          prev: []
        }),
        vt(({ prev: j }) => j)
      ),
      []
    );
    wt(
      at(
        g,
        Ht((j) => j.length > 0),
        Zt(M, S),
        vt(([j, q, X]) => {
          const x = j.reduce((_, H, K) => An(_, H, ur(H, q.offsetTree, X) || K), Yi());
          return {
            ...q,
            groupIndices: j,
            groupOffsetTree: x
          };
        })
      ),
      M
    ), wt(
      at(
        r,
        Zt(M),
        Ht(([j, { lastIndex: q }]) => j < q),
        vt(([j, { lastIndex: q, lastSize: X }]) => [
          {
            endIndex: q,
            size: X,
            startIndex: j
          }
        ])
      ),
      u
    ), wt(h, y);
    const w = rn(
      at(
        h,
        vt((j) => j === void 0)
      ),
      !0
    );
    wt(
      at(
        y,
        Ht((j) => j !== void 0 && be(Pe(M).sizeTree)),
        vt((j) => [{ endIndex: 0, size: j, startIndex: 0 }])
      ),
      u
    );
    const O = wn(
      at(
        u,
        Zt(M),
        pl(
          ({ sizes: j }, [q, X]) => ({
            changed: X !== j,
            sizes: X
          }),
          { changed: !1, sizes: C }
        ),
        vt((j) => j.changed)
      )
    );
    ce(
      at(
        p,
        pl(
          (j, q) => ({ diff: j.prev - q, prev: q }),
          { diff: 0, prev: 0 }
        ),
        vt((j) => j.diff)
      ),
      (j) => {
        const { groupIndices: q } = Pe(M);
        if (j > 0)
          Vt(i, !0), Vt(f, j + D0(j, q));
        else if (j < 0) {
          const X = Pe(R);
          X.length > 0 && (j -= D0(-j, X)), Vt(d, j);
        }
      }
    ), ce(at(p, Zt(l)), ([j, q]) => {
      j < 0 && q(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: p },
        gn.ERROR
      );
    });
    const U = wn(f);
    wt(
      at(
        f,
        Zt(M),
        vt(([j, q]) => {
          const X = q.groupIndices.length > 0, x = [], _ = q.lastSize;
          if (X) {
            const H = or(q.sizeTree, 0);
            let K = 0, F = 0;
            for (; K < j; ) {
              const tt = q.groupIndices[F], mt = q.groupIndices.length === F + 1 ? 1 / 0 : q.groupIndices[F + 1] - tt - 1;
              x.push({
                endIndex: tt,
                size: H,
                startIndex: tt
              }), x.push({
                endIndex: tt + 1 + mt - 1,
                size: _,
                startIndex: tt + 1
              }), F++, K += mt + 1;
            }
            const st = Ka(q.sizeTree);
            return K !== j && st.shift(), st.reduce(
              (tt, { k: mt, v: L }) => {
                let Z = tt.ranges;
                return tt.prevSize !== 0 && (Z = [
                  ...tt.ranges,
                  {
                    endIndex: mt + j - 1,
                    size: tt.prevSize,
                    startIndex: tt.prevIndex
                  }
                ]), {
                  prevIndex: mt + j,
                  prevSize: L,
                  ranges: Z
                };
              },
              {
                prevIndex: j,
                prevSize: 0,
                ranges: x
              }
            ).ranges;
          }
          return Ka(q.sizeTree).reduce(
            (H, { k: K, v: F }) => ({
              prevIndex: K + j,
              prevSize: F,
              ranges: [...H.ranges, { endIndex: K + j - 1, size: H.prevSize, startIndex: H.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: _,
              ranges: []
            }
          ).ranges;
        })
      ),
      u
    );
    const W = wn(
      at(
        d,
        Zt(M, S),
        vt(([j, { offsetTree: q }, X]) => {
          const x = -j;
          return ur(x, q, X);
        })
      )
    );
    return wt(
      at(
        d,
        Zt(M, S),
        vt(([j, q, X]) => {
          if (q.groupIndices.length > 0) {
            if (be(q.sizeTree))
              return q;
            let x = Yi();
            const _ = Pe(R);
            let H = 0, K = 0, F = 0;
            for (; H < -j; ) {
              F = _[K];
              const st = _[K + 1] - F - 1;
              K++, H += st + 1;
            }
            if (x = Ka(q.sizeTree).reduce((st, { k: tt, v: mt }) => An(st, Math.max(0, tt + j), mt), x), H !== -j) {
              const st = or(q.sizeTree, F);
              x = An(x, 0, st);
              const tt = Wn(q.sizeTree, -j + 1)[1];
              x = An(x, 1, tt);
            }
            return {
              ...q,
              sizeTree: x,
              ...md(q.offsetTree, 0, x, X)
            };
          } else {
            const x = Ka(q.sizeTree).reduce((_, { k: H, v: K }) => An(_, Math.max(0, H + j), K), Yi());
            return {
              ...q,
              sizeTree: x,
              ...md(q.offsetTree, 0, x, X)
            };
          }
        })
      ),
      M
    ), {
      beforeUnshiftWith: U,
      // input
      data: T,
      defaultItemSize: y,
      firstItemIndex: p,
      fixedItemSize: h,
      gap: S,
      groupIndices: g,
      itemSize: b,
      listRefresh: O,
      shiftWith: d,
      shiftWithOffset: W,
      sizeRanges: u,
      // output
      sizes: M,
      statefulTotalCount: c,
      totalCount: r,
      trackItemSizes: w,
      unshiftWith: f
    };
  },
  Ae(wa, Ud),
  { singleton: !0 }
);
function TT(l) {
  return l.reduce(
    (i, u) => (i.groupIndices.push(i.totalCount), i.totalCount += u + 1, i),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const ay = ie(
  ([{ groupIndices: l, sizes: i, totalCount: u }, { headerHeight: r, scrollTop: c }]) => {
    const f = ee(), d = ee(), p = wn(at(f, vt(TT)));
    return wt(
      at(
        p,
        vt((g) => g.totalCount)
      ),
      u
    ), wt(
      at(
        p,
        vt((g) => g.groupIndices)
      ),
      l
    ), wt(
      at(
        Ie(c, i, r),
        Ht(([g, h]) => rs(h)),
        vt(([g, h, y]) => Wn(h.groupOffsetTree, Math.max(g - y, 0), "v")[0]),
        Ee(),
        vt((g) => [g])
      ),
      d
    ), { groupCounts: f, topItemsIndexes: d };
  },
  Ae(Sl, fn)
), Oa = ie(
  ([{ log: l }]) => {
    const i = rt(!1), u = wn(
      at(
        i,
        Ht((r) => r),
        Ee()
      )
    );
    return ce(i, (r) => {
      r && Pe(l)("props updated", {}, gn.DEBUG);
    }), { didMount: u, propsReady: i };
  },
  Ae(wa),
  { singleton: !0 }
), ET = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function iy(l) {
  const i = typeof l == "number" ? { index: l } : l;
  return i.align || (i.align = "start"), (!i.behavior || !ET) && (i.behavior = "auto"), i.offset || (i.offset = 0), i;
}
const mr = ie(
  ([
    { gap: l, listRefresh: i, sizes: u, totalCount: r },
    {
      fixedFooterHeight: c,
      fixedHeaderHeight: f,
      footerHeight: d,
      headerHeight: p,
      scrollingInProgress: g,
      scrollTo: h,
      smoothScrollTargetReached: y,
      viewportHeight: b
    },
    { log: T }
  ]) => {
    const S = ee(), C = ee(), M = rt(0);
    let R = null, w = null, O = null;
    function U() {
      R && (R(), R = null), O && (O(), O = null), w && (clearTimeout(w), w = null), Vt(g, !1);
    }
    return wt(
      at(
        S,
        Zt(u, b, r, M, p, d, T),
        Zt(l, f, c),
        vt(
          ([
            [W, j, q, X, x, _, H, K],
            F,
            st,
            tt
          ]) => {
            const mt = iy(W), { align: L, behavior: Z, offset: nt } = mt, lt = X - 1, E = ly(mt, j, lt);
            let D = ur(E, j.offsetTree, F) + _;
            L === "end" ? (D += st + Wn(j.sizeTree, E)[1] - q + tt, E === lt && (D += H)) : L === "center" ? D += (st + Wn(j.sizeTree, E)[1] - q + tt) / 2 : D -= x, nt && (D += nt);
            const $ = (I) => {
              U(), I ? (K("retrying to scroll to", { location: W }, gn.DEBUG), Vt(S, W)) : (Vt(C, !0), K("list did not change, scroll successful", {}, gn.DEBUG));
            };
            if (U(), Z === "smooth") {
              let I = !1;
              O = ce(i, (ct) => {
                I = I || ct;
              }), R = vl(y, () => {
                $(I);
              });
            } else
              R = vl(at(i, _T(150)), $);
            return w = setTimeout(() => {
              U();
            }, 1200), Vt(g, !0), K("scrolling from index to", { behavior: Z, index: E, top: D }, gn.DEBUG), { behavior: Z, top: D };
          }
        )
      ),
      h
    ), {
      scrollTargetReached: C,
      scrollToIndex: S,
      topListHeight: M
    };
  },
  Ae(Sl, fn, wa),
  { singleton: !0 }
);
function _T(l) {
  return (i) => {
    const u = setTimeout(() => {
      i(!1);
    }, l);
    return (r) => {
      r && (i(!0), clearTimeout(u));
    };
  };
}
function Bd(l, i) {
  l == 0 ? i() : requestAnimationFrame(() => {
    Bd(l - 1, i);
  });
}
function qd(l, i) {
  const u = i - 1;
  return typeof l == "number" ? l : l.index === "LAST" ? u : l.index;
}
const pr = ie(
  ([{ defaultItemSize: l, listRefresh: i, sizes: u }, { scrollTop: r }, { scrollTargetReached: c, scrollToIndex: f }, { didMount: d }]) => {
    const p = rt(!0), g = rt(0), h = rt(!0);
    return wt(
      at(
        d,
        Zt(g),
        Ht(([y, b]) => !!b),
        dl(!1)
      ),
      p
    ), wt(
      at(
        d,
        Zt(g),
        Ht(([y, b]) => !!b),
        dl(!1)
      ),
      h
    ), ce(
      at(
        Ie(i, d),
        Zt(p, u, l, h),
        Ht(([[, y], b, { sizeTree: T }, S, C]) => y && (!be(T) || Nd(S)) && !b && !C),
        Zt(g)
      ),
      ([, y]) => {
        vl(c, () => {
          Vt(h, !0);
        }), Bd(4, () => {
          vl(r, () => {
            Vt(p, !0);
          }), Vt(f, y);
        });
      }
    ), {
      initialItemFinalLocationReached: h,
      initialTopMostItemIndex: g,
      scrolledToInitialItem: p
    };
  },
  Ae(Sl, fn, mr, Oa),
  { singleton: !0 }
);
function oy(l, i) {
  return Math.abs(l - i) < 1.01;
}
const sr = "up", tr = "down", AT = "none", wT = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, OT = 0, gr = ie(([{ footerHeight: l, headerHeight: i, scrollBy: u, scrollContainerState: r, scrollTop: c, viewportHeight: f }]) => {
  const d = rt(!1), p = rt(!0), g = ee(), h = ee(), y = rt(4), b = rt(OT), T = rn(
    at(
      C0(at(jt(c), Xi(1), dl(!0)), at(jt(c), Xi(1), dl(!1), R0(100))),
      Ee()
    ),
    !1
  ), S = rn(
    at(C0(at(u, dl(!0)), at(u, dl(!1), R0(200))), Ee()),
    !1
  );
  wt(
    at(
      Ie(jt(c), jt(b)),
      vt(([O, U]) => O <= U),
      Ee()
    ),
    p
  ), wt(at(p, ya(50)), h);
  const C = wn(
    at(
      Ie(r, jt(f), jt(i), jt(l), jt(y)),
      pl((O, [{ scrollHeight: U, scrollTop: W }, j, q, X, x]) => {
        const _ = W + j - U > -x, H = {
          scrollHeight: U,
          scrollTop: W,
          viewportHeight: j
        };
        if (_) {
          let F, st;
          return W > O.state.scrollTop ? (F = "SCROLLED_DOWN", st = O.state.scrollTop - W) : (F = "SIZE_DECREASED", st = O.state.scrollTop - W || O.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: F,
            scrollTopDelta: st,
            state: H
          };
        }
        let K;
        return H.scrollHeight > O.state.scrollHeight ? K = "SIZE_INCREASED" : j < O.state.viewportHeight ? K = "VIEWPORT_HEIGHT_DECREASING" : W < O.state.scrollTop ? K = "SCROLLING_UPWARDS" : K = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: K,
          state: H
        };
      }, wT),
      Ee((O, U) => O && O.atBottom === U.atBottom)
    )
  ), M = rn(
    at(
      r,
      pl(
        (O, { scrollHeight: U, scrollTop: W, viewportHeight: j }) => {
          if (oy(O.scrollHeight, U))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: U,
              scrollTop: W
            };
          {
            const q = U - (W + j) < 1;
            return O.scrollTop !== W && q ? {
              changed: !0,
              jump: O.scrollTop - W,
              scrollHeight: U,
              scrollTop: W
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: U,
              scrollTop: W
            };
          }
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      Ht((O) => O.changed),
      vt((O) => O.jump)
    ),
    0
  );
  wt(
    at(
      C,
      vt((O) => O.atBottom)
    ),
    d
  ), wt(at(d, ya(50)), g);
  const R = rt(tr);
  wt(
    at(
      r,
      vt(({ scrollTop: O }) => O),
      Ee(),
      pl(
        (O, U) => Pe(S) ? { direction: O.direction, prevScrollTop: U } : { direction: U < O.prevScrollTop ? sr : tr, prevScrollTop: U },
        { direction: tr, prevScrollTop: 0 }
      ),
      vt((O) => O.direction)
    ),
    R
  ), wt(at(r, ya(50), dl(AT)), R);
  const w = rt(0);
  return wt(
    at(
      T,
      Ht((O) => !O),
      dl(0)
    ),
    w
  ), wt(
    at(
      c,
      ya(100),
      Zt(T),
      Ht(([O, U]) => !!U),
      pl(([O, U], [W]) => [U, W], [0, 0]),
      vt(([O, U]) => U - O)
    ),
    w
  ), {
    atBottomState: C,
    atBottomStateChange: g,
    atBottomThreshold: y,
    atTopStateChange: h,
    atTopThreshold: b,
    isAtBottom: d,
    isAtTop: p,
    isScrolling: T,
    lastJumpDueToItemResize: M,
    scrollDirection: R,
    scrollVelocity: w
  };
}, Ae(fn)), Zu = "top", Ku = "bottom", N0 = "none";
function H0(l, i, u) {
  return typeof l == "number" ? u === sr && i === Zu || u === tr && i === Ku ? l : 0 : u === sr ? i === Zu ? l.main : l.reverse : i === Ku ? l.main : l.reverse;
}
function j0(l, i) {
  var u;
  return typeof l == "number" ? l : (u = l[i]) != null ? u : 0;
}
const Yd = ie(
  ([{ deviation: l, fixedHeaderHeight: i, headerHeight: u, scrollTop: r, viewportHeight: c }]) => {
    const f = ee(), d = rt(0), p = rt(0), g = rt(0), h = rn(
      at(
        Ie(
          jt(r),
          jt(c),
          jt(u),
          jt(f, rr),
          jt(g),
          jt(d),
          jt(i),
          jt(l),
          jt(p)
        ),
        vt(
          ([
            y,
            b,
            T,
            [S, C],
            M,
            R,
            w,
            O,
            U
          ]) => {
            const W = y - O, j = R + w, q = Math.max(T - W, 0);
            let X = N0;
            const x = j0(U, Zu), _ = j0(U, Ku);
            return S -= O, S += T + w, C += T + w, C -= O, S > y + j - x && (X = sr), C < y - q + b + _ && (X = tr), X !== N0 ? [
              Math.max(W - T - H0(M, Zu, X) - x, 0),
              W - q - w + b + H0(M, Ku, X) + _
            ] : null;
          }
        ),
        Ht((y) => y != null),
        Ee(rr)
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
  Ae(fn),
  { singleton: !0 }
);
function RT(l, i, u) {
  if (rs(i)) {
    const r = ny(l, i);
    return [
      { index: Wn(i.groupOffsetTree, r)[0], offset: 0, size: 0 },
      { data: u == null ? void 0 : u[0], index: r, offset: 0, size: 0 }
    ];
  }
  return [{ data: u == null ? void 0 : u[0], index: l, offset: 0, size: 0 }];
}
const Uf = {
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
function Gu(l, i, u, r, c, f) {
  const { lastIndex: d, lastOffset: p, lastSize: g } = c;
  let h = 0, y = 0;
  if (l.length > 0) {
    h = l[0].offset;
    const M = l[l.length - 1];
    y = M.offset + M.size;
  }
  const b = u - d, T = p + b * g + (b - 1) * r, S = h, C = T - y;
  return {
    bottom: y,
    firstItemIndex: f,
    items: L0(l, c, f),
    offsetBottom: C,
    offsetTop: h,
    top: S,
    topItems: L0(i, c, f),
    topListHeight: i.reduce((M, R) => R.size + M, 0),
    totalCount: u
  };
}
function ry(l, i, u, r, c, f) {
  let d = 0;
  if (u.groupIndices.length > 0)
    for (const y of u.groupIndices) {
      if (y - d >= l)
        break;
      d++;
    }
  const p = l + d, g = qd(i, p), h = Array.from({ length: p }).map((y, b) => ({
    data: f[b + g],
    index: b + g,
    offset: 0,
    size: 0
  }));
  return Gu(h, [], p, c, u, r);
}
function L0(l, i, u) {
  if (l.length === 0)
    return [];
  if (!rs(i))
    return l.map((h) => ({ ...h, index: h.index + u, originalIndex: h.index }));
  const r = l[0].index, c = l[l.length - 1].index, f = [], d = os(i.groupOffsetTree, r, c);
  let p, g = 0;
  for (const h of l) {
    (!p || p.end < h.index) && (p = d.shift(), g = i.groupIndices.indexOf(p.start));
    let y;
    h.index === p.start ? y = {
      index: g,
      type: "group"
    } : y = {
      groupIndex: g,
      index: h.index - (g + 1) + u
    }, f.push({
      ...y,
      data: h.data,
      offset: h.offset,
      originalIndex: h.index,
      size: h.size
    });
  }
  return f;
}
const ti = ie(
  ([
    { data: l, firstItemIndex: i, gap: u, sizes: r, totalCount: c },
    f,
    { listBoundary: d, topListHeight: p, visibleRange: g },
    { initialTopMostItemIndex: h, scrolledToInitialItem: y },
    { topListHeight: b },
    T,
    { didMount: S },
    { recalcInProgress: C }
  ]) => {
    const M = rt([]), R = rt(0), w = ee();
    wt(f.topItemsIndexes, M);
    const O = rn(
      at(
        Ie(
          S,
          C,
          jt(g, rr),
          jt(c),
          jt(r),
          jt(h),
          y,
          jt(M),
          jt(i),
          jt(u),
          l
        ),
        Ht(([q, X, , x, , , , , , , _]) => {
          const H = _ && _.length !== x;
          return q && !X && !H;
        }),
        vt(
          ([
            ,
            ,
            [q, X],
            x,
            _,
            H,
            K,
            F,
            st,
            tt,
            mt
          ]) => {
            const L = _, { offsetTree: Z, sizeTree: nt } = L, lt = Pe(R);
            if (x === 0)
              return { ...Uf, totalCount: x };
            if (q === 0 && X === 0)
              return lt === 0 ? { ...Uf, totalCount: x } : ry(lt, H, _, st, tt, mt || []);
            if (be(nt))
              return lt > 0 ? null : Gu(
                RT(qd(H, x), L, mt),
                [],
                x,
                tt,
                L,
                st
              );
            const E = [];
            if (F.length > 0) {
              const gt = F[0], ht = F[F.length - 1];
              let kt = 0;
              for (const Y of os(nt, gt, ht)) {
                const ut = Y.value, St = Math.max(Y.start, gt), pt = Math.min(Y.end, ht);
                for (let At = St; At <= pt; At++)
                  E.push({ data: mt == null ? void 0 : mt[At], index: At, offset: kt, size: ut }), kt += ut;
              }
            }
            if (!K)
              return Gu([], E, x, tt, L, st);
            const D = F.length > 0 ? F[F.length - 1] + 1 : 0, $ = gT(Z, q, X, D);
            if ($.length === 0)
              return null;
            const I = x - 1, ct = is([], (gt) => {
              for (const ht of $) {
                const kt = ht.value;
                let Y = kt.offset, ut = ht.start;
                const St = kt.size;
                if (kt.offset < q) {
                  ut += Math.floor((q - kt.offset + tt) / (St + tt));
                  const At = ut - ht.start;
                  Y += At * St + At * tt;
                }
                ut < D && (Y += (D - ut) * St, ut = D);
                const pt = Math.min(ht.end, I);
                for (let At = ut; At <= pt && !(Y >= X); At++)
                  gt.push({ data: mt == null ? void 0 : mt[At], index: At, offset: Y, size: St }), Y += St + tt;
              }
            });
            return Gu(ct, E, x, tt, L, st);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        Ht((q) => q !== null),
        Ee()
      ),
      Uf
    );
    wt(
      at(
        l,
        Ht(Nd),
        vt((q) => q == null ? void 0 : q.length)
      ),
      c
    ), wt(
      at(
        O,
        vt((q) => q.topListHeight)
      ),
      b
    ), wt(b, p), wt(
      at(
        O,
        vt((q) => [q.top, q.bottom])
      ),
      d
    ), wt(
      at(
        O,
        vt((q) => q.items)
      ),
      w
    );
    const U = wn(
      at(
        O,
        Ht(({ items: q }) => q.length > 0),
        Zt(c, l),
        Ht(([{ items: q }, X]) => q[q.length - 1].originalIndex === X - 1),
        vt(([, q, X]) => [q - 1, X]),
        Ee(rr),
        vt(([q]) => q)
      )
    ), W = wn(
      at(
        O,
        ya(200),
        Ht(({ items: q, topItems: X }) => q.length > 0 && q[0].originalIndex === X.length),
        vt(({ items: q }) => q[0].index),
        Ee()
      )
    ), j = wn(
      at(
        O,
        Ht(({ items: q }) => q.length > 0),
        vt(({ items: q }) => {
          let X = 0, x = q.length - 1;
          for (; q[X].type === "group" && X < x; )
            X++;
          for (; q[x].type === "group" && x > X; )
            x--;
          return {
            endIndex: q[x].index,
            startIndex: q[X].index
          };
        }),
        Ee(ty)
      )
    );
    return { endReached: U, initialItemCount: R, itemsRendered: w, listState: O, rangeChanged: j, startReached: W, topItemsIndexes: M, ...T };
  },
  Ae(
    Sl,
    ay,
    Yd,
    pr,
    mr,
    gr,
    Oa,
    Ud
  ),
  { singleton: !0 }
), uy = ie(
  ([{ fixedFooterHeight: l, fixedHeaderHeight: i, footerHeight: u, headerHeight: r }, { listState: c }]) => {
    const f = ee(), d = rn(
      at(
        Ie(u, l, r, i, c),
        vt(([p, g, h, y, b]) => p + g + h + y + b.offsetBottom + b.bottom)
      ),
      0
    );
    return wt(jt(d), f), { totalListHeight: d, totalListHeightChanged: f };
  },
  Ae(fn, ti),
  { singleton: !0 }
), CT = ie(
  ([{ viewportHeight: l }, { totalListHeight: i }]) => {
    const u = rt(!1), r = rn(
      at(
        Ie(u, l, i),
        Ht(([c]) => c),
        vt(([, c, f]) => Math.max(0, c - f)),
        ya(0),
        Ee()
      ),
      0
    );
    return { alignToBottom: u, paddingTopAddition: r };
  },
  Ae(fn, uy),
  { singleton: !0 }
);
function U0(l) {
  return l ? l === "smooth" ? "smooth" : "auto" : !1;
}
const zT = (l, i) => typeof l == "function" ? U0(l(i)) : i && U0(l), MT = ie(
  ([
    { listRefresh: l, totalCount: i, fixedItemSize: u },
    { atBottomState: r, isAtBottom: c },
    { scrollToIndex: f },
    { scrolledToInitialItem: d },
    { didMount: p, propsReady: g },
    { log: h },
    { scrollingInProgress: y }
  ]) => {
    const b = rt(!1), T = ee();
    let S = null;
    function C(R) {
      Vt(f, {
        align: "end",
        behavior: R,
        index: "LAST"
      });
    }
    ce(
      at(
        Ie(at(jt(i), Xi(1)), p),
        Zt(jt(b), c, d, y),
        vt(([[R, w], O, U, W, j]) => {
          let q = w && W, X = "auto";
          return q && (X = zT(O, U || j), q = q && !!X), { followOutputBehavior: X, shouldFollow: q, totalCount: R };
        }),
        Ht(({ shouldFollow: R }) => R)
      ),
      ({ followOutputBehavior: R, totalCount: w }) => {
        S && (S(), S = null), Pe(u) ? requestAnimationFrame(() => {
          Pe(h)("following output to ", { totalCount: w }, gn.DEBUG), C(R);
        }) : S = vl(l, () => {
          Pe(h)("following output to ", { totalCount: w }, gn.DEBUG), C(R), S = null;
        });
      }
    );
    function M(R) {
      const w = vl(r, (O) => {
        R && !O.atBottom && O.notAtBottomBecause === "SIZE_INCREASED" && !S && (Pe(h)("scrolling to bottom due to increased size", {}, gn.DEBUG), C("auto"));
      });
      setTimeout(w, 100);
    }
    return ce(
      at(
        Ie(jt(b), i, g),
        Ht(([R, , w]) => R && w),
        pl(
          ({ value: R }, [, w]) => ({ refreshed: R === w, value: w }),
          { refreshed: !1, value: 0 }
        ),
        Ht(({ refreshed: R }) => R),
        Zt(b, i)
      ),
      ([, R]) => {
        Pe(d) && M(R !== !1);
      }
    ), ce(T, () => {
      M(Pe(b) !== !1);
    }), ce(Ie(jt(b), r), ([R, w]) => {
      R && !w.atBottom && w.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && C("auto");
    }), { autoscrollToBottom: T, followOutput: b };
  },
  Ae(Sl, gr, mr, pr, Oa, wa, fn)
), DT = ie(
  ([{ data: l, firstItemIndex: i, gap: u, sizes: r }, { initialTopMostItemIndex: c }, { initialItemCount: f, listState: d }, { didMount: p }]) => (wt(
    at(
      p,
      Zt(f),
      Ht(([, g]) => g !== 0),
      Zt(c, r, i, u, l),
      vt(([[, g], h, y, b, T, S = []]) => ry(g, h, y, b, T, S))
    ),
    d
  ), {}),
  Ae(Sl, pr, ti, Oa),
  { singleton: !0 }
), NT = ie(
  ([{ didMount: l }, { scrollTo: i }, { listState: u }]) => {
    const r = rt(0);
    return ce(
      at(
        l,
        Zt(r),
        Ht(([, c]) => c !== 0),
        vt(([, c]) => ({ top: c }))
      ),
      (c) => {
        vl(
          at(
            u,
            Xi(1),
            Ht((f) => f.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              Vt(i, c);
            });
          }
        );
      }
    ), {
      initialScrollTop: r
    };
  },
  Ae(Oa, fn, ti),
  { singleton: !0 }
), HT = ({
  itemBottom: l,
  itemTop: i,
  locationParams: { align: u, behavior: r, ...c },
  viewportBottom: f,
  viewportTop: d
}) => i < d ? { ...c, align: u ?? "start", behavior: r } : l > f ? { ...c, align: u ?? "end", behavior: r } : null, jT = ie(
  ([
    { gap: l, sizes: i, totalCount: u },
    { fixedFooterHeight: r, fixedHeaderHeight: c, headerHeight: f, scrollingInProgress: d, scrollTop: p, viewportHeight: g },
    { scrollToIndex: h }
  ]) => {
    const y = ee();
    return wt(
      at(
        y,
        Zt(i, g, u, f, c, r, p),
        Zt(l),
        vt(([[b, T, S, C, M, R, w, O], U]) => {
          const { align: W, behavior: j, calculateViewLocation: q = HT, done: X, ...x } = b, _ = ly(b, T, C - 1), H = ur(_, T.offsetTree, U) + M + R, K = H + Wn(T.sizeTree, _)[1], F = O + R, st = O + S - w, tt = q({
            itemBottom: K,
            itemTop: H,
            locationParams: { align: W, behavior: j, ...x },
            viewportBottom: st,
            viewportTop: F
          });
          return tt ? X && vl(
            at(
              d,
              Ht((mt) => !mt),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              Xi(Pe(d) ? 1 : 2)
            ),
            X
          ) : X && X(), tt;
        }),
        Ht((b) => b !== null)
      ),
      h
    ), {
      scrollIntoView: y
    };
  },
  Ae(Sl, fn, mr, ti, wa),
  { singleton: !0 }
), sy = ie(
  ([{ scrollVelocity: l }]) => {
    const i = rt(!1), u = ee(), r = rt(!1);
    return wt(
      at(
        l,
        Zt(r, i, u),
        Ht(([c, f]) => !!f),
        vt(([c, f, d, p]) => {
          const { enter: g, exit: h } = f;
          if (d) {
            if (h(c, p))
              return !1;
          } else if (g(c, p))
            return !0;
          return d;
        }),
        Ee()
      ),
      i
    ), ce(
      at(Ie(i, l, u), Zt(r)),
      ([[c, f, d], p]) => {
        c && p && p.change && p.change(f, d);
      }
    ), { isSeeking: i, scrollSeekConfiguration: r, scrollSeekRangeChanged: u, scrollVelocity: l };
  },
  Ae(gr),
  { singleton: !0 }
), Gd = ie(([{ scrollContainerState: l, scrollTo: i }]) => {
  const u = ee(), r = ee(), c = ee(), f = rt(!1), d = rt(void 0);
  return wt(
    at(
      Ie(u, r),
      vt(([{ scrollHeight: p, scrollTop: g, viewportHeight: h }, { offsetTop: y }]) => ({
        scrollHeight: p,
        scrollTop: Math.max(0, g - y),
        viewportHeight: h
      }))
    ),
    l
  ), wt(
    at(
      i,
      Zt(r),
      vt(([p, { offsetTop: g }]) => ({
        ...p,
        top: p.top + g
      }))
    ),
    c
  ), {
    customScrollParent: d,
    // config
    useWindowScroll: f,
    // input
    windowScrollContainerState: u,
    // signals
    windowScrollTo: c,
    windowViewportRect: r
  };
}, Ae(fn)), LT = ie(
  ([
    { sizeRanges: l, sizes: i },
    { headerHeight: u, scrollTop: r },
    { initialTopMostItemIndex: c },
    { didMount: f },
    { useWindowScroll: d, windowScrollContainerState: p, windowViewportRect: g }
  ]) => {
    const h = ee(), y = rt(void 0), b = rt(null), T = rt(null);
    return wt(p, b), wt(g, T), ce(
      at(
        h,
        Zt(i, r, d, b, T, u)
      ),
      ([S, C, M, R, w, O, U]) => {
        const W = yT(C.sizeTree);
        R && w !== null && O !== null && (M = w.scrollTop - O.offsetTop), M -= U, S({ ranges: W, scrollTop: M });
      }
    ), wt(at(y, Ht(Nd), vt(UT)), c), wt(
      at(
        f,
        Zt(y),
        Ht(([, S]) => S !== void 0),
        Ee(),
        vt(([, S]) => S.ranges)
      ),
      l
    ), {
      getState: h,
      restoreStateFrom: y
    };
  },
  Ae(Sl, fn, pr, Oa, Gd)
);
function UT(l) {
  return { align: "start", index: 0, offset: l.scrollTop };
}
const kT = ie(([{ topItemsIndexes: l }]) => {
  const i = rt(0);
  return wt(
    at(
      i,
      Ht((u) => u >= 0),
      vt((u) => Array.from({ length: u }).map((r, c) => c))
    ),
    l
  ), { topItemCount: i };
}, Ae(ti));
function cy(l) {
  let i = !1, u;
  return () => (i || (i = !0, u = l()), u);
}
const BT = cy(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), qT = ie(
  ([
    { deviation: l, scrollBy: i, scrollingInProgress: u, scrollTop: r },
    { isAtBottom: c, isScrolling: f, lastJumpDueToItemResize: d, scrollDirection: p },
    { listState: g },
    { beforeUnshiftWith: h, gap: y, shiftWithOffset: b, sizes: T },
    { log: S },
    { recalcInProgress: C }
  ]) => {
    const M = wn(
      at(
        g,
        Zt(d),
        pl(
          ([, w, O, U], [{ bottom: W, items: j, offsetBottom: q, totalCount: X }, x]) => {
            const _ = W + q;
            let H = 0;
            return O === X && w.length > 0 && j.length > 0 && (j[0].originalIndex === 0 && w[0].originalIndex === 0 || (H = _ - U, H !== 0 && (H += x))), [H, j, X, _];
          },
          [0, [], 0, 0]
        ),
        Ht(([w]) => w !== 0),
        Zt(r, p, u, c, S, C),
        Ht(([, w, O, U, , , W]) => !W && !U && w !== 0 && O === sr),
        vt(([[w], , , , , O]) => (O("Upward scrolling compensation", { amount: w }, gn.DEBUG), w))
      )
    );
    function R(w) {
      w > 0 ? (Vt(i, { behavior: "auto", top: -w }), Vt(l, 0)) : (Vt(l, 0), Vt(i, { behavior: "auto", top: -w }));
    }
    return ce(at(M, Zt(l, f)), ([w, O, U]) => {
      U && BT() ? Vt(l, O - w) : R(-w);
    }), ce(
      at(
        Ie(rn(f, !1), l, C),
        Ht(([w, O, U]) => !w && !U && O !== 0),
        vt(([w, O]) => O),
        ya(1)
      ),
      R
    ), wt(
      at(
        b,
        vt((w) => ({ top: -w }))
      ),
      i
    ), ce(
      at(
        h,
        Zt(T, y),
        vt(([w, { groupIndices: O, lastSize: U, sizeTree: W }, j]) => {
          function q(X) {
            return X * (U + j);
          }
          if (O.length === 0)
            return q(w);
          {
            let X = 0;
            const x = or(W, 0);
            let _ = 0, H = 0;
            for (; _ < w; ) {
              _++, X += x;
              let K = O.length === H + 1 ? 1 / 0 : O[H + 1] - O[H] - 1;
              _ + K > w && (X -= x, K = w - _ + 1), _ += K, X += q(K), H++;
            }
            return X;
          }
        })
      ),
      (w) => {
        Vt(l, w), requestAnimationFrame(() => {
          Vt(i, { top: w }), requestAnimationFrame(() => {
            Vt(l, 0), Vt(C, !1);
          });
        });
      }
    ), { deviation: l };
  },
  Ae(fn, gr, ti, Sl, wa, Ud)
), YT = ie(
  ([
    l,
    i,
    u,
    r,
    c,
    f,
    d,
    p,
    g,
    h
  ]) => ({
    ...l,
    ...i,
    ...u,
    ...r,
    ...c,
    ...f,
    ...d,
    ...p,
    ...g,
    ...h
  }),
  Ae(
    Yd,
    DT,
    Oa,
    sy,
    uy,
    NT,
    CT,
    Gd,
    jT,
    wa
  )
), fy = ie(
  ([
    {
      data: l,
      defaultItemSize: i,
      firstItemIndex: u,
      fixedItemSize: r,
      gap: c,
      groupIndices: f,
      itemSize: d,
      sizeRanges: p,
      sizes: g,
      statefulTotalCount: h,
      totalCount: y,
      trackItemSizes: b
    },
    { initialItemFinalLocationReached: T, initialTopMostItemIndex: S, scrolledToInitialItem: C },
    M,
    R,
    w,
    { listState: O, topItemsIndexes: U, ...W },
    { scrollToIndex: j },
    q,
    { topItemCount: X },
    { groupCounts: x },
    _
  ]) => (wt(W.rangeChanged, _.scrollSeekRangeChanged), wt(
    at(
      _.windowViewportRect,
      vt((H) => H.visibleHeight)
    ),
    M.viewportHeight
  ), {
    data: l,
    defaultItemHeight: i,
    firstItemIndex: u,
    fixedItemHeight: r,
    gap: c,
    groupCounts: x,
    initialItemFinalLocationReached: T,
    initialTopMostItemIndex: S,
    scrolledToInitialItem: C,
    sizeRanges: p,
    topItemCount: X,
    topItemsIndexes: U,
    // input
    totalCount: y,
    ...w,
    groupIndices: f,
    itemSize: d,
    listState: O,
    scrollToIndex: j,
    // output
    statefulTotalCount: h,
    trackItemSizes: b,
    // exported from stateFlagsSystem
    ...W,
    // the bag of IO from featureGroup1System
    ..._,
    ...M,
    sizes: g,
    ...R
  }),
  Ae(
    Sl,
    pr,
    fn,
    LT,
    MT,
    ti,
    mr,
    qT,
    kT,
    ay,
    YT
  )
);
function GT(l, i) {
  const u = {}, r = {};
  let c = 0;
  const f = l.length;
  for (; c < f; )
    r[l[c]] = 1, c += 1;
  for (const d in i)
    Object.hasOwn(r, d) || (u[d] = i[d]);
  return u;
}
const Hu = typeof document < "u" ? ft.useLayoutEffect : ft.useEffect;
function Vd(l, i, u) {
  const r = Object.keys(i.required || {}), c = Object.keys(i.optional || {}), f = Object.keys(i.methods || {}), d = Object.keys(i.events || {}), p = ft.createContext({});
  function g(R, w) {
    R.propsReady && Vt(R.propsReady, !1);
    for (const O of r) {
      const U = R[i.required[O]];
      Vt(U, w[O]);
    }
    for (const O of c)
      if (O in w) {
        const U = R[i.optional[O]];
        Vt(U, w[O]);
      }
    R.propsReady && Vt(R.propsReady, !0);
  }
  function h(R) {
    return f.reduce((w, O) => (w[O] = (U) => {
      const W = R[i.methods[O]];
      Vt(W, U);
    }, w), {});
  }
  function y(R) {
    return d.reduce((w, O) => (w[O] = aT(R[i.events[O]]), w), {});
  }
  const b = ft.forwardRef((R, w) => {
    const { children: O, ...U } = R, [W] = ft.useState(() => is(oT(l), (X) => {
      g(X, U);
    })), [j] = ft.useState(O0(y, W));
    Hu(() => {
      for (const X of d)
        X in U && ce(j[X], U[X]);
      return () => {
        Object.values(j).map(Hd);
      };
    }, [U, j, W]), Hu(() => {
      g(W, U);
    }), ft.useImperativeHandle(w, w0(h(W)));
    const q = u;
    return /* @__PURE__ */ G.jsx(p.Provider, { value: W, children: u ? /* @__PURE__ */ G.jsx(q, { ...GT([...r, ...c, ...d], U), children: O }) : O });
  }), T = (R) => {
    const w = ft.useContext(p);
    return ft.useCallback(
      (O) => {
        Vt(w[R], O);
      },
      [w, R]
    );
  }, S = (R) => {
    const w = ft.useContext(p)[R], O = ft.useCallback(
      (U) => ce(w, U),
      [w]
    );
    return ft.useSyncExternalStore(
      O,
      () => Pe(w),
      () => Pe(w)
    );
  }, C = (R) => {
    const w = ft.useContext(p)[R], [O, U] = ft.useState(O0(Pe, w));
    return Hu(
      () => ce(w, (W) => {
        W !== O && U(w0(W));
      }),
      [w, O]
    ), O;
  }, M = ft.version.startsWith("18") ? S : C;
  return {
    Component: b,
    useEmitter: (R, w) => {
      const O = ft.useContext(p)[R];
      Hu(() => ce(O, w), [w, O]);
    },
    useEmitterValue: M,
    usePublisher: T
  };
}
const us = ft.createContext(void 0), dy = ft.createContext(void 0), hy = typeof document < "u" ? ft.useLayoutEffect : ft.useEffect;
function kf(l) {
  return "self" in l;
}
function VT(l) {
  return "body" in l;
}
function my(l, i, u, r = Fi, c, f) {
  const d = ft.useRef(null), p = ft.useRef(null), g = ft.useRef(null), h = ft.useCallback(
    (T) => {
      let S, C, M;
      const R = T.target;
      if (VT(R) || kf(R)) {
        const O = kf(R) ? R : R.defaultView;
        M = f ? O.scrollX : O.scrollY, S = f ? O.document.documentElement.scrollWidth : O.document.documentElement.scrollHeight, C = f ? O.innerWidth : O.innerHeight;
      } else
        M = f ? R.scrollLeft : R.scrollTop, S = f ? R.scrollWidth : R.scrollHeight, C = f ? R.offsetWidth : R.offsetHeight;
      const w = () => {
        l({
          scrollHeight: S,
          scrollTop: Math.max(M, 0),
          viewportHeight: C
        });
      };
      T.suppressFlushSync ? w() : $x.flushSync(w), p.current !== null && (M === p.current || M <= 0 || M === S - C) && (p.current = null, i(!0), g.current && (clearTimeout(g.current), g.current = null));
    },
    [l, i, f]
  );
  ft.useEffect(() => {
    const T = c || d.current;
    return r(c || d.current), h({ suppressFlushSync: !0, target: T }), T.addEventListener("scroll", h, { passive: !0 }), () => {
      r(null), T.removeEventListener("scroll", h);
    };
  }, [d, h, u, r, c]);
  function y(T) {
    const S = d.current;
    if (!S || (f ? "offsetWidth" in S && S.offsetWidth === 0 : "offsetHeight" in S && S.offsetHeight === 0))
      return;
    const C = T.behavior === "smooth";
    let M, R, w;
    kf(S) ? (R = Math.max(
      $n(S.document.documentElement, f ? "width" : "height"),
      f ? S.document.documentElement.scrollWidth : S.document.documentElement.scrollHeight
    ), M = f ? S.innerWidth : S.innerHeight, w = f ? window.scrollX : window.scrollY) : (R = S[f ? "scrollWidth" : "scrollHeight"], M = $n(S, f ? "width" : "height"), w = S[f ? "scrollLeft" : "scrollTop"]);
    const O = R - M;
    if (T.top = Math.ceil(Math.max(Math.min(O, T.top), 0)), oy(M, R) || T.top === w) {
      l({ scrollHeight: R, scrollTop: w, viewportHeight: M }), C && i(!0);
      return;
    }
    C ? (p.current = T.top, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
      g.current = null, p.current = null, i(!0);
    }, 1e3)) : p.current = null, f && (T = { behavior: T.behavior, left: T.top }), S.scrollTo(T);
  }
  function b(T) {
    f && (T = { behavior: T.behavior, left: T.top }), d.current.scrollBy(T);
  }
  return { scrollByCallback: b, scrollerRef: d, scrollToCallback: y };
}
const Bf = "-webkit-sticky", k0 = "sticky", Xd = cy(() => {
  if (typeof document > "u")
    return k0;
  const l = document.createElement("div");
  return l.style.position = Bf, l.style.position === Bf ? Bf : k0;
});
function Qd(l) {
  return l;
}
const XT = /* @__PURE__ */ ie(() => {
  const l = rt((g) => `Item ${g}`), i = rt(null), u = rt((g) => `Group ${g}`), r = rt({}), c = rt(Qd), f = rt("div"), d = rt(Fi), p = (g, h = null) => rn(
    at(
      r,
      vt((y) => y[g]),
      Ee()
    ),
    h
  );
  return {
    components: r,
    computeItemKey: c,
    context: i,
    EmptyPlaceholder: p("EmptyPlaceholder"),
    FooterComponent: p("Footer"),
    GroupComponent: p("Group", "div"),
    groupContent: u,
    HeaderComponent: p("Header"),
    HeaderFooterTag: f,
    ItemComponent: p("Item", "div"),
    itemContent: l,
    ListComponent: p("List", "div"),
    ScrollerComponent: p("Scroller", "div"),
    scrollerRef: d,
    ScrollSeekPlaceholder: p("ScrollSeekPlaceholder"),
    TopItemListComponent: p("TopItemList")
  };
}), QT = /* @__PURE__ */ ie(
  ([l, i]) => ({ ...l, ...i }),
  Ae(fy, XT)
), IT = ({ height: l }) => /* @__PURE__ */ G.jsx("div", { style: { height: l } }), ZT = { overflowAnchor: "none", position: Xd(), zIndex: 1 }, py = { overflowAnchor: "none" }, KT = { ...py, display: "inline-block", height: "100%" }, B0 = /* @__PURE__ */ ft.memo(function({ showTopList: l = !1 }) {
  const i = Ut("listState"), u = Vn("sizeRanges"), r = Ut("useWindowScroll"), c = Ut("customScrollParent"), f = Vn("windowScrollContainerState"), d = Vn("scrollContainerState"), p = c || r ? f : d, g = Ut("itemContent"), h = Ut("context"), y = Ut("groupContent"), b = Ut("trackItemSizes"), T = Ut("itemSize"), S = Ut("log"), C = Vn("gap"), M = Ut("horizontalDirection"), { callbackRef: R } = Kv(
    u,
    T,
    b,
    l ? Fi : p,
    S,
    C,
    c,
    M,
    Ut("skipAnimationFrameInResizeObserver")
  ), [w, O] = ft.useState(0);
  Kd("deviation", (tt) => {
    w !== tt && O(tt);
  });
  const U = Ut("EmptyPlaceholder"), W = Ut("ScrollSeekPlaceholder") || IT, j = Ut("ListComponent"), q = Ut("ItemComponent"), X = Ut("GroupComponent"), x = Ut("computeItemKey"), _ = Ut("isSeeking"), H = Ut("groupIndices").length > 0, K = Ut("alignToBottom"), F = Ut("initialItemFinalLocationReached"), st = l ? {} : {
    boxSizing: "border-box",
    ...M ? {
      display: "inline-block",
      height: "100%",
      marginLeft: w !== 0 ? w : K ? "auto" : 0,
      paddingLeft: i.offsetTop,
      paddingRight: i.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: w !== 0 ? w : K ? "auto" : 0,
      paddingBottom: i.offsetBottom,
      paddingTop: i.offsetTop
    },
    ...F ? {} : { visibility: "hidden" }
  };
  return !l && i.totalCount === 0 && U ? /* @__PURE__ */ G.jsx(U, { ...Te(U, h) }) : /* @__PURE__ */ G.jsx(
    j,
    {
      ...Te(j, h),
      "data-testid": l ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: R,
      style: st,
      children: (l ? i.topItems : i.items).map((tt) => {
        const mt = tt.originalIndex, L = x(mt + i.firstItemIndex, tt.data, h);
        return _ ? /* @__PURE__ */ ot.createElement(
          W,
          {
            ...Te(W, h),
            height: tt.size,
            index: tt.index,
            key: L,
            type: tt.type || "item",
            ...tt.type === "group" ? {} : { groupIndex: tt.groupIndex }
          }
        ) : tt.type === "group" ? /* @__PURE__ */ ot.createElement(
          X,
          {
            ...Te(X, h),
            "data-index": mt,
            "data-item-index": tt.index,
            "data-known-size": tt.size,
            key: L,
            style: ZT
          },
          y(tt.index, h)
        ) : /* @__PURE__ */ ot.createElement(
          q,
          {
            ...Te(q, h),
            ...gy(q, tt.data),
            "data-index": mt,
            "data-item-group-index": tt.groupIndex,
            "data-item-index": tt.index,
            "data-known-size": tt.size,
            key: L,
            style: M ? KT : py
          },
          H ? g(tt.index, tt.groupIndex, tt.data, h) : g(tt.index, tt.data, h)
        );
      })
    }
  );
}), FT = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, JT = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, Ji = (l) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...l ? { display: "flex", flexDirection: "column" } : {}
}), WT = {
  position: Xd(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function Te(l, i) {
  if (typeof l != "string")
    return { context: i };
}
function gy(l, i) {
  return { item: typeof l == "string" ? void 0 : i };
}
const $T = /* @__PURE__ */ ft.memo(function() {
  const l = Ut("HeaderComponent"), i = Vn("headerHeight"), u = Ut("HeaderFooterTag"), r = yl(
    ft.useMemo(
      () => (f) => {
        i($n(f, "height"));
      },
      [i]
    ),
    !0,
    Ut("skipAnimationFrameInResizeObserver")
  ), c = Ut("context");
  return l ? /* @__PURE__ */ G.jsx(u, { ref: r, children: /* @__PURE__ */ G.jsx(l, { ...Te(l, c) }) }) : null;
}), PT = /* @__PURE__ */ ft.memo(function() {
  const l = Ut("FooterComponent"), i = Vn("footerHeight"), u = Ut("HeaderFooterTag"), r = yl(
    ft.useMemo(
      () => (f) => {
        i($n(f, "height"));
      },
      [i]
    ),
    !0,
    Ut("skipAnimationFrameInResizeObserver")
  ), c = Ut("context");
  return l ? /* @__PURE__ */ G.jsx(u, { ref: r, children: /* @__PURE__ */ G.jsx(l, { ...Te(l, c) }) }) : null;
});
function Id({ useEmitter: l, useEmitterValue: i, usePublisher: u }) {
  return ft.memo(function({ children: r, style: c, ...f }) {
    const d = u("scrollContainerState"), p = i("ScrollerComponent"), g = u("smoothScrollTargetReached"), h = i("scrollerRef"), y = i("context"), b = i("horizontalDirection") || !1, { scrollByCallback: T, scrollerRef: S, scrollToCallback: C } = my(
      d,
      g,
      p,
      h,
      void 0,
      b
    );
    return l("scrollTo", C), l("scrollBy", T), /* @__PURE__ */ G.jsx(
      p,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: S,
        style: { ...b ? JT : FT, ...c },
        tabIndex: 0,
        ...f,
        ...Te(p, y),
        children: r
      }
    );
  });
}
function Zd({ useEmitter: l, useEmitterValue: i, usePublisher: u }) {
  return ft.memo(function({ children: r, style: c, ...f }) {
    const d = u("windowScrollContainerState"), p = i("ScrollerComponent"), g = u("smoothScrollTargetReached"), h = i("totalListHeight"), y = i("deviation"), b = i("customScrollParent"), T = i("context"), S = ft.useRef(null), C = i("scrollerRef"), { scrollByCallback: M, scrollerRef: R, scrollToCallback: w } = my(
      d,
      g,
      p,
      C,
      b
    );
    return hy(() => {
      var O;
      return R.current = b || ((O = S.current) == null ? void 0 : O.ownerDocument.defaultView), () => {
        R.current = null;
      };
    }, [R, b]), l("windowScrollTo", w), l("scrollBy", M), /* @__PURE__ */ G.jsx(
      p,
      {
        ref: S,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...c, ...h !== 0 ? { height: h + y } : {} },
        ...f,
        ...Te(p, T),
        children: r
      }
    );
  });
}
const tE = ({ children: l }) => {
  const i = ft.useContext(us), u = Vn("viewportHeight"), r = Vn("fixedItemHeight"), c = Ut("alignToBottom"), f = Ut("horizontalDirection"), d = ft.useMemo(
    () => ar(u, (g) => $n(g, f ? "width" : "height")),
    [u, f]
  ), p = yl(d, !0, Ut("skipAnimationFrameInResizeObserver"));
  return ft.useEffect(() => {
    i && (u(i.viewportHeight), r(i.itemHeight));
  }, [i, u, r]), /* @__PURE__ */ G.jsx("div", { "data-viewport-type": "element", ref: p, style: Ji(c), children: l });
}, eE = ({ children: l }) => {
  const i = ft.useContext(us), u = Vn("windowViewportRect"), r = Vn("fixedItemHeight"), c = Ut("customScrollParent"), f = Ld(
    u,
    c,
    Ut("skipAnimationFrameInResizeObserver")
  ), d = Ut("alignToBottom");
  return ft.useEffect(() => {
    i && (r(i.itemHeight), u({ offsetTop: 0, visibleHeight: i.viewportHeight, visibleWidth: 100 }));
  }, [i, u, r]), /* @__PURE__ */ G.jsx("div", { "data-viewport-type": "window", ref: f, style: Ji(d), children: l });
}, nE = ({ children: l }) => {
  const i = Ut("TopItemListComponent") || "div", u = Ut("headerHeight"), r = { ...WT, marginTop: `${u}px` }, c = Ut("context");
  return /* @__PURE__ */ G.jsx(i, { style: r, ...Te(i, c), children: l });
}, lE = /* @__PURE__ */ ft.memo(function(l) {
  const i = Ut("useWindowScroll"), u = Ut("topItemsIndexes").length > 0, r = Ut("customScrollParent"), c = Ut("context"), f = r || i ? oE : iE, d = r || i ? eE : tE;
  return /* @__PURE__ */ G.jsxs(f, { ...l, ...Te(f, c), children: [
    u && /* @__PURE__ */ G.jsx(nE, { children: /* @__PURE__ */ G.jsx(B0, { showTopList: !0 }) }),
    /* @__PURE__ */ G.jsxs(d, { children: [
      /* @__PURE__ */ G.jsx($T, {}),
      /* @__PURE__ */ G.jsx(B0, {}),
      /* @__PURE__ */ G.jsx(PT, {})
    ] })
  ] });
}), {
  Component: aE,
  useEmitter: Kd,
  useEmitterValue: Ut,
  usePublisher: Vn
} = /* @__PURE__ */ Vd(
  QT,
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
  lE
), iE = /* @__PURE__ */ Id({ useEmitter: Kd, useEmitterValue: Ut, usePublisher: Vn }), oE = /* @__PURE__ */ Zd({ useEmitter: Kd, useEmitterValue: Ut, usePublisher: Vn }), rE = aE, uE = /* @__PURE__ */ ie(() => {
  const l = rt((h) => /* @__PURE__ */ G.jsxs("td", { children: [
    "Item $",
    h
  ] })), i = rt(null), u = rt((h) => /* @__PURE__ */ G.jsxs("td", { colSpan: 1e3, children: [
    "Group ",
    h
  ] })), r = rt(null), c = rt(null), f = rt({}), d = rt(Qd), p = rt(Fi), g = (h, y = null) => rn(
    at(
      f,
      vt((b) => b[h]),
      Ee()
    ),
    y
  );
  return {
    components: f,
    computeItemKey: d,
    context: i,
    EmptyPlaceholder: g("EmptyPlaceholder"),
    FillerRow: g("FillerRow"),
    fixedFooterContent: c,
    fixedHeaderContent: r,
    itemContent: l,
    groupContent: u,
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
}), sE = /* @__PURE__ */ ie(
  ([l, i]) => ({ ...l, ...i }),
  Ae(fy, uE)
), cE = ({ height: l }) => /* @__PURE__ */ G.jsx("tr", { children: /* @__PURE__ */ G.jsx("td", { style: { height: l } }) }), fE = ({ height: l }) => /* @__PURE__ */ G.jsx("tr", { children: /* @__PURE__ */ G.jsx("td", { style: { border: 0, height: l, padding: 0 } }) }), dE = { overflowAnchor: "none" }, q0 = { position: Xd(), zIndex: 2, overflowAnchor: "none" }, Y0 = /* @__PURE__ */ ft.memo(function({ showTopList: l = !1 }) {
  const i = qt("listState"), u = qt("computeItemKey"), r = qt("firstItemIndex"), c = qt("context"), f = qt("isSeeking"), d = qt("fixedHeaderHeight"), p = qt("groupIndices").length > 0, g = qt("itemContent"), h = qt("groupContent"), y = qt("ScrollSeekPlaceholder") || cE, b = qt("GroupComponent"), T = qt("TableRowComponent"), S = (l ? i.topItems : []).reduce((M, R, w) => (w === 0 ? M.push(R.size) : M.push(M[w - 1] + R.size), M), []), C = (l ? i.topItems : i.items).map((M) => {
    const R = M.originalIndex, w = u(R + r, M.data, c), O = l ? R === 0 ? 0 : S[R - 1] : 0;
    return f ? /* @__PURE__ */ ot.createElement(
      y,
      {
        ...Te(y, c),
        height: M.size,
        index: M.index,
        key: w,
        type: M.type || "item"
      }
    ) : M.type === "group" ? /* @__PURE__ */ ot.createElement(
      b,
      {
        ...Te(b, c),
        "data-index": R,
        "data-item-index": M.index,
        "data-known-size": M.size,
        key: w,
        style: {
          ...q0,
          top: d
        }
      },
      h(M.index, c)
    ) : /* @__PURE__ */ ot.createElement(
      T,
      {
        ...Te(T, c),
        ...gy(T, M.data),
        "data-index": R,
        "data-item-index": M.index,
        "data-known-size": M.size,
        "data-item-group-index": M.groupIndex,
        key: w,
        style: l ? { ...q0, top: d + O } : dE
      },
      p ? g(M.index, M.groupIndex, M.data, c) : g(M.index, M.data, c)
    );
  });
  return /* @__PURE__ */ G.jsx(G.Fragment, { children: C });
}), hE = /* @__PURE__ */ ft.memo(function() {
  const l = qt("listState"), i = qt("topItemsIndexes").length > 0, u = Jn("sizeRanges"), r = qt("useWindowScroll"), c = qt("customScrollParent"), f = Jn("windowScrollContainerState"), d = Jn("scrollContainerState"), p = c || r ? f : d, g = qt("trackItemSizes"), h = qt("itemSize"), y = qt("log"), { callbackRef: b, ref: T } = Kv(
    u,
    h,
    g,
    p,
    y,
    void 0,
    c,
    !1,
    qt("skipAnimationFrameInResizeObserver")
  ), [S, C] = ft.useState(0);
  Fd("deviation", (H) => {
    S !== H && (T.current.style.marginTop = `${H}px`, C(H));
  });
  const M = qt("EmptyPlaceholder"), R = qt("FillerRow") || fE, w = qt("TableBodyComponent"), O = qt("paddingTopAddition"), U = qt("statefulTotalCount"), W = qt("context");
  if (U === 0 && M)
    return /* @__PURE__ */ G.jsx(M, { ...Te(M, W) });
  const j = (i ? l.topItems : []).reduce((H, K) => H + K.size, 0), q = l.offsetTop + O + S - j, X = l.offsetBottom, x = q > 0 ? /* @__PURE__ */ G.jsx(R, { context: W, height: q }, "padding-top") : null, _ = X > 0 ? /* @__PURE__ */ G.jsx(R, { context: W, height: X }, "padding-bottom") : null;
  return /* @__PURE__ */ G.jsxs(w, { "data-testid": "virtuoso-item-list", ref: b, ...Te(w, W), children: [
    x,
    i && /* @__PURE__ */ G.jsx(Y0, { showTopList: !0 }),
    /* @__PURE__ */ G.jsx(Y0, {}),
    _
  ] });
}), mE = ({ children: l }) => {
  const i = ft.useContext(us), u = Jn("viewportHeight"), r = Jn("fixedItemHeight"), c = yl(
    ft.useMemo(() => ar(u, (f) => $n(f, "height")), [u]),
    !0,
    qt("skipAnimationFrameInResizeObserver")
  );
  return ft.useEffect(() => {
    i && (u(i.viewportHeight), r(i.itemHeight));
  }, [i, u, r]), /* @__PURE__ */ G.jsx("div", { "data-viewport-type": "element", ref: c, style: Ji(!1), children: l });
}, pE = ({ children: l }) => {
  const i = ft.useContext(us), u = Jn("windowViewportRect"), r = Jn("fixedItemHeight"), c = qt("customScrollParent"), f = Ld(
    u,
    c,
    qt("skipAnimationFrameInResizeObserver")
  );
  return ft.useEffect(() => {
    i && (r(i.itemHeight), u({ offsetTop: 0, visibleHeight: i.viewportHeight, visibleWidth: 100 }));
  }, [i, u, r]), /* @__PURE__ */ G.jsx("div", { "data-viewport-type": "window", ref: f, style: Ji(!1), children: l });
}, gE = /* @__PURE__ */ ft.memo(function(l) {
  const i = qt("useWindowScroll"), u = qt("customScrollParent"), r = Jn("fixedHeaderHeight"), c = Jn("fixedFooterHeight"), f = qt("fixedHeaderContent"), d = qt("fixedFooterContent"), p = qt("context"), g = yl(
    ft.useMemo(() => ar(r, (w) => $n(w, "height")), [r]),
    !0,
    qt("skipAnimationFrameInResizeObserver")
  ), h = yl(
    ft.useMemo(() => ar(c, (w) => $n(w, "height")), [c]),
    !0,
    qt("skipAnimationFrameInResizeObserver")
  ), y = u || i ? bE : yE, b = u || i ? pE : mE, T = qt("TableComponent"), S = qt("TableHeadComponent"), C = qt("TableFooterComponent"), M = f ? /* @__PURE__ */ G.jsx(
    S,
    {
      ref: g,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...Te(S, p),
      children: f()
    },
    "TableHead"
  ) : null, R = d ? /* @__PURE__ */ G.jsx(
    C,
    {
      ref: h,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...Te(C, p),
      children: d()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ G.jsx(y, { ...l, ...Te(y, p), children: /* @__PURE__ */ G.jsx(b, { children: /* @__PURE__ */ G.jsxs(T, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...Te(T, p), children: [
    M,
    /* @__PURE__ */ G.jsx(hE, {}, "TableBody"),
    R
  ] }) }) });
}), {
  Component: vE,
  useEmitter: Fd,
  useEmitterValue: qt,
  usePublisher: Jn
} = /* @__PURE__ */ Vd(
  sE,
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
  gE
), yE = /* @__PURE__ */ Id({ useEmitter: Fd, useEmitterValue: qt, usePublisher: Jn }), bE = /* @__PURE__ */ Zd({ useEmitter: Fd, useEmitterValue: qt, usePublisher: Jn }), SE = vE, G0 = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, xE = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: V0, floor: Fu, max: er, min: qf, round: X0 } = Math;
function Q0(l, i, u) {
  return Array.from({ length: i - l + 1 }).map((r, c) => ({ data: u === null ? null : u[c + l], index: c + l }));
}
function TE(l) {
  return {
    ...xE,
    items: l
  };
}
function ju(l, i) {
  return l && l.width === i.width && l.height === i.height;
}
function EE(l, i) {
  return l && l.column === i.column && l.row === i.row;
}
const _E = /* @__PURE__ */ ie(
  ([
    { increaseViewportBy: l, listBoundary: i, overscan: u, visibleRange: r },
    { footerHeight: c, headerHeight: f, scrollBy: d, scrollContainerState: p, scrollTo: g, scrollTop: h, smoothScrollTargetReached: y, viewportHeight: b },
    T,
    S,
    { didMount: C, propsReady: M },
    { customScrollParent: R, useWindowScroll: w, windowScrollContainerState: O, windowScrollTo: U, windowViewportRect: W },
    j
  ]) => {
    const q = rt(0), X = rt(0), x = rt(G0), _ = rt({ height: 0, width: 0 }), H = rt({ height: 0, width: 0 }), K = ee(), F = ee(), st = rt(0), tt = rt(null), mt = rt({ column: 0, row: 0 }), L = ee(), Z = ee(), nt = rt(!1), lt = rt(0), E = rt(!0), D = rt(!1), $ = rt(!1);
    ce(
      at(
        C,
        Zt(lt),
        Ht(([Y, ut]) => !!ut)
      ),
      () => {
        Vt(E, !1);
      }
    ), ce(
      at(
        Ie(C, E, H, _, lt, D),
        Ht(([Y, ut, St, pt, , At]) => Y && !ut && St.height !== 0 && pt.height !== 0 && !At)
      ),
      ([, , , , Y]) => {
        Vt(D, !0), Bd(1, () => {
          Vt(K, Y);
        }), vl(at(h), () => {
          Vt(i, [0, 0]), Vt(E, !0);
        });
      }
    ), wt(
      at(
        Z,
        Ht((Y) => Y != null && Y.scrollTop > 0),
        dl(0)
      ),
      X
    ), ce(
      at(
        C,
        Zt(Z),
        Ht(([, Y]) => Y != null)
      ),
      ([, Y]) => {
        Y && (Vt(_, Y.viewport), Vt(H, Y.item), Vt(mt, Y.gap), Y.scrollTop > 0 && (Vt(nt, !0), vl(at(h, Xi(1)), (ut) => {
          Vt(nt, !1);
        }), Vt(g, { top: Y.scrollTop })));
      }
    ), wt(
      at(
        _,
        vt(({ height: Y }) => Y)
      ),
      b
    ), wt(
      at(
        Ie(
          jt(_, ju),
          jt(H, ju),
          jt(mt, (Y, ut) => Y && Y.column === ut.column && Y.row === ut.row),
          jt(h)
        ),
        vt(([Y, ut, St, pt]) => ({
          gap: St,
          item: ut,
          scrollTop: pt,
          viewport: Y
        }))
      ),
      L
    ), wt(
      at(
        Ie(
          jt(q),
          r,
          jt(mt, EE),
          jt(H, ju),
          jt(_, ju),
          jt(tt),
          jt(X),
          jt(nt),
          jt(E),
          jt(lt)
        ),
        Ht(([, , , , , , , Y]) => !Y),
        vt(
          ([
            Y,
            [ut, St],
            pt,
            At,
            Yt,
            Xt,
            Rt,
            ,
            Mt,
            Lt
          ]) => {
            const { column: Dt, row: Et } = pt, { height: ne, width: Ne } = At, { width: He } = Yt;
            if (Rt === 0 && (Y === 0 || He === 0))
              return G0;
            if (Ne === 0) {
              const Ze = qd(Lt, Y), Ce = Ze + Math.max(Rt - 1, 0);
              return TE(Q0(Ze, Ce, Xt));
            }
            const Ge = vy(He, Ne, Dt);
            let oe, ge;
            Mt ? ut === 0 && St === 0 && Rt > 0 ? (oe = 0, ge = Rt - 1) : (oe = Ge * Fu((ut + Et) / (ne + Et)), ge = Ge * V0((St + Et) / (ne + Et)) - 1, ge = qf(Y - 1, er(ge, Ge - 1)), oe = qf(ge, er(0, oe))) : (oe = 0, ge = -1);
            const $t = Q0(oe, ge, Xt), { bottom: Kt, top: re } = I0(Yt, pt, At, $t), ve = V0(Y / Ge), el = ve * ne + (ve - 1) * Et - Kt;
            return { bottom: Kt, itemHeight: ne, items: $t, itemWidth: Ne, offsetBottom: el, offsetTop: re, top: re };
          }
        )
      ),
      x
    ), wt(
      at(
        tt,
        Ht((Y) => Y !== null),
        vt((Y) => Y.length)
      ),
      q
    ), wt(
      at(
        Ie(_, H, x, mt),
        Ht(([Y, ut, { items: St }]) => St.length > 0 && ut.height !== 0 && Y.height !== 0),
        vt(([Y, ut, { items: St }, pt]) => {
          const { bottom: At, top: Yt } = I0(Y, pt, ut, St);
          return [Yt, At];
        }),
        Ee(rr)
      ),
      i
    );
    const I = rt(!1);
    wt(
      at(
        h,
        Zt(I),
        vt(([Y, ut]) => ut || Y !== 0)
      ),
      I
    );
    const ct = wn(
      at(
        Ie(x, q),
        Ht(([{ items: Y }]) => Y.length > 0),
        Zt(I),
        Ht(([[Y, ut], St]) => {
          const pt = Y.items[Y.items.length - 1].index === ut - 1;
          return (St || Y.bottom > 0 && Y.itemHeight > 0 && Y.offsetBottom === 0 && Y.items.length === ut) && pt;
        }),
        vt(([[, Y]]) => Y - 1),
        Ee()
      )
    ), gt = wn(
      at(
        jt(x),
        Ht(({ items: Y }) => Y.length > 0 && Y[0].index === 0),
        dl(0),
        Ee()
      )
    ), ht = wn(
      at(
        jt(x),
        Zt(nt),
        Ht(([{ items: Y }, ut]) => Y.length > 0 && !ut),
        vt(([{ items: Y }]) => ({
          endIndex: Y[Y.length - 1].index,
          startIndex: Y[0].index
        })),
        Ee(ty),
        ya(0)
      )
    );
    wt(ht, S.scrollSeekRangeChanged), wt(
      at(
        K,
        Zt(_, H, q, mt),
        vt(([Y, ut, St, pt, At]) => {
          const Yt = iy(Y), { align: Xt, behavior: Rt, offset: Mt } = Yt;
          let Lt = Yt.index;
          Lt === "LAST" && (Lt = pt - 1), Lt = er(0, Lt, qf(pt - 1, Lt));
          let Dt = pd(ut, At, St, Lt);
          return Xt === "end" ? Dt = X0(Dt - ut.height + St.height) : Xt === "center" && (Dt = X0(Dt - ut.height / 2 + St.height / 2)), Mt && (Dt += Mt), { behavior: Rt, top: Dt };
        })
      ),
      g
    );
    const kt = rn(
      at(
        x,
        vt((Y) => Y.offsetBottom + Y.bottom)
      ),
      0
    );
    return wt(
      at(
        W,
        vt((Y) => ({ height: Y.visibleHeight, width: Y.visibleWidth }))
      ),
      _
    ), {
      customScrollParent: R,
      // input
      data: tt,
      deviation: st,
      footerHeight: c,
      gap: mt,
      headerHeight: f,
      increaseViewportBy: l,
      initialItemCount: X,
      itemDimensions: H,
      overscan: u,
      restoreStateFrom: Z,
      scrollBy: d,
      scrollContainerState: p,
      scrollHeight: F,
      scrollTo: g,
      scrollToIndex: K,
      scrollTop: h,
      smoothScrollTargetReached: y,
      totalCount: q,
      useWindowScroll: w,
      viewportDimensions: _,
      windowScrollContainerState: O,
      windowScrollTo: U,
      windowViewportRect: W,
      ...S,
      // output
      gridState: x,
      horizontalDirection: $,
      initialTopMostItemIndex: lt,
      totalListHeight: kt,
      ...T,
      endReached: ct,
      propsReady: M,
      rangeChanged: ht,
      startReached: gt,
      stateChanged: L,
      stateRestoreInProgress: nt,
      ...j
    };
  },
  Ae(Yd, fn, gr, sy, Oa, Gd, wa)
);
function vy(l, i, u) {
  return er(1, Fu((l + u) / (Fu(i) + u)));
}
function I0(l, i, u, r) {
  const { height: c } = u;
  if (c === void 0 || r.length === 0)
    return { bottom: 0, top: 0 };
  const f = pd(l, i, u, r[0].index);
  return { bottom: pd(l, i, u, r[r.length - 1].index) + c, top: f };
}
function pd(l, i, u, r) {
  const c = vy(l.width, u.width, i.column), f = Fu(r / c), d = f * u.height + er(0, f - 1) * i.row;
  return d > 0 ? d + i.row : d;
}
const AE = /* @__PURE__ */ ie(() => {
  const l = rt((b) => `Item ${b}`), i = rt({}), u = rt(null), r = rt("virtuoso-grid-item"), c = rt("virtuoso-grid-list"), f = rt(Qd), d = rt("div"), p = rt(Fi), g = (b, T = null) => rn(
    at(
      i,
      vt((S) => S[b]),
      Ee()
    ),
    T
  ), h = rt(!1), y = rt(!1);
  return wt(jt(y), h), {
    components: i,
    computeItemKey: f,
    context: u,
    FooterComponent: g("Footer"),
    HeaderComponent: g("Header"),
    headerFooterTag: d,
    itemClassName: r,
    ItemComponent: g("Item", "div"),
    itemContent: l,
    listClassName: c,
    ListComponent: g("List", "div"),
    readyStateChanged: h,
    reportReadyState: y,
    ScrollerComponent: g("Scroller", "div"),
    scrollerRef: p,
    ScrollSeekPlaceholder: g("ScrollSeekPlaceholder", "div")
  };
}), wE = /* @__PURE__ */ ie(
  ([l, i]) => ({ ...l, ...i }),
  Ae(_E, AE)
), OE = /* @__PURE__ */ ft.memo(function() {
  const l = Oe("gridState"), i = Oe("listClassName"), u = Oe("itemClassName"), r = Oe("itemContent"), c = Oe("computeItemKey"), f = Oe("isSeeking"), d = Xn("scrollHeight"), p = Oe("ItemComponent"), g = Oe("ListComponent"), h = Oe("ScrollSeekPlaceholder"), y = Oe("context"), b = Xn("itemDimensions"), T = Xn("gap"), S = Oe("log"), C = Oe("stateRestoreInProgress"), M = Xn("reportReadyState"), R = yl(
    ft.useMemo(
      () => (w) => {
        const O = w.parentElement.parentElement.scrollHeight;
        d(O);
        const U = w.firstChild;
        if (U) {
          const { height: W, width: j } = U.getBoundingClientRect();
          b({ height: W, width: j });
        }
        T({
          column: Z0("column-gap", getComputedStyle(w).columnGap, S),
          row: Z0("row-gap", getComputedStyle(w).rowGap, S)
        });
      },
      [d, b, T, S]
    ),
    !0,
    !1
  );
  return hy(() => {
    l.itemHeight > 0 && l.itemWidth > 0 && M(!0);
  }, [l]), C ? null : /* @__PURE__ */ G.jsx(
    g,
    {
      className: i,
      ref: R,
      ...Te(g, y),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: l.offsetBottom, paddingTop: l.offsetTop },
      children: l.items.map((w) => {
        const O = c(w.index, w.data, y);
        return f ? /* @__PURE__ */ G.jsx(
          h,
          {
            ...Te(h, y),
            height: l.itemHeight,
            index: w.index,
            width: l.itemWidth
          },
          O
        ) : /* @__PURE__ */ ot.createElement(
          p,
          {
            ...Te(p, y),
            className: u,
            "data-index": w.index,
            key: O
          },
          r(w.index, w.data, y)
        );
      })
    }
  );
}), RE = ft.memo(function() {
  const l = Oe("HeaderComponent"), i = Xn("headerHeight"), u = Oe("headerFooterTag"), r = yl(
    ft.useMemo(
      () => (f) => {
        i($n(f, "height"));
      },
      [i]
    ),
    !0,
    !1
  ), c = Oe("context");
  return l ? /* @__PURE__ */ G.jsx(u, { ref: r, children: /* @__PURE__ */ G.jsx(l, { ...Te(l, c) }) }) : null;
}), CE = ft.memo(function() {
  const l = Oe("FooterComponent"), i = Xn("footerHeight"), u = Oe("headerFooterTag"), r = yl(
    ft.useMemo(
      () => (f) => {
        i($n(f, "height"));
      },
      [i]
    ),
    !0,
    !1
  ), c = Oe("context");
  return l ? /* @__PURE__ */ G.jsx(u, { ref: r, children: /* @__PURE__ */ G.jsx(l, { ...Te(l, c) }) }) : null;
}), zE = ({ children: l }) => {
  const i = ft.useContext(dy), u = Xn("itemDimensions"), r = Xn("viewportDimensions"), c = yl(
    ft.useMemo(
      () => (f) => {
        r(f.getBoundingClientRect());
      },
      [r]
    ),
    !0,
    !1
  );
  return ft.useEffect(() => {
    i && (r({ height: i.viewportHeight, width: i.viewportWidth }), u({ height: i.itemHeight, width: i.itemWidth }));
  }, [i, r, u]), /* @__PURE__ */ G.jsx("div", { ref: c, style: Ji(!1), children: l });
}, ME = ({ children: l }) => {
  const i = ft.useContext(dy), u = Xn("windowViewportRect"), r = Xn("itemDimensions"), c = Oe("customScrollParent"), f = Ld(u, c, !1);
  return ft.useEffect(() => {
    i && (r({ height: i.itemHeight, width: i.itemWidth }), u({ offsetTop: 0, visibleHeight: i.viewportHeight, visibleWidth: i.viewportWidth }));
  }, [i, u, r]), /* @__PURE__ */ G.jsx("div", { ref: f, style: Ji(!1), children: l });
}, DE = /* @__PURE__ */ ft.memo(function({ ...l }) {
  const i = Oe("useWindowScroll"), u = Oe("customScrollParent"), r = u || i ? HE : NE, c = u || i ? ME : zE, f = Oe("context");
  return /* @__PURE__ */ G.jsx(r, { ...l, ...Te(r, f), children: /* @__PURE__ */ G.jsxs(c, { children: [
    /* @__PURE__ */ G.jsx(RE, {}),
    /* @__PURE__ */ G.jsx(OE, {}),
    /* @__PURE__ */ G.jsx(CE, {})
  ] }) });
}), {
  useEmitter: yy,
  useEmitterValue: Oe,
  usePublisher: Xn
} = /* @__PURE__ */ Vd(
  wE,
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
  DE
), NE = /* @__PURE__ */ Id({ useEmitter: yy, useEmitterValue: Oe, usePublisher: Xn }), HE = /* @__PURE__ */ Zd({ useEmitter: yy, useEmitterValue: Oe, usePublisher: Xn });
function Z0(l, i, u) {
  return i !== "normal" && !(i != null && i.endsWith("px")) && u(`${l} was not resolved to pixel value correctly`, i, gn.WARN), i === "normal" ? 0 : parseInt(i ?? "0", 10);
}
function jE() {
  const l = ot.useRef(null), [i, u] = ot.useState(1120);
  return ot.useEffect(() => {
    const r = l.current;
    if (!r) return;
    const c = new ResizeObserver(([f]) => {
      f.contentRect.width && u(f.contentRect.width);
    });
    return c.observe(r), () => c.disconnect();
  }, []), [l, i];
}
const LE = "_container_1yy9g_1", UE = "_cards_1yy9g_7", K0 = {
  container: LE,
  cards: UE
}, kE = "_card_1ada5_1", BE = "_flex_1ada5_23", qE = "_field_1ada5_27", Lu = {
  card: kE,
  "dd-field-block": "_dd-field-block_1ada5_13",
  flex: BE,
  field: qE
}, YE = "_terms_1cbzn_1", Yf = {
  terms: YE
};
function Sa({ text: l, searchTerm: i }) {
  let u = l;
  return l && i && l.toLowerCase().includes(i.toLowerCase()) && (u = l.split(new RegExp(`(${i.replace(/[\\^$.*+?()[\]{}|/]/g, "\\$&")})`, "gi")).map((c, f) => c.toLowerCase() === i.toLowerCase() ? /* @__PURE__ */ G.jsx("mark", { children: c }, f) : /* @__PURE__ */ G.jsx("span", { children: c }, f))), /* @__PURE__ */ G.jsx(G.Fragment, { children: u });
}
function by({ terms: l, searchTerm: i }) {
  if (!l) return /* @__PURE__ */ G.jsx(G.Fragment, {});
  const u = (p) => p.trim().split(/\s+/), r = (p) => /^[A-Z]+:[A-Za-z0-9_]+$/.test(p), c = (p) => /^https?:\/\/\S+/.test(p), f = (p, g) => {
    if (r(p)) {
      const [h, y] = p.split(":"), b = encodeURIComponent(h === "NCIT" ? `http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#${y}` : `http://purl.obolibrary.org/obo/${h}_${y}`), T = `https://bioportal.bioontology.org/ontologies/${h}/?p=classes&conceptid=${b}`;
      return /* @__PURE__ */ G.jsx("a", { href: T, target: "_blank", rel: "noopener noreferrer", className: Yf.link, children: /* @__PURE__ */ G.jsx(Sa, { text: p, searchTerm: i }) }, g);
    }
    return c(p) ? /* @__PURE__ */ G.jsx("a", { href: p, target: "_blank", rel: "noopener noreferrer", className: Yf.link, children: /* @__PURE__ */ G.jsx(Sa, { text: p, searchTerm: i }) }, g) : /* @__PURE__ */ G.jsx("span", { children: /* @__PURE__ */ G.jsx(Sa, { text: p, searchTerm: i }) }, g);
  }, d = u(l);
  return /* @__PURE__ */ G.jsx("span", { className: Yf.terms, children: d.map(f) });
}
const GE = "_values_14176_1", VE = "_flex_14176_6", XE = "_value_14176_1", Gf = {
  values: GE,
  flex: VE,
  value: XE
};
function Sy({ values: l, searchTerm: i }) {
  const u = l.split("|").map((r, c) => {
    const f = r.split("=");
    return /* @__PURE__ */ G.jsxs("div", { className: Gf.flex, children: [
      /* @__PURE__ */ G.jsx("span", { className: Gf.value, children: /* @__PURE__ */ G.jsx(Sa, { text: f[0].trim().replace(/"/g, ""), searchTerm: i }) }),
      /* @__PURE__ */ G.jsx("span", { children: /* @__PURE__ */ G.jsx(Sa, { text: f[1].trim().replace(/\[|\]/g, ""), searchTerm: i }) })
    ] }, c);
  });
  return /* @__PURE__ */ G.jsx("div", { className: Gf.values, children: u });
}
const Qi = Math.min, Fa = Math.max, Ju = Math.round, Uu = Math.floor, gl = (l) => ({
  x: l,
  y: l
}), QE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, IE = {
  start: "end",
  end: "start"
};
function gd(l, i, u) {
  return Fa(l, Qi(i, u));
}
function vr(l, i) {
  return typeof l == "function" ? l(i) : l;
}
function $a(l) {
  return l.split("-")[0];
}
function yr(l) {
  return l.split("-")[1];
}
function xy(l) {
  return l === "x" ? "y" : "x";
}
function Jd(l) {
  return l === "y" ? "height" : "width";
}
function ba(l) {
  return ["top", "bottom"].includes($a(l)) ? "y" : "x";
}
function Wd(l) {
  return xy(ba(l));
}
function ZE(l, i, u) {
  u === void 0 && (u = !1);
  const r = yr(l), c = Wd(l), f = Jd(c);
  let d = c === "x" ? r === (u ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return i.reference[f] > i.floating[f] && (d = Wu(d)), [d, Wu(d)];
}
function KE(l) {
  const i = Wu(l);
  return [vd(l), i, vd(i)];
}
function vd(l) {
  return l.replace(/start|end/g, (i) => IE[i]);
}
function FE(l, i, u) {
  const r = ["left", "right"], c = ["right", "left"], f = ["top", "bottom"], d = ["bottom", "top"];
  switch (l) {
    case "top":
    case "bottom":
      return u ? i ? c : r : i ? r : c;
    case "left":
    case "right":
      return i ? f : d;
    default:
      return [];
  }
}
function JE(l, i, u, r) {
  const c = yr(l);
  let f = FE($a(l), u === "start", r);
  return c && (f = f.map((d) => d + "-" + c), i && (f = f.concat(f.map(vd)))), f;
}
function Wu(l) {
  return l.replace(/left|right|bottom|top/g, (i) => QE[i]);
}
function WE(l) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...l
  };
}
function Ty(l) {
  return typeof l != "number" ? WE(l) : {
    top: l,
    right: l,
    bottom: l,
    left: l
  };
}
function $u(l) {
  const {
    x: i,
    y: u,
    width: r,
    height: c
  } = l;
  return {
    width: r,
    height: c,
    top: u,
    left: i,
    right: i + r,
    bottom: u + c,
    x: i,
    y: u
  };
}
function F0(l, i, u) {
  let {
    reference: r,
    floating: c
  } = l;
  const f = ba(i), d = Wd(i), p = Jd(d), g = $a(i), h = f === "y", y = r.x + r.width / 2 - c.width / 2, b = r.y + r.height / 2 - c.height / 2, T = r[p] / 2 - c[p] / 2;
  let S;
  switch (g) {
    case "top":
      S = {
        x: y,
        y: r.y - c.height
      };
      break;
    case "bottom":
      S = {
        x: y,
        y: r.y + r.height
      };
      break;
    case "right":
      S = {
        x: r.x + r.width,
        y: b
      };
      break;
    case "left":
      S = {
        x: r.x - c.width,
        y: b
      };
      break;
    default:
      S = {
        x: r.x,
        y: r.y
      };
  }
  switch (yr(i)) {
    case "start":
      S[d] -= T * (u && h ? -1 : 1);
      break;
    case "end":
      S[d] += T * (u && h ? -1 : 1);
      break;
  }
  return S;
}
const $E = async (l, i, u) => {
  const {
    placement: r = "bottom",
    strategy: c = "absolute",
    middleware: f = [],
    platform: d
  } = u, p = f.filter(Boolean), g = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let h = await d.getElementRects({
    reference: l,
    floating: i,
    strategy: c
  }), {
    x: y,
    y: b
  } = F0(h, r, g), T = r, S = {}, C = 0;
  for (let M = 0; M < p.length; M++) {
    const {
      name: R,
      fn: w
    } = p[M], {
      x: O,
      y: U,
      data: W,
      reset: j
    } = await w({
      x: y,
      y: b,
      initialPlacement: r,
      placement: T,
      strategy: c,
      middlewareData: S,
      rects: h,
      platform: d,
      elements: {
        reference: l,
        floating: i
      }
    });
    y = O ?? y, b = U ?? b, S = {
      ...S,
      [R]: {
        ...S[R],
        ...W
      }
    }, j && C <= 50 && (C++, typeof j == "object" && (j.placement && (T = j.placement), j.rects && (h = j.rects === !0 ? await d.getElementRects({
      reference: l,
      floating: i,
      strategy: c
    }) : j.rects), {
      x: y,
      y: b
    } = F0(h, T, g)), M = -1);
  }
  return {
    x: y,
    y: b,
    placement: T,
    strategy: c,
    middlewareData: S
  };
};
async function Ey(l, i) {
  var u;
  i === void 0 && (i = {});
  const {
    x: r,
    y: c,
    platform: f,
    rects: d,
    elements: p,
    strategy: g
  } = l, {
    boundary: h = "clippingAncestors",
    rootBoundary: y = "viewport",
    elementContext: b = "floating",
    altBoundary: T = !1,
    padding: S = 0
  } = vr(i, l), C = Ty(S), R = p[T ? b === "floating" ? "reference" : "floating" : b], w = $u(await f.getClippingRect({
    element: (u = await (f.isElement == null ? void 0 : f.isElement(R))) == null || u ? R : R.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
    boundary: h,
    rootBoundary: y,
    strategy: g
  })), O = b === "floating" ? {
    x: r,
    y: c,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, U = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating)), W = await (f.isElement == null ? void 0 : f.isElement(U)) ? await (f.getScale == null ? void 0 : f.getScale(U)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = $u(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: O,
    offsetParent: U,
    strategy: g
  }) : O);
  return {
    top: (w.top - j.top + C.top) / W.y,
    bottom: (j.bottom - w.bottom + C.bottom) / W.y,
    left: (w.left - j.left + C.left) / W.x,
    right: (j.right - w.right + C.right) / W.x
  };
}
const PE = (l) => ({
  name: "arrow",
  options: l,
  async fn(i) {
    const {
      x: u,
      y: r,
      placement: c,
      rects: f,
      platform: d,
      elements: p,
      middlewareData: g
    } = i, {
      element: h,
      padding: y = 0
    } = vr(l, i) || {};
    if (h == null)
      return {};
    const b = Ty(y), T = {
      x: u,
      y: r
    }, S = Wd(c), C = Jd(S), M = await d.getDimensions(h), R = S === "y", w = R ? "top" : "left", O = R ? "bottom" : "right", U = R ? "clientHeight" : "clientWidth", W = f.reference[C] + f.reference[S] - T[S] - f.floating[C], j = T[S] - f.reference[S], q = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(h));
    let X = q ? q[U] : 0;
    (!X || !await (d.isElement == null ? void 0 : d.isElement(q))) && (X = p.floating[U] || f.floating[C]);
    const x = W / 2 - j / 2, _ = X / 2 - M[C] / 2 - 1, H = Qi(b[w], _), K = Qi(b[O], _), F = H, st = X - M[C] - K, tt = X / 2 - M[C] / 2 + x, mt = gd(F, tt, st), L = !g.arrow && yr(c) != null && tt !== mt && f.reference[C] / 2 - (tt < F ? H : K) - M[C] / 2 < 0, Z = L ? tt < F ? tt - F : tt - st : 0;
    return {
      [S]: T[S] + Z,
      data: {
        [S]: mt,
        centerOffset: tt - mt - Z,
        ...L && {
          alignmentOffset: Z
        }
      },
      reset: L
    };
  }
}), t_ = function(l) {
  return l === void 0 && (l = {}), {
    name: "flip",
    options: l,
    async fn(i) {
      var u, r;
      const {
        placement: c,
        middlewareData: f,
        rects: d,
        initialPlacement: p,
        platform: g,
        elements: h
      } = i, {
        mainAxis: y = !0,
        crossAxis: b = !0,
        fallbackPlacements: T,
        fallbackStrategy: S = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: M = !0,
        ...R
      } = vr(l, i);
      if ((u = f.arrow) != null && u.alignmentOffset)
        return {};
      const w = $a(c), O = ba(p), U = $a(p) === p, W = await (g.isRTL == null ? void 0 : g.isRTL(h.floating)), j = T || (U || !M ? [Wu(p)] : KE(p)), q = C !== "none";
      !T && q && j.push(...JE(p, M, C, W));
      const X = [p, ...j], x = await Ey(i, R), _ = [];
      let H = ((r = f.flip) == null ? void 0 : r.overflows) || [];
      if (y && _.push(x[w]), b) {
        const tt = ZE(c, d, W);
        _.push(x[tt[0]], x[tt[1]]);
      }
      if (H = [...H, {
        placement: c,
        overflows: _
      }], !_.every((tt) => tt <= 0)) {
        var K, F;
        const tt = (((K = f.flip) == null ? void 0 : K.index) || 0) + 1, mt = X[tt];
        if (mt && (!(b === "alignment" ? O !== ba(mt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        H.every((nt) => nt.overflows[0] > 0 && ba(nt.placement) === O)))
          return {
            data: {
              index: tt,
              overflows: H
            },
            reset: {
              placement: mt
            }
          };
        let L = (F = H.filter((Z) => Z.overflows[0] <= 0).sort((Z, nt) => Z.overflows[1] - nt.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!L)
          switch (S) {
            case "bestFit": {
              var st;
              const Z = (st = H.filter((nt) => {
                if (q) {
                  const lt = ba(nt.placement);
                  return lt === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  lt === "y";
                }
                return !0;
              }).map((nt) => [nt.placement, nt.overflows.filter((lt) => lt > 0).reduce((lt, E) => lt + E, 0)]).sort((nt, lt) => nt[1] - lt[1])[0]) == null ? void 0 : st[0];
              Z && (L = Z);
              break;
            }
            case "initialPlacement":
              L = p;
              break;
          }
        if (c !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
async function e_(l, i) {
  const {
    placement: u,
    platform: r,
    elements: c
  } = l, f = await (r.isRTL == null ? void 0 : r.isRTL(c.floating)), d = $a(u), p = yr(u), g = ba(u) === "y", h = ["left", "top"].includes(d) ? -1 : 1, y = f && g ? -1 : 1, b = vr(i, l);
  let {
    mainAxis: T,
    crossAxis: S,
    alignmentAxis: C
  } = typeof b == "number" ? {
    mainAxis: b,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: b.mainAxis || 0,
    crossAxis: b.crossAxis || 0,
    alignmentAxis: b.alignmentAxis
  };
  return p && typeof C == "number" && (S = p === "end" ? C * -1 : C), g ? {
    x: S * y,
    y: T * h
  } : {
    x: T * h,
    y: S * y
  };
}
const n_ = function(l) {
  return l === void 0 && (l = 0), {
    name: "offset",
    options: l,
    async fn(i) {
      var u, r;
      const {
        x: c,
        y: f,
        placement: d,
        middlewareData: p
      } = i, g = await e_(i, l);
      return d === ((u = p.offset) == null ? void 0 : u.placement) && (r = p.arrow) != null && r.alignmentOffset ? {} : {
        x: c + g.x,
        y: f + g.y,
        data: {
          ...g,
          placement: d
        }
      };
    }
  };
}, l_ = function(l) {
  return l === void 0 && (l = {}), {
    name: "shift",
    options: l,
    async fn(i) {
      const {
        x: u,
        y: r,
        placement: c
      } = i, {
        mainAxis: f = !0,
        crossAxis: d = !1,
        limiter: p = {
          fn: (R) => {
            let {
              x: w,
              y: O
            } = R;
            return {
              x: w,
              y: O
            };
          }
        },
        ...g
      } = vr(l, i), h = {
        x: u,
        y: r
      }, y = await Ey(i, g), b = ba($a(c)), T = xy(b);
      let S = h[T], C = h[b];
      if (f) {
        const R = T === "y" ? "top" : "left", w = T === "y" ? "bottom" : "right", O = S + y[R], U = S - y[w];
        S = gd(O, S, U);
      }
      if (d) {
        const R = b === "y" ? "top" : "left", w = b === "y" ? "bottom" : "right", O = C + y[R], U = C - y[w];
        C = gd(O, C, U);
      }
      const M = p.fn({
        ...i,
        [T]: S,
        [b]: C
      });
      return {
        ...M,
        data: {
          x: M.x - u,
          y: M.y - r,
          enabled: {
            [T]: f,
            [b]: d
          }
        }
      };
    }
  };
};
function ss() {
  return typeof window < "u";
}
function Wi(l) {
  return _y(l) ? (l.nodeName || "").toLowerCase() : "#document";
}
function On(l) {
  var i;
  return (l == null || (i = l.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function xl(l) {
  var i;
  return (i = (_y(l) ? l.ownerDocument : l.document) || window.document) == null ? void 0 : i.documentElement;
}
function _y(l) {
  return ss() ? l instanceof Node || l instanceof On(l).Node : !1;
}
function Pn(l) {
  return ss() ? l instanceof Element || l instanceof On(l).Element : !1;
}
function bl(l) {
  return ss() ? l instanceof HTMLElement || l instanceof On(l).HTMLElement : !1;
}
function J0(l) {
  return !ss() || typeof ShadowRoot > "u" ? !1 : l instanceof ShadowRoot || l instanceof On(l).ShadowRoot;
}
function br(l) {
  const {
    overflow: i,
    overflowX: u,
    overflowY: r,
    display: c
  } = tl(l);
  return /auto|scroll|overlay|hidden|clip/.test(i + r + u) && !["inline", "contents"].includes(c);
}
function a_(l) {
  return ["table", "td", "th"].includes(Wi(l));
}
function cs(l) {
  return [":popover-open", ":modal"].some((i) => {
    try {
      return l.matches(i);
    } catch {
      return !1;
    }
  });
}
function $d(l) {
  const i = Pd(), u = Pn(l) ? tl(l) : l;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => u[r] ? u[r] !== "none" : !1) || (u.containerType ? u.containerType !== "normal" : !1) || !i && (u.backdropFilter ? u.backdropFilter !== "none" : !1) || !i && (u.filter ? u.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (u.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (u.contain || "").includes(r));
}
function i_(l) {
  let i = _a(l);
  for (; bl(i) && !Ii(i); ) {
    if ($d(i))
      return i;
    if (cs(i))
      return null;
    i = _a(i);
  }
  return null;
}
function Pd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ii(l) {
  return ["html", "body", "#document"].includes(Wi(l));
}
function tl(l) {
  return On(l).getComputedStyle(l);
}
function fs(l) {
  return Pn(l) ? {
    scrollLeft: l.scrollLeft,
    scrollTop: l.scrollTop
  } : {
    scrollLeft: l.scrollX,
    scrollTop: l.scrollY
  };
}
function _a(l) {
  if (Wi(l) === "html")
    return l;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    l.assignedSlot || // DOM Element detected.
    l.parentNode || // ShadowRoot detected.
    J0(l) && l.host || // Fallback.
    xl(l)
  );
  return J0(i) ? i.host : i;
}
function Ay(l) {
  const i = _a(l);
  return Ii(i) ? l.ownerDocument ? l.ownerDocument.body : l.body : bl(i) && br(i) ? i : Ay(i);
}
function cr(l, i, u) {
  var r;
  i === void 0 && (i = []), u === void 0 && (u = !0);
  const c = Ay(l), f = c === ((r = l.ownerDocument) == null ? void 0 : r.body), d = On(c);
  if (f) {
    const p = yd(d);
    return i.concat(d, d.visualViewport || [], br(c) ? c : [], p && u ? cr(p) : []);
  }
  return i.concat(c, cr(c, [], u));
}
function yd(l) {
  return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
function wy(l) {
  const i = tl(l);
  let u = parseFloat(i.width) || 0, r = parseFloat(i.height) || 0;
  const c = bl(l), f = c ? l.offsetWidth : u, d = c ? l.offsetHeight : r, p = Ju(u) !== f || Ju(r) !== d;
  return p && (u = f, r = d), {
    width: u,
    height: r,
    $: p
  };
}
function th(l) {
  return Pn(l) ? l : l.contextElement;
}
function Gi(l) {
  const i = th(l);
  if (!bl(i))
    return gl(1);
  const u = i.getBoundingClientRect(), {
    width: r,
    height: c,
    $: f
  } = wy(i);
  let d = (f ? Ju(u.width) : u.width) / r, p = (f ? Ju(u.height) : u.height) / c;
  return (!d || !Number.isFinite(d)) && (d = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: d,
    y: p
  };
}
const o_ = /* @__PURE__ */ gl(0);
function Oy(l) {
  const i = On(l);
  return !Pd() || !i.visualViewport ? o_ : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function r_(l, i, u) {
  return i === void 0 && (i = !1), !u || i && u !== On(l) ? !1 : i;
}
function Pa(l, i, u, r) {
  i === void 0 && (i = !1), u === void 0 && (u = !1);
  const c = l.getBoundingClientRect(), f = th(l);
  let d = gl(1);
  i && (r ? Pn(r) && (d = Gi(r)) : d = Gi(l));
  const p = r_(f, u, r) ? Oy(f) : gl(0);
  let g = (c.left + p.x) / d.x, h = (c.top + p.y) / d.y, y = c.width / d.x, b = c.height / d.y;
  if (f) {
    const T = On(f), S = r && Pn(r) ? On(r) : r;
    let C = T, M = yd(C);
    for (; M && r && S !== C; ) {
      const R = Gi(M), w = M.getBoundingClientRect(), O = tl(M), U = w.left + (M.clientLeft + parseFloat(O.paddingLeft)) * R.x, W = w.top + (M.clientTop + parseFloat(O.paddingTop)) * R.y;
      g *= R.x, h *= R.y, y *= R.x, b *= R.y, g += U, h += W, C = On(M), M = yd(C);
    }
  }
  return $u({
    width: y,
    height: b,
    x: g,
    y: h
  });
}
function eh(l, i) {
  const u = fs(l).scrollLeft;
  return i ? i.left + u : Pa(xl(l)).left + u;
}
function Ry(l, i, u) {
  u === void 0 && (u = !1);
  const r = l.getBoundingClientRect(), c = r.left + i.scrollLeft - (u ? 0 : (
    // RTL <body> scrollbar.
    eh(l, r)
  )), f = r.top + i.scrollTop;
  return {
    x: c,
    y: f
  };
}
function u_(l) {
  let {
    elements: i,
    rect: u,
    offsetParent: r,
    strategy: c
  } = l;
  const f = c === "fixed", d = xl(r), p = i ? cs(i.floating) : !1;
  if (r === d || p && f)
    return u;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = gl(1);
  const y = gl(0), b = bl(r);
  if ((b || !b && !f) && ((Wi(r) !== "body" || br(d)) && (g = fs(r)), bl(r))) {
    const S = Pa(r);
    h = Gi(r), y.x = S.x + r.clientLeft, y.y = S.y + r.clientTop;
  }
  const T = d && !b && !f ? Ry(d, g, !0) : gl(0);
  return {
    width: u.width * h.x,
    height: u.height * h.y,
    x: u.x * h.x - g.scrollLeft * h.x + y.x + T.x,
    y: u.y * h.y - g.scrollTop * h.y + y.y + T.y
  };
}
function s_(l) {
  return Array.from(l.getClientRects());
}
function c_(l) {
  const i = xl(l), u = fs(l), r = l.ownerDocument.body, c = Fa(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth), f = Fa(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
  let d = -u.scrollLeft + eh(l);
  const p = -u.scrollTop;
  return tl(r).direction === "rtl" && (d += Fa(i.clientWidth, r.clientWidth) - c), {
    width: c,
    height: f,
    x: d,
    y: p
  };
}
function f_(l, i) {
  const u = On(l), r = xl(l), c = u.visualViewport;
  let f = r.clientWidth, d = r.clientHeight, p = 0, g = 0;
  if (c) {
    f = c.width, d = c.height;
    const h = Pd();
    (!h || h && i === "fixed") && (p = c.offsetLeft, g = c.offsetTop);
  }
  return {
    width: f,
    height: d,
    x: p,
    y: g
  };
}
function d_(l, i) {
  const u = Pa(l, !0, i === "fixed"), r = u.top + l.clientTop, c = u.left + l.clientLeft, f = bl(l) ? Gi(l) : gl(1), d = l.clientWidth * f.x, p = l.clientHeight * f.y, g = c * f.x, h = r * f.y;
  return {
    width: d,
    height: p,
    x: g,
    y: h
  };
}
function W0(l, i, u) {
  let r;
  if (i === "viewport")
    r = f_(l, u);
  else if (i === "document")
    r = c_(xl(l));
  else if (Pn(i))
    r = d_(i, u);
  else {
    const c = Oy(l);
    r = {
      x: i.x - c.x,
      y: i.y - c.y,
      width: i.width,
      height: i.height
    };
  }
  return $u(r);
}
function Cy(l, i) {
  const u = _a(l);
  return u === i || !Pn(u) || Ii(u) ? !1 : tl(u).position === "fixed" || Cy(u, i);
}
function h_(l, i) {
  const u = i.get(l);
  if (u)
    return u;
  let r = cr(l, [], !1).filter((p) => Pn(p) && Wi(p) !== "body"), c = null;
  const f = tl(l).position === "fixed";
  let d = f ? _a(l) : l;
  for (; Pn(d) && !Ii(d); ) {
    const p = tl(d), g = $d(d);
    !g && p.position === "fixed" && (c = null), (f ? !g && !c : !g && p.position === "static" && !!c && ["absolute", "fixed"].includes(c.position) || br(d) && !g && Cy(l, d)) ? r = r.filter((y) => y !== d) : c = p, d = _a(d);
  }
  return i.set(l, r), r;
}
function m_(l) {
  let {
    element: i,
    boundary: u,
    rootBoundary: r,
    strategy: c
  } = l;
  const d = [...u === "clippingAncestors" ? cs(i) ? [] : h_(i, this._c) : [].concat(u), r], p = d[0], g = d.reduce((h, y) => {
    const b = W0(i, y, c);
    return h.top = Fa(b.top, h.top), h.right = Qi(b.right, h.right), h.bottom = Qi(b.bottom, h.bottom), h.left = Fa(b.left, h.left), h;
  }, W0(i, p, c));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function p_(l) {
  const {
    width: i,
    height: u
  } = wy(l);
  return {
    width: i,
    height: u
  };
}
function g_(l, i, u) {
  const r = bl(i), c = xl(i), f = u === "fixed", d = Pa(l, !0, f, i);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = gl(0);
  function h() {
    g.x = eh(c);
  }
  if (r || !r && !f)
    if ((Wi(i) !== "body" || br(c)) && (p = fs(i)), r) {
      const S = Pa(i, !0, f, i);
      g.x = S.x + i.clientLeft, g.y = S.y + i.clientTop;
    } else c && h();
  f && !r && c && h();
  const y = c && !r && !f ? Ry(c, p) : gl(0), b = d.left + p.scrollLeft - g.x - y.x, T = d.top + p.scrollTop - g.y - y.y;
  return {
    x: b,
    y: T,
    width: d.width,
    height: d.height
  };
}
function Vf(l) {
  return tl(l).position === "static";
}
function $0(l, i) {
  if (!bl(l) || tl(l).position === "fixed")
    return null;
  if (i)
    return i(l);
  let u = l.offsetParent;
  return xl(l) === u && (u = u.ownerDocument.body), u;
}
function zy(l, i) {
  const u = On(l);
  if (cs(l))
    return u;
  if (!bl(l)) {
    let c = _a(l);
    for (; c && !Ii(c); ) {
      if (Pn(c) && !Vf(c))
        return c;
      c = _a(c);
    }
    return u;
  }
  let r = $0(l, i);
  for (; r && a_(r) && Vf(r); )
    r = $0(r, i);
  return r && Ii(r) && Vf(r) && !$d(r) ? u : r || i_(l) || u;
}
const v_ = async function(l) {
  const i = this.getOffsetParent || zy, u = this.getDimensions, r = await u(l.floating);
  return {
    reference: g_(l.reference, await i(l.floating), l.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function y_(l) {
  return tl(l).direction === "rtl";
}
const b_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: u_,
  getDocumentElement: xl,
  getClippingRect: m_,
  getOffsetParent: zy,
  getElementRects: v_,
  getClientRects: s_,
  getDimensions: p_,
  getScale: Gi,
  isElement: Pn,
  isRTL: y_
};
function My(l, i) {
  return l.x === i.x && l.y === i.y && l.width === i.width && l.height === i.height;
}
function S_(l, i) {
  let u = null, r;
  const c = xl(l);
  function f() {
    var p;
    clearTimeout(r), (p = u) == null || p.disconnect(), u = null;
  }
  function d(p, g) {
    p === void 0 && (p = !1), g === void 0 && (g = 1), f();
    const h = l.getBoundingClientRect(), {
      left: y,
      top: b,
      width: T,
      height: S
    } = h;
    if (p || i(), !T || !S)
      return;
    const C = Uu(b), M = Uu(c.clientWidth - (y + T)), R = Uu(c.clientHeight - (b + S)), w = Uu(y), U = {
      rootMargin: -C + "px " + -M + "px " + -R + "px " + -w + "px",
      threshold: Fa(0, Qi(1, g)) || 1
    };
    let W = !0;
    function j(q) {
      const X = q[0].intersectionRatio;
      if (X !== g) {
        if (!W)
          return d();
        X ? d(!1, X) : r = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      X === 1 && !My(h, l.getBoundingClientRect()) && d(), W = !1;
    }
    try {
      u = new IntersectionObserver(j, {
        ...U,
        // Handle <iframe>s
        root: c.ownerDocument
      });
    } catch {
      u = new IntersectionObserver(j, U);
    }
    u.observe(l);
  }
  return d(!0), f;
}
function x_(l, i, u, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: c = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = r, h = th(l), y = c || f ? [...h ? cr(h) : [], ...cr(i)] : [];
  y.forEach((w) => {
    c && w.addEventListener("scroll", u, {
      passive: !0
    }), f && w.addEventListener("resize", u);
  });
  const b = h && p ? S_(h, u) : null;
  let T = -1, S = null;
  d && (S = new ResizeObserver((w) => {
    let [O] = w;
    O && O.target === h && S && (S.unobserve(i), cancelAnimationFrame(T), T = requestAnimationFrame(() => {
      var U;
      (U = S) == null || U.observe(i);
    })), u();
  }), h && !g && S.observe(h), S.observe(i));
  let C, M = g ? Pa(l) : null;
  g && R();
  function R() {
    const w = Pa(l);
    M && !My(M, w) && u(), M = w, C = requestAnimationFrame(R);
  }
  return u(), () => {
    var w;
    y.forEach((O) => {
      c && O.removeEventListener("scroll", u), f && O.removeEventListener("resize", u);
    }), b == null || b(), (w = S) == null || w.disconnect(), S = null, g && cancelAnimationFrame(C);
  };
}
const T_ = n_, E_ = l_, __ = t_, A_ = PE, P0 = (l, i, u) => {
  const r = /* @__PURE__ */ new Map(), c = {
    platform: b_,
    ...u
  }, f = {
    ...c.platform,
    _c: r
  };
  return $E(l, i, {
    ...c,
    platform: f
  });
};
var Xf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var tv;
function w_() {
  return tv || (tv = 1, function(l) {
    (function() {
      var i = {}.hasOwnProperty;
      function u() {
        for (var f = "", d = 0; d < arguments.length; d++) {
          var p = arguments[d];
          p && (f = c(f, r(p)));
        }
        return f;
      }
      function r(f) {
        if (typeof f == "string" || typeof f == "number")
          return f;
        if (typeof f != "object")
          return "";
        if (Array.isArray(f))
          return u.apply(null, f);
        if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
          return f.toString();
        var d = "";
        for (var p in f)
          i.call(f, p) && f[p] && (d = c(d, p));
        return d;
      }
      function c(f, d) {
        return d ? f ? f + " " + d : f + d : f;
      }
      l.exports ? (u.default = u, l.exports = u) : window.classNames = u;
    })();
  }(Xf)), Xf.exports;
}
var O_ = w_();
const bd = /* @__PURE__ */ fr(O_);
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const R_ = "react-tooltip-core-styles", C_ = "react-tooltip-base-styles", ev = { core: !1, base: !1 };
function nv({ css: l, id: i = C_, type: u = "base", ref: r }) {
  var c, f;
  if (!l || typeof document > "u" || ev[u] || u === "core" && typeof process < "u" && (!((c = process == null ? void 0 : process.env) === null || c === void 0) && c.REACT_TOOLTIP_DISABLE_CORE_STYLES) || u !== "base" && typeof process < "u" && (!((f = process == null ? void 0 : process.env) === null || f === void 0) && f.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  u === "core" && (i = R_), r || (r = {});
  const { insertAt: d } = r;
  if (document.getElementById(i)) return;
  const p = document.head || document.getElementsByTagName("head")[0], g = document.createElement("style");
  g.id = i, g.type = "text/css", d === "top" && p.firstChild ? p.insertBefore(g, p.firstChild) : p.appendChild(g), g.styleSheet ? g.styleSheet.cssText = l : g.appendChild(document.createTextNode(l)), ev[u] = !0;
}
const lv = async ({ elementReference: l = null, tooltipReference: i = null, tooltipArrowReference: u = null, place: r = "top", offset: c = 10, strategy: f = "absolute", middlewares: d = [T_(Number(c)), __({ fallbackAxisSideDirection: "start" }), E_({ padding: 5 })], border: p }) => {
  if (!l) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  if (i === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  const g = d;
  return u ? (g.push(A_({ element: u, padding: 5 })), P0(l, i, { placement: r, strategy: f, middleware: g }).then(({ x: h, y, placement: b, middlewareData: T }) => {
    var S, C;
    const M = { left: `${h}px`, top: `${y}px`, border: p }, { x: R, y: w } = (S = T.arrow) !== null && S !== void 0 ? S : { x: 0, y: 0 }, O = (C = { top: "bottom", right: "left", bottom: "top", left: "right" }[b.split("-")[0]]) !== null && C !== void 0 ? C : "bottom", U = p && { borderBottom: p, borderRight: p };
    let W = 0;
    if (p) {
      const j = `${p}`.match(/(\d+)px/);
      W = j != null && j[1] ? Number(j[1]) : 1;
    }
    return { tooltipStyles: M, tooltipArrowStyles: { left: R != null ? `${R}px` : "", top: w != null ? `${w}px` : "", right: "", bottom: "", ...U, [O]: `-${4 + W}px` }, place: b };
  })) : P0(l, i, { placement: "bottom", strategy: f, middleware: g }).then(({ x: h, y, placement: b }) => ({ tooltipStyles: { left: `${h}px`, top: `${y}px` }, tooltipArrowStyles: {}, place: b }));
}, av = (l, i) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(l, i), iv = (l, i, u) => {
  let r = null;
  const c = function(...f) {
    const d = () => {
      r = null;
    };
    !r && (l.apply(this, f), r = setTimeout(d, i));
  };
  return c.cancel = () => {
    r && (clearTimeout(r), r = null);
  }, c;
}, ov = (l) => l !== null && !Array.isArray(l) && typeof l == "object", Sd = (l, i) => {
  if (l === i) return !0;
  if (Array.isArray(l) && Array.isArray(i)) return l.length === i.length && l.every((c, f) => Sd(c, i[f]));
  if (Array.isArray(l) !== Array.isArray(i)) return !1;
  if (!ov(l) || !ov(i)) return l === i;
  const u = Object.keys(l), r = Object.keys(i);
  return u.length === r.length && u.every((c) => Sd(l[c], i[c]));
}, z_ = (l) => {
  if (!(l instanceof HTMLElement || l instanceof SVGElement)) return !1;
  const i = getComputedStyle(l);
  return ["overflow", "overflow-x", "overflow-y"].some((u) => {
    const r = i.getPropertyValue(u);
    return r === "auto" || r === "scroll";
  });
}, rv = (l) => {
  if (!l) return null;
  let i = l.parentElement;
  for (; i; ) {
    if (z_(i)) return i;
    i = i.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, M_ = typeof window < "u" ? ot.useLayoutEffect : ot.useEffect, Gn = (l) => {
  l.current && (clearTimeout(l.current), l.current = null);
}, D_ = "DEFAULT_TOOLTIP_ID", N_ = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, H_ = ot.createContext({ getTooltipData: () => N_ });
function Dy(l = D_) {
  return ot.useContext(H_).getTooltipData(l);
}
var Ui = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Qf = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const j_ = ({ forwardRef: l, id: i, className: u, classNameArrow: r, variant: c = "dark", anchorId: f, anchorSelect: d, place: p = "top", offset: g = 10, events: h = ["hover"], openOnClick: y = !1, positionStrategy: b = "absolute", middlewares: T, wrapper: S, delayShow: C = 0, delayHide: M = 0, float: R = !1, hidden: w = !1, noArrow: O = !1, clickable: U = !1, closeOnEsc: W = !1, closeOnScroll: j = !1, closeOnResize: q = !1, openEvents: X, closeEvents: x, globalCloseEvents: _, imperativeModeOnly: H, style: K, position: F, afterShow: st, afterHide: tt, disableTooltip: mt, content: L, contentWrapperRef: Z, isOpen: nt, defaultIsOpen: lt = !1, setIsOpen: E, activeAnchor: D, setActiveAnchor: $, border: I, opacity: ct, arrowColor: gt, role: ht = "tooltip" }) => {
  var kt;
  const Y = ot.useRef(null), ut = ot.useRef(null), St = ot.useRef(null), pt = ot.useRef(null), At = ot.useRef(null), [Yt, Xt] = ot.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: p }), [Rt, Mt] = ot.useState(!1), [Lt, Dt] = ot.useState(!1), [Et, ne] = ot.useState(null), Ne = ot.useRef(!1), He = ot.useRef(null), { anchorRefs: Ge, setActiveAnchor: oe } = Dy(i), ge = ot.useRef(!1), [$t, Kt] = ot.useState([]), re = ot.useRef(!1), ve = y || h.includes("click"), el = ve || (X == null ? void 0 : X.click) || (X == null ? void 0 : X.dblclick) || (X == null ? void 0 : X.mousedown), Ze = X ? { ...X } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !X && ve && Object.assign(Ze, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const Ce = x ? { ...x } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !x && ve && Object.assign(Ce, { mouseleave: !1, blur: !1, mouseout: !1 });
  const ze = _ ? { ..._ } : { escape: W || !1, scroll: j || !1, resize: q || !1, clickOutsideAnchor: el || !1 };
  H && (Object.assign(Ze, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Ce, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(ze, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), M_(() => (re.current = !0, () => {
    re.current = !1;
  }), []);
  const fe = (dt) => {
    re.current && (dt && Dt(!0), setTimeout(() => {
      re.current && (E == null || E(dt), nt === void 0 && Mt(dt));
    }, 10));
  };
  ot.useEffect(() => {
    if (nt === void 0) return () => null;
    nt && Dt(!0);
    const dt = setTimeout(() => {
      Mt(nt);
    }, 10);
    return () => {
      clearTimeout(dt);
    };
  }, [nt]), ot.useEffect(() => {
    if (Rt !== Ne.current) if (Gn(At), Ne.current = Rt, Rt) st == null || st();
    else {
      const dt = ((yt) => {
        const xt = yt.match(/^([\d.]+)(ms|s)$/);
        if (!xt) return 0;
        const [, Se, Be] = xt;
        return Number(Se) * (Be === "ms" ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      At.current = setTimeout(() => {
        Dt(!1), ne(null), tt == null || tt();
      }, dt + 25);
    }
  }, [Rt]);
  const Cn = (dt) => {
    Xt((yt) => Sd(yt, dt) ? yt : dt);
  }, nl = (dt = C) => {
    Gn(St), Lt ? fe(!0) : St.current = setTimeout(() => {
      fe(!0);
    }, dt);
  }, zn = (dt = M) => {
    Gn(pt), pt.current = setTimeout(() => {
      ge.current || fe(!1);
    }, dt);
  }, Ra = (dt) => {
    var yt;
    if (!dt) return;
    const xt = (yt = dt.currentTarget) !== null && yt !== void 0 ? yt : dt.target;
    if (!(xt != null && xt.isConnected)) return $(null), void oe({ current: null });
    C ? nl() : fe(!0), $(xt), oe({ current: xt }), Gn(pt);
  }, Tl = () => {
    U ? zn(M || 100) : M ? zn() : fe(!1), Gn(St);
  }, El = ({ x: dt, y: yt }) => {
    var xt;
    const Se = { getBoundingClientRect: () => ({ x: dt, y: yt, width: 0, height: 0, top: yt, left: dt, right: dt, bottom: yt }) };
    lv({ place: (xt = Et == null ? void 0 : Et.place) !== null && xt !== void 0 ? xt : p, offset: g, elementReference: Se, tooltipReference: Y.current, tooltipArrowReference: ut.current, strategy: b, middlewares: T, border: I }).then((Be) => {
      Cn(Be);
    });
  }, ll = (dt) => {
    if (!dt) return;
    const yt = dt, xt = { x: yt.clientX, y: yt.clientY };
    El(xt), He.current = xt;
  }, Qn = (dt) => {
    var yt;
    if (!Rt) return;
    const xt = dt.target;
    xt.isConnected && (!((yt = Y.current) === null || yt === void 0) && yt.contains(xt) || [document.querySelector(`[id='${f}']`), ...$t].some((Se) => Se == null ? void 0 : Se.contains(xt)) || (fe(!1), Gn(St)));
  }, ei = iv(Ra, 50), je = iv(Tl, 50), sn = (dt) => {
    je.cancel(), ei(dt);
  }, Ot = () => {
    ei.cancel(), je();
  }, Qt = ot.useCallback(() => {
    var dt, yt;
    const xt = (dt = Et == null ? void 0 : Et.position) !== null && dt !== void 0 ? dt : F;
    xt ? El(xt) : R ? He.current && El(He.current) : D != null && D.isConnected && lv({ place: (yt = Et == null ? void 0 : Et.place) !== null && yt !== void 0 ? yt : p, offset: g, elementReference: D, tooltipReference: Y.current, tooltipArrowReference: ut.current, strategy: b, middlewares: T, border: I }).then((Se) => {
      re.current && Cn(Se);
    });
  }, [Rt, D, L, K, p, Et == null ? void 0 : Et.place, g, b, F, Et == null ? void 0 : Et.position, R]);
  ot.useEffect(() => {
    var dt, yt;
    const xt = new Set(Ge);
    $t.forEach((Pt) => {
      mt != null && mt(Pt) || xt.add({ current: Pt });
    });
    const Se = document.querySelector(`[id='${f}']`);
    Se && !(mt != null && mt(Se)) && xt.add({ current: Se });
    const Be = () => {
      fe(!1);
    }, Mn = rv(D), Dn = rv(Y.current);
    ze.scroll && (window.addEventListener("scroll", Be), Mn == null || Mn.addEventListener("scroll", Be), Dn == null || Dn.addEventListener("scroll", Be));
    let Ke = null;
    ze.resize ? window.addEventListener("resize", Be) : D && Y.current && (Ke = x_(D, Y.current, Qt, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const Fe = (Pt) => {
      Pt.key === "Escape" && fe(!1);
    };
    ze.escape && window.addEventListener("keydown", Fe), ze.clickOutsideAnchor && window.addEventListener("click", Qn);
    const de = [], vn = (Pt) => !!(Pt != null && Pt.target && (D != null && D.contains(Pt.target))), Il = (Pt) => {
      Rt && vn(Pt) || Ra(Pt);
    }, Ca = (Pt) => {
      Rt && vn(Pt) && Tl();
    }, Al = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], Le = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Ze).forEach(([Pt, In]) => {
      In && (Al.includes(Pt) ? de.push({ event: Pt, listener: sn }) : Le.includes(Pt) && de.push({ event: Pt, listener: Il }));
    }), Object.entries(Ce).forEach(([Pt, In]) => {
      In && (Al.includes(Pt) ? de.push({ event: Pt, listener: Ot }) : Le.includes(Pt) && de.push({ event: Pt, listener: Ca }));
    }), R && de.push({ event: "pointermove", listener: ll });
    const $i = () => {
      ge.current = !0;
    }, Pi = () => {
      ge.current = !1, Tl();
    }, al = U && (Ce.mouseout || Ce.mouseleave);
    return al && ((dt = Y.current) === null || dt === void 0 || dt.addEventListener("mouseover", $i), (yt = Y.current) === null || yt === void 0 || yt.addEventListener("mouseout", Pi)), de.forEach(({ event: Pt, listener: In }) => {
      xt.forEach((ni) => {
        var Zl;
        (Zl = ni.current) === null || Zl === void 0 || Zl.addEventListener(Pt, In);
      });
    }), () => {
      var Pt, In;
      ze.scroll && (window.removeEventListener("scroll", Be), Mn == null || Mn.removeEventListener("scroll", Be), Dn == null || Dn.removeEventListener("scroll", Be)), ze.resize ? window.removeEventListener("resize", Be) : Ke == null || Ke(), ze.clickOutsideAnchor && window.removeEventListener("click", Qn), ze.escape && window.removeEventListener("keydown", Fe), al && ((Pt = Y.current) === null || Pt === void 0 || Pt.removeEventListener("mouseover", $i), (In = Y.current) === null || In === void 0 || In.removeEventListener("mouseout", Pi)), de.forEach(({ event: ni, listener: Zl }) => {
        xt.forEach((ds) => {
          var Kl;
          (Kl = ds.current) === null || Kl === void 0 || Kl.removeEventListener(ni, Zl);
        });
      });
    };
  }, [D, Qt, Lt, Ge, $t, X, x, _, ve, C, M]), ot.useEffect(() => {
    var dt, yt;
    let xt = (yt = (dt = Et == null ? void 0 : Et.anchorSelect) !== null && dt !== void 0 ? dt : d) !== null && yt !== void 0 ? yt : "";
    !xt && i && (xt = `[data-tooltip-id='${i.replace(/'/g, "\\'")}']`);
    const Se = new MutationObserver((Be) => {
      const Mn = [], Dn = [];
      Be.forEach((Ke) => {
        if (Ke.type === "attributes" && Ke.attributeName === "data-tooltip-id" && (Ke.target.getAttribute("data-tooltip-id") === i ? Mn.push(Ke.target) : Ke.oldValue === i && Dn.push(Ke.target)), Ke.type === "childList") {
          if (D) {
            const Fe = [...Ke.removedNodes].filter((de) => de.nodeType === 1);
            if (xt) try {
              Dn.push(...Fe.filter((de) => de.matches(xt))), Dn.push(...Fe.flatMap((de) => [...de.querySelectorAll(xt)]));
            } catch {
            }
            Fe.some((de) => {
              var vn;
              return !!(!((vn = de == null ? void 0 : de.contains) === null || vn === void 0) && vn.call(de, D)) && (Dt(!1), fe(!1), $(null), Gn(St), Gn(pt), !0);
            });
          }
          if (xt) try {
            const Fe = [...Ke.addedNodes].filter((de) => de.nodeType === 1);
            Mn.push(...Fe.filter((de) => de.matches(xt))), Mn.push(...Fe.flatMap((de) => [...de.querySelectorAll(xt)]));
          } catch {
          }
        }
      }), (Mn.length || Dn.length) && Kt((Ke) => [...Ke.filter((Fe) => !Dn.includes(Fe)), ...Mn]);
    });
    return Se.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      Se.disconnect();
    };
  }, [i, d, Et == null ? void 0 : Et.anchorSelect, D]), ot.useEffect(() => {
    Qt();
  }, [Qt]), ot.useEffect(() => {
    if (!(Z != null && Z.current)) return () => null;
    const dt = new ResizeObserver(() => {
      setTimeout(() => Qt());
    });
    return dt.observe(Z.current), () => {
      dt.disconnect();
    };
  }, [L, Z == null ? void 0 : Z.current]), ot.useEffect(() => {
    var dt;
    const yt = document.querySelector(`[id='${f}']`), xt = [...$t, yt];
    D && xt.includes(D) || $((dt = $t[0]) !== null && dt !== void 0 ? dt : yt);
  }, [f, $t, D]), ot.useEffect(() => (lt && fe(!0), () => {
    Gn(St), Gn(pt);
  }), []), ot.useEffect(() => {
    var dt;
    let yt = (dt = Et == null ? void 0 : Et.anchorSelect) !== null && dt !== void 0 ? dt : d;
    if (!yt && i && (yt = `[data-tooltip-id='${i.replace(/'/g, "\\'")}']`), yt) try {
      const xt = Array.from(document.querySelectorAll(yt));
      Kt(xt);
    } catch {
      Kt([]);
    }
  }, [i, d, Et == null ? void 0 : Et.anchorSelect]), ot.useEffect(() => {
    St.current && (Gn(St), nl(C));
  }, [C]);
  const ln = (kt = Et == null ? void 0 : Et.content) !== null && kt !== void 0 ? kt : L, _l = Rt && Object.keys(Yt.tooltipStyles).length > 0;
  return ot.useImperativeHandle(l, () => ({ open: (dt) => {
    if (dt != null && dt.anchorSelect) try {
      document.querySelector(dt.anchorSelect);
    } catch {
      return void console.warn(`[react-tooltip] "${dt.anchorSelect}" is not a valid CSS selector`);
    }
    ne(dt ?? null), dt != null && dt.delay ? nl(dt.delay) : fe(!0);
  }, close: (dt) => {
    dt != null && dt.delay ? zn(dt.delay) : fe(!1);
  }, activeAnchor: D, place: Yt.place, isOpen: !!(Lt && !w && ln && _l) })), Lt && !w && ln ? ft.createElement(S, { id: i, role: ht, className: bd("react-tooltip", Ui.tooltip, Qf.tooltip, Qf[c], u, `react-tooltip__place-${Yt.place}`, Ui[_l ? "show" : "closing"], _l ? "react-tooltip__show" : "react-tooltip__closing", b === "fixed" && Ui.fixed, U && Ui.clickable), onTransitionEnd: (dt) => {
    Gn(At), Rt || dt.propertyName !== "opacity" || (Dt(!1), ne(null), tt == null || tt());
  }, style: { ...K, ...Yt.tooltipStyles, opacity: ct !== void 0 && _l ? ct : void 0 }, ref: Y }, ln, ft.createElement(S, { className: bd("react-tooltip-arrow", Ui.arrow, Qf.arrow, r, O && Ui.noArrow), style: { ...Yt.tooltipArrowStyles, background: gt ? `linear-gradient(to right bottom, transparent 50%, ${gt} 50%)` : void 0 }, ref: ut })) : null;
}, L_ = ({ content: l }) => ft.createElement("span", { dangerouslySetInnerHTML: { __html: l } }), U_ = ft.forwardRef(({ id: l, anchorId: i, anchorSelect: u, content: r, html: c, render: f, className: d, classNameArrow: p, variant: g = "dark", place: h = "top", offset: y = 10, wrapper: b = "div", children: T = null, events: S = ["hover"], openOnClick: C = !1, positionStrategy: M = "absolute", middlewares: R, delayShow: w = 0, delayHide: O = 0, float: U = !1, hidden: W = !1, noArrow: j = !1, clickable: q = !1, closeOnEsc: X = !1, closeOnScroll: x = !1, closeOnResize: _ = !1, openEvents: H, closeEvents: K, globalCloseEvents: F, imperativeModeOnly: st = !1, style: tt, position: mt, isOpen: L, defaultIsOpen: Z = !1, disableStyleInjection: nt = !1, border: lt, opacity: E, arrowColor: D, setIsOpen: $, afterShow: I, afterHide: ct, disableTooltip: gt, role: ht = "tooltip" }, kt) => {
  const [Y, ut] = ot.useState(r), [St, pt] = ot.useState(c), [At, Yt] = ot.useState(h), [Xt, Rt] = ot.useState(g), [Mt, Lt] = ot.useState(y), [Dt, Et] = ot.useState(w), [ne, Ne] = ot.useState(O), [He, Ge] = ot.useState(U), [oe, ge] = ot.useState(W), [$t, Kt] = ot.useState(b), [re, ve] = ot.useState(S), [el, Ze] = ot.useState(M), [Ce, ze] = ot.useState(null), [fe, Cn] = ot.useState(null), nl = ot.useRef(nt), { anchorRefs: zn, activeAnchor: Ra } = Dy(l), Tl = (je) => je == null ? void 0 : je.getAttributeNames().reduce((sn, Ot) => {
    var Qt;
    return Ot.startsWith("data-tooltip-") && (sn[Ot.replace(/^data-tooltip-/, "")] = (Qt = je == null ? void 0 : je.getAttribute(Ot)) !== null && Qt !== void 0 ? Qt : null), sn;
  }, {}), El = (je) => {
    const sn = { place: (Ot) => {
      var Qt;
      Yt((Qt = Ot) !== null && Qt !== void 0 ? Qt : h);
    }, content: (Ot) => {
      ut(Ot ?? r);
    }, html: (Ot) => {
      pt(Ot ?? c);
    }, variant: (Ot) => {
      var Qt;
      Rt((Qt = Ot) !== null && Qt !== void 0 ? Qt : g);
    }, offset: (Ot) => {
      Lt(Ot === null ? y : Number(Ot));
    }, wrapper: (Ot) => {
      var Qt;
      Kt((Qt = Ot) !== null && Qt !== void 0 ? Qt : b);
    }, events: (Ot) => {
      const Qt = Ot == null ? void 0 : Ot.split(" ");
      ve(Qt ?? S);
    }, "position-strategy": (Ot) => {
      var Qt;
      Ze((Qt = Ot) !== null && Qt !== void 0 ? Qt : M);
    }, "delay-show": (Ot) => {
      Et(Ot === null ? w : Number(Ot));
    }, "delay-hide": (Ot) => {
      Ne(Ot === null ? O : Number(Ot));
    }, float: (Ot) => {
      Ge(Ot === null ? U : Ot === "true");
    }, hidden: (Ot) => {
      ge(Ot === null ? W : Ot === "true");
    }, "class-name": (Ot) => {
      ze(Ot);
    } };
    Object.values(sn).forEach((Ot) => Ot(null)), Object.entries(je).forEach(([Ot, Qt]) => {
      var ln;
      (ln = sn[Ot]) === null || ln === void 0 || ln.call(sn, Qt);
    });
  };
  ot.useEffect(() => {
    ut(r);
  }, [r]), ot.useEffect(() => {
    pt(c);
  }, [c]), ot.useEffect(() => {
    Yt(h);
  }, [h]), ot.useEffect(() => {
    Rt(g);
  }, [g]), ot.useEffect(() => {
    Lt(y);
  }, [y]), ot.useEffect(() => {
    Et(w);
  }, [w]), ot.useEffect(() => {
    Ne(O);
  }, [O]), ot.useEffect(() => {
    Ge(U);
  }, [U]), ot.useEffect(() => {
    ge(W);
  }, [W]), ot.useEffect(() => {
    Ze(M);
  }, [M]), ot.useEffect(() => {
    nl.current !== nt && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [nt]), ot.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: nt === "core", disableBase: nt } }));
  }, []), ot.useEffect(() => {
    var je;
    const sn = new Set(zn);
    let Ot = u;
    if (!Ot && l && (Ot = `[data-tooltip-id='${l.replace(/'/g, "\\'")}']`), Ot) try {
      document.querySelectorAll(Ot).forEach((yt) => {
        sn.add({ current: yt });
      });
    } catch {
      console.warn(`[react-tooltip] "${Ot}" is not a valid CSS selector`);
    }
    const Qt = document.querySelector(`[id='${i}']`);
    if (Qt && sn.add({ current: Qt }), !sn.size) return () => null;
    const ln = (je = fe ?? Qt) !== null && je !== void 0 ? je : Ra.current, _l = new MutationObserver((yt) => {
      yt.forEach((xt) => {
        var Se;
        if (!ln || xt.type !== "attributes" || !(!((Se = xt.attributeName) === null || Se === void 0) && Se.startsWith("data-tooltip-"))) return;
        const Be = Tl(ln);
        El(Be);
      });
    }), dt = { attributes: !0, childList: !1, subtree: !1 };
    if (ln) {
      const yt = Tl(ln);
      El(yt), _l.observe(ln, dt);
    }
    return () => {
      _l.disconnect();
    };
  }, [zn, Ra, fe, i, u]), ot.useEffect(() => {
    tt != null && tt.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), lt && !av("border", `${lt}`) && console.warn(`[react-tooltip] "${lt}" is not a valid \`border\`.`), tt != null && tt.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), E && !av("opacity", `${E}`) && console.warn(`[react-tooltip] "${E}" is not a valid \`opacity\`.`);
  }, []);
  let ll = T;
  const Qn = ot.useRef(null);
  if (f) {
    const je = f({ content: (fe == null ? void 0 : fe.getAttribute("data-tooltip-content")) || Y || null, activeAnchor: fe });
    ll = je ? ft.createElement("div", { ref: Qn, className: "react-tooltip-content-wrapper" }, je) : null;
  } else Y && (ll = Y);
  St && (ll = ft.createElement(L_, { content: St }));
  const ei = { forwardRef: kt, id: l, anchorId: i, anchorSelect: u, className: bd(d, Ce), classNameArrow: p, content: ll, contentWrapperRef: Qn, place: At, variant: Xt, offset: Mt, wrapper: $t, events: re, openOnClick: C, positionStrategy: el, middlewares: R, delayShow: Dt, delayHide: ne, float: He, hidden: oe, noArrow: j, clickable: q, closeOnEsc: X, closeOnScroll: x, closeOnResize: _, openEvents: H, closeEvents: K, globalCloseEvents: F, imperativeModeOnly: st, style: tt, position: mt, isOpen: L, defaultIsOpen: Z, border: lt, opacity: E, arrowColor: D, setIsOpen: $, afterShow: I, afterHide: ct, disableTooltip: gt, activeAnchor: fe, setActiveAnchor: (je) => Cn(je), role: ht };
  return ft.createElement(j_, { ...ei });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (l) => {
  l.detail.disableCore || nv({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), l.detail.disableBase || nv({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const uv = {
  "help-icon": "_help-icon_12haz_1",
  "help-tooltip": "_help-tooltip_12haz_7"
};
function Ny({ id: l, field: i }) {
  const u = {
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
  return /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
    /* @__PURE__ */ G.jsx(Gl, { icon: Mx, className: uv["help-icon"], "data-tooltip-place": "top", "data-tooltip-position-strategy": "fixed", "data-tooltip-id": "help-tooltip-" + l + "-" + i, "data-tooltip-content": u[i] }),
    /* @__PURE__ */ G.jsx(U_, { id: "help-tooltip-" + l + "-" + i, className: uv["help-tooltip"], opacity: 1 })
  ] });
}
function k_({ variable: l, searchTerm: i }) {
  const r = ["Section", "Label", "Datatype", "Terms", "Cardinality", "Unit", "Enumeration", "Additional Missing Value Codes"].map((c, f) => {
    if (l[c] === "" || l[c] === void 0) return;
    const d = ["Enumeration", "Additional Missing Value Codes"].includes(c);
    let p = /* @__PURE__ */ G.jsx("span", { children: /* @__PURE__ */ G.jsx(Sa, { text: l[c], searchTerm: i }) });
    return c === "Terms" && (p = /* @__PURE__ */ G.jsx(by, { terms: l[c], searchTerm: i })), /* @__PURE__ */ G.jsxs("div", { className: Lu["dd-field-block"], children: [
      /* @__PURE__ */ G.jsxs("div", { className: Lu.flex, children: [
        /* @__PURE__ */ G.jsxs("span", { className: Lu.field, children: [
          /* @__PURE__ */ G.jsx(Ny, { id: l.Id, field: c }),
          /* @__PURE__ */ G.jsxs("strong", { children: [
            c,
            ":"
          ] })
        ] }),
        !d && p
      ] }),
      d && /* @__PURE__ */ G.jsx(Sy, { values: l[c], searchTerm: i })
    ] }, f);
  });
  return /* @__PURE__ */ G.jsxs("div", { className: Lu.card, children: [
    /* @__PURE__ */ G.jsx("h3", { children: /* @__PURE__ */ G.jsx(Sa, { text: l.Id, searchTerm: i }) }),
    r
  ] });
}
const B_ = "_scroll_wasmp_1", q_ = {
  scroll: B_
};
function Hy({ scrollRef: l }) {
  return /* @__PURE__ */ G.jsx(Gl, { icon: Rx, className: q_.scroll, onClick: () => l.current.scrollToIndex({ index: 0, behavior: "smooth" }) });
}
function Y_({ activeView: l, variables: i, searchTerm: u }) {
  const r = ot.useRef(), [c, f] = ot.useState(!1), [d, p] = jE(), g = p < 1120 ? 2 : 3, h = Math.ceil(i.length / g);
  return /* @__PURE__ */ G.jsxs("div", { ref: d, style: { display: l === "list" ? "block" : "none" }, children: [
    /* @__PURE__ */ G.jsx(
      rE,
      {
        ref: r,
        style: { height: 750 },
        totalCount: h,
        itemContent: (y) => {
          const b = i.slice(
            y * g,
            (y + 1) * g
          );
          return /* @__PURE__ */ G.jsx("div", { className: K0.cards, children: b.map((T, S) => /* @__PURE__ */ G.jsx(k_, { variable: T, searchTerm: u }, S)) });
        },
        atTopStateChange: (y) => f(!y),
        components: {
          List: ot.forwardRef((y, b) => /* @__PURE__ */ G.jsx("div", { ref: b, ...y, className: K0.container }))
        }
      }
    ),
    c && /* @__PURE__ */ G.jsx(Hy, { scrollRef: r })
  ] });
}
const G_ = "_options_t8263_1", V_ = {
  options: G_
}, X_ = "_wrapper_7j5yf_1", Q_ = "_open_7j5yf_4", I_ = "_picker_7j5yf_4", Z_ = "_icon_7j5yf_8", K_ = "_dropdown_7j5yf_11", Fo = {
  wrapper: X_,
  open: Q_,
  picker: I_,
  icon: Z_,
  dropdown: K_
};
function F_({ checkedColumns: l, setCheckedColumns: i }) {
  const u = ["Id", "Section", "Label", "Datatype", "Terms", "Cardinality", "Unit", "Enumeration", "Additional Missing Value Codes"], [r, c] = ot.useState(!1), f = ot.useRef();
  return ot.useEffect(() => {
    const d = (p) => {
      f.current.contains(p.target) || c(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }), /* @__PURE__ */ G.jsxs("div", { className: `${Fo.wrapper} ${r ? Fo.open : ""}`, ref: f, children: [
    /* @__PURE__ */ G.jsxs("button", { className: Fo.picker, onClick: () => c(!r), children: [
      /* @__PURE__ */ G.jsx(Gl, { icon: Cx, className: Fo.icon }),
      "Manage Columns"
    ] }),
    /* @__PURE__ */ G.jsx("div", { className: Fo.dropdown, children: u.map((d, p) => /* @__PURE__ */ G.jsxs("label", { children: [
      /* @__PURE__ */ G.jsx("input", { type: "checkbox", checked: l.includes(d), disabled: d === "Id", value: d, onChange: (g) => g.target.checked ? i((h) => [...h, g.target.value]) : i((h) => h.filter((y) => y !== g.target.value)) }),
      d
    ] }, p)) })
  ] });
}
function J_({ sortField: l, setSortField: i, sortDirection: u, setSortDirection: r, checkedColumns: c, setCheckedColumns: f }) {
  return /* @__PURE__ */ G.jsxs("div", { className: V_.options, children: [
    /* @__PURE__ */ G.jsxs("div", { children: [
      "Sort by:",
      /* @__PURE__ */ G.jsxs("select", { onChange: (d) => i(d.target.value), value: l, children: [
        /* @__PURE__ */ G.jsx("option", { value: "Id", children: "Id" }),
        /* @__PURE__ */ G.jsx("option", { value: "Section", children: "Section" }),
        /* @__PURE__ */ G.jsx("option", { value: "Label", children: "Label" }),
        /* @__PURE__ */ G.jsx("option", { value: "Datatype", children: "Datatype" }),
        /* @__PURE__ */ G.jsx("option", { value: "Cardinality", children: "Cardinality" })
      ] }),
      /* @__PURE__ */ G.jsxs("select", { onChange: (d) => r(d.target.value), value: u, children: [
        /* @__PURE__ */ G.jsx("option", { value: "Ascending", children: "Ascending" }),
        /* @__PURE__ */ G.jsx("option", { value: "Descending", children: "Descending" })
      ] })
    ] }),
    /* @__PURE__ */ G.jsx(F_, { checkedColumns: c, setCheckedColumns: f })
  ] });
}
const W_ = "_table_8748a_1", $_ = {
  table: W_
}, P_ = "_wrapper_nbs3r_1", tA = "_open_nbs3r_5", eA = "_icon_nbs3r_5", nA = "_active_nbs3r_8", lA = "_dropdown_nbs3r_11", Jo = {
  wrapper: P_,
  open: tA,
  icon: eA,
  active: nA,
  dropdown: lA
};
function aA({ field: l, filters: i, setFilters: u, allValues: r, filteredValues: c }) {
  const [f, d] = ot.useState(!1), p = ot.useRef();
  return ot.useEffect(() => {
    const g = (h) => {
      p.current.contains(h.target) || d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }), /* @__PURE__ */ G.jsxs("div", { className: `${Jo.wrapper} ${f ? Jo.open : ""}`, ref: p, children: [
    /* @__PURE__ */ G.jsx(Gl, { icon: zx, className: `${Jo.icon} ${i[l].length > 0 ? Jo.active : ""}`, onClick: () => d(!f) }),
    /* @__PURE__ */ G.jsx("div", { className: Jo.dropdown, children: r[l].map((g, h) => /* @__PURE__ */ G.jsxs("label", { children: [
      /* @__PURE__ */ G.jsx("input", { type: "checkbox", checked: i[l].includes(g), disabled: !c[l].includes(g), value: g, onChange: (y) => y.target.checked ? u((b) => ({ ...b, [l]: [...b[l], y.target.value] })) : u((b) => ({ ...b, [l]: b[l].filter((T) => T !== y.target.value) })) }),
      g
    ] }, h)) })
  ] });
}
function iA({ variables: l, searchTerm: i, checkedColumns: u, filters: r, setFilters: c, allValues: f, filteredValues: d, tableRef: p, setShowScrollTop: g }) {
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
  }, y = Object.keys(h).filter((S) => u.includes(S)), b = y.map((S, C) => /* @__PURE__ */ G.jsxs("th", { style: h[S] && { minWidth: h[S] }, children: [
    /* @__PURE__ */ G.jsx(Ny, { id: "table", field: S }),
    S,
    ["Section", "Datatype", "Cardinality", "Unit"].includes(S) && /* @__PURE__ */ G.jsx(aA, { field: S, filters: r, setFilters: c, allValues: f, filteredValues: d })
  ] }, C)), T = l.map((S) => y.map((C, M) => {
    let R = /* @__PURE__ */ G.jsx(Sa, { text: S[C], searchTerm: i });
    return C === "Terms" ? R = /* @__PURE__ */ G.jsx(by, { terms: S[C], searchTerm: i }) : ["Enumeration", "Additional Missing Value Codes"].includes(C) && (R = S[C] === "" || S[C] === void 0 ? S[C] : /* @__PURE__ */ G.jsx(Sy, { values: S[C], searchTerm: i })), /* @__PURE__ */ G.jsx("td", { children: R }, M);
  }));
  return /* @__PURE__ */ G.jsx(
    SE,
    {
      ref: p,
      className: $_.table,
      totalCount: T.length,
      itemContent: (S) => T[S],
      fixedHeaderContent: () => /* @__PURE__ */ G.jsx("tr", { children: b }),
      atTopStateChange: (S) => g(!S)
    }
  );
}
function oA({ activeView: l, variables: i, allValues: u, filteredValues: r, searchTerm: c, filters: f, setFilters: d }) {
  const [p, g] = ot.useState(!1), [h, y] = ot.useState(["Id", "Section", "Label", "Datatype", "Cardinality", "Enumeration", "Additional Missing Value Codes"]), [b, T] = ot.useState("Id"), [S, C] = ot.useState("Ascending"), M = i.sort((w, O) => S === "Ascending" ? w[b].localeCompare(O[b]) : O[b].localeCompare(w[b])), R = ot.useRef();
  return /* @__PURE__ */ G.jsxs("div", { style: { display: l === "table" ? "block" : "none" }, children: [
    /* @__PURE__ */ G.jsx(J_, { sortField: b, setSortField: T, sortDirection: S, setSortDirection: C, checkedColumns: h, setCheckedColumns: y }),
    /* @__PURE__ */ G.jsx(iA, { variables: M, searchTerm: c, checkedColumns: h, filters: f, setFilters: d, allValues: u, filteredValues: r, tableRef: R, setShowScrollTop: g }),
    p && /* @__PURE__ */ G.jsx(Hy, { scrollRef: R })
  ] });
}
function rA({ activeView: l, variables: i, searchTerm: u }) {
  const [r, c] = ot.useState({ Section: [], Datatype: [], Cardinality: [], Unit: [] }), f = Object.keys(r).reduce((h, y) => (h[y] = [...new Set(i.map((b) => b[y]).filter((b) => b.trim() !== ""))].sort(), h), {}), d = i.filter((h) => {
    for (const y in h)
      if (h[y].toLowerCase().includes(u.toLowerCase())) return !0;
  }), p = Object.keys(r).reduce((h, y) => (h[y] = [...new Set(d.map((b) => b[y]).filter((b) => b.trim() !== ""))].sort(), h), {}), g = Object.keys(r).reduce((h, y) => {
    const b = r[y].filter((T) => p[y].includes(T));
    return b.length === 0 ? h : h.filter((T) => b.includes(T[y]));
  }, d);
  return /* @__PURE__ */ G.jsxs("div", { className: A0.content, children: [
    /* @__PURE__ */ G.jsxs("p", { className: A0.count, children: [
      l === "table" && Object.values(r).some((h) => h.length > 0) ? `${g.length} of ` : "",
      d.length,
      " Result(s)"
    ] }),
    /* @__PURE__ */ G.jsx(Y_, { activeView: l, variables: d, searchTerm: u }),
    /* @__PURE__ */ G.jsx(oA, { activeView: l, variables: g, allValues: f, filteredValues: p, searchTerm: u, filters: r, setFilters: c })
  ] });
}
function uA({ theme: l, data: i, initialView: u = "list", showSearch: r = !0, heading: c = "Data Dictionary Viewer" }) {
  const [f, d] = ot.useState(u), [p, g] = ot.useState(""), [h, y] = ot.useState([]), [b, T] = ot.useState(!0), [S, C] = ot.useTransition(), M = (O) => {
    C(() => g(O.target.value));
  }, R = (O) => {
    Ux.parse(O, {
      header: !0,
      skipEmptyLines: !0,
      complete: (U) => {
        y(U.data), T(!1);
      }
    });
  }, w = (O) => {
    try {
      O.toLowerCase().endsWith(".csv") && fetch(O).then((U) => U.text()).then((U) => R(U)), O.toLowerCase().includes("radxdatahub") ? fetch(O).then((U) => U.json()).then((U) => R(U.data)) : R(O);
    } catch (U) {
      console.log(U);
    }
  };
  return ot.useEffect(() => {
    w(i);
  }, [i]), b ? /* @__PURE__ */ G.jsx(G.Fragment, {}) : /* @__PURE__ */ G.jsx("div", { className: `${cl.container} ${l}`, children: /* @__PURE__ */ G.jsxs("div", { className: cl.main, children: [
    c && /* @__PURE__ */ G.jsx("h1", { className: cl.title, children: c }),
    /* @__PURE__ */ G.jsxs("div", { className: cl.search, children: [
      r && /* @__PURE__ */ G.jsx(Kx, { changeHandler: M }),
      S && /* @__PURE__ */ G.jsx(Gl, { icon: Dx, spin: !0, className: cl.loader }),
      /* @__PURE__ */ G.jsxs("div", { className: cl.buttons, children: [
        /* @__PURE__ */ G.jsxs(
          "button",
          {
            className: f === "list" ? cl.active : "",
            onClick: () => d("list"),
            children: [
              /* @__PURE__ */ G.jsx(Gl, { icon: Ox, className: cl.icon }),
              "List"
            ]
          }
        ),
        /* @__PURE__ */ G.jsxs(
          "button",
          {
            className: f === "table" ? cl.active : "",
            onClick: () => d("table"),
            children: [
              /* @__PURE__ */ G.jsx(Gl, { icon: Nx, className: cl.icon }),
              "Table"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ G.jsx(rA, { activeView: f, variables: h, searchTerm: p })
  ] }) });
}
customElements.define(
  "data-dictionary-viewer",
  oS(uA, {
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
