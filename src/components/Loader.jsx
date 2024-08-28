import logo from "../assets/xterra-logo.svg";

const Loader = () => {
  return (
    <div className="fixed flex justify-center items-center  bg-zinc-900 h-full w-full top-0 left-0">
      <img className="animate-pulse" src={logo} alt="loading" />
    </div>
  );
};

export default Loader;
