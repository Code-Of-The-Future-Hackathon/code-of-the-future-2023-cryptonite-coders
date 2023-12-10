import React from "react";

export const CourseChild = () => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen px-4 sm:px-24 gap-4">
            <video controls preload="metadata" className="w-full">
                <source
                    src="http://www.example.com/waterfall-video.mp4"
                    type="video/mp4"
                />
                Video not supported.
            </video>
            <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                nostrum maiores sit rerum illum. Architecto cumque eos
                accusantium voluptatum quo eius, id aperiam voluptatibus officia
                commodi incidunt pariatur fugit necessitatibus?
            </p>
        </div>
    );
};
