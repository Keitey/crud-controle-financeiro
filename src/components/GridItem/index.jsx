import React from "react";
import * as C from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alingCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="#D2041E" />
        ) : (
          <FaRegArrowAltCircleUp color="#04D225" />
        )}
      </C.Td>
      <C.Td alingCenter>
        <FaTrash onClick={()=> onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
