import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import { Link } from 'react-router-dom';

const containerStyle = {
    position: 'absolute',
    top: '0px',
    left: '0%',
    width: '100%',
    height: '800px'
};

const center = {
    lat: 37.5665,
    lng: 126.978,
};

function HomeMap() {
    const [markerData, setMarkerData] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`//localhost:8080/board/all`);
                setMarkerData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAr3oEWRMXEj07I4yIbG5wwWdjwAmuUBkQ"
    });

    const handleMarkerClick = (boardId) => {
        setSelectedMarker(boardId); // 선택된 마커 설정
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            {markerData.map(({ price, position, postImg, title, contents, boardId }) => (
                <Marker
                    key={boardId}
                    position={position}
                    onClick={() => handleMarkerClick(boardId)} // 클릭 시 선택된 마커 설정
                >
                    {selectedMarker === boardId && ( // 선택된 마커에 대한 InfoWindow 표시 여부 확인
                        <InfoWindow
                            onCloseClick={() => setSelectedMarker(null)} // 닫기 버튼 클릭 시 선택된 마커 초기화
                        >
                            <div style={{ padding: '10px', maxWidth: '200px', width: '300px', height: '200px' }}>
                                <img src={postImg[0]} alt="Product Image" style={{ width: '250px', marginBottom: '5px' }} />
                                <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>{title}</p>
                                <p style={{ marginBottom: '5px' }}>{contents}</p>
                                <div style={{ color: 'blue', fontSize: '14px' }}>₩{price}</div>
                                <Link to={`/board/${boardId}`}>상세보기</Link>
                            </div>
                        </InfoWindow>
                    )}
                </Marker>
            ))}
        </GoogleMap>
    ) : <div>Loading...</div>;
}

export default React.memo(HomeMap);
