export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Reports",
      href: "/dashboard/reports",
    },
    {
      label: "Data",
      href: "/dashboard/data",
    },
    {
      label: "Upload",
      href: "/dashboard/uploading",
    },
    {
      label: "Account",
      href: "/dashboard/accounts",
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
  },
};
