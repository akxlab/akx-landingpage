<script lang="ts" setup>

import {useState} from "#app";
import {onMounted, watch} from "#imports";

const amountIn = useState('amount_in', () => 1);
const amountOut= useState('amountOut', () => 0);
const currIn = "Matics";
const price = useState('matics_price', () => 0.01);

function calcOut(price:number) {
  amountOut.value = amountIn.value / price;
}

onMounted(async () => {

  calcOut(price.value);

  watch(amountIn, (val, old) => {
    if(val !== old) {
      calcOut(price.value);
    }
  })

})


</script>

<template>

      <v-form>
        <v-row>
          <v-col cols="12" lg="10">
            <v-toolbar color="transparent" density="compact" style="width:50%">
              <v-toolbar-title>
                Switch currency
              </v-toolbar-title>
              <v-toolbar-items>
                <v-chip class="mr-3">USD</v-chip>
                <v-chip class="mr-3">CAD</v-chip>
                <v-chip class="mr-3">EURO</v-chip>
                <v-chip class="mr-3">ETH</v-chip>
                <v-chip class="mr-3">MATICS</v-chip>
              </v-toolbar-items>
            </v-toolbar>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" >

          </v-col>
          <v-col cols="12" lg="3"><v-text-field type="number"  autofocus single-line v-model="amountIn" prefix="you send" :suffix="currIn" append-icon="fa-light fa-arrow-right"></v-text-field></v-col>
          <v-col cols="12" lg="3"><v-text-field type="number" autofocus single-line v-model="amountOut" prefix="you get" suffix="AKX"></v-text-field></v-col>
          <v-col cols="12" lg="3"><v-btn variant="elevated" size="x-large" color="#00DC82FF" style="color:black">CONFIRM YOUR ORDER</v-btn></v-col>
        </v-row>
      </v-form>

</template>