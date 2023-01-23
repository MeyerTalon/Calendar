// Initialize the date variables that will be used
var currentDate = dayjs().format('dddd, MMMM D');
var currentHour = parseInt(dayjs().format('H'));

// Initilize all the necesary local storage items
var eventInfo9 = localStorage.getItem('Info-9');
var eventInfo10 = localStorage.getItem('Info-10');
var eventInfo11 = localStorage.getItem('Info-11');
var eventInfo12 = localStorage.getItem('Info-12');
var eventInfo1 = localStorage.getItem('Info-1');
var eventInfo2 = localStorage.getItem('Info-2');
var eventInfo3 = localStorage.getItem('Info-3');
var eventInfo4 = localStorage.getItem('Info-4');
var eventInfo5 = localStorage.getItem('Info-5');

// If the local storage is not null, removes the quotes from each local storage string
if (eventInfo9 !== null) {
    eventInfo9 = eventInfo9.substring(1, eventInfo9.length - 1);
}
if (eventInfo10 !== null) {
    eventInfo10 = eventInfo10.substring(1, eventInfo10.length - 1);
}
if (eventInfo11 !== null) {
    eventInfo11 = eventInfo11.substring(1, eventInfo11.length - 1);
}
if (eventInfo12 !== null) {
    eventInfo12 = eventInfo12.substring(1, eventInfo12.length - 1);
}
if (eventInfo1 !== null) {
    eventInfo1 = eventInfo1.substring(1, eventInfo1.length - 1);
}
if (eventInfo2 !== null) {
    eventInfo2 = eventInfo2.substring(1, eventInfo2.length - 1);
}
if (eventInfo3 !== null) {
    eventInfo3 = eventInfo3.substring(1, eventInfo3.length - 1);
}
if (eventInfo4 !== null) {
    eventInfo4 = eventInfo4.substring(1, eventInfo4.length - 1);
}
if (eventInfo5 !== null) {
    eventInfo5 = eventInfo5.substring(1, eventInfo5.length - 1);
}


$(function () {

    // Sets each event's text to the matching local storage item
    $('#hour-9').children('textarea').val(eventInfo9);
    $('#hour-10').children('textarea').val(eventInfo10);
    $('#hour-11').children('textarea').val(eventInfo11);
    $('#hour-12').children('textarea').val(eventInfo12);
    $('#hour-13').children('textarea').val(eventInfo1);
    $('#hour-14').children('textarea').val(eventInfo2);
    $('#hour-15').children('textarea').val(eventInfo3);
    $('#hour-16').children('textarea').val(eventInfo4);
    $('#hour-17').children('textarea').val(eventInfo5);

    // Following code creates the click function for each save button
    // When clicked the function saves the matching user input to local storage
    var saveBtn9 = $('#hour-9').children('.saveBtn');
    saveBtn9.on('click', function() {
        var userInput = $('#hour-9').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-9', userInput);
    });

    var saveBtn10 = $('#hour-10').children('.saveBtn');
    saveBtn10.on('click', function() {
        var userInput = $('#hour-10').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-10', userInput);
    });

    var saveBtn11 = $('#hour-11').children('.saveBtn');
    saveBtn11.on('click', function() {
        var userInput = $('#hour-11').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-11', userInput);
    });

    var saveBtn12 = $('#hour-12').children('.saveBtn');
    saveBtn12.on('click', function() {
        var userInput = $('#hour-12').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-12', userInput);
    });

    var saveBtn1 = $('#hour-13').children('.saveBtn');
    saveBtn1.on('click', function() {
        var userInput = $('#hour-13').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-1', userInput);
    });

    var saveBtn2 = $('#hour-14').children('.saveBtn');
    saveBtn2.on('click', function() {
        var userInput = $('#hour-14').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-2', userInput);
    });

    var saveBtn3 = $('#hour-15').children('.saveBtn');
    saveBtn3.on('click', function() {
        var userInput = $('#hour-15').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-3', userInput);
    });

    var saveBtn4 = $('#hour-16').children('.saveBtn');
    saveBtn4.on('click', function() {
        var userInput = $('#hour-16').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-4', userInput);
    });

    var saveBtn5 = $('#hour-17').children('.saveBtn');
    saveBtn5.on('click', function() {
        var userInput = $('#hour-17').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-5', userInput);
    });

    // Calls the checkTime() method for each event.
    var hour = 9;
    for (var i = 0; i < 9; i++) {
        checkTime(hour);
        hour++;
    }

    // Displays the current date at the top of the page
    $('.date').text(currentDate);

    // Checks the current time of the given event, compares it to the current hour,
    // and sets class to past, present, or future accordingly.
    function checkTime(givenHour) {

        var eventEl = $("#hour-" + givenHour);
        var eventHourText = $(eventEl).text();
        var eventHour = parseInt(eventHourText);

        if (eventHour < 9) {
            eventHour += 12;
        }
    
        if (eventHour > currentHour) {
            eventEl.addClass('future');
        } else if (eventHour < currentHour) {
            eventEl.addClass('past');
        } else {
            eventEl.addClass('present');
        }
    
        return;
    }
  });
  
