import { Loader2 } from "lucide-react";

export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-gray-700" />
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}