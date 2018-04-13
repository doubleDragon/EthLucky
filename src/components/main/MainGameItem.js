import React from 'react';
import './MainGameItem.css';

export default class MainGameItem extends React.Component {

    render() {
        return (
            <div className='fl main-game-item'>
                <div className='text-center main-game-item-title'>
                    奖池1.0ETH
                </div>
                <div className='mt10 main-game-item-underline'/>

                <div className='mt25'>
                    <div className='fl'>
                        <span className='color-ff47c0 main-game-item-des'>每局参与人数&nbsp;</span>
                        <span className='main-game-item-des'>10</span>
                        <span className='color-ff47c0 main-game-item-des'>人</span>
                    </div>

                    <div className='fr'>
                        <span className='color-ff47c0 main-game-item-des'>单人投注数量&nbsp;</span>
                        <span className='main-game-item-des'>10</span>
                        <span className='color-ff47c0 main-game-item-des'>人</span>
                    </div>
                </div>

                <div className='mt55 color-ff47c0 cl fs-14'>
                    奖项设置:
                </div>

                <div className='color-ff47c0 fs-12 mt5'>
                    一等奖<span className='color-white'>0.05</span>ETH&nbsp;&nbsp;
                    二等奖<span className='color-white'>0.03</span>ETH&nbsp;&nbsp;
                    三等奖<span className='color-white'>0.02</span>ETH
                </div>

                <div className='mt20 color-ff47c0 fs-12'>
                    <span className='color-white'>10人*0.01ETH制</span>夺宝合约地址
                </div>

                <div className='mt15'>
                    <div className='fl main-game-item-input fs-12'>
                        123123123123123123123123123111w37w111
                    </div>
                    <div className='fl main-game-item-copy text-center fs-12'>
                        复制转账
                    </div>
                </div>

                <div className='text-center mt65'>
                    <img src={require('../../images/ic_qr_code.png')} className='main-game-qr'/>
                </div>

                <div className='mt10 fs-12 text-center'>
                    扫码转账
                </div>

                <div className='mt5 fs-12'>
                    1,合约仅接受0.01的钱包转账记录, 否则合约无法识别且无法退回
                </div>
                <div className='mt5 fs-12'>
                    2,本合约不支持交易所转账，低于0.01ETH合约不计参与数
                </div>
                <br/>
            </div>
        )
    }
}