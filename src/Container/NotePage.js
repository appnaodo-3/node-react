import React, { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import Note from "../Components/Note"
import { useDispatch, useSelector } from "react-redux"
import { addNote, deleteNote, settingTheme, updateAllNotes, updateNote } from "./noteSlice"
import isArrayHasValue from "../helper/isArrayHasValue"
import * as S from "./styled"
import { SketchPicker, BlockPicker, CompactPicker } from "react-color"

const OPTION_SHOW_NOTES = {
  all: "all",
  progress: "progress",
  done: "done",
}

const NotePage = () => {
  const [optionShowNotes, setOptionShowNotes] = useState(OPTION_SHOW_NOTES.all)
  const [color, setColor] = useState("#333")

  const dispatch = useDispatch()
  const notes = useSelector((state) => state.note.notes)
  const colorTheme = useSelector((state) => state.note.setting.theme.background)

  const handleColorChange = ({ hex }) => {
    dispatch(settingTheme({ color: hex }))
  }

  const handleAddNote = () => {
    dispatch(addNote())
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    console.log("---", result.source.index, result.destination.index)

    const items = reorder(notes, result.source.index, result.destination.index)

    dispatch(updateAllNotes(items))
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 ${8}px 0`,
    height: "fit-content",

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  const getListStyle = (isDraggingOver) => ({
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    // background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: 8,
  })

  return (
    <div>
      <S.HeaderSetting className="px-5 is-flex is-justify-content-space-between">
        <div>
          <button className="button is-info" onClick={handleAddNote}>
            New note <i className="fas fa-plus ml-1" />
          </button>
          <S.HeaderProgress
            className="control mt-2"
            onChange={(event) => {
              setOptionShowNotes(event.target.value)
            }}
          >
            <div>
              <S.TitleSetting>Show note</S.TitleSetting>
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
          </S.HeaderProgress>
        </div>
        <div className="is-flex">
          <S.TitleSetting>Choose color table note</S.TitleSetting>
          <CompactPicker color={colorTheme} onChangeComplete={handleColorChange} />
        </div>
      </S.HeaderSetting>
      <S.TableNote className="is-flex is-flex-wrap-wrap" theme={colorTheme}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {notes.map((note) => {
                  if (
                    (optionShowNotes === OPTION_SHOW_NOTES.done && !note.status) ||
                    (optionShowNotes === OPTION_SHOW_NOTES.progress && note.status)
                  )
                    return null

                  return (
                    <Draggable key={note.id} draggableId={note.id.toString()} index={note.id - 1}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
                          <Note
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            id={note.id}
                            status={note.status}
                            content={note.content}
                            date={note.date}
                            handleDeleteNote={(id) => {
                              dispatch(deleteNote({ id }))
                            }}
                            handleUpdateNote={({ id, content, status, date }) => {
                              dispatch(updateNote({ id, content, status, date }))
                            }}
                          />
                        </div>
                      )}
                    </Draggable>
                  )
                })}
              </div>
            )}
          </Droppable>
        </DragDropContext>
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
