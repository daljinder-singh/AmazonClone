import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import { OpenStreetMapProvider } from 'react-leaflet-geosearch';
import SearchControl from "./SearchControl";

const LeafLet = () => {
  const defaultPosition = [30.3398, 76.3869];
  const prov = OpenStreetMapProvider(); 
  
  var myIcon = L.icon({
    iconUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
  });

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
         <Marker position={defaultPosition} icon = {myIcon} >
      <Popup>Popup for Marker</Popup>
    </Marker>
    <SearchControl
             provider={prov}
             showMarker={true}
             showPopup={false}
             maxMarkers={3}
             retainZoomLevel={false}
             animateZoom={true}
             autoClose={false}
             searchLabel={"Enter address, please"}
             keepResult={true}
             popupFormat={({ query, result }) => result.label}
            />
    </MapContainer>
    </>
    );
  }


export default LeafLet
