import { CareerItem } from "@/app/types/career-type";

export const CareerData: CareerItem[] = [
  {
    id: "1",
    companyName: "Wann Cosmetics & Laboratory Co., Ltd",
    companyLogo: "/images/logo-wann.svg",
    position: "IT Specialist (Internal System Developer)",
    period: { start: "Dec 2022", end: "Present" },
    jobExperience: [
      "สร้างและพัฒนา Internal Web Application 3 ระบบ (WannSystem v.1, v.2, WannSmart) ที่พนักงานในองค์กรใช้งานจริงทุกวัน ครอบคลุมหลายแผนก แทนระบบเดิมและเติมเต็ม Workflow ที่ SAP Business One ไม่ครอบคลุม",
      "รับผิดชอบงานแบบ End-to-End ตั้งแต่เก็บ Requirement จากผู้ใช้งานหน้างาน ออกแบบ Database Architecture พัฒนา Backend ด้วย Express.js / NestJS และ Frontend ด้วย React / Next.js พร้อมจัดทำเอกสารตามมาตรฐาน ISO",
      "วิเคราะห์โครงสร้างฐานข้อมูลของ SAP Business One และออกแบบ Satellite System เพื่อเชื่อมต่อและเติมเต็ม Workflow ในส่วนที่ระบบ ERP หลักยังไม่ครอบคลุม",
      "พัฒนาและทดสอบระบบรับข้อมูลจากอุปกรณ์ชั่งน้ำหนักและ Flow Meter ผ่าน Serial Communication (RS232/RS485) เข้าสู่ Web Application เพื่อใช้งานในกระบวนการผลิตภายในโรงงาน",
      "ทำหน้าที่ Project Coordinator ในโครงการ WannSmart ร่วมกับทีมพัฒนาภายนอก รับผิดชอบการรวบรวม Requirement วิเคราะห์กระบวนการทำงาน และประสานงานให้การพัฒนาสอดคล้องกับเป้าหมายขององค์กร",
      "ทำงานร่วมกับ Backend Developer ในการพัฒนา WannSystem v.2 โดยรับผิดชอบฝั่ง Frontend",
      "ตั้งค่า CI/CD Pipeline ด้วย GitHub Actions และ Vercel เพื่อ Deploy ระบบอัตโนมัติ",
      "ประยุกต์ใช้ AI Tools เป็นเครื่องมือเสริมในกระบวนการพัฒนา",
      "ดูแลและสนับสนุนการใช้งาน SAP Business One ในระดับผู้ใช้งาน วิเคราะห์ปัญหา และประสานงานกับซัพพลายเออร์เพื่อแก้ไขให้สอดคล้องกับกระบวนการขององค์กร",
    ],
    jobSuccess: [
      {
        id: "1",
        imagePath: "/images/success_2024.webp",
        detail: "ได้รับรางวัลพนังงานดีเด่นประจำปี 2024",
      },
    ],
    projects: ["1", "2", "3"],
  },
];
