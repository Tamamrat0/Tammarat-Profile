"use client";
import React, { Fragment } from "react";

import { Separator } from "@/components/ui/separator";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground text-base leading-relaxed text-pretty wrap-break-word">
      {children}
    </p>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-primary/40 bg-primary/5 pl-4 py-3 my-2 italic text-foreground/90 rounded-r">
      {children}
    </blockquote>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold mt-6 mb-2">{children}</h3>;
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-foreground font-semibold">{children}</strong>;
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-lg border bg-card p-4 text-center">
      <div className="text-3xl font-bold text-primary">{number}</div>
      <div className="text-sm text-muted-foreground mt-1 leading-snug">
        {label}
      </div>
    </div>
  );
}

export default function Page() {
  const informationPage: InformationType[] = [
    {
      id: "intro",
      header: "Journey",
      headerEmoji: "🛤️",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ทุกบรรทัดโค้ดที่ผมเขียนวันนี้
            ล้วนมีที่มาจากบทเรียนในแต่ละช่วงของชีวิต
          </Paragraph>
          <Paragraph>
            นี่คือเรื่องราวของผมตั้งแต่ความอยากรู้แรกในวัยเด็ก
            ว่าอะไรเป็นสิ่งที่ทำให้ผมสนใจการเป็น Developer
          </Paragraph>
        </div>
      ),
    },
    {
      id: "start",
      header: "จุดเริ่มต้น",
      headerEmoji: "🧒",
      normalDetail: "ลื้อคอม เพื่อเข้าใจระบบ",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ตั้งแต่เด็ก ผมชอบแกะดูว่าสิ่งต่าง ๆ รอบตัวทำงานยังไง
            พี่ชายชอบชวนผมเล่นเกมทายกัน &ldquo;แคชเชียร์รับเงินก่อน
            หรือเปิดลิ้นชักก่อน&rdquo; หรือ
            &ldquo;เครื่องกดน้ำหยอดเหรียญทำงานยังไง&rdquo;
          </Paragraph>
          <Paragraph>
            เล่นเกมพิมพ์ดีด และสิ่งที่ทำบ่อยที่สุดคือ{" "}
            <Strong>ลื้อคอมพี่ชาย</Strong> ลื้อรถบังคับ
            เพื่อดูว่าข้างในทำงานยังไง
          </Paragraph>
          <Paragraph>
            จนทำให้เป็นเด็กที่สนใจคอม และทำให้ซ่อมคอม ประกอบเครื่อง
            วิเคราะห์อาการเสียได้ตั้งแต่ยังเป็นเด็ก
          </Paragraph>

          <Quote>ความซน ความอยากรู้ คือสิ่งที่ผลักดันผมมาจนถึงทุกวันนี้</Quote>
        </div>
      ),
    },
    {
      id: "internship",
      header: "โค้ดตัวแรก",
      headerEmoji: "🎓",
      normalDetail: "ครูคนแรกของชีวิต · ฝึกงาน ปวช.",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ตอนฝึกงาน ปวช. ผมได้เข้าไปฝึกที่แผนก IT ของบริษัทอสังหาฯ แห่งหนึ่ง
            เป็นจุดที่ผมเริ่มเขียนโปรแกรมจริงจังเป็นครั้งแรก ด้วย{" "}
            <Strong>ASP.NET</Strong>
          </Paragraph>
          <Paragraph>
            ที่นั่น ผมได้ทำงานประกบคู่กับ{" "}
            <Strong>วิศวกรคอมพิวเตอร์ระดับปริญญาโท</Strong> ที่สอนผมแบบไม่กั๊ก
            สอนทั้งวิธีคิดโครงสร้าง Database, โครงสร้างโปรแกรม,
            และวิธีคิดเวลาเจอปัญหา
          </Paragraph>
          <Paragraph>พี่เขาเคยพูดประโยคหนึ่งที่ผมจำมาตลอด:</Paragraph>
          <Quote>
            &ldquo;เขียนโค้ดเนี่ยนะ ถ้าเราเรียนกับใคร
            เราก็จะลายมือคนนั้นแหละ&rdquo;
          </Quote>
        </div>
      ),
    },
    {
      id: "lessons",
      header: "ช่วงหัวเลี้ยวหัวต่อ",
      headerEmoji: "💥",
      normalDetail: "บทเรียนจากความมั่นใจเกินไป · อายุ 19–20",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            หลังเรียนจบ ปวช. ผมตัดสินใจ <Strong>ไม่เรียนต่อ</Strong>{" "}
            เพราะมั่นใจในตัวเองว่า &ldquo;ผมทำเองได้&rdquo;
          </Paragraph>
          <Paragraph>เริ่มจากความล้มเหลวสามครั้งซ้อน:</Paragraph>

          <SubHeading>ครั้งที่ 1: FiveM Server</SubHeading>
          <Paragraph>
            ผมเริ่มทำ FiveM Server กับพี่ชาย ด้วยความมั่นใจเต็มที่
            แต่ความจริงคือ ผมเขียนโค้ดด้วยการ{" "}
            <Strong>ก็อปแล้วแก้ ไม่ได้เข้าใจจริง ๆ</Strong>{" "}
            ว่าฟังก์ชันรับค่าอะไร ส่งค่าอะไร พอเจอปัญหาที่แก้ไม่ได้
            ก็ทำต่อไม่ออก สุดท้ายก็เจ๊ง
          </Paragraph>

          <SubHeading>ครั้งที่ 2: Crypto Bomb & NFT Game Bot</SubHeading>
          <Paragraph>
            หลังจากนั้น ผมได้รับโอกาสร่วมทำงานกับทีมในยุค{" "}
            <Strong>Crypto Bomb / NFT Game</Strong> ที่กำลังบูม หัวหน้าทีมคือ{" "}
            <Strong>CEO ของบริษัทน้ำดื่มแห่งหนึ่ง</Strong>{" "}
            ผู้ที่มีประสบการณ์ทำธุรกิจจริง
          </Paragraph>
          <Paragraph>
            ผมรับบทบาทเขียน <Strong>Auto-click Bot</Strong> สำหรับเกม NFT
            และร่วมลงทุนกับพี่ชายในวงเงิน <Strong>25,000 บาท</Strong>{" "}
            เพื่อเริ่มสร้างผลตอบแทน
          </Paragraph>
          <Paragraph>
            ตลอดช่วงนั้น เราทำกำไรร่วมกันได้กว่า <Strong>100,000 บาท</Strong>{" "}
            แต่สิ่งที่มีค่ามากกว่ากำไร คือ <Strong>บทเรียนทางธุรกิจ</Strong>{" "}
            ที่ผมได้รับจากพี่หัวหน้าทีม:
          </Paragraph>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
            <li>
              <Strong>การวางโครงสร้างธุรกิจ</Strong>{" "}
              และการแบ่งสัดส่วนหุ้นส่วนที่เป็นธรรม
            </li>
            <li>
              <Strong>การทำ Roadmap</Strong> ที่มี milestone ชัดเจน
            </li>
            <li>
              <Strong>การตัดสินใจในภาวะวิกฤต</Strong> — สิ่งที่ผมจดจำมากที่สุด
              ในช่วงปลายของยุค NFT เริ่มมีโปรเจคที่ <Strong>Rug Pull</Strong>{" "}
              กันเยอะ พี่หัวหน้าทีมตัดสินใจอย่างเด็ดขาดว่า —{" "}
              <Strong>&ldquo;ขายเหรียญออกทั้งหมด ไม่ต้องสนใจราคา&rdquo;</Strong>
            </li>
          </ul>
          <Paragraph>
            หลังจากนั้นไม่นาน มูลค่าเหรียญตกลงจนแทบไม่มีค่าเหลือ
            ในวันที่ทุกคนยังเชื่อในกระแส —
            ทีมเราออกได้ทันด้วยการตัดสินใจของคนที่มีประสบการณ์
          </Paragraph>

          <SubHeading>ครั้งที่ 3: FiveM Server (อีกครั้ง)</SubHeading>
          <Paragraph>
            ทีมเดิมจาก Crypto Bomb มาลงทุนทำ FiveM Server ต่อ
            คราวนี้เป็นทางการมากขึ้น แต่พี่ที่เป็น{" "}
            <Strong>Software Engineer ตัวจริง</Strong> เข้ามาในทีม
          </Paragraph>
          <Paragraph>
            พี่เขาคุยกับนายทุนตรง ๆ ว่า — <Strong>ผมยังไม่มีพื้นฐานพอ</Strong>{" "}
            ที่จะพัฒนาระบบขึ้นมาจริง ๆ ได้ ใช้เวลานานเกินไป ส่วนทีมการตลาดและทีม
            Operation ก็ยังเป็นแค่เด็ก ๆ ถ้าฝืนทำต่อมีแต่จะเสียเงินไปเปล่า ๆ
            ทำให้รู้ว่าที่ผ่านมา ผมแทบไม่เข้าใจอะไรเลย
          </Paragraph>
          <Paragraph>
            สุดท้าย ทีมก็แตกอีกครั้ง แต่คราวนี้ผมเข้าใจแล้วว่าทำไม
          </Paragraph>

          <Quote>ความมั่นใจโง่ ๆ มีแต่จะทำให้เสียหาย</Quote>

          <SubHeading>กลับสู่โลกความจริง — Customer Service</SubHeading>
          <Paragraph>
            หลังจากทุกอย่างจบลง ความฝันที่จะทำธุรกิจเองก็พักไว้ก่อน
            ผมเลยต้องหางานประจำ ได้เริ่มต้นใหม่ในตำแหน่ง{" "}
            <Strong>Customer Service</Strong> ที่โรงงานสติกเกอร์แห่งหนึ่ง
          </Paragraph>
          <Paragraph>
            ตอนนั้นผมไม่ได้สนใจเรื่องเขียนโค้ดเลย เพราะยังไม่มีแรงจูงใจ
            แต่สิ่งที่ผมเก่งมาตั้งแต่เด็กก็ยังอยู่ คือ{" "}
            <Strong>ฮาร์ดแวร์</Strong> ประกอบคอม ซ่อมเครื่อง จัดสเปค เช็คอาการ
            ทำได้สบายมาก
          </Paragraph>
          <Paragraph>
            ระหว่างทำ CS ผมเริ่มเขียน <Strong>VBA ใน Excel</Strong>{" "}
            เพื่อช่วยให้งานในแผนกเร็วขึ้น เริ่มจากใช้เอง
            จนหัวหน้าแผนกเห็นและเอาไปใช้ต่อ
          </Paragraph>
          <Paragraph>
            วันหนึ่ง บริษัทย้ายออฟฟิศ ผมไปช่วยทีม IT ขนคอม
            ผู้บริหารเห็นว่าผมทำงานคล่อง ชอบคอม แล้วก็เขียน VBA ได้ แม้ตำแหน่ง
            IT จะยังไม่ว่าง เขาก็ยังเปิดโอกาสให้ผม
          </Paragraph>
          <Paragraph>
            บริษัทใช้ <Strong>FileMaker Pro</Strong> เป็นระบบหลัก ผู้บริหารเรียก{" "}
            <Strong>ที่ปรึกษาภายนอก</Strong> เข้ามาสอนทีม IT ให้พัฒนาระบบเองได้
            และเขาให้ผมเข้าไปเรียนด้วย
          </Paragraph>
          <Quote>
            ที่นั่นแหละ คือที่ที่ผมเริ่มเห็นภาพ Internal System ในองค์กรจริง
          </Quote>
          <Paragraph>
            ประสบการณ์ครั้งนี้สำคัญมาก เพราะหลายปีต่อมา
            ผู้บริหารคนเดิมโทรกลับมาเสนองาน IT ให้ผมอีกครั้ง
          </Paragraph>
        </div>
      ),
    },
    {
      id: "wann",
      header: "เติบโต",
      headerEmoji: "🏭",
      normalDetail: "จุดเปลี่ยนที่ Wann · อายุ 21–ปัจจุบัน",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            หลังออกจากโรงงานสติกเกอร์ ผมได้เข้ามาที่{" "}
            <Strong>Wann Cosmetics</Strong> ในตำแหน่ง IT Support
          </Paragraph>
          <Paragraph>
            วันแรกที่สัมภาษณ์ ผู้บริหารถามผมตรง ๆ ว่า{" "}
            <Strong>&ldquo;เขียนโปรแกรมได้ไหม?&rdquo;</Strong>{" "}
            ผมรู้สึกได้เลยว่าที่นี่เปิดโอกาสให้คนเขียนโปรแกรม
          </Paragraph>
          <Paragraph>
            ช่วงทดลองงาน ผมพิสูจน์ตัวเองด้วยสิ่งที่ตัวเองถนัดที่สุดก่อน
            คือเรื่อง Hardware ซ่อมและจัดสเปคเครื่อง ตอบปัญหา IT
            ของพนักงานได้เร็ว รวมถึงเรียนรู้ระบบงานของบริษัทได้ไวกว่ามาตรฐาน
          </Paragraph>
          <Paragraph>
            ทำให้ผม <Strong>ผ่านโปรในเวลา 1.5 เดือน</Strong> จากมาตรฐาน 3 เดือน
          </Paragraph>
          <Paragraph>
            หลังผ่านโปร ผมเริ่มสังเกตว่า{" "}
            <Strong>ระบบเอกสารในแผนกยังใช้ Microsoft Access</Strong>{" "}
            ผมเลยขออนุญาตหัวหน้าเสนอเปลี่ยนระบบ ทำ Flowchart ออกแบบ Database
            และเลือก MERN Stack ที่ทันสมัย หัวหน้าไฟเขียว ผมเลยขอเวลาศึกษา Stack
            1 เดือน
          </Paragraph>
          <Paragraph>
            โปรเจคแรกที่ผมเขียนคือ <Strong>Realtime Chat ตามคลิปฝรั่ง</Strong>{" "}
            คลิปยาว 7 ชั่วโมง ผมใช้เวลาดู 2 อาทิตย์
            เพราะหยุดทุกครั้งที่ไม่เข้าใจ ไปขุด why ก่อนเดินต่อ
          </Paragraph>
          <Paragraph>
            ครั้งนี้ผมตั้งใจเรียนเขียนโค้ดจริงจังเป็นครั้งแรก เลือกเรียนกับ{" "}
            <Strong>Software Engineer ตัวจริง</Strong> จากต่างประเทศ ไม่เอา
            tutorial ผิว ๆ เพราะผมยังจำคำของพี่ที่เคยสอนได้ว่า{" "}
            &ldquo;ถ้าเราเรียนกับใคร เราก็จะเหมือนคนนั้นแหละ&rdquo;
          </Paragraph>
          <Paragraph>
            ผมมีทุนเดิมอยู่: พื้นฐาน <Strong>โครงสร้าง Database</Strong>{" "}
            ที่ได้จากตอนฝึกงาน ปวช. และความเข้าใจ{" "}
            <Strong>Internal System</Strong> จากประสบการณ์ FileMaker Pro
            ที่ผ่านมา
          </Paragraph>
          <Paragraph>
            ทุกวันหลังเลิกงาน 18:00 ผมเรียนต่อที่บ้านจนถึง 23:00 ทั้งหมดนั้น
            ผมทำในขณะที่ตำแหน่งจริงคือ <Strong>IT Support</Strong>{" "}
            และไม่มีใครสั่งให้ทำ
          </Paragraph>
          <div className="mt-2">
            <p className="text-foreground font-medium mb-2">ผลลัพธ์คือ:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-base leading-relaxed">
              <li>
                ขยับเป็น <Strong>IT Specialist</Strong> ภายใน 2 ปี
              </li>
              <li>
                ได้รับ <Strong>รางวัลพนักงานดีเด่น</Strong>
              </li>
              <li>
                สร้าง <Strong>ระบบ Internal</Strong>{" "}
                ที่ทุกแผนกในบริษัทใช้งานจริงทุกวัน
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "sap",
      header: "โอกาสที่เกือบเปลี่ยนชีวิต",
      headerEmoji: "🤝",
      normalDetail: "SAP Interface Project · ปีแรกที่ Wann",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ปีแรกที่ Wann เราขึ้นระบบ SAP เป็นครั้งแรก ในจังหวะที่ทีม Vendor
            เข้ามาติดตั้งระบบ ผมได้แลกเปลี่ยนความรู้กับทีมเขา
            และเขาเห็นว่าผมเขียนเว็บได้ จึงชวนผมเข้าทีมพัฒนา{" "}
            <Strong>Interface เชื่อมต่อ SAP</Strong> ในส่วน WMS + QC
          </Paragraph>
          <Paragraph>
            ผมรับโอกาสนั้น แม้ทุกคนจะเตือนว่าเสี่ยง
            แต่ผมเห็นโอกาสในการได้เรียนรู้ &ldquo;ไส้ใน&rdquo; ของโปรแกรม ERP
            ระดับโลกอย่าง SAP
          </Paragraph>
          <Paragraph>
            ตลอด 6 เดือน ผมทำงานร่วมกับ Backend ส่งข้อมูลกันผ่าน API พร้อม JSON
            Docs จนได้รับการสนับสนุนจาก CEO ของ Vendor
            ที่ตั้งใจจะให้เราเป็นบริษัทลูก
          </Paragraph>
          <Paragraph>
            แต่แล้วทุกอย่างก็จบลงในวันที่{" "}
            <Strong>หัวหน้าทีมจากไปอย่างกระทันหัน</Strong>{" "}
            โปรเจคนั้นจบลงที่ตรงนั้น
          </Paragraph>
          <Quote>
            สิ่งที่ผมเสียดายไม่ใช่โปรเจค — แต่คือคนเก่งมาก ๆ ที่ผมได้รู้จัก
          </Quote>
          <Paragraph>
            แต่บทเรียนเรื่อง <Strong>SAP Integration</Strong>{" "}
            การทำงานกับทีมระดับมืออาชีพ และความกล้าที่จะเดิมพันกับโอกาส
            ก็ยังอยู่กับผมจนถึงวันนี้
          </Paragraph>
          <Paragraph>
            ที่สำคัญคือทำให้ผมเข้าใจ SAP ลึกกว่าการ Support User ทั่วไป
            เพราะได้เห็น &ldquo;ไส้ใน&rdquo; ของระบบจริง ๆ
            ตั้งแต่โครงสร้างข้อมูล ไปจนถึงวิธีที่ ERP สื่อสารกับระบบภายนอก
          </Paragraph>
        </div>
      ),
    },
    // {
    //   id: "stats",
    //   header: "ตัวเลขที่บอกเล่าเรื่องราว",
    //   headerEmoji: "📊",
    //   normalDetail: "สรุป metric สำคัญตลอดเส้นทาง",
    //   customDetail: (
    //     <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
    //       <StatCard number="4+" label="ปี Full-Stack ที่ Wann" />
    //       <StatCard number="3+" label="Internal Systems ที่ใช้งานจริง" />
    //       <StatCard number="6" label="เดือน SAP Integration" />
    //       <StatCard number="1.5" label="เดือนผ่านโปร (vs 3 มาตรฐาน)" />
    //       <StatCard number="1" label="รางวัลพนักงานดีเด่น" />
    //       <StatCard number="100K+" label="บาท กำไรจาก NFT Bot (ROI 100%+)" />
    //     </div>
    //   ),
    // },
    {
      id: "now",
      header: "ปัจจุบัน",
      headerEmoji: "🚀",
      normalDetail: 'Full-Stack Developer ที่เชื่อใน "ปัญหาจริง"',
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ตลอด 4 ปีที่ Wann ผมรับผิดชอบ <Strong>Internal System</Strong> แบบ
            End-to-End ตั้งแต่ออกแบบ Database, พัฒนา Backend ด้วย Express.js /
            NestJS, Frontend ด้วย React / Next.js ไปจนถึงพัฒนา{" "}
            <Strong>Satellite System</Strong> เชื่อมต่อ SAP Business One และ
            Integrate Hardware (Flow Meter, เครื่องชั่ง) ผ่าน Serial
            Communication
          </Paragraph>
          <Paragraph>
            ในโครงการล่าสุด ผมรับบทบาท <Strong>Project Coordinator</Strong>{" "}
            ในโปรเจค WannSmart ทำงานร่วมกับทีมพัฒนาภายนอก ตั้งแต่เก็บ
            Requirement → ออกแบบ Flow → ส่งต่อทีม Backend → ติดตามจนส่งมอบ
          </Paragraph>
          <Paragraph>วันนี้ผมมั่นใจว่า:</Paragraph>
          <Quote>
            <Strong>Developer ที่ดี ไม่ใช่แค่คนที่ Code เก่ง</Strong> —
            แต่ต้องเข้าใจ &ldquo;ปัญหาจริง&rdquo; ที่ต้องการแก้ไขด้วย
          </Quote>
          <Paragraph>
            ตอนนี้ผมพร้อมที่จะ <Strong>ก้าวผ่านตัวเองไปอีกขั้น</Strong> —
            อยากเข้าไปอยู่ในทีมที่เก่ง ที่ร่วมกันสร้างสิ่งที่ยิ่งใหญ่ได้
          </Paragraph>
          <Paragraph>
            ผมอยากใช้ความเข้าใจเรื่อง <Strong>ERP</Strong> และ{" "}
            <Strong>ธุรกิจ</Strong> ที่สะสมมา เพื่อร่วมส่งมอบ Product ที่{" "}
            <Strong>ใช้งานง่าย</Strong>, <Strong>แก้ปัญหาได้จริง</Strong> และ{" "}
            <Strong>มีต้นทุนที่เหมาะสม</Strong> —
            เพื่อประโยชน์สูงสุดของทั้งทีมและลูกค้า
          </Paragraph>
        </div>
      ),
    },
  ];

  const sectionIds = informationPage.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds, 200);

  return (
    <div className="flex w-full py-4">
      {/* Content */}
      <main className="flex-1 min-h-screen px-6 w-full sm:w-208">
        <div className="flex flex-col gap-3 mb-8">
          {informationPage.map((item, index) => (
            <Fragment key={item.id}>
              <section id={item.id} className="scroll-mt-28">
                <h1 className="text-3xl font-semibold flex items-center gap-4">
                  {item.headerIcon && <item.headerIcon />}
                  {item.headerEmoji && <p>{item.headerEmoji}</p>}
                  <p>{item.header}</p>
                </h1>
                {item.normalDetail && (
                  <p className="text-muted-foreground text-base leading-relaxed mt-2">
                    {item.normalDetail}
                  </p>
                )}
                {item.customDetail && (
                  <div className="">{item.customDetail}</div>
                )}
              </section>
              {index !== informationPage.length - 1 && (
                <Separator className="my-8" />
              )}
            </Fragment>
          ))}
        </div>
      </main>

      {/* TOC */}
      <aside className="hidden sm:block w-54 relative">
        <div className="sticky top-29">
          <p className="text-sm font-medium">ในหน้านี้</p>

          <nav className="mt-4 space-y-2 text-sm">
            {informationPage.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.header}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
}
