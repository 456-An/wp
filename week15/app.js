import { Application, Router} from "https://deno.land/x/oak@v12.0.0/mod.ts" // "https://deno.land/x/oak/mod.ts"; //導入Application和Router類別
import { oakCors } from "https://deno.land/x/cors/mod.ts"; // 導入oakCors函數
import { sqlHandler, fetchHandler, uploadHandler } from './handler.js' // 從本地的handler.js檔案中導入sqlHandler、fetchHandler和uploadHandler函數

const app = new Application() 
const router = new Router()

router.post('/fetch', fetchHandler) // 為特定路徑設定POST請求的處理方式，當對fetch發送請求，會由fetchHandler函式處理
router.post('/sqlite', sqlHandler) // 為特定路徑設定POST請求的處理方式，當對fetch發送請求，會由sqlHandler函式處理
router.post('/upload', uploadHandler) // 為特定路徑設定POST請求的處理方式，當對fetch發送請求，會由uploadHandler函式處理

app.use(oakCors()); // Enable CORS for All Routes（將CORS加入到應用程式當中）
app.use(router.routes()) // 加入router的路由方法
app.use(router.allowedMethods()) // 將router允許的方法加入到應用程式

console.log('Server run at http://127.0.0.1:6789') // 輸出伺服器位置，表示伺服器正在運作
await app.listen({ port: 6789 }) // 監聽6789端口
