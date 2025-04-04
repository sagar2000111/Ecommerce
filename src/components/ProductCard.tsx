import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites, removeFromFavorites} from '../store/favouriteSlice';
import {addToCart} from '../store/cartSlice';
const ProductCard = ({item, navigation}) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = React.useState(false);
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(favItem => favItem.id === item.id);
  console.log(isFavorite, 'isFavorite');

  const handleFavourite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item.id));
      setLiked(false);
    } else {
      dispatch(addToFavorites(item));
      setLiked(true);
    }
  };
  const renderStars = rating => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Icon key={i} name="star" size={14} color="#FFD700" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Icon key={i} name="star-half" size={14} color="#FFD700" />);
      } else {
        stars.push(
          <Icon key={i} name="star-outline" size={14} color="#FFD700" />,
        );
      }
    }
    return stars;
  };

  const handleCardDescription = () => {
    navigation.navigate('DetailScreen', {item});
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardDescription}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>NEW</Text>
        </View>
        <TouchableOpacity
          style={styles.wishlistButton}
          onPress={() => {
            handleFavourite(item.id);
          }}>
          <Icon name="favorite" size={20} color={liked ? 'red' : 'gray'} />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <View style={styles.ratingContainer}>
          <View style={styles.stars}>{renderStars(item.rating.rate)}</View>
          <Text style={styles.ratingText}>({item.rating.count})</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <Text style={styles.originalPrice}>
            ${(item.price * 1.3).toFixed(2)}
          </Text>
          <Text style={styles.discount}>{Math.round(30)}% OFF</Text>
        </View>

        <View style={styles.features}>
          <View style={styles.featureTag}>
            <Icon name="local-shipping" size={12} color="#4CAF50" />
            <Text style={styles.featureText}>Free Shipping</Text>
          </View>
          <View style={styles.featureTag}>
            <Icon name="autorenew" size={12} color="#2196F3" />
            <Text style={styles.featureText}>30-Day Returns</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: '1%',
  },
  imageContainer: {
    height: 160,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF5252',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  wishlistButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  detailsContainer: {
    padding: 12,
    paddingTop: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
    lineHeight: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 4,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 6,
  },
  ratingText: {
    fontSize: 11,
    color: '#888',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5252',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  discount: {
    fontSize: 11,
    color: '#4CAF50',
    fontWeight: '600',
  },
  features: {
    flexDirection: 'row',
    marginBottom: 12,
    flexWrap: 'wrap',
    gap: 6,
  },
  featureTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  featureText: {
    fontSize: 10,
    color: '#555',
    marginLeft: 4,
  },
  addToCartButton: {
    backgroundColor: '#6200EE',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default ProductCard;
