import PropTypes from "prop-types";
import "./delete.css";

function ConfirmDelete({msg, onYes, onNo}) {
    return (
        <div className = "overlay">
            <div className="confirm-delete">
                <p className="msg">{msg}</p>
                <div className="confirm-buttons">
                    <button className="yes-btn" onClick={onYes}>Yes</button>
                    <button className="no-btn" onClick={onNo}>No</button>
                </div>
            </div>
        </div>
    )
}

ConfirmDelete.propTypes = {
    msg: PropTypes.string.isRequired,
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired,
  };

export default ConfirmDelete;