import React from "react";

const Main_second_comp = () => {
  return (
    <div>
      <section class="cards">
        <div class="card" id="patients">
          <h2>For patients</h2>
          <p>Find a doctor, book a visit and solve any health-related doubt</p>
          <select class="country-selector" name="" id="">
            <option value="">CHOOSE COUNTRY</option>
            <option value="">Tunisia</option>
            <option value="">The Rest of the World</option>
            <option value="">Outer Space</option>
          </select>
          <img
            src="https://www.docplanner.com/img/screen-marketplace@2x.png"
            alt="patients interface"
          />
        </div>

        <div class="card" id="doctors">
          <h2>For doctors</h2>
          <p>Save time managing visits and cut no-shows by half</p>
          <img
            src="https://www.docplanner.com/img/screen-saas@2x.png"
            alt="doctors interface"
          />
        </div>
      </section>
    </div>
  );
};
export default Main_second_comp;
