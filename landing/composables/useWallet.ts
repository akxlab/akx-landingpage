import Onboard, { WalletState } from '@web3-onboard/core'
import {init} from "@web3-onboard/vue";

// @ts-ignore
import injectedModule from '@web3-onboard/injected-wallets'

import {useNuxtApp} from "#app";



export default async function() {

const nuxtApp = useNuxtApp();
    const injected = injectedModule();
    const onboard = init
    ({
        wallets: [injected],
        chains: [
            {
                id: '0x1',
                token: 'ETH',
                label: 'Ethereum Mainnet',
                rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/53l6w5bqbfOhqQy4lf9hnsBMWDoJMTLL"
            },
            {
                id: '0x5',
                token: 'gETH',
                label: 'Goerli Testnet (Ethereum)',
                rpcUrl: "https://eth-goerli.g.alchemy.com/v2/FXS2JXRPwkyJUYgBoEAJRRQuoUp6eSbC"
            },
            {
                id: '0x89',
                token: 'MATIC',
                label: 'Matic Mainnet',
                rpcUrl: "https://polygon-mainnet.g.alchemy.com/v2/VY1uu4InhVu-LbPU80YsMj-R77-O4g-a"
            },
            {
                id: '0x13881',
                token: 'tMATIC',
                label: 'Mumbai Testnet',
                rpcUrl: "https://polygon-mumbai.g.alchemy.com/v2/dYBs4rt0uxcBgkMnAW2nZN3leZmWMngm"
            },
        ],
        appMetadata: {
            name: 'AKX',
            icon: "<svg id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 639.42 647.6\">\n" +
                "  <defs>\n" +
                "    <style>\n" +
                "      .cls-1 {\n" +
                "        fill: url(#linear-gradient);\n" +
                "      }\n" +
                "\n" +
                "      .cls-2 {\n" +
                "        fill: url(#linear-gradient-3);\n" +
                "      }\n" +
                "\n" +
                "      .cls-3 {\n" +
                "        fill: url(#linear-gradient-4);\n" +
                "      }\n" +
                "\n" +
                "      .cls-4 {\n" +
                "        fill: url(#linear-gradient-2);\n" +
                "      }\n" +
                "\n" +
                "      .cls-5 {\n" +
                "        fill: url(#linear-gradient-6);\n" +
                "      }\n" +
                "\n" +
                "      .cls-6 {\n" +
                "        fill: url(#linear-gradient-5);\n" +
                "      }\n" +
                "    </style>\n" +
                "    <linearGradient id=\"linear-gradient\" x1=\"-229.47\" y1=\"469.73\" x2=\"-213.93\" y2=\"469.73\" gradientTransform=\"translate(13125.96 24195.17) rotate(127.09) scale(51.26 52.39)\" gradientUnits=\"userSpaceOnUse\">\n" +
                "      <stop offset=\"0\" stop-color=\"#f09\"/>\n" +
                "      <stop offset=\"1\" stop-color=\"#009fe3\"/>\n" +
                "    </linearGradient>\n" +
                "    <linearGradient id=\"linear-gradient-2\" x1=\"-230.05\" y1=\"467.74\" x2=\"-211.11\" y2=\"467.74\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "    <linearGradient id=\"linear-gradient-3\" x1=\"-230.14\" y1=\"474.97\" x2=\"-211.08\" y2=\"474.97\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "    <linearGradient id=\"linear-gradient-4\" x1=\"-230.17\" y1=\"468.6\" x2=\"-211.03\" y2=\"468.6\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "    <linearGradient id=\"linear-gradient-5\" x1=\"-230.15\" y1=\"462.97\" x2=\"-211.08\" y2=\"462.97\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "    <linearGradient id=\"linear-gradient-6\" x1=\"-230.08\" y1=\"468.64\" x2=\"-211.21\" y2=\"468.64\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "  </defs>\n" +
                "  <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n" +
                "    <g>\n" +
                "      <path class=\"cls-1\" d=\"M432.7,647.6h200.68l6.05-11.29-211.05-317.39L632.9,11.31l-6.05-11.31h-200.68l-6.06,3.28-100.61,151.72h-.39L218.5,3.28l-6.06-3.28H11.78L5.71,11.31,210.25,318.92,0,636.32l6.05,11.29H205.93l6.05-3.28,106.97-160.48,.66-.02,107.03,160.54,6.05,3.24Zm9.13-14.57l26.33-114.62,144.36,114.62h-170.69Zm160.01-27.03l-131.67-104.56-34.17-144.82,165.84,249.37Zm-181.98-300.51l-39.22-63.25,58.07-79.98,29.82,70.03-48.67,73.21Zm-8.74,13.44l-72.18,118.07,36.36-175.81,35.82,57.74Zm67.03-101.12l-28.87-67.83,148.03-111.4-119.16,179.23ZM605.1,14.57l-158.8,119.5-12.1-119.5h170.9Zm-184.1,13.67l11.87,117.32-60.92,83.89-44.27-62.19L421,28.24Zm-124.41,119.1l-137.66-53.03L212.21,20.07l84.38,127.27ZM198.29,14.57l-52.52,73.2L35.81,14.57H198.29ZM37.82,33.37l103.66,69,61.95,180.06L37.82,33.37Zm121.7,76.72l151.05,58.19,50.49,70.94-133.91,67.44L159.52,110.09Zm54.24,229.84l13.56,137.32L33.16,612.57,213.76,339.94Zm-13.88,293.1H29.23l195.44-136.2-24.79,136.2Zm19.45-25.92l21.74-119.34,59.82-3.02-81.56,122.36Zm98.14-138.05l-3.11,.48-72.87,3.66-14.82-150.03,135.06-68.01-44.26,213.91Zm99.14-131.29l37.34,158.34-119-24.77,81.65-133.57Zm38.29,173.41l-25.5,111.07-90.12-135.16,115.62,24.09Z\"/>\n" +
                "      <path class=\"cls-4\" d=\"M232.98,463.07c-11.06,0-20.03,8.95-20.03,20.03s8.97,20.03,20.03,20.03,20.02-8.98,20.02-20.03-8.96-20.03-20.02-20.03Z\"/>\n" +
                "      <path class=\"cls-2\" d=\"M148.59,72.34c-14.36,0-26.01,11.65-26.01,26.03s11.65,25.98,26.01,25.98,26-11.64,26-25.98-11.64-26.03-26-26.03Z\"/>\n" +
                "      <path class=\"cls-3\" d=\"M371.37,206.67c-19.11,0-34.59,15.48-34.59,34.6s15.47,34.59,34.59,34.59,34.6-15.47,34.6-34.59-15.49-34.6-34.6-34.6Z\"/>\n" +
                "      <path class=\"cls-6\" d=\"M460.96,477.64c-17.51,0-31.69,14.19-31.69,31.67s14.18,31.67,31.69,31.67,31.68-14.19,31.68-31.67-14.19-31.67-31.68-31.67Z\"/>\n" +
                "      <path class=\"cls-5\" d=\"M459.24,148.1c0-10.69-8.67-19.35-19.37-19.35s-19.34,8.65-19.34,19.35,8.67,19.35,19.34,19.35,19.37-8.65,19.37-19.35Z\"/>\n" +
                "    </g>\n" +
                "  </g>\n" +
                "</svg>",
            logo:"<svg id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 639.42 647.6\">\n" +
                "  <defs>\n" +
                "    <style>\n" +
                "      .cls-1 {\n" +
                "        fill: url(#linear-gradient);\n" +
                "      }\n" +
                "\n" +
                "      .cls-2 {\n" +
                "        fill: url(#linear-gradient-3);\n" +
                "      }\n" +
                "\n" +
                "      .cls-3 {\n" +
                "        fill: url(#linear-gradient-4);\n" +
                "      }\n" +
                "\n" +
                "      .cls-4 {\n" +
                "        fill: url(#linear-gradient-2);\n" +
                "      }\n" +
                "\n" +
                "      .cls-5 {\n" +
                "        fill: url(#linear-gradient-6);\n" +
                "      }\n" +
                "\n" +
                "      .cls-6 {\n" +
                "        fill: url(#linear-gradient-5);\n" +
                "      }\n" +
                "    </style>\n" +
                "    <linearGradient id=\"linear-gradient\" x1=\"-229.47\" y1=\"469.73\" x2=\"-213.93\" y2=\"469.73\" gradientTransform=\"translate(13125.96 24195.17) rotate(127.09) scale(51.26 52.39)\" gradientUnits=\"userSpaceOnUse\">\n" +
                "      <stop offset=\"0\" stop-color=\"#f09\"/>\n" +
                "      <stop offset=\"1\" stop-color=\"#009fe3\"/>\n" +
                "    </linearGradient>\n" +
                "    <linearGradient id=\"linear-gradient-2\" x1=\"-230.05\" y1=\"467.74\" x2=\"-211.11\" y2=\"467.74\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "    <linearGradient id=\"linear-gradient-3\" x1=\"-230.14\" y1=\"474.97\" x2=\"-211.08\" y2=\"474.97\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "    <linearGradient id=\"linear-gradient-4\" x1=\"-230.17\" y1=\"468.6\" x2=\"-211.03\" y2=\"468.6\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "    <linearGradient id=\"linear-gradient-5\" x1=\"-230.15\" y1=\"462.97\" x2=\"-211.08\" y2=\"462.97\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "    <linearGradient id=\"linear-gradient-6\" x1=\"-230.08\" y1=\"468.64\" x2=\"-211.21\" y2=\"468.64\" gradientTransform=\"translate(10174.42 19456.77) rotate(127.09) scale(42.45 41.42)\" xlink:href=\"#linear-gradient\"/>\n" +
                "  </defs>\n" +
                "  <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n" +
                "    <g>\n" +
                "      <path class=\"cls-1\" d=\"M432.7,647.6h200.68l6.05-11.29-211.05-317.39L632.9,11.31l-6.05-11.31h-200.68l-6.06,3.28-100.61,151.72h-.39L218.5,3.28l-6.06-3.28H11.78L5.71,11.31,210.25,318.92,0,636.32l6.05,11.29H205.93l6.05-3.28,106.97-160.48,.66-.02,107.03,160.54,6.05,3.24Zm9.13-14.57l26.33-114.62,144.36,114.62h-170.69Zm160.01-27.03l-131.67-104.56-34.17-144.82,165.84,249.37Zm-181.98-300.51l-39.22-63.25,58.07-79.98,29.82,70.03-48.67,73.21Zm-8.74,13.44l-72.18,118.07,36.36-175.81,35.82,57.74Zm67.03-101.12l-28.87-67.83,148.03-111.4-119.16,179.23ZM605.1,14.57l-158.8,119.5-12.1-119.5h170.9Zm-184.1,13.67l11.87,117.32-60.92,83.89-44.27-62.19L421,28.24Zm-124.41,119.1l-137.66-53.03L212.21,20.07l84.38,127.27ZM198.29,14.57l-52.52,73.2L35.81,14.57H198.29ZM37.82,33.37l103.66,69,61.95,180.06L37.82,33.37Zm121.7,76.72l151.05,58.19,50.49,70.94-133.91,67.44L159.52,110.09Zm54.24,229.84l13.56,137.32L33.16,612.57,213.76,339.94Zm-13.88,293.1H29.23l195.44-136.2-24.79,136.2Zm19.45-25.92l21.74-119.34,59.82-3.02-81.56,122.36Zm98.14-138.05l-3.11,.48-72.87,3.66-14.82-150.03,135.06-68.01-44.26,213.91Zm99.14-131.29l37.34,158.34-119-24.77,81.65-133.57Zm38.29,173.41l-25.5,111.07-90.12-135.16,115.62,24.09Z\"/>\n" +
                "      <path class=\"cls-4\" d=\"M232.98,463.07c-11.06,0-20.03,8.95-20.03,20.03s8.97,20.03,20.03,20.03,20.02-8.98,20.02-20.03-8.96-20.03-20.02-20.03Z\"/>\n" +
                "      <path class=\"cls-2\" d=\"M148.59,72.34c-14.36,0-26.01,11.65-26.01,26.03s11.65,25.98,26.01,25.98,26-11.64,26-25.98-11.64-26.03-26-26.03Z\"/>\n" +
                "      <path class=\"cls-3\" d=\"M371.37,206.67c-19.11,0-34.59,15.48-34.59,34.6s15.47,34.59,34.59,34.59,34.6-15.47,34.6-34.59-15.49-34.6-34.6-34.6Z\"/>\n" +
                "      <path class=\"cls-6\" d=\"M460.96,477.64c-17.51,0-31.69,14.19-31.69,31.67s14.18,31.67,31.69,31.67,31.68-14.19,31.68-31.67-14.19-31.67-31.68-31.67Z\"/>\n" +
                "      <path class=\"cls-5\" d=\"M459.24,148.1c0-10.69-8.67-19.35-19.37-19.35s-19.34,8.65-19.34,19.35,8.67,19.35,19.34,19.35,19.37-8.65,19.37-19.35Z\"/>\n" +
                "    </g>\n" +
                "  </g>\n" +
                "</svg>",
            description: 'AKX Ecosystem Web3 DAPP',
            recommendedInjectedWallets: [
                { name: 'MetaMask', url: 'https://metamask.io' },
                { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },

            ]
        },
        notify: {
            desktop: {
                enabled: true,
                transactionHandler: transaction => {
                    console.log({ transaction })
                    if (transaction.eventCode === 'txPool') {
                        return {
                            type: 'success',
                            message: 'Your transaction from AKX is pending',
                        }
                    }
                },
                position: 'bottomLeft'
            },
            mobile: {
                enabled: true,
                transactionHandler: transaction => {
                    console.log({ transaction })
                    if (transaction.eventCode === 'txPool') {
                        return {
                            type: 'success',
                            message: 'Your transaction from AKX is pending',
                        }
                    }
                },
                position: 'topRight'
            }
        },
        accountCenter: {
            desktop: {
                position: 'topRight',
                enabled: true,
                minimal: true
            },
            mobile: {
                position: 'topRight',
                enabled: true,
                minimal: true
            }
        },
    });

  

   

        const switchChain = async (chainId:string) => {
           
                
            const w = onboard.state.get();
            console.log(w);
            if(w) {
            const success = await onboard.setChain({chainId:chainId});
            if(success) {
                return true;
            }
        }
            
            return false;
        

}







    const connectWallet = async ():Promise<any> => {
        const wallets = await onboard.connectWallet()
        const walletsSub = onboard.state.select('wallets')
        const { unsubscribe } = walletsSub.subscribe((wallets) => {
          const connectedWallets = wallets.map(({ label }) => label)
          window.localStorage.setItem('connectedWallets', JSON.stringify(connectedWallets))
        });
      

        return wallets[0];
    }

    const disconnectWallet = async () => {
        if(onboard) {
        const w = onboard.state.get().wallets[0];
        if(w) {
        await onboard.disconnectWallet({label: w.label});
        }
        } else {
            return;
        }
       

    }

    return {
        switchChain,
        onboard,
        connectWallet,
        disconnectWallet
    }

}