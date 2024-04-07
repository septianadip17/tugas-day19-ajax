$(document).ready(function() {
  var apiKey = '015663929ddc577d98bf7fb41fc663a2';

  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Jakarta,id&units=metric&appid=' + apiKey,
    method: 'GET',
    success: function(response, status, xhr) {
      if (status === "success") {
        $('#weather-info').html('<p>Suhu: ' + response.main.temp + '°C</p><p>Kondisi: ' + response.weather[0].description + '</p><p>Kelembaban: ' + response.main.humidity + '%</p>');
      } else {
        $('#weather-info').html('<p>Error: Gagal memuat data cuaca.</p>');
      }
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
      $('#weather-info').html('<p>Error: Gagal memuat data cuaca.</p>');
    }
  });
});
