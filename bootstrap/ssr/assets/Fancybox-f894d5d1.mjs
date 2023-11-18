import { Fancybox as Fancybox$1 } from "@fancyapps/ui";
import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.mjs";
const fancybox = "";
const _sfc_main = {
  props: {
    options: Object
  },
  mounted() {
    Fancybox$1.bind(this.$refs.container, "[data-fancybox]", {
      ...this.options || {}
    });
  },
  updated() {
    Fancybox$1.unbind(this.$refs.container);
    Fancybox$1.close();
    Fancybox$1.bind(this.$refs.container, "[data-fancybox]", {
      ...this.options || {}
    });
  },
  unmounted() {
    Fancybox$1.destroy();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ ref: "container" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Fancybox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Fancybox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Fancybox as F
};
