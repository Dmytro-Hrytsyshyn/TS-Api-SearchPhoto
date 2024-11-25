export interface ModalImgData {
  likes: number;
  srcReg: string;
  name: string;
}

export interface ImgData {
  results: Results[];
  total: number;
  total_pages: number;
}

export interface Results {
  [key: string]: any;
}
export interface ImageGalleryProps {
  imgArr: ImgData["results"] | null;
  openModal: (modalImgInfo: ModalImgData) => void;
}

export interface ImageCardProps {
  alt: string;
  src: string;
  name: string;
  openModal: ImageGalleryProps["openModal"];
  likes: number;
  srcReg: string;
}

export interface ImageModalProps {
  modalImgInfo: ModalImgData;
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface LoadMoreBtnProps {
  onLoadMore: () => void;
  imgArr: ImageGalleryProps["imgArr"];
}

export interface ErrorMessageProps {
  error: string | null;
  noImgText: string | null;
}
