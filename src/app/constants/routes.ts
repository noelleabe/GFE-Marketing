import { INavLinkItem } from "../ui/common/NavLinkItem";

export type RouteType = INavLinkItem & { id: number };

export const routes: RouteType[] = [
  {
    title: "Testimonial Card",
    to: "/testimonial-card",
    id: 1,
  },
  {
    title: "Blog Card",
    to: "/blog-card",
    id: 2,
  },
  {
    title: "Profile Card",
    to: "/profile-card",
    id: 3,
  },
];
