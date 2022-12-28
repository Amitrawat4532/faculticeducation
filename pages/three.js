/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Dummy from "/components/Dummy";

const Three = () => {
  // scale .8 -> .6

  return (
    <>
      <Dummy />
      <section
        className="h-[300vh]"
        style={{ background: "url('/images/backgroundimg.jpg')" }}
      >
        <div className="text-center">
          <h1 className="text-5xl py-[5rem]">
            Smarter System <br />
            Simplified
          </h1>
          <h3 className="text-3xl my-[1rem]">Smart Launcher</h3>
          <p className="text-[15px] w-[500px] flex m-auto">
            A more intuitive and efficient launcher awaits. Large and small
            folders dynamically adjust for enhanced organization. The smart
            experience extends to widgets, improved app handling, and update
            notifications for simplified handling of your content.
          </p>
        </div>

        <div className="border-2 border-green-900">
          <motion.div className="relative flex flex-col justify-center m-auto border-2 border-yellow-800">
            <div className="flex flex-col justify-center mx-auto border-2 border-black relative ">
              <img src="/images/featurephone.webp" alt="image" />

{/* absolute h-[100px] w-[100px] right-[154px] top-[376px] */}
{/* absolute right-[155px] */}
{/* absolute right-[155px] bottom-[6px] */}
              <div className="absolute border-2 border-pink-900 right-[0px] top-[378px]">
                <div className="absolute h-[100px] w-[100px] right-[13px] ">
                  <img src="/images/phoneicon1.webp" alt="image" />
                </div>
                <div className="">
                  <img src="/images/phoneicon2.webp" alt="image" />
                </div>
                <div className="mt-[2rem]">
                  <img
                    src="/images/phoneicon3.webp"
                    className="h-[327px]"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Three;
