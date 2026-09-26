const PRODUCTS = [{"fa": "زردچوبه", "en": "Turmeric", "img45": "assets/products/IMG_6015.JPG", "img80": "assets/new-spices/IMG_5484.JPG", "cat": "spice", "price45": "935,740 تومان"}, {"fa": "فلفل قرمز", "en": "Red Pepper", "img45": "assets/products/IMG_6016.JPG", "img80": "assets/new-spices/IMG_5485.JPG", "cat": "spice", "price45": "421,850 تومان"}, {"fa": "فلفل سیاه", "en": "Black Pepper", "img45": "assets/products/IMG_6010.JPG", "img80": "assets/new-spices/IMG_5486.JPG", "cat": "spice", "price45": "2,239,640 تومان"}, {"fa": "کاری", "en": "Curry", "img45": "assets/products/IMG_6009.JPG", "img80": "assets/new-spices/IMG_5487.JPG", "cat": "spice", "price45": "قیمت فروشگاه"}, {"fa": "دارچین", "en": "Cinnamon", "img45": "assets/products/IMG_6013.JPG", "img80": "assets/new-spices/IMG_5489.JPG", "cat": "spice", "price45": "797,680 تومان"}, {"fa": "آویشن", "en": "Thyme", "img45": "assets/products/IMG_6012.JPG", "img80": "assets/new-spices/IMG_5490.JPG", "cat": "spice", "price45": "1,626,040 تومان"}, {"fa": "پاپریکا", "en": "Paprika", "img45": "assets/products/IMG_6011.JPG", "img80": "assets/new-spices/IMG_5491.JPG", "cat": "spice", "price45": "521,560 تومان"}, {"fa": "سماق قهوه‌ای", "en": "Brown Sumac", "img45": "assets/products/IMG_6014.JPG", "img80": "assets/new-spices/IMG_5692.JPG", "cat": "spice", "price45": "2,454,400 تومان"}, {"fa": "سماق قرمز", "en": "Red Sumac", "img45": "assets/products/IMG_6014.JPG", "img80": "assets/new-spices/IMG_5693.JPG", "cat": "spice", "price45": "3,313,440 تومان"}, {"fa": "پودر پیاز", "en": "Onion Powder", "img45": "assets/products/IMG_6017.JPG", "img80": "assets/new-spices/IMG_5694.JPG", "cat": "spice", "price45": "276,120 تومان"}, {"fa": "پودر سیر", "en": "Garlic Powder", "img45": "assets/products/IMG_6018.JPG", "img80": "assets/new-spices/IMG_5695.JPG", "cat": "spice", "price45": "521,560 تومان"}, {"fa": "عدس", "en": "Lentils", "img45": "assets/products/IMG_6104.JPG", "img80": "assets/products/IMG_6104.JPG", "cat": "legume", "price450": "242,000 تومان"}, {"fa": "لوبیا چیتی", "en": "Pinto Beans", "img45": "assets/products/IMG_6105.JPG", "img80": "assets/products/IMG_6105.JPG", "cat": "legume", "price450": "355,000 تومان"}, {"fa": "لپه", "en": "Split Peas", "img45": "assets/products/IMG_6107.JPG", "img80": "assets/products/IMG_6107.JPG", "cat": "legume", "price450": "269,000 تومان"}, {"fa": "عدس ریز", "en": "Small Lentils", "img45": "assets/products/IMG_6108.JPG", "img80": "assets/products/IMG_6108.JPG", "cat": "legume", "price450": "195,000 تومان"}, {"fa": "لوبیا قرمز", "en": "Red Kidney Beans", "img45": "assets/products/IMG_6106.JPG", "img80": "assets/products/IMG_6106.JPG", "cat": "legume", "price450": "301,000 تومان"}, {"fa": "دال عدس", "en": "Red Lentils", "img45": "assets/products/IMG_6111.JPG", "img80": "assets/products/IMG_6111.JPG", "cat": "legume", "price450": "304,000 تومان"}];
const SHOP_URL='https://sarvco.mydigify.app';
const CATALOG_SPICES_URL='CATALOG_SPICES_URL';
const CATALOG_LEGUMES_URL='CATALOG_LEGUMES_URL';

function productCard(p,i){
  const isSpice=p.cat==='spice';
  const priced=isSpice?p.price45:p.price450;
  return `<article class="product-card reveal" data-category="${p.cat}" data-name="${p.fa}">
    <div class="product-img"><img src="${p.img45}" data-img45="${p.img45}" data-img80="${p.img80}" alt="${p.fa} SARV" loading="lazy"></div>
    <div class="product-info">
      <span>${String(i+1).padStart(2,'0')}</span>
      <h3>${p.fa}</h3>
      <small>${isSpice?'SPICE / 45g + 80g':'LEGUME / 450g + 800g'}</small>
      <div class="size-row">
        <button class="size-btn active" data-size="${isSpice?'45':'450'}">${isSpice?'۴۵ گرم':'۴۵۰ گرم'}</button>
        <button class="size-btn" data-size="${isSpice?'80':'800'}">${isSpice?'۸۰ گرم':'۸۰۰ گرم'}</button>
      </div>
      <div class="purchase-row">
        <div><small class="price-label">قیمت مصرف‌کننده</small><b class="price">${priced}</b></div>
        <a class="shop-mini" href="${SHOP_URL}" target="_blank" rel="noopener">خرید ↗</a>
      </div>
      <div class="store-order">
        <strong>خرید برای فروشگاه: ۲۰٪ تخفیف</strong>
        <span>برای سفارش فروشگاهی، گزینه «پک فروشگاهی» را در فروشگاه انتخاب کنید و از انتخاب تکی خودداری کنید.</span>
        <a href="${SHOP_URL}" target="_blank" rel="noopener" class="pack-link">ورود برای سفارش پک ↗</a>
      </div>
    </div>
  </article>`;
}
function renderProducts(filter='all'){
  const grid=document.getElementById('productGrid'); if(!grid) return;
  grid.innerHTML=PRODUCTS.filter(p=>filter==='all'||p.cat===filter).map((p,i)=>productCard(p,i)).join('');
  grid.querySelectorAll('.size-btn').forEach(btn=>btn.addEventListener('click',()=>{
    const card=btn.closest('.product-card'), p=PRODUCTS.find(x=>x.fa===card.dataset.name);
    card.querySelectorAll('.size-btn').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
    const isSpice=p.cat==='spice', size=btn.dataset.size, img=card.querySelector('img');
    img.src=size===(isSpice?'45':'450')?img.dataset.img45:img.dataset.img80;
    card.querySelector('.price-label').textContent=size===(isSpice?'45':'450')?'قیمت مصرف‌کننده':'قیمت در فروشگاه';
    card.querySelector('.price').textContent=size===(isSpice?'45':'450')?(isSpice?p.price45:p.price450):'برای مشاهده قیمت و سفارش';
  }));
  observeReveals();
}
function observeReveals(){
  if(!window.IntersectionObserver){document.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'));return;}
  const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ob.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(x=>{if(!x.classList.contains('visible'))ob.observe(x)});
}
const state={lang:localStorage.getItem('sarv-lang')||'fa'};
function applyLang(){
  document.documentElement.lang=state.lang; document.documentElement.dir=state.lang==='fa'?'rtl':'ltr';
  document.querySelectorAll('[data-fa]').forEach(el=>el.innerHTML=state.lang==='fa'?el.dataset.fa:el.dataset.en);
  const b=document.getElementById('langBtn'); if(b)b.textContent=state.lang==='fa'?'EN':'FA';
}
document.addEventListener('click',e=>{
  if(e.target.id==='langBtn'){state.lang=state.lang==='fa'?'en':'fa';localStorage.setItem('sarv-lang',state.lang);applyLang();}
  const f=e.target.closest('.filter'); if(f){document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));f.classList.add('active');renderProducts(f.dataset.filter);}
});
document.addEventListener('DOMContentLoaded',()=>{applyLang(); renderProducts();});
