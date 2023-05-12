import React, { useState } from "react";

import { noteProps } from "../constants/models";

type Props = {
  onHandleAddNote: (note: noteProps) => void;
  showAddModal: boolean;
  setAddModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};


const AddModal = ({ onHandleAddNote, showAddModal, setAddModalVisibility }: Props) => {
  // handle field data
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [color, setColor] = useState<string>("#F9A8D4");

  // handle on submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onHandleAddNote({ title, content, color });
    setTitle("");
    setContent("");
    setAddModalVisibility(!showAddModal);
  };

  
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Note</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setAddModalVisibility(!showAddModal)}>
                Close
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
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
                  <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                  <textarea
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="content"
                    rows={4}
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

export default AddModal;
