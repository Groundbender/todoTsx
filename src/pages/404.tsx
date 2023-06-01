import { Link } from "react-router-dom";
import chill from "./img/chill.jpg";
import back from "./img/back.svg";

export const NotFound = () => {
  return (
    <div
      className="container"
      style={{
        background: "#4682b4",
        width: "60%",
        height: "60%",
        margin: "0 auto",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <h1
        style={{
          margin: "0",
        }}
      >
        Error 404
      </h1>
      <p>ToDo is not working today, time to get some chill</p>

      <Link
        style={{
          color: "white",
        }}
        to="/"
      >
        Click here to go to chill
      </Link>

      <div style={{ margin: "10px auto", width: "400px", height: "400px" }}>
        <img
          src={chill}
          alt="chill"
          style={{
            margin: "0 auto",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
