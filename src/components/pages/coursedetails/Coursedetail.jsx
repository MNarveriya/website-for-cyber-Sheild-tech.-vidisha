import React from "react";
import styled from "styled-components";
import { devices } from "../Global";
import { Link } from "react-router-dom";
import "./Coursesdetail.css";

const CoursedetailContainer = styled.div`
  color: #fff;
  height: 50vh;
  display: flex;
  padding: 10px 50px;
  text-transform: capitalize;
  justify-content: flex-start;
  background: linear-gradient(to bottom, #5274ff 0%, #c054ff 100%);

  @media ${devices.md} {
    display: flex;
    justify-content: center;
  }
`;

const CoursedetailHeading = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const Coursedetail = () => {
  const Coursedata = [
    {
      name: "html",

    },
    {
      name: "css",
    },
    {
      name: "javascript",
    },
    {
      name: "react",
    },
    {
      name: "data secince",
    },
    {
      name: "machine learning",
    },
    {
      name: "java",
    },
    {
      name: "php",
    },
    {
      name: "python",
    },
    {
      name: "artificial intelligence",
    },
    {
      name: "ruby",
    },
   
  ];

  return (
    <>
      <CoursedetailContainer>
        <div className=" flex flex-col gap-5 justify-end items-center">
          <h1 className="text-4xl font-bold md:text-6xl">our courses</h1>
          <CoursedetailHeading>
            <Link to="/" className="text-xl border-b-2 m-0">
              home
            </Link>
            ||
            <Link to="/about" className="text-xl border-b-2 m-0">
              about
            </Link>
          </CoursedetailHeading>
        </div>
      </CoursedetailContainer>
      <div className="px-4 flex flex-wrap gap-2 justify-center md:justify-start">
        {Coursedata.map((item, index) => {
          return (
            <div className="course" key={index}>
              <div className="course-info">
                <h6>Course</h6>
                <h2>{item.name}</h2>
                <Link to="#">
                  View all chapters <i class="fa fa-chevron-right"></i>
                </Link>
              </div>
              <div className="course-progress">
                <div className="progress-container">
                  <div className="progress"></div>
                  <div className="progress-text">08/16 Challenges</div>
                </div>
                <h6>Chapter 5</h6>
                {/* <h2>Types Of Arrays & Strings</h2> */}
                {/* <button className="btn">Continue</button> */}
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
