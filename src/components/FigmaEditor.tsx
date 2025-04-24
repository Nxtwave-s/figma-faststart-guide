
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function FigmaEditor() {
  const [selectedTool, setSelectedTool] = useState('select');
  const [canvasElements, setCanvasElements] = useState<Array<{
    id: string;
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    text?: string;
  }>>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [color, setColor] = useState('#4f46e5');
  
  const addShape = (shape: string) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type: shape,
      x: 50 + Math.random() * 200,
      y: 50 + Math.random() * 100,
      width: 100,
      height: shape === 'circle' ? 100 : 80,
      color: color,
      text: shape === 'text' ? 'Edit me' : undefined,
    };
    
    setCanvasElements([...canvasElements, newElement]);
  };
  
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedTool === 'select') {
      setSelectedElement(null);
      return;
    }
    
    if (selectedTool === 'rectangle') {
      addShape('rectangle');
    }
    
    if (selectedTool === 'circle') {
      addShape('circle');
    }
    
    if (selectedTool === 'text') {
      addShape('text');
    }
  };
  
  const handleElementClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedElement(id);
  };
  
  const deleteSelected = () => {
    if (selectedElement) {
      setCanvasElements(canvasElements.filter(el => el.id !== selectedElement));
      setSelectedElement(null);
    }
  };
  
  const clearCanvas = () => {
    setCanvasElements([]);
    setSelectedElement(null);
  };
  
  return (
    <div className="border rounded-lg bg-white shadow-lg overflow-hidden">
      <div className="border-b p-4 bg-gray-50 flex justify-between items-center">
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={selectedTool === 'select' ? 'default' : 'outline'}
                size="sm" 
                onClick={() => setSelectedTool('select')}
              >
                <span className="i-lucide-pointer" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Select Tool</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={selectedTool === 'rectangle' ? 'default' : 'outline'}
                size="sm" 
                onClick={() => setSelectedTool('rectangle')}
              >
                <span className="i-lucide-square" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Rectangle Tool</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={selectedTool === 'circle' ? 'default' : 'outline'}
                size="sm" 
                onClick={() => setSelectedTool('circle')}
              >
                <span className="i-lucide-circle" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Circle Tool</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={selectedTool === 'text' ? 'default' : 'outline'}
                size="sm" 
                onClick={() => setSelectedTool('text')}
              >
                <span className="i-lucide-text" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Text Tool</TooltipContent>
          </Tooltip>
          
          <div className="h-6 border-r mx-2" />
          
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-8 w-8 rounded cursor-pointer"
          />
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={deleteSelected} disabled={!selectedElement}>
            Delete Selected
          </Button>
          <Button size="sm" variant="outline" onClick={clearCanvas}>
            Clear Canvas
          </Button>
        </div>
      </div>
      
      <div 
        className="bg-gray-100 h-[400px] relative overflow-hidden"
        onClick={handleCanvasClick}
      >
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            [...Array(20)].map((_, j) => (
              <div key={`${i}-${j}`} className="border border-gray-300" />
            ))
          ))}
        </div>
        
        {canvasElements.map((element) => (
          <div
            key={element.id}
            style={{
              position: 'absolute',
              left: `${element.x}px`,
              top: `${element.y}px`,
              width: `${element.width}px`,
              height: `${element.height}px`,
              backgroundColor: element.color,
              borderRadius: element.type === 'circle' ? '50%' : '0',
              border: selectedElement === element.id ? '2px dashed black' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={(e) => handleElementClick(e, element.id)}
          >
            {element.text}
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-gray-50 border-t">
        <p className="text-sm text-muted-foreground">
          Click on a tool and then click on the canvas to add shapes. Select objects by clicking on them.
        </p>
      </div>
    </div>
  );
}
