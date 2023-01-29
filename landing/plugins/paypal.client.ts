// @ts-ignore
import {defineNuxtPlugin, useFetch} from "#app";
import axios from "axios";
const base = "https://api-m.sandbox.paypal.com";
export default defineNuxtPlugin(nuxtApp => {

    async function generateClientToken() {
        const accessToken =  await axios.get("http://localhost:3000/api/paypal/token");
        const response = await fetch(`${base}/v1/identity/generate-token`, {
            method: "post",
            headers: {
                Authorization: `Bearer ${accessToken.data}`,
                "Accept-Language": "en_US",
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data.client_token;
    }

    nuxtApp.provide('paypalclient', {
        token: generateClientToken
    });

});