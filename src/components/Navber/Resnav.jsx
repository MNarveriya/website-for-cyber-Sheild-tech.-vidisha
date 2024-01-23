import React, { useState } from "react";
import "./Resnav.css";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import { devices } from "../pages/Global";

const Headingimg = styled.img`
  width: 15%;
  object-fit: contain;

  @media ${devices.md} {
    width: 45%;
  }
`;
const Headingimg1 = styled.img`
  width: 15%;
  object-fit: contain;
  display: none;

  @media ${devices.md} {
    width: 45%;
    display: block;
  }
`;

export const Resnav = () => {
  const [active, setActive] = useState(true);
  const [scrollactive, setScrollactive] = useState(false);

  const trigger = () => {
    document.querySelector(".NabarContent").classList.toggle("showup");
    setActive(!active ? true : false);
  };

  const scrollnavbar = () => {
    if (window.scrollY >= 450) {
      setScrollactive(true);
    } else {
      setScrollactive(false);
    }
  };

  window.addEventListener("scroll", scrollnavbar);

  return (
    <>
      <div className={scrollactive ? "container1" : "Container"}>
        <Headingimg src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp" />
        <div
          className="text-[] NabarContent showup gap-6 capitalize"
          onClick={trigger}
        >
          <Headingimg1 src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp" />
          <Link to="/" className="links">
            home
          </Link>
          <Link to="about" className="links">
            about
          </Link>
          <Link to="course" className="links">
            course
          </Link>
          <Link to="contact" className="links">
            contact
          </Link>
          <buttons className="flex gap-6 group-buttons">
            <button className="capitalize px-6 py-2 first-button">
              <Link to="" target="_blank">
                join
              </Link>
            </button>
            <button className="second-button">
              <Link to="" target="_blank">
                log in
              </Link>
            </button>
          </buttons>
        </div>
        <div className="bar">
          {active ? (
            <span
              className="flex items-center uppercase text-right cursor-pointer bg-black py-[4px] px-2"
              onClick={trigger}
            >
              menu
              <HiBars3BottomRight className="hemburger" />
            </span>
          ) : (
            <span
              className="flex items-center uppercase bg-black py-[4px] px-2"
              onClick={trigger}
            >
              menu
              <RxCross2 className="hemburger" />
            </span>
          )}
        </div>
      </div>
    </>
  );
};
