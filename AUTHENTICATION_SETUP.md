# Fayda e-School Authentication Setup

## Overview

The Fayda e-School platform uses **Supabase** for authentication and user management. All user data is securely stored in Supabase with Row Level Security (RLS) policies enabled.

## Database Schema

The authentication system uses a `user_profiles` table with the following structure:

```sql
user_profiles
  - id (uuid, primary key, references auth.users)
  - fayda_id (text, unique, required) - National Fayda ID number
  - role (text, required) - student/parent/teacher/administrator
  - full_name (text, required)
  - email (text, optional)
  - phone (text, optional)
  - school_id (uuid, optional)
  - school_name (text, optional)
  - class_grade (text, optional) - For students
  - subjects (text[], optional) - For teachers
  - created_at (timestamptz)
  - updated_at (timestamptz)
```

## Environment Setup

1. Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

2. The database migration has already been applied through the Supabase MCP tools.

## How It Works

### Login Flow

1. User enters their **Fayda ID Number** (e.g., FID-1234567890)
2. User enters their **password**
3. User selects their **role** (Student, Parent, Teacher, or Administrator)
4. System authenticates using Supabase Auth
5. User is redirected to their role-specific dashboard

### Registration Flow

1. User selects their **role** first
2. User enters their **Fayda ID Number**
3. User fills in profile information:
   - Full Name (required)
   - Phone Number (optional)
   - School Name (required)
   - Class/Grade (for students/parents)
4. User creates a password
5. Account is created in Supabase Auth
6. Profile is stored in `user_profiles` table
7. User is redirected to their role-specific dashboard

## Security Features

### Row Level Security (RLS)

All tables have RLS enabled with the following policies:

- Users can **read** their own profile
- Users can **update** their own profile
- Public **insert** is allowed during registration (secured by Supabase Auth)

### Password Requirements

- Minimum 6 characters (enforced by Supabase Auth)
- Passwords are hashed and never stored in plain text

### Authentication State

- Uses React Context (`AuthContext`) for global state management
- Automatic session management with Supabase
- Protected routes prevent unauthorized access
- Role-based access control for dashboards

## Usage in Components

### Using the Auth Context

```typescript
import { useAuth } from "@/contexts/AuthContext";

function MyComponent() {
  const { user, profile, signIn, signOut } = useAuth();

  // Access current user
  console.log(user?.id);

  // Access user profile
  console.log(profile?.role);
  console.log(profile?.full_name);

  // Sign in
  await signIn(faydaId, password);

  // Sign out
  await signOut();
}
```

### Protected Routes

Dashboard routes are automatically protected:

```typescript
<Route
  path="/dashboard/student"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>
```

## Role-Based Dashboards

After successful login/registration, users are automatically redirected to their role-specific dashboard:

- **Student** → `/dashboard/student`
- **Parent** → `/dashboard/parent`
- **Teacher** → `/dashboard/teacher`
- **Administrator** → `/dashboard/admin`

## Testing the System

### Test Accounts

You can create test accounts using the registration page at `/register`.

### Sample Test Flow

1. Navigate to `/register`
2. Select role: "Student"
3. Enter Fayda ID: "FID-TEST123"
4. Fill in profile:
   - Full Name: "Test Student"
   - School Name: "Test School"
   - Class/Grade: "Grade 10A"
5. Create password: "test123"
6. Click "Create Account"
7. You'll be redirected to `/dashboard/student`

## Troubleshooting

### "Missing Supabase environment variables" Error

- Ensure `.env` file exists in project root
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- Restart the development server after adding environment variables

### "Login Failed" Error

- Verify the Fayda ID and password are correct
- Check that the user account exists in Supabase
- Ensure the database migration was applied successfully

### Users Can't Access Dashboard

- Verify the user's role in the database
- Check that the `user_profiles` table has the correct data
- Ensure RLS policies are enabled

## Database Queries

### Get all users by role

```sql
SELECT * FROM user_profiles WHERE role = 'student';
```

### Get user by Fayda ID

```sql
SELECT * FROM user_profiles WHERE fayda_id = 'FID-1234567890';
```

### Update user profile

```sql
UPDATE user_profiles
SET full_name = 'New Name', updated_at = now()
WHERE id = 'user-uuid';
```

## Next Steps

- Implement password reset functionality
- Add email verification
- Implement two-factor authentication
- Add session timeout management
- Create admin panel for user management
