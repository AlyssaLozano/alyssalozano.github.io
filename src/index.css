@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'DM Sans', sans-serif;
    background-color: #050b1a;
    color: #f0f4ff;
    -webkit-font-smoothing: antialiased;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #050b1a;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(212, 175, 55, 0.4);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(212, 175, 55, 0.7);
  }
}

@layer components {
  .glass-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(212, 175, 55, 0.2);
    border-radius: 12px;
  }
  .gold-text {
    background: linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .gold-border-glow {
    border: 1px solid rgba(212, 175, 55, 0.4);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.1), inset 0 0 20px rgba(212, 175, 55, 0.03);
  }
  .btn-gold {
    background: linear-gradient(135deg, #d4af37 0%, #e8c84d 100%);
    color: #050b1a;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    letter-spacing: 0.025em;
    transition: all 0.3s ease;
    cursor: pointer;
    white-space: nowrap;
  }
  .btn-gold:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
    background: linear-gradient(135deg, #e8c84d 0%, #f0d060 100%);
  }
  .btn-outline-gold {
    border: 1.5px solid #d4af37;
    color: #d4af37;
    background: transparent;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    letter-spacing: 0.025em;
    transition: all 0.3s ease;
    cursor: pointer;
    white-space: nowrap;
  }
  .btn-outline-gold:hover {
    background: rgba(212, 175, 55, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
  }
  .grid-overlay {
    background-image: 
      linear-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212, 175, 55, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .reveal-element {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal-element.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  .shimmer-text {
    background: linear-gradient(90deg, #d4af37 0%, #f0d060 40%, #d4af37 60%, #b8941e 100%);
    background-size: 400px 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }
  .nav-blur {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .soc-glow {
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.08), inset 0 0 30px rgba(0, 255, 136, 0.03);
  }
  .gold-line-left {
    border-left: 3px solid #d4af37;
  }
  .program-card-hover {
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }
  .program-card-hover:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.15);
  }
  .stat-card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .stat-card-hover:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.2);
  }
}

@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}

@keyframes scanLine {
  0% { top: 0; opacity: 0.6; }
  100% { top: 100%; opacity: 0; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes alertSlide {
  0% { opacity: 0; transform: translateX(20px); }
  100% { opacity: 1; transform: translateX(0); }
}

.alert-slide-in {
  animation: alertSlide 0.4s ease-out forwards;
}
