import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import './LocationMap.css';

// Fix Leaflet marker icon path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationMap = () => {
  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={[5.5600, -0.2050]} // Accra, Ghana
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '300px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[5.5600, -0.2050]}>
          <Popup>
            Reuben Korsi Amuzu<br />Accra, Ghana
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
