import logo from "../assets/images/xterra-logo.svg";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-zinc-900 py-6">
      <div className="relative mx-auto h-4">
        <img
          className="absolute left-0 top-0 h-full w-full"
          src={logo}
          alt="logo xterra"
        />
      </div>
    </footer>
  );
};

export default Footer;
