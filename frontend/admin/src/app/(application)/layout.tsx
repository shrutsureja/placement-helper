import NavigationDrawer from "@/components/layout/NavigationDrawer";
import { Fragment } from "react";

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Fragment>
            <NavigationDrawer>
                {children}
            </NavigationDrawer>
        </Fragment>
    );
}
