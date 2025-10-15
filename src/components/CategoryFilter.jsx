// Allow the user to filter notes by category.
// Pass the selected category back to the parent component (App.js).
import PropTypes from "prop-types";
import './components.css'

function CategoryFilter({ selectedCategory, onFilterChange }) {
    const categories = ["All", "General", "Work", "Personal", "Others"];
  
    return (
       <div className="category">
        <select
          value={selectedCategory}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
      </select>
      </div>
    );
  }

CategoryFilter.propTypes = {
    onFilterChange: PropTypes.func,
    selectedCategory: PropTypes.string
};
  
  export default CategoryFilter;