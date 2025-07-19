import React from 'react';
import { DashboardBoxPlot } from './BoxPlot';
import { ChartForMC } from './Chartformc';
import { lineChartData, boxPlotData } from '../../data/dashboardData';
import HeadingTooltip from './HeadingTooltip';
import { headingDescriptions } from './headingDescriptions';

const rows = [
  {
    index: 'Validation Edits Index',
    chartTitle1: 'Validation Edits Index (75th Percentile)',
    chartTitle2: 'Validation Edits Index per Article (75th Percentile)',
    boxplotTitle: 'Validation Edits Index',
    cards: [
      { label: 'Validation Edits Index', value: '78%', change: '+11.01%', positive: true },
      { label: 'Validation Edits Index per Article', value: '48', change: '-0.03%', positive: false },
    ],
    chartData: [12000, 18000, 24000, 20000, 11000, 21000],
    chartLabels: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUN'],
    boxplot: boxPlotData.additionalEditsBoxplot,
  },
  {
    index: 'Validation Value Index',
    chartTitle1: 'Total Articles (75th Percentile)',
    chartTitle2: 'Per Article (75th Percentile)',
    boxplotTitle: 'Validation Value Index',
    cards: [
      { label: 'Total Articles', value: '83%', change: '+11.01%', positive: true },
      { label: 'Per Article Edits', value: '28', change: '-0.03%', positive: false },
    ],
    chartData: [9000, 15000, 2000, 17000, 16000, 14000],
    chartLabels: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUN'],
    boxplot: boxPlotData.additionalEditsBoxplot,
  },
  {
    index: 'Validation Additional Action Index',
    chartTitle1: 'Total Articles (75th Percentile)',
    chartTitle2: 'Additional Edits per Article (75th Percentile)',
    boxplotTitle: 'Validation Additional Action Index',
    cards: [
      { label: 'Total Articles', value: '90%', change: '+11.01%', positive: true },
      { label: 'Additional Edits per Article', value: '20', change: '-0.03%', positive: false },
    ],
    chartData: [6000, 12000, 9000, 15000, 13000, 17000],
    chartLabels: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUN'],
    boxplot: boxPlotData.additionalEditsBoxplot,
  },
  {
    index: 'Incomplete Validation Index',
    chartTitle1: 'Incomplete Total (75th Percentile)',
    chartTitle2: 'Incomplete Validation Edits per Article (75th Percentile)',
    boxplotTitle: 'Incomplete Validation Index',
    cards: [
      { label: 'Total Articles Edit', value: '88%', change: '+11.01%', positive: true },
      { label: 'Incomplete Validation Edits per Article', value: '26', change: '-0.03%', positive: false },
    ],
    chartData: [22000, 6000, 19000, 17000, 18000, 24000],
    chartLabels: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUN'],
    boxplot: boxPlotData.additionalEditsBoxplot,
  },
];

const MC: React.FC = () => {
  return (
    <div className="h-screen flex flex-col w-full max-w-full overflow-x-hidden mx-auto bg-white rounded-xl shadow border border-gray-200 box-border">
      <div className="flex flex-row items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 w-full shadow-sm" style={{ flex: '0 0 auto' }}>
        <h1 className="text-2xl font-bold text-black-700 tracking-tight">Validator</h1>
        <div className="flex flex-row gap-4 items-center">
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
      <div className="flex flex-col gap-2">
        {rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-4 items-center border-b last:border-b-0 border-gray-200 py-2 bg-white flex-1 min-h-0 min-w-0">
            {/* Left: Index Name */}
            <div className="col-span-2 flex flex-col items-start gap-2 h-full min-h-0">
              <div className="text-md font-semibold text-blue-700 whitespace-normal leading-tight">
                <HeadingTooltip description={headingDescriptions[row.index] || ""}>
                  <span className="flex flex-col items-start cursor-help">
                    {(() => {
                      const words = row.index.split(' ');
                      const lines = [];
                      for (let i = 0; i < words.length; i += 3) {
                        lines.push(words.slice(i, i + 3).join(' '));
                      }
                      return lines.map((line, idx) => (
                        <span key={idx}>{line}</span>
                      ));
                    })()}
                  </span>
                </HeadingTooltip>
              </div>
            </div>
            {/* Middle: Summary Cards and Bar Chart */}
            <div className="col-span-7 flex flex-row gap-4 items-center h-full min-h-0">
              <div className="flex flex-col gap-2 flex-1 overflow-hidden h-full min-h-0">
                {row.cards.map((card, i) => (
                  <div
                    key={i}
                    className={`rounded-xl px-3 py-2 shadow border border-gray-100 flex flex-col items-start bg-blue-50 min-w-[120px] flex-1 min-h-0 h-full ${i === 0 ? 'ring-2 ring-blue-100' : ''}` }
                  >
                    <span className="text-[11px] font-medium text-gray-500 mb-0">
                      {i === 0 ? (
                        <HeadingTooltip description={headingDescriptions[row.index] || ""}>
                          <span className="text-[11px] font-medium text-gray-500 mb-0">
                            {(() => {
                              const words = card.label.split(' ');
                              const lines = [];
                              for (let i = 0; i < words.length; i += 3) {
                                lines.push(words.slice(i, i + 3).join(' '));
                              }
                              return lines.map((line, idx) => (
                                <span key={idx} className="block text-center w-full">{line}</span>
                              ));
                            })()}
                          </span>
                        </HeadingTooltip>
                      ) : (
                        <span className="text-[11px] font-medium text-gray-500 mb-0">{card.label}</span>
                      )}
                    </span>
                    <span className="text-lg font-extrabold text-gray-900 mb-0">{card.value}</span>
                    <span className={`text-xs font-semibold flex items-center ${card.positive ? 'text-green-600' : 'text-gray-500'}`}>{card.change} <span className="ml-1">{card.positive ? '↗' : '↘'}</span></span>
                  </div>
                ))}
              </div>
              {/* Bar Chart */}
              <div className="flex flex-col w-full h-full flex-1 min-h-0">
                <div className="flex-1 flex flex-col justify-start">
                  <div className="text-xs font-bold text-blue-700 mb-0">{row.chartTitle1}</div>
                  <div className="w-full flex-1">
                    <ChartForMC
                      data={row.chartLabels.map((label, i) => ({ name: label, value: row.chartData[i] / 1000 }))}
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <div className="text-xs font-bold text-blue-700 mb-0">{row.chartTitle2}</div>
                  <div className="w-full flex-1">
                    <ChartForMC
                      data={row.chartLabels.map((label, i) => ({ name: label, value: row.chartData[i] / 1000 }))}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Boxplot */}
            <div className="col-span-3 flex flex-col items-center h-full min-h-0">
              <div className="w-full bg-white rounded-xl shadow border border-gray-100 p-3 flex flex-col items-center h-full min-h-0">
                <div className="text-sm font-bold text-blue-700 mb-0">{row.boxplotTitle}</div>
                <DashboardBoxPlot data={row.boxplot} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MC;