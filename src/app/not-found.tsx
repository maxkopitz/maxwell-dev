import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
}
const NotFound = (): React.ReactNode => {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                Oh no! This page doesn't exist.
            </h1>
        </section>
    );
}

export default NotFound;
