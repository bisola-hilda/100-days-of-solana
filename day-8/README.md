# Day 8 – Reading a Wallet Balance on Solana

## Challenge

Connect to Solana Devnet and read the SOL balance of a public wallet using the Solana JavaScript SDK.

---

## What I Learned

Today I made my first RPC call to the Solana blockchain using JavaScript.

I learned that an RPC node acts as the gateway between my application and the blockchain. By connecting to Solana Devnet, I was able to query my wallet's balance without needing authentication or API keys because blockchain account data is publicly accessible.

I also reinforced my understanding of lamports, where:

- 1 SOL = 1,000,000,000 Lamports

The Solana SDK returns balances in lamports, so I converted them into SOL for easier reading.

---

## Skills Practiced

- Solana Kit
- RPC Connections
- JavaScript
- Node.js
- Reading Blockchain Data

---

## Reflection

This challenge showed me how simple it is to read data from the blockchain. Instead of querying a traditional database, my application communicated directly with a Solana RPC node to retrieve live account information.
