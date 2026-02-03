import { ProjectItem } from "@/app/types/project-type";

export const ProjectData: ProjectItem[] = [
  {
    id: "1",
    name: "WannSystem v.1",
    description:
      "ระบบภายในองค์กรที่พัฒนาขึ้นแบบ End-to-End โดยรับผิดชอบการออกแบบและพัฒนาทั้งระบบเพียงผู้เดียว ครอบคลุมงานแจ้งซ่อม ข้อร้องเรียน และการสนับสนุนการทำงานของแผนกการตลาด เพื่อแก้ปัญหาการสื่อสารและการจัดการงานภายในองค์กรในระยะเริ่มต้น",
    techStack: ["React", "Antd", "Tailwind", "ExpressJS", "Mssql"],
    overview: [""],
    role: [""],
    background: [""],
    problem: [""],
    link: "",
    attachments: [{ imagePath: "", detail: "" }],
  },
  {
    id: "2",
    name: "WannSystem v.2",
    description:
      "พัฒนาต่อยอดจาก WannSystem v.1 โดยออกแบบใหม่เพื่อรองรับการใช้งานในระดับ Internal System อย่างเต็มรูปแบบ ทำงานร่วมกับทีม Backend โดยรับผิดชอบฝั่ง Frontend ทั้งหมด เน้นการปรับปรุงโครงสร้างระบบ การจัดการสิทธิ์ผู้ใช้งานแบบละเอียด (User Permission) การตั้งค่าการแจ้งเตือนแบบกำหนดผู้ส่ง–ผู้รับ การแจ้งเตือนแบบ Real-time และการจัดเก็บ Log ที่มีรายละเอียดมากขึ้น เพื่อเพิ่มความยืดหยุ่น ความปลอดภัย และการตรวจสอบย้อนหลังของระบบ",
    techStack: ["NextJS", "Shadcn", "Tailwind", "NestJS", "Mssql"],
    overview: [""],
    role: [""],
    background: [""],
    problem: [""],
    link: "",
    attachments: [{ imagePath: "", detail: "" }],
  },
  {
    id: "3",
    name: "WannSmart",
    description:
      "ระบบเสริมเพื่อเติมเต็มความสามารถที่ SAP Business One ยังไม่ครอบคลุม โดยรับบทบาทเป็นผู้ประสานงานและควบคุมโครงการ (Project Coordinator / PM) ตั้งแต่การเก็บ Requirement สรุปความต้องการผู้ใช้ ประสานงานกับทีมพัฒนาภายนอก ติดตามความคืบหน้า จัดประชุมประจำสัปดาห์ และรวบรวม Feedback จากผู้ใช้งานเพื่อนำไปปรับปรุงระบบ",
    techStack: [],
    overview: [""],
    role: [""],
    background: [""],
    problem: [""],
    link: "",
    attachments: [{ imagePath: "", detail: "" }],
  },
];
