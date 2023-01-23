// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDate = dayjs().format('dddd, MMMM D');
var currentHour = parseInt(dayjs().format('H'));

// localStorage.setItem('Info-9', '');
// localStorage.setItem('Info-10', '');
// localStorage.setItem('Info-11', '');
// localStorage.setItem('Info-12', '');
// localStorage.setItem('Info-1', '');
// localStorage.setItem('Info-2', '');
// localStorage.setItem('Info-3', '');
// localStorage.setItem('Info-4', '');
// localStorage.setItem('Info-5', '');


var eventInfo9 = localStorage.getItem('Info-9');
var eventInfo10 = localStorage.getItem('Info-10');
var eventInfo11 = localStorage.getItem('Info-11');
var eventInfo12 = localStorage.getItem('Info-12');
var eventInfo1 = localStorage.getItem('Info-1');
var eventInfo2 = localStorage.getItem('Info-2');
var eventInfo3 = localStorage.getItem('Info-3');
var eventInfo4 = localStorage.getItem('Info-4');
var eventInfo5 = localStorage.getItem('Info-5');

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
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    $('#hour-9').children('textarea').val(eventInfo9);
    $('#hour-10').children('textarea').val(eventInfo10);
    $('#hour-11').children('textarea').val(eventInfo11);
    $('#hour-12').children('textarea').val(eventInfo12);
    $('#hour-13').children('textarea').val(eventInfo1);
    $('#hour-14').children('textarea').val(eventInfo2);
    $('#hour-15').children('textarea').val(eventInfo3);
    $('#hour-16').children('textarea').val(eventInfo4);
    $('#hour-17').children('textarea').val(eventInfo5);

    var saveBtn9 = $('#hour-9').children('.saveBtn');
    saveBtn9.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-9').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-9', userInput);
    });

    var saveBtn10 = $('#hour-10').children('.saveBtn');
    saveBtn10.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-10').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-10', userInput);
    });

    var saveBtn11 = $('#hour-11').children('.saveBtn');
    saveBtn11.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-11').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-11', userInput);
    });

    var saveBtn12 = $('#hour-12').children('.saveBtn');
    saveBtn12.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-12').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-12', userInput);
    });

    var saveBtn1 = $('#hour-13').children('.saveBtn');
    saveBtn1.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-13').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-1', userInput);
    });

    var saveBtn2 = $('#hour-14').children('.saveBtn');
    saveBtn2.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-14').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-2', userInput);
    });

    var saveBtn3 = $('#hour-15').children('.saveBtn');
    saveBtn3.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-15').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-3', userInput);
    });

    var saveBtn4 = $('#hour-16').children('.saveBtn');
    saveBtn4.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-16').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-4', userInput);
    });

    var saveBtn5 = $('#hour-17').children('.saveBtn');
    saveBtn5.on('click', function(event) {
        event.stopPropagation();
        var userInput = $('#hour-17').children('textarea').val();
        userInput = JSON.stringify(userInput);
        localStorage.setItem('Info-5', userInput);
    });


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    // Calls the checkTime() method for each event.
    var hour = 9;
    for (var i = 0; i < 9; i++) {
        // if (hour === 13) {
        //     hour -= 12;
        // }
        checkTime(hour);
        hour++;
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
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
  
