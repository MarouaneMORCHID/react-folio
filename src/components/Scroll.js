import styled from "styled-components";

export const Scroll = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  overflow: auto;
  margin: -2rem 0px 0px;
  padding: 0px 2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    display: block;
    appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 0.2rem solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
  }
`;
