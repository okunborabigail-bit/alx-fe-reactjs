import React from "react";

function UserProfile() {
  return (
    <div className="
      bg-gray-100
      p-4 sm:p-6 md:p-8
      max-w-xs sm:max-w-sm
      mx-auto my-20
      rounded-lg
      shadow-lg
      transition-shadow duration-300
      hover:shadow-xl
      text-center
    ">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full
          mx-auto
          w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36
          transition-transform duration-300 ease-in-out
          hover:scale-110
        "
      />

      {/* Name */}
      <h1
        className="
          my-4
          text-lg sm:text-xl
          text-blue-800
          font-semibold
          transition-colors duration-300
          hover:text-blue-500
        "
      >
        John Doe
      </h1>

      {/* Bio */}
      <p className="text-gray-600 text-sm sm:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;


