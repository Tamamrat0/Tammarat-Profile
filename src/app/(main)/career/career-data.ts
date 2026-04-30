import { CareerItem } from "@/app/types/career-type";

export const CareerData: CareerItem[] = [
  {
    id: "1",
    companyName: "Wann Cosmetics & Laboratory Co., Ltd",
    companyLogo: "/images/logo-wann.svg",
    position: "IT Specialist (Internal System Developer)",
    period: { start: "Dec 2021", end: "Present" },
    jobExperience: [
      "พัฒนา Web Application สำหรับใช้งานจริงภายในองค์กร ครอบคลุมหลายแผนก โดยรับผิดชอบแบบ End-to-End ตั้งแต่เก็บ Requirement จากผู้ใช้งานหน้างาน ออกแบบโครงสร้างระบบและฐานข้อมูล ไปจนถึงการพัฒนาและปรับปรุงระบบอย่างต่อเนื่อง",
      "ออกแบบและพัฒนา RESTful API ด้วย Express.js และ NestJS ควบคู่กับ Frontend ด้วย React และ Next.js โดยเน้นความถูกต้องของข้อมูล ความปลอดภัย และประสบการณ์การใช้งานที่ตรงกับการทำงานจริง",
      "พัฒนาและทดสอบระบบรับข้อมูลจากอุปกรณ์ชั่งน้ำหนักและ Flow Meter ผ่าน Serial Communication (RS232/RS485) เข้าสู่ Web Application เพื่อใช้งานในกระบวนการผลิตภายในโรงงาน",
      "วิเคราะห์โครงสร้างฐานข้อมูลของ SAP Business One และออกแบบ Satellite System เพื่อเชื่อมต่อและเติมเต็ม Workflow ในส่วนที่ระบบ ERP หลักยังไม่ครอบคลุม",
      "ทำหน้าที่ Project Coordinator ในโครงการร่วมกับทีมพัฒนาภายนอก รับผิดชอบการรวบรวม Requirement วิเคราะห์กระบวนการทำงาน และประสานงานให้การพัฒนาสอดคล้องกับเป้าหมายขององค์กร",
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
