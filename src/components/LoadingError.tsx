import React from 'react';
import spinner from '../assets/spinner.gif'; 

interface LoadingErrorProps {
  loading: boolean;
  error?: Error | null;
}

const LoadingError: React.FC<LoadingErrorProps> = ({ loading, error }) => {
  if (loading) return <img className="mx-auto" src={spinner} alt="Loading..." />;
  if (error) return <p className="text-red-500">Błąd: {error.message}</p>;
  return null;
};

export default LoadingError;
