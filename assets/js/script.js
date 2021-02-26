
$(document).ready(function () {
    // This code displays the current date and time
    var today = moment();
    $("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));
// //     function update() {
// //     $('#currentDay’).html(today.format(‘dddd, MMMM Do YYYY, h:mm:ss a’))
// // }
//     setInterval(update,1000);

    // This function allows text to be saved to the text area and local storage
    $('.saveBtn').on('click', function () {
        var taskTime = $(this).siblings('.hour').text();
        var taskValue = $(this).siblings('.description').val();
        
        console.log(taskValue, taskTime);
        localStorage.setItem(taskTime, taskValue);
    })
    // This allows items in local storage to be displayed in the text area
    $('#9AM').val(localStorage.getItem('9AM'));
    $('#10AM').val(localStorage.getItem('10AM'));
    $('#11AM').val(localStorage.getItem('11AM'));
    $('#12PM').val(localStorage.getItem('12PM'));
    $('#1PM').val(localStorage.getItem('1PM'));
    $('#2PM').val(localStorage.getItem('2PM'));
    $('#3PM').val(localStorage.getItem('3PM'));
    $('#4PM').val(localStorage.getItem('4PM'));
    $('#5PM').val(localStorage.getItem('5PM'));
})

var time = moment().format('hh');

// variables to use for past, present, and future color coding
var textNine = $('#9AM');
var textTen = $('#10AM');
var textEleven = $('#11AM');
var textTwelve = $('#12PM');
var textOne = $('#1PM');
var textTwo = $('#2PM');
var textThree = $('#3PM');
var textFour = $('#4PM');
var textFive = $('#5PM');

var textArr = [textNine, textTen, textEleven, textTwelve, textOne, textTwo, textThree, textFour, textFive];

var timeNine = moment('9', 'hh').format('hh');
var timeTen = moment('10', 'hh').format('hh');
var timeEleven = moment('11', 'hh').format('hh');
var timeTwelve = moment('12', 'hh').format('hh');
var timeOne = moment('13', 'hh').format('hh');
var timeTwo = moment('14', 'hh').format('hh');
var timeThree = moment('15', 'hh').format('hh');
var timeFour = moment('16', 'hh').format('hh');
var timeFive = moment('17', 'hh').format('hh');

var timeArr = [timeNine, timeTen, timeEleven, timeTwelve, timeOne, timeTwo, timeThree, timeFour, timeFive]

for (var i = 0; i < timeArr.length; i++) {
    if (timeArr[i] === time){
        textArr[i].addClass('present');
    } else if (timeArr[i] < time) {
        textArr[i].addClass('past');
    } else {
        timeArr[i].addClass('future');
    }
    }
