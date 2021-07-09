import React from "react"

import * as S from "./styled"

const Note = ({ id, status, content, handleDeleteNote, handleUpdateNote }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <label className="checkbox">
          <input type="checkbox" checked={status} onChange={() => handleUpdateNote({ id, status: !status, content })} />
        </label>
        <button onClick={() => handleDeleteNote(id)}>
          <i className="far fa-times-circle" />
        </button>
      </S.Header>
      <S.Body>
        <textarea
          rows={10}
          value={content}
          onChange={(event) =>
            handleUpdateNote({
              id,
              status,
              content: event.target.value,
            })
          }
        />
      </S.Body>
    </S.Wrapper>
  )
}

export default Note
