import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Filters() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // State for form values
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");

  // Initialize state from URL params on component mount
  useEffect(() => {
    const sort = searchParams.get("sort") || "";
    const order = searchParams.get("order") || "";

    setSelectedSort(sort);
    setSelectedOrder(order);
  }, [searchParams]);

  const updateURLParams = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedSort) {
      params.set("sort", selectedSort);
    } else {
      params.delete("sort");
    }

    if (selectedOrder) {
      params.set("order", selectedOrder);
    } else {
      params.delete("order");
    }

    // Navigate to the new URL with updated parameters
    navigate(`?${params.toString()}`);
  };

  const clearFilters = () => {
    setSelectedSort("");
    setSelectedOrder("");

    // Remove all filter parameters from URL
    const params = new URLSearchParams(searchParams.toString());
    params.delete("sort");
    params.delete("order");

    navigate(`?${params.toString()}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-7 gap-1">
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Filter
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
          <DialogDescription>
            Filter and sort your artilces based on the parameters and criteria
            provided.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Sort</Label>
              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort</SelectLabel>
                    <SelectItem value="createdAt">Date Created</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Order</Label>
              <Select value={selectedOrder} onValueChange={setSelectedOrder}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Order by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Order</SelectLabel>
                    <SelectItem value="desc">Descending</SelectItem>
                    <SelectItem value="asc">Ascending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter className="gap-2 mt-2">
          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={updateURLParams}>Apply Filters</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
