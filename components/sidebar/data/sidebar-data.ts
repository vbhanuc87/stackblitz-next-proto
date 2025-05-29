import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Search,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: "vbhanuc87",
    email: "vbhanuc87@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "General",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Dashboard',
          url: '/',
        },
        {
          title: 'Tasks',
          url: '/tasks',
        },
        {
          title: 'Apps',
          url: '/apps',
        },
        {
          title: 'Chats',
          url: '/chats',
        },
        {
          title: 'Users',
          url: '/users',
        },
      ],
    },
    {
      title: "Auth",
      url: "#",
      icon: Bot,
      items: [
        {
          title: 'Sign In',
          url: '/sign-in',
        },
        {
          title: 'Sign In (2 Col)',
          url: '/sign-in-2',
        },
        {
          title: 'Sign Up',
          url: '/sign-up',
        },
        {
          title: 'Forgot Password',
          url: '/forgot-password',
        },
        {
          title: 'OTP',
          url: '/otp',
        },
      ],
    },
    {
      title: "Errors",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: 'Unauthorized',
          url: '/401',
        },
        {
          title: 'Forbidden',
          url: '/403',
        },
        {
          title: 'Not Found',
          url: '/404',
        },
        {
          title: 'Internal Server Error',
          url: '/500',
        },
        {
          title: 'Maintenance Error',
          url: '/503',
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: 'Profile',
          url: '/settings',
        },
        {
          title: 'Account',
          url: '/settings/account',
        },
        {
          title: 'Appearance',
          url: '/settings/appearance',
        },
        {
          title: 'Notifications',
          url: '/settings/notifications',
        },
        {
          title: 'Display',
          url: '/settings/display',
        },
      ],
    },
  ],
  projects: [
    {
      title: "Team Projects",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Dashboard',
          url: '/',
        },
        {
          title: 'Tasks',
          url: '/tasks',
        },
        {
          title: 'Apps',
          url: '/apps',
        },
        {
          title: 'Chats',
          url: '/chats',
        },
        {
          title: 'Users',
          url: '/users',
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: Bot,
      items: [
        {
          title: 'Sign In',
          url: '/sign-in',
        },
        {
          title: 'Sign In (2 Col)',
          url: '/sign-in-2',
        },
        {
          title: 'Sign Up',
          url: '/sign-up',
        },
        {
          title: 'Forgot Password',
          url: '/forgot-password',
        },
        {
          title: 'OTP',
          url: '/otp',
        },
      ],
    },
    {
      title: "Bugs",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: 'Unauthorized',
          url: '/401',
        },
        {
          title: 'Forbidden',
          url: '/403',
        },
        {
          title: 'Not Found',
          url: '/404',
        },
        {
          title: 'Internal Server Error',
          url: '/500',
        },
        {
          title: 'Maintenance Error',
          url: '/503',
        },
      ],
    },
    {
      title: "Events",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: 'Profile',
          url: '/settings',
        },
        {
          title: 'Account',
          url: '/settings/account',
        },
        {
          title: 'Appearance',
          url: '/settings/appearance',
        },
        {
          title: 'Notifications',
          url: '/settings/notifications',
        },
        {
          title: 'Display',
          url: '/settings/display',
        },
      ],
    },
  ],
}
