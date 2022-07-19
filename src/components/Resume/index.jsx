import React from 'react'
import ResumeCard from "../ResumeCard"
import * as C from "./styles";

import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeCard title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeCard title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeCard title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}

export default Resume;