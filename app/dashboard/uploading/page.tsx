import { Input } from "@nextui-org/input";

import { title } from "@/components/primitives";

export default function UploadingPage() {
  return (
    <div>
      <h1 className="text-5xl text-center font-semibold">Upload File</h1>
      <p className="mt-5 text-lg">
        The File Upload section allows users to easily upload data files into
        the system. By supporting various formats, this section ensures that
        users can quickly and efficiently integrate new data for analysis,
        enabling seamless updates and expansion of the existing dataset.
      </p>
      <div className="mt-5 flex">
        <Input
          isClearable
          className="max-w-xs"
          label="Please, select the file"
          placeholder="File"
          type="file"
          variant="bordered"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-3">
        Please, follow the rules for a CSV file:
      </h2>
      <ul>
        <li className="text-lg mt-5 font-semibold">File Format</li>
        <ul className="mt-2">
          <li>Encoding: UTF-8</li>
          <li>Delimiter: Comma `,`</li>
          <li>
            Quotes: Fields with special characters or commas should be enclosed
            in double quotes `"`
          </li>
        </ul>

        <li className="text-lg mt-5 font-semibold">Headers</li>
        <ul className="mt-2">
          <li>
            Header Row: First row must contain column names matching the
            database schema exactly, including case sensitivity
          </li>
        </ul>

        <li className="text-lg mt-5 font-semibold">Data Types</li>
        <ul className="mt-2">
          <li>Integers: Numeric only, no decimals</li>
          <li>
            Strings: Enclose in double quotes if they contain commas or special
            characters
          </li>
          <li>
            Dates: Use `YYYY-MM-DD` for dates and `YYYY-MM-DD HH:MM:SS` for
            timestamps
          </li>
          <li>Decimals: Use a period `.` as the decimal separator</li>
        </ul>

        <li className="text-lg mt-5 font-semibold">Data Integrity</li>
        <ul className="mt-2">
          <li>Primary Keys: Unique and not null</li>
          <li>
            Foreign Keys: Must match existing entries in referenced tables
          </li>
          <li>Mandatory Fields: No nulls for required columns</li>
        </ul>

        <li className="text-lg mt-5 font-semibold">Special Characters</li>
        <ul className="mt-2">
          <li>
            Escape Characters: Use double quotes to escape quotes within fields
          </li>
        </ul>

        <li className="text-lg mt-5 font-semibold">File Naming</li>
        <ul className="mt-2">
          <li>
            Naming Convention: Include content, date, and version in the
            filename (e.g., `orders_2024-08-18_v1.csv`)
          </li>
        </ul>
      </ul>
    </div>
  );
}
