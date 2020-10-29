import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  max-width: 62.5rem;
  margin: 0px auto;
  height: 10vh;
  padding: 0 2.5rem;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  color: ${({ theme }) => theme.primaryDark};
  z-index: 10;

  .logo {
    font-size: 1.7rem;
    padding-top: 20px;
    z-index: 11;
  }
  .nav-links {
    display: flex;
    width: 50%;
    font-size: 1rem;
    font-weight: bold;
    justify-content: space-around;
    align-items: center;
    z-index: 10;

    a:after {
      content: ""; /* This is necessary for the pseudo element to work. */
      display: block; /* This will put the pseudo element on its own line. */
      width: 0%; /* Change this to whatever width you want to have before hover. */
      padding-top: 3px; /* This creates some space between the element and the border. */
      border-bottom: 0.15rem solid ${({ theme }) => theme.primaryDark}; /* This creates the border. Replace black with whatever color you want. */
      transition: 0.2s; /* This establishes the amount of time in seconds the animation should take from start to finish */
    }

    a:hover::after {
      width: 100%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    .nav-links {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 50%;
      font-size: 2rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.primaryLight};
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      transition: transform 1s ease;
      box-shadow: 100px 1px 10px rgba(0, 0, 0, 0.5);
      li {
        padding: 20px 10px;
      }
    }
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;

  z-index: 10;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledDimmer = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: ${({ open }) =>
    open ? "rgba(0, 0, 0, 0.1)" : "transparent"};
  backdrop-filter: ${({ open }) => (open ? "blur(5px)" : "blur(0px)")};
  transition: backdrop-filter 1s ease;
`;
