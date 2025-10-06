import React, { useState, useEffect, useRef } from "react";
import { Megaphone } from "lucide-react";

// Sample announcements (unchanged)
const announcements = [
  { date: "2025-10-01", text: "Water quality report for October 2025 released." },
  { date: "2025-09-20", text: "New AI-powered HMPI calculator is live for public use." },
  { date: "2025-09-10", text: "NGOs can now upload bulk CSV water test data." },
  { date: "2025-08-30", text: "Early warning alerts activated for arsenic contamination in 5 districts." },
  { date: "2025-08-15", text: "Public awareness campaign for clean water conducted in rural areas." },
  { date: "2025-07-28", text: "Government approved funding for 10 new water purification plants." },
  { date: "2025-07-10", text: "Annual water safety audit reports published online." },
  { date: "2025-06-25", text: "New IoT water sensors deployed across 50 villages." },
  { date: "2025-06-01", text: "Real-time heatmap for water contamination is live." },
  { date: "2025-05-15", text: "Training session for NGO volunteers on water testing techniques." },
  { date: "2025-05-01", text: "Portal updated with multilingual support for local languages." },
  { date: "2025-04-20", text: "AI-based prediction for flood contamination now available." },
  { date: "2025-04-05", text: "Alert: High nitrate levels detected in northern districts." },
  { date: "2025-03-22", text: "NGOs successfully submitted 10,000+ water quality reports this month." },
  { date: "2025-03-10", text: "Public login system upgraded with two-factor authentication." },
  { date: "2025-02-28", text: "Scientists published research on arsenic mitigation techniques." },
  { date: "2025-02-15", text: "Portal mobile app released on Android and iOS platforms." },
  { date: "2025-01-30", text: "Early warning alerts system tested successfully for seasonal floods." },
  { date: "2025-01-15", text: "Government launches initiative for safe drinking water in schools." },
  { date: "2024-12-25", text: "Annual water quality review meeting conducted with stakeholders." },
];

// Helper to group announcements by month-year in descending order
function groupAnnouncementsByMonth(data) {
  const groups = {};
  data.forEach(({ date, text }) => {
    const d = new Date(date);
    const monthYear = d.toLocaleString("default", { month: "long", year: "numeric" });
    if (!groups[monthYear]) groups[monthYear] = [];
    groups[monthYear].push({ date, text });
  });
  // Sort groups descending by date
  return Object.entries(groups).sort((a, b) => new Date(b[1][0].date) - new Date(a[1][0].date));
}

export default function Announcements() {
  const [filter, setFilter] = useState("");
  const tickerRef = useRef(null);
  const [tickerPaused, setTickerPaused] = useState(false);

  // Filtered announcements according to search
  const filteredAnnouncements = announcements.filter(
    (item) =>
      item.text.toLowerCase().includes(filter.toLowerCase()) ||
      item.date.includes(filter)
  );

  // Group filtered announcements by month-year
  const groupedAnnouncements = groupAnnouncementsByMonth(filteredAnnouncements);

  // Auto scroll ticker logic
  useEffect(() => {
    if (!tickerRef.current) return;
    const ticker = tickerRef.current;
    let scrollAmount = 0;
    let requestId;

    const step = () => {
      if (!tickerPaused) {
        scrollAmount += 1;
        if (scrollAmount >= ticker.scrollWidth / 2) scrollAmount = 0;
        ticker.scrollLeft = scrollAmount;
      }
      requestId = requestAnimationFrame(step);
    };
    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, [tickerPaused]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      <div className="max-w-5xl w-full bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-indigo-800 mb-6 flex items-center gap-3">
          <Megaphone size={28} className="text-amber-500" />
          Announcements
        </h1>

        {/* Search box */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search announcements by keywords or date..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-indigo-600 focus:ring focus:ring-indigo-300 transition"
            aria-label="Search announcements"
          />
        </div>

        {/* Scrollable horizontal ticker */}
        {filteredAnnouncements.length > 0 ? (
          <div
            ref={tickerRef}
            onMouseEnter={() => setTickerPaused(true)}
            onMouseLeave={() => setTickerPaused(false)}
            className="relative whitespace-nowrap overflow-x-hidden border-b border-gray-300 py-3 mb-8 cursor-pointer select-none text-gray-700 font-medium"
            aria-label="Recent announcements ticker"
          >
            <div style={{ display: "inline-block", paddingRight: 100 }}>
              {filteredAnnouncements.map((item, idx) => (
                <span key={idx} className="mx-6 inline-block">
                  <span className="font-semibold text-indigo-600 mr-1">{item.date}:</span>
                  {item.text}
                </span>
              ))}
            </div>
            {/* Duplicate for seamless scrolling */}
            <div aria-hidden="true" style={{ display: "inline-block", paddingRight: 100 }}>
              {filteredAnnouncements.map((item, idx) => (
                <span key={"dup_" + idx} className="mx-6 inline-block">
                  <span className="font-semibold text-indigo-600 mr-1">{item.date}:</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 italic mb-8">No announcements found.</p>
        )}

        {/* Grouped Announcements List */}
        <div className="max-h-[480px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-gray-200">
          {groupedAnnouncements.length === 0 ? (
            <p className="text-gray-500 italic">No announcements to show.</p>
          ) : (
            groupedAnnouncements.map(([monthYear, items]) => (
              <section key={monthYear} className="mb-8">
                <h2 className="text-xl font-semibold text-indigo-700 mb-4 border-b border-indigo-300 pb-1">{monthYear}</h2>
                <ul className="space-y-4">
                  {items.map(({ date, text }, idx) => (
                    <li
                      key={idx}
                      className="bg-indigo-50 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-default"
                      tabIndex={0}
                      aria-label={`Announcement on ${date}: ${text}`}
                    >
                      <time dateTime={date} className="font-medium text-indigo-600 mr-2">
                        {date}:
                      </time>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
