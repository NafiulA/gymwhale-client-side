import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={`block py-2 pr-3 pl-3 border-b-2 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${match ? "active" : "rest"}`}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;