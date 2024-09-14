import React from 'react'

const Container = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-[1440px] mx-auto max-w-full px-2'>
            {children}
        </div>
    )
}

export default Container;