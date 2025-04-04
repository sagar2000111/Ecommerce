import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetails = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

export const fetchUserCart = async (userId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/carts/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user cart:', error);
    throw error;
  }
};
