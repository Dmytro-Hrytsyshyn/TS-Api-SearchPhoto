import { LoadMoreBtnProps } from "../../types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore, imgArr }) => {
  return (
    <>
      {imgArr && (
        <button className={css.btn} type="button" onClick={onLoadMore}>
          <span className={css.span}>Load more</span>
        </button>
      )}
    </>
  );
};

export default LoadMoreBtn;
