// Dummy data for cards and charts
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DashboardBoxPlot } from "./BoxPlot";
import { SimpleBoxPlot } from "./SimpleBoxPlot";
import { lineChartData, boxPlotData } from "../../data/dashboardData";
import HeadingTooltip from "./HeadingTooltip";
import { headingDescriptions } from "./headingDescriptions";


const summaryCards = [
  { label: "Total Articles", value: "2,000", change: "+11.01%", positive: true },
  { label: "PDF Articles", value: "15", change: "-0.03%", positive: false },
  { label: "HTML", value: "1985", change: "+15.03%", positive: true },
];



function CustomLineChart({ data, color = "#5B32C8", tooltipLabel = "%" }) {
  const [hoverIdx, setHoverIdx] = useState(null);
  // Responsive: fill parent, but keep aspect ratio
  const viewBoxW = 420, viewBoxH = 220, padding = 24;
  const minY = 0, maxY = 100;
  const points = data.map((d, i) => {
    const x = padding + (i * (viewBoxW - 2 * padding)) / (data.length - 1);
    const y = padding + ((maxY - d.value) * (viewBoxH - 2 * padding)) / (maxY - minY);
    return { ...d, x, y };
  });
  const polyline = points.map(p => `${p.x},${p.y}`).join(" ");
  return (
    <svg
      viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ display: "block", flex: 1 }}
    >
      {/* Axes */}
      <line x1={padding} y1={padding} x2={padding} y2={viewBoxH - padding} stroke="#E5E7EB" strokeWidth={2} />
      <line x1={padding} y1={viewBoxH - padding} x2={viewBoxW - padding} y2={viewBoxH - padding} stroke="#E5E7EB" strokeWidth={2} />
      {/* Y axis label */}
      <text x={padding - 20} y={padding + 10} fontSize="10" fill="#C4B5FD">{tooltipLabel}</text>
      {/* Animated Polyline */}
      <motion.polyline
        fill="none"
        stroke={color}
        strokeWidth={3}
        points={polyline}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      {/* Animated Dots */}
      {points.map((p, i) => (
        <motion.rect
          key={i}
          x={p.x - 6}
          y={p.y - 6}
          width={12}
          height={12}
          rx={3}
          fill={color}
          style={{ cursor: "pointer" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.4, type: "spring" }}
          onMouseEnter={() => setHoverIdx(i)}
          onMouseLeave={() => setHoverIdx(null)}
        />
      ))}
      {/* X axis labels */}
      {points.map((p, i) => (
        <text key={i} x={p.x} y={viewBoxH - padding + 18} fontSize="12" fill="#888" fontWeight="bold" textAnchor="middle">{p.name}</text>
      ))}
      {/* X axis label */}
      
      {/* Tooltip */}
      {hoverIdx !== null && (
        <g>
          <rect x={points[hoverIdx].x - 24} y={points[hoverIdx].y - 38} width="48" height="24" rx="6" fill="#fff" stroke={color} strokeWidth={1} />
          <text x={points[hoverIdx].x} y={points[hoverIdx].y - 22} fontSize="13" fill={color} fontWeight="bold" textAnchor="middle">
            {points[hoverIdx].value}{tooltipLabel}
          </text>
        </g>
      )}
    </svg>
  );
}

function CustomMultiLineChart({ data, labels, tooltipLabel = "%" }) {
  const [hover, setHover] = useState({ line: null, idx: null });
  // Responsive: fill parent, but keep aspect ratio
  const viewBoxW = 840, viewBoxH = 800, padding = 80;
  const minY = 0, maxY = 100;
  // Each line: {label, color, values: [..]}
  const pointsArr = data.map(line =>
    line.values.map((v, i) => {
      const x = padding + (i * (viewBoxW - 2 * padding)) / (labels.length - 1);
      const y = padding + ((maxY - v) * (viewBoxH - 2 * padding)) / (maxY - minY);
      return { x, y, value: v, label: line.label, color: line.color, idx: i };
    })
  );
  return (
    <svg
      viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ display: "block", flex: 1 }}
    >
      {/* Axes */}
      <line x1={padding} y1={padding} x2={padding} y2={viewBoxH - padding} stroke="#E5E7EB" strokeWidth={2} />
      <line x1={padding} y1={viewBoxH - padding} x2={viewBoxW - padding} y2={viewBoxH - padding} stroke="#E5E7EB" strokeWidth={2} />
      {/* Y axis label */}
      <text x={padding - 20} y={padding + 10} fontSize="10" fill="#C4B5FD">{tooltipLabel}</text>
      {/* Lines */}
      {pointsArr.map((points, lidx) => (
        <motion.polyline
          key={lidx}
          fill="none"
          stroke={data[lidx].color}
          strokeWidth={3}
          points={points.map(p => `${p.x},${p.y}`).join(" ")}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: lidx * 0.2 }}
        />
      ))}
      {/* Dots */}
      {pointsArr.map((points, lidx) =>
        points.map((p, i) => (
          <motion.rect
            key={lidx + '-' + i}
            x={p.x - 6}
            y={p.y - 6}
            width={12}
            height={12}
            rx={3}
            fill={p.color}
            style={{ cursor: "pointer" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + lidx * 0.2 + i * 0.07, duration: 0.4, type: "spring" }}
            onMouseEnter={() => setHover({ line: lidx, idx: i })}
            onMouseLeave={() => setHover({ line: null, idx: null })}
          />
        ))
      )}
      {/* X axis labels */}
      {labels.map((label, i) => {
        const x = padding + (i * (viewBoxW - 2 * padding)) / (labels.length - 1);
        return <text key={label} x={x} y={viewBoxH - padding + 18} fontSize="12" fill="#888" fontWeight="bold" textAnchor="middle">{label}</text>;
      })}
      {/* X axis label */}
      
      {/* Legend */}
      <rect x={padding} y={padding - 30} width="18" height="18" rx="4" fill="#8B5CF6" />
      <text x={padding + 24} y={padding - 16} fontSize="13" fill="#8B5CF6" fontWeight="bold">Non-Compliance</text>
      <rect x={padding + 130} y={padding - 30} width="18" height="18" rx="4" fill="#34D399" />
      <text x={padding + 154} y={padding - 16} fontSize="13" fill="#34D399" fontWeight="bold">Support</text>
      {/* Tooltip */}
      {hover.line !== null && hover.idx !== null && (
        <g>
          <rect x={pointsArr[hover.line][hover.idx].x - 24} y={pointsArr[hover.line][hover.idx].y - 38} width="48" height="24" rx="6" fill="#fff" stroke={pointsArr[hover.line][hover.idx].color} strokeWidth={1} />
          <text x={pointsArr[hover.line][hover.idx].x} y={pointsArr[hover.line][hover.idx].y - 22} fontSize="13" fill={pointsArr[hover.line][hover.idx].color} fontWeight="bold" textAnchor="middle">
            {pointsArr[hover.line][hover.idx].value}{tooltipLabel}
          </text>
        </g>
      )}
    </svg>
  );
}

// Minimal MultiLineChart implementation for two lines
function MultiLineChart({ data, labels, tooltipLabel }) {
  const [hover, setHover] = React.useState({ line: null, idx: null });
  const viewBoxW = 420, viewBoxH = 220, padding = 24;
  const minY = 0, maxY = 100;
  // Each line: {label, color, values: [..]}
  const pointsArr = data.map(line =>
    line.values.map((v, i) => {
      const x = padding + (i * (viewBoxW - 2 * padding)) / (labels.length - 1);
      const y = padding + ((maxY - v) * (viewBoxH - 2 * padding)) / (maxY - minY);
      return { x, y, value: v, label: line.label, color: line.color, idx: i };
    })
  );
  return (
    <svg
      viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
      width="100%"
      height="100%"
      style={{ display: "block", flex: 1 }}
    >
      {/* Lines */}
      {pointsArr.map((points, lidx) => (
        <motion.polyline
          key={lidx}
          fill="none"
          stroke={data[lidx].color}
          strokeWidth={3}
          points={points.map(p => `${p.x},${p.y}`).join(" ")}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: lidx * 0.2 }}
        />
      ))}
      {/* Dots */}
      {pointsArr.map((points, lidx) =>
        points.map((p, i) => (
          <circle
            key={lidx + '-' + i}
            cx={p.x}
            cy={p.y}
            r={5}
            fill={p.color}
            stroke="#fff"
            strokeWidth={2}
            onMouseEnter={() => setHover({ line: lidx, idx: i })}
            onMouseLeave={() => setHover({ line: null, idx: null })}
          />
        ))
      )}
      {/* X axis labels */}
      {labels.map((label, i) => {
        const x = padding + (i * (viewBoxW - 2 * padding)) / (labels.length - 1);
        return <text key={label} x={x} y={viewBoxH - padding + 18} fontSize="12" fill="#888" fontWeight="bold" textAnchor="middle">{label}</text>;
      })}
      {/* X axis label */}
      
      {/* Tooltip */}
      {hover.line !== null && hover.idx !== null && (
        <g>
          <rect x={pointsArr[hover.line][hover.idx].x - 24} y={pointsArr[hover.line][hover.idx].y - 38} width="48" height="24" rx="6" fill="#fff" stroke={pointsArr[hover.line][hover.idx].color} strokeWidth={1} />
          <text x={pointsArr[hover.line][hover.idx].x} y={pointsArr[hover.line][hover.idx].y - 22} fontSize="13" fill={pointsArr[hover.line][hover.idx].color} fontWeight="bold" textAnchor="middle">
            {pointsArr[hover.line][hover.idx].value}{tooltipLabel}
          </text>
        </g>
      )}
    </svg>
  );
}

const Proof: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#fafbfc] flex flex-col overflow-hidden">
      {/* Common Header */}
      <div className="flex flex-row items-center justify-between px-6 pt-4 pb-2 rounded-2xl shadow-sm">
  <h2 className="text-2xl font-bold mb-2 text-white">Proof Central</h2>
  {/* Filters Header Bar */}
  <div className="flex flex-row gap-4 items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 w-fit shadow-sm">
    <select className="rounded bg-white border border-gray-200 px-4 py-2 text-base text-gray-800 font-bold focus:outline-none">
      <option>June</option>
    </select>
    <select className="rounded bg-white border border-gray-200 px-4 py-2 text-base text-gray-800 font-bold focus:outline-none">
      <option>Supplier</option>
    </select>
    <select className="rounded bg-white border border-gray-200 px-4 py-2 text-base text-gray-800 font-bold focus:outline-none">
      <option>All Journals</option>
    </select>
  </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 flex-1 w-full h-full gap-0 overflow-hidden">
        {/* Left Side */}
        <div className="flex flex-col h-full w-full border-r border-gray-200 overflow-hidden">
          <h2 className="text-2xl font-bold mb-2 text-black">Proof Readiness</h2>
        {/* Summary Cards */}
        <div className="flex flex-row gap-3 mb-2 flex-shrink-0">
          {summaryCards.map((card, i) => (
            <div
              key={i}
              className="flex-1 rounded-2xl px-8 py-6 shadow-lg border border-blue-100 flex flex-col items-start bg-blue-50"
            >
              <span className="text-sm font-medium text-black mb-1">{card.label}</span>
              <span className="text-3xl font-extrabold text-blue-900 mb-1">{card.value}</span>
              <span className={`text-sm font-semibold flex items-center ${card.positive ? 'text-green-600' : 'text-gray-500'}`}>{card.change} <span className="ml-1">{card.positive ? '↗' : '↘'}</span></span>
            </div>
          ))}
        </div>
        {/* 2x2 Grid for Main Charts */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1 min-h-0 h-full">
          {/* Proof Readiness Rate */}
          <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
            <span className="block text-base font-bold text-black mb-2">
  <HeadingTooltip description={headingDescriptions["Proof Readiness Rate"] || ""}>Proof Readiness Rate</HeadingTooltip>
</span>
            <div className="flex-1 flex min-h-0 h-full">
              <CustomLineChart
                data={[ 
                  { name: "MAR", value: 42 },
                  { name: "ARP", value: 62},
                  { name: "MAY", value: 75},
                  { name: "JUN", value: 80},
                ]}
                color="#4682b4"
                tooltipLabel="%"
              />
            </div>
          </div>
          {/* Proof Readiness Time (Boxplot, SVG, matches screenshot) */}
          <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
            <span className="block text-base font-bold text-black mb-2">
  <HeadingTooltip description={headingDescriptions["Proof Readiness Time"] || ""}>Proof Readiness Time</HeadingTooltip>
</span>
            <DashboardBoxPlot
              data={boxPlotData.updateQueryPercent}
            />
          </div>
          {/* Non-Compliance Rate */}
          <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
            <span className="block text-base font-bold text-black mb-2">
  <HeadingTooltip description={headingDescriptions["Non-proof Readiness"] || ""}>Non-Readiness</HeadingTooltip>
</span>
            {/* Legend */}
            <div className="flex flex-row gap-3 items-center mb-1">
              <span className="inline-flex items-center">
                <span className="w-4 h-4 rounded bg-[#4682b4] inline-block mr-1"></span>
                <span className="text-xs text-blue-600 font-medium">Non-Compliance</span>
              </span>
              <span className="inline-flex items-center">
                <span className="w-4 h-4 rounded bg-[#4f5d71] inline-block mr-1"></span>
                <span className="text-xs text-blue-600 font-medium">Technical</span>
              </span>
            </div>
            <div className="flex-1 flex min-h-0 h-full">
              <MultiLineChart
                data={[ 
                  {
                    label: "Non-Compliance",
                    color: "#4682b4",
                    values: [55, 50, 45, 40],
                  },
                  {
                    label: "Technical",
                    color: "#4f5d71",
                    values: [85, 70, 60, 40],
                  },
                ]}
                labels={["MAR", "ARP", "MAY", "JUN"]}
                tooltipLabel="%"
              />
            </div>
          </div>
          {/* Time To Resolution (Boxplot) */}
          <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
            <span className="block text-lg font-bold text-black mb-2">
  <HeadingTooltip description={headingDescriptions["TTR"] || ""}>Time To Resolution</HeadingTooltip>
</span>
            {/* Legend */}
            <div className="flex flex-row gap-4 items-center mb-2">
              <span className="inline-flex items-center"><span className="w-4 h-4 rounded bg-[#4682b4] inline-block mr-1"></span><span className="text-xs text-blue-700">Non-Compliance</span></span>
              <span className="inline-flex items-center"><span className="w-4 h-4 rounded bg-[#4f5d71] inline-block mr-1"></span><span className="text-xs text-blue-700">Support</span></span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-4">
              <SimpleBoxPlot data={boxPlotData.nonCompliance} color="#4682b4" />
              <DashboardBoxPlot data={boxPlotData.support} title="Support" />
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full w-full border-r border-gray-200 overflow-hidden">
        <h2 className="text-2xl font-bold mb-2 text-black">Proofing Time</h2>
        {/* Chart Grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-3 flex-1 min-h-0 h-full">
          {/* 6 chart cards: 3 rows x 2 cols */}
                    {/* Left column: line charts, Right column: histograms */}
                    {/* Turn Around Time (Line) */}
                    <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
                        <span className="block text-lg font-bold text-black mb-2"><HeadingTooltip description={headingDescriptions["TAT"] || ""}>Turn Around Time</HeadingTooltip></span>
                        <div className="flex-1 flex min-h-0 h-full">
                            <CustomLineChart
                                data={[
                                    { name: "MAR", value: 78 },
                                    { name: "ARP", value: 72 },
                                    { name: "MAY", value: 62 },
                                    { name: "JUN", value: 45 },
                                ]}
                                color="#4682b4"
                                tooltipLabel=""
                            />
                        </div>
                    </div>
                    {/* TAT Per Article (Histogram) */}
                    <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
  <span className="block text-[17px] font-bold text-black mb-2 p2"><HeadingTooltip description={headingDescriptions["TAT Per Article"] || ""}>TAT Per Article</HeadingTooltip></span>
  <div className="flex-1 flex min-h-0 h-full">
    <HistogramChart
      data={[60, 65, 55, 80]}
      labels={["0-10", "10-20", "20-30", "30-40"]}
      color="#4682b4"
      tooltipLabel=""
    />
  </div>
</div>
                    {/* Proofing Time (Line) */}
                    <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
                        <span className="block text-lg font-bold text-black mb-2"><HeadingTooltip description={headingDescriptions["Proofing Time"] || ""}>Proofing Time</HeadingTooltip></span>
                        <div className="flex-1 flex min-h-0 h-full">
                            <CustomLineChart
                                data={[
                                    { name: "MAR", value: 78 },
                                    { name: "ARP", value: 72 },
                                    { name: "MAY", value: 62 },
                                    { name: "JUN", value: 45 },
                                ]}
                                color="#4682b4"
                                tooltipLabel="."
                            />
                        </div>
                    </div>
                    {/* TT Per Article (Histogram) */}
                    <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
  <span className="block text-[17px] font-bold text-black mb-0"><HeadingTooltip description={headingDescriptions["Proofing Time Per Article"] || ""}>Proofing Time Per Article</HeadingTooltip></span>
  <div className="flex-1 flex min-h-0 h-full">
    <HistogramChart
      data={[60, 65, 55, 80]}
      labels={["0-10", "10-20", "20-30", "30-40"]}
      color="#4682b4"
      tooltipLabel=""
    />
  </div>
</div>
                    {/* Validation Time (Line) */}
                    <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
                        <span className="block text-lg font-bold text-black mb-2"><HeadingTooltip description={headingDescriptions["Validation Time"] || ""}>Validation Time</HeadingTooltip></span>
                        <div className="flex-1 flex min-h-0 h-full">
                            <CustomLineChart
                                data={[
                                    { name: "MAR", value: 78 },
                                    { name: "ARP", value: 72 },
                                    { name: "MAY", value: 62 },
                                    { name: "JUN", value: 45 },
                                ]}
                                color="#4682b4"
                                tooltipLabel=""
                            />
                        </div>
                    </div>
                    {/* Validation Time per Article (Histogram) */}
                    <div className="rounded-2xl border border-blue-100 p-2 bg-blue-50 shadow-md flex flex-col h-full min-h-0 flex-1">
  <span className="block text-[17px] font-bold text-black mb-2"><HeadingTooltip description={headingDescriptions["Validation Time per Article"] || ""}>Validation Time per Article</HeadingTooltip></span>
  <div className="flex-1 flex min-h-0 h-full">
    <HistogramChart
      data={[60, 65, 55, 80]}
      labels={["0-10", "10-20", "20-30", "30-40"]}
      color="#4682b4"
      tooltipLabel=""
    />
  </div>
</div>
        </div>
      </div>
      </div>
    </div>
  );
};

// Simple HistogramChart component for right-side cards
function HistogramChart({ data, labels, color = "#4682b4", tooltipLabel = "" }) {
  // data: array of values, labels: array of bin labels
  const [hoverIdx, setHoverIdx] = useState(null);
  const viewBoxW = 220, viewBoxH = 160, padding = 24, barWidth = 32;
  const maxY = 100;
  return (
    <svg
      viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ display: "block", flex: 1 }}
    >
      {/* Y axis */}
      <line x1={padding} y1={padding} x2={padding} y2={viewBoxH - padding} stroke="#E5E7EB" strokeWidth={2} />
      {/* X axis */}
      <line x1={padding} y1={viewBoxH - padding} x2={viewBoxW - padding} y2={viewBoxH - padding} stroke="#E5E7EB" strokeWidth={2} />
      {/* Y axis label */}
      <text x={padding - 18} y={padding + 6} fontSize="10" fill="#4682b4">{tooltipLabel}</text>
      {/* Bars */}
      {data.map((v, i) => {
        const x = padding + i * (barWidth + 12);
        const y = padding + ((maxY - v) * (viewBoxH - 2 * padding)) / maxY;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={viewBoxH - padding - y}
              fill={color}
              opacity={0.4}
              rx={6}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            />
            {/* Tooltip */}
            {hoverIdx === i && (
              <g>
                <rect
                  x={x + barWidth / 2 - 36}
                  y={y - 38}
                  width="102"
                  height="28"
                  rx="6"
                  fill="#fff"
                  stroke={color}
                  strokeWidth={1}
                  opacity={1}
                />
                <text
                  x={x + barWidth / 2}
                  y={y - 20}
                  fontSize="12"
                  fill={color}
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {labels[i]}: {v} {tooltipLabel}
                </text>
              </g>
            )}
          </g>
        );
      })}
      {/* X axis labels */}
      {labels.map((label, i) => {
        const x = padding + i * (barWidth + 12) + barWidth / 2;
        return <text key={label} x={x} y={viewBoxH - padding + 18} fontSize="12" fill="#888" fontWeight="bold" textAnchor="middle">{label}</text>;
      })}
      {/* X axis label */}
      <text x={viewBoxW - padding} y={viewBoxH - padding + 28} fontSize="12" fill="#C4B5FD">Seconds</text>
    </svg>
  );
}
export default Proof;