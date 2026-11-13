(function () {
  'use strict';

  var cartCount = 0;
  var cartEl = document.getElementById('cart-count');
  var msgEl = document.getElementById('action-message');

  // 加入購物車
  document.getElementById('btn-add-cart').addEventListener('click', function () {
    cartCount += 1;
    cartEl.textContent = cartCount;
    msgEl.textContent = '已加入購物車！目前共 ' + cartCount + ' 台';
  });

  // 收藏切換
  var favBtn = document.getElementById('btn-favorite');
  favBtn.addEventListener('click', function () {
    var on = favBtn.classList.toggle('active');
    favBtn.innerHTML = on
      ? '<i class="fa-solid fa-heart"></i> 已收藏'
      : '<i class="fa-regular fa-heart"></i> 收藏';
    msgEl.textContent = on ? '已加入收藏清單' : '已取消收藏';
  });
})();
