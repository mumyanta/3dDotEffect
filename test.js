    // ページの読み込みを待つ
    window.addEventListener('load', init);
 
    function init() {
 
      // サイズを指定
      const width = 960;
      const height = 540;
 
      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.setClearColor(0xF9F9F9, 1.0);
 
      // シーンを作成
      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xF9F9F9, 200, 300);
      // カメラを作成
      const camera = new THREE.PerspectiveCamera(45, width / height);
      camera.position.set(0, 0, 100);
 
      // 箱を作成
      const geometry = new THREE.BoxGeometry(10, 10, 10);
      const material = new THREE.MeshNormalMaterial();
      material.fog=true;
      const box = new THREE.Mesh(geometry, material);
      scene.add(box);
 
      tick();
 
      // 毎フレーム時に実行されるループイベントです
      function tick() {
        box.rotation.y += 0.01;
        renderer.render(scene, camera); // レンダリング
 
        requestAnimationFrame(tick);
      }
    }