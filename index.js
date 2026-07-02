//CODE WRITTEN ON CODE.ORG APP LAB


var createToDo = [];
//Creates a list called "messages" that gives encouraging
//messages when the user submits each of their to-do items.
var messages = ["Keep up the good work!", "You got this!", "Great work!", "Fantastic!", "Good job!"];
//Main function called "submitYourToDo" that takes in
//parameters of the max number of items in the list
//and then accepts the courage messages.
//Main procedure/function and its name is defined and has two parameters (max and Messages)
function submitYourToDo(max, Messages) {
  //Sequencing is used in the body of my procedure
  //The if loop gives the algorithm iteration as it
  //allows the function to accept the number of items 
  //for the length and asks the user to input
  //to-do list items for the amount they wanted
  //to include, as well as displaying the
  //encouraging messages for the pre-set list.
  //Iteration is used in the body of my procedure
  if ((createToDo.length) < max) {
    //This takes user input
    var newItem = getText("UserInput");
    appendItem(createToDo, newItem);
    setText("UserInput", "");
    var courageMessages = messages[(randomNumber(0, messages.length - 1))];
    setText(Messages, courageMessages);
    showList();
  } else {
    setText(Messages, "You can only enter 5 items!");
  }
}
//The function "showList" is embedded into
//the function "submitYourToDo" to iterate through
//the list and then place into the
//corresponding to-do boxes.
function showList() {
  //The for loop gives the algorithm iteration to go
  //through each user-inputed to-do  item
  //in the list to display it in the output boxes.
  //This function is a connecting part of the main function and demonstrates selection
  //in the body of my selected procedure.
  for (var i = 0; i < createToDo.length; i++) {
    var getOutput;
    //The if statement gives the algorithm
    //selection to match up the indexes to where
    //the to-do items for the output should go.
    if (i == 0) {
      getOutput = "UserOutput";
      setText(getOutput, createToDo[0]);
    } else {
      getOutput = "UserOutput" + i;
      setText(getOutput, createToDo[i]);
    }
  }
}
var createToDo1 = [];
//Creates a list called "messages1" that gives encouraging
//messages when the user submits each of their to-do items.
var messages1 = ["Keep up the good work!", "You got this!", "Great work!", "Fantastic!", "Good job!"];
//Main function called "submitYourToDo1" that takes in
//parameters of the max number of items in the list
//and then accepts the courage messages.
function submitYourToDo1(max, Messages) {
  //The if loop gives the algorithm iteration as it
  //allows the function to accept the number of items 
  //for the length and asks the user to input
  //to-do list items for the amount they wanted
  //to include, as well as displaying the
  //encouraging messages for the pre-set list.
  if ((createToDo1.length) < max) {
    var newItem = getText("UserInpu");
    appendItem(createToDo1, newItem);
    setText("UserInpu", "");
    var courageMessage = messages1[(randomNumber(0, messages.length - 1))];
    setText(Messages, courageMessage);
    showList1();
  } else {
    setText(Messages, "You can only enter 5 items!");
  }
}
//The function "showList1" is embedded into
//the function "submitYourToDo1" to iterate through
//the list and then place into the
//corresponding to-do boxes.
function showList1() {
  //The for loop gives the algorithm iteration to go
  //through each user-inputed to-do  item
  //in the list to display it in the output boxes.
  for (var i = 0; i < createToDo1.length; i++) {
    var getOutput;
    //The if statement gives the algorithm
    //selection to match up the indexes to where
    //the to-do items for the output should go.
    if (i == 0) {
      getOutput = "UserOutpu";
      setText(getOutput, createToDo1[0]);
    } else {
      getOutput = "UserOutpu" + i;
      setText(getOutput, createToDo1[i]);
    }
  }
}
var createToDo2 = [];
//Creates a list called "messages2" that gives encouraging
//messages when the user submits each of their to-do items.
var messages2 = ["Keep up the good work!", "You got this!", "Great work!", "Fantastic!", "Good job!"];
//Main function called "submitYourToDo2" that takes in
//parameters of the max number of items in the list
//and then accepts the courage messages.
function submitYourToDo2(max, Messages) {
  //The if loop gives the algorithm iteration as it
  //allows the function to accept the number of items 
  //for the length and asks the user to input
  //to-do list items for the amount they wanted
  //to include, as well as displaying the
  //encouraging messages for the pre-set list.
  if ((createToDo2.length) < max) {
    var newItem = getText("UserInp");
    appendItem(createToDo2, newItem);
    setText("UserInp", "");
    var courageMessag = messages2[(randomNumber(0, messages.length - 1))];
    setText(Messages, courageMessag);
    showList2();
  } else {
    setText(Messages, "You can only enter 5 items!");
  }
}
//The function "showList2" is embedded into
//the function "submitYourToDo2" to iterate through
//the list and then place into the
//corresponding to-do boxes.
function showList2() {
  //The for loop gives the algorithm iteration to go
  //through each user-inputed to-do  item
  //in the list to display it in the output boxes.
  for (var i = 0; i < createToDo2.length; i++) {
    var getOutput;
    //The if statement gives the algorithm
    //selection to match up the indexes to where
    //the to-do items for the output should go.
    if (i == 0) {
      getOutput = "UserOutp";
      setText(getOutput, createToDo2[0]);
    } else {
      getOutput = "UserOutp" + i;
      setText(getOutput, createToDo2[i]);
    }
  }
}
var createToDo3 = [];
//Creates a list called "messages3" that gives encouraging
//messages when the user submits each of their to-do items.
var messages3 = ["Keep up the good work!", "You got this!", "Great work!", "Fantastic!", "Good job!"];
//Main function called "submitYourToDo3" that takes in
//parameters of the max number of items in the list
//and then accepts the courage messages.
function submitYourToDo3(max, Messages) {
  //The if loop gives the algorithm iteration as it
  //allows the function to accept the number of items 
  //for the length and asks the user to input
  //to-do list items for the amount they wanted
  //to include, as well as displaying the
  //encouraging messages for the pre-set list.
  if ((createToDo3.length) < max) {
    var newItem = getText("UserIn");
    appendItem(createToDo3, newItem);
    setText("UserIn", "");
    var courageMessa = messages3[(randomNumber(0, messages.length - 1))];
    setText(Messages, courageMessa);
    showList3();
  } else {
    setText(Messages, "You can only enter 5 items!");
  }
}
//The function "showList3" is embedded into
//the function "submitYourToDo3" to iterate through
//the list and then place into the
//corresponding to-do boxes.
function showList3() {
  //The for loop gives the algorithm iteration to go
  //through each user-inputed to-do  item
  //in the list to display it in the output boxes.
  for (var i = 0; i < createToDo3.length; i++) {
    var getOutput;
    //The if statement gives the algorithm
    //selection to match up the indexes to where
    //the to-do items for the output should go.
    if (i == 0) {
      getOutput = "UserOut";
      setText(getOutput, createToDo3[0]);
    } else {
      getOutput = "UserOut" + i;
      setText(getOutput, createToDo3[i]);
    }
  }
}
var createToDo4 = [];
//Creates a list called "messages4" that gives encouraging
//messages when the user submits each of their to-do items.
var messages4 = ["Keep up the good work!", "You got this!", "Great work!", "Fantastic!", "Good job!"];
//Main function called "submitYourToDo4" that takes in
//parameters of the max number of items in the list
//and then accepts the courage messages.
function submitYourToDo4(max, Messages) {
  //The if loop gives the algorithm iteration as it
  //allows the function to accept the number of items 
  //for the length and asks the user to input
  //to-do list items for the amount they wanted
  //to include, as well as displaying the
  //encouraging messages for the pre-set list.
  if ((createToDo4.length) < max) {
    var newItem = getText("UserI");
    appendItem(createToDo4, newItem);
    setText("UserI", "");
    var courageMess = messages4[(randomNumber(0, messages.length - 1))];
    setText(Messages, courageMess);
    showList4();
  } else {
    setText(Messages, "You can only enter 5 items!");
  }
}
//The function "showList4" is embedded into
//the function "submitYourToDo4" to iterate through
//the list and then place into the
//corresponding to-do boxes.
function showList4() {
  //The for loop gives the algorithm iteration to go
  //through each user-inputed to-do  item
  //in the list to display it in the output boxes.
  for (var i = 0; i < createToDo4.length; i++) {
    var getOutput;
    //The if statement gives the algorithm
    //selection to match up the indexes to where
    //the to-do items for the output should go.
    if (i == 0) {
      getOutput = "UserOu";
      setText(getOutput, createToDo4[0]);
    } else {
      getOutput = "UserOu" + i;
      setText(getOutput, createToDo4[i]);
    }
  }
}
var createToDo5 = [];
//Creates a list called "messages5" that gives encouraging
//messages when the user submits each of their to-do items.
var messages5 = ["Keep up the good work!", "You got this!", "Great work!", "Fantastic!", "Good job!"];
//Main function called "submitYourToDo5" that takes in
//parameters of the max number of items in the list
//and then accepts the courage messages.
function submitYourToDo5(max, Messages) {
  //The if loop gives the algorithm iteration as it
  //allows the function to accept the number of items 
  //for the length and asks the user to input
  //to-do list items for the amount they wanted
  //to include, as well as displaying the
  //encouraging messages for the pre-set list.
  if ((createToDo5.length) < max) {
    var newItem = getText("nput");
    appendItem(createToDo5, newItem);
    setText("nput", "");
    var geMessages = messages5[(randomNumber(0, messages.length - 1))];
    setText(Messages, geMessages);
    showList5();
  } else {
    setText(Messages, "You can only enter 5 items!");
  }
}
//The function "showList5" is embedded into
//the function "submitYourToDo5" to iterate through
//the list and then place into the
//corresponding to-do boxes.
function showList5() {
  //The for loop gives the algorithm iteration to go
  //through each user-inputed to-do  item
  //in the list to display it in the output boxes.
  for (var i = 0; i < createToDo5.length; i++) {
    var getOutput;
    //The if statement gives the algorithm
    //selection to match up the indexes to where
    //the to-do items for the output should go.
    if (i == 0) {
      getOutput = "utput";
      setText(getOutput, createToDo5[0]);
    } else {
      getOutput = "utput" + i;
      setText(getOutput, createToDo5[i]);
    }
  }
}
var createToDo6 = [];
//Creates a list called "messages6" that gives encouraging
//messages when the user submits each of their to-do items.
var messages6 = ["Keep up the good work!", "You got this!", "Great work!", "Fantastic!", "Good job!"];
//Main function called "submitYourToDo6" that takes in
//parameters of the max number of items in the list
//and then accepts the courage messages.
function submitYourToDo6(max, Messages) {
  //The if loop gives the algorithm iteration as it
  //allows the function to accept the number of items 
  //for the length and asks the user to input
  //to-do list items for the amount they wanted
  //to include, as well as displaying the
  //encouraging messages for the pre-set list.
  if ((createToDo6.length) < max) {
    var newItem = getText("put");
    appendItem(createToDo6, newItem);
    setText("put", "");
    var eMessages = messages6[(randomNumber(0, messages.length - 1))];
    setText(Messages, eMessages);
    showList6();
  } else {
    setText(Messages, "You can only enter 5 items!");
  }
}
//The function "showList6" is embedded into
//the function "submitYourToDo6" to iterate through
//the list and then place into the
//corresponding to-do boxes.
function showList6() {
  //The for loop gives the algorithm iteration to go
  //through each user-inputed to-do  item
  //in the list to display it in the output boxes.
  for (var i = 0; i < createToDo6.length; i++) {
    var getOutput;
    //The if statement gives the algorithm
    //selection to match up the indexes to where
    //the to-do items for the output should go.
    if (i == 0) {
      getOutput = "tput";
      setText(getOutput, createToDo6[0]);
    } else {
      getOutput = "tput" + i;
      setText(getOutput, createToDo6[i]);
    }
  }
}

onEvent("instructions", "click", function( ) {
  setScreen("howTo");
});
onEvent("homeButton", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("listButton", "click", function( ) {
  setScreen("todoListDirectory");
});
onEvent("mondayList", "click", function( ) {
  setScreen("monday");
});
onEvent("homeButton14", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("sundayList", "click", function( ) {
  setScreen("sunday");
});
onEvent("tuesdayList", "click", function( ) {
  setScreen("tuesday");
});
onEvent("wednesdayList", "click", function( ) {
  setScreen("wednesday");
});
onEvent("thursdayList", "click", function( ) {
  setScreen("thursday");
});
onEvent("fridayList", "click", function( ) {
  setScreen("friday");
});
onEvent("saturdayList", "click", function( ) {
  setScreen("saturday");
});
onEvent("homeButton2", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("tipsButton", "click", function( ) {
  setScreen("timeManagementTips");
});
onEvent("homeButton3", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("healthButton", "click", function( ) {
  setScreen("mentalHealthTips");
});
onEvent("quizButton", "click", function( ) {
  setScreen("productivityQuiz");
});
onEvent("startQuiz", "click", function( ) {
  setScreen("question1");
});
onEvent("homeButton4", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("1.1", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("1.2", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("1.3", "click", function( ) {
  setScreen("question2");
});
onEvent("1.4", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("homeButton5", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("2.1", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("2.2", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("2.3", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("2.4", "click", function( ) {
  setScreen("question3");
});
onEvent("homeButton6", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("3.1", "click", function( ) {
  setScreen("question4");
});
onEvent("3.2", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("3.3", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("3.4", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("homeButton7", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("4.1", "click", function( ) {
  setScreen("question5");
});
onEvent("4.2", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("4.3", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("4.4", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("homeButton8", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("5.1", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("5.2", "click", function( ) {
  setScreen("question6");
});
onEvent("5.3", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("5.4", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("homeButton9", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("6.1", "click", function( ) {
  setScreen("question7");
});
onEvent("6.2", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("homeButton10", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("7.1", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("7.2", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("7.3", "click", function( ) {
  setScreen("winnerScreen");
});
onEvent("7.4", "click", function( ) {
  setScreen("wrongAnswer");
});
onEvent("homeButton11", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("winnerAgain", "click", function( ) {
  setScreen("productivityQuiz");
});
onEvent("homeButton12", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("restartButton", "click", function( ) {
  setScreen("productivityQuiz");
});
onEvent("homeButton13", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("Monday", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("Tuesday", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("Wednesday", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("Thursday", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("Friday", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("Saturday", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("Sunday", "click", function( ) {
  setScreen("mainScreen");
});
//Calls my procedure/function called "submitYourToDo" when the submissionButton is clicked.
onEvent("submissionButton", "click", function( ) {
  submitYourToDo(5, "courageMessages");
});
onEvent("submissionButton2", "click", function( ) {
  submitYourToDo1(5, "courageMessage");
});
onEvent("submissionButton3", "click", function( ) {
  submitYourToDo2(5, "courageMessag");
});
onEvent("submissionButton4", "click", function( ) {
  submitYourToDo3(5, "courageMessa");
});
onEvent("submissionButton5", "click", function( ) {
  submitYourToDo4(5, "courageMess");
});
onEvent("submissionButton6", "click", function( ) {
  submitYourToDo5(5, "courageMes");
});
onEvent("submissionButton7", "click", function( ) {
  submitYourToDo6(5, "courageMe");
});
