import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center w-screen animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
