import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Shield, CheckCircle2, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { UserRole } from "@/lib/supabase";

const Login = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [faydaId, setFaydaId] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { toast } = useToast();

  const handleFaydaIdSubmit = (e: React.FormEvent) => {
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(faydaId, password);
      toast({
        title: "Login Successful",
        description: `Welcome back! Redirecting to your ${selectedRole} dashboard...`,
      });
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid credentials. Please try again.",
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
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Login to Fayda e-School</h1>
          <p className="text-muted-foreground">
            Secure access to Ethiopia's national education platform
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleFaydaIdSubmit} className="space-y-6">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-success mb-1">Secure National Authentication</p>
                <p className="text-muted-foreground">
                  Login with your verified Fayda Digital ID
                </p>
              </div>
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
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline font-medium">
                Register here
              </Link>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/50 border">
              <p className="text-sm text-muted-foreground mb-1">Fayda ID</p>
              <p className="font-semibold">{faydaId}</p>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setStep(1)}
                className="mt-2 h-auto p-0 text-xs"
              >
                Change Fayda ID
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-5 w-5" />
                  Sign In
                </>
              )}
            </Button>

            <div className="text-center">
              <Button
                type="button"
                variant="link"
                size="sm"
                className="text-muted-foreground"
              >
                Forgot Password?
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
};

export default Login;
