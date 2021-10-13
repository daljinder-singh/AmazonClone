import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import { OpenStreetMapProvider } from 'react-leaflet-geosearch';
import GeoLocation from "./GeoLocation";
import SearchControl from "./SearchControl";

const LeafLet = () => {
  const [label, setlabel] = useState('you are hear')
  const [center, setCenter] = useState({ lat: '30.2090874', lng: '76.3398720856221' });
  const ZOOM_LEVEL = 9;;
  const prov = OpenStreetMapProvider(); 
  const location = GeoLocation()
  useEffect(()=>{
    if(location?.cordinates){
      setCenter({
      lat : location?.cordinates?.lat,
      lng: location?.cordinates?.lng,
    })
    }
  },[location])

  var myIcon = L.icon({
    iconUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41], //[left/right, top/bottom]
    popupAnchor: [0, -41] //[left/right, top/bottom]
  });

  return (
    <>
    <MapContainer style={{ height: "400px", width: "50%" }} 
    center={[center.lat, center.lng]} 
    zoom={ZOOM_LEVEL} 
    scrollWheelZoom={true}
    >
    <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         <Marker position={[center.lat, center.lng]}
         draggable={true} icon = {myIcon} 
         >
      <Popup>{label}</Popup>
    </Marker>
    <SearchControl
             provider={prov}
             showMarker={false}
             showPopup={false}
             maxMarkers={3}
             retainZoomLevel={true}
             animateZoom={false}
             autoClose={false}
             searchLabel={"Enter address, please"}
             keepResult={true}
             popupFormat={({ query, result }) => {
               setlabel(result.label)
               setCenter({
                lat : result.y,
                lng : result.x,
               })
              }}
            />
    </MapContainer>
    </>
    );
  }


export default LeafLet
