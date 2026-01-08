/*
  # Create Reading List Table

  1. New Tables
    - `reading_list`
      - `id` (uuid, primary key)
      - `title` (text, book title)
      - `author` (text, book author)
      - `progress` (integer, reading progress percentage 0-100)
      - `status` (text, 'currently_reading', 'completed', 'want_to_read')
      - `notes` (text, personal notes about the book)
      - `cover_url` (text, book cover image URL)
      - `started_date` (date, when started reading)
      - `completed_date` (date, when completed reading)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `reading_list` table
    - Add policy for public read access (since this is a portfolio site)
*/

CREATE TABLE IF NOT EXISTS reading_list (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text NOT NULL,
  progress integer DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  status text DEFAULT 'want_to_read' CHECK (status IN ('currently_reading', 'completed', 'want_to_read')),
  notes text DEFAULT '',
  cover_url text DEFAULT '',
  started_date date,
  completed_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reading_list ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reading list"
  ON reading_list
  FOR SELECT
  USING (true);