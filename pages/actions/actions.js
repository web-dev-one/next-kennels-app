"use server"; 

import { Client } from "square";
import * as cryptoServer from "crypto";
function getRandomUUID(){

    if (typeof window === "undefined"){
        return cryptoServer.randomBytes(16).toString('hex')
    }
    return crypto.randomUUID();
}


import {uuid} from 'uuidv4'
BigInt.prototype.toJSON = function () {
    return this.toString();
  };

const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_Access_token


const {paymentsApi} = new Client({
    accessToken: PUBLIC_TOKEN,
    environment: "sandbox",

});

export default async function submitPayment(req, res) {
    console.log("REQ", req)
    if (req.method === "POST"){
      const {result} = await paymentsApi.createPayment({
        idempotencyKey: getRandomUUID(),
        sourceId,
        amountMoney: {
          currency: "USD",
          amount: 100,},

      });
      console.log(result)
      res.status(200).json(result);

    } else {
      return res.status(500).send();
    }
  }


// export async function submitPayment(sourceId) {
//     try {
//       const { result } = await paymentsApi.createPayment({
//         mode: 'no-cors',
//         idempotencyKey: getRandomUUID(),
//         sourceId,
//         amountMoney: {
//           currency: "USD",
//           amount: 100,
//         },
//       });
//       console.log(result);
//       return result;
//     } catch (error) {
//       console.log(error);
//     }
//   }