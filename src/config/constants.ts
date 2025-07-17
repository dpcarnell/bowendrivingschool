export const BASE_PATH = "/bowendrivingschool";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  LESSONS: "/lessons",
  SCHEDULE: "/schedule",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
