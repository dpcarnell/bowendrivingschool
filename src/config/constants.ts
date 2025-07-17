// Global configuration constants
export const BASE_PATH = "/bowendrivingschool";

// Page routes enum using "as const" pattern
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  LESSONS: "/lessons",
  SCHEDULE: "/schedule",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
