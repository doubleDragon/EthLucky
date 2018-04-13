import React from 'react';

import './MainWinning.css';


const data_title = [
    '夺宝期数','夺宝类型','是否中奖', '中奖数量', '区块链查询'
];

const data = [
    {
        number: 100,
        type: '10人*0.01',
        result: '未中奖',
        count: '0',
        address: 'adfasdfakfdkfjakdfkadfkafkdf'
    },
    {
        number: 101,
        type: '10人*0.01',
        result: '未中奖',
        count: '0',
        address: 'adfasdfakfdkfjakdfkadfkafkdf'
    },
    {
        number: 102,
        type: '10人*0.01',
        result: '未中奖',
        count: '0',
        address: 'adfasdfakfdkfjakdfkadfkafkdf'
    },
    {
        number: 103,
        type: '10人*0.01',
        result: '未中奖',
        count: '0',
        address: 'adfasdfakfdkfjakdfkadfkafkdf'
    },
];

export default class MainWinning extends React.Component {

    render() {

        return (
            <div className='main-winning-box'>
                <div className='main-winning-top'>
                    <div className='color-ff47c0 text-center fs-18'>
                        夺宝运气王
                    </div>

                    <div className='mt10 main-winning-top-underline div-center'/>

                    <div className='mt30 text-center'>
                        <span className='color-c33994 fs-14'>第一名:</span>
                        <span className='color-white fs-14 ml15'>中奖98次</span>
                        <span className='color-white fs-14 ml5'>0xaf***db5b</span>

                        <span className='color-c33994 fs-14 ml45'>第二名:</span>
                        <span className='color-white fs-14 ml15'>中奖98次</span>
                        <span className='color-white fs-14 ml5'>0xaf***db5b</span>

                        <span className='color-c33994 fs-14 ml45'>第三名:</span>
                        <span className='color-white fs-14 ml15'>中奖98次</span>
                        <span className='color-white fs-14 ml5'>0xaf***db5b</span>
                    </div>
                </div>

                <div className='main-winning-bottom mt15'>
                    <div className='text-center fs-16'>
                        <span className='color-ff47c0'>您的累计中奖次数:&nbsp;</span>
                        <span className='color-white'>098&nbsp;</span>
                        <span className='color-ff47c0'>次</span>

                        <span className='color-ff47c0 ml25'>您的排名:&nbsp;第&nbsp;</span>
                        <span className='color-white'>55&nbsp;</span>
                        <span className='color-ff47c0'>名</span>
                    </div>

                    <table className='mt30 main-winning-bottom-t text-center'>
                        <tbody>
                        <tr>
                            {
                                data_title.map((title,index) =>
                                    <th key={index} className='pb12'>
                                        <div className='fs-12 color-c33994'>{title}</div>
                                        <div className='main-winning-bottom-t-th-u div-center'/>
                                    </th>
                                )
                            }
                        </tr>

                        {
                            data.map(({number, type, result, count, address}) =>
                                <tr key={number} className='fs-12 color-white pt20'>
                                    <td>
                                        <span className='color-c33994'>第</span>
                                        {number}
                                        <span className='color-c33994'>期</span>
                                    </td>
                                    <td>
                                        <span className='color-c33994'>{type}</span>
                                        ETH制
                                    </td>
                                    <td>{result}</td>
                                    <td>{count}</td>
                                    <td>{address}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>

                    <div className='mt25 ml65 color-white fs-12'>
                        *本数据由etherscan.io查询获得，受网络状态影响可能会有延迟，请悉知。
                    </div>
                </div>
            </div>
        )
    }
}