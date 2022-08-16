import React, {
  useContext,
  useState,
  Suspense,
} from "react";
import styles from "../styles/countries.module.scss";
import {
  Canvas,
  useLoader,
} from "@react-three/fiber";
import { TextureLoader } from "three";
import ThemeContext from "../context/context";

// import {
//   Physics,
//   useBox,
// } from "@react-three/cannon";
import {
  OrbitControls,
  Stars,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";
import {
  usePlane,
  Physics,
  useBox,
  useSphere,
} from "use-cannon";

function Box(props) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 2, 0],
    rotation: [90, 0, 40],
  }));
  const colorMap = useLoader(
    TextureLoader,
    "/asset/santexture.jpg"
  );
  return (
    <mesh
      ref={ref}
      position={[0, 2, 0]}
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      //rotation={[90, 0, 20]}
    >
      <boxBufferGeometry attach="geometry" />
      {/* <meshLambertMaterial
        attach="material"
        color="hotpink"
      /> */}
      {/* <meshStandardMaterial map={colorMap} /> */}
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}
function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const colorMap = useLoader(
    TextureLoader,
    "/asset/santexture.jpg"
  );
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry
        attach="geometry"
        args={[100, 100]}
      />
      <meshLambertMaterial
        attach="material"
        color={
          props.toggleState
            ? "#2b2d30"
            : "#f6f6f9"
        }
      />
      {/* <meshStandardMaterial map={colorMap} /> */}
    </mesh>
  );
}
function AnimatedSphere({ toggleState }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 2, 0],
    rotation: [90, 0, 40],
  }));
  return (
    <Sphere
      visible
      args={[1, 100, 200]}
      scale={1}
    >
      <MeshDistortMaterial
        attach="material"
        distort={0.3}
        speed={3}
        roughness={0.5}
        color="#8352fd"
      />
    </Sphere>
  );
}
function Countries() {
  const { toggleState } =
    useContext(ThemeContext);
  const [hover, setHover] = useState(false);
  const handleHover = () => setHover(true);
  const handleHoverOut = () => setHover(false);
  return (
    <div className={styles.canvas}>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={toggleState ? 0.9 : 2}
          position={[-2, 5, 2]}
        />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
        />
        <Suspense fallback={null}>
          <Physics>
            <Box />
            <Plane toggleState={toggleState} />
            <AnimatedSphere
              handleHoverOut={handleHoverOut}
              handleHover={handleHover}
              hover={hover}
            />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
  //      <div className={ styles.country }>
  //       <div className={ styles.county}></div>
  //   </div>;
}

export default Countries;
