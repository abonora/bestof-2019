import React from "react";
import ReactDOM from "react-dom";
import Header from '../components/Header';
import HelloMessage from '../components/HelloMessage';
import LandingScreen from '../components/Landing';
import TestRepeater from '../components/TestRepeater';
import AlbumList from '../components/AlbumsList';
import '../styles/styles.scss';


class App extends React.Component{
    render(){
        return(
            <div>
                {/* <Header/> */}
                <LandingScreen title="Best Albums of" subtitle="2019" />
                {/* <HelloMessage name="" />
                <TestRepeater/> */}
                <AlbumList yearfilter="2019" headerTitle="Best Albums of 2019" site="albertobonora.com" />
            </div>
        )
    }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);