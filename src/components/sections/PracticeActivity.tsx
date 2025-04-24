
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FigmaEditor } from '@/components/FigmaEditor';
import { ChevronRight } from 'lucide-react';

export function PracticeActivity() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          <span className="figma-gradient">Practice Your Figma Skills</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Apply what you've learned in our simplified Figma editor
        </p>
      </div>
      
      <Card className="p-6 bg-accent/50">
        <h2 className="text-2xl font-bold mb-4">🧪 Interactive Figma Practice</h2>
        <p className="mb-6">
          Use the editor below to practice creating shapes, text elements, and aligning objects just like in Figma. 
          The tools available represent simplified versions of Figma's functionality.
        </p>
        
        <div className="mb-8">
          <FigmaEditor />
        </div>
        
        <h3 className="text-xl font-bold mb-3">Practice Challenges:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Basic Layout</h4>
            <p className="text-sm text-muted-foreground">Create a simple layout with rectangles of different sizes</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Color Exploration</h4>
            <p className="text-sm text-muted-foreground">Create shapes with different colors to understand color choices</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Text & Shapes</h4>
            <p className="text-sm text-muted-foreground">Combine text and shapes to create simple UI components</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Alignment Practice</h4>
            <p className="text-sm text-muted-foreground">Try to align shapes in a visually pleasing arrangement</p>
          </div>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-medium text-amber-800 flex items-center gap-2">
            <span className="i-lucide-lightbulb"></span>
            Pro Tips
          </h4>
          <ul className="list-disc list-inside text-sm text-amber-700 mt-2">
            <li>Practice creating a consistent grid layout</li>
            <li>Try to create a simple button or card component</li>
            <li>Experiment with different shapes and arrangements</li>
            <li>Think about visual hierarchy in your designs</li>
          </ul>
        </div>
      </Card>
      
      <div className="flex justify-center">
        <Button size="lg" className="bg-figma-purple hover:bg-figma-purple/90 gap-2">
          Continue Learning
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
