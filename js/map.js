function initMap() {
     var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: {
               lat: 49.828281,
               lng: 23.972554
          }
     });

     var marker = new google.maps.Marker({
          position: {
               lat: 49.828281,
               lng: 23.972554
          },
          map: map,
          title: "I'm here"
     });
}