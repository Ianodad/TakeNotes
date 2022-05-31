import React, { useEffect, useState } from "react";
import { noteProps } from "../constants/models";

interface editProps {
  onHandleEditNote: (note: noteProps) => void;
  selectEditedNote: noteProps | undefined;
  showUpdateModal: boolean;
  setSelectEditedNote: React.Dispatch<React.SetStateAction<noteProps | undefined>>;
  setUpdateModalVisibility: (visibility: boolean) => void;
}

const EditModal = ({
  onHandleEditNote,
  selectEditedNote,
  showUpdateModal,
  setSelectEditedNote,
  setUpdateModalVisibility,
}: editProps) => {
  const [title, setTitle] = useState<string | undefined>(selectEditedNote?.title);
  const [content, setContent] = useState<string | undefined>(selectEditedNote?.content);
  const [color, setColor] = useState<string | undefined>(selectEditedNote?.color || "#F9A8D4");

  // handle event
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onHandleEditNote({ title, content, color });
    setUpdateModalVisibility(!showUpdateModal);
    setTitle("");
    setContent("");
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Note</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-red-500"
                onClick={() => setUpdateModalVisibility(!showUpdateModal)}>
                Close
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Content
                  </label>
                  <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="content"
                    type="text"
                    value={content}
                    name="content"
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Pick Note Color
                  </label>
                  <input
                    className="w-12 shadow appearance-none border  rounded w-full  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="color"
                    type="color"
                    value={color}
                    name="content"
                    onChange={(e) => setColor(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditModal;
