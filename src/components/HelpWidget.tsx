
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { HelpCircle, X, Search } from 'lucide-react';

export function HelpWidget() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  const shortcuts = [
    { key: "F", description: "Frame tool" },
    { key: "R", description: "Rectangle tool" },
    { key: "T", description: "Text tool" },
    { key: "⌘/Ctrl + Z", description: "Undo" },
    { key: "⌘/Ctrl + G", description: "Group selection" },
  ];
  
  const showToast = () => {
    toast({
      title: "Help is on the way!",
      description: "Check your email for more Figma resources",
    });
  };
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg bg-figma-purple hover:bg-figma-purple/90 text-white"
          size="icon"
        >
          <HelpCircle size={24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end" alignOffset={-20} forceMount>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-lg">Figma Help</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search for help..." 
              className="w-full rounded-md py-2 pl-8 pr-3 border border-input bg-background"
            />
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Keyboard Shortcuts</h4>
            <div className="space-y-1.5">
              {shortcuts.map((shortcut, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="font-mono bg-secondary rounded px-2 py-1">{shortcut.key}</span>
                  <span className="text-muted-foreground">{shortcut.description}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t pt-3">
            <Button 
              onClick={() => {
                showToast();
                setIsOpen(false);
              }}
              className="w-full"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
