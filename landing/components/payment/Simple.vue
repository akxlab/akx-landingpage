<script lang="ts" setup>

import {useNuxtApp, useState} from "#app";
import {onMounted, watch} from "#imports";
import {useWallet} from "#imports";

const amountIn = useState('amount_in', () => 1);
const amountOut= useState('amountOut', () => 0);
const currIn = "Matics";
const price = useState('matics_price', () => 0.01);

const selectedChip = useState('sel_chip', () => "");
const balance = useState('crypto_bal', () => "");
const walAddress = useState('wallet_tosend', () => undefined);


function calcOut(price:number) {
  amountOut.value = (amountIn.value / price).toLocaleString();
}

const {connectWallet, disconnectWallet, onboard} = await useWallet();
const connected = useState('connected', () => false);
const wallets = useState('wallets', () => []);
// @ts-ignore
wallets.value = onboard.state.get().wallets;
connected.value = wallets.value.length > 0;

const isPolygon = useState('is_polygon', () => false);
const isEth = useState('is_eth', () => false);

const doConnect = async () => {

  await connectWallet();
  // @ts-ignore
  wallets.value = onboard.state.get().wallets;

  const mainWallet = wallets.value[0];

  console.log(mainWallet);

  if(mainWallet.chains[0].id === "0x89") {
    isPolygon.value = true;
    // @ts-ignore
    balance.value = mainWallet.accounts[0].balance["MATIC"].substr(0,8) + " matics";
    walAddress.value = mainWallet.accounts[0].address;
  }
  else if (mainWallet.chains[0].id === "0x1") {
    isEth.value = true;
    // @ts-ignore
    balance.value = mainWallet.accounts[0].balance["ETH"].substr(0,8) + " eth";
    walAddress.value = mainWallet.accounts[0].address;
  }

  connected.value = wallets.value.length > 0;

}


onMounted(async () => {

  // @ts-ignore
 wallets.value = onboard.state.get().wallets;
  connected.value = wallets.value.length > 0;



  calcOut(price.value);
  selectedChip.value = "usd";



  watch(amountIn, (val, old) => {
    if(val !== old) {
      calcOut(price.value);
    }
  });




})


</script>

<template>

     <v-form>

        <v-row>
          <v-col cols="12" lg="12">

              <v-chip-group v-model="selectedChip" class="pa-3">


                 <v-chip active-class="active_chip" selected-class="active_chip" link value="usd" >USD</v-chip>
                  <v-chip active-class="active_chip" selected-class="active_chip" link value="cad">CAD</v-chip>
                  <v-chip active-class="active_chip" selected-class="active_chip" link value="euro">EUR</v-chip>
                 <div v-if="connected"> <v-chip active-class="active_chip" selected-class="active_chip" link value="eth" :disabled="!isEth">ETH</v-chip></div>
                <div v-if="connected"> <v-chip active-class="active_chip" selected-class="active_chip" link value="matic" :disabled="!isPolygon">MATIC</v-chip> </div>
                <div v-if="!connected"> <v-chip active-class="active_chip" selected-class="active_chip" link value="eth" @click="doConnect">ETH</v-chip></div>
                <div v-if="!connected"> <v-chip active-class="active_chip" selected-class="active_chip" link value="matic" @click="doConnect">MATIC</v-chip> </div>

              </v-chip-group>

          </v-col>
        <v-col cols="12" v-if="connected">
          <strong>Balance available: {{balance}}</strong>
        </v-col>
        </v-row>


          <v-row><v-col cols="12" lg="6"><v-text-field  class="large_number" @keydown="calcOut(this.value)" variant="outlined" autofocus single-line v-model="amountIn" prefix="you send" :suffix="selectedChip" append-icon="fa-light fa-arrow-right"></v-text-field></v-col>
          <v-col cols="12" lg="6"><v-text-field  class="large_number" autofocus single-line v-model="amountOut" variant="outlined" prefix="you get" suffix="AKX"></v-text-field></v-col>
          <v-col cols="12" lg="12" align="right">
            <div v-if="!connected || (selectedChip !== 'matic' && selectedChip !== 'eth')">
              <v-text-field single-line aria-required="true" variant="outlined" prefix="send my akx to:" label="Enter your wallet address to receive your AKX" v-model="walAddress" />
            </div>
            <div v-else>
              <h2 class="sofia-pro-light">We will send your AKX to your connected wallet address: <strong class="sofia-pro-bold" style="color:#16a79e">{{walAddress}}</strong></h2>


            </div>

            </v-col>

            <v-col cols="12">
              <v-btn variant="elevated" size="x-large" color="#00DC82FF" style="color:black" width="100%">CONFIRM YOUR ORDER</v-btn>
            </v-col>
          </v-row>

      </v-form>

</template>

<style>

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