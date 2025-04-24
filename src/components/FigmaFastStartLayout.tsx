
import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ProgressTracker } from '@/components/ProgressTracker';
import { HelpWidget } from '@/components/HelpWidget';
import { Introduction } from '@/components/sections/Introduction';
import { FigmaSetup } from '@/components/sections/FigmaSetup';
import { Frames } from '@/components/sections/Frames';
import { Layers } from '@/components/sections/Layers';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export function FigmaFastStartLayout() {
  const [activeTopic, setActiveTopic] = useState('introduction');
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const topics = ['introduction', 'figma-setup', 'frames', 'layers'];
  
  const handleTopicChange = (topic: string) => {
    setActiveTopic(topic);
    
    // Scroll to section
    const element = document.getElementById(topic);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
        
        // Update active topic based on scroll position
        const sections = topics.map(topic => {
          const element = document.getElementById(topic);
          if (!element) return { id: topic, top: 0 };
          return {
            id: topic,
            top: element.offsetTop - 100
          };
        });
        
        for (let i = sections.length - 1; i >= 0; i--) {
          if (scrollTop >= sections[i].top) {
            setActiveTopic(sections[i].id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTopic={activeTopic} onTopicChange={handleTopicChange} />
      
      <ProgressTracker 
        currentSection={activeTopic}
        sections={topics}
        scrollProgress={scrollProgress} 
      />
      
      <HelpWidget />
      
      <main 
        className={cn(
          "transition-all duration-300",
          "lg:ml-64 min-h-screen p-4 md:p-8"
        )}
        ref={contentRef}
      >
        <div className="max-w-4xl mx-auto">
          <div id="introduction">
            <Introduction />
          </div>
          
          <div className="h-16"></div>
          
          <div id="figma-setup">
            <FigmaSetup />
          </div>
          
          <div className="h-16"></div>
          
          <div id="frames">
            <Frames />
          </div>
          
          <div className="h-16"></div>
          
          <div id="layers">
            <Layers />
          </div>
          
          <div className="h-32"></div>
          
          <footer className="text-center text-muted-foreground py-8 border-t text-sm">
            <p>Figma FastStart Guide - Last updated April 2025</p>
            <p className="mt-2">Created with React & Tailwind CSS</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
