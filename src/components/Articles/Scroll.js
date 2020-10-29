import styled from "styled-components";

export const Scroll = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  line-height: 25px;
  overflow: scroll auto;
  margin: 0px auto;
  max-width: 62.5rem;
  padding: 50px 30px 50px;

  &::-webkit-scrollbar {
    display: block;
    appearance: none;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 0.1rem solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::-webkit-scrollbar-track {
    height: 1rem;
  }
`;
