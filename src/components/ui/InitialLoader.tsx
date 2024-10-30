"use client";

import { AnimationControls, motion, useAnimation } from "framer-motion";
import Spinner from "./Spinner";
import { useEffect } from "react";
import Link from "next/link";
import CafamLogoMD from "./logos/CafamLogoMD";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const iconStroke = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export const InitialLoader = () => {
  const spinner: AnimationControls = useAnimation();
  const logo: AnimationControls = useAnimation();
  const logoStroke: AnimationControls = useAnimation();
  const btn: AnimationControls = useAnimation();

  const test = 2;

  const timeLine = async () => {
    await logo.start({
      opacity: 1,
    });

    await spinner.start({
      opacity: 1,
      y: 20,
      transition: { duration: 1, delay: 2.8 },
    });

    await spinner.start({
      opacity: 0,
      transition: { duration: 1, delay: test },
    });

    await logo.start({
      y: -40,
      transition: { duration: 1, delay: 0 },
    });

    await btn.start({
      opacity: 1,
      transition: { duration: 1, delay: 0 },
    });
  };

  useEffect(() => {
    timeLine();
  }, []);

  return (
    <motion.div className="h-screen w-screen bg-primary flex flex-col p-4 justify-center items-center">
      <motion.div animate={logo} initial={{ opacity: 0 }}>
        <LogoAnimation />
      </motion.div>

      <motion.div animate={spinner} initial={{ opacity: 0, y: 50 }}>
        <Spinner />
      </motion.div>

      <motion.div
        className="btn-secondary"
        initial={{ opacity: 0, y: -40 }}
        animate={btn}
      >
        <Link href="/inicio">Ingresar</Link>
      </motion.div>
    </motion.div>
  );
};

const LogoAnimation = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={188}
    height={92}
    fill="none"
    className="stroke-white"
  >
    <motion.path
      stroke="#fff"
      strokeWidth={2}
      d="M1 1h186v90H1z"
      variants={iconStroke}
      initial={{ strokeWidth: 0 }}
      animate={{ strokeWidth: 2 }}
      transition={{
        default: { duration: 2, ease: "easeInOut", delay: 8 },
      }}
    />
    <motion.path
      fill="#fff"
      fillRule="evenodd"
      d="M163.439 26.928c-.473-.013-1.464-.044-2.656.383-.425 1.718-4.802 19.2-6.516 25.029-3.338-19.432-2.553-25.269-8.555-25.412-1.607-.036-1.764.251-2.652.383-1.751 6.78-4.734 18.38-6.518 25.029-3.412-22.707-3.819-25.425-10.016-25.425-1.155 0-.847.108-1.566.148-2.467 4.912-5.353 8.909-8.534 12.172a38.29 38.29 0 0 1-.895.614 316.807 316.807 0 0 1-2.638-8.692c-.518-1.814-1.341-4.258-6.581-4.258a246 246 0 0 0-2.454.016c-.991 4.59-2.365 11.553-6.125 21.054a56.505 56.505 0 0 1-11.916 1.79c-.31-4.826-.5-10.279-.5-16.386 0-11.418 3.022-16.098 9.873-16.92 5.72-.686 9.206 2.659 10.22 3.385.858-1.461 1.53-3.897.1-6.229-.281-.461-2.832-4.218-11.252-3.524-7.03.577-15.626 4.694-15.626 24.04 0 4.54.137 9.75.49 15.54a57.685 57.685 0 0 1-7.622-1.068c-1.11-4.246-2.338-9.762-3.64-17.042-.318-1.771-1.234-4.836-6.269-4.836-1.093.004-2.631.022-2.631.022-1.814 5.497-3.5 10.466-5.271 14.8-.073-.046-.151-.09-.223-.136a57.753 57.753 0 0 1-4.912-3.38 6.65 6.65 0 0 0-.668 2.904c0 2.51 1.38 4.701 3.433 5.88l-.164.033.117.068c-2.112 4.179-4.456 7.49-7.335 9.761h.004a16.925 16.925 0 0 1-10.155 3.367c-9.327 0-16.887-7.46-16.887-16.668 0-9.209 7.56-16.672 16.887-16.672.14 0 .276.006.417.013.213.004.425.008.632.022.236.016.465.033.699.055.276.031.558.066.832.109.127.018.257.038.387.059.374.067.74.145 1.101.232.079.02.165.038.247.062.407.108.805.228 1.199.363a.404.404 0 0 1 .086.027 16.807 16.807 0 0 1 4.767 2.593 5.886 5.886 0 0 0 .315-5.869c-.216-.404-.98-1.632-2.725-2.532-.675-.35-1.27-.592-1.778-.766a23.508 23.508 0 0 0-6.536-.925C20.491 20.141 10 30.493 10 43.271c0 12.772 10.491 23.133 23.43 23.133 4.962 0 9.561-1.53 13.345-4.135l.013.03c3.82-2.652 7.274-6.656 10.115-12.438a60.29 60.29 0 0 0 8.178 3.1c1.632 7.009 3.804 12.543 7.468 12.54 2.55-.005 4.97-1.963 4.97-1.963-.834-1.348-2.273-3.166-4.158-8.682 2.036.321 4.1.548 6.193.67.741 8.797 1.693 15.604 3.801 26.457 1.666.233 5.837-1.949 5.837-6.513 0-1.659-1.703-5.972-2.94-19.907 2.94-.13 5.827-.462 8.647-.985a148.366 148.366 0 0 1-4.692 9.276s1.36 1.819 3.95 1.375c2.729-.462 5.348-4.342 8.114-12.497a62.258 62.258 0 0 0 8.699-3.474c2.755 8.743 5.943 16.373 10.425 16.367 2.639 0 4.936-1.97 4.936-1.97-1.406-1.914-4.164-4.78-8.742-17.684 3.182-2.658 6.127-5.851 8.725-9.703 3.609 14.215 3.063 28.55 8.959 29.601.754.132 2.475.038 3.803-.504.207-3.255 5.636-25.681 5.636-25.681 3.068 8.877 2.173 26.172 8.486 26.172 2.906 0 3.613-.491 3.613-.491.095-2.333 4.221-20.235 5.638-25.762 2.895 8.81 5.62 26.253 11.964 26.253 2.194 0 4.185-.678 5.587-1.912-12.047-13.96-7.519-37.016-16.561-37.016ZM60.282 44.539c-.277-.112-.556-.234-.832-.354a2.572 2.572 0 0 1-.175-.071c1.052-2.672 1.985-5.63 2.788-8.914.729 3.338 1.399 7.098 2.14 10.8a63.742 63.742 0 0 1-3.921-1.46ZM104.855 46c.828-2.84 1.685-6.034 2.561-9.6.782 2.36 1.558 4.92 2.367 7.507A58.883 58.883 0 0 1 104.855 46Z"
      clipRule="evenodd"
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 1.8, ease: "easeInOut" },
        fill: { delay: 1, duration: 2, ease: [1, 0, 0.8, 1] },
      }}
    />
  </motion.svg>
);
