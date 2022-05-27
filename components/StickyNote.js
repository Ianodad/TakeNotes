import React from "react";
import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";

const StickyNote = ({ data, onSelectEditedNote, onDeleteNote }) => {
  const { id, title, content, createdAt } = data;
  return (
    <div className="w-54 h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4 rotate-1 shadow-md">
      <div clasName="">
        <div className="flex">
          <div className="w-32">
            <h4 className="text-gray-900 font-bold mb-3">{title}</h4>
          </div>
          <div onClick={() => onDeleteNote(id)} className="float-right">
            <DeleteIcon />
          </div>
        </div>
        <p className="text-gray-800 text-sm">{content}</p>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800">
          <p className="text-sm">{new Date(createdAt).toDateString()}</p>
          <button
            className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300   focus:ring-black"
            aria-label="edit note"
            onClick={() => onSelectEditedNote(data)}
            role="button">
            <EditIcon className="icon icon-tabler icon-tabler-pencil" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNote;
