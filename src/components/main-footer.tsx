import { FaHeart } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="flex flex-col gap-2 h-16 justify-center items-center text-sm ">
      <p>2022-2023</p>
      <p className="flex items-center gap-2">
        Made with
        <span className="animate-heartbeat">
          <FaHeart color="#d43f57" />
        </span>
        by YK
      </p>
    </footer>
  );
};

export default MainFooter;
