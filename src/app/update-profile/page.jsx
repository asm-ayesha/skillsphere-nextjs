"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function UpdateProfilePage() {
    const router = useRouter();

    const userData = authClient.useSession();
    const user = userData.data?.user;

    if (!user) return <p className="text-center mt-10">Loading...</p>;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.toString().trim();
        const image = formData.get("image")?.toString().trim();

        const payload = {};

        if (name) payload.name = name;
        if (image) payload.image = image;

        if (Object.keys(payload).length === 0) return;

        await authClient.updateUser(payload);

        router.push("/profile");
    };

    return (
        <div className="max-w-md mx-auto mt-10">

            <div className="bg-white rounded-xl shadow-md border border-sky-200">

                <div className="flex items-center gap-3 p-4 border-b border-b-sky-200">
                    <div className="bg-accent-soft text-accent-soft-foreground p-2 rounded-full">
                        <BiUser className="size-5" />
                    </div>
                    <h2 className="text-sky-800 font-bold text-lg">
                        Update User
                    </h2>
                </div>

                <div className="p-6">
                    <Surface variant="default">
                        <form onSubmit={onSubmit} className="flex flex-col gap-4">

                            <TextField name="name" defaultValue={user?.name}>
                                <Label>Name</Label>
                                <Input placeholder="Enter your name" />
                            </TextField>

                            <TextField name="image" defaultValue={user?.image}>
                                <Label>Image URL</Label>
                                <Input placeholder="Enter your image url" />
                            </TextField>

                            <div className="flex justify-end gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onPress={() => router.back()}
                                >
                                    Cancel
                                </Button>

                                <Button type="submit">
                                    Update
                                </Button>
                            </div>

                        </form>
                    </Surface>
                </div>

            </div>
        </div>
    );
}