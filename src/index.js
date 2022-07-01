import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/services/exchange-rate_service.js';

async function convertUserCurrencyData(
  amountToConvert,
  targetConversionCurrency
) {
  const response = await ExchangeRateService.getCurrentExchangeRate(
    amountToConvert,
    targetConversionCurrency
  );

  const targetCode = response['target_code'];
  const conversionRate = response['conversion_rate'];
  const conversionResult = response['conversion_result'];

  $('#base-currency__amount').text(amountToConvert);
  $('#target-conversion-rate').text(conversionRate);
  $('#target-conversion-currency__amount').text(conversionResult);
  $("h3[class='target-conversion-currency results__currency-title']").text(
    targetCode
  );
  $("span[class='target-conversion-currency']").text(targetCode);
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    const userDataBaseCurrencyAmount = $('#user-input__currency-amount').val();
    const userDataTargetConversionCurrency = $(
      '#user-input__target-conversion-currency'
    ).val();

    convertUserCurrencyData(
      userDataBaseCurrencyAmount,
      userDataTargetConversionCurrency
    );

    document.querySelector('form').reset();
  });
});
