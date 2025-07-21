import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';

interface ChartForConfProps {
  data: Array<{ name: string; value: number }>;
  color?: string;
  cardTitle?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const cardTitle = payload[0].payload.cardTitle || label;
    const month = payload[0].payload.name;
    const percent = `${value}%`;
    const prev = payload[0].payload.prevValue;
    let diffElem = null;
    if (typeof prev === 'number') {
      const diff = value - prev;
      const diffAbs = Math.abs(diff);
      if (diff > 0) {
        diffElem = (
          <span className="flex items-center font-semibold">
            <svg className="inline w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
            <span className="text-green-500">{diffAbs.toFixed(2)}%</span>
            <span className="text-muted-foreground ml-1"> higher than previous month</span>
          </span>
        );
      } else if (diff < 0) {
        diffElem = (
          <span className="flex items-center font-semibold">
            <svg className="inline w-4 h-4 mr-1 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            <span className="text-red-400">{diffAbs.toFixed(2)}%</span>
            <span className="text-muted-foreground ml-1"> lower than previous month</span>
          </span>
        );
      }
    }
    return (
      <div className="bg-card border border-border rounded-lg shadow-lg p-3">
        <p className="text-s text-muted-foreground">{`Month: ${month}`}</p>
        <p className="text-sm font-medium text-foreground">{`${cardTitle}: ${percent}`}</p>
        {diffElem && (
          <p className="text-xs mt-1">{diffElem}</p>
        )}
      </div>
    );
  }
  return null;
};

const ChartForConf: React.FC<ChartForConfProps> = ({ data, color = '#4682b4', cardTitle }) => {
  // Add prevValue and cardTitle to each data point for tooltip comparison, like DashboardLineChart
  const dataWithPrev = data.map((d, i) => ({ ...d, prevValue: i > 0 ? data[i - 1].value : undefined, cardTitle }));
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dataWithPrev} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888' }} interval={0} padding={{ left: 0, right: 0 }} tickMargin={0} height={18} />
              <YAxis hide={true} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="linear" dataKey="value" stroke="#4682b4" strokeWidth={2} dot={{ r: 4, fill: '#4682b4', stroke: '#fff', strokeWidth: 1 }} />
            </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartForConf;
