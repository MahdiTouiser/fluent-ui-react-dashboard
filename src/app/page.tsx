// "use client";
// import { useEffect } from "react";
// import SidebarLayout from "@/components/sidebar/SidebarLayout";
// import CardComponent from "@/components/card/CardComponent";
// import "office-ui-fabric-react/dist/css/fabric.css";
// import { CardData } from "@/types/types";
// import { useRouter } from "next/router";

// const Home = () => {
//   const cardData: CardData[] = [
//     {
//       id: 1,
//       title: "Card 1",
//     },
//     {
//       id: 2,
//       title: "Card 2",
//     },
//     {
//       id: 3,
//       title: "Card 3",
//     },
//     {
//       id: 5,
//       title: "Card 5",
//     },

//     {
//       id: 6,
//       title: "Card 6",
//     },
//     {
//       id: 7,
//       title: "Card 7",
//     },
//     {
//       id: 8,
//       title: "Card 8",
//     },
//     {
//       id: 9,
//       title: "Card 9",
//     },
//     {
//       id: 10,
//       title: "Card 10",
//     },
//     {
//       id: 11,
//       title: "Card 11",
//     },
//     {
//       id: 12,
//       title: "Card 12",
//     },
//     {
//       id: 13,
//       title: "Card 13",
//     },
//     {
//       id: 14,
//       title: "Card 14",
//     },
//   ];

//   const cardsPerRow = 4;

//   const rows = [];

//   for (let i = 0; i < cardData.length; i += cardsPerRow) {
//     rows.push(cardData.slice(i, i + cardsPerRow));
//   }

//   return (
//     <>
//       <div className="ms-Grid" dir="ltr">
//         <div className="ms-Grid-row">
//           <div className="ms-Grid-col ms-sm1 ms-xl1">
//             <SidebarLayout />
//           </div>
//           <div className="main-element ms-Grid-col ms-sm11 ms-xl11">
//             {rows.map((row, rowIndex) => (
//               <div key={rowIndex} className="ms-Grid-row">
//                 {row.map((card) => (
//                   <div
//                     key={card.id}
//                     className="ms-Grid-col ms-sm3 ms-xl3"
//                     style={{ paddingBottom: "20px" }}
//                   >
//                     <CardComponent title={card.title} />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
