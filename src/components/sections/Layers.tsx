
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { 
  Layers as LayersIcon, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  Search,
  Square,
  Circle,
  Type,
  Component
} from 'lucide-react';

export function Layers() {
  const [visibleLayers, setVisibleLayers] = useState({
    'header': true,
    'body': true,
    'footer': true,
    'background': true,
  });
  
  const toggleLayerVisibility = (layerId: string) => {
    setVisibleLayers(prev => ({
      ...prev,
      [layerId]: !prev[layerId]
    }));
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2" id="layers">Layers</h2>
        <p className="text-muted-foreground">Learn how to organize and manage layers in Figma for efficient design workflows</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Understanding the Layers Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <h4 className="font-medium mb-3">Accessing the Layers Panel</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <LayersIcon className="h-4 w-4 mt-0.5 text-figma-purple flex-shrink-0" />
                  <span>The Layers panel is located on the left side of the interface</span>
                </li>
                <li className="flex justify-between">
                  <span>Toggle visibility:</span>
                  <span className="font-mono bg-secondary rounded px-1">Ctrl/Cmd + \</span>
                </li>
              </ul>
              
              <div className="mt-4 bg-gray-50 border rounded-md p-3">
                <p className="text-sm font-medium mb-2">Layer Hierarchy</p>
                <ul className="space-y-1.5 text-sm">
                  <li>Layers are stacked from bottom to top</li>
                  <li>Top layers in the panel appear in front on the canvas</li>
                  <li>Nested layers appear indented under their parent</li>
                </ul>
              </div>
            </div>
            
            <div className="col-span-2">
              <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-100 p-2 flex justify-between items-center border-b">
                  <div className="flex items-center gap-1">
                    <LayersIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">Layers</span>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Search className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                
                {/* Simulated Layers Panel */}
                <div className="bg-white p-2 space-y-1">
                  <div className="flex items-center justify-between p-1 rounded hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLayerVisibility('header')}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {visibleLayers.header ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                      </button>
                      <Square className="h-3.5 w-3.5 text-figma-purple" />
                      <span className="text-xs">Header</span>
                    </div>
                    <Lock className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-1 rounded hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLayerVisibility('body')}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {visibleLayers.body ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                      </button>
                      <Square className="h-3.5 w-3.5 text-figma-blue" />
                      <span className="text-xs">Body</span>
                    </div>
                    <Unlock className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-1 rounded hover:bg-gray-100 ml-4">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      <Type className="h-3.5 w-3.5 text-figma-green" />
                      <span className="text-xs">Heading</span>
                    </div>
                    <span></span>
                  </div>
                  
                  <div className="flex items-center justify-between p-1 rounded hover:bg-gray-100 ml-4">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      <Component className="h-3.5 w-3.5 text-figma-orange" />
                      <span className="text-xs">Button</span>
                    </div>
                    <span></span>
                  </div>
                  
                  <div className="flex items-center justify-between p-1 rounded hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLayerVisibility('footer')}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {visibleLayers.footer ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                      </button>
                      <Square className="h-3.5 w-3.5 text-figma-yellow" />
                      <span className="text-xs">Footer</span>
                    </div>
                    <Unlock className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-1 rounded hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLayerVisibility('background')}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {visibleLayers.background ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                      </button>
                      <Circle className="h-3.5 w-3.5 text-gray-400" />
                      <span className="text-xs">Background</span>
                    </div>
                    <Unlock className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex items-center justify-center border rounded-md p-3 bg-gray-50">
                <div className={`space-y-2 transition-opacity duration-300 ${visibleLayers.background ? 'opacity-100' : 'opacity-0'}`}>
                  <div className={`h-6 w-64 rounded-md bg-gray-200 transition-opacity duration-300 ${visibleLayers.header ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`h-20 w-64 rounded-md bg-gray-300 transition-opacity duration-300 ${visibleLayers.body ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`h-6 w-64 rounded-md bg-gray-200 transition-opacity duration-300 ${visibleLayers.footer ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
              
              <p className="text-xs text-center text-muted-foreground mt-2">
                Try toggling the visibility of layers by clicking the eye icons.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Managing Layers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div>
                <h4 className="font-medium mb-2">Selecting Layers</h4>
                <ul className="space-y-1.5 text-sm pl-5 list-disc">
                  <li>Click a layer in the Layers panel or on the canvas</li>
                  <li>Hold Shift and click to select multiple layers</li>
                  <li>Click a parent layer to select it and all its children</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Organizing Layers</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Rename:</span>
                      <span className="font-mono bg-secondary rounded px-1">Double-click</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Group:</span>
                      <span className="font-mono bg-secondary rounded px-1">Ctrl/Cmd + G</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Reorder:</span>
                      <span className="font-mono bg-secondary rounded px-1">Drag</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Ungroup:</span>
                      <span className="font-mono bg-secondary rounded px-1">Ctrl/Cmd + Shift + G</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Layer Visibility and Locking</h4>
                <div className="bg-gray-50 border rounded p-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-figma-purple" />
                      <span className="text-sm">Hide/Show</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-figma-purple" />
                      <span className="text-sm">Lock/Unlock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Layer Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-10 w-10 flex-shrink-0 bg-figma-purple/10 rounded-md flex items-center justify-center">
                  <Square className="text-figma-purple" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Frame Layers</h4>
                  <p className="text-sm text-muted-foreground">
                    Containers that can hold other layers. Show up as rectangular outlines on the canvas.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-10 w-10 flex-shrink-0 bg-figma-blue/10 rounded-md flex items-center justify-center">
                  <Circle className="text-figma-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Shape Layers</h4>
                  <p className="text-sm text-muted-foreground">
                    Basic geometric shapes like rectangles, ellipses, etc. Can be styled with fills, strokes, and effects.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-10 w-10 flex-shrink-0 bg-figma-green/10 rounded-md flex items-center justify-center">
                  <Type className="text-figma-green" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Text Layers</h4>
                  <p className="text-sm text-muted-foreground">
                    Contain text content. Have specific typography properties.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-10 w-10 flex-shrink-0 bg-figma-orange/10 rounded-md flex items-center justify-center">
                  <Component className="text-figma-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Component and Instance Layers</h4>
                  <p className="text-sm text-muted-foreground">
                    Reusable design elements. Show with a diamond icon in the Layers panel.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Layer Search and Organization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Searching for Layers</h4>
              <div className="bg-gray-50 border rounded-md p-3">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search layers..." 
                    className="w-full pl-8 pr-3 py-2 rounded border text-sm"
                  />
                </div>
                <p className="mt-3 text-sm">
                  Use the search box at the top of the Layers panel to quickly find layers by name.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Using Color Dots</h4>
              <div className="bg-gray-50 border rounded-md p-3 space-y-3">
                <p className="text-sm">
                  Assign colors to categorize your layers and keep your project organized.
                </p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">UI Elements</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs">Text</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs">Images</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Icons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium mb-3">Practice Activity: Layer Management</h4>
            <div className="bg-figma-purple/5 border border-figma-purple/20 rounded-md p-4">
              <p className="mb-3">Try:</p>
              <ol className="space-y-2 pl-5 list-decimal">
                <li>Creating and naming multiple layers</li>
                <li>Grouping related elements</li>
                <li>Hiding and showing different parts of your design</li>
                <li>Reordering layers to change their stacking</li>
              </ol>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="mt-4 bg-figma-purple hover:bg-figma-purple/90">
                      Download Practice File
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Download file to practice layer management
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
