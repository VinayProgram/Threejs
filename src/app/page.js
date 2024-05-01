'use client'
import React, { useEffect } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const page = () => {


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const loader = new GLTFLoader();
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 100 );
scene.add( light );
const light1 = new THREE.AmbientLight( 0x404040,100 ); // soft white light
scene.add( light1 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();
loader.load( 'free_1975_porsche_911_930_turbo.glb', function ( gltf ) {
console.log(gltf)
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


camera.position.z = 5;
camera.position.y = 2;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
useEffect(()=>{
  animate();
  document.body.appendChild( renderer.domElement );
},[])


  return (
    <div>
      
    </div>
  )
}

export default page
