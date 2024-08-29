import PropTypes from "prop-types";
const errorImg = lazy(() => import("../assets/images/undraw_server_down.svg"));

import { lazy, Suspense } from "react";

const Error = ({ errorMsg }) => {
  return (
    <section className="mx-6 my-6 md:mx-36">
      <div className="relative mx-auto aspect-[1119/699] w-full max-w-96">
        <Suspense>
          <img
            className="absolute left-0 top-0 h-full w-full"
            src={errorImg}
            alt=""
          />
        </Suspense>
      </div>
      <p className="mt-6 text-center text-xl">{errorMsg}</p>
    </section>
  );
};

Error.propTypes = {
  errorMsg: PropTypes.string,
};

export default Error;
