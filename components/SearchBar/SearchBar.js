import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/SearchRounded";
import classes from "./SearchBar.module.scss";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      router.push("/products");
      // router.push("products"); its pushing relative path, i.e. the url of current webpage is prepended to the path in double quotes
      // router.push("/products"); its pushing absolute path, which is desirable in this situation.
    }
  };

  return (
    <div className={classes.searchBox}>
      <SearchIcon sx={{ fontSize: 18 }} className={classes.searchIcon} />

      <div style={{ flex: 1 }}>
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Search here"
          onChange={handleInputChange}
          onKeyDown={handleSearchEnter}
        />
      </div>
    </div>
  );
}

export default SearchBar;
