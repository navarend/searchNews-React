import React from "react";
import New from "./new";
import PropTypes from 'prop-types';

const NewsList = ({ news }) => (

    <div className="row">
        { news.map( resultNew => (
            <New 
                key = { resultNew.url }
                news = { resultNew }
            ></New>
        ))}
    </div>
);
NewsList.propTypes = {
    news : PropTypes.array.isRequired
}

export default NewsList;