import { NextPage } from "next";

interface HomeProps {
  // Add your page props here
}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <div className="">
      <h1 className="text-red-500">Home</h1>
    </div>
  );
};

export default Home;