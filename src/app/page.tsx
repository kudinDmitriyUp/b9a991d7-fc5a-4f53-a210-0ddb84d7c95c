"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Star, Clock, ChefHat } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Historia", id: "about" },
            { name: "Restaurantes", id: "restaurantes" },
            { name: "Carta", id: "menu" },
            { name: "Blog", id: "blog" }
          ]}
          brandName="TOTTORI"
          button={{
            text: "RESERVAR",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="SUSHI BAR TOTTORI"
          description="Redescubre la cocina japonesa tradicional en Madrid. De la mano de Grupo China Crown, traemos más de 20 años de experiencia desde Tottori, Japón."
          tag="Auténtica Cocina Japonesa"
          imageSrc="https://pixabay.com/get/g7fd93f71268c276793ddd935334c62203642b0435fce60fbbd54b43adb5dada00868144ed0aaaa4e7dc7936e1ea393e6e0317100787479dcbc7d163d3b5d9f7a_1280.jpg"
          imageAlt="Premium sushi selection at Tottori restaurant"
          buttons={[
            { text: "Ver Carta", href: "menu" },
            { text: "Pedir Online", href: "https://delivery.tottori.com" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Nuestra Historia"
          description="Nacimos hace más de 20 años en Tottori, una pequeña ciudad japonesa costera que conserva las costumbres más auténticas. Como ciudad costera, en Tottori podemos presumir de conservar las tradiciones culinarias que ahora llegan a España de la mano de Grupo China Crown."
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardSeven
          title="Nuestros Platos"
          description="Descubre nuestra selección de especialidades japonesas elaboradas con ingredientes premium"
          tag="Carta Exclusiva"
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Tartar de Atún Yu Sen Maguro",
              description: "Exquisito tartar de atún fresco con nuestra preparación tradicional japonesa",
              imageSrc: "https://pixabay.com/get/g99682dae100bb66f0298d87d278ba903d32ffe66c5aa0945825695d89440ed1c22a303ab6c624ae8d4cdefbe6740811acd9b870792833d2f2287a60ee2b98624_1280.jpg"
            },
            {
              id: 2,
              title: "Tataki de Toro con Jalapeño",
              description: "Delicado tataki de toro con jalapeño y ajo crujiente, una fusión perfecta de sabores",
              imageSrc: "https://pixabay.com/get/gc1d8bd725070abfea3eeded42a0df03cd59fcb41e1cc5eee9eaf6084e85f1f2e7a837ad4339a8c7f02ae5533fd7651cce2e50f188cdaabf9960e805b45b7da6e_1280.jpg"
            },
            {
              id: 3,
              title: "Gunkan de Tobikko",
              description: "Tradicional gunkan sushi con huevas de pez volador tobikko de primera calidad",
              imageSrc: "https://pixabay.com/get/gf604c3cdf10f8c21c6bacc3f543adc9b47dee9c017ba679de6b5f348a90b5b90987230d37e38e8c5c2696d3accade56e7b15fdd814315327d2ccc053724f235b_1280.jpg"
            },
            {
              id: 4,
              title: "Nigiri de Toro",
              description: "Premium nigiri de toro, la parte más selecta del atún preparada por nuestros maestros sushimen",
              imageSrc: "https://pixabay.com/get/g74f2ba9f54c2864c0424b517be2098d52df051eb381ab9d5225dc8ca23000500f25b2c9c10dff6415351ae0496e8672f66621260802528fb0b9e0858d109efb5_1280.jpg"
            },
            {
              id: 5,
              title: "Sushi de Huevo de Codorniz con Trufa",
              description: "Creación exclusiva con huevo de codorniz y trufa, fusionando tradición japonesa con lujo europeo",
              imageSrc: "https://pixabay.com/get/gcec5f197b4d0b5865d752dc9c4da4fb9f7f6da9b76284ff380ddbe742ab14a65325dcec9522eae225008adafee3ba97d19ee5fe19cfce38b9162bc1d8e47655a_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="restaurantes" data-section="restaurantes">
        <ProductCardTwo
          title="Nuestros Restaurantes"
          description="Encuentra nuestras ubicaciones exclusivas en Madrid"
          tag="Ubicaciones"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "lafinca",
              brand: "Sushi Bar Tottori",
              name: "La Finca Grand Café",
              price: "Premium",
              rating: 5,
              reviewCount: "250+",
              imageSrc: "https://pixabay.com/get/g5d4770d93af3521eccbb7a7758d846ab3a062b1cbc556922ed93b25f0fd5da592ea22c667b96160add13c038a6a48b7b5fce18f7a87cb396ffe6d25930dcc6a3_1280.jpg",
              imageAlt: "Interior del restaurante Tottori en La Finca"
            },
            {
              id: "centro",
              brand: "Sushi Bar Tottori",
              name: "Madrid Centro",
              price: "Premium",
              rating: 5,
              reviewCount: "180+",
              imageSrc: "https://pixabay.com/get/g5d4770d93af3521eccbb7a7758d846ab3a062b1cbc556922ed93b25f0fd5da592ea22c667b96160add13c038a6a48b7b5fce18f7a87cb396ffe6d25930dcc6a3_1280.jpg",
              imageAlt: "Restaurante Tottori Madrid Centro"
            },
            {
              id: "salamanca",
              brand: "Sushi Bar Tottori",
              name: "Barrio de Salamanca",
              price: "Premium",
              rating: 5,
              reviewCount: "320+",
              imageSrc: "https://pixabay.com/get/g5d4770d93af3521eccbb7a7758d846ab3a062b1cbc556922ed93b25f0fd5da592ea22c667b96160add13c038a6a48b7b5fce18f7a87cb396ffe6d25930dcc6a3_1280.jpg",
              imageAlt: "Restaurante Tottori Salamanca"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Nuestras Experiencias"
          description="Elige la experiencia gastronómica perfecta para ti"
          tag="Menús"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "omakase",
              badge: "Recomendado",
              badgeIcon: Sparkles,
              price: "€85",
              subtitle: "Experiencia Omakase completa",
              features: [
                "12 piezas seleccionadas por el chef",
                "Ingredientes premium importados",
                "Sake premium incluido",
                "Experiencia de 2 horas"
              ]
            },
            {
              id: "premium",
              badge: "Popular",
              badgeIcon: Star,
              price: "€55",
              subtitle: "Selección Premium",
              features: [
                "8 piezas de sushi premium",
                "Miso soup tradicional",
                "Ensalada wakame",
                "Té verde ceremonial"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Nuestros Logros"
          description="Más de dos décadas perfeccionando el arte del sushi"
          tag="Experiencia"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          metrics={[
            {
              id: "years",
              value: "20+",
              title: "años",
              description: "De experiencia en cocina japonesa tradicional",
              icon: Clock
            },
            {
              id: "dishes",
              value: "50+",
              title: "especialidades",
              description: "Platos únicos en nuestra carta exclusiva",
              icon: ChefHat
            },
            {
              id: "reviews",
              value: "4.8",
              title: "estrellas",
              description: "Valoración promedio de nuestros clientes",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Nuestro Equipo"
          description="Maestros en el arte culinario japonés"
          tag="Equipo"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          members={[
            {
              id: "chef",
              name: "Chef Takeshi",
              role: "Maestro Sushiman",
              imageSrc: "https://pixabay.com/get/gd7af09d4c77a5fcf1a3362726544da31bcf975af70c0915571bc461717b0d030202c2bc15d1206a158afb122cffea5f7bca28a08b8f0dbc533373af3c12daa22_1280.jpg",
              imageAlt: "Chef Takeshi, maestro sushiman de Tottori"
            },
            {
              id: "sous-chef",
              name: "Chef Hiroshi",
              role: "Sous Chef",
              imageSrc: "https://pixabay.com/get/gd7af09d4c77a5fcf1a3362726544da31bcf975af70c0915571bc461717b0d030202c2bc15d1206a158afb122cffea5f7bca28a08b8f0dbc533373af3c12daa22_1280.jpg",
              imageAlt: "Chef Hiroshi, sous chef de Tottori"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Lo Que Dicen Nuestros Clientes"
          description="Experiencias auténticas de nuestros comensales"
          tag="Testimonios"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "María González",
              role: "Food Blogger",
              company: "Madrid Gastronomy",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g92b366a519bfebc2e0ee9fbcc4902903f8827d2901825951182797f718bec8c1c9d6d33210f5f7b62a401ad6d7b95d2320f7a3ae61adfc7b99d692314f867d16_1280.jpg",
              imageAlt: "María González"
            },
            {
              id: "2",
              name: "Carlos Ruiz",
              role: "Chef Ejecutivo",
              company: "Restaurante Premium",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g901049a35650a1e834cb911856c201c641a230980b7b58574a2ba454cc4a7f486926166e7022c6fdec89faa64184793dffffa08c2a1c1f5fd0ce98202fb70591_1280.jpg",
              imageAlt: "Carlos Ruiz"
            },
            {
              id: "3",
              name: "Ana Martínez",
              role: "Sommelier",
              company: "Vinos & Co",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gdd96cb72f35b20923e20509902072fbe7dfe0404ab0431ce8a6884a6adc6af2a601c87c5b4c9fa60865f0a693b31c2567ac6970daa2d0efe4c7450f1fa85d2fe_1280.jpg",
              imageAlt: "Ana Martínez"
            },
            {
              id: "4",
              name: "Luis García",
              role: "Crítico Gastronómico",
              company: "El Gourmet",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9f27b037b12b547e3d16f6688b7118060d73f336d7d4e2c2d7dd9b4308278bdf0b4c62788ed8beb1d068896cd2d6521b85d48d31bf874b44b5047f71f55e92bc_1280.jpg",
              imageAlt: "Luis García"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Respaldados Por Los Mejores"
          description="Miembros orgullosos de las mejores organizaciones gastronómicas"
          tag="Partners"
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g5bd92df759294f63105a62cc857f8c17d3577343826e7ce0008ccafc29fdacbcab77041d6cf6c15df20057b1c65bbae82c8f161cce64bc6e0a2caa57649933b9_1280.jpg",
            "https://pixabay.com/get/g18a32a836d24675bfd6f1abcba902ffd491345fd1b17a724e694c450e195bff6857f4e1ff4a3fc6de335ec6735df2c6470f9d94852ab1e7e92f868fb1dcaad1e_1280.jpg",
            "https://pixabay.com/get/g61fee07f3c67896c19bbf497ff10b04145119bacf492b741f4e45895ef38313b3bdcbbc0e638c969f35987895f6bf7a0ef8ac50f7e9902407509000fda032da1_1280.jpg",
            "https://pixabay.com/get/g84477b20ea8e91072dd4f0cac39fc59cdf5d74f00e318f47688065a5abb48f6421401558f2ba48dad393cac2dbd8d11825f26ad5b248d132196a51f943119d0c_1280.jpg",
            "https://pixabay.com/get/ge84785d27ef180244baec3e9145f566b34f6e99c2743207095e25382f4ce186b81ea5c127d76b0ecaec27962c523e6b8397fa169af32e18237ea4d1f05ee5c91_1280.jpg",
            "https://pixabay.com/get/gfc148fe1950dd95f181965a31214eb7c1ae9171a114c1ebea876dab2c08fd6264382b1e90f97eafbfa246eeec4a30a52ffc1fd22cf01c6d02740a6f555d903e6_1280.jpg",
            "https://pixabay.com/get/g8cce15dda89dd5350b475330bb6e1160c50262bb3b9ea8cec1e2070e50e3fb1e00bdb332d30a0fd356a79d17dd5dfe0803ecdd2cd240e99df6b406cdf37ba3c7_1280.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Preguntas Frecuentes"
          description="Todo lo que necesitas saber sobre Sushi Bar Tottori"
          tag="FAQ"
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "¿Necesito hacer reserva?",
              content: "Recomendamos hacer reserva, especialmente para fines de semana y experiencias Omakase. Puedes reservar llamando al 915 48 90 13 o a través de nuestra web."
            },
            {
              id: "2",
              title: "¿Ofrecen opciones vegetarianas?",
              content: "Sí, tenemos una selección de sushi vegetariano y platos veganos elaborados con los mejores ingredientes frescos."
            },
            {
              id: "3",
              title: "¿Dónde están ubicados?",
              content: "Nos encontramos en La Finca Grand Café, Av. Luis García de Cereceda 5, 28223 Pozuelo de Alarcón, Madrid."
            },
            {
              id: "4",
              title: "¿Hacen delivery?",
              content: "Sí, ofrecemos servicio de delivery para que puedas disfrutar de nuestros platos en la comodidad de tu hogar."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservas"
          title="Haz tu Reserva"
          description="Reserva tu mesa y déjate llevar por una experiencia gastronómica única en el corazón de Madrid."
          buttonText="RESERVAR"
          inputPlaceholder="Tu email"
          termsText="Al reservar confirmas que aceptas nuestras condiciones de servicio."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TOTTORI"
          columns={[
            {
              items: [
                { label: "Historia", href: "about" },
                { label: "Restaurantes", href: "restaurantes" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              items: [
                { label: "Alérgenos", href: "alergenos" },
                { label: "Aviso Legal", href: "legal" },
                { label: "Privacidad", href: "privacy" },
                { label: "Cookies", href: "cookies" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}