import React from "react";
import { useRef } from "react";
import styles from "./header.module.css";

const Header = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value === "") {
      return;
    }
    onSearch(value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="youtube logo" />
        <h1>Youtube</h1>
      </div>
      <input
        className={styles.input}
        type="text"
        ref={inputRef}
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} onClick={handleSearch}>
        <img
          className={styles.button_img}
          src="/images/search.png"
          alt="search icon"
        />
      </button>
    </header>
  );
};

export default Header;
