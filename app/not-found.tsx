"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image
                src={"/images/logo/Colourfull_Nails_Logo.png"}
                width={250}
                height={250}
                alt={`${APP_NAME} logo`}
            />
            <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">Not Found</h1>
                <p className="text-destructive">
                    Could not find requested page
                </p>
                <Button variant="outline" className="mt-4 ml-2" asChild>
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        </div>
    );
};
export default NotFoundPage;
