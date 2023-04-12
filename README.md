# Currency Conversion - Generate lists of common unit conversions in a variety of currencies

Converts between 160+ currencies based on the foreign exchange listings from the EU Central Bank, and provides a handy printable table of common currency unit conversions in both directions.

An online demo is available [here](https://dohliam.github.io/tiny_tools/currency/).

## Supported currencies

Daily currency exchange rates are provided by the [European Central Bank](http://www.ecb.europa.eu/stats/exchange/eurofxref/html/index.en.html). The following currencies are supported:

* `AED`: _United Arab Emirates Dirham_
* `AFN`: _Afghan Afghani_
* `ALL`: _Albanian Lek_
* `AMD`: _Armenian Dram_
* `ANG`: _Netherlands Antillean Guilder_
* `AOA`: _Angolan Kwanza_
* `ARS`: _Argentine Peso_
* `AUD`: _Australian Dollar_
* `AWG`: _Aruban Florin_
* `AZN`: _Azerbaijani Manat_
* `BAM`: _Bosnia-Herzegovina Convertible Mark_
* `BBD`: _Barbadian Dollar_
* `BDT`: _Bangladeshi Taka_
* `BGN`: _Bulgarian Lev_
* `BHD`: _Bahraini Dinar_
* `BIF`: _Burundian Franc_
* `BMD`: _Bermudan Dollar_
* `BND`: _Brunei Dollar_
* `BOB`: _Bolivian Boliviano_
* `BRL`: _Brazilian Real_
* `BSD`: _Bahamian Dollar_
* `BTC`: _Bitcoin_
* `BTN`: _Bhutanese Ngultrum_
* `BWP`: _Botswanan Pula_
* `BYN`: _Belarusian Ruble_
* `BZD`: _Belize Dollar_
* `CAD`: _Canadian Dollar_
* `CDF`: _Congolese Franc_
* `CHF`: _Swiss Franc_
* `CLF`: _Chilean Unit of Account (UF)_
* `CLP`: _Chilean Peso_
* `CNH`: _Chinese Yuan (Offshore)_
* `CNY`: _Chinese Yuan_
* `COP`: _Colombian Peso_
* `CRC`: _Costa Rican Colón_
* `CUC`: _Cuban Convertible Peso_
* `CUP`: _Cuban Peso_
* `CVE`: _Cape Verdean Escudo_
* `CZK`: _Czech Republic Koruna_
* `DJF`: _Djiboutian Franc_
* `DKK`: _Danish Krone_
* `DOP`: _Dominican Peso_
* `DZD`: _Algerian Dinar_
* `EGP`: _Egyptian Pound_
* `ERN`: _Eritrean Nakfa_
* `ETB`: _Ethiopian Birr_
* `EUR`: _Euro_
* `FJD`: _Fijian Dollar_
* `FKP`: _Falkland Islands Pound_
* `GBP`: _British Pound Sterling_
* `GEL`: _Georgian Lari_
* `GGP`: _Guernsey Pound_
* `GHS`: _Ghanaian Cedi_
* `GIP`: _Gibraltar Pound_
* `GMD`: _Gambian Dalasi_
* `GNF`: _Guinean Franc_
* `GTQ`: _Guatemalan Quetzal_
* `GYD`: _Guyanaese Dollar_
* `HKD`: _Hong Kong Dollar_
* `HNL`: _Honduran Lempira_
* `HRK`: _Croatian Kuna_
* `HTG`: _Haitian Gourde_
* `HUF`: _Hungarian Forint_
* `IDR`: _Indonesian Rupiah_
* `ILS`: _Israeli New Sheqel_
* `IMP`: _Manx pound_
* `INR`: _Indian Rupee_
* `IQD`: _Iraqi Dinar_
* `IRR`: _Iranian Rial_
* `ISK`: _Icelandic Króna_
* `JEP`: _Jersey Pound_
* `JMD`: _Jamaican Dollar_
* `JOD`: _Jordanian Dinar_
* `JPY`: _Japanese Yen_
* `KES`: _Kenyan Shilling_
* `KGS`: _Kyrgystani Som_
* `KHR`: _Cambodian Riel_
* `KMF`: _Comorian Franc_
* `KPW`: _North Korean Won_
* `KRW`: _South Korean Won_
* `KWD`: _Kuwaiti Dinar_
* `KYD`: _Cayman Islands Dollar_
* `KZT`: _Kazakhstani Tenge_
* `LAK`: _Laotian Kip_
* `LBP`: _Lebanese Pound_
* `LKR`: _Sri Lankan Rupee_
* `LRD`: _Liberian Dollar_
* `LSL`: _Lesotho Loti_
* `LYD`: _Libyan Dinar_
* `MAD`: _Moroccan Dirham_
* `MDL`: _Moldovan Leu_
* `MGA`: _Malagasy Ariary_
* `MKD`: _Macedonian Denar_
* `MMK`: _Myanma Kyat_
* `MNT`: _Mongolian Tugrik_
* `MOP`: _Macanese Pataca_
* `MRO`: _Mauritanian Ouguiya (pre-2018)_
* `MRU`: _Mauritanian Ouguiya_
* `MUR`: _Mauritian Rupee_
* `MVR`: _Maldivian Rufiyaa_
* `MWK`: _Malawian Kwacha_
* `MXN`: _Mexican Peso_
* `MYR`: _Malaysian Ringgit_
* `MZN`: _Mozambican Metical_
* `NAD`: _Namibian Dollar_
* `NGN`: _Nigerian Naira_
* `NIO`: _Nicaraguan Córdoba_
* `NOK`: _Norwegian Krone_
* `NPR`: _Nepalese Rupee_
* `NZD`: _New Zealand Dollar_
* `OMR`: _Omani Rial_
* `PAB`: _Panamanian Balboa_
* `PEN`: _Peruvian Nuevo Sol_
* `PGK`: _Papua New Guinean Kina_
* `PHP`: _Philippine Peso_
* `PKR`: _Pakistani Rupee_
* `PLN`: _Polish Zloty_
* `PYG`: _Paraguayan Guarani_
* `QAR`: _Qatari Rial_
* `RON`: _Romanian Leu_
* `RSD`: _Serbian Dinar_
* `RUB`: _Russian Ruble_
* `RWF`: _Rwandan Franc_
* `SAR`: _Saudi Riyal_
* `SBD`: _Solomon Islands Dollar_
* `SCR`: _Seychellois Rupee_
* `SDG`: _Sudanese Pound_
* `SEK`: _Swedish Krona_
* `SGD`: _Singapore Dollar_
* `SHP`: _Saint Helena Pound_
* `SLL`: _Sierra Leonean Leone_
* `SOS`: _Somali Shilling_
* `SRD`: _Surinamese Dollar_
* `SSP`: _South Sudanese Pound_
* `STD`: _São Tomé and Príncipe Dobra (pre-2018)_
* `STN`: _São Tomé and Príncipe Dobra_
* `SVC`: _Salvadoran Colón_
* `SYP`: _Syrian Pound_
* `SZL`: _Swazi Lilangeni_
* `THB`: _Thai Baht_
* `TJS`: _Tajikistani Somoni_
* `TMT`: _Turkmenistani Manat_
* `TND`: _Tunisian Dinar_
* `TOP`: _Tongan Pa'anga_
* `TRY`: _Turkish Lira_
* `TTD`: _Trinidad and Tobago Dollar_
* `TWD`: _New Taiwan Dollar_
* `TZS`: _Tanzanian Shilling_
* `UAH`: _Ukrainian Hryvnia_
* `UGX`: _Ugandan Shilling_
* `USD`: _United States Dollar_
* `UYU`: _Uruguayan Peso_
* `UZS`: _Uzbekistan Som_
* `VEF`: _Venezuelan Bolívar Fuerte (Old)_
* `VES`: _Venezuelan Bolívar Soberano_
* `VND`: _Vietnamese Dong_
* `VUV`: _Vanuatu Vatu_
* `WST`: _Samoan Tala_
* `XAF`: _CFA Franc BEAC_
* `XAG`: _Silver Ounce_
* `XAU`: _Gold Ounce_
* `XCD`: _East Caribbean Dollar_
* `XDR`: _Special Drawing Rights_
* `XOF`: _CFA Franc BCEAO_
* `XPD`: _Palladium Ounce_
* `XPF`: _CFP Franc_
* `XPT`: _Platinum Ounce_
* `YER`: _Yemeni Rial_
* `ZAR`: _South African Rand_
* `ZMW`: _Zambian Kwacha_
* `ZWL`: _Zimbabwean Dollar_

## Usage

Enter an amount in the _Amount_ box and select a corresponding currency from the options in the _from_ and _to_ dropdowns. Then press the _Convert_ button to display the converted values in both directions.

### Reference tables

The reference tables displayed below each unit conversion provide 50 common unit amounts in both directions for the two selected currencies.

At the bottom of the page there is a button labelled _Print reference table_. Pressing this button will allow you to print a nicely formatted single page table of currency conversions for the selected currency pair, or save it as a PDF.

### Updating exchange rates

The current exchange rate date is displayed underneath the _Convert_ button. There are a couple of ways to update the exchange rates:

1. Click on the _Update rates_ button at the top of the page
2. Manually update the exchange rate XML file

#### The _Update rates_ button

Clicking on the _Update rates_ button at the top of the page is the easiest way to update the currency exchange rates from within the app. This will attempt to download the latest daily rates from the EU Central Bank. If successful, the new date will be shown in the status area under the _Convert_ button. The EU rates are updated daily at 16:00 CET.

After updating, the new rates will be remembered across visits using HTML5 local storage. Therefore the rates only need to be updated once per day to get the latest rate.

Since the EUCB website does not provide an API or enable cross-domain requests, automatic updating through the _Update rates_ button relies on the free API provided by [Exchangerate.host](https://exchangerate.host/). If this service is not available, it is still possible to update the rates manually.

The most recently-updated rates are stored in the browser, and will be used if offline.

#### Manually update the exchange rate XML file

The latest rates can be manually updated by replacing the file `eurofxref-daily.xml` in the source directory with [this file](http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml). Currency Table will use this file by default if the rates have not been updated automatically through the app.

## See also

"Currency Table" is part of the [**tiny tools**](https://dohliam.github.io/tiny_tools/) series, a collection of small mobile-friendly JavaScript tools for performing common tasks in the browser.

Other tools for working with numbers and units that might also be of interest:

* [Compare prices](https://github.com/dohliam/compare-prices)
* [Number generator](https://github.com/dohliam/number-generator)
* [Units converter](https://github.com/dohliam/units)

## Credits

* [centigram](https://github.com/milouse/centigram) CSS by @milouse, based on [milligram](https://github.com/milligram/milligram) by @cjpatoilo, prototyped using [dropin-minimal-css](https://github.com/dohliam/dropin-minimal-css)
* [github-corners](https://github.com/tholman/github-corners) by @tholman
* Updated currency rates made possible with [crossorigin.me](https://github.com/technoboy10/crossorigin.me) by @technoboy10 and [cors-anywhere](https://github.com/Rob--W/cors-anywhere/) by @Rob--W
* Updated currency exchange rates provided by the [European Central Bank](http://www.ecb.europa.eu) among others, via [Exchangerate.host](https://exchangerate.host/)

## License

MIT.
