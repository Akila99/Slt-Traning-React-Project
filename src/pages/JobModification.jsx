import React, { useState } from "react";
import AdminSidePanel from "../../components/AdminSidePanel";
import SearchBar from "../../components/SearchBar";
import { Link, useLocation } from "react-router-dom";
import ReusableTable from "../../components/ReusableTabel";
import initialJobList from "../jobList";
import EditIcon from "../assets/EditIcon";
import DeleteIcon from "../assets/DeleteIcon";

function JobModification() {
  const [jobList, setJobList] = useState(initialJobList);

  const [editingId, setEditingId] = useState(null); // ID of the row being edited
  const [editedRow, setEditedRow] = useState({});

  const columns = [
    { header: "Job Field", accessor: "jobField" },
    { header: "Job Title", accessor: "jobTitle" },
    { header: "Created Date", accessor: "createdDate" },
    { header: "Status", accessor: "status" },
    // { header: "Modification", accessor: "modification" },
  ];

  const handleEdit = (row) => {
    // const newTitle = prompt("Enter new job title:", row.jobTitle);
    // if (newTitle && newTitle.trim() !== "") {
    //   const updatedList = jobList.map((job) =>
    //     job.id === row.id ? { ...job, jobTitle: newTitle } : job
    //   );
    //   setJobList(updatedList);
    // }
    setEditingId(row.id);
    setEditedRow({ ...row });
  };

  const handleSave = () => {
    const updatedList = jobList.map((job) =>
      job.id === editingId ? editedRow : job,
    );
    setJobList(updatedList);
    setEditingId(null);
    setEditedRow({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedRow({});
  };

  const handleDelete = (row) => {
    if (window.confirm(`Are you sure you want to delete "${row.jobTitle}"?`)) {
      const updatedList = jobList.filter((job) => job.id !== row.id);
      setJobList(updatedList);
    }
  };

  const actions = [
    {
      svg: EditIcon,
      onClick: handleEdit,
      style: { marginRight: "10px", all: "unset", cursor: "pointer" },
    },
    {
      svg: DeleteIcon,
      onClick: handleDelete,
      style: { marginRight: "10px", all: "unset", cursor: "pointer" },
    },
  ];

  return (
    <section className="admin-background-image">
      <div className="admin-background">
        <AdminSidePanel />

        <div className="modification-table">
          <SearchBar />
          <ReusableTable
            columns={columns}
            data={jobList}
            modification={actions}
            editingId={editingId}
            editedRow={editedRow}
            setEditedRow={setEditedRow}
            setEditingId={setEditingId}
            onSave={(updatedRow) => {
              const updatedList = jobList.map((job) =>
                job.id === updatedRow.id ? updatedRow : job,
              );
              setJobList(updatedList);
              setEditingId(null);
              setEditedRow({});
            }}
            onCancel={() => {
              setEditingId(null);
              setEditedRow({});
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default JobModification;
