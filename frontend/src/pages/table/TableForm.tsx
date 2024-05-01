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

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const selectElements = form.elements["select-element"]
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const inputElements = form.elements["form-input"]

        selectElements.forEach((select : HTMLSelectElement, index : number) => {
            const field: string = inputElements[index].name
            const operator: string = select.value
            const inputValue: string | number = inputElements[index].value


            if (inputValue !== "") {
                const filter: Filter = {
                    field: field,
                    operator: operator,
                    value: inputValue
                }
                console.log(filter)
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
                        <th className="table-header-element" key={key} onClick={() => onSort(key as keyof Product)}>
                            {key + "  ⇅"}
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
                        <label>Article
                            number
                        </label>
                        <select defaultValue="Exact" id="select-element" className="form-select">
                            <option>Exact</option>
                        </select>
                        <input  id="form-input" type="number" name="articleNumber"  className="value-input form-control"></input>
                    </div>
                    <div className="input-div">
                        <label>Product name</label>
                        <select defaultValue="Partial" id="select-element" className="form-select">
                            <option>Partial</option>
                            <option>Exact</option>
                        </select>
                        <input id="form-input" name="name" className="value-input form-control"></input>
                    </div>
                    <div className="input-div">
                        <label>Net cost</label>
                        <select defaultValue="Equal" id="select-element" className="form-select">
                            <option>Equal</option>
                            <option>Higher</option>
                            <option>Lower</option>
                        </select>
                        <input id="form-input" type="number" name="netCost" className="value-input form-control"></input>
                    </div>
                    <div className="input-div">
                        <label>Vat number</label>
                        <select defaultValue="Equal" id="select-element" className="form-select">
                            <option>Equal</option>
                            <option>Higher</option>
                            <option>Lower</option>
                        </select>
                        <input id="form-input" type="number" name="VAT" className="value-input form-control"></input>
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