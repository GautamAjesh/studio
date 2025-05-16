// 'use server'
'use server';

import { z } from 'zod';
import { extractKeywords as extractKeywordsFlow, type ExtractKeywordsInput, type ExtractKeywordsOutput } from '@/ai/flows/extract-keywords';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export interface ContactFormState {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    general?: string[];
  };
  success: boolean;
}

export async function submitContactForm(
  prevState: ContactFormState, 
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    // In a real app, you'd send an email or save to a database here
    console.log('Contact form submitted:', validatedFields.data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Thank you for your message! We will get back to you soon.',
      errors: {},
      success: true,
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      errors: { general: ['An unexpected error occurred.'] },
      success: false,
    };
  }
}


export interface KeywordExtractorState {
  keywords: string[] | null;
  error: string | null;
  isLoading: boolean;
}

export async function handleExtractKeywords(text: string): Promise<KeywordExtractorState> {
  if (!text.trim()) {
    return { keywords: null, error: 'Input text cannot be empty.', isLoading: false };
  }

  try {
    const input: ExtractKeywordsInput = { text };
    const result: ExtractKeywordsOutput = await extractKeywordsFlow(input);
    return { keywords: result.keywords, error: null, isLoading: false };
  } catch (e) {
    console.error('Error extracting keywords:', e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { keywords: null, error: `Failed to extract keywords: ${errorMessage}`, isLoading: false };
  }
}
