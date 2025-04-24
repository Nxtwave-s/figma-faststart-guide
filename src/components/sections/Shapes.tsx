
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Shapes() {
  // State for the shape editor simulation
  const [selectedShape, setSelectedShape] = React.useState<string | null>(null);
  
  const handleShapeClick = (shape: string) => {
    setSelectedShape(shape);
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          <span className="figma-gradient">Working with Shapes in Figma</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Master creating and manipulating basic shapes to design beautiful interfaces.
        </p>
      </div>
      
      <div className="flex justify-center my-8">
        <div className="relative rounded-lg overflow-hidden shadow-xl border border-figma-purple/20 hover-scale">
          <img 
            src="https://cdn.lovable.dev/?width=800&height=400&url=https%3A%2F%2Fplaceholder.pics%2Fsvg%2F800x400%2FDEDEDE%2F555555%2FFigma%2520Shapes" 
            alt="Figma Shapes" 
            className="w-full max-w-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Basic Shapes in Figma</h3>
              <p>Rectangles, circles, polygons, and more</p>
            </div>
          </div>
        </div>
      </div>
      
      <Card className="p-6 bg-accent/50">
        <h2 className="text-2xl font-bold mb-4">🔷 Understanding Shape Tools</h2>
        <p className="mb-4">
          Figma provides a variety of shape tools to create both simple and complex designs. These are the building blocks of your interface designs.
        </p>
        
        <div className="bg-white rounded-lg p-5 border mb-6">
          <h3 className="text-lg font-medium mb-2 text-figma-purple">✅ Basic Shape Tools</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span><span className="tooltip-trigger">Rectangle Tool (R)</span> - Create squares and rectangles</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span><span className="tooltip-trigger">Ellipse Tool (O)</span> - Create circles and ovals</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span><span className="tooltip-trigger">Polygon Tool</span> - Create triangles and other polygons</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span><span className="tooltip-trigger">Line Tool (L)</span> - Draw straight lines</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-figma-green" />
              <span><span className="tooltip-trigger">Pen Tool (P)</span> - Create custom shapes with vectors</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-5 border mb-6">
          <h3 className="text-lg font-medium mb-2 text-figma-purple">🎮 Shape Editor Simulation</h3>
          <div className="border-2 border-dashed border-figma-purple/30 p-8 rounded-lg bg-gray-50">
            <div className="text-center mb-4">
              <h4 className="font-medium">Shape Creator</h4>
              <p className="text-sm text-muted-foreground">Try creating basic shapes in this simulated editor</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <button 
                className={`border p-4 rounded-lg transition-colors ${selectedShape === 'rectangle' ? 'bg-accent' : 'hover:bg-accent/50'}`}
                onClick={() => handleShapeClick('rectangle')}
              >
                <div className="w-16 h-16 bg-figma-blue/80 rounded-sm mx-auto"></div>
                <p className="text-sm mt-2">Rectangle</p>
              </button>
              <button 
                className={`border p-4 rounded-lg transition-colors ${selectedShape === 'circle' ? 'bg-accent' : 'hover:bg-accent/50'}`}
                onClick={() => handleShapeClick('circle')}
              >
                <div className="w-16 h-16 rounded-full bg-figma-purple/80 mx-auto"></div>
                <p className="text-sm mt-2">Ellipse</p>
              </button>
              <button 
                className={`border p-4 rounded-lg transition-colors ${selectedShape === 'triangle' ? 'bg-accent' : 'hover:bg-accent/50'}`}
                onClick={() => handleShapeClick('triangle')}
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[52px] border-b-figma-green/80 border-r-[30px] border-r-transparent"></div>
                </div>
                <p className="text-sm mt-2">Triangle</p>
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {selectedShape 
                  ? `You selected: ${selectedShape}. Try selecting a different shape!` 
                  : 'Click on a shape to select it'}
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3">Tips for Working with Shapes:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Hold Shift</h4>
            <p className="text-sm text-muted-foreground">For perfect squares, circles, or straight lines</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Corner Radius</h4>
            <p className="text-sm text-muted-foreground">Adjust corner roundness in the properties panel</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Boolean Operations</h4>
            <p className="text-sm text-muted-foreground">Combine shapes using union, subtract, intersect</p>
          </div>
          <div className="bg-white rounded-lg p-4 border hover:border-figma-purple/50 transition-colors">
            <h4 className="font-medium text-figma-purple">Arrow Keys</h4>
            <p className="text-sm text-muted-foreground">Move selected shapes with precise control</p>
          </div>
        </div>
      </Card>
      
      <div className="flex justify-center">
        <Button asChild size="lg" className="bg-figma-purple hover:bg-figma-purple/90 gap-2">
          <Link to="/practice">
            Practice Shape Tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
