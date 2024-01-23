import "./Card.css";
import React from "react";
import Slider from "react-slick";
import { devices } from "../Global";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 80%;
  color: #000;
  margin: 30px auto;
  @media ${devices.md} {
    width: 85%;
  }
`;

const Card = styled.div`
  cursor: pointer;
  max-width: 18rem;
  overflow: hidden;
  margin: 30px 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 0px gray;

  @media ${devices.md} {
    margin: 0px 5px;
    max-width: 100%;
  }
  @media ${devices.sm} {
    max-width: 100%;
  }
`;

const CardImg = styled.div``;

const Images = styled.img`
  @media ${devices.sm} {
    width: 100%;
  }
`;

const CardContent = styled.div`
  text-align: left;
  margin: 20px 10px;
  text-transform: capitalize;
`;
const CardPrice = styled.div`
  color: gray;
  display: flex;
  margin: 5px 0px;
  font-weight: bold;
  justify-content: space-between;
`;

const CardButton = styled.button`
  color: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: indigo;
  text-transform: capitalize;

  &:hover {
    background-color: indianred;
  }
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

export const Cards = ({ heading }) => {
  const carddata = [
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "javascript",
      details:
        "the automated proess all your website task. descover tools and techniqes to engege effectively",
      price: 49,
      links: (
        <Link to="#" target="_blank">
          view more
        </Link>
      ),
    },
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "html",
      details:
        "the automated proess all your website task. descover tools and techniqes to engege effectively",
      price: 49,
      links: (
        <Link to="#" target="_blank">
          view more
        </Link>
      ),
    },
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "css",
      details:
        "the automated proess all your website task. descover tools and techniqes to engege effectively",
      price: 49,
      links: (
        <Link to="#" target="_blank">
          view more
        </Link>
      ),
    },
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "react",
      details:
        "the automated proess all your website task. descover tools and techniqes to engege effectively",
      price: 49,
      links: (
        <Link to="#" target="_blank">
          view more
        </Link>
      ),
    },
    {
      imgSrc:
        "https://preview.colorlib.com/theme/courses/assets/img/gallery/featured2.png.webp",
      title: "nextjs",
      details:
        "the automated proess all your website task. descover tools and techniqes to engege effectively",
      price: 49,
      links: (
        <Link to="#" target="_blank">
          view more
        </Link>
      ),
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
    cssEase: "linear",
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
    ],
  };

  // useEffect(() => {
  //    AOS.init({duration: 2000})
  // } , [])

  return (
    <>
      <Container>
        <CardHeading headcourse>our courses</CardHeading>

        <Slider {...sliderSettings}>
          {carddata.map((item, index) => {
            return (
              <div className="px-[0px]" key={index}>
                <Card key={index} data-aos="zoom-in">
                  <CardImg>
                    <Images src={item.imgSrc} alt={item.title} />
                  </CardImg>
                  <CardContent>
                    <CardHeading>{item.title}</CardHeading>
                    <p>{item.details}</p>
                    <CardPrice>
                      <span>price</span>
                      <span>${item.price}</span>
                    </CardPrice>
                    <CardButton>{item.links}</CardButton>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};
