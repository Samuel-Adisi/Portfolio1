import Link from "next/link";

const Copyright = () => {
  return (
    <div className="  py-6  flex flex-col justify-center items-center font-medium text-base sm:text-lg border-t ">
      <p className=" text-center">
        Designed by
        <Link
          href={"https://github.com/Samuel-Adisi"}
          className=" text-secondary-color-3   font-bold font-idgrotesk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          samueladisi 👨‍💻
        </Link>{" "}
      </p>
      <div></div>
      <p className=" ">&copy; 2026 All rights reserved.</p>
    </div>
  );
};
export default Copyright;
