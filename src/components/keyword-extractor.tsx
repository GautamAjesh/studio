'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2, AlertCircle, Search } from 'lucide-react';
import { handleExtractKeywords, type KeywordExtractorState } from '@/app/actions';

export function KeywordExtractor() {
  const [inputText, setInputText] = useState<string>('');
  const [result, setResult] = useState<KeywordExtractorState>({ keywords: null, error: null, isLoading: false });
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(async () => {
      setResult(prev => ({ ...prev, isLoading: true, error: null, keywords: null }));
      const R = await handleExtractKeywords(inputText);
      setResult(R);
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader className="text-center">
        <Lightbulb className="mx-auto h-12 w-12 text-primary mb-2" />
        <CardTitle className="text-3xl">Smart Keyword Extractor</CardTitle>
        <CardDescription>
          Paste your content (e.g., website text, competitor info) to discover relevant keywords for SEO and proposals.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <Textarea
            placeholder="Enter text here to extract keywords..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={8}
            className="text-base"
            disabled={isPending || result.isLoading}
          />
          <Button type="submit" disabled={isPending || result.isLoading || !inputText.trim()} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isPending || result.isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Extracting Keywords...
              </>
            ) : (
              <>
              <Search className="mr-2 h-4 w-4" />
              Extract Keywords
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {(result.keywords || result.error) && (
        <CardFooter className="flex flex-col items-start space-y-4 pt-6">
          {result.error && (
            <Alert variant="destructive" className="w-full">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{result.error}</AlertDescription>
            </Alert>
          )}
          {result.keywords && result.keywords.length > 0 && (
            <div className="w-full">
              <h4 className="text-lg font-semibold mb-2 text-primary">Extracted Keywords:</h4>
              <div className="flex flex-wrap gap-2">
                {result.keywords.map((keyword, index) => (
                  <Badge key={index} variant="default" className="text-sm px-3 py-1 shadow-sm">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {result.keywords && result.keywords.length === 0 && !result.error && (
             <Alert className="w-full">
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>No Keywords Found</AlertTitle>
              <AlertDescription>The AI could not extract specific keywords from the provided text. Try a different or more detailed text.</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
