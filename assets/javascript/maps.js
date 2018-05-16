function initMap() {
        var uluru = {lat: 55.626303, lng: 8.275422};
        var map = new google.maps.Map(document.getElementById('maps'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
