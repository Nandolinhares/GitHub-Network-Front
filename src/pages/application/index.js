import React from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../../services/auth';

export default function Main() {

    function endSection() {
        logout();
    }

    return(
       <div>
            <h1>App 1</h1>
            <Link to='/' onClick={endSection}>Sair</Link>
       </div>
    );
}