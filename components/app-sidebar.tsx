"use client";

import * as React from "react";
import {
  BarChart3,
  House,
  Users,
  History,
  Users2,
  Image,
  BookOpen,
  GraduationCap,
  Gamepad2,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items from Header component example.
const navigation = [
  { name: "Главная", href: "/", icon: House },
  { name: "Об Обществе", href: "/about", icon: Users2 },
  { name: "История", href: "/history", icon: History },
  { name: "Фамилии", href: "/families", icon: Users },
  { name: "Галерея", href: "/gallery", icon: Image },
  { name: "Традиции", href: "/traditions", icon: BookOpen },
  { name: "Образование", href: "/education", icon: GraduationCap },
  { name: "Досуг", href: "/leisure", icon: BarChart3 },
  { name: "Игры", href: "/games", icon: Gamepad2 },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpenMobile, isMobile } = useSidebar();
  const pathname = usePathname();

  const handleNavClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" onClick={handleNavClick}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/20">
                  <span className="text-lg font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                    Ц
                  </span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Цинцкаро</span>
                  <span className="truncate text-xs text-muted-foreground">
                    Мы вместе!
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    className={`transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/60 hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    <Link href={item.href} onClick={handleNavClick}>
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
