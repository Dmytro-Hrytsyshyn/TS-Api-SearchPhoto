import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (searchWord: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const searchByWord = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const searchWord: string = (
      evt.currentTarget.elements.namedItem("searchWord") as HTMLInputElement
    ).value;

    if (searchWord.trim() === "") {
      toast("Enter a word to search!", {
        position: "top-right",
        duration: 2000,
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#FFCC00",
          color: "#333",
        },
      });
    } else {
      onSubmit(searchWord);
    }
  };

  return (
    <form className={css.form} onSubmit={searchByWord}>
      <Toaster />
      <input
        className={css.input}
        type="text"
        name="searchWord"
        autoComplete="off"
        autoFocus
        placeholder="Search images"
      />
      <button type="submit" className={css.btn}>
        <span className={css.span}>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
