import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import styles from './MealCard.style';

const MealCard = ({imageUri, strMeal, onSelect}) => {
  const image = {uri: imageUri};
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>{strMeal}</Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MealCard;
