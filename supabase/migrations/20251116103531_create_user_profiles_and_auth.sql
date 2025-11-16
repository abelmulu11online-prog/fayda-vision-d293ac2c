/*
  # Create User Profiles and Authentication System

  1. New Tables
    - `user_profiles`
      - `id` (uuid, primary key, references auth.users)
      - `fayda_id` (text, unique, required) - National Fayda ID number
      - `role` (text, required) - student/parent/teacher/administrator
      - `full_name` (text, required)
      - `email` (text, optional)
      - `phone` (text, optional)
      - `school_id` (uuid, optional) - For linking to schools
      - `school_name` (text, optional)
      - `class_grade` (text, optional) - For students
      - `subjects` (text[], optional) - For teachers
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `user_profiles` table
    - Add policies for authenticated users to read/update their own data
    - Add policy for public registration (insert)
*/

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  fayda_id text UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN ('student', 'parent', 'teacher', 'administrator')),
  full_name text NOT NULL,
  email text,
  phone text,
  school_id uuid,
  school_name text,
  class_grade text,
  subjects text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own profile
CREATE POLICY "Users can read own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policy: Allow public registration (insert during signup)
CREATE POLICY "Allow public registration"
  ON user_profiles
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create index on fayda_id for fast lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_fayda_id ON user_profiles(fayda_id);

-- Create index on role for filtering
CREATE INDEX IF NOT EXISTS idx_user_profiles_role ON user_profiles(role);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();