'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { getPortfolioReviewAction } from '@/app/actions';
import { Bot, Loader2 } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

export function AIReview() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState<{ success: boolean; suggestions?: string; error?: string } | null>(null);

  const handleReview = async () => {
    setIsOpen(true);
    if (review) return; // Don't re-fetch if we already have a review
    setIsLoading(true);
    const result = await getPortfolioReviewAction();
    setReview(result);
    setIsLoading(false);
  };

  return (
    <>
      <Button onClick={handleReview} variant="outline" size="sm">
        <Bot className="mr-2 h-4 w-4" />
        AI Review
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-headline text-2xl flex items-center gap-2">
              <Bot className="h-6 w-6" /> AI Portfolio Review
            </SheetTitle>
            <SheetDescription>
              AI-generated suggestions to improve your portfolio.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-[calc(100%-150px)] my-4 pr-4">
            <div className="p-4 rounded-md border bg-muted/50 min-h-[100px]">
              {isLoading && (
                <div className="flex items-center justify-center p-8 gap-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-muted-foreground">Analyzing portfolio...</p>
                </div>
              )}
              {review?.success && review.suggestions && (
                <div
                  className="whitespace-pre-wrap text-sm"
                >
                  {review.suggestions}
                </div>
              )}
              {review?.error && (
                <div className="text-destructive p-4">
                  <p className="font-semibold">An error occurred:</p>
                  <p>{review.error}</p>
                </div>
              )}
            </div>
          </ScrollArea>
          <SheetFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
