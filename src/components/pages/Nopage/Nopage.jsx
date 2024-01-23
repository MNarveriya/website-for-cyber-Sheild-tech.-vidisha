import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NopageHeading = styled.h1`
  font-size: 30px;
  text-transform: capitalize;
`;

export const Nopage = () => {
  return (
    <div className='h-[100vh] w-full flex items-center justify-center bg-slate-800 text-white flex-col gap-7'>
        <NopageHeading>page not found 404</NopageHeading>
        <Link to="/" className="text-xl border-b-2 m-0 capitalize">home</Link>
    </div>
  )
}


