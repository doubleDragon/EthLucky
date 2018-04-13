import React from 'react';
import MainPresenter from "./MainPresenter";
import { toast } from 'react-toastify';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabIndex: 0,
            modalIsOpen: false,
            modalType: -1
        }
    }

    onTabChange = (tabIndex) => {
        this.setState({
            tabIndex
        });
    };

    closeModal = () => {
        this.setState(preState => {
            return Object.assign({}, preState, {modalIsOpen: false})
        })
    };

    openModal = (modalType) => {
        this.setState(preState => {
            return Object.assign({}, preState, {modalType, modalIsOpen: true})
        })
    };

    bindAddress = (address) => {
        console.log('address: ', address);
        if(!address) {
            toast.error('以太坊地址不能为空', {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: true
            });

            return;
        }
        this.closeModal();
    };

    bindPhone = (phone) => {
        console.log('phone: ', phone);

        if(!phone) {
            toast.error('电话号码不能为空', {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: true
            });

            return;
        }
        this.closeModal();
    };

    render() {
        const {tabIndex, modalIsOpen, modalType} = this.state;

        return (
            <MainPresenter
                tabIndex={tabIndex}
                modalIsOpen={modalIsOpen}
                onTabChange={this.onTabChange}
                closeModal={() => this.closeModal()}
                openModal={(modalType) => this.openModal(modalType)}
                bindAddress={(address) => this.bindAddress(address)}
                bindPhone={(phone) => this.bindPhone(phone)}
                modalType={modalType}
            />
        )
    }
}