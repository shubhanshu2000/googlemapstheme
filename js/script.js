function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 34.66806259874627, lng: 135.43018690322836 },
    zoom: 18,
    mapId: 'b00857b52d1bc8bc',
    mapTypeControl: false,
    fullScreenControl: false,
    streetViewControl: false
  });

  //Name
  //Logitude, Latitude
  //Image URL
  //scaleSized width, height
  const markers = [
    [
      "Piku ka house Japan mein",
      34.66824790362273,
      135.4307340738226,
      "/Extras/Images/li.svg",
      138,
      131
    ],
    [
      "Piku ke frnd ka house in Japan",
      34.66860968813934,
      135.42989722467846,
      "/Extras/Images/castle.svg",
      138,
      131
    ],
    [
      "Piku ke doosre frnd ka ghar in Japan",
      34.66909500635105,
      135.4297148344804,
      "/Extras/Images/ghosthouse.svg",
      138,
      131
    ],
    [
      "Piku ke ek aur frnd ka ghar",
      34.66860086414553,
      135.43041220876714,
      "/Extras/Images/hill_with_eyes.svg",
      138,
      131
    ],
    [
      "Piku ka doosra ghar in Japan",
      34.66893617524927,
      135.4316031094723,
      "/Extras/Images/pipe.svg",
      138,
      131
    ],
    [
      "Piku ka hospital jisme free eelaaj nhi hota",
      34.66905971057696,
      135.43124905791132,
      "/Extras/Images/pointer.svg",
      138,
      131
    ],
    [
      "Piku ka palace in Japan",
      34.66911265423242,
      135.43221465307764,
      "/Extras/Images/star.svg",
      138,
      131
    ]
  ];
  for (i = 0; i < markers.length; i++) {
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
      },
      animation: google.maps.Animation.DROP,
    });
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0]
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}
//34.66824790362273, 135.4307340738226
//34.66806259874627, 135.43018690322836