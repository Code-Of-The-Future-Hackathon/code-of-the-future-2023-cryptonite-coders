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
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

export default function NewPost() {
    const newPostForm = useForm<OrganisationPostCreate>({
        resolver: zodResolver(organisationPostCreateSchema),
        defaultValues: {
            title: "",
            images: [],
        },
        mode: "onChange",
    });

    const { fields, append, remove } = useFieldArray({
        name: "images",
        control: newPostForm.control,
    });

    const appendField = () => {
        if(fields.length < 5) append({ value: "" });
        else {
            toast({
                title: "Limit reached",
                description: "You've reached the limit for the number of images",
                variant: "destructive"
            })
        }

    }

    const onSubmit = async () => {

        if( fields.length <= 1 && fields.length >= 5 ) {
            toast({
                title: "Image links",
                description: "The number images must be between 1 and 5",
                variant: "destructive"
            })
            return;
        }

        await fetch("/api/organisation_posts", {
            method: "POST",
            body: JSON.stringify({
                title: newPostForm.getValues("title"),
                images: newPostForm.getValues("images"),
            }),
            credentials: "include"
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
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Add description" {...field} />
                            </FormControl>
                            <FormDescription>
                                Write a description to your new post
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
                        onClick={() => appendField()}
                    >
                        Add image URL
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2 ml-2"
                        onClick={() => remove(fields.length - 1)}
                    >
                        Remove last link
                    </Button>
                </div>
                <Button type="submit">Create post</Button>
            </form>
        </Form>
    );
}
