<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Guía Completa Cricut: Materiales, Tapetes y Cuidados | Poppy Craft</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --lavender: #F3F0FA;
    --purple: #9B7EC8;
    --purple-dark: #6B4FA0;
    --purple-light: #D8CCEE;
    --purple-xlight: #EDE8F7;
    --white: #FFFFFF;
    --body: #4A4458;
    --charcoal: #2D2640;
    --divider: #E2DAF0;
  }

  body {
    background-color: var(--lavender);
    color: var(--body);
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    line-height: 1.75;
    font-size: 16px;
  }

  /* ── HERO ── */
  .hero {
    background: var(--white);
    border-bottom: 1px solid var(--divider);
    padding: 64px 24px 52px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
  }
  .brand-tag {
    font-size: 10px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--purple);
    font-weight: 500;
    margin-bottom: 18px;
  }
  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(1.9rem, 5vw, 3rem);
    color: var(--charcoal);
    line-height: 1.2;
    max-width: 640px;
    margin: 0 auto 14px;
  }
  .hero h1 em { font-style: italic; color: var(--purple-dark); }
  .hero-sub {
    font-size: 15px;
    color: var(--body);
    max-width: 480px;
    margin: 0 auto 32px;
    font-weight: 300;
  }

  /* ── ORNAMENT ── */
  .ornament {
    display: flex; align-items: center; justify-content: center;
    gap: 12px; margin: 28px auto;
  }
  .ornament-line {
    width: 56px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--purple-light));
  }
  .ornament-line.right { background: linear-gradient(90deg, var(--purple-light), transparent); }
  .ornament-diamond {
    width: 6px; height: 6px;
    background: var(--purple);
    transform: rotate(45deg);
  }

  /* ── HERO IMAGE ── */
  .hero-img-wrap {
    background: var(--lavender);
    padding: 36px 24px;
    text-align: center;
    border-bottom: 1px solid var(--divider);
  }
  .hero-img-wrap img {
    max-width: 320px; width: 100%;
    display: inline-block;
    border-radius: 2px;
    filter: drop-shadow(0 6px 18px rgba(107,79,160,0.13));
  }

  /* ── CONTAINER ── */
  .container { max-width: 740px; margin: 0 auto; padding: 0 24px; }

  /* ── SECTION LABEL ── */
  .section-label {
    font-size: 10px; letter-spacing: 0.3em;
    text-transform: uppercase; color: var(--purple);
    font-weight: 500; margin-bottom: 12px;
  }

  /* ── SECTION TITLE ── */
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400; font-size: clamp(1.4rem, 3vw, 1.9rem);
    color: var(--charcoal); margin-bottom: 8px;
  }

  /* ── INTRO ── */
  .intro { padding: 60px 24px; background: var(--white); text-align: center; }
  .intro p {
    max-width: 600px; margin: 0 auto;
    font-size: 16px; color: var(--body); line-height: 1.85;
  }

  /* ── SECTION BASE ── */
  .section-white { padding: 60px 24px; background: var(--white); }
  .section-lav   { padding: 60px 24px; background: var(--lavender); }
  .section-white .section-label,
  .section-lav .section-label { text-align: center; }
  .section-white .section-title,
  .section-lav .section-title { text-align: center; }

  /* ── MACHINES GRID ── */
  .machines-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; margin-top: 36px;
  }
  .machine-card {
    background: var(--white);
    border: 1px solid var(--divider);
    overflow: hidden;
    text-align: center;
  }
  .machine-card img {
    width: 100%; height: 180px;
    object-fit: contain; object-position: center;
    background: #f9f9f9;
    display: block;
    padding: 12px;
  }
  .machine-card-body { padding: 20px 16px; }
  .machine-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 6px;
  }
  .machine-card p { font-size: 13px; color: var(--body); line-height: 1.6; }
  .machine-badge {
    display: inline-block;
    background: var(--purple-xlight);
    color: var(--purple-dark);
    font-size: 10px; font-weight: 500;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 3px 10px; margin-bottom: 8px;
  }

  /* ── TAPETES TABLE ── */
  .tapetes-wrap { margin-top: 36px; }
  .tapetes-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px; margin-bottom: 24px;
  }
  .tapete-card {
    background: var(--white);
    border: 1px solid var(--divider);
    overflow: hidden; text-align: center;
  }
  .tapete-card img {
    width: 100%; height: 160px;
    object-fit: contain;
    background: #f9f9f9;
    display: block;
    padding: 10px;
  }
  .tapete-card-body { padding: 14px 12px; }
  .tapete-card h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 4px;
  }
  .tapete-card p { font-size: 12px; color: var(--body); line-height: 1.5; }
  .tapete-dot {
    display: inline-block;
    width: 10px; height: 10px; border-radius: 50%;
    margin-right: 4px; vertical-align: middle;
  }

  /* ── TIP BOX ── */
  .tip-box {
    background: var(--purple-xlight);
    border-left: 3px solid var(--purple);
    padding: 16px 20px;
    font-size: 14px; color: var(--purple-dark);
    margin-top: 20px;
    display: flex; gap: 10px; align-items: flex-start;
  }
  .tip-box svg { flex-shrink: 0; margin-top: 2px; }

  /* ── MATERIALS ── */
  .materials-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px; margin-top: 36px;
  }
  .material-card {
    background: var(--lavender);
    border: 1px solid var(--divider);
    overflow: hidden; text-align: center;
  }
  .material-card img {
    width: 100%; height: 160px;
    object-fit: contain;
    background: #f9f9f9;
    display: block;
    padding: 10px;
  }
  .material-card-body { padding: 14px 12px; }
  .material-card h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 4px;
  }
  .material-card p { font-size: 12px; color: var(--body); line-height: 1.5; }

  /* ── GRAMAJES TABLE ── */
  .table-wrap { margin-top: 36px; overflow-x: auto; }
  table {
    width: 100%; border-collapse: collapse;
    font-size: 14px; background: var(--white);
  }
  thead tr { background: var(--purple); }
  thead th {
    color: var(--white); font-weight: 500;
    padding: 12px 16px; text-align: left;
    font-size: 12px; letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  tbody tr { border-bottom: 1px solid var(--divider); }
  tbody tr:last-child { border-bottom: none; }
  tbody td { padding: 12px 16px; color: var(--body); }
  tbody tr:nth-child(even) { background: var(--lavender); }

  /* ── HERRAMIENTAS ── */
  .tools-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px; margin-top: 36px;
  }
  .tool-card {
    background: var(--white);
    border: 1px solid var(--divider);
    overflow: hidden; text-align: center;
  }
  .tool-card img {
    width: 100%; height: 160px;
    object-fit: contain;
    background: #f9f9f9;
    display: block;
    padding: 10px;
  }
  .tool-card-body { padding: 14px 12px; }
  .tool-card h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 600;
    color: var(--charcoal);
  }

  /* ── CUIDADOS / ERRORES ── */
  .checks-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; margin-top: 36px;
  }
  .check-box {
    background: var(--white);
    border: 1px solid var(--divider);
    padding: 24px 20px;
  }
  .check-box h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 16px;
    display: flex; align-items: center; gap: 8px;
  }
  .check-list { list-style: none; }
  .check-list li {
    font-size: 14px; color: var(--body);
    padding: 7px 0; border-bottom: 1px solid var(--divider);
    display: flex; align-items: flex-start; gap: 10px;
    line-height: 1.5;
  }
  .check-list li:last-child { border-bottom: none; }
  .check-list li .ico { flex-shrink: 0; margin-top: 1px; }

  /* ── PROYECTOS ── */
  .proyectos-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px; margin-top: 36px;
  }
  .proyecto-item {
    background: var(--white);
    border: 1px solid var(--divider);
    padding: 18px 14px; text-align: center;
    font-size: 13px; color: var(--charcoal);
    font-weight: 400;
  }
  .proyecto-item svg { margin: 0 auto 8px; display: block; stroke: var(--purple); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }

  /* ── CONCLUSION ── */
  .conclusion {
    padding: 60px 24px; background: var(--purple);
    text-align: center;
  }
  .conclusion blockquote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.2rem, 3vw, 1.7rem);
    font-weight: 300; font-style: italic;
    color: var(--white); max-width: 600px;
    margin: 0 auto; line-height: 1.6;
  }

  /* ── TIP DE LA SEMANA ── */
  .tip-semana {
    padding: 60px 24px; background: var(--lavender); text-align: center;
  }
  .tip-semana h2 { color: var(--charcoal); margin-bottom: 8px; }
  .tip-card {
    background: var(--white);
    border: 1px solid var(--divider);
    max-width: 540px; margin: 28px auto 0;
    padding: 32px 28px; text-align: left;
    display: flex; gap: 20px; align-items: flex-start;
  }
  .tip-card-icon {
    flex-shrink: 0;
    width: 44px; height: 44px;
    background: var(--purple-xlight);
    display: flex; align-items: center; justify-content: center;
  }
  .tip-card-icon svg { stroke: var(--purple-dark); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; width: 22px; height: 22px; }
  .tip-card p { font-size: 15px; color: var(--body); line-height: 1.75; }

  /* ── FOOTER ── */
  footer {
    background: var(--white);
    border-top: 1px solid var(--divider);
    padding: 48px 24px; text-align: center;
  }
  .footer-profile {
    width: 64px; height: 64px; border-radius: 50%;
    object-fit: cover; border: 2px solid var(--purple-light);
    margin: 0 auto 12px; display: block;
  }
  .footer-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem; color: var(--charcoal);
    font-weight: 300; margin-bottom: 4px;
  }
  .footer-brand span { color: var(--purple-dark); }
  .footer-line { width: 36px; height: 1px; background: var(--purple-light); margin: 14px auto; }
  footer .tagline { font-size: 13px; color: #9A90B0; max-width: 380px; margin: 0 auto 24px; }
  .ig-cta {
    display: inline-flex; align-items: center; gap: 10px;
    border: 1px solid var(--divider); padding: 12px 24px;
    text-decoration: none; color: var(--charcoal);
    font-size: 13px; font-weight: 400; letter-spacing: 0.05em;
    background: var(--lavender);
  }
  .ig-cta svg { width: 20px; height: 20px; stroke: var(--purple); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .ig-handle { color: var(--purple-dark); font-weight: 500; }

  @media (max-width: 600px) {
    .checks-grid { grid-template-columns: 1fr; }
    .machines-grid { grid-template-columns: 1fr 1fr; }
  }
</style>
</head>
<body>

<!-- HERO -->
<header class="hero">
  <p class="brand-tag">Poppy Craft · Guía Cricut</p>
  <h1>Todo lo que debes saber<br><em>sobre tu Cricut</em></h1>
  <p class="hero-sub">Materiales, tapetes y cuidados — consejos prácticos para aprovechar al máximo tu máquina de corte.</p>
  <div class="ornament">
    <div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div>
  </div>
</header>

<!-- HERO IMAGE (kawaii tools illustration) -->
<div class="hero-img-wrap">
  <img src="https://i.ibb.co/5XFkcwbm/perfil-poppy.jpg" alt="Ilustración herramientas kawaii Cricut - Poppy Craft">
</div>

<!-- INTRO -->
<section class="intro">
  <div class="container">
    <p class="section-label">Introducción</p>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <p>Una máquina Cricut es un cortador de vinilo y papel controlado por computadora que ha revolucionado el mundo de las manualidades y los productos personalizados. Desde stickers hasta camisetas, abre un universo de posibilidades para emprendedores creativos.</p>
  </div>
</section>

<!-- 1. TIPOS DE MÁQUINAS -->
<section class="section-lav">
  <div class="container">
    <p class="section-label">Sección 01</p>
    <h2 class="section-title">Tipos de máquinas Cricut</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="machines-grid">

      <div class="machine-card">
        <img src="https://i.ibb.co/mCC6Gnh9/cricut1.jpg" alt="Cricut Joy">
        <div class="machine-card-body">
          <span class="machine-badge">Compacta</span>
          <h3>Cricut Joy</h3>
          <p>Pequeña y portátil. Ideal para etiquetas y proyectos pequeños.</p>
        </div>
      </div>

      <div class="machine-card">
        <img src="https://i.ibb.co/qYmrF91p/cricut2.jpg" alt="Cricut Explore 3">
        <div class="machine-card-body">
          <span class="machine-badge">Emprendedores</span>
          <h3>Cricut Explore 3</h3>
          <p>Corta más de 100 materiales. Perfecta para emprendedores.</p>
        </div>
      </div>

      <div class="machine-card">
        <img src="https://i.ibb.co/dJrkSZyh/cricut3.jpg" alt="Cricut Maker 3">
        <div class="machine-card-body">
          <span class="machine-badge">Pro</span>
          <h3>Cricut Maker 3</h3>
          <p>La más completa. Corta más de 300 materiales.</p>
        </div>
      </div>

      <div class="machine-card">
        <img src="https://i.ibb.co/ymsDRjBK/cricut4.jpg" alt="Cricut en uso">
        <div class="machine-card-body">
          <span class="machine-badge">En acción</span>
          <h3>Cricut en uso</h3>
          <p>Resultados profesionales desde casa con cada modelo.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- 2. TAPETES -->
<section class="section-white">
  <div class="container">
    <p class="section-label">Sección 02</p>
    <h2 class="section-title">Tipos de tapetes Cricut</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="tapetes-grid">

      <div class="tapete-card">
        <img src="https://i.ibb.co/m5RY1xsj/tapete1.jpg" alt="Tapete LightGrip azul">
        <div class="tapete-card-body">
          <h4><span class="tapete-dot" style="background:#7BAFD4;"></span>LightGrip</h4>
          <p>Papel, cartulina ligera</p>
        </div>
      </div>

      <div class="tapete-card">
        <img src="https://i.ibb.co/fVcJZWgV/tapete2.jpg" alt="Tapete StandardGrip verde">
        <div class="tapete-card-body">
          <h4><span class="tapete-dot" style="background:#6DBF8A;"></span>StandardGrip</h4>
          <p>Vinil y cartulina</p>
        </div>
      </div>

      <div class="tapete-card">
        <img src="https://i.ibb.co/bTSmP4t/tapete3.jpg" alt="Tapete StrongGrip morado">
        <div class="tapete-card-body">
          <h4><span class="tapete-dot" style="background:#9B7EC8;"></span>StrongGrip</h4>
          <p>Cartón grueso, madera balsa</p>
        </div>
      </div>

      <div class="tapete-card">
        <img src="https://i.ibb.co/ksM7VQgg/tapete4.jpg" alt="Tapete FabricGrip rosa">
        <div class="tapete-card-body">
          <h4><span class="tapete-dot" style="background:#E8A0B0;"></span>FabricGrip</h4>
          <p>Tela y fieltro</p>
        </div>
      </div>

    </div>
    <div class="tip-box">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span><strong>Tip:</strong> Limpia tus tapetes con toallitas sin alcohol para prolongar su vida útil.</span>
    </div>
  </div>
</section>

<!-- 3. MATERIALES -->
<section class="section-lav">
  <div class="container">
    <p class="section-label">Sección 03</p>
    <h2 class="section-title">Materiales que puedes cortar</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="materials-grid">

      <div class="material-card">
        <img src="https://i.ibb.co/Zz8qnSX7/material1.jpg" alt="Vinil adhesivo">
        <div class="material-card-body">
          <h4>Vinil Adhesivo</h4>
          <p>Para stickers, vasos y decoración.</p>
        </div>
      </div>

      <div class="material-card">
        <img src="https://i.ibb.co/0RLnPx5J/material2.jpg" alt="Vinil textil HTV">
        <div class="material-card-body">
          <h4>Vinil Textil (HTV)</h4>
          <p>Para camisetas y bolsas.</p>
        </div>
      </div>

      <div class="material-card">
        <img src="https://i.ibb.co/nMjGydYC/material3.jpg" alt="Cartulina">
        <div class="material-card-body">
          <h4>Cartulina</h4>
          <p>Ideal para invitaciones y toppers.</p>
        </div>
      </div>

      <div class="material-card">
        <img src="https://i.ibb.co/6Rm49TWZ/material4.jpg" alt="Papel sticker y glitter">
        <div class="material-card-body">
          <h4>Papel Sticker / Glitter</h4>
          <p>Etiquetas y proyectos decorativos.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- 4. GRAMAJES -->
<section class="section-white">
  <div class="container">
    <p class="section-label">Sección 04</p>
    <h2 class="section-title">Gramajes recomendados de cartulina</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Uso</th>
            <th>Gramaje recomendado</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Flores de papel</td><td>180 – 220 g</td></tr>
          <tr><td>Invitaciones</td><td>200 – 250 g</td></tr>
          <tr><td>Toppers</td><td>220 – 300 g</td></tr>
          <tr><td>Cajas pequeñas</td><td>250 – 300 g</td></tr>
        </tbody>
      </table>
    </div>
    <div class="tip-box" style="margin-top:20px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span><strong>Tip:</strong> Entre más gruesa sea la cartulina, más importante es hacer una prueba de corte antes del proyecto final.</span>
    </div>
  </div>
</section>

<!-- 5. HERRAMIENTAS -->
<section class="section-lav">
  <div class="container">
    <p class="section-label">Sección 05</p>
    <h2 class="section-title">Herramientas básicas</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="tools-grid">

      <div class="tool-card">
        <img src="https://i.ibb.co/0V8nbhpm/herramienta1.jpg" alt="Depilador weeder">
        <div class="tool-card-body"><h4>Depilador (Weeder)</h4></div>
      </div>

      <div class="tool-card">
        <img src="https://i.ibb.co/9XzkKkk/herramienta2.jpg" alt="Espátula y raspador">
        <div class="tool-card-body"><h4>Espátula / Raspador</h4></div>
      </div>

      <div class="tool-card">
        <img src="https://i.ibb.co/C3zk9GS6/herramienta3.jpg" alt="Tijeras de precisión">
        <div class="tool-card-body"><h4>Tijeras de precisión</h4></div>
      </div>

      <div class="tool-card">
        <img src="https://i.ibb.co/R1G168Q/herramienta4.jpg" alt="Rodillo brayer">
        <div class="tool-card-body"><h4>Rodillo (Brayer)</h4></div>
      </div>

    </div>
  </div>
</section>

<!-- 6 & 7. CUIDADOS Y ERRORES -->
<section class="section-white">
  <div class="container">
    <p class="section-label">Secciones 06 & 07</p>
    <h2 class="section-title">Cuidados y errores comunes</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="checks-grid">

      <div class="check-box">
        <h3>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B4FA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Buenas prácticas
        </h3>
        <ul class="check-list">
          <li><span class="ico">✦</span> Limpia las cuchillas regularmente.</li>
          <li><span class="ico">✦</span> Mantén la máquina cubierta cuando no la uses.</li>
          <li><span class="ico">✦</span> No jales los tapetes al retirarlos.</li>
          <li><span class="ico">✦</span> Actualiza el software de diseño.</li>
          <li><span class="ico">✦</span> Guarda los materiales en un lugar seco.</li>
          <li><span class="ico">✦</span> Realiza pruebas de corte antes de proyectos grandes.</li>
          <li><span class="ico">✦</span> Evita que se acumulen residuos de papel y vinil.</li>
        </ul>
      </div>

      <div class="check-box">
        <h3>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0392B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          Errores que evitar
        </h3>
        <ul class="check-list">
          <li><span class="ico" style="color:#C0392B;">✕</span> Usar el tapete incorrecto.</li>
          <li><span class="ico" style="color:#C0392B;">✕</span> Cortar sin hacer una prueba previa.</li>
          <li><span class="ico" style="color:#C0392B;">✕</span> Utilizar una cuchilla desgastada.</li>
          <li><span class="ico" style="color:#C0392B;">✕</span> Despegar el material de forma brusca.</li>
          <li><span class="ico" style="color:#C0392B;">✕</span> No configurar correctamente el tipo de material.</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- 8. PROYECTOS -->
<section class="section-lav">
  <div class="container">
    <p class="section-label">Sección 08</p>
    <h2 class="section-title">Proyectos ideales para comenzar</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="proyectos-grid">

      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        Stickers personalizados
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        Toppers para cumpleaños
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        Etiquetas para negocios
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>
        Camisetas personalizadas
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        Cajas de regalo
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Decoraciones para fiestas
      </div>

    </div>
  </div>
</section>

<!-- CONCLUSIÓN -->
<section class="conclusion">
  <div class="container">
    <div class="ornament" style="margin-bottom:28px;">
      <div class="ornament-line" style="background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4));"></div>
      <div class="ornament-diamond" style="background:rgba(255,255,255,0.7);"></div>
      <div class="ornament-line right" style="background:linear-gradient(90deg,rgba(255,255,255,0.4),transparent);"></div>
    </div>
    <blockquote>
      "La Cricut es una herramienta increíble para emprender y crear proyectos únicos. Conociendo los materiales, tapetes y cuidados adecuados, podrás sacarle el máximo provecho y hacer que tu máquina dure por muchos años."
    </blockquote>
  </div>
</section>

<!-- TIP DE LA SEMANA -->
<section class="tip-semana">
  <div class="container">
    <p class="section-label">Exclusivo</p>
    <h2 class="section-title">Tip de la semana con Poppy Craft</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="tip-card">
      <div class="tip-card-icon">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <p>Antes de cortar cualquier material nuevo, siempre haz una <strong>prueba de corte en una esquina del tapete</strong>. Esto te ahorra material, tiempo y frustraciones — especialmente con cartulinas gruesas o vinil especializado.</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <img src="https://i.ibb.co/5XFkcwbm/perfil-poppy.jpg" alt="Poppy Craft perfil" class="footer-profile">
  <div class="footer-brand"><span>Poppy</span> Craft</div>
  <div class="footer-line"></div>
  <p class="tagline">Creamos detalles personalizados que convierten cada momento especial en un recuerdo inolvidable.</p>
  <a href="https://www.instagram.com/poppy.crafty" target="_blank" rel="noopener" class="ig-cta">
    <svg viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    <span>Síguenos en Instagram &nbsp;<span class="ig-handle">@poppy.crafty</span></span>
  </a>
</footer>

</body>
</html>


<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cómo hacer un Portaplatos para Fiestas — Poppycrafty</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Jost:wght@300;400;500&family=Satisfy&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --azul:        #A9C7E8;
    --azul-medio:  #C0D8F1;
    --azul-claro:  #D7EAF8;
    --azul-palido: #EEF6FD;
    --crema:       #FAFAF8;
    --texto:       #1E2E3D;
    --gris:        #6B7F90;
    --dorado:      #F5D98C;
    --blanco:      #FFFFFF;
  }

  body {
    font-family: 'Jost', sans-serif;
    background: var(--crema);
    color: var(--texto);
    line-height: 1.8;
    min-width: 320px;
  }

  /* ══ HERO ══ */
  .hero {
    min-height: 100vh;
    background: linear-gradient(180deg, #ddeefa 0%, #eef6fd 60%, #FAFAF8 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 32px 80px;
    position: relative;
    overflow: hidden;
  }

  /* Decoraciones flotantes hero */
  .hero-deco {
    position: absolute;
    pointer-events: none;
  }
  .hero-deco.bow {
    top: 40px; left: 50%;
    transform: translateX(-50%);
    font-size: 0;
    width: 90px; height: 70px;
    background: url('https://i.imgur.com/placeholder.png') center/contain no-repeat;
  }
  .deco-wave-left {
    position: absolute;
    bottom: 0; left: -30px;
    width: 220px; opacity: 0.18;
  }
  .deco-wave-right {
    position: absolute;
    bottom: 0; right: -30px;
    width: 220px; opacity: 0.18;
    transform: scaleX(-1);
  }
  .deco-flower-tl {
    position: absolute;
    top: 28px; left: 28px;
    width: 80px; opacity: 0.22;
  }
  .deco-flower-br {
    position: absolute;
    bottom: 80px; right: 28px;
    width: 70px; opacity: 0.20;
  }

  .hero-tag {
    display: inline-block;
    border: 1.5px solid var(--azul);
    color: var(--azul);
    border-radius: 999px;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 5px 20px;
    margin-bottom: 28px;
    font-weight: 500;
  }

  .hero-script {
    font-family: 'Satisfy', cursive;
    font-size: 1.35rem;
    color: var(--azul);
    display: block;
    margin-bottom: 14px;
  }

  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.6rem, 7vw, 4.5rem);
    font-weight: 600;
    line-height: 1.1;
    color: var(--texto);
    margin-bottom: 24px;
    max-width: 680px;
  }

  .hero h1 em {
    font-style: italic;
    color: var(--azul);
  }

  .hero-desc {
    font-size: 1rem;
    color: var(--gris);
    font-weight: 300;
    max-width: 460px;
    margin: 0 auto 40px;
  }

  .hero-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-meta span {
    font-size: 0.8rem;
    color: var(--gris);
    font-weight: 300;
    letter-spacing: 0.04em;
  }

  .hero-meta .dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--azul-medio);
    display: inline-block;
  }

  /* Imagen hero central */
  .hero-img-wrap {
    margin: 40px auto 0;
    max-width: 560px;
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(169,199,232,0.28);
    position: relative;
  }

  .hero-img-wrap img {
    width: 100%; display: block;
  }

  .hero-img-overlay {
    position: absolute;
    top: 16px; right: 16px;
    background: rgba(255,255,255,0.88);
    backdrop-filter: blur(6px);
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 0.76rem;
    color: var(--texto);
    font-weight: 500;
    letter-spacing: 0.04em;
  }

  /* ══ INTRO BAND ══ */
  .intro-band {
    background: var(--azul);
    padding: 64px 40px;
    text-align: center;
  }

  .intro-band p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.55rem;
    color: var(--blanco);
    max-width: 660px;
    margin: 0 auto;
    line-height: 1.55;
  }

  .intro-band p span {
    color: var(--dorado);
  }

  /* ══ MATERIALES ══ */
  .materiales-sec {
    padding: 80px 40px;
    max-width: 860px;
    margin: 0 auto;
  }

  .eyebrow {
    font-family: 'Satisfy', cursive;
    font-size: 1.1rem;
    color: var(--azul);
    display: block;
    margin-bottom: 8px;
  }

  .sec-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .sec-title em { font-style: italic; color: var(--azul); }

  .rule {
    width: 48px; height: 2px;
    background: var(--azul);
    border-radius: 2px;
    margin-bottom: 28px;
  }

  .mat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 32px;
  }

  .mat-card {
    background: var(--azul-palido);
    border-radius: 18px;
    padding: 28px 24px;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--azul-claro);
  }

  .mat-card::before {
    content: attr(data-num);
    position: absolute;
    top: -10px; right: 16px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 5rem;
    font-weight: 600;
    color: var(--azul-claro);
    line-height: 1;
    pointer-events: none;
  }

  .mat-icon {
    font-size: 1.5rem;
    margin-bottom: 10px;
    display: block;
  }

  .mat-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--texto);
  }

  .mat-card p {
    font-size: 0.9rem;
    color: var(--gris);
    font-weight: 300;
    line-height: 1.65;
  }

  .mat-card.opcional {
    background: var(--blanco);
    border: 1.5px dashed var(--azul-medio);
  }

  .badge-opc {
    display: inline-block;
    background: var(--azul);
    color: var(--blanco);
    font-size: 0.62rem;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 999px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  /* ══ IMAGEN 1 - SLOT ══ */
  .img-slot-band {
    background: var(--blanco);
    padding: 70px 40px;
  }

  .img-slot-inner {
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
  }

  .img-slot-inner .text-col .eyebrow { margin-top: 0; }

  .img-slot-inner p {
    font-size: 0.97rem;
    color: #3d4f5e;
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 18px;
  }

  .img-slot {
    border-radius: 20px;
    overflow: hidden;
    background: var(--azul-palido);
    aspect-ratio: 4/5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed var(--azul-medio);
    flex-direction: column;
    gap: 10px;
  }

  .img-slot img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }

  .img-slot-placeholder {
    text-align: center;
    color: var(--azul);
    font-size: 0.85rem;
    font-weight: 400;
    padding: 32px;
  }

  .img-slot-placeholder .icon {
    font-size: 2.4rem;
    display: block;
    margin-bottom: 8px;
    opacity: 0.6;
  }

  /* ══ TUTORIAL STEPS ══ */
  .tutorial-band {
    background: var(--crema);
    padding: 90px 40px;
  }

  .tutorial-inner {
    max-width: 860px;
    margin: 0 auto;
  }

  .step-list {
    margin-top: 48px;
  }

  .step {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 24px;
    margin-bottom: 56px;
    align-items: start;
  }

  .step-num {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: var(--azul-palido);
    border: 2px solid var(--azul-medio);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .step-num span {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--azul);
    line-height: 1;
  }

  .step-body h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 10px;
    padding-top: 14px;
    color: var(--texto);
  }

  .step-body p {
    font-size: 0.97rem;
    color: #3d4f5e;
    font-weight: 300;
    line-height: 1.85;
    margin-bottom: 14px;
  }

  .tip-box {
    background: var(--azul-palido);
    border-left: 3px solid var(--azul);
    border-radius: 0 12px 12px 0;
    padding: 16px 20px;
    margin-top: 16px;
  }

  .tip-box .tip-label {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--azul);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 6px;
  }

  .tip-box p {
    font-size: 0.9rem;
    color: var(--gris);
    margin: 0;
    font-weight: 300;
  }

  .warn-box {
    background: #fff9ec;
    border-left: 3px solid var(--dorado);
    border-radius: 0 12px 12px 0;
    padding: 16px 20px;
    margin-top: 16px;
  }

  .warn-box .warn-label {
    font-size: 0.72rem;
    font-weight: 500;
    color: #b8942b;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 6px;
  }

  .warn-box p {
    font-size: 0.9rem;
    color: #7a6830;
    margin: 0;
    font-weight: 300;
  }

  /* ══ IMAGEN 2 - SLOT ══ */
  .img2-band {
    background: var(--azul-palido);
    padding: 70px 40px;
  }

  .img2-inner {
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
  }

  .img2-inner .img-slot { aspect-ratio: 4/5; }

  /* ══ VIDEO SECTION ══ */
  .video-band {
    background: var(--texto);
    padding: 80px 40px;
    text-align: center;
  }

  .video-band .eyebrow { color: var(--azul-claro); }

  .video-band .sec-title {
    color: var(--blanco);
    margin-bottom: 8px;
  }

  .video-band .sec-title em { color: var(--azul-medio); }

  .video-band .rule { margin: 18px auto 30px; background: var(--azul-medio); }

  .video-desc {
    color: rgba(255,255,255,0.65);
    font-size: 0.95rem;
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto 36px;
  }

  .video-frame-wrap {
    max-width: 400px;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.35);
    background: #000;
    aspect-ratio: 9/16;
    position: relative;
  }

  .video-frame-wrap iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .video-fallback {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #1a2a38, #0d1a24);
    color: rgba(255,255,255,0.8);
    gap: 16px;
  }

  .video-fallback .play-btn {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: var(--azul);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .video-fallback .play-btn:hover { transform: scale(1.1); }

  .video-fallback p {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.55);
    font-weight: 300;
    max-width: 220px;
    text-align: center;
    line-height: 1.6;
  }

  .video-fallback a.ver-link {
    display: inline-block;
    background: var(--azul);
    color: var(--blanco);
    padding: 10px 28px;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: opacity 0.2s;
  }

  .video-fallback a.ver-link:hover { opacity: 0.85; }

  /* ══ RECOMENDACIONES FINALES ══ */
  .recom-band {
    background: var(--blanco);
    padding: 80px 40px;
  }

  .recom-inner {
    max-width: 860px;
    margin: 0 auto;
  }

  .recom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 36px;
  }

  .recom-card {
    border-radius: 18px;
    padding: 28px 24px;
    background: var(--crema);
    border: 1px solid var(--azul-claro);
  }

  .recom-card .recom-icon {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 12px;
  }

  .recom-card h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .recom-card p {
    font-size: 0.9rem;
    color: var(--gris);
    font-weight: 300;
    line-height: 1.7;
  }

  /* ══ CONTACTO / REDES ══ */
  .contacto-band {
    background: linear-gradient(160deg, #ddeefa 0%, #eef6fd 100%);
    padding: 80px 40px;
    text-align: center;
  }

  .contacto-band .sec-title { margin-bottom: 8px; }
  .contacto-band .rule { margin: 16px auto 28px; }

  .contacto-desc {
    color: var(--gris);
    font-size: 0.97rem;
    font-weight: 300;
    max-width: 440px;
    margin: 0 auto 40px;
  }

  .redes-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin-bottom: 40px;
  }

  .red-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 14px;
    font-size: 0.92rem;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .red-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(169,199,232,0.35);
  }

  .red-btn.whatsapp {
    background: #25D366;
    color: #fff;
  }

  .red-btn.tiktok {
    background: var(--texto);
    color: #fff;
  }

  .red-btn.instagram {
    background: linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    color: #fff;
  }

  .red-btn .red-icon {
    width: 22px; height: 22px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  /* SVG icons inline */
  .icon-wa svg, .icon-tt svg, .icon-ig svg { width: 20px; height: 20px; fill: #fff; }

  .wa-note {
    font-size: 0.8rem;
    color: var(--gris);
    font-weight: 300;
    margin-top: 8px;
  }

  /* ══ FOOTER ══ */
  .site-footer {
    background: var(--texto);
    color: rgba(255,255,255,0.4);
    text-align: center;
    padding: 28px 20px;
    font-size: 0.78rem;
    letter-spacing: 0.06em;
  }

  .site-footer span { color: var(--azul-medio); }

  /* ══ RESPONSIVE ══ */
  @media (max-width: 660px) {
    .img-slot-inner,
    .img2-inner {
      grid-template-columns: 1fr;
    }
    .img-slot-inner .text-col { order: 2; }
    .img-slot-inner .img-col { order: 1; }

    .step {
      grid-template-columns: 56px 1fr;
      gap: 16px;
    }

    .step-num {
      width: 48px; height: 48px;
    }

    .step-num span { font-size: 1.4rem; }
    .hero h1 { font-size: 2.2rem; }
    .intro-band p { font-size: 1.2rem; }
  }
</style>
</head>
<body>

<!-- ══ HERO ══ -->
<header class="hero">

  <svg class="deco-wave-left" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 100 Q60 40 110 80 Q160 120 210 60" stroke="#A9C7E8" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M10 130 Q60 70 110 110 Q160 150 210 90" stroke="#C0D8F1" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M10 70 Q60 10 110 50 Q160 90 210 30" stroke="#D7EAF8" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>

  <svg class="deco-wave-right" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 100 Q60 40 110 80 Q160 120 210 60" stroke="#A9C7E8" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M10 130 Q60 70 110 110 Q160 150 210 90" stroke="#C0D8F1" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M10 70 Q60 10 110 50 Q160 90 210 30" stroke="#D7EAF8" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>

  <svg class="deco-flower-tl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="30" rx="16" ry="22" fill="#A9C7E8" opacity="0.6"/>
    <ellipse cx="73" cy="43" rx="16" ry="22" fill="#C0D8F1" opacity="0.6" transform="rotate(72 73 43)"/>
    <ellipse cx="64" cy="72" rx="16" ry="22" fill="#A9C7E8" opacity="0.55" transform="rotate(144 64 72)"/>
    <ellipse cx="36" cy="72" rx="16" ry="22" fill="#C0D8F1" opacity="0.55" transform="rotate(216 36 72)"/>
    <ellipse cx="27" cy="43" rx="16" ry="22" fill="#A9C7E8" opacity="0.6" transform="rotate(288 27 43)"/>
    <circle cx="50" cy="50" r="9" fill="#EEF6FD"/>
    <circle cx="50" cy="50" r="5" fill="#D7EAF8"/>
  </svg>

  <svg class="deco-flower-br" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="30" rx="16" ry="22" fill="#A9C7E8" opacity="0.5"/>
    <ellipse cx="73" cy="43" rx="16" ry="22" fill="#C0D8F1" opacity="0.5" transform="rotate(72 73 43)"/>
    <ellipse cx="64" cy="72" rx="16" ry="22" fill="#A9C7E8" opacity="0.45" transform="rotate(144 64 72)"/>
    <ellipse cx="36" cy="72" rx="16" ry="22" fill="#C0D8F1" opacity="0.45" transform="rotate(216 36 72)"/>
    <ellipse cx="27" cy="43" rx="16" ry="22" fill="#A9C7E8" opacity="0.5" transform="rotate(288 27 43)"/>
    <circle cx="50" cy="50" r="9" fill="#EEF6FD"/>
    <circle cx="50" cy="50" r="5" fill="#D7EAF8"/>
  </svg>

  <!-- LAYOUT: imagen izq + texto der -->
  <div style="
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 52px;
    max-width: 900px;
    width: 100%;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  ">

    <!-- CARD IMAGEN -->
    <div style="
      flex-shrink: 0;
      width: 300px;
      background: rgba(255,255,255,0.72);
      backdrop-filter: blur(10px);
      border-radius: 28px;
      padding: 14px;
      box-shadow: 0 20px 56px rgba(169,199,232,0.32), 0 2px 8px rgba(169,199,232,0.18);
      border: 1.5px solid rgba(255,255,255,0.9);
    ">
      <img
        src="https://i.ibb.co/bjWwDbRL/hero.jpg"
        alt="Poppy Crafty"
        style="
          width: 100%;
          border-radius: 18px;
          display: block;
          aspect-ratio: 1/1;
          object-fit: cover;
        "
      >
      <div style="
        text-align: center;
        padding: 12px 8px 4px;
        font-family: 'Satisfy', cursive;
        font-size: 1rem;
        color: #A9C7E8;
        letter-spacing: 0.02em;
      ">✦ Poppycrafty ✦</div>
    </div>

    <!-- TEXTO -->
    <div style="
      flex: 1;
      min-width: 260px;
      max-width: 420px;
      text-align: left;
    ">
      <div class="hero-tag" style="margin-bottom: 20px;">Tutorial · Poppycrafty</div>
      <span class="hero-script" style="display:block; margin-bottom:12px;">paso a paso</span>
      <h1 style="text-align:left; margin-bottom:20px;">Cómo hacer un<br><em>portaplatos</em><br>para fiestas</h1>
      <p class="hero-desc" style="text-align:left; margin: 0 0 32px 0;">Desde los materiales hasta el corte final, todo lo que necesitás saber para crear portaplatos personalizados que dejan boquiabiertos.</p>
      <div class="hero-meta" style="justify-content: flex-start;">
        <span>✦ Tutorial completo</span>
        <span class="dot"></span>
        <span>Nivel: principiante</span>
        <span class="dot"></span>
        <span>Materiales básicos</span>
      </div>
    </div>

  </div>
</header>
<!-- ══ INTRO ══ -->
<section class="intro-band">
  <p>"Un portaplatos no es solo donde va el plato. Es lo primero que ve el invitado cuando se sienta, y lo último que recuerda cuando se va. <span>Es parte de la ambientación.</span>"</p>
</section>

<!-- ══ MATERIALES ══ -->
<section class="materiales-sec">
  <span class="eyebrow">Antes de empezar</span>
  <h2 class="sec-title">Los <em>materiales</em> que necesitás</h2>
  <div class="rule"></div>
  <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; margin-bottom:12px;">
    La calidad del resultado depende en gran parte de qué materiales usás. No importa qué tan bien manejes el diseño si el papel es el incorrecto, el portaplatos se va a ver flojo, sin cuerpo y poco profesional. Acá están los esenciales:
  </p>

  <div class="mat-grid">

    <div class="mat-card" data-num="01">
      <span class="mat-icon">📄</span>
      <h3>Papel Diploma</h3>
      <p>Específicamente de <strong>216 g/m²</strong>. Este gramaje es clave: le da rigidez suficiente para que el portaplatos mantenga su forma plana sin que se doble. Un papel más delgado —por ejemplo de 90 g— se ve amateur y se arruga con la humedad de los platos.</p>
    </div>

    <div class="mat-card" data-num="02">
      <span class="mat-icon">🖨️</span>
      <h3>Impresora para diseños</h3>
      <p>Idealmente una impresora de inyección de tinta con buena resolución (mínimo 300 dpi). La calidad de la impresión determina si los colores del diseño se ven vibrantes o apagados. Si podés, hacé siempre una prueba en papel bond antes de imprimir en el papel diploma.</p>
    </div>

    <div class="mat-card" data-num="03">
      <span class="mat-icon">🎀</span>
      <h3>Cinta de doble cara</h3>
      <p>Para unir piezas si el portaplatos tiene capas o elementos 3D. Preferí las de espuma doble (foam tape) para dar altura y profundidad a ciertos elementos decorativos. La cinta delgada también sirve para reforzar bordes y esquinas.</p>
    </div>

    <div class="mat-card opcional" data-num="">
      <span class="badge-opc">Opcional pero recomendado</span>
      <span class="mat-icon">⚙️</span>
      <h3>Máquina Cricut</h3>
      <p>Para cortes precisos, especialmente si el portaplatos tiene formas personalizadas, esquinas redondeadas, siluetas de personajes o calados. Sin Cricut podés usar tijeras y exacto, pero los bordes nunca quedan igual de limpios en formas complicadas.</p>
    </div>

  </div>
</section>

<section class="img-slot-band">
  <div class="img-slot-inner">
    <div class="text-col">
      <span class="eyebrow">El primer paso</span>
      <h2 class="sec-title">El diseño:<br>donde <em>todo empieza</em></h2>
      <div class="rule"></div>
      <p>Antes de tocar ningún material, el portaplatos ya tiene que existir en tu pantalla. El diseño define el tamaño, los colores, los elementos decorativos y si vas a necesitar la Cricut o no. Usá Canva, Adobe Illustrator o Cricut Design Space dependiendo de lo que tengas disponible.</p>
      <p>El tamaño estándar para un portaplatos de fiesta es de <strong>30 × 30 cm</strong>, aunque podés hacerlo desde 28 hasta 35 cm según la vajilla del cliente. Siempre preguntá antes de diseñar.</p>
    </div>
    <div class="img-col">
      <div class="img-slot">
        <img 
          src="https://i.ibb.co/pcyZ5QC/Whats-App-Image-2026-06-15-at-4-07-09-PM.jpg" 
          alt="Diseño de portaplatos" 
          style="width: 100%; height: auto; border-radius: 12px; display: block;"
        >
      </div>
    </div>
  </div>
</section>

<!-- ══ TUTORIAL STEPS ══ -->
<section class="tutorial-band">
  <div class="tutorial-inner">
    <span class="eyebrow">El proceso completo</span>
    <h2 class="sec-title">Paso a <em>paso</em></h2>
    <div class="rule"></div>
    <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; max-width:680px;">
      Seguí este orden. Saltarse pasos —especialmente en la preparación del diseño y la calibración de la impresora— es lo que más arruina portaplatos que ya venían bien encaminados.
    </p>

    <div class="step-list">

      <!-- PASO 1 -->
      <div class="step">
        <div class="step-num"><span>1</span></div>
        <div class="step-body">
          <h3>Tomá las medidas y acordalas con el cliente</h3>
          <p>Antes de abrir cualquier programa de diseño, confirmá con la persona el tamaño exacto del portaplatos que necesita. Pedile que te mande foto de los platos si va a ser una fiesta específica. Las medidas importan: un portaplatos de 28 cm en una mesa con platos de 32 cm se va a ver mal.</p>
          <p>También en este punto confirmás la temática, los colores, si quiere nombre o no, y cuántas unidades necesita. Hacé todo esto antes de empezar a diseñar porque cambiar el diseño a la mitad cuesta el doble de tiempo.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip</span>
            <p>Creá un formulario sencillo en Google Forms o un mensaje de WhatsApp con preguntas clave. Te ahorrás idas y venidas y el cliente siente que sos profesional desde el primer momento.</p>
          </div>
        </div>
      </div>

      <!-- PASO 2 -->
      <div class="step">
        <div class="step-num"><span>2</span></div>
        <div class="step-body">
          <h3>Creá el diseño digital</h3>
          <p>Abrí tu programa de diseño y configurá el documento al tamaño final del portaplatos con sangrado de 3 mm en todos los lados (el área que se corta después). Diseñá en alta resolución: mínimo 300 dpi para impresión.</p>
          <p>Definí el fondo, los elementos decorativos, el texto (nombre, edad, año) y cualquier imagen de personaje que el cliente haya pedido. Si usás imágenes descargadas de internet, revisá que sean de buena calidad: una imagen de 200×200 px que parezca bien en pantalla se va a ver pixelada impresa en 30×30 cm.</p>
          <p>Una vez terminado el diseño, exportalo en PDF de alta calidad o en PNG a 300 dpi. No lo imprimás directo desde Canva en su tamaño original sin verificar las medidas reales en cm.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip</span>
            <p>Antes de exportar, cambiá la vista del diseño a escala de grises para revisar si hay suficiente contraste. Un diseño que solo se ve bien en color a veces no imprime bien en ciertas impresoras con tinta baja.</p>
          </div>
          <div class="warn-box">
            <span class="warn-label">⚠️ Ojo</span>
            <p>No uses imágenes tomadas de Google sin verificar la resolución. Buscalas en Freepik, Flaticon o Canva Pro donde garantizan calidad de impresión. Los vectores (.svg o .ai) siempre son preferibles a los .jpg para elementos decorativos.</p>
          </div>
        </div>
      </div>

      <!-- PASO 3 -->
      <div class="step">
        <div class="step-num"><span>3</span></div>
        <div class="step-body">
          <h3>Imprimí en papel diploma</h3>
          <p>Este es el paso más delicado y donde más se arruinan los trabajos. Antes de imprimir el trabajo final, hacé una prueba en papel bond normal al mismo tamaño. Verificá que los colores, el texto y las medidas están correctos. Solo cuando estés segura, pasá al papel diploma de 216 g.</p>
          <p>Configurá la impresora en la calidad más alta disponible. En la mayoría de impresoras esto está bajo "Configuración de papel" como "Papel fotográfico" o "Calidad alta". Esto hace que la impresora deposite más tinta y los colores salgan más ricos y saturados.</p>
          <p>Revisá que el papel entre recto en la bandeja. El papel diploma de 216 g es más grueso y a veces se traba si la bandeja no está bien ajustada. Si tu impresora tiene una bandeja posterior de alimentación manual, úsala para papeles gruesos porque es más directa y hay menos riesgo de que el papel se doble.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip</span>
            <p>Dejá secar la impresión mínimo 5 minutos antes de tocarla. La tinta en papel no poroso (como el diploma plastificado) tarda más en fijarse y si lo tocás antes, corrés el riesgo de manchar el diseño con las huellas de los dedos.</p>
          </div>
          <div class="warn-box">
            <span class="warn-label">⚠️ Ojo</span>
            <p>No todas las impresoras aceptan papel de 216 g. Revisá el manual de tu impresora para ver el gramaje máximo que soporta. Si forzás un papel más grueso del soportado, podés dañar los rodillos internos.</p>
          </div>
        </div>
      </div>

      <!-- PASO 4 -->
      <div class="step">
        <div class="step-num"><span>4</span></div>
        <div class="step-body">
          <h3>Corte: tijeras, exacto o Cricut</h3>
          <p>Si el portaplatos es rectangular o cuadrado con esquinas rectas, podés cortarlo con una guillotina o regla y exacto. Marcá con lápiz las líneas de corte y usá una superficie de corte limpia para no rayar la mesa.</p>
          <p>Si el diseño tiene esquinas redondeadas o formas decorativas en los bordes, aquí es donde la Cricut marca la diferencia. Programá el corte en Cricut Design Space con la misma forma del portaplatos, coloca el papel impreso en el mat de agarre ligero (light-grip mat) y deja que la máquina haga el corte de precisión.</p>
          <p>Para la Cricut, configurá el material como "Papel grueso" o "Cardstock pesado". Hacé siempre un corte de prueba en un pedazo pequeño del mismo papel para verificar que la presión y la velocidad están bien antes de cortar el trabajo terminado.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip de Cricut</span>
            <p>Cambiá la cuchilla cada 2-3 proyectos intensivos. Una cuchilla desgastada corta de forma irregular y puede arrastrar el papel en vez de cortarlo limpiamente. Una cuchilla nueva es la diferencia entre un borde impecable y uno con pelusas.</p>
          </div>
        </div>
      </div>

      <!-- PASO 5 -->
      <div class="step">
        <div class="step-num"><span>5</span></div>
        <div class="step-body">
          <h3>Armado y acabados finales</h3>
          <p>Si el portaplatos tiene capas —por ejemplo una base impresa y encima un topper o elemento 3D adicional— es el momento de armarlos. Usá la cinta de doble cara o foam tape para pegar los elementos. El foam tape le da dimensión al portaplatos y hace que se vea más premium porque los elementos sobresalen ligeramente de la base.</p>
          <p>Revisá los bordes. Si algún corte quedó con pelusas, podés usar una lija muy fina (grano 400) con un movimiento suave para limpiarlos. También podés pasar un plumón negro o del color del borde del diseño para que las orillas se vean terminadas y no se note el color blanco del papel.</p>
          <p>Si el cliente quiere que el portaplatos sea lavable o resistente a la humedad, podés aplicar un sellador en spray mate o brillante. Esto es especialmente útil para eventos en exteriores donde puede haber humedad o lluvia ligera.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip de presentación</span>
            <p>Empacá cada portaplatos en una bolsa de celofán o envolvelos en papel de seda antes de entregárselos al cliente. El packaging no solo protege el trabajo, también hace que la entrega se sienta más profesional y cuidada.</p>
          </div>
        </div>
      </div>

      <!-- PASO 6 -->
      <div class="step">
        <div class="step-num"><span>6</span></div>
        <div class="step-body">
          <h3>Control de calidad antes de entregar</h3>
          <p>Antes de empacar, revisá uno por uno todos los portaplatos. Buscás: manchas de tinta, bordes con pelusas que se te hayan pasado, elementos 3D mal pegados, texto con errores tipográficos. Es mucho más fácil corregir un error antes de la entrega que después.</p>
          <p>Tomá fotos de los portaplatos terminados en buena luz. Estas fotos son tu portafolio para futuros clientes. Ponelos sobre una superficie limpia y neutra, preferiblemente blanca o de madera, con luz natural. Un portaplatos bien fotografiado consigue más pedidos que diez publicidades escritas.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip de negocio</span>
            <p>Pedile al cliente que te mande foto del portaplatos en la mesa de la fiesta. Esa foto, con el contexto real de la decoración, es infinitamente más poderosa para tu Instagram que una foto de estudio. A la gente le encanta ver el resultado final en ambiente.</p>
          </div>
        </div>
      </div>

    </div><!-- /step-list -->
  </div>
</section>

<section class="img2-band">
  <div class="img2-inner">
    <div class="img-col">
      <div class="img-slot">
        <img 
          src="https://i.ibb.co/23rr4tZC/Whats-App-Image-2026-06-15-at-4-07-10-PM.jpg" 
          alt="Resultado final del portaplatos" 
          style="width: 100%; height: auto; border-radius: 12px; display: block;"
        >
      </div>
    </div>
    <div class="text-col">
      <span class="eyebrow">El resultado final</span>
      <h2 class="sec-title">De la pantalla<br>a la <em>mesa</em></h2>
      <div class="rule"></div>
      <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; margin-bottom:16px;">Cuando todo el proceso se hace con cuidado, el resultado es un accesorio de fiesta que parece salido de una tienda de decoración de alto nivel. Y la gente lo nota.</p>
      <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; margin-bottom:0;">Lo que la gente ve en la mesa no es un pedazo de papel. Ve la intención detrás, el detalle pensado, el color que combina exactamente con el resto de la decoración. Eso no se fabrica en serie.</p>
    </div>
  </div>
</section>

<!-- ══ RECOMENDACIONES ══ -->
<section class="recom-band">
  <div class="recom-inner">
    <span class="eyebrow">Para hacerlo mejor</span>
    <h2 class="sec-title">Extras que <em>elevan</em> el resultado</h2>
    <div class="rule"></div>
    <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; max-width:680px;">
      Con los pasos básicos ya tenés un buen portaplatos. Estas son las cosas adicionales que marcan la diferencia entre "quedó bonito" y "quedó increíble".
    </p>

    <div class="recom-grid">

      <div class="recom-card">
        <span class="recom-icon">✨</span>
        <h4>Agregale escarcha o foil</h4>
        <p>Una capa fina de glitter transparente sobre elementos metálicos del diseño (estrellas, bordes, letras) hace que el portaplatos brille de forma elegante. Aplicalo con pegamento en gel y un pincel fino antes de que seque.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">🎀</span>
        <h4>Terminaciones con lazo</h4>
        <p>Un lazo de listón del color principal del evento pegado en la esquina superior del portaplatos lo eleva visualmente al instante. Es un detalle pequeño pero la gente lo nota y lo comenta.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">🌸</span>
        <h4>Elementos 3D en foam</h4>
        <p>Cortá con Cricut elementos decorativos en foam de colores (flores, estrellas, mariposas) y pegálos sobre el portaplatos. Dan textura real y hacen que el portaplatos se sienta más elaborado que uno solo impreso.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">📐</span>
        <h4>Coordina con el resto</h4>
        <p>El portaplatos impacta más cuando coordina con otros elementos: servilleteros, etiquetas de botella, toppers del pastel. Ofrecer el set completo es una excelente forma de aumentar el valor del pedido.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">💧</span>
        <h4>Sellador para exteriores</h4>
        <p>Si la fiesta es al aire libre, protegé la impresión con un sellador en spray. El mate da un acabado más elegante y no refleja la luz. El brillante protege mejor pero puede verse más plástico en fotos.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">📦</span>
        <h4>Pedidos con anticipación</h4>
        <p>Trabajar sin prisa es trabajar mejor. Tratá de recibir pedidos con al menos 5 días de anticipación para tener tiempo de pruebas, ajustes y una entrega sin estrés. Los pedidos de último momento pueden salir bien, pero cobrálos diferente.</p>
      </div>

    </div>
  </div>
</section>

<!-- ══ VIDEO TIKTOK ══ -->
<section class="video-band">
  <span class="eyebrow">Miralo en acción</span>
  <h2 class="sec-title">El proceso <em>real</em></h2>
  <div class="rule"></div>
  <p class="video-desc">¿Preferís verlo antes de intentarlo? Aquí podés ver cómo se ve el proceso completo en video.</p>

  <div class="video-frame-wrap">
    <div class="video-fallback">
      <a href="https://vt.tiktok.com/ZSQVdDY71/" target="_blank" rel="noopener noreferrer" class="play-btn">▶</a>
      <p>Ver video en TikTok</p>
      <a href="https://vt.tiktok.com/ZSQVdDY71/" target="_blank" rel="noopener noreferrer" class="ver-link">Abrir video 🎬</a>
    </div>
  </div>
</section>

<!-- ══ CONTACTO / REDES ══ -->
<section class="contacto-band">
  <span class="eyebrow">¿Querés hacer un pedido?</span>
  <h2 class="sec-title">Encontrame <em>aquí</em></h2>
  <div class="rule" style="margin:16px auto 28px;"></div>
  <p class="contacto-desc">Si querés un portaplatos personalizado para tu próxima fiesta, escribime directamente. También me encontrás en redes donde subo más tutoriales y trabajos nuevos.</p>

  <div class="redes-row">

    <!-- WhatsApp -->
    <a
      href="https://wa.me/50488199499"
      target="_blank"
      rel="noopener noreferrer"
      class="red-btn whatsapp"
    >
      <span class="red-icon icon-wa">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </span>
      Escribime por WhatsApp
    </a>

    <!-- TikTok -->
    <a
      href="https://www.tiktok.com/@poppy.estudio?_r=1&_t=ZS-97F1OZis2qn"
      target="_blank"
      rel="noopener noreferrer"
      class="red-btn tiktok"
    >
      <span class="red-icon icon-tt">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.26 8.26 0 004.83 1.55V7.07a4.85 4.85 0 01-1.06-.38z"/>
        </svg>
      </span>
      Ver TikTok
    </a>

    <!-- Instagram -->
    <a
      href="https://www.instagram.com/poppy.crafty?igsh=MWNjbnh3cGY0czlscA%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      class="red-btn instagram"
    >
      <span class="red-icon icon-ig">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </span>
      Instagram
    </a>

  </div>

  <p class="wa-note">📱 Al presionar "WhatsApp" se abre el chat directamente con Poppycrafty</p>
</section>

<!-- ══ FOOTER ══ -->
<footer class="site-footer">
  <p>🎀 <span>Poppycrafty</span> · Tutorial Portaplatos · Hecho con papel diploma y mucho detalle</p>
</footer>

</body>
</html>


<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&family=Dancing+Script:wght@600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    corePlugins: { preflight: false },
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['"DM Sans"', 'sans-serif'],
          script: ['"Dancing Script"', 'cursive'],
        },
        colors: {
          'azul-pastel': '#A9C7E8',
          'azul-medio': '#C0D8F1',
          'azul-claro': '#D7EAF8',
          'azul-extra': '#EEF6FD',
          'azul-mediterraneo': '#2B5B84',
          'amarillo-limon': '#EAC05C',
          'crema-calido': '#F8F5F0',
          'texto-oscuro': '#2A3644',
          'gris-azulado': '#6B7A8B',
        }
      }
    }
  }
</script>

<style>
  /* 2. Estilos encapsulados solo para este post */
  .poppy-post-container {
    box-sizing: border-box;
    background-color: #F8F5F0;
    color: #2A3644;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.75;
    /* Esto es clave: Evita que el diseño se monte sobre los widgets de Blogger */
    position: relative; 
    overflow: hidden; 
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    z-index: 1;
  }

  .poppy-post-container *, .poppy-post-container *::before, .poppy-post-container *::after { 
    box-sizing: border-box; 
  }

  .arco-top { border-top-left-radius: 999px; border-top-right-radius: 999px; }
  .arco-bottom { border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; }

  .bg-dots {
    background-image: radial-gradient(#A9C7E8 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .poppy-sec {
    padding: 60px 20px;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>

<div class="poppy-post-container">

  <header class="relative bg-azul-extra py-16 flex items-center overflow-hidden rounded-3xl mx-2 mt-4 lg:mx-0">
    <div class="absolute top-[-20%] right-[-10%] w-80 h-80 bg-azul-claro rounded-full blur-3xl opacity-60 pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-amarillo-limon rounded-full blur-3xl opacity-20 pointer-events-none"></div>

    <div class="max-w-[1100px] mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-10 items-center">
      <div class="order-2 md:order-1 text-center md:text-left">
        <span class="font-script text-2xl md:text-3xl text-azul-mediterraneo mb-2 block">Tutorial Exclusivo</span>
        <h1 class="font-serif text-4xl md:text-5xl leading-tight text-texto-oscuro mb-4">
          Crea magia en la mesa con <br>
          <em class="italic text-azul-pastel">estilo único</em>
        </h1>
        <p class="text-base text-gris-azulado mb-6 max-w-sm mx-auto md:mx-0">
          Aprende a diseñar portaplatos con relieve y cortes perfectos.
        </p>
        <span class="inline-block bg-white text-azul-mediterraneo border border-azul-pastel font-medium px-5 py-2 rounded-full text-xs uppercase tracking-wider shadow-sm">
          🩵 Poppycrafty 🩵
        </span>
      </div>

      <div class="order-1 md:order-2 flex justify-center relative">
        <div class="relative w-full max-w-[320px]">
          <div class="absolute inset-0 bg-azul-pastel arco-top arco-bottom translate-x-3 translate-y-3"></div>
          <img 
            src="imagen.jpg" 
            alt="Portaplatos estilo mediterráneo" 
            class="relative z-10 w-full h-[400px] object-cover arco-top arco-bottom border-[5px] border-white shadow-lg"
          >
          <div class="absolute -bottom-4 -left-4 bg-amarillo-limon text-white font-serif italic text-lg px-5 py-2 rounded-full shadow-lg z-20 rotate-[-5deg]">
            Veintiocho años
          </div>
        </div>
      </div>
    </div>
  </header>

  <section class="poppy-sec">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <div class="relative max-w-[400px] mx-auto">
        <img 
          src="imagen.jpg" 
          alt="Detalle Portaplatos Victoria" 
          class="rounded-3xl shadow-xl relative z-10 border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500 w-full"
        >
        <div class="absolute -top-4 -right-4 w-20 h-20 bg-dots rounded-full z-0 pointer-events-none"></div>
        <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-azul-claro rounded-full z-0 opacity-50 pointer-events-none"></div>
      </div>
      
      <div class="text-center md:text-left mt-8 md:mt-0">
        <span class="font-script text-2xl text-amarillo-limon">La Inspiración</span>
        <h2 class="font-serif text-3xl text-azul-mediterraneo mt-1 mb-4">Detalles que cuentan <em class="italic font-light">historias</em></h2>
        <p class="text-gris-azulado mb-4 text-sm md:text-base">
          Fíjate en cómo los detalles en 3D hacen la diferencia. Las flores azules en acuarela y los limones vibrantes no están simplemente impresos en el fondo; están cortados individualmente y montados con relieve.
        </p>
        <p class="text-gris-azulado text-sm md:text-base">
          Este estilo de bordes ondulados e imperfecciones calculadas evoca la cerámica pintada a mano del Mediterráneo. ¡Lograr esto con papel es un arte!
        </p>
      </div>
    </div>
  </section>

  <section class="bg-azul-extra py-16 px-6 relative rounded-3xl mx-2 lg:mx-0">
    <div class="max-w-[900px] mx-auto relative z-10">
      <div class="text-center mb-10">
        <span class="font-script text-2xl text-azul-mediterraneo">Preparativos</span>
        <h2 class="font-serif text-3xl text-texto-oscuro mt-1">Nuestras Herramientas</h2>
        <div class="w-12 h-1 bg-amarillo-limon mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-azul-pastel">
          <div class="text-2xl mb-2">📜</div>
          <h3 class="font-serif text-lg text-azul-mediterraneo mb-1">Papel Diploma (216g)</h3>
          <p class="text-xs text-gris-azulado">El corazón del proyecto. Su rigidez es clave para que el portaplatos no se doble.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-amarillo-limon">
          <div class="text-2xl mb-2">🖨️</div>
          <h3 class="font-serif text-lg text-azul-mediterraneo mb-1">Impresora a Color</h3>
          <p class="text-xs text-gris-azulado">Para fondos vibrantes y tipografías nítidas como nuestro "It's my Birthday".</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-azul-pastel">
          <div class="text-2xl mb-2">✂️</div>
          <h3 class="font-serif text-lg text-azul-mediterraneo mb-1">Máquina Cricut</h3>
          <p class="text-xs text-gris-azulado">Imposible lograr esos bordes ondulados perfectos sin ella.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-amarillo-limon">
          <div class="text-2xl mb-2">🪄</div>
          <h3 class="font-serif text-lg text-azul-mediterraneo mb-1">Cinta Foam Relieve</h3>
          <p class="text-xs text-gris-azulado">El secreto de la magia. Levanta los limones y las hojas del fondo para el efecto 3D.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="poppy-sec bg-crema-calido">
    <div class="text-center md:text-left mb-10">
      <span class="font-script text-2xl text-azul-pastel">Manos a la obra</span>
      <h2 class="font-serif text-3xl text-texto-oscuro mt-1">Creación Paso a Paso</h2>
    </div>
    
    <div class="relative border-l-2 border-azul-claro ml-2 pl-6 space-y-10">
      <div class="relative">
        <div class="absolute -left-[35px] top-0 w-8 h-8 bg-azul-mediterraneo text-white font-serif rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm flex items-center justify-center shadow-md">1</div>
        <h3 class="font-serif text-xl text-azul-mediterraneo mb-2">Diseño Digital</h3>
        <p class="text-sm text-gris-azulado">En Design Space, crea la forma principal. Acomoda las tipografías elegantes (como el nombre en cursiva) asegurando que no queden tapadas por el plato real.</p>
      </div>

      <div class="relative">
        <div class="absolute -left-[35px] top-0 w-8 h-8 bg-amarillo-limon text-texto-oscuro font-serif rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm flex items-center justify-center shadow-md">2</div>
        <h3 class="font-serif text-xl text-azul-mediterraneo mb-2">Impresión</h3>
        <p class="text-sm text-gris-azulado">Imprime por separado: primero la base principal. Luego, en una hoja aparte, los elementos decorativos (limones y flores). Usa calidad máxima.</p>
      </div>

      <div class="relative">
        <div class="absolute -left-[35px] top-0 w-8 h-8 bg-azul-mediterraneo text-white font-serif rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm flex items-center justify-center shadow-md">3</div>
        <h3 class="font-serif text-xl text-azul-mediterraneo mb-2">Corte (Print then Cut)</h3>
        <p class="text-sm text-gris-azulado">Usa la función "Print Then Cut" de tu Cricut para recortar exactamente por el borde de las flores y los limones, dejando un acabado estilo offset.</p>
      </div>

      <div class="relative">
        <div class="absolute -left-[35px] top-0 w-8 h-8 bg-amarillo-limon text-texto-oscuro font-serif rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm flex items-center justify-center shadow-md">4</div>
        <h3 class="font-serif text-xl text-azul-mediterraneo mb-2">Ensamblaje 3D</h3>
        <p class="text-sm text-gris-azulado">Coloca cinta doble cara con relieve en la parte trasera de los elementos. Pégalos estratégicamente rompiendo los marcos del diseño base.</p>
      </div>
    </div>
  </section>

  <section class="py-12 px-4 md:px-6 bg-white bg-dots">
    <div class="max-w-[900px] mx-auto bg-azul-extra p-6 md:p-10 rounded-[30px] border border-azul-claro shadow-sm flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
      <div class="md:w-1/2">
        <span class="font-script text-2xl text-azul-mediterraneo mb-1 block">Detrás de escena</span>
        <h3 class="font-serif text-2xl text-texto-oscuro mb-3">¡Mira el proceso en video!</h3>
        <p class="text-gris-azulado mb-4 text-sm">Entiende el armado viéndolo en acción en mi perfil.</p>
      </div>
      <div class="md:w-1/2 w-full">
        <a href="https://vt.tiktok.com/ZSQVdDY71/" target="_blank" class="group block relative w-full h-[180px] rounded-2xl overflow-hidden shadow-lg">
          <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all z-10"></div>
          <div class="absolute inset-0 flex items-center justify-center z-20">
            <div class="bg-white/90 text-azul-mediterraneo p-3 rounded-full group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div class="w-full h-full bg-gradient-to-tr from-azul-mediterraneo to-azul-pastel"></div>
        </a>
      </div>
    </div>
  </section>

  <section class="bg-azul-mediterraneo py-16 px-6 text-center text-white rounded-3xl mx-2 mb-10 lg:mx-0">
    <h2 class="font-serif text-3xl md:text-4xl mb-4">¿Lista para hacer <br>tu <em class="italic font-light text-amarillo-limon">pedido</em>?</h2>
    <p class="text-azul-claro font-light text-sm md:text-base mb-8 max-w-[500px] mx-auto">
      Si te encantó este diseño o quieres una temática diferente, ¡contáctame!
    </p>
    
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a href="https://wa.me/50488199499?text=Hola%20Poppy%2C%20vengo%20del%20blog%20(tutorial%20mediterraneo)%20y%20me%20encantar%C3%ADa%20hacer%20un%20pedido!" target="_blank" class="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:-translate-y-1 hover:shadow-lg transition-all w-full sm:w-auto">
        WhatsApp
      </a>
      <a href="https://www.tiktok.com/@poppy.estudio?_r=1&_t=ZS-97F1OZis2qn" target="_blank" class="flex items-center justify-center gap-2 bg-crema-calido text-azul-mediterraneo px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:-translate-y-1 hover:shadow-lg transition-all w-full sm:w-auto">
        TikTok
      </a>
    </div>
  </section>

</div>


<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cómo hacer un Portaplatos para Fiestas — Poppycrafty</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Jost:wght@300;400;500&family=Satisfy&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --azul:        #A9C7E8;
    --azul-medio:  #C0D8F1;
    --azul-claro:  #D7EAF8;
    --azul-palido: #EEF6FD;
    --crema:       #FAFAF8;
    --texto:       #1E2E3D;
    --gris:        #6B7F90;
    --dorado:      #F5D98C;
    --blanco:      #FFFFFF;
  }

  body {
    font-family: 'Jost', sans-serif;
    background: var(--crema);
    color: var(--texto);
    line-height: 1.8;
    min-width: 320px;
  }

  /* ══ HERO ══ */
  .hero {
    min-height: 100vh;
    background: linear-gradient(180deg, #ddeefa 0%, #eef6fd 60%, #FAFAF8 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 32px 80px;
    position: relative;
    overflow: hidden;
  }

  /* Decoraciones flotantes hero */
  .hero-deco {
    position: absolute;
    pointer-events: none;
  }
  .hero-deco.bow {
    top: 40px; left: 50%;
    transform: translateX(-50%);
    font-size: 0;
    width: 90px; height: 70px;
    background: url('https://i.imgur.com/placeholder.png') center/contain no-repeat;
  }
  .deco-wave-left {
    position: absolute;
    bottom: 0; left: -30px;
    width: 220px; opacity: 0.18;
  }
  .deco-wave-right {
    position: absolute;
    bottom: 0; right: -30px;
    width: 220px; opacity: 0.18;
    transform: scaleX(-1);
  }
  .deco-flower-tl {
    position: absolute;
    top: 28px; left: 28px;
    width: 80px; opacity: 0.22;
  }
  .deco-flower-br {
    position: absolute;
    bottom: 80px; right: 28px;
    width: 70px; opacity: 0.20;
  }

  .hero-tag {
    display: inline-block;
    border: 1.5px solid var(--azul);
    color: var(--azul);
    border-radius: 999px;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 5px 20px;
    margin-bottom: 28px;
    font-weight: 500;
  }

  .hero-script {
    font-family: 'Satisfy', cursive;
    font-size: 1.35rem;
    color: var(--azul);
    display: block;
    margin-bottom: 14px;
  }

  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.6rem, 7vw, 4.5rem);
    font-weight: 600;
    line-height: 1.1;
    color: var(--texto);
    margin-bottom: 24px;
    max-width: 680px;
  }

  .hero h1 em {
    font-style: italic;
    color: var(--azul);
  }

  .hero-desc {
    font-size: 1rem;
    color: var(--gris);
    font-weight: 300;
    max-width: 460px;
    margin: 0 auto 40px;
  }

  .hero-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-meta span {
    font-size: 0.8rem;
    color: var(--gris);
    font-weight: 300;
    letter-spacing: 0.04em;
  }

  .hero-meta .dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--azul-medio);
    display: inline-block;
  }

  /* Imagen hero central */
  .hero-img-wrap {
    margin: 40px auto 0;
    max-width: 560px;
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(169,199,232,0.28);
    position: relative;
  }

  .hero-img-wrap img {
    width: 100%; display: block;
  }

  .hero-img-overlay {
    position: absolute;
    top: 16px; right: 16px;
    background: rgba(255,255,255,0.88);
    backdrop-filter: blur(6px);
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 0.76rem;
    color: var(--texto);
    font-weight: 500;
    letter-spacing: 0.04em;
  }

  /* ══ INTRO BAND ══ */
  .intro-band {
    background: var(--azul);
    padding: 64px 40px;
    text-align: center;
  }

  .intro-band p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.55rem;
    color: var(--blanco);
    max-width: 660px;
    margin: 0 auto;
    line-height: 1.55;
  }

  .intro-band p span {
    color: var(--dorado);
  }

  /* ══ MATERIALES ══ */
  .materiales-sec {
    padding: 80px 40px;
    max-width: 860px;
    margin: 0 auto;
  }

  .eyebrow {
    font-family: 'Satisfy', cursive;
    font-size: 1.1rem;
    color: var(--azul);
    display: block;
    margin-bottom: 8px;
  }

  .sec-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .sec-title em { font-style: italic; color: var(--azul); }

  .rule {
    width: 48px; height: 2px;
    background: var(--azul);
    border-radius: 2px;
    margin-bottom: 28px;
  }

  .mat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 32px;
  }

  .mat-card {
    background: var(--azul-palido);
    border-radius: 18px;
    padding: 28px 24px;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--azul-claro);
  }

  .mat-card::before {
    content: attr(data-num);
    position: absolute;
    top: -10px; right: 16px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 5rem;
    font-weight: 600;
    color: var(--azul-claro);
    line-height: 1;
    pointer-events: none;
  }

  .mat-icon {
    font-size: 1.5rem;
    margin-bottom: 10px;
    display: block;
  }

  .mat-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--texto);
  }

  .mat-card p {
    font-size: 0.9rem;
    color: var(--gris);
    font-weight: 300;
    line-height: 1.65;
  }

  .mat-card.opcional {
    background: var(--blanco);
    border: 1.5px dashed var(--azul-medio);
  }

  .badge-opc {
    display: inline-block;
    background: var(--azul);
    color: var(--blanco);
    font-size: 0.62rem;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 999px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  /* ══ IMAGEN 1 - SLOT ══ */
  .img-slot-band {
    background: var(--blanco);
    padding: 70px 40px;
  }

  .img-slot-inner {
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
  }

  .img-slot-inner .text-col .eyebrow { margin-top: 0; }

  .img-slot-inner p {
    font-size: 0.97rem;
    color: #3d4f5e;
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 18px;
  }

  .img-slot {
    border-radius: 20px;
    overflow: hidden;
    background: var(--azul-palido);
    aspect-ratio: 4/5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed var(--azul-medio);
    flex-direction: column;
    gap: 10px;
  }

  .img-slot img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }

  .img-slot-placeholder {
    text-align: center;
    color: var(--azul);
    font-size: 0.85rem;
    font-weight: 400;
    padding: 32px;
  }

  .img-slot-placeholder .icon {
    font-size: 2.4rem;
    display: block;
    margin-bottom: 8px;
    opacity: 0.6;
  }

  /* ══ TUTORIAL STEPS ══ */
  .tutorial-band {
    background: var(--crema);
    padding: 90px 40px;
  }

  .tutorial-inner {
    max-width: 860px;
    margin: 0 auto;
  }

  .step-list {
    margin-top: 48px;
  }

  .step {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 24px;
    margin-bottom: 56px;
    align-items: start;
  }

  .step-num {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: var(--azul-palido);
    border: 2px solid var(--azul-medio);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .step-num span {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--azul);
    line-height: 1;
  }

  .step-body h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 10px;
    padding-top: 14px;
    color: var(--texto);
  }

  .step-body p {
    font-size: 0.97rem;
    color: #3d4f5e;
    font-weight: 300;
    line-height: 1.85;
    margin-bottom: 14px;
  }

  .tip-box {
    background: var(--azul-palido);
    border-left: 3px solid var(--azul);
    border-radius: 0 12px 12px 0;
    padding: 16px 20px;
    margin-top: 16px;
  }

  .tip-box .tip-label {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--azul);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 6px;
  }

  .tip-box p {
    font-size: 0.9rem;
    color: var(--gris);
    margin: 0;
    font-weight: 300;
  }

  .warn-box {
    background: #fff9ec;
    border-left: 3px solid var(--dorado);
    border-radius: 0 12px 12px 0;
    padding: 16px 20px;
    margin-top: 16px;
  }

  .warn-box .warn-label {
    font-size: 0.72rem;
    font-weight: 500;
    color: #b8942b;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 6px;
  }

  .warn-box p {
    font-size: 0.9rem;
    color: #7a6830;
    margin: 0;
    font-weight: 300;
  }

  /* ══ IMAGEN 2 - SLOT ══ */
  .img2-band {
    background: var(--azul-palido);
    padding: 70px 40px;
  }

  .img2-inner {
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
  }

  .img2-inner .img-slot { aspect-ratio: 4/5; }

  /* ══ VIDEO SECTION ══ */
  .video-band {
    background: var(--texto);
    padding: 80px 40px;
    text-align: center;
  }

  .video-band .eyebrow { color: var(--azul-claro); }

  .video-band .sec-title {
    color: var(--blanco);
    margin-bottom: 8px;
  }

  .video-band .sec-title em { color: var(--azul-medio); }

  .video-band .rule { margin: 18px auto 30px; background: var(--azul-medio); }

  .video-desc {
    color: rgba(255,255,255,0.65);
    font-size: 0.95rem;
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto 36px;
  }

  .video-frame-wrap {
    max-width: 400px;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.35);
    background: #000;
    aspect-ratio: 9/16;
    position: relative;
  }

  .video-frame-wrap iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .video-fallback {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #1a2a38, #0d1a24);
    color: rgba(255,255,255,0.8);
    gap: 16px;
  }

  .video-fallback .play-btn {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: var(--azul);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .video-fallback .play-btn:hover { transform: scale(1.1); }

  .video-fallback p {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.55);
    font-weight: 300;
    max-width: 220px;
    text-align: center;
    line-height: 1.6;
  }

  .video-fallback a.ver-link {
    display: inline-block;
    background: var(--azul);
    color: var(--blanco);
    padding: 10px 28px;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: opacity 0.2s;
  }

  .video-fallback a.ver-link:hover { opacity: 0.85; }

  /* ══ RECOMENDACIONES FINALES ══ */
  .recom-band {
    background: var(--blanco);
    padding: 80px 40px;
  }

  .recom-inner {
    max-width: 860px;
    margin: 0 auto;
  }

  .recom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 36px;
  }

  .recom-card {
    border-radius: 18px;
    padding: 28px 24px;
    background: var(--crema);
    border: 1px solid var(--azul-claro);
  }

  .recom-card .recom-icon {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 12px;
  }

  .recom-card h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .recom-card p {
    font-size: 0.9rem;
    color: var(--gris);
    font-weight: 300;
    line-height: 1.7;
  }

  /* ══ CONTACTO / REDES ══ */
  .contacto-band {
    background: linear-gradient(160deg, #ddeefa 0%, #eef6fd 100%);
    padding: 80px 40px;
    text-align: center;
  }

  .contacto-band .sec-title { margin-bottom: 8px; }
  .contacto-band .rule { margin: 16px auto 28px; }

  .contacto-desc {
    color: var(--gris);
    font-size: 0.97rem;
    font-weight: 300;
    max-width: 440px;
    margin: 0 auto 40px;
  }

  .redes-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin-bottom: 40px;
  }

  .red-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 14px;
    font-size: 0.92rem;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .red-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(169,199,232,0.35);
  }

  .red-btn.whatsapp {
    background: #25D366;
    color: #fff;
  }

  .red-btn.tiktok {
    background: var(--texto);
    color: #fff;
  }

  .red-btn.instagram {
    background: linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    color: #fff;
  }

  .red-btn .red-icon {
    width: 22px; height: 22px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  /* SVG icons inline */
  .icon-wa svg, .icon-tt svg, .icon-ig svg { width: 20px; height: 20px; fill: #fff; }

  .wa-note {
    font-size: 0.8rem;
    color: var(--gris);
    font-weight: 300;
    margin-top: 8px;
  }

  /* ══ FOOTER ══ */
  .site-footer {
    background: var(--texto);
    color: rgba(255,255,255,0.4);
    text-align: center;
    padding: 28px 20px;
    font-size: 0.78rem;
    letter-spacing: 0.06em;
  }

  .site-footer span { color: var(--azul-medio); }

  /* ══ RESPONSIVE ══ */
  @media (max-width: 660px) {
    .img-slot-inner,
    .img2-inner {
      grid-template-columns: 1fr;
    }
    .img-slot-inner .text-col { order: 2; }
    .img-slot-inner .img-col { order: 1; }

    .step {
      grid-template-columns: 56px 1fr;
      gap: 16px;
    }

    .step-num {
      width: 48px; height: 48px;
    }

    .step-num span { font-size: 1.4rem; }
    .hero h1 { font-size: 2.2rem; }
    .intro-band p { font-size: 1.2rem; }
  }
</style>
</head>
<body>

<!-- ══ HERO ══ -->
<header class="hero">

  <svg class="deco-wave-left" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 100 Q60 40 110 80 Q160 120 210 60" stroke="#A9C7E8" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M10 130 Q60 70 110 110 Q160 150 210 90" stroke="#C0D8F1" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M10 70 Q60 10 110 50 Q160 90 210 30" stroke="#D7EAF8" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>

  <svg class="deco-wave-right" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 100 Q60 40 110 80 Q160 120 210 60" stroke="#A9C7E8" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M10 130 Q60 70 110 110 Q160 150 210 90" stroke="#C0D8F1" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M10 70 Q60 10 110 50 Q160 90 210 30" stroke="#D7EAF8" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>

  <svg class="deco-flower-tl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="30" rx="16" ry="22" fill="#A9C7E8" opacity="0.6"/>
    <ellipse cx="73" cy="43" rx="16" ry="22" fill="#C0D8F1" opacity="0.6" transform="rotate(72 73 43)"/>
    <ellipse cx="64" cy="72" rx="16" ry="22" fill="#A9C7E8" opacity="0.55" transform="rotate(144 64 72)"/>
    <ellipse cx="36" cy="72" rx="16" ry="22" fill="#C0D8F1" opacity="0.55" transform="rotate(216 36 72)"/>
    <ellipse cx="27" cy="43" rx="16" ry="22" fill="#A9C7E8" opacity="0.6" transform="rotate(288 27 43)"/>
    <circle cx="50" cy="50" r="9" fill="#EEF6FD"/>
    <circle cx="50" cy="50" r="5" fill="#D7EAF8"/>
  </svg>

  <svg class="deco-flower-br" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="30" rx="16" ry="22" fill="#A9C7E8" opacity="0.5"/>
    <ellipse cx="73" cy="43" rx="16" ry="22" fill="#C0D8F1" opacity="0.5" transform="rotate(72 73 43)"/>
    <ellipse cx="64" cy="72" rx="16" ry="22" fill="#A9C7E8" opacity="0.45" transform="rotate(144 64 72)"/>
    <ellipse cx="36" cy="72" rx="16" ry="22" fill="#C0D8F1" opacity="0.45" transform="rotate(216 36 72)"/>
    <ellipse cx="27" cy="43" rx="16" ry="22" fill="#A9C7E8" opacity="0.5" transform="rotate(288 27 43)"/>
    <circle cx="50" cy="50" r="9" fill="#EEF6FD"/>
    <circle cx="50" cy="50" r="5" fill="#D7EAF8"/>
  </svg>

  <!-- LAYOUT: imagen izq + texto der -->
  <div style="
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 52px;
    max-width: 900px;
    width: 100%;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  ">

    <!-- CARD IMAGEN -->
    <div style="
      flex-shrink: 0;
      width: 300px;
      background: rgba(255,255,255,0.72);
      backdrop-filter: blur(10px);
      border-radius: 28px;
      padding: 14px;
      box-shadow: 0 20px 56px rgba(169,199,232,0.32), 0 2px 8px rgba(169,199,232,0.18);
      border: 1.5px solid rgba(255,255,255,0.9);
    ">
      <img
        src="https://i.ibb.co/bjWwDbRL/hero.jpg"
        alt="Poppy Crafty"
        style="
          width: 100%;
          border-radius: 18px;
          display: block;
          aspect-ratio: 1/1;
          object-fit: cover;
        "
      >
      <div style="
        text-align: center;
        padding: 12px 8px 4px;
        font-family: 'Satisfy', cursive;
        font-size: 1rem;
        color: #A9C7E8;
        letter-spacing: 0.02em;
      ">✦ Poppycrafty ✦</div>
    </div>

    <!-- TEXTO -->
    <div style="
      flex: 1;
      min-width: 260px;
      max-width: 420px;
      text-align: left;
    ">
      <div class="hero-tag" style="margin-bottom: 20px;">Tutorial · Poppycrafty</div>
      <span class="hero-script" style="display:block; margin-bottom:12px;">paso a paso</span>
      <h1 style="text-align:left; margin-bottom:20px;">Cómo hacer un<br><em>portaplatos</em><br>para fiestas</h1>
      <p class="hero-desc" style="text-align:left; margin: 0 0 32px 0;">Desde los materiales hasta el corte final, todo lo que necesitás saber para crear portaplatos personalizados que dejan boquiabiertos.</p>
      <div class="hero-meta" style="justify-content: flex-start;">
        <span>✦ Tutorial completo</span>
        <span class="dot"></span>
        <span>Nivel: principiante</span>
        <span class="dot"></span>
        <span>Materiales básicos</span>
      </div>
    </div>

  </div>
</header>

<!-- ══ INTRO ══ -->
<section class="intro-band">
  <p>Un portaplatos es un detalle decorativo que puede transformar por completo la presentación de una fiesta. Es un detalle capaz de hacer que una mesa se vea mas bonita.</span></p>
</section>

<!-- ══ MATERIALES ══ -->
<section class="materiales-sec">
  <span class="eyebrow">Antes de empezar</span>
  <h2 class="sec-title">Los <em>materiales</em> que necesitás</h2>
  <div class="rule"></div>
  <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; margin-bottom:12px;">
    La calidad del resultado depende en gran parte de qué materiales usás. No importa qué tan bien manejes el diseño si el papel es el incorrecto, el portaplatos se va a ver flojo, sin cuerpo y poco profesional. Acá están los esenciales:
  </p>

  <div class="mat-grid">

    <div class="mat-card" data-num="01">
      <span class="mat-icon">📄</span>
      <h3>Papel Diploma</h3>
      <p>Específicamente de <strong>216 g/m²</strong>. Este gramaje es clave: le da rigidez suficiente para que el portaplatos mantenga su forma plana sin que se doble. Un papel más delgado por ejemplo de 90 g se ve muy aguado y se arruga con la humedad de los platos.</p>
    </di

    <div class="mat-card" data-num="02">
      <span class="mat-icon">🖨️</span>
      <h3>Impresora para diseños</h3>
      <p>Idealmente una impresora de inyección de tinta con buena resolución (mínimo 300 dpi). La calidad de la impresión determina si los colores del diseño se ven vibrantes o apagados. Si podés, hacé siempre una prueba en papel bond antes de imprimir en el papel diploma.</p>
    </div>

    <div class="mat-card" data-num="03">
      <span class="mat-icon">🎀</span>
      <h3>Cinta de doble cara</h3>
      <p>Para unir piezas si el portaplatos tiene capas o elementos 3D. Preferí las de espuma doble (foam tape) para dar altura y profundidad a ciertos elementos decorativos. La cinta delgada también sirve para reforzar bordes y esquinas.</p>
    </div>

    <div class="mat-card opcional" data-num="">
      <span class="badge-opc">Opcional pero recomendado</span>
      <span class="mat-icon">⚙️</span>
      <h3>Máquina Cricut</h3>
      <p>Para cortes precisos, especialmente si el portaplatos tiene formas personalizadas, esquinas redondeadas, siluetas de personajes o calados. Sin Cricut podés usar tijeras y exacto, pero los bordes nunca quedan igual de limpios en formas complicadas.</p>
    </div>

  </div>
</section>

<section class="img-slot-band">
  <div class="img-slot-inner">
    <div class="text-col">
      <span class="eyebrow">El primer paso</span>
      <h2 class="sec-title">El diseño:<br>donde <em>todo empieza</em></h2>
      <div class="rule"></div>
      <p>Antes de tocar ningún material, el portaplatos ya tiene que existir en tu pantalla. El diseño define el tamaño, los colores, los elementos decorativos y si vas a necesitar la Cricut o no. Usá Canva, Adobe Illustrator o Cricut Design Space dependiendo de lo que tengas disponible.</p>
      <p>El tamaño estándar para un portaplatos de fiesta es de <strong>30 × 30 cm</strong>, aunque podés hacerlo desde 28 hasta 35 cm según la vajilla del cliente. Siempre preguntá antes de diseñar.</p>
    </div>
    <div class="img-col">
      <div class="img-slot">
        <img 
          src="https://i.ibb.co/pcyZ5QC/Whats-App-Image-2026-06-15-at-4-07-09-PM.jpg" 
          alt="Diseño de portaplatos" 
          style="width: 100%; height: auto; border-radius: 12px; display: block;"
        >
      </div>
    </div>
  </div>
</section>

<!-- ══ TUTORIAL STEPS ══ -->
<section class="tutorial-band">
  <div class="tutorial-inner">
    <span class="eyebrow">El proceso completo</span>
    <h2 class="sec-title">Paso a <em>paso</em></h2>
    <div class="rule"></div>
    <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; max-width:680px;">
      Seguí este orden. Saltarse pasos especialmente en la preparación del diseño y la calibración de la impresora es lo que más arruina portaplatos que ya venían bien encaminados.
    </p>

    <div class="step-list">

      <!-- PASO 1 -->
      <div class="step">
        <div class="step-num"><span>1</span></div>
        <div class="step-body">
          <h3>Tomá las medidas y acordalas con el cliente</h3>
          <p>Antes de abrir cualquier programa de diseño, confirmá con la persona el tamaño exacto del portaplatos que necesita. Pedile que te mande foto de los platos si va a ser una fiesta específica. Las medidas importan: un portaplatos de 28 cm en una mesa con platos de 32 cm se va a ver mal.</p>
          <p>También en este punto confirmás la temática, los colores, si quiere nombre o no, y cuántas unidades necesita. Hacé todo esto antes de empezar a diseñar porque cambiar el diseño a la mitad cuesta el doble de tiempo.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip</span>
            <p>Creá un formulario sencillo en Google Forms o un mensaje de WhatsApp con preguntas clave. Te ahorrás idas y venidas y el cliente siente que sos profesional desde el primer momento.</p>
          </div>
        </div>
      </div>

      <!-- PASO 2 -->
      <div class="step">
        <div class="step-num"><span>2</span></div>
        <div class="step-body">
          <h3>Creá el diseño digital</h3>
          <p>Abrí tu programa de diseño y configurá el documento al tamaño final del portaplatos con sangrado de 3 mm en todos los lados (el área que se corta después). Diseñá en alta resolución: mínimo 300 dpi para impresión.</p>
          <p>Definí el fondo, los elementos decorativos, el texto (nombre, edad, año) y cualquier imagen de personaje que el cliente haya pedido. Si usás imágenes descargadas de internet, revisá que sean de buena calidad: una imagen de 200×200 px que parezca bien en pantalla se va a ver pixelada impresa en 30×30 cm.</p>
          <p>Una vez terminado el diseño, exportalo en PDF de alta calidad o en PNG a 300 dpi. No lo imprimás directo desde Canva en su tamaño original sin verificar las medidas reales en cm.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip</span>
            <p>Antes de exportar, cambiá la vista del diseño a escala de grises para revisar si hay suficiente contraste. Un diseño que solo se ve bien en color a veces no imprime bien en ciertas impresoras con tinta baja.</p>
          </div>
          <div class="warn-box">
            <span class="warn-label">⚠️ Ojo</span>
            <p>No uses imágenes tomadas de Google sin verificar la resolución. Buscalas en Freepik, Flaticon o Canva Pro donde garantizan calidad de impresión. Los vectores (.svg o .ai) siempre son preferibles a los .jpg para elementos decorativos.</p>
          </div>
        </div>
      </div>

      <!-- PASO 3 -->
      <div class="step">
        <div class="step-num"><span>3</span></div>
        <div class="step-body">
          <h3>Imprimí en papel diploma</h3>
          <p>Este es el paso más delicado y donde más se arruinan los trabajos. Antes de imprimir el trabajo final, hacé una prueba en papel bond normal al mismo tamaño. Verificá que los colores, el texto y las medidas están correctos. Solo cuando estés segura, pasá al papel diploma de 216 g.</p>
          <p>Configurá la impresora en la calidad más alta disponible. En la mayoría de impresoras esto está bajo "Configuración de papel" como "Papel fotográfico" o "Calidad alta". Esto hace que la impresora deposite más tinta y los colores salgan más ricos y saturados.</p>
          <p>Revisá que el papel entre recto en la bandeja. El papel diploma de 216 g es más grueso y a veces se traba si la bandeja no está bien ajustada. Si tu impresora tiene una bandeja posterior de alimentación manual, úsala para papeles gruesos porque es más directa y hay menos riesgo de que el papel se doble.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip</span>
            <p>Dejá secar la impresión mínimo 5 minutos antes de tocarla. La tinta en papel no poroso (como el diploma plastificado) tarda más en fijarse y si lo tocás antes, corrés el riesgo de manchar el diseño con las huellas de los dedos.</p>
          </div>
          <div class="warn-box">
            <span class="warn-label">⚠️ Ojo</span>
            <p>No todas las impresoras aceptan papel de 216 g. Revisá el manual de tu impresora para ver el gramaje máximo que soporta. Si forzás un papel más grueso del soportado, podés dañar los rodillos internos.</p>
          </div>
        </div>
      </div>

      <!-- PASO 4 -->
      <div class="step">
        <div class="step-num"><span>4</span></div>
        <div class="step-body">
          <h3>Corte: tijeras, exacto o Cricut</h3>
          <p>Si el portaplatos es rectangular o cuadrado con esquinas rectas, podés cortarlo con una guillotina o regla y exacto. Marcá con lápiz las líneas de corte y usá una superficie de corte limpia para no rayar la mesa.</p>
          <p>Si el diseño tiene esquinas redondeadas o formas decorativas en los bordes, aquí es donde la Cricut marca la diferencia. Programá el corte en Cricut Design Space con la misma forma del portaplatos, coloca el papel impreso en el mat de agarre ligero (light-grip mat) y deja que la máquina haga el corte de precisión.</p>
          <p>Para la Cricut, configurá el material como "Papel grueso" o "Cardstock pesado". Hacé siempre un corte de prueba en un pedazo pequeño del mismo papel para verificar que la presión y la velocidad están bien antes de cortar el trabajo terminado.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip de Cricut</span>
            <p>Cambiá la cuchilla cada 2-3 proyectos intensivos. Una cuchilla desgastada corta de forma irregular y puede arrastrar el papel en vez de cortarlo limpiamente. Una cuchilla nueva es la diferencia entre un borde impecable y uno con pelusas.</p>
          </div>
        </div>
      </div>

      <!-- PASO 5 -->
      <div class="step">
        <div class="step-num"><span>5</span></div>
        <div class="step-body">
          <h3>Armado y acabados finales</h3>
          <p>Si el portaplatos tiene capas por ejemplo una base impresa y encima un topper o elemento 3D adicional es el momento de armarlos. Usá la cinta de doble cara o foam tape para pegar los elementos. El foam tape le da dimensión al portaplatos y hace que se vea más premium porque los elementos sobresalen ligeramente de la base.</p>
          <p>Revisá los bordes. Si algún corte quedó con pelusas, podés usar una lija muy fina (grano 400) con un movimiento suave para limpiarlos. También podés pasar un plumón negro o del color del borde del diseño para que las orillas se vean terminadas y no se note el color blanco del papel.</p>
          <p>Si el cliente quiere que el portaplatos sea lavable o resistente a la humedad, podés aplicar un sellador en spray mate o brillante. Esto es especialmente útil para eventos en exteriores donde puede haber humedad o lluvia ligera.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip de presentación</span>
            <p>Empacá cada portaplatos en una bolsa de celofán o envolvelos en papel de seda antes de entregárselos al cliente. El packaging no solo protege el trabajo, también hace que la entrega se sienta más profesional y cuidada.</p>
          </div>
        </div>
      </div>

      <!-- PASO 6 -->
      <div class="step">
        <div class="step-num"><span>6</span></div>
        <div class="step-body">
          <h3>Control de calidad antes de entregar</h3>
          <p>Antes de empacar, revisá uno por uno todos los portaplatos. Buscás: manchas de tinta, bordes con pelusas que se te hayan pasado, elementos 3D mal pegados, texto con errores tipográficos. Es mucho más fácil corregir un error antes de la entrega que después.</p>
          <p>Tomá fotos de los portaplatos terminados en buena luz. Estas fotos son tu portafolio para futuros clientes. Ponelos sobre una superficie limpia y neutra, preferiblemente blanca o de madera, con luz natural. Un portaplatos bien fotografiado consigue más pedidos que diez publicidades escritas.</p>
          <div class="tip-box">
            <span class="tip-label">💡 Tip de negocio</span>
            <p>Pedile al cliente que te mande foto del portaplatos en la mesa de la fiesta. Esa foto, con el contexto real de la decoración, es infinitamente más poderosa para tu Instagram que una foto de estudio. A la gente le encanta ver el resultado final en ambiente.</p>
          </div>
        </div>
      </div>

    </div><!-- /step-list -->
  </div>
</section>

<section class="img2-band">
  <div class="img2-inner">
    <div class="img-col">
      <div class="img-slot">
        <img 
          src="https://i.ibb.co/23rr4tZC/Whats-App-Image-2026-06-15-at-4-07-10-PM.jpg" 
          alt="Resultado final del portaplatos" 
          style="width: 100%; height: auto; border-radius: 12px; display: block;"
        >
      </div>
    </div>
    <div class="text-col">
      <span class="eyebrow">El resultado final</span>
      <h2 class="sec-title">De la pantalla<br>a la <em>mesa</em></h2>
      <div class="rule"></div>
      <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; margin-bottom:16px;">Cuando todo el proceso se hace con cuidado, el resultado es un accesorio de fiesta que parece salido de una tienda de decoración de alto nivel. Y la gente lo nota.</p>
      <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; margin-bottom:0;">Lo que la gente ve en la mesa no es un pedazo de papel. Ve la intención detrás, el detalle pensado, el color que combina exactamente con el resto de la decoración. Eso no se fabrica en serie.</p>
    </div>
  </div>
</section>

<!-- ══ RECOMENDACIONES ══ -->
<section class="recom-band">
  <div class="recom-inner">
    <span class="eyebrow">Para hacerlo mejor</span>
    <h2 class="sec-title">Extras que <em>elevan</em> el resultado</h2>
    <div class="rule"></div>
    <p style="font-size:0.97rem; color:#3d4f5e; font-weight:300; line-height:1.85; max-width:680px;">
      Con los pasos básicos ya tenés un buen portaplatos. Estas son las cosas adicionales que marcan la diferencia entre "quedó bonito" y "quedó increíble".
    </p>

    <div class="recom-grid">

      <div class="recom-card">
        <span class="recom-icon">✨</span>
        <h4>Agregale escarcha o foil</h4>
        <p>Una capa fina de glitter transparente sobre elementos metálicos del diseño (estrellas, bordes, letras) hace que el portaplatos brille de forma elegante. Aplicalo con pegamento en gel y un pincel fino antes de que seque.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">🎀</span>
        <h4>Terminaciones con lazo</h4>
        <p>Un lazo de listón del color principal del evento pegado en la esquina superior del portaplatos lo eleva visualmente al instante. Es un detalle pequeño pero la gente lo nota y lo comenta.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">🌸</span>
        <h4>Elementos 3D en foam</h4>
        <p>Cortá con Cricut elementos decorativos en foam de colores (flores, estrellas, mariposas) y pegálos sobre el portaplatos. Dan textura real y hacen que el portaplatos se sienta más elaborado que uno solo impreso.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">📐</span>
        <h4>Coordina con el resto</h4>
        <p>El portaplatos impacta más cuando coordina con otros elementos: servilleteros, etiquetas de botella, toppers del pastel. Ofrecer el set completo es una excelente forma de aumentar el valor del pedido.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">💧</span>
        <h4>Sellador para exteriores</h4>
        <p>Si la fiesta es al aire libre, protegé la impresión con un sellador en spray. El mate da un acabado más elegante y no refleja la luz. El brillante protege mejor pero puede verse más plástico en fotos.</p>
      </div>

      <div class="recom-card">
        <span class="recom-icon">📦</span>
        <h4>Pedidos con anticipación</h4>
        <p>Trabajar sin prisa es trabajar mejor. Tratá de recibir pedidos con al menos 5 días de anticipación para tener tiempo de pruebas, ajustes y una entrega sin estrés. Los pedidos de último momento pueden salir bien, pero cobrálos diferente.</p>
      </div>

    </div>
  </div>
</section>

<!-- ══ VIDEO TIKTOK ══ -->
<section class="video-band">
  <span class="eyebrow">Miralo en acción</span>
  <h2 class="sec-title">El proceso <em>real</em></h2>
  <div class="rule"></div>
  <p class="video-desc">¿Preferís verlo antes de intentarlo? Aquí podés ver cómo se ve el proceso completo en video.</p>

  <div class="video-frame-wrap">
    <div class="video-fallback">
      <a href="https://vt.tiktok.com/ZSQVdDY71/" target="_blank" rel="noopener noreferrer" class="play-btn">▶</a>
      <p>Ver video en TikTok</p>
      <a href="https://vt.tiktok.com/ZSQVdDY71/" target="_blank" rel="noopener noreferrer" class="ver-link">Abrir video 🎬</a>
    </div>
  </div>
</section>

<!-- ══ CONTACTO / REDES ══ -->
<section class="contacto-band">
  <span class="eyebrow">¿Querés hacer un pedido?</span>
  <h2 class="sec-title">Encontrame <em>aquí</em></h2>
  <div class="rule" style="margin:16px auto 28px;"></div>
  <p class="contacto-desc">Si querés un portaplatos personalizado para tu próxima fiesta, escribime directamente. También me encontrás en redes donde subo más tutoriales y trabajos nuevos.</p>

  <div class="redes-row">

    <!-- WhatsApp -->
    <a
      href="https://wa.me/50488199499"
      target="_blank"
      rel="noopener noreferrer"
      class="red-btn whatsapp"
    >
      <span class="red-icon icon-wa">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </span>
      Escribime por WhatsApp
    </a>

    <!-- TikTok -->
    <a
      href="https://www.tiktok.com/@poppy.estudio?_r=1&_t=ZS-97F1OZis2qn"
      target="_blank"
      rel="noopener noreferrer"
      class="red-btn tiktok"
    >
      <span class="red-icon icon-tt">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.26 8.26 0 004.83 1.55V7.07a4.85 4.85 0 01-1.06-.38z"/>
        </svg>
      </span>
      Ver TikTok
    </a>

    <!-- Instagram -->
    <a
      href="https://www.instagram.com/poppy.crafty?igsh=MWNjbnh3cGY0czlscA%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      class="red-btn instagram"
    >
      <span class="red-icon icon-ig">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </span>
      Instagram
    </a>

  </div>

  <p class="wa-note">📱 Al presionar "WhatsApp" se abre el chat directamente con Poppycrafty</p>
</section>

<!-- ══ FOOTER ══ -->
<footer class="site-footer">
  <p>🎀 <span>Poppycrafty</span> · Tutorial Portaplatos · Hecho con papel diploma y mucho detalle</p>
</footer>

</body>
</html>


<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Coronas Personalizadas de Fomi | Poppy Craft</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #FAFAF7;
    --gold: #C9A84C;
    --gold-light: #E8D5A3;
    --gold-dark: #A07830;
    --charcoal: #2C2C2C;
    --body: #5A5A5A;
    --divider: #E8E2D5;
    --white: #FFFFFF;
  }

  body {
    background-color: var(--cream);
    color: var(--body);
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    line-height: 1.75;
    font-size: 16px;
  }

  /* ── HERO ── */
  .hero {
    background-color: var(--white);
    border-bottom: 1px solid var(--divider);
    padding: 72px 24px 56px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
  }
  .brand-tag {
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
  }
  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(2rem, 5vw, 3.2rem);
    color: var(--charcoal);
    line-height: 1.2;
    max-width: 620px;
    margin: 0 auto 16px;
  }
  .hero h1 em { font-style: italic; color: var(--gold-dark); }
  .hero-sub {
    font-size: 15px;
    color: var(--body);
    max-width: 480px;
    margin: 0 auto 40px;
    font-weight: 300;
  }

  .ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 32px auto;
  }
  .ornament-line {
    width: 60px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold));
  }
  .ornament-line.right { background: linear-gradient(90deg, var(--gold), transparent); }
  .ornament-diamond {
    width: 6px; height: 6px;
    background: var(--gold);
    transform: rotate(45deg);
  }

  /* ── HERO IMAGE ── */
  .hero-img-wrap {
    background: #F7F4F0;
    padding: 32px 24px;
    text-align: center;
    border-bottom: 1px solid var(--divider);
  }
  .hero-img-wrap img {
    max-width: 280px;
    width: 100%;
    display: inline-block;
    filter: drop-shadow(0 6px 16px rgba(0,0,0,0.09));
  }

  /* ── PHOTO GRID ── */
  .photo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    max-width: 780px;
    margin: 0 auto;
  }
  .photo-grid img {
    width: 100%; display: block;
    object-fit: cover; object-position: center top;
    height: 300px;
  }

  /* ── CONTAINER ── */
  .container { max-width: 720px; margin: 0 auto; padding: 0 24px; }

  /* ── SECTION LABEL ── */
  .section-label {
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 500;
    margin-bottom: 14px;
  }

  /* ── INTRO ── */
  .intro { padding: 64px 24px; text-align: center; background: var(--white); }
  .intro p {
    max-width: 580px; margin: 0 auto;
    font-size: 16px; color: var(--body); line-height: 1.85;
  }

  /* ── PERSONALIZACIÓN ── */
  .personalizacion { padding: 64px 24px; background: var(--cream); }
  .personalizacion h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--charcoal);
    text-align: center; margin-bottom: 8px;
  }
  .personalizacion .section-label { text-align: center; }
  .options-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px; margin-top: 36px;
  }
  .option-card {
    background: var(--white);
    border: 1px solid var(--divider);
    padding: 28px 24px; text-align: center;
  }
  .option-icon {
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 12px;
    color: var(--gold);
  }
  .option-icon svg { width: 28px; height: 28px; stroke: var(--gold); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .option-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 6px;
  }
  .option-card p { font-size: 13px; color: var(--body); line-height: 1.6; }

  /* ── CARACTERÍSTICAS ── */
  .caracteristicas { padding: 64px 24px; background: var(--white); }
  .caracteristicas h2 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400; font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--charcoal); text-align: center; margin-bottom: 8px;
  }
  .feat-list { list-style: none; margin-top: 32px; max-width: 580px; margin-left: auto; margin-right: auto; }
  .feat-list li {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 14px 0; border-bottom: 1px solid var(--divider);
    font-size: 15px; color: var(--body);
  }
  .feat-list li:last-child { border-bottom: none; }
  .feat-list li::before { content: '✦'; color: var(--gold); font-size: 11px; flex-shrink: 0; margin-top: 4px; }

  /* ── IDEALES ── */
  .ideales { padding: 64px 24px; background: var(--cream); text-align: center; }
  .ideales h2 {
    font-family: 'Cormorant Garamond', serif; font-weight: 400;
    font-size: clamp(1.5rem, 3vw, 2rem); color: var(--charcoal); margin-bottom: 8px;
  }
  .tags-wrap { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 28px; }
  .tag {
    border: 1px solid var(--gold); color: var(--gold-dark);
    padding: 8px 20px; font-size: 13px; font-weight: 400;
    letter-spacing: 0.05em; background: transparent;
  }

  /* ── COMPLEMENTA ── */
  .complementa { padding: 64px 24px; background: var(--white); text-align: center; }
  .complementa h2 {
    font-family: 'Cormorant Garamond', serif; font-weight: 400;
    font-size: clamp(1.5rem, 3vw, 2rem); color: var(--charcoal); margin-bottom: 8px;
  }
  .complementa p.lead { max-width: 480px; margin: 12px auto 32px; font-size: 15px; }
  .complementa-items { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
  .comp-item {
    background: var(--cream); border: 1px solid var(--divider);
    padding: 14px 22px; font-size: 14px; color: var(--charcoal);
  }

  /* ── PEDIDOS (crema) ── */
  .pedidos { padding: 64px 24px; background: var(--cream); text-align: center; }
  .pedidos .section-label { color: var(--gold-dark); }
  .pedidos h2 {
    font-family: 'Cormorant Garamond', serif; font-weight: 300;
    font-size: clamp(1.6rem, 3.5vw, 2.4rem); color: var(--charcoal); margin-bottom: 8px;
  }
  .pedidos > .container > p {
    max-width: 520px; margin: 0 auto 36px;
    font-size: 15px; color: var(--body); line-height: 1.8;
  }
  .entrega-grid {
    display: flex; flex-wrap: wrap; justify-content: center;
    gap: 20px; margin-bottom: 40px;
  }
  .entrega-card {
    background: var(--white);
    border: 1px solid var(--divider);
    padding: 24px 32px; text-align: center; min-width: 180px;
  }
  .entrega-card .icon {
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 10px;
  }
  .entrega-card .icon svg { width: 26px; height: 26px; stroke: var(--gold); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .entrega-card p { font-size: 13px; color: var(--body); margin: 0; }

  .precio-badge {
    display: inline-block;
    border: 1px solid var(--gold); padding: 18px 40px;
    margin: 0 auto 36px; background: var(--white);
  }
  .precio-badge .desde {
    font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold-dark); display: block; margin-bottom: 4px;
  }
  .precio-badge .amount {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.4rem; font-weight: 300; color: var(--charcoal); line-height: 1;
  }
  .precio-badge .nota { font-size: 11px; color: var(--body); margin-top: 6px; display: block; }

  /* ── PASOS 2x2 ── */
  .pasos { padding: 64px 24px; background: var(--white); text-align: center; }
  .pasos h2 {
    font-family: 'Cormorant Garamond', serif; font-weight: 400;
    font-size: clamp(1.5rem, 3vw, 2rem); color: var(--charcoal); margin-bottom: 8px;
  }
  .pasos-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-top: 36px;
    max-width: 540px;
    margin-left: auto; margin-right: auto;
    border: 1px solid var(--divider);
  }
  .paso {
    padding: 36px 24px; text-align: center;
    border-right: 1px solid var(--divider);
    border-bottom: 1px solid var(--divider);
  }
  .paso:nth-child(2n) { border-right: none; }
  .paso:nth-child(3), .paso:nth-child(4) { border-bottom: none; }
  .paso-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem; font-weight: 300;
    color: var(--gold-light); display: block; margin-bottom: 8px; line-height: 1;
  }
  .paso h4 {
    font-size: 12px; font-weight: 500; color: var(--charcoal);
    margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.08em;
  }
  .paso p { font-size: 13px; color: var(--body); line-height: 1.6; }

  /* ── FOOTER ── */
  footer {
    background: var(--white); border-top: 1px solid var(--divider);
    padding: 48px 24px; text-align: center;
  }
  .footer-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem; color: var(--charcoal); font-weight: 300; margin-bottom: 6px;
  }
  .footer-brand span { color: var(--gold); }
  .footer-line { width: 40px; height: 1px; background: var(--gold); margin: 16px auto; }
  footer .tagline {
    font-size: 13px; color: #9A9690; max-width: 400px; margin: 0 auto 28px;
  }

  /* ── INSTAGRAM CTA ── */
  .ig-cta {
    display: inline-flex; align-items: center; gap: 10px;
    border: 1px solid var(--divider);
    padding: 12px 24px;
    text-decoration: none;
    color: var(--charcoal);
    font-size: 13px; font-weight: 400;
    letter-spacing: 0.05em;
    transition: border-color 0.2s;
    background: var(--cream);
  }
  .ig-cta:hover { border-color: var(--gold); }
  .ig-cta svg { width: 20px; height: 20px; stroke: var(--gold); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .ig-handle { color: var(--gold-dark); font-weight: 500; }

  @media (max-width: 600px) {
    .photo-grid img { height: 180px; }
  }
</style>
</head>
<body>

<!-- HERO -->
<header class="hero">
  <p class="brand-tag">Poppy Craft · Choluteca, Honduras</p>
  <h1>Coronas de Fomi<br><em>hechas especialmente para ti</em></h1>
  <p class="hero-sub">Cada corona es única. Diseñada a mano, adaptada a tus colores, tu estilo y tu fotografía.</p>
  <div class="ornament">
    <div class="ornament-line"></div>
    <div class="ornament-diamond"></div>
    <div class="ornament-line right"></div>
  </div>
</header>

<!-- HERO IMAGE -->
<div class="hero-img-wrap">
  <img src="https://i.ibb.co/8D6mTYPt/Chat-GPT-Image-28-jun-2026-03-25-56-p-m.png" alt="Corona de fomi personalizada Poppy Craft">
</div>

<!-- PHOTO GRID -->
<div class="photo-grid">
  <img src="https://i.ibb.co/j95NGqHB/coronita-rosa.jpg" alt="Corona personalizada de fomi rosa con detalles plateados" loading="lazy">
  <img src="https://i.ibb.co/HLWHrnFG/coronita-rosa2.jpg" alt="Corona de fomi puesta, vista exterior" loading="lazy">
  <img src="https://i.ibb.co/ZyvKRMQ/modelo-coronita-rosa.jpg" alt="Festejada usando corona y sosteniendo foto de niña" loading="lazy">
  <img src="https://i.ibb.co/7xDSBwyk/modelo2-coronita-blanca.jpg" alt="Joven posando con corona blanca de cumpleaños" loading="lazy">
</div>

<!-- INTRO -->
<section class="intro">
  <div class="container">
    <p class="section-label">Sobre nuestras coronas</p>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <p>En Poppy Craft creemos que cada cumpleaños merece un detalle especial. Por eso elaboramos coronas de fomi completamente personalizadas, diseñadas con mucho amor y creatividad para hacer de tu celebración un momento inolvidable.</p>
  </div>
</section>

<!-- PERSONALIZACIÓN -->
<section class="personalizacion">
  <div class="container">
    <p class="section-label">Personalización</p>
    <h2>Tú decides cada detalle</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="options-grid">

      <div class="option-card">
        <div class="option-icon">
          <!-- palette icon -->
          <svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
        </div>
        <h3>Colores</h3>
        <p>Elige la paleta que mejor refleje tu estilo o la temática de tu fiesta.</p>
      </div>

      <div class="option-card">
        <div class="option-icon">
          <!-- sparkles / wand icon -->
          <svg viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
        </div>
        <h3>Estilo y temática</h3>
        <p>Desde princesa clásica hasta minimalista moderno — nos adaptamos a tu visión.</p>
      </div>

      <div class="option-card">
        <div class="option-icon">
          <!-- hash / number icon -->
          <svg viewBox="0 0 24 24"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>
        </div>
        <h3>Edad</h3>
        <p>Colocamos el número que quieras con la tipografía y el material que elijas.</p>
      </div>

      <div class="option-card">
        <div class="option-icon">
          <!-- camera icon -->
          <svg viewBox="0 0 24 24"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
        </div>
        <h3>Tu fotografía</h3>
        <p>Integra tu foto o la del cumpleañero directamente en el diseño de la corona.</p>
      </div>

      <div class="option-card">
        <div class="option-icon">
          <!-- gem icon -->
          <svg viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>
        </div>
        <h3>Detalles extra</h3>
        <p>Cintas, piedras decorativas, glitter, encajes — cada corona tiene su propio carácter.</p>
      </div>

      <div class="option-card">
        <div class="option-icon">
          <!-- image icon -->
          <svg viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <h3>Referencias</h3>
        <p>Puedes enviarnos imágenes de referencia para recrear el diseño que tienes en mente.</p>
      </div>

    </div>
  </div>
</section>

<!-- CARACTERÍSTICAS -->
<section class="caracteristicas">
  <div class="container">
    <p class="section-label" style="text-align:center;">Especificaciones</p>
    <h2>Características del producto</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <ul class="feat-list">
      <li>Elaboradas con foami, foami perchado, cintas, piedras decorativas y detalles personalizados.</li>
      <li>Medida estándar de 40 centímetros de largo.</li>
      <li>Incluyen cinta posterior ajustable para adaptarse cómodamente al tamaño de la cabeza.</li>
      <li>Disponibles para niños, jóvenes y adultos.</li>
      <li>Reutilizables — se conservan como un hermoso recuerdo de tu celebración.</li>
    </ul>
  </div>
</section>

<!-- IDEALES PARA -->
<section class="ideales">
  <div class="container">
    <p class="section-label">Ocasiones</p>
    <h2>Ideales para</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="tags-wrap">
      <span class="tag">Cumpleaños infantiles</span>
      <span class="tag">Cumpleaños de adultos</span>
      <span class="tag">Sesiones de fotos</span>
      <span class="tag">Fiestas temáticas</span>
      <span class="tag">Celebraciones especiales</span>
      <span class="tag">Sorpresas de cumpleaños</span>
    </div>
  </div>
</section>

<!-- COMPLEMENTA -->
<section class="complementa">
  <div class="container">
    <p class="section-label">Más de Poppy Craft</p>
    <h2>Complementa tu pedido</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <p class="lead">Combina tu corona con otros productos personalizados para una celebración completamente coordinada.</p>
    <div class="complementa-items">
      <div class="comp-item">Toppers para pastel</div>
      <div class="comp-item">Banderines</div>
      <div class="comp-item">Decoraciones temáticas</div>
      <div class="comp-item">Detalles personalizados</div>
    </div>
  </div>
</section>

<!-- PEDIDOS Y PRECIO -->
<section class="pedidos">
  <div class="container">
    <p class="section-label">Pedidos y entregas</p>
    <h2>Reserva con anticipación</h2>
    <div class="ornament" style="margin:16px auto 24px;">
      <div class="ornament-line"></div>
      <div class="ornament-diamond"></div>
      <div class="ornament-line right"></div>
    </div>
    <p>Recomendamos hacer el pedido con al menos <strong style="color:var(--gold-dark);">3 a 7 días de anticipación</strong> para garantizar la disponibilidad de materiales y una personalización cuidadosa.</p>
    <div class="entrega-grid">
      <div class="entrega-card">
        <div class="icon">
          <!-- map-pin icon -->
          <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <p>Entregas locales<br>en Choluteca</p>
      </div>
      <div class="entrega-card">
        <div class="icon">
          <!-- package icon -->
          <svg viewBox="0 0 24 24"><path d="M11 21H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"/><path d="M21 16V8a2 2 0 0 0-2-2h-8v16h8a2 2 0 0 0 2-2z"/><line x1="9" x2="9" y1="3" y2="21"/><path d="m13 8 3 3-3 3"/></svg>
        </div>
        <p>Envíos a nivel<br>nacional en Honduras</p>
      </div>
    </div>
    <div class="precio-badge">
      <span class="desde">Precio desde</span>
      <span class="amount">L. 120.00</span>
      <span class="nota">El precio varía según diseño y detalles adicionales.</span>
    </div>
  </div>
</section>

<!-- PASOS 2x2 -->
<section class="pasos">
  <div class="container">
    <p class="section-label">Proceso</p>
    <h2>¿Cómo hacer tu pedido?</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="pasos-grid">
      <div class="paso">
        <span class="paso-num">01</span>
        <h4>Escríbenos</h4>
        <p>Por WhatsApp o Instagram</p>
      </div>
      <div class="paso">
        <span class="paso-num">02</span>
        <h4>Comparte tu idea</h4>
        <p>Envía fotos de referencia o descríbela</p>
      </div>
      <div class="paso">
        <span class="paso-num">03</span>
        <h4>Elige los detalles</h4>
        <p>Colores, edad, fotografía y extras</p>
      </div>
      <div class="paso">
        <span class="paso-num">04</span>
        <h4>Nosotros creamos</h4>
        <p>Tu corona única lista para celebrar</p>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-brand"><span>Poppy</span> Craft</div>
  <div class="footer-line"></div>
  <p class="tagline">Creamos detalles personalizados que convierten cada momento especial en un recuerdo inolvidable.</p>

  <a href="https://www.instagram.com/poppy.crafty" target="_blank" rel="noopener" class="ig-cta">
    <!-- instagram icon -->
    <svg viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
    <span>Síguenos en Instagram &nbsp;<span class="ig-handle">@poppy.crafty</span></span>
  </a>
</footer>

</body>
</html>


<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Guía Completa Cricut: Materiales, Tapetes y Cuidados | Poppy Craft</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --lavender: #F3F0FA;
    --purple: #9B7EC8;
    --purple-dark: #6B4FA0;
    --purple-light: #D8CCEE;
    --purple-xlight: #EDE8F7;
    --white: #FFFFFF;
    --body: #4A4458;
    --charcoal: #2D2640;
    --divider: #E2DAF0;
  }

  body {
    background-color: var(--lavender);
    color: var(--body);
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    line-height: 1.75;
    font-size: 16px;
  }

  /* ── HERO ── */
  .hero {
    background: var(--white);
    border-bottom: 1px solid var(--divider);
    padding: 64px 24px 52px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
  }
  .brand-tag {
    font-size: 10px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--purple);
    font-weight: 500;
    margin-bottom: 18px;
  }
  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: clamp(1.9rem, 5vw, 3rem);
    color: var(--charcoal);
    line-height: 1.2;
    max-width: 640px;
    margin: 0 auto 14px;
  }
  .hero h1 em { font-style: italic; color: var(--purple-dark); }
  .hero-sub {
    font-size: 15px;
    color: var(--body);
    max-width: 480px;
    margin: 0 auto 32px;
    font-weight: 300;
  }

  /* ── ORNAMENT ── */
  .ornament {
    display: flex; align-items: center; justify-content: center;
    gap: 12px; margin: 28px auto;
  }
  .ornament-line {
    width: 56px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--purple-light));
  }
  .ornament-line.right { background: linear-gradient(90deg, var(--purple-light), transparent); }
  .ornament-diamond {
    width: 6px; height: 6px;
    background: var(--purple);
    transform: rotate(45deg);
  }

  /* ── HERO IMAGE ── */
  .hero-img-wrap {
    background: var(--lavender);
    padding: 36px 24px;
    text-align: center;
    border-bottom: 1px solid var(--divider);
  }
  .hero-img-wrap img {
    max-width: 320px; width: 100%;
    display: inline-block;
    border-radius: 2px;
    filter: drop-shadow(0 6px 18px rgba(107,79,160,0.13));
  }

  /* ── CONTAINER ── */
  .container { max-width: 740px; margin: 0 auto; padding: 0 24px; }

  /* ── SECTION LABEL ── */
  .section-label {
    font-size: 10px; letter-spacing: 0.3em;
    text-transform: uppercase; color: var(--purple);
    font-weight: 500; margin-bottom: 12px;
  }

  /* ── SECTION TITLE ── */
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400; font-size: clamp(1.4rem, 3vw, 1.9rem);
    color: var(--charcoal); margin-bottom: 8px;
  }

  /* ── INTRO ── */
  .intro { padding: 60px 24px; background: var(--white); text-align: center; }
  .intro p {
    max-width: 600px; margin: 0 auto;
    font-size: 16px; color: var(--body); line-height: 1.85;
  }

  /* ── SECTION BASE ── */
  .section-white { padding: 60px 24px; background: var(--white); }
  .section-lav   { padding: 60px 24px; background: var(--lavender); }
  .section-white .section-label,
  .section-lav .section-label { text-align: center; }
  .section-white .section-title,
  .section-lav .section-title { text-align: center; }

  /* ── MACHINES GRID ── */
  .machines-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; margin-top: 36px;
  }
  .machine-card {
    background: var(--white);
    border: 1px solid var(--divider);
    overflow: hidden;
    text-align: center;
  }
  .machine-card img {
    width: 100%; height: 180px;
    object-fit: contain; object-position: center;
    background: #f9f9f9;
    display: block;
    padding: 12px;
  }
  .machine-card-body { padding: 20px 16px; }
  .machine-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 6px;
  }
  .machine-card p { font-size: 13px; color: var(--body); line-height: 1.6; }
  .machine-badge {
    display: inline-block;
    background: var(--purple-xlight);
    color: var(--purple-dark);
    font-size: 10px; font-weight: 500;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 3px 10px; margin-bottom: 8px;
  }

  /* ── TAPETES TABLE ── */
  .tapetes-wrap { margin-top: 36px; }
  .tapetes-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px; margin-bottom: 24px;
  }
  .tapete-card {
    background: var(--white);
    border: 1px solid var(--divider);
    overflow: hidden; text-align: center;
  }
  .tapete-card img {
    width: 100%; height: 160px;
    object-fit: contain;
    background: #f9f9f9;
    display: block;
    padding: 10px;
  }
  .tapete-card-body { padding: 14px 12px; }
  .tapete-card h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 4px;
  }
  .tapete-card p { font-size: 12px; color: var(--body); line-height: 1.5; }
  .tapete-dot {
    display: inline-block;
    width: 10px; height: 10px; border-radius: 50%;
    margin-right: 4px; vertical-align: middle;
  }

  /* ── TIP BOX ── */
  .tip-box {
    background: var(--purple-xlight);
    border-left: 3px solid var(--purple);
    padding: 16px 20px;
    font-size: 14px; color: var(--purple-dark);
    margin-top: 20px;
    display: flex; gap: 10px; align-items: flex-start;
  }
  .tip-box svg { flex-shrink: 0; margin-top: 2px; }

  /* ── MATERIALS ── */
  .materials-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px; margin-top: 36px;
  }
  .material-card {
    background: var(--lavender);
    border: 1px solid var(--divider);
    overflow: hidden; text-align: center;
  }
  .material-card img {
    width: 100%; height: 160px;
    object-fit: contain;
    background: #f9f9f9;
    display: block;
    padding: 10px;
  }
  .material-card-body { padding: 14px 12px; }
  .material-card h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 4px;
  }
  .material-card p { font-size: 12px; color: var(--body); line-height: 1.5; }

  /* ── GRAMAJES TABLE ── */
  .table-wrap { margin-top: 36px; overflow-x: auto; }
  table {
    width: 100%; border-collapse: collapse;
    font-size: 14px; background: var(--white);
  }
  thead tr { background: var(--purple); }
  thead th {
    color: var(--white); font-weight: 500;
    padding: 12px 16px; text-align: left;
    font-size: 12px; letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  tbody tr { border-bottom: 1px solid var(--divider); }
  tbody tr:last-child { border-bottom: none; }
  tbody td { padding: 12px 16px; color: var(--body); }
  tbody tr:nth-child(even) { background: var(--lavender); }

  /* ── HERRAMIENTAS ── */
  .tools-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px; margin-top: 36px;
  }
  .tool-card {
    background: var(--white);
    border: 1px solid var(--divider);
    overflow: hidden; text-align: center;
  }
  .tool-card img {
    width: 100%; height: 160px;
    object-fit: contain;
    background: #f9f9f9;
    display: block;
    padding: 10px;
  }
  .tool-card-body { padding: 14px 12px; }
  .tool-card h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 600;
    color: var(--charcoal);
  }

  /* ── CUIDADOS / ERRORES ── */
  .checks-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; margin-top: 36px;
  }
  .check-box {
    background: var(--white);
    border: 1px solid var(--divider);
    padding: 24px 20px;
  }
  .check-box h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem; font-weight: 600;
    color: var(--charcoal); margin-bottom: 16px;
    display: flex; align-items: center; gap: 8px;
  }
  .check-list { list-style: none; }
  .check-list li {
    font-size: 14px; color: var(--body);
    padding: 7px 0; border-bottom: 1px solid var(--divider);
    display: flex; align-items: flex-start; gap: 10px;
    line-height: 1.5;
  }
  .check-list li:last-child { border-bottom: none; }
  .check-list li .ico { flex-shrink: 0; margin-top: 1px; }

  /* ── PROYECTOS ── */
  .proyectos-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px; margin-top: 36px;
  }
  .proyecto-item {
    background: var(--white);
    border: 1px solid var(--divider);
    padding: 18px 14px; text-align: center;
    font-size: 13px; color: var(--charcoal);
    font-weight: 400;
  }
  .proyecto-item svg { margin: 0 auto 8px; display: block; stroke: var(--purple); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }

  /* ── CONCLUSION ── */
  .conclusion {
    padding: 60px 24px; background: var(--purple);
    text-align: center;
  }
  .conclusion blockquote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.2rem, 3vw, 1.7rem);
    font-weight: 300; font-style: italic;
    color: var(--white); max-width: 600px;
    margin: 0 auto; line-height: 1.6;
  }

  /* ── TIP DE LA SEMANA ── */
  .tip-semana {
    padding: 60px 24px; background: var(--lavender); text-align: center;
  }
  .tip-semana h2 { color: var(--charcoal); margin-bottom: 8px; }
  .tip-card {
    background: var(--white);
    border: 1px solid var(--divider);
    max-width: 540px; margin: 28px auto 0;
    padding: 32px 28px; text-align: left;
    display: flex; gap: 20px; align-items: flex-start;
  }
  .tip-card-icon {
    flex-shrink: 0;
    width: 44px; height: 44px;
    background: var(--purple-xlight);
    display: flex; align-items: center; justify-content: center;
  }
  .tip-card-icon svg { stroke: var(--purple-dark); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; width: 22px; height: 22px; }
  .tip-card p { font-size: 15px; color: var(--body); line-height: 1.75; }

  /* ── FOOTER ── */
  footer {
    background: var(--white);
    border-top: 1px solid var(--divider);
    padding: 48px 24px; text-align: center;
  }
  .footer-profile {
    width: 64px; height: 64px; border-radius: 50%;
    object-fit: cover; border: 2px solid var(--purple-light);
    margin: 0 auto 12px; display: block;
  }
  .footer-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem; color: var(--charcoal);
    font-weight: 300; margin-bottom: 4px;
  }
  .footer-brand span { color: var(--purple-dark); }
  .footer-line { width: 36px; height: 1px; background: var(--purple-light); margin: 14px auto; }
  footer .tagline { font-size: 13px; color: #9A90B0; max-width: 380px; margin: 0 auto 24px; }
  .ig-cta {
    display: inline-flex; align-items: center; gap: 10px;
    border: 1px solid var(--divider); padding: 12px 24px;
    text-decoration: none; color: var(--charcoal);
    font-size: 13px; font-weight: 400; letter-spacing: 0.05em;
    background: var(--lavender);
  }
  .ig-cta svg { width: 20px; height: 20px; stroke: var(--purple); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .ig-handle { color: var(--purple-dark); font-weight: 500; }

  @media (max-width: 600px) {
    .checks-grid { grid-template-columns: 1fr; }
    .machines-grid { grid-template-columns: 1fr 1fr; }
  }
</style>
</head>
<body>

<!-- HERO -->
<header class="hero">
  <p class="brand-tag">Poppy Craft · Guía Cricut</p>
  <h1>Todo lo que debes saber<br><em>sobre tu Cricut</em></h1>
  <p class="hero-sub">Materiales, tapetes y cuidados — consejos prácticos para aprovechar al máximo tu máquina de corte.</p>
  <div class="ornament">
    <div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div>
  </div>
</header>

<!-- HERO IMAGE (kawaii tools illustration) -->
<div class="hero-img-wrap">
  <img src="https://i.ibb.co/5XFkcwbm/perfil-poppy.jpg" alt="Ilustración herramientas kawaii Cricut - Poppy Craft">
</div>

<!-- INTRO -->
<section class="intro">
  <div class="container">
    <p class="section-label">Introducción</p>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <p>Una máquina Cricut es un cortador de vinilo y papel controlado por computadora que ha revolucionado el mundo de las manualidades y los productos personalizados. Desde stickers hasta camisetas, abre un universo de posibilidades para emprendedores creativos.</p>
  </div>
</section>

<!-- 1. TIPOS DE MÁQUINAS -->
<section class="section-lav">
  <div class="container">
    <p class="section-label">Sección 01</p>
    <h2 class="section-title">Tipos de máquinas Cricut</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="machines-grid">

      <div class="machine-card">
        <img src="https://i.ibb.co/mCC6Gnh9/cricut1.jpg" alt="Cricut Joy">
        <div class="machine-card-body">
          <span class="machine-badge">Compacta</span>
          <h3>Cricut Joy</h3>
          <p>Pequeña y portátil. Ideal para etiquetas y proyectos pequeños.</p>
        </div>
      </div>

      <div class="machine-card">
        <img src="https://i.ibb.co/qYmrF91p/cricut2.jpg" alt="Cricut Explore 3">
        <div class="machine-card-body">
          <span class="machine-badge">Emprendedores</span>
          <h3>Cricut Explore 3</h3>
          <p>Corta más de 100 materiales. Perfecta para emprendedores.</p>
        </div>
      </div>

      <div class="machine-card">
        <img src="https://i.ibb.co/dJrkSZyh/cricut3.jpg" alt="Cricut Maker 3">
        <div class="machine-card-body">
          <span class="machine-badge">Pro</span>
          <h3>Cricut Maker 3</h3>
          <p>La más completa. Corta más de 300 materiales.</p>
        </div>
      </div>

      <div class="machine-card">
        <img src="https://i.ibb.co/ymsDRjBK/cricut4.jpg" alt="Cricut en uso">
        <div class="machine-card-body">
          <span class="machine-badge">En acción</span>
          <h3>Cricut en uso</h3>
          <p>Resultados profesionales desde casa con cada modelo.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- 2. TAPETES -->
<section class="section-white">
  <div class="container">
    <p class="section-label">Sección 02</p>
    <h2 class="section-title">Tipos de tapetes Cricut</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="tapetes-grid">

      <div class="tapete-card">
        <img src="https://i.ibb.co/m5RY1xsj/tapete1.jpg" alt="Tapete LightGrip azul">
        <div class="tapete-card-body">
          <h4><span class="tapete-dot" style="background:#7BAFD4;"></span>LightGrip</h4>
          <p>Papel, cartulina ligera</p>
        </div>
      </div>

      <div class="tapete-card">
        <img src="https://i.ibb.co/fVcJZWgV/tapete2.jpg" alt="Tapete StandardGrip verde">
        <div class="tapete-card-body">
          <h4><span class="tapete-dot" style="background:#6DBF8A;"></span>StandardGrip</h4>
          <p>Vinil y cartulina</p>
        </div>
      </div>

      <div class="tapete-card">
        <img src="https://i.ibb.co/bTSmP4t/tapete3.jpg" alt="Tapete StrongGrip morado">
        <div class="tapete-card-body">
          <h4><span class="tapete-dot" style="background:#9B7EC8;"></span>StrongGrip</h4>
          <p>Cartón grueso, madera balsa</p>
        </div>
      </div>

      <div class="tapete-card">
        <img src="https://i.ibb.co/ksM7VQgg/tapete4.jpg" alt="Tapete FabricGrip rosa">
        <div class="tapete-card-body">
          <h4><span class="tapete-dot" style="background:#E8A0B0;"></span>FabricGrip</h4>
          <p>Tela y fieltro</p>
        </div>
      </div>

    </div>
    <div class="tip-box">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span><strong>Tip:</strong> Limpia tus tapetes con toallitas sin alcohol para prolongar su vida útil.</span>
    </div>
  </div>
</section>

<!-- 3. MATERIALES -->
<section class="section-lav">
  <div class="container">
    <p class="section-label">Sección 03</p>
    <h2 class="section-title">Materiales que puedes cortar</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="materials-grid">

      <div class="material-card">
        <img src="https://i.ibb.co/Zz8qnSX7/material1.jpg" alt="Vinil adhesivo">
        <div class="material-card-body">
          <h4>Vinil Adhesivo</h4>
          <p>Para stickers, vasos y decoración.</p>
        </div>
      </div>

      <div class="material-card">
        <img src="https://i.ibb.co/0RLnPx5J/material2.jpg" alt="Vinil textil HTV">
        <div class="material-card-body">
          <h4>Vinil Textil (HTV)</h4>
          <p>Para camisetas y bolsas.</p>
        </div>
      </div>

      <div class="material-card">
        <img src="https://i.ibb.co/nMjGydYC/material3.jpg" alt="Cartulina">
        <div class="material-card-body">
          <h4>Cartulina</h4>
          <p>Ideal para invitaciones y toppers.</p>
        </div>
      </div>

      <div class="material-card">
        <img src="https://i.ibb.co/6Rm49TWZ/material4.jpg" alt="Papel sticker y glitter">
        <div class="material-card-body">
          <h4>Papel Sticker / Glitter</h4>
          <p>Etiquetas y proyectos decorativos.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- 4. GRAMAJES -->
<section class="section-white">
  <div class="container">
    <p class="section-label">Sección 04</p>
    <h2 class="section-title">Gramajes recomendados de cartulina</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Uso</th>
            <th>Gramaje recomendado</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Flores de papel</td><td>180 – 220 g</td></tr>
          <tr><td>Invitaciones</td><td>200 – 250 g</td></tr>
          <tr><td>Toppers</td><td>220 – 300 g</td></tr>
          <tr><td>Cajas pequeñas</td><td>250 – 300 g</td></tr>
        </tbody>
      </table>
    </div>
    <div class="tip-box" style="margin-top:20px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span><strong>Tip:</strong> Entre más gruesa sea la cartulina, más importante es hacer una prueba de corte antes del proyecto final.</span>
    </div>
  </div>
</section>

<!-- 5. HERRAMIENTAS -->
<section class="section-lav">
  <div class="container">
    <p class="section-label">Sección 05</p>
    <h2 class="section-title">Herramientas básicas</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="tools-grid">

      <div class="tool-card">
        <img src="https://i.ibb.co/0V8nbhpm/herramienta1.jpg" alt="Depilador weeder">
        <div class="tool-card-body"><h4>Depilador (Weeder)</h4></div>
      </div>

      <div class="tool-card">
        <img src="https://i.ibb.co/9XzkKkk/herramienta2.jpg" alt="Espátula y raspador">
        <div class="tool-card-body"><h4>Espátula / Raspador</h4></div>
      </div>

      <div class="tool-card">
        <img src="https://i.ibb.co/C3zk9GS6/herramienta3.jpg" alt="Tijeras de precisión">
        <div class="tool-card-body"><h4>Tijeras de precisión</h4></div>
      </div>

      <div class="tool-card">
        <img src="https://i.ibb.co/R1G168Q/herramienta4.jpg" alt="Rodillo brayer">
        <div class="tool-card-body"><h4>Rodillo (Brayer)</h4></div>
      </div>

    </div>
  </div>
</section>

<!-- 6 & 7. CUIDADOS Y ERRORES -->
<section class="section-white">
  <div class="container">
    <p class="section-label">Secciones 06 & 07</p>
    <h2 class="section-title">Cuidados y errores comunes</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="checks-grid">

      <div class="check-box">
        <h3>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B4FA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Buenas prácticas
        </h3>
        <ul class="check-list">
          <li><span class="ico">✦</span> Limpia las cuchillas regularmente.</li>
          <li><span class="ico">✦</span> Mantén la máquina cubierta cuando no la uses.</li>
          <li><span class="ico">✦</span> No jales los tapetes al retirarlos.</li>
          <li><span class="ico">✦</span> Actualiza el software de diseño.</li>
          <li><span class="ico">✦</span> Guarda los materiales en un lugar seco.</li>
          <li><span class="ico">✦</span> Realiza pruebas de corte antes de proyectos grandes.</li>
          <li><span class="ico">✦</span> Evita que se acumulen residuos de papel y vinil.</li>
        </ul>
      </div>

      <div class="check-box">
        <h3>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0392B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          Errores que evitar
        </h3>
        <ul class="check-list">
          <li><span class="ico" style="color:#C0392B;">✕</span> Usar el tapete incorrecto.</li>
          <li><span class="ico" style="color:#C0392B;">✕</span> Cortar sin hacer una prueba previa.</li>
          <li><span class="ico" style="color:#C0392B;">✕</span> Utilizar una cuchilla desgastada.</li>
          <li><span class="ico" style="color:#C0392B;">✕</span> Despegar el material de forma brusca.</li>
          <li><span class="ico" style="color:#C0392B;">✕</span> No configurar correctamente el tipo de material.</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- 8. PROYECTOS -->
<section class="section-lav">
  <div class="container">
    <p class="section-label">Sección 08</p>
    <h2 class="section-title">Proyectos ideales para comenzar</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="proyectos-grid">

      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        Stickers personalizados
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        Toppers para cumpleaños
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        Etiquetas para negocios
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>
        Camisetas personalizadas
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        Cajas de regalo
      </div>
      <div class="proyecto-item">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Decoraciones para fiestas
      </div>

    </div>
  </div>
</section>

<!-- CONCLUSIÓN -->
<section class="conclusion">
  <div class="container">
    <div class="ornament" style="margin-bottom:28px;">
      <div class="ornament-line" style="background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4));"></div>
      <div class="ornament-diamond" style="background:rgba(255,255,255,0.7);"></div>
      <div class="ornament-line right" style="background:linear-gradient(90deg,rgba(255,255,255,0.4),transparent);"></div>
    </div>
    <blockquote>
      "La Cricut es una herramienta increíble para emprender y crear proyectos únicos. Conociendo los materiales, tapetes y cuidados adecuados, podrás sacarle el máximo provecho y hacer que tu máquina dure por muchos años."
    </blockquote>
  </div>
</section>

<!-- TIP DE LA SEMANA -->
<section class="tip-semana">
  <div class="container">
    <p class="section-label">Exclusivo</p>
    <h2 class="section-title">Tip de la semana con Poppy Craft</h2>
    <div class="ornament"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line right"></div></div>
    <div class="tip-card">
      <div class="tip-card-icon">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <p>Antes de cortar cualquier material nuevo, siempre haz una <strong>prueba de corte en una esquina del tapete</strong>. Esto te ahorra material, tiempo y frustraciones — especialmente con cartulinas gruesas o vinil especializado.</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <img src="https://i.ibb.co/5XFkcwbm/perfil-poppy.jpg" alt="Poppy Craft perfil" class="footer-profile">
  <div class="footer-brand"><span>Poppy</span> Craft</div>
  <div class="footer-line"></div>
  <p class="tagline">Creamos detalles personalizados que convierten cada momento especial en un recuerdo inolvidable.</p>
  <a href="https://www.instagram.com/poppy.crafty" target="_blank" rel="noopener" class="ig-cta">
    <svg viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    <span>Síguenos en Instagram &nbsp;<span class="ig-handle">@poppy.crafty</span></span>
  </a>
</footer>

</body>
</html>



<div style="max-width: 700px; margin: 0 auto; font-family: 'Georgia', 'Times New Roman', serif; color: #1e3a5f; line-height: 1.75; background-color: #ffffff;">

  <!-- IMAGEN 1: Header - ilustración columna vertebral -->
  <div style="width: 55%; max-width: 340px; aspect-ratio: 2 / 3; background-color: #eaf2f8; border-radius: 8px; overflow: hidden; margin: 0 auto 30px auto;">
    <img src="https://i.ibb.co/WNZHDpCH/Chat-GPT-Image-12-jul-2026-02-05-04-p-m.png" alt="Ilustración columna vertebral" style="width: 100%; height: 100%; object-fit: cover; display: block;">
  </div>

  <h1 style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #14324d; font-size: 32px; font-weight: 600; margin-bottom: 8px;">"Ponte derecha": un año conviviendo con un dolor que sí tenía nombre</h1>
  <p style="font-family: Arial, sans-serif; color: #5b7c99; font-size: 14px; margin-bottom: 40px; letter-spacing: 0.5px; text-transform: uppercase;">Mi historia con la escoliosis</p>

  <p>Durante mucho tiempo el dolor de espalda fue simplemente parte de mi día. Me levantaba con él, iba a la universidad con él, y me acostaba con él. No era un dolor que apareciera de vez en cuando; era constante, como un ruido de fondo al que ya me había acostumbrado a ignorar porque nadie parecía tomarlo en serio, ni siquiera yo misma.</p>

  <p>Aprendí a acomodarme para que doliera menos. Evitaba ciertas posiciones al sentarme en clase, cambiaba de lado la mochila sin saber muy bien por qué un hombro se cansaba más rápido que el otro, y algunas noches el dolor era tan fuerte que me costaba encontrar una postura para dormir. Nada de eso me parecía suficiente como para preocupar a alguien. Después de todo, si mi mamá tenía razón y era cuestión de postura, entonces el problema era mío, no de mi cuerpo.</p>

  <p>Mi mamá tenía una explicación para todo: mala postura. "Ponte derecha", me decía casi todos los días. No lo decía con mala intención, lo decía porque genuinamente creía que ese era el problema, y yo también terminé creyéndolo. Me esforzaba por enderezarme, por sentarme "bien", por caminar "bien", y el dolor seguía ahí, indiferente a mis esfuerzos. Con el tiempo aprendí a cargar con él en silencio, porque ¿qué más podía decir cuando la respuesta siempre era la misma?</p>

  <p>Lo más difícil no era el dolor en sí. Era la soledad de sentir que algo estaba mal en mi cuerpo y no tener cómo explicarlo. "Ponte derecha" no es un comentario agresivo, y por eso mismo es más difícil de cuestionar. Viene de la gente que te quiere, dicho con la mejor intención, y aun así, con el tiempo, empieza a sonar como que el dolor es una exageración tuya, algo que podrías resolver si simplemente te esforzaras un poco más.</p>

  <!-- IMAGEN 2: silueta caminando -->
  <div style="width: 60%; max-width: 380px; aspect-ratio: 2 / 3; background-color: #eaf2f8; border-radius: 8px; overflow: hidden; margin: 30px auto;">
    <img src="https://i.ibb.co/0VJ7QBHP/Chat-GPT-Image-12-jul-2026-02-06-21-p-m.png" alt="Silueta caminando" style="width: 100%; height: 100%; object-fit: cover; display: block;">
  </div>

  <p>Hace aproximadamente un año pasó algo que cambió todo. Mi mamá me fue a traer a la universidad, algo que hacía siempre, y ese día notó algo que nunca antes había visto: mi pantalón estaba más abajo de un lado que del otro. Y no solo eso, mi camisa también caía desnivelada, un lado más bajo que el otro. No era la ropa. Era yo.</p>

  <p>Ese fue el momento en que "ponte derecha" dejó de tener sentido para ella también. Recuerdo su cara cuando lo notó, esa mezcla de confusión y preocupación de alguien que de pronto está viendo algo que estuvo ahí todo el tiempo, pero que nadie había sabido nombrar. Me llevó al doctor esa misma semana.</p>

  <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #14324d; font-size: 22px; margin-top: 45px;">El diagnóstico</h2>

  <p>Me hicieron una radiografía, y ahí apareció, por fin, un nombre para el dolor que había cargado durante tanto tiempo: escoliosis. En mi caso, leve. Después de esa primera consulta fui donde dos médicos más para confirmar el diagnóstico y entender qué seguía. No fue solo una opinión, fueron tres, y las tres coincidían: la curvatura estaba ahí, y era la causa real de años de dolor que nadie —incluyéndome a mí— había sabido explicar.</p>

  <p>Hubo algo casi liberador en ese momento, y también algo incómodo. Liberador porque por fin tenía una razón médica, algo que se podía ver en una placa, algo innegable. Incómodo porque significaba aceptar que durante años había normalizado un dolor que no tenía por qué normalizar, solo porque nadie —ni yo misma— había insistido en buscar una respuesta distinta a "cuida tu postura".</p>

  <!-- IMAGEN 3: radiografía -->
  <div style="width: 60%; max-width: 380px; aspect-ratio: 2 / 3; background-color: #14324d; border-radius: 8px; overflow: hidden; margin: 30px auto;">
    <img src="https://i.ibb.co/v6rFWhLB/Chat-GPT-Image-12-jul-2026-02-08-35-p-m.png" alt="Radiografía de columna" style="width: 100%; height: 100%; object-fit: cover; display: block;">
  </div>

  <div style="background-color: #f4f8fb; border-left: 4px solid #2e6da4; padding: 24px 28px; margin: 35px 0; border-radius: 4px;">
    <h3 style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #14324d; font-size: 18px; margin-top: 0;">¿Qué es la escoliosis?</h3>
    <p style="margin-bottom: 14px;">Es una curvatura lateral anormal de la columna vertebral. En lugar de ser recta cuando se observa de frente, la columna se curva hacia un lado, formando una "C" o una "S". En la mayoría de los casos diagnosticados en adolescentes y adultos jóvenes, no hay una causa identificable; se le llama escoliosis idiopática, y es el tipo más común. Existen también la congénita (presente desde el nacimiento, por una malformación de las vértebras) y la neuromuscular (asociada a otras condiciones que afectan los músculos o el sistema nervioso).</p>
    <p style="margin-bottom: 14px;">El grado de curvatura se mide en "grados Cobb" y según eso se clasifica en leve, moderada o severa. Esa clasificación es la que define el tratamiento: los casos leves suelen manejarse con observación y terapia física; los moderados a veces requieren además el uso de fajas o corsés para evitar que la curvatura avance; los severos pueden necesitar cirugía para corregir la posición de la columna.</p>
    <p style="margin-bottom: 14px;">Uno de los mitos más comunes es que la escoliosis se puede prevenir o corregir solo con "buena postura". En la mayoría de los casos idiopáticos esto no es cierto: la postura no la causa, y tampoco basta para revertirla. Por eso comentarios como "ponte derecha" parten de una idea equivocada de lo que realmente está pasando en el cuerpo.</p>
    <p style="margin-bottom: 0;">En mi caso, por ser leve, la cirugía se consideró como posibilidad al inicio, pero finalmente los médicos determinaron que no era necesaria. Con terapias constantes, se podía mejorar sin llegar a ese punto.</p>
  </div>

  <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #14324d; font-size: 22px; margin-top: 45px;">Las terapias</h2>

  <p>Lo que siguió no fue fácil. Tuve que empezar terapias físicas, y durante las primeras dos semanas tenía que ir todos los días. Eso significaba levantarme a las cinco de la mañana para poder llegar a tiempo, hacer la sesión, y después ir directo a la universidad para entrar a clases a las nueve. Esos meses fueron de los más agotadores que he vivido: el cuerpo cansado por el dolor, y encima cansado por la rutina que apenas dejaba espacio para descansar.</p>

  <p>Había días en los que lo único que quería era quedarme en la cama un rato más, pero sabía que faltar significaba retrasar el progreso. Así que me levantaba, iba, y después me sentaba en clase intentando concentrarme mientras el cuerpo todavía sentía el esfuerzo de la sesión. No fue un proceso rápido ni cómodo, pero fue necesario.</p>

  <p>Con el tiempo, la frecuencia de las terapias bajó, y aunque hoy sigo yendo, ya no es todos los días. También me recetaron pastillas y cremas para manejar el dolor en los momentos más difíciles, y una faja para ayudar a mantener la postura mientras el tratamiento avanza. Ninguno de estos tratamientos es una solución instantánea; son parte de un proceso que sigue en curso, y probablemente seguirá por un buen tiempo más.</p>

  <!-- IMAGEN 4: sesión de fisioterapia -->
  <div style="width: 65%; max-width: 420px; aspect-ratio: 2 / 3; background-color: #eaf2f8; border-radius: 8px; overflow: hidden; margin: 30px auto;">
    <img src="https://i.ibb.co/pBxZcPH4/Chat-GPT-Image-12-jul-2026-02-10-34-p-m.png" alt="Sesión de fisioterapia" style="width: 100%; height: 100%; object-fit: cover; display: block;">
  </div>

  <h2 style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #14324d; font-size: 22px; margin-top: 45px;">Lo que ahora entiendo</h2>

  <p>Pienso en todos esos años escuchando "ponte derecha" como si fuera así de simple, como si mi cuerpo estuviera eligiendo estar así. Nadie lo decía para lastimar, pero cada comentario cargaba una idea de fondo: que el dolor era exagerado, o que era mi culpa por no esforzarme lo suficiente. Ahora sé que no era una cuestión de voluntad. Era mi columna, curvada de una forma que yo no había elegido ni podía corregir solo con "pararme bien".</p>

  <p>También pienso en mi mamá, y en que su explicación no venía de indiferencia, sino de no tener otra forma de entender lo que veía. Fue ella misma quien, al notar el desnivel en mi ropa, cambió esa idea y me llevó a buscar respuestas reales. A veces el cambio no llega por una explicación que alguien te da, sino por algo tan simple como mirar con más atención.</p>

  <p>Si hay alguien leyendo esto que también carga un dolor sin nombre, que también ha escuchado que el problema es su postura, que su esfuerzo, que su actitud: no se queden con esa explicación si algo dentro de ustedes sabe que hay más. A veces hace falta que alguien más vea lo que tú no puedes ver de ti mismo —en mi caso, fue un pantalón desnivelado— para empezar a hacer las preguntas correctas. Y si nadie más lo nota, insistan ustedes mismos. Un dolor constante nunca es "solo postura" hasta que un médico lo confirme.</p>

  <!-- IMAGEN 5: cierre -->
  <div style="width: 65%; max-width: 420px; aspect-ratio: 4 / 5; background-color: #eaf2f8; border-radius: 8px; overflow: hidden; margin: 30px auto 10px auto;">
    <img src="https://i.ibb.co/ZRfYrxP5/Chat-GPT-Image-12-jul-2026-02-12-40-p-m.png" alt="Imagen de cierre" style="width: 100%; height: 100%; object-fit: cover; display: block;">
  </div>

</div>



<div style="font-family: Georgia, 'Iowan Old Style', serif; max-width: 700px; margin: 0 auto; color: #3a352f; background: #F8F6F2; padding: 40px 36px;">

  <p style="font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #6b7a5f; margin: 0 0 10px 0;">Poppy Craft — Cuidado de máquina</p>
  <h1 style="font-size: 30px; margin: 0 0 6px 0; color: #2e2b25; font-weight: normal;">Mantenimiento de tu Cricut:</h1>
  <h1 style="font-size: 30px; margin: 0 0 20px 0; color: #6b7a5f; font-weight: normal; font-style: italic;">la rutina que nadie te cuenta</h1>

  <div style="border-top: 2px dashed #c9c2b4; margin: 18px 0 28px 0;"></div>

  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75;">Cuando compras una Cricut, casi nadie te explica que la máquina necesita cuidados constantes para seguir cortando bien. Se habla mucho de diseños y proyectos, pero muy poco del mantenimiento real: esa rutina simple que evita que tu máquina falle justo cuando tienes una entrega pendiente.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #6b7a5f; margin: 34px 0 4px 0;">Por qué importa</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Una Cricut corta con base en presión, profundidad y velocidad calculadas para cada material. Si el tapete está sucio, la cuchilla tiene residuos o los rodillos no giran parejo, esa precisión se pierde aunque la configuración esté perfecta.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #6b7a5f; margin: 34px 0 4px 0;">Frecuencia recomendada</h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-family: Arial, sans-serif; font-size: 15px;">
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2ddd0; width: 40%; color: #6b7a5f; font-weight: bold;">Después de cada proyecto</td><td style="padding: 10px 0; border-bottom: 1px solid #e2ddd0;">Retira los residuos del tapete antes de guardarlo.</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2ddd0; color: #6b7a5f; font-weight: bold;">Cada semana (uso frecuente)</td><td style="padding: 10px 0; border-bottom: 1px solid #e2ddd0;">Revisa la cuchilla y límpiala si notas pelusa o adhesivo.</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2ddd0; color: #6b7a5f; font-weight: bold;">Una vez al mes</td><td style="padding: 10px 0; border-bottom: 1px solid #e2ddd0;">Limpia los rodillos y revisa la adherencia del tapete.</td></tr>
    <tr><td style="padding: 10px 0; color: #6b7a5f; font-weight: bold;">Cada 3–6 meses</td><td style="padding: 10px 0;">Evalúa si el tapete necesita reemplazo.</td></tr>
  </table>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #6b7a5f; margin: 34px 0 4px 0;">Limpiar el tapete de corte</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Retira los residuos grandes con una espátula, sin rascar fuerte. Pasa un paño ligeramente húmedo para el polvo fino y deja secar por completo antes de guardarlo. Si ya no sujeta el material ni después de limpiarlo, reemplázalo.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #6b7a5f; margin: 34px 0 4px 0;">Cuidar la cuchilla</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Nunca la toques directamente con los dedos. Si el material se rasga en vez de cortarse limpio, revisa si tiene residuos acumulados. Guárdala siempre en su soporte cuando no esté en uso: una cuchilla desgastada no se arregla limpiándola, hay que cambiarla.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #6b7a5f; margin: 34px 0 4px 0;">Rodillos y almacenamiento</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Los rodillos jalan el tapete durante el corte; si acumulan polvo, el tapete avanza despareja y arruina la alineación. Pásales un paño seco cada mes, sobre todo con foamy o glitter. Para guardar la máquina: cúbrela, evita humedad y sol directo, y saca el tapete de adentro cuando no la uses.</p>

  <div style="border-left: 3px dashed #b08a5a; padding: 4px 0 4px 18px; margin: 28px 0;">
    <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7; margin: 0;"><strong style="font-family: 'Courier New', monospace; letter-spacing: 1px; color: #b08a5a;">OJO —</strong> guardar el tapete con recortes pegados, dejar la cuchilla puesta meses sin revisarla, forzar materiales gruesos sin ajustar la configuración, y no limpiar el polvo de foamy o glitter son los errores que más acortan la vida de la máquina.</p>
  </div>

  <div style="border-top: 2px dashed #c9c2b4; margin: 28px 0 16px 0;"></div>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75;">El mantenimiento no requiere productos especiales ni mucho tiempo: es cuestión de crear el hábito. Una limpieza rápida después de cada proyecto y una revisión mensual más completa bastan para que tu máquina corte con precisión durante años.</p>

</div>


<div style="font-family: Georgia, 'Iowan Old Style', serif; max-width: 700px; margin: 0 auto; color: #3a352f; background: #FAF3EE; padding: 40px 36px;">

  <p style="font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #b4577b; margin: 0 0 10px 0;">Poppy Craft — Notas de taller</p>
  <h1 style="font-size: 30px; margin: 0 0 6px 0; color: #2e2b25; font-weight: normal;">Errores comunes al usar una Cricut</h1>
  <h1 style="font-size: 30px; margin: 0 0 20px 0; color: #b4577b; font-weight: normal; font-style: italic;">y cómo evitarlos</h1>

  <div style="border-top: 2px dashed #e3c3cf; margin: 18px 0 28px 0;"></div>

  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75;">La mayoría de los problemas al usar una Cricut no son culpa de la máquina, sino de decisiones que se toman antes de darle "cortar": una configuración mal elegida, un paso saltado en Design Space o una prueba que nunca se hizo. Estos son los errores más frecuentes, especialmente entre quienes recién empiezan.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #b4577b; margin: 30px 0 4px 0;">Material equivocado en la configuración</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Design Space te pide seleccionar el tipo de material antes de cortar, y de ahí depende la presión y velocidad de la cuchilla. Confundir "cartulina" con vinil textil es la causa número uno de cortes incompletos. Si tu material no aparece en la lista, elige uno similar y ajusta manualmente.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #b4577b; margin: 30px 0 4px 0;">Saltarse la prueba de corte</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Cortar directo sobre el material bueno sin probar antes en un retazo es lo que más desperdicio genera. Una prueba de 3x3 cm te dice si la presión está bien calibrada antes de arriesgar una hoja completa.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #b4577b; margin: 30px 0 4px 0;">Ignorar las actualizaciones del software</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Design Space se actualiza con frecuencia, y algunas actualizaciones corrigen fallos de calibración o compatibilidad con materiales. Una versión desactualizada genera fallos que parecen "culpa de la máquina" cuando son del software.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #b4577b; margin: 30px 0 4px 0;">Despegar el material antes de tiempo</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Retirar el sobrante de vinil o HTV antes de que la máquina termine puede arrancar piezas pequeñas que aún no estaban totalmente cortadas, arruinando detalles finos como letras.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #b4577b; margin: 30px 0 4px 0;">No calibrar imprimir y cortar</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Saltarse la calibración del escáner (o no repetirla tras mucho tiempo) provoca que el corte no coincida con el diseño impreso. Calibrar toma un par de minutos y evita desperdiciar hojas ya impresas.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #b4577b; margin: 30px 0 4px 0;">Presión incorrecta en materiales gruesos</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Foamy grueso, cartón o acetato necesitan ajustes de presión distintos al vinil estándar. Usar la configuración por defecto sin ajustar termina en cortes a medias.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #b4577b; margin: 30px 0 4px 0;">No revisar el diseño antes de cortar</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Líneas superpuestas, textos sin soldar o formas duplicadas se traducen en cortes sin sentido o que consumen más material. Revisar la vista previa antes de confirmar ahorra más de un dolor de cabeza.</p>

  <div style="border-top: 2px dashed #e3c3cf; margin: 28px 0 16px 0;"></div>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75;">Casi todos estos errores comparten una causa: apurar el proceso y saltarse una verificación previa. Elegir bien el material en el software, probar antes de cortar en grande y mantener el programa actualizado resuelve la mayoría de los problemas antes de que ocurran.</p>

</div>


<div style="font-family: Georgia, 'Iowan Old Style', serif; max-width: 700px; margin: 0 auto; color: #3a352f; background: #F2F8F4; padding: 40px 36px;">

  <p style="font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #3f8f66; margin: 0 0 10px 0;">Poppy Craft — Guía de referencia</p>
  <h1 style="font-size: 30px; margin: 0 0 6px 0; color: #2e2b25; font-weight: normal;">Materiales y tapetes para Cricut:</h1>
  <h1 style="font-size: 30px; margin: 0 0 20px 0; color: #3f8f66; font-weight: normal; font-style: italic;">cuál usar y cuándo</h1>

  <div style="border-top: 2px dashed #c2e0cf; margin: 18px 0 28px 0;"></div>

  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75;">Una de las dudas más comunes al empezar con una Cricut no es cómo diseñar, sino qué material usar para cada proyecto y con qué tapete combinarlo. Elegir mal cualquiera de los dos afecta directamente la calidad del corte. Aquí tienes una guía de referencia rápida.</p>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #3f8f66; margin: 30px 0 8px 0;">Materiales más usados</h2>
  <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 15px;">
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; width: 38%; color: #3f8f66; font-weight: bold;">Vinil adhesivo</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Stickers, tazas, vasos, superficies lisas.</td></tr>
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; color: #3f8f66; font-weight: bold;">Vinil textil (HTV)</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Se aplica con calor sobre tela: camisetas, gorras, bolsas.</td></tr>
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; color: #3f8f66; font-weight: bold;">Cartulina</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Tarjetas, toppers, detalles de papelería.</td></tr>
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; color: #3f8f66; font-weight: bold;">Papel fotográfico</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Proyectos de impresión y corte, stickers con imágenes.</td></tr>
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; color: #3f8f66; font-weight: bold;">Foamy delgado</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Coronas, manualidades infantiles, decoración ligera.</td></tr>
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; color: #3f8f66; font-weight: bold;">Acetato</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Ventanas de cajas, toppers transparentes.</td></tr>
    <tr><td style="padding: 9px 0; color: #3f8f66; font-weight: bold;">Papel para stickers</td><td style="padding: 9px 0;">Calcomanías con buen despegue.</td></tr>
  </table>

  <div style="border-left: 3px dashed #b08a5a; padding: 4px 0 4px 18px; margin: 26px 0;">
    <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7; margin: 0;"><strong style="font-family: 'Courier New', monospace; letter-spacing: 1px; color: #b08a5a;">OJO —</strong> telas muy gruesas, cuero grueso sin la cuchilla adecuada, o foamy con purpurina barata sueltan residuo y ensucian la cuchilla y los rodillos más rápido de lo normal.</p>
  </div>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #3f8f66; margin: 30px 0 8px 0;">Tipos de tapete</h2>
  <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 15px;">
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; width: 38%; color: #7a9a3a; font-weight: bold;">LightGrip</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Papel fino, calco, cartulina delgada. Adhesivo suave para no romper el papel al despegar.</td></tr>
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; color: #c7a93a; font-weight: bold;">StandardGrip</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Vinil adhesivo, cartulina estándar, papel fotográfico. El punto de partida por defecto.</td></tr>
    <tr><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1; color: #a06bb0; font-weight: bold;">StrongGrip</td><td style="padding: 9px 0; border-bottom: 1px solid #dcefe1;">Cartón, foamy grueso, madera delgada, cuero. Adhesivo fuerte para que no se mueva el material.</td></tr>
    <tr><td style="padding: 9px 0; color: #d883a0; font-weight: bold;">FabricGrip</td><td style="padding: 9px 0;">Tela, junto con entretela adhesiva que la estabilice antes de cortar.</td></tr>
  </table>

  <h2 style="font-size: 13px; font-family: 'Courier New', monospace; letter-spacing: 2px; text-transform: uppercase; color: #3f8f66; margin: 30px 0 4px 0;">Conservar el adhesivo del tapete</h2>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75; margin-top: 6px;">Cubre el tapete con su lámina protectora después de cada uso, evita tocar la superficie adhesiva con los dedos y no lo dejes expuesto al sol ni a la humedad. Si ya no sujeta bien, límpialo primero; si el problema persiste, cumplió su vida útil.</p>

  <div style="border-top: 2px dashed #c2e0cf; margin: 28px 0 16px 0;"></div>
  <p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.75;">La combinación correcta de material y tapete es la base de un buen corte, incluso antes de pensar en diseño o configuración de la máquina. Tener claro qué tapete corresponde a cada material evita la mayoría de los problemas de adherencia y desperdicio.</p>

</div>