import React from "react";
import Learning from "./components/Learning";
import {v4 as uuidv4 } from "uuid";

function LearningList() {
const learningList = [
    {
        name: "Aš mokausi HTML",
        img: "https://picsum.photos/200/300",
        status:"mokausi"
    },
    {
        name: "Aš mokausi JS",
        img: "https://picsum.photos/id/237/200/300",
        status:"mokausi",
    },
    {
        name: "Aš mokausi React",
        img: "https://picsum.photos/id/237/200/300",
        status:"mokausi",
    },
];


let data = learningList.map((data) =>{
  return(
      <Learning
      key={uuidv4()}
      name={data.name}
      status={data.status}
      img={data.img}
      />
  );
});

return <>{data}</>
}
export default LearningList;