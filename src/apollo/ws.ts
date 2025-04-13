// import { Token } from "@/helpers/constants";
// import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
// import { createClient, type Client } from "graphql-ws";
// import Cookies from "js-cookie";

// let wsClient: Client | undefined;

// export function initializeSocket(): void {
//   // console.log('is initializeSocket');
//   wsClient = createClient({
//     url: `${process.env.NEXT_PUBLIC_WS_DOMAIN}${process.env.NEXT_PUBLIC_WS_ENDPOINT}`,
//     connectionParams: () => ({
//       authorization: `Bearer ${Cookies.get(Token) || ""}`,
//     }),
//   });

//   const token = Cookies.get(Token);
//   if (!token && wsClient) {
//     wsClient.terminate(); // Sử dụng terminate thay cho disconnect để ngắt hoàn toàn
//   }
// }

// export function connectSocket(): void {
//   if (wsClient) {
//     wsClient.terminate(); // Ngắt kết nối hiện tại
//     // console.log('is terminate and create new one');
//     wsClient = createClient({
//       url: `${process.env.NEXT_PUBLIC_WS_DOMAIN}${process.env.NEXT_PUBLIC_WS_ENDPOINT}`,
//       connectionParams: () => ({
//         authorization: `Bearer ${Cookies.get(Token) || ""}`,
//       }),
//     });
//   } else {
//     // console.log('is connect');
//     wsClient = createClient({
//       url: `${process.env.NEXT_PUBLIC_WS_DOMAIN}${process.env.NEXT_PUBLIC_WS_ENDPOINT}`,
//       connectionParams: () => ({
//         authorization: `Bearer ${Cookies.get(Token) || ""}`,
//       }),
//     });
//   }
// }

// export function disconnectSocket(): void {
//   if (wsClient) {
//     // console.log('is terminate');
//     wsClient.terminate();
//     wsClient = undefined; // Đặt lại thành undefined sau khi ngắt
//   }
// }

// export function getWsLink(): GraphQLWsLink {
//   if (!wsClient) {
//     throw new Error("Socket client not initialized");
//   }
//   return new GraphQLWsLink(wsClient);
// }
