<script setup lang="ts">
import {useNuxtApp, useState} from "#app";
import {PaypalPaymentRequestData} from "~/types/paypal";
import {loadScript} from "@paypal/paypal-js";
import {onBeforeMount, onMounted} from "#imports";

const app = useNuxtApp();
const showModal = useState('show_paypal_modal', () => true);
//@ts-ignore

const PAYPAL_CLIENT_ID="AeYLltPpGym80l6L2XXG4Y6-26cDSEJh2swLK4d6uxIKBxGNTZt4uWsu62gH7UiN0KlzTUIT70ojSQ2G";
const cartTotal = useState('cart_total', () => 0);
const paid = useState('order_paid', () => false);
const loaded = useState('loaded', () => false);

const props = defineProps({akxTokens:Number, currPrice:Number, payCurrency:String})

onBeforeMount(async () => {

 /* const clientToken = await app.$paypalclient.token();
  localStorage.setItem('akx_paypal_client_token', clientToken);*/




});

const paymentSource =  {"payment_source": {
    "paypal": {
      "experience_context": {
        "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
        "payment_method_selected": "PAYPAL",
        "brand_name": "AKX ECOSYSTEM",
        "locale": "en-US",
        "landing_page": "LOGIN",
        "shipping_preference": "NO_SHIPPING",
        "user_action": "PAY_NOW",
        "return_url": "http://localhost:3000/payment/success",
        "cancel_url": "http://localhost:3000/",
      }
    }
  }};


if(process.client) {
  if(!loaded.value) {
    loadScript({'client-id': "AZB0VasGsOqsURx1hCimOyWv3FwoBQvuSmI3sIFZU9VHHn-J-5U7CoPmmHE6xaF1ywg6YQGg7lP3YY3Z", 'currency':`${props.payCurrency || "USD"}`, "disable-funding":"credit,paylater"}).then(paypal => {
      loaded.value = true;
      //@ts-ignore
      paypal.Buttons({
        style: {
          layout:'horizontal'
        },
        createOrder: doCreateOrder,
        onApprove: doOnApprove,
        onError: function (err) {
          console.log(err)
        }
      }).render("#paypal-button-container")

    })
  }
}



// @ts-ignore
function doCreateOrder(data, actions) {
  return actions.order.create({
    intent: "CAPTURE",
    additional_properties: {
      wallet: true
    },
    purchase_units: [
      {
        description: `you are buying ${props.akxTokens} @ ${props.currPrice} ${props.payCurrency} each for a total of ${cartTotal} ${props.payCurrency}`,
        amount: {
        value: 1
        }}
    ],
    paymentSource
  })
}
// @ts-ignore
function doOnApprove(data, actions):Promise<OnApproveData> {

    console.log(JSON.stringify(data));
    console.log('ORDER COMPLETED');
    paid.value = true;

}

</script>

<template>
<v-no-ssr>
  <v-dialog persistent v-model="showModal" min-width="50%" max-width="50%" width="100%">
    <v-card theme="dark">
      <v-card-title>BUY AKX WITH PAYPAL OR DEBIT / CREDIT CARD</v-card-title>
      <v-divider class="mt-4"></v-divider>
      <v-card-text>

        <div id="paypal-button-container" ref="paypalDiv"></div>

      </v-card-text>
    </v-card>
  </v-dialog></v-no-ssr>
</template>