
import React from 'react';
import { PracticeActivity } from '@/components/sections/PracticeActivity';
import { NextButton } from '@/components/NextButton';

const PracticePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <PracticeActivity />
      <div className="mt-8">
        <NextButton href="/" label="Back to Home" />
      </div>
    </div>
  );
};

export default PracticePage;
