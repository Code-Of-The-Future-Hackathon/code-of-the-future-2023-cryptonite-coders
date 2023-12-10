import React from "react";
import { db } from "@/lib/db";
import { Typography } from "@/components/ui/typography";
import CourseParent from "@/components/courses/course-parent";

export default async function Courses() {
    const courses = await db.course.findMany({
        select: {
            id: true,
            title: true,
            author: true,
            image: true,
            description: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return courses.length > 0 ? (
        <div className="min-h-[calc(100vh-11rem)]">
            <div className="grid grid-cols-1 grid-rows-auto grid-flow-row gap-x-20 gap-y-5 lg:grid-cols-3 sm:grid-cols-2">
                <div className="flex justify-center items-center p-4">
                    <div className="grid grid-cols-1 grid-rows-auto grid-flow-row gap-x-20 gap-y-5 lg:grid-cols-3 sm:grid-cols-2">
                        {courses.map((course, index) => (
                            <CourseParent
                                key={index}
                                id={course.id}
                                title={course.title}
                                author={course.author.name}
                                image={course.image.path || ""}
                                description={course.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Typography variant="h1" className="h-[calc(100vh-15rem)]">
            There is no courses!
        </Typography>
    );
}
