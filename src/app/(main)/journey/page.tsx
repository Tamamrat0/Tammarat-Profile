"use client";
import { Fragment } from "react";

import { Separator } from "@/components/ui/separator";
import {
  Paragraph,
  Quote,
  SubHeading,
  Strong,
  ImageBlock,
} from "@/components/app-text";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Page() {
  const informationPage: InformationType[] = [
    {
      id: "intro",
      header: "Journey",
      headerEmoji: "🛤️",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            เส้นทางของผมไม่ได้เริ่มจากห้องเรียนโดยตรง — แต่มาจากความสงสัย
            ความอยากลอง และประสบการณ์จริงในแต่ละช่วงชีวิต
          </Paragraph>
          <Paragraph>
            จากเด็กที่ชอบแกะของเล่น แกะคอมพิวเตอร์ จนค่อย ๆ
            เติบโตมาเป็นคนที่พัฒนาโปรแกรมเพื่อแก้ปัญหาจริงให้ผู้ใช้งาน
          </Paragraph>
        </div>
      ),
    },
    {
      id: "start",
      header: "จุดเริ่มต้น",
      headerEmoji: "🧒",
      normalDetail: "เด็กซนที่อยากรู้ว่าของต่าง ๆ ทำงานยังไง",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            ตั้งแต่เด็ก ผมเป็นคนชอบแกะดูว่าสิ่งต่าง ๆ รอบตัวทำงานยังไง
            เวลาไปห้าง พี่ชายมักชวนผมสังเกตเรื่องเล็ก ๆ เช่น
            &ldquo;แคชเชียร์รับเงินก่อน หรือเปิดลิ้นชักก่อน&rdquo; หรือ
            &ldquo;เครื่องกดน้ำหยอดเหรียญทำงานยังไง&rdquo;
          </Paragraph>

          <Paragraph>
            ผมเล่นเกมพิมพ์ดีดแข่งกับพี่ชาย แพ้ตลอด แต่สิ่งที่ทำบ่อยที่สุดคือ{" "}
            <Strong>รื้อคอมพี่ชาย</Strong> รื้อรถบังคับ หรือแกะของต่าง ๆ
            เพื่อดูว่าข้างในมันทำงานยังไง
          </Paragraph>

          <Paragraph>
            ความชอบตรงนั้นทำให้ผมเริ่มซ่อมคอม ประกอบเครื่อง
            และวิเคราะห์อาการเสียได้ตั้งแต่ยังเด็ก
          </Paragraph>

          <Quote>
            ความซนในวันนั้น ค่อย ๆ กลายเป็นความอยากเข้าใจระบบในวันนี้
          </Quote>
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
            และเป็นครั้งแรกที่ผมได้เขียนโปรแกรมจริงจัง ด้วย{" "}
            <Strong>ASP.NET</Strong>
          </Paragraph>

          <Paragraph>
            ที่นั่น ผมได้ทำงานใกล้ชิดกับ{" "}
            <Strong>วิศวกรคอมพิวเตอร์ระดับปริญญาโท</Strong>{" "}
            ที่สอนผมตั้งแต่วิธีคิดโครงสร้าง Database, โครงสร้างโปรแกรม
            ไปจนถึงวิธีมองปัญหาเวลาเขียนระบบ
          </Paragraph>

          <Paragraph>มีประโยคหนึ่งที่ผมจำมาตลอด:</Paragraph>

          <Quote>
            &ldquo;เขียนโค้ดเนี่ยนะ ถ้าเราเรียนกับใคร
            เราก็จะลายมือเหมือนคนนั้นแหละ&rdquo;
          </Quote>

          <ImageBlock
            src="/images/intership1.webp"
            alt="แบบฟอร์มตรวจเช็คระบบ"
            caption="แบบฟอร์มตรวจเช็คระบบ"
          />
          <ImageBlock
            src="/images/intership2.webp"
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
      normalDetail: "บทเรียนจากการลองทำจริง · อายุ 19–20",
      customDetail: (
        <div className="mt-4 space-y-4">
          <Paragraph>
            หลังเรียนจบ ปวช. ผมตัดสินใจ <Strong>ไม่เรียนต่อ</Strong>{" "}
            เพราะตอนนั้นมั่นใจว่าตัวเองสามารถเรียนรู้และทำสิ่งต่าง ๆ
            ได้ด้วยตัวเอง
          </Paragraph>

          <Paragraph>
            ช่วงนั้นผมลองทำหลายอย่าง ทั้งโปรเจคเกม ธุรกิจเล็ก ๆ
            และงานที่เกี่ยวกับการเขียนโปรแกรม
            ซึ่งทำให้ผมได้เรียนรู้จากของจริงเยอะมาก
          </Paragraph>

          <SubHeading>ครั้งที่ 1: FiveM Server</SubHeading>

          <Paragraph>
            ผมเริ่มทำ FiveM Server กับพี่ชาย ตอนนั้นมีความมั่นใจมาก
            แต่พอมองย้อนกลับไป ผมยังเขียนโค้ดด้วยวิธี{" "}
            <Strong>
              ก็อปแล้วแก้ มากกว่าจะเข้าใจจริง ๆ ว่าฟังก์ชันรับค่าอะไร ส่งค่าอะไร
            </Strong>
          </Paragraph>

          <Paragraph>
            พอเจอปัญหาที่ซับซ้อนขึ้น ผมก็ไปต่อไม่ถูก สุดท้ายโปรเจคต้องหยุดไป
            แต่มันทำให้ผมเริ่มเห็นช่องว่างของตัวเองชัดขึ้น
          </Paragraph>

          <SubHeading>ครั้งที่ 2: Crypto Bomb & NFT Game Bot</SubHeading>

          <Paragraph>
            หลังจากนั้น ผมได้รับโอกาสร่วมงานกับทีมในช่วงที่{" "}
            <Strong>Crypto Bomb / NFT Game</Strong> กำลังเป็นกระแส
            โดยหัวหน้าทีมเป็น{" "}
            <Strong>CEO ของบริษัทน้ำดื่มแห่งหนึ่งในหาดใหญ่</Strong>
          </Paragraph>

          <Paragraph>
            ผมรับบทบาทเขียน <Strong>Auto-click Bot</Strong> สำหรับเกม NFT
            และร่วมลงทุนกับพี่ชายในวงเงิน{" "}
            <Strong>25,000 บาท ในสัดส่วน 40%</Strong>
          </Paragraph>

          <Paragraph>
            ตลอดช่วงนั้น ทีมของเราทำกำไรร่วมกันได้กว่า{" "}
            <Strong>100,000 บาท</Strong>{" "}
            และสิ่งที่ผมได้กลับมาไม่ใช่แค่เรื่องรายได้
            แต่เป็นบทเรียนเรื่องการทำงานเป็นทีมและการมองธุรกิจแบบเป็นระบบ
          </Paragraph>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
            <li>
              <Strong>การวางโครงสร้างธุรกิจ</Strong> แบ่งสัดส่วนหุ้นส่วน
              และแบ่งบทบาทหน้าที่ให้ชัดเจน
            </li>
            <li>
              <Strong>การทำ Roadmap</Strong> วางแผนเป็นไตรมาส
              นำกำไรกลับมาลงทุนต่อ และประเมินจังหวะการเติบโต
            </li>
            <li>
              <Strong>การตัดสินใจในช่วงเสี่ยง</Strong>{" "}
              เมื่อเริ่มเห็นสัญญาณว่าโปรเจค NFT หลายตัวเริ่มมีความไม่แน่นอน
              ทีมจึงตัดสินใจขายเหรียญทั้งหมดออกมา
            </li>
          </ul>

          <Paragraph>
            หลังจากนั้นไม่นาน มูลค่าเหรียญตกลงอย่างมาก
            ทำให้ผมได้เห็นความสำคัญของประสบการณ์ การประเมินความเสี่ยง
            และการตัดสินใจที่เด็ดขาดในเวลาที่เหมาะสม
          </Paragraph>

          <ImageBlock
            src="/images/nft1.webp"
            alt="ภาพ roadmap"
            caption="ภาพ roadmap"
          />
          <ImageBlock
            src="/images/nft2.webp"
            alt="ภาพหน้าจอเกม Crypto Bomb"
            caption="ภาพหน้าจอเกม Crypto Bomb"
          />

          <SubHeading>ครั้งที่ 3: FiveM Server อีกครั้ง</SubHeading>

          <Paragraph>
            ทีมเดิมจาก Crypto Bomb ได้กลับมาลองทำ FiveM Server อีกครั้ง
            คราวนี้จริงจังและเป็นระบบมากขึ้น โดยมีพี่ที่เป็น{" "}
            <Strong>Software Engineer</Strong> เข้ามาร่วมทีม
          </Paragraph>

          <Paragraph>
            พี่เขาช่วยสะท้อนกับทีมตรง ๆ ว่า
            ตอนนั้นผมยังมีพื้นฐานไม่มากพอที่จะพัฒนาระบบขนาดใหญ่ให้เสร็จได้ในเวลาที่เหมาะสม
            และถ้าฝืนทำต่อ อาจใช้ต้นทุนสูงเกินไป
          </Paragraph>

          <Paragraph>
            ตอนนั้นเป็นจุดที่ผมได้กลับมามองตัวเองจริงจัง
            ว่ายังมีอีกหลายเรื่องที่ต้องเรียนรู้ ทั้งพื้นฐานการเขียนโปรแกรม
            การออกแบบระบบ และการทำงานเป็นทีมในโปรเจคจริง
          </Paragraph>

          <Quote>
            ผมเริ่มเข้าใจว่า ความมั่นใจอย่างเดียวไม่พอ
            มันต้องมีพื้นฐานและประสบการณ์รองรับด้วย
          </Quote>

          <SubHeading>กลับสู่โลกความจริง — Customer Service</SubHeading>

          <Paragraph>
            หลังจากทุกอย่างจบลง ผมพักความฝันเรื่องการทำธุรกิจไว้ก่อน
            และเริ่มหางานประจำ จนได้ทำงานในตำแหน่ง{" "}
            <Strong>Customer Service</Strong> ที่โรงงานสติกเกอร์แห่งหนึ่ง
          </Paragraph>

          <Paragraph>
            ช่วงนั้นผมไม่ได้โฟกัสเรื่องเขียนโค้ดมากนัก
            แต่ทักษะด้านคอมพิวเตอร์ที่สะสมมาตั้งแต่เด็กยังช่วยผมได้เสมอ
            ทั้งการประกอบคอม จัดสเปค เช็คอาการเสีย และช่วยแก้ปัญหาหน้างาน
          </Paragraph>

          <Paragraph>
            ระหว่างทำงาน ผมเริ่มเขียน <Strong>VBA ใน Excel</Strong>{" "}
            เพื่อช่วยให้งานง่ายขึ้น เริ่มจากใช้เอง
            จนหัวหน้าแผนกเห็นและนำไปใช้ต่อ
          </Paragraph>

          <Paragraph>
            ผู้บริหารเห็นว่าผมใช้คอมพิวเตอร์ได้ดี สนใจระบบ
            และสามารถเขียนเครื่องมือเล็ก ๆ มาช่วยงานได้ แม้ตำแหน่ง IT
            จะยังไม่ว่าง เขาก็เปิดโอกาสให้ผมเข้าไปเรียนร่วมกับแผนก IT
            และที่ปรึกษาภายนอกในการใช้ <Strong>FileMaker Pro</Strong>{" "}
            ซึ่งเป็นโปรแกรมหลักขององค์กร
          </Paragraph>

          <Quote>
            นั่นเป็นครั้งแรกที่ผมได้เห็นว่า Internal System
            ในองค์กรจริงมีผลกับการทำงานของผู้ใช้มากแค่ไหน
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
            หลังออกจากโรงงานสติกเกอร์ ผมได้เข้ามาทำงานที่{" "}
            <Strong>Wann Cosmetics</Strong> ในตำแหน่ง IT Support
          </Paragraph>

          <Paragraph>
            ช่วงทดลองงาน ผมเริ่มจากการพิสูจน์ตัวเองด้วยสิ่งที่ถนัดที่สุดก่อน
            คือการดูแล Hardware ซ่อมและจัดสเปคเครื่อง ตอบปัญหา IT ของพนักงาน
            และเรียนรู้ระบบงานของบริษัทให้เร็วที่สุด
          </Paragraph>

          <Paragraph>
            ผลลัพธ์คือผม <Strong>ผ่านโปรในเวลา 1.5 เดือน</Strong> จากมาตรฐาน 3
            เดือน
          </Paragraph>

          <Paragraph>
            หลังผ่านโปร ผมเริ่มสังเกตว่า{" "}
            <Strong>ระบบเอกสารในแผนกยังใช้กระดาษ</Strong>{" "}
            ผมจึงเสนอหัวหน้าให้ลองเปลี่ยนเป็นระบบออนไลน์ เริ่มจากทำ Flowchart
            ออกแบบ Database และขอเวลาศึกษา Stack
            ที่เหมาะสมสำหรับพัฒนาเว็บแอปพลิเคชัน
          </Paragraph>

          <Paragraph>
            ผมเลือก <Strong>MERN Stack</Strong> และเริ่มเรียนจากคลิปของ Software
            Engineer ต่างประเทศ เพราะอยากฝึกวิธีเขียนที่เป็นระบบตั้งแต่ต้น
            โปรเจคแรกที่เรียนตามคือ <Strong>Realtime Chat</Strong> คลิปยาว 7
            ชั่วโมง ซึ่งผมใช้เวลาประมาณ 2 อาทิตย์หลังเลิกงาน
            เพราะหยุดทุกครั้งที่ไม่เข้าใจ แล้วไปหาคำตอบก่อนเดินต่อ
          </Paragraph>

          <Paragraph>
            หลังจากส่งโปรเจคแรก <Strong>Wann System v.1</Strong> สำเร็จ
            รูปแบบงานของผมก็เปลี่ยนไป
            องค์กรเริ่มเห็นโอกาสในการใช้ระบบเข้ามาช่วยงานมากขึ้น
            และผมก็ได้พัฒนาโปรแกรม รวมถึงทักษะของตัวเองต่อเนื่องจากงานจริง
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
                พัฒนา <Strong>Internal System</Strong> ที่มีผู้ใช้งานรวมมากกว่า
                50 คน
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
            ปีแรกที่ Wann มีการขึ้นระบบ SAP เป็นครั้งแรก ในช่วงที่ทีม Vendor
            เข้ามาติดตั้งระบบ ผมได้มีโอกาสพูดคุยและแลกเปลี่ยนความรู้กับทีมเขา
          </Paragraph>

          <Paragraph>
            เมื่อทีมเห็นว่าผมเขียนเว็บได้ เขาจึงชวนผมเข้าร่วมทีมพัฒนา{" "}
            <Strong>Interface เชื่อมต่อ SAP</Strong> ในส่วนของ WMS
          </Paragraph>

          <Paragraph>
            ผมตัดสินใจรับโอกาสนั้น แม้จะรู้ว่าเป็นงานที่ท้าทาย
            เพราะผมอยากเข้าใจระบบ ERP ระดับโลกอย่าง SAP ให้ลึกกว่าการ Support
            User ทั่วไป
          </Paragraph>

          <Paragraph>
            ตลอด 6 เดือน ผมได้ทำงานร่วมกับทีม Backend, ที่ปรึกษา และทีมขาย
            เพื่อพัฒนาระบบที่ช่วยให้ผู้ใช้ทำงานผ่านหน้าเว็บ และส่งข้อมูลกลับเข้า
            SAP ได้อัตโนมัติ
          </Paragraph>

          <Paragraph>
            ตอน Demo ระบบสามารถทำ Flow หลักได้ครบ ตั้งแต่รับสินค้าจาก Purchase
            Order, Transfer สินค้าผ่านหน้าเว็บ และสร้างเอกสารกลับเข้าไปใน SAP
            ซึ่งช่วยลดความจำเป็นในการซื้อ User เพิ่ม และลดต้นทุนให้ลูกค้าได้มาก
          </Paragraph>

          <Paragraph>
            โปรเจคได้รับการสนับสนุนจาก CEO ของ Vendor
            ให้มีโอกาสต่อยอดเป็นผลิตภัณฑ์ที่ขายคู่กับ SAP ได้
            และมีแนวคิดที่จะพัฒนาเป็นบริษัทลูกในอนาคต
          </Paragraph>

          <Paragraph>
            แต่โปรเจคต้องจบลงกะทันหัน เมื่อ{" "}
            <Strong>หัวหน้าทีมเสียชีวิตอย่างกะทันหัน</Strong>
          </Paragraph>

          <Paragraph>
            แม้โปรเจคจะไม่ได้ไปต่อ
            แต่ประสบการณ์ครั้งนั้นทำให้ผมได้เรียนรู้เรื่อง{" "}
            <Strong>SAP Integration</Strong>, การเชื่อมต่อระบบภายนอกกับ ERP,
            การทำงานร่วมกับทีมมืออาชีพ และการมองโอกาสทางธุรกิจจากปัญหาจริง
          </Paragraph>

          <Paragraph>
            ที่สำคัญคือมันทำให้ผมเข้าใจ SAP ลึกขึ้น ตั้งแต่โครงสร้างข้อมูล
            วิธีที่ ERP สื่อสารกับระบบภายนอก
            ไปจนถึงผลกระทบที่ระบบหนึ่งมีต่อการทำงานของทั้งองค์กร
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
            ตลอด 4 ปีที่ Wann ผมดูแล <Strong>Internal System</Strong> แบบ
            End-to-End ตั้งแต่การออกแบบ Database, พัฒนา Backend และ Frontend
            ไปจนถึงพัฒนา Satellite System ที่เชื่อมต่อกับ SAP Business One
          </Paragraph>

          <Paragraph>
            ผมยังได้ทำงานกับ Hardware Integration เช่น Flow Meter และเครื่องชั่ง
            ผ่าน Serial Communication เพื่อเชื่อมข้อมูลจากหน้างานเข้าสู่ระบบ
            ทำให้ผมได้เห็นภาพการทำงานตั้งแต่ต้นทางจนถึงการใช้งานจริง
          </Paragraph>

          <Paragraph>
            อีกด้านหนึ่ง ผมยังดูแลการ Support ผู้ใช้โดยตรง
            ซึ่งเป็นส่วนที่ผมชอบมาก เพราะได้ฟังปัญหาจริงจากผู้ใช้
            แล้วช่วยแก้หรือหาทางออกร่วมกัน
          </Paragraph>

          <Paragraph>
            ด้วยความที่เคยทำ Customer Service มาก่อน
            เลยคุ้นเคยกับการให้บริการและการคุยกับผู้คนอยู่แล้ว
            เวลาสื่อสารกับผู้ใช้เลยค่อนข้างเป็นธรรมชาติ
            และสามารถย่อยเรื่องเทคนิค หรืออธิบายระบบให้เข้าใจได้ง่ายขึ้น
          </Paragraph>

          <Paragraph>
            ช่วงหลัง ๆ จะมีผู้ใช้ที่ติดต่อเข้ามาหาผมโดยตรงบ้าง
            เพราะคุ้นเคยกันจากที่เคยช่วยแก้ปัญหาให้
          </Paragraph>

          <Quote>
            ผมอาจไม่ใช่ Dev ที่ <Strong>Code เก่งที่สุด</Strong> — แต่ผม{" "}
            <Strong>เข้าใจปัญหาของ User จริง ๆ</Strong>{" "}
            และพยายามแก้มันให้ใช้งานได้จริง
          </Quote>

          <Paragraph>
            วันนี้ผมกำลังมองหาโอกาสในตำแหน่ง{" "}
            <Strong>Full-Stack Developer</Strong>{" "}
            เพื่อได้เรียนรู้กับทีมที่เก่งขึ้น ทำงานกับระบบที่ท้าทายขึ้น
            และพัฒนาตัวเองจากประสบการณ์หน้างานจริงที่ผมมี
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
