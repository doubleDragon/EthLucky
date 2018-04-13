import React from 'react';
import './MainGame.css';
import MainGameItem from "./MainGameItem";

export default class MainGame extends React.Component {

    render() {
        return (
            <div className='main-game-box'>
                <MainGameItem/>
                <MainGameItem/>
                <MainGameItem/>
            </div>
        )
    }
}