import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Pencil, Trash2 } from "lucide-react";

export default function TransactionsTable({
  transactions,
  onEdit,
  onDelete,
  hasData,
  isFilteredEmpty,
  loading,
}) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const userRole =
    typeof window !== "undefined" ? localStorage.getItem("user_role") : null;

  const isAdmin = userRole === "Admin";

  if (!loading && !hasData) {
    return (
      <div className="w-full bg-white px-4 py-16 flex flex-col items-center justify-center text-center">
        <p className="text-lg font-semibold text-gray-700">
          No transactions yet
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Add your first transaction to get started
        </p>
      </div>
    );
  }

  if (!loading && isFilteredEmpty) {
    return (
      <div className="w-full bg-white px-4 py-16 flex flex-col items-center justify-center text-center">
        <p className="text-lg font-semibold text-gray-700">No results found</p>
        <p className="text-sm text-gray-500 mt-1">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white px-4 py-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            {isAdmin && <TableHead className="text-center">Actions</TableHead>}
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading
            ? [...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[140px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[120px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-4 w-[80px] ml-auto" />
                  </TableCell>

                  {isAdmin && (
                    <TableCell className="flex justify-center gap-2">
                      <Skeleton className="h-8 w-16 rounded-md" />
                      <Skeleton className="h-8 w-16 rounded-md" />
                    </TableCell>
                  )}
                </TableRow>
              ))
            : transactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell>{txn.date}</TableCell>
                  <TableCell>{txn.title}</TableCell>
                  <TableCell>{txn.category}</TableCell>

                  <TableCell
                    className={
                      txn.type === "income"
                        ? "text-green-600 font-medium"
                        : "text-red-600 font-medium"
                    }
                  >
                    {txn.type}
                  </TableCell>

                  <TableCell className="text-right font-medium">
                    ₹{txn.amount}
                  </TableCell>

                  {isAdmin && (
                    <TableCell className="text-center flex justify-center gap-2">
                      <Button
                        onClick={() => onEdit(txn)}
                        variant="outline"
                        className="flex items-center gap-1 text-blue-600 border-blue-500 hover:bg-blue-50"
                      >
                        <Pencil size={16} />
                        Edit
                      </Button>

                      <Button
                        onClick={() => {
                          setSelectedId(txn.id);
                          setIsDeleteOpen(true);
                        }}
                        variant="outline"
                        className="flex items-center gap-1 text-red-600 border-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                        Delete
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
        </TableBody>
      </Table>

      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-gray-600">
            Are you sure you want to delete this transaction?
          </p>

          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setIsDeleteOpen(false)}
              className="px-4 py-2 rounded-md border"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                onDelete(selectedId);
                setIsDeleteOpen(false);
              }}
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}