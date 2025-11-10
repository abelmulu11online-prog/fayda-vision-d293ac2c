import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PackageFeatures, PackageType, isFeatureAvailable } from "@/components/PackageFeatures";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  BookOpen, 
  Users, 
  ClipboardCheck,
  AlertCircle,
  CheckCircle2,
  Calendar,
  FileText,
  TrendingUp,
  Download
} from "lucide-react";

const TeacherDashboard = () => {
  const { toast } = useToast();
  const [currentPackage] = useState<PackageType>("national");
  
  const handleOpenJournal = (className: string) => {
    toast({
      title: "Opening Journal",
      description: `Loading digital journal for ${className}...`,
    });
  };

  const handleSaveGrades = () => {
    toast({
      title: "Grades Saved",
      description: "Grades submitted successfully and synced to EMIS.",
    });
  };

  const handleGenerateReport = () => {
    toast({
      title: "Generating Report",
      description: "EMIS report is being prepared for download.",
    });
    setTimeout(() => {
      toast({
        title: "Report Ready",
        description: "EMIS report downloaded successfully!",
      });
    }, 2000);
  };
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="gradient-hero text-primary-foreground py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Dr. Tigist Alemayehu</h1>
                <div className="verified-badge text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  MoE Verified
                </div>
              </div>
              <p className="opacity-90">Senior Mathematics Teacher • Addis Ababa University Preparatory School</p>
              <p className="text-sm opacity-80 mt-1">Personnel ID: TCH-2024-789 • Fayda ID: FID-5544332211</p>
            </div>
            <Button variant="secondary" size="lg" onClick={handleGenerateReport}>
              <Download className="mr-2 h-5 w-5" />
              Generate EMIS Report
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Digital Journal Overview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Digital Journal Overview
                </h2>
                <Badge variant="outline" className="text-success border-success">
                  50% Time Saved
                </Badge>
              </div>

              <div className="space-y-4">
                {/* Class 12A */}
                <Card className="p-5 card-interactive border-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">Grade 12A - Advanced Mathematics</h3>
                      <p className="text-sm text-muted-foreground">32 Students • Monday, Wednesday, Friday 9:00-10:30 AM</p>
                    </div>
                    <Button size="sm" onClick={() => handleOpenJournal("Grade 12A")}>Open Journal</Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Avg. Grade</p>
                      <p className="text-xl font-bold">87.5</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Attendance</p>
                      <p className="text-xl font-bold">94%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">At Risk</p>
                      <p className="text-xl font-bold text-warning">2</p>
                    </div>
                  </div>
                </Card>

                {/* Class 11B */}
                <Card className="p-5 card-interactive border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">Grade 11B - Calculus I</h3>
                      <p className="text-sm text-muted-foreground">28 Students • Tuesday, Thursday 11:00 AM-12:30 PM</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => handleOpenJournal("Grade 11B")}>Open Journal</Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Avg. Grade</p>
                      <p className="text-xl font-bold">82.3</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Attendance</p>
                      <p className="text-xl font-bold">91%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground mb-1">At Risk</p>
                      <p className="text-xl font-bold text-warning">4</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Quick Assessment Entry */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <ClipboardCheck className="h-6 w-6 text-primary" />
                Quick Grade Entry
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Class</label>
                    <select className="w-full p-2 rounded-lg border bg-background">
                      <option>Grade 12A - Advanced Math</option>
                      <option>Grade 11B - Calculus I</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Assessment Type</label>
                    <select className="w-full p-2 rounded-lg border bg-background">
                      <option>Quiz (20 points)</option>
                      <option>Test (50 points)</option>
                      <option>Exam (100 points)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Date</label>
                    <Input type="date" defaultValue="2024-12-12" />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50 border">
                  <p className="text-sm font-medium mb-3">Sample Students (Streamlined Entry):</p>
                  <div className="space-y-2">
                    {["Abebe Kebede", "Sara Tesfaye", "Dawit Bekele"].map((student, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <span className="text-sm flex-1">{student}</span>
                        <Input className="w-20" placeholder="Score" />
                        <Button size="sm" variant="ghost">
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full" onClick={handleSaveGrades}>Save Grades (Auto-sync to EMIS)</Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="font-medium">Grades Submitted Successfully</p>
                    <p className="text-sm text-muted-foreground">Grade 12A Quiz #8 • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Assignment Posted</p>
                    <p className="text-sm text-muted-foreground">Problem Set #12 for Grade 11B • Yesterday</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alarm Bell Alerts */}
            <Card className="p-6 border-2 border-warning/30 bg-warning/5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-warning" />
                Alarm Bell System
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Early intervention alerts for at-risk students
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-background border-2 border-warning">
                  <p className="font-semibold text-sm mb-1">Dawit Bekele (12A)</p>
                  <p className="text-xs text-muted-foreground mb-2">3 consecutive absences • Declining grades</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => toast({ title: "Intervention Plan", description: "Opening intervention planning tools..." })}
                    disabled={!isFeatureAvailable("Alarm Bell early intervention system", currentPackage)}
                  >
                    Create Intervention Plan
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-background border-2 border-warning">
                  <p className="font-semibold text-sm mb-1">Helen Girma (11B)</p>
                  <p className="text-xs text-muted-foreground mb-2">Failed last 2 assessments • Below 60%</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Schedule Parent Meeting
                  </Button>
                </div>
              </div>
            </Card>

            {/* Today's Schedule */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Schedule
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="font-medium text-sm">Grade 12A</p>
                  <p className="text-xs text-muted-foreground mt-1">9:00-10:30 AM • Room 203</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium text-sm">Grade 11B</p>
                  <p className="text-xs text-muted-foreground mt-1">11:00 AM-12:30 PM • Room 203</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium text-sm">Office Hours</p>
                  <p className="text-xs text-muted-foreground mt-1">2:00-4:00 PM • Office 315</p>
                </div>
              </div>
            </Card>

            {/* Performance Stats */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Your Impact
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Time Saved</span>
                    <span className="font-bold">50%</span>
                  </div>
                  <p className="text-xs text-success">vs. paper-based methods</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Students Helped</span>
                    <span className="font-bold">12</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Early interventions this semester</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Class Average</span>
                    <span className="font-bold">85.2</span>
                  </div>
                  <p className="text-xs text-success">↑ +3.5 from last semester</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-scale transition-all"
                  onClick={() => toast({ title: "Attendance", description: "Opening attendance tracker..." })}
                >
                  <ClipboardCheck className="mr-2 h-4 w-4" />
                  Mark Attendance
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-scale transition-all"
                  onClick={() => toast({ title: "Post Assignment", description: "Opening assignment creator..." })}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Post Assignment
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover-scale transition-all"
                  onClick={() => toast({ title: "Messaging", description: "Opening parent messaging system..." })}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Message Parents
                </Button>
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

export default TeacherDashboard;
