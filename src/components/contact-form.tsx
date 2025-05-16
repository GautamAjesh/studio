'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Mail, Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg> Processing...</>
      ) : (
        <><Send className="mr-2 h-4 w-4" /> Send Message</>
      )}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: null, errors: {}, success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl">
      <CardHeader className="text-center">
        <Mail className="mx-auto h-12 w-12 text-primary mb-2" />
        <CardTitle className="text-3xl">Get in Touch</CardTitle>
        <CardDescription>
          Have a project in mind or just want to say hi? We'd love to hear from you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
            {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
            {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
            {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
          </div>
          {state.errors?.general && <p className="text-sm text-destructive mt-1">{state.errors.general.join(', ')}</p>}
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
