import React from 'react';
import UserInput from './UserInput';




interface ICountry {
    name: string;
    pop: number;
}



interface IState {
    countries: ICountry[],
    isLoading: boolean
}


interface IProps {}



class Countries extends React.Component<IProps, IState>{

    public state: IState = {
        countries: localStorage.getItem('countries') ? JSON.parse(localStorage.getItem('countries') || '' ) : null,
        isLoading : false,

    }

    // addNewItem = (name) => {
    //     //const country: ICountry = {name: '', pop: 0}
    //     this.setState((prevState) => ({
    //         countries: [...prevState.countries, this.getData(name)]
    //     }))
    // }



    getData = (str: any) => {
       fetch(`http://api.population.io/1.0/population/${str}/today-and-tomorrow/`).then((res) => res.json()).then(
            (result) => {
                console.log(result.total_population[0].population);
                const countrie: ICountry = {
                    name: str,
                    pop: result.total_population[0].population
                }
                console.log('state', this.state)
                const newCountries: any = [...this.state.countries, countrie ];
                //localStorage.setItem('countries', JSON.stringify(newCountries) );//setState - function. this.State - object
                this.setItem(newCountries);
                this.setState({
                    countries: newCountries
                });
                
            }
        ).catch((e) => {
            alert(`Bad request ${e}`);
        })
    }


    delItem = (key: number) => {
        const newArr = this.state.countries.slice()
        newArr.splice(key, 1)
        this.setState({ countries: newArr })
        //localStorage.setItem('countries', JSON.stringify(newArr));
        this.setItem(newArr);
    }

    setItem = (data: ICountry[]) => {
        //const { countries: name } = this.state;
        localStorage.setItem('countries', JSON.stringify(data));
    } 

    render(){
        console.log(this.state)
        return (
                <React.Fragment>
 

                    <UserInput addNewrfrfff={this.getData} />
                     <ul>
                         {
                            this.state.countries.map((el, key) => (
                                <li key={key}>{el.name} - {el.pop} <button onClick={() => this.delItem(key)} >Del</button></li>
                            ))
                         }
                     </ul>
                     
                </React.Fragment>


        )
    }

}


export default Countries;