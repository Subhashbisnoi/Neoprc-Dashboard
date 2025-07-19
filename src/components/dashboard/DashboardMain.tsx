import { DashboardCard } from "./DashboardCard";
import { DashboardLineChart } from "./LineChart";
import { DashboardBoxPlot } from "./BoxPlot";
import { boxPlotData } from "../../data/dashboardData";
import { ChartForMC } from "./Chartformc";
import { ChartForNumber } from "./Chartfornumber";
import HeadingTooltip from "./HeadingTooltip";
import { headingDescriptions } from "./headingDescriptions";

const DashboardMain = ({ handleCardClick }: { handleCardClick: (key: string) => void }) => (
  <div className="max-w-7xl mx-auto h-full">
    <div className="mb-6">
      <div className="rounded-lg bg-blue-50 border border-blue-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <h1 className="text-2xl font-bold text-black-700 tracking-tight">Author I</h1>
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
      <div onClick={() => handleCardClick("authorUpdateRate")} className="h-full"> 
        <DashboardCard title={<HeadingTooltip description={headingDescriptions["Author Update Rate"] || ""}>Author Update Rate</HeadingTooltip>} className="h-full">
          <DashboardLineChart
            data={[ 
              { name: "Jan", value: 45 },
              { name: "Feb", value: 40 },
              { name: "Mar", value: 36 },
              { name: "Apr", value: 38 },
              { name: "May", value: 30 },
              { name: "May", value: 32 },
              { name: "May", value: 26 },
            ]}
            cardTitle="Author Update Rate"
          />
        </DashboardCard>
      </div>
      <div onClick={() => handleCardClick("updateQueryPerArticle") } className="h-full flex flex-col"> 
        <DashboardCard title={<HeadingTooltip description={headingDescriptions["Update Query % per Article (75th Percentile)"] || ""}>Update Query % per Article (75th Percentile)</HeadingTooltip>} className="h-full">
          <DashboardLineChart
            data={[ 
              { name: "Jan", value: 55 },
              { name: "Feb", value: 50 },
              { name: "Mar", value: 45 },
              { name: "Apr", value: 48 },
              { name: "May", value: 40 },
              { name: "May", value: 36 },
              { name: "May", value: 26 },
            ]}
            cardTitle="Update Query % per Article (75th Percentile)"
          />
        </DashboardCard>
      </div>
      <DashboardCard title={<HeadingTooltip description={headingDescriptions["Update Query % per Article"] || ""}>Update Query % per Article</HeadingTooltip>} className="h-full">
        <DashboardBoxPlot
          data={boxPlotData.updateQueryPercent}
          title="Update query %"
        />
      </DashboardCard>
      {/* Row 2 */}
      <DashboardCard title={<HeadingTooltip description={headingDescriptions["Incomplete Proofing Rate"] || ""}>Incomplete Proofing Rate</HeadingTooltip>} className="h-full">
        <DashboardLineChart
          data={[ 
            { name: "Jan", value: 16 },
            { name: "Feb", value: 12 },
            { name: "Mar", value: 13 },
            { name: "Apr", value: 8 },
            { name: "May", value: 7 },
            { name: "May", value: 6 },
            { name: "May", value: 4 },
          ]}
          cardTitle="Incomplete Proofing Rate"
        />
      </DashboardCard>
      <DashboardCard title={<HeadingTooltip description={headingDescriptions["Non Actionable Query per Article (75th Percentile)"] || ""}>Non Actionable Query per Article (75th Percentile)</HeadingTooltip>} className="h-full">
        <DashboardLineChart
          data={[ 
            { name: "Jan", value: 18 },
            { name: "Feb", value: 16 },
            { name: "Mar", value: 14 },
            { name: "Apr", value: 12 },
            { name: "May", value: 10 },
            { name: "May", value: 11 },
            { name: "May", value: 8 },
          ]}
          cardTitle="Non Actionable Query"
        />
      </DashboardCard>
      <DashboardCard title={<HeadingTooltip description={headingDescriptions["Non Actionable Query Per Article"] || ""}>Non Actionable Query Per Article</HeadingTooltip>} className="h-full">
        <DashboardBoxPlot
          data={boxPlotData.queryDistribution}
          title="Query Distribution"
        />
      </DashboardCard>
      {/* Row 3 */}
      <DashboardCard title={<HeadingTooltip description={headingDescriptions["Author Additional Input Rate"] || ""}>Author Additional Input Rate</HeadingTooltip>} className="h-full">
        <DashboardLineChart
          data={[ 
            { name: "Jan", value: 20 },
            { name: "Feb", value: 16 },
            { name: "Mar", value: 12 },
            { name: "Apr", value: 8 },
            { name: "May", value: 9 },
            { name: "May", value: 6 },
            { name: "May", value: 4 },
          ]}
          cardTitle="Author Additional Input Rate"
        />
      </DashboardCard>
      <DashboardCard title={<HeadingTooltip description={headingDescriptions["Additional Edits per Article (75th Percentile)"] || ""}>Additional Edits per Article (75th Percentile)</HeadingTooltip>} className="h-full">
        <ChartForNumber
          data={[
            { name: "Jan", value: 18 },
            { name: "Feb", value: 14 },
            { name: "Mar", value: 12 },
            { name: "Apr", value: 11 },
            { name: "May", value: 10 },
            { name: "May", value: 8 },
            { name: "May", value: 7 },
          ]}
          color="#4682b4"
          cardTitle="Additional Edits per Article (75 Percentile)"
        />
      </DashboardCard>
      <DashboardCard title={<HeadingTooltip description={headingDescriptions["Additional Edits per Article"] || ""}>Additional Edits per Article</HeadingTooltip>} className="h-full">
        <DashboardBoxPlot
          data={boxPlotData.additionalEditsBoxplot}
          title="Additional Edits per Article"
        />
      </DashboardCard>
    </div>
  </div>
);

export default DashboardMain;
