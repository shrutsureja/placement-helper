import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import { Fragment } from "react";

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Fragment>
            <Header />
            <Container>
                {children}
            </Container>
        </Fragment>
    );
}
