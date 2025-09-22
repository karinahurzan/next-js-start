'use client';
import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
