import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import Dataa from "./Dataa";
import Select from "./Select";
import React, { useState } from "react";

const [filter, setfilter] = useState(Dataa);
let d1 = 0;

let a = [1, 2, 3, 4];
var r;
function scard(f) {
  a = Dataa.filter(function (val) {
    return val.type == f && val.brand == d1;
  });
  debugger;
  setfilter(a);
  filter.map(rendercard);
}

const rendercard = (val) => {
  debugger;
  console.log(val.imgscr);

  return (
    <Card
      imgscr={val.imgscr}
      title={val.title}
      desc={val.desc}
      price={val.price}
    />
  );
};

const bindSecondDropDown = (e) => {
  d1 = e.target.value;

  var select = document.getElementById("Select2");

  select.innerHTML = "";

  for (var i = 0; i < 3; i++) {
    var temp;
    var opt = Dataa[i].type;

    const arr = Dataa[i + 1].type;

    select.innerHTML += '<option value="' + opt + '">' + opt + "</option>";
    temp = Dataa[i].type;
  }
};

function App() {
  return (
    <>
      <select id="Select1" onChange={(e) => bindSecondDropDown(e)}>
        <option value="Select an Option">Select an Option</option>
        <option value="OPPO">OPPO</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
      </select>
      {/* {a.map(rendercard)}  */}
      <select id="Select2" onChange={(e) => scard(e.target.value)}></select>
      {filter.map(rendercard)}
    </>
  );
}

export default App;
