import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, CheckCircle2, AlertCircle, Search } from "lucide-react";

const Verification = () => {
  const [verificationResult, setVerificationResult] = useState<"pending" | "verified" | "invalid">("pending");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate verification process
    setTimeout(() => {
      setVerificationResult("verified");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 rounded-2xl gradient-hero items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Credential Verification Portal</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instantly verify academic credentials using blockchain-secured records from the 
            immutable EduChain Distributed Ledger Technology
          </p>
        </div>

        <Card className="p-8 mb-6">
          <div className="space-y-6">
            <div>
              <Label htmlFor="credential-id" className="text-base font-semibold">
                Credential ID
              </Label>
              <p className="text-sm text-muted-foreground mb-2">
                Found on the student's degree certificate or transcript
              </p>
              <Input 
                id="credential-id" 
                placeholder="e.g., CERT-ETH-2024-123456"
                className="text-lg"
              />
            </div>

            <div>
              <Label htmlFor="fayda-id" className="text-base font-semibold">
                Student's Fayda ID
              </Label>
              <p className="text-sm text-muted-foreground mb-2">
                National digital identity number for verification
              </p>
              <Input 
                id="fayda-id" 
                placeholder="e.g., FID-1234567890"
                className="text-lg"
              />
            </div>

            <Button 
              onClick={handleVerify} 
              disabled={isLoading}
              size="lg" 
              className="w-full"
            >
              {isLoading ? (
                <>Processing Verification...</>
              ) : (
                <>
                  <Search className="mr-2 h-5 w-5" />
                  Verify Credential
                </>
              )}
            </Button>
          </div>
        </Card>

        {verificationResult === "verified" && (
          <Card className="p-8 border-2 border-verified bg-verified/5">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-full bg-verified/20 flex items-center justify-center flex-shrink-0 border-2 border-verified">
                <CheckCircle2 className="h-8 w-8 text-verified" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-verified mb-2">Credential Verified ✓</h3>
                <p className="text-muted-foreground mb-4">
                  This credential has been verified against the immutable EduChain DLT. 
                  All information below is cryptographically secured.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-lg bg-background border">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Student Name</p>
                    <p className="text-lg font-semibold">Abebe Kebede</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Credential Type</p>
                    <p className="text-lg font-semibold">Bachelor of Science</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Institution</p>
                    <p className="text-lg font-semibold">Addis Ababa University</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Graduation Date</p>
                    <p className="text-lg font-semibold">July 15, 2024</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Field of Study</p>
                    <p className="text-lg font-semibold">Computer Science</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border">
                    <p className="text-sm font-medium text-muted-foreground mb-1">GPA</p>
                    <p className="text-lg font-semibold">3.85 / 4.00</p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-muted/50 border">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-verified" />
                    <p className="font-semibold text-verified">DLT-Anchored Record</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Transaction Hash:</span> 0x7f9a2b8c4e6d1f3a5b7c9d8e2f4a6b8c1d3e5f7a9b2c4d6e8f1a3b5c7d9e2f4a
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="font-medium">Verification Time:</span> {new Date().toLocaleString()}
                  </p>
                </div>

                <Button variant="outline" className="w-full mt-6">
                  Download Verification Certificate
                </Button>
              </div>
            </div>
          </Card>
        )}

        {verificationResult === "invalid" && (
          <Card className="p-8 border-2 border-destructive bg-destructive/5">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 border-2 border-destructive">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-destructive mb-2">Verification Failed</h3>
                <p className="text-muted-foreground">
                  The provided credentials could not be verified in the EduChain DLT. 
                  Please check the Credential ID and Fayda ID for accuracy and try again.
                </p>
                <Button variant="outline" className="mt-4" onClick={() => setVerificationResult("pending")}>
                  Try Again
                </Button>
              </div>
            </div>
          </Card>
        )}

        <Card className="mt-6 p-6 bg-muted/50">
          <h3 className="font-semibold mb-3">How Blockchain Verification Works</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              <span>Every academic credential is cryptographically signed and stored on the EduChain DLT</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              <span>Records are immutable and tamper-proof, eliminating degree fraud</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              <span>Instant verification process - no need to contact institutions</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              <span>Public verification ensures transparency while protecting student privacy</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Verification;
