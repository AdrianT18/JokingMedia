import React from 'react';

export default function Maintenance() {
    const maintenanceStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
    };

    const titleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    };

    const messageStyle = {
        fontSize: '1.25rem',
    };

    return (
        <div style={maintenanceStyle}>
            <h1 style={titleStyle}>Site Under Maintenance</h1>
            <p style={messageStyle}>
                We're currently working on improving our website. Please check back
                later.
            </p>
        </div>
    );
}
