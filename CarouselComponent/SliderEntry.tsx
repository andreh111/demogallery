import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
    ImageBackground, SafeAreaView, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './SliderEntry.Style';
import Icon from 'react-native-vector-icons/Ionicons';
import Metrics from '../Utils/Metrics';
import {FlatListSlider} from 'react-native-flatlist-slider';


export default class SliderEntry extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object,
    };
    state = {
        showMore: false,
        images: [
            {
                image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                desc: 'Silent Waters in the mountains in midst of Himilayas',
            },
            {
                image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
                desc:
                    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
            },
        ]
    };

    get image() {
        const {
            data: {title, illustration},
        } = this.props;

        return (
            <View style={{flex: 1}}>
                <FlatListSlider
                    data={this.state.images}
                    timer={1000000000000}
                    imageKey={'image'}
                    local={false}
                    height={Metrics.vh(40)}
                    width={Metrics.screenWidth}
                    indicatorContainerStyle={{position:'absolute',bottom:20}}
                    separator={0}
                    loop={true}
                    autoscroll={true}
                    currentIndexCallback={index => console.log('Index', index)}
                    onPress={item => alert(JSON.stringify(item))}
                    indicator
                    animation
                    indicatorActiveColor={'red'}
                    indicatorInActiveColor={'#ffffff'}
                    indicatorActiveWidth={8}
                    indicatorStyle={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginRight: 5,
                    }}
                />



            </View>
        );
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => {
                }}>
                <View style={styles.shadow}/>
                <View style={[styles.imageContainer]}>
                    {this.image}
                    <View style={[styles.radiusMask]}/>
                </View>
            </TouchableOpacity>
        );
    }
}
