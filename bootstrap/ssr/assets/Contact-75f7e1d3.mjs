import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.mjs";
import "vuex";
import "@inertiajs/vue3";
import "animejs";
import "swiper/vue";
import "swiper";
import "maska";
import "gsap";
import "aos";
import "vanilla-tilt";
import "axios";
import "wnumb";
import "nouislider";
import "@vue/runtime-core";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "vuex-persistedstate";
const _sfc_main = {
  components: {},
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log(this.contact);
    return {
      telegram: (_a = this.contact) == null ? void 0 : _a.telegram.value,
      whatsapp: (_b = this.contact) == null ? void 0 : _b.whatsapp.value,
      phone: (_c = this.contact) == null ? void 0 : _c.phone.value,
      phone2: (_d = this.contact) == null ? void 0 : _d.phone2.value,
      email: (_e = this.contact) == null ? void 0 : _e.email.value,
      address: (_f = this.contact) == null ? void 0 : _f.address.value,
      worktime: (_g = this.contact) == null ? void 0 : _g.worktime.value,
      map: (_h = this.contact) == null ? void 0 : _h.map.value
    };
  },
  props: {
    contact: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact",
    id: "contact"
  }, _attrs))}><div class="container"><div class="wrapper"><ul class="contact-info__list list-reset"><li class="contact-info__item-tel contact-info__item"><div class="contact-info__item-wrap"><div class="img-container"><svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.91323 33.3778H23.6684V37.0167C23.6684 37.6989 23.2437 38.098 22.8516 38.098L2.73015 38.0976C2.33776 38.0976 1.91307 37.6986 1.91307 37.0164L1.91323 33.3778ZM2.73064 1.90083H22.8521C23.2442 1.90083 23.6689 2.30304 23.6689 2.98335L23.6685 31.4775H1.9134V2.98335C1.9134 2.30245 2.3381 1.90083 2.73081 1.90083H2.73064ZM2.73064 0C1.15728 0 0 1.41405 0 2.98335V37.0166C0 38.5872 1.1572 40 2.73064 40H22.8521C24.4255 40 25.5824 38.5868 25.5824 37.0166L25.5821 2.98335C25.5821 1.41413 24.4255 0 22.8518 0H2.73064Z" fill="black"></path><path d="M10.4375 34.7882C9.90483 34.7803 9.4668 35.2078 9.4668 35.737C9.4668 36.2691 9.9048 36.6976 10.4375 36.689H13.6923C14.2244 36.6982 14.6621 36.2694 14.6621 35.737C14.6621 35.2078 14.2247 34.7806 13.6923 34.7882H10.4375Z" fill="black"></path></svg></div><div class="title">Телефон</div><div class="phone"><a href="tel:{{phone}}">${ssrInterpolate($data.phone)}</a></div><div class="phone"><a href="tel:{{phone2}}">${ssrInterpolate($data.phone2)}</a></div><div class="btn-container"><a target="_blank" href="{{whatsapp}}" class="btn__web"><div class="svg-wrapper-1"><div class="svg-wrapper"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1449 14.7766C10.112 13.7045 10.425 12.6499 11.0378 11.7694C11.6122 13.3869 12.3245 14.9522 13.1663 16.4483C12.9473 16.7296 12.8092 17.0656 12.7674 17.4199C12.7254 17.7741 12.7813 18.1329 12.9288 18.4577C14.8262 22.8936 18.3603 26.4278 22.7959 28.3255C23.121 28.4731 23.4801 28.529 23.8346 28.4872C24.1891 28.4454 24.5255 28.3071 24.8068 28.0877C26.3107 28.9221 27.8812 29.63 29.5022 30.2044C28.6179 30.8253 27.5564 31.1429 26.4764 31.1098C17.6859 29.9661 11.2881 23.5683 10.1445 14.777L10.1449 14.7766ZM20.7454 0.979866H19.826C15.2402 1.08622 10.8303 2.76565 7.33588 5.73691C3.84127 8.70839 1.47415 12.7908 0.63198 17.2995C-0.21048 21.8084 0.523032 26.4701 2.70913 30.5023L0.325852 39.397C0.225263 39.7725 0.304812 40.1732 0.541153 40.4815C0.777489 40.7899 1.14353 40.9712 1.53207 40.9717C1.64159 40.9712 1.75024 40.9562 1.85573 40.9271L10.7518 38.5438L10.7515 38.5441C14.309 40.4743 18.3682 41.2795 22.3931 40.8536C26.418 40.4273 30.2186 38.7896 33.2931 36.1574C36.3675 33.5248 38.5703 30.0216 39.6111 26.1103C40.6516 22.1992 40.4807 18.0642 39.1212 14.2518C37.7613 10.4399 35.2767 7.13023 31.9959 4.76031C28.7148 2.3906 24.7919 1.07231 20.7454 0.979492L20.7454 0.979866ZM15.226 14.0831L13.6673 10.8842L13.3719 10.8753C13.8495 12.2299 14.4328 13.545 15.1167 14.808C15.3067 14.6152 15.3508 14.3218 15.226 14.0817L15.226 14.0831ZM27.1708 26.0279C26.9313 25.9034 26.6388 25.9469 26.4457 26.1357C27.7112 26.8081 29.0255 27.3854 30.3772 27.8624L30.368 27.5851L27.1691 26.0264L27.1708 26.0279ZM31.7549 25.4823L28.2655 23.7824V23.7827C27.623 23.4654 26.8912 23.378 26.1923 23.5357C25.4934 23.6933 24.8699 24.0862 24.4258 24.6485L23.4485 25.8743C19.8611 24.2646 16.9896 21.3936 15.3795 17.8068L16.6053 16.8294C17.1676 16.3853 17.5604 15.7616 17.7181 15.0627C17.8755 14.3638 17.7884 13.6317 17.4714 12.9892L15.7732 9.50036C15.6167 9.17929 15.3754 8.90721 15.0757 8.71324C14.7757 8.51927 14.4284 8.4109 14.0716 8.39995L12.2394 8.33943C11.5926 8.31349 10.9565 8.50861 10.4355 8.89251C8.60902 10.2166 7.64349 12.2779 7.64349 14.8543V14.8546C7.64349 14.9065 7.64695 14.9583 7.65329 15.0099C8.19686 19.7557 10.3175 24.1812 13.6762 27.5782C17.0731 30.9363 21.4987 33.0569 26.2444 33.6005C26.296 33.6066 26.3479 33.6094 26.4001 33.6094C28.977 33.6094 31.0375 32.6454 32.3639 30.8184H32.3636C32.7466 30.2964 32.9414 29.6603 32.9164 29.0132L32.8573 27.1827C32.8458 26.8259 32.7371 26.4789 32.5431 26.1794C32.3489 25.88 32.0765 25.639 31.7554 25.4828L31.7549 25.4823ZM32.6565 33.3366V33.3368C35.7496 30.2425 37.5711 26.1015 37.7619 21.7307C37.9524 17.3593 36.4981 13.0759 33.6857 9.72391C30.8733 6.37222 26.9071 4.1959 22.5694 3.62437C18.2315 3.05284 13.8372 4.1276 10.2528 6.63621C6.66821 9.14515 4.15411 12.9063 3.20584 17.1777C2.25758 21.4491 2.94443 25.921 5.13086 29.7105C5.29687 29.9976 5.34154 30.3391 5.25565 30.6593L3.30069 37.9558L10.5963 36.0009C10.7021 35.9721 10.8111 35.9571 10.9209 35.9565C11.1402 35.9568 11.3558 36.0147 11.5457 36.1248C14.8821 38.0452 18.7581 38.8127 22.5741 38.3089C26.3904 37.8049 29.9343 36.0574 32.6574 33.3369L32.6565 33.3366Z" fill="black"></path></svg></div></div><span>WhatsApp</span></a><a target="_blank" href="{{telegram}}" class="btn__web"><div class="svg-wrapper-1"><div class="svg-wrapper"><svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6042 1.31828C37.3445 0.0874662 35.5282 -0.319385 33.863 0.258677L3.11071 10.9146C1.5859 11.4433 0.465397 12.6988 0.11329 14.274C-0.238742 15.8485 0.240894 17.4608 1.3954 18.5878L22.2206 38.9271C23.0987 39.7847 24.2474 40.2448 25.437 40.2448C25.8114 40.2448 26.1901 40.1987 26.5662 40.1054C28.1317 39.7161 29.359 38.5658 29.8499 37.0301L39.777 6.03567C40.314 4.35729 39.8651 2.54998 38.6042 1.31818V1.31828ZM37.0415 5.15886L27.1144 36.1541C26.925 36.744 26.4719 37.1681 25.8717 37.3182C25.267 37.4676 24.671 37.3048 24.2263 36.8723L14.5094 27.3826L28.1504 13.7416C28.7115 13.1805 28.7115 12.2716 28.1504 11.7105C27.5893 11.1495 26.6804 11.1495 26.1193 11.7105L12.4537 25.3762L3.39986 16.5341C2.95646 16.1007 2.7798 15.506 2.91607 14.9012C3.05072 14.2959 3.46463 13.8329 4.04945 13.6297L34.8017 2.97379C35.4442 2.75161 36.1117 2.90293 36.5971 3.37487C37.0809 3.84776 37.2464 4.51556 37.0402 5.16002L37.0415 5.15886Z" fill="black"></path></svg></div></div><span>Telegram</span></a></div></div></li><li class="contact-info__item-address contact-info__item"><div class="contact-info__item-wrap"><div class="img-container"><svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7153 2.62773C22.3875 2.62773 26.9908 7.20071 26.9908 12.8433C26.9908 15.0364 26.0482 18.3649 24.0547 20.6783L16.7153 29.1749L9.37864 20.6807C7.3826 18.3673 6.44002 15.0386 6.44002 12.8432C6.44034 7.20038 11.043 2.62765 16.7155 2.62765L16.7153 2.62773ZM16.7153 0.670979C9.97645 0.670979 4.47792 6.14011 4.47792 12.8428C4.47792 15.5564 5.50223 19.1871 7.88515 21.9502V21.9533L11.3066 25.9134H5.42876C5.00443 25.9153 4.62725 26.1881 4.49623 26.5887L0.335569 39.3964C0.12989 40.0264 0.604846 40.6709 1.27061 40.6709H32.161C32.83 40.6709 33.3017 40.0263 33.0989 39.3964L28.9351 26.5887C28.8041 26.1859 28.4269 25.9134 28.0007 25.9134H24.2662C22.8888 25.8454 22.8888 27.9385 24.2662 27.8677H27.2868L30.8099 38.7142H2.6242L6.14443 27.8677H12.9938L15.6278 30.9164H13.9001C13.3685 30.9063 12.929 31.3329 12.929 31.8645C12.929 32.396 13.3685 32.8261 13.9001 32.8156H19.5252C20.0599 32.8261 20.4994 32.3963 20.4994 31.8645C20.4994 31.3329 20.0593 30.907 19.5252 30.9164H17.8054L25.5452 21.9533V21.9501C27.9314 19.1871 28.9553 15.5564 28.9553 12.8427C28.956 6.14019 23.4543 0.670898 16.7155 0.670898L16.7153 0.670979Z" fill="black"></path><path d="M18.8293 14.9443C17.6551 16.1126 15.779 16.1151 14.6051 14.9475C13.4309 13.7793 13.4309 11.9092 14.6051 10.74C15.7793 9.5721 17.6551 9.57461 18.8293 10.7432C20.0061 11.9111 20.0061 13.7746 18.8293 14.9422V14.9443ZM20.2219 16.3268C22.1474 14.4124 22.1474 11.2769 20.2219 9.35937C18.2939 7.44401 15.1417 7.44401 13.2175 9.35937C11.2895 11.2766 11.2895 14.4117 13.2175 16.3268C15.142 18.2421 18.2942 18.2421 20.2219 16.3268Z" fill="black"></path></svg></div><div class="title">Адрес</div><div class="address"><p>${_ctx.$replaceNewLines($data.address)}</p></div><div class="mail"><a href="mailto:123@mail.com">${ssrInterpolate($data.email)}</a></div><div class="worktime"><p>${ssrInterpolate($data.worktime)}</p></div></div></li></ul></div></div><div class="iframe">${$data.map}</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Contact as default
};
