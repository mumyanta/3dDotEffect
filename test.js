// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {
 
	// サイズを指定
	const width = window.innerWidth;
	const height = window.innerHeight;

	// レンダラーを作成
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas')
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);
	renderer.setClearColor(0xFFFFFF, 1.0);

	// シーンを作成
	const scene = new THREE.Scene();

	// カメラを作成
	const camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 0, 25);

	//コントロールを作成
	const controls = new THREE.OrbitControls(camera);
	controls.enableDamping = true;
	controls.dampingFactor = 0.2;

	// 箱を作成
	const geometry = new THREE.BoxGeometry(10, 10,10);
	const material = new THREE.MeshStandardMaterial({color:0x808080});
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);

	// 環境光源を作成
	// new THREE.AmbientLight(色, 光の強さ)
	const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
	scene.add(light);

	tick();

	// 毎フレーム時に実行されるループイベントです
	function tick() {
		box.rotation.y += 0.01;
		controls.update();

		renderer.render(scene, camera); // レンダリング

		requestAnimationFrame(tick);
	}
}