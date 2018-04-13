import React from 'react';

import './MainRecord.css';

const item = [
    {
        date: '0000028',
        address: 'duiu8989s8f978df87934980328408278'
    },
    {
        date: '0000028',
        address: 'duiu8989s8f978df87934980328408278'
    },
    {
        date: '0000028',
        address: 'duiu8989s8f978df87934980328408278'
    },
    {
        date: '0000028',
        address: 'duiu8989s8f978df87934980328408278'
    },
    {
        date: '0000028',
        address: 'duiu8989s8f978df87934980328408278'
    },
    {
        date: '0000028',
        address: 'duiu8989s8f978df87934980328408278'
    },
];

const list = [
    item, item, item
];


const ItemComponent = (props) => {

    if(props.index === 2) {
        return (
            <div className='main-record-item ml20'>
                <div className='color-ff47c0 text-center fs-18'>
                    神秘奖池
                </div>

                <div className='mt10 main-record-item-underline div-center'/>

                <div className='mt90 color-888888 fs-44 text-center'>
                    即将开启
                </div>

                <div className='mt25 color-888888 fs-44 text-center'>
                    尽请期待
                </div>

            </div>
        )
    } else {
        return (
            <div key={props.index} className={props.index === 0 ? 'main-record-item' : 'main-record-item ml20'}>
                <div className='color-ff47c0 text-center fs-18'>
                    奖池1.0ETH
                </div>

                <div className='mt10 main-record-item-underline div-center'/>

                {
                    props.item.map(({date, address}, i) =>
                        <div className='mt22' key={i}>
                            <div className='fs-14 color-c33994 text-center'>
                                第
                                <span className='color-white fs-12'>{date}</span>
                                期一等奖地址
                            </div>

                            <div className='mt10 color-white fs-10 text-center'>
                                {address}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
};

export default class MainRecord extends React.Component {

    render() {
        return (
            <div className='main-record-box'>
                {
                    list.map((item, index) =>
                        <ItemComponent key={index} item={item} index={index} />
                    )
                }

            </div>
        )
    }
}