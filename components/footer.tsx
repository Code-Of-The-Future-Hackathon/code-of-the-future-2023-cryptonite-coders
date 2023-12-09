import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(className)}>
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Image src="/logo.ico" alt="Logo" width={64} height={64} />
                    <Typography variant="body">
                        Created by{" "}
                        <a
                            className="font-bold"
                            href="https://github.com/CreatorX8"
                            target="_blank"
                        >
                            Hristiyan Dimitrov
                        </a>
                        ,{" "}
                        <a
                            className="font-bold"
                            href="https://github.com/stoil100"
                            target="_blank"
                        >
                            Stoil Stoilov
                        </a>{" "}
                        and{" "}
                        <a
                            className="font-bold"
                            href="https://github.com/ivokraev"
                            target="_blank"
                        >
                            Ivaylo Kraev
                        </a>
                    </Typography>
                </div>
                <ModeToggle />
            </div>
        </footer>
    );
}
