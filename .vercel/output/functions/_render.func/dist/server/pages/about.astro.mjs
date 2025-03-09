/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D_odkUc9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CH07QD7I.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl font-bold text-center mb-12">About Bright Smile Dental</h1> <div class="grid md:grid-cols-2 gap-12 items-center mb-16"> <div> <h2 class="text-2xl font-bold mb-4">Our Mission</h2> <p class="text-gray-600 mb-6">
At Bright Smile Dental, our mission is to provide exceptional dental care in a comfortable
            and welcoming environment. We are committed to helping our patients achieve and maintain
            optimal oral health through personalized treatment plans and education.
</p> </div> <div> <h2 class="text-2xl font-bold mb-4">Our Values</h2> <ul class="space-y-4 text-gray-600"> <li>✓ Excellence in Patient Care</li> <li>✓ Continuous Education and Innovation</li> <li>✓ Compassion and Understanding</li> <li>✓ Community Involvement</li> </ul> </div> </div> <div class="bg-gray-50 p-8 rounded-lg"> <h2 class="text-2xl font-bold mb-6 text-center">Our Team</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <h3 class="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3> <p class="text-gray-600">Lead Dentist</p> </div> <div class="text-center"> <h3 class="text-xl font-semibold mb-2">Dr. Michael Chen</h3> <p class="text-gray-600">Orthodontist</p> </div> <div class="text-center"> <h3 class="text-xl font-semibold mb-2">Dr. Emily Martinez</h3> <p class="text-gray-600">Cosmetic Specialist</p> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/pages/about.astro", void 0);

const $$file = "/Users/rohitverma/Personal/Projects/dental133/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
