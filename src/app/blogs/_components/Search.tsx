"use client";
import { Input } from "@/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = form.search.value.trim();

    const newParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    // e.currentTarget.reset();
  };

  return (
    <div>
      <form className="relative" onSubmit={handelSearch}>
        <Input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="جستجو..."
        />
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
          type="submit"
        >
          <SearchIcon className="text-gray-400" size="20" />
        </button>
      </form>
    </div>
  );
};
export default Search;
