
$(document).ready(function () {
    // This code displays the current date and time
    var today = moment();
    $("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

    // This function allows text to be saved to the text area and local storage
    $('.saveBtn').on('click', function () {
        var taskValue = $(".saveBtn").siblings('.description').val();
        var taskTime = $('.hour').text();
        console.log(taskValue, taskTime);
        localStorage.setItem(taskTime, taskValue);
    })
    $('#9AM').val(localStorage.getItem('9AM'));

})




