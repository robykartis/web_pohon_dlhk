"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export const SubmitButton = ({ label }: { label: string }) => {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled >
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Process...
                </Button>
            ) : (
                <Button disabled={pending}>
                    {label}
                </Button>
            )}
        </>
    );
};
