import React from 'react';
import { Link } from 'react-router-dom'; 

const Temp = ({ route }) => {
    return (
        <div style={styles.container}>
            <p style={styles.text}>{route}</p>
            <Link to="/" style={styles.link}>Go to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '300px',
        margin: 'auto',
    },
    text: {
        fontSize: '18px',
        color: '#333',
        marginBottom: '20px',
    },
    link: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#0d1c52',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
        fontSize: '16px',
    },
};

export default Temp;
