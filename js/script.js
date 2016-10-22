function addMeetupInfo(Meetup, which) {
  var context = $('.' + which + '-meetup');

  var date = new Date(Meetup.time),
      day = ['January','February','March','April','May','June','July','August','September','October','November','December'][date.getMonth()] + ' ' + date.getDate().toString(),
      time = (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()).toString() + ':' + (date.getMinutes().toString().length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes().toString());

  $('.meetup-title', $(context)).text(Meetup.name);
  $('.meetup-day', $(context)).text(day);
  $('.meetup-time', $(context)).text(time);
  $('.meetup-venue', $(context)).text((Meetup.venue.name == 'Capital One') ? 'the Capital One offices' : Meetup.venue.name);
  // $('.meetup-venue', $(context)).attr('href', 'https://www.google.com/maps/@' + Meetup.venue.lat.toString() + ',' + Meetup.venue.lon.toString() + ',15z');
  $('.meetup-city', $(context)).text(Meetup.venue.city);
  $('.meetup-link', $(context)).attr('href', Meetup.link);

  $(context).removeClass('inactive');
}

$(function() {
  $.ajax({
    url: 'https://api.meetup.com/beaumontjs/events?callback=?&sign=true&scroll=recent_past&key=f18782232574b6b5a442515b3e5632',
    type: 'GET',
    dataType: 'JSON',
    success: function(d) {
      var _data = d.data;
      _data = _data.slice(-2);

      addMeetupInfo(_data[0], 'prev');
      addMeetupInfo(_data[1], 'next');
    }
  });
});