import styled from "styled-components"

export const HeaderSetting = styled.div`
  height: 120px;
  padding: 10px 0;
`

export const TableNote = styled.div`
  background: ${(props) => props.theme};
  border: solid 10px black;
  border-radius: 10px;
  padding: 3px;
  height: calc(100vh - 162px);
  overflow: auto;

  &:focus-visible {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`

export const HeaderProgress = styled.div`
  font-weight: 500;
  font-style: italic;
`

export const TitleSetting = styled.label`
  font-weight: 700;
  margin-right: 12px;
`

export const TitlePage = styled.h1`
  font-family: "Yomogi", cursive;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: dotted 1px gray;
  height: 42px;
`
