const Table = () => {

    const inmobiliarias = [
        {
            "commercialdataid": 260406510,
            "name": "Inmosol Valencia Soluciones Inmobiliarias",
            "properties": 14, 
            "address": "calle Progreso 0, València, 46011",
            "phone": "960962156",
            "url": "https://www.idealista.com/pro/inmosol-valencia-soluciones-inmobiliarias/",
        },
        {
            "commercialdataid": 260406187,
            "name": "Inmobiliaria Granero",
            "properties": 15, 
            "address": "San Emigdio 5, Guardamar del segura, 03140",
            "phone": "865440793",
            "url": "https://www.idealista.com/pro/inmobiliariagranero/",
        }
    ]

    return(
        <table class="table table-sm">
            <thead>
                <tr>
                    <th scope="th">Commercial Id</th>
                    <th scope="th">Name</th>
                    <th scope="th">N properties</th>
                    <th scope="th">Address</th>
                    <th scope="th">Phone</th>
                    <th scope="th">Url</th>
                </tr>
            </thead>
            <tbody>
                {
                    inmobiliarias.map((item, key) => {
                        return <tr key={key}>
                            <td scope="row">{item.commercialdataid}</td>
                            <td scope="row">{item.name}</td>
                            <td scope="row">{item.properties}</td>
                            <td scope="row">{item.address}</td>
                            <td scope="row">{item.phone}</td>
                            <td scope="row">{item.url}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table