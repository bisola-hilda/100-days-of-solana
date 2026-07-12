# Day 9 – Fetching Recent Transactions on Solana

## Challenge

Fetch and display the five most recent transactions for a public Solana address using the Solana JavaScript SDK.

---

## What I Learned

Today I learned how to retrieve transaction history from the Solana blockchain using the `getSignaturesForAddress()` RPC method.

Instead of reading a wallet balance like in Day 8, I queried the blockchain for recent transaction signatures associated with a public address.

I also learned that each transaction contains useful metadata such as:

- Transaction Signature (unique transaction ID)
- Slot Number
- Block Time
- Transaction Status

---

## New Concepts

- RPC Method: `getSignaturesForAddress()`
- Transaction Signature
- Slot
- Unix Timestamp
- Reading blockchain history

---

## Skills Practiced

- JavaScript
- Node.js
- Solana Kit
- RPC Calls
- Transaction History

---

## Reflection

This challenge helped me understand how blockchain explorers and wallets display transaction history. Every transaction on Solana has a unique signature, and by querying the blockchain through an RPC node, I can retrieve recent activity for any public address. It gave me a deeper appreciation for how transparent blockchain data is.
