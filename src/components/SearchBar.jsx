// Allow the user to search for notes.
// Pass the search term back to the parent component (App.js).
import PropTypes from "prop-types";
import './components.css';
import search from '../assets/search.png';
function SearchBar({ onSearch }) {
    const handleSearch = (e) => {
      onSearch(e.target.value);
    };
  
    return (
      <div className="searchBar">
        <img src={search} alt="Search" />
        <input
          type="text"
          placeholder="Search notes..."
          onChange={handleSearch}
        />
    </div>
    );
  }

  SearchBar.propTypes = {
    onSearch: PropTypes.func
  };
  
  export default SearchBar;