import React from "react";

const StickyNote = ({ data, onSelectEditedNote, onDeleteNote }) => {
  const { id, title, content, createdAt } = data;
  return (
    <div className="max-w-md h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4 rotate-1 shadow-md">
      <div>
        <h4 className="text-gray-900 font-bold mb-3">
          {title}{" "}
          <div className="float-right" onClick={() => onDeleteNote(id)}>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8 1.36364C4.8 1.14664 4.71571 0.938533 4.56569 0.785095C4.41566 0.631656 4.21217 0.545455 4 0.545455C3.78783 0.545455 3.58434 0.631656 3.43431 0.785095C3.28429 0.938533 3.2 1.14664 3.2 1.36364H2.66667C2.66667 1.00198 2.80714 0.655131 3.05719 0.3994C3.30724 0.143668 3.64638 0 4 0C4.35362 0 4.69276 0.143668 4.94281 0.3994C5.19286 0.655131 5.33333 1.00198 5.33333 1.36364H7.73333C7.80406 1.36364 7.87189 1.39237 7.9219 1.44352C7.97191 1.49466 8 1.56403 8 1.63636C8 1.7087 7.97191 1.77806 7.9219 1.82921C7.87189 1.88036 7.80406 1.90909 7.73333 1.90909H7.43787L6.74667 8.03455C6.71657 8.3004 6.59198 8.54566 6.39658 8.72368C6.20118 8.90169 5.94861 9.00004 5.68693 9H2.31307C2.05139 9.00004 1.79882 8.90169 1.60342 8.72368C1.40802 8.54566 1.28343 8.3004 1.25333 8.03455L0.5616 1.90909H0.266667C0.204253 1.90911 0.143809 1.88674 0.0958619 1.84588C0.0479145 1.80501 0.0155011 1.74824 0.00426661 1.68545L0 1.63636C0 1.56403 0.0280952 1.49466 0.0781049 1.44352C0.128115 1.39237 0.195942 1.36364 0.266667 1.36364H4.8ZM6.90027 1.90909H1.0992L1.78293 7.97182C1.79799 8.10479 1.86032 8.22746 1.95808 8.31647C2.05583 8.40549 2.18218 8.45463 2.31307 8.45455H5.68693C5.81773 8.4545 5.94395 8.40529 6.04159 8.31629C6.13923 8.22729 6.20149 8.1047 6.21653 7.97182L6.90027 1.90909ZM3.2 3.27273C3.33067 3.27273 3.44 3.35727 3.4624 3.46855L3.46667 3.51164V6.85255C3.46667 6.984 3.3472 7.09091 3.2 7.09091C3.06933 7.09091 2.96 7.00636 2.9376 6.89509L2.93333 6.852V3.51218C2.93333 3.38018 3.0528 3.27327 3.2 3.27327V3.27273ZM4.8 3.27273C4.93067 3.27273 5.04 3.35727 5.0624 3.46855L5.06667 3.51164V6.85255C5.06667 6.984 4.9472 7.09091 4.8 7.09091C4.66933 7.09091 4.56 7.00636 4.5376 6.89509L4.53333 6.852V3.51218C4.53333 3.38018 4.6528 3.27327 4.8 3.27327V3.27273Z"
                fill="black"
              />
            </svg>
          </div>
        </h4>

        <p className="text-gray-800 text-sm">{content}</p>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800">
          <p className="text-sm">{createdAt}</p>
          <button
            className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300   focus:ring-black"
            aria-label="edit note"
            onClick={() => onSelectEditedNote(data)}
            role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-pencil"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNote;
