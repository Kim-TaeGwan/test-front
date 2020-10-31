import React, { useEffect, useState } from "react";
import { userApi } from "../../shared/Api";
import TableItem from "./TableItem";

const TableComponent = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchStudyList() {
      try {
        const result = await userApi.get("/");
        setList(result.data);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStudyList();
  }, []);

  const expericenceASC = e => {
    e.preventDefault();
  };

  return (
    <div className="test_container">
      <div className="btn_group">
        <button>점수</button>
        <button onClick={expericenceASC}>경험</button>
        <button>거리</button>
        <button>시간</button>
        <button>금액</button>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>점수</th>
              <th>경험</th>
              <th>거리</th>
              <th>시간</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((item, i) => (
                <TableItem
                  key={i}
                  name={item.name}
                  count={item.count}
                  experience={item.experience}
                  distance={item.distance}
                  time={item.time}
                  price={item.price}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
