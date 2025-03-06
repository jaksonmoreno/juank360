import React from 'react';
import { Palette, Pencil, ShoppingBag, Star, Send, Instagram, Facebook, Youtube, Sparkles, Gamepad2, Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-mint">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-oxford via-raspberry to-seagreen overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-oxford/80 via-raspberry/50 to-seagreen/30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <img 
            src="https://i.imgur.com/YourLogoHere.png" 
            alt="JuanK360 Logo" 
            className="w-48 h-48 mx-auto mb-8 animate-bounce"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-mint mb-8 animate-fade-in">
            ¡Diseños que cuentan historias!
          </h1>
          <p className="text-xl md:text-2xl text-mint/90 mb-12 max-w-2xl mx-auto">
            ¡Hola! Soy Juan, tengo 12 años y me encanta crear diseños increíbles 🎨
          </p>
          <button className="bg-apple hover:bg-apple-600 text-mint font-bold py-4 px-8 rounded-full transform transition hover:scale-110 hover:rotate-3 flex items-center gap-2 mx-auto">
            <Sparkles className="w-6 h-6" />
            ¡Explora mis diseños!
          </button>
        </div>
      </section>

      {/* Sobre Mí */}
      <section className="py-20 bg-mint">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-oxford mb-6 flex items-center gap-3">
                <Gamepad2 className="w-8 h-8 text-raspberry" />
                ¡Hola! Soy JuanK
              </h2>
              <p className="text-lg text-oxford/80 mb-6">
                ¡Me encanta crear diseños divertidos y llenos de color! 
                Empecé a diseñar porque quería hacer mis propias camisetas de videojuegos, 
                y ahora ayudo a otros chicos a tener diseños únicos y geniales. 🎮✨
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 bg-oxford text-mint px-4 py-2 rounded-full">
                  <Palette className="w-5 h-5" />
                  <span>¡Diseños Únicos!</span>
                </div>
                <div className="flex items-center gap-2 bg-raspberry text-mint px-4 py-2 rounded-full">
                  <Pencil className="w-5 h-5" />
                  <span>¡Super Creativos!</span>
                </div>
                <div className="flex items-center gap-2 bg-seagreen text-mint px-4 py-2 rounded-full">
                  <Star className="w-5 h-5" />
                  <span>¡100% Original!</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80" 
                  alt="Espacio creativo de Juan"
                  className="rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition duration-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-apple text-mint p-4 rounded-full shadow-lg animate-bounce">
                  <Rocket className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-20 bg-oxford">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-mint mb-12">
            ¡Mis Creaciones! 🎨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "¡Camisetas Geniales!",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
                description: "Diseños increíbles para que te veas súper cool 😎"
              },
              {
                title: "¡Arte Digital!",
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
                description: "Ilustraciones únicas para tus proyectos 🎮"
              },
              {
                title: "¡Accesorios Cool!",
                image: "https://images.unsplash.com/photo-1484501893812-534ceb4b9d65?auto=format&fit=crop&q=80",
                description: "Complementos que te harán destacar ⭐"
              }
            ].map((product, index) => (
              <div key={index} className="bg-mint rounded-2xl shadow-xl overflow-hidden transform transition hover:scale-105 hover:-rotate-2">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-oxford mb-2">{product.title}</h3>
                  <p className="text-oxford/80">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-mint">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-oxford mb-12">
            ¡Lo que dicen mis amigos! 🤩
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pedro",
                text: "¡Mi camiseta quedó increíble! Todos en la escuela quieren una igual 🔥",
                role: "12 años"
              },
              {
                name: "Laura",
                text: "Juan hizo un diseño súper cool para mi canal de YouTube 🎮",
                role: "13 años"
              },
              {
                name: "Miguel",
                text: "¡Las calcomanías que diseñó para mi patineta son lo máximo! 🛹",
                role: "11 años"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-raspberry flex items-center justify-center text-mint font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-oxford">{testimonial.name}</h4>
                    <p className="text-oxford/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-oxford/80">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-raspberry">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-mint mb-8">
            ¿Listo para tener un diseño increíble? 🚀
          </h2>
          <form className="max-w-lg mx-auto">
            <div className="flex gap-4 mb-6">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-3 rounded-full bg-mint/90 text-oxford placeholder-oxford/50"
              />
              <button className="bg-apple hover:bg-apple-600 text-mint font-bold py-3 px-8 rounded-full transform transition hover:scale-110">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-oxford hover:bg-oxford-600 text-mint font-bold py-4 px-8 rounded-full transform transition hover:scale-110 hover:rotate-3"
          >
            <ShoppingBag className="mr-2 w-5 h-5" />
            ¡Pide tu diseño ahora! 🎨
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-oxford text-mint py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">JuanK360</h3>
              <p className="text-mint/70">¡Diseños que cuentan historias! 🎨</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-raspberry transition transform hover:scale-125">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-raspberry transition transform hover:scale-125">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-raspberry transition transform hover:scale-125">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-mint/20 mt-8 pt-8 text-center text-mint/70">
            <p>© 2024 JuanK360 - ¡Creando diseños increíbles! 🎮✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;