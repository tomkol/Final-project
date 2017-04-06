var marker1, marker2, map;

var stations = [
  {
    name: 'Woolwich Arsenal',
    lat: 51.489907,
    lng: 0.069208
  },
  {
    name: 'Bethnal Green Rail',
    lat: 51.524283,
    lng: -0.059999
  },
    {
    name: 'Acton Town',
    lat: 51.503071,
    lng: -0.280288
  },
    {
    name: 'Beckenham Junction',
    lat: 51.410942,
    lng: -0.025687
  },
    {
    name: 'Colindale',
    lat: 51.595231,
    lng: -0.250273
  },
    {
    name: 'Crystal Palace',
    lat: 51.41817,
    lng: -0.072593
  },
    {
    name: 'Ealing Broadway',
    lat: 51.514862,
    lng: -0.301996
  },
    {
    name: 'Feltham',
    lat: 51.447879,
    lng: -0.40981
  },
    {
    name: 'Hampstead',
    lat: 51.556543,
    lng: -0.178
  },
    {
    name: 'Isleworth',
    lat: 51.475037,
    lng: -0.337314
  },
    {
    name: 'Lee',
    lat: 51.449459,
    lng: 0.013379
  },
    {
    name: 'Mottingham',
    lat: 51.439825,
    lng: 0.050339
  },
    {
    name: 'North Wembley',
    lat: 51.562396,
    lng: -0.303934
  },
    {
    name: 'Palmers Green',
    lat: 51.618787,
    lng: -0.110258
  },
    {
    name: 'Putney',
    lat: 51.460953,
    lng: -0.216589
  },
    {
    name: 'Royal Albert',
    lat: 51.508494,
    lng: 0.045192
  },
    {
    name: 'Shepherds Bush',
    lat: 51.504532,
    lng: -0.218505
  },
    {
    name: 'Stratford',
    lat: 51.541693,
    lng: -0.003737
  },
    {
    name: 'Streatham',
    lat: 51.425846,
    lng: -0.132311
  },
    {
    name: 'West Finchley',
    lat: 51.609263,
    lng: -0.188903
  },

];


     function initMap() {
        var location1 = {lat: stations[0].lat, lng: stations[0].lng};
        var location2 = {lat: stations[1].lat, lng: stations[1].lng};
        var location3 = {lat: stations[2].lat, lng: stations[2].lng};
        var location4 = {lat: stations[3].lat, lng: stations[3].lng};
        var location5 = {lat: stations[4].lat, lng: stations[4].lng};
        var location6 = {lat: stations[5].lat, lng: stations[5].lng};
        var location7 = {lat: stations[6].lat, lng: stations[6].lng};
        var location8 = {lat: stations[7].lat, lng: stations[7].lng};
        var location9 = {lat: stations[8].lat, lng: stations[8].lng};
        var location10 = {lat: stations[9].lat, lng: stations[9].lng};
        var location11 = {lat: stations[10].lat, lng: stations[10].lng};
        var location12 = {lat: stations[11].lat, lng: stations[11].lng};
        var location13 = {lat: stations[12].lat, lng: stations[12].lng};
        var location14 = {lat: stations[13].lat, lng: stations[13].lng};
        var location15 = {lat: stations[14].lat, lng: stations[14].lng};
        var location16 = {lat: stations[15].lat, lng: stations[15].lng};
        var location17 = {lat: stations[16].lat, lng: stations[16].lng};
        var location18 = {lat: stations[17].lat, lng: stations[17].lng};
        var location19 = {lat: stations[18].lat, lng: stations[18].lng};
        var location20 = {lat: stations[19].lat, lng: stations[19].lng};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: location2,
        });
    
        marker1 = new google.maps.Marker({
          position: location1,
          map: map,
          label: { text: stations[0].name, fontSize: '10px', fontWeight: '900'}
          // label: { margin: '10px' }
          });
         
        marker1.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Woolwich Arsenal" + '"]').show();
          var latLng = marker1.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });

        marker2 = new google.maps.Marker({
          position: location2,
          map: map,
          label: { text: stations[1].name, fontSize: '10px', fontWeight: '900'}

          });

          marker2.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Bethnal Green Rail" + '"]').show();
          var latLng = marker2.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });

          marker3 = new google.maps.Marker({
          position: location3,
          map: map,
          label: { text: stations[2].name, fontSize: '10px', fontWeight: '900'}
          });

          marker3.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Acton Town" + '"]').show();
          var latLng = marker3.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker4 = new google.maps.Marker({
          position: location4,
          map: map,
          label: { text: stations[3].name, fontSize: '10px', fontWeight: '900'}
          });

          marker4.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Beckenham Junction" + '"]').show();
          var latLng = marker4.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker5 = new google.maps.Marker({
          position: location5,
          map: map,
          label: { text: stations[4].name, fontSize: '10px', fontWeight: '900'}
          });

          marker5.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Colindale" + '"]').show();
          var latLng = marker5.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker6 = new google.maps.Marker({
          position: location6,
          map: map,
          label: { text: stations[5].name, fontSize: '10px', fontWeight: '900'}
          });

          marker6.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Crystal Palace" + '"]').show();
          var latLng = marker6.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker7 = new google.maps.Marker({
          position: location7,
          map: map,
          label: { text: stations[6].name, fontSize: '10px', fontWeight: '900'}
          });

          marker7.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Ealing Broadway" + '"]').show();
          var latLng = marker7.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker8 = new google.maps.Marker({
          position: location8,
          map: map,
          label: { text: stations[7].name, fontSize: '10px', fontWeight: '900'}
          });

          marker8.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Feltham" + '"]').show();
          var latLng = marker8.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker9 = new google.maps.Marker({
          position: location9,
          map: map,
          label: { text: stations[8].name, fontSize: '10px', fontWeight: '900'}
          });

          marker9.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Hampstead" + '"]').show();
          var latLng = marker9.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker10 = new google.maps.Marker({
          position: location10,
          map: map,
          label: { text: stations[9].name, fontSize: '10px', fontWeight: '900'}
          });

          marker10.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Isleworth" + '"]').show();
          var latLng = marker10.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker11 = new google.maps.Marker({
          position: location11,
          map: map,
          label: { text: stations[10].name, fontSize: '10px', fontWeight: '900'}
          });

          marker11.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Lee" + '"]').show();
          var latLng = marker11.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker12 = new google.maps.Marker({
          position: location12,
          map: map,
          label: { text: stations[11].name, fontSize: '10px', fontWeight: '900'}
          });

          marker12.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Mottingham" + '"]').show();
          var latLng = marker12.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker13 = new google.maps.Marker({
          position: location13,
          map: map,
          label: { text: stations[12].name, fontSize: '10px', fontWeight: '900'}
          });

          marker13.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "North Wembley" + '"]').show();
          var latLng = marker13.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker14 = new google.maps.Marker({
          position: location14,
          map: map,
          label: { text: stations[13].name, fontSize: '10px', fontWeight: '900'}
          });

          marker14.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Palmers Green" + '"]').show();
          var latLng = marker14.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker15 = new google.maps.Marker({
          position: location15,
          map: map,
          label: { text: stations[14].name, fontSize: '10px', fontWeight: '900'}
          });

          marker15.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Putney" + '"]').show();
          var latLng = marker15.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker16 = new google.maps.Marker({
          position: location16,
          map: map,
          label: { text: stations[15].name, fontSize: '10px', fontWeight: '900'}
          });

          marker16.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Royal Albert" + '"]').show();
          var latLng = marker16.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker17 = new google.maps.Marker({
          position: location17,
          map: map,
          label: { text: stations[16].name, fontSize: '10px', fontWeight: '900'}
          });

          marker17.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Shepherds Bush" + '"]').show();
          var latLng = marker17.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker18 = new google.maps.Marker({
          position: location18,
          map: map,
          label: { text: stations[17].name, fontSize: '10px', fontWeight: '900'}
          });

          marker18.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Stratford" + '"]').show();
          var latLng = marker18.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker19 = new google.maps.Marker({
          position: location19,
          map: map,
          label: { text: stations[18].name, fontSize: '10px', fontWeight: '900'}
          });

          marker19.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "Streatham" + '"]').show();
          var latLng = marker19.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
          marker20 = new google.maps.Marker({
          position: location20,
          map: map,
          label: { text: stations[19].name, fontSize: '10px', fontWeight: '900'}
          });

          marker20.addListener('click', function() {
          $('.overlay').closest('.overlay').hide();
          $('[data-station="' + "West Finchley" + '"]').show();
          var latLng = marker20.getPosition();
          map.setCenter(latLng);
          map.setZoom(12);
        });
      }



      $('.close').click(function(){
        $(this).closest('.overlay').hide();
      });

// On button click
$(".searchCTA").on('click', function(e) {
  // prevent default
  e.preventDefault();  
  // check value in field
  // associate value in field with a marker
  var selection = stations.find(function(station) {
    return station.name === $("#myInput").val();
  });

  map.setCenter({lat: selection.lat, lng: selection.lng});
  map.setZoom(12); 

  $('.overlay').hide();
  $('[data-station="' + selection.name + '"]').show();
  
});

function myFunction() {
   $('#myInput').attr('autocomplete','off');
  $("#myInput").click(function(){
          $(".table-wrapper").show(); 
  });
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }

    }
  }
  $('#myTable td').on('click', function() {
    $('#myInput').val($(this).text());
    $('.table-wrapper').hide();
  }); 

  $("#myInput").focusout(function() {
    setTimeout(function() {
        $('.table-wrapper').hide();
    },100);
  });

}     
  

// // On button click
// $(".searchCTA").on('click', function(e) {
//   // prevent default
//   e.preventDefault();  
//   // check value in field
//   // associate value in field with a marker
//   if ($("#myInput").val().text != "Bethnal Green Rail" ) {
//   // move the map to the marker
//   // open the overlay for that marker and close other ones
//      $('.overlay2').show();
//      $('.overlay1').hide();
//      var latLng = marker2.getPosition();
//      map.setCenter(latLng);
//      map.setZoom(12); 
//       }
//       })
 





// make search work
// add all stations

