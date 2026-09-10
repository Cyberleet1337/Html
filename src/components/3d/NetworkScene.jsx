import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const topologyNodes = [
  { label: 'HOSPITAL', position: [-2.8, 1.45, 0.2], color: 0x0879cf },
  { label: 'OFFICE', position: [2.8, 1.35, -0.2], color: 0x0284c7 },
  { label: 'CLOUD', position: [-2.7, -1.45, -0.2], color: 0x0879cf },
  { label: 'CCTV', position: [2.7, -1.35, 0.2], color: 0x0284c7 },
];

export default function NetworkScene() {
  const canvasRef = useRef(null);
  const [webGlFailed, setWebGlFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const host = canvas.parentElement;
    if (!host) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 11);

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
    scene.add(group);

    const hubMat = new THREE.MeshBasicMaterial({ color: 0x0879cf });
    const hub = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), hubMat);
    group.add(hub);

    const hubRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
    const hubRing = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.77, 48), hubRingMat);
    group.add(hubRing);

    const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const nodes = topologyNodes.map(({ position, color }) => {
      const nodeMat = new THREE.MeshBasicMaterial({ color });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(...position);
      group.add(node);
      return node;
    });

    const connectionMaterial = new THREE.LineBasicMaterial({ color: 0x0879cf, transparent: true, opacity: 0.45 });
    const connections = nodes.map((node) => {
      const points = [new THREE.Vector3(0, 0, 0), node.position.clone()];
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), connectionMaterial);
      group.add(line);
      return line;
    });

    const pulseMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const pulseGeo = new THREE.SphereGeometry(0.07, 10, 10);
    const pulses = nodes.map(() => {
      const pulse = new THREE.Mesh(pulseGeo, pulseMaterial);
      group.add(pulse);
      return pulse;
    });

    const starPoints = Array.from({ length: 45 }, () =>
      new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, -0.7)
    );
    const starGeo = new THREE.BufferGeometry().setFromPoints(starPoints);
    const starMat = new THREE.PointsMaterial({ color: 0x0879cf, size: 0.025, transparent: true, opacity: 0.4 });
    const stars = new THREE.Points(starGeo, starMat);
    group.add(stars);

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

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      if (!reducedMotion) {
        group.rotation.y = Math.sin(elapsed * 0.35) * 0.06;
        group.rotation.x = Math.cos(elapsed * 0.28) * 0.025;
        hub.rotation.y = elapsed * 0.7;
        hubRing.rotation.z = elapsed * 0.4;
        nodes.forEach((node, index) => {
          node.scale.setScalar(1 + Math.sin(elapsed * 2 + index) * 0.12);
        });
        pulses.forEach((pulse, index) => {
          const progress = (elapsed * 0.32 + index * 0.24) % 1;
          pulse.position.lerpVectors(new THREE.Vector3(0, 0, 0), topologyNodes[index].position, progress);
        });
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
      <div className="network-fallback" style={{ textAlign: 'center', padding: '40px' }}>
        <p style={{ color: 'var(--muted)', fontSize: '13px' }}>Network Map Active</p>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="network-canvas"
      aria-label="Interactive network infrastructure map"
    />
  );
}
