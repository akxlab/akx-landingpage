import {defineEventHandler} from "h3";
import axios from "axios";


const clientID = "AeYLltPpGym80l6L2XXG4Y6-26cDSEJh2swLK4d6uxIKBxGNTZt4uWsu62gH7UiN0KlzTUIT70ojSQ2G"
const secret = "ECr05jzlm7yxx7FoDuDFvRDUNiNtVgRp4dOQvknvBFtyAHsTh0Loyz3d34FhiZ-csQlB2OHOTPkQEdmN"
const oauthURI = process.env["NUXT_PAYPAL_SANDBOX_OAUTH_URI"]

export default defineEventHandler(async (event) => {


    const auth = Buffer.from(clientID + ":" + secret).toString("base64");
    const response = await axios.post(
        'https://api-m.sandbox.paypal.com/v1/oauth2/token',
        new URLSearchParams({
            'grant_type': 'client_credentials'
        }),
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${auth}`,
            }
        }
    );
    const data = response.data;
    return data.access_token;


});