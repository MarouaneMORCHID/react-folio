import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  max-width: 62.5rem;
  padding: 0 2.5rem;
  margin: 0px auto;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  display: block;
  font-size: 2rem;
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
  box-shadow: rgb(255, 244, 217) 10px -6rem 0px inset;
`;
