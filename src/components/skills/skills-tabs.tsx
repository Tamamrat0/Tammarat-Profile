import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Layout,
  Server,
  Database as DatabaseIcon,
  Plug,
  Wrench,
} from "lucide-react";

import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  integrationSkills,
  toolsSkills,
} from "./skills.data";
import SkillsTable from "./skills-table";
import { useState } from "react";

export function SkillsTabs() {
  const [selectTag, setSelectTag] = useState("frontend");
  return (
    <>
      <div className="w-full overflow-x-scroll overflow-y-hidden scrollbar-hide">
        <Tabs defaultValue="frontend" onValueChange={(e) => setSelectTag(e)}>
          <TabsList className="inline-flex gap-2 mt-2 whitespace-nowrap">
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              ส่วนติดต่อผู้ใช้
            </TabsTrigger>

            <TabsTrigger value="backend" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              ระบบเบื้องหลัง
            </TabsTrigger>

            <TabsTrigger value="database" className="flex items-center gap-2">
              <DatabaseIcon className="h-4 w-4" />
              ฐานข้อมูล
            </TabsTrigger>

            <TabsTrigger
              value="integration"
              className="flex items-center gap-2"
            >
              <Plug className="h-4 w-4" />
              การเชื่อมต่อระบบ
            </TabsTrigger>

            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              เครื่องมือ
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="w-full mt-4">
        {selectTag === "frontend" && <SkillsTable data={frontendSkills} />}
        {selectTag === "backend" && <SkillsTable data={backendSkills} />}
        {selectTag === "database" && <SkillsTable data={databaseSkills} />}
        {selectTag === "integration" && (
          <SkillsTable data={integrationSkills} />
        )}
        {selectTag === "tools" && <SkillsTable data={toolsSkills} />}
      </div>
    </>
  );
}
