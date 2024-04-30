import {Filter, Product} from "../../types/types.ts";
import React from "react";
import "./TableForm.css"

interface tableDataInterface {
    products: Product[]
    onSort: (sortBy: keyof Product) => void
    onFilter: (filter: Filter[]) => void
    saveTable: () => void
}

function TableForm({products, onSort, onFilter, saveTable}: tableDataInterface) {


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const form = event.currentTarget
        const filters: Filter[] = []
        const inputDivs = form.querySelectorAll(".input-div")

        inputDivs.forEach((elements) => {
            const childElements = elements.querySelectorAll("*");
            let field: string = ""
            let operator: string = ""
            let inputValue: string | number = ""
            childElements.forEach((element) => {

                if (element.tagName === "LABEL") {
                    field = (element as HTMLLabelElement).id
                } else if (element.tagName === "SELECT") {
                    operator = (element as HTMLSelectElement).value
                } else if (element.tagName === "INPUT") {
                    const value = (element as HTMLInputElement).value
                    inputValue = !isNaN(parseFloat(value)) ? parseFloat(value) : value;
                }
            })

            if (inputValue !== "") {
                const filter: Filter = {
                    field: field,
                    operator: operator,
                    value: inputValue
                }
                filters.push(filter)
            }
        })
        onFilter(filters)
    }


    return (
        <div className="table-wrapper">
            <table id="table-id" className="table table-dark table-hover">
                <thead>
                <tr>
                    {products[0] && Object.keys(products[0]).map((key) => (
                        <th className="table-header-elements" key={key} onClick={() => onSort(key as keyof Product)}>
                            {key}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.articleNumber}>
                        <td>{product.articleNumber}</td>
                        <td>{product.name}</td>
                        <td>{product.netCost}</td>
                        <td>{product.vat}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="form-wrapper">
                <form className="input-group" onSubmit={handleSubmit}>
                    <div className="input-div">
                        <label id="articleNumber" className="input-label " htmlFor="article-number">Article
                            number</label>
                        <select defaultValue="Exact" className="select-element">
                            <option>Exact</option>
                        </select>
                        <input type="number" name="article-number form-input " className="value-input"></input>
                    </div>
                    <div className="input-div">
                        <label id="name" htmlFor="product-name">Product name</label>
                        <select defaultValue="Partial">
                            <option>Partial</option>
                            <option>Exact</option>
                        </select>
                        <input name="product-name" className="value-input"></input>
                    </div>
                    <div className="input-div">
                        <label id="netCost" htmlFor="net-cost">Net cost</label>
                        <select defaultValue="Equal">
                            <option>Equal</option>
                            <option>Higher</option>
                            <option>Lower</option>
                        </select>
                        <input type="number" name="net-cost" className="value-input"></input>
                    </div>
                    <div className="input-div">
                        <label id="VAT" htmlFor="vat-number">Vat number</label>
                        <select defaultValue="Equal">
                            <option>Equal</option>
                            <option>Higher</option>
                            <option>Lower</option>
                        </select>
                        <input type="number" name="vat-number" className="value-input"></input>
                    </div>
                    <button className="btn btn-primary" type="submit">Search</button>
                    <div className="pdf-button-container ">
                        <button className="btn btn-primary" onClick={saveTable}>Download PDF</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TableForm