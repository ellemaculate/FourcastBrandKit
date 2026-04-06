import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FourcastLogo } from './components/FourcastLogo';

export default function App() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['master']));

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#0B1F14]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B1F14]/95 backdrop-blur border-b border-[#1A472A]/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-[#F5F2EB] tracking-tight" style={{ fontSize: '1.75rem', fontWeight: 700 }}>Fourcast Brand Kit</h1>
            <p className="text-[#C4BFB3] text-sm mt-0.5">Complete brand system & production assets</p>
          </div>
          <FourcastLogo iconColor="#F5F2EB" variant="full" height={36} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-6">

        {/* Brand Essence */}
        <section className="bg-[#132E1C] rounded-2xl p-8 border border-[#1A472A]/50">
          <div className="max-w-3xl">
            <h2 className="text-[#C9A227] mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Brand Essence</h2>
            <p className="text-[#F5F2EB] italic mb-6" style={{ fontSize: '1.25rem' }}>"Every group has its legends. Fourcast keeps the score."</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="text-[#C9A227] mb-2" style={{ fontWeight: 600 }}>Product</h3>
                <p className="text-[#C4BFB3]">Golf group coordination app for recurring recreational groups</p>
              </div>
              <div>
                <h3 className="text-[#C9A227] mb-2" style={{ fontWeight: 600 }}>Brand Feeling</h3>
                <p className="text-[#C4BFB3]">Premium, confident, outdoorsy, smart, warm, social, memorable</p>
              </div>
            </div>
          </div>
        </section>

        <BrandSection title="Section 1: Master Logo System" id="master" expanded={expandedSections.has('master')} onToggle={() => toggleSection('master')}>
          <LogoSystemContent />
        </BrandSection>

        <BrandSection title="Section 2: Color Variations" id="color" expanded={expandedSections.has('color')} onToggle={() => toggleSection('color')}>
          <ColorVariationsContent />
        </BrandSection>

        <BrandSection title="Section 3: App Icon System" id="icons" expanded={expandedSections.has('icons')} onToggle={() => toggleSection('icons')}>
          <AppIconContent />
        </BrandSection>

        <BrandSection title="Section 4: Brand Kit Foundation" id="foundation" expanded={expandedSections.has('foundation')} onToggle={() => toggleSection('foundation')}>
          <BrandFoundationContent />
        </BrandSection>

        <BrandSection title="Section 5: Motion System" id="motion" expanded={expandedSections.has('motion')} onToggle={() => toggleSection('motion')}>
          <MotionSystemContent />
        </BrandSection>

        <BrandSection title="Section 6: Marketing Asset Starters" id="marketing" expanded={expandedSections.has('marketing')} onToggle={() => toggleSection('marketing')}>
          <MarketingAssetsContent />
        </BrandSection>

        <BrandSection title="Section 7: Handoff Notes & Export Guide" id="handoff" expanded={expandedSections.has('handoff')} onToggle={() => toggleSection('handoff')}>
          <HandoffNotesContent />
        </BrandSection>

      </main>

      <footer className="border-t border-[#1A472A]/30 bg-[#0B1F14] py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#C4BFB3] text-sm">
          <p>Fourcast Brand Kit — April 2026</p>
          <p className="mt-2 text-xs opacity-60">All logo variations use the exact master SVG paths — no geometry was altered, redesigned, or replaced</p>
        </div>
      </footer>
    </div>
  );
}

/* ── Collapsible Section Wrapper ── */

function BrandSection({ title, id, expanded, onToggle, children }: {
  title: string; id: string; expanded: boolean; onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <section className="bg-[#132E1C] rounded-2xl border border-[#1A472A]/50 overflow-hidden">
      <button onClick={onToggle} className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#1A472A]/20 transition-colors cursor-pointer">
        <h2 className="text-[#C9A227]" style={{ fontSize: '1.25rem', fontWeight: 700 }}>{title}</h2>
        {expanded ? <ChevronUp className="w-5 h-5 text-[#C9A227]" /> : <ChevronDown className="w-5 h-5 text-[#C9A227]" />}
      </button>
      {expanded && <div className="px-8 pb-8">{children}</div>}
    </section>
  );
}

/* ── Section 1: Master Logo System ── */

function LogoSystemContent() {
  return (
    <div className="space-y-12">
      {/* Primary full-color */}
      <div>
        <SectionLabel>1. Primary Logo — Gold on Dark</SectionLabel>
        <div className="bg-[#0B1F14] rounded-xl p-16 flex items-center justify-center border border-[#1A472A]/20">
          <FourcastLogo iconColor="#C89A40" textColor="#F5F2EB" variant="full" height={140} />
        </div>
        <p className="text-[#C4BFB3] text-sm mt-3">Gold icon (#C89A40) with parchment wordmark — primary dark-mode usage</p>
      </div>

      {/* White on dark */}
      <div>
        <SectionLabel>2. White Logo — Reversed</SectionLabel>
        <div className="bg-[#0B1F14] rounded-xl p-16 flex items-center justify-center border border-[#1A472A]/20">
          <FourcastLogo iconColor="#F5F2EB" variant="full" height={140} />
        </div>
        <p className="text-[#C4BFB3] text-sm mt-3">All-white on dark backgrounds — clean, versatile, default reversed usage</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Icon Only */}
        <div>
          <SectionLabel>3. Icon-Only Mark</SectionLabel>
          <div className="bg-[#0B1F14] rounded-xl p-12 flex items-center justify-center aspect-square border border-[#1A472A]/20">
            <FourcastLogo iconColor="#F5F2EB" variant="icon" height={160} />
          </div>
          <p className="text-[#C4BFB3] text-sm mt-3">Standalone icon for app icons, favicons, social avatars</p>
        </div>

        {/* Gold icon only */}
        <div>
          <SectionLabel>4. Gold Icon-Only</SectionLabel>
          <div className="bg-[#0B1F14] rounded-xl p-12 flex items-center justify-center aspect-square border border-[#1A472A]/20">
            <FourcastLogo iconColor="#C89A40" variant="icon" height={160} />
          </div>
          <p className="text-[#C4BFB3] text-sm mt-3">Gold icon for premium placements, trophy moments</p>
        </div>
      </div>

      {/* Wordmark reference */}
      <div>
        <SectionLabel>5. Wordmark Reference</SectionLabel>
        <div className="bg-[#0B1F14] rounded-xl p-12 flex items-center justify-center border border-[#1A472A]/20">
          <div className="text-[#F5F2EB] tracking-[0.15em] text-3xl" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>FOURCAST GOLF</div>
        </div>
        <p className="text-[#C4BFB3] text-sm mt-3">DM Sans 700, All Caps, +0.15em letter-spacing — for simplified contexts</p>
      </div>

      {/* Clear space rules */}
      <div>
        <SectionLabel>Clear Space & Usage Rules</SectionLabel>
        <div className="bg-[#0B1F14] rounded-xl p-8 border border-[#1A472A]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#1A472A] rounded flex items-center justify-center text-[#C9A227]" style={{ fontWeight: 700 }}>X</div>
              <p className="text-[#F5F2EB]" style={{ fontWeight: 600 }}>Clear Space</p>
              <p className="text-[#C4BFB3]">Minimum clear space of X (height of "F" in wordmark) on all sides</p>
            </div>
            <div className="space-y-2">
              <div className="text-[#C9A227] text-2xl" style={{ fontWeight: 700 }}>32px</div>
              <p className="text-[#F5F2EB]" style={{ fontWeight: 600 }}>Minimum Size</p>
              <p className="text-[#C4BFB3]">Full lockup: 32px height min. Icon-only: 16px min.</p>
            </div>
            <div className="space-y-2">
              <div className="text-[#8B2D2D] text-xl" style={{ fontWeight: 700 }}>&#10007;</div>
              <p className="text-[#F5F2EB]" style={{ fontWeight: 600 }}>Don't</p>
              <p className="text-[#C4BFB3]">Don't rotate, distort, outline, add effects, or alter proportions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section 2: Color Variations ── */

function ColorVariationsContent() {
  const variations: { name: string; desc: string; bg: string; iconColor: string; textColor?: string; border?: boolean }[] = [
    { name: '1. Gold on Dark Green', desc: 'Primary brand lockup', bg: '#13401F', iconColor: '#C89A40', textColor: '#F5F2EB' },
    { name: '2. White on Pine', desc: 'Default reversed', bg: '#0B1F14', iconColor: '#F5F2EB', border: true },
    { name: '3. Dark on Parchment', desc: 'Light-mode primary', bg: '#F7F3EA', iconColor: '#13401F' },
    { name: '4. Gold on Parchment', desc: 'Warm premium variant', bg: '#F7F3EA', iconColor: '#C89A40', textColor: '#13401F' },
    { name: '5. White on Forest', desc: 'Section backgrounds', bg: '#132E1C', iconColor: '#F5F2EB' },
    { name: '6. White on Copper', desc: 'Premium accent', bg: '#B17F61', iconColor: '#FFFFFF' },
    { name: '7. Copper on Pine', desc: 'Warm reversed', bg: '#0B1F14', iconColor: '#B17F61', border: true },
    { name: '8. Gold on Charcoal', desc: 'Sophisticated neutral', bg: '#3D3A34', iconColor: '#C9A227', textColor: '#F5F2EB' },
    { name: '9. White on Gradient', desc: 'Hero moments', bg: 'gradient', iconColor: '#F5F2EB' },
  ];

  return (
    <div className="space-y-8">
      <p className="text-[#C4BFB3]">Nine approved color combinations. The exact master SVG paths are used for every variation — only fill color and background change.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {variations.map((v) => (
          <div key={v.name} className="space-y-3">
            <div
              className={`rounded-xl p-8 flex items-center justify-center aspect-[4/3] ${v.border ? 'border border-[#1A472A]/40' : ''}`}
              style={v.bg === 'gradient'
                ? { background: 'linear-gradient(135deg, #132E1C 0%, #1A472A 50%, #245634 100%)' }
                : { backgroundColor: v.bg }
              }
            >
              <FourcastLogo iconColor={v.iconColor} textColor={v.textColor} variant="full" height={72} />
            </div>
            <div>
              <p className="text-[#F5F2EB] text-sm" style={{ fontWeight: 600 }}>{v.name}</p>
              <p className="text-[#C4BFB3] text-xs">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Section 3: App Icon System ── */

function AppIconContent() {
  return (
    <div className="space-y-10">
      <p className="text-[#C4BFB3]">Production-ready app icon concepts using the exact Fourcast icon mark. All icons render the real SVG paths at appropriate sizes.</p>

      <div>
        <SectionLabel>iOS App Icon Concepts</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Parchment', bg: '#F7F3EA', color: '#13401F' },
            { name: 'Deep Pine', bg: '#0B1F14', color: '#F5F2EB' },
            { name: 'Forest', bg: '#132E1C', color: '#C89A40' },
            { name: 'Copper', bg: '#B17F61', color: '#FFFFFF' },
          ].map((icon) => (
            <div key={icon.name} className="space-y-3">
              <div className="rounded-[22%] flex items-center justify-center aspect-square shadow-lg overflow-hidden" style={{ backgroundColor: icon.bg }}>
                <FourcastLogo iconColor={icon.color} variant="icon" height="60%" className="w-[60%] h-[60%]" />
              </div>
              <p className="text-[#F5F2EB] text-sm text-center" style={{ fontWeight: 600 }}>{icon.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Size & Platform Variants</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-end">
          {/* Large preview */}
          <div className="space-y-2 text-center">
            <div className="w-32 h-32 mx-auto rounded-[22%] bg-[#0B1F14] flex items-center justify-center shadow-lg border border-[#1A472A]/30">
              <FourcastLogo iconColor="#C89A40" variant="icon" height={70} />
            </div>
            <p className="text-[#F5F2EB] text-xs" style={{ fontWeight: 600 }}>1024px (App Store)</p>
          </div>
          {/* Medium */}
          <div className="space-y-2 text-center">
            <div className="w-20 h-20 mx-auto rounded-[22%] bg-[#0B1F14] flex items-center justify-center shadow-md border border-[#1A472A]/30">
              <FourcastLogo iconColor="#C89A40" variant="icon" height={44} />
            </div>
            <p className="text-[#F5F2EB] text-xs" style={{ fontWeight: 600 }}>180px (Home Screen)</p>
          </div>
          {/* Small */}
          <div className="space-y-2 text-center">
            <div className="w-12 h-12 mx-auto rounded-[22%] bg-[#0B1F14] flex items-center justify-center shadow-sm border border-[#1A472A]/30">
              <FourcastLogo iconColor="#C89A40" variant="icon" height={26} />
            </div>
            <p className="text-[#F5F2EB] text-xs" style={{ fontWeight: 600 }}>87px (Spotlight)</p>
          </div>
          {/* Tiny */}
          <div className="space-y-2 text-center">
            <div className="w-8 h-8 mx-auto rounded-[22%] bg-[#0B1F14] flex items-center justify-center border border-[#1A472A]/30">
              <FourcastLogo iconColor="#C89A40" variant="icon" height={16} />
            </div>
            <p className="text-[#F5F2EB] text-xs" style={{ fontWeight: 600 }}>29px (Settings)</p>
          </div>
        </div>
      </div>

      <div>
        <SectionLabel>Android & Platform Icons</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-[#0B1F14] flex items-center justify-center shadow-lg">
              <FourcastLogo iconColor="#F5F2EB" variant="icon" height={56} />
            </div>
            <p className="text-[#F5F2EB] text-sm" style={{ fontWeight: 600 }}>Android Adaptive</p>
            <p className="text-[#C4BFB3] text-xs">Circular safe zone</p>
          </div>
          <div className="space-y-3 text-center">
            <div className="w-28 h-28 mx-auto rounded-xl bg-[#C4BFB3] flex items-center justify-center shadow-lg">
              <FourcastLogo iconColor="#13401F" variant="icon" height={56} />
            </div>
            <p className="text-[#F5F2EB] text-sm" style={{ fontWeight: 600 }}>Notification</p>
            <p className="text-[#C4BFB3] text-xs">Monochrome, high contrast</p>
          </div>
          <div className="space-y-3 text-center">
            <div className="w-28 h-28 mx-auto rounded-xl bg-[#13401F] flex items-center justify-center shadow-lg">
              <FourcastLogo iconColor="#F7F3EA" variant="icon" height={56} />
            </div>
            <p className="text-[#F5F2EB] text-sm" style={{ fontWeight: 600 }}>Favicon / PWA</p>
            <p className="text-[#C4BFB3] text-xs">16–192px range</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section 4: Brand Foundation ── */

function BrandFoundationContent() {
  const colors = [
    { name: 'Pine', hex: '#0B1F14', usage: 'Darkest BG', light: true },
    { name: 'Forest', hex: '#132E1C', usage: 'Card BG', light: true },
    { name: 'Fairway', hex: '#1A472A', usage: 'Primary Green', light: true },
    { name: 'Rough', hex: '#245634', usage: 'Accent Green', light: true },
    { name: 'Trophy', hex: '#C9A227', usage: 'Gold Accent', light: false },
    { name: 'Copper', hex: '#B17F61', usage: 'Premium Accent', light: false },
    { name: 'Parchment', hex: '#F5F2EB', usage: 'Light BG', light: false },
    { name: 'Linen', hex: '#EAE6DD', usage: 'Subtle Light', light: false },
    { name: 'Stone', hex: '#C4BFB3', usage: 'Muted Text', light: false },
    { name: 'Charcoal', hex: '#3D3A34', usage: 'Dark Text', light: true },
    { name: 'Birdie', hex: '#1B7A3D', usage: 'Success', light: true },
    { name: 'Bogey', hex: '#B8860B', usage: 'Warning', light: false },
  ];

  return (
    <div className="space-y-10">
      <div>
        <SectionLabel>Core Color System — 12 Brand Colors</SectionLabel>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {colors.map((c) => (
            <div key={c.name} className="space-y-2">
              <div className="aspect-square rounded-xl shadow-md flex flex-col items-start justify-end p-3" style={{ backgroundColor: c.hex }}>
                <span className={`text-[10px] font-mono ${c.light ? 'text-white/60' : 'text-black/40'}`}>{c.hex}</span>
              </div>
              <p className="text-[#F5F2EB] text-xs" style={{ fontWeight: 600 }}>{c.name}</p>
              <p className="text-[#C4BFB3] text-[10px]">{c.usage}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Typography — DM Sans</SectionLabel>
        <div className="bg-[#0B1F14] rounded-xl p-8 space-y-6 border border-[#1A472A]/20">
          <div>
            <p className="text-[#C9A227] text-xs mb-3 tracking-wider uppercase">Brand Wordmark</p>
            <div className="text-[#F5F2EB] tracking-[0.15em] text-4xl" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>FOURCAST GOLF</div>
            <p className="text-[#C4BFB3] text-xs mt-2">DM Sans 700 | All Caps | +0.15em letter-spacing</p>
          </div>
          <div className="border-t border-[#1A472A]/30 pt-6 space-y-4">
            {[
              { label: 'Display', size: '2rem', weight: 700 },
              { label: 'Heading', size: '1.5rem', weight: 700 },
              { label: 'Subheading', size: '1.125rem', weight: 500 },
              { label: 'Body', size: '1rem', weight: 400 },
              { label: 'Caption', size: '0.875rem', weight: 400 },
              { label: 'Overline', size: '0.75rem', weight: 600 },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-4">
                <span className="text-[#C4BFB3] text-[10px] w-20 shrink-0">{t.size} / {t.weight}</span>
                <span className="text-[#F5F2EB]" style={{ fontSize: t.size, fontWeight: t.weight, fontFamily: "'DM Sans', sans-serif" }}>{t.label} Text Style</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <SectionLabel>UI Foundation</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0B1F14] rounded-xl p-6 space-y-4 border border-[#1A472A]/20">
            <h4 className="text-[#C9A227] text-sm" style={{ fontWeight: 600 }}>Border Radius</h4>
            <div className="space-y-3 text-sm text-[#C4BFB3]">
              {[
                { r: 'rounded-none', label: '0px — Sharp elements' },
                { r: 'rounded-md', label: '6px — Buttons, chips' },
                { r: 'rounded-lg', label: '8px — Cards' },
                { r: 'rounded-xl', label: '12px — Sections' },
                { r: 'rounded-2xl', label: '16px — Hero, modals' },
              ].map((item) => (
                <div key={item.r} className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-[#1A472A] ${item.r} shrink-0`}></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0B1F14] rounded-xl p-6 space-y-4 border border-[#1A472A]/20">
            <h4 className="text-[#C9A227] text-sm" style={{ fontWeight: 600 }}>Status Colors</h4>
            <div className="space-y-3">
              {[
                { color: '#1B7A3D', name: 'Birdie', usage: 'Success / Under Par' },
                { color: '#B8860B', name: 'Bogey', usage: 'Warning / Over Par' },
                { color: '#8B2D2D', name: 'Double+', usage: 'Error / Critical' },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg shrink-0" style={{ backgroundColor: s.color }}></div>
                  <div>
                    <p className="text-[#F5F2EB] text-sm" style={{ fontWeight: 600 }}>{s.name}</p>
                    <p className="text-[#C4BFB3] text-xs">{s.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section 5: Motion System ── */

function MotionSystemContent() {
  return (
    <div className="space-y-10">
      <div>
        <SectionLabel>A. Loading Animation</SectionLabel>
        <div className="bg-[#0B1F14] rounded-xl p-16 border border-[#1A472A]/20">
          <div className="max-w-xl mx-auto space-y-8">
            <div className="flex items-center justify-center">
              <div className="animate-pulse">
                <FourcastLogo iconColor="#F5F2EB" variant="icon" height={80} />
              </div>
            </div>
            <SpecList items={[
              ['Duration', '1.5s, continuous loop'],
              ['Easing', 'ease-in-out'],
              ['Motion', 'Subtle opacity pulse (40% → 100% → 40%)'],
              ['Logo', 'Preserved exactly — no scale, rotation, or morph'],
              ['Usage', 'App loading, data fetching, processing states'],
            ]} />
          </div>
        </div>
      </div>

      <div>
        <SectionLabel>B. Intro / Splash Animation</SectionLabel>
        <div className="bg-gradient-to-br from-[#0B1F14] to-[#132E1C] rounded-xl p-16 border border-[#1A472A]/20">
          <div className="max-w-xl mx-auto space-y-8">
            <div className="flex items-center justify-center">
              <div className="animate-[fadeIn_2.5s_ease-in-out_infinite]">
                <FourcastLogo iconColor="#C89A40" textColor="#F5F2EB" variant="full" height={100} />
              </div>
            </div>
            <SpecList items={[
              ['Duration', '2.5s total'],
              ['Sequence', 'Fade in (0.5s) → Hold (1.5s) → Fade out (0.5s)'],
              ['Easing', 'ease-out entrance, ease-in exit'],
              ['Logo', 'Exact master geometry, no changes'],
              ['Background', 'Pine → Forest gradient'],
              ['Usage', 'App splash, marketing video, website hero'],
            ]} />
          </div>
        </div>
      </div>

      <div>
        <SectionLabel>Motion Principles</SectionLabel>
        <div className="bg-[#0B1F14] rounded-xl p-6 border border-[#1A472A]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {[
              { title: 'Premium & Restrained', desc: 'No gimmicks. Motion should feel confident and purposeful.' },
              { title: 'Logo Preserved', desc: 'All animations maintain exact geometry. Motion reveals — never redesigns.' },
              { title: 'Scorekeeping Rhythm', desc: 'Evoke anticipation, precision, and the pace of tracking legends.' },
            ].map((p) => (
              <div key={p.title}>
                <h4 className="text-[#C9A227] mb-2" style={{ fontWeight: 600 }}>{p.title}</h4>
                <p className="text-[#C4BFB3]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section 6: Marketing Assets ── */

function MarketingAssetsContent() {
  return (
    <div className="space-y-10">
      <div>
        <SectionLabel>App Store Cover Template</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#132E1C] to-[#1A472A] rounded-xl p-8 aspect-[9/19.5] flex flex-col items-center justify-center space-y-6">
            <FourcastLogo iconColor="#F5F2EB" variant="full" height={80} />
            <div className="text-center space-y-2">
              <p className="text-[#F5F2EB]" style={{ fontSize: '1.125rem', fontWeight: 700 }}>Every group has its legends</p>
              <p className="text-[#C4BFB3] text-sm">Fourcast keeps the score</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#F5F2EB]" style={{ fontWeight: 600 }}>Specs</h4>
            <ul className="text-[#C4BFB3] text-sm space-y-2">
              <li>&#8226; Premium gradient backgrounds (forest → fairway)</li>
              <li>&#8226; Centered master logo at 1/3 from top</li>
              <li>&#8226; 80px safe margins all sides</li>
              <li>&#8226; DM Sans for all copy</li>
              <li>&#8226; Parchment text on dark backgrounds</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <SectionLabel>Splash Screen</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0B1F14] rounded-xl flex items-center justify-center aspect-[9/16]">
            <FourcastLogo iconColor="#F5F2EB" variant="full" height={80} />
          </div>
          <SpecList items={[
            ['Background', 'Pine (#0B1F14) solid'],
            ['Logo', 'White full lockup, centered'],
            ['Size', '~20% of screen width'],
            ['Animation', 'Optional fade-in (see Motion System)'],
            ['Duration', '1.5–2.5s before transition'],
          ]} />
        </div>
      </div>

      <div>
        <SectionLabel>Social & Email</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-[#C4BFB3] text-xs mb-3">Launch Tile (1080 &times; 1080)</p>
            <div className="bg-gradient-to-br from-[#13401F] to-[#1A472A] rounded-xl p-12 aspect-square flex flex-col items-center justify-center space-y-6">
              <FourcastLogo iconColor="#F5F2EB" variant="full" height={80} />
              <p className="text-[#C9A227] text-sm tracking-[0.2em]" style={{ fontWeight: 700 }}>COMING SOON</p>
            </div>
          </div>
          <div>
            <p className="text-[#C4BFB3] text-xs mb-3">Email Header (600 &times; 200)</p>
            <div className="bg-gradient-to-r from-[#132E1C] to-[#1A472A] rounded-xl p-8 flex items-center justify-between">
              <FourcastLogo iconColor="#F5F2EB" variant="full" height={32} />
              <p className="text-[#C4BFB3] text-xs">Golf Group Coordination</p>
            </div>

            <p className="text-[#C4BFB3] text-xs mb-3 mt-6">Score Sharing Card</p>
            <div className="bg-[#F7F3EA] rounded-xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <FourcastLogo iconColor="#C89A40" textColor="#13401F" variant="full" height={20} />
                <span className="text-[#C4BFB3] text-xs">Apr 3, 2026</span>
              </div>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <p className="text-[#13401F] text-sm" style={{ fontWeight: 700 }}>Weekend Warriors</p>
                {[
                  { name: 'John Smith', score: '-2', color: '#1B7A3D' },
                  { name: 'Sarah Jones', score: '-1', color: '#1B7A3D' },
                  { name: 'Mike Davis', score: 'E', color: '#3D3A34' },
                  { name: 'Tom Wilson', score: '+3', color: '#B8860B' },
                ].map((p) => (
                  <div key={p.name} className="flex justify-between text-xs">
                    <span className="text-[#3D3A34]">{p.name}</span>
                    <span style={{ color: p.color, fontWeight: 700 }}>{p.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section 7: Handoff Notes ── */

function HandoffNotesContent() {
  return (
    <div className="space-y-8">
      <div className="bg-[#0B1F14] rounded-xl p-6 border border-[#C9A227]/20">
        <h3 className="text-[#C9A227] mb-4" style={{ fontSize: '1rem', fontWeight: 600 }}>Preserved Exactly from the Master Logo</h3>
        <ul className="text-[#C4BFB3] space-y-1.5 text-sm">
          {[
            'Used the attached Fourcast SVG paths directly — not an invented replacement',
            'All SVG path geometry preserved verbatim (golfer silhouette, trajectory dots, sweeping arc, diagonal slash)',
            'Wordmark "FOURCAST" letterforms unchanged',
            'No redesign, reinterpretation, simplification, or "inspired by" alternatives',
            'All 9 variations are fill-color/background applications of the same paths',
            'App icons use the real icon mark at multiple scales',
            'Motion concepts use fade/pulse only — no geometry morph',
            'No fake monograms, pins, flags, or proxy symbols were introduced',
          ].map((item, i) => (
            <li key={i}>&#10003; {item}</li>
          ))}
        </ul>
      </div>

      <div>
        <SectionLabel>File Organization</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Logo Files', items: ['White_Full.svg — White lockup', 'Gold_and_White_Full.svg — Gold icon + dark text', 'Export @1x @2x @3x PNG from SVG', 'Preserve viewBox aspect ratio'] },
            { title: 'App Icons', items: ['ios-1024.png (crop to icon mark)', 'android-adaptive.png', 'favicon-16/32/192.png', 'apple-touch-icon-180.png'] },
            { title: 'Motion', items: ['loading-animation.json (Lottie)', 'splash-animation.json (Lottie)', 'Timing specs in this document'] },
            { title: 'Tokens', items: ['--fc-pine: #0B1F14', '--fc-forest: #132E1C', '--fc-fairway: #1A472A', '--fc-trophy: #C9A227', '--fc-copper: #B17F61', '--fc-parchment: #F5F2EB'] },
          ].map((group) => (
            <div key={group.title} className="bg-[#0B1F14] rounded-xl p-5 border border-[#1A472A]/20">
              <h4 className="text-[#C9A227] text-sm mb-3" style={{ fontWeight: 600 }}>{group.title}</h4>
              <ul className="text-[#C4BFB3] text-xs space-y-1">
                {group.items.map((item, i) => <li key={i}>&#8226; {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0B1F14] rounded-xl p-6 border border-[#1A472A]/20 space-y-3">
        <h3 className="text-[#C9A227] text-sm" style={{ fontWeight: 600 }}>Developer Notes</h3>
        <div className="text-sm text-[#C4BFB3] space-y-2">
          <p><span className="text-[#F5F2EB]" style={{ fontWeight: 600 }}>Logo:</span> Render via inline SVG (FourcastLogo component) or {`<img>`} with cleaned SVGs. Never recreate programmatically.</p>
          <p><span className="text-[#F5F2EB]" style={{ fontWeight: 600 }}>Colors:</span> Implement as CSS custom properties. Pine for backgrounds, Fairway for actions, Trophy for accents.</p>
          <p><span className="text-[#F5F2EB]" style={{ fontWeight: 600 }}>Type:</span> DM Sans from Google Fonts (400, 500, 700). Wordmark: 700 / all caps / +0.15em.</p>
          <p><span className="text-[#F5F2EB]" style={{ fontWeight: 600 }}>Motion:</span> Loading = opacity pulse. Splash = fade in/hold/out. Both preserve exact SVG geometry.</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#1A472A] to-[#132E1C] rounded-xl p-10 text-center space-y-4">
        <FourcastLogo iconColor="#C89A40" textColor="#F5F2EB" variant="full" height={60} className="mx-auto" />
        <p className="text-[#C4BFB3] text-sm">All assets use the exact master logo paths</p>
        <p className="text-[#C9A227] text-sm italic">"Every group has its legends. Fourcast keeps the score."</p>
      </div>
    </div>
  );
}

/* ── Shared UI helpers ── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[#F5F2EB] mb-6" style={{ fontSize: '1.125rem', fontWeight: 600 }}>{children}</h3>;
}

function SpecList({ items }: { items: [string, string][] }) {
  return (
    <div className="space-y-2 text-sm">
      {items.map(([label, value]) => (
        <div key={label} className="flex gap-2">
          <span className="text-[#F5F2EB] shrink-0" style={{ fontWeight: 600 }}>{label}:</span>
          <span className="text-[#C4BFB3]">{value}</span>
        </div>
      ))}
    </div>
  );
}
