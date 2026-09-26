const PRODUCTS = [
{fa:'زردچوبه',en:'Turmeric',img45:'assets/products/IMG_6015.JPG',img80:'assets/new-spices/IMG_5484.JPG',cat:'spice',price45:'935,740 تومان',desc:'زردچوبه با رنگ طلایی و عطر گرم و خاکی، از ادویه‌های پایه در آشپزی ایرانی و بسیاری از غذاهای روزمره است. برای طعم‌دهی و ایجاد رنگ طبیعی در برنج، خورش، سوپ و انواع ترکیب‌های ادویه کاربرد دارد.',usage:'مناسب برای برنج، خورش، سوپ و مزه‌دار کردن غذا',profile:'گرم، خاکی و معطر'},
{fa:'فلفل قرمز',en:'Red Pepper',img45:'assets/products/IMG_6016.JPG',img80:'assets/new-spices/IMG_5485.JPG',cat:'spice',price45:'421,850 تومان',desc:'فلفل قرمز آسیاب‌شده برای افزودن تندی و رنگ به غذا استفاده می‌شود. مقدار مصرف آن را می‌توان بر اساس ذائقه تنظیم کرد و در غذاهای روزمره، سس‌ها و ترکیب‌های ادویه به کار برد.',usage:'مناسب برای غذاهای تند، سس، خوراک و مرینیت',profile:'تند، گرم و خوش‌رنگ'},
{fa:'فلفل سیاه',en:'Black Pepper',img45:'assets/products/IMG_6010.JPG',img80:'assets/new-spices/IMG_5486.JPG',cat:'spice',price45:'2,239,640 تومان',desc:'فلفل سیاه آسیاب‌شده با رایحه‌ای تند و نافذ، یکی از ادویه‌های پرکاربرد برای کامل کردن مزه غذاست. در غذاهای گوشتی، سوپ، سالاد و بسیاری از دستورهای روزمره استفاده می‌شود.',usage:'مناسب برای گوشت، مرغ، سوپ، سالاد و تخم‌مرغ',profile:'تند، گرم و معطر'},
{fa:'کاری',en:'Curry',img45:'assets/products/IMG_6009.JPG',img80:'assets/new-spices/IMG_5487.JPG',cat:'spice',price45:'قیمت فروشگاه',desc:'پودر کاری یک ترکیب معطر از چند ادویه است که برای ایجاد رنگ، عطر و طعم گرم در غذا استفاده می‌شود. انتخابی کاربردی برای خوراک‌ها، مرغ، برنج و غذاهای الهام‌گرفته از آشپزی آسیایی است.',usage:'مناسب برای مرغ، خوراک، برنج و سس‌ها',profile:'گرم، معطر و ادویه‌ای'},
{fa:'دارچین',en:'Cinnamon',img45:'assets/products/IMG_6013.JPG',img80:'assets/new-spices/IMG_5489.JPG',cat:'spice',price45:'797,680 تومان',desc:'دارچین با عطر شیرین و گرم، هم در غذاهای شیرین و هم در بعضی غذاهای ایرانی کاربرد دارد. مقدار کم آن می‌تواند رایحه‌ای مشخص و دلپذیر به ترکیب نهایی بدهد.',usage:'مناسب برای دسر، نوشیدنی، برنج و برخی خورش‌ها',profile:'شیرین، گرم و خوش‌عطر'},
{fa:'آویشن',en:'Thyme',img45:'assets/products/IMG_6012.JPG',img80:'assets/new-spices/IMG_5490.JPG',cat:'spice',price45:'1,626,040 تومان',desc:'آویشن آسیاب‌شده با رایحه گیاهی و مشخص، برای غذاهایی که به عطر سبزی‌های خشک نیاز دارند انتخابی کاربردی است. در ترکیب با گوشت، مرغ، سیب‌زمینی و سس‌ها به‌خوبی استفاده می‌شود.',usage:'مناسب برای مرغ، گوشت، سیب‌زمینی و سس',profile:'گیاهی، معطر و کمی تند'},
{fa:'پاپریکا',en:'Paprika',img45:'assets/products/IMG_6011.JPG',img80:'assets/new-spices/IMG_5491.JPG',cat:'spice',price45:'521,560 تومان',desc:'پاپریکا برای افزودن رنگ قرمز دلپذیر و طعمی ملایم و ادویه‌ای به غذا به کار می‌رود. در غذاهای مرغ و گوشت، سیب‌زمینی و انواع سس کاربرد زیادی دارد.',usage:'مناسب برای مرغ، گوشت، سیب‌زمینی و سس‌ها',profile:'ملایم، گرم و خوش‌رنگ'},
{fa:'سماق قهوه‌ای',en:'Brown Sumac',img45:'assets/products/IMG_6014.JPG',img80:'assets/new-spices/IMG_5692.JPG',cat:'spice',price45:'2,454,400 تومان',desc:'سماق با طعم ترش و عطر ویژه خود، یکی از چاشنی‌های شناخته‌شده سفره ایرانی است. به‌صورت مستقیم روی کباب و غذاهای آماده مصرف می‌شود و برای ایجاد تعادل در طعم غذا کاربرد دارد.',usage:'مناسب برای کباب، سالاد، برنج و غذاهای ایرانی',profile:'ترش، خوش‌عطر و کمی میوه‌ای'},
{fa:'سماق قرمز',en:'Red Sumac',img45:'assets/products/IMG_6014.JPG',img80:'assets/new-spices/IMG_5693.JPG',cat:'spice',price45:'3,313,440 تومان',desc:'سماق قرمز با رنگ شاخص و طعم ترش، برای چاشنی کردن غذا و ایجاد تضاد طعمی دلپذیر استفاده می‌شود. گزینه‌ای مناسب برای کباب، سالاد و انواع غذاهای ایرانی است.',usage:'مناسب برای کباب، سالاد، برنج و ساندویچ',profile:'ترش، خوش‌رنگ و معطر'},
{fa:'پودر پیاز',en:'Onion Powder',img45:'assets/products/IMG_6017.JPG',img80:'assets/new-spices/IMG_5694.JPG',cat:'spice',price45:'276,120 تومان',desc:'پودر پیاز راهی سریع برای افزودن عطر و طعم پیاز به غذاست، بدون نیاز به خرد کردن پیاز تازه. در انواع گوشت، مرغ، سس، سوپ و ترکیب‌های ادویه کاربرد دارد.',usage:'مناسب برای گوشت، مرغ، سوپ، سس و اسنک',profile:'ملایم، شیرین و پیازی'},
{fa:'پودر سیر',en:'Garlic Powder',img45:'assets/products/IMG_6018.JPG',img80:'assets/new-spices/IMG_5695.JPG',cat:'spice',price45:'521,560 تومان',desc:'پودر سیر عطر و طعم مشخص سیر را به‌صورت یکنواخت وارد غذا می‌کند. برای مزه‌دار کردن گوشت و مرغ، سس‌ها، سوپ و انواع غذاهای سریع کاربردی است.',usage:'مناسب برای گوشت، مرغ، سس، سوپ و سیب‌زمینی',profile:'قوی، معطر و گرم'},
{fa:'عدس',en:'Lentils',img45:'assets/products/IMG_6104.JPG',img80:'assets/products/IMG_6104.JPG',cat:'legume',price450:'242,000 تومان',desc:'عدس یکی از حبوبات پرمصرف برای تهیه غذاهای خانگی است و به دلیل آماده‌سازی نسبتاً سریع، در غذاهایی مانند عدسی، سوپ و انواع خوراک استفاده می‌شود.',usage:'مناسب برای عدسی، سوپ، پلو و خوراک',profile:'طعم ملایم و بافت نرم پس از پخت'},
{fa:'لوبیا چیتی',en:'Pinto Beans',img45:'assets/products/IMG_6105.JPG',img80:'assets/products/IMG_6105.JPG',cat:'legume',price450:'355,000 تومان',desc:'لوبیا چیتی با ظاهر خال‌دار و بافت مناسب پس از پخت، از حبوبات محبوب در آشپزی ایرانی است و در خوراک لوبیا، آش، سوپ و ترکیب‌های متنوع استفاده می‌شود.',usage:'مناسب برای خوراک لوبیا، آش و سوپ',profile:'کمی کرمی، خوش‌خوراک و سیرکننده'},
{fa:'لپه',en:'Split Peas',img45:'assets/products/IMG_6107.JPG',img80:'assets/products/IMG_6107.JPG',cat:'legume',price450:'269,000 تومان',desc:'لپه از حبوبات پرکاربرد در غذاهای ایرانی است و به‌ویژه در خورش قیمه و انواع خوراک استفاده می‌شود. بافت آن پس از پخت برای غذاهای خورشتی مناسب است.',usage:'مناسب برای قیمه، خوراک و آش',profile:'ملایم و مناسب غذاهای خورشتی'},
{fa:'عدس ریز',en:'Small Lentils',img45:'assets/products/IMG_6108.JPG',img80:'assets/products/IMG_6108.JPG',cat:'legume',price450:'195,000 تومان',desc:'عدس ریز برای غذاهایی که به پخت یکنواخت و بافت لطیف نیاز دارند مناسب است. در عدسی، سوپ، آش و انواع غذاهای ترکیبی می‌توان از آن استفاده کرد.',usage:'مناسب برای عدسی، سوپ و آش',profile:'ملایم، لطیف و خوش‌پخت'},
{fa:'لوبیا قرمز',en:'Red Kidney Beans',img45:'assets/products/IMG_6106.JPG',img80:'assets/products/IMG_6106.JPG',cat:'legume',price450:'301,000 تومان',desc:'لوبیا قرمز با رنگ شاخص و بافت مناسب پس از پخت، در خوراک‌ها، آش و غذاهای ترکیبی کاربرد دارد. برای نتیجه بهتر، خیساندن و پخت کامل حبوبات توصیه می‌شود.',usage:'مناسب برای خوراک، آش و غذاهای ترکیبی',profile:'بافت نسبتاً محکم و طعم ملایم'},
{fa:'دال عدس',en:'Red Lentils',img45:'assets/products/IMG_6111.JPG',img80:'assets/products/IMG_6111.JPG',cat:'legume',price450:'304,000 تومان',desc:'دال عدس با بافتی که در پخت نرم و یکدست می‌شود، برای تهیه سوپ، دال و خوراک‌های سریع انتخابی کاربردی است و به‌خوبی با ادویه‌های گرم ترکیب می‌شود.',usage:'مناسب برای دال، سوپ، خوراک و پوره',profile:'ملایم، نرم و مناسب پخت سریع'}
];
const SHOP_URL='https://sarvco.mydigify.app';
const CATALOG_SPICES_URL='CATALOG_SPICES_URL';
const CATALOG_LEGUMES_URL='CATALOG_LEGUMES_URL';

function productCard(p,i){
  const isSpice=p.cat==='spice';
  const firstSize=isSpice?'45':'450', secondSize=isSpice?'80':'800';
  const priced=isSpice?p.price45:p.price450;
  return `<article class="product-card reveal" data-category="${p.cat}" data-name="${p.fa}" tabindex="0" role="button" aria-label="جزئیات ${p.fa}">
    <div class="product-img"><img src="${p.img45}" data-img45="${p.img45}" data-img80="${p.img80}" alt="${p.fa} SARV" loading="lazy"><span class="product-open">جزئیات محصول <b>↗</b></span></div>
    <div class="product-info">
      <span class="product-index">${String(i+1).padStart(2,'0')}</span>
      <div><h3>${p.fa}</h3><small>${p.en} · ${isSpice?'SPICE':'LEGUME'}</small></div>
      <p class="card-desc">${p.desc}</p>
      <div class="size-switch" role="group" aria-label="انتخاب وزن ${p.fa}">
        <span class="switch-label">وزن</span>
        <button class="size-btn active" type="button" data-size="${firstSize}">${isSpice?'۴۵ گرم':'۴۵۰ گرم'}</button>
        <button class="size-btn" type="button" data-size="${secondSize}">${isSpice?'۸۰ گرم':'۸۰۰ گرم'}</button>
      </div>
      <div class="purchase-row">
        <div><small class="price-label">قیمت مصرف‌کننده</small><b class="price">${priced}</b></div>
        <a class="shop-mini" href="${SHOP_URL}" target="_blank" rel="noopener">خرید ↗</a>
      </div>
      <div class="store-order"><strong>فروشگاهی · ۲۰٪ تخفیف</strong><span>برای سفارش فروشگاهی، گزینه «پک» را انتخاب کنید.</span></div>
    </div>
  </article>`;
}
function renderProducts(filter='all'){
  const grid=document.getElementById('productGrid'); if(!grid) return;
  grid.innerHTML=PRODUCTS.filter(p=>filter==='all'||p.cat===filter).map((p,i)=>productCard(p,i)).join('');
  grid.querySelectorAll('.size-btn').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const card=btn.closest('.product-card'), p=PRODUCTS.find(x=>x.fa===card.dataset.name), isSpice=p.cat==='spice', size=btn.dataset.size, img=card.querySelector('img');
    card.querySelectorAll('.size-btn').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
    img.src=size===(isSpice?'45':'450')?img.dataset.img45:img.dataset.img80;
    card.querySelector('.price-label').textContent=size===(isSpice?'45':'450')?'قیمت مصرف‌کننده':'قیمت در فروشگاه';
    card.querySelector('.price').textContent=size===(isSpice?'45':'450')?(isSpice?p.price45:p.price450):'برای مشاهده قیمت و سفارش';
  }));
  grid.querySelectorAll('.product-card').forEach(card=>{
    card.addEventListener('click',e=>{if(e.target.closest('a,button'))return;openProduct(card.dataset.name);});
    card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('a,button')){e.preventDefault();openProduct(card.dataset.name);}});
  });
  observeReveals();
}
function openProduct(name){
  const p=PRODUCTS.find(x=>x.fa===name); if(!p)return;
  const isSpice=p.cat==='spice';
  document.getElementById('modalProductImage').src=p.img45;
  document.getElementById('modalProductImage').alt=p.fa+' SARV';
  document.getElementById('modalProductTitle').textContent=p.fa;
  document.getElementById('modalProductEnglish').textContent=p.en+' · '+(isSpice?'SPICE':'LEGUME');
  document.getElementById('modalProductDescription').textContent=p.desc;
  document.getElementById('modalProductFacts').innerHTML=`<div><span>وزن‌ها</span><strong>${isSpice?'۴۵ و ۸۰ گرم':'۴۵۰ و ۸۰۰ گرم'}</strong></div><div><span>کاربرد</span><strong>${p.usage}</strong></div><div><span>مشخصات طعم</span><strong>${p.profile}</strong></div>`;
  const modal=document.getElementById('productModal'); modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
}
function closeProduct(){const modal=document.getElementById('productModal'); if(!modal)return; modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open');}
function observeReveals(){if(!window.IntersectionObserver){document.querySelectorAll('.reveal').forEach(x=>x.classList.add('visible'));return;}const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ob.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>{if(!x.classList.contains('visible'))ob.observe(x)});}
const state={lang:localStorage.getItem('sarv-lang')||'fa'};
function applyLang(){document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='fa'?'rtl':'ltr';document.querySelectorAll('[data-fa]').forEach(el=>el.innerHTML=state.lang==='fa'?el.dataset.fa:el.dataset.en);const b=document.getElementById('langBtn');if(b)b.textContent=state.lang==='fa'?'EN':'FA';}
document.addEventListener('click',e=>{
  if(e.target.id==='langBtn'){state.lang=state.lang==='fa'?'en':'fa';localStorage.setItem('sarv-lang',state.lang);applyLang();}
  const f=e.target.closest('.filter'); if(f){document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));f.classList.add('active');renderProducts(f.dataset.filter);}
  if(e.target.closest('[data-close-product]'))closeProduct();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProduct();});
document.addEventListener('DOMContentLoaded',()=>{applyLang();renderProducts();});
