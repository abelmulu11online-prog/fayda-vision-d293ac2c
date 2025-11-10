import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PackageFeatures, PackageType, isFeatureAvailable } from "@/components/PackageFeatures";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  TrendingUp,
  Share2,
  Download,
  CheckCircle2,
  Clock,
  MessageSquare,
  Settings,
  Shield
} from "lucide-react";

const StudentDashboard = () => {
  const { toast } = useToast();
  const [currentPackage] = useState<PackageType>("national"); // Simulated - would come from auth/db
  
  const handleDownloadCertificate = () => {
    toast({
      title: "Download Started",
      description: "Your verified certificate is being prepared for download.",
    });
    // Simulate download
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Certificate downloaded successfully!",
      });
    }, 2000);
  };

  const handleSharePortfolio = () => {
    const portfolioUrl = window.location.origin + "/portfolio/student-12345";
    navigator.clipboard.writeText(portfolioUrl);
    toast({
      title: "Link Copied!",
      description: "Your portfolio link has been copied to clipboard.",
    });
  };
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="gradient-hero text-primary-foreground py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Abebe Kebede</h1>
                <div className="verified-badge text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  Fayda ID Verified
                </div>
              </div>
              <p className="opacity-90">Grade 12A • Addis Ababa University Preparatory School</p>
              <p className="text-sm opacity-80 mt-1">Student ID: STU-2024-12345 • Fayda ID: FID-9876543210</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="lg" onClick={() => toast({ title: "Opening Messages", description: "Messaging system launching..." })}>
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Teachers
              </Button>
              <Button variant="outline" size="lg">
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Academic Overview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Academic Performance
                </h2>
                <Badge variant="outline" className="text-success border-success">
                  On Track
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Current GPA</p>
                  <p className="text-3xl font-bold">3.85</p>
                  <p className="text-xs text-success mt-1">↑ +0.12 this semester</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Attendance Rate</p>
                  <p className="text-3xl font-bold">96%</p>
                  <p className="text-xs text-muted-foreground mt-1">Excellent standing</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Mathematics</span>
                    <span className="font-semibold">92/100</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Physics</span>
                    <span className="font-semibold">88/100</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">English</span>
                    <span className="font-semibold">94/100</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Chemistry</span>
                    <span className="font-semibold">85/100</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Upcoming Assignments */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Upcoming Assignments
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Physics: Electromagnetic Induction Lab Report</h3>
                    <p className="text-sm text-muted-foreground mb-2">Due: December 15, 2024</p>
                    <Badge variant="outline" className="text-warning border-warning">
                      <Clock className="h-3 w-3 mr-1" />
                      Due in 3 days
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Mathematics: Calculus Problem Set #12</h3>
                    <p className="text-sm text-muted-foreground mb-2">Due: December 18, 2024</p>
                    <Badge variant="outline" className="text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      Due in 6 days
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Ministry of Education Verified Credentials */}
            <Card className="p-6 border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-background">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Ministry of Education Verified Credentials
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                All your official academic records and national examination results verified and secured by the Ministry of Education.
              </p>

              <div className="space-y-4">
                {/* National Exam - Grade 12 */}
                <div className="p-5 rounded-lg bg-background border-2 border-primary/30 hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">Grade 12 National Examination</h3>
                        <Badge className="bg-success text-success-foreground flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          MoE Verified
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Ethiopian General Education Certificate (EGEC)</p>
                      <p className="text-xs text-muted-foreground mt-1">Examination Date: June 2023</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4 p-3 bg-muted/30 rounded">
                    <div>
                      <p className="text-xs text-muted-foreground">Overall Score</p>
                      <p className="text-lg font-bold text-success">87.5%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">National Ranking</p>
                      <p className="text-lg font-bold text-primary">Top 5%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 p-2 bg-primary/5 rounded border border-primary/20">
                    <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-xs font-mono">Blockchain ID: MOE-EGEC-2023-12345</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full mt-3"
                    onClick={handleDownloadCertificate}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Official Certificate
                  </Button>
                </div>

                {/* University Degree */}
                <div className="p-5 rounded-lg bg-background border-2 border-primary/30 hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">Bachelor of Science in Engineering</h3>
                        <Badge className="bg-success text-success-foreground flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          MoE Verified
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Addis Ababa University</p>
                      <p className="text-xs text-muted-foreground mt-1">Graduation Date: July 2024</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4 p-3 bg-muted/30 rounded">
                    <div>
                      <p className="text-xs text-muted-foreground">CGPA</p>
                      <p className="text-lg font-bold text-success">3.85/4.00</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Academic Honor</p>
                      <p className="text-sm font-bold text-primary">Magna Cum Laude</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 p-2 bg-primary/5 rounded border border-primary/20">
                    <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-xs font-mono">Blockchain ID: MOE-AAU-BSC-2024-47829</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={handleDownloadCertificate}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Transcript
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={handleSharePortfolio}
                      disabled={!isFeatureAvailable("Blockchain credential verification", currentPackage)}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Portfolio
                    </Button>
                  </div>
                </div>

                {/* National Exam - Grade 10 */}
                <div className="p-5 rounded-lg bg-background border-2 border-primary/30 hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">Grade 10 National Examination</h3>
                        <Badge className="bg-success text-success-foreground flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          MoE Verified
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">General Education Certificate</p>
                      <p className="text-xs text-muted-foreground mt-1">Examination Date: June 2021</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4 p-3 bg-muted/30 rounded">
                    <div>
                      <p className="text-xs text-muted-foreground">Overall Score</p>
                      <p className="text-lg font-bold text-success">85.0%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="text-lg font-bold text-success">Passed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 p-2 bg-primary/5 rounded border border-primary/20">
                    <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-xs font-mono">Blockchain ID: MOE-GEC-2021-67890</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full mt-3"
                    onClick={handleDownloadCertificate}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">🔒 Blockchain Security:</strong> All credentials are cryptographically secured on EduChain DLT 
                  and can be instantly verified by employers, universities, and institutions worldwide through the Fayda e-School verification portal.
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">This Week</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Assignments Due</span>
                  <span className="font-bold text-lg">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Classes Attended</span>
                  <span className="font-bold text-lg">28/30</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Assessments</span>
                  <span className="font-bold text-lg">3</span>
                </div>
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="font-medium text-sm">Mathematics Exam</p>
                  <p className="text-xs text-muted-foreground mt-1">Tomorrow, 9:00 AM</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium text-sm">Chemistry Lab</p>
                  <p className="text-xs text-muted-foreground mt-1">Friday, 2:00 PM</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium text-sm">Parent-Teacher Meeting</p>
                  <p className="text-xs text-muted-foreground mt-1">Next Monday, 4:00 PM</p>
                </div>
              </div>
            </Card>

            {/* Recent Feedback */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Feedback</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                  <p className="text-sm font-medium text-success mb-1">Excellent Work!</p>
                  <p className="text-xs text-muted-foreground">Physics: Your lab report shows excellent understanding of the concepts.</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium mb-1">Keep It Up</p>
                  <p className="text-xs text-muted-foreground">Math: Consistent performance on problem sets.</p>
                </div>
              </div>
            </Card>

            {/* Package Features */}
            <Card className="p-6">
              <PackageFeatures currentPackage={currentPackage} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
