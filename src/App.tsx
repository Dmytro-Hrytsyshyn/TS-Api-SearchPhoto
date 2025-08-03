import { useEffect, useState } from "react";
import style from "./App.module.css";

import SearchBar from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { ImgData, ModalImgData } from "./types";
import { fetchImages } from "./api/unsplash";
import Header from "./components/Header/Header";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [imgArr, setImgArr] = useState<ImgData["results"] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImgInfo, setModalImgInfo] = useState<ModalImgData | null>(null);
  const [noImgText, setNoImgText] = useState<string | null>(null);

  useEffect(() => {
    const fetchInfo = async () => {
      if (!searchTerm) return;
      try {
        setisLoading(true);
        setError(null);

        const data = await fetchImages(searchTerm, page);

        setTotalPages(data.total_pages);

        if (data.results.length === 0) {
          setNoImgText("There are no images according to your search term!");
        } else {
          setNoImgText(null);
        }

        setImgArr((prev) => {
          console.log(prev);

          if (prev) {
            return [...prev, ...data.results];
          } else {
            return [...data.results];
          }
        });
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          return "An unknown error occurred";
        }
      } finally {
        setisLoading(false);
      }
    };
    fetchInfo();
  }, [searchTerm, page]);

  const onSubmit = (searchWord: string) => {
    setSearchTerm(searchWord);
    setImgArr(null);
    setPage(1);
    setNoImgText(null);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (modalImgInfo: ModalImgData) => {
    setModalIsOpen(true);
    setModalImgInfo(modalImgInfo);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={style.container}>
      <Header />
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery imgArr={imgArr} openModal={openModal} />
      {isLoading && <Loader />}
      <ErrorMessage error={error} noImgText={noImgText} />
      {totalPages !== undefined && page < totalPages && (
        <LoadMoreBtn onLoadMore={onLoadMore} imgArr={imgArr} />
      )}
      {modalImgInfo && (
        <ImageModal
          isOpen={modalIsOpen}
          modalImgInfo={modalImgInfo}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
