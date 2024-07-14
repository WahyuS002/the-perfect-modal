import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EditProductModal() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Product Modal</DialogTitle>
            </DialogHeader>
            <DialogFooter>
                <Button variant="ghost">Cancel</Button>
                <Button className="bg-indigo-600/90 text-white hover:bg-indigo-500">Confirm</Button>
            </DialogFooter>
        </DialogContent>
    );
}
