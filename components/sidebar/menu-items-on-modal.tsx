"use client";
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
import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function MenuItemsOnModal({
  title,
  teams,
  children,
}: {
  title: string;
  teams: {
    title: string;
    url: string;
    logo: React.ElementType; // Add logo if used in map
  }[];
  children?: React.ReactNode;
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }
  const getRandomValuesFromArray = (array) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0);
  };
  const icons = [
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
  ];
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              tooltip={title}
              size="sm"
              className="border-none w-3 h-3 overflow-hidden data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground justify-start"
            >
              {children}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="px-2 py-1.5 text-sm font-medium data-[inset]:pl-8">
              {title}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {teams.map((team, index) => {
              const RandomIcon = getRandomValuesFromArray(icons)[0];
              return (
                <DropdownMenuItem
                  key={team.title}
                  onClick={() => setActiveTeam(team)}
                  className="gap-2 p-2"
                  asChild
                >
                  <a href={team.url} className="flex items-center w-full">
                    <div className="flex size-6 items-center justify-center rounded-md border">
                      <RandomIcon className="size-3.5 shrink-0" />
                    </div>
                    <span className="ml-2 flex-1">{team.title}</span>
                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  </a>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
