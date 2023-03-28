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
  MailApp.sendEmail(to, subject, body);
}

function removeFirstLine(data) {
  if (typeof data === 'string' && data.length > 0) {
    var firstLineBreak = data.indexOf('\n');
    if (firstLineBreak !== -1) {
      return data.substring(firstLineBreak + 1);
    }
  }
  return data;
}

function stripExtraSpacesAndLowercase(string) {
  if (typeof string === 'string') {
    return string.trim().toLowerCase();
  }
  return string;
}









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
  MailApp.sendEmail(to, subject, body);
}

function removeFirstLine(data) {
  if (typeof data === 'string' && data.length > 0) {
    var firstLineBreak = data.indexOf('\n');
    if (firstLineBreak !== -1) {
      return data.substring(firstLineBreak + 1);
    }
  }
  return data;
}

function stripExtraSpacesAndLowercase(string) {
  if (typeof string === 'string') {
    return string.trim().toLowerCase();
  }
  return string;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkEmail() {
  var emails = ['EMAIL@gmail.com'];

  var emailBody = 'Hello, email';

  for (var i = 0; i < emails.length; i++) {
    var email = emails[i];
    var mail = fern_lib.getFirstEmailBodyFromAddress(email);
    var mail2 = fern_lib.removeFirstLine(mail);
    var mail3 = fern_lib.stripExtraSpacesAndLowercase(mail2);

    var response = emailBody;

    fern_lib.sendEmail(email, 'HI!', response);

    Logger.log(response);
  }
}