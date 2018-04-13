import React from 'react';
import MainGame from "./MainGame";

import PropTypes from 'prop-types';
import MainWinning from "./MainWinning";
import MainRecord from "./MainRecord";
import MainJoin from "./MainJoin";
import MainQuestion from "./MainQuestion";
import MainClause from "./MainClause";
import MainExtension from "./MainExtension";

export default class MainContent extends React.Component {

    render() {
        const {index} = this.props;

        switch (index) {
            case 0:
                return <MainGame/>;
            case 1:
                return <MainWinning/>;
            case 2:
                return <MainRecord/>;
            case 3:
                return <MainJoin/>;
            case 4:
                return <MainQuestion/>;
            case 5:
                return <MainClause/>;
            case 6:
                return <MainExtension/>;
            default:
                return <p>MainContent</p>;
        }
    }
}

MainContent.propTypes = {
    index: PropTypes.number.isRequired
};