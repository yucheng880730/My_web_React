import React, { Component } from "react";

class Activity extends Component {
  state = {
    events: [
      {
        id: "1",
        title: "Seminar on International Trade and Economy 2020",
        content:
          "Had the honor to participate in this camp during the summer vacation，In addition to group meetings to discuss current affairs, they also invited seniors in the industry to share the impact and changes of economics and trade under the new crown epidemic.Let me understand that the world situation is changing fast, and I must always keep myself at the forefront of the times.",
        img: "../../images/event/Site.jpg",
      },
      {
        id: "2",
        title: "Shopee Code League",
        content:
          "比賽為期兩個多月，每周都會有新的比賽題目以積分制累積分數。而比賽題目類型有algorithm、data analytics和data science。除此之外每周也都會有許多免費的線上課程供參賽者報名免費學習。比賽中知道自己的不足，也告訴自己需要不斷精進python語言的程式能力。",
        img: "../../images/event/Shopee.jpg",
      },
      {
        id: "3",
        title: "Microsoft TAI一日實習生",
        content:
          "活動中教了我們使用Azure Custom Vision，來識別圖片中的物體，這個雲端服務把圖片識別的模型訓練弄得非常簡單，在之後的分組活動也讓我們運用這個服務並上台報告成果。這個活動讓我審視自己是否合適技術助理這個工作，以及之後專題資料庫架設時，就是使用活動推薦使用的azure student雲端服務中的資料庫服務來架設。",
        img: "../../images/event/TAI.jpg",
      },
      {
        id: "4",
        title: "2019 AI 新銳領航者計畫",
        content:
          "新銳領航者計畫的比賽中，我深刻感受到，即使能分析出相關結果，若對該領域沒有一定程度的了解，就沒辦法做出完整有力的結論。也就是要成為金融分析師前，除了需要精進程式能力，也要深入了解金融領域的專業知識。希望藉由實習能更進一步了解業界運作方式。",
        img: "../../images/event/SAS.jpg",
      },
      {
        id: "5",
        title: "Volunteer Service - counselor",
        content:
          "帶著學弟妹，寒假期間到美濃的東門國小。帶著小朋友們上手作課程以及進行戶外大地遊戲。身為隊輔組長，學期中每次開會、籌會針對每位組員的需要，給予不同方面的建議。",
        img: "../../images/event/KH.jpg",
      },
    ],
  };

  render() {
    const { events } = this.state;
    console.log(events);

    return (
      <section id="portfolio">
        <div>
          <h1>Activities I have participated in</h1>

          {events.map((item) => (
            <div className="details">
              <div className="big-imgs">
                <img src={item.img} alt="" />
              </div>

              <div className="box">
                <div className="row">
                  <h2 className="events-title">{item.title}</h2>
                  <p className="events-content">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Activity;
