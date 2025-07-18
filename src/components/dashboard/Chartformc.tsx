import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

interface ChartForMCProps {
  data: { name: string; value: number }[];
  color?: string;
  height?: number;
}

// Simple line chart for MC: no tooltip, no legend, minimal axes
export const ChartForMC: React.FC<ChartForMCProps> = ({ data, color = '#4682b4', height = 60 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <LineChart data={data} margin={{ top: 0, right: 24, left: 24, bottom: 0 }}>
      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888' }} interval={0} />
      <YAxis hide={true} />
      <Tooltip />
      <Line type="linear" dataKey="value" stroke={color} strokeWidth={2} dot={{ r: 4, fill: color, stroke: '#fff', strokeWidth: 1 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default ChartForMC;
