function addMeetupInfo(Meetup) {
  var context = $('.next-meetup');

  var date = new Date(Meetup.time),
      day = ['January','February','March','April','May','June','July','August','September','October','November','December'][date.getMonth()] + ' ' + date.getDate().toString(),
      time = (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()).toString() + ':' + (date.getMinutes().toString().length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes().toString());

  $('.meetup-title', $(context)).text(Meetup.name);
  $('.meetup-day', $(context)).text(day);
  $('.meetup-time', $(context)).text(time);
  $('.meetup-venue', $(context)).attr('href', 'https://www.google.com/maps/place/IRL+Coworking/@30.0857567,-94.1251978,17z/data=!3m1!4b1!4m5!3m4!1s0x863ecb3054c14ed1:0x41aeee0d54045ec5!8m2!3d30.0857567!4d-94.1230091');
  $('.meetup-city', $(context)).text(Meetup.venue.city);
  $('.meetup-link', $(context)).attr('href', Meetup.link);
}

$(function() {
  $.ajax({
    url: 'https://api.meetup.com/beaumontjs/events?callback=?&sign=true&key=f18782232574b6b5a442515b3e5632',
    type: 'GET',
    dataType: 'JSON',
    success: function(d) {
      var _data = d.data;

      if (_data.length > 0) {
        addMeetupInfo(_data[0]);
      } else {
        $('.next-meetup').html('There are no upcoming meetups scheduled. Check back later or join our <a target="_blank" href="https://www.meetup.com/beaumontjs/">meetup group</a> to get notified when we announce the next meetup.')
      }
    }
  });
});