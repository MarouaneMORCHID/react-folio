import styled from "styled-components";

export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 65vh;
  max-width: 62.5rem;
  padding: 0 2.5rem;
  margin: 0px auto;
  color: ${({ theme }) => theme.primaryDark};
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  display: block;
  font-size: 3rem;
  line-height: 4rem;
  transition: 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 2rem;
    line-height: 4rem;
}
  } ;
`;

export const Subtitle = styled.h2`
  display: block;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Span = styled.span`
  box-shadow: ${({ theme }) => theme.primaryHover} 0px -1.5rem 0px inset;
`;

export const StyledSocials = styled.div`
  padding-top: 30px;
  padding-right: 30px;
  width: 40ch;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryLight};
    border: 2px solid ${({ theme }) => theme.primaryDark};
    border-radius: 15px;
    padding: 0.3rem 1.25rem;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    box-shadow: ${({ theme }) => theme.primaryDark} 0px 0px 0px inset;

    &:hover {
      box-shadow: ${({ theme }) => theme.primaryDark} 8rem 0px 0px inset;
      color: ${({ theme }) => theme.primaryLight};
    }
  }
`;
