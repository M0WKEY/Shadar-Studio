import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Vinyasa",
    description:
      "$45 \n Focuses on the “flow” because of the smooth way the poses run together, that synchronizes movement with breath and includes many different types of yoga, including Ashtanga and power yoga",
    image: image1,
  },
  {
    name: "Flexibility",
    description:
    "$30 \n Focuses on improving flexibility through a series of poses and stretches focusnig on proper form and function will help you build a safe, fun and nurturing practice",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "$25 \n Combination of traditional yoga poses with Pilates-inspired exercises to help build abdominal strength from the inside out",
    image: image3,
  },
  {
    name: "Restorative",
    description:
      "$20 \n Restorative yoga can help the body move out of stress and into rest, and has various benefits for different conditions and needs through stretching, deep relaxation, and meditation that uses props to support the body in different poses",
    image: image4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              OUTLINE OF OUR CLASSES NEEDS MORE INFO
            </p>
          </div>
        </motion.div>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <div className="grid grid-cols-2">
            <div className="w-full h-full">
              <Class
                name={classes[0].name}
                description={classes[0].description}
                image={classes[0].image}
              />
            </div>
            <div className="w-full h-full">
              <Class
                name={classes[1].name}
                description={classes[1].description}
                image={classes[1].image}
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="w-full h-full">
              <Class
                name={classes[2].name}
                description={classes[2].description}
                image={classes[2].image}
              />
            </div>
            <div className="w-full h-full">
              <Class
                name={classes[3].name}
                description={classes[3].description}
                image={classes[3].image}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};







export default OurClasses;
