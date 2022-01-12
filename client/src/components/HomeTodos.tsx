import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

interface Props {}

const HomeTodos = (props: Props) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">todos</h2>

      <div className=" bg-gray-700 p-4 w-[500px] rounded-lg shadow-lg overflow-y-auto h-3/4">
        {/* todo card starts here */}
        <div className="text-gray-700 my-4 bg-gray-200 p-2 rounded-lg shadow-lg flex">
          <div className="w-5/6">
            <span className="font-bold text-xs">title</span>
            <h3>The title of the todo</h3>
            <span className="font-bold text-xs">description</span>
            <p>The message of the todo</p>
          </div>
          <div className="flex flex-col justify-evenly">
            <AiFillCheckCircle
              className="hover:text-green-700 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
              size={25}
            />
            <AiFillCloseCircle
              className="hover:text-red-700 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
              size={25}
            />
          </div>
        </div>
        {/* todo card ends here */}
      </div>
    </>
  );
};

export default HomeTodos;
