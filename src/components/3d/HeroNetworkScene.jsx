import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroNetworkScene() {
  const canvasRef = useRef(null);
  const [webGlFailed, setWebGlFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const host = canvas.parentElement;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      setWebGlFailed(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const group = new THREE.Group();
    group.rotation.z = -0.08;
    scene.add(group);

    const nodes = [];
    const positions = [];
    const nodeCount = 26;

    for (let index = 0; index < nodeCount; index += 1) {
      const angle = (index / nodeCount) * Math.PI * 2;
      const radius = 1.5 + (index % 3) * 0.55;
      positions.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, (index % 4 - 1.5) * 0.28));
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45 });
    const sphereGeoMajor = new THREE.SphereGeometry(0.09, 10, 10);
    const sphereGeoMinor = new THREE.SphereGeometry(0.045, 10, 10);
    const sphereMatMajor = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sphereMatMinor = new THREE.MeshBasicMaterial({ color: 0x0879cf });

    positions.forEach((position, index) => {
      const isMajor = index % 5 === 0;
      const node = new THREE.Mesh(isMajor ? sphereGeoMajor : sphereGeoMinor, isMajor ? sphereMatMajor : sphereMatMinor);
      node.position.copy(position);
      group.add(node);
      nodes.push(node);

      const nextPosition = positions[(index + 1) % positions.length];
      const lineGeo = new THREE.BufferGeometry().setFromPoints([position, nextPosition]);
      const line = new THREE.Line(lineGeo, lineMaterial);
      group.add(line);

      if (index % 3 === 0) {
        const hubLineGeo = new THREE.BufferGeometry().setFromPoints([position, new THREE.Vector3(0, 0, 0)]);
        const hubLine = new THREE.Line(hubLineGeo, lineMaterial);
        group.add(hubLine);
      }
    });

    const coreGeo = new THREE.IcosahedronGeometry(0.58, 1);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x0879cf, wireframe: true });
    const core = new THREE.Mesh(coreGeo, coreMat);

    const coreGlowGeo = new THREE.SphereGeometry(0.28, 16, 16);
    const coreGlowMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const coreGlow = new THREE.Mesh(coreGlowGeo, coreGlowMat);
    group.add(core, coreGlow);

    const pulseGeo = new THREE.SphereGeometry(0.07, 10, 10);
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const pulse = new THREE.Mesh(pulseGeo, pulseMat);
    group.add(pulse);

    const handleResize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(host);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      if (!reducedMotion) {
        group.rotation.y = elapsed * 0.12;
        group.rotation.x = Math.sin(elapsed * 0.28) * 0.08;
        core.rotation.x = elapsed * 0.45;
        core.rotation.y = elapsed * 0.65;
        nodes.forEach((node, index) => {
          node.scale.setScalar(1 + Math.sin(elapsed * 2.2 + index) * 0.2);
        });
        const pulseProgress = (elapsed * 0.24) % 1;
        pulse.position.set(
          Math.cos(pulseProgress * Math.PI * 2) * 1.3,
          Math.sin(pulseProgress * Math.PI * 2) * 1.3,
          0
        );
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      renderer.forceContextLoss();
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((m) => m.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  if (webGlFailed) {
    return (
      <div className="hero-network-fallback">
        <div className="hero-fallback-rings" />
        <div className="fallback-core">
          <b>MS</b>
          <small>CORE NETWORK</small>
        </div>
      </div>
    );
  }

  return (
    <canvas
      className="hero-network-canvas"
      ref={canvasRef}
      aria-label="Interactive 3D network topology visualization"
    />
  );
}
