import { generateKeyPairSigner } from "@solana/kit";

const wallet = await generateKeyPairSigner();

console.log("Your new wallet address:", wallet.address);