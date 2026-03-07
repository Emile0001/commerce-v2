import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center p-6">
            <Loader2 className="text-muted-foreground size-8 animate-spin" />
        </div>
    );
}
