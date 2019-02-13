
import React from 'react';

interface IUser {
    name: string;
    collor: string;
    isHaveDog?: boolean
}



interface IState {
    users: IUser[]
}


interface IProps {}

const data = [
    {name: 'Apple',collor:'red'},
    {name: 'Lemon',collor:'yellow'},
    {name: 'Pear',collor:'green'},
    {name: 'Orange',collor:'orange'},
    {name: 'Cherries',collor:'red'},
    {name: 'Banana',collor:'yellow'}
    ] 

class Table extends React.Component<IProps, IState>{
    public state: IState;

    constructor(props: IProps){
        super(props);
        this.state = {
            users: []
        }
    }


    loadData = () => {
        setTimeout(() => {
            this.setState((prevSate: IState) => { 
                return {
                    users: data
                }
        })
    }, 1000)
}




    render(){
        return (
                <React.Fragment>

                    <button onClick={this.loadData}> LoadData </button>
                    <table>
                    <tr>
                        <th>Fruit</th>
                        <th>Collor</th> 

                    </tr>
                        {this.state.users.map((el, key) => (
                            <tr key = {key} style={{ backgroundColor: el.collor, minHeight: "300px"}} > 
                                <td>{el.name}</td>                               
                                <td>{el.collor}</td>                             
                        </tr>))
                        }
                    </table>
                </React.Fragment>


        )
    }
}

export default Table;