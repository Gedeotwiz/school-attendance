import { attendanceData } from "../../costant/data";

export const StatusCard = () =>{
    const today = new Date();

const isSameDay = (d1: Date, d2: Date) =>
  d1.toDateString() === d2.toDateString();

const isSameMonth = (d: Date) =>
  d.getMonth() === today.getMonth() &&
  d.getFullYear() === today.getFullYear();

const isSameYear = (d: Date) =>
  d.getFullYear() === today.getFullYear();

const isThisWeek = (d: Date) => {
  const diff = (today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
  return diff <= 7;
};


let todayPresent = 0, todayAbsent = 0;
let weekPresent = 0, weekAbsent = 0;
let monthPresent = 0, monthAbsent = 0;
let yearPresent = 0, yearAbsent = 0;

const statsCards = [
  {
    title: "Total Students",
    value: 24,
    parcent:100,
    type: "highlight",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Dropped Students",
    value: 3,
    parcent:12,
    type: "highlight",
    gradient: "from-gray-500 to-gray-700",
  },
  {
    title: "Today",
    present: todayPresent,
    absent: todayAbsent,
    type: "attendance",
  },
  {
    title: "This Week",
    present: weekPresent,
    absent: weekAbsent,
    type: "attendance",
  },
  {
    title: "This Month",
    present: monthPresent,
    absent: monthAbsent,
    type: "attendance",
  },
  {
    title: "This Year",
    present: yearPresent,
    absent: yearAbsent,
    type: "attendance",
  },
];

attendanceData.forEach(item => {
  const date = new Date(item.date);

  item.records.forEach(r => {
    if (isSameDay(date, today)) {
      r.status === "present" ? todayPresent++ : todayAbsent++;
    }

    if (isThisWeek(date)) {
      r.status === "present" ? weekPresent++ : weekAbsent++;
    }

    if (isSameMonth(date)) {
      r.status === "present" ? monthPresent++ : monthAbsent++;
    }

    if (isSameYear(date)) {
      r.status === "present" ? yearPresent++ : yearAbsent++;
    }
  });
});
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
  {statsCards.map((card, index) => {
    
   
    if (card.type === "highlight") {
      return (
        <div
          key={index}
          className={`bg-[#eeeeee73] border-1 shadow-lg hover:scale-[1.02] border-primary  w-[270px] p-6 rounded-2xl `}
        >
           <h2 className="text-dark font-bold pb-5 dark:text-universal">
          {card.title}
        </h2>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">{card.value}</p>
            <p>{card.parcent}%</p>
          </div>
        </div>
      );
    }

    
    return (
      <div
        key={index}
        className="bg-[#eeeeee73] border-1 border-primary dark:bg-white hover:scale-[1.02] w-[270px] p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-dark font-bold pb-5 dark:text-universal">
          {card.title}
        </h2>

        <p className="text-green-500 font-bold">
          Present: {card.present}
        </p>

        <p className="text-red-500 font-bold">
          Absent: {card.absent}
        </p>
      </div>
    );
  })}
</div>
    )
}