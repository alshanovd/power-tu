export default function ReportsPage() {
  return (
    <>
      <h2 className="text-2xl">Welcome to the Reports!</h2>
      <p className="my-3">
        Please select your preferred method to explore and analyze the data:
      </p>
      <ul className="list-disc list-inside my-3">
        <li>Graph: Visualize trends and patterns for a deeper insight.</li>
        <li>Table: View detailed data in a structured format.</li>
        <li>Chart: Summarize and compare data points with visual clarity.</li>
      </ul>
      <p>Choose an option to begin your analysis.</p>
    </>
  );
}
