import { FC } from "react";
import { ErrorMessageProps } from "../../types";

import css from "./ErrorMessage.module.css";

const ErrorMessage: FC<ErrorMessageProps> = ({ error, noImgText }) => {
  return (
    <>
      <p className={css.errMes}>{noImgText ? noImgText : error}</p>
    </>
  );
};

export default ErrorMessage;
