/*
  # Create admins table

  1. New Tables
    - `admins`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `admins` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own admin data"
  ON admins
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can insert admin data"
  ON admins
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (SELECT user_id FROM admins));

CREATE POLICY "Admins can update admin data"
  ON admins
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM admins));
