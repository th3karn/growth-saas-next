import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export const clientSchema = z.object({
  name: z.string().min(2, "Client name is required"),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  industry: z.string().optional(),
  timezone: z.string().default("UTC"),
  notes: z.string().optional(),
});

export const postSchema = z.object({
  caption: z.string().min(1, "Caption is required"),
  platform: z.enum(["INSTAGRAM", "FACEBOOK", "TWITTER", "YOUTUBE", "LINKEDIN", "TIKTOK"]),
  hashtags: z.array(z.string()).optional(),
  clientId: z.string().optional(),
  categoryId: z.string().optional(),
  scheduledAt: z.string().optional(),
});

export const supportTicketSchema = z.object({
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("MEDIUM"),
});

export const onboardingSchema = z.object({
  businessType: z.enum(["AGENCY", "FREELANCER", "BUSINESS"]),
  companyName: z.string().min(2, "Company name is required"),
  teamSize: z.string(),
  platforms: z.array(z.string()).min(1, "Select at least one platform"),
  goals: z.array(z.string()).min(1, "Select at least one goal"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type ClientInput = z.infer<typeof clientSchema>;
export type PostInput = z.infer<typeof postSchema>;
export type SupportTicketInput = z.infer<typeof supportTicketSchema>;
export type OnboardingInput = z.infer<typeof onboardingSchema>;
