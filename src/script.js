import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */

const group = new THREE.Group()
group.position.y = 2.5
group.position.z = -2
group.scale.y= 0.5
scene.add(group) 

const cubb1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cubb1)


const cube2= new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "blue"})
)
cube2.position.set(2,0,0)
group.add(cube2)



const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "green"})
)
cube3.position.set(-2,0,0)
group.add(cube3)




// GROUP 2


const group2 = new THREE.Group()
group2.position.y = 0
group2.position.z = -2
group.scale.y= 0.5

scene.add(group2)


const cube4 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "yellow"})
)

cube4.position.set(1,0,0)
group2.add(cube4)

const cube5 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "purple"})
)

cube5.position.set(3,0,0)
group2.add(cube5)

const cube6 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "teal"})
)

cube6.position.set(-1,0,0)
group2.add(cube6)


const cube7 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "grey"})
)

cube7.position.set(-3.25,0,0)
group2.add(cube7)


//GROUP 3

const group3 = new THREE.Group()
group3.position.y = -2.5
group3.position.z = -2
group3.scale.y= 1
scene.add(group3) 

const cube8 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "orange" })
)

group3.add(cube8)


const cube9= new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "gold"})
)
cube9.position.set(2,0,0)
group3.add(cube9)


const cube10 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: "pink"})
)
cube10.position.set(-2,0,0)
group3.add(cube10)




//Axes helper
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 3


scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)