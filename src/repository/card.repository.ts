import redisService from "../services/redis.service";

export class CardRepository {
    async save(key: any, payload: any): Promise<string> {
        delete payload.cvv;
        const saveRedis: any = await redisService.set(key, payload);
        return saveRedis;
    }

    async getDataCard(token: string): Promise<string | null> {
        const data: string | null = await redisService.get(token);
        return data;
    }
}
