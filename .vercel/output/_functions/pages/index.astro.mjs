/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, d as renderScript, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CXuzI0uk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D1hiCsUu.mjs';
import 'clsx';
import { r as reviews } from '../chunks/reviews_D-OuHkwV.mjs';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_N9Stmppj.mjs';
export { renderers } from '../renderers.mjs';

const heroVideo = "/_astro/dental-hero.CoeBZZHm.mp4";

const $$ReviewsCarousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-[90vw] md:max-w-3xl mx-auto" data-astro-cid-rmfhop62> <div class="swiper reviews-swiper" data-astro-cid-rmfhop62> <div class="swiper-wrapper" data-astro-cid-rmfhop62> ${reviews.reviews.map((review) => renderTemplate`<div class="swiper-slide" data-astro-cid-rmfhop62> <div class="rounded-lg p-4 md:p-6 text-center text-primary max-w-[90vw] md:max-w-full mx-auto" data-astro-cid-rmfhop62> <div class="flex gap-1 justify-center" data-astro-cid-rmfhop62> ${Array(5).fill(null).map((_, index) => renderTemplate`<svg${addAttribute(`w-4 h-4 md:w-5 md:h-5 ${index < review.rating ? "text-primary" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20" data-astro-cid-rmfhop62> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-rmfhop62></path> </svg>`)} </div> <p class="mt-4 text-sm md:text-lg italic leading-relaxed" data-astro-cid-rmfhop62>${review.content}</p> <p class="mt-4 font-semibold font-bold" data-astro-cid-rmfhop62>${review.name}</p> </div> </div>`)} </div> <div class="swiper-pagination" data-astro-cid-rmfhop62></div> </div> </div> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">  ${renderScript($$result, "/Users/rohitverma/Personal/Projects/dental133/src/components/ReviewsCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/components/ReviewsCarousel.astro", void 0);

const $$BookAppointment = createComponent(($$result, $$props, $$slots) => {
  const phoneNumber = "+919891234133";
  const whatsappMessage = encodeURIComponent("Hello Dr. Sakshi, I would like to book an appointment.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4"> <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Book Appointment</h2> <div class="flex flex-col md:flex-row gap-6 justify-center items-center"> <a${addAttribute(`tel:${phoneNumber}`, "href")} class="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors w-full md:w-auto justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="font-semibold">Call Now</span> </a> <a${addAttribute(whatsappLink, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#25D366]/90 transition-colors w-full md:w-auto justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path> </svg> <span class="font-semibold">WhatsApp</span> </a> </div> </div> </section>`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/components/BookAppointment.astro", void 0);

const doctorImage = new Proxy({"src":"/_astro/doctor.B-bw3A5j.jpg","width":765,"height":1020,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rohitverma/Personal/Projects/dental133/src/assets/doctor.jpg";
							}
							
							return target[name];
						}
					});

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-16 bg-[#1FA198] scroll-mt-20"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">About Us</h2> <div class="grid md:grid-cols-2 gap-8 items-center"> <div class="order-2 md:order-1"> <p class="leading-relaxed text-white">
Welcome to Dental One33, where our motto is Precision and Compassion
</p> <p class="leading-relaxed mt-4 text-white">
At <strong>Dental One33</strong>, we believe that a healthy smile is a gateway to confidence, well-being, and a better quality of life. Located in the Jaypee Wishtown, Sector 133, Noida, our state-of-the-art dental clinic is committed to delivering world-class oral healthcare with a personalized touch. Whether you need preventive care, cosmetic enhancement, or complex restorative treatments, our team of highly skilled dentists is here to ensure you receive the best care possible.
</p> <p class="leading-relaxed mt-4 text-white"> <strong><i>Who we are</i></strong> </p> <p class="leading-relaxed mt-4 text-white">
Dental One33 is a premier dental clinic dedicated to providing cutting-edge dental solutions in a warm and comfortable environment. Our team comprises experienced and compassionate dental professionals who prioritize your oral health and overall well-being. With a patient-centric approach, we strive to create a stress-free experience while delivering top-quality dental care.
Our clinic is equipped with the latest technology and adheres to the highest standards of hygiene and safety. From routine check-ups to advanced dental procedures, we offer comprehensive treatments tailored to meet the unique needs of each patient. At Dental One33, you’re not just a patient; you’re part of our family, and we are committed to helping you achieve a radiant and healthy smile.
</p> <p class="leading-relaxed mt-4 text-white">
You can read more about what patients have to say on the google reviews page <a href="https://www.google.com/search?sca_esv=1c73104e47d869c4&rlz=1C1CHBF_enIN914IN914&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzVEf8m6Mg5fBcvw9-H9w7RHzdFWB6G935RF0nZCDrIAd0AHhMUGs0pA4HEkfBE_p_Lri6Hlqr7V9PlA_ZAg7qu2d9HQI&q=Dental+One33+Reviews&sa=X&ved=2ahUKEwjBgtjYr-uLAxXGZmwGHcwINfMQ0bkNegQIGxAD&biw=1536&bih=730&dpr=1.25" target="_blank"><u>here</u></a>.
</p> </div> <div class="order-1 md:order-2"> <div class="relative"> <div class="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3"></div> ${renderComponent($$result, "Image", $$Image, { "src": doctorImage, "alt": "Dr. Sakshi Jain", "class": "relative rounded-lg shadow-lg w-full max-w-md mx-auto", "width": 500, "height": 600 })} </div> </div> </div> <!-- <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="order-2 md:order-1">
        <p class="leading-relaxed text-white">
          <strong>Who We Are</strong>
        </p>
        <p class="leading-relaxed text-white">
          
        </p>
      </div>
      <div class="order-2 md:order-1">
        <p class="leading-relaxed text-white">
          <strong>Our Mission</strong>
        </p>
        <p class="leading-relaxed text-white">
          Our mission at Dental One33 is simple – to provide exceptional dental care with integrity, precision, compassion, and excellence. We aim to enhance the oral health of our community by offering innovative, painless, and cost-effective dental treatments. We take pride in educating our patients about proper oral hygiene while ensuring that every visit to our clinic is a positive and empowering experience.
        </p>
      </div>
    </div> --> </div> </section>`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/components/AboutUs.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[80vh] flex items-center bg-[#1FA198]"> <div class="absolute inset-0 z-0"> <video autoplay loop muted playsinline class="w-full h-full object-cover"> <source${addAttribute(heroVideo, "src")} type="video/mp4"> </video> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"> <div class="max-w-3xl"> <div class="bg-zinc-50/70 rounded-full p-8 text-center"> ${renderComponent($$result, "ReviewsCarousel", $$ReviewsCarousel, {})} </div> </div> </div> </section> ${renderComponent($$result, "BookAppointment", $$BookAppointment, {})} ${renderComponent($$result, "AboutUs", $$AboutUs, {})} ${renderComponent($$result, "BookAppointment", $$BookAppointment, {})}`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    "Smile Designing",
    "Tooth coloured filling",
    "Root Canal treatment",
    "Crowns and Bridges",
    "Clear Aligners",
    "Implants",
    "Braces",
    "Scaling"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-16 bg-[#1FA198] scroll-mt-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-white">Our Services</h2> </div> <div class="max-w-3xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${services.map((service) => renderTemplate`<div class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-lg text-white">${service}</span> </div>`)} </div> </div> </div> </section>`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/components/Services.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="locate" class="bg-[#1FA198] py-16 md:py-24"> <div class="container mx-auto px-4"> <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">
Locate Us
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> <div class="h-[400px] rounded-lg overflow-hidden shadow-lg"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.8635574557657!2d77.36562087537754!3d28.537843875727738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f25c2f3f0d%3A0x9d54cc4db2d2d3a9!2sDental%20One33!5e0!3m2!1sen!2sin!4v1705670778041!5m2!1sen!2sin&markers=color:red%7C28.537843875727738,77.36562087537754" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe> </div> <div class="text-white"> <h3 class="text-2xl font-semibold mb-6">Our Location</h3> <div class="space-y-6"> <div class="flex items-start"> <svg class="w-6 h-6 text-white mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <div> <h4 class="font-semibold mb-2">Address</h4> <p class="mb-4">
Dental One33, L-150, Jaypee Kensington Park Phase 1 (KP1 plots), Jaypee Greens Wishtown, Sector 133, Noida (UP) - 201304
</p> <a href="https://maps.app.goo.gl/93LcXNxkf2F3wfB96" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white text-[#1FA198] px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path> </svg>
Get Directions
</a> </div> </div> </div> </div> </div> </div> </section>`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dental One33 - Premium Dental Care in Noida" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/pages/index.astro", void 0);

const $$file = "/Users/rohitverma/Personal/Projects/dental133/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
