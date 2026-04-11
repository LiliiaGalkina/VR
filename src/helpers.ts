import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const itemsDownUPNoTrigger = (target: HTMLDivElement | null) => {
  if (target) {
    const children = Array.from(target.children);
    gsap.fromTo(
      children,
      {
        y: 100,
        opacity: 0,
      },
      {
        duration: 3,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power3.out",
      },
    );
  }
};

export const rightToLeftNoTrigger = (target: HTMLDivElement | null) =>
  gsap.fromTo(
    target,
    {
      x: 200,
      opacity: 0,
    },
    {
      duration: 4,
      x: 0,
      opacity: 1,
      ease: "power3.out",
    },
  );

export const itemsDownUP = (target: HTMLDivElement | null) => {
  if (target) {
    const children = Array.from(target.children);
    gsap.fromTo(
      children,
      {
        y: 200,
        opacity: 0,
      },
      {
        duration: 4,
        y: 0,
        opacity: 1,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
        },
      },
    );
  }
};

export const rightToLeft = (target: HTMLDivElement | null) =>
  gsap.fromTo(
    target,
    {
      x: 200,
      opacity: 0,
    },
    {
      duration: 4,
      x: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
    },
  );

export const leftToRight = (target: HTMLDivElement | null) =>
  gsap.fromTo(
    target,
    {
      x: -200,
      opacity: 0,
    },
    {
      duration: 4,
      x: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
    },
  );

export const downToUp = (target: HTMLDivElement | null) => {
  gsap.fromTo(
    target,
    {
      y: 200,
      opacity: 0,
    },
    {
      duration: 4,
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
    },
  );
};

export const itemsDownUpFrom = (target: HTMLDivElement | null) => {
  if (!target || target.children.length === 0) return;

  const children = Array.from(target.children);

  children.forEach((child, index) => {
    gsap.set(child, { clearProps: "all" });

    gsap.from(child, {
      duration: 4,
      y: "+=200",
      delay: index * 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: child,
        start: "top bottom",
      },
    });
  });
};

export const disappearAndResize = (target: HTMLDivElement | null) => {
  if (!target) return;

  gsap.fromTo(
    target,
    {
      scale: 0.7,
      opacity: 0,
      z: 1,
    },
    {
      scale: 1,
      z: -500,
      opacity: 1,
      duration: 3,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
      },
    },
  );
};
