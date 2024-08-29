import PropTypes from "prop-types";
import errorImg from "../assets/images/undraw_server_down.svg";

const Error = ({ errorMsg }) => {
  return (
    <section className="mx-6 my-6 md:mx-36">
      <img src={errorImg} alt="" />
      <p className="mt-6 text-center text-xl">{errorMsg}</p>
    </section>
  );
};

Error.propTypes = {
  errorMsg: PropTypes.string,
};

export default Error;
