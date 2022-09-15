import React from "react";
import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <>
      <div className="heading">
        <h1>5 Birthdays Today</h1>
      </div>
      {people.map((person) => {
        const { id, name, age, id_pic } = person;
        return (
          <div key={id} className="item">
            {/* add image details */}
            <img src={id_pic} alt={name} />
            <h4>{name}</h4>
            <h5>{age} years</h5>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
