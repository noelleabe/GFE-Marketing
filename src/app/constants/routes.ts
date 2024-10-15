import { INavLinkItem } from "../ui/NavLinkItem";

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
];
