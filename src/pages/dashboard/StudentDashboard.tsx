import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  MessageSquare
} from "lucide-react";

const StudentDashboard = () => {
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
            <Button variant="secondary" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Teachers
            </Button>
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

            {/* Blockchain Verified Credentials */}
            <Card className="p-6 border-2 border-verified/30 bg-verified/5">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-verified" />
                My Credentials
              </h2>

              <div className="p-5 rounded-lg bg-background border-2 border-verified/20 mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">High School Diploma</h3>
                    <p className="text-sm text-muted-foreground">Expected: June 2025</p>
                  </div>
                  <div className="verified-badge">
                    <CheckCircle2 className="h-4 w-4" />
                    DLT-Secured
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Generate Shareable Portfolio
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Your academic credentials are cryptographically secured on the EduChain DLT, 
                making them instantly verifiable by universities and employers worldwide.
              </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
