import {
  init,
  require_build,
  require_eventemitter3,
  require_lodash,
  require_lodash2
} from "./chunk-JCO65AIX.js";
import {
  require_joi_browser_min
} from "./chunk-MYILNTZI.js";
import {
  vue_demi_exports
} from "./chunk-ZL7CHZ5F.js";
import "./chunk-ZQRKHWJX.js";
import "./chunk-DOGLEXVZ.js";
import "./chunk-S6BB4OWC.js";
import "./chunk-LUAEQXGQ.js";
import "./chunk-NEUIYBRM.js";
import "./chunk-RRF6SA7V.js";
import "./chunk-ZZSVE7H3.js";
import {
  __reExport,
  __toESM
} from "./chunk-IJ7IQSKN.js";

// node_modules/@web3-onboard/core/dist/index.js
var import_joi = __toESM(require_joi_browser_min());
var import_lodash = __toESM(require_lodash());
var import_resolution = __toESM(require_build());
var import_lodash2 = __toESM(require_lodash2());
var import_eventemitter3 = __toESM(require_eventemitter3());

// external:@vueuse/core
var core_exports = {};
__reExport(core_exports, core_star);
import * as core_star from "@vueuse/core";

// external:@vueuse/rxjs
var rxjs_exports = {};
__reExport(rxjs_exports, rxjs_star);
import * as rxjs_star from "@vueuse/rxjs";

// node_modules/@web3-onboard/vue/dist/index.js
var web3Onboard = null;
var alreadyConnectedWallets = (0, core_exports.useStorage)("alreadyConnectedWallets", []);
var lastConnectionTimestamp = (0, core_exports.useStorage)("lastWalletConnectionTimestamp", 0);
var onboardState = (0, vue_demi_exports.shallowRef)({});
var updateAlreadyConnectedWallets = () => {
  alreadyConnectedWallets.value = onboardState.value.wallets.map((w) => w.label);
};
var init2 = (options) => {
  web3Onboard = init(options);
  onboardState.value = web3Onboard.state.get();
  (0, rxjs_exports.useSubscription)(web3Onboard.state.select().subscribe((update) => {
    onboardState.value = update;
    updateAlreadyConnectedWallets();
  }));
  return web3Onboard;
};
var useOnboard = () => {
  if (!web3Onboard) {
    throw new Error("web3Onboard is not initialized");
  }
  const connectingWallet = (0, vue_demi_exports.ref)(false);
  const wallets = (0, vue_demi_exports.computed)(() => onboardState.value.wallets);
  const connectedWallet = (0, vue_demi_exports.computed)(() => wallets.value.length > 0 ? wallets.value[0] : null);
  const connectWallet = async (options) => {
    connectingWallet.value = true;
    await web3Onboard.connectWallet(options);
    lastConnectionTimestamp.value = Date.now();
    connectingWallet.value = false;
  };
  const disconnectWallet = async (wallet) => {
    connectingWallet.value = true;
    await web3Onboard.disconnectWallet(wallet);
    updateAlreadyConnectedWallets();
    connectingWallet.value = false;
  };
  const disconnectConnectedWallet = async () => {
    if (connectedWallet.value) {
      await disconnectWallet({ label: connectedWallet.value.label });
    }
  };
  const settingChain = (0, vue_demi_exports.ref)(false);
  const connectedChain = (0, vue_demi_exports.computed)(() => connectedWallet && connectedWallet.value && connectedWallet.value.chains[0] || null);
  const getChain = (walletLabel) => {
    const wallet = onboardState.value.wallets.find((w) => w.label === walletLabel);
    return wallet && wallet.chains[0] || null;
  };
  const setChain = async (options) => {
    settingChain.value = true;
    await web3Onboard.setChain(options);
    settingChain.value = false;
  };
  return {
    alreadyConnectedWallets,
    connectWallet,
    connectedChain,
    connectedWallet,
    connectingWallet: (0, vue_demi_exports.readonly)(connectingWallet),
    disconnectConnectedWallet,
    disconnectWallet,
    getChain,
    lastConnectionTimestamp,
    setChain,
    settingChain: (0, vue_demi_exports.readonly)(settingChain),
    wallets
  };
};
export {
  init2 as init,
  useOnboard
};
//# sourceMappingURL=@web3-onboard_vue.js.map
