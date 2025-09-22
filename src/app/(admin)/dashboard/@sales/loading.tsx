import React from 'react';

export interface LoadingProps {
  children?: React.ReactNode;
}

export default function Loading({ children }: LoadingProps) {
  return <div>Loading...</div>;
}
