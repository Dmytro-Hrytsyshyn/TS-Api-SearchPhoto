import { ImageCardProps } from "../../types";
import css from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({
  alt,
  src,
  name,
  openModal,
  likes,
  srcReg,
}) => {
  return (
    <li className={css.imgItem}>
      <div className={css.container_image}>
        <img
          src={src}
          alt={alt}
          className={css.image}
          onClick={() => openModal({ likes, srcReg, name })}
        />
        <div className={css.image_info}>
          <p>
            Likes: <span className={css.span_color}>{likes}</span>
          </p>
          <p>
            Author: <span className={css.span_color}>{name}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default ImageCard;
