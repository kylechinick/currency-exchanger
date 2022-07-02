import $ from 'jquery';
import './css/styles.css';
import ExchangeRateService from './js/services/exchange-rate_service.js';

function getAndDisplayData(response) {
  if (response.result === 'success') {
    const conversionRate = response['conversion_rate'];
    $('#target-conversion-rate').text(conversionRate);

    const conversionResult = response['conversion_result'];
    $('#target-conversion-currency__amount').text(conversionResult);

    const targetCode = response['target_code'];
    $("h3[class='target-conversion-currency results__currency-title']").text(
      targetCode
    );
    $("span[class='target-conversion-currency']").text(targetCode);
  } else {
    $('#error-report').text(`Something went wrong! Status ${response}`);
  }
}

async function convertUserCurrencyData(
  amountToConvert,
  targetConversionCurrency
) {
  const response = await ExchangeRateService.getCurrentExchangeRate(
    amountToConvert,
    targetConversionCurrency
  );
  getAndDisplayData(response);
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();

    const userDataBaseCurrencyAmount = $('#user-input__currency-amount').val();
    $('#base-currency__amount').text(userDataBaseCurrencyAmount);

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
