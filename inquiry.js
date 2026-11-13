(function () {
  'use strict';

  var form = document.getElementById('inquiry-form');
  var nameInput = document.getElementById('customer-name');
  var phoneInput = document.getElementById('customer-phone');
  var productSelect = document.getElementById('product-select');
  var errorEl = document.getElementById('form-error');
  var resultSection = document.getElementById('result-section');
  var tbody = document.getElementById('inquiry-body');
  var seq = 0;

  function pad(n, len) {
    n = String(n);
    while (n.length < len) n = '0' + n;
    return n;
  }

  function newInquiryNo() {
    var d = new Date();
    seq += 1;
    return 'INQ-' + d.getFullYear() + pad(d.getMonth() + 1, 2) + pad(d.getDate(), 2) + '-' + pad(seq, 3);
  }

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.hidden = false;
  }

  function addCell(tr, text) {
    var td = document.createElement('td');
    td.textContent = text;
    tr.appendChild(td);
    return td;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = nameInput.value.trim();
    var phone = phoneInput.value.trim();
    var product = productSelect.value;

    if (!name) { showError('請輸入姓名'); return; }
    if (!/^[0-9\-+() ]{8,15}$/.test(phone)) { showError('請輸入正確的連絡電話（8～15 碼，可含 - + ( )）'); return; }
    if (!product) { showError('請選擇產品'); return; }

    errorEl.hidden = true;

    var tr = document.createElement('tr');
    addCell(tr, newInquiryNo()).className = 'col-no';
    addCell(tr, name).className = 'col-name';
    addCell(tr, phone).className = 'col-phone';
    addCell(tr, product).className = 'col-product';
    tbody.innerHTML = '';   // 只顯示本次送出的一筆
    tbody.appendChild(tr);
    resultSection.hidden = false;

    form.reset();
    nameInput.focus();
  });

  document.getElementById('btn-clear-all').addEventListener('click', function () {
    form.reset();
    errorEl.hidden = true;
    nameInput.focus();
  });
})();
