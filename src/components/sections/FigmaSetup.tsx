
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function FigmaSetup() {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const { toast } = useToast();
  
  const showSignupToast = () => {
    toast({
      title: "Opening Figma website",
      description: "Redirecting to figma.com in a new tab",
      duration: 3000,
    });
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2">
          Figma Setup
          <span className="ml-2 inline-flex items-center rounded-full bg-figma-purple/10 px-2.5 py-0.5 text-xs font-medium text-figma-purple">
            Getting Started
          </span>
        </h2>
        <p className="text-muted-foreground">Everything you need to know to set up your Figma account and workspace</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-figma-blue/20">
          <CardHeader className="bg-figma-blue/5 border-b">
            <CardTitle>Creating Your Account</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="space-y-4 list-decimal pl-5">
              <li>
                <p className="font-medium">Navigate to Figma's website</p>
                <p className="text-sm text-muted-foreground">Open your browser and go to 
                  <Button 
                    variant="link" 
                    className="px-1 text-figma-blue"
                    onClick={() => {
                      window.open('https://www.figma.com/', '_blank');
                      showSignupToast();
                    }}
                  >
                    figma.com
                  </Button>
                </p>
              </li>
              <li>
                <p className="font-medium">Sign up for a free account</p>
                <Button 
                  variant="outline" 
                  className="mt-2 text-figma-blue hover:bg-figma-blue/5 hover:border-figma-blue/20"
                  onClick={() => setShowCreateAccount(!showCreateAccount)}
                >
                  {showCreateAccount ? "Hide Steps" : "Show Steps"}
                </Button>
                
                {showCreateAccount && (
                  <div className="mt-3 pl-3 border-l-2 border-figma-blue/20 space-y-1">
                    <p className="text-sm">• Click the "Sign up" button</p>
                    <p className="text-sm">• Enter your email or sign up with Google</p>
                    <p className="text-sm">• Follow the prompts to complete your account setup</p>
                    <div className="mt-3 bg-gray-100 rounded p-3">
                      <div className="text-xs text-muted-foreground text-center">
                        Account creation interface animation
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ol>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Navigating the Figma Interface</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Once you've signed in, you'll see the Figma dashboard. This is where all your files and projects live.</p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="create-file">
                <AccordionTrigger>Creating a new design file</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    <p>In the top-right corner of the File Browser, click on the <strong>"New design file"</strong> button.</p>
                    <p>This action will open a new, untitled design file where you can begin your work.</p>
                    <div className="bg-gray-100 h-24 flex items-center justify-center rounded-md mt-2">
                      <span className="text-xs text-muted-foreground">New file creation interface</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="editor-interface">
                <AccordionTrigger>Understanding the Editor Interface</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <span className="font-medium text-figma-purple">Toolbar:</span> The vertical bar on the left with the main design tools
                    </li>
                    <li>
                      <span className="font-medium text-figma-purple">Canvas:</span> The main working area in the center
                    </li>
                    <li>
                      <span className="font-medium text-figma-purple">Layers Panel:</span> On the left sidebar, showing all elements in your design
                    </li>
                    <li>
                      <span className="font-medium text-figma-purple">Properties Panel:</span> On the right, showing properties of selected elements
                    </li>
                    <li>
                      <span className="font-medium text-figma-purple">Assets Panel:</span> Also on the right, containing your styles and components
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Essential Navigation and Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Zooming</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between">
                  <span>Zoom in:</span>
                  <span className="font-mono bg-secondary rounded px-1">Scroll up</span>
                </li>
                <li className="flex justify-between">
                  <span>Zoom out:</span>
                  <span className="font-mono bg-secondary rounded px-1">Scroll down</span>
                </li>
                <li className="flex justify-between">
                  <span>Zoom to fit:</span>
                  <span className="font-mono bg-secondary rounded px-1">Shift + 1</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Panning</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between">
                  <span>Move canvas:</span>
                  <span className="font-mono bg-secondary rounded px-1">Spacebar + drag</span>
                </li>
                <li className="flex justify-between">
                  <span>Alternative:</span>
                  <span className="font-mono bg-secondary rounded px-1">Middle mouse</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Selecting</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between">
                  <span>Single object:</span>
                  <span className="font-mono bg-secondary rounded px-1">Click</span>
                </li>
                <li className="flex justify-between">
                  <span>Multiple objects:</span>
                  <span className="font-mono bg-secondary rounded px-1">Shift + click</span>
                </li>
                <li className="flex justify-between">
                  <span>Selection box:</span>
                  <span className="font-mono bg-secondary rounded px-1">Click + drag</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <h4 className="text-amber-800 font-medium mb-2">Quick Tips for Beginners</h4>
            <ul className="space-y-2 text-sm text-amber-800">
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Autosave:</strong> Figma automatically saves your work, so you don't need to worry about losing progress</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Keyboard Shortcuts:</strong> Press Ctrl/Cmd + ? to see all keyboard shortcuts</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Help Resources:</strong> Click on the "?" in the top-right corner for tutorials and documentation</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
