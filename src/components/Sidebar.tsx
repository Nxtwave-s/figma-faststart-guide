
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X, 
  Home, 
  Settings, 
  Layers, 
  Square, 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  activeTopic: string;
  onTopicChange: (topic: string) => void;
}

const sidebarTopics = [
  { id: 'introduction', label: 'Introduction', icon: <Home size={18} /> },
  { id: 'figma-setup', label: 'Figma Setup', icon: <Settings size={18} /> },
  { id: 'frames', label: 'Frames', icon: <Square size={18} /> },
  { id: 'layers', label: 'Layers', icon: <Layers size={18} /> },
];

export function Sidebar({ activeTopic, onTopicChange }: SidebarProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Sidebar backdrop for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen bg-white border-r transition-all duration-300 shadow-lg",
          isOpen ? "w-64" : "w-0 -translate-x-full",
          "lg:translate-x-0 lg:w-64 lg:border-r lg:shadow-none"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold figma-gradient">Figma FastStart</h1>
            <p className="text-sm text-gray-500 mt-1">Your quick guide to Figma</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <TooltipProvider>
              <ul className="space-y-1">
                {sidebarTopics.map((topic) => (
                  <li key={topic.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={activeTopic === topic.id ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            activeTopic === topic.id && "bg-accent text-figma-purple font-medium"
                          )}
                          onClick={() => {
                            onTopicChange(topic.id);
                            if (isMobile) setIsOpen(false);
                          }}
                        >
                          <span className="mr-2 text-figma-purple">{topic.icon}</span>
                          {topic.label}
                          {activeTopic === topic.id ? 
                            <ChevronDown className="ml-auto h-4 w-4" /> : 
                            <ChevronRight className="ml-auto h-4 w-4" />
                          }
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {topic.label} section
                      </TooltipContent>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </TooltipProvider>
          </nav>
          
          {/* Footer */}
          <div className="p-4 border-t mt-auto">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-xs text-gray-500">Last updated: April 2025</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
