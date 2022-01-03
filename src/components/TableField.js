import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const TableField = ({ fieldName, settingsField, removeBook, editBook }) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <FaEdit
            onClick={editBook}
            style={{ color: "#36304a", marginRight: "10px", cursor: "pointer" }}
          />
          <FaTrashAlt
            onClick={removeBook}
            style={{ color: "#36304a", marginRight: "10px", cursor: "pointer" }}
          />
        </>
      )}
    </div>
  );
};

export default TableField;
