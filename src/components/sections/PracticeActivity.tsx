
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight, Square, Circle, Type, MousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PracticeActivity() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          <span className="figma-gradient">Practice Your Design Skills</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Apply what you've learned in our interactive editor
        </p>
      </div>
      
      <Card className="p-6 bg-accent/50">
        <h2 className="text-2xl font-bold mb-4">🎯 Practice Activity: Create a Frame</h2>
        <p className="mb-6">
          Try creating a new frame inside the editor below. Add rectangles, text, and explore the tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-3">Steps:</h3>
            <ol className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-figma-green" />
                <span>Click the Frame tool</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-figma-green" />
                <span>Draw a frame on canvas</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-figma-green" />
                <span>Use the rectangle tool inside it</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-figma-green" />
                <span>Add some text elements</span>
              </li>
            </ol>
          </div>
          
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden border shadow-lg">
              <div className="bg-white p-4 border-b flex items-center gap-3">
                <MousePointer className="h-4 w-4" />
                <Square className="h-4 w-4" />
                <Circle className="h-4 w-4" />
                <Type className="h-4 w-4" />
              </div>
              <div 
                className="w-full bg-gray-100 flex items-center justify-center"
                style={{ minHeight: '500px' }}
              >
                <div className="text-center p-6">
                  <img 
                    src="/lovable-uploads/3b7bf12d-e51f-4784-bf2e-5bbd4896af2c.png" 
                    alt="Practice Design Area" 
                    className="max-w-full h-auto opacity-25 mb-4"
                  />
                  <p className="text-lg text-gray-600">
                    External editor couldn't be loaded
                  </p>
                  <p className="text-sm text-gray-500">
                    Please imagine using the design tools here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-medium text-amber-800">💡 Tips</h4>
          <ul className="list-disc list-inside text-sm text-amber-700 mt-2">
            <li>Use the grid to help align your elements</li>
            <li>Try different shapes and combinations</li>
            <li>Practice with various colors and styles</li>
            <li>Experiment with text formatting</li>
          </ul>
        </div>
      </Card>
      
      <div className="flex justify-end">
        <Button asChild size="lg" className="bg-figma-purple hover:bg-figma-purple/90 gap-2">
          <Link to="/">
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
