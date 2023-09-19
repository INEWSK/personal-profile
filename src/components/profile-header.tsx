import Image from "next/image";

const ProfileHeader = () => {
  return (
    // personal avatar
    <header className="flex flex-col gap-3">
      <div className="w-24 h-24 mx-auto cursor-pointer">
        <Image
          src="/assets/images/avatar.jpg"
          alt="avatar"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-full shadow-md hover:-rotate-6 transition-all duration-700 ease-in-out"
          style={{ height: "auto", width: "100%" }}
        />
      </div>
      <div className="profile-title">
        <h1 className="text-3xl drop-shadow text-center">
          <span className="text-blue-500">Yuji</span> Kurokawa
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          <span className="line-through">Junkcode</span> Developer
        </p>
      </div>
    </header>
  );
};

export default ProfileHeader;
