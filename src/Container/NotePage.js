import React, { useState } from "react"
import Note from "../Components/Note"
import { useDispatch, useSelector } from "react-redux"
import { addNote, deleteNote, updateNote } from "./noteSlice"
import isArrayHasValue from "../helper/isArrayHasValue"
import * as S from "./styled"

const OPTION_SHOW_NOTES = {
  all: "all",
  progress: "progress",
  done: "done",
}

const NotePage = () => {
  const [optionShowNotes, setOptionShowNotes] = useState(OPTION_SHOW_NOTES.all)

  const dispatch = useDispatch()
  const notes = useSelector((state) => state.note.notes)

  const handleAddNote = () => {
    dispatch(addNote())
  }

  return (
    <div>
      <S.HeaderSetting className="px-5">
        <button className="button is-info" onClick={handleAddNote}>
          New note <i className="fas fa-plus ml-1" />
        </button>
        <div
          className="control mt-2"
          onChange={(event) => {
            setOptionShowNotes(event.target.value)
          }}
        >
          <label className="radio">
            <input
              type="radio"
              name="optionShow"
              value={OPTION_SHOW_NOTES.all}
              checked={optionShowNotes === OPTION_SHOW_NOTES.all}
            />
            All
          </label>
          <label className="radio">
            <input
              type="radio"
              name="optionShow"
              value={OPTION_SHOW_NOTES.progress}
              checked={optionShowNotes === OPTION_SHOW_NOTES.progress}
            />
            In progress
          </label>
          <label className="radio">
            <input
              type="radio"
              name="optionShow"
              value={OPTION_SHOW_NOTES.done}
              checked={optionShowNotes === OPTION_SHOW_NOTES.done}
            />
            Done
          </label>
        </div>
      </S.HeaderSetting>
      <S.TableNote className="is-flex is-flex-wrap-wrap">
        {notes.map((note) => {
          if (
            (optionShowNotes === OPTION_SHOW_NOTES.done && !note.status) ||
            (optionShowNotes === OPTION_SHOW_NOTES.progress && note.status)
          )
            return null

          return (
            <Note
              id={note.id}
              status={note.status}
              content={note.content}
              handleDeleteNote={(id) => {
                dispatch(deleteNote({ id }))
              }}
              handleUpdateNote={({ id, content, status }) => {
                dispatch(updateNote({ id, content, status }))
              }}
            />
          )
        })}
      </S.TableNote>

      {/*{isArrayHasValue(notes) && (*/}
      {/*  <>*/}
      {/*    {notes.map((item) => (*/}
      {/*      <Note />*/}
      {/*    ))}*/}
      {/*  </>*/}
      {/*)}*/}
    </div>
  )
}

export default NotePage
