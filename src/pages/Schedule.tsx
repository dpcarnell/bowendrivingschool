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
          throw new Error("Schedule currently unavailable");
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
          <div className="text-center text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div id="schedule" className="flex justify-center">
      <div className="schedule-container flex flex-col items-center w-full max-w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Availability</h1>
        <p className="text-center text-xl font-bold mb-6">
          2026 lessons availability will be posted in early January.
        </p>
        <div className="table-wrapper">
          <div dangerouslySetInnerHTML={{ __html: tableHtml }} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
