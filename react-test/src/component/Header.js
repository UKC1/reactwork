import React from 'react';
import emoji from 'react-emoji';

const Header = () => {
    return (
        <div className="Header">
            {/* window + ; 이모티콘! */}
            <h3>♦ TODOLIST ♦</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

export default Header;