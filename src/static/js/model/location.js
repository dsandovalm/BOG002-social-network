export function initMap(container) {
  // let location = await geoFindMe()
  const tileProvider = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png';
  const map = L.map(container).locate({ setView: true, maxZoom: 16 });
  L.tileLayer(tileProvider, {
  }).addTo(map);

  function onLocationFound(e) {
    L.marker(e.latlng).addTo(map)
      .bindPopup('Tu ubicación').openPopup();
  }

  map.on('locationfound', onLocationFound);
  return map;
}
