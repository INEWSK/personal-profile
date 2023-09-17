import { FaHeart } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="flex flex-col gap-2 h-16 justify-center items-center text-sm ">
      <p>2022-2023</p>
      <p className="flex items-center space-x-2">
        <span>Made with</span> {<FaHeart color="#ff0000" />}
        <span>by YK</span>
      </p>
    </footer>
  );
};

export default MainFooter;
