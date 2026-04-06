import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRole } from "@/context/RoleContext";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import FullPageLoader from "@/components/layout/FullPageLoader";

const HeadingSection = ({ heading, subheading, children, isBack = false }) => {
  const navigate = useNavigate();

  const { role, setRole } = useRole();
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (newRole) => {
    setLoading(true);
    requestAnimationFrame(() => {
      setRole(newRole);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  };

  return (
    <>
      {loading && <FullPageLoader />}
      <div className="w-full flex flex-col px-0 pt-0">
        {/* TOP ROW: heading + dropdown */}
        <div className="w-full flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-4">

          {/* LEFT SIDE: Back button + Heading content */}
          <div className="flex items-center gap-3 min-w-0">
            {isBack && (
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="p-2 rounded-full hover:bg-gray-100 shrink-0"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </Button>
            )}

            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-gray-900 truncate">{heading}</h1>
              {subheading && (
                <p className="text-sm text-gray-500 mt-1 truncate">{subheading}</p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Role dropdown + children */}
          <div className="flex items-center gap-3 sm:justify-end shrink-0">
            {children}

            <Select value={role} onValueChange={handleRoleChange}>
              <SelectTrigger className="w-[160px] h-10 rounded-md">
                <SelectValue />
              </SelectTrigger>

              <SelectContent
                className="bg-white text-black rounded-md shadow-md"
                position="popper"
                align="end"
              >
                <SelectItem value="Viewer">Viewer</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* FULL WIDTH SEPARATOR */}
        <div className="w-full border-t border-black" />
      </div>
    </>
  );
};

export default HeadingSection;