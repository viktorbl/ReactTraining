import React from 'react';
import {ICountry} from '../interfaces';

class UserInput  extends React.PureComponent<any, any> {
    public state: any = {
        name: ''
    }

    handleInputText = (e: any) => {
        this.setState({
            name: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            name: ''
        }) 
        this.props.addNewrfrfff(this.state.name)
    }

    render() {
        console.log('this.state: ', this.state);
        
        return(

            <React.Fragment>
            
                <div>
                    <label>Country </label>
                    <input value={this.state.name} onChange={this.handleInputText} />
                
                    <button onClick={this.handleClick}> Add New Item </button>
                </div>

            </React.Fragment>
        )
    }
}

export default UserInput