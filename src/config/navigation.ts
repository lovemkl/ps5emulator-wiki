import { BookOpen, Cpu, Gamepad2, ShieldAlert } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guides", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "emulators", path: "/emulators", icon: Cpu, isContentType: true },
  { key: "compatibility", path: "/compatibility", icon: Gamepad2, isContentType: true },
  { key: "tips", path: "/tips", icon: ShieldAlert, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
