import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const DashboardCard = ({ title, children, className = "" }: DashboardCardProps) => {
  return (
    <Card className={`transition-all duration-200 hover:shadow-hover hover:scale-[1.02] shadow-soft border-border/50 h-[calc((100vh-100px-12px)/4-12px)] ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-medium text-foreground/70">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[calc(100%-40px)]">
        {children}
      </CardContent>
    </Card>
  );
};