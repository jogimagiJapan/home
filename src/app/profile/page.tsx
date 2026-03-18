import { ProfileContent } from "@/components/profile/ProfileContent";
import fs from "fs";
import path from "path";

// Server-side function to fetch images for the profile folder
function getProfileImages() {
  const profileDir = path.join(process.cwd(), "public", "profile");
  try {
    if (fs.existsSync(profileDir)) {
      const files = fs.readdirSync(profileDir);
      const images = files
        .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map((file) => `/profile/${file}`);
        
      if (images.length > 0) return images;
    }
  } catch (error) {
    console.error("Error reading profile directory:", error);
  }
  // Fallback if folder is empty or doesn't exist
  return ["/images/profile-hero.jpg"];
}

/**
 * Server Component for the Profile page
 * Handles file scanning and passes data to the client component
 */
export default function ProfilePage() {
  const profileImages = getProfileImages();

  return <ProfileContent profileImages={profileImages} />;
}
