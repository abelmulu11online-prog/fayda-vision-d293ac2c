import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Shield, 
  CheckCircle2,
  Download,
  Share2,
  Calendar
} from "lucide-react";

const PublicPortfolio = () => {
  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container max-w-4xl">
        {/* Verification Banner */}
        <Card className="p-6 mb-8 border-2 border-verified bg-verified/5">
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-full bg-verified/20 flex items-center justify-center flex-shrink-0 border-2 border-verified">
              <Shield className="h-7 w-7 text-verified" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-bold text-verified">Blockchain-Verified Academic Portfolio</h2>
                <div className="verified-badge">
                  <CheckCircle2 className="h-4 w-4" />
                  DLT-Secured
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                This portfolio is cryptographically secured on the EduChain Distributed Ledger Technology. 
                All credentials are tamper-proof and instantly verifiable by employers worldwide.
              </p>
            </div>
          </div>
        </Card>

        {/* Student Profile */}
        <Card className="p-8 mb-6">
          <div className="flex items-start gap-6 mb-8">
            <div className="h-24 w-24 rounded-full gradient-hero flex items-center justify-center text-primary-foreground text-3xl font-bold flex-shrink-0">
              AK
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Abebe Kebede</h1>
              <p className="text-lg text-muted-foreground mb-3">
                Bachelor of Science in Computer Science
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-primary border-primary">
                  <GraduationCap className="h-3 w-3 mr-1" />
                  Graduated 2024
                </Badge>
                <Badge variant="outline" className="text-verified border-verified">
                  <Shield className="h-3 w-3 mr-1" />
                  Fayda ID Verified
                </Badge>
                <Badge variant="outline">
                  Portfolio ID: PORT-ETH-2024-12345
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground mb-1">Institution</p>
              <p className="font-semibold">Addis Ababa University</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground mb-1">Graduation Date</p>
              <p className="font-semibold">July 15, 2024</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground mb-1">Final GPA</p>
              <p className="font-semibold text-2xl text-success">3.85/4.00</p>
            </div>
          </div>
        </Card>

        {/* Verified Credentials */}
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Verified Academic Credentials
          </h2>

          <div className="space-y-4">
            {/* Bachelor's Degree */}
            <Card className="p-5 border-2 border-verified/30 bg-verified/5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                    <div className="verified-badge text-xs">
                      <CheckCircle2 className="h-3 w-3" />
                      Verified
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Addis Ababa University • College of Natural and Computational Sciences
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Graduated:</span>
                      <span className="font-medium ml-2">July 15, 2024</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">GPA:</span>
                      <span className="font-medium ml-2 text-success">3.85/4.00</span>
                    </div>
                  </div>
                </div>
                <Award className="h-12 w-12 text-verified" />
              </div>

              <div className="p-3 rounded-lg bg-background border border-verified/20">
                <p className="text-xs text-muted-foreground mb-1">Blockchain Verification Hash</p>
                <p className="text-xs font-mono break-all">
                  0x7f9a2b8c4e6d1f3a5b7c9d8e2f4a6b8c1d3e5f7a9b2c4d6e8f1a3b5c7d9e2f4a
                </p>
              </div>
            </Card>

            {/* High School Diploma */}
            <Card className="p-5 border">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">High School Diploma</h3>
                    <div className="verified-badge text-xs">
                      <CheckCircle2 className="h-3 w-3" />
                      Verified
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Addis Ababa University Preparatory School
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Graduated:</span>
                      <span className="font-medium ml-2">June 10, 2020</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">GPA:</span>
                      <span className="font-medium ml-2 text-success">3.92/4.00</span>
                    </div>
                  </div>
                </div>
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>

              <div className="p-3 rounded-lg bg-muted/50 border">
                <p className="text-xs text-muted-foreground mb-1">Blockchain Verification Hash</p>
                <p className="text-xs font-mono break-all">
                  0x3c5d7e9f1a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d
                </p>
              </div>
            </Card>
          </div>
        </Card>

        {/* Academic Highlights */}
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-6">Academic Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm font-medium text-muted-foreground mb-2">Major Coursework</p>
              <ul className="space-y-1 text-sm">
                <li>• Data Structures & Algorithms</li>
                <li>• Software Engineering</li>
                <li>• Database Management Systems</li>
                <li>• Computer Networks</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm font-medium text-muted-foreground mb-2">Honors & Awards</p>
              <ul className="space-y-1 text-sm">
                <li>• Dean's List (All Semesters)</li>
                <li>• Academic Excellence Award 2024</li>
                <li>• Computer Science Department Honor</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Verification Instructions for Employers */}
        <Card className="p-6 bg-muted/50">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            For Employers: How to Verify This Portfolio
          </h3>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <span>Visit the official FES Credential Verification Portal at verification.fayda-eschool.gov.et</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <span>Enter the Credential ID shown on each degree certificate</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <span>Enter the student's Fayda ID: FID-9876543210</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">4.</span>
              <span>Receive instant blockchain-verified confirmation of authenticity</span>
            </li>
          </ol>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <Button className="flex-1" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download Portfolio PDF
          </Button>
          <Button variant="outline" className="flex-1" size="lg">
            <Share2 className="mr-2 h-5 w-5" />
            Share Portfolio Link
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 p-4 rounded-lg bg-muted/30 border text-center">
          <p className="text-sm text-muted-foreground">
            Generated via Fayda e-School • <Calendar className="inline h-3 w-3 mb-0.5" /> December 12, 2024 • 
            Portfolio will automatically update with new credentials
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicPortfolio;
