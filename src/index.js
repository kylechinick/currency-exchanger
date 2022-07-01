import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import ExchangeRateService from './js/services/exchange-rate_service.js';

async function conversionTest() {
  const response = await ExchangeRateService.getCurrentExchangeRate();
  console.log(response['conversion_rate']);
}

$(document).ready(function () {
  conversionTest();
});
