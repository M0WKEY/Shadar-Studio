import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Enquire with us for bookings and further questions.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              // target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ba6afc28ccf425f6f4931fd42086b982"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
            <div className="w-full overflow-x-auto">
  <table className="table-auto border-collapse w-full">
    <thead>
      <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
        <th className="px-4 py-2 bg-gray-200">Day</th>
        <th className="px-4 py-2 bg-gray-200">Class</th>
        <th className="px-4 py-2 bg-gray-200">Time</th>
        <th className="px-4 py-2 bg-gray-200">Focus</th>
      </tr>
    </thead>
    <tbody className="text-sm font-normal text-gray-700">
      <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
        <td className="px-4 py-4">Monday</td>
        <td className="px-4 py-4">Vinyasa Flow</td>
        <td className="px-4 py-4">6:00 PM - 7:00 PM</td>
        <td className="px-4 py-4">
          Dynamic flow and synchronizing breath with movement
        </td>
      </tr>
      <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
        <td className="px-4 py-4">Tuesday</td>
        <td className="px-4 py-4">Flexibility Training</td>
        <td className="px-4 py-4">5:30 PM - 6:30 PM</td>
        <td className="px-4 py-4">
          Stretching exercises to improve overall flexibility and mobility
        </td>
      </tr>
      <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
        <td className="px-4 py-4">Wednesday</td>
        <td className="px-4 py-4">Flexibility Training</td>
        <td className="px-4 py-4">5:30 PM - 6:30 PM</td>
        <td className="px-4 py-4">
          Stretching exercises to improve overall flexibility and mobility
        </td>
      </tr>
      <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
        <td className="px-4 py-4">Thursday</td>
        <td className="px-4 py-4">Flexibility Training</td>
        <td className="px-4 py-4">5:30 PM - 6:30 PM</td>
        <td className="px-4 py-4">
          Stretching exercises to improve overall flexibility and mobility
        </td>
      </tr>
      <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
        <td className="px-4 py-4">Friday</td>
        <td className="px-4 py-4">Flexibility Training</td>
        <td className="px-4 py-4">5:30 PM - 6:30 PM</td>
        <td className="px-4 py-4">
          Stretching exercises to improve overall flexibility and mobility
        </td>
      </tr>
      <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
        <td className="px-4 py-4">Saturday</td>
        <td className="px-4 py-4">Flexibility Training</td>
        <td className="px-4 py-4">5:30 PM - 6:30 PM</td>
        <td className="px-4 py-4">
          Stretching exercises to improve overall flexibility and mobility
        </td>
      </tr>
      <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
        <td className="px-4 py-4">Sunday</td>
        <td className="px-4 py-4">Flexibility Training</td>
        <td className="px-4 py-4">5:30 PM - 6:30 PM</td>
        <td className="px-4 py-4">
          Stretching exercises to improve overall flexibility and mobility
        </td>
      </tr>
      {/* Add more rows for the rest of the week */}
    </tbody>
  </table>
</div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
