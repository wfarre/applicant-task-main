import { lazy, Suspense } from "react";
const logo = lazy(() => import("../assets/images/xterra-logo.svg"));

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-zinc-900 py-6">
      <div className="relative mx-auto h-4">
        <Suspense>
          <img
            className="absolute left-0 top-0 h-full w-full"
            src={logo}
            alt="logo xterra"
          />
        </Suspense>
      </div>
    </footer>
  );
};

export default Footer;
