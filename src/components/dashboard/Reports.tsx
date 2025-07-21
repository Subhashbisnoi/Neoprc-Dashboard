
import { DashboardLineChart } from "./LineChart";
import { DashboardBoxPlot } from "./BoxPlot";
import HeadingTooltip from "./HeadingTooltip";
import { headingDescriptions } from "./headingDescriptions";
import { ChartForNumber } from './Chartfornumber';

const dummyLineData = [
  [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 15 },
    { name: "Apr", value: 25 },
    { name: "May", value: 18 },
  ],
  [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 28 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 32 },
    { name: "May", value: 40 },
  ],
  [
    { name: "Jan", value: 12 },
    { name: "Feb", value: 18 },
    { name: "Mar", value: 22 },
    { name: "Apr", value: 20 },
    { name: "May", value: 25 },
  ],
  [
    { name: "Jan", value: 5 },
    { name: "Feb", value: 65 },
    { name: "Mar", value: 10 },
    { name: "Apr", value: 25 },
    { name: "May", value: 95 },
  ],
  [
    { name: "Jan", value: 98 },
    { name: "Feb", value: 10 },
    { name: "Mar", value: 75 },
    { name: "Apr", value: 98 },
    { name: "May", value: 5 },
  ]
];

const dummyBoxPlotData = [
  { min: 5, q1: 10, median: 15, q3: 20, max: 25, outliers: [3, 27] },
  { min: 12, q1: 18, median: 22, q3: 28, max: 35, outliers: [10, 38] },
  { min: 8, q1: 14, median: 18, q3: 22, max: 30, outliers: [6, 32] },
];

const rowTitles = [
  ["CE Rejection Rate", "CE Rejection per Article(75th Percentile)", "CE Rejection per Article"],
  ["Author Confirmation Rate", "Articles With No Queries(75th Percentile)", "Articles With Non Standard Query"],
  ["Preview Success %", "Preview Fails per Article(75th Percentile)", "Preview Generation Time"],
  ["Rejection","Rejection","Rejection"]
];

export const Reports = () => {
  return (
    <div className="h-screen bg-background flex">
      <main className="flex-1 p-3 relative">
        <div className="max-w-7xl mx-auto h-full">
          <div className="mb-6">
            <div className="rounded-lg bg-blue-50 border border-blue-200 px-6 py-4 flex items-center justify-between shadow-sm">
              <h1 className="text-2xl font-bold text-black-700 tracking-tight">Author II</h1>
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
          </div>
          <div className="grid grid-cols-3 gap-3 h-[calc(100vh-120px)] grid-rows-3">
            {/* Row 1 */}
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col items-center justify-center shadow p-2">
                <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions["CE Rejection Rate"] || ""}>{rowTitles[0][0]}</HeadingTooltip>
</span>
                <DashboardLineChart data={dummyLineData[0]} cardTitle={rowTitles[0][0]} />
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col items-center justify-center shadow p-2">
                <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions["CE Rejection per Article (75th Percentile)"] || ""}>{rowTitles[0][1]}</HeadingTooltip>
</span>
                <DashboardLineChart data={dummyLineData[1]} cardTitle={rowTitles[0][1]} />
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col items-center justify-center shadow p-2">
                <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions[rowTitles[0][2]] || ""}>{rowTitles[0][2]}</HeadingTooltip>
</span>
                <DashboardBoxPlot data={dummyBoxPlotData[0]} title={rowTitles[0][2]} />
              </div>
            </div>
            {/* Row 2 */}
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col shadow p-2 justify-between" style={{height: '100%'}}>
                {/* Top: Author Confirmation Rate */}
                <div className="flex-1 flex flex-col items-center justify-center min-h-0" style={{height: '50%'}}>
                  <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions[rowTitles[1][0]] || ""}>{rowTitles[1][0]}</HeadingTooltip>
</span>
                  <DashboardLineChart data={dummyLineData[3]} cardTitle={rowTitles[1][0]} />
                </div>
                {/* Divider */}
                <div className="my-1 w-full border-t border-gray-200"></div>
                {/* Bottom: CE Rejection Rate */}
                <div className="flex-1 flex flex-col items-center justify-center min-h-0" style={{height: '50%'}}>
                  <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions["Rejetion"] || ""}>{rowTitles[3][0]}</HeadingTooltip>
</span>
                  <DashboardLineChart data={dummyLineData[4]} cardTitle={rowTitles[0][0]} />
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col items-center justify-center shadow p-2">
                <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions["Article With No Queries (75th Percentile)"] || ""}>{rowTitles[1][1]}</HeadingTooltip>
</span>
                <DashboardLineChart data={dummyLineData[0]} cardTitle={rowTitles[1][1]} />
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col items-center justify-center shadow p-2">
                <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions[rowTitles[1][2]] || ""}>{rowTitles[1][2]}</HeadingTooltip>
</span>
                <DashboardLineChart data={dummyLineData[0]} cardTitle={rowTitles[1][2]} />
              </div>
            </div>
            {/* Row 3 */}
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col items-center justify-center shadow p-2">
                <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions[rowTitles[2][0]] || ""}>{rowTitles[2][0]}</HeadingTooltip>
</span>
                <DashboardLineChart data={dummyLineData[1]} cardTitle={rowTitles[2][0]} />
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col items-center justify-center shadow p-2">
                <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions["Preview Fails per Article (75th Percentile)"] || ""}>{rowTitles[2][1]}</HeadingTooltip>
</span>
                <ChartForNumber data={dummyLineData[2]} cardTitle={rowTitles[2][1]} />
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-lg bg-muted h-full flex flex-col items-center justify-center shadow p-2">
                <span className="text-lg font-medium text-black mb-2 self-start">
  <HeadingTooltip description={headingDescriptions[rowTitles[2][2]] || ""}>{rowTitles[2][2]}</HeadingTooltip>
</span>
                <DashboardBoxPlot data={dummyBoxPlotData[2]} title={rowTitles[2][2]} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
