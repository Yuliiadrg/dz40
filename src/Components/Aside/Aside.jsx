import dashboard from "../../images/svg/dashboard.svg";
import sales from "../../images/svg/sales.svg";
import catalog from "../../images/svg/catalog.svg";
import customers from "../../images/svg/customers.svg";
import reviews from "../../images/svg/reviews.svg";
import "./Aside.scss";

function Aside() {
  const links = [
    {
      id: 1,
      name: "Dashboard",
      svg: dashboard,
    },
    {
      id: 2,
      name: "Sales",
      svg: sales,
    },
    {
      id: 3,
      name: "Catalog",
      svg: catalog,
    },
    {
      id: 4,
      name: "Customers",
      svg: customers,
    },
    {
      id: 5,
      name: "Reviews",
      svg: reviews,
    },
  ];

  let list = links.map(({ id, name, svg }) => (
    <li className="aside-link" key={id}>
      <img className="aside-icon" src={svg} alt="navigation" />
      {name}
    </li>
  ));

  return (
    <aside className="aside">
      <nav>
        <ul>{list}</ul>
      </nav>
    </aside>
  );
}

export default Aside;