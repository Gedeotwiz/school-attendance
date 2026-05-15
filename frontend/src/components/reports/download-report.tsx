import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const DownloadReport = () => {

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.text("Attendance Report", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Date", "Present", "Absent"]],
      body: [
        ["2026-05-10", "18", "6"],
        ["2026-05-11", "20", "4"],
        ["2026-05-12", "16", "8"],
      ],
    });

    doc.save("attendance-report.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
    >
      Download Report
    </button>
  );
};

export default DownloadReport;