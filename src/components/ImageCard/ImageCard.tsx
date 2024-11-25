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
      <div>
        <img
          src={src}
          alt={alt}
          className={css.image}
          onClick={() => openModal({ likes, srcReg, name })}
        />
      </div>
    </li>
  );
};

export default ImageCard;
