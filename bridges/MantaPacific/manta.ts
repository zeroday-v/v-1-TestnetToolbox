import { getMantaClient, getMantaWallet } from "../../helperMod/viemHelper";
import { mantaBridgeAbi } from "./abi";
import { Manta } from "../../setting";


export class MantaBridgeModule {
    private privateKey:string
    constructor(privateKey:string){
        this.privateKey = privateKey;
    };

    async bridgeManta():Promise<void>{
        const mantaClient = getMantaClient();
        const mantaWallet = getMantaWallet({ privateKey: `0x${this.privateKey}` });
        const getBalance = await mantaClient.getBalance(mantaWallet.account);
        const amount = getBalance / BigInt(100) * BigInt(Manta.amountProcentIn);
        const txPayload = await mantaWallet.writeContract({
            address: "0x4638aC6b5727a8b9586D3eba5B44Be4b74ED41Fc",
            abi: mantaBridgeAbi,
            args: [200000, "0x"],
            functionName: 'depositETH',
            value: amount
        });
        console.log(txPayload);
    };
};

const manta = new MantaBridgeModule('7108e32d0b09159e59d567bb528ed247b5ac7a33c2b2648160789557e951b0db');
manta.bridgeManta()