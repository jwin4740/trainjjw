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
var nextArrival = "";
var minutesAway = "";

function showTime() {
    var thetime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#headerspan").html(thetime);
}
setInterval(showTime, 1000);
var novoNumber = moment([2015, 0, 16]);
console.log(novoNumber);

var trainRef = database.ref(("/trainschedule/train " + number));
// trainRef.set({
//     trainNumber: number,
//     trainName: name,
//     trainDestination: destination,
//     trainFrequency: frequency,
//     trainnextArrival: nextArrival,
//     trainEta: minutesAway

// });
// At the initial load, get a snapshot of the current data.

var locazione = database.ref("/trainschedule");
locazione.once("value", function(snapshot) {

    a = snapshot.numChildren();
    console.log(a);




    for (var i = 1; i <= a; i++) {
        var trainRef = database.ref(("/trainschedule/train " + i));
        trainRef.on("value", function(snap) {

            // Print the initial data to the console.
            console.log(snap.val());

            // var locazione = database.ref("/trainschedule");
            // locazione.once("value", function(snapshot) {

            //  var a = snapshot.numChildren();
            //  console.log(a);

            // Change the html to reflect the initial value.

            // Change the clickCounter to match the data in the database
            if (snap.val() != null) {

                var fireTrainNumber = snap.val().trainNumber;
                var fireName = snap.val().trainName;
                var fireDestination = snap.val().trainDestination;
                var fireNextArrival = snap.val().trainnextArrival;
                var fireFreq = snap.val().trainFrequency;
                var fireMinutesAway = snap.val().trainMinutesAway;

                var min = moment().minute(); //gets the current minute 
                console.log(min);
                fireMinutesAway = ((fireFreq - min) % fireFreq);
                var hour = moment().hour();
                fireNextArrival = moment().add(fireMinutesAway, 'minutes').format("h:mm a");

                var fireFreqDisplay = "every " + fireFreq + " minutes";
                var fireMinutesAwayDisplay = fireMinutesAway + " min";
                var novoTableRow = $("<tr class='row" + snap.val().trainNumber + "' data-value='" + snap.val().trainNumber + "'>");
                
                var fireFrequencyHour = fireFreq;
                var fireHourCount = 0;
                var fireFrequencyMinutes;

                var fireHourMinutesAway = fireMinutesAway;
                var fireHourMinutes = "";
                var fireHourCountMin = 0;

                if (fireFreq > 59) {

                    do {
                        fireFrequencyHour = fireFrequencyHour - 60;
                        fireHourCount++;
                    }
                    while (fireFrequencyHour > 59);


                    fireFrequencyMinutes = fireFrequencyHour;
                    fireFreqDisplay = "every " + fireHourCount + " hr " + fireFrequencyMinutes + " min";
                }

                if (fireMinutesAway > 59) {

                    do {
                        fireHourMinutesAway = fireHourMinutesAway - 60;
                        fireHourCountMin++;
                    }
                    while (fireHourMinutesAway > 59);


                    fireHourMinutes = fireHourMinutesAway;
                    fireMinutesAwayDisplay = fireHourCountMin + " hr " + fireHourMinutes + " min";
                }

                var novoTableDsix = $("<td>" + fireTrainNumber + "</td>");
                var novoTableDone = $("<td>" + fireName + "</td>");
                var novoTableDfour = $("<td>" + fireNextArrival + "</td>");
                var novoTableDtwo = $("<td>" + fireDestination + "</td>");
                var novoTableDthree = $("<td>" + fireFreqDisplay + "</td>");
                var novoTableDfive = $("<td>" + fireMinutesAwayDisplay + "</td>");


                novoTableRow.append(novoTableDfour);
                novoTableRow.append(novoTableDsix);
                novoTableRow.append(novoTableDone);

                novoTableRow.append(novoTableDtwo);
                novoTableRow.append(novoTableDthree);
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
    frequency = parseInt($("#frequency").val());

    var min = moment().minute(); //gets the current minute 
    console.log(min);



    minutesAway = ((frequency - min) % frequency);
    var hour = moment().hour();
    nextArrival = moment().add(minutesAway, 'minutes').format("h:mm a");

    var frequencyDisplay = "every " + frequency + " minutes";
    var minutesAwayDisplay = minutesAway + " min";

    var frequencyHour = frequency;
    var frequencyMinutes = "";
    var hourCount = 0;

    var hourMinutesAway = minutesAway;
    var hourMinutes = "";
    var hourCountMin = 0;


    if (frequency > 59) {

        do {
            frequencyHour = frequencyHour - 60;

            hourCount++;
        }
        while (frequencyHour > 59);


        frequencyMinutes = frequencyHour;
        frequencyDisplay = "every " + hourCount + " hr " + frequencyMinutes + " min";
    }

    if (minutesAway > 59) {

        do {
            hourMinutesAway = hourMinutesAway - 60;
            hourCountMin++;
        }
        while (hourMinutesAway > 59);


        hourMinutes = hourMinutesAway;
        minutesAwayDisplay = hourCountMin + " hr " + hourMinutes + " min";
    }



    var novoTableRow = $("<tr class='row" + number + "' data-value='" + number + "'>");
    var novoTableDsix = $("<td>" + number + "</td>");
    var novoTableDone = $("<td>" + name + "</td>");
    var novoTableDtwo = $("<td>" + destination + "</td>");
    var novoTableDthree = $("<td>" + frequencyDisplay + "</td>");
    var novoTableDfour = $("<td>" + nextArrival + "</td>");
    var novoTableDfive = $("<td>" + minutesAwayDisplay + "</td>");

    novoTableRow.append(novoTableDfour);
    novoTableRow.append(novoTableDsix);
    novoTableRow.append(novoTableDone);

    novoTableRow.append(novoTableDtwo);

    novoTableRow.append(novoTableDthree);

    novoTableRow.append(novoTableDfive);


    $("#tablebody").append(novoTableRow);




    database.ref(("/trainschedule/train " + number)).set({
        trainName: name,
        trainDestination: destination,
        trainFrequency: frequency,
        trainnextArrival: nextArrival,
        trainMinutesAway: minutesAway,
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
