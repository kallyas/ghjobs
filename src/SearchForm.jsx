import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function SearchForm({ params, onParamChange }) {
  return (
    <div className="mb-8 p-6 border rounded-lg bg-card">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            onChange={onParamChange}
            value={params.description || ""}
            name="description"
            type="text"
            placeholder="e.g. React Developer"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            onChange={onParamChange}
            value={params.location || ""}
            name="location"
            type="text"
            placeholder="e.g. New York"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="full-time"
            onChange={onParamChange}
            checked={params.full_time || false}
            name="full_time"
          />
          <Label
            htmlFor="full-time"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Only Full Time
          </Label>
        </div>
      </div>
    </div>
  );
}
