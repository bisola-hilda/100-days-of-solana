import { createSolanaRpc, devnet, address } from "@solana/kit";

// Connect to Solana Devnet
const rpc = createSolanaRpc(
    devnet("https://api.devnet.solana.com")
);

// Your wallet from Day 1
const targetAddress = address(
    "AxfVXDX7jsCw7vSnwut9hA7oX4UykE3ZeiNF6cxCKvpf"
);

// Fetch balance
const { value: balanceInLamports } =
    await rpc.getBalance(targetAddress).send();

// Convert lamports to SOL
const balanceInSol =
    Number(balanceInLamports) / 1_000_000_000;

console.log(`Address: ${targetAddress}`);
console.log(`Balance: ${balanceInSol} SOL`);
