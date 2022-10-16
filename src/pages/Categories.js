import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../components/CategoryCard';

const Categories = ({navigation}) => {
  const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const {data, error, loading} = useFetch(API_URL);

  const renderCategories = ({item}) => {
    return (
      <CategoryCard
        onPress={() => {
          onSelect(item.strCategory);
        }}
        category={item.strCategory}
        thumbnail={item.strCategoryThumb}
      />
    );
  };

  const onSelect = category => {
    navigation.navigate('Meals', {category: category});
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fea500'},
});
export default Categories;
