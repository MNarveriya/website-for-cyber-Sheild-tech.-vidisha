import React from "react";
import Slider from "react-slick";
import { devices } from "../Global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 80%;
  color: #000;
  margin: 30px auto;
`;

const Card = styled.div`
  overflow: hidden;
  margin: 30px 20px;
  cursor: pointer;

  @media ${devices.md} {
    margin: 0px 5px;
  }
`;

const CardContent = styled.div`
  margin: 10px 10px;
  text-align: center;
  text-transform: capitalize;
`;

const CardHeading = styled.h3`
  font-size: 30px;
  text-transform: capitalize;

  ${(props) =>
    props.headcourse &&
    css`
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 30px;
      text-transform: capitalize;
    `}
`;

export const CommunityExpert = () => {
  const carddata = [
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "javascript",
      details: "the automated proess all your website task.",
    },
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "html",
      details: "the automated proess all your website task. effectively",
    },
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "css",
      details: " descover tools and techniqes to engege effectively",
    },
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "react",
      details: " tools and techniqes to engege effectively",
    },
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "nextjs",
      details: "the automated proess all your",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

 

  return (
    <>
      <Container>
        <CardHeading headcourse>Community expert</CardHeading>

        <Slider {...sliderSettings}>
          {carddata.map((item, index) => {
            return (
              <Card key={index} data-aos="zoom-in">
                <div className="m-auto rounded-full w-[200px] h-[193px] p-4 bg-gray-100">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="rounded-full w-[200px] h-[160px]"
                  />
                </div>
                <CardContent>
                  <CardHeading>{item.title}</CardHeading>
                  <p className="text-gray-500">{item.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};
