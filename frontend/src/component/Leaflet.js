import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Search from "react-leaflet-search";
import 'leaflet/dist/leaflet.css';

const Leaflet = () => {
  const defaultPosition = [30.3398, 76.3869];

  return (
    <>
    <MapContainer style={{ height: "400px", width: "50%" }} 
    center={defaultPosition} 
    zoom={13} 
    scrollWheelZoom={true}
    >
    <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
    </>
    );
  }


export default Leaflet
