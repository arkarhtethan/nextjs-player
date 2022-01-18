import type { NextPage } from "next";
import GradientLayout from "../components/gradientLayout";

const Home: NextPage = () => {
  return (
    <GradientLayout
      roundedImage
      color="red"
      subtitle="profile"
      title="Kaung Myat Han"
      description="15 public playlists."
    >
      Home
    </GradientLayout>
  );
};

export default Home;
