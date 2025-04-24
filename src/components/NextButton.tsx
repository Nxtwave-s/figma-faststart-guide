
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface NextButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export function NextButton({ href, className, label = "Next Session" }: NextButtonProps) {
  return (
    <Button
      asChild
      variant="default"
      className={cn(
        "fixed bottom-4 right-4 z-50 shadow-lg hover:shadow-xl",
        "bg-figma-green hover:bg-figma-green/90",
        className
      )}
    >
      <Link to={href}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
}
