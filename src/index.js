import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "components/app/App";

import data from "./data/photoList.json";

const Cards = () => {
    return (
        <div>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="card mx-auto my-5"
                    style={{ width: "18rem" }}
                >
                    <img
                        src={item.url}
                        className="card-img-top"
                        alt={item.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.title} </h5>
                        <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <a href="111" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Cards></Cards>);
