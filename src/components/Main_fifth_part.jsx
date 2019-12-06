import React from "react";
import "./style.css";

const Capitals = [
  {
    img: "https://www.docplanner.com/images/barcelona.png",
    title: "Warsaw",
    input: "SEE OPENINGS"
  },
  {
    img: "https://www.docplanner.com/images/barcelona.png",
    title: "Barcelona",
    input: "SEE OPENINGS"
  },
  {
    img: "https://www.docplanner.com/images/istanbul.png",
    title: "Istanbul",
    input: "SEE OPENINGS"
  },
  {
    img: "https://www.docplanner.com/images/rome.png",
    title: "Rome",
    input: "SEE OPENINGS"
  },
  {
    img: "https://www.docplanner.com/images/mexico-city.png",
    title: "Mexico city",
    input: "SEE OPENINGS"
  },
  {
    img: "https://www.docplanner.com/images/curitiba.png",
    title: "Curbitia",
    input: "SEE OPENINGS"
  }
];
const Main_fifth_part = () => {
  return (
    <div>
      <section class="capitals-section">
        <div class="capitals-intro">
          <h2>Improve the lives of millions. Change yours forever</h2>
          <p>
            More than 1000 team mates share our same vision, goals and passion.
            With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
            Curitiba, our search for great talent never stops.
          </p>
        </div>

        <div>
          <div class="capitals-thumbnails">
            {Capitals.map(el => (
              <div class="thumbnail-box">
                <a href="#" class="thumbnail-link">
                  <img src={el.img} alt="Warsaw" />
                  <div>
                    <p>{el.title}</p>
                    <a href="#" class="thumbnail-button">
                      {el.input}{" "}
                    </a>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main_fifth_part;
