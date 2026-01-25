import { HeartIcon } from "lucide-react";
import { Button } from "../ui/button";

function FavoriteToggleButton({ productId }: { productId: string }) {
    return (
        <Button
            size={"icon"}
            variant={"outline"}
            className="p-2 cursor-pointer"
        >
            <HeartIcon />
        </Button>
    );
}
export default FavoriteToggleButton;
