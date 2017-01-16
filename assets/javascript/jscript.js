var config = {
    apiKey: "AIzaSyCAn7uijojtF8McvMwuRtjOwiopN3_enqk",
    authDomain: "trainjjw.firebaseapp.com",
    databaseURL: "https://trainjjw.firebaseio.com",
    storageBucket: "trainjjw.appspot.com",
    messagingSenderId: "765865960520"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
var a = "";
var number = "";
var name = "";
var destination = "";
var frequency = "";
var arrivalTime = "";
var minutesAway = "";

var trainRef = database.ref(("/trainschedule/train " + number));
// trainRef.set({
//     trainNumber: number,
//     trainName: name,
//     trainDestination: destination,
//     trainFrequency: frequency,
//     trainArrivalTime: arrivalTime,
//     trainEta: minutesAway

// });
// At the initial load, get a snapshot of the current data.

var locazione = database.ref("/trainschedule");
locazione.once("value", function(snapshot) {

	a = snapshot.numChildren();
	console.log(a);






for (var i = 1; i <= a; i++){
	var trainRef = database.ref(("/trainschedule/train " + i));
trainRef.on("value", function(snap) {

            // Print the initial data to the console.
            console.log(snap.val());

// var locazione = database.ref("/trainschedule");
// locazione.once("value", function(snapshot) {

// 	var a = snapshot.numChildren();
// 	console.log(a);

            // Change the html to reflect the initial value.

            // Change the clickCounter to match the data in the database
if (snap.val() != null)
{
         

            // Log the value of the clickCounter
           
                var novoTableRow = $("<tr>");
                var novoTableDone = $("<td>" + snap.val().trainName + "</td>");
                var novoTableDtwo = $("<td>" + snap.val().trainDestination + "</td>");
                var novoTableDthree = $("<td>" + snap.val().trainFrequency + "</td>");
                var novoTableDfour = $("<td>" + snap.val().trainArrivalTime + "</td>");
                var novoTableDfive = $("<td>" + snap.val().trainEta + "</td>");
                var novoTableDsix = $("<td>" + snap.val().trainNumber + "</td>");
                novoTableRow.append(novoTableDsix);
                novoTableRow.append(novoTableDone);
                novoTableRow.append(novoTableDtwo);
                novoTableRow.append(novoTableDthree);
                novoTableRow.append(novoTableDfour);
                novoTableRow.append(novoTableDfive);
                

                $("#tablebody").append(novoTableRow);
}
            
    });
    
}

});


$("#addTrain").on("click", function() {
    event.preventDefault();

    number = parseFloat($("#trainNumber").val());
    name = $("#trainName").val();
    destination = $("#destination").val();
    frequency = $("#frequency").val();
    arrivalTime = $("#arrivalTime").val();
    minutesAway = $("#minutesAway").val();

    var novoTableRow = $("<tr>");
    var novoTableDone = $("<td>" + name + "</td>");
    var novoTableDtwo = $("<td>" + destination + "</td>");
    var novoTableDthree = $("<td>" + frequency + "</td>");
    var novoTableDfour = $("<td>" + arrivalTime + "</td>");
    var novoTableDfive = $("<td>" + minutesAway + "</td>");
    var novoTableDsix = $("<td>" + number + "</td>");

     novoTableRow.append(novoTableDone);
     novoTableRow.append(novoTableDtwo);
     novoTableRow.append(novoTableDthree);
     novoTableRow.append(novoTableDfour);
     novoTableRow.append(novoTableDfive);
     novoTableRow.append(novoTableDsix);

  $("#tablebody").append(novoTableRow);

    database.ref(("/trainschedule/train " + number)).set({
        trainName: name,
        trainDestination: destination,
        trainFrequency: frequency,
        trainArrivalTime: arrivalTime,
        trainEta: minutesAway,
        trainNumber: number

    });

});

// Whenever a user clicks the click button


// Reduce the clickCounter by 1
//   clickCounter--;

//   // Alert User and reset the counter
//   if (clickCounter === 0) {
//     alert("Phew! You made it! That sure was a lot of clicking.");
//     clickCounter = initialValue;
//   }

//   // Save new value to Firebase
//   database.ref().set({
//     clickCount: clickCounter
//   });

//   // Log the value of clickCounter
//   console.log(clickCounter);

// });

// // Whenever a user clicks the restart button
// $("#restart-button").on("click", function() {

//   // Set the clickCounter back to initialValue
//   clickCounter = initialValue;

//   // Save new value to Firebase
//   database.ref().set({
//     clickCount: clickCounter
//   });

//   // Log the value of clickCounter
//   console.log(clickCounter);

//   // Change the HTML Values
//   $("#click-value").html(clickCounter);

// });
