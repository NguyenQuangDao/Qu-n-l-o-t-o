import React, { memo } from "react";
import "../Search/Search.scss"
import 'font-awesome/css/font-awesome.min.css';
function Search(prop) {
    const { setFilterSearch } = prop;
    return (
        <>
            <div className="box">
                <div className="container-1">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search..." onChange={e => setFilterSearch(e.target.value)} />
                </div>
            </div>

        </>
    )
}
export default memo(Search)