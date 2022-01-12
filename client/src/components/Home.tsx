import React from "react";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-4xl mb-12">good evening, user</h1>
      <div className="flex">
        <div>
          <h2 className="">todos</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
