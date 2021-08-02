$(document).ready(function () {
  // $('#calendar').datepicker({
  //     language: "en",
  //     calendarWeeks: false,
  //     todayHighlight: true
  // });

  // var datesForDisable = ["25.12.2019", "26.12.2019", "27.12.2019"]
  // var meetingEvent = ["10/11/2019","11/11/2019","21/11/2019","22/11/2019","23/11/2019","24/11/2019"];
  // var birthdayEvent = ["25/11/2019","26/11/2019"]
  var Events = ["3/8/2020", "12/8/2020", "3/9/2020", "12/9/2020", "21/9/2020"];
  $("#calendar").datepicker({
    format: "dd/mm/yyyy",
    autoclose: true,
    todayHighlight: true,
    beforeShowDay: function (date) {
      var d = date;
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1; //Months are zero based
      var curr_year = d.getFullYear();
      var formattedDate = curr_date + "/" + curr_month + "/" + curr_year;

      if ($.inArray(formattedDate, Events) != -1) {
        return {
          classes: "activeEvents",
        };
      }
      return;
    },
  });
});
