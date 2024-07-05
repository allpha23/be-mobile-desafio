import { useEffect, useState } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

type RequestConfig = {
  axiosInstance: AxiosInstance,
  url: string,
  othersConfig?: AxiosRequestConfig,
};

export default function useAxios<T = unknown>(requests: RequestConfig) {
  const [data, setData] = useState<T | null >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { axiosInstance, url, othersConfig } = requests;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(url, { ...othersConfig });
        setData(res.data);
      } catch (err) {
        if (axios.isAxiosError(err))  
          setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}