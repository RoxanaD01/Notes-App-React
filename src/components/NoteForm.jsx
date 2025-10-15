import { useState } from "react";
import PropTypes from "prop-types";
import './components.css';


function NoteForm({addNote}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!content.trim()) {
      newErrors.content = "Content is required.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const newNote = { title, content, category };
    addNote(newNote); // Pass the note to the parent component
    setTitle(""); // Clear the form
    setContent("");
    setCategory("General");
    setErrors({});
  };
  
  return (
    <form onSubmit={handleSubmit} className="noteForm">
      <div>
        <label htmlFor="title"></label>
        <input
          id="title"
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-label="Enter note title"
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="content"></label>
        <textarea
          id="content"
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          aria-label="Write your note"
        />
        {errors.content && <p className="error">{errors.content}</p>}
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Select a category"
        >
          <option value="General" aria-label="General">General</option>
          <option value="Work" aria-label="Work">Work</option>
          <option value="Personal" aria-label="Personal">Personal</option>
          <option value="Others" aria-label="Others">Others</option>
        </select>
      </div>
      <button type="submit" aria-label="Submit">Save Note</button>
    </form>
  )
}

 NoteForm.propTypes = {
    addNote: PropTypes.func
  };

export default NoteForm
