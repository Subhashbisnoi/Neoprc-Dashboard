import { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { DashboardLineChart } from "./LineChart";
import { DashboardBoxPlot } from "./BoxPlot";
import { lineChartData, boxPlotData } from "../../data/dashboardData";

const editableCards = [
	{
		key: "authorUpdateRate",
		title: "Author Update Rate",
		initialData: lineChartData.authorUpdateRate,
		cardTitle: "Author Update Rate",
	},
	{
		key: "updateQueryPerArticle",
		title: "Update Query % per Article",
		initialData: lineChartData.updateQueryPerArticle,
		cardTitle: "Update Query % per Article",
	},
	{
		key: "additionalEditsPerArticle",
		title: "Additional Edits per Article",
		initialData: lineChartData.additionalEditsPerArticle,
		cardTitle: "Additional Edits per Article",
	},
	
];

export const Dashboard = () => {
	const [expandedCard, setExpandedCard] = useState<string | null>(null);
	const [editData, setEditData] = useState<any>(null);

	const handleCardClick = (key: string) => {
		const config = editableCards.find((c) => c.key === key);
		if (config) {
			setExpandedCard(key);
			setEditData(config.initialData.map((d: any) => ({ ...d })));
		}
	};

	const handleDataChange = (idx: number, field: string, value: string) => {
		setEditData((prev: any) => {
			const newData = [...prev];
			newData[idx][field] = field === "value" ? Number(value) : value;
			return newData;
		});
	};

	return (
		<div className="h-screen bg-background p-3">
			<div className="max-w-7xl mx-auto h-full">
				<div className="mb-3">
					<h1 className="text-xl font-bold text-foreground mb-1">
						Neoprc Analytics Dashboard
					</h1>
				</div>
				<div className="grid grid-cols-3 gap-3 h-[calc(100vh-100px)]">
					{/* Row 1 */}
					<div onClick={() => handleCardClick("authorUpdateRate")}>
						<DashboardCard title="Author Update Rate">
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
					<div onClick={() => handleCardClick("updateQueryPerArticle")}>
						<DashboardCard title="Update Query % per Article">
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
								cardTitle="Update Query % per Article"
							/>
						</DashboardCard>
					</div>
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
								<DashboardLineChart
									data={[
										{ name: "Jan", value: 80 },
										{ name: "Feb", value: 84 },
										{ name: "Mar", value: 86 },
										{ name: "Apr", value: 85 },
										{ name: "May", value: 89 },
										{ name: "May", value: 94 },
										{ name: "May", value: 96 },
									]}
									cardTitle="Author Confirmation Rate"
								/>
								<div className="text-xs text-center text-muted-foreground mt-1">
									Confirmation Rate
								</div>
							</div>
							<div className="w-px bg-border mx-2" />
							<div className="w-1/2 flex flex-col">
								<DashboardLineChart
									data={[
										{ name: "Jan", value: 20 },
										{ name: "Feb", value: 16 },
										{ name: "Mar", value: 14 },
										{ name: "Apr", value: 15 },
										{ name: "May", value: 11 },
										{ name: "May", value: 6 },
										{ name: "May", value: 4 },
									]}
									cardTitle="Author Rejection Rate"
								/>
								<div className="text-xs text-center text-muted-foreground mt-1">
									Rejection Rate
								</div>
							</div>
						</div>
					</DashboardCard>
					<DashboardCard title="Incomplete Proofing Rate">
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
					<DashboardCard title="New Actionable Query">
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
							cardTitle="New Actionable Query"
						/>
					</DashboardCard>
					{/* Row 3 */}
					<DashboardCard title="Author Additional Input Rate">
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
					<DashboardCard title="Additional Edits per Article">
						<DashboardLineChart
							data={[
								{ name: "Jan", value: 18 },
								{ name: "Feb", value: 14 },
								{ name: "Mar", value: 12 },
								{ name: "Apr", value: 11 },
								{ name: "May", value: 10 },
								{ name: "May", value: 8 },
								{ name: "May", value: 7 },
							]}
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
							data={[
								{ name: "Jan", value: 20 },
								{ name: "Feb", value: 16 },
								{ name: "Mar", value: 17 },
								{ name: "Apr", value: 12 },
								{ name: "May", value: 9 },
								{ name: "May", value: 8 },
								{ name: "May", value: 6 },
							]}
							cardTitle="Article with non Standard Query"
						/>
					</DashboardCard>
					<DashboardCard title="Non Standard Query %">
						<DashboardLineChart
							data={[
								{ name: "Jan", value: 16 },
								{ name: "Feb", value: 14 },
								{ name: "Mar", value: 15 },
								{ name: "Apr", value: 13 },
								{ name: "May", value: 10 },
								{ name: "May", value: 8 },
								{ name: "May", value: 7 },
							]}
							cardTitle="Non Standard Query %"
						/>
					</DashboardCard>
					<DashboardCard title="Query Distribution per Article">
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
