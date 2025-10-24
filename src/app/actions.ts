'use server';

import { z } from 'zod';
import { portfolioData } from '@/data/portfolio-data';
import { portfolioReview } from '@/ai/flows/portfolio-review-with-ai';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
      success: false
    };
  }
  
  // In a real application, you would send an email here.
  // For this demo, we'll just log the data.
  console.log('New contact form submission:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    errors: {},
    success: true
  };
}


export async function getPortfolioReviewAction() {
  try {
    const content = `
      Name: ${portfolioData.name}
      Headline: ${portfolioData.headline}
      About: ${portfolioData.about}
      
      Skills: ${portfolioData.skills.map(skill => skill.name).join(', ')}
      
      Projects:
      ${portfolioData.projects.map(p => `
        - Project Title: ${p.title}
          Description: ${p.description}
          Technologies: ${p.tags.join(', ')}
      `).join('\n\n')}
    `;
    
    const result = await portfolioReview({ portfolioContent: content });
    
    return { success: true, suggestions: result.suggestions };
  } catch (error) {
    console.error("AI review failed:", error);
    return { success: false, error: "An error occurred while getting the AI review. Please try again later." };
  }
}
