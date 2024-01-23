import React from "react";
import { devices } from "../Global";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { BiLogoDribbble } from "react-icons/bi";

const FooterContainer = styled.div`
  gap: 70px;
  width: 100%;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  padding: 50px 0px;
  align-items: center;
  flex-direction: column;
  background-color: #032030;
  text-transform: capitalize;
  @media ${devices.md} {
    padding: 10px 15px;
  }
`;

const FooterLeft = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
  text-transform: capitalize;
`;

const FooterRight = styled.div`
  gap: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterFirst = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const FooterSecond = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const FooterThired = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const Footer = () => {
  return (
    <>
      <FooterContainer data-aos="zoom-in">
        <div className=" flex gap-20 justify-around flex-wrap">
          <FooterLeft>
            <Heading>course</Heading>
            <p>
              The automated process starts as soon as your clothes go <br />{" "}
              into the machine.
            </p>
            <div className="flex gap-4">
              <Link to="" target="_blank">
                <FaFacebookF className="text-white text-2xl bg-blue-800 p-1 rounded-full hover:bg-[indianred] cursor-pointer" />
              </Link>
              <Link to="" target="_blank">
                <IoLogoTwitter className="text-white text-2xl bg-blue-800 p-1 rounded-full hover:bg-[indianred] cursor-pointer" />
              </Link>
            </div>
            <div className="flex items-center gap-1 flex-wrap text-center md:text-left ">
              <MdEmail className="bg-blue-800 text-white p-1 hover:bg-[indianred] text-2xl rounded-full cursor-pointer"/>
              <span className="capitalize mr-2">email:</span> xyz@gmail.com
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              <FaPhoneAlt
                className="bg-blue-800 text-white p-1 hover:bg-[indianred] text-[20px]
              rounded-full cursor-pointer"
              />{" "}
              <span className="capitalize mr-2">phone:</span> xyz@gmail.com
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              <BiLogoDribbble className="hover:bg-[indianred] bg-blue-800 text-white p-1 rounded-full text-2xl cursor-pointer" />
              <span className="capitalize mr-2">website:</span> xyz@gmail.com
            </div>
          </FooterLeft>
          <FooterRight>
            <FooterFirst>
              <h4 className="text-lg font-medium ">our solution</h4>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                design & creatives
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                Telecommunication
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                restaurant
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                programing
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                arhitecture
              </Link>
            </FooterFirst>
            <FooterSecond>
              <h4 className="text-lg font-medium">support</h4>
              <Link to="" className="hover:text-[indianred] " target="_blank">
                design & creatives
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                Telecommunication
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                restaurant
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                programing
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                arhitecture
              </Link>
            </FooterSecond>
            <FooterThired>
              <h4 className="text-lg font-medium">company</h4>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                design & creatives
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                Telecommunication
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                restaurant
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                programing
              </Link>
              <Link to="" className="hover:text-[indianred]" target="_blank">
                arhitecture
              </Link>
            </FooterThired>
          </FooterRight>
        </div>
        <p>
          Copyright ©2024 All rights reserved | This template is made with ❤️ by
          developer
        </p>
      </FooterContainer>
    </>
  );
};
