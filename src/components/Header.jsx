import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-light" style={{overflowX: 'hidden'}}>
        <div className="container">
            <div className="brand">
            <FontAwesomeIcon icon="sun" />
                <span className="brand-text">{props.title}</span>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header ;