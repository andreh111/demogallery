import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './SliderEntry.Style';
import Icon from 'react-native-vector-icons/Ionicons';
import Metrics from '../Utils/Metrics';

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  };
  state = {
    showMore: false,
  };

  get image() {
    const {
      data: {title, illustration},
    } = this.props;

    return (
      <View style={{flex: 1, backgroundColor: 'transparent'}}>
        <Image source={{uri: illustration}} style={styles.image} />

        {title.length > 100 && !this.state.showMore ? (
          <View
            style={{
              top: Metrics.vh(40),
              left: Metrics.vw(4),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {title.substring(0, 100) + '...'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  showMore: !this.state.showMore,
                });
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                }}>
                Show More
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              top: Metrics.vh(30),
              left: Metrics.vw(2),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {title}
            </Text>
            {title.length > 100 && this.state.showMore && <TouchableOpacity
              onPress={() => {
                this.setState({
                  showMore: !this.state.showMore,
                });
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                }}>
                Show Less
              </Text>
            </TouchableOpacity>}
          </View>
        )}
      </View>
    );
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => {}}>
        <View style={styles.shadow} />
        <View style={[styles.imageContainer]}>
          {this.image}
          <View style={[styles.radiusMask]} />
        </View>
      </TouchableOpacity>
    );
  }
}
