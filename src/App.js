import RenderModel from "./components/renderObj";
import ModelList from "./components/modelList";
import React, { useState } from "react";
import defaultModel from "./components/Poimandres.gltf"
import "./styles.css";
import NavBar from "./components/nav";

export default function App() {
  const [currentModel, setCurrentModel] = useState(defaultModel)
  const [preset, setPreset] = useState("city")
  const [navExpand, setNavExpand] = useState(true)


  return (
    <React.StrictMode>

    <div className="App">
      <NavBar setExpand ={setNavExpand}/>
      <div className="AppItems">

        <ModelList changeModel={setCurrentModel} changePreset={setPreset} navExpand={navExpand} setNavExpand ={setNavExpand}/>
        <RenderModel currentModel={currentModel} preset={preset} />
      </div>


    </div>
    </React.StrictMode>

  );
}
