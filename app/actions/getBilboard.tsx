import axios from 'axios';
import { Billboard } from "@/types";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const response = await axios.get(`/billboards/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default getBillboard;