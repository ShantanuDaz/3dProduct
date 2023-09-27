import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomeButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content">
            <h1 className="head-text">
              LET'S <br className="xl:block hidden" /> DO IT.
            </h1>
          </motion.div>

          <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
            <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand - new 3D
              customization tool. <strong>Unleash your imagination</strong> and
              define your own style.
            </p>
          </motion.div>
          <CustomeButton
            type="filled"
            title="Customize It"
            handleClick={() => {
              state.intro = false;
            }}
            customStyle="w-fit px-4 py-2.5 font-bold text-sm"
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
