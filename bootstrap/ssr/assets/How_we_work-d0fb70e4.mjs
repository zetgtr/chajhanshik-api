import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
  props: {
    how_we_work: Array
  },
  data() {
    var _a, _b, _c;
    console.log((_a = this.how_we_work[0]) == null ? void 0 : _a.items);
    return {
      items: (_b = this.how_we_work[0]) == null ? void 0 : _b.items,
      title: (_c = this.how_we_work[0]) == null ? void 0 : _c.title,
      isScrollable: false,
      scrollPercentage: 0
    };
  },
  computed: {
    trackStyles() {
      return {
        transform: `translateX(-${this.scrollPercentage}%)`
      };
    }
  },
  mounted() {
    this.handleWindowScroll();
    window.addEventListener("scroll", this.handleWindowScroll);
    window.addEventListener("resize", this.handleWindowScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleWindowScroll);
    window.removeEventListener("resize", this.handleWindowScroll);
  },
  methods: {
    handleWindowScroll() {
      if (window.innerWidth <= 768) {
        return;
      }
      const galleryOffset = this.$refs.galleryRef.offsetTop;
      const scrollPosition = window.scrollY;
      const containerHeight = window.innerHeight;
      const galleryHeight = this.$refs.galleryRef.offsetHeight;
      const maxScroll = galleryHeight - containerHeight;
      if (scrollPosition >= galleryOffset && scrollPosition <= galleryOffset + maxScroll) {
        this.isScrollable = true;
        this.scrollPercentage = (scrollPosition - galleryOffset) / maxScroll * 100;
      } else {
        this.isScrollable = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "how_we_work gallery",
    ref: "galleryRef"
  }, _attrs))}><div class="gallery-scroll-track"><div class="gallery-container"><div class="gallery-track" style="${ssrRenderStyle($options.trackStyles)}"><div class="blackwrap _0"><div class="text">${ssrInterpolate($data.title)}</div></div><!--[-->`);
  ssrRenderList($data.items, (item, index) => {
    _push(`<div class="blackwrap"${ssrRenderAttr("item", item)}><div class="step-left"><div class="title">${ssrInterpolate(item.title)}</div><div class="step-desc">${_ctx.$replaceNewLines(item.desc)}</div></div><div class="step-img">${item.img}</div></div>`);
  });
  _push(`<!--]--></div></div><div class="scroll-indicator" style="${ssrRenderStyle($data.isScrollable ? null : { display: "none" })}"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/How_we_work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const How_we_work = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  How_we_work as default
};
