import React from "react";
import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { noteProps } from "../constants/models";

interface Props {
  data: noteProps;
  onSelectEditedNote: (selectNote: noteProps) => void;
  onDeleteNote: (id: string) => Promise<void>;
}

const StickyNote = ({ data, onSelectEditedNote, onDeleteNote }: Props) => {
  const { id, title, content, color, createdAt } = data;
  return (
    <div
      className={`w-54 h-64 flex flex-col justify-between  rounded-lg border  mb-6 py-5 px-4 -rotate-1 shadow-md`}
      style={{ backgroundColor: color }}>
      <div className="">
        <div className="flex">
          <div className="w-32">
            <h4 className="text-gray-900 font-bold mb-3">{title}</h4>
          </div>
          <div onClick={() => onDeleteNote(id!)} className="float-right">
            <DeleteIcon className="w-8 h-8 hover:scale-125" />
          </div>
        </div>
        <p className="text-gray-800 text-sm">{content}</p>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800">
          <p className="text-sm">{new Date(createdAt!).toDateString()}</p>
          <button
            className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300   focus:ring-black hover:scale-125"
            aria-label="edit note"
            onClick={() => onSelectEditedNote(data)}
            role="button">
            <EditIcon className="icon icon-tabler icon-tabler-pencil hover:scale-125" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNote;
