
import React from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface ProgressTrackerProps {
  currentSection: string;
  sections: string[];
  scrollProgress: number;
}

export function ProgressTracker({ currentSection, sections, scrollProgress }: ProgressTrackerProps) {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
        <Progress value={scrollProgress} className="w-2 h-40 bg-gray-200 rounded-full" orientation="vertical" />
        
        <div className="mt-4 flex flex-col items-center space-y-2">
          {sections.map((section, index) => (
            <div 
              key={section}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                currentSection === section ? "bg-figma-purple h-3 w-3" : "bg-gray-300"
              )}
              title={section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
