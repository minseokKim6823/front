import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';

const MapWithMarkers = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // Fetch product data from the server
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_SERVER_ENDPOINT');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, []);

    const handleMarkerClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={{ height: '100vh', width: '100%' }}
                zoom={10}
                center={{ lat: YOUR_DEFAULT_LATITUDE, lng: YOUR_DEFAULT_LONGITUDE }}
            >
                {products.map((product, index) => (
                    <Marker
                        key={index}
                        position={{ lat: product.lat, lng: product.lng }}
                        onClick={() => handleMarkerClick(product)}
                    />
                ))}
                {selectedProduct && (
                    <InfoWindow
                        position={{ lat: selectedProduct.lat, lng: selectedProduct.lng }}
                        onCloseClick={() => setSelectedProduct(null)}
                    >
                        <div>
                            <h2>{selectedProduct.title}</h2>
                            <img src={selectedProduct.image} alt={selectedProduct.title} />
                            <p>{selectedProduct.description}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapWithMarkers;
