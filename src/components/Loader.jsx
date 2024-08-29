import logo from "../assets/images/xterra-logo.svg";

const Loader = () => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-zinc-900">
      <img className="animate-pulse" src={logo} alt="loading" />
    </div>
  );
};

export default Loader;
