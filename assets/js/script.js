
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




