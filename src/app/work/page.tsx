import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Work',
    description: 'A summary of my work and contributions.',
}

const Work = (): React.ReactNode => {
    return (
        <div>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">places and stuff ive worked on</h1>
        </div>
    )
}

export default Work;
