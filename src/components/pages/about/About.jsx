import React from "react";
import { devices } from "../Global";
import styled from "styled-components";

const Container = styled.div`
  color: #000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;


  @media ${devices.xl} {
    align-items: center;
    flex-direction: column;
  }
`;

const AboutLeft = styled.div`
  gap: 15px;
  width: 50%;
  display: flex;
  padding: 40px 20px;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  @media ${devices.xl} {
    width: 100%;
  }
`;


const AboutHeading = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;


const AboutRight = styled.div`
  width: 50%;
  padding: 40px 20px;
  @media ${devices.xl} {
    width: 100%;
  }
`;

export const About = () => {

  return (
    <>
      <Container>
        <AboutLeft data-aos="fade-right">
          <div className="bg-blue-800 px-5 py-6 rounded-full">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/icon/about.svg"
              alt=""
            />
          </div>
          <AboutHeading>learn new skills online with top educator</AboutHeading>
          <p>
            The automated process all your website tasks. Discover tools and
            techniques to engage effectively with vulnerable children and young
            people.
          </p>
          <div className="flex gap-3">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
              alt=""
            />
            <p>
              Techniques to engage effectively with vulnerable children and
              young people.
            </p>
          </div>
          <div className="flex gap-3">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
              alt=""
            />
            <p>
              Join millions of people from around the world learning together.
            </p>
          </div>
          <div className="flex gap-3">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg"
              alt=""
            />
            <p>
              Join millions of people from around the world learning together.
              Online learning is as easy and natural.
            </p>
          </div>
        </AboutLeft>
        <AboutRight data-aos="fade-left">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about2.png.webp"
            alt=""
            className="w-full"
          />
        </AboutRight>
      </Container>
    </>
  );
};
