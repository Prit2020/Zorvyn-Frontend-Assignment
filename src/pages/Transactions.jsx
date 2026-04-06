// import { useState, useEffect } from "react";
// import { toast } from "sonner";
// import HeadingSection from "@/components/layout/HeadingSection";
// import { Button } from "@/components/ui/button";
// import TransactionsTable from "@/components/transactions/TransactionsTable";
// import TransactionsHeader from "@/components/transactions/TransactionsHeader";
// import Pagination from "@/components/common/Pagination";
// import TransactionDialog from "@/components/transactions/TransactionDialog";
// import { getTransactions, setTransactionsToStorage } from "@/utility/storage";
// import { Plus } from "lucide-react";

// export default function Transactions() {
//   const [transactions, setTransactions] = useState(getTransactions);

//   const [search, setSearch] = useState("");
//   const [typeFilter, setTypeFilter] = useState("all");
//   const [sortBy, setSortBy] = useState("date");

//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);

//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [mode, setMode] = useState("add");
//   const [selectedTransaction, setSelectedTransaction] = useState(null);

//   const [loading, setLoading] = useState(true);

//   const userRole =
//     typeof window !== "undefined" ? localStorage.getItem("user_role") : null;
//   const isAdmin = userRole === "Admin";

//   useEffect(() => {
//     setTransactionsToStorage(transactions);
//   }, [transactions]);

//   // Reset page on search/filter change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, typeFilter, sortBy, pageSize]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 800);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleAddClick = () => {
//     setMode("add");
//     setSelectedTransaction(null);
//     setIsDialogOpen(true);
//   };

//   const handleEditClick = (txn) => {
//     setMode("edit");
//     setSelectedTransaction(txn);
//     setIsDialogOpen(true);
//   };

//   const handleSubmit = (data) => {
//     if (mode === "add") {
//       const newTxn = { ...data, id: Date.now() };
//       setTransactions((prev) => [newTxn, ...prev]);
//       toast.success("Transaction added successfully");
//     } else {
//       setTransactions((prev) =>
//         prev.map((txn) =>
//           txn.id === selectedTransaction.id ? { ...txn, ...data } : txn,
//         ),
//       );
//       toast.success("Transaction updated successfully");
//     }
//   };

//   const handleDelete = (id) => {
//     setTransactions((prev) => prev.filter((txn) => txn.id !== id));
//     toast.error("Transaction deleted");
//   };

//   // Processed data
//   const processedData = transactions
//     .filter((txn) => txn.title.toLowerCase().includes(search.toLowerCase()))
//     .filter((txn) => {
//       if (typeFilter === "all") return true;
//       return txn.type === typeFilter;
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") return new Date(b.date) - new Date(a.date);
//       if (sortBy === "amount") return b.amount - a.amount;
//       return 0;
//     });

//   const totalPages = Math.ceil(processedData.length / pageSize);

//   const paginatedData = processedData.slice(
//     (currentPage - 1) * pageSize,
//     currentPage * pageSize,
//   );

//   const totalItems = processedData.length;

//   const startIndex = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;

//   const endIndex = Math.min(currentPage * pageSize, totalItems);

//   // Fallback flags
//   const hasData = transactions.length > 0;
//   const isFilteredEmpty = processedData.length === 0 && hasData;


//   return (
//     <div className=" sticky top-[72px] flex flex-col gap-6 overflow-y-auto">
//       {/* HEADER */}
//       <div className="">
//         <HeadingSection heading="Transactions" subheading="Manage your income and expenses" >
//           {isAdmin && (
//             <Button
//               onClick={handleAddClick}
//               variant="outline"
//               className="flex items-center gap-1"
//             >
//               <Plus size={16} />
//               Add Transaction
//             </Button>
//           )}
//         </HeadingSection>
//       </div>

//       {/* CONTENT */}
//       <div className="px-4 py-4 flex flex-col gap-6">
//         <TransactionsHeader
//           search={search}
//           setSearch={setSearch}
//           typeFilter={typeFilter}
//           setTypeFilter={setTypeFilter}
//           sortBy={sortBy}
//           setSortBy={setSortBy}
//           pageSize={pageSize}
//           setPageSize={setPageSize}
//         />

//         <div className="flex-1 pb-4">
//           <TransactionsTable
//             transactions={paginatedData}
//             onEdit={handleEditClick}
//             onDelete={handleDelete}
//             hasData={hasData}
//             isFilteredEmpty={isFilteredEmpty}
//             loading={loading}
//           />

//           {processedData.length > 0 && totalPages > 1 && (
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               setCurrentPage={setCurrentPage}
//               totalItems={totalItems}
//               startIndex={startIndex}
//               endIndex={endIndex}
//             />
//           )}
//         </div>
//       </div>

//       <TransactionDialog
//         open={isDialogOpen}
//         setOpen={setIsDialogOpen}
//         mode={mode}
//         initialData={selectedTransaction}
//         onSubmit={handleSubmit}
//       />
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { toast } from "sonner";
import HeadingSection from "@/components/layout/HeadingSection";
import { Button } from "@/components/ui/button";
import TransactionsTable from "@/components/transactions/TransactionsTable";
import TransactionsHeader from "@/components/transactions/TransactionsHeader";
import Pagination from "@/components/common/Pagination";
import TransactionDialog from "@/components/transactions/TransactionDialog";
import { getTransactions, setTransactionsToStorage } from "@/utility/storage";
import { Plus } from "lucide-react";

export default function Transactions() {
  const [transactions, setTransactions] = useState(getTransactions);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [loading, setLoading] = useState(true);

  const userRole =
    typeof window !== "undefined" ? localStorage.getItem("user_role") : null;
  const isAdmin = userRole === "Admin";

  useEffect(() => {
    setTransactionsToStorage(transactions);
  }, [transactions]);

  // Reset page on search/filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, typeFilter, sortBy, pageSize]);

  // ✅ FIX: remove artificial delay
  useEffect(() => {
    setLoading(false);
  }, []);

  const handleAddClick = () => {
    setMode("add");
    setSelectedTransaction(null);
    setIsDialogOpen(true);
  };

  const handleEditClick = (txn) => {
    setMode("edit");
    setSelectedTransaction(txn);
    setIsDialogOpen(true);
  };

  const handleSubmit = (data) => {
    if (mode === "add") {
      const newTxn = { ...data, id: Date.now() };
      setTransactions((prev) => [newTxn, ...prev]);
      toast.success("Transaction added successfully");
    } else {
      setTransactions((prev) =>
        prev.map((txn) =>
          txn.id === selectedTransaction.id ? { ...txn, ...data } : txn
        )
      );
      toast.success("Transaction updated successfully");
    }
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((txn) => txn.id !== id));
    toast.error("Transaction deleted");
  };

  // Processed data
  const processedData = transactions
    .filter((txn) =>
      txn.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((txn) => {
      if (typeFilter === "all") return true;
      return txn.type === typeFilter;
    })
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      if (sortBy === "amount") return b.amount - a.amount;
      return 0;
    });

  const totalPages = Math.ceil(processedData.length / pageSize);

  const paginatedData = processedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalItems = processedData.length;

  const startIndex =
    totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  const endIndex = Math.min(currentPage * pageSize, totalItems);

  // Fallback flags
  const hasData = transactions.length > 0;
  const isFilteredEmpty = processedData.length === 0 && hasData;

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* HEADER */}
      <HeadingSection
        heading="Transactions"
        subheading="Manage your income and expenses"
      >
        {isAdmin && (
          <Button
            onClick={handleAddClick}
            variant="outline"
            className="flex items-center gap-1"
          >
            <Plus size={16} />
            Add Transaction
          </Button>
        )}
      </HeadingSection>

      {/* CONTENT */}
      <div className="px-4 py-4 flex flex-col gap-6">
        <TransactionsHeader
          search={search}
          setSearch={setSearch}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />

        <div className="flex-1 pb-6">
          {/* Table */}
          <div className="overflow-x-auto">
            <TransactionsTable
              transactions={paginatedData}
              onEdit={handleEditClick}
              onDelete={handleDelete}
              hasData={hasData}
              isFilteredEmpty={isFilteredEmpty}
              loading={loading}
            />
          </div>

          {/* Pagination */}
          {processedData.length > 0 && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              totalItems={totalItems}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          )}
        </div>
      </div>

      <TransactionDialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        mode={mode}
        initialData={selectedTransaction}
        onSubmit={handleSubmit}
      />
    </div>
  );
}