import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog',
}
const Blog = (): React.ReactNode => {
    return (
        <div>
            <h1>My blog</h1>
        </div>
    )
}

export default Blog;
