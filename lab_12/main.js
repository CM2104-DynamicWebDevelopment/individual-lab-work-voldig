$(document).ready(function () {
  //set the map and in9itial coordinates
  let mymap = L.map('mapid').setView([0, 0], 1);
  let Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution:'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ', maxZoom: 16 });
  // let OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {maxZoom: 17, attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <ahref="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});
  Esri_WorldGrayCanvas.addTo(mymap);
  // OpenTopoMap.addTo(mymap);

  //geting json
  //when the button on is clicked

  //when earthquake button is clicked
  $('#shakey').click(function() {
   console.log("getting quakes");
   $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(result) {
   console.log(result)

    result.features.forEach(function(quake) {
      //for each eqrthquake
      //get its coordinates
      let lng = quake.geometry.coordinates[0];
      let lat = quake.geometry.coordinates[1];

      let mag = 0;
      if(quake.properties.mag != null) {
        let mag = parseFloat(quake.properties.mag);
      }


      let circle = L.circle([lat, lng], mag * 10000, {
        color: 'red',
        opacity: 0,
        fillColor: 'red',
        fillOpacity: 0.8
      });
      circle.addTo(mymap);
    });
   });
  });


  $('#dropey').click(function() {
    console.log("geting meteor");
    $.getJSON("https://data.nasa.gov/resource/gh4g-9sfh.json", function(result) {
      console.log(result);
      result.forEach(function(meteor) {
        let lng = meteor.geolocation.longitude;
        let lat = meteor.geolocation.latitude;
        let mass = 0;
        if(!isNaN(meteor.mass)) {
          mass = parseFloat(meteor.mass) /10;
        } else {
          mass = 1;
        }

        let circle = L.circle([lat, lng], mass, {
          color: 'blue',
          opacity: 50,
          fillColor: 'blue',
          fillOpacity: 0.8
        });
        circle.addTo(mymap).bindPopup(''+ meteor.name + '');

        console.log(meteor.mass);
      });
    });
  });



  });  
