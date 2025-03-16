//
// DevHub Website
// UI Components
// Counter
//

import { LucideCalendar, LucideHeartHandshake, LucideUser } from "lucide-react";
import Statistic from "./Statistic";

export default function Statistics() {
  const stats = [
    {
      title: "Members",
      icon: <LucideUser />,
      value: 165,
    },
    {
      title: "Events",
      icon: <LucideCalendar />,
      value: 3,
    },
    {
      title: "Club",
      icon: <LucideHeartHandshake />,
      value: 1,
    },
  ].map((props) => <Statistic key={props.title} {...props} />);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center max-w-4xl m-auto gap-8 py-16">
      {stats}
    </div>
  );
}
