import React from 'react';
import './Mainquestion.css';


const list = [
    {
        title: '1 常⻅问题是事？',
        des: '⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。'
    },
    {
        title: '2 收不到代币或？',
        des: '⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。'
    },
    {
        title: '3 转账失败游戏？',
        des: '⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。'
    }
];

export default class MainQuestion extends React.Component {


    render() {
        return (
            <div className='main-question-box'>
                <div className='main-question-content'>
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