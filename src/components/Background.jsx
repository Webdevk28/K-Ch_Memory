import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import bgg from "../assets/imgbg4.jpg"
import "../App.css"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const Parallax = () => {
  useEffect(() => {
    const container = document.querySelector('.parallax__first');
    const textContainer = container.querySelector('.parallax__layers--title');

    const layers = [
      { layer: '3', yPercent: 75 },
      { layer: '4', yPercent: 50 },
    ];

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom+=100%',
      pin: textContainer,
      ease: 'power2.out',
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    layers.forEach((layerObject, index) => {
      const el = container.querySelector(
        `[data-parallax-layer="${layerObject.layer}"]`
      );

      tl.to(
        el,
        {
          yPercent: layerObject.yPercent,
          ease: 'none',
        },
        index === 0 ? undefined : '<'
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="container">
      <section className="parallax parallax__first relative w-full h-screen overflow-hidden">
        <div className="parallax__layers w-full">
          <img src={bgg} loading="eager" data-parallax-layer="4" className="parallax__layer-img absolute w-full h-full object-cover object-center" alt="Mountain ranges"/>
        </div>
      </section>
    </div>
  );
};

export default Parallax;