import React, {useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {getProductSearchDetail} from "../../store/actions/product";
import {useHistory} from "react-router-dom";

const HeaderSearch = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const productSearch = useSelector(state => state.productSearch)
    const {loading, error, searchText} = productSearch
    const [searchQuery, setSearchQuery] = useState('')
    // const handleChange = (e) => {
    //     setSearchQuery(e.target.value)
    //     dispatch(getProductSearchDetail(e.target.value))
    // }
    const handleSubmit = (e) => {
      e.preventDefault()
        if (searchQuery.trim()){
            history.push(`/shop/${searchQuery}`)
        }
        console.log(searchQuery)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="header__search-box"><input
                className="search-input search-input-2 text-dark" type="text"
                placeholder="I'm shopping for..." value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button className="button button-2 button-3" type="submit"><BsSearch/>
                </button>
            </div>
        </form>
    );
};

export default HeaderSearch;
