import { useState, useEffect } from "react";
import "./reserva.css";

function Reservaapi() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/reservas")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [fecha, setFecha] = useState("");
    const [lugar, setLugar] = useState("");
    const [nombre_persona, setNombre_persona] = useState("");
    const handlesubmit = async () => {
        const response = await fetch("http://localhost:8001/api/reservas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fecha, lugar, nombre_persona }),
        });
        const data = await response.json();
        setUsers([...users, data]);
        
    };
    

    return (
        <div>
            <h1>Agregar reserva</h1>
            <form onSubmit={handlesubmit}>
                <label>FECHA</label>
                <input type="text" placeholder="escriba su fecha" value={fecha} onChange={(event) => setFecha(event.target.value)} />
                <label>LUGAR</label>
                <input type="text" placeholder="escriba su lugar" value={lugar} onChange={(event) => setLugar(event.target.value)} />
                <label>NOMBRE_PERSONA</label>
                <input type="text" placeholder="escriba su nombre_persona" value={nombre_persona} onChange={(event) => setNombre_persona(event.target.value)} />
                <button type="submit">registrar reserva</button>
            </form>

            <h1>lista de las reservas</h1>

            <table border="1" className="tablareservas">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>fecha</th>
                        <th>lugar</th>
                        <th>nombre_persona</th>
                        <th>opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.fecha}</td>
                            <td>{user.lugar}</td>
                            <td>{user.nombre_persona}</td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Reservaapi;