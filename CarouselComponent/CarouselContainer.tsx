import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import Metrics from '../Utils/Metrics';
import {ENTRIES1, ENTRIES2} from './Entries';
import SliderEntry from './SliderEntry';
import {sliderWidth, itemWidth, sliderHeight, itemHeight} from './SliderEntry.Style';
interface CarouselContainerProps {}

const carouselRef = React.createRef();
const CarouselContainer: React.FC<CarouselContainerProps> = () => {
  const _renderItem = ({item, index}) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  };

  const getItem = () => {
    Alert.alert("",ENTRIES1[carouselRef.current.currentIndex].illustration)
    carouselRef.current.snapToNext();
  }

  const renderCarousel = (type: string) => {
    const isTinder = type === 'tinder';
    return (
      <View>
        <Carousel
          data={isTinder ? ENTRIES2 : ENTRIES1}
          renderItem={_renderItem}
          sliderHeight={sliderHeight}
          itemHeight={itemHeight}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={"tinder"}
          loop={true}
          vertical={true}
          ref={carouselRef}
        />

        <View style={[styles.like]}>
          <TouchableOpacity onPress={() => getItem()}>
            <Icon color="red" name={'heart'} size={40} />
          </TouchableOpacity>
        </View>
        <View style={[styles.close]}>
          <TouchableOpacity onPress={() => carouselRef.current.snapToNext()}>
            <Icon color="red" name="close-outline" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return <View>{renderCarousel('tinder')}</View>;
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
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  like: {
    margin: 10,
    position: 'absolute',
    top: Metrics.vh(60),
    right: Metrics.vw(0),
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
    top: Metrics.vh(60),
    right: Metrics.vw(25),
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CarouselContainer;
