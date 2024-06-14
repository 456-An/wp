const main = document.querySelector('main')

let key = "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"

async function groqChat(q) {
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        body: JSON.stringify({
            "model": "llama3-8b-8192",
            "messages": [{"role": "user", "content": q}],
            "temperature": 0.7
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        }
    })
    const jsonData = await jsonResponse.json()
    console.log(JSON.stringify(jsonData, null, 2))
    return jsonData.choices[0].message.content
}


// async function chat() {
//     let qNode = document.querySelector('#question')
//     let responseNode = document.querySelector('#response')
//     responseNode.innerText = '詢問 AI 中，請稍等幾秒鐘 ...'
//     let answer = await groqChat(qNode.value)
//     responseNode.innerText = answer
// }



// 儲存待辦事項的陣列
let todos = [];

// 處理待辦事項的函數
async function handleTodo(q) {
    // 如果問題是關於添加待辦事項的
    if (q.startsWith("添加待辦事項")) {
        let todo = q.slice(6); // 從問題中提取待辦事項
        todos.push(todo); // 將待辦事項添加到陣列中
        return "待辦事項已添加。";
    }

    // 如果問題是關於列出待辦事項的
    if (q.startsWith("列出待辦事項")) {
        return "您的待辦事項有：\n" + todos.join("\n");
    }

    // 如果問題是關於刪除待辦事項的
    if (q.startsWith("刪除待辦事項")) {
        let todo = q.slice(6); // 從問題中提取待辦事項
        let index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1); // 從陣列中刪除待辦事項
            return "待辦事項已刪除。";
        } else {
            return "找不到該待辦事項。";
        }
    }

    // 如果問題不是關於待辦事項的，則與 AI 進行互動
    return await groqChat(q);
}

async function chat() {
    let qNode = document.querySelector('#question')
    let responseNode = document.querySelector('#response')
    responseNode.innerText = '詢問 AI 中，請稍等幾秒鐘 ...'
    let answer = await handleTodo(qNode.value)
    responseNode.innerText = answer
}

document.getElementById('menu').addEventListener('change', function() {
    if (this.value === '停止使用') {
        document.getElementById('question').style.display = 'none';
        document.querySelector('button').style.display = 'none';
        document.getElementById('response').innerHTML = '服務已停止。感謝您的使用。';
    } else {
        document.getElementById('question').style.display = 'block';
        document.querySelector('button').style.display = 'block';
        document.getElementById('response').innerHTML = '';
    }
});
