// Maps dashboard headings to their tooltip descriptions
export const headingDescriptions: Record<string, string> = {
  // Proof
  "Proof Readiness Rate": "% of articles with proof links generated without errors.",
  "Non-proof Readiness": "Errors due to non-compliance submissions or technical issues.",
  "TTR": "Time taken by support/supplier to fix errors.",
  "Proof Readiness Time": "Time taken by the tool to generate proof links.",
  "TAT": "Total time taken from start to end of proofing.",
  "Proof Time": "Time taken by the author to proof the article.",
  "Proofing Time": "Actual time taken by the author to complete the proofing of the article.",
  "TAT Per Article": "Turn Around Time per article.",
  "Proofing Time Per Article": "Time taken to proof per article",
  "Validation Time per Article": "Time taken by the validator per article.",
  "Validation Time": "Actual time taken by the validator to proof the article.",

  // DashboardMain
  "Author Update Rate": "% of articles for which update query has been raised.",
  "Update Query % per Article (75th Percentile)": "% of update queries against total queries per article.",
  "Update Query % per Article": "% of update queries against total queries per article.",
  "Non Actionable Query Per Article": "% of update queries that are non-actionable.",
  "Non Actionable Query per Article (75th Percentile)": " % of update queries that are non-actionable",
  "Incomplete Proofing Rate": "Articles with non-actionable queries.",
  "Non-actionable Query %": "% of update queries that are non-actionable.",
  "Author Additional Input Rate": "% of articles with additional edits from authors.",
  "Additional Edits per Article (75th Percentile)": "Number of additional edits by author per article.",
  "Additional Edits per Article": "Number of additional edits by author per article.",

  // Reports
  "CE Rejection Rate": "% of articles which has author CE rejections.",
  "CE Rejection per Article (75th Percentile)": "% of CE rejections by author per article.",
  "CE Rejection per Article": "% of CE rejections by author per article.",
  "Author Confirmation Rate": "% of articles that has confirmation queries confirmed by author.",
  "Rejetion":"% of articles that has author rejections for confirmation queries.",
  "Author Rejection": "% of asrticles that has author rejections for confirmation queries.",
  "Article With No Queries (75th Percentile)": "% of articles with no queries raised.",
  "Article With Non Standard Query": "% of articles with no standard queries.",
  "Preview Success %": "% of articles with no preview failures.",
  "Preview Fails per Article (75th Percentile)": "Number of preview failures per article.",
  "Preview Generation Time": "Time taken to generate preview.",

  // MC
  "Validation Edits Index": "% of articles with validator edits.",
  "Validation Value Index": "% of articles where in validator has edited the author edits.",
  "Validation Additional Action Index": "% of articles with additional actions by validator.",
  "Incomplete Validation Index": "% of articles where validator raised comments.",
};
