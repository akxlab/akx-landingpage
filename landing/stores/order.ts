import {defineStore} from "pinia";
import {v4} from "uuid"
import axios from "axios";

export const useOrderStore = defineStore('order_store', {

    state: () => {
        return {
            locale: "",
            currency: "",
            send_to_wallet: "",
            order_total: 0,
            item_price: 0,
            item_qty: 0,
            use_paypal: false,
            is_paid: false,
            tx_id: "",
            expiry_ts: "",
            fee: 0,
            order_uuid: "",
            ts: ""
        }
    },
    getters: {
        getLocale: (state) => {
            return state.locale || "en_US"
        },
        getCurrency: (state) => {
            return state.currency || "matic"
        },
        getBeneficiary: (state) => {
            return state.send_to_wallet || "";
        },
        getOrderTotal: (state) => {
            let total = state.item_price * state.item_qty;
            if(state.use_paypal) {
                state.fee = total * 4 / 100;
            }
            return total + state.fee;
        },
        orderId: (state) => {
            return state.order_uuid;
        },
        getPrice: (state) => {
            return state.item_price;
        },
        getQty: (state) => {
            return state.item_qty;
        }
    },
    actions: {
        initBlankOrder(payload:any) {
            if(this.order_uuid == "") {
                this.locale = payload.locale || "en_US";
                this.currency = payload.currency || "usd";
                this.send_to_wallet = "";
                this.order_total = 0;
                this.item_price = payload.price || 0;
                this.item_qty = 0;
                this.use_paypal = false;
                this.is_paid = false;
                this.tx_id = "";
                this.fee = 0;
                this.ts = new Date().getTime().toString(10);

            }
        },
        resetOrder() {
            this.initBlankOrder({});
        },
        setSendingAmt(payload:number) {
            this.item_qty = payload;
        },
        setWallet(payload:any) {
            this.send_to_wallet = payload;
        },
        async setCurrency(val:any) {
            let price;
            if (val == "ETH" || val == "MATIC") {
                this.use_paypal = false;
            } else {
                this.use_paypal = true;
            }
            if (val == "usd" || val == "cad" || val == "eur") {
                const res = await $fetch("/api/prices/akxfiats")

                    if (val == "usd") price = parseFloat(res.usd);
                    else if (val == "cad") price = parseFloat(res.cad);
                    else if (val == "eur") price = parseFloat(res.eur);
                    this.setPrice(price);

            } else if (val == "eth") {
                const res = await $fetch("/api/prices/akxeth")
                    price = parseFloat(res);
                    this.setPrice(price);

            } else {
                this.setPrice(0.01);
            }
            this.currency = val;
        },
        setPrice(payload:any) {
            this.item_price = payload;
        },
        setItemQty(payload:any) {
            this.item_qty = payload
        },
        setIsPaid(payload:any) {
            this.is_paid = payload;
        },
        setFee(payload:any) {
            this.fee = payload;
        },
        setTxId(payload:any) {
            this.tx_id = payload;
        }
    },
    persist: true


})