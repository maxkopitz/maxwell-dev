import Container from "components/ui/Container";
import { NextPage } from "next";

const Snippet: NextPage = () => {
  return (
    <Container title="Maxwell Kopitz - Snippets" description="Code snippets">
      <div className="container h-screen">
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1>Snippets</h1>
        </div>
      </div>
    </Container>
  );
};

export default Snippet;
