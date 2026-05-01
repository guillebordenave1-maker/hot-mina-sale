<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HOT MINA SALE – Preventa Exclusiva 10 de Mayo</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@700&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }

:root {
  --cream:      #d8cbb8;
  --cream-form: #cfc3ad;
  --red:        #d62b0a;
  --red-hover:  #c02208;
  --dark:       #1a1a1a;
  --white:      #ffffff;
  --gray:       #888;
  --border:     #e5e5e5;
  --font-script:'Playfair Display', Georgia, serif;
  --font-head:  'Oswald', Impact, sans-serif;
  --font-body:  'Lato', Arial, sans-serif;
}

body { font-family:var(--font-body); background:var(--white); color:var(--dark); overflow-x:hidden; }

/* ── TOP BAR con texto desplazándose ── */
.topbar {
  background: var(--cream);
  border-bottom: 1px solid #c8baa5;
  overflow: hidden;
  white-space: nowrap;
  padding: 9px 0;
}
.topbar-track {
  display: inline-block;
  animation: marquee 22s linear infinite;
  white-space: nowrap;
}
.topbar-track span {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--dark);
  padding: 0 40px;
}
.topbar-track span::after {
  content: '·';
  margin-left: 40px;
  opacity: .45;
}
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── NAV sin logo ── */
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 40px;
  background: var(--white);
  border-bottom: 1px solid var(--border);
}
.nav-links { display:flex; list-style:none; }
.nav-links li a {
  font-size: 11.5px; font-weight:700; letter-spacing:1.5px;
  text-transform:uppercase; text-decoration:none; color:var(--dark);
  padding: 0 22px; transition:color .2s;
}
.nav-links li a:hover { color:var(--red); }
.nav-links li:not(:last-child) a { border-right:1px solid rgba(0,0,0,.14); }

/* ── HERO ── */
.hero {
  background: var(--cream);
  position: relative;
  overflow: hidden;
  padding: 36px 60px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 310px;
  justify-content: center;
}

/* Badge circular rojo — esquina superior derecha, animado */
.hero-badge {
  position: absolute;
  top: 24px;
  right: clamp(40px, 8vw, 100px);
  width: 76px; height: 76px;
  background: var(--red);
  border-radius: 50%;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  color: var(--white); text-align: center; line-height: 1.2;
  font-family: var(--font-body); font-weight: 900;
  font-size: 10px; letter-spacing: .8px; text-transform: uppercase;
  z-index: 10;
  box-shadow: 0 4px 18px rgba(214,43,10,.45);
  animation: badgePop 2.5s ease-in-out infinite;
}
.hero-badge .pct { font-size: 20px; font-weight: 900; line-height: 1; }
@keyframes badgePop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.07)} }

.hero-date {
  font-size: 11px; font-weight: 900;
  letter-spacing: 5px; text-transform: uppercase; color: var(--red);
  margin-bottom: 2px; position: relative; z-index: 2;
}
.hero-title {
  font-family: var(--font-head);
  font-size: clamp(52px, 10vw, 108px);
  font-weight: 700; line-height: .88;
  color: var(--white); letter-spacing: 2px; text-transform: uppercase;
  text-shadow: 0 2px 20px rgba(0,0,0,.07);
  position: relative; z-index: 2;
}
.hero-sub {
  font-family: var(--font-head);
  font-size: clamp(18px, 4vw, 38px);
  font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
  position: relative; z-index: 2; margin-top: 10px;
  background: var(--red); color: var(--white);
  padding: 7px 28px; display: inline-block;
}
.hero-btn {
  display: inline-block; margin-top: 20px;
  background: var(--red); color: var(--white);
  font-family: var(--font-body); font-size: 11px; font-weight: 900;
  letter-spacing: 3.5px; text-transform: uppercase;
  padding: 14px 52px; text-decoration: none; border: none; cursor: pointer;
  position: relative; z-index: 2;
  transition: background .2s, transform .15s;
  box-shadow: 0 4px 18px rgba(214,43,10,.35);
}
.hero-btn:hover { background: var(--red-hover); transform: translateY(-1px); }
.hero-urgency {
  margin-top: 12px; font-size: 11px; font-weight: 900;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--dark); position: relative; z-index: 2;
}

/* ── COPY ── */
.copy-section {
  text-align: center; padding: 52px 24px 8px;
  max-width: 680px; margin: 0 auto;
}
.copy-title {
  font-family: var(--font-script);
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 400; line-height: 1.2; color: var(--dark);
}
.copy-title .hot { color: var(--red); font-style: italic; font-weight: 700; }
.copy-sub {
  font-size: 13px; font-weight: 700; color: var(--red);
  margin-top: 12px; line-height: 1.6;
}

/* ── FORM — fondo beige como el diseño original ── */
.form-section { max-width: 760px; margin: 32px auto 0; padding: 0 24px; }
.form-box {
  background: var(--cream-form);
  border-radius: 4px;
  padding: 28px 34px 34px;
}
.form-intro {
  font-family: var(--font-body); font-size: 13.5px; color: var(--dark);
  line-height: 1.6; margin-bottom: 20px;
}
.form-intro strong { font-weight: 900; }

.field { margin-bottom: 13px; }
.field label {
  display: block; font-size: 9.5px; font-weight: 700;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: rgba(26,26,26,.6); margin-bottom: 5px;
}
.field input {
  width: 100%; padding: 10px 12px;
  background: rgba(255,255,255,.5); border: 1px solid rgba(0,0,0,.1);
  border-radius: 2px; font-family: var(--font-body); font-size: 13.5px;
  color: var(--dark); outline: none;
  transition: border-color .2s, background .2s, box-shadow .2s;
}
.field input:focus {
  border-color: var(--red); background: rgba(255,255,255,.8);
  box-shadow: 0 0 0 3px rgba(214,43,10,.1);
}
.submit-btn {
  width: 100%; padding: 14px; background: var(--red); color: var(--white);
  font-family: var(--font-body); font-size: 10.5px; font-weight: 900;
  letter-spacing: 3.5px; text-transform: uppercase; border: none;
  border-radius: 2px; cursor: pointer; margin-top: 7px;
  transition: background .2s, transform .15s;
  box-shadow: 0 4px 18px rgba(214,43,10,.35);
}
.submit-btn:hover { background: var(--red-hover); transform: translateY(-1px); }
.submit-btn:disabled { opacity: .7; cursor: default; transform: none; }
.privacy {
  font-size: 10px; color: rgba(26,26,26,.4);
  text-align: center; margin-top: 10px; letter-spacing: .2px;
}
.form-ok { display:none; text-align:center; padding:28px 0 12px; }
.form-ok .ok-icon { font-size: 38px; margin-bottom: 8px; }
.form-ok h3 { font-family: var(--font-script); font-size: 24px; margin-bottom: 6px; }
.form-ok p  { font-size: 13px; color: #666; }

/* ── FEATURES ── */
.feats {
  max-width: 800px; margin: 38px auto 0; padding: 0 24px 56px;
  display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 16px;
}
.feat {
  border: 1.5px solid #ccc2ad; border-radius: 10px;
  padding: 30px 18px; text-align: center; background: var(--white);
  transition: box-shadow .2s;
}
.feat:hover { box-shadow: 0 6px 24px rgba(0,0,0,.07); }
.feat-ico { width: 42px; height: 42px; margin: 0 auto 12px; opacity: .45; }
.feat-ico svg { width:100%; height:100%; }
.feat-name { font-size: 11.5px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: 5px; }
.feat-desc { font-size: 12px; color: var(--gray); line-height: 1.55; }

/* ── COUNTDOWN ── */
.cd-wrap { max-width: 520px; margin: 0 auto 70px; padding: 0 24px; }
.cd-box {
  background: var(--cream); border-radius: 10px;
  border: 1px solid #c8baa5;
  padding: 30px 24px 26px; text-align: center;
}
.cd-label { font-size: 15px; font-weight: 300; color: var(--dark); margin-bottom: 10px; }
.cd-digits {
  font-family: var(--font-script);
  font-size: clamp(44px, 10vw, 78px);
  font-weight: 400; letter-spacing: 3px; color: var(--dark); line-height: 1;
}
.cd-units { display:flex; justify-content:center; margin-top:8px; }
.cd-u { flex:1; text-align:center; font-size:8.5px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:rgba(26,26,26,.4); }

/* ── POPUP ── */
.pop-ov {
  display: none; position: fixed; inset: 0;
  background: rgba(15,15,15,.65); z-index: 99999;
  align-items: center; justify-content: center;
  padding: 20px; backdrop-filter: blur(5px);
}
.pop-ov.open { display: flex; animation: fadeIn .28s ease; }
.pop-box {
  background: var(--white); border-radius: 6px;
  max-width: 430px; width: 100%; overflow: hidden;
  animation: slideUp .3s ease;
  box-shadow: 0 40px 90px rgba(0,0,0,.3);
  position: relative; max-height: 92vh; overflow-y: auto;
}
.pop-hd {
  background: var(--cream); padding: 34px 30px 26px;
  text-align: center; position: relative;
  border-bottom: 1px solid #c8baa5;
}
.pop-close {
  position: absolute; top: 10px; right: 14px;
  background: none; border: none; font-size: 18px;
  cursor: pointer; color: rgba(26,26,26,.45); transition: color .2s;
}
.pop-close:hover { color: var(--red); }
.pop-flames { font-size: 26px; letter-spacing: 5px; margin-bottom: 7px; }
.pop-title { font-family: var(--font-head); font-size: 36px; font-weight: 700; color: var(--white); letter-spacing: 2px; line-height: 1; }
.pop-date { font-size: 10px; font-weight: 900; letter-spacing: 4px; text-transform: uppercase; color: var(--red); margin-top: 3px; }
.pop-pill {
  display: inline-block; background: var(--red); color: white;
  font-size: 9.5px; font-weight: 900; letter-spacing: 2px;
  text-transform: uppercase; padding: 4px 14px; border-radius: 20px; margin-top: 9px;
}
.pop-bd { padding: 22px 28px 28px; }
.pop-lead { font-size: 13px; color: #666; line-height: 1.6; text-align: center; margin-bottom: 18px; }

/* form dentro del popup — mismo estilo beige */
.pop-form-inner {
  background: var(--cream-form);
  border-radius: 4px;
  padding: 18px 18px 22px;
}

.pop-no {
  width: 100%; background: none; border: none;
  font-size: 10.5px; color: rgba(26,26,26,.38);
  text-align: center; cursor: pointer; margin-top: 12px;
  font-family: var(--font-body); text-decoration: underline;
  transition: color .2s; display: block;
}
.pop-no:hover { color: var(--dark); }

@keyframes fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes slideUp { from{opacity:0;transform:translateY(34px) scale(.97)} to{opacity:1;transform:none} }

/* ── MOBILE ── */
@media (max-width:660px) {
  .nav { padding: 12px 16px; }
  .nav-links li a { font-size: 9px; padding: 0 10px; }
  .hero { padding: 22px 18px 32px; }
  .hero-badge { top: 14px; right: 14px; width: 60px; height: 60px; }
  .hero-badge .pct { font-size: 16px; }
  .feats { grid-template-columns: 1fr; }
  .form-box { padding: 20px 18px 24px; }
  .pop-bd { padding: 18px 18px 22px; }
  .pop-hd { padding: 26px 18px 20px; }
}
</style>
</head>
<body>

<!-- TOP BAR con marquee -->
<div class="topbar">
  <div class="topbar-track">
    <span>Hasta 60% OFF</span>
    <span>Preventa Exclusiva</span>
    <span>10 de Mayo</span>
    <span>Envíos a todo el país</span>
    <span>Hasta 60% OFF</span>
    <span>Preventa Exclusiva</span>
    <span>10 de Mayo</span>
    <span>Envíos a todo el país</span>
  </div>
</div>

<!-- NAV sin logo -->
<nav class="nav">
  <ul class="nav-links">
    <li><a href="https://www.minaaccesorios.com/">Inicio</a></li>
    <li><a href="https://www.minaaccesorios.com/productos/">Productos</a></li>
    <li><a href="https://www.minaaccesorios.com/complementos/bufandas/">Winter Collection</a></li>
    <li><a href="https://www.minaaccesorios.com/sobre-mina/">Sobre Mina</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <!-- Badge circular animado, esquina superior derecha -->
  <div class="hero-badge">
    HASTA<br><span class="pct">60%</span><br>OFF
  </div>

  <p class="hero-date">11, 12 y 13 de Mayo</p>
  <h1 class="hero-title">HOT MINA SALE</h1>
  <p class="hero-sub">Sumate a la Pre Venta Exclusiva</p>
  <a href="#registro" class="hero-btn">El 10 de Mayo</a>
  <p class="hero-urgency">¡Precios Increíbles, Poco Stock…Apurate!</p>
</section>

<!-- COPY -->
<section class="copy-section">
  <h2 class="copy-title">Accedé al <span class="hot">HOT SALE</span><br>antes que los demás</h2>
  <p class="copy-sub">Registrate para ser una de las primeras en acceder a las ofertas de Mina Accesorios</p>
</section>

<!-- FORM LANDING -->
<section class="form-section" id="registro">
  <div class="form-box">
    <p class="form-intro">
      Para todos arranca el 11 de Mayo, para vos… El 10 de Mayo<br>
      <strong>¡Sumate al early access y comprá antes que todos!</strong>
    </p>
    <div id="main-form-wrap">
      <div class="field"><label for="fn">Nombre</label><input type="text" id="fn" placeholder="Tu nombre" required></div>
      <div class="field"><label for="fe">Email</label><input type="email" id="fe" placeholder="Tu email" required></div>
      <button class="submit-btn" id="main-btn" onclick="submitForm('main')">Quiero ser parte de la preventa exclusiva</button>
      <p class="privacy">Al registrarte aceptás recibir comunicaciones de Mina Accesorios.</p>
    </div>
    <div class="form-ok" id="main-ok">
      <div class="ok-icon">🎉</div>
      <h3>¡Ya estás dentro!</h3>
      <p>Te avisamos el 10 de Mayo cuando abra la preventa exclusiva.</p>
    </div>
  </div>
</section>

<!-- FEATURES -->
<div class="feats">
  <div class="feat">
    <div class="feat-ico">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="1" y="14" width="38" height="22" rx="3"/>
        <path d="M39 22h6a2 2 0 012 2v6a2 2 0 01-2 2h-6"/><circle cx="10" cy="40" r="3"/><circle cx="30" cy="40" r="3"/>
        <path d="M7 36h26M13 36V14"/>
      </svg>
    </div>
    <div class="feat-name">Envíos a todo el país</div>
    <div class="feat-desc">Recibí tus accesorios favoritos donde estés, en todo el país.</div>
  </div>
  <div class="feat">
    <div class="feat-ico">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="24,3 29,17 44,17 32,26 37,42 24,33 11,42 16,26 4,17 19,17"/>
      </svg>
    </div>
    <div class="feat-name">Hasta 60% OFF</div>
    <div class="feat-desc">Los mejores precios del año, solo durante estos días especiales.</div>
  </div>
  <div class="feat">
    <div class="feat-ico">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="10" width="40" height="28" rx="4"/>
        <path d="M4 20h40"/><path d="M12 30h8M28 30h8"/>
      </svg>
    </div>
    <div class="feat-name">Múltiples pagos</div>
    <div class="feat-desc">Tarjetas, transferencia y más medios de pago disponibles.</div>
  </div>
</div>

<!-- COUNTDOWN -->
<div class="cd-wrap">
  <div class="cd-box">
    <p class="cd-label">La preventa arranca en…</p>
    <div class="cd-digits" id="cdv">00:00:00:00</div>
    <div class="cd-units">
      <span class="cd-u">Días</span>
      <span class="cd-u">Horas</span>
      <span class="cd-u">Minutos</span>
      <span class="cd-u">Segundos</span>
    </div>
  </div>
</div>

<!-- POPUP -->
<div class="pop-ov" id="pop">
  <div class="pop-box">
    <div class="pop-hd">
      <button class="pop-close" onclick="closePop()">✕</button>
      <div class="pop-flames">🔥 🔥 🔥</div>
      <div class="pop-title">HOT MINA SALE</div>
      <div class="pop-date">11, 12 y 13 de Mayo</div>
      <span class="pop-pill">Hasta 60% OFF</span>
    </div>
    <div class="pop-bd">
      <p class="pop-lead">Accedé <strong>un día antes</strong> que todos. Registrate y comprá el <strong>10 de Mayo</strong> con stock completo.</p>
      <div class="pop-form-inner">
        <div id="pop-form-wrap">
          <div class="field"><label for="pn">Nombre</label><input type="text" id="pn" placeholder="Tu nombre" required></div>
          <div class="field"><label for="pe">Email</label><input type="email" id="pe" placeholder="Tu email" required></div>
          <button class="submit-btn" id="pop-btn" onclick="submitForm('pop')">¡Quiero el acceso anticipado!</button>
          <p class="privacy">Sin spam. Solo te avisamos cuando abra la preventa.</p>
        </div>
        <div class="form-ok" id="pop-ok">
          <div class="ok-icon">🎉</div>
          <h3>¡Ya estás dentro!</h3>
          <p>Te avisamos el 10 de Mayo cuando abra la preventa exclusiva.</p>
        </div>
      </div>
      <button class="pop-no" onclick="closePop()">No gracias, prefiero perderme las ofertas</button>
    </div>
  </div>
</div>

<script>
/* ── PERFIT API — lista ID 4 ── */
var API_KEY = 'minaaccesorio-bAu5jcaK4hd2WCOnUx4YWsyIAgrj8iHs';
var LIST_ID = 4;

function submitToPerfit(firstName, email, callback) {
  fetch('/.netlify/functions/perfit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, firstName: firstName })
  })
  .then(function() { callback(true); })
  .catch(function(e) { console.error('Perfit:', e); callback(true); });
}

function submitForm(which) {
  var nameEl  = document.getElementById(which === 'main' ? 'fn' : 'pn');
  var emailEl = document.getElementById(which === 'main' ? 'fe' : 'pe');
  var btn     = document.getElementById(which === 'main' ? 'main-btn' : 'pop-btn');
  var wrapEl  = document.getElementById(which === 'main' ? 'main-form-wrap' : 'pop-form-wrap');
  var okEl    = document.getElementById(which === 'main' ? 'main-ok' : 'pop-ok');

  if (!nameEl.value.trim() || !emailEl.value.trim()) return;
  btn.textContent = 'Registrando…';
  btn.disabled = true;

  submitToPerfit(nameEl.value.trim(), emailEl.value.trim(), function() {
    wrapEl.style.display = 'none';
    okEl.style.display   = 'block';
    localStorage.setItem('mina_r', '1');
    if (which === 'pop') setTimeout(closePop, 2600);
  });
}

/* ── POPUP ── */
function closePop() {
  document.getElementById('pop').classList.remove('open');
  sessionStorage.setItem('mina_s', '1');
}
function openPop() {
  if (sessionStorage.getItem('mina_s') || localStorage.getItem('mina_r')) return;
  document.getElementById('pop').classList.add('open');
}
document.getElementById('pop').addEventListener('click', function(e) {
  if (e.target === this) closePop();
});
setTimeout(openPop, 3000);

/* ── COUNTDOWN → 10 Mayo 2026 medianoche Argentina (UTC-3) ── */
function tick() {
  var target = new Date('2026-05-10T03:00:00Z');
  var diff = target - new Date();
  if (diff <= 0) { document.getElementById('cdv').textContent = '00:00:00:00'; return; }
  var p = function(n) { return String(Math.floor(n)).padStart(2, '0'); };
  document.getElementById('cdv').textContent =
    p(diff/86400000) + ':' + p(diff%86400000/3600000) + ':' +
    p(diff%3600000/60000) + ':' + p(diff%60000/1000);
}
setInterval(tick, 1000);
tick();
</script>

</body>
</html>
