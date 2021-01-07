import React, { useState} from 'react';
import LoadingPage from '../components/LoadingPage';

const useLoadingPage = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <LoadingPage /> : null,
    () => setLoading(true),
    () => setLoading(false)
  ];
}

export default useLoadingPage
