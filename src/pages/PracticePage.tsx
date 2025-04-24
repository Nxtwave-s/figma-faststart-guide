
import React from 'react';
import { PracticeActivity } from '@/components/sections/PracticeActivity';
import { NextButton } from '@/components/NextButton';

const PracticePage = () => {
  return (
    <>
      <PracticeActivity />
      <NextButton href="/" />
    </>
  );
};

export default PracticePage;
