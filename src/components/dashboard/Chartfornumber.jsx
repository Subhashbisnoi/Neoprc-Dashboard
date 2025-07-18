import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

// A line chart for plain numbers, visually matching DashboardLineChart but without % in tooltip or labels
const NumberTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const cardTitle = payload[0].payload.cardTitle || label;
    const month = payload[0].payload.name;
    return (
      <div className="bg-card border border-border rounded-lg shadow-lg p-3">
        <p className="text-s text-muted-foreground">{`Month: ${month}`}</p>
        <p className="text-sm font-medium text-foreground">{`${cardTitle}: ${value}`}</p>
      </div>
    );
  }
  return null;
};

export const ChartForNumber = ({ data, color = "#4682b4", cardTitle }) => {
  // Add cardTitle to each data point for tooltip
  const dataWithTitle = data.map((d) => ({ ...d, cardTitle }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={dataWithTitle} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
          interval={0}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={false}
          hide={true}
        />
        <Tooltip content={<NumberTooltip />} />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke={color}
          strokeWidth={2}
          dot={{ fill: color, strokeWidth: 2, r: 3 }}
          activeDot={{ r: 5, fill: color }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartForNumber;
