import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MapWithProducts() {
    const [map, setMap] = useState(null);
    const [products, setProducts] = useState([]);
    const seoulLocation = { lat: 37.5665, lng: 126.978 };

    useEffect(() => {
        // Google Maps API 초기화
        const loadMap = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD1JYAYmtZwv6dmaYMW_gGQfVYh5umSKPQ&callback=initMap`;
            script.defer = true;
            script.async = true;
            window.initMap = initMap;
            document.head.appendChild(script);
        };

        // 상품 데이터 불러오기
        const fetchProducts = async () => {
            try {
                const response = await axios.get('//localhost:8080/board');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        loadMap();
        fetchProducts();
    }, []);

    // 구글 맵 초기화
    const initMap = () => {
        const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
            center: seoulLocation,
            zoom: 10,
        });
        setMap(mapInstance);
    };

    // 상품을 지도에 표시
    useEffect(() => {
        if (map) {
            products.forEach((product) => {
                const marker = new window.google.maps.Marker({
                    position: { lat: product.lat, lng: product.lng },
                    map: map,
                    title: product.title,
                });

                const infowindow = new window.google.maps.InfoWindow({
                    content: `<div><h3>${product.title}</h3><img src="${product.image}" alt="${product.title}" /></div>`,
                });

                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            });
        }
    }, [map, products]);

    return <div id="map" style={{ position: 'absolute', height: '800px', width: '100%', top: '0px', margin: 'none', border: '2px solid gray' }}></div>;
}

export default MapWithProducts;
