// Global configuration constants
export const BASE_PATH = "";

// Page routes enum using "as const" pattern
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  LESSONS: "/lessons",
  SCHEDULE: "/schedule",
} as const;

// Type for route values
export type Route = (typeof ROUTES)[keyof typeof ROUTES];
