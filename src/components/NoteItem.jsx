// Display the title, content, and category of a single note.

import { useState } from "react";
import PropTypes from "prop-types";
import './components.css';
import './editform.css';

function NoteItem({ note, onDelete, onEdit  }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);
    
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedNote({ ...editedNote, [name]: value });
  };

  const saveChanges = () => {
    onEdit(editedNote);
    setIsEditing(false);
  };

  const randomColor = () => {
    const colors = ["#AEEA94", "#B771E5", "#DA498D", "#69247C", "#80C4E9", "#0A5EB0", "#D76C82", "#EC8305", "#86D293", "#A91D3A", "#41B06E", "#7D7463", "#FAA300", "#9F70FD", "#9F91CC", "#461959", "#41B06E"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
     {isEditing && (
        <div className="overlay" onClick={() => setIsEditing(false)}></div>
      )}
     {isEditing ? (
      <div className='editForm'>

        <input
          name="title"
          value={editedNote.title}
          onChange={handleEditChange}
        />
        <textarea
          name="content"
          value={editedNote.content}
          onChange={handleEditChange}
        />
        <select
          name="category"
          value={editedNote.category}
          onChange={handleEditChange}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Others">Others</option>
        </select>
        <button onClick={saveChanges}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    ) : (
      <div className="noteItem"
      style={{ backgroundColor: randomColor() }}>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>Category: {note.category}</p>
        <button onClick={() => onDelete(note.id)}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    )}
    </div>
    );
  }
  
  NoteItem.propTypes = {
    note: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      category: PropTypes.string,
    }),
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
  };

  export default NoteItem;

  // PropTypes.shape validates that note is an object with specific keys.
  