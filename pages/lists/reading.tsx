import Container from "components/Container";
import { NextPage } from "next";

const Reading: NextPage = () => {
  return (
    <Container title="Maxwell - Reading List">
      <div className="flex flex-row justify-center items-start mx-auto max-w-2xl pb-16 h-screen">

        <h1 className="text-lg text-white">My Reading list</h1>
      </div>
    </Container>
  )
}

export default Reading;
