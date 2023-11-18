import { _ as _export_sfc, A as AosWrapper } from "../ssr.mjs";
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext, mergeProps } from "vue";
import { F as Fancybox } from "./Fancybox-f894d5d1.mjs";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
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
import "@fancyapps/ui";
const _sfc_main$1 = {
  props: {
    item: {
      type: Array,
      required: true
    }
  },
  components: {
    Fancybox,
    AosWrapper
  },
  setup(props) {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AosWrapper = resolveComponent("AosWrapper");
  const _component_Fancybox = resolveComponent("Fancybox");
  _push(ssrRenderComponent(_component_AosWrapper, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-up" data-aos-easing="ease-out-cubic"${_scopeId}><div class="review__item"${_scopeId}><div class="row"${_scopeId}><div class="col-xl-5" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"${_scopeId}><h2${_scopeId}>${ssrInterpolate($props.item.title)}</h2><div class="review__item-logo"${_scopeId}><img${ssrRenderAttr("src", $props.item.logo)} alt=""${_scopeId}></div></div><div class="col-xl-7" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"${_scopeId}><div class="medal-container"${_scopeId}>`);
        if ($props.item.medal) {
          _push2(`<div class="medal"${_scopeId}>${$props.item.medal}</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="medal_text"${_scopeId}>${ssrInterpolate($props.item.medal_text)}</div></div><div class="desc"${_scopeId}>${$props.item.desc}</div>`);
        _push2(ssrRenderComponent(_component_Fancybox, {
          style: { "margin-top": "auto" },
          options: {
            Carousel: {
              infinite: false
            }
          }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<a class="more" data-fancybox="gallery"${ssrRenderAttr("href", $props.item.img)}${_scopeId2}><span${_scopeId2}>Смотреть оригинал</span><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_6_2)"${_scopeId2}><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"${_scopeId2}></path><rect x="7" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="3" y="5" width="2" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_6_2"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></a>`);
            } else {
              return [
                createVNode("a", {
                  class: "more",
                  "data-fancybox": "gallery",
                  href: $props.item.img
                }, [
                  createVNode("span", null, "Смотреть оригинал"),
                  (openBlock(), createBlock("svg", {
                    width: "38",
                    height: "12",
                    viewBox: "0 0 38 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("g", { "clip-path": "url(#clip0_6_2)" }, [
                      createVNode("path", {
                        d: "M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z",
                        fill: "black"
                      }),
                      createVNode("rect", {
                        x: "7",
                        y: "5",
                        width: "2",
                        height: "2",
                        fill: "white"
                      }),
                      createVNode("rect", {
                        x: "3",
                        y: "5",
                        width: "2",
                        height: "2",
                        fill: "white"
                      })
                    ]),
                    createVNode("defs", null, [
                      createVNode("clipPath", { id: "clip0_6_2" }, [
                        createVNode("rect", {
                          width: "38",
                          height: "12",
                          fill: "white"
                        })
                      ])
                    ])
                  ]))
                ], 8, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="hover"${_scopeId}><svg width="385" height="324" viewBox="0 0 385 324" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M385 135L0.245727 0.89759L72.9843 157.228L10.6498 323.087L385 135Z" fill="#EF7F1A"${_scopeId}></path></svg></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-up",
            "data-aos-easing": "ease-out-cubic"
          }, [
            (openBlock(), createBlock("div", {
              class: "review__item",
              key: $props.item.id,
              ref: "tiltableItem"
            }, [
              createVNode("div", { class: "row" }, [
                createVNode("div", {
                  class: "col-xl-5",
                  style: { "display": "flex", "flex-direction": "column" }
                }, [
                  createVNode("h2", null, toDisplayString($props.item.title), 1),
                  createVNode("div", { class: "review__item-logo" }, [
                    createVNode("img", {
                      src: $props.item.logo,
                      alt: ""
                    }, null, 8, ["src"])
                  ])
                ]),
                createVNode("div", {
                  class: "col-xl-7",
                  style: { "display": "flex", "flex-direction": "column" }
                }, [
                  createVNode("div", { class: "medal-container" }, [
                    $props.item.medal ? (openBlock(), createBlock("div", {
                      key: 0,
                      innerHTML: $props.item.medal,
                      class: "medal"
                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                    createVNode("div", { class: "medal_text" }, toDisplayString($props.item.medal_text), 1)
                  ]),
                  createVNode("div", {
                    class: "desc",
                    innerHTML: $props.item.desc
                  }, null, 8, ["innerHTML"]),
                  createVNode(_component_Fancybox, {
                    style: { "margin-top": "auto" },
                    options: {
                      Carousel: {
                        infinite: false
                      }
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "more",
                        "data-fancybox": "gallery",
                        href: $props.item.img
                      }, [
                        createVNode("span", null, "Смотреть оригинал"),
                        (openBlock(), createBlock("svg", {
                          width: "38",
                          height: "12",
                          viewBox: "0 0 38 12",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("g", { "clip-path": "url(#clip0_6_2)" }, [
                            createVNode("path", {
                              d: "M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z",
                              fill: "black"
                            }),
                            createVNode("rect", {
                              x: "7",
                              y: "5",
                              width: "2",
                              height: "2",
                              fill: "white"
                            }),
                            createVNode("rect", {
                              x: "3",
                              y: "5",
                              width: "2",
                              height: "2",
                              fill: "white"
                            })
                          ]),
                          createVNode("defs", null, [
                            createVNode("clipPath", { id: "clip0_6_2" }, [
                              createVNode("rect", {
                                width: "38",
                                height: "12",
                                fill: "white"
                              })
                            ])
                          ])
                        ]))
                      ], 8, ["href"])
                    ]),
                    _: 1
                  })
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
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Reviews/ReviewItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ReviewItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const Reviews_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    ReviewItem
  },
  props: {
    reviews: Array
  },
  data() {
    var _a;
    return {
      items: (_a = this.reviews[0]) == null ? void 0 : _a.items,
      displayedItems: [],
      observer: null
    };
  },
  mounted() {
    var _a;
    this.items = ((_a = this.reviews[0]) == null ? void 0 : _a.items) || [];
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 1
    });
    this.observer.observe(this.$refs.sentinel);
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadMoreItems();
        }
      });
    },
    loadMoreItems() {
      const remainingItems = this.items.slice(
        this.displayedItems.length,
        this.displayedItems.length + 10
      );
      this.displayedItems.push(...remainingItems);
      if (this.displayedItems.length >= this.items.length) {
        this.observer.disconnect();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_review_item = resolveComponent("review-item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reviews" }, _attrs))}><div class="container"><div class="rewievs__wrapper wow fadeIn" data-wow-delay="0.2s"><!--[-->`);
  ssrRenderList($data.displayedItems, (item) => {
    _push(ssrRenderComponent(_component_review_item, {
      key: item.id,
      item
    }, null, _parent));
  });
  _push(`<!--]--><div style="${ssrRenderStyle({ "height": "1px" })}"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Reviews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Reviews as default
};
