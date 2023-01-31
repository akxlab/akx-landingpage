<script lang="ts" setup>

import {useNuxtApp, useState} from "#app";
import {onMounted, ref, useFetch, useSupabaseClient, watch} from "#imports";
import {useWallet} from "#imports";
import {useOrderStore} from "~/stores/order";
import axios from "axios";
import Modal from "~/components/common/Modal.vue";

const amountIn = useState('amount_in', () => 0);
const amountOut= useState('amountOut', () => 0);



const selectedChip = useState('sel_chip', () => "");
const balance = useState('crypto_bal', () => "");
const walAddress = useState('wallet_tosend', () => undefined);
const showOrderRight = useState('show_order_bar', () => true);
const order = useOrderStore();
const price = useState('price_item', () => 0);
const showTutorial = useState('show_tutorial', () => false);


function calcOut() {
  // @ts-ignore
  amountOut.value = (amountIn.value / price.value).toLocaleString();
}

const {connectWallet, disconnectWallet, onboard} = await useWallet();
const connected = useState('connected', () => false);
const wallets = useState('wallets', () => []);
// @ts-ignore
wallets.value = onboard.state.get().wallets;
connected.value = wallets.value.length > 0;

const isPolygon = useState('is_polygon', () => false);
const isEth = useState('is_eth', () => false);
const showConfirm = useState('show_confirm', () => true);

const doConnect = async (chainId) => {
  await connectWallet();
if(chainId === 'eth') {
  await onboard.setChain({chainId: "0x1"});
} else {
  await onboard.setChain({chainId: "0x89"});
}


  // @ts-ignore
  wallets.value = onboard.state.get().wallets;

  const mainWallet = wallets.value[0];

  console.log(mainWallet);

  if(mainWallet.chains[0].id === "0x89" && chainId !== 'eth') {
    isPolygon.value = true;
    // @ts-ignore
    balance.value = mainWallet.accounts[0].balance["MATIC"].substr(0,8) + " matics";
    walAddress.value = mainWallet.accounts[0].address;
  }
  else if (mainWallet.chains[0].id === "0x1" && chainId !== 'matic') {
    isEth.value = true;
    // @ts-ignore
    balance.value = mainWallet.accounts[0].balance["ETH"].substr(0,8) + " eth";
    walAddress.value = mainWallet.accounts[0].address;
  } else {
    if(chainId === 'eth') {
      await onboard.setChain({chainId: "0x1"});
    } else {
      await onboard.setChain({chainId: "0x89"});
    }

  }
  showConfirm.value = true;
  connected.value = wallets.value.length > 0;

}

function showConfirmBar() {
  showOrderRight.value = true;
  useNuxtApp().$bus.$emit('show_bar', true);
}


const loading = useState('loading_state', () => false);



onMounted(async () => {

  selectedChip.value = 'usd';
    // @ts-ignore
    wallets.value = onboard.state.get().wallets;
    connected.value = wallets.value.length > 0;
// @ts-ignore
    const {uuid} = useDB();

    if (!order.orderId) {
      order.$patch({order_uuid: uuid.data[0].id})
    }



    watch(amountIn, async (val, old) => {
      loading.value = true;
      order.setItemQty(val);
      await order.setCurrency(selectedChip.value);
      price.value = order.getPrice;
      amountIn.value = order.getQty;
      if (val !== old) {
        calcOut();
      }
      loading.value = false;
    });

  watch(selectedChip, async (val, old) => {
    loading.value = true;
    order.setItemQty(amountIn.value);

    await order.setCurrency(val);
    price.value = order.getPrice;
    amountIn.value = order.getQty;
    if (val !== old) {
      calcOut();
    }
    if(val !== 'eth' && val !== 'matic') {
      showConfirm.value = true;
    } else {
      showConfirm.value = false;
    }
    loading.value = false;
  });



})

function resetAKXVal() {
  amountIn.value = 0;
  amountOut.value = 0;
}

function showModalTutorial() {
 useNuxtApp().$bus.$emit('open_dialog');
}


</script>

<template>


     <v-form>

        <v-row>
          <v-col cols="12" lg="12">

              <v-chip-group v-model="selectedChip" class="pa-3">


                 <v-chip active-class="active_chip" selected-class="active_chip" link value="usd" key="usd_1">USD</v-chip>
                  <v-chip active-class="active_chip" selected-class="active_chip" link value="cad" key="cad_1">CAD</v-chip>
                  <v-chip active-class="active_chip" selected-class="active_chip" link value="eur" key="eur_1">EUR</v-chip>
            <v-chip active-class="active_chip" selected-class="active_chip" link value="eth" key="eth_1" @click="doConnect('eth')">ETH</v-chip>
              <v-chip active-class="active_chip" selected-class="active_chip" link value="matic" key="matic_1" @click="doConnect('matic')">MATIC</v-chip>
              </v-chip-group>

          </v-col>
        <v-col cols="12" v-if="connected">
          <strong>Balance available: {{balance}}</strong>
        </v-col>
        </v-row>


          <v-row><v-col cols="12" lg="6"><v-text-field  class="large_number"  placeholder="amount you want to send" variant="outlined" autofocus single-line v-model="amountIn" prefix="you send" :suffix="selectedChip" append-icon="fa-light fa-arrow-right"></v-text-field></v-col>
          <v-col cols="12" lg="6"><v-text-field  class="large_number" :loading="loading" @keydown="resetAKXVal"  color="primary" style="color:#16a79e;opacity:1 !important;" single-line v-model="amountOut" variant="outlined" placeholder="how many akx you get" prefix="you get" suffix="AKX"></v-text-field></v-col>
          <v-col cols="12" lg="12" align="right">
            <div v-if="!connected && (selectedChip !== 'matic' && selectedChip !== 'eth')">
              <v-text-field single-line aria-required="true" variant="outlined" prefix="send my akx to:" label="Enter your wallet address to receive your AKX" v-model="walAddress" />
            </div>
            <div v-else-if="connected">
              <h2 class="sofia-pro-light">We will send your AKX to your connected wallet address: <strong class="sofia-pro-bold" style="color:#16a79e">{{walAddress}}</strong></h2>
            </div>
            <div v-else-if="!connected || (selectedChip === 'matic' && selectedChip === 'eth')">
              <p style="text-align:left;max-width:50%;float:left;">
                To use ETHEREUM or POLYGON MATIC you need to use a cryptocurrency wallet such as metamask or coinbase. After the presale, we will create non-custodial wallets to make the process easier for everyone. If you do not own a wallet and want to install one here is a link to a youtube tutorial to do so.<br/>
                <v-btn variant="flat" @click="showModalTutorial" class="mt-5" size="large" append-icon="fa-duotone fa-video">WATCH THE TUTORIAL</v-btn>
                <v-divider class="mt-8 mb-8" />
                If you do have a wallet please click on the connect your wallet button to continue the process and confirm your order.
              </p>
              <v-btn append-icon="fa-light fa-wallet" @click="doConnect(order.getCurrency)" variant="flat" size="x-large" class="sofia-pro-light mt-5" width="100%" color="#00DC82FF" height="60" style="color:black;font-size:2rem;">Connect your wallet</v-btn>
            </div>

            </v-col>

            <v-col cols="12">
              <div v-if="showConfirm">
              <v-btn variant="elevated" size="x-large" class="sofia-pro-bold" color="#00DC82FF" style="color:black" width="100%" @click="showConfirmBar">CONFIRM YOUR ORDER</v-btn>
              </div>
            </v-col>
          </v-row>
       <CommonModal title="Wallet Video Tutorial" :show="showTutorial">
         <iframe width="100%" height="315" src="https://www.youtube.com/embed/yL69k1bZFug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </CommonModal>

      </v-form>


</template>

<style>
.v-field > * {
  opacity:1;
  -moz-opacity:1;
  --webkit-opacity:1;
}
.large_number input {
  font-size:2rem;
  font-weight: 700;
  padding-left:30px;
}

.chip_currency {
  border:2px solid transparent;
  transition: 0.1s all ease-in;
}

.chip_currency:hover,  .active_chip {
  border:2px solid transparent;
  background: linear-gradient(90deg,#18181b,#18181b),linear-gradient(to bottom right,#00dc82,#36e4da,#16a79e);
  background-clip: padding-box,border-box;
  background-origin: padding-box,border-box;
  transition: 0.1s all ease-in;
}

.v-chip.v-chip--size-default {
  padding: 0 18px;
  text-align-all:left !important;
  display:flex;
}

</style>