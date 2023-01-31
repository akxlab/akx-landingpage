import {defineEventHandler, getQuery} from "h3";
import axios from "axios";


export default defineEventHandler(async(event) => {


    const req = await axios.get(`https://api.fastforex.io/convert?from=MATIC&to=ETH&amount=1&api_key=372a0539a3-3657b7fbb0-rp7vj6`);
    return req.data.result.ETH;

})