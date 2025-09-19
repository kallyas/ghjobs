import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SearchForm({ params, onParamChange }) {
  const handleCheckboxChange = (e) => {
    const event = {
      target: {
        name: 'full_time',
        value: e.target.checked,
        type: 'checkbox'
      }
    };
    onParamChange(event);
  };

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
          <input
            type="checkbox"
            id="full-time"
            onChange={handleCheckboxChange}
            checked={params.full_time || false}
            name="full_time"
            className="h-4 w-4 rounded border border-input"
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
