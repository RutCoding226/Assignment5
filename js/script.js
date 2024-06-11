

$(document).ready(function() {
    $(function () {
    var weekday = dayjs().format('dddd');
    var today = dayjs().format('MMMM D');
    var fullhour = dayjs().format('H');
    $('#currentDay').text(weekday + ", " + today + "th");
    for(var i = 9; i < 18; i++){
      var hours = i;
      var ampm = "AM";
      var tod = "past";
      if(hours == fullhour){
        tod = "present";
      }
      if(hours > fullhour){
        tod = "future";
      }
      if( i > 12){
        hours = i - 12;
        ampm = "PM";
      }

      var thiselement ="#" + hours;

      $(thiselement).append(
      '<div id="' + 'hour-' + hours + '" ' + 'class="row time-block ' + tod + '"' + '><div class="col-2 col-md-1 hour text-center py-3">' + hours + ampm + '</div><textarea id="' + hours + 'text' + '" class="col-8 col-md-10 description" rows="3"> </textarea><button id="' + hours +'" class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button></div>'
      );

      var thisid = "#" + hours + "text";

      $(thisid).text(localStorage.getItem(hours));
    }

    $( "button" ).on( "click", function() {
      var clickedBtnID = $(this).attr('id');
      var id = "#" + clickedBtnID + "text";
      var data = $(id).val();
      localStorage.setItem(clickedBtnID, data);
    } );
  });
});
