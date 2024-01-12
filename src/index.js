import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const services = [
  {
    name: "Classic haircut",
    img: "img/classic.PNG",
  },
  { name: "Beard", img: "img/beard.PNG" },
  { name: "Modern haircut", img: "img/modern.jpg" },
  { name: "Classic/Modern haircut + Beard", img: "img/combo.PNG" },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="text">The Giants BarberShop</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="main">
      <h2>Our Services</h2>
      <ul>
        {services.map((item) => (
          <Service serviceObj={item} key={item.name} />
        ))}
      </ul>
    </main>
  );
}
function Service(props) {
  return (
    <li className="item">
      <div>
        <img src={props.serviceObj.img} alt={props.serviceObj.name} />
        <h3>{props.serviceObj.name}</h3>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
