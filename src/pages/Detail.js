import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../components/DetailCard/DetailCard';

const Detail = ({route}) => {
  const API_URL =
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +
    route.params.mealId;
  const {data, error, loading} = useFetch(API_URL);

  const renderDetail = ({item}) => {
    return (
      <DetailCard
        strYoutube={item.strYoutube}
        strInstructions={item.strInstructions}
        strMealThumb={item.strMealThumb}
        strMeal={item.strMeal}
        strArea={item.strArea}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
};

const styles = StyleSheet.create({container: {flex: 1}});
export default Detail;
