// 'use server'
'use server';

/**
 * @fileOverview Extracts keywords from input text for SEO or proposal generation.
 *
 * - extractKeywords - A function that extracts keywords from the input text.
 * - ExtractKeywordsInput - The input type for the extractKeywords function.
 * - ExtractKeywordsOutput - The return type for the extractKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractKeywordsInputSchema = z.object({
  text: z
    .string()
    .describe(
      'The text to extract keywords from (general text, existing website content, or competitor website content).'
    ),
});
export type ExtractKeywordsInput = z.infer<typeof ExtractKeywordsInputSchema>;

const ExtractKeywordsOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('An array of relevant keywords extracted from the text.'),
});
export type ExtractKeywordsOutput = z.infer<typeof ExtractKeywordsOutputSchema>;

export async function extractKeywords(input: ExtractKeywordsInput): Promise<ExtractKeywordsOutput> {
  return extractKeywordsFlow(input);
}

const extractKeywordsPrompt = ai.definePrompt({
  name: 'extractKeywordsPrompt',
  input: {schema: ExtractKeywordsInputSchema},
  output: {schema: ExtractKeywordsOutputSchema},
  prompt: `You are an expert in SEO and keyword extraction.
  Your task is to analyze the given text and extract the most relevant keywords that can be used for SEO optimization or proposal generation.
  Return the keywords as an array of strings.

  Text: {{{text}}}
  `, safetySettings: [
    {
      category: 'HARM_CATEGORY_HATE_SPEECH',
      threshold: 'BLOCK_ONLY_HIGH',
    },
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      threshold: 'BLOCK_NONE',
    },
    {
      category: 'HARM_CATEGORY_HARASSMENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      threshold: 'BLOCK_LOW_AND_ABOVE',
    },
  ],
});

const extractKeywordsFlow = ai.defineFlow(
  {
    name: 'extractKeywordsFlow',
    inputSchema: ExtractKeywordsInputSchema,
    outputSchema: ExtractKeywordsOutputSchema,
  },
  async input => {
    const {output} = await extractKeywordsPrompt(input);
    return output!;
  }
);
