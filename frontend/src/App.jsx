import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '3rem', textAlign: 'center', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ color: '#1e293b', fontSize: '2.5rem' }}>🛒 NovaShop — Plataforma E-Commerce</h1>
      <p style={{ color: '#64748b', fontSize: '1.2rem' }}>Frontend React + Vite ejecutándose correctamente sobre Docker.</p>
      
      <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '2rem auto' }}>
        <h3 style={{ color: '#0f172a' }}>Estado del Servicio</h3>
        <p style={{ color: '#22c55e', fontWeight: 'bold' }}>● Sistema Activo y Conectado</p>
        <p style={{ color: '#475569', fontSize: '0.9rem' }}>Backend API: <code>http://localhost:8000</code></p>
      </div>
    </div>
  )
}
