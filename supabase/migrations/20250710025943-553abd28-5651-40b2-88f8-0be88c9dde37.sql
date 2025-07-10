-- Create contacts table to store contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policies - Allow anyone to insert (public contact form)
CREATE POLICY "Allow public contact form submissions" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading (admin only - can be updated later)
CREATE POLICY "Allow reading contacts for admin" 
ON public.contacts 
FOR SELECT 
USING (false); -- Restrict for now, can be updated when admin auth is implemented

-- Create index for better performance
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX idx_contacts_status ON public.contacts(status);