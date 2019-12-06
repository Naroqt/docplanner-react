import React from "react";

const features = [
  {
    img: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    description:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    img: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    description: "visit us every month"
  },
  {
    img: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    description: "booked last month"
  },
  {
    img: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    description: "Trust in ower solutions"
  }
];
const Main_forth_part = () => {
  return (
    <div>
      <section id="features-container">
        <section className="features">
          <div className="features-intro">
            <h2>
              The world's
              <br />
              biggest healthcare platform
            </h2>
            <p>
              We work from 6 offices all over the world, bringing Docplanner
              Group to life in almost 20 countries.
            </p>
            <img
              src="https://www.docplanner.com/img/logo.png"
              alt="logo docplanner"
            />
          </div>
          <div className="features-cards">
            {features.map(e => (
              <div className="feature-card">
                <img src={e.img} alt="" />
                <h2>{e.title}</h2>
                <p>{e.description}</p>
              </div>
              // </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};
export default Main_forth_part;
