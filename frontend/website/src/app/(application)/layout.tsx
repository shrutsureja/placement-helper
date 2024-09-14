import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
}
