import { setToLS } from "../functions/setToLS";
import { setColors } from "../functions/setColors";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";
import Notification from "../components/Notification";
import { motion } from "framer-motion";
const Themes = () => {
  useEffect(() => {
    document.title = `Themes - AniFlix`;
  }, []);
  const [modalImg, setModalImg] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [notificationShow, setNotificationShow] = useState(false);
  return (
    <section className="flex flex-col gap-14 h-fit my-20">
      <Notification show={notificationShow} setShow={setNotificationShow} />
      <article className="flex flex-col items-center justify-between pb-16 sm:flex-row  border-b-2 border-blue-500">
        <h2 className="heading w-full pt-0 text-center sm:text-start text-[#42693b]">
          Default Theme:
        </h2>
        <div className="mr-0 sm:mr-12 mt-6 sm:mt-0">
          <ModalButton
            show={modalShow}
            setShow={setModalShow}
            btnValue="Show Preview"
            setModal={setModalImg}
            preview="./assets/img/defaulttheme.png"
            color="[#334b2f]"
            text="[#334b2f]"
            width="w-48"
          />
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setColors("", "");
            setToLS("theme", { primaryColor: "", textColor: "" });
            setNotificationShow(true);
            setTimeout(() => {
              setNotificationShow(false);
            }, 2500);
          }}
          className="button bg-[#334b2f] mx-auto border-[#334b2f]  w-48 flex justify-center mt-8 sm:mt-0  hover:text-[#334b2f] "
        >
          Enable
        </motion.button>
      </article>
      <article className="flex flex-col items-center justify-between pb-16 sm:flex-row  border-b-2 border-blue-500">
        <h2 className="heading w-full pt-0 text-center sm:text-start text-[#3494d4]">
          Blue Theme:
        </h2>
        <div className="mr-0 sm:mr-12 mt-6 sm:mt-0">
          <ModalButton
            show={modalShow}
            setShow={setModalShow}
            btnValue="Show Preview"
            setModal={setModalImg}
            preview="./assets/img/bluetheme.png"
            color="blue-500"
            text="[#3494d4]"
            width="w-48"
          />
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setColors("blue", "#3494d4");
            setToLS("theme", { primaryColor: "blue", textColor: "#3494d4" });
            setNotificationShow(true);
            setTimeout(() => {
              setNotificationShow(false);
            }, 2500);
          }}
          className="button bg-blue-500  border-blue-500 w-48 flex justify-center mt-8 sm:mt-0  hover:text-[#3494d4]"
        >
          Enable
        </motion.button>
      </article>
      <article className="flex flex-col items-center sm:flex-row justify-between pb-16 border-b-2 border-red-500">
        <h2 className="heading w-full text-center sm:text-start pt-0 text-[#cf2424]">
          Red Theme:
        </h2>
        <div className="mr-0 sm:mr-12 mt-6 sm:mt-0">
          <ModalButton
            show={modalShow}
            setShow={setModalShow}
            btnValue="Show Preview"
            setModal={setModalImg}
            preview="./assets/img/redtheme.png"
            color="red-600"
            text="[#cf2424]"
            width="w-48"
          />
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setColors("red", "#cf2424");
            setToLS("theme", { primaryColor: "red", textColor: "#cf2424" });
            setNotificationShow(true);
            setTimeout(() => {
              setNotificationShow(false);
            }, 2500);
          }}
          className="button bg-red-600 border-red-600 w-48 flex justify-center mt-8 sm:mt-0  hover:text-[#cf2424]"
        >
          Enable
        </motion.button>
      </article>
      <article className="flex flex-col sm:flex-row items-center justify-between pb-16 border-b-2 border-[#afafaf]">
        <h2 className="heading w-full text-center sm:text-start pt-0 text-white">
          Light Theme:
        </h2>
        <div className="mr-0 sm:mr-12 mt-6 sm:mt-0">
          <ModalButton
            show={modalShow}
            setShow={setModalShow}
            btnValue="Show Preview"
            setModal={setModalImg}
            preview="./assets/img/lighttheme.png"
            color="[#afafaf]"
            text="white"
            width="w-48"
          />
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setColors("#afafaf", "white");
            setToLS("theme", { primaryColor: "#afafaf", textColor: "white" });
            setNotificationShow(true);
            setTimeout(() => {
              setNotificationShow(false);
            }, 2500);
          }}
          className="button bg-[#afafaf] border-[#afafaf] w-48 flex justify-center mt-8 sm:mt-0  hover:text-white"
        >
          Enable
        </motion.button>
        <Modal show={modalShow} setShow={setModalShow} src={modalImg} />
      </article>
    </section>
  );
};

export default Themes;
