import React from 'react';
import './MainJoin.css';


const list = [
    {
        title: '1 如何参与游戏？',
        des: '⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。'
    },
    {
        title: '2 如何参与游戏？',
        des: '⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。'
    },
    {
        title: '3 如何参与游戏？',
        des: '⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。'
    }
];

export default class MainJoin extends React.Component {


    render() {
        return (
            <div className='main-join-box'>
                <div className='main-join-content'>
                    {
                        list.map(({title, des}, index) =>
                            <div className={index === 0 ? '' : 'mt30'} key={index}>
                                <div className='color-ff47c0 fs-22'>{title}</div>
                                <div className='color-white fs-18 pl20 mt20'>{des}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}