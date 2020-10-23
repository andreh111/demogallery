import React from 'react';
import {Pressable, Text,TouchableOpacity,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useImage from '../hooks/useImage';
import {styles}from './Styles';

interface PickImageCardProps {
    onPickImage: Function;
}

const PickImageCard:React.FC<PickImageCardProps> = ({onPickImage}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPickImage}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="add" size={30} />
        <Text style={{fontSize: 20, textAlign: 'center'}}>Add Photos</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PickImageCard;
