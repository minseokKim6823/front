import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';

const Map = () => {
    const [position, setPosition] = useState({ lat: 37.5665, lng: 126.978 });
    const [address, setAddress] = useState('');

    const handlePositionChanged = (newPosition) => {
        setPosition(newPosition);
        getAddress(newPosition.lat, newPosition.lng);
        // setBoard(prevBoard => ({
        //     ...prevBoard,
        //     postion: position,
        // }));
        // console.log(board);
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
                // setBoard(prevBoard => ({
                //     ...prevBoard,
                //     address: district ? district.long_name : 'Unknown District',
                // }));
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    const seoulBounds = {
        north: 37.7010,
        south: 37.4275,
        east: 127.1836,
        west: 126.7647,
    };
    return (
        <LoadScript googleMapsApiKey="AIzaSyD1JYAYmtZwv6dmaYMW_gGQfVYh5umSKPQ">
            <GoogleMap
                mapContainerStyle={{ position: 'absolute', height: '800px', width: '100%', top: '0px', margin: 'none', border: '2px solid gray' }}
                zoom={12}
                center={position}
                options={{ restriction: { latLngBounds: seoulBounds, strictBounds: false } }}
                onClick={(e) => handlePositionChanged({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
            >
                <MarkerF position={position} draggable={true} onDragEnd={(e) => handlePositionChanged({ lat: e.latLng.lat(), lng: e.latLng.lng() })} />
            </GoogleMap>
            <div>{address}</div>
        </LoadScript>
    );
};

export default Map;
