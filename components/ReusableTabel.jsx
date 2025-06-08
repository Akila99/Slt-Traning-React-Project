import React from "react";

function ReusableTable({
  columns,
  data,
  modification = [],
  editingId,
  editedRow,
  setEditedRow,
  onSave,
  onCancel,
}) {
  const isEditingEnabled =
    editingId !== undefined && setEditedRow && editedRow && onSave && onCancel;

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.accessor}>{col.header}</th>
          ))}
          {modification.length > 0 && <th>Modification</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={col.accessor}>
                {isEditingEnabled && editingId === row.id ? (
                  <input
                    name={col.accessor}
                    value={editedRow[col.accessor] || ""}
                    onChange={(e) =>
                      setEditedRow({
                        ...editedRow,
                        [col.accessor]: e.target.value,
                      })
                    }
                  />
                ) : (
                  row[col.accessor]
                )}
              </td>
            ))}
            {modification.length > 0 && (
              <td>
                {isEditingEnabled && editingId === row.id ? (
                  <>
                    <button onClick={() => onSave(editedRow)}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                  </>
                ) : (
                  modification.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => action.onClick(row)}
                      style={action.style}
                    >
                      {action.svg}
                    </button>
                  ))
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReusableTable;
