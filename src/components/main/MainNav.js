import React from 'react';
import PropTypes from 'prop-types';

export default class MainGameNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index | 0
        }
    }

    handleClick = (index) => {
        this.setState({index});
        this.props.onTabChange(index);
    };

    render() {
        const {index} = this.state;

        return (
            <div className='container main-nav-box'>
                <div onClick={() => this.handleClick(0)} className={'fl main-nav-item ' + (index === 0 ? 'main-nav-item-select' : '')}>cryptgame</div>
                <div onClick={() => this.handleClick(1)} className={'fl main-nav-item ' + (index === 1 ? 'main-nav-item-select' : '')}>您的中奖</div>
                <div onClick={() => this.handleClick(2)} className={'fl main-nav-item ' + (index === 2 ? 'main-nav-item-select' : '')}>开奖记录</div>
                <div onClick={() => this.handleClick(3)} className={'fl main-nav-item ' + (index === 3 ? 'main-nav-item-select' : '')}>如何参与</div>
                <div onClick={() => this.handleClick(4)} className={'fl main-nav-item ' + (index === 4 ? 'main-nav-item-select' : '')}>常见问题</div>
                <div onClick={() => this.handleClick(5)} className={'fl main-nav-item ' + (index === 5 ? 'main-nav-item-select' : '')}>服务条款</div>
                <div onClick={() => this.handleClick(6)} className={'fl main-nav-item ' + (index === 6 ? 'main-nav-item-select' : '')}>推广收益</div>
            </div>
        )
    }
}

MainGameNav.propTypes = {
    index: PropTypes.number,
    onTabChange: PropTypes.func
};