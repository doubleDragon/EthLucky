import React from 'react';

import PropTypes from 'prop-types';

import './main.css';
import MainContent from "./MainContent";
import MainNav from "./MainNav";
import MainModel, {TYPE_ADDRESS, TYPE_PHONE, TYPE_ALERT} from "./MainModel";

import {ToastContainer} from 'react-toastify';


export default class MainPresenter extends React.Component {

    componentDidMount() {
        this.props.openModal(TYPE_ALERT);
    }

    render() {

        const {tabIndex, modalIsOpen, modalType, openModal, closeModal, bindAddress, bindPhone} = this.props;

        return (
            <div className='main-container'>
                <div className='container main-header'>
                    <div className='fl main-header-title'>
                        CryptoGame
                    </div>

                    <div className='fl main-header-lang'>
                        繁体中文
                    </div>

                    <div className='fr main-header-right mr10' onClick={() => openModal(TYPE_PHONE)}>
                        绑定手机
                    </div>

                    <div className='fr main-header-right mr10' onClick={() => openModal(TYPE_ADDRESS)}>
                        绑定钱包
                    </div>

                </div>

                <div className='container main-title-bar'>
                    <div className='main-title-bar-fl'>
                        Crypto是一款基于以太坊的去中心化游戏
                    </div>

                    <div className='main-title-bar-sl mt15'>
                        Crypto是以太坊智能合约,通过以太坊转账至合约的方式对我们公平的夺宝游戏进行投注。
                    </div>

                    <div className='main-title-bar-sl mt15'>
                        由于以太坊区块链的特性，整个投资开奖流程公开透明，合约自动兑将，公平高效。
                    </div>
                </div>

                <div className='container mt20 text-center'>
                    <span className='fs-14 color-828081 color-63151e'>公告:</span>
                    <span className='fs-14 color-828081 ml12'>成功转入本合约人数满10人后合约自动随机开奖。
                        智能合约将自动发送奖品至中奖者钱包地址。以太坊会影响转账失效敬请通知。恭喜发财祝君好运</span>
                </div>

                <MainNav index={tabIndex} onTabChange={(index) => this.props.onTabChange(index)}/>

                <div className='container'>
                    <MainContent index={tabIndex}/>
                </div>

                <div className='container mt30 main-game-link color-white fs-20'>
                    友情链接 <span className='ml15 main-game-link-other'>OTCBTC.COM</span>
                    <span className='ml10 main-game-link-other'>TOKEN.COM</span>
                    <span className='ml10 main-game-link-other'>TOKEN.COM</span>
                </div>

                <div className='container mt10 main-game-link color-white fs-20'>
                    友情链接 <span className='ml15 main-game-link-other'>OTCBTC.COM</span>
                    <span className='ml10 main-game-link-other'>TOKEN.COM</span>
                    <span className='ml10 main-game-link-other'>TOKEN.COM</span>
                </div>

                <div className='mt50 color-828081 text-center fs-12'>
                    CRYPTOGAMEONE@GMAIL.COM
                </div>

                <MainModel modalType={modalType} modalIsOpen={modalIsOpen} closeModal={closeModal}
                           onBindAddress={bindAddress} onBindPhone={bindPhone}/>

                <ToastContainer />
            </div>
        )
    }
}

MainPresenter.propTypes = {
    tabIndex: PropTypes.number.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    modalType: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    bindAddress: PropTypes.func.isRequired,
    bindPhone: PropTypes.func.isRequired,
};