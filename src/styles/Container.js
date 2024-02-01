import styled from "styled-components";

export const Container = styled.div`
max-width: 1360px;
width: 100%;
min-width: 340px;
margin: 0 auto;
height: 100%;

@media (max-width: 726px) {
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
`;
