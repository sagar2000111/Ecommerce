import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/cartSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const DetailScreen = ({route, navigation}) => {
  const {
    item: {image, category, id, price, rating, title, description},
  } = route.params;
  const dispatch = useDispatch();

  const renderStars = ratingValue => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Icon key={i} name="star" size={20} color="#FFD700" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Icon key={i} name="star-half" size={20} color="#FFD700" />);
      } else {
        stars.push(
          <Icon key={i} name="star-outline" size={20} color="#FFD700" />,
        );
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        image,
        title,
        price,
        description,
        quantity: 1,
        id,
      }),
    );
    navigation.navigate('BottomTab', {screen: 'Cart'});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="share" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Product Image with gradient overlay */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: image}}
            style={styles.image}
            resizeMode="contain"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0)']}
            style={styles.imageGradient}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>30% OFF</Text>
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.contentContainer}>
          <Text style={styles.category}>{category.toUpperCase()}</Text>
          <Text style={styles.title}>{title}</Text>

          {/* Rating and reviews */}
          <View style={styles.ratingContainer}>
            <View style={styles.stars}>{renderStars(rating.rate)}</View>
            <Text style={styles.ratingText}>({rating.count} reviews)</Text>
          </View>

          {/* Price section */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
            <Text style={styles.originalPrice}>
              ${(price * 1.3).toFixed(2)}
            </Text>
            <Text style={styles.discount}>30% OFF</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            <View style={styles.features}>
              <View style={styles.featureItem}>
                <Icon name="local-shipping" size={18} color="#4CAF50" />
                <Text style={styles.featureText}>Free Shipping</Text>
              </View>
              <View style={styles.featureItem}>
                <Icon name="autorenew" size={18} color="#2196F3" />
                <Text style={styles.featureText}>30-Day Returns</Text>
              </View>
              <View style={styles.featureItem}>
                <Icon name="verified" size={18} color="#FF9800" />
                <Text style={styles.featureText}>1-Year Warranty</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
          <Icon name="shopping-cart" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 8,
  },
  backButton: {
    padding: 8,
  },
  shareButton: {
    padding: 8,
  },
  imageContainer: {
    height: height * 0.35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    position: 'relative',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 60,
  },
  badge: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FF5252',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    lineHeight: 28,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5252',
    marginRight: 12,
  },
  originalPrice: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discount: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  addToCartButton: {
    backgroundColor: '#6200EE',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
});

export default DetailScreen;
