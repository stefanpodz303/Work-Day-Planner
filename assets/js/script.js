
$(document).ready(function () {
    // This function displays the current date and time in real-time
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    function update() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    setInterval(update, 1000);

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

// moment variable to use for color coding time blocks
var time = moment().format('kk');

// variables and arrays to use for past, present, and future color coding
var textNine = document.getElementById('9AM');
var textTen = document.getElementById('10AM');
var textEleven = document.getElementById('11AM');
var textTwelve = document.getElementById('12PM');
var textOne = document.getElementById('1PM');
var textTwo = document.getElementById('2PM');
var textThree = document.getElementById('3PM');
var textFour = document.getElementById('4PM');
var textFive = document.getElementById('5PM');

var textArr = [textNine, textTen, textEleven, textTwelve, textOne, textTwo, textThree, textFour, textFive];

var timeNine = moment('9', 'kk').format('kk');
var timeTen = moment('10', 'kk').format('kk');
var timeEleven = moment('11', 'kk').format('kk');
var timeTwelve = moment('12', 'kk').format('kk');
var timeOne = moment('13', 'kk').format('kk');
var timeTwo = moment('14', 'kk').format('kk');
var timeThree = moment('15', 'kk').format('kk');
var timeFour = moment('16', 'kk').format('kk');
var timeFive = moment('17', 'kk').format('kk');

var timeArr = [timeNine, timeTen, timeEleven, timeTwelve, timeOne, timeTwo, timeThree, timeFour, timeFive];

// for loop to cycle through my arrays in order to display the color coding
for (var i = 0; i < timeArr.length; i++) {
    if (timeArr[i] === time) {
        textArr[i].classList.add('present');
    } else if (timeArr[i] < time) {
        textArr[i].classList.add('past');
    } else {
        textArr[i].classList.add('future');
    }
}
