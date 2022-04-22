import Button from "./components/Header";
import Field from "./components/Fields";
import './App.css';
import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Cube from "./Cube";

import { Canvas } from "@react-three/fiber";


function App() {
  return (
    <>
    <div className="App"  style={{display:"flex", flexWrap:"wrap"}}>
    <Button / >
    <Field />
    <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 2]} />
        <Suspense fallback={null}>
         <Cube />
        </Suspense>
      </Canvas>
    </div>
  
 
  
    </>
  );
}

export default App;
