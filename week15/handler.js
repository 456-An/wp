import { DB } from "https://deno.land/x/sqlite/mod.ts"; // 導入DB
import { oFetch } from "./lib.js" // 從本地的lib.js檔案中導入oFetch函數

export async function sqlHandler(ctx) { // 把ctx放進函式
    const body = ctx.request.body(); // content type automatically detected（自動偵測內容類型）
    console.log('body = ', body) // 輸出body類型
    if (body.type === "json") { // 如果body類型是json
        let json = await body.value  // 12.0.0 版， 新版為 let json = await body.json()
        console.log('json=', json) // 輸出json類型(body的類型)
        let db = json.db // db = body的資料庫
        let sql = json.sql // sql = body在sql的查詢語句
        const dbo = new DB(`db/${db}.db`) // dbo = 對資料庫進行初始化；${db}會在運行時求值，db的值是json.db，因此${db}可替換成json.db
        let result = sql ? dbo.query(sql) : '[]'
        dbo.close() // 關閉dbo
        ctx.response.body = result  // ctx的回應
    }
}

export async function fetchHandler(ctx) { // 把ctx放進函式
    const body = ctx.request.body(); // content type automatically detected（自動偵測內容類型）
    console.log('body = ', body) // 輸出body類型
    if (body.type === "json") { // 輸出json類型(body的類型)
        let json = await body.value // 12.0.0 版， 新版為 let json = await body.json()
        console.log('json=', json) // 輸出json類型(body的類型)
        let result = await oFetch(json) // 把json放進oFetch函式，並回傳給result
        console.log('result=', result) // 輸出result
        ctx.response.body = result // ctx的回應
    }
}

export async function uploadHandler(ctx) { // 把ctx放進函式
    const body = await ctx.request.body({ type: 'form-data' }) // 自動偵測內容類型
    const data = await body.value.read() // 讀取body(表單資料)的值
    console.log(data) // 印出data
    console.log("fields=", data.fields) // 輸出data的字串和值
    let r = [] // 創造陣列
    for (let f of data.files) { // 一個遍歷data.file的迴圈
        console.log("filename=", f.filename) // 輸出檔案名稱
        console.log("originalName=", f.originalName) // 輸出檔案原始名稱
        await Deno.copyFile(f.filename, `./upload/${f.originalName}`) // 將目前檔案複製到目前資料夾並命名為檔案的原始名稱
        await Deno.remove(f.filename) // 移除檔案名稱
        r.push({file:f.originalName}) // 將上傳的文件訊息加到r串列
    }
    ctx.response.body = r // ctx的回應
}
