import "./Error.css";
import styles from "./Error.module.css";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const goBack = () => {
    navigate("/");
  };

  // Handling 404 error separately
  if (error?.status === 404) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h3>
            Page not found. But don't worry, our developers are on a treasure
            hunt to recover it. Meanwhile, enjoy some virtual tea and biscuits!
          </h3>
          <button className={styles.btn} onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // General error handler
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>Oops!</h1>
        <h3>
          Looks like our web page did a someresault and landed in a digital
          rabbit hole. We're working on untangling the code. Hang tight!
        </h3>
        <button className={styles.btn} onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
