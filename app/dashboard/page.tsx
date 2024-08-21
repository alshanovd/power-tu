import { title } from "@/components/primitives";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-5xl text-center font-semibold">Dashboard</h1>
      <p className="mt-5 text-lg">
        The analytical system for sales analysis based on orders is designed to
        provide comprehensive insights into sales performance by leveraging data
        from customer orders. This system tracks and analyzes various aspects of
        the sales process, including order volume, revenue generation, and order
        status distribution (such as Completed, Cancelled, Shipped, and
        Pending).
      </p>
      <h1 className="text-3xl text-center font-semibold mt-5">
        System Overview
      </h1>
      <h2 className="text-2xl mt-3">Reports</h2>
      <p className="mt-2">
        The Reports section provides detailed summaries and insights into
        various aspects of sales performance. It includes customizable reports
        on key metrics, such as total revenue, order statuses, and customer
        behavior, enabling users to monitor trends, assess business health, and
        make informed decisions.
      </p>
      <h2 className="text-2xl mt-3">Raw Data</h2>
      <p className="mt-2">
        The Raw Data section offers direct access to unprocessed sales and order
        data. This section allows users to explore the underlying data behind
        analyses and reports, providing a transparent view of all recorded
        transactions and facilitating in-depth, custom analyses.
      </p>
      <h2 className="text-2xl mt-3">Upload</h2>
      <p className="mt-2">
        The File Upload section enables users to import external data files
        directly into the system. This feature supports various file formats and
        ensures seamless integration of new data for analysis, allowing users to
        update or expand their datasets efficiently.
      </p>
      <h2 className="text-2xl mt-3">Settings</h2>
      <p className="mt-2">
        The Settings section allows users to customize their experience and
        configure system preferences. Here, users can adjust display options,
        manage account settings, set data processing parameters, and control
        notification preferences to tailor the analytical system to their
        specific needs.
      </p>
    </div>
  );
}
