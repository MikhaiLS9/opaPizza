import React, { useState } from "react";
import styled from "styled-components";

export const SortList = () => {
  const [activeSort, setActiveSort] = useState(0);
  const [open, setOpen] = useState(false);
  const sortPopup = ["популярности", "цене", "алфавиту"];
  const activeSortPopup = sortPopup[activeSort];

  const toggleListVisibility = () => {
    setOpen(!open);
  };

  const handleClick = (item, index) => {
    setActiveSort(index);
    setOpen(false);
  };

  return (
    <SortContainer>
      <div onClick={toggleListVisibility}>
        <b>Сортировка по: </b>
        <SortActive>{activeSortPopup}</SortActive>
      </div>
      <div>
        {open && (
          <SortListStyle>
            {sortPopup.map((item, i) => (
              <List
                className={activeSort === i ? "active" : ""}
                key={i}
                onClick={() => handleClick(item, i)}
              >
                {item}
              </List>
            ))}
          </SortListStyle>
        )}
      </div>
    </SortContainer>
  );
};

const SortContainer = styled.div`
  /* Стили для контейнера сортировки */
`;

const SortListStyle = styled.ul`
  position: absolute;
  background-color: #f0eeeec2;

  padding: 10px;
  margin-top: 10px;
`;

const List = styled.li`
  color: ${(props) => (props.className === "active" ? "#ff9800" : "black")};
  background-color: ${(props) =>
    props.className === "active" ? "white" : "transparent"};

  padding: 10px;
  border-radius: 15px;
`;

const SortActive = styled.span`
  color: #ff9800;
  text-underline-offset: 7px;
  text-decoration-line: underline;
  text-decoration-style: dashed;
`;

