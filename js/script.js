function userLogin() {
  if (document.getElementById("username").value == "" ||
    document.getElementById("password").value == "") {
    document.getElementById("error-message").style.display = "block";
  } 
  else {
    sessionStorage.clear();
    sessionStorage.setItem("QuantCorrectAnswerCount", 0);
    sessionStorage.setItem("QuantAnswered", 0);
    sessionStorage.setItem("ReadingCorrectAnswerCount", 0);
    sessionStorage.setItem("ReadingAnswered", 0);
    sessionStorage.setItem("AVCorrectAnswerCount", 0);
    sessionStorage.setItem("AVAnswered", 0);
    window.location.href = "question1.html";
  }
}

function submitQuestion1() {
  if (document.getElementById("q1option4").checked) {
    sessionStorage.setItem(
      "QuantCorrectAnswerCount",
      parseInt(sessionStorage.getItem("QuantCorrectAnswerCount")) + 1
    );
    sessionStorage.setItem(
      "QuantAnswered",
      parseInt(sessionStorage.getItem("QuantAnswered")) + 1
    );
  } 
  else if (
    document.getElementById("q1option1").checked ||
    document.getElementById("q1option2").checked ||
    document.getElementById("q1option3").checked) {
    sessionStorage.setItem(
      "QuantAnswered",
      parseInt(sessionStorage.getItem("QuantAnswered")) + 1
    );
  } 
  else {
    sessionStorage.setItem(
      "QuantCorrectAnswerCount",
      parseInt(sessionStorage.getItem("QuantCorrectAnswerCount"))
    );
    sessionStorage.setItem(
      "QuantAnswered",
      parseInt(sessionStorage.getItem("QuantAnswered"))
    );
  }
  window.location.href = "question2.html";
}

function resetQuestion1() {
  document.getElementById("q1option1").checked = false;
  document.getElementById("q1option2").checked = false;
  document.getElementById("q1option3").checked = false;
  document.getElementById("q1option4").checked = false;
}

function submitQuestion2() {
  if (document.getElementById("q2option1").checked) {
    sessionStorage.setItem(
      "QuantCorrectAnswerCount",
      parseInt(sessionStorage.getItem("QuantCorrectAnswerCount")) + 1
    );
    sessionStorage.setItem(
      "QuantAnswered",
      parseInt(sessionStorage.getItem("QuantAnswered")) + 1
    );
  } 
  else if (
    document.getElementById("q2option2").checked ||
    document.getElementById("q2option3").checked ||
    document.getElementById("q2option4").checked) {
    sessionStorage.setItem(
      "QuantAnswered",
      parseInt(sessionStorage.getItem("QuantAnswered")) + 1
    );
  } 
  else {
    sessionStorage.setItem(
      "QuantCorrectAnswerCount",
      parseInt(sessionStorage.getItem("QuantCorrectAnswerCount"))
    );
    sessionStorage.setItem(
      "QuantAnswered",
      parseInt(sessionStorage.getItem("QuantAnswered"))
    );
  }
  window.location.href = "question3.html";
}

function resetQuestion2() {
  document.getElementById("q2option1").checked = false;
  document.getElementById("q2option2").checked = false;
  document.getElementById("q2option3").checked = false;
  document.getElementById("q2option4").checked = false;
}

function submitQuestion3() {
  if ( document.getElementById("q3option1m1").checked &&
    document.getElementById("q3option3m2").checked) {
    sessionStorage.setItem(
      "ReadingCorrectAnswerCount",
      parseInt(sessionStorage.getItem("ReadingCorrectAnswerCount")) + 1
    );
    sessionStorage.setItem(
      "ReadingAnswered",
      parseInt(sessionStorage.getItem("ReadingAnswered")) + 1
    );
  } 
  else if (
    document.getElementById("q3option2m1").checked ||
    document.getElementById("q3option3m1").checked ||
    document.getElementById("q3option1m2").checked ||
    document.getElementById("q3option3m2").checked) {
    sessionStorage.setItem(
      "ReadingAnswered",
      parseInt(sessionStorage.getItem("ReadingAnswered")) + 1
    );
  } 
  else {
    sessionStorage.setItem(
      "ReadingAnswered",
      parseInt(sessionStorage.getItem("ReadingAnswered"))
    );
  }
  window.location.href = "question4.html";
}

function resetQuestion3() {
  document.getElementById("q3option1m1").checked = false;
  document.getElementById("q3option1m2").checked = false;
  document.getElementById("q3option2m1").checked = false;
  document.getElementById("q3option2m2").checked = false;
  document.getElementById("q3option3m1").checked = false;
  document.getElementById("q3option3m2").checked = false;
}

function setMark1Value(id) {
  document.getElementById("price").innerHTML =
    "$" + document.getElementById(id).value;
}

function setMark2Value(id) {
  document.getElementById("company-name").innerHTML =
    document.getElementById(id).value;
}

function showMark1() {
  document.getElementById("o1mark1").style.display = "block";
  document.getElementById("o2mark1").style.display = "block";
  document.getElementById("o3mark1").style.display = "block";
}

function showMark2() {
  document.getElementById("o1mark2").style.display = "block";
  document.getElementById("o2mark2").style.display = "block";
  document.getElementById("o3mark2").style.display = "block";
}

function submitQuestion4() {
  if (document.getElementById("q4option1").checked) {
    sessionStorage.setItem(
      "AVCorrectAnswerCount",
      parseInt(sessionStorage.getItem("AVCorrectAnswerCount")) + 1
    );
    sessionStorage.setItem(
      "AVAnswered",
      parseInt(sessionStorage.getItem("AVAnswered")) + 1
    );
  } 
  else if (
    document.getElementById("q4option2").checked ||
    document.getElementById("q4option3").checked ||
    document.getElementById("q4option4").checked) {
    sessionStorage.setItem(
      "AVAnswered",
      parseInt(sessionStorage.getItem("AVAnswered")) + 1
    );
  }
  window.location.href = "survey.html";
}

function resetQuestion4() {
  document.getElementById("q4option1").checked = false;
  document.getElementById("q4option2").checked = false;
  document.getElementById("q4option3").checked = false;
  document.getElementById("q4option4").checked = false;
}

function submitSurvey() {
  window.location.href = "summary.html";
}

function skipSurvey() {
  window.location.href = "summary.html";
}

function getResults() {
  if (sessionStorage.getItem("QuantCorrectAnswerCount") != null ||
    sessionStorage.getItem("QuantAnswered") != null) {
    document.getElementById("quantQuestions").innerHTML +=
      sessionStorage.getItem("QuantAnswered");
    document.getElementById("quantCorrectAnswers").innerHTML +=
      sessionStorage.getItem("QuantCorrectAnswerCount");
    document.getElementById("quantScore").innerHTML +=
      sessionStorage.getItem("QuantCorrectAnswerCount") * "50";
  }
  if (sessionStorage.getItem("ReadingCorrectAnswerCount") != null) {
    document.getElementById("readingQuestions").innerHTML +=
      sessionStorage.getItem("ReadingCorrectAnswerCount");
    document.getElementById("readingCorrectAnswers").innerHTML +=
      sessionStorage.getItem("ReadingCorrectAnswerCount");
    document.getElementById("readingScore").innerHTML +=
      sessionStorage.getItem("ReadingCorrectAnswerCount") * "50";
  }
  if (sessionStorage.getItem("AVCorrectAnswerCount") != null) {
    document.getElementById("avQuestions").innerHTML += sessionStorage.getItem(
      "AVCorrectAnswerCount"
    );
    document.getElementById("avCorrectAnswers").innerHTML +=
      sessionStorage.getItem("AVCorrectAnswerCount");
    document.getElementById("avScore").innerHTML +=
      sessionStorage.getItem("AVCorrectAnswerCount") * "50";
  }
}

function finishQuiz() {
  window.alert("Thank you!!");
}