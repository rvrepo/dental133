/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CXuzI0uk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D1hiCsUu.mjs';
import { r as reviews } from '../chunks/reviews_D-OuHkwV.mjs';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = reviews.reviews;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl font-bold text-center mb-12">Our Dental Services</h1> <div class="space-y-16"> ${services.map((service) => renderTemplate`<div class="bg-white p-8 rounded-lg shadow-md"> <div class="flex items-center mb-6"> <span class="text-4xl mr-4">☆</span> <h2 class="text-2xl font-bold">${service.name}</h2> </div> <p class="text-gray-600 mb-6">${service.content}</p> <h3 class="text-lg font-semibold mb-4">Rating: ${service.rating}</h3> </div>`)} </div> </div> </div> ` })}`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/pages/services.astro", void 0);

const $$file = "/Users/rohitverma/Personal/Projects/dental133/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
