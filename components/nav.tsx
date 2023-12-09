"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";

interface NavProps {
    items?: MainNavItem[];
    children?: React.ReactNode;
}

export function Nav({ items, children }: NavProps) {
    const segment = useSelectedLayoutSegment();
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <Image src="/logo.ico" alt="Logo" width={64} height={64} />
                <span className="hidden font-bold sm:inline-block">
                    Global Cultural Virtual Exchange
                </span>
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.startsWith(`/${segment}`)
                                    ? "text-foreground"
                                    : "text-foreground/60",
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            ) : null}
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <XIcon /> : <Menu />}
                <Image src="/logo.ico" alt="Logo" width={64} height={64} />
                <span className="font-bold">GCVE</span>
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    );
}
