"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import { AnimationControls, motion, useAnimation } from "framer-motion";

export const CafaloverElementsPage = () => {
  const badge: AnimationControls = useAnimation();
  // console.log(document.documentElement.scrollHeight);

  const timeLine = async () => {
    await badge.start({
      y: -20,
      transition: { repeat: Infinity, duration: 2, repeatType: "reverse" },
    });
  };

  useEffect(() => {
    timeLine();
  }, [badge]);

  useEffect(() => {
    window.scrollTo({
      top: 2999,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* "canvas" roadmap */}
      <div className="flex flex-col relative mt-16">
        <img
          src={"/images/canvas3.jpg"}
          alt={"sect"}
          className="w-full h-full"
        />

        <div className="flex w-full gap-4 fixed top-4 right-4 z-10">
          <div className="flex items-center p-4 ml-8 bg-slate-200 rounded-full">
            <IoMenuOutline
              // onClick={openSideMenu}
              className=""
              size={40}
            />
          </div>
          <div className="flex-1"></div>
          <Link
            href={"/inicio/perfil/puntos-acumulables"}
            className="flex flex-col items-center bg-primary rounded-full p-4"
          >
            <Image
              src={"/images/usuario3.png"}
              alt={"img"}
              width={40}
              height={40}
              className="w-[40px] h-[40px] object-cover"
            />
          </Link>
          <div>
            <Link
              href={"/inicio/perfil/puntos-acumulables/canjear"}
              className="flex flex-col items-center bg-green-800 rounded-full p-4"
            >
              <span className="font-bold text-slate-200">200</span>
              <span className="font-bold text-slate-200 text-[12px]">
                Puntos
              </span>
            </Link>
          </div>
        </div>

        <motion.button
          animate={badge}
          className="rounded-full border-2 border-orange-500 absolute bottom-[100px] left-[45px] overflow-hidden"
        >
          <Image
            src={"/user.jpeg"}
            alt={"user"}
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-cover"
          />
        </motion.button>

        <motion.button
          animate={badge}
          className="flex flex-col items-center bg-[#1556a1b2] rounded-full px-6 py-4 absolute bottom-[630px] left-[68px] overflow-hidden"
        >
          <Image
            src={"/images/usuario3.png"}
            alt={"img"}
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover"
          />
          <span className="font-bold text-slate-200">Usuario</span>
        </motion.button>

        <motion.button
          animate={badge}
          className="flex flex-col items-center bg-[#1556a1b2] rounded-full px-6 py-4 absolute bottom-[1120px] left-[100px] overflow-hidden"
        >
          <Image
            src={"/images/seguidor.png"}
            alt={"img"}
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover"
          />
          <span className="font-bold text-slate-200">Seguidor</span>
        </motion.button>

        <motion.button
          animate={badge}
          className="flex flex-col items-center bg-[#1556a1b2] rounded-full px-6 py-4 absolute top-[1050px] left-[160px] overflow-hidden"
        >
          <Image
            src={"/images/fanatico.png"}
            alt={"img"}
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover"
          />
          <span className="font-bold text-slate-200">Fanatico</span>
        </motion.button>

        <button className="flex flex-col items-center absolute top-[25px] left-[120px] overflow-hidden">
          <Image
            src={"/images/Group 256.png"}
            alt={"img"}
            width={150}
            height={150}
            className="w-[150px] h-[150px] object-cover"
          />
          <span className="font-bold text-xl text-primary-700">Cafalover</span>
        </button>
      </div>
    </div>
  );
};
