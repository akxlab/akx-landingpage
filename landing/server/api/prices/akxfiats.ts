import {defineEventHandler} from "h3";
import axios from "axios";


export default defineEventHandler(async(event) => {

    const req = await $fetch('https://api.fastforex.io/convert?from=MATIC&to=USD&amount=0.01&api_key=372a0539a3-3657b7fbb0-rp7vj6');
    const cadreq = await $fetch('https://api.fastforex.io/convert?from=MATIC&to=CAD&amount=0.01&api_key=372a0539a3-3657b7fbb0-rp7vj6');
    const eurreq = await $fetch('https://api.fastforex.io/convert?from=MATIC&to=EUR&amount=0.01&api_key=372a0539a3-3657b7fbb0-rp7vj6');

    const res = {
        usd: req.result.USD,
        cad: cadreq.result.CAD,
        eur: eurreq.result.EUR
    }
    return res

})