"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    OrganisationPostCreate,
    organisationPostCreateSchema,
} from "@/lib/validations/organisation-post";

export default function NewPostForm() {
    const newPostForm = useForm<OrganisationPostCreate>({
        resolver: zodResolver(organisationPostCreateSchema),
        defaultValues: {
            title: "",
            images: [],
        },
        mode: "onChange",
    });

    const { fields, append } = useFieldArray({
        name: "images",
        control: newPostForm.control,
    });

    const onSubmit = async () => {
        await fetch("/organisation_posts", {
            method: "POST",
            body: JSON.stringify({
                title: newPostForm.getValues("title"),
                images: newPostForm.getValues("images"),
            }),
        });
    };

    return (
        <Form {...newPostForm}>
            <form
                onSubmit={newPostForm.handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={newPostForm.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Add title" {...field} />
                            </FormControl>
                            <FormDescription>
                                Write a title to your new post
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div>
                    {fields.map((field, index) => (
                        <FormField
                            control={newPostForm.control}
                            key={field.id}
                            name={`images.${index}.value`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        className={cn(index !== 0 && "sr-only")}
                                    >
                                        Image links
                                    </FormLabel>
                                    <FormDescription
                                        className={cn(index !== 0 && "sr-only")}
                                    >
                                        Add link to your image
                                    </FormDescription>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => append({ value: "" })}
                    >
                        Add image URL
                    </Button>
                </div>
                <Button type="submit">Create post</Button>
            </form>
        </Form>
    );
}
