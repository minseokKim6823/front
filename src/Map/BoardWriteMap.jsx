import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import { Link } from 'react-router-dom';

const containerStyle = {
    position: 'absolute',
    top: '120px',
    left: '0%',
    width: '800px',
    height: '400px'
};

const center = {
    lat: 37.5665,
    lng: 126.978,
};

function BoardWriteMap({ position, setPosition, address, setAddress, board, setBoard }) {

    const handlePositionChanged = (newPosition) => {
        setPosition(newPosition);
        getAddress(newPosition.lat, newPosition.lng);
        setBoard(prevBoard => ({
            ...prevBoard,
            position: newPosition,
        }));
        console.log(board);
    };

    const getAddress = async (lat, lng) => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAr3oEWRMXEj07I4yIbG5wwWdjwAmuUBkQ`);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const addressComponents = data.results[0].address_components;
                const district = addressComponents.find(component =>
                    component.types.includes('sublocality_level_2') ||
                    component.types.includes('sublocality')
                );
                setAddress(district ? district.long_name : 'Unknown District');
                setBoard(prevBoard => ({
                    ...prevBoard,
                    address: district ? district.long_name : 'Unknown District',
                }));
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAr3oEWRMXEj07I4yIbG5wwWdjwAmuUBkQ"
    });

    const seoulBounds = {
        north: 37.7010,
        south: 37.4275,
        east: 127.1836,
        west: 126.7647,
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={{ restriction: { latLngBounds: seoulBounds, strictBounds: false } }}
            onClick={(e) => handlePositionChanged({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
        >
            <Marker position={position} draggable={true} onDragEnd={(e) => handlePositionChanged({ lat: e.latLng.lat(), lng: e.latLng.lng() })} />
        </GoogleMap>
    ) : <div>Loading...</div>;
}

export default React.memo(BoardWriteMap);
