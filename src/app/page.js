"use client";
import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
function Model(md) {
  if (typeof window != undefined) {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(
      105,
      window?.innerWidth / window?.innerHeight,
      0.1,
      1000
    );
    camera.position.set(5, 2, 8);

    const loader = new GLTFLoader();
    const light = new THREE.HemisphereLight(0x330b51, 0x330b51, 5);
    scene.add(light.target);
    const light1 = new THREE.AmbientLight(0xffffff, 4); // soft white light
    scene.add(light1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    scene.add(directionalLight);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    loader.load(
      `${md}`,
      function (gltf) {
        console.log(gltf);
        scene.add(gltf.scene);
        document.getElementById('loader').style.display = 'none'
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    document.body.appendChild(renderer.domElement);

  }
}

const page = () => {
  function modelhandles(e) {
    e.preventDefault()
    if (e.target.value == 'GoHOME') {
      window.location.href = '/'
    }
    document.getElementById('mydata').style.display = 'none'
    document.getElementById('loader').style.display = 'block'
    Model(e.target.value)

  }
  return (
    <div  id='mydata' className="bg-white grid  w-[100vw] text-center justify-center bg-gray-100 p-8 rounded-lg shadow-md">
      <div className="text-2xl" >
        <div className="">
          <h2 className="text-3xl font-bold mb-4">Vinay Tandale</h2>
          <p className="text-lg mb-4">Full Stack MERN Developer</p>
          <p className="text-base mb-4">With over 1.5 years of experience, I have successfully completed multiple full-stack projects, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li >Auction Projects</li>
            <li>Government Projects</li>
            <li>Live Tracking System</li>
          </ul>
          <h1 className=" mt-4 font-bold text-2xl">You Can Look My 3d Projects </h1>
          <form className="max-w-sm mx-auto">
            <label
              for="Models"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a Model
            </label>
            <select
              id="Models"
              onChange={(e) => { modelhandles(e) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue>Choose a Model</option>
              <option value="free_1975_porsche_911_930_turbo.glb">porsche_911_930</option>
              <option value="audi_s5_fastback.glb">Audi s5 not blended</option>
              <option value="iphone_13_pro_max.glb">iphone_13_pro_max</option>
              <option value="rohscheider_hof_museum.glb">rohscheider_hof_museum</option>
              <option value="sea_house.glb">sea_house</option>
              <option value="ship_in_clouds.glb">ship_in_clouds</option>
              <option value="terem.glb">terem</option>
              <option value="the_japanese_school_classroom.glb">the_japanese_school_classroom</option>
              <option value="GoHOME">Goback</option>
            </select>
          </form>
          <div className="mt-4">
            <h5>Contact Number: <span className="font-bold">7666949043</span></h5>
            <h5>Email: <span className="font-bold">VinayTandale@gmail.com</span></h5>
          </div>
        </div>
        <div id="loader" className="text-3xl hidden" >Loading .....</div>
      </div>

     

    </div>
  );
};

export default page;
