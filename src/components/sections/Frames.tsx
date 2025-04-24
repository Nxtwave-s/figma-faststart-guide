
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { 
  Square, 
  Smartphone, 
  Tablet, 
  Monitor, 
  LayoutGrid 
} from 'lucide-react';
import { FigmaEditor } from '@/components/FigmaEditor';

export function Frames() {
  const [selectedFrameType, setSelectedFrameType] = useState('custom');
  
  const frameTypes = [
    { id: 'custom', name: 'Custom', icon: <Square size={16} /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone size={16} /> },
    { id: 'tablet', name: 'Tablet', icon: <Tablet size={16} /> },
    { id: 'desktop', name: 'Desktop', icon: <Monitor size={16} /> },
  ];
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2">Frames</h2>
        <p className="text-muted-foreground">Learn how to use frames to organize your designs and create responsive layouts</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>What are Frames?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Frames are the containers for your designs in Figma. They represent different screen sizes, 
            artboards, or components of your design. Think of frames as the foundation upon which you 
            build your interface.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Key benefits of using frames:</h3>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Create designs for specific device sizes</li>
              <li>Organize design elements logically</li>
              <li>Enable responsive behavior with constraints</li>
              <li>Define clear boundaries for your design</li>
              <li>Apply background colors and effects at the container level</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Creating Frames</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="frame-tool" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="frame-tool">Frame Tool</TabsTrigger>
              <TabsTrigger value="preset-frames">Preset Frames</TabsTrigger>
            </TabsList>
            
            <TabsContent value="frame-tool" className="space-y-4">
              <div className="mt-4">
                <div className="bg-gray-50 border rounded-md p-4 space-y-4">
                  <h4 className="font-medium">Using the Frame Tool</h4>
                  <ol className="space-y-3 pl-5 list-decimal">
                    <li>
                      Select the Frame tool from the toolbar 
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="ml-1 inline-flex items-center rounded-full bg-figma-purple/10 px-2 py-0.5 text-xs font-medium text-figma-purple">
                            F
                          </TooltipTrigger>
                          <TooltipContent>
                            Press the "F" key shortcut
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    <li>Click and drag on the canvas to create a custom-sized frame</li>
                    <li>Adjust the frame dimensions in the right properties panel</li>
                  </ol>
                  
                  <div className="bg-white border rounded-md p-4 h-40 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <img 
                        src="https://cdn.lovable.dev/?width=400&height=120&url=https%3A%2F%2Fplaceholder.pics%2Fsvg%2F400x120%2FDEDEDE%2F555555%2FFigma%2520Toolbar%2520Interface" 
                        alt="Figma Toolbar" 
                        className="mx-auto max-h-28"
                      />
                      <p className="text-sm text-muted-foreground">Figma Toolbar with Frame Tool highlighted</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preset-frames">
              <div className="mt-4">
                <div className="bg-gray-50 border rounded-md p-4 space-y-4">
                  <h4 className="font-medium">Using Preset Frame Sizes</h4>
                  <p className="text-sm text-muted-foreground">Select from common device dimensions to quickly create properly sized frames.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {frameTypes.map((frameType) => (
                      <Button
                        key={frameType.id}
                        variant="outline"
                        className={`flex flex-col h-24 transition-all ${
                          selectedFrameType === frameType.id ? 'border-figma-purple bg-figma-purple/5' : ''
                        }`}
                        onClick={() => setSelectedFrameType(frameType.id)}
                      >
                        <div className="text-figma-purple mb-1">{frameType.icon}</div>
                        <span>{frameType.name}</span>
                      </Button>
                    ))}
                  </div>
                  
                  <div className="bg-white border rounded p-3">
                    {selectedFrameType === 'mobile' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>iPhone 13 Pro</span>
                          <span className="text-muted-foreground">390 × 844</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>iPhone SE</span>
                          <span className="text-muted-foreground">375 × 667</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Android Small</span>
                          <span className="text-muted-foreground">360 × 640</span>
                        </div>
                      </div>
                    )}
                    
                    {selectedFrameType === 'tablet' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>iPad Pro 11"</span>
                          <span className="text-muted-foreground">834 × 1194</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>iPad</span>
                          <span className="text-muted-foreground">810 × 1080</span>
                        </div>
                      </div>
                    )}
                    
                    {selectedFrameType === 'desktop' && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>MacBook Pro</span>
                          <span className="text-muted-foreground">1440 × 900</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Desktop HD</span>
                          <span className="text-muted-foreground">1920 × 1080</span>
                        </div>
                      </div>
                    )}
                    
                    {selectedFrameType === 'custom' && (
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">Enter custom dimensions:</p>
                        <div className="flex gap-3">
                          <div>
                            <label className="text-xs text-muted-foreground">Width</label>
                            <input type="number" value="800" className="w-full border rounded p-1 text-sm" />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Height</label>
                            <input type="number" value="600" className="w-full border rounded p-1 text-sm" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Frame Constraints</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Constraints determine how elements inside a frame behave when the frame is resized.
            This is crucial for creating responsive designs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Setting Constraints</h4>
              <ol className="space-y-2 pl-5 list-decimal text-sm">
                <li>Select an element inside a frame</li>
                <li>Go to the Constraints section in the right panel</li>
                <li>Choose horizontal and vertical constraints</li>
              </ol>
              
              <div className="mt-4 bg-gray-50 border rounded p-4">
                <h5 className="text-sm font-medium mb-2">Types of Constraints</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Left, Right, Top, Bottom</span>
                    <span className="text-muted-foreground">Pin to edges</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Left and Right, Top and Bottom</span>
                    <span className="text-muted-foreground">Scale with frame</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Center</span>
                    <span className="text-muted-foreground">Stay centered</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Scale</span>
                    <span className="text-muted-foreground">Scale proportionally</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Auto Layout Frames</h4>
              <p className="text-sm mb-3">
                Auto Layout helps you create responsive designs that adapt when content changes.
              </p>
              
              <div className="bg-gray-50 border rounded p-4 space-y-3">
                <h5 className="text-sm font-medium">Creating an Auto Layout Frame</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Select elements</span>
                    <span className="font-mono bg-secondary rounded px-1">Select all</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Apply Auto Layout</span>
                    <span className="font-mono bg-secondary rounded px-1">Shift + A</span>
                  </li>
                </ul>
                
                <div className="bg-white border rounded p-3 mt-2">
                  <h6 className="text-xs font-medium mb-2">Auto Layout Properties:</h6>
                  <div className="flex flex-wrap gap-2">
                    <div className="border rounded px-2 py-1 text-xs bg-gray-50">Direction</div>
                    <div className="border rounded px-2 py-1 text-xs bg-gray-50">Spacing</div>
                    <div className="border rounded px-2 py-1 text-xs bg-gray-50">Padding</div>
                    <div className="border rounded px-2 py-1 text-xs bg-gray-50">Alignment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium mb-3">Practice Activity: Frame Basics</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-figma-purple/5 border border-figma-purple/20 rounded-md p-4">
                <p className="mb-3">Create these frames:</p>
                <ol className="space-y-2 pl-5 list-decimal">
                  <li>A mobile app frame (iPhone 13)</li>
                  <li>A desktop website frame (1440 × 900)</li>
                  <li>A component frame with nested elements</li>
                </ol>
                <div className="mt-4">
                  <img 
                    src="https://cdn.lovable.dev/?width=400&height=200&url=https%3A%2F%2Fplaceholder.pics%2Fsvg%2F400x200%2FDEDEDE%2F555555%2FFrame%2520Examples" 
                    alt="Frame Examples" 
                    className="mx-auto rounded border"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-2">Example frames with different sizes</p>
                </div>
              </div>
              <div className="border rounded-md p-4">
                <h5 className="text-sm font-medium mb-3">Try it yourself:</h5>
                <FigmaEditor />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button asChild size="lg" className="bg-figma-purple hover:bg-figma-purple/90 gap-2">
          <Link to="/shapes">
            Next Session: Shapes
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
