import React from "react";
import "./Contactdetails.css";
import { devices } from "../Global";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InfoContainer = styled.div`
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

const InfoHeading = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const Contactdetails = () => {
  return (
    <>
      <InfoContainer>
        <div className="  flex flex-col gap-5 justify-end items-center">
          <h1 className="text-4xl font-bold md:text-6xl">contact us</h1>
          <InfoHeading>
            <Link to="/" className="text-xl border-b-2 m-0">
              home
            </Link>{" "}
            ||
            <Link to="/course" className="text-xl border-b-2 m-0">
              course
            </Link>
          </InfoHeading>
        </div>
      </InfoContainer>

      <div className="md:h-screen bg-[url('https://i.imgur.com/kk76J5I.jpg')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <div className="flex gap-5 md:gap-20 p-20 flex-wrap input-feilds">
          <div className=" flex flex-col gap-6 text-white input-group">
            <input
              type="text"
              className=" border-b-2 input-place"
              placeholder="Name"
            />
            <input
              type="text"
              className="input-place"
              placeholder="Email Address"
            />
            <input type="text" className="input-place" placeholder="Phone" />
            <input type="text" className="input-place" placeholder="Subject" />
          </div>
          <div className=" flex flex-col gap-4 input-group">
            <textarea
              placeholder="Message"
              rows="7"
              cols="30"
              className="input-place"
            ></textarea>
            <div class="bg-[indigo] p-2 hover:bg-[indianred] capitalize text-white text-center">
              send
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
