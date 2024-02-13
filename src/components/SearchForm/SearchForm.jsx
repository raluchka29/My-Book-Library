import React, {useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const SearchForm = () => {
const {setSearchTerm, setResultTitle} = useGlobalContext();
const searchText = useRef('');
const navigate = useNavigate();

useEffect(() => searchText.current.focus(), []);
const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
        setSearchTerm("poetry");
        setResultTitle("Your Search Result:");
    } else {
        setSearchTerm(searchText.current.value);
    }

    navigate("/book");
}

    return (
        <div className="search-form">
            <div className="container">
                <div className="search-form-content">
                    <form className="search-form" onSubmit={handleSubmit}> 
                        <div className="search-form-elem flex flex-sb bg-white">
                            <input type="text" className="form-control" placeholder="Search your book here" ref={searchText} />
                            <button type="submit" className="flex flex-c" onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-purple" size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchForm