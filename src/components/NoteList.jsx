//Render a list of notes passed as props.
// Use the NoteItem component to display each note.

import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import './components.css'

function NoteList({notes, onDelete, onEdit}) {
  return (
    <div className="noteList-flex">
        {notes.map((note) => (
        <NoteItem 
        key={note.id} 
        note={note} 
        onDelete={onDelete}
        onEdit={onEdit}/>
      ))}
    </div>
  )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number, 
        title: PropTypes.string,
        content: PropTypes.string,
        category: PropTypes.string,
      }),
    ),
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
  };

export default NoteList;
