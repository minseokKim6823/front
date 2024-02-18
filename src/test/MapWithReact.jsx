import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = { //// 맵표시 스타일
    position: 'absolute',
    top: '72px',
    width: '400px',
    height: '400px'
};

const seoullocation = {  //최초 표시할 중심 위치
    lat: 37.5665,
    lng: 126.978,
};

function MyComponent() {
    const [markerData, setMarkerData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('YOUR_PRODUCTS_API_ENDPOINT');
                setMarkerData(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAr3oEWRMXEj07I4yIbG5wwWdjwAmuUBkQ"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={MapStyle}
            center={center}
            zoom={zoom}
            // onLoad={onLoad} 센터로 확대
            onUnmount={onUnmount}
        >
            {markerData ? (
                markerData.map((el, idx) => {
                    let { price, seoullocation, postImg, title, contents, boardId } = el;
                    //api로 받아올 데이터 객체를 맵으로  반복 랜더 하였다.
                    return (
                        <>
                            <Marker
                                onClick={() => {
                                    setInfoWindows(boardId);   //클릭  마커에만 인포윈도를 랜더하기위에 셋스테이트로 아이디를 보내주었다.
                                }}
                                icon={`/images/marker_${infoWindows === id ? 'black' : 'white' /// 아이콘을 클릭하였을때 배경이 바뀌게 하였다
                                    }.png`}
                                key={boardId}
                                position={seoullocation}
                                cursor="pointer"
                                label={{
                                    text: '' + price,
                                    color: `${infoWindows === id ? 'white' : 'black'}`, /// 아이콘을 클릭하였을때 글짜색이 바뀌게 하였다

                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                }}
                            />

                            {infoWindows === boardId && ( //위에서 셋스테이트로 아이디를 보낸 스테이트에 값과 인포인도우 아이디가 같을때만 렌더 되게 하였다.
                                <InfoWindow
                                    onClick={() => {
                                        alert('상세페이지 이동');
                                    }}
                                    onLoad={onLoad}
                                    position={center}
                                    shouldFocus={true}
                                    onCloseClick={() => {
                                        setInfoWindows(0);
                                    }}
                                >
                                    <InfoWindowStyle
                                    // onClick={() => {
                                    //     alert('상세페이지 이동');
                                    // }}
                                    >
                                        <img src={poadImg} alt="의류사진" />
                                        <p>{title}</p>

                                        <span>{contents}</span>
                                        <p>₩{price}</p>
                                    </InfoWindowStyle>
                                </InfoWindow>
                            )}
                        </>
                    );
                })
            ) : (
                <Marker position={seoullocation} icon="/images/icons/home.png" />
            )}
        </GoogleMap>
    ) : (
        <div />
    );
}

export default React.memo(MyComponent)
