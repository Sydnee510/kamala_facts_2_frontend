import React from "react";
import "./search.css"

export default function PageSearchBar() {
    return (
        <div className="search_div">
            <center>
                <form  className="page-searchbar" action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search Myths </span>
                    </label>
                    <input type="text" id="header-search" placeholder="Search Myths" name="s" />
                    <button type="submit">Search</button>
                </form>
            </center>
        </div>
    );
}