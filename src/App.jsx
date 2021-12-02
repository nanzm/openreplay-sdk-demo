import React from "react";

import SdkConfig from "./sdk/Config";
import Ajax from "./view/Ajax";
import Error from "./view/Error";
import HashChange from "./view/HashChange";
import History from "./view/History";
import InsertRes from "./view/InsertRes";
import CustomReport from "./view/CustomReport";
import PromiseError from "./view/PromiseError";
import Stat from "./view/Stat";

function App() {
  return (
    <>
      <SdkConfig/>
      <div className="section-groups">
        <Error/>
        <Ajax/>
        <HashChange/>
        <History/>
        <InsertRes/>
        <CustomReport/>
        <PromiseError/>
        <Stat/>
      </div>
    </>
  );
}

export default App;
