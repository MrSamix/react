import { Link } from "react-router-dom"
import { useState } from "react";

function Menu() {
const [aboutOpen, setAboutOpen] = useState(false);

return (
    <nav
        style={{
            display: 'flex',
            gap: '20px',
            padding: '16px',
            backgroundColor: '#f0f0f0',
            justifyContent: 'center',
            top: 0,
            left: 0,
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
        }}
    >
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
        <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
        >
            <Link style={{ cursor: 'pointer' }}>About</Link>
            {aboutOpen && (
                <ul
                    style={{
                        listStyleType: 'none',
                        margin: 0,
                        padding: '8px 0',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        minWidth: '120px',
                        zIndex: 1001,
                    }}
                >
                    <li>
                        <Link to="/about/team" style={{ padding: '8px 16px', display: 'block' }}>Team</Link>
                    </li>
                    <li>
                        <Link to="/about/company" style={{ padding: '8px 16px', display: 'block' }}>Company</Link>
                    </li>
                </ul>
            )}
        </div>
        <Link to="/profile">Profile</Link>
    </nav>
)
}

export default Menu