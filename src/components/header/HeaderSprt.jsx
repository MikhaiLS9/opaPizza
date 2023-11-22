import React, { useState } from "react";
import styled from "styled-components";

export const Sort = () => {
  const [sortType, setSortType] = useState("популярности");
  const [activeSort, setActiveSort] = useState(0);
  const [isListVisible, setListVisible] = useState(false);

  const sortPopup = ["популярности", "цене", "алфавиту"];

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const handleClick = (item, index) => {
    setSortType(item);
    setActiveSort(index);
  };

  return (
    <SortContainer>
      <div onClick={toggleListVisibility}>
        <b>Сортировка по: </b>
        <SortActive>{sortType}</SortActive>
      </div>
      <div>
        <SortList style={{ display: isListVisible ? "block" : "none" }}>
          {sortPopup.map((item, i) => (
            <List
              className={activeSort === i ? "active" : ""}
              key={i}
              onClick={() => handleClick(item, i)}
            >
              {item}
            </List>
          ))}
        </SortList>
      </div>
    </SortContainer>
  );
};

const SortContainer = styled.div`
  /* Стили для контейнера сортировки */
`;

const SortList = styled.ul`
  position: absolute;
  background-color: #f0eeeec2;

  padding: 10px;
  margin-top: 10px;
`;

const List = styled.li`
  color: ${(props) => (props.className === "active" ? "#ff9800" : "black")};
  background-color: ${(props) => (props.className === "active" ? "white" : "transparent")};
  
  padding: 10px;
  border-radius: 15px;
`;

const SortActive = styled.span`
  color: #ff9800;
  text-underline-offset: 7px;
  text-decoration-line: underline;
  text-decoration-style: dashed;
`;

export default Sort;
