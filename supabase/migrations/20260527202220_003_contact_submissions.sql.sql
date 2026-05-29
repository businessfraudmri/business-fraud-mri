/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `company` (text)
      - `phone` (text)
      - `subject` (text)
      - `message` (text, not null)
      - `created_at` (timestamp)
      - `email_sent` (boolean, default false)
      - `reply_sent` (boolean, default false)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Policies for authenticated users only (edge functions use service role)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false,
  reply_sent boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow service role to do everything (for edge functions)
CREATE POLICY "Service role has full access"
  ON contact_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
