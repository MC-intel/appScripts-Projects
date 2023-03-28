function getFirstEmailBodyFromAddress(email) {
  var threads = GmailApp.search('from:' + email+' is:inbox');
  var bodies = [];
  for (var i = 0; i < threads.length; i++) {
    var threadMessages = threads[i].getMessages();
    for (var j = 0; j < threadMessages.length; j++) {
      bodies.push(threadMessages[j].getPlainBody());
    }
  }
  return bodies[0];
}

function sendEmail(to, subject, body) {
  GmailApp.sendEmail(to, subject, body);
}

function removeFirstLine(data) {
  var firstLineBreak = data.indexOf('\n');
  if (firstLineBreak !== -1) {
    return data.substring(firstLineBreak + 1);
  }
  return data;
}

function stripExtraSpacesAndLowercase(string) {
  return string.trim().toLowerCase();
}

function deleteMessagesFromAddress(email) {
  var threads = GmailApp.search('from:' + email+' is:inbox');
  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToTrash();
  }
}


//chatbot
function respondToInput(input) {
  // Access the Google Sheet data using the Google Sheets API
  var sheet = SpreadsheetApp.openById('1UD6aeN-F1VywKEuZPL9dcM5wFDOqfnisl9U_3KuX3aM').getSheetByName('K.I.M data');
  var data = sheet.getDataRange().getValues();
  
  // Process the input using the data from the sheet
  var response;
  // loop through the data and find the match with the input string
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] == input) {
      response = data[i][1];
      break;
    }
  }
  // Return the response
  if(response) return response;
  else return "I'm sorry, I didn't understand what you said.";
}


function addStringToSheetWithTimestamp(input, sheetName) {
  var sheet = SpreadsheetApp.openById('1UD6aeN-F1VywKEuZPL9dcM5wFDOqfnisl9U_3KuX3aM').getSheetByName(sheetName);
  //var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var sheet = ss.getSheetByName(sheetName);
  if (sheet == null) {
    sheet = ss.insertSheet(sheetName);
  }
  var lastRow = sheet.getLastRow();
  var timestamp = new Date();
  sheet.getRange(lastRow+1, 1).setValue(timestamp + " " + input);
}

