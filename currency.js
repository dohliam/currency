function convCurr() {
  fromCurr = document.getElementById("fromCurr").value;
  toCurr = document.getElementById("toCurr").value;
  amt = document.getElementById("amt").value;

  rateObj = checkStorage();

  euVal = rateObj[fromCurr];
  toVal = rateObj[toCurr];

  toValue = eval((amt/euVal)*(toVal));
  forValue = eval((amt/toVal)*(euVal));
  var result = document.getElementById("result");
  result.innerHTML = "<h3>Result</h3>\n" + amt + " " + fromCurr + " = " + addCommas(toValue.toFixed(2)) + " " + toCurr + " <br>" + amt + " " + toCurr + " = " + addCommas(forValue.toFixed(2)) + " " + fromCurr;

  printTable(fromCurr, toCurr);

  return true;
}

function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

function formatNum(fact, fromto) {
  euVal = rateObj[fromCurr];
  toVal = rateObj[toCurr];

  (fromto == "from") ? (fromto = euVal) && (tofrom = toVal) : (fromto = toVal) && (tofrom = euVal);
  var numResult = addCommas(eval((fact/fromto)*(tofrom)).toFixed(2));
  return numResult;
}

function printRow(from, to, amt) {
  tdFrom = "<td>" + addCommas(amt) + " " + from + " = " + formatNum(amt,"from") + " " + to +  "<\/td>\n";
  tdTo = "<td>" + addCommas(amt) + " " + from + " = " + formatNum(amt,"to") + " " + to +  "<\/td>\n";
  td = [tdFrom, tdTo];
  return td;
}

function outputTable(ccode, toCurr, print) {
  unitAmt = [ 1, 15, 65, 250, 5000, 2, 20, 70, 300, 6000, 3, 25, 75, 350, 7000, 4, 30, 80, 400, 8000, 5, 35, 85, 450, 9000, 6, 40, 90, 500, 10000, 7, 45, 95, 1000, 50000, 8, 50, 100, 2000, 100000, 9, 55, 150, 3000, 500000, 10, 60, 200, 4000, 1000000 ]

  tableContent = "<h3>Reference Tables</h3>\n<h4>" + ccode + " > " + toCurr + "</h4>\n";
  startTable = "  <table class='reftable'><tr>\n";

  if (print) {
    tableContent = "<h3>" + ccode + " <-> " + toCurr + "</h3>\n<h4>" + ccode + " > " + toCurr + "</h4>\n";
    startTable = "  <table class='compactprint'><tr>\n";
  }

  tableForward = startTable;
  tableReverse = startTable;

  for (var i = 0; i < unitAmt.length; i++) {
    if ((i+1)%5 == 0) {
      tableForward += printRow(ccode, toCurr, unitAmt[i])[0] + "</tr><tr>";
      tableReverse += printRow(toCurr, ccode, unitAmt[i])[1] + "</tr><tr>";
    } else {
      tableForward += printRow(ccode, toCurr, unitAmt[i])[0];
      tableReverse += printRow(toCurr, ccode, unitAmt[i])[1];
    }
  }

  tableContent += tableForward + "\n  </tr></table>\n  <br><h4>" + toCurr + " > " + ccode + "</h4>" + tableReverse;

  return tableContent;
}

function printTable(ccode, toCurr) {
  var tableContent = outputTable(ccode, toCurr, false);
  var printButton = document.getElementById("printButton");
  printButton.style.display = "";

  var result = document.getElementById("resultTable");
  result.innerHTML = tableContent;
}

function printDiv(divName) {
  var fromCurr = document.getElementById("fromCurr").value;
  var toCurr = document.getElementById("toCurr").value;

  var printContents = outputTable(fromCurr, toCurr, true);
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

function checkStorage() {
  var stor = localStorage["tt_curr"];
  var rateObj = new Object();
  if (stor) {
    rateObj = JSON.parse(stor);
  } else {
    localRate(rateObj);
    setStorage(rateObj);
  }
  time = rateObj["time"];
  updateTime(time);
  return rateObj;
}

function setStorage(rateObj) {
  localStorage.setItem("tt_curr", JSON.stringify(rateObj));
}

function localRate(rateObj) {
  var request = new XMLHttpRequest();
  request.open("GET", "eurofxref-daily.xml", false);
  request.send();
  var xml = request.responseXML;
  var cube = xml.getElementsByTagName("Cube");
  var time = cube[1].attributes[0].value;

  rateObj["time"] = time;
  rateObj["EUR"] = 1;
  cubeImport(cube, rateObj);
}

function updateRate() {
  var request = new XMLHttpRequest();
  try {
    request.open("GET", "https://CORS-Anywhere.HerokuApp.com/https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml", false);
  }
  catch(err) {
    request.open("GET", "https://crossorigin.me/https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml", false);
  }
  request.send();
  var xml = request.responseXML;
  var cube = xml.getElementsByTagName("Cube");
  var time = cube[1].attributes[0].value;

  var rateObj = new Object();
  rateObj["time"] = time;
  rateObj["EUR"] = 1;
  cubeImport(cube, rateObj);
  setStorage(rateObj);

  updateTime(time);
}

function updateTime(time) {
  var asof = document.getElementById("asof");
  asof.innerHTML = "<p><em>As of: " + time + "</em></p>";
}

function cubeImport(cube, rateObj) {
  for(var i = 2; i < cube.length; i++) {
    var currency = cube[i].attributes[0].value;
    var rate = cube[i].attributes[1].value;
    rateObj[currency] = rate;
  }
}
