import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import MealCard from '../components/MealCard/MealCard';
const Meals = ({navigation, route}) => {
  const API_URL =
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=' +
    route.params.category;
  const {data, error, loading} = useFetch(API_URL);

  const onSelect = item => {
    navigation.navigate('Detail', {mealId: item.idMeal});
  };
  const renderMeals = ({item}) => {
    return (
      <MealCard
        onSelect={() => {
          onSelect(item);
        }}
        imageUri={item.strMealThumb}
        strMeal={item.strMeal}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fea500'},
});

export default Meals;
