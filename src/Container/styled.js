import styled from "styled-components"

export const HeaderSetting = styled.div`
  height: 72px;
`

export const TableNote = styled.div`
  background: darkslategray;
  border: solid 10px black;
  border-radius: 10px;
  padding: 3px;
  height: calc(100vh - 72px);
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
