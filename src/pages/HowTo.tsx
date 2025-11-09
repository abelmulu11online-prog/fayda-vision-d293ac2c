import { Card } from "@/components/ui/card";
import { 
  Shield, 
  UserPlus, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Building2,
  Award,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HowTo = () => {
  const guides = [
    {
      id: "fayda-auth",
      icon: Shield,
      title: "Secure Fayda ID Authentication",
      color: "primary",
      steps: [
        "Navigate to the Fayda e-School login page",
        "Click 'Continue with Fayda ID' button",
        "You will be redirected to the National Identity Provider (NIDP)",
        "Enter your Fayda ID credentials (National ID number and PIN)",
        "Complete two-factor authentication if prompted",
        "Review and grant permissions for FES to access your basic profile",
        "You will be securely redirected back to FES with authenticated session"
      ]
    },
    {
      id: "registration",
      icon: UserPlus,
      title: "User Registration Process",
      color: "secondary",
      steps: [
        "Complete Fayda ID authentication (mandatory first step)",
        "Select your role: Student / Parent / Teacher / Administrator",
        "Provide role-specific verification information:",
        "- Teachers: Enter MoE Personnel ID and School Code",
        "- Parents: Enter child's name and date of birth",
        "- Students: Verify your school enrollment status",
        "Review and accept the Personal Data Protection Proclamation terms",
        "Submit verification request for Ministry approval",
        "Receive email notification upon account activation (typically 24-48 hours)"
      ]
    },
    {
      id: "student-guide",
      icon: GraduationCap,
      title: "Student Dashboard Guide",
      color: "accent",
      steps: [
        "Login with your verified Fayda ID credentials",
        "View your complete academic profile on the main dashboard",
        "Access real-time grades, attendance records, and teacher feedback",
        "Check upcoming assignments and assessment schedules",
        "View your blockchain-verified credentials in the 'My Credentials' section",
        "Generate a shareable portfolio link for job applications",
        "Set up academic goal tracking and progress monitoring",
        "Use the messaging feature to communicate with teachers"
      ]
    },
    {
      id: "parent-guide",
      icon: Users,
      title: "Parent Dashboard Guide",
      color: "secondary",
      steps: [
        "Login with Fayda ID and select your child's profile",
        "Monitor academic progress: grades, attendance, and behavioral notes",
        "Review Alarm Bell alerts for early intervention opportunities",
        "Access school fee payment portal (Private schools only)",
        "Select payment method: Telebirr or M-Pesa",
        "Enter payment amount and authorize transaction via mobile wallet",
        "Download payment receipts for your records",
        "Communicate directly with teachers through secure messaging",
        "Schedule parent-teacher conferences through the system"
      ]
    },
    {
      id: "teacher-guide",
      icon: BookOpen,
      title: "Teacher Digital Journal",
      color: "primary",
      steps: [
        "Access your teacher dashboard with verified Fayda ID",
        "Navigate to the Digital Journal Overview (streamlined interface)",
        "Select your class and subject from the dropdown menu",
        "Record attendance with one-click marking system",
        "Enter grades using point-based assessment (100, 50, or 20 scales)",
        "Add formative (verbal) assessment notes for student development",
        "Trigger Alarm Bell alerts for at-risk students requiring intervention",
        "Submit homework assignments with digital file attachments",
        "Generate automated reports for EMIS compliance (50% time savings)"
      ]
    },
    {
      id: "admin-guide",
      icon: Building2,
      title: "School Administrator Functions",
      color: "accent",
      steps: [
        "Login with administrator-level Fayda ID credentials",
        "Access school-wide analytics dashboard",
        "Manage teacher accounts: approve access requests and assign classes",
        "Process student transfer and enrollment requests",
        "Configure school timetable and academic calendar",
        "Review and approve parent access authorization requests",
        "Monitor Alarm Bell system alerts across all classes",
        "Generate compliance reports for Ministry of Education",
        "Manage school fee payment settings (private schools)",
        "Submit bulk data updates to national EMIS database"
      ]
    },
    {
      id: "verification-guide",
      icon: Award,
      title: "Credential Verification (Employers/Minister)",
      color: "verified",
      steps: [
        "Navigate to the public Credential Verification Portal",
        "Enter the candidate's Credential ID (found on their certificate)",
        "Enter the candidate's Fayda ID number for identity confirmation",
        "Click 'Verify Credential' button",
        "System queries the immutable EduChain DLT in real-time",
        "Receive instant verification result: 'Verified' with green checkmark",
        "View credential details: institution, degree, graduation date",
        "Download official verification certificate with cryptographic proof",
        "Result displays 'DLT-Anchored' status confirming authenticity"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How-To Guides</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive step-by-step instructions for all Fayda e-School features and user roles
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <AccordionItem key={guide.id} value={guide.id} className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      guide.color === 'primary' ? 'gradient-hero' :
                      guide.color === 'secondary' ? 'bg-secondary/20 border border-secondary/30' :
                      guide.color === 'verified' ? 'bg-verified/20 border border-verified/30' :
                      'bg-accent/20 border border-accent/30'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        guide.color === 'primary' ? 'text-primary-foreground' :
                        guide.color === 'secondary' ? 'text-secondary' :
                        guide.color === 'verified' ? 'text-verified' :
                        'text-accent'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {guide.steps.length} steps • Click to expand
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-16 space-y-3">
                    {guide.steps.map((step, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <Card className="mt-8 p-8 gradient-hero text-primary-foreground">
          <h2 className="text-2xl font-bold mb-4">Need Additional Support?</h2>
          <p className="mb-6 opacity-90">
            Our priority customer support team is available to assist you with any questions 
            or technical issues. Guaranteed response within 24 hours.
          </p>
          <Button variant="secondary" size="lg">
            Contact Support Team
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default HowTo;
