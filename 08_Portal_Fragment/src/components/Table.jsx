import { Fragment } from "react"

function Table({rows = 10, columns = 10}) {
    let arrayRow = new Array(rows).fill();
    let arrayCol = new Array(columns).fill();
    return (
        <table style={{borderCollapse: "collapse", border: "1px solid white"}}>
            <tbody>
                {arrayRow.map((_, i) => (
                    <tr key={i}>
                        <Fragment>
                            {arrayCol.map((_, j) => (
                                <td style={{border: "1px solid white", padding: "10px", borderTop: "0px", borderBottom: "0px"}} key={j}>{`${i+1} * ${j+1} == ${(i+1)*(j+1)}`}</td>
                            ))}
                        </Fragment>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table