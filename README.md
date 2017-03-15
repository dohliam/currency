# Currency Conversion - Generate lists of common unit conversions in a variety of currencies

Converts between 32 currencies based on the foreign exchange listings from the EU Central Bank, and provides a handy printable table of common currency unit conversions in both directions.

An online demo is available [here](https://dohliam.github.io/tiny_tools/currency/).

## Supported currencies

Daily currency exchange rates are provided by the [European Central Bank](http://www.ecb.europa.eu/stats/exchange/eurofxref/html/index.en.html). The following currencies are supported:

* `AUD`: __Australian dollar__
* `BGN`: __Bulgarian lev__
* `BRL`: __Brasilian real__
* `CAD`: __Canadian dollar__
* `CHF`: __Swiss franc__
* `CNY`: __Chinese yuan renminbi__
* `CZK`: __Czech koruna__
* `DKK`: __Danish krone__
* `EUR`: __Euro__
* `GBP`: __Pound sterling__
* `HKD`: __Hong Kong dollar__
* `HRK`: __Croatian kuna__
* `HUF`: __Hungarian forint__
* `IDR`: __Indonesian rupiah__
* `ILS`: __Israeli shekel__
* `INR`: __Indian rupee__
* `JPY`: __Japanese yen__
* `KRW`: __South Korean won__
* `MXN`: __Mexican peso__
* `MYR`: __Malaysian ringgit__
* `NOK`: __Norwegian krone__
* `NZD`: __New Zealand dollar__
* `PHP`: __Philippine peso__
* `PLN`: __Polish zloty__
* `RON`: __New Romanian leu__
* `RUB`: __Russian rouble__
* `SEK`: __Swedish krona__
* `SGD`: __Singapore dollar__
* `THB`: __Thai baht__
* `TRY`: __Turkish lira__
* `USD`: __US dollar__
* `ZAR`: __South African rand__

## Usage

Enter an amount in the _Amount_ box and select a corresponding currency from the options in the _from_ and _to_ dropdowns. Then press the _Convert_ button to display the converted values in both directions.

### Reference tables

The reference tables displayed below each unit conversion provide 50 common unit amounts in both directions for the two selected currencies.

At the bottom of the page there is a button labelled _Print reference table_. Pressing this button will allow you to print a nicely formatted single page table of currency conversions for the selected currency pair, or save it as a PDF.

### Updating exchange rates

The current exchange rate date is displayed underneath the _Convert_ button. There are a couple of ways to update the exchange rates:

1. Click on the _Update rates_ button at the top of the page
1. Manually update the exchange rate XML file

#### The _Update rates_ button

Clicking on the _Update rates_ button at the top of the page is the easiest way to update the currency exchange rates from within the app. This will attempt to download the latest daily rates from the EU Central Bank. If successful, the new date will be shown in the status area under the _Convert_ button. The EU rates are updated daily at 16:00 CET.

After updating, the new rates will be remembered across visits using HTML5 local storage. Therefore the rates only need to be updated once per day to get the latest rate.

Since the EUCB website does not provide an API or enable cross-domain requests, automatic updating through the _Update rates_ button relies on one of two open source [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) services which at any given time may be down or slow to respond. If neither of these services works, it is still possible to update the rates manually.

#### Manually update the exchange rate XML file

The latest rates can be manually updated by replacing the file `eurofxref-daily.xml` in the source directory with [this file](http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml). Currency Table will use this file by default if the rates have not been updated automatically through the app.

## See also

"Currency Table" is part of the [**tiny tools**](https://dohliam.github.io/tiny_tools/) series, a collection of small mobile-friendly JavaScript tools for performing common tasks in the browser.

Other tools for working with numbers and units that might also be of interest:

* [Compare prices](https://github.com/dohliam/compare-prices)
* [Number generator](https://github.com/dohliam/number-generator)
* [Units converter](https://github.com/dohliam/units)

## Credits

* [milligram](https://github.com/milligram/milligram) CSS by @cjpatoilo, prototyped using [dropin-minimal-css](https://github.com/dohliam/dropin-minimal-css)
* [github-corners](https://github.com/tholman/github-corners) by @tholman
* Updated currency rates made possible with [crossorigin.me](https://github.com/technoboy10/crossorigin.me) by @technoboy10 and [cors-anywhere](https://github.com/Rob--W/cors-anywhere/) by @Rob--W
* Updated currency exchange rates provided by the [European Central Bank](http://www.ecb.europa.eu)

## License

MIT.
