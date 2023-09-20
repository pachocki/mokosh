import axios from 'axios';
import { Product } from '@/types';
import qs from 'query-string';


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const queryParams = {
    colorId: query.colorId,
    sizeId: query.sizeId,
    categoryId: query.categoryId,
    isFeatured: query.isFeatured,
  };

  try {
    const response = await axios.get(URL, {
      params: queryParams,
    });

    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching products:', error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export default getProducts;


const getProductById = async (id: string): Promise<Product | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    } else {
      return null; 
    }
  };
  
  export { getProducts, getProductById };
