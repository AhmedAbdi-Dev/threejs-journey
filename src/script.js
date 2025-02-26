import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//THIS CODE INCLUDES GEOMETRY/ POSITIONARRAY / POSITION ATTRIBUTE 

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// GEOMETRY ATTRBIUTES and VERTICES

const geometry = new THREE.BufferGeometry()

const count = 500

const positionsArray = new Float32Array(count * 3 *3)

for (let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random()-0.5) * 4 

}

const postionsAttribute = new THREE.BufferAttribute(positionsArray, 3)

geometry.setAttribute('position', postionsAttribute)



const positionAttribute = new THREE.BufferAttribute(positionsArray, 3)


geometry.setAttribute('position', positionAttribute)




/**
 * Object
 */

const material = new THREE.MeshBasicMaterial
({ color: 0xff0000, 
    wireframe:true
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


// //Resize
window.addEventListener('resize', () => {
    //update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.width, sizes.height)

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

/// FULL SCREEN CODE THAT WORKS IN ALL BROWSERS
window.addEventListener('dblclick', () => 
{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()

        }

    }
    else {
        if (document.exitFullscreen) 
            {
            document.exitFullscreen()

        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()

        }
    }
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()