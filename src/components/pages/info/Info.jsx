import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../Global";

const InfoContainer = styled.div`
  color: #fff;
  height: 50vh;
  display: flex;
  padding: 10px 50px;
  text-transform: capitalize;
  justify-content: flex-start;
  background: linear-gradient(to bottom, #5274ff 0%, #c054ff 100%);

  @media ${devices.md}{
    display: flex;
    justify-content: center;
  }
`;

const InfoHeading = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
  /* background-color: red; */
`;

const InfoSecondContainer = styled.div`
  gap: 5px;
  width: 100%;
  margin: 30px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media ${devices.xs} {
    bottom: 40px;
  }
`;

const InfoSecondContinarFirst = styled.div`
  gap: 20px;
  display: flex;
  padding: 20px;
  font-size: 15px;
  margin: 0px 5px;
  max-width: 25rem;
  border-radius: 20px;
  background-color: whitesmoke;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
`;

const InfoCourseDetails = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const InfoHeadinghome = styled.h1`
  font-size: 20px;
  font-weight: 800;
  text-transform: capitalize;

  @media ${devices.lg} {
    font-size: 22px;
  }

  @media ${devices.md} {
    font-size: 18px;
  }
`;

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

export const Info = () => {
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



  return (
    <>
      <InfoContainer>
        <div className=" flex flex-col gap-5 justify-end items-center">
          <h1 className="text-4xl font-bold md:text-6xl">about us</h1>
          <InfoHeading>
            <Link to="/" className="text-xl border-b-2 m-0">
              home
            </Link> ||
            <Link to="/contact" className="text-xl border-b-2 m-0">
              contact
            </Link>
          </InfoHeading>
        </div>
      </InfoContainer>

      <InfoSecondContainer>
        {cardData.map((data) => {
          return (
            <InfoSecondContinarFirst>
              <img src={data.image} alt={data.title} />
              <InfoCourseDetails>
                <InfoHeadinghome card>{data.title}</InfoHeadinghome>
                <p>{data.details}</p>
              </InfoCourseDetails>
            </InfoSecondContinarFirst>
          );
        })}
      </InfoSecondContainer>

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
