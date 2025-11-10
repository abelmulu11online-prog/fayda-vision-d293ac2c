import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, X, Lock } from "lucide-react";

export type PackageType = "base" | "national";

interface PackageFeature {
  name: string;
  base: boolean;
  national: boolean;
}

const features: PackageFeature[] = [
  { name: "School and classroom management", base: true, national: true },
  { name: "Study book", base: true, national: true },
  { name: "Timetable management", base: true, national: true },
  { name: "Discipline-related issue management", base: true, national: true },
  { name: "Point-based assessment", base: true, national: true },
  { name: "Formative (verbal) assessment report", base: true, national: true },
  { name: "Messaging application", base: true, national: true },
  { name: "FES mobile application", base: true, national: true },
  { name: "Digital fee payment (Telebirr/M-Pesa)", base: true, national: true },
  { name: "Basic EMIS integration", base: true, national: true },
  { name: "48-hour customer support", base: true, national: true },
  { name: "Blockchain credential verification", base: false, national: true },
  { name: "Alarm Bell early intervention system", base: false, national: true },
  { name: "Development interviews & cards", base: false, national: true },
  { name: "Learning outcomes portfolio", base: false, national: true },
  { name: "Student curriculum choices", base: false, national: true },
  { name: "School event registration", base: false, national: true },
  { name: "Full system integrations", base: false, national: true },
  { name: "Priority 24-hour support", base: false, national: true },
];

interface PackageFeaturesProps {
  currentPackage: PackageType;
}

export const PackageFeatures = ({ currentPackage }: PackageFeaturesProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Your Package Features</h3>
        <Badge variant={currentPackage === "national" ? "default" : "secondary"}>
          {currentPackage === "national" ? "National Package" : "Base Package"}
        </Badge>
      </div>

      {currentPackage === "base" && (
        <Alert className="border-primary/50 bg-primary/5">
          <AlertDescription className="text-sm">
            <strong>Upgrade to National Package</strong> to unlock blockchain verification, 
            Alarm Bell system, and advanced intervention tools.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
        {features.map((feature, idx) => {
          const hasAccess = currentPackage === "national" ? feature.national : feature.base;
          
          return (
            <div
              key={idx}
              className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                hasAccess
                  ? "bg-background border-border"
                  : "bg-muted/30 border-muted-foreground/20"
              }`}
            >
              <span className={`text-sm ${!hasAccess && "text-muted-foreground"}`}>
                {feature.name}
              </span>
              {hasAccess ? (
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
              ) : (
                <Lock className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const isFeatureAvailable = (featureName: string, packageType: PackageType): boolean => {
  const feature = features.find(f => f.name === featureName);
  if (!feature) return false;
  return packageType === "national" ? feature.national : feature.base;
};
