import styled from "styled-components";

export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
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
  @media (width: ${({ theme }) => theme.mobile}) {
    font-size: 4rem;
    line-height: 4rem;
}
  } ;
`;

export const Subtitle = styled.h3`
  display: block;
`;

export const Span = styled.span`
  box-shadow: ${({ theme }) => theme.primaryHover} 0px -1.2rem 0px inset;
`;

export const StyledSocials = styled.div`
  padding-top: 30px;
  width: 40ch;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.primaryDark};
    border: 2px solid ${({ theme }) => theme.primaryDark};
    border-radius: 30px;
    padding: 0.3rem 1.25rem;
    box-shadow: 0 4px 1px;
    font-size: 16px;

    transition: all 0.3s ease-in-out;
    box-shadow: ${({ theme }) => theme.primaryDark} 0px 0px 0px inset;
    &:hover {
      box-shadow: ${({ theme }) => theme.primaryDark} 6.5rem 0px 5px inset;
      color: ${({ theme }) => theme.primaryLight};
    }
  }
`;
