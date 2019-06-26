import React,{Component} from "react";
import BuzzFeed from "./BuzzFeed/BuzzFeed";
import BuzzForm from "./BuzzForm/BuzzForm";
class Buzz extends Component{
    constructor(props) {
        super(props);

    }
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