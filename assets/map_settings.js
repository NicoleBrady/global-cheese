(function setUpMaps() {
  window.mapPinDark = {
    path:
    "M50,9.799c-15.188,0-27.499,12.312-27.499,27.499S50,90.201,50,90.201s27.499-37.715,27.499-52.902S65.188,9.799,50,9.799z   M50,44.813c-4.15,0-7.515-3.365-7.515-7.515S45.85,29.784,50,29.784s7.514,3.365,7.514,7.515S54.15,44.813,50,44.813z",
    fillColor: "#000000",
    anchor: new google.maps.Point(55, 85),
    fillOpacity: 1,
    scale: 0.6,
    strokeWeight: 0
  };
  window.mapPinLight = {
    path:
    "M50,9.799c-15.188,0-27.499,12.312-27.499,27.499S50,90.201,50,90.201s27.499-37.715,27.499-52.902S65.188,9.799,50,9.799z   M50,44.813c-4.15,0-7.515-3.365-7.515-7.515S45.85,29.784,50,29.784s7.514,3.365,7.514,7.515S54.15,44.813,50,44.813z",
    fillColor: "#ffffff",
    anchor: new google.maps.Point(55, 85),
    fillOpacity: 1,
    scale: 0.6,
    strokeWeight: 0
  };
  window.mapStyles = {
    light: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f0f0f0" }, { lightness: 20 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
      { color: "#ffffff" },
      { lightness: 29 },
      { weight: 0.2 }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f0f0f0" }, { lightness: 21 }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
      { visibility: "on" },
      { color: "#ffffff" },
      { lightness: 16 }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
      { saturation: 36 },
      { color: "#333333" },
      { lightness: 40 }
      ]
    },
    {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
      { color: "#fefefe" },
      { lightness: 17 },
      { weight: 1.2 }
      ]
    }
    ],
    dark: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
      { saturation: 36 },
      { color: "#000000" },
      { lightness: 40 }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
      { visibility: "on" },
      { color: "#000000" },
      { lightness: 16 }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#000000" }, { lightness: 20 }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
      { color: "#000000" },
      { lightness: 17 },
      { weight: 1.2 }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "administrative.country",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
      { visibility: "simplified" },
      { saturation: "-100" },
      { lightness: "30" }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
      { visibility: "simplified" },
      { gamma: "0.00" },
      { lightness: "74" }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 20 }]
    },
    {
      featureType: "landscape.man_made",
      elementType: "all",
      stylers: [{ lightness: "3" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 21 }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#000000" }, { lightness: 17 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
      { color: "#000000" },
      { lightness: 29 },
      { weight: 0.2 }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 18 }]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 16 }]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 19 }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 17 }]
    }
    ],
    flat: [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6195a0" }]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
      { lightness: "0" },
      { saturation: "0" },
      { color: "#f5f5f2" },
      { gamma: "1" }
      ]
    },
    {
      featureType: "landscape.man_made",
      elementType: "all",
      stylers: [{ lightness: "-3" }, { gamma: "1.00" }]
    },
    {
      featureType: "landscape.natural.terrain",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#bae5ce" }, { visibility: "on" }]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
      { saturation: -100 },
      { lightness: 45 },
      { visibility: "simplified" }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#fac9a9" }, { visibility: "simplified" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text",
      stylers: [{ color: "#4e4e4e" }]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#787878" }]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "transit.station.airport",
      elementType: "labels.icon",
      stylers: [
      { hue: "#0a00ff" },
      { saturation: "-77" },
      { gamma: "0.57" },
      { lightness: "0" }
      ]
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.text.fill",
      stylers: [{ color: "#43321e" }]
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.icon",
      stylers: [
      { hue: "#ff6c00" },
      { lightness: "4" },
      { gamma: "0.75" },
      { saturation: "-68" }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#eaf6f8" }, { visibility: "on" }]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ color: "#c7eced" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
      { lightness: "-49" },
      { saturation: "-53" },
      { gamma: "0.79" }
      ]
    }
    ],
    clean_cut: [
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ lightness: 100 }, { visibility: "simplified" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { color: "#C6E2FF" }]
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [{ color: "#C5E3BF" }]
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{ color: "#D1D1B8" }]
    }
    ],
    minimal_dark: [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
      { hue: "#ff0000" },
      { saturation: -100 },
      { lightness: -30 }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#ffffff" }]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#353535" }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#656565" }]
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [{ color: "#505050" }]
    },
    {
      featureType: "poi",
      elementType: "geometry.stroke",
      stylers: [{ color: "#808080" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#454545" }]
    },
    {
      featureType: "transit",
      elementType: "labels",
      stylers: [
      { hue: "#000000" },
      { saturation: 100 },
      { lightness: -40 },
      { invert_lightness: true },
      { gamma: 1.5 }
      ]
    }
    ],
    blue_water: [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{ color: "#444444" }]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ color: "#f2f2f2" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 45 }]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#46bcec" }, { visibility: "on" }]
    }
    ]
  };
})();
