import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  text-align: justify;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }

  div {
    color: ${({ theme }) => theme.primaryDark};
    padding-bottom: 50px;
    padding-right: 20px;
    width: 90%;
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      padding-right: 0px;
    }
  }
  img {
    width: 50%;
    border-radius: 30px;
    box-shadow: 0px 8px 8px ${({ theme }) => theme.primaryShadow};
    transition: 0.5s ease-in-out;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 10px 10px 16px ${({ theme }) => theme.primaryShadow};
    }
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: 80%;
    }
  }
`;
