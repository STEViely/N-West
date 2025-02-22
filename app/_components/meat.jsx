import one from "@/public/meatPics/one.jpg";
import two from "@/public/meatPics/two.jpg";
import three from "@/public/meatPics/three.jpg";
import four from "@/public/meatPics/four.jpg";
import five from "@/public/meatPics/five.jpg";
import six from "@/public/meatPics/six.jpg";
import MeatContainer from "./meatContainer";
export default function page() {
  const info = [
    {
      id: 1,
      title: "1. ลดแสงสะท้อนและตัดแสงยูวี",
      content:
        "สีฟ้าของกระจกช่วยลดการสะท้อนจากไฟหน้าของรถที่ขับตามหลัง โดยเฉพาะเวลากลางคืนช่วยลดความเมื่อยล้าของสายตาและเพิ่มความชัดเจนในการมองเห็น ",
      img: six,
    },

    {
      id: 2,
      title: "2. เพิ่มความคมชัด",
      content:
        "สีฟ้าช่วยลดการสะท้อนของแสงภายในกระจกเอง ทำให้ผู้ขับขี่มองเห็นภาพด้านหลังได้ชัดเจนมากขึ้น",
      img: two,
    },
    {
      id: 3,
      title: "3. ช่วยในการมองเห็นในทุกสภาพอากาศ",
      content: "มีสารเคลือบป้องกันน้ำ ทำให้น้ำฝนและคราบสกปรกเกาะกระจกได้น้อยลง",
      img: three,
    },
    {
      id: 4,
      title: "4. ป้องกันคราบน้ำและสิ่งสกปรก",
      content: "มีการเคลือบสารที่สะท้อนน้ำ เเละครามสกปรก",
      img: four,
    },
    {
      id: 5,
      title: "5. ความสวยงามและทันสมัย",
      content:
        "สีฟ้าบนกระจกมองข้างเพิ่มความสวยงามและลุคที่ดูพรีเมียมให้กับรถยนต์",
      img: five,
    },
    {
      id: 6,
      title: "6. กระจกเลนส์ไวด์ ",
      content: "เพิ่มมุมมองกว้างขึ้น ลดมุมอับสายตา ช่วยลดความเสี่ยงจากอุบัติเหตุ",
      img: one,
    },
  ];

  return (
    <div>
      <p className="text-white text-[18px] md:text-[22px] 2xl:text-[28px]  mt-4">กระจกมองข้างของรถยนต์ที่มีสีฟ้า (Blue Side Mirrors) เป็นกระจกที่ถูกออกแบบมาเพื่อเพิ่มความปลอดภัยและความสะดวกสบายในการขับขี่</p>
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
