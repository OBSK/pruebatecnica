import { createClient } from "redis";

class RedisService {
  client: any;
  
  constructor() {
    this.client = createClient();
  }

  public async set({ access }: { access: string }, value: any): Promise<void> {
    await this.client.connect();
    console.log(access);
    const save = await this.client.set(access, JSON.stringify(value));
    await this.client.disconnect();
  }

  public async get(token: string): Promise<string | null> {
    await this.client.connect();
    const result = await this.client.get(token);
    await this.client.disconnect();
    return result;
  }
}

export default new RedisService();
