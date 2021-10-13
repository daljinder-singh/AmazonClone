import React, { useEffect, useState } from "react";

const GeoLocation = () =>{
    const [location, setLocation] = useState({
        loading : false,
        cordinates:{
            lat : '',
            lng : '',
        }
    })
    const onSuccess = (location) =>{
        setLocation({
            loading: true,
            cordinates:{
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() =>{
        if (navigator.geolocation){
            onError({
                code: 0,
                message: 'Geoloaction not supported'
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    },[])
    return location;
}
export default GeoLocation