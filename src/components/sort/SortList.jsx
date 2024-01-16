import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  SetSortPopupCategory,
  SetSortProperty,
} from "../../redux/slices/filterSlice";

export const SortList = () => {
  const [activeSort, setActiveSort] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const sortPopup = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];
  // const activeSortPopup = sortPopup[activeSort];
  const sortPopupCategory = useSelector((state) => state.filter.sort);

  const toggleListVisibility = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const handleClick = (name, property, index) => {
    setActiveSort(index);
    setOpen(false);
    dispatch(SetSortPopupCategory(name));
    dispatch(SetSortProperty(property));
  };

  useEffect(() => {
    const windowPopup = document.querySelector(".popup");

    document.body.addEventListener("click", (event) => {
      if (!windowPopup.contains(event.target)) setOpen(false);
    });
  }, []);

  return (
    <SortContainer className="popup">
      <div onClick={toggleListVisibility}>
        <b>Сортировка по: </b>
        <SortActive>{sortPopupCategory.name}</SortActive>
      </div>
      <div>
        {open && (
          <SortListStyle>
            {sortPopup.map((item, i) => (
              <List
                className={activeSort === i ? "active" : ""}
                key={i}
                onClick={() => handleClick(item.name, item.sortProperty, i)}
              >
                {item.name}
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
  z-index: 99999;

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
