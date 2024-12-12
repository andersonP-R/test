"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import {
  AnimationControls,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { Modal } from "@/components";

const variants = {
  hidden: {},
  show: {
    transition: { delay: 1, duration: 2, ease: "easeInOut" },
  },
};

interface ModalObj {
  img: string;
  title: string;
  subTitle: string;
  desc: string;
}

export const CafaloverElementsPage = () => {
  const badge: AnimationControls = useAnimation();
  const labels: AnimationControls = useAnimation();
  // console.log(document.documentElement.scrollHeight);
  const sedeAdministrativaRef = useRef(null);
  const isInView = useInView(sedeAdministrativaRef);
  const [isOpen, setIsOpen] = useState(false);
  const [levelObj, setLevelObj] = useState<ModalObj>({
    img: "",
    title: "",
    subTitle: "",
    desc: "",
  });

  const timeLine = async () => {
    await badge.start({
      y: -20,
      transition: { repeat: Infinity, duration: 2, repeatType: "reverse" },
    });
  };

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true);
    const level = e.currentTarget.id;
    switch (level) {
      case "usuario-badge":
        setLevelObj({
          img: "/images/usuario3.png",
          title: "Usuario",
          subTitle: "¡Sube de nivel!",

          desc: "Alcanza el nivel Usuario para acceder a estos premios",
        });
        break;

      case "seguidor-badge":
        setLevelObj({
          img: "/images/seguidor.png",
          title: "Seguidor",
          subTitle: "¡Sube de nivel!",
          desc: "Alcanza el nivel Seguidor para acceder a estos premios",
        });
        break;

      case "fanatico-badge":
        setLevelObj({
          img: "/images/fanatico.png",
          title: "Fanatico",
          subTitle: "¡Sube de nivel!",
          desc: "Alcanza el nivel Fanatico para acceder a estos premios",
        });
        break;
      case "cafalover-badge":
        setLevelObj({
          img: "/images/Group 256.png",
          title: "Cafalover",
          subTitle: "¡Sube de nivel!",
          desc: "Alcanza el nivel Cafalover para acceder a estos premios",
        });
        break;

      default:
        break;
    }
  };

  const labelsTimeline = async () => {
    if (isInView) {
      await labels.start({ y: 200 });
    } else {
      await labels.start({ y: 0 });
    }
  };

  useEffect(() => {
    console.log(isInView);
    labelsTimeline();
  }, [isInView]);

  useEffect(() => {
    timeLine();
  }, [badge]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 2999,
        behavior: "smooth",
      });
    }, 1000);
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

        {/* Top Nav Btns */}
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

        {/* site refs */}
        <>
          {/* <motion.div
            ref={sedeAdministrativaRef}
            className="absolute bottom-[600px] right-[40px]"
          >
            sede administrativa
          </motion.div>

          <div className="absolute bottom-[350px] left-[40px]">
            cafam floresta
          </div> */}
        </>

        {/* --------------- MODAL --------------- */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col items-center gap-4 px-10 py-4 bg-slate-100 text-center">
            <span className="text-xl text-primary-700">
              {levelObj.subTitle}
            </span>

            <Image
              src={levelObj.img}
              alt={"badge-img"}
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-cover"
            />
            <span className="text-2xl text-primary-700">{levelObj.title}</span>
            <span>{levelObj.desc}</span>

            <button onClick={() => setIsOpen(false)} className="btn-secondary">
              Cerrar
            </button>
          </div>
        </Modal>

        {/*  */}
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
          onClick={(e) => handleOpenModal(e)}
          id="usuario-badge"
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
          onClick={(e) => handleOpenModal(e)}
          id="seguidor-badge"
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
          onClick={(e) => handleOpenModal(e)}
          id="fanatico-badge"
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

        <button
          onClick={(e) => handleOpenModal(e)}
          id="cafalover-badge"
          className="flex flex-col items-center absolute top-[25px] left-[120px] overflow-hidden"
        >
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
