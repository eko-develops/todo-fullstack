import React from "react";

interface Props {}

const HomeTodos = (props: Props) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">todos</h2>
      <div className=" bg-gray-700 p-4 w-[500px] rounded-lg shadow-lg overflow-y-auto h-5/6">
        <div className="text-gray-700 my-4 bg-gray-200 p-2 rounded-lg shadow-lg">
          <span className="font-bold text-xs">title</span>
          <h3>The title of the todo</h3>
          <span className="font-bold text-xs">description</span>
          <p>The message of the todo</p>
        </div>
        <div className="text-gray-700 my-4 bg-gray-200 p-2 rounded-lg shadow-lg">
          <span className="font-bold text-xs">title</span>
          <h3>The title of the todo</h3>
          <span className="font-bold text-xs">description</span>
          <p>The message of the todo</p>
        </div>
        <div className="text-gray-700 my-4 bg-gray-200 p-2 rounded-lg shadow-lg">
          <span className="font-bold text-xs">title</span>
          <h3>The title of the todo</h3>
          <span className="font-bold text-xs">description</span>
          <p>The message of the todo</p>
        </div>
        <div className="text-gray-700 my-4 bg-gray-200 p-2 rounded-lg shadow-lg">
          <span className="font-bold text-xs">title</span>
          <h3>The title of the todo</h3>
          <span className="font-bold text-xs">description</span>
          <p>The message of the todo</p>
        </div>
        <div className="text-gray-700 my-4 bg-gray-200 p-2 rounded-lg shadow-lg">
          <span className="font-bold text-xs">title</span>
          <h3>The title of the todo</h3>
          <span className="font-bold text-xs">description</span>
          <p>The message of the todo</p>
        </div>
        <div className="text-gray-700 my-4 bg-gray-200 p-2 rounded-lg shadow-lg">
          <span className="font-bold text-xs">title</span>
          <h3>The title of the todo</h3>
          <span className="font-bold text-xs">description</span>
          <p>The message of the todo</p>
        </div>
        <div className="text-gray-700 my-4 bg-gray-200 p-2 rounded-lg shadow-lg">
          <span className="font-bold text-xs">title</span>
          <h3>The title of the todo</h3>
          <span className="font-bold text-xs">description</span>
          <p>The message of the todo</p>
        </div>
      </div>
    </>
  );
};

export default HomeTodos;
