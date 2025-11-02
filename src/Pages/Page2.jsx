import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        gsap.to(".second", {
          rotation: -10,
          xPercent: -10,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".second",
            start: "top 50%",
            end: "bottom 70%",
            scrub: true,
          },
        });

        gsap.from(".third", {
          rotation: 15,
          yPercent: -60,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".third",
            start: "top 50%",
            end: "bottom 70%",
            scrub: true,
          },
        });

        gsap.from(".fourth", {
          rotation: 16,
          yPercent: -60,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".fourth",
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        });

        gsap.from(".fifth", {
          rotation: 15,
          yPercent: -60,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".fifth",
            start: "top 50%",
            end: "bottom 70%",
            scrub: true,
          },
        });

        gsap.from(".sixth", {
          rotation: 20,
          xPercent: -50,
          yPercent: -100,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".sixth",
            start: "top 110%",
            end: "bottom 80%",
            scrub: true,
          },
        });
      },

      "(max-width: 1023px)": () => {
        gsap.to(".second", {
          rotation: -5,
          xPercent: -5,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".second",
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        });

        gsap.from(".third", {
          rotation: 8,
          yPercent: -30,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".third",
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        });

        gsap.from(".fourth", {
          rotation: 10,
          yPercent: -30,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".fourth",
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        });

        gsap.from(".fifth", {
          rotation: 10,
          yPercent: -30,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".fifth",
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        });

        gsap.from(".sixth", {
          rotation: 10,
          xPercent: -30,
          yPercent: -50,
          transformOrigin: "bottom left",
          ease: "linear",
          scrollTrigger: {
            trigger: ".sixth",
            start: "top 120%",
            end: "bottom 90%",
            scrub: true,
          },
        });
      },
    });
  }, []);

  return (
    <div className="Page2 relative bg-[rgba(255,0,0,0.7)] backdrop-blur">
      {/* Section: Second */}
      <section className="second min-h-screen w-full bg-stone-100 p-4">
        <h4 className="text-sm">/ ABOUT THE LINE</h4>
        <h1 className="text-[10vw] font-medium leading-[10vh]">Highlights</h1>
        <div className="flex gap-6">
          <h3 className="text-[5vw] underline underline-offset-4">The Work</h3>
          <h3 className="text-[5vw] underline underline-offset-4">
            The Studio
          </h3>
        </div>
      </section>

      {/* Section: Third */}
      <section className="third min-h-screen w-full bg-gray-300 p-4 sticky top-0 overflow-hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-[8vw] font-medium">Azuki Elementals</h1>
          <h2 className="text-[4vw]">View Project</h2>
        </div>
        <div className="border-2 border-dotted border-black p-4">
          <div className="text-xs flex justify-between p-1">
            <span>OVERSCAN</span>
            <span>1577 x 974</span>
          </div>
          <div className="border-4 border-black">
            <video
              autoPlay
              loop
              muted
              className="w-full h-auto max-h-[70vh] object-cover"
              src="src/assects/pageEffect-vid-01.mp4"
            />
          </div>
        </div>
      </section>

      <div className="h-[30vh]"></div>

      {/* Section: Fourth */}
      <section className="fourth min-h-screen w-full bg-gray-300 p-4 sticky top-0">
        <div className="flex justify-between items-center">
          <h1 className="text-[8vw] font-medium">Delivery At Dawn</h1>
          <h2 className="text-[4vw]">View Project</h2>
        </div>
        <div className="border-2 border-dotted border-black p-4">
          <div className="text-xs flex justify-between p-1">
            <span>OVERSCAN</span>
            <span>1577 x 974</span>
          </div>
          <div className="border-4 border-black">
            <video
              autoPlay
              loop
              muted
              className="w-full h-auto max-h-[70vh] object-cover"
              src="src/assects/pageEffect-vid-02.mp4"
            />
          </div>
        </div>
      </section>

      <div className="h-[30vh]"></div>

      {/* Section: Fifth */}
      <section className="fifth min-h-screen w-full bg-gray-300 p-4 sticky top-0">
        <div className="flex justify-between items-center">
          <h1 className="text-[8vw] font-medium">Izzo</h1>
          <h2 className="text-[4vw]">View Project</h2>
        </div>
        <div className="border-2 border-dotted border-black p-4">
          <div className="text-xs flex justify-between p-1">
            <span>OVERSCAN</span>
            <span>1577 x 974</span>
          </div>
          <div className="border-4 border-black">
            <video
              autoPlay
              loop
              muted
              className="w-full h-auto max-h-[70vh] object-cover"
              src="src/assects/pageEffext-vid-03.mp4"
            />
          </div>
        </div>
      </section>

      <div className="h-[40vh]"></div>

      {/* Section: Sixth */}
      <section className="sixth min-h-[160vh] w-full bg-stone-100 sticky top-0 p-4">
        <h2 className="text-sm">/ MAKE YOUR MARK</h2>
        <h1 className="text-[10vw] font-semibold leading-[10vh]">The Studio</h1>

        <div className="h-[20vh]"></div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Images */}
          <div className="relative w-full lg:w-1/2 p-4">
            <img
              className="w-full max-w-[90%] h-auto mx-auto rotate-[5deg]"
              src="src/assects/images/Seaction-img-two.avif"
              alt="Studio Image 2"
            />
            <img
              className="absolute w-full max-w-[90%] h-auto top-24 left-0"
              src="src/assects/images/Seacion-img-one.avif"
              alt="Studio Image 1"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-sm mb-2">/ THE LOWDOWN</h2>
            <p className="text-base leading-relaxed">
              We’re a globally renowned animation studio based in East LDN. We
              work across advertising, interactive media, music videos and our
              own original content.
            </p>

            <h2 className="text-sm mt-10 mb-2">/ AWARDS & MENTIONS</h2>
            <div className="Awards grid grid-cols-2 gap-4 text-sm leading-relaxed">
              <div className="space-y-1 underline underline-offset-4 decoration-1">
                <p>BAFTA</p>
                <p>AD YOUNG GUN AWARDS</p>
                <p>MEOW ANIMATION AWARDS</p>
                <p>CLIO</p>
                <p>MEOW ARROWS</p>
                <p>MEOW MUSIC VIDEO AWARDS</p>
                <p>D&AD</p>
              </div>
              <div className="space-y-1">
                <p>GQ</p>
                <p>NME</p>
                <p>THE VERGE</p>
                <p>VARIETY</p>
                <p>THE HOLLYWOOD REPORTER</p>
                <p>THE LOS ANGELES TIMES</p>
                <p>THE TONIGHT SHOW WITH JIMMY FALLON</p>
                <p>BBC</p>
                <p>WIRED MAGAZINE</p>
                <p>THE INDEPENDENT</p>
                <p>THE SUNDAY TIMES</p>
                <p>ROLLING STONE</p>
                <p>THE TELEGRAPH</p>
                <p>PLAYBOY</p>
                <p>COSMOPOLITAN</p>
                <p>E ONLINE</p>
                <p>NERDIST</p>
                <p>NBC NEWS</p>
                <p>POLYGON</p>
                <p>HYPEBEAST</p>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-[6vw] font-bold leading-tight">
                “BELLISSIMO”
              </h1>
              <h2 className="text-sm font-normal">– GUILLERMO DEL TORO</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page2