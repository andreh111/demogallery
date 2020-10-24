import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import Metrics from '../Utils/Metrics';
import {ENTRIES2} from './Entries';
import SliderEntry from './SliderEntry';
import {sliderHeight, itemHeight, itemWidth, sliderWidth} from './SliderEntry.Style';

interface CarouselContainerProps {
}

const carouselRef = React.createRef();
const CarouselContainer: React.FC<CarouselContainerProps> = () => {
    const [desc,setDesc] = useState(ENTRIES2[0].title);
    const _renderItem = ({item, index}) => {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0}/>;
    };

    const getItem = () => {
        setDesc(ENTRIES2[carouselRef.current.currentIndex].title);
        carouselRef.current.snapToNext();
    };

    const renderCarousel = (type: string) => {
        const isTinder = type === 'tinder';
        return (
            <View>
                <Carousel data={ENTRIES2}
                          renderItem={_renderItem}
                    sliderHeight={sliderHeight}
                    itemHeight={itemHeight}
                          sliderWidth={sliderWidth}
                          itemWidth={itemWidth}
                          containerCustomStyle={styles.slider}
                          contentContainerCustomStyle={styles.sliderContentContainer}
                          layout={"tinder"}
                          loop={true}
                    // vertical={true}
                    scrollEnabled={false}
                          ref={carouselRef}
                />




            </View>
        );
    };
    return <SafeAreaView style={{flex: 1}}>
        {renderCarousel('tinder')}
        <ScrollView style={{flex:1}}>
            <Text style={{fontSize: 20}}>Sami Klark</Text>
            <Text style={{fontSize: 16}}>
                {desc}
            </Text>
        </ScrollView>
        <View style={[styles.like]}>
            <TouchableOpacity onPress={() => getItem()}>
                <Icon color="red" name={'heart'} size={40} />
            </TouchableOpacity>
        </View>
        <View style={[styles.close]}>
            <TouchableOpacity onPress={() => getItem()}>
                <Icon color="red" name="close-outline" size={40} />
            </TouchableOpacity>
        </View>

    </SafeAreaView>
};

const styles = StyleSheet.create({
    container: {
        // padding: 30,
    },
    containerDark: {
        backgroundColor: 'black',
    },
    containerLight: {
        backgroundColor: 'white',
    },
    title: {
        // paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleDark: {
        color: 'black',
    },
    subtitle: {
        marginTop: 5,
        // paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    sliderContentContainer: {
        paddingVertical: 10, // for custom animation
    },
    slider: {
        // marginTop: 15,
        // overflow: 'visible', // for custom animations
    },
    like: {
        margin: 10,
        position: 'absolute',
        right:Metrics.vw(30),
        bottom:Metrics.vh(0),
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        margin: 10,
        position: 'absolute',
        bottom: Metrics.vh(0),
        left: Metrics.vw(30),
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CarouselContainer;
