// screens/FavoritesScreen.js
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ProductCard from '../components/ProductCard';
import {fetchProducts} from '../Services/api';

const FavoritesScreen = () => {
  const favorites = useSelector(state => state.favorites.items);
  console.log(favorites, 'favorites');
  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.emptySubtext}>
            Tap the heart icon to add items
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ProductCard item={item} />}
          contentContainerStyle={styles.list}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#888',
  },
  list: {
    paddingBottom: 20,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    gap: 16,
  },
});

export default FavoritesScreen;
