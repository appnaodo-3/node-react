import styled from "styled-components"

export const Wrapper = styled.div`
  margin-right: 10px;
  margin-bottom: 20px;
  border: solid 1px gray;
  border-radius: 20px;
  max-width: 200px;
  height: min-content;
  overflow: hidden;
  box-shadow: rgb(113 132 188 / 40%) 5px 5px, rgb(64 70 151 / 30%) 10px 10px, rgb(65 81 123 / 20%) 15px 15px,
    rgb(78 53 69 / 10%) 20px 20px, rgb(102 87 97 / 5%) 25px 25px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: burlywood;
  padding: 0 10px;

  input[type="checkbox"] {
    height: 24px;
    width: 24px;
  }

  button {
    background: transparent;
    border: none;
    padding: 3px;
    font-size: 18px;
    cursor: pointer;
  }

  i {
    font-size: 22px;
  }
`

export const Body = styled.div`
  padding: 10px;
  background: bisque;

  textarea {
    border: none;
    resize: none;
    width: 100%;
    height: auto;
    font-size: 16px;
    background-color: bisque;
    // set line height and border line row
    line-height: 2.5ch;
    background-image: linear-gradient(transparent, transparent calc(2.5ch - 1px), #44678e 0px);
    background-size: 100% 2.5ch;

    &:focus-visible {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
  }
`
