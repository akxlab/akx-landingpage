import {
  bowser_default
} from "./chunk-U7SIKSNY.js";
import "./chunk-IJ7IQSKN.js";

// node_modules/@metamask/onboarding/dist/metamask-onboarding.es.js
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var ONBOARDING_STATE = {
  INSTALLED: "INSTALLED",
  NOT_INSTALLED: "NOT_INSTALLED",
  REGISTERED: "REGISTERED",
  REGISTERING: "REGISTERING",
  RELOADING: "RELOADING"
};
var EXTENSION_DOWNLOAD_URL = {
  CHROME: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
  FIREFOX: "https://addons.mozilla.org/firefox/addon/ether-metamask/",
  DEFAULT: "https://metamask.io"
};
var REGISTRATION_IN_PROGRESS = "REGISTRATION_IN_PROGRESS";
var FORWARDER_ID = "FORWARDER_ID";
var Onboarding = function() {
  function Onboarding2(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.forwarderOrigin, forwarderOrigin = _c === void 0 ? "https://fwd.metamask.io" : _c, _d = _b.forwarderMode, forwarderMode = _d === void 0 ? Onboarding2.FORWARDER_MODE.INJECT : _d;
    this.forwarderOrigin = forwarderOrigin;
    this.forwarderMode = forwarderMode;
    this.state = Onboarding2.isMetaMaskInstalled() ? ONBOARDING_STATE.INSTALLED : ONBOARDING_STATE.NOT_INSTALLED;
    var browser = Onboarding2._detectBrowser();
    if (browser) {
      this.downloadUrl = EXTENSION_DOWNLOAD_URL[browser];
    } else {
      this.downloadUrl = EXTENSION_DOWNLOAD_URL.DEFAULT;
    }
    this._onMessage = this._onMessage.bind(this);
    this._onMessageFromForwarder = this._onMessageFromForwarder.bind(this);
    this._openForwarder = this._openForwarder.bind(this);
    this._openDownloadPage = this._openDownloadPage.bind(this);
    this.startOnboarding = this.startOnboarding.bind(this);
    this.stopOnboarding = this.stopOnboarding.bind(this);
    window.addEventListener("message", this._onMessage);
    if (forwarderMode === Onboarding2.FORWARDER_MODE.INJECT && sessionStorage.getItem(REGISTRATION_IN_PROGRESS) === "true") {
      Onboarding2._injectForwarder(this.forwarderOrigin);
    }
  }
  Onboarding2.prototype._onMessage = function(event) {
    if (event.origin !== this.forwarderOrigin) {
      return void 0;
    }
    if (event.data.type === "metamask:reload") {
      return this._onMessageFromForwarder(event);
    }
    console.debug("Unknown message from '" + event.origin + "' with data " + JSON.stringify(event.data));
    return void 0;
  };
  Onboarding2.prototype._onMessageUnknownStateError = function(state) {
    throw new Error("Unknown state: '" + state + "'");
  };
  Onboarding2.prototype._onMessageFromForwarder = function(event) {
    return __awaiter(this, void 0, void 0, function() {
      var _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a = this.state;
            switch (_a) {
              case ONBOARDING_STATE.RELOADING:
                return [3, 1];
              case ONBOARDING_STATE.NOT_INSTALLED:
                return [3, 2];
              case ONBOARDING_STATE.INSTALLED:
                return [3, 3];
              case ONBOARDING_STATE.REGISTERING:
                return [3, 5];
              case ONBOARDING_STATE.REGISTERED:
                return [3, 6];
            }
            return [3, 7];
          case 1:
            console.debug("Ignoring message while reloading");
            return [3, 8];
          case 2:
            console.debug("Reloading now to register with MetaMask");
            this.state = ONBOARDING_STATE.RELOADING;
            location.reload();
            return [3, 8];
          case 3:
            console.debug("Registering with MetaMask");
            this.state = ONBOARDING_STATE.REGISTERING;
            return [4, Onboarding2._register()];
          case 4:
            _b.sent();
            this.state = ONBOARDING_STATE.REGISTERED;
            event.source.postMessage({ type: "metamask:registrationCompleted" }, event.origin);
            this.stopOnboarding();
            return [3, 8];
          case 5:
            console.debug("Already registering - ignoring reload message");
            return [3, 8];
          case 6:
            console.debug("Already registered - ignoring reload message");
            return [3, 8];
          case 7:
            this._onMessageUnknownStateError(this.state);
            _b.label = 8;
          case 8:
            return [2];
        }
      });
    });
  };
  Onboarding2.prototype.startOnboarding = function() {
    sessionStorage.setItem(REGISTRATION_IN_PROGRESS, "true");
    this._openDownloadPage();
    this._openForwarder();
  };
  Onboarding2.prototype.stopOnboarding = function() {
    if (sessionStorage.getItem(REGISTRATION_IN_PROGRESS) === "true") {
      if (this.forwarderMode === Onboarding2.FORWARDER_MODE.INJECT) {
        console.debug("Removing forwarder");
        Onboarding2._removeForwarder();
      }
      sessionStorage.setItem(REGISTRATION_IN_PROGRESS, "false");
    }
  };
  Onboarding2.prototype._openForwarder = function() {
    if (this.forwarderMode === Onboarding2.FORWARDER_MODE.OPEN_TAB) {
      window.open(this.forwarderOrigin, "_blank");
    } else {
      Onboarding2._injectForwarder(this.forwarderOrigin);
    }
  };
  Onboarding2.prototype._openDownloadPage = function() {
    window.open(this.downloadUrl, "_blank");
  };
  Onboarding2.isMetaMaskInstalled = function() {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  };
  Onboarding2._register = function() {
    return window.ethereum.request({
      method: "wallet_registerOnboarding"
    });
  };
  Onboarding2._injectForwarder = function(forwarderOrigin) {
    var container = document.body;
    var iframe = document.createElement("iframe");
    iframe.setAttribute("height", "0");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("style", "display: none;");
    iframe.setAttribute("src", forwarderOrigin);
    iframe.setAttribute("id", FORWARDER_ID);
    container.insertBefore(iframe, container.children[0]);
  };
  Onboarding2._removeForwarder = function() {
    var _a;
    (_a = document.getElementById(FORWARDER_ID)) === null || _a === void 0 ? void 0 : _a.remove();
  };
  Onboarding2._detectBrowser = function() {
    var browserInfo = bowser_default.parse(window.navigator.userAgent);
    if (browserInfo.browser.name === "Firefox") {
      return "FIREFOX";
    } else if (["Chrome", "Chromium"].includes(browserInfo.browser.name || "")) {
      return "CHROME";
    }
    return null;
  };
  Onboarding2.FORWARDER_MODE = {
    INJECT: "INJECT",
    OPEN_TAB: "OPEN_TAB"
  };
  return Onboarding2;
}();
var metamask_onboarding_es_default = Onboarding;
export {
  metamask_onboarding_es_default as default
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=@metamask_onboarding.js.map
