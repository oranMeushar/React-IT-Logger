import React,{useContext} from 'react'
import searchImg from '../../assets/search.png';
import IT_LoggerConext from '../../context/IT-Logger/IT-LoggerContext';
import './Search.css';

const Search = (props) => {
    const itLoggerConext = useContext(IT_LoggerConext);
    const handleSearchChange = (e) =>{
        itLoggerConext.handleSearch(e.target.value);
    }

    return (
        <div className="Search">
                <div className="Search-input-wrapper">
                    <input 
                        type="text"
                        placeholder="Search logs..."
                        onChange={handleSearchChange}/>

                        <img className="Search-image" src={searchImg} alt="search-img"/>
                
                </div>
        </div>
    )
}

export default Search
