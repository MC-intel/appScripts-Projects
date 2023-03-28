function getSheetData(sheetId) {
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  var data = sheet.getDataRange().getValues();
  return data;
}

function insertStringIntoSheet(string, sheetId) {
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName("Sheet1");
  sheet.appendRow([string]);
}

function getFirstColumn(sheetId) {
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  var range = sheet.getRange(1, 1, sheet.getLastRow(), 1);
  var values = range.getValues();
  var firstColumn = values.map(function(row) {
    return row[0];
  });
  return firstColumn;
}

function getStockPrice(tickerArray, sheetId) {
  for(var i = 0; i < tickerArray.length; i++) {
    var ticker = tickerArray[i];
    var url = "https://query1.finance.yahoo.com/v8/finance/chart/" + ticker;
    var options = {
      "method" : "get"
    };
    var response = UrlFetchApp.fetch(url, options);
    var data = JSON.parse(response.getContentText());
    var stockPrice = data.chart.result[0].meta.regularMarketPrice;
    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName("Sheet1");
    var currentTime = new Date();
    sheet.appendRow([ticker,currentTime,stockPrice]);
  }
}




