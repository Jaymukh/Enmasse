import React from 'react';

const Drawer = ({ id, title, isOpen, toggleFunction, children }) => {
    return (
        <div className={`offcanvas offcanvas-end h-100 drawer-shadow border-0 ${isOpen ? 'show' : ''}`} id={id}>
            <div className="offcanvas-header py-4">
                <h5 className='fs-21'>{title}</h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    onClick={toggleFunction}
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body">
                {children}
            </div>
        </div>
    )
}

export default Drawer;