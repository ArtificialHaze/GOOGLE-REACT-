import styled from "styled-components";

export const MainContainer = styled.div`
  color: #333;
  font-weight: 600;
  background-color: #f3f3f3;
  min-height: 100vh;
  &.dark {
    background-color: #333;
    color: white;
    font-weight: 600;
  }
`;

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: gray;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  font-size: 15px;
  border: 1px solid gray;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  input {
    width: 40%;
    height: 40px;
    border: none;
    border-radius: 10px;
    outline: none;
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.25);
    padding: 6px;
    color: black;
    &::placeholder {
      color: #999;
      font-weight: bold;
      letter-spacing: 3px;
    }
    &:hover {
      box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.35);
    }
  }
  button {
    position: absolute;
    top: 1.5px;
    right: 4px;
    font-size: 20px;
    color: gray;
  }
`;

export const NavbarContainer = styled.div`
  padding: 5px;
  padding-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  > div {
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    padding: 1px 2px;
    border-radius: 3px;
    letter-spacing: 5px;
    transform: scale(1);
    transition: all 250ms ease-in;
    color: rgb(231, 55, 55);
    font-weight: bold;
    &:hover {
      transform: scale(1.04);
    }
  }

  button {
    font-size: 15px;
    color: gray;
    background-color: white;
    border-radius: 5px;
    padding: 10px 5px;
    margin-right: 10px;
    margin-top: 5px;
    transition: all 200ms ease-in-out;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
      color: tomato;
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;

  a {
    color: lightgray;
    font-size: 20px;
    transition: all 250ms ease-in;
    &:not(:last-child) {
      margin-right: 100px;
    }
    &.active {
      color: blue;
    }
    &:hover {
      transform: scale(1.05);
      color: lightskyblue;
      font-weight: bold;
      transform: translateY(-20%);
    }
  }
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const ResultsSearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    width: 100px;
    p {
      font-size: 20px;
      color: lightcoral;
      transition: all 250ms ease-in-out;
      &:hover {
        text-decoration: underline;
        color: lightcyan;
      }
    }
  }
`;

export const ResultsImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  p {
    width: 36%;
    word-break: break-all;
    font-size: 13px;
    margin-top: 2px;
  }
`;

export const ResultsNewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 100%;
    a {
      text-decoration: none;
      transition: all 250ms ease-in;
      &:hover {
        text-decoration: underline;
      }
      p {
        font-size: 20px;
        color: blue;
      }
    }
    div {
      display: flex;
      gap: 4px;
    }
  }
`;

export const ResultsVideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
