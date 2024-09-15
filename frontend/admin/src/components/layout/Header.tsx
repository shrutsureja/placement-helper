"use client"

const Header = () => {
    const toggleNavigationDrawer = () => {
        const drawer = document.getElementById("navigation-drawer");
        (drawer as HTMLInputElement).checked = !(drawer as HTMLInputElement).checked;
    }

    return (
        <div className="navbar bg-base-100 lg:hidden">
            <div className="flex-none">
                <button onClick={toggleNavigationDrawer} className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl lg:hidden">PlacementPilot - Admin</a>
            </div>
        </div>
    )
}

export default Header