import { CourseParent } from "@/components/Courses/course-parent";

import React from "react";

export default function Courses() {
    return (
        <main className="flex justify-center items-center p-4">
            
            <div className="grid grid-cols-1 grid-rows-auto grid-flow-row gap-x-20 gap-y-5 lg:grid-cols-3 sm:grid-cols-2">
                {Array.from({ length: 5 }, (_, index) => (
                    <CourseParent />
                ))}
            </div>
        </main>
    );
}
