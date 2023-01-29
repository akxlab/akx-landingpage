import {defineEventHandler} from "h3";
import axios from "axios";


export default defineEventHandler(async(event) => {

    const req = await axios.get('https://api.fastforex.io/convert?from=MATIC&to=USD&amount=0.01&api_key=372a0539a3-3657b7fbb0-rp7vj6');
    const cadreq = await axios.get('https://api.fastforex.io/convert?from=MATIC&to=CAD&amount=0.01&api_key=372a0539a3-3657b7fbb0-rp7vj6');
    const eurreq = await axios.get('https://api.fastforex.io/convert?from=MATIC&to=EUR&amount=0.01&api_key=372a0539a3-3657b7fbb0-rp7vj6');
    const res = {
        usd: req.data.result.USD,
        cad: cadreq.data.result.CAD,
        eur: eurreq.data.result.EUR
    }
    return res

})