import React from "react";
import "../../App.css";

const Talleres: React.FC = () => {
  const talleres = [
    { label: "AUTOMOTRIZ AMADOR", link: "https://g.co/kgs/F9fHhp3", rating: 4 },
    { label: "TALLER AUTOMOTRIZ", link: "https://g.co/kgs/z8LNkpU", rating: 5 },
    { label: "TALLER AUTOMOTRIZ", link: "https://g.co/kgs/sNeQzqc", rating: 3 },
    { label: "TALLER AUTOMOTRIZ", link: "https://g.co/kgs/FGfUhji", rating: 4 },
    { label: "TALLER AUTOMOTRIZ", link: "https://g.co/kgs/RxVEWpi", rating: 5 },
  ];

  return (
    <div className="talleres-container">
      {talleres.map((taller, index) => (
        <a href={taller.link} target="_blank" rel="noopener noreferrer" className="taller-card" key={index}>
          <button className="button">{taller.label}</button>
          <div className="rating">
            {"★".repeat(taller.rating)}
            {"☆".repeat(5 - taller.rating)}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Talleres;
 