import React, {useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const HeaderSearch = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const productSearch = useSelector(state => state.productSearch)
    const {loading: searchLoading, searchText, productList} = productSearch
    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        if (searchQuery.trim()) {
            dispatch({
                type: 'PRODUCT_SEARCH_REQUEST',
                payload:  e.target.value
            })
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            history.push(`/shop/${searchText}`)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="header__search-box"><input
                className="search-input search-input-2 text-dark" type="text"
                placeholder="I'm shopping for..." value={searchQuery}
                onChange={handleChange}/>
                <button className="button button-2 button-3" type="submit"><BsSearch/>
                </button>
            </div>
        </form>
    );
};

export default HeaderSearch;
