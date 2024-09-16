import { TbLoader2 } from "react-icons/tb";

const Loader = () => {
  return (
    <section className={`w-full py-24 flex justify-center items-center`}>
      <div className={`text-4xl animate-spin text-black`}>
        <TbLoader2 />
      </div>
    </section>
  );
};

export default Loader;
