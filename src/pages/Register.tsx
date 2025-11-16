import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Shield, CheckCircle2, Loader2, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { UserRole } from "@/lib/supabase";

const Register = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [faydaId, setFaydaId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [classGrade, setClassGrade] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const { toast } = useToast();

  const handleStepOne = (e: React.FormEvent) => {
    e.preventDefault();
    if (faydaId.trim().length < 5) {
      toast({
        title: "Invalid Fayda ID",
        description: "Please enter a valid Fayda ID number.",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await signUp(faydaId, password, {
        role: selectedRole,
        full_name: fullName,
        phone,
        school_name: schoolName,
        class_grade: classGrade,
      });

      toast({
        title: "Registration Successful",
        description: `Welcome to Fayda e-School! Redirecting to your ${selectedRole} dashboard...`,
      });
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred during registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 rounded-2xl gradient-hero items-center justify-center mb-4">
            <UserPlus className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Register for Fayda e-School</h1>
          <p className="text-muted-foreground">
            Create your account on Ethiopia's national education platform
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleStepOne} className="space-y-6">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-success mb-1">Secure National Authentication</p>
                <p className="text-muted-foreground">
                  Register with your verified Fayda Digital ID
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Select Your Role</Label>
              <RadioGroup value={selectedRole} onValueChange={(value) => setSelectedRole(value as UserRole)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student" className="flex-1 cursor-pointer">Student</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="parent" id="parent" />
                  <Label htmlFor="parent" className="flex-1 cursor-pointer">Parent</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="teacher" id="teacher" />
                  <Label htmlFor="teacher" className="flex-1 cursor-pointer">Teacher</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="administrator" id="administrator" />
                  <Label htmlFor="administrator" className="flex-1 cursor-pointer">Administrator</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="faydaId">Fayda ID Number</Label>
              <Input
                id="faydaId"
                type="text"
                placeholder="Enter your Fayda ID (e.g., FID-1234567890)"
                value={faydaId}
                onChange={(e) => setFaydaId(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Your unique national digital identity number
              </p>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Continue
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Login here
              </Link>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/50 border">
              <p className="text-sm text-muted-foreground mb-1">Role & Fayda ID</p>
              <p className="font-semibold capitalize">{selectedRole}</p>
              <p className="text-sm">{faydaId}</p>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setStep(1)}
                className="mt-2 h-auto p-0 text-xs"
              >
                Change Role or Fayda ID
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+251 9XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schoolName">School Name</Label>
                <Input
                  id="schoolName"
                  type="text"
                  placeholder="Enter your school name"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  required
                />
              </div>

              {(selectedRole === "student" || selectedRole === "parent") && (
                <div className="space-y-2">
                  <Label htmlFor="classGrade">Class/Grade</Label>
                  <Input
                    id="classGrade"
                    type="text"
                    placeholder="e.g., Grade 10A"
                    value={classGrade}
                    onChange={(e) => setClassGrade(e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Create Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Minimum 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-5 w-5" />
                  Create Account
                </>
              )}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
};

export default Register;
