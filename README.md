# Currency Exchanger

Authored by _Kyle Chinick_

#### About

Convert a specified amount of USD into its value according to another currency.

## Technologies Used

- _HTML_
- _CSS_
- _JavaScript / jQuery_
- _Exchange-Rate API_

## Description

The Currency Exchanger app takes a number value provided by the user and converts that total into its equivilant value in another currency – which is also determined by user input, via a field for the target currency's currency code.

This app makes use of the [Exchange-Rate API](https://www.exchangerate-api.com/) to power the supply of current exchange rate data.

If the currency code submited by the user does not exist in the Exchange-Rate API's database then an error message communicating this will be displayed to the user. Similarly, if any other type of error occurs when sending the request to, or receiving data from, the API a message will be displayed to the user clarifying that an error has occurred and what that error is.

Upon successful submission of a value to convert and a currency to convert to the app will display the USD value provided and both the converted amount per the specified currency as well as the exchange rate itself against that currency.

## Setup/Installation Requirements

#### Basics

1. Clone this repository to your desktop by executing `git clone https://github.com/kylechinick/currency-exchanger` in your preferred terminal application.
2. Execute `git remote -v` in the terminal to view existing remotes and verify successful cloning to your local machine.
3. Execute `npm install` in the terminal to download required dependency packages.
4. Execute `npm run build` in the terminal to cause the webpack dependency to populate the provided dist/ folder with an _index.html_ file and a _bundle.js_ file which contains a concatenated and minified version of the project's collected JavaScript code.
5. Execute `npm run start` in the terminal to create a live preview browser session that will launch the app in your default browser
   – _Note: you can exit this browser preview session by entering the keyboard shortcut_ control _+_ c _in the terminal._

#### Working with the API

1. To make use of this application you will be required to obtain an API key from the [Exchange-Rate API website](https://www.exchangerate-api.com/) by signing up for a free account on their [sign-up webpage](https://app.exchangerate-api.com/sign-up).
2. Copy the API key provided with your new account or create and save a new key.
   - Once you've created your account you can access and create new API keys by navigating through your dashboard or following this link directly to the [API Keys sub-section](https://app.exchangerate-api.com/keys) of the dashboard.
3. Once you have your API key open the cloned app directory and create a _.env_ file in the directory root.
   - This file will be used to securely store your API key as a variable within the project instead of hard-coding the key into the JavaScript files and exposing the key to the public when uploading to a public repo.
4. Place the following, matching the character-casing exactly, in the _.env_ file and replace the brackets and example bracket content with your API key:
   - `API_KEY=[Your API Key here]`
   - I.e. `API_KEY=123456789abcd1234abcd1234`
5. After saving the _.env_ file double-check that is listed in the project's provided _.gitignore_ file and add _.env_ to the list if it is missing.
6. Now add and commit only the _.gitignore_ file to your preferred version control service (like GitHub) before adding any other files in order to ensure the _.env_ file containing your API key is never pushed to a public repo.

That's it! Now that you've cloned the repo, and added a valid API Key to the _.env_ file the project will do the rest – taking that key and passing it through the codebase as a variable to be used whenever a call is made to the Exchange-Rate API.

## Known Bugs

- N/A
