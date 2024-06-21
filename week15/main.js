import {sqlFetch} from '../lib/sql.js' // 從本地的/lib/sql.js檔案中導入sqlFetch函數

export var R = {} // 創造一個串列
let _id=0, _title=1, _body=2 // 設定變數

window.onhashchange = async function () {
  var r
  var tokens = window.location.hash.split('/') // 辨識當前網址，並用split將網址斜線的地方分割城串列
  console.log('tokens=', tokens) // 印出tokens的值
  switch (tokens[0]) { // 分析第一筆傳入
    case '#show':
      let r = await sqlFetch('blog', `SELECT id, title, body FROM posts WHERE id=${tokens[1]}`) // 將blog的資料放入sqlFetch函式，並回傳給r
      R.show(r[0]) // 取得第一筆傳入 (雖然只會有一筆，但 SELECT 預設會傳回很多比，所以用 results[0] 只取第一筆)
      break
    case '#new':
      R.new() // 更新R串列
      break
    default:
      let posts = await sqlFetch('blog', `SELECT id, title, body FROM posts`) // 將blog的資料放入sqlFetch函式，並回傳給post
      R.list(posts) // 將posts加入到R
      break
  }
}

window.onload = async function () {
  await sqlFetch('blog', `CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)`) // 將blog的資料放入sqlFetch函式
  window.onhashchange()
}

R.layout = function (title, content) { // 定義R.layout函式
  document.querySelector('title').innerText = title // 加入標題
  document.querySelector('#content').innerHTML = content // 加入留言
}

R.list = function (posts) { // 定義R.list函式
  let list = [] // 創造一個list陣列
  for (let post of posts) { // 遍歷posts的迴圈
    list.push( // 在list串列加入post的title以及Read Post的超連結
        ` 
    <li>
      <h2>${post[_title]}</h2>
      <p><a id="show${post[_id]}" href="#show/${post[_id]}">Read post</a></p>
    </li>
    `
    )
  }
  let content = `
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `

  // 顯示標題
  // 顯示你有幾筆貼文
  // 有一個Create a Post的超連結
  // 在每篇貼文之間加入換行符號
  return R.layout('Posts', content) // 再頁面加入標題和評論，回傳到R.layout函式
}

R.new = function () {
  R.layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="title" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="body" placeholder="Contents" name="body"></textarea></p>
    <p><input id="savePost" type="button" value="Create"></p>
  </form>
  `)

    // 顯示標題
    // 一段說明文字
    // 一個表單讓使用者輸入標題、內容和一個提交按鈕
  document.querySelector('#savePost').onclick = ()=>R.savePost() // 按下savePost時，會觸發R.savePost()函式來儲存貼文
}

R.show = function (post) {
  return R.layout(post[_title], `
    <h1>${post[_title]}</h1>
    <p>${post[_body]}</p>
  `)

  // 顯示標題和內容
}

R.savePost = async function () {
  let title = document.querySelector('#title').value // title = html裡的title內容
  let body = document.querySelector('#body').value // body = html裡的body內容
  await sqlFetch('blog', `INSERT INTO posts (title, body) VALUES ('${title}', '${body}')`) // 使用sqlFetch函式
  window.location.hash = '#list'
}
