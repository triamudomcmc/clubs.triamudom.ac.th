export interface Review {
  profileURL: string
  name: string
  contact: string
  year: string
  reviewText: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface PositionData {
  mainImgURL: string
  nameEN: string
  nameTH: string
  count: string
  foreword: string
  job_description: string[]
  requirements: string[]
  note?: string
  FAQ: FAQ[]
  reviews: Review[]
}

export const Positions: Record<string, PositionData> = {
  GeneralCommittee: {
    mainImgURL: "/assets/images/placeholder/position.jpg",
    nameEN: "General Committee",
    nameTH: "กรรมการกลาง",
    count: "4-6",
    foreword:
      "A group of incredibly versatile people who can do just about anything. Each of them possesses their own precious and unique masteries: legal consultant, musical play actor, master of ceremonies, film director, businesswoman and content creator just to name a few.",
    job_description: [
      "ประสานงานภายใน กช. และกับนักเรียน ชมรม หน่วยงานต่าง ๆ ในโรงเรียน",
      "ทำงานต่าง ๆ ตามที่ได้รับมอบหมาย"
    ],
    requirements: [
      "เป็นนักเรียนชั้น ม.4 หรือ ม.5 ในปีการศึกษา 2565",
      "มีมนุษยสัมพันธ์ที่ดี สามารถติดต่อประสานงานระหว่างบุคคลหรือหน่วยงานต่าง ๆ ได้",
      "มีทัศนคติเชิงบวกในการทำงาน",
      "สามารถทำงานเป็นทีม แก้ไขปัญหาเฉพาะหน้าและบริหารจัดการเวลาได้อย่างมีประสิทธิภาพ",
      "มี Hard Skill ที่สามารถพัฒนาและนำไปใช้ในการทำงานได้"
    ],
    FAQ: [
      {
        question: "ในปีการศึกษาที่ผ่านมา กรรมการได้รับมอบหมายงานอะไรบ้าง ?",
        answer:
          "งานที่ได้รับจะมีความหลากหลายและแตกต่างกันไปตามสถานการณ์ ยกตัวอย่างการจัดงาน Open House ในปี 2020-2022 ที่ผ่านมา กรรมการกลางมีหน้าที่กำกับรายการสด ควบคุมภาพ เสียง และเนื้อหาที่ออกอากาศ,  ออกแบบมุมกล้อง, จัดตารางเวลารายการสด, จัดทำแผนผังงาน, พิสูจน์อักษรและตรวจสอบข้อมูลคอนเทนต์ต่าง ๆ ของชมรม, ประสานงานกับสายการเรียน ประธานชมรมและครูที่ปรึกษา, วางแผนกิจกรรมร่วมกับสมาชิกในองค์กร และอื่น ๆ อีกมากมาย"
      },
      {
        question: "งานของกรรมการกลางง่ายที่สุดไหม มีเวลาว่างมากกว่าตำแหน่งอื่นรึเปล่า ?",
        answer:
          "เนื่องจากเราทำงานเป็นองค์กร ทำให้ทุกตำแหน่งมีงานของตัวเองอยู่ตลอด ความยาก-ง่ายก็จะเปลี่ยนกันไปตามงานต่าง ๆ ที่ได้รับมอบหมาย"
      },
      {
        question: "ใช้เกณฑ์อะไรในการคัด เพราะกรรมการกลางไม่ได้มีหน้าที่หรือทักษะที่ชัดเจนเหมือนตำแหน่งอื่น ?",
        answer:
          "ทัศนคติของผู้สมัครต่อการทำงานในการพัฒนาองค์กร, ความกระตือรือร้นในการคิดริเริ่มสร้างสรรค์ ที่สำคัญคือ <b>“hard skill และ soft skill”</b> ของผู้สมัคร ซึ่งถือเป็นความ unique ของผู้สมัครแต่ละคน"
      },
      {
        question: "Hard Skills และ Soft Skills คืออะไร ?",
        answer:
          "<b>“Hard Skills”</b> คือทักษะและความที่รู้ที่ใช้ในการทำงาน สามารถเรียนรู้ ฝึกฝนและสอนกันได้ สามารถวัดผลได้ชัดเจน เช่น Project Management, Administration, Negotiation, People Management, Marketing, Data Analysis, Law, Finance, Design, Video Editing และอื่น ๆ อีกมากมาย<br /><br /><b>”Soft Skills”</b> คือทักษะการเข้าสังคม เป็นทักษะที่ติดตัวมาแต่เกิดหรือได้มาจากการฝึกฝนที่ยาวนาน เช่น การปรับตัวเข้ากับสังคม การทำงานภายใต้แรงกดดัน ความคิดสร้างสรรค์ ฯลฯ"
      },
      {
        question: "กรรมการกลางเป็นตำแหน่งที่รับเข้ามาหลายคน แล้วเวลาทำงานจะลำบากหรือไม่ ?",
        answer:
          "หลังจากที่ประชุมสรุปงานกันแล้ว ส่วนมากจะแบ่งงานกันตามความถนัดของแต่ละคน พอแบ่งงานกันแล้วถ้าใครมีปัญหาก็ช่วยเหลือกันได้"
      }
    ],
    reviews: [
      {
        profileURL: "/assets/images/positions/GeneralCommittee/review-64.jpg",
        contact: "IG: charmingten",
        name: "ท๊อปเทน",
        reviewText:
          "“กรรมการกลาง” ตำแหน่งที่ตอบยากที่สุดเวลามีคนถามว่าทำหน้าที่อะไร เพราะตำแหน่งเราไม่มีหน้าที่ชัดเจนตายตัว แต่ถ้าบอกให้ทำอะไรต้องสามารถทำได้ทุกอย่าง5555 หลัก ๆ พวกเราจะเป็นคนคอยวางแผนและออกไอเดียในการประชุม คอยประสานงานระหว่างหน่วยงานทั้งในและนอกองค์กร รวมถึงงานอื่น ๆ เช่น การออกแบบ mini game ในเว็บไซต์ การวาง storyboard และกำกับการถ่ายคลิปวิดีโอที่ฉายในงาน Triam Udom Online Open House ทุกงานต้องดึงเอา soft skills และ hard skills ออกมาใช้อย่างเต็มที่ จนบางทีต้องประชุมติดกันหลายชั่วโมง เรียกได้ว่าเป็นงานที่หนักและเหนื่อยมาก ๆ แต่การได้มาทำงานในตรงนี้ มันก็ทำให้เราเติบโตขึ้น เราได้พัฒนาในหลายทักษะ เราตัดสินใจได้เด็ดขาดมากขึ้น เรารู้วิธีรับมือกับคนหลากหลายรูปแบบ เราทำงานได้ภายใต้ความกดดัน และที่สำคัญที่สุดเลยคือมิตรภาพดี ๆ ที่ได้กลับมา เพราะเรามีกันแค่ 12 คน เวลาเกิดอะไรขึ้นก็ต้องผ่านมันไปด้วยกัน ปลอบกันในวันที่ร้องไห้ ฉลองกันในวันที่มีความสุข รู้ตัวอีกทีทุกคนก็กลายมาเป็นคนสำคัญในชีวิตเราไปแล้ว555555 เรียกได้ว่าทุกวินาทีในฐานะ กช. มันสนุกและมีค่ามากจริง ๆ กล้าพูดได้เลยว่าไม่เคยเสียใจเลยซักครั้งที่ได้มาเป็น กช. ก็สำหรับใครที่สนใจก็อยากให้ลองมาสมัครดูนะคะ รับรองว่านี่จะเป็นประสบการณ์ที่ประทับใจและหาไม่ได้จากที่อื่น",
        year: "กช.64"
      }
    ]
  },
  Secretary: {
    mainImgURL: "/assets/images/placeholder/position.jpg",
    nameEN: "Secretary",
    nameTH: "เลขานุการ",
    count: "1",
    foreword:
      "Someone who excels at writing paper documents. Their worktable typically gets covered by enormous piles of paperwork.",
    job_description: [
      "ดูแลและรับผิดชอบงานเอกสารทั้งหมดของ กช.",
      "ทำสรุปประชุมกับประธานชมรมและหน่วยงานต่าง ๆ ในโรงเรียน",
      "ทำงานร่วมกันกับกรรมการกลาง"
    ],
    requirements: [
      "เป็นนักเรียนชั้น ม.4 หรือ ม.5 ในปีการศึกษา 2565",
      "มีความสามารถและชี่ยวชาญในการใช้โปรแกรม Microsoft Word, Google Docs, Google Sheets, Google Slides, Excel ฯลฯ ในการจัดทำสรุปและจัดทำเอกสารอย่างน้อย 1 โปรแกรม",
      "สามารถพิสูจน์อักษรและใช้ภาษาไทยได้เป็นอย่างดี",
      "มีทักษะในการสื่อสารและเลือกใช้ระดับภาษาให้เหมาะสมกับงานและบุคคล",
      "ละเอียด รอบคอบ สามารถแก้ไขปัญหาเฉพาะหน้าได้ดี"
    ],
    FAQ: [
      {
        question: "เลขานุการต้องทำหน้าที่อะไรบ้าง ?",
        answer:
          "เลขานุการจะดูแลและรับผิดชอบงานเอกสารต่าง ๆ ของ กช. และจะต้องทำสรุปประชุมกับประธานชมรมและหน่วยงานต่าง ๆ ในโรงเรียน โดยจะทำงานร่วมกันกับกรรมการกลางเป็นหลัก"
      },
      {
        question: "ไม่เคยทำงานเอกสารแบบจริง ๆ จัง ๆ มาก่อน แต่พอมีพื้นฐาน จะทำงานเลขานุการได้ไหม ?",
        answer:
          "ได้ เพราะพื้นฐานสามารถนำไปต่อยอดได้หากมีความตั้งใจที่อยากจะเข้ามาทำจริง ๆ แต่หากเคยมีประสบการณ์โดยตรงมาก่อน ทาง กช. จะพิจารณาเป็นพิเศษ"
      }
    ],
    reviews: [
      {
        profileURL: "/assets/images/positions/Secretary/review-64.jpg",
        contact: "IG: noodeendd",
        name: "หนูดี",
        reviewText:
          "คนอาจจะมองว่างานตำแหน่งเลขาเป็นงานน่าเบื่อ วัน ๆ ก็อยู่แต่กับเอกสาร เราก็เคยคิดแบบนั้นเหมือนกัน จนได้เข้ามาทำงานในตำแหน่งนี้จริง ๆ ก็ทำให้ได้รู้ว่างานเอกสารเป็นงานที่ต้องใช้ความละเอียดแต่ไม่น่าเบื่อนะ มันเป็นงานที่ดูเหมือนจะง่ายแต่ก็ไม่ง่าย มีอะไรชาเลนจ์เราตลอดเวลา เป็นงานที่ต้องใช้ประสาทสัมผัสทั้ง 5 ประชุมทีตาต้องดู ปากต้องพูด หูก็ต้องฟังเนื้อหา สมองต้องสรุปเนื้อหาทั้งหมดให้ออกมาเข้าใจง่ายที่สุด ส่วนมือก็ต้องพิมพ์สิ่งที่สมองกรองออกมาให้ถูก format ถูกอักขระ ตอนแรก ๆ ที่เข้ามาทำก็โอ๊ยย ยาก ทำเอกสารทีก็นานเป็นวัน ๆ แก้เอกสารเป็นสิบรอบ ก็ยังไม่ถูกสักที แต่พอได้เรียนรู้ไปเรื่อย ๆ ฝึกไปเรื่อย ๆ มันก็ทำให้คล่องขึ้นโดยที่เราไม่รู้ตัว เราจะค่อย ๆ ซึมซับสกิลไป หลังเข้ามาทำตำแหน่งนี้แล้วก็กลายเป็นคนชอบจัดผิดไปเลย55555  มันจะขัดใจเวลาเห็นงานอะไรที่พิมพ์ผิด ไม่ถูกอักขระ ไม่ได้จัดหน้า จัด format เห็นแล้วอยากจะเข้าไปช่วยจัดให้ อะไรประมาณนั้น55555 เลขานุการเป็นงานที่จะทำให้เราเป็นคนละเอียดและคิดประมวลผลเป็นระบบมากขึ้น ใครที่อยากพัฒนาสกิลในส่วนนี้ก็ลองมาสมัครดูนะ สกิลนี้สามารถนำไปปรับใช้ได้ทั้งชีวิตจริง ๆ เรารอเจอเลขาฯ 65 เจออยู่นะะ !",
        year: "กช.64"
      }
    ]
  },
  Cameraman: {
    mainImgURL: "/assets/images/placeholder/position.jpg",
    nameEN: "Cameraman",
    nameTH: "ช่างกล้อง",
    count: "1",
    foreword: "ค่อยคิดคำโปรย",
    job_description: ["เป็นช่างกล้องถ่ายคลิปวิดีโอ และผู้จัดทำคลิปวิดีโอของ กช.", "ทำงานร่วมกับกรรมการกลาง"],
    requirements: [
      "เป็นนักเรียนชั้น ม.4-6 ในปีการศึกษา 2565",
      "มีความสามารถในการถ่ายภาพนิ่งและวิดีโอด้วยกล้องดิจิทัล และตัดต่อคลิปวิดีโอเป็นอย่างดี",
      "มีความยืดหยุ่น สามารถสละเวลาส่วนตัวเพื่อมาออกกองบ่อย ๆ ได้"
    ],
    FAQ: [
      {
        question: "ถนัดถ่ายภาพแค่แขนงใดแขนงหนึ่ง (ภาพนิ่ง หรือวิดีโอ) หรือไม่ถนัดการตัดต่อวิดีโอ สามารถมาสมัครได้ไหม ?",
        answer:
          "สมัครได้ ! เพราะนอกเหนือจากผลงานและความสามารถในการถ่ายภาพแล้ว เราจะพิจารณาองค์ประกอบอื่นของผู้สมัครด้วย เช่น ทัศนคติ มนุษยสัมพันธ์ ความยืดหยุ่นในการทำงาน ฯลฯ"
      },
      {
        question: "ช่างกล้องทำอะไรบ้าง ?",
        answer:
          "ลักษณะงานจะค่อนข้างยืดหยุ่น ขึ้นอยู่กับแต่ละปี แต่งานหลัก ๆ ที่จะต้องทำก็คือการจัดทำวิดีโอสำหรับงาน Triam Udom Open House และเก็บบรรยากาศภาพของงานที่จัดโดย กช. ​(เช่น PAE,​ Triam Udom Open House) โดยสามารถสร้างสรรค์ผลงานวิดีโอขึ้นมาใหม่ตามความสนใจได้"
      }
    ],
    reviews: []
  },
  GraphicDesigner: {
    mainImgURL: "/assets/images/placeholder/position.jpg",
    nameEN: "Graphic Designer",
    nameTH: "กราฟิกดีไซเนอร์",
    count: "3",
    foreword:
      "People with the ability to make 20 posts per week and enjoys being corrected all the time. For them, the word “deadline” means nothing.",
    job_description: [
      "นำข้อมูลมาจัดทำสื่อประชาสัมพันธ์ในรูปแบบต่าง ๆ เช่น อินโฟกราฟิก โปสเตอร์กิจกรรม ออกแบบเว็บไซต์",
      "ออกแบบสิ่งต่าง ๆ ตามที่ได้รับมอบหมาย เช่น ของรางวัลในงาน Triam Udom Open House",
      "ทำคอนเทนต์อื่น ๆ เพิ่มเติมตามความสนใจ เช่น Giveaway, Planner, เว็บลอยกระทง"
    ],
    requirements: [
      "เป็นนักเรียนชั้น ม.4 หรือ ม.5 ในปีการศึกษา 2565",
      "มีทักษะพื้นฐานในการใช้โปรแกรมออกแบบต่าง ๆ อย่างน้อย 1 โปรแกรม เช่น Procreate, Adobe Illustrator, Adobe Photoshop, Figma ฯลฯ",
      "มีไอเดียแปลกใหม่ มีความคิดริเริ่มสร้างสรรค์",
      "มีความคล่องตัวในการทำงาน สามารถทำงานได้ทุกที่ ทุกเวลา",
      "ขยัน อดทน ไม่ย่อท้อ ทำงานเสร็จทันตามเวลาที่กำหนด"
    ],
    note: "**มีการคัดเลือกจากผลงานและการทำโจทย์คัดเลือก**",
    FAQ: [
      {
        question: "ถ้าวาดรูปไม่ได้จะเป็น Graphic designer ได้ไหม ?",
        answer:
          "ได้ ! เพียงแค่ทำกราฟิกในรูปแบบอื่น ๆ แทนได้ เช่น Illustration, Cartoon Drawing, Web Design, Typography, Collage, 3D, Visual Design, Layout, Animation, Motion Design, ฯลฯ"
      },
      {
        question: "งานหนักไหม ?",
        answer: "งานค่อนข้างหนัก แต่<b>ไหว</b>แน่นอน ! เพราะคอยมีเพื่อน ๆ ในองค์กรคอยให้กำลังใจและซัพพอร์ตเราอยู่ตลอด"
      },
      {
        question:
          "มีความสามารถหรือมีความชื่นชอบในการทำ Graphic Design แต่ไม่เคยทำงานในด้านนี้อย่างจริงจังมาก่อน สามารถสมัครได้ไหม",
        answer:
          "<b>ได้ !</b> นอกเหนือจากผลงานและความสามารถแล้ว เราจะพิจารณาคุณสมบัติอื่น ๆ ของผู้สมัครด้วย เช่น ทัศนคติ ความทุ่มเท ความยืดหยุ่นในการทำงาน"
      },
      {
        question:
          "ไม่เคยออกแบบเว็บไซต์หรือใช้โปรแกรม Figma มาก่อน แต่มีพื้นฐานด้านกราฟิกดีไซน์อื่น ๆ สามารถสมัครได้ไหม",
        answer:
          "ได้แน่นอน ทักษะการออกแบบเว็บไซต์นั้น มีความใกล้เคียงกับการออกแบบกราฟิกทั่วไป ในส่วนของโปรแกรม Figma จะมีคนคอยมาสอนและสามารถฝึกฝนไปด้วยกันได้ !"
      },
      {
        question: "งานหลัก ๆ ที่จะต้องทำมีอะไรบ้าง ?",
        answer:
          "มีการจัดทำโพสต์เพื่อการประชาสัมพันธ์บน Instagram และ Facebook จัดทำอินโฟกราฟิก นอกจากนี้ยังมีการออกแบบผลิตภัณฑ์ต่าง ๆ ไม่ว่าจะเป็นไวนิล ป้ายชื่อ ของราวัล และอื่น ๆ อีกมากมาย"
      },
      {
        question:
          "นอกเหนือจากงานที่ได้รับมอบหมายแล้ว สามารถสร้างสรรค์ผลงานเพิ่มเติมหรือทำคอนเทนต์ของตัวเองได้หรือไม่ ?",
        answer: "<b>ได้ !</b> กราฟิกดีไซน์เนอร์สามารถทำคอนเทนต์ใหม่ขึ้นมาตามความสนใจของตัวเองได้"
      }
    ],
    reviews: [
      {
        profileURL: "/assets/images/positions/GraphicDesigner/review-64.jpg",
        contact: "IG: _ggrxcw",
        name: "เกรซ",
        reviewText:
          "การเข้ามาเป็นกราฟิกของ กช. ไม่เคยอยู่ในแผนการใช้ชีวิตในเตรียมอุดมของเราเลย ตอนเราสมัครเข้ามาเราอยู่ ม.4 เราวาดรูปไม่เก่งเลย และตอนนั้นเราก็พึ่งฝึกใช้ illustrator ได้แค่ 2 เดือนเอง แต่เราเลือกที่จะลองเปิดโอกาสให้ตัวเองได้ลองไปสมัครดู พอได้เข้ามาทำงานใน กช. เราก็ได้อะไรมากกว่าการทำงานกราฟิก นอกจากจะได้ฝึกฝีมือให้เก่งขึ้นแล้ว เรายังมองเห็นถึงข้อผิดพลาดในงานและสามารถแก้ไขให้ดีขึ้นได้อีกด้วย ตอนแรกเราต้องให้คนอื่นคอยชี้จุดที่ต้องแก้ตลอด แต่ว่าตอนนี้เราสามารถมองหาจุดบกพร่องเพื่อแก้เองได้แล้ว แล้วก็งานที่ไม่พูดถึงไม่ได้ก็คือ งาน Triam Udom Online Open House 2022 เราทำงานแบบมาราธอนมาก คิดงานตลอดเวลาเลย เป็นช่วงที่เหนื่อยมากแต่ก็สนุกมากเหมือนกัน เราได้ลองออกแบบเว็บไซต์ด้วย มันใหม่มาก ๆ สำหรับเรา แถมยังได้ทำงานนอกเหนือจากงานกราฟิกด้วย นั่นก็คือการเป็นผู้ดูแลเวทีในวันไลฟ์ สนุกมาก เป็นการทำงานที่ได้ประสบการณ์ใหม่ ๆ มาเยอะมาก",
        year: "กช.64"
      }
    ]
  },
  PR: {
    mainImgURL: "/assets/images/placeholder/position.jpg",
    nameEN: "Public Relations",
    nameTH: "ประชาสัมพันธ์",
    count: "1",
    note: "**มีการคัดเลือกจากผลงานและการทำโจทย์คัดเลือก**",
    foreword:
      "Someone person who specializes in communication with the public on behalf of an organization. They act as both the master of ceremonies and the “Google“ of the organization.",
    job_description: [
      "พิธีกรในงานต่าง ๆ ของ กช.",
      "ดูแลและรับผิดชอบแพลตฟอร์มการประชาสัมพันธ์ของ กช.  (Facebook, Instagram, Twitter และ Youtube)",
      "วางแผนการประชาสัมพันธ์ในงานต่าง ๆ ของ กช. ร่วมกับตำแหน่งกราฟิกดีไซเนอร์"
    ],
    requirements: [
      "เป็นนักเรียนชั้น ม.4-5 ในปีการศึกษา 2565",
      "มีทักษะด้านการพูด การสื่อสาร และการใช้ภาษาไทยอย่างดีเยี่ยม",
      "มีประสบการณ์ด้านการพูดในที่สาธารณะ เช่น การทำพิธีกร การเป็นผู้ดำเนินรายการ",
      "มีไหวพริบและความมุ่งมั่นในการทำงานและสร้างสรรค์สิ่งใหม่ ๆ",
      "มีมนุษยสัมพันธ์ดี สามารถติดต่อสื่อสารและทำงานร่วมกับบุคคลอื่นทั้งในและนอกองค์กรได้อย่างดีเยี่ยม",
      "มีความรู้และความเข้าใจในสื่อ Social Media ที่กำลังเป็นที่นิยมในปัจจุบันได้เป็นอย่างดี เช่น Instagram, Facebook, Line, Twitter, Youtube, TikTok, Clubhouse ฯลฯ",
      "ติดตามข่าวสาร อัปเดตกระแสใหม่ ๆ ในสังคมอยู่เสมอ"
    ],
    FAQ: [
      {
        question: "ประสบการณ์ทางด้านการพูดต้องเป็นกิจกรรมในโรงเรียนเตรียมฯ เท่านั้นไหม ?",
        answer: "ไม่จำเป็น"
      },
      {
        question: "สมัครได้เฉพาะนักเรียนชมรมวาทศิลป์หรือไม่ ?",
        answer: "ไม่ ทุกตำแหน่งใน กช. ไม่มีการจำกัดว่าต้องเป็นนักเรียนจากชมรมใดชมรมหนึ่งเท่านั้น"
      }
    ],
    reviews: [
      {
        profileURL: "/assets/images/positions/PR/review-64.jpg",
        contact: "IG: gunaeng.hr",
        name: "กันย์",
        reviewText:
          "ประชาสัมพันธ์ เป็นตำแหน่งที่ทำให้เราได้ใช้ทักษะในการสื่อสาร การใช้ภาษา และการพูดมาใช้แบบเต็มรูปแบบ หน้าที่ของตำแหน่งนี้ คือ การวางแผนการลงโพสต์ ซึ่งจะได้ทำทั้งเลือกวัน เวลา ในการลงโพสต์และการคิดคอนเทนต์ใหม่ ๆ เพื่อโปรโมตงานต่าง ๆ หน้าที่ต่อมาจะเกี่ยวกับเขียน ไม่ว่าจะเป็นการเขียน Caption หรือการเขียนจดหมายเชิญวิทยากร เป็นต้น ทำให้เราได้พัฒนาการเขียนและการใช้ภาษาขึ้นอีกด้วย และอีกหน้าที่ที่ไม่พูดถึงไม่ได้เลย คือ พิธีกร ซึ่งเราจะทำในช่วงงาน Triam Udom Open House เราต้องทำพิธีเยอะมาก เกือบ ๆ 10 รายการ (หรืออาจจะเกิน5555555) ถึงเราจะเคยมีประสบการณ์ในการทำพิธีกรมาบ้าง แต่สเกลงานนี้แตกต่างจากงานอื่น ๆ เป็นงานที่ท้าทายมากและทำให้เราได้พัฒนาทักษะการพูดจากการฝึกซ้อม เพราะเราต้องเตรียมบทเตรียมและคำถามสัมภาษณ์เองทั้งหมดเลย แต่เราก็ผ่านมาได้ เพราะมีพี่ ๆ และเพื่อน ๆ คอยซัพพอร์ตตลอด แต่นอกจากงานประจำตำแหน่งแล้ว เราก็ยังได้เป็นผู้กำกับของคลิป เยื้องย่างเตรียมฯ อีกด้วย เป็นการออกกองที่สนุกมาก ! ถึงงานที่เราพิมพ์มาทั้งหมดอาจจะดูเยอะและหนัก แต่มันก็คุ้มค่าที่ได้เข้ามาทำมาก ๆ ถ้าไม่ใช่ กช. ก็คงไม่ได้ประสบการณ์ดี ๆ แบบนี้ อย่าปล่อยให้โอกาสเป็นเพียงแค่อากาศ แล้วมาเจอกันนะ ♡ !",
        year: "กช.64"
      }
    ]
  },
  IT: {
    mainImgURL: "/assets/images/placeholder/position.jpg",
    nameEN: "Web Developer",
    nameTH: "ผู้ดูแลระบบเว็บไซต์",
    count: "2-3",
    foreword:
      "People who are responsible for developing websites and have their own jargon that nobody understands. They always say “เว็บไม่ล่มครับ”",
    job_description: [
      "สร้าง พัฒนา และดูแลเว็บไซต์ต่าง ๆ ของ กช.",
      "จัดหาและควบคุม อุปกรณ์หรือบริการต่าง ๆ เพื่อใช้ในการดำเนินกิจกรรมของ กช.",
      "ให้คำแนะนำด้านการใช้งานโปรแกรมคอมพิวเตอร์",
      "นำความรู้ที่ใช้เกี่ยวกับการเขียนโปรแกรมคอมพิวเตอร์มาใช้ช่วยเหลืองานในส่วนอื่น ๆ",
      "ทำคอนเทนต์อื่น ๆ เพิ่มเติมตามความสนใจ เช่น ตารางเรียนออนไลน์ เว็บลอยกระทง"
    ],
    requirements: [
      "เป็นนักเรียนชั้น ม.4-6 ในปีการศึกษา 2565",
      "มีความชื่นชอบและมีพื้นฐานเกี่ยวกับการเขียนโปรแกรมคอมพิวเตอร์หรือมีความสามารถทางคอมพิวเตอร์ในด้านอื่น เช่น Database Administration, Networking"
    ],
    FAQ: [
      {
        question:
          "มีความสามารถหรือมีความชื่นชอบในการเขียนโปรแกรมแต่ไม่มีเคยมีประสบการณ์การสร้างหรือพัฒนา Project สามารถสมัครได้ไหม ?",
        answer:
          "<b>สมัครได้ !</b> สามารถกรอกใบสมัครและแนบผลงานที่มีอยู่มาให้เราพิจารณาได้ เพราะนอกเหนือจากผลงานและความสามารถแล้ว เราจะพิจารณาองค์ประกอบอื่นของผู้สมัครด้วย เช่น ทัศนคติ มนุษยสัมพันธ์ ความยืดหยุ่นในการทำงาน ฯลฯ"
      },
      {
        question: "พื้นฐานการเขียนโปรแกรมคอมพิวเตอร์หมายถึงอะไร ?",
        answer:
          "มีความรู้ความเข้าใจโครงสร้างของภาษาคอมพิวเตอร์ (Syntax) เบื้องต้น อาจไม่ถึงขั้นเข้าใจ Syntax ทั้งหมดของภาษา แต่ต้องสามารถทำความเข้าใจ Documentation ของภาษานั้น ๆ ได้"
      },
      {
        question: "จำเป็นต้องเป็น Full Stack Developer ไหม ?",
        answer: "ไม่จำเป็น เราต้อนรับทั้ง Front End Developer และ Back End Developer"
      },
      {
        question: "กช. ใช้ภาษาคอมพิวเตอร์อะไรบ้างในการทำงาน ถ้าไม่เคยใช้ภาษาเหล่านี้สามารถสมัครได้ไหม ?",
        answer:
          "<b>สมัครได้ !</b> สำหรับปีนี้ในส่วนของเว็บไซต์ Front End ใช้ Javascript และในส่วนของ Back End ใช้ Javascript ในส่วนอื่น ๆ นอกจากการพัฒนาเว็บไซต์ เช่น การจัดการข้อมูลทั่วไป ส่วนใหญ่จะใช้ Javascript (ภาษาที่ใช้เขียนในการโปรแกรมจัดการข้อมูลสามารถเปลี่ยนได้ตามความถนัดของผู้ดูแลระบบแต่ละคน)"
      }
    ],
    reviews: [
      {
        profileURL: "/assets/images/positions/IT/review-64.jpg",
        contact: "IG: ttthhheeeeeeeee",
        name: "ธี",
        reviewText:
          "ก่อนที่เราจะสมัครเข้ามาเป็นไอที กช. เราไม่เคยคิดเลยว่าโรงเรียนเตรียมฯ จะมีกิจกรรมเกี่ยวกับคอมพิวเตอร์ที่สเกลงานใหญ่ และสนุกเท่านี้ เราเข้ามาสมัคร กช. เพราะอยากมีประสบการณ์การทำงานกับคนหลากหลายรูปแบบ เพราะก่อนหน้านี้ปกติเวลาเราเขียนโปรแกรมเราก็ทำงานคนเดียวมาตลอด การได้เข้ามาทำงาน กช. ทำให้เราได้พัฒนาทั้งสกิลในการเขียนโปรแกรม ทำเว็บไซต์ และสกิลในการสื่อสารกับคนด้วย เพราะนอกจากการเขียนโปรแกรมแล้ว เราก็ต้องเป็นคนตอบข้อสงสัยเกี่ยวกับระบบเว็บไซต์ที่เราทำด้วย งานที่เราทำก็จะมีทั้งเว็บไซต์ลอยกระทงออนไลน์ปี 2021, เว็บไซต์ Triam Udom Online Open House 2022, เว็บไซต์ระบบลงทะเบียนชมรม, เว็บไซต์แจกตารางสอน สกิลที่เราได้พัฒนาก็มีหลากหลายมาก ตั้งแต่การทำเว็บไซต์ ที่เราต้องมาทำทั้ง frontend และ backend หรืองานอย่างตารางเรียนที่เราต้องเขียนโปรแกรมเพื่อนำตัวอักษรจากตารางเรียนมาทำเป็นกราฟิกที่ กช. ได้ออกแบบไว้ ใครที่อยากพัฒนาสกิลในการเขียนโปรแกรม การใช้งานคอมพิวเตอร์ หรือการทำงานกับคนอื่นก็ลองมาสมัครดูได้เลย รอเจอไอทีปีหน้าอยู่นะ !",
        year: "กช.64"
      }
    ]
  }
}
