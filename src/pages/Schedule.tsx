import { useState, useEffect } from "react";

const Schedule: React.FC = () => {
  const [tableHtml, setTableHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTableHtml = async () => {
      try {
        const response = await fetch("/schedule-table.html");
        if (!response.ok) {
          throw new Error("Failed to load schedule table");
        }
        const html = await response.text();
        setTableHtml(html);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    loadTableHtml();
  }, []);

  if (loading) {
    return (
      <div id="schedule" className="flex justify-center">
        <div className="schedule-container flex flex-col items-center w-full max-w-full">
          <h1 className="text-center text-2xl font-bold mb-6">Availability</h1>
          <div className="text-center">Loading schedule...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="schedule" className="flex justify-center">
        <div className="schedule-container flex flex-col items-center w-full max-w-full">
          <h1 className="text-center text-2xl font-bold mb-6">Availability</h1>
          <div className="text-center text-red-600">
            Error loading schedule: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="schedule" className="flex justify-center">
      <div className="schedule-container flex flex-col items-center w-full max-w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Availability</h1>
        <div className="table-wrapper">
          {/* SCHEDULE UPDATES: Edit /public/schedule-table.html */}
          <div dangerouslySetInnerHTML={{ __html: tableHtml }} />
          {/* DO NOT EDIT BEYOND THIS POINT */}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
