import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";
import "typeface-montserrat";

export default function Card(prop) {
  console.log("props : ", prop);
  // const isOdd = prop.data._id % 2 === 0;
  // const cardClass = isOdd ? "Card-main odd" : "Card-main even";
  // const flexDirecton = isOdd ? "row" : "row-reverse";

  return (
    <div className="Card-main justify-content-center align-items-center mb-4">
      <img className="card-image" src={prop.data.image} alt="Error" />
      <div className="card-point d-flex justify-content-center align-itmes-center flex-column">
        <div className="title">{prop.data.name.toUpperCase()}</div>
        <div className="card-content">
          <p>{prop.data.description}</p>
          <p>Amount : &#8377;{prop.data.amount}/-</p>
          <p>It is Available for {prop.data.provided_by}</p>
        </div>
        <div className="deadline">
          <p>Deadline: {(new Date(prop.data.deadline).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }))}</p>
          {/* <p>Deadline : {prop.data.deadline}</p> */}
        </div>
        <div className="visitbtn">
          <Link to={`/scholarships/${prop.data._id}`} className="visit-button">
            Visit Scholarship
          </Link>
        </div>
      </div>
    </div>
  );
}
