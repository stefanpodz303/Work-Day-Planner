
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
        var taskValue = $(".saveBtn").siblings('.description').val();
        
        console.log(taskValue, taskTime);
        localStorage.setItem(taskTime, taskValue);
    })
    $('#9AM').val(localStorage.getItem('9AM'));
    $('#10AM').val(localStorage.getItem('10AM'));
})




