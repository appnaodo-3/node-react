import React from "react"

import * as S from "./styled"

const Note = ({ id, status, content, date, handleDeleteNote, handleUpdateNote }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={status}
            onChange={() => handleUpdateNote({ id, status: !status, content, date })}
          />
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            handleUpdateNote({ id, status, content, date: e.target.value })
          }}
        />

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
              date,
            })
          }
        />
        <span>
          <i className="fas fa-palette" />
        </span>
      </S.Body>
    </S.Wrapper>
  )
}

export default Note
