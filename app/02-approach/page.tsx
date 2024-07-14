import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { productColumns, productRows } from "@/data/products";
import { Icons } from "@/components/icons";

export default function SecondApproachPage() {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Products</CardTitle>
                    <CardDescription>Manage your products and view their details.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {productColumns.map((column) => (
                                    <TableHead key={column.name}>{column.name}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {productRows.map((product) => (
                                <TableRow key={product.name}>
                                    <TableCell>
                                        <ImagePlaceholder />
                                    </TableCell>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.inventory}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="icon">
                                                <Icons.filePen className="h-4 w-4" />
                                                <span className="sr-only">Edit</span>
                                            </Button>
                                            <Button variant="ghost" size="icon">
                                                <Icons.trash className="h-4 w-4" />
                                                <span className="sr-only">Delete</span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
}

function ImagePlaceholder() {
    return (
        <div className="relative h-14 aspect-square overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
            <svg className="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
                <defs>
                    <pattern
                        id="pattern-1526ac66-f54a-4681-8fb8-0859d412f251"
                        x="0"
                        y="0"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                    </pattern>
                </defs>
                <rect
                    stroke="none"
                    fill="url(#pattern-1526ac66-f54a-4681-8fb8-0859d412f251)"
                    width="100%"
                    height="100%"
                ></rect>
            </svg>
        </div>
    );
}
