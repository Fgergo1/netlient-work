import TableForm from "./TableForm.tsx";
import {useEffect, useState} from "react";
import {Filter, Product} from "../../types/types.ts";
import {jsPDF} from "jspdf"
import autoTable from "jspdf-autotable";


function TablePage() {
    const [products, setProducts] = useState<Product[]>([])
    const [sortedAscend, setSortedAscend] = useState<boolean>(false)


    useEffect(() => {
        getProducts()
    }, []);

    async function getProducts() {
        const response = await fetch("/api/products", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },

        })

        if (response.status === 200) {
            const data = await response.json()
            setProducts(data)
        } else {
            console.log("something goes wrong")
        }
    }


    function sortProducts(sortBy: keyof Product) {
        setProducts((prevState: Product[]) => {
            const sortedProducts = [...prevState];

            sortedProducts.sort((a, b) => {
                const aValue = a[sortBy];
                const bValue = b[sortBy];

                if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return (aValue - bValue) * (sortedAscend ? 1 : -1);

                } else {
                    return String(aValue).localeCompare(String(bValue)) * (sortedAscend ? 1 : -1);
                }

            });
            setSortedAscend(!sortedAscend)
            return sortedProducts;
        });
    }

    async function filterElements(filter: Filter[]) {
        const response = await fetch("/api/products/filter", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(filter)
        })
        if (response.status === 200) {
            const data = await response.json()
            setProducts(data)
        }


    }

    function saveTableToPDF() {
        const doc = new jsPDF()
        autoTable(doc, {html: '#table-id'})
        doc.save('table.pdf')
    }

    return (
        <TableForm saveTable={saveTableToPDF} onFilter={filterElements} onSort={sortProducts} products={products}/>
    )
}

export default TablePage