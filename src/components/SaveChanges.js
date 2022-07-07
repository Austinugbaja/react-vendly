import { Button } from "antd";
import React from "react";
import { dummyData } from "./data/dummyData";

const { ...data } = dummyData;

// const data = (dummyData) => {
//     dummyData.map((items) => (
//         <Welcome />
//     ))
// }

const SaveChanges = () => {
  return (
    <div className="w-full flex items-center justify-center h-[100vh] text-center">
      <div className="border-solid border-2 border-red-600" key={1}>
        <p className="">{data[1]?.title}</p>
        <div>
          <img src={data[1]?.img} alt="" />
        </div>
        <div>{data[1]?.desc1}</div>
        <div>{data[1]?.desc2}</div>
        <Button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
        >
          SHARE PRODUCT
        </Button>
      </div>
    </div>
  );
};

export default SaveChanges;
