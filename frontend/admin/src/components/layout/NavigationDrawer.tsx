import Link from "next/link";

const NavigationDrawer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="navigation-drawer" type="checkbox" className="drawer-toggle" hidden />
            <div className="drawer-content">{children}</div>
            <div className="drawer-side">
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <h1 className="text-xl p-2 font-semibold">PlacementPilot - Admin</h1>
                    <ul>
                        <li><Link href="/admin/dashboard">Dashboard Admin</Link></li>
                        <li><Link href="/super-admin/dashboard">Dashboard Super Admin</Link></li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default NavigationDrawer;