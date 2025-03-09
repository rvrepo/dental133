/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CXuzI0uk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D1hiCsUu.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="max-w-lg mx-auto space-y-6 bg-white rounded-lg p-8 shadow-lg"> <div class="mb-6"> <label for="name" class="block text-[#1FA198] font-medium mb-2">Full Name</label> <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-primary focus:ring-primary w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1FA198]"> </div> <div class="mb-6"> <label for="email" class="block text-[#1FA198] font-medium mb-2">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-primary focus:ring-primary w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1FA198]"> </div> <div class="mb-6"> <label for="phone" class="block text-[#1FA198] font-medium mb-2">Phone Number</label> <input type="tel" id="phone" name="phone" required class="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-primary focus:ring-primary w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1FA198]"> </div> <div class="mb-6"> <label for="message" class="block text-[#1FA198] font-medium mb-2">Message</label> <textarea id="message" name="message" rows="4" required class="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-primary focus:ring-primary w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1FA198]"></textarea> </div> <button type="submit" class="w-full bg-[#1FA198] text-white py-2 px-4 rounded-md hover:bg-[#1FA198]/90 transition-colors duration-300">
Send Message
</button> </form>`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/components/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl font-bold text-center mb-12">Contact Us</h1> <div class="grid md:grid-cols-2 gap-12 items-start"> <div> <div class="bg-white p-6 rounded-lg shadow-md mb-8"> <h2 class="text-2xl font-bold mb-4">Location</h2> <p class="text-gray-600">123 Dental Street</p> <p class="text-gray-600">City, State 12345</p> </div> <div class="bg-white p-6 rounded-lg shadow-md mb-8"> <h2 class="text-2xl font-bold mb-4">Contact Information</h2> <p class="text-gray-600">Phone: (555) 123-4567</p> <p class="text-gray-600">Email: info@brightsmile.com</p> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-2xl font-bold mb-4">Hours of Operation</h2> <p class="text-gray-600">Monday - Friday: 9am - 6pm</p> <p class="text-gray-600">Saturday: 9am - 2pm</p> <p class="text-gray-600">Sunday: Closed</p> </div> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </div> </div> </div> ` })}`;
}, "/Users/rohitverma/Personal/Projects/dental133/src/pages/contact.astro", void 0);

const $$file = "/Users/rohitverma/Personal/Projects/dental133/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
