
import React from 'react';
import { FigmaFastStartLayout } from '@/components/FigmaFastStartLayout';
import { NextButton } from '@/components/NextButton';

const Index = () => {
  return (
    <>
      <FigmaFastStartLayout />
      <NextButton href="/shapes" />
    </>
  );
};

export default Index;
