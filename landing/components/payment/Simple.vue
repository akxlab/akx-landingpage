<script lang="ts" setup>

import {useState} from "#app";
import {onMounted, watch} from "#imports";

const amountIn = useState('amount_in', () => 1);
const amountOut= useState('amountOut', () => 0);
const currIn = "Matics";
const price = useState('matics_price', () => 0.01);

const selectedChip = useState('sel_chip', () => "");


function calcOut(price:number) {
  amountOut.value = amountIn.value / price;
}



onMounted(async () => {

  calcOut(price.value);
  selectedChip.value = "matic";

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
                  <v-chip active-class="active_chip" selected-class="active_chip" link value="eth">ETH</v-chip>
                  <v-chip active-class="active_chip" selected-class="active_chip" link value="matic">MATIC</v-chip>


              </v-chip-group>

          </v-col></v-row>


          <v-row><v-col cols="12" lg="6"><v-text-field type="number"  autofocus single-line v-model="amountIn" prefix="you send" :suffix="selectedChip" append-icon="fa-light fa-arrow-right"></v-text-field></v-col>
          <v-col cols="12" lg="6"><v-text-field type="number" autofocus single-line v-model="amountOut" prefix="you get" suffix="AKX"></v-text-field></v-col>
          <v-col cols="12" lg="12" align="right"><v-btn variant="elevated" size="x-large" color="#00DC82FF" style="color:black">CONFIRM YOUR ORDER</v-btn></v-col>
          </v-row>

      </v-form>

</template>

<style>

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