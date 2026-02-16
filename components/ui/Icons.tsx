import React from 'react';
import {
  ClipboardList,
  FileText,
  BarChart2,
  HardHat,
  CheckCircle,
  Search,
  Crosshair,
  PenTool,
  TrendingUp,
  FileJson,
  Users,
  Activity,
  Award,
} from 'lucide-react';

const IconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  ClipboardList,
  FileText,
  BarChart2,
  HardHat,
  CheckCircle,
  Search,
  Crosshair,
  PenTool,
  TrendingUp,
  FileJson,
  Users,
  Activity,
  Award,
};

export const DynamicIcon: React.FC<{ name: string; className?: string; size?: number }> = ({
  name,
  className,
  size = 24,
}) => {
  const IconComponent = IconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};
