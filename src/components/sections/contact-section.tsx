'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactSection() {
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(handleContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Oops!",
          description: state.message,
        });
      }
    }
  }, [state, toast]);


  return (
    <section id="contact" className="container pb-20 md:pb-32">
      <Card className="mx-auto max-w-2xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl sm:text-4xl">Contact Me</CardTitle>
          <CardDescription className="text-lg">
            Have a question or want to work together? Drop me a line!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required aria-describedby="name-error" />
              <div id="name-error" aria-live="polite" aria-atomic="true">
                {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required aria-describedby="email-error" />
              <div id="email-error" aria-live="polite" aria-atomic="true">
                {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message here..." required minLength={10} aria-describedby="message-error" />
              <div id="message-error" aria-live="polite" aria-atomic="true">
                {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
              </div>
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
