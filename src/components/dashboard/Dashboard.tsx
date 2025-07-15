import { DashboardCard } from "./DashboardCard";
import { DashboardLineChart } from "./LineChart";
import { DashboardBoxPlot } from "./BoxPlot";
import { lineChartData, boxPlotData } from "../../data/dashboardData";

export const Dashboard = () => {
  return (
    <div className="h-screen bg-background p-3">
      <div className="max-w-7xl mx-auto h-full">
        <div className="mb-3">
          <h1 className="text-xl font-bold text-foreground mb-1">Neoprc Analytics Dashboard</h1>
          
        </div>
        
        <div className="grid grid-cols-3 gap-3 h-[calc(100vh-100px)]">
          {/* Row 1 */}
          <DashboardCard title="Author Update Rate">
            <DashboardLineChart 
              data={lineChartData.authorUpdateRate}
              cardTitle="Author Update Rate"
            />
          </DashboardCard>
          <DashboardCard title="Update Query % per Article">
            <DashboardLineChart 
              data={lineChartData.updateQueryPerArticle}
              cardTitle="Update Query % per Article"
            />
          </DashboardCard>
          <DashboardCard title="Update Query %">
            <DashboardBoxPlot 
              data={boxPlotData.updateQueryPercent}
              title="Update query %"
            />
          </DashboardCard>
          {/* Row 2 */}
          <DashboardCard title="Author Confirmation Rate & Rejection Rate">
            <div className="flex flex-row h-full gap-2 items-stretch">
              <div className="w-1/2 flex flex-col">
                <DashboardLineChart data={lineChartData.authorConfirmationRate} cardTitle="Author Confirmation Rate" />
                <div className="text-xs text-center text-muted-foreground mt-1">Confirmation Rate</div>
              </div>
              <div className="w-px bg-border mx-2" />
              <div className="w-1/2 flex flex-col">
                <DashboardLineChart data={lineChartData.authorRejectionRate} cardTitle="Author Rejection Rate" />
                <div className="text-xs text-center text-muted-foreground mt-1">Rejection Rate</div>
              </div>
            </div>
          </DashboardCard>
          <DashboardCard title="Incomplete Proofing Rate">
            <DashboardLineChart 
              data={lineChartData.incompleteProofingRate}
              cardTitle="Incomplete Proofing Rate"
            />
          </DashboardCard>
          <DashboardCard title="New Actionable Query">
            <DashboardLineChart 
              data={lineChartData.newActionableQuery}
              cardTitle="New Actionable Query"
            />
          </DashboardCard>
          {/* Row 3 */}
          <DashboardCard title="Author Additional Input Rate">
            <DashboardLineChart 
              data={lineChartData.authorAdditionalInputRate}
              cardTitle="Author Additional Input Rate"
            />
          </DashboardCard>
          <DashboardCard title="Additional Edits per Article">
            <DashboardLineChart 
              data={lineChartData.additionalEditsPerArticle}
              cardTitle="Additional Edits per Article"
            />
          </DashboardCard>
          <DashboardCard title="Additional Edits per Article">
            <DashboardBoxPlot 
              data={boxPlotData.additionalEditsBoxplot}
              title="Additional Edits per Article"
            />
          </DashboardCard>
          {/* Row 4 */}
          <DashboardCard title="Article with non Standard Query">
            <DashboardLineChart 
              data={lineChartData.articleNonStandardQuery}
              cardTitle="Article with non Standard Query"
            />
          </DashboardCard>
          <DashboardCard title="Non Standard Query %">
            <DashboardLineChart 
              data={lineChartData.nonStandardQueryPercent}
              cardTitle="Non Standard Query %"
            />
          </DashboardCard>
          <DashboardCard title="Query Distribution">
            <DashboardBoxPlot 
              data={boxPlotData.queryDistribution}
              title="Query Distribution"
            />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};