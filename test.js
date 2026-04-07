import axios from "axios";

const apiKey = "8189a0ca05884191"
const secretKey= "538a7d760ed282a678e1e2276ae0b36e6217cce67f5701d0738930fe978b8aea7b86faf7876730cd39517cbd2acd5aaea81aa4e3727f6530e59a62f204cf3fec"

import crypto from "crypto";




// generate nonce
const nonce = Date.now().toString();

// create payload
const payload = nonce + apiKey;

// generate signature
const signature = crypto
  .createHmac("sha256", secretKey)
  .update(payload)
  .digest("hex");

console.log(signature)


// ✅ Build URL with correct query params
const baseURL = "https://staging.wibeex.com/api/v2/barong/resource/users/me";

const fullURL = `${baseURL}`;

console.log("Request URL:", fullURL);


// // send request
async function cancelOrder() {
  try {
    const response = await axios.get(
      fullURL,
      {
        headers: {
          "X-Auth-Apikey": apiKey,
          "X-Auth-Nonce": nonce,
          "X-Auth-Signature": signature,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("user Details:", response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

cancelOrder();