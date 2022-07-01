import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/services/exchange-rate_service.js';

async function conversionTest(amountToConvert) {
  const response = await ExchangeRateService.getCurrentExchangeRate(
    amountToConvert
  );
  console.log(`Conversion Rate: `, response['conversion_rate']);
  console.log(`Conversion Result: `, response['conversion_result']);
}

$(document).ready(function () {
  conversionTest(2);
});
