import { mapMutations, mapActions, mapState } from "vuex";
import { _ as _export_sfc, A as AosWrapper } from "../ssr.mjs";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
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
const _sfc_main$4 = {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["tabButton", { active: $props.isActive }]
  }, _attrs))}><span>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span></button>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheTabButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheTabButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  components: {
    TheTabButton,
    AosWrapper
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeTab: "requirements"
      // Начально выбранная вкладка
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AosWrapper = resolveComponent("AosWrapper");
  const _component_TheTabButton = resolveComponent("TheTabButton");
  _push(ssrRenderComponent(_component_AosWrapper, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-up" data-aos-easing="ease-out-cubic"${_scopeId}><div class="job"${_scopeId}><div class="row"${_scopeId}><div class="col-xl-5 job-top" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"${_scopeId}><h2${_scopeId}>${ssrInterpolate($props.item.title)}</h2><div class="job-logo"${_scopeId}><img${ssrRenderAttr("src", $props.item.img)} alt=""${_scopeId}></div></div><div class="col-xl-7" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "row-gap": "1.5rem" })}"${_scopeId}><div class="tabs"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TheTabButton, {
          isActive: $data.activeTab === "requirements",
          onClick: ($event) => $options.changeTab("requirements")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Требования`);
            } else {
              return [
                createTextVNode("Требования")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TheTabButton, {
          isActive: $data.activeTab === "responsibilities",
          onClick: ($event) => $options.changeTab("responsibilities")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Обязанности`);
            } else {
              return [
                createTextVNode("Обязанности")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="desc"${_scopeId}>`);
        if ($data.activeTab === "requirements") {
          _push2(`<div class="desc"${_scopeId}>${$props.item.requirements}</div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.activeTab === "responsibilities") {
          _push2(`<div class="desc"${_scopeId}>${$props.item.responsibilities}</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="hover"${_scopeId}><svg width="385" height="324" viewBox="0 0 385 324" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M385 135L0.245727 0.89759L72.9843 157.228L10.6498 323.087L385 135Z" fill="#EF7F1A"${_scopeId}></path></svg></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-up",
            "data-aos-easing": "ease-out-cubic"
          }, [
            createVNode("div", { class: "job" }, [
              createVNode("div", { class: "row" }, [
                createVNode("div", {
                  class: "col-xl-5 job-top",
                  style: { "display": "flex", "flex-direction": "column" }
                }, [
                  createVNode("h2", null, toDisplayString($props.item.title), 1),
                  createVNode("div", { class: "job-logo" }, [
                    createVNode("img", {
                      src: $props.item.img,
                      alt: ""
                    }, null, 8, ["src"])
                  ])
                ]),
                createVNode("div", {
                  class: "col-xl-7",
                  style: { "display": "flex", "flex-direction": "column", "row-gap": "1.5rem" }
                }, [
                  createVNode("div", { class: "tabs" }, [
                    createVNode(_component_TheTabButton, {
                      isActive: $data.activeTab === "requirements",
                      onClick: ($event) => $options.changeTab("requirements")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Требования")
                      ]),
                      _: 1
                    }, 8, ["isActive", "onClick"]),
                    createVNode(_component_TheTabButton, {
                      isActive: $data.activeTab === "responsibilities",
                      onClick: ($event) => $options.changeTab("responsibilities")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Обязанности")
                      ]),
                      _: 1
                    }, 8, ["isActive", "onClick"])
                  ]),
                  createVNode("div", { class: "desc" }, [
                    $data.activeTab === "requirements" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "desc",
                      innerHTML: $props.item.requirements
                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                    $data.activeTab === "responsibilities" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "desc",
                      innerHTML: $props.item.responsibilities
                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("div", { class: "hover" }, [
                (openBlock(), createBlock("svg", {
                  width: "385",
                  height: "324",
                  viewBox: "0 0 385 324",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M385 135L0.245727 0.89759L72.9843 157.228L10.6498 323.087L385 135Z",
                    fill: "#EF7F1A"
                  })
                ]))
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Jobs/JobsItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const JobsItemVue = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const TheLoader_vue_vue_type_style_index_0_scoped_dc245199_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader" }, _attrs))} data-v-dc245199><div class="orbe" style="${ssrRenderStyle({ "--index": "0" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "1" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "2" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "3" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "4" })}" data-v-dc245199></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheLoader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheLoaderVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-dc245199"]]);
const _sfc_main$1 = {
  components: { JobsItemVue, TheLoaderVue },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jobs_item_vue = resolveComponent("jobs-item-vue");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="wrapper"><!--[-->`);
  ssrRenderList($props.items, (item, index) => {
    _push(ssrRenderComponent(_component_jobs_item_vue, {
      item,
      key: index
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Jobs/JobsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JobsListVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    JobsItemVue,
    JobsListVue
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // jobs: 'название модуля + / + jobs'
      jobs: "jobs/fetchInfo"
    })
  },
  mounted() {
    this.jobs();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
      items: (state) => state.jobs.items
    })
  },
  watch: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jobs_list_vue = resolveComponent("jobs-list-vue");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "jobs" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_jobs_list_vue, { items: _ctx.items }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Jobs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Jobs as default
};
