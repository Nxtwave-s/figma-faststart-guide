
import React from 'react';
import { Shapes } from '@/components/sections/Shapes';
import { NextButton } from '@/components/NextButton';

const ShapesPage = () => {
  return (
    <>
      <Shapes />
      <NextButton href="/practice" />
    </>
  );
};

export default ShapesPage;
