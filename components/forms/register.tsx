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

export const Register = () => {
    const registerForm = useForm<RegisterUser>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: { name: "", email: "", password: "" },
        mode: "onChange",
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(data: LoginUser) {
        setIsLoading(true);
        await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                name: registerForm.getValues("name"),
                email: registerForm.getValues("email"),
                password: registerForm.getValues("password"),
            }),
        });
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col gap-5 p-5 border rounded-md w-full sm:w-[400px]">
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
                                    />
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
