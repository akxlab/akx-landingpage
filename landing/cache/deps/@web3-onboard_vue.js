import {
  init,
  require_build,
  require_eventemitter3,
  require_lodash,
  require_lodash2
} from "./chunk-VWHCFJNS.js";
import {
  require_joi_browser_min
} from "./chunk-JONS2XA5.js";
import "./chunk-CD4DXL75.js";
import "./chunk-Q736XWYC.js";
import "./chunk-PLJZZE73.js";
import "./chunk-5XDMH3PH.js";
import "./chunk-G3ZEUJWI.js";
import "./chunk-QISMADBH.js";
import "./chunk-PTVRTJQI.js";
import "./chunk-UDSUYEUS.js";
import {
  __toESM
} from "./chunk-LFBQMW2U.js";

// node_modules/@web3-onboard/core/dist/index.js
var import_joi = __toESM(require_joi_browser_min());
var import_lodash = __toESM(require_lodash());
var import_resolution = __toESM(require_build());
var import_lodash2 = __toESM(require_lodash2());
var import_eventemitter3 = __toESM(require_eventemitter3());

// node_modules/@web3-onboard/vue/dist/index.js
import { ref, computed, readonly, shallowRef } from "vue-demi";
import { useStorage } from "@vueuse/core";
import { useSubscription } from "@vueuse/rxjs";
var web3Onboard = null;
var alreadyConnectedWallets = useStorage("alreadyConnectedWallets", []);
var lastConnectionTimestamp = useStorage("lastWalletConnectionTimestamp", 0);
var onboardState = shallowRef({});
var updateAlreadyConnectedWallets = () => {
  alreadyConnectedWallets.value = onboardState.value.wallets.map((w) => w.label);
};
var init2 = (options) => {
  web3Onboard = init(options);
  onboardState.value = web3Onboard.state.get();
  useSubscription(web3Onboard.state.select().subscribe((update) => {
    onboardState.value = update;
    updateAlreadyConnectedWallets();
  }));
  return web3Onboard;
};
var useOnboard = () => {
  if (!web3Onboard) {
    throw new Error("web3Onboard is not initialized");
  }
  const connectingWallet = ref(false);
  const wallets = computed(() => onboardState.value.wallets);
  const connectedWallet = computed(() => wallets.value.length > 0 ? wallets.value[0] : null);
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
  const settingChain = ref(false);
  const connectedChain = computed(() => connectedWallet && connectedWallet.value && connectedWallet.value.chains[0] || null);
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
    connectingWallet: readonly(connectingWallet),
    disconnectConnectedWallet,
    disconnectWallet,
    getChain,
    lastConnectionTimestamp,
    setChain,
    settingChain: readonly(settingChain),
    wallets
  };
};
export {
  init2 as init,
  useOnboard
};
//# sourceMappingURL=@web3-onboard_vue.js.map
