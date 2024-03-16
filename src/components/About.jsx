import React from "react";
import "../index.css";

export default function About() {
  return (
    <div
      className="mp-6"
      style={{
        backgroundColor: "tan",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <div
        className="columns"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <figure className="ml-5">
          <img
            className="smaller-image is-vcentered"
            style={{ borderRadius: "50%", maxWidth: "100%", height: "auto" }}
            src="https://github.com/dtjones23/first-day-demo/assets/142169871/086db32b-7ff0-4da1-83b9-cd602c7a76a5"
            alt="placeholder"
          />
        </figure>
        <div style={{ marginTop: "20px", width: "100%" }}>
          <h1 className="title mb-6" style={{ color: "maroon" }}>
            About Me
          </h1>
          <p className="subtitle mt-4 mb-5" style={{ textAlign: "center" }}>
            "Good, better, best. Never let it rest until your good is better and
            your better is best." - Coach B <br />
            <br />
            Discipline, perseverance, consistency, and the wise words from good
            ol Coach B are driving factors for me in achieving a fulfilling
            career in the tech industry. As someone with a passion for
            continuous improvement, I consistently strive to exceed expectations
            and acquire knowledge that will benefit me. I also have a genuine
            love for learning, finding it to be an enjoyable pursuit in itself.{" "}
            <br />
            <br />
            Before diving into the world of coding, I was deeply fascinated by
            psychology, which led me to pursue a Bachelor of Science degree in
            Psychology from the University of Wisconsin-Lacrosse. However, my
            recent completion of the University of Wisconsin Virtual Coding
            Bootcamp marks a significant shift in my focus. Having overcome
            various challenges during this program, I am confident and prepared
            to apply the new skills and knowledge I've acquired in the
            workplace. <br />
          </p>
        </div>
      </div>
    </div>
  );
}
