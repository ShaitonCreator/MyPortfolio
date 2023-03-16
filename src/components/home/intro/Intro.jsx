import React, { useEffect, useState } from "react";
import "./Intro.scss";
import imgage from "../../../assets/image.jpg";
const Intro = () => {
  const [text, setText] = useState("Web Developer");
  const iconItems = [
    { icon: "fa-brands fa-facebook-f", index: 5, link: "#" },
    { icon: "fa-brands fa-twitter", index: 6, link: "#" },
    { icon: "fa-brands fa-linkedin-in", index: 7, link: "#" },
    { icon: "fa-solid fa-envelope", index: 8, link: "#" },
  ];
  // for text animation
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  useEffect(() => {
    const screen = document.querySelector(".home-content");
    const name = document.querySelector(".randome-text");

    screen.addEventListener("mouseenter", startAnimation);
    screen.addEventListener("mouseleave", stopAnimation);

    function startAnimation() {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        setText((prevText) =>
          prevText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return name.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iteration >= name.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    }

    function stopAnimation() {
      clearInterval(interval);
      setText(name.dataset.value);
    }

    return () => {
      screen.removeEventListener("mouseenter", startAnimation);
      screen.removeEventListener("mouseleave", stopAnimation);
    };
  }, []);

  return (
    <section style={{ paddingTop: 70 }} className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>MD SHAHNAWAZ ANSARI</h1>
        <h3>
          And I'm a{" "}
          <span className="randome-text" data-value="Web Developer">
            {text}
          </span>
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo libero
          officia iure assumenda. Error quae adipisci dolore corporis eligendi
          aperiam!
        </p>
        <div className="social-media">
          {iconItems.map((elem) => (
            <a
              key={elem.index}
              href={elem.link}
              style={{
                "--i": elem.index,
                animationDelay: `calc(0.2s * var(--i))`,
              }}
            >
              <i className={elem.icon}></i>
            </a>
          ))}
        </div>
        <a href="#" className="btn">
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src={imgage} alt="" />
      </div>
    </section>
  );
};

export default Intro;
