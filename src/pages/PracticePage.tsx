
import React from 'react';
import { PracticeActivity } from '@/components/sections/PracticeActivity';
import { NextButton } from '@/components/NextButton';

const PracticePage = () => {
  return (
    <>
      <PracticeActivity />
      <NextButton href="/" label="Back to Home" />
    </>
  );
};

export default PracticePage;
