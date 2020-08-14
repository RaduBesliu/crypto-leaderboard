class Crypto {
    async getData(min, max) {
        const response = await fetch(`https://api.coinlore.net/api/tickers/?start=${min - 1}&limit=${max - min + 1}`);
        const responseData = await response.json();
        return responseData.data;
    }
}