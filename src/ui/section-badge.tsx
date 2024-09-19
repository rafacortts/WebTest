import React from 'react';

interface Props {
    title: string;
}

const SectionBadge = ({ title }: Props) => {
    return (
        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] border-2 border-green-500 focus:outline-none select-none text-white">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-black" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-4 py-1 text-sm font-medium backdrop-blur-3xl">
                {title}
            </span>
        </div>
    );
};

export default SectionBadge;
