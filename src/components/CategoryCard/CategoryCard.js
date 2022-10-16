import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './CategoryCard.style';

const CategoryCard = ({onPress, thumbnail, category}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: thumbnail}} />
        <View style={styles.text_container}>
          <Text style={styles.text}>{category}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
