
import { useState } from 'react';

export interface BoxPlotData {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  outliers?: number[];
}

interface BoxPlotProps {
  data: BoxPlotData;
  color?: string;
}

export const SimpleBoxPlot = ({ data, color = '#bfdbff' }: BoxPlotProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { min, q1, median, q3, max, outliers = [] } = data;
  const range = max - min || 1;
  // SVG width/height
  const w = 200, h = 36, pad = 18;
  // Map value to x position in SVG
  const scale = (v: number) => pad + ((w - 2 * pad) * (v - min)) / range;
  return (
    <div className="relative flex items-center justify-center w-full h-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
        {/* Whiskers */}
        <line x1={scale(min)} y1={h/2} x2={scale(q1)} y2={h/2} stroke={color} strokeWidth={2} />
        <line x1={scale(q3)} y1={h/2} x2={scale(max)} y2={h/2} stroke={color} strokeWidth={2} />
        {/* Whisker caps */}
        <line x1={scale(min)} y1={h/2-8} x2={scale(min)} y2={h/2+8} stroke={color} strokeWidth={2} />
        <line x1={scale(max)} y1={h/2-8} x2={scale(max)} y2={h/2+8} stroke={color} strokeWidth={2} />
        {/* Box */}
        <rect x={scale(q1)} y={h/2-14} width={scale(q3)-scale(q1)} height={28} rx={7} fill={color} opacity={0.7} />
        {/* Median */}
        <rect x={scale(median)-2} y={h/2-14} width={4} height={28} rx={2} fill="#fff" opacity={0.9} />
        {/* Outliers */}
        {outliers.map((o, i) => (
          <circle key={i} cx={scale(o)} cy={h/2} r={4} fill="#F59E42" />
        ))}
      </svg>
      {isHovered && (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-full bg-white border border-gray-300 rounded shadow-lg px-4 py-2 text-xs text-gray-800 whitespace-nowrap pointer-events-none">
          <div><span className="font-semibold">Min:</span> {min}</div>
          <div><span className="font-semibold">Q1:</span> {q1}</div>
          <div><span className="font-semibold">Median:</span> {median}</div>
          <div><span className="font-semibold">Q3:</span> {q3}</div>
          <div><span className="font-semibold">Max:</span> {max}</div>
          {outliers.length > 0 && (
            <div><span className="font-semibold">Outliers:</span> {outliers.join(', ')}</div>
          )}
        </div>
      )}
    </div>
  );
};
