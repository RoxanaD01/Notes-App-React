import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ConfirmDelete from "./components/ConfirmDelete";
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [message, setMessage] = useState("");
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  // SAVE NOTES TO LOCAL STORAGE 

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // ADD NEW NOTE

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
    setMessage("Note added successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  // DELETE A NOTE
  const handleDelete = (id) => {
    setNoteToDelete(id);
    setIsConfirmationOpen(true);
  };

  const deleteNote = () => {
    setNotes(notes.filter((note) => note.id !== noteToDelete));
    setIsConfirmationOpen(false);
    setNoteToDelete(null);
  };

  const cancelDelete = () => {
    setIsConfirmationOpen(false);
    setNoteToDelete(null);
  };

  // EDIT A NOTE

  const editNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const filteredNotes = notes.filter((note) => {
    const lowerCaseSearch = search.toLowerCase();
    const matchesSearch = note.title.toLowerCase().includes(lowerCaseSearch) || note.content.toLowerCase().includes(lowerCaseSearch);
    const matchesCategory = categoryFilter === "All" || note.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <header className="app-header">
      <h1>Notes App</h1>
      <div className="searchBarCat">
      <div>
        <SearchBar onSearch={setSearch} />
        </div>
        <div>
        <CategoryFilter selectedCategory={categoryFilter} onFilterChange={setCategoryFilter} />
      </div>
    </div>
    </header>
    
    
    <div className="editAndDelete">
      <NoteForm addNote={addNote} />
      {message && <p>{message}</p>}
      <p className="list-title">Note List</p>
      <NoteList onDelete={handleDelete} onEdit={editNote} notes={filteredNotes} />

      {isConfirmationOpen && (
      <ConfirmDelete
      msg="Are you sure you want to delete this note?"
      onYes={deleteNote}
      onNo={cancelDelete}
    />
)}
    </div>
    <header className="app-footer">
        <div className="footer-rights">
            &copy; 2025 YourAppName. All rights reserved.
        </div>
    </header>
    
    </>
  );
}

export default App;
