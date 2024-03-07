import React from "react";
import images from "../images/IMG_4826.jpeg";
import "../index.css";

export default function About() {
  return (
    <div
      className="mp-6"
      style={{
        backgroundColor: "tan",
        height: "84vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
      }}
    >
      <div
        className="columns"
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <figure className="ml-5">
          <img
            className="smaller-image is-vcentered"
            style={{ borderRadius: "50%" }}
            src={images}
            alt="placeholder"
          />
        </figure>
        <div style={{ marginLeft: "20px", width: "50%" }}>
          <h1 className="title mb-6" style={{ color: "maroon" }}>
            About Me
          </h1>
          <p className="subtitle mt-4" style={{ textAlign: "center" }}>
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
{
  /* <div className="columns is-centered is-vcentered">
<div className="column is-narrow">
  <figure>
  <img className="smaller-image" src={images} alt='placeholder'/>
  </figure>
  <h1 className = 'title mt-6' style = {{color: 'maroon'}}>About Me</h1>
  <p className = 'subtitle mt-6 ' style={{textAlign: 'center', maxWidth: '400px', margin: 'auto'}}>I'm a recent graduate with a BS in psychology from the University of Wisconsin-Lacrosse. Currently I'm in pursuit to becoming a full-stack developer and am a part of the University of Wisconsin-Bootcamp program! </p>
</div>
</div>
</div> */
}
