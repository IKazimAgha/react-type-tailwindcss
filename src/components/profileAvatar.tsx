import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number; // Size in pixels (default: 50)
}

const ProfileAvatar: React.FC<AvatarProps> = ({ src, alt = "User Avatar", size = 50 }) => {
  return (
    <div
      className="rounded-full overflow-hidden border border-gray-300"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileAvatar;
