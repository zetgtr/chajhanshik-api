import { mapMutations, mapActions, mapState } from "vuex";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../ssr.mjs";
import "vue/server-renderer";
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
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // fetchInfo: 'название модуля + / + fetchInfo'
      fetchInfo: "article/fetchInfo"
    })
  },
  mounted() {
    this.fetchInfo();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
      article: (state) => state.order.article
    })
  },
  watch: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Article = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Article as default
};
