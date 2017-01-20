$("#header").append("hello woeld");



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCH02lV8Gc-SVfc8qRgXJ38utghRU5qnNg",
    authDomain: "employeedata-24406.firebaseapp.com",
    databaseURL: "https://employeedata-24406.firebaseio.com",
    storageBucket: "employeedata-24406.appspot.com",
    messagingSenderId: "218223176307"
  };
  firebase.initializeApp(config);


var database = firebase.database();
var employeeName = "";
var role = "";
var startDate = "";
var monthlyRate = "";
var monthsWorked = "";


  database.ref("/employees")({
        eName: employeeName,
        eRole: role,
        eStartDate: startDate,
        eMonthlyRate: monthlyRate,
        eMonthsWorked: monthsWorked
        
    });

database.on("value", function(snapshot) {

	var fireName = snapshot.val().eName;

                
            });