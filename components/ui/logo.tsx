import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-8",
  md: "w-12",
  lg: "w-16",
  xl: "w-24",
  "2xl": "w-32",
  "3xl": "w-48",
  "4xl": "w-64",
  "5xl": "w-80",
  "6xl": "w-96",
};

const Logo = ({ size = "md", className }: LogoProps) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src="/logo.svg"
        alt="Logo"
        className={cn("h-auto object-contain", sizeClasses[size], className)}
      />
    </div>
  );
};

export default Logo;