import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';
import axios from 'axios';

const mapContainerStyle = {     // 맵 표시 스타일
    width: '100%',
    height: '800px',
};

const center = {
    lat: 37.5665,
    lng: 126.978,
};

const libraries = ['places'];

function MapWithProducts() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAr3oEWRMXEj07I4yIbG5wwWdjwAmuUBkQ',
        libraries,
    });

    const [map, setMap] = useState(null);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('YOUR_PRODUCTS_API_ENDPOINT');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const onMapLoad = (map) => {
        setMap(map);
    };

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                onLoad={onMapLoad}
            >
                {products.map((product) => (
                    <Marker
                        key={product.id}
                        position={{ lat: product.lat, lng: product.lng }}
                        onClick={() => setSelectedProduct(product)}
                    />
                ))}
                {selectedProduct && (
                    <InfoWindow
                        position={{ lat: selectedProduct.lat, lng: selectedProduct.lng }}
                        onCloseClick={() => setSelectedProduct(null)}
                    >
                        <div>
                            <h3>{selectedProduct.title}</h3>
                            <img src={selectedProduct.image} alt={selectedProduct.title} />
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
}

export default MapWithProducts;
