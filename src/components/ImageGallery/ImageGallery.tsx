import { useEffect, useRef } from "react";
import { ImageGalleryProps } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  imgArr,
  openModal,
}) => {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.scrollBy({
        top: 300,
        behavior: "smooth",
      });
    }
  }, [imgArr]);
  return (
    <ul ref={ulRef} className={css.imgList}>
      {imgArr !== null &&
        imgArr.map((img) => (
          <ImageCard
            key={img.id}
            alt={img.alt_description}
            src={img.urls.small}
            srcReg={img.urls.regular}
            likes={img.likes}
            name={img.user.name}
            openModal={openModal}
          />
        ))}
    </ul>
  );
};
