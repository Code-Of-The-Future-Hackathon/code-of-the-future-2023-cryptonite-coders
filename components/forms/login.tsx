"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/ui/icons";
import { Eye, EyeOff } from "lucide-react";
import { LoginUser, loginUserSchema } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { DialogFooter } from "@/components/ui/dialog";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export const Login = () => {
    const loginForm = useForm<LoginUser>({
        resolver: zodResolver(loginUserSchema),
        defaultValues: { email: "", password: "" },
        mode: "onChange",
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();

    async function onSubmit(data: LoginUser) {
        setIsLoading(true);
        await signIn("credentials", {
            email: loginForm.getValues("email"),
            password: loginForm.getValues("password"),
            redirect: false,
        }).then((response) => {
            if (response && response.ok) {
                toast({
                    title: "Success",
                    description: "You've logged in successfully",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Error while authenticating",
                });
            }
        });
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col gap-5 p-2 border rounded-md w-full sm:w-[400px]">
            <div className="space-y-1 text-center">
                <p className="text-2xl">Log in to your account</p>
                <p className="text-slate-600">
                    Enter your credentials to continue
                </p>
            </div>
            <Form {...loginForm}>
                <form
                    onSubmit={loginForm.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className="flex w-full items-center space-x-2">
                                        <Input
                                            type={
                                                isVisible ? "text" : "password"
                                            }
                                            autoComplete="password"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                        <Button
                                            variant="outline"
                                            type="button"
                                            className="w-10 h-10 p-3"
                                            onClick={() => {
                                                setIsVisible(!isVisible);
                                            }}
                                        >
                                            {isVisible ? <Eye /> : <EyeOff />}
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogFooter>
                        <Button className="w-full" type="submit">
                            {isLoading && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            <span>Login</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </div>
    );
};
