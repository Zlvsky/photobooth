import React from 'react';

function Container({ children, id }: any) {
    return (
        <div id="app" className='w-screen h-screen relative'>
            {children}
        </div>
    );
}

export default Container;