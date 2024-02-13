import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useRgbm,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  CanvasSnipperPlugin,
  TemporalAAPlugin,
  AnisotropyPlugin,
  FrameFadePlugin,
  GBufferPlugin,
  GLTFAnimationPlugin,
  GroundPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  mobileAndTabletCheck,
  DiamondPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { object } from "prop-types";

function ModelViewer() {
  const cref = useRef(null);

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: cref.current,
      // renderBackground: false,
      // alpha: true
    });

    const manager = await viewer.addPlugin(AssetManagerPlugin);

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    //await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);
    await viewer.addPlugin(TemporalAAPlugin);
    await viewer.addPlugin(AnisotropyPlugin);

    //await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

    // Required for downloading files from the UI
    //await viewer.addPlugin(FileTransferPlugin)

    // const gl = cref.current.getContext("webgl",{ premultipliedAlpha: false });
    // gl.clearColor(0, 0, 0, 0);
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    // await viewer.addPlugin(CanvasSnipperPlugin)
    const gltfAnim = await viewer.addPlugin(GLTFAnimationPlugin);
    viewer.renderer.refreshPipeline();
    //viewer.createCamera
    // viewer.renderer.clearColor("#000000")
    // viewer.renderer.refreshPipeline()
    // viewer.setBackgroundColor(0,0,0, 0)
    //viewer.clearColor(0,0,0,0)

    await manager.addFromPath("src/scene-53.glb");
    // (await viewer.addPlugin(TonemapPlugin)).config.clipBackground = true;
    gltfAnim.animationSpeed = 1;
    gltfAnim.loopAnimations = true;

    // await gltfAnim.playAnimation();
    // viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    // (await viewer.addPlugin(GLTFAnimationPlugin)).playAnimation();

    //(await viewer.addPlugin(TonemapPlugin)).config.clipBackground = true;

    // Import and add a GLB file.
    //await viewer.load("../scene.glb")

    // Load an environment map if not set in the glb file
    // await viewer.setEnvironmentMap("./assets/environment.hdr");
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);
  return (
    <div>
      <canvas ref={cref} className="bg-white" width="400" height="350" />
    </div>
  );
}

export default ModelViewer;
