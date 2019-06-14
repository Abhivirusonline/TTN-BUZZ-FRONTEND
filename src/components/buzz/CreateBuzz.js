import React,{Component} from "react";
import 'typeface-roboto';
import {Button ,Box} from '@material-ui/core';
class CreateBuzz extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <Box component="span" m={1}>
                    <Button variant={'contained'} color={'primary'}>
                        CLick me
                    </Button>
                </Box>
            </div>
        );
    }
}

export default CreateBuzz;
