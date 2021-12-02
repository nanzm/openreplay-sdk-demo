import React from "react";
import { setCache, remove } from "../lib/storage";
import { defaultConfig } from "./index";

function Config() {
  return (
    <form className="config-panel" onSubmit={(e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData) || {};
      const { dsn, environment, release } = formProps;

      console.log("formProps", formProps);

      setCache({ dsn, environment, release, });

      window.location.reload();
    }}>
      <div className="section">
        <h1>sdk 配置</h1>

        <div className="form-item">
          <label>projectKey: </label>
          <input type="text" name="projectKey" defaultValue={defaultConfig.projectKey}/>
        </div>

        <div className="form-item submit">
          <button type="submit">确定</button>
          <button type="button" onClick={() => {
            remove();
            window.location.reload();
          }}>恢复默认
          </button>
        </div>

      </div>
    </form>
  );
}

export default Config;
