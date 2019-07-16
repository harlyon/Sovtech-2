import React, { useState, useEffect } from "react";
import axios from "axios";
import spinner from "./../image/spinner.gif";

const Category = props => {
  const [quote, setQuote] = useState({});

  const API_URL = `https://api.chucknorris.io/jokes/random?category=${props.match.params.item}`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => {
        let quote = res.data;
        setQuote({ quote });
      })
      .catch(err => console.log(err));
  }, [API_URL, props.match.params.item]);

  if (quote === undefined || Object.keys(quote).length === 0) {
    return (
      <img
        src={spinner}
        alt="Fetching Data ............."
        style={{ width: "300px", margin: "50px auto", display: "block" }}
      />
    );
  } else {
    return (
      <>
        <div className="featured">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h3>Category Detail</h3>
              </div>
              <div className="col-lg-8">
                <div className="box grid">
                  <h3 className="by">{quote.quote.categories[0]}</h3>
                  <div>
                    <img src={quote.quote.icon_url} alt="ava" />
                  </div>
                  <h2>
                    <p>{quote.quote.value}</p>
                  </h2>
                  <div className="tag">
                    <a href="/">Go Back Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Category;
