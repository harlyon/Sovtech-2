import React, { useContext } from "react";
import { Context } from "../config/context";
import spinner from "./../image/spinner.gif";
import { Link } from "react-router-dom";

const img = "https://assets.chucknorris.host/img/avatar/chuck-norris.png";

const Categories = () => {
  const [state] = useContext(Context);
  const { quote_categories } = state;

  if (quote_categories === undefined || quote_categories.length === 0) {
    return (
      <img
        src={spinner}
        alt="Fetching Data ............."
        style={{ width: "300px", margin: "50px auto", display: "block" }}
      />
    );
  } else {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 brand">
            <h3 className="text-center">All Categories</h3>
          </div>
          {quote_categories.map((item, id) => (
            <div key={id} className="col-lg-4">
              <div className="box">
                <div>
                  <img src={img} alt="chuck" />
                </div>
                <h3>
                  <Link to={`/${item}`}>
                    <h3>{item}</h3>
                  </Link>
                  <hr />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Categories;
