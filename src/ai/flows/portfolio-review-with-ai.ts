// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview Provides AI-powered review of portfolio content.
 *
 * - portfolioReview - A function that accepts portfolio content and returns suggestions for improvement.
 * - PortfolioReviewInput - The input type for the portfolioReview function.
 * - PortfolioReviewOutput - The return type for the portfolioReview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioReviewInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The complete content of the portfolio website as a single string.'),
});
export type PortfolioReviewInput = z.infer<typeof PortfolioReviewInputSchema>;

const PortfolioReviewOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-generated suggestions for improving the portfolio content and presentation.'),
});
export type PortfolioReviewOutput = z.infer<typeof PortfolioReviewOutputSchema>;

export async function portfolioReview(input: PortfolioReviewInput): Promise<PortfolioReviewOutput> {
  return portfolioReviewFlow(input);
}

const portfolioReviewPrompt = ai.definePrompt({
  name: 'portfolioReviewPrompt',
  input: {schema: PortfolioReviewInputSchema},
  output: {schema: PortfolioReviewOutputSchema},
  prompt: `You are an AI portfolio review assistant. You will be given the content of a portfolio, and you will provide suggestions on how to improve the portfolio's content and presentation.

Portfolio Content: {{{portfolioContent}}}

Suggestions:`,
});

const portfolioReviewFlow = ai.defineFlow(
  {
    name: 'portfolioReviewFlow',
    inputSchema: PortfolioReviewInputSchema,
    outputSchema: PortfolioReviewOutputSchema,
  },
  async input => {
    const {output} = await portfolioReviewPrompt(input);
    return output!;
  }
);
