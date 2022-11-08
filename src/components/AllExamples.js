import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import all neccesary thunks!

//**AllExamples will be the component you export! **/
const AllExamples = () => {
  //define your selectors!
  //* HERE *//
  // ex --> const exampleSelector = useSelector(selectExamples);

  //**defines dispatch in order to us it**//
  const dispatch = useDispatch();

  // ** Loads thunk after page loads once, input your thunk! **/
  // useEffect(() => {
  //   dispatch(***THUNK***());
  // }, []);

  //**Have a button function? Add one here! */
  //* HERE *//
  //ex --> function buttonFn(example) {}

  return (
    <>
      <div className="examples">
        <h2>Welcome to Example Store!</h2>
      </div>
      <div className="examples">
        {tumblers.map((example) => (
          <div key={example.id} className="example">
            <h2>
              {example.name} {example.id}
            </h2>
            <h2>{example.color}</h2>
            <h2>{example.price}</h2>
            <img src={example.imageUrl} />
            <button id={example.id} onClick={() => buttonFn(example)}>
              Button Here
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default AllExamples;
