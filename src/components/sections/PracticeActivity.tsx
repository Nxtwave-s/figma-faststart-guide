
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Layers, Eye, EyeOff, Lock, Unlock } from 'lucide-react';

export function PracticeActivity() {
  const [visibleLayers, setVisibleLayers] = useState<string[]>(["background", "button", "text", "icon"]);
  const [lockedLayers, setLockedLayers] = useState<string[]>(["background"]);
  
  const toggleLayerVisibility = (layerId: string) => {
    if (visibleLayers.includes(layerId)) {
      setVisibleLayers(visibleLayers.filter(id => id !== layerId));
    } else {
      setVisibleLayers([...visibleLayers, layerId]);
    }
  };
  
  const toggleLayerLock = (layerId: string) => {
    if (lockedLayers.includes(layerId)) {
      setLockedLayers(lockedLayers.filter(id => id !== layerId));
    } else {
      setLockedLayers([...lockedLayers, layerId]);
    }
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          <span className="figma-gradient">Practice Activity: Layer Management</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Apply your knowledge by practicing layer organization and manipulation techniques.
        </p>
      </div>
      
      <Card className="p-6 bg-accent/50">
        <h2 className="text-2xl font-bold mb-4">🔀 Layer Management Activity</h2>
        <p className="mb-6">
          In this practice activity, you'll work with layers to understand visibility, locking, and organization. 
          Try toggling layer visibility and lock status to see how it affects the design.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="col-span-1 bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Layers className="mr-2 h-5 w-5 text-figma-purple" />
              Layer Panel
            </h3>
            
            <ul className="space-y-2">
              <li className={`border p-2 rounded-md flex justify-between items-center ${lockedLayers.includes("background") ? "bg-gray-50" : ""}`}>
                <span>Background</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => toggleLayerVisibility("background")}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {visibleLayers.includes("background") ? 
                      <Eye className="h-4 w-4" /> : 
                      <EyeOff className="h-4 w-4" />
                    }
                  </button>
                  <button 
                    onClick={() => toggleLayerLock("background")}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {lockedLayers.includes("background") ? 
                      <Lock className="h-4 w-4" /> : 
                      <Unlock className="h-4 w-4" />
                    }
                  </button>
                </div>
              </li>
              <li className={`border p-2 rounded-md flex justify-between items-center ${lockedLayers.includes("button") ? "bg-gray-50" : ""}`}>
                <span>Button</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => toggleLayerVisibility("button")}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {visibleLayers.includes("button") ? 
                      <Eye className="h-4 w-4" /> : 
                      <EyeOff className="h-4 w-4" />
                    }
                  </button>
                  <button 
                    onClick={() => toggleLayerLock("button")}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {lockedLayers.includes("button") ? 
                      <Lock className="h-4 w-4" /> : 
                      <Unlock className="h-4 w-4" />
                    }
                  </button>
                </div>
              </li>
              <li className={`border p-2 rounded-md flex justify-between items-center ${lockedLayers.includes("text") ? "bg-gray-50" : ""}`}>
                <span>Text</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => toggleLayerVisibility("text")}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {visibleLayers.includes("text") ? 
                      <Eye className="h-4 w-4" /> : 
                      <EyeOff className="h-4 w-4" />
                    }
                  </button>
                  <button 
                    onClick={() => toggleLayerLock("text")}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {lockedLayers.includes("text") ? 
                      <Lock className="h-4 w-4" /> : 
                      <Unlock className="h-4 w-4" />
                    }
                  </button>
                </div>
              </li>
              <li className={`border p-2 rounded-md flex justify-between items-center ${lockedLayers.includes("icon") ? "bg-gray-50" : ""}`}>
                <span>Icon</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => toggleLayerVisibility("icon")}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {visibleLayers.includes("icon") ? 
                      <Eye className="h-4 w-4" /> : 
                      <EyeOff className="h-4 w-4" />
                    }
                  </button>
                  <button 
                    onClick={() => toggleLayerLock("icon")}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {lockedLayers.includes("icon") ? 
                      <Lock className="h-4 w-4" /> : 
                      <Unlock className="h-4 w-4" />
                    }
                  </button>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2 border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 flex justify-between border-b">
              <span className="text-sm font-medium">Preview Canvas</span>
              <span className="text-xs text-muted-foreground">Try toggling layers to see the effect</span>
            </div>
            
            <div className="relative h-80 bg-white">
              {/* Background Layer */}
              {visibleLayers.includes("background") && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
              )}
              
              {/* Button Layer */}
              {visibleLayers.includes("button") && (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-figma-purple rounded-lg w-48 h-12 flex items-center justify-center">
                    {/* Text Layer */}
                    {visibleLayers.includes("text") && (
                      <span className="text-white font-medium">Get Started</span>
                    )}
                    
                    {/* Icon Layer */}
                    {visibleLayers.includes("icon") && (
                      <ArrowRight className="ml-2 h-4 w-4 text-white" />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="tips">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tips">Layer Tips</TabsTrigger>
            <TabsTrigger value="keyboard">Keyboard Shortcuts</TabsTrigger>
            <TabsTrigger value="organization">Organization</TabsTrigger>
          </TabsList>
          <TabsContent value="tips" className="p-4 bg-white rounded-lg mt-2">
            <h4 className="font-medium text-figma-purple mb-2">Layer Management Tips</h4>
            <ul className="space-y-1 text-sm">
              <li>• Group related layers to keep your file organized</li>
              <li>• Use descriptive names for easy identification</li>
              <li>• Lock background elements to prevent accidental moves</li>
              <li>• Toggle visibility to focus on specific parts of your design</li>
            </ul>
          </TabsContent>
          <TabsContent value="keyboard" className="p-4 bg-white rounded-lg mt-2">
            <h4 className="font-medium text-figma-purple mb-2">Useful Shortcuts</h4>
            <ul className="space-y-1 text-sm">
              <li>• <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Cmd/Ctrl + G</kbd> - Group layers</li>
              <li>• <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Cmd/Ctrl + Shift + G</kbd> - Ungroup layers</li>
              <li>• <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Cmd/Ctrl + [</kbd> - Send backward</li>
              <li>• <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Cmd/Ctrl + ]</kbd> - Bring forward</li>
            </ul>
          </TabsContent>
          <TabsContent value="organization" className="p-4 bg-white rounded-lg mt-2">
            <h4 className="font-medium text-figma-purple mb-2">Layer Organization</h4>
            <ul className="space-y-1 text-sm">
              <li>• Use consistent naming conventions</li>
              <li>• Create a logical hierarchy</li>
              <li>• Organize by function or component</li>
              <li>• Color code layer groups for visual distinction</li>
            </ul>
          </TabsContent>
        </Tabs>
      </Card>
      
      <div className="flex justify-center">
        <Button size="lg" className="bg-figma-purple hover:bg-figma-purple/90 gap-2">
          Complete Practice Activity
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
