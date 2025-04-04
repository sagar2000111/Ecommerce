import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchProducts} from '../Services/api';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const handleProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const renderProductItem = ({item}) => (
    <ProductCard item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headingText}>Welcome</Text>
          <Text style={styles.subtitleText}>Order your favourite products</Text>
        </View>
        <TouchableOpacity onPress={handleProfile}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="gray"
          style={styles.textInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon name="search-outline" size={30} color="black" />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <Text style={styles.noResultsText}>No products found</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    padding: 0,
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  list: {
    paddingVertical: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default HomeScreen;
