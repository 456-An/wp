export async function oFetch(o) { // 把o放進函式
    let r = await fetch(o.url, { // await會返回fetch的值或被fetch拒絕的值，目標是url
        body: o.method == 'GET'?undefined:o.body, // 根據o的method來設定body的屬性，若是GET，body的屬性就是未定義；反之，body的屬性就是o的body
        method: o.method || 'GET', // method的屬性是o的method或是GET
        headers: o.headers || {}, // headers的屬性是o的headers或是空的
    })
    if (!r.ok) { // r.ok表請求成功，因此!r.ok表示在fetch函式未請求成功(利用await函式)
        console.log('webFetch:error! o=', o, 'r=', r) // 輸出webFetch:error!以及和r的值
        return null // 回傳null
    }
    let text = await r.text() // 讀取r中的字串，傳給text
    return text // 回傳text
  }
