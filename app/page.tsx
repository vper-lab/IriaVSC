export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-red-800/30 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="/" className="flex items-center gap-3 text-white hover:text-red-300">
            <img src="/Logo-blanco.png" alt="Logo Iria Gastrobar" className="h-10 w-10 rounded-lg border bg-black object-cover" />
            <span className="text-lg font-semibold tracking-wide">Iria Gastrobar</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/Carta.html" className="text-white transition hover:text-red-300">Carta</a>
            <a href="#reservar" className="text-white transition hover:text-red-300">Reservar</a>
            <a href="#ubicacion" className="text-white transition hover:text-red-300">Ubicación</a>
          </nav>
          <button className="rounded-lg border border-red-500 px-3 py-1.5 text-sm text-red-100 hover:bg-red-900/30 md:hidden">Menú</button>
        </div>
      </header>

      <section id="hero" className="relative h-screen min-h-[600px]">
        <div className="absolute inset-0 bg-[url('/Sepia.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-4 text-white sm:px-6">
          <p className="rounded-full border border-red-500 bg-red-900/30 px-4 py-1 text-sm tracking-wide text-red-100">Gastrobar | Minimalismo & Cóctel</p>
          <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">Tradición y Vanguardia en cada bocado.</h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-red-100/90">Cocina de mercado con producto local. La esencia del Gastrobar llevada a tu mesa.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/Carta.html" className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 hover:scale-[1.02]">Ver la Carta Digital</a>
            <a href="https://wa.me/34123456789" target="_blank" rel="noreferrer" className="rounded-full border border-red-500 bg-black/40 px-6 py-3 text-sm font-semibold text-red-100 transition hover:bg-red-900/80">Reservar Mesa</a>
          </div>
        </div>
      </section>

      <section id="por-que-iria" className="bg-black py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-500">¿Por qué Iria?</h2>
              <p className="mt-5 text-2xl font-bold leading-tight">Experiencias memorables en cada plato.</p>
              <p className="mt-4 max-w-2xl text-base text-red-50">
                En el corazón de la gastronomía local, Iria Gastrobar nace de la pasión por el buen comer. No solo servimos platos, creamos experiencias memorables a través de productos frescos y una técnica depurada.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-red-600 shadow-lg">
              <img src="/Sepia.jpg" alt="Pulpo a la brasa" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="carta" className="bg-black py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-red-500">Nuestra Carta</h2>
          <p className="mt-2 text-red-50">Disfruta de nuestros mejores platos.</p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-red-600 bg-neutral-900 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-red-500">Para Empezar</h3>
              <img src="/quesos.jpg" alt="Tabla de quesos" className="mt-4 h-32 w-full rounded-lg object-cover" />
              <ul className="mt-4 space-y-2 text-red-100">
                <li>• Croquetas caseras de jamón ibérico</li>
                <li>• Ensaladilla Iria con ventresca</li>
                <li>• Tabla de quesos de la zona</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-red-600 bg-neutral-900 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-red-500">Nuestros Clásicos</h3>
              <img src="/paella.jpg" alt="Paella" className="mt-4 h-32 w-full rounded-lg object-cover" />
              <ul className="mt-4 space-y-2 text-red-100">
                <li>• Pulpo a la brasa con emulsión de pimentón</li>
                <li>• Entrecot de vaca madurada (30 días)</li>
                <li>• Bacalao confitado sobre cama de pisto</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-red-600 bg-neutral-900 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-red-500">El Toque Dulce</h3>
              <img src="/salmon.jpg" alt="Plato de salmón" className="mt-4 h-32 w-full rounded-lg object-cover" />
              <ul className="mt-4 space-y-2 text-red-100">
                <li>• Tarta de queso fluida (Especialidad)</li>
                <li>• Coulant de chocolate con helado de vainilla</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="bg-black py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold text-red-500">Contacto</h2>
              <p className="mt-3 text-red-50">Siempre encantados de antenderte .</p>

              <div className="mt-6 space-y-5 rounded-2xl border border-red-600 bg-neutral-900 p-6 shadow-lg">
                <div>
                  <h3 className="text-lg font-semibold text-red-400">Horarios</h3>
                  <ul className="mt-2 text-red-100">
                    <li>Lunes a Domingo: 08:00-01:00</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-400">Teléfono</h3>
                  <a href="tel:+34916287109" className="text-red-50 hover:text-red-400 transition">+34 916 287 109</a>
                </div>

                 <div>
                  <h3 className="text-lg font-semibold text-red-400">Instagram</h3>
                  <a href="https://www.instagram.com/iriagastrobar/" className="text-red-50 hover:text-red-300 transition">Iria Gastrobar</a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-400">Correo</h3>
                  <a href="mailto:iriagastro@gmail.com" className="text-red-50 hover:text-red-300 transition">iriagastro@gmail.com</a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-400">Dirección</h3>
                  <p className="text-red-100">Francisco Largo Caballero 20<br />28100 Alcobendas<br />España</p>
                </div>
              </div>
            </div>

            <div className="flex h-80 min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-red-600 shadow-lg">
              <iframe
                title="Mapa Iria Gastrobar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.6!2d-3.6387!3d40.5491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2qFrancisco%20Largo%20Caballero%2020%2C%2028100%20Alcobendas!5e0!3m2!1ses!2ses!4v1699488392369!5m2!1ses!2ses"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <footer id="reservar" className="border-t border-red-800 bg-black py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <p className="text-sm text-red-50">© {new Date().getFullYear()} Iria Gastrobar. Todos los derechos reservados.</p>
          <a href="https://wa.me/34123456789" target="_blank" rel="noreferrer" className="rounded-full border border-red-500 bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500">Reservar por WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
