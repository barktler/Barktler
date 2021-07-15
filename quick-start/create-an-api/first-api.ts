import { Barktler } from "@barktler/core";

class GoogleSearchAPI extends Barktler {

    public static create(): GoogleSearchAPI {

        return new GoogleSearchAPI();
    }

    public async search(keyword: string): Promise<string> {

        const data: string = await this._requestForData({

            url: `https://www.google.com/search?q=${keyword}`,
            method: 'GET',
        });
        return data;
    }
}