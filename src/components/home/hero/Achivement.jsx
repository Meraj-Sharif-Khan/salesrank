import React from "react";
// import backupTableIcon from "../../../assets/icons/backup_table.svg";
import AchivementCard from "./AchivementCard";
import backupTable from "../../../assets/icons/backup_table.svg";
import atr from "../../../assets/icons/atr.svg";

const achivement = [
  {
    icon: `${backupTable}`,
    value: "2000",
    tittle: "Your protection",
  },
  {
    icon: `${atr}`,
    value: "7001",
    tittle: "Provide tailored",
  },
];

const Achivement = () => {
  return (
    <div className="mt-[92.11px] flex justify-between flex-wrap gap-2">
      {achivement.map((e, i) => (
        <AchivementCard
          key={i}
          icon={e.icon}
          value={e.value}
          tittle={e.tittle}
        />
      ))}
    </div>
  );
};

export default Achivement;
