import React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Inbox, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function AppNav() {
  return (
    <div className="flex w-full items-center h-14 justify-between bg-sidebar border-b sticky top-0 z-50">
      <div className="max-w-360 flex w-full mx-auto px-4 items-center justify-between">
        <span className="text-xl font-semibold">WAREHOUSE</span>
        <div className="flex items-center gap-2">
          <InputGroup className="w-60">
            <InputGroupInput
              id="inline-start-input"
              className="text-sm"
              placeholder="ค้นหา..."
            />
            <InputGroupAddon align="inline-start">
              <SearchIcon className="text-muted-foreground " />
            </InputGroupAddon>
          </InputGroup>
          <Button variant="default">
            <Inbox /> จดหมาย
          </Button>
        </div>
      </div>
    </div>
  );
}
