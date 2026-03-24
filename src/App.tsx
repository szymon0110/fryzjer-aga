import { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Scissors,
  ChevronDown,
  Sparkles,
  Award,
  Heart,
  Menu,
  X,
} from 'lucide-react';

/* ─────────────── DATA ─────────────── */

const PHONE = '+48535354725';
const PHONE_DISPLAY = '+48 535 354 725';
const ADDRESS = 'Przyjaciół Żołnierza 51U/2, 71-660 Szczecin';
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Fryzjer+AGA+Szczecin+Przyjaciół+Żołnierza+51U/2';

const HOURS = [
  { day: 'Poniedziałek', time: '10:00 – 18:00' },
  { day: 'Wtorek', time: '10:00 – 18:00' },
  { day: 'Środa', time: '10:00 – 18:00' },
  { day: 'Czwartek', time: '10:00 – 18:00' },
  { day: 'Piątek', time: '10:00 – 18:00' },
  { day: 'Sobota', time: '09:00 – 13:00' },
  { day: 'Niedziela', time: 'Nieczynne', closed: true },
];

const SERVICES = [
  { icon: Scissors, title: 'Strzyżenie damskie', desc: 'Modne cięcia, stylizacje i metamorfozy' },
  { icon: Scissors, title: 'Strzyżenie męskie', desc: 'Klasyczne i nowoczesne fryzury' },
  { icon: Sparkles, title: 'Koloryzacja', desc: 'Balayage, ombre, refleksy i pełna koloryzacja' },
  { icon: Award, title: 'Stylizacja', desc: 'Upięcia okolicznościowe i codzienne' },
];

/* ─────────────── COMPONENTS ─────────────── */

function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <Scissors
              className={`w-6 h-6 transition-colors duration-300 ${scrolled ? 'text-salon-red' : 'text-white'
                } group-hover:rotate-45 transition-transform`}
            />
            <span
              className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'
                }`}
            >
              Fryzjer <span className="text-salon-red">AGA</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['O nas', 'Usługi', 'Godziny', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className={`text-sm font-medium transition-colors duration-200 hover:text-salon-red ${scrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
              >
                {item}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-salon-red hover:bg-salon-red-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-salon-red/25"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900' : 'text-white'
              }`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } bg-white/95 backdrop-blur-md`}
      >
        <div className="px-4 py-4 space-y-3 border-t border-slate-100">
          {['O nas', 'Usługi', 'Godziny', 'Kontakt'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-700 font-medium hover:text-salon-red transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-salon-red text-white px-5 py-3 rounded-full font-semibold"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── HERO ── */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/outsidePhoto.jpg"
          alt="Salon fryzjerski Fryzjer AGA – widok z zewnątrz, szyld z czerwonym napisem na ulicy Przyjaciół Żołnierza w Szczecinie"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-8">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>4.8 gwiazdek na Google Maps</span>
        </div>

        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Fryzjer <span className="text-salon-red">AGA</span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/80 mt-2 block">
            Twój Styl w Szczecinie
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 mt-6 text-lg sm:text-xl text-white/75 max-w-xl mx-auto leading-relaxed">
          Profesjonalne usługi fryzjerskie damsko-męskie w nowoczesnym wydaniu.
        </p>

        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="group inline-flex items-center gap-3 bg-salon-red hover:bg-salon-red-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-salon-red/30"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            Zadzwoń: {PHONE_DISPLAY}
          </a>
          <a
            href="#o-nas"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-6 py-4 rounded-full text-lg font-medium transition-all duration-300"
          >
            Poznaj nas
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}

/* ── ABOUT ── */
function AboutSection() {
  return (
    <section id="o-nas" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-salon-red font-semibold text-sm tracking-widest uppercase mb-3">
            O nas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Nowoczesny salon z&nbsp;duszą
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            W sercu Szczecina tworzymy przestrzeń, w której profesjonalizm spotyka się z ciepłą, przyjazną atmosferą.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Inside photo – large */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/insidePhoto.jpg"
              alt="Wnętrze salonu Fryzjer AGA – profesjonalne stanowiska fryzjerskie z czarnymi fotelami i białymi ścianami"
              className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-medium text-sm">
                Profesjonalne stanowiska fryzjerskie
              </p>
            </div>
          </div>

          {/* Wall photo */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/wallPhoto.jpg"
              alt="Artystyczne portrety na ścianie salonu Fryzjer AGA – elegancka dekoracja podkreślająca klimat miejsca"
              className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-medium text-sm">
                Artystyczna atmosfera w eleganckim wnętrzu
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: Scissors, title: 'Doświadczenie', text: 'Wieloletnia praktyka i ciągłe doskonalenie umiejętności' },
            { icon: Heart, title: 'Pasja', text: 'Każda fryzura tworzona jest z miłością do detalu' },
            { icon: Sparkles, title: 'Jakość', text: 'Używamy wyłącznie profesjonalnych produktów' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="group">
              <div className="w-14 h-14 mx-auto mb-4 bg-salon-red/10 rounded-2xl flex items-center justify-center group-hover:bg-salon-red group-hover:scale-110 transition-all duration-300">
                <Icon className="w-6 h-6 text-salon-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ── */
function ServicesSection() {
  return (
    <section id="usługi" className="py-20 sm:py-28 bg-salon-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-salon-red font-semibold text-sm tracking-widest uppercase mb-3">
            Usługi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Pełen zakres usług fryzjerskich
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Salon damsko-męski — obsługujemy każdego klienta z najwyższą starannością.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:border-salon-red/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mb-5 bg-salon-red/10 rounded-xl flex items-center justify-center group-hover:bg-salon-red transition-colors duration-300">
                <Icon className="w-5 h-5 text-salon-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRODUCTS / YODEYMA ── */
function ProductsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img
              src="/cornerPhoto.jpg"
              alt="Ekspozycja perfum Yodeyma Paris w salonie Fryzjer AGA – ekskluzywne zapachy dostępne na miejscu"
              className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-salon-red font-semibold text-sm tracking-widest uppercase mb-3">
              Premium Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Perfumy Yodeyma Paris
            </h2>
            <p className="mt-4 text-slate-500 text-lg leading-relaxed">
              Oprócz usług fryzjerskich oferujemy ekskluzywną kolekcję perfum
              <strong className="text-slate-700"> Yodeyma Paris</strong>. Zapraszamy
              do zapoznania się z naszą ofertą zapachów — idealny prezent dla
              siebie lub bliskiej osoby.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-salon-red/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-salon-red" />
              </div>
              <span className="text-slate-700 font-medium">
                Dostępne w salonie – zapytaj o aktualną kolekcję
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIAL / SOCIAL PROOF ── */
function TestimonialSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-salon-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-salon-red/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-7 h-7 ${i < 5 ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
                }`}
            />
          ))}
        </div>

        <div className="text-5xl sm:text-6xl font-extrabold mb-2">
          4.8
        </div>
        <p className="text-white/60 text-lg mb-10">
          Średnia ocena na Google Maps
        </p>

        {/* Quote */}
        <blockquote className="text-xl sm:text-2xl font-light text-white/80 leading-relaxed italic">
          „Najlepszy salon fryzjerski w okolicy! Profesjonalna obsługa,
          świetna atmosfera i&nbsp;zawsze wychodzę zadowolona z&nbsp;nowej fryzury."
        </blockquote>
        <p className="mt-4 text-white/40 text-sm">
          — Opinia klientki z Google Maps
        </p>

        {/* CTA */}
        <a
          href={`tel:${PHONE}`}
          className="mt-10 inline-flex items-center gap-3 bg-salon-red hover:bg-salon-red-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-salon-red/30"
        >
          <Phone className="w-5 h-5" />
          Umów wizytę teraz
        </a>
      </div>
    </section>
  );
}

/* ── INFO GRID (HOURS + ADDRESS) ── */
function InfoSection() {
  return (
    <section id="godziny" className="py-20 sm:py-28 bg-salon-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-salon-red font-semibold text-sm tracking-widest uppercase mb-3">
            Informacje
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Godziny otwarcia &amp; Lokalizacja
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-salon-red/10 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-salon-red" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Godziny otwarcia
              </h3>
            </div>
            <ul className="space-y-3">
              {HOURS.map(({ day, time, closed }) => (
                <li
                  key={day}
                  className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0"
                >
                  <span className={`text-sm font-medium ${closed ? 'text-slate-400' : 'text-slate-700'}`}>
                    {day}
                  </span>
                  <span
                    className={`text-sm font-semibold ${closed ? 'text-salon-red' : 'text-slate-900'
                      }`}
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Address + Map link */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-salon-red/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-salon-red" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Jak do nas trafić
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              {ADDRESS}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-salon-red font-semibold text-sm hover:underline mb-6"
            >
              <MapPin className="w-4 h-4" />
              Otwórz w Google Maps →
            </a>

            {/* Embedded map */}
            <div className="flex-1 min-h-[200px] rounded-xl overflow-hidden border border-slate-200">
              <iframe
                title="Lokalizacja salonu Fryzjer AGA w Szczecinie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.9528216254727!2d14.554782300000001!3d53.453959600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa09607e6a0219%3A0xecc3aedf57002f1d!2sFryzjer%20AGA!5e0!3m2!1sen!2spl!4v1774196649218!5m2!1sen!2spl"
                width="100%"
                height="100%"
                className="min-h-[200px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer id="kontakt" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-salon-red" />
              <span className="font-bold text-xl">
                Fryzjer <span className="text-salon-red">AGA</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Profesjonalny salon fryzjerski damsko-męski w Szczecinie.
              Zapraszamy!
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-salon-red" />
                <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-salon-red mt-0.5" />
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours summary */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4">Godziny</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-salon-red" />
                Pon – Pt: 10:00 – 18:00
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-salon-red" />
                Sob: 09:00 – 13:00
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-salon-red/40" />
                <span className="text-white/30">Nd: Nieczynne</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Fryzjer AGA. Wszelkie prawa zastrzeżone.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-salon-red/20 hover:bg-salon-red text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Zadzwoń teraz
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── APP ─────────────── */

export default function App() {
  return (
    <div className="font-sans antialiased">
      <StickyHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialSection />
      <InfoSection />
      <Footer />
    </div>
  );
}
