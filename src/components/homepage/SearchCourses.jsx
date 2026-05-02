"use client";

import { Button, SearchField } from "@heroui/react";
import React, { useEffect, useState } from "react";

const SearchCourses = ({ courses, setFilteredCourses }) => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        const result = courses.filter((course) =>
            course.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCourses(result);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center h-10">

            <SearchField
                aria-label="Search courses"
                className="h-full"
                classNames={{
                    base: "h-full",
                    mainWrapper: "h-full",
                    inputWrapper: "h-full rounded-l-full rounded-r-none border border-sky-200 border-r-0 bg-white shadow-none px-3",
                    input: "text-sm text-sky-900 placeholder:text-gray-400",
                }}
            >
                <SearchField.Group>
                    <SearchField.SearchIcon className="text-sky-400 w-4 h-4" />
                    <SearchField.Input
                        className="w-40 border-none outline-none focus:ring-0 bg-transparent"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <SearchField.ClearButton
                        className="text-gray-400"
                        onClick={() => {
                            setSearch("");
                            setFilteredCourses(courses);
                        }}
                    />
                </SearchField.Group>
            </SearchField>

            {/* <Button
                className="h-full rounded-r-full rounded-l-none bg-sky-700 hover:bg-sky-800 text-white text-sm font-medium px-5 shadow-none border-none"
                onClick={handleSearch}
            >
                Search
            </Button> */}
        </div>
    );
};

export default SearchCourses;