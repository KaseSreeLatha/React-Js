import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Details.css'; // Import CSS file for styling

const Details = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }, [id]);

    const handleEmployeeDetailsClick = () => {
        navigate('/careers')
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
        window.history.pushState(null, null, '/login');
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, null, '/login');
        });
    };

    const handleEditClick = () =>{

        navigate('/edit1')
    }

    return (
        <div className="container">
            <h1>User Profile</h1>
            <button onClick={handleEmployeeDetailsClick}>User Details</button>
            {/* <br />
            <br /> */}
            {user && user.isAdmin && ( // Check if user isAdmin is true
                <button onClick={handleEditClick}>Edit</button>
            )}
            {/* <br/>
            <br/> */}
            <button className="logout" onClick={handleLogout}>Logout</button>
            {showDetails && user && (
                <div className="details-container">
                    <h2 >User Details</h2>
                    <div className="profile">
                        <p><strong>User ID:</strong> {user.id}</p>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Contact:</strong> {user.contact}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
