const ReportCards = () => {
  const cards = [
    {
      title: "Total Students",
      value: 24,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Present",
      value: 18,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Absent",
      value: 6,
      color: "from-red-500 to-red-700",
    },
    {
      title: "Attendance Rate",
      value: "75%",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-[400px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${card.color} text-white p-6 rounded-2xl shadow-lg`}
        >
          <h2 className="text-sm mb-16 font-bold opacity-80">
            {card.title}
          </h2>

          <p className="text-4xl font-bold mt-3">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReportCards;