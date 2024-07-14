import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function OpenDatabaseModal() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Open database</DialogTitle>
            </DialogHeader>
            <DialogFooter>
                <div>
                    <Button variant="outline">Cancel</Button>
                </div>
                <div className="space-x-2">
                    <Button variant="outline">New...</Button>
                    <Button>Confirm</Button>
                </div>
            </DialogFooter>
        </DialogContent>
    );
}
