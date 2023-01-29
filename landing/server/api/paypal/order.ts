// @ts-ignore
import {defineEventHandler} from "h3";
import axios from "axios";

const base = "https://api-m.sandbox.paypal.com";
export default defineEventHandler(async (event) => {


    const token = await axios.get("http://localhost:3000/api/paypal/token");


    const url = `${base}/v2/checkout/orders`;
    try {
        const res = await axios.post(url,
            JSON.stringify({

                intent: "CAPTURE",
                purchase_units: [{
                    reference_id: 1,
                    amount: {
                        currency_code: "USD",
                        value: '10'}
                }]
            })
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.data}`,
                }
            })

        // console.log(JSON.stringify(res.data))

        return res.data;
    } catch(e) {
        // @ts-ignore
        console.log(e.response.data);
    }

});

