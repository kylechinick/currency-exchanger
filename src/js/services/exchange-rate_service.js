export default class ExchangeRateService {
  static async getCurrentExchangeRate(amountToConvert) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/EUR/GBP/${amountToConvert}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}
