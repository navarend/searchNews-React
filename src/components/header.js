import React from "react";
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <nav className="nav-wrapper blackNavBar darken-3">
        <a href="#!" className="brand-logo">{ title }</a>
    </nav>
);
Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header;