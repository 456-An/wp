$(document).ready(function () {
    setTimeout(function () {
        $(".loading-wrapper").fadeOut(500);
    }, 2000);
});

document.getElementById('search').addEventListener('input', function(e) {
    let searchValue = e.target.value.toLowerCase();
    let displayDivs = document.querySelectorAll('.display div');

    displayDivs.forEach(function(div) {
        let title = div.querySelector('h1').textContent.toLowerCase();
        if (title.indexOf(searchValue) !== -1) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});

// (function(document) {
//     'use strict';
  
//     // 建立 LightTableFilter
//     var LightTableFilter = (function(Arr) {
  
//       var _input;
  
//       // 資料輸入事件處理函數
//       function _onInputEvent(e) {
//         _input = e.target;
//         var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
//         Arr.forEach.call(tables, function(table) {
//           Arr.forEach.call(table.tBodies, function(tbody) {
//             Arr.forEach.call(tbody.rows, _filter);
//           });
//         });
//       }
  
//       // 資料篩選函數，顯示包含關鍵字的列，其餘隱藏
//       function _filter(row) {
//         var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
//         row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
//       }
  
//       return {
//         // 初始化函數
//         init: function() {
//           var inputs = document.getElementsByClassName('searchbar');
//           Arr.forEach.call(inputs, function(input) {
//             input.oninput = _onInputEvent;
//           });
//         }
//       };
//     })(Array.prototype);
  
//     // 網頁載入完成後，啟動 LightTableFilter
//     document.addEventListener('readystatechange', function() {
//       if (document.readyState === 'complete') {
//         LightTableFilter.init();
//       }
//     });
//   })(document);

{/* <input type="search" class="light-table-filter" data-table="order-table" placeholder="請輸入關鍵字">

<table class="order-table">
  <thead>
    <tr>
      <th>姓名</th>
      <th>電話</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table> */}
