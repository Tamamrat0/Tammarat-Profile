"use client";
import React, { Fragment } from "react";

import { Separator } from "@/components/ui/separator";
import { ImagePreview } from "@/components/app-image-preview";
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

function ImageBlock({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-2">
      <ImagePreview src={src} alt={alt} />
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
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
            สิ่งที่ผมเป็นทุกวันนี้ ไม่ได้มาจากห้องเรียน —
            มาจากแต่ละช่วงชีวิตที่ผ่านมา
          </Paragraph>
          {/* <Paragraph>
            นี่คือเรื่องราวตั้งแต่เด็กที่ชอบแกะของ จนกลายมาเป็น Dev คนนี้
          </Paragraph> */}
        </div>
      ),
    },
    {
      id: "start",
      header: "จุดเริ่มต้น",
      headerEmoji: "🧒",
      normalDetail: "เด็กซนมือบอน",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ตั้งแต่เด็ก ผมชอบแกะดูว่าสิ่งต่าง ๆ รอบตัวทำงานยังไง
            พี่ชายชอบชวนทายกันตอนไปห้าง &ldquo;แคชเชียร์รับเงินก่อน
            หรือเปิดลิ้นชักก่อน&rdquo; หรือ
            &ldquo;เครื่องกดน้ำหยอดเหรียญทำงานยังไง&rdquo;
          </Paragraph>
          <Paragraph>
            เล่นเกมพิมพ์ดีดแข่งกับพี่ชาย (แพ้ตลอด) และสิ่งที่ทำบ่อยที่สุดคือ{" "}
            <Strong>ลื้อคอมพี่ชาย</Strong> ลื้อรถบังคับ —
            เพื่อดูว่าข้างในทำงานยังไง
          </Paragraph>
          <Paragraph>
            นั่นทำให้ผมซ่อมคอมได้ ประกอบเครื่องได้
            วิเคราะห์อาการเสียได้ตั้งแต่ยังเป็นเด็ก
          </Paragraph>

          <Quote>ความซน ความอยากรู้ — มันผลักผมมาจนถึงวันนี้</Quote>
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
          <ImageBlock
            src="/images/intership1.png"
            alt="แบบฟอร์มตรวจเช็คระบบ"
            caption="แบบฟอร์มตรวจเช็คระบบ"
          />
          <ImageBlock
            src="/images/intership2.png"
            alt="ใบประเมินผลการอบรม"
            caption="ใบประเมินผลการอบรม"
          />
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
          <Paragraph>นี้คือสิ่งที่ผมทำ</Paragraph>

          <SubHeading>ครั้งที่ 1: FiveM Server</SubHeading>
          <Paragraph>
            ผมเริ่มทำ FiveM Server กับพี่ชาย ด้วยความมั่นใจเต็มที่
            แต่ความจริงคือ ผมเขียนโค้ดด้วยการ{" "}
            <Strong>
              ก็อปแล้วแก้ ไม่ได้เข้าใจจริง ๆ ว่าฟังก์ชันรับค่าอะไร ส่งค่าอะไร
            </Strong>{" "}
            พอเจอปัญหาที่แก้ไม่ได้ ก็ทำต่อไม่ออก สุดท้ายก็เจ๊ง
          </Paragraph>

          <SubHeading>ครั้งที่ 2: Crypto Bomb & NFT Game Bot</SubHeading>
          <Paragraph>
            หลังจากนั้น ผมได้รับโอกาสร่วมทำงานกับทีมในยุค{" "}
            <Strong>Crypto Bomb / NFT Game</Strong> ที่กำลังบูม หัวหน้าทีมคือ{" "}
            <Strong>CEO ของบริษัทน้ำดื่มแห่งหนึ่งในหาดใหญ่</Strong>{" "}
          </Paragraph>
          <Paragraph>
            ผมรับบทบาทเขียน <Strong>Auto-click Bot</Strong> สำหรับเกม NFT
            และร่วมลงทุนกับพี่ชายในวงเงิน{" "}
            <Strong>25,000 บาท ในสัดส่วน 40%</Strong>{" "}
          </Paragraph>
          <Paragraph>
            ตลอดช่วงนั้น เราทำกำไรร่วมกันได้กว่า <Strong>100,000 บาท</Strong>{" "}
            การทำงานร่วมกันครั้งนี้ทำให้ผมได้เรียนรู้{" "}
            <Strong>บทเรียนทางธุรกิจ</Strong> ที่ผมได้รับจากพี่หัวหน้าทีม:
          </Paragraph>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
            <li>
              <Strong>การวางโครงสร้างธุรกิจ</Strong> และการแบ่งสัดส่วนหุ้นส่วน
              แบ่งบทบาทหน้าที่
            </li>
            <li>
              <Strong>การทำ Roadmap</Strong> วางแผน 2 ไตรมาส
              นำกำไรจากฟาร์มกลับมาลงทุนต่อเรื่อยๆ แล้วค่อยปันผล
              โดยตั้งเป้าทำรายไตรมาสถัดไปเดือนละ 1 ล้านบาท
            </li>
            <li>
              <Strong>การตัดสินใจ</Strong> ในช่วงปลายของยุค NFT เริ่มมีโปรเจคที่{" "}
              <Strong>Rug Pull</Strong> กันเยอะ พี่หัวหน้าทีมตัดสินใจ
              ขายเหรียญทั้งหมด โดยไม่ต้องสนใจราคา
              {/* <Strong>&ldquo;ขายเหรียญออกทั้งหมด ไม่ต้องสนใจราคา&rdquo;</Strong> */}
            </li>
          </ul>
          <Paragraph>
            หลังจากนั้นไม่นาน มูลค่าเหรียญตกลงจนแทบไม่มีค่าเหลือ
            ทีมเราออกได้ทันด้วยการตัดสินใจของคนที่มีประสบการณ์
          </Paragraph>
          <ImageBlock
            src="/images/nft1.png"
            alt="ภาพ roadmap"
            caption="ภาพ roadmap"
          />
          <ImageBlock
            src="/images/nft2.png"
            alt="ภาพหน้าจอเกม Crypto Bomb"
            caption="ภาพหน้าจอเกม Crypto Bomb"
          />

          <SubHeading>ครั้งที่ 3: FiveM Server (อีกครั้ง)</SubHeading>
          <Paragraph>
            ทีมเดิมจาก Crypto Bomb มาลงทุนทำ FiveM Server ต่อ
            คราวนี้เป็นทางการมากขึ้น แต่มีการเพิ่มพี่ที่เป็น{" "}
            <Strong>Software Engineer ตัวจริง</Strong> เข้ามาในทีม
          </Paragraph>
          <Paragraph>
            พี่เขาคุยกับนายทุนตรง ๆ ว่า — <Strong>ผมยังไม่มีพื้นฐานพอ</Strong>{" "}
            ที่จะพัฒนาระบบขึ้นมาจริง ๆ ได้ ใช้เวลานานเกินไป ส่วนทีมการตลาดและทีม
            Operation ก็ยังเป็นแค่เด็ก ๆ ถ้าฝืนทำต่อมีแต่จะเสียเงินไปเปล่า ๆ
            ทำให้รู้ว่าที่ผ่านมา ผมแทบไม่เข้าใจอะไรเลย
          </Paragraph>
          <Paragraph>
            สุดท้าย ทีมก็แตกอีกครั้ง แต่คราวนี้มันทำให้ผมเข้าใจและมองตัวเองใหม่
          </Paragraph>

          <Quote>ความมั่นใจผิด ๆ มีแต่จะทำให้เสียหาย</Quote>

          <SubHeading>กลับสู่โลกความจริง — Customer Service</SubHeading>
          <Paragraph>
            หลังจากทุกอย่างจบลง ความฝันที่จะทำธุรกิจเองก็พักไว้ก่อน
            ผมเลยต้องหางานประจำ ได้เริ่มต้นใหม่ในตำแหน่ง{" "}
            <Strong>Customer Service</Strong> ที่โรงงานสติกเกอร์แห่งหนึ่ง
          </Paragraph>
          <Paragraph>
            ตอนนั้นผมไม่ได้สนใจเรื่องเขียนโค้ดเลย เพราะยังไม่มีแรงจูงใจ
            แต่สิ่งที่ผมเก่งมาตั้งแต่เด็กก็ยังอยู่ คือ มีสกิลการใช้คอมเก่ง
            ประกอบคอม จัดสเปค เช็คอาการ ทำได้สบายมาก
          </Paragraph>
          <Paragraph>
            ระหว่างทำงานผมก็มีเขียน <Strong>VBA ใน Excel</Strong>{" "}
            เพื่อช่วยให้ทำให้งานง่ายขึ้น เริ่มจากใช้เอง
            จนหัวหน้าแผนกเห็นและเอาไปใช้ต่อ
          </Paragraph>
          <Paragraph>
            ผู้บริหารเห็นว่าผม ใช้คอมพิวเตอร์ได้ดี ชอบคอม แล้วก็เขียน VBA
            ช่วยแผนกได้ แม้ตำแหน่ง IT จะยังไม่ว่าง เขาก็ยังเปิดโอกาสให้ผม
            ให้เข้าไปเรียนร่วมกับแผนก IT กับที่ปรึกษาภายนอก ในการใช้{" "}
            <Strong>FileMaker Pro</Strong> เป็นโปรแกรมหลักขององค์กร
            เพื่อให้สามารถพัฒนาต่อยอดได้
          </Paragraph>

          <Quote>
            ครั้งแรกที่ผมได้เห็นว่า Internal System ในองค์กรจริงมันเป็นยังไง
          </Quote>
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
          {/* <Paragraph>
            วันแรกที่สัมภาษณ์ ผู้บริหารถามผมตรง ๆ ว่า{" "}
            <Strong>&ldquo;เขียนโปรแกรมได้ไหม?&rdquo;</Strong>{" "}
            ผมรู้สึกได้เลยว่าที่นี่เปิดโอกาสให้คนเขียนโปรแกรม
          </Paragraph> */}
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
            <Strong>ระบบเอกสารในแผนกยังใช้กระดาษ</Strong>{" "}
            ผมเลยขออนุญาตหัวหน้าเสนอเปลี่ยนระบบ ทำ Flowchart ออกแบบ Database,
            หลังจากหัวหน้าไฟเขียว ผมเลยขอเวลาศึกษา Stack 1 เดือน
          </Paragraph>
          <Paragraph>
            ผมเลือก <Strong>MERN Stack</Strong> แล้วหาคลิปจาก Software Engineer
            ฝรั่งตัวจริง เพราะอยากได้รูปแบบการเขียนที่ดีตั้งแต่ต้น
            โปรเจคแรกที่เรียนตามคือ <Strong>Realtime Chat</Strong> คลิปยาว 7
            ชั่วโมง ผมใช้เวลา 2 อาทิตย์ดูหลังเลิกงาน
            เพราะหยุดทุกครั้งที่ไม่เข้าใจ แล้วไปขุด why ก่อนเดินต่อ
          </Paragraph>
          <Paragraph>
            หลังจากที่ส่งโปรเจคแรก Wann System v.1 สำเร็จ หน้างานผมก็เปลี่ยนไป
            องค์กรมีความคาดหวังโปรแกรมมากขึ้น
            และผมก็ได้พัฒนาโปรแกรมและทักษะมาเรื่อย ๆ
          </Paragraph>
          <div className="mt-2">
            <p className="text-foreground font-medium mb-2">ผลลัพธ์คือ:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-base leading-relaxed">
              <li>
                ขยับเป็น <Strong>IT Support Specialist</Strong> ภายใน 2 ปี
              </li>
              <li>
                ได้รับ <Strong>รางวัลพนักงานดีเด่นประจำปี 2024</Strong>
              </li>
              <li>
                สร้าง <Strong>ระบบ Internal</Strong> ที่มีผู้ใช้งานรวมมากกว่า 50
                คน
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
      normalDetail: "SAP Interface Project · ปี 2022",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ปีแรกที่ Wann เราขึ้นระบบ SAP เป็นครั้งแรก ในจังหวะที่ทีม Vendor
            เข้ามาติดตั้งระบบ ผมได้แลกเปลี่ยนความรู้กับทีมเขา
            และเขาเห็นว่าผมเขียนเว็บได้ จึงชวนผมเข้าทีมพัฒนา{" "}
            <Strong>Interface เชื่อมต่อ SAP</Strong> ในส่วน WMS
          </Paragraph>
          <Paragraph>
            ผมตัดสินใจรับโอกาสนั้น แม้ทุกคนจะเตือนว่าเสี่ยง
            แต่ผมเห็นโอกาสในการได้เรียนรู้ &ldquo;ไส้ใน&rdquo; ของโปรแกรม ERP
            ระดับโลกอย่าง SAP
          </Paragraph>
          <Paragraph>
            ตลอด 6 เดือน ผมทำงานร่วมกับทีม Backend, ที่ปรึกษา และเซลล์
          </Paragraph>
          <Paragraph>
            ตอน Demo โปรแกรมทำได้ครบ — รับสินค้าจาก Purchase Order, Transfer
            สินค้าผ่านหน้าเว็บ และสร้างเอกสารกลับเข้าไปใน SAP ได้อัตโนมัติ
            ลูกค้าที่ซื้อ SAP ไม่ต้องซื้อ User เพิ่ม ประหยัดต้นทุนได้เยอะมาก
          </Paragraph>
          <Paragraph>
            เราได้รับการสนับสนุนจาก CEO ของ Vendor
            ให้เราเอาโปรแกรมนี้ไปขายคู่กับ SAP ได้เลย โดยที่จะยังไม่เก็บ 15%
            ในช่วงแรก และตั้งใจจะให้เราเป็นบริษัทลูก
          </Paragraph>
          <Paragraph>
            แต่โปรเจคก็จบลงกะทันหัน เมื่อ{" "}
            <Strong>หัวหน้าทีม(เซลล์)เสียชีวิตอย่างกระทันหัน</Strong>
          </Paragraph>
          {/* <Quote>
            สิ่งที่ผมเสียดายไม่ใช่โปรเจค — แต่คือคนเก่งมาก ๆ ที่ผมได้รู้จัก
          </Quote> */}
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
    {
      id: "now",
      header: "ปัจจุบัน",
      headerEmoji: "🚀",
      normalDetail: 'Full-Stack Developer ที่เชื่อใน "ปัญหาจริง"',
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ตลอด 4 ปีที่ Wann ผมรับผิดชอบ <Strong>Internal System</Strong> แบบ
            End-to-End ตั้งแต่ออกแบบ Database, พัฒนา Backend และ Frontend
            ไปจนถึงพัฒนา Satellite System เชื่อมต่อ SAP Business One และ
            Integrate Hardware (Flow Meter, เครื่องชั่ง) ผ่าน Serial
            Communication
          </Paragraph>
          <Paragraph>
            นอกจากเขียนโค้ด ผมยังดูแลการ support ผู้ใช้โดยตรง —
            ช่วยแก้ปัญหาหน้างานและให้คำแนะนำเวลาติดขัด
          </Paragraph>
          {/* <Paragraph>วันนี้ผมมั่นใจว่า:</Paragraph> */}
          <Quote>
            ผมอาจไม่ใช่ Dev ที่ <Strong>Code เก่งที่สุด</Strong> — แต่ผม
            <Strong>เข้าใจปัญหาของ user จริงๆ</Strong> และแก้มันได้
          </Quote>
          <Paragraph>
            วันนี้ผมพร้อมแล้วที่จะก้าวผ่านตัวเองให้เติบโตไปอีกขั้น
            เข้าไปเรียนรู้กับคนที่เก่งกว่า ในโปรเจคที่ท้าทายกว่าเดิม
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
