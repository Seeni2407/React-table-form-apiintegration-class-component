function Reacttable()
{
    let table = [
        {
            fname:"seeni",
            lname:"vasan"
        },
        {
            fname:"seeni",
            lname:"vasan"
        },
        {
            fname:"seeni",
            lname:"vasan"
        },
    ];
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        table.map((value,i)=>
                            <tr>
                                <td>{value.fname}</td>
                                <td>{value.lname}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Reacttable;