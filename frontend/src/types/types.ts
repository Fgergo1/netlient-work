
export type User = {
    userName : string,
    password : string
}

export type Product = {
    articleNumber : number,
    name : string,
    netCost : number,
    vat : number
}

export type Filter = {
    field : string,
    operator : string,
    value? : string | number
}

