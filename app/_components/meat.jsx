import square from "@/public/square.png";
import MeatContainer from "./meatContainer";
export default function page() {
  const info = [
    {
      id: 1,
      title: "1. ลดแสงสะท้อนจากไฟหน้ารถ (Anti-glare)",
      content:
        "สีฟ้าของกระจกช่วยลดการสะท้อนจากไฟหน้าของรถที่ขับตามหลัง โดยเฉพาะในช่วงเวลากลางคืนช่วยลดความเมื่อยล้าของสายตาและเพิ่มความชัดเจนในการมองเห็น",
      img: square,
    },
    {
      id: 2,
      title: "2. ตัดแสงยูวี (UV Protection)",
      content:
        "กระจกมองข้างที่เคลือบสีฟ้ามักมีคุณสมบัติช่วยลดการส่งผ่านรังสี UV ซึ่งปกป้องดวงตาและลดผลกระทบจากแสงแดดจ้าที่สะท้อนเข้ามา",
      img: square,
    },

    {
      id: 3,
      title: "3. เพิ่มความคมชัด (Enhanced Clarity)",
      content:
        "สีฟ้าช่วยลดการสะท้อนของแสงภายในกระจกเอง ทำให้ผู้ขับขี่มองเห็นภาพด้านหลังได้ชัดเจนมากขึ้น",
      img: square,
    },
    {
      id: 4,
      title: "4. ช่วยในการมองเห็นในทุกสภาพอากาศ",
      content:
        "บางรุ่นมาพร้อมกับสารเคลือบป้องกันน้ำ (Hydrophobic Coating) ทำให้น้ำฝนและคราบสกปรกเกาะกระจกได้น้อยลง ช่วยให้มองเห็นได้ชัดเจนแม้ในขณะที่ฝนตก",
      img: square,
    },
    {
      id: 5,
      title: "5. ป้องกันคราบน้ำและสิ่งสกปรก",
      content: "เว็บที่มีฟังก์ชันซับซ้อน คล้ายกับแอปพลิเคชัน ",
      img: square,
    },
    {
      id: 6,
      title: "6. ความสวยงามและทันสมัย",
      content:
        "สีฟ้าบนกระจกมองข้างเพิ่มความสวยงามและลุคที่ดูพรีเมียมให้กับรถยนต์",
      img: square,
    },

    {
      id: 7,
      title: "Realtime Chat",
      content: "ระบบแชทที่สามารถพูดคุยโต้ตอบได้เเบบเรียลไทม์",
      img: square,
    },
    {
      id: 8,
      title: "Responsive",
      content:
        "เว็บไซต์ของคุณจะสามารถทำงานได้บนทุกอุปกรณ์ได้อย่างสวยงามตามความต้องการของคุณ",
      img: square,
    },
  ];

  return (
    <div>
      {info.map((el, index) => (
        <MeatContainer
          key={el.id}
          title={el.title}
          content={el.content}
          img={el.img}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
