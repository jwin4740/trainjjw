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


var trainRef = database.ref(("/trainschedule/train " + number));


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
                var fireNextArrival = snap.val().trainNextArrival;
                var fireFreq = snap.val().trainFrequency;
                var fireMinutesAway = snap.val().trainMinutesAway;

                var min = moment().minute(); //gets the current minute 
                console.log(min);
                fireMinutesAway = (fireFreq - (min % fireFreq));
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

                var novoTableDsix = $("<td class='trainrow'>" + fireTrainNumber + "</td>");
                var novoTableDone = $("<td class='trainrow'>" + fireName + "</td>");
                var novoTableDfour = $("<td class='trainrow'>" + fireNextArrival + "</td>");
                var novoTableDtwo = $("<td class='trainrow'>" + fireDestination + "</td>");
                var novoTableDthree = $("<td class='trainrow'>" + fireFreqDisplay + "</td>");
                var novoTableDfive = $("<td class='trainrow'>" + fireMinutesAwayDisplay + "</td>");


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

function updateFireBase() {

    $(".trainrow").remove();

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
                    var fireNextArrival = snap.val().trainNextArrival;
                    var fireFreq = snap.val().trainFrequency;
                    var fireMinutesAway = snap.val().trainMinutesAway;

                    var min = moment().minute(); //gets the current minute 
                    console.log(min);
                    fireMinutesAway = (fireFreq - (min % fireFreq));
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

                    var novoTableDsix = $("<td class='trainrow'>" + fireTrainNumber + "</td>");
                    var novoTableDone = $("<td class='trainrow'>" + fireName + "</td>");
                    var novoTableDfour = $("<td class='trainrow'>" + fireNextArrival + "</td>");
                    var novoTableDtwo = $("<td class='trainrow'>" + fireDestination + "</td>");
                    var novoTableDthree = $("<td class='trainrow'>" + fireFreqDisplay + "</td>");
                    var novoTableDfive = $("<td class='trainrow'>" + fireMinutesAwayDisplay + "</td>");


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
    database.ref(("/trainschedule/train " + fireTrainNumber)).set({
        trainName: fireName,
        trainDestination: fireDestination,
        trainFrequency: fireFreq,
        trainNextArrival: fireNextArrival,
        trainMinutesAway: fireMinutesAway,
        trainNumber: fireTrainNumber

    });
}
setInterval(updateFireBase, 15000);




$("#addTrain").on("click", function() {
    event.preventDefault();

    updateData();
    a++;

});



function updateData() {


    number = parseFloat($("#trainNumber").val());
    name = $("#trainName").val();
    destination = $("#destination").val();
    frequency = parseInt($("#frequency").val());

    var min = moment().minute(); //gets the current minute 
    console.log(min);



    minutesAway = (frequency - (min % frequency));
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
    var novoTableDsix = $("<td class='trainrow'>" + number + "</td>");
    var novoTableDone = $("<td class='trainrow'>" + name + "</td>");
    var novoTableDtwo = $("<td class='trainrow'>" + destination + "</td>");
    var novoTableDthree = $("<td class='trainrow'>" + frequencyDisplay + "</td>");
    var novoTableDfour = $("<td class='trainrow'>" + nextArrival + "</td>");
    var novoTableDfive = $("<td class='trainrow'>" + minutesAwayDisplay + "</td>");

    novoTableRow.append(novoTableDfour);
    novoTableRow.append(novoTableDsix);
    novoTableRow.append(novoTableDone);

    novoTableRow.append(novoTableDtwo);

    novoTableRow.append(novoTableDthree);

    novoTableRow.append(novoTableDfive);


    
    database.ref(("/trainschedule/train " + number)).set({
        trainName: name,
        trainDestination: destination,
        trainFrequency: frequency,
        trainNextArrival: nextArrival,
        trainMinutesAway: minutesAway,
        trainNumber: number

    });

$("#tablebody").append(novoTableRow);
}
