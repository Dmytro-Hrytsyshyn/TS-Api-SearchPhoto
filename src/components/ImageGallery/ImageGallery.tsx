import { ImageGalleryProps } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  imgArr,
  openModal,
}) => {
  return (
    <ul className={css.imgList}>
      {imgArr !== null &&
        imgArr.map((img) => (
          <ImageCard
            key={img.id}
            alt={img.alt_description}
            src={img.urls.small}
            name={img.description}
            srcReg={img.urls.regular}
            likes={img.likes}
            openModal={openModal}
          />
        ))}
    </ul>
  );
};
