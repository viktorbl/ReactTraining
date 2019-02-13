export interface ICountry{
    name: string;
    pop: number;
}

export interface IState{
    countries: ICountry;
    isLoading: boolean;
}