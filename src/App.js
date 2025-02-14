import React from "react";
import Main from "./Main";
import { ParentUseState } from "./parentComponents/ParentUseState";

export default function App() {
  return (
    <div className="App">
      {/***** useCustomCallBack testi ve onun re-rendering prosesinin monitoringi  ******/}
      {/* <Main /> */}

      {/* use Statein arxada isleme prinsipi bu hissededir  */}
      <ParentUseState />
    </div>
  );
}
