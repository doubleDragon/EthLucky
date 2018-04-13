import React from 'react';
import './MainExtension.css';


const list = [
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
    {
        title: '第一名',
        address: '0xaf***db5b',
        count: 100
    },
];

export default class MainExtension extends React.Component {


    render() {
        return (
            <div className='main-extension-box'>
                <div className='main-extension-left'>
                    <div className='color-ff47c0 fs-16'>
                        推广链接
                    </div>

                    <div className='mt10 main-extension-left-underline'/>


                    <div className='mt15'>
                        <span className='fs-10 main-extension-left-link'>45645217367216736ffgyt76y87943536547  </span>
                        <span className='main-extension-left-button color-white ml8'>复制</span>
                        <span className='main-extension-left-button color-white ml8'>分享</span>
                    </div>


                    <div className='mt20 color-ff47c0 fs-16'>
                        推广收益
                    </div>
                    <div className='mt10 main-extension-left-underline'/>

                    <div className='mt20 fs-10 color-c33994'>
                        <span>推荐人数:&nbsp;</span>
                        <span className='color-white'>208</span>
                        <span className='ml40'>激活人数:&nbsp;</span>
                        <span className='color-white'>208</span>
                    </div>

                    <div className='mt12'>
                        <span className='color-c33994 fs-10'>预估收益:&nbsp;</span>
                        <span className='color-white fs-10'>1.500000</span>
                        <span className='color-c33994 fs-10'>ETH</span>

                        <span className='ml15 color-white main-extension-left-button'>申请体现</span>
                    </div>

                    <div className='mt20 main-extension-left-des'>
                        <span className='color-c33994 fs-10 main-extension-left-des-l'>说明:&nbsp;</span>
                        <span className='color-white fs-10 main-extension-left-des-r'>最低提现⾦额为0.1ETH，申请提现后将转⾄绑定的ETH钱包地址。<br />
                            激活⼈数指推荐⼈中已经参与游戏的⼈。<br />
                            收益为系统自动计算, 受网络影响可能会有延迟。
                        </span>
                    </div>

                    <div className='mt20 color-ff47c0 fs-16'>
                        推广收益
                    </div>
                    <div className='mt10 main-extension-left-underline'/>

                    <div className='mt20 fs-10'>
                        <span className='color-c33994'>一级奖励:&nbsp;</span>
                        <span className='color-white'>推荐⼈A可获得被推荐⼈B参与游戏⾦额的千分之⼆奖励。</span>
                    </div>
                    <div className='mt10 fs-10'>
                        <span className='color-c33994'>二级奖励:&nbsp;</span>
                        <span className='color-white'>推荐⼈B可获得被推荐⼈C参与游戏⾦额的千分之⼆奖励。同时推荐人A还可获得被推荐用户C参与游戏金额的千分之一奖励。</span>
                    </div>

                </div>

                <div className='ml15 main-extension-right'>
                    <div className='color-ff47c0 fs-16'>
                        推广排行榜
                    </div>

                    <div className='mt10 main-extension-right-underline'/>

                    <div className='mt15'>
                        {
                            list.map(({title, address , count}, index) =>
                                <div className='mt18 fs-14 color-c33994' key={index}>
                                    <span>{title}:&nbsp;</span>
                                    <span className='color-white'>{address}</span>
                                    <span>推荐人数:&nbsp;</span>
                                    <span className='color-white'>{count}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}