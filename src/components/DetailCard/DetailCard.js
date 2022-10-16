import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import styles from './DetailCard.style';
const DetailCard = ({
  strInstructions,
  strMealThumb,
  strMeal,
  strArea,
  strYoutube,
}) => {
  const imageUri = {uri: strMealThumb};

  const showOnYoutube = () => {
    Linking.openURL(strYoutube);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUri} />

      <View style={styles.info_container}>
        <Text style={styles.title}>{strMeal}</Text>
        <Text style={styles.subtitle}>{strArea}</Text>
        <Text>{strInstructions}</Text>
        <TouchableOpacity style={styles.button} onPress={showOnYoutube}>
          <Text style={styles.button_text}>Youtube'da Aç</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailCard;
