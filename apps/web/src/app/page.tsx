import { Button } from "@repo/ui";
import { NextPage } from "next";

interface HomeProps {
  // Add your page props here
}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <div className="">

      <Button>Click me</Button>
      <h1>Home</h1>

    </div>
  );
};

export default Home;
