import React from 'react';
import { Link } from 'react-router-dom'; 

const PageNotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.message}>Sorry, the page you're looking for does not exist.</p>
            <Link to="/" style={styles.link}>Go Back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontSize: '2rem',
        color: '#ff6347',
    },
    message: {
        fontSize: '1.2rem',
        marginBottom: '20px',
    },
    link: {
        fontSize: '1.1rem',
        textDecoration: 'none',
        color: '#1e90ff',
    }
};

export default PageNotFound;