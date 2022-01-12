import React from "react";
import HomeTodos from "./HomeTodos";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="font-bold text-4xl mb-12">good evening, user</h1>
      <div className="flex h-full flex-col flex-wrap">
        <HomeTodos />
      </div>
    </div>
  );
};

export default Home;
