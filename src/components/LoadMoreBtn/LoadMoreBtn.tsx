import { LoadMoreBtnProps } from "../../types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore, imgArr }) => {
  return (
    <>
      {imgArr && (
        <button className={css.loadBtn} type="button" onClick={onLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default LoadMoreBtn;
