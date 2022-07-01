import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/services/exchange-rate_service.js';

async function conversionTest(amountToConvert, targetConversionCurrency) {
  const response = await ExchangeRateService.getCurrentExchangeRate(
    amountToConvert,
    targetConversionCurrency
  );
  console.log(`Conversion Rate: `, response['conversion_rate']);
  console.log(`Target Code: `, response['target_code']);
  console.log(`Conversion Result: `, response['conversion_result']);
}

$(document).ready(function () {
  conversionTest(2, 'EUR');
});
