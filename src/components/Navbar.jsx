import React from "react";
let links = [
  {
    label: "About us",
    link: "#home"
  },
  {
    label: "Departments",
    link: "#services",
    submenu: [
      "Marketing& PR",
      "Customer Success & Sales",
      "IT,product,Design, & UX",
      "Finance & Admin",
      "HR & more"
    ]
  },
  {
    label: "Career",
    link: "#Contact"
  }
];
// if(3>2) "3>2"else "2>3"
// (3>2)?"3>2":"2>3"
const Navbar = () => {
  return (
    <ul className="Nav">
      {links.map(el => (
        <a href="#">
          {" "}
          <li className={el.label}>
            {el.label}
            {el.submenu ? (
              <ul className="HiddenNav">
                {el.submenu.map(e => (
                  <li>{e}</li>
                ))}
              </ul>
            ) : null}
          </li>
        </a>
      ))}
    </ul>
  );
};

export default Navbar;
