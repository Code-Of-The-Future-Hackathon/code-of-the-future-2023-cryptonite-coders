import { notFound } from "next/navigation";
import { navigationConfig } from "@/config/navigation";
import { getCurrentUser } from "@/lib/session";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { UserAccountNav } from "@/components/user-account-nav";

interface DashboardLayoutProps {
    children?: React.ReactNode;
}

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    const user = await getCurrentUser();

    if (!user) {
        return notFound();
    }

    console.log(user);

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <Nav items={navigationConfig} />
                    <UserAccountNav
                        user={{
                            name: user.name,
                            image: user.image,
                            email: user.email,
                        }}
                    />
                </div>
            </header>
            <div className="container">
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </div>
            <Footer className="border-t" />
        </div>
    );
}
