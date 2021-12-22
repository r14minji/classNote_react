import { useState } from "react";
const deg = 45;



function Btns(props){
  let [index, setIndex] = useState(0); //초기값 0, 구조분해 할당

  function plus(){
    setIndex(++index);
    //console.log(index);
    props.frame.current.style.transform = `rotate(${index * deg}deg)`;
  }

  function minus(){

    setIndex(--index);
    //console.log(index);
    props.frame.current.style.transform = `rotate(${index * deg}deg)`;
  }

  return(
    <>
      <span className="btnPrev" onClick = {plus}>Prev</span>
      <span className="btnNext" onClick = {minus}>Next</span>
    </>
  )
}

export default Btns;