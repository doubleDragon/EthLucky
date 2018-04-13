import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import Delete from '../../images/ic_delete.png';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        padding: 0,
        boxSizing: 'border-box',
        border: '#ff47c0 solid 1px',
        background: 'block'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};

const styles = {
    titleBar: {
        // border: '#ff47c0 solid 1px'
        backgroundColor: '#ff47c0',
        paddingLeft: 16,
        paddingRight: 17,
        height: 56
    },
    titleText: {
        fontSize: 18,
        lineHeight: '56px',
        color: 'white',
        float: 'left'
    },
    alert: {
        container: {
            paddingBottom: 54
        },
        content: {
            paddingLeft: 63,
            padding: '65px 65px 0 65px',
        },
        confirm: {
            width: 90,
            height: 40,
            lineHeight: '40px',
            color: 'white',
            margin: '83px auto 0 auto',
            backgroundColor: '#ff47c0',
            textAlign: 'center',
        },
    },
    address: {
        content: {
            padding: '69px 0 80px 82px'
        },
        box: {
            height: 40,
        },
        boxText: {
            lineHeight: '40px',
            fontSize: 12,
            color: 'white',
            float: 'left'
        },
        boxAddress: {
            height: 40,
            width: 360,
            lineHeight: '40px',
            fontSize: 11,
            border: 'white solid 1px',
            color: '#9e9e9e',
            float: 'left',
            marginLeft: 17,
            padding: '0 17px'
        },

        bind: {
            width: 90,
            height: 40,
            lineHeight: '40px',
            color: 'white',
            margin: '30px 0 0 66px',
            backgroundColor: '#ff47c0',
            textAlign: 'center',
        }
    }
};

Modal.setAppElement('#root');


const TitleBar = (props) => {

    return (
        <div style={styles.titleBar}>
            <div style={styles.titleText}>
                {props.title}
            </div>

            <img src={Delete} className='fr mt20' onClick={props.onClickDelete}/>
        </div>
    )
};
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default class MainModel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            address:'',
            phone: ''
        }
    }

    handleAddressChange = (event) => {
        this.setState({address: event.target.value});
    };

    handlePhoneChange = (event) => {
        this.setState({phone: event.target.value});
    };

    render() {
        const {modalType, modalIsOpen, closeModal, onBindAddress, onBindPhone} = this.props;

        let child = null;
        switch (modalType) {
            case TYPE_ALERT:
                child = (
                    <div style={styles.alert.container}>

                        <TitleBar title={'使用条款'} onClickDelete={closeModal}/>

                        <div className='color-white fs-18' style={styles.alert.content}>
                            您是否已年满18周岁？CryptoGame不打算让您违反法律。
                        </div>

                        <div style={styles.alert.confirm} onClick={closeModal}>
                            确定
                        </div>
                    </div>
                );
                break;
            case TYPE_PHONE:
                child = (
                    <div>
                        <TitleBar title={'绑定手机'} onClickDelete={closeModal}/>

                        <div style={styles.address.content}>
                            <div style={styles.address.box}>
                                <div style={styles.address.boxText}>手机号</div>
                                <input style={styles.address.boxAddress} onChange={this.handlePhoneChange}/>
                            </div>

                            <div style={styles.address.bind} onClick={() => onBindPhone(this.state.phone)}>
                                绑定
                            </div>
                        </div>
                    </div>
                );
                break;
            case TYPE_ADDRESS:
                child = (
                    <div>
                        <TitleBar title={'绑定钱包'} onClickDelete={closeModal}/>

                        <div style={styles.address.content}>
                            <div style={styles.address.box}>
                                <div style={styles.address.boxText}>钱包地址</div>
                                <input style={styles.address.boxAddress} onChange={this.handleAddressChange}/>
                            </div>

                            <div style={styles.address.bind} onClick={() => onBindAddress(this.state.address)}>
                                绑定
                            </div>
                        </div>
                    </div>
                );
                break;
        }

        return (
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="main Modal"
            >

                {child}
            </Modal>
        )
    }
}

MainModel.propTypes = {
    modalType: PropTypes.number.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    onBindAddress: PropTypes.func.isRequired,
    onBindPhone: PropTypes.func.isRequired,
};



const TYPE_ADDRESS = 0;
const TYPE_PHONE = 1;
const TYPE_ALERT = 2;

export {TYPE_ADDRESS, TYPE_PHONE, TYPE_ALERT};
