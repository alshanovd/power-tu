import { violetColor } from "@/components/primitives";

export default function DataPage() {
  return (
    <div>
      <h2 className="text-2xl">
        Welcome to the <span className={violetColor}>Raw Data</span>!
      </h2>
      <p className="mt-3">
        The Raw Data section provides users with direct access to unfiltered
        sales and order data. This section is essential for those who need to
        examine the original data behind the analyses, offering the flexibility
        to conduct custom queries and in-depth investigations based on the
        complete dataset.
      </p>
      <h2 className="text-2xl mt-5">← Please, choose the table</h2>
    </div>
  );
}
