import React from "react";
import { devices } from "../Global";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  z-index: -30px;
  height: 100vh;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  justify-content: space-around;
  background-image: url("https://preview.colorlib.com/theme/courses/assets/img/hero/h1_hero.png.webp");

  @media ${devices.md}{
    height: 100vh;
  }

  @media ${devices.sm}{
    height: 85vh;
  }

  @media ${devices.xs}{
    height: 50vh;
  }
`;

const First = styled.div`
  gap: 20px;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  padding: 0px 100px;
  flex-direction: column;
  justify-content: center;

  @media ${devices.md} {
    padding: 0 20px;
    width: 100%;
    height: 80vh;
  }
`;

const Second = styled.div`
  width: 50%;

  @media ${devices.md} {
    display: none;
  }
`;

const Heading = styled.h1`
  font-size: 50px;
  font-weight: 800;
  text-transform: capitalize;

  @media ${devices.lg} {
    font-size: 30px;
  }

  @media ${devices.md} {
    font-size: 28px;
  }

  ${(props) =>
    props.card &&
    css`
      font-size: 20px;

      @media ${devices.lg} {
        font-size: 22px;
      }

      @media ${devices.md} {
        font-size: 18px;
      }
    `}
`;

const Deatils = styled.p`
  font-weight: bold;
  text-transform: capitalize;
`;

const Button1 = styled.button`
  font-size: 20px;
  padding: 4px 10px;
  border-radius: 5px;
  text-align: center;
  background-color: indigo;
  text-transform: capitalize;


  &:hover {
    background-color: indianred;
  }
`;

const SecondContainer = styled.div`
  gap: 5px;
  width: 100%;
  bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: center;

  @media ${devices.xs} {
    bottom: 40px;
    position: relative;
  }
`;
const SecondContinarFirst = styled.div`
  gap: 20px;
  display: flex;
  padding: 20px;
  font-size: 15px;
  margin: 0px 5px;
  max-width: 25rem;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px whitesmoke;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
`;

const CourseDetails = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const Home = () => {
  const cardData = [
    {
      image:
        "https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg",
      title: "60+ Ux course",
      details: `the automated process all your website tasks.`,
    },
    {
      image:
        "https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg",
      title: "expert instruction",
      details: "the automated process all your website tasks.",
    },
    {
      image:
        "https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg",
      title: "life time access",
      details: `the automated process all your website tasks.`,
    },
  ];

  // useEffect(() => {
  //     AOS.init({duration: 2000});
  // } , [])

  return (
    <>
      <Container>
        <First>
          <Heading>online learning plateform</Heading>
          <Deatils>
            build skills with courses, certificate and degress online from
            world-class universities and conpanies
          </Deatils>

          <Button1>
            {" "}
            <Link to="" target="_blank">
              join for free{" "}
            </Link>{" "}
          </Button1>
        </First>
        <Second></Second>
      </Container>

      <SecondContainer>
        {cardData.map((data , index) => {
          return (
            <SecondContinarFirst key={index}>
              <img src={data.image} alt={data.title} />
              <CourseDetails>
                <Heading card>{data.title}</Heading>
                <p>{data.details}</p>
              </CourseDetails>
            </SecondContinarFirst>
          );
        })}
      </SecondContainer>
    </>
  );
};
