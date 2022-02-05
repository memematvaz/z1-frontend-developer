import React from 'react';
import './ScanPage.scss';
import Header from '../../components/Header'

const ScanPage = () => (
    <div className="scan-page">
        <Header/>
        <h4>Scan your ID</h4>
        <p>Take a picture. It may take time to validate your personal information.</p>
    </div>
)

export default ScanPage;