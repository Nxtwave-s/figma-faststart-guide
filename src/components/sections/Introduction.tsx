
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Introduction() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          <span className="figma-gradient">Getting Started with Figma – A Fast & Effective Guide</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Your hands-on guide to learning Figma's powerful design features quickly and effectively.
        </p>
      </div>
      
      <div className="flex justify-center my-8">
        <div className="relative rounded-lg overflow-hidden shadow-xl border border-figma-purple/20 hover-scale">
          <img 
            src="https://cdn.lovable.dev/?width=800&height=400&url=https%3A%2F%2Fplaceholder.pics%2Fsvg%2F800x400%2FDEDEDE%2F555555%2FFigma%2520Interface" 
            alt="Figma Interface" 
            className="w-full max-w-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Figma in Action</h3>
              <p>Real-time collaborative design platform</p>
            </div>
          </div>
        </div>
      </div>
      
      <Card className="p-6 bg-accent/50">
        <h2 className="text-2xl font-bold mb-4">🎨 What is Figma?</h2>
        <p className="mb-4">
          Figma is a <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="tooltip-trigger">
                cloud-based interface design tool
              </TooltipTrigger>
              <TooltipContent>
                Works in your browser, no installation needed!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> used to create websites, apps, and digital products — all in real time with team collaboration.
        </p>
        
        <div className="bg-white rounded-lg p-5 border mb-6">
          <h3 className="text-lg font-medium mb-2 text-figma-purple">✅ Key Features</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span>Works in any web browser</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span>No installation needed</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span>Real-time collaboration</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span>Auto-save and version history</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span>Cross-platform (Windows, Mac, Linux)</span>
            </li>
          </ul>
        </div>
        
        <h3 className="text-xl font-bold mb-3">What You'll Learn:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Getting Started</h4>
            <p className="text-sm text-muted-foreground">Setting up Figma and navigating the interface</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Working with Frames</h4>
            <p className="text-sm text-muted-foreground">Creating different screen sizes and layouts</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Managing Layers</h4>
            <p className="text-sm text-muted-foreground">Understanding layer hierarchy and organization</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Creating Shapes</h4>
            <p className="text-sm text-muted-foreground">Mastering basic shapes and manipulations</p>
          </div>
        </div>
      </Card>
      
      <div className="flex justify-center">
        <Button asChild size="lg" className="bg-figma-purple hover:bg-figma-purple/90 gap-2">
          <Link to="/shapes">
            Start Learning
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
