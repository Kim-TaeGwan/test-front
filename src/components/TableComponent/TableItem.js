import React from "react";

const TableItem = ({ name, count, experience, distance, time, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{count}</td>
      <td>{experience}</td>
      <td>{distance}m</td>
      <td>{time}분</td>
      <td>{price}원</td>
    </tr>
  );
};

export default TableItem;
