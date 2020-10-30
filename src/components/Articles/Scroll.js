import styled from "styled-components";

export const Scroll = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  line-height: 25px;
  overflow: scroll auto;
  padding: 10px 10px 40px;

  &::-webkit-scrollbar {
    display: block;
    appearance: none;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primaryHover};
  }

  &::-webkit-scrollbar-track {
    height: 1rem;
  }
`;
