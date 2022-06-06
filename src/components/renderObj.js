import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = (props) => {

  const gltf = useLoader(GLTFLoader, props.currentModel);
  return (
    <>
      <primitive object={gltf.scene} dispose={null}/>
    </>
  );
};

export default function RenderModel(props) {
  
  return (
    <div className="modelRenderer">
      <Canvas>
        <Suspense fallback={null}>
          <Model currentModel = {props.currentModel}/>
          <OrbitControls />
          <Environment preset={props.preset} background />
        </Suspense>
      </Canvas>
      <Loader/>
    </div>
  );
}


//animation


// function animation() {
//   return (
//     <div className="App">
//       <Canvas>
//         <MyRotatingBox />
//         <ambientLight intensity={1} />
//         <directionalLight />
//       </Canvas>
//     </div>
//   );
// }
