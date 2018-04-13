import React from 'react';
import './MainClause.css';


const list = [
    '1 年满18岁⽅可使⽤本站，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。 2 年满18岁⽅',
    '2 年满18岁⽅可使⽤本站，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。 2 年满18岁⽅',
    '3 年满18岁⽅可使⽤本站，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。 2 年满18岁⽅',
    '4 年满18岁⽅可使⽤本站，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。 2 年满18岁⽅',
    '5 年满18岁⽅可使⽤本站，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。 2 年满18岁⽅',
    '6 年满18岁⽅可使⽤本站，例如选择奖池0.1ETH，⾸先选择夺宝奖池并查看规则，例如选择奖池0.1ETH。 2 年满18岁⽅',
];

export default class MainClause extends React.Component {


    render() {
        return (
            <div className='main-clause-box'>
                <div className='main-clause-content'>
                    {
                        list.map((clause, index) =>
                            <div className={index === 0 ? 'color-white' : 'color-white mt30'} key={index}>
                                {clause}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}