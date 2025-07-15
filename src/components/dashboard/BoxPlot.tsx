import { useState } from 'react';

interface BoxPlotData {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  outliers?: number[];
}

interface BoxPlotProps {
  data: BoxPlotData;
  title?: string;
}

export const DashboardBoxPlot = ({ data, title }: BoxPlotProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const { min, q1, median, q3, max, outliers = [] } = data;
  
  // Calculate positions for visualization (0-100 scale)
  const range = max - min;
  const getPosition = (value: number) => ((value - min) / range) * 80 + 10;
  
  const q1Pos = getPosition(q1);
  const medianPos = getPosition(median);
  const q3Pos = getPosition(q3);
  const minPos = getPosition(min);
  const maxPos = getPosition(max);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        className="relative w-full h-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Whiskers */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 h-px bg-chart-primary"
          style={{ left: `${minPos}%`, width: `${q1Pos - minPos}%` }}
        />
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 h-px bg-chart-primary"
          style={{ left: `${q3Pos}%`, width: `${maxPos - q3Pos}%` }}
        />
        
        {/* Min and Max lines */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-px h-4 bg-chart-primary"
          style={{ left: `${minPos}%` }}
        />
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-px h-4 bg-chart-primary"
          style={{ left: `${maxPos}%` }}
        />
        
        {/* Box (Q1 to Q3) */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 h-8 bg-chart-primary/20 border-2 border-chart-primary rounded-sm"
          style={{ left: `${q1Pos}%`, width: `${q3Pos - q1Pos}%` }}
        />
        
        {/* Median line */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-0.5 h-8 bg-chart-primary"
          style={{ left: `${medianPos}%` }}
        />
        
        {/* Outliers */}
        {outliers.map((outlier, index) => (
          <div
            key={index}
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-chart-warning rounded-full"
            style={{ left: `${getPosition(outlier)}%` }}
          />
        ))}
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg shadow-lg p-3 z-10">
          <div className="text-xs space-y-1">
            <div className="font-medium text-foreground">{title || 'Box Plot'}</div>
            <div className="text-muted-foreground">Min: {min}</div>
            <div className="text-muted-foreground">Q1: {q1}</div>
            <div className="text-chart-primary font-medium">Median: {median}</div>
            <div className="text-muted-foreground">Q3: {q3}</div>
            <div className="text-muted-foreground">Max: {max}</div>
            {outliers.length > 0 && (
              <div className="text-chart-warning">Outliers: {outliers.join(', ')}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};