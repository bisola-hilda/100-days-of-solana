# Day 8 – Reading Solana Account Balances with RPC

## Challenge

Connect to Solana Devnet and retrieve the balance of a public wallet address using Solana RPC.

---

## Objective

Learn how to communicate with the Solana blockchain by making a read-only Remote Procedure Call (RPC).

---

## What I Built

I built my first JavaScript application that connects to Solana Devnet using `@solana/kit`. The application retrieves the balance of a wallet address and converts the returned Lamports into SOL for easier reading.

---

## What I Learned

- Solana nodes expose data through RPC APIs.
- `getBalance()` is a read-only RPC method.
- Account balances are returned in Lamports.
- 1 SOL = 1,000,000,000 Lamports.
- Public blockchain data can be queried without authentication.

---

## Key Concepts

- RPC (Remote Procedure Call)
- Devnet
- getBalance()
- SOL
- Lamports
- Public Blockchain

---

## Lesson of the Day

Today I made my first RPC call to the Solana blockchain. Instead of changing data, I simply asked the network for information. This is similar to making a GET request to an API in Web2 development.

---

## Real-World Application

Wallet applications, blockchain explorers, and DeFi platforms constantly use `getBalance()` to display users' wallet balances in real time.

---

## Skills Gained

- JavaScript
- Solana Kit
- RPC
- Node.js
- Blockchain Fundamentals

---

## Files

```
day-08-read-solana/
├── read-balance.mjs
├── fetch-transactions.mjs
└── README.md
```

---

## Repository Update

Documentation improved to explain how RPC is used to read account balances from the Solana blockchain.
