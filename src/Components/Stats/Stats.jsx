import "./Stats.scss";
import StatItem from "../StatItem/StatItem";
import DropdownList from "../DropdownList/DropdownList";
import Users from "../Users/Users";

function Stats() {
  const stats = [
    {
      id: 1,
      icon: "blue",
      title: "Monthly Revenue",
      value: "1385 $US",
      dropdown: <DropdownList />,
    },
    {
      id: 2,
      icon: "orange",
      title: "New Orders",
      value: "12",
      dropdown: <Users />,
    },
    {
      id: 3,
      icon: "red",
      title: "Pending Reviews",
      value: "3",
      dropdown: <DropdownList />,
    },
    {
      id: 4,
      icon: "green",
      title: "New Customers",
      value: "9",
      dropdown: <Users />,
    },
  ];

  return (
    <ul className="stats">
      {stats.map(({ id, icon, title, value, dropdown }) => (
        <StatItem id={id} title={title} icon={icon} value={value} dropdown={dropdown} />
      ))}
    </ul>
  );
}

export default Stats;