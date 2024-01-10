import { createClient } from 'redis';

export class CardRepository {
    async save(key: string, payload: any) {
        
    const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

    await client.hSet("cards", key, JSON.stringify(payload));
    
    }
    async getByToken(token: string) {
        const client = await createClient()
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

        const payload = await client.hGet("cards", token);
        if(!payload) {
            return null;
        }
        const card = JSON.parse(payload);
        return card;
    }
}