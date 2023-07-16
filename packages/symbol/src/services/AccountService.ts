import { getDataFromApi } from './utils';
import Mosaic from '../models/Mosaic';
import { Account } from '../models/Account';
import { hexToUint8 } from '../utils/converter';
import base32 from '../utils/base32';

export default class AccountService {
    node: string;
    constructor(node: string) {
        this.node = node;
    }
    public async getAccountInfo(address: string) {
        try {
            const data = await getDataFromApi(this.node + '/accounts/' + address);
            let mosaics: Mosaic[] = [];
            data.account.mosaics.forEach(m => {
                mosaics.push({
                    id: m.id,
                    amount: BigInt(m.amount)
                })
            });
            const account: Account = {
                address: base32.encode(new Uint8Array([...hexToUint8(data.account.address), 0])).slice(0, -1),
                publicKey: data.account.publicKey,
                mosaics
            };
            return account;
        } catch(e) {
            throw new Error(e.message);
        }
    }
}
