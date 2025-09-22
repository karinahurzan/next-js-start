import MagicButton from '@/app/components/MagicButton';
import React from 'react';

export interface PageProps {
  children?: React.ReactNode;
}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}
