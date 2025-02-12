import one from "@/public/meatPics/one.jpg";
import two from "@/public/meatPics/two.jpg";
import three from "@/public/meatPics/three.jpg";
import four from "@/public/meatPics/four.jpg";
import five from "@/public/meatPics/five.jpg";
import six from "@/public/meatPics/six.jpg";
import seven from "@/public/meatPics/seven.jpg";
import MeatContainer from "./meatContainer";
export default function page() {
  const info = [
    {
      id: 1,
      title: "1. ลดแสงสะท้อนและตัดแสงยูวี",
      content:
        "สีฟ้าของกระจกช่วยลดการสะท้อนจากไฟหน้าของรถที่ขับตามหลัง และมีคุณสมบัติช่วยลดการส่งผ่านรังสี UV ซึ่งปกป้องดวงตาและลดผลกระทบจากแสงแดด ",
      img: two,
    },

    {
      id: 3,
      title: "3. เพิ่มความคมชัด",
      content:
        "สีฟ้าช่วยลดการสะท้อนของแสงภายในกระจกเอง ทำให้ผู้ขับขี่มองเห็นภาพด้านหลังได้ชัดเจนมากขึ้น",
      img: three,
    },
    {
      id: 4,
      title: "4. ช่วยในการมองเห็นในทุกสภาพอากาศ",
      content: "มีสารเคลือบป้องกันน้ำ ทำให้น้ำฝนและคราบสกปรกเกาะกระจกได้น้อยลง",
      img: four,
    },
    {
      id: 5,
      title: "5. ป้องกันคราบน้ำและสิ่งสกปรก",
      content: "มีการเคลือบสารที่สะท้อนน้ำ เเละครามสกปรก",
      img: five,
    },
    {
      id: 6,
      title: "6. ความสวยงามและทันสมัย",
      content:
        "สีฟ้าบนกระจกมองข้างเพิ่มความสวยงามและลุคที่ดูพรีเมียมให้กับรถยนต์",
      img: six,
    },
    {
      id: 7,
      title: "7. กระจกเลนส์ไวด์ ",
      content: "เพิ่มมุมมองกว้างขึ้น ลดมุมอับสายตา",
      img: seven,
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
