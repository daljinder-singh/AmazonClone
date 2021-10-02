import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import { OpenStreetMapProvider } from 'react-leaflet-geosearch';
import SearchControl from "./SearchControl";

const LeafLet = () => {
  const [label, setlabel] = useState('Patiala, Punjab, India')
  const [conrdinate, setCordinate] = useState({
    lat : '30.2090874',
    long : '76.3398720856221'
  })
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
    center={[conrdinate.lat, conrdinate.long]} 
    zoom={8} 
    scrollWheelZoom={true}
    >
    <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         <Marker position={[conrdinate.lat, conrdinate.long]} icon = {myIcon} >
      <Popup>{label}</Popup>
    </Marker>
    <SearchControl
             provider={prov}
             showMarker={false}
             showPopup={false}
             maxMarkers={3}
             retainZoomLevel={false}
             animateZoom={true}
             autoClose={false}
             searchLabel={"Enter address, please"}
             keepResult={true}
             popupFormat={({ query, result }) => {
               setlabel(result.label)
               setCordinate({
                lat : result.y,
                long : result.x,
               })
              }}
            />
    </MapContainer>
    </>
    );
  }


export default LeafLet
