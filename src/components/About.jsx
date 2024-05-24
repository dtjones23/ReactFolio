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
        <h1 className="title" style={{ color: "maroon" }}>
            DeAngelo Jones
          </h1>
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
            recent completion of the{" "}
            <a href="https://bootcamp.wisconsin.edu/coding/landing/?s=Google-Brand_RFull_&pkw=university%20of%20wisconsin%20coding%20bootcamp&pcrid=534133996997&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CUNIVERSITY-OF-WISCONSIN%7CSEM%7CCODING%7C-%7CONL%7C_RFull_%7CALL%7CBRD%7CEXACT%7CCore%7CBootcamp&utm_term=university%20of%20wisconsin%20coding%20bootcamp&s=google&k=university%20of%20wisconsin%20coding%20bootcamp&utm_adgroupid=105689713173&utm_locationphysicalms=9018951&utm_matchtype=e&utm_network=g&utm_device=c&utm_content=534133996997&utm_placement=&gad_source=1&gclid=CjwKCAjw9cCyBhBzEiwAJTUWNQcDf7SaUnJCcoXZT6aPdCpZX7opdO_nnN8zZyOj_E3pA-z0wGNclxoCrwgQAvD_BwE&gclsrc=aw.ds#hero" target="_" rel="noopener noreferrer">
              University of Wisconsin Virtual Coding Bootcamp</a> {" "}
            marks a significant shift in my focus. Having overcome
            various challenges during this program, I am confident and prepared
            to apply the new skills and knowledge I've acquired in the
            workplace. <br />
          </p>
        </div>
      </div>
    </div>
  );
}
