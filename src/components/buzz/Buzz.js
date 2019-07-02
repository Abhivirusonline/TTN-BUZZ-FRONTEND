import React,{Component} from "react";
import BuzzFeed from "./BuzzFeed/BuzzFeed";
import BuzzForm from "./BuzzForm/BuzzForm";
import "./Buzz.css";

class Buzz extends Component{
    render() {
        return(
            <div className={"Buzz"}>
                    <BuzzForm/>
                    <BuzzFeed/>
            </div>
        );
    }
}

export default Buzz;