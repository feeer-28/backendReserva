import { useState, useEffect } from "react";
import "./reserva.css";

function ReservaApi() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/reservas", { mode: 'no-cors' })
            .then(res => res.json())
            .then(data => setUsers(data))
            
    }, []);

    return (
        <div>
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

export default ReservaApi;