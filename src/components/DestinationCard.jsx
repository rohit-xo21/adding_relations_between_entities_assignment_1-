import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      borderRadius: '16px', 
      overflow: 'hidden', 
      maxWidth: '320px', 
      transition: 'transform 0.3s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <img 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        src={destination.image} 
        alt={destination.name} 
      />
      <div style={{ padding: '16px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#333' }}>{destination.name}</h2>
        <h3 style={{ fontSize: '16px', color: '#555' }}>{destination.location}</h3>
        <p style={{ color: '#666', marginTop: '8px' }}>{destination.description}</p>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff', marginTop: '12px' }}>{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;