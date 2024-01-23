import React from "react";
import { devices } from "../Global";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  color: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row-reverse;

  @media ${devices.md} {
    flex-direction: column;
  }
`;

const AboutLeft = styled.div`
  gap: 20px;
  width: 50%;
  display: flex;
  align-items: start;
  padding: 50px 20px;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  @media ${devices.md} {
    width: 100%;
  }
`;

const AboutHeading = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const AboutRight = styled.div`
  width: 50%;
  display: flex;
  padding: 50px 20px;
  align-items: center;
  justify-content: center;
  @media ${devices.md} {
    width: 100%;
  }
`;

export const About2 = () => {
  return (
    <>
      <Container>
        <AboutLeft data-aos="fade-left">
          <AboutHeading>
            Take the next step toward your personal and professional goals with
            us.
          </AboutHeading>
          <p>
            The automated process all your website tasks. Discover tools and
            techniques to engage effectively with vulnerable children and young
            people.
          </p>
          <button className="px-4 py-2 bg-[indigo] text-white rounded-md capitalize hover:bg-[indianred]">
            <Link to="#" target="_blank">
              {" "}
              join now for free{" "}
            </Link>
          </button>
        </AboutLeft>
        <AboutRight data-aos="fade-right">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/gallery/about3.png.webp"
            alt=""
          />
        </AboutRight>
      </Container>
    </>
  );
};
