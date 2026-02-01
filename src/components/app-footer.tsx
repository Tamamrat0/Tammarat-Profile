import React from "react";
import { Github, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-360 px-6 pt-12 pb-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* ตัวตน */}
          <div className="space-y-3">
            <p className="text-lg font-semibold">ธรรมรัตน์ มนตรี</p>
          </div>

          {/* เนื้อหา */}
          <div className="space-y-3">
            <p className="text-sm font-medium">เนื้อหา</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>แนะนำตัว</li>
              <li>สกิล</li>
              <li>ประสบการณ์ทำงาน</li>
              <li>โปรเจค</li>
            </ul>
          </div>

          {/* ติดต่อ */}
          <div className="space-y-3">
            <p className="text-sm font-medium">ติดต่อ</p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/Tamamrat0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="tel:0639414052"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  063-941-4052
                </a>
              </li>

              <li>
                <a
                  href="mailto:tammarat.m123@gmail.com"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  tammarat.m123@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://line.me/ti/p/~tammaratpleum99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Image
                    src="/icons/line01.png"
                    alt="LINE"
                    width={16}
                    height={16}
                    className="rounded-sm"
                  />
                  @tammaratpleum99
                </a>
              </li>
            </ul>
          </div>

          {/* คำอธิบาย */}
          <div className="space-y-3">
            <p className="text-sm font-medium">เกี่ยวกับเว็บไซต์</p>
            <p className="text-sm text-muted-foreground">
              เว็บไซต์นี้จัดทำขึ้นเพื่อแสดงประสบการณ์
              และผลงานด้านการพัฒนาระบบงานจริง สำหรับใช้งานในองค์กร
            </p>
          </div>
        </div>

        {/* ล่างสุด */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ธรรมรัตน์ มนตรี. สงวนลิขสิทธิ์
        </div>
      </div>
    </footer>
  );
}
