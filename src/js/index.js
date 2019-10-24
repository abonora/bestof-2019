import React from "react";
import ReactDOM from "react-dom";
import Header from '../components/Header';
import HelloMessage from '../components/HelloMessage';
import LandingScreen from '../components/Landing';
import TestRepeater from '../components/TestRepeater';
import '../styles/styles.scss';


class App extends React.Component{
    render(){
        return(
            <div>
                {/* <Header/> */}
                <LandingScreen title="" />
                <HelloMessage name="" />
                <TestRepeater/>
            </div>
        )
    }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);