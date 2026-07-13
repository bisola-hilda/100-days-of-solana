# Day 2 – Create a Persistent Solana Wallet

## Challenge

Create a Solana wallet that can be saved and reused instead of generating a new wallet every time the program runs.

---

## Objective

Understand how to persist a wallet by saving the keypair locally.

---

## What I Built

I created a script that generates a Solana wallet and saves the keypair to a `wallet.json` file. This allows me to reuse the same wallet instead of creating a new one every time.

---

## What I Learned

- Wallets can be persisted by saving the keypair.
- The `wallet.json` file contains the private key.
- Losing the private key means losing access to the wallet.
- The same wallet can be loaded and reused in future applications.

---

## Key Concepts

- Persistent Wallet
- Keypair Storage
- wallet.json
- File System
- Private Key Security

---

## Files

```text
code/
└── persistent-wallet.mjs
```

---

## Lesson of the Day

Generating a wallet is only the first step. Real applications require persistent wallets so users can continue using the same blockchain identity.

---

## Skills Gained

- JavaScript
- Node.js
- Solana Kit
- File Handling

---

## Repository Update

Documentation improved to explain persistent wallet creation and storage.
