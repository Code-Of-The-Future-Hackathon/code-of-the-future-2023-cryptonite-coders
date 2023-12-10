"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/ui/icons";
import { Eye, EyeOff } from "lucide-react";
import {
    LoginUser,
    RegisterUser,
    registerUserSchema,
} from "@/lib/validations/user";
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
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Register = () => {
    const registerForm = useForm<RegisterUser>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: { name: "", email: "", password: "" },
        mode: "onChange",
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();
    const { push } = useRouter();

    async function onSubmit(data: RegisterUser) {
        setIsLoading(true);
        const response = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
            }),
        }).then((response) => {
            response.json().then((data: { message: string }) => {
                toast({
                    variant: response.ok ? "default" : "destructive",
                    title: response.ok ? "Success" : "Error",
                    description: data.message,
                });
            });
            return response;
        });

        if (!response.ok) {
            setIsLoading(false);
            return;
        }

        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        }).then((response) => {
            if (response && response.ok) {
                toast({
                    title: "Success",
                    description: "You've logged in successfully",
                });
                push("/organisations");
            } else {
                toast({
                    title: "Error",
                    description: "Error while authenticating",
                });
            }
        });

        setIsLoading(false);
    }

    return (
        <div className="flex flex-col gap-5 p-5 border rounded-md w-full sm:w-[400px] bg-secondary">
            <div className="space-y-1 text-center">
                <p className="text-2xl">Create an account</p>
                <p className="text-slate-600">
                    Enter your credentials to continue
                </p>
            </div>
            <Form {...registerForm}>
                <form
                    onSubmit={registerForm.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={registerForm.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        autoCapitalize="none"
                                        autoComplete="name"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                        {...field}
                                        className="bg-primary text-secondary"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={registerForm.control}
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
                                        className="bg-primary text-secondary"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={registerForm.control}
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
                                            className="bg-primary text-secondary"
                                        />
                                        <Button
                                            variant="outline"
                                            type="button"
                                            className="w-10 h-10 p-3 bg-primary text-secondary"
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
                    <FormField
                        control={registerForm.control}
                        name="passwordConfirm"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm password</FormLabel>
                                <FormControl>
                                    <Input
                                        type={isVisible ? "text" : "password"}
                                        autoComplete="password"
                                        disabled={isLoading}
                                        {...field}
                                        className="bg-primary text-secondary"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogFooter>
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            <span>Register</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </div>
    );
};
