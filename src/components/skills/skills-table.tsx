import { SkillTableItem, SkillLevel } from "@/app/types/skills-type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function LevelRender({ level }: { level: SkillLevel }) {
  const levels: Record<SkillLevel, number> = {
    low: 1,
    mid: 2,
    high: 3,
  };

  const activeBars = levels[level];

  const barHeights = ["h-2", "h-3", "h-4"];

  const activeColors: Record<number, string> = {
    1: "bg-blue-400", // ต่ำ
    2: "bg-yellow-400", // กลาง
    3: "bg-green-500", // สูง
  };

  return (
    <div className="flex items-end gap-1 h-4">
      {[1, 2, 3].map((bar, index) => (
        <span
          key={bar}
          className={`
            w-1 rounded-sm
            ${barHeights[index]}
            ${bar <= activeBars ? activeColors[activeBars] : "bg-muted"}
          `}
        />
      ))}
    </div>
  );
}

export default function SkillsTable({ data }: { data: SkillTableItem[] }) {
  return (
    <Table className="w-full ">
      <TableHeader>
        <TableRow>
          <TableHead>Skill</TableHead>
          <TableHead>ระดับ</TableHead>
          <TableHead>โปรเจคที่ใช้</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>
              <LevelRender level={row.level} />
            </TableCell>
            <TableCell>{row.projects}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
