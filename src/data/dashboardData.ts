// Dummy data for dashboard charts
export const lineChartData = {
  authorUpdateRate: [
    { name: 'Jan', value: 65, date: '2024-01-01' },
    { name: 'Feb', value: 78, date: '2024-02-01' },
    { name: 'Mar', value: 82, date: '2024-03-01' },
    { name: 'Apr', value: 75, date: '2024-04-01' },
    { name: 'May', value: 89, date: '2024-05-01' },
    { name: 'Jun', value: 94, date: '2024-06-01' },
    { name: 'Jul', value: 87, date: '2024-07-01' },
  ],
  
  updateQueryPerArticle: [
    { name: 'Jan', value: 23, date: '2024-01-01' },
    { name: 'Feb', value: 31, date: '2024-02-01' },
    { name: 'Mar', value: 28, date: '2024-03-01' },
    { name: 'Apr', value: 35, date: '2024-04-01' },
    { name: 'May', value: 42, date: '2024-05-01' },
    { name: 'Jun', value: 38, date: '2024-06-01' },
    { name: 'Jul', value: 45, date: '2024-07-01' },
  ],
  
  authorConfirmationRate: [
    { name: 'Jan', value: 87, date: '2024-01-01' },
    { name: 'Feb', value: 82, date: '2024-02-01' },
    { name: 'Mar', value: 91, date: '2024-03-01' },
    { name: 'Apr', value: 88, date: '2024-04-01' },
    { name: 'May', value: 95, date: '2024-05-01' },
    { name: 'Jun', value: 92, date: '2024-06-01' },
    { name: 'Jul', value: 89, date: '2024-07-01' },
  ],
  authorRejectionRate: [
    { name: 'Jan', value: 13, date: '2024-01-01' },
    { name: 'Feb', value: 18, date: '2024-02-01' },
    { name: 'Mar', value: 9, date: '2024-03-01' },
    { name: 'Apr', value: 12, date: '2024-04-01' },
    { name: 'May', value: 5, date: '2024-05-01' },
    { name: 'Jun', value: 8, date: '2024-06-01' },
    { name: 'Jul', value: 11, date: '2024-07-01' },
  ],
  
  incompleteProofingRate: [
    { name: 'Jan', value: 12, date: '2024-01-01' },
    { name: 'Feb', value: 8, date: '2024-02-01' },
    { name: 'Mar', value: 15, date: '2024-03-01' },
    { name: 'Apr', value: 6, date: '2024-04-01' },
    { name: 'May', value: 10, date: '2024-05-01' },
    { name: 'Jun', value: 7, date: '2024-06-01' },
    { name: 'Jul', value: 9, date: '2024-07-01' },
  ],
  
  newActionableQuery: [
    { name: 'Jan', value: 34, date: '2024-01-01' },
    { name: 'Feb', value: 28, date: '2024-02-01' },
    { name: 'Mar', value: 41, date: '2024-03-01' },
    { name: 'Apr', value: 37, date: '2024-04-01' },
    { name: 'May', value: 45, date: '2024-05-01' },
    { name: 'Jun', value: 39, date: '2024-06-01' },
    { name: 'Jul', value: 43, date: '2024-07-01' },
  ],
  
  authorAdditionalInputRate: [
    { name: 'Jan', value: 42, date: '2024-01-01' },
    { name: 'Feb', value: 38, date: '2024-02-01' },
    { name: 'Mar', value: 45, date: '2024-03-01' },
    { name: 'Apr', value: 51, date: '2024-04-01' },
    { name: 'May', value: 47, date: '2024-05-01' },
    { name: 'Jun', value: 53, date: '2024-06-01' },
    { name: 'Jul', value: 49, date: '2024-07-01' },
  ],
  
  additionalEditsPerArticle: [
    { name: 'Jan', value: 2.3, date: '2024-01-01' },
    { name: 'Feb', value: 2.1, date: '2024-02-01' },
    { name: 'Mar', value: 2.8, date: '2024-03-01' },
    { name: 'Apr', value: 2.5, date: '2024-04-01' },
    { name: 'May', value: 2.0, date: '2024-05-01' },
    { name: 'Jun', value: 2.4, date: '2024-06-01' },
    { name: 'Jul', value: 2.6, date: '2024-07-01' },
  ],
  
  articleNonStandardQuery: [
    { name: 'Jan', value: 18, date: '2024-01-01' },
    { name: 'Feb', value: 22, date: '2024-02-01' },
    { name: 'Mar', value: 16, date: '2024-03-01' },
    { name: 'Apr', value: 25, date: '2024-04-01' },
    { name: 'May', value: 20, date: '2024-05-01' },
    { name: 'Jun', value: 19, date: '2024-06-01' },
    { name: 'Jul', value: 23, date: '2024-07-01' },
  ],
  
  nonStandardQueryPercent: [
    { name: 'Jan', value: 14, date: '2024-01-01' },
    { name: 'Feb', value: 18, date: '2024-02-01' },
    { name: 'Mar', value: 12, date: '2024-03-01' },
    { name: 'Apr', value: 21, date: '2024-04-01' },
    { name: 'May', value: 16, date: '2024-05-01' },
    { name: 'Jun', value: 15, date: '2024-06-01' },
    { name: 'Jul', value: 19, date: '2024-07-01' },
  ],
};

export const boxPlotData = {
  updateQueryPercent: {
    min: 5,
    q1: 18,
    median: 25,
    q3: 35,
    max: 48,
    outliers: [52, 3]
  },
  additionalEditsBoxplot: {
    min: 0.5,
    q1: 1.8,
    median: 2.4,
    q3: 3.1,
    max: 4.2,
    outliers: [5.1]
  },
  queryDistribution: {
    min: 8,
    q1: 15,
    median: 22,
    q3: 28,
    max: 35,
    outliers: [42, 6]
  },
  // Added for Time To Resolution boxplots
  nonCompliance: {
    min: 10,
    q1: 18,
    median: 25,
    q3: 30,
    max: 40,
    outliers: []
  },
  support: {
    min: 10,
    q1: 18,
    median: 25,
    q3: 30,
    max: 40,
    outliers: []
  }
};