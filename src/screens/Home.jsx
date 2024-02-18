import { Area, B, B1, Card, Div, Div1, Div2, Div3, Div4, Div5, Div6, Div7, Div8, DivRoot, Icon, IcroundArrowBackIos, IcroundArrowBackIos1, Parent, PicIcon, Text, VectorIcon, VectorIcon1 } from '../assets/HomeCss/HomeCss';
import ReactMapTest from '../test/MapWithReactTest';
import MapList from './MapList';

const Home = () => {
    return (
        <>
            {/* <Div8>
                <Div>
                    <IcroundArrowBackIos>
                        <VectorIcon alt="" src="/vector.svg" />
                    </IcroundArrowBackIos>
                    <IcroundArrowBackIos1>
                        <VectorIcon1 alt="" src="/vector.svg" />
                    </IcroundArrowBackIos1>
                    <Icon alt="" src="/.svg" />
                </Div>
            </Div8> */}
            <MapList />
        </>
    );
};

export default Home;
