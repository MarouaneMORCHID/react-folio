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
  box-shadow: rgb(255, 244, 217) 0px -1.2rem 0px inset;
`;

export const StyledSocials = styled.div`
  padding-top: 30px;
  display: block;
  justify-content: center;
  align-items: flex-start;
  a {
    border: 2px solid black;
    border-radius: 30px;
    padding: 0.3rem 1.25rem;
  }
`;
