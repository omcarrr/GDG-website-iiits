import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase, useGSAP);

gsap.defaults({ duration: 0.6, ease: "power2.out" });

try {
  CustomEase.create("hop", "M0,0 C0,0 0.056,0.442 0.175,0.442 0.294,0.442 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");
} catch {
  /* already created in HMR */
}

export { gsap, ScrollTrigger, ScrollToPlugin, CustomEase, useGSAP };
