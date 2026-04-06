import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function TransactionDialog({
  open,
  setOpen,
  mode, // "add" | "edit"
  initialData,
  onSubmit,
}) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  // Pre-fill in edit mode
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setForm({
        title: initialData.title || "",
        amount: initialData.amount || "",
        category: initialData.category || "",
        type: initialData.type || "expense",
        date: initialData.date || "",
      });
    } else {
      setForm({
        title: "",
        amount: "",
        category: "",
        type: "expense",
        date: "",
      });
    }
  }, [mode, initialData]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const isFormValid =
    form.title.trim() &&
    form.amount !== "" &&
    form.category.trim() &&
    form.type &&
    form.date;

  const handleSubmit = () => {
    if (!isFormValid) return;
    onSubmit(form);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit Transaction" : "Add Transaction"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Title <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Enter title"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              required
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Amount <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={form.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Category <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Enter category"
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
              required
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Date <span className="text-red-500">*</span>
            </label>
            <Input
              type="date"
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              required
            />
          </div>

          {/* Type Select */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Type <span className="text-red-500">*</span>
            </label>
            <Select
              value={form.type}
              onValueChange={(value) => handleChange("type", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="expense">Expense</SelectItem>
                <SelectItem value="income">Income</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            variant={mode === "edit" ? "secondary" : "default"}
          >
            {mode === "edit" ? "Update" : "Add"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
