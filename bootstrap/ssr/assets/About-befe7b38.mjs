import { _ as _export_sfc, T as TheButton, A as AosWrapper } from "../ssr.mjs";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withModifiers } from "vue";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "vuex";
import "@inertiajs/vue3";
import "animejs";
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
const TheAboutList_vue_vue_type_style_index_0_scoped_f54fd482_lang = "";
const _sfc_main$1 = {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit("burger");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["list-reset", _ctx.classes]
  }, _attrs))} data-v-f54fd482><!--[-->`);
  ssrRenderList($props.tabs, (tab, index) => {
    _push(`<li class="nav__item" data-v-f54fd482></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/About/TheAboutList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheAboutListVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f54fd482"]]);
const _sfc_main = {
  props: {
    about: Array
  },
  components: {
    TheAboutListVue,
    TheButton,
    Swiper,
    SwiperSlide,
    AosWrapper
  },
  methods: {},
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AosWrapper = resolveComponent("AosWrapper");
  const _component_swiper = resolveComponent("swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  const _component_the_button = resolveComponent("the-button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-component" }, _attrs))}><div class="container"><div class="wrapper">`);
  _push(ssrRenderComponent(_component_AosWrapper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-in" data-aos-easing="ease-out-cubic"${_scopeId}><div class="wrapper-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_swiper, {
          navigation: {
            nextEl: ".next",
            prevEl: ".prev"
          },
          modules: $setup.modules,
          pagination: {
            type: "fraction",
            el: ".pagination",
            currentClass: "current",
            totalClass: "total"
          },
          class: "mySwiper"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($props.about[0].slider, (slide, index) => {
                _push3(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="about__item"${_scopeId3}><div class="img-container"${_scopeId3}><img${ssrRenderAttr("src", slide.img)} alt="{{slide.alt}}"${_scopeId3}></div><div class="info"${_scopeId3}><h3${_scopeId3}>${ssrInterpolate(slide.title)}</h3><div class="desc"${_scopeId3}>${ssrInterpolate(slide.desc)}</div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "about__item" }, [
                          createVNode("div", { class: "img-container" }, [
                            createVNode("img", {
                              src: slide.img,
                              alt: "{{slide.alt}}"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "info" }, [
                            createVNode("h3", null, toDisplayString(slide.title), 1),
                            createVNode("div", { class: "desc" }, toDisplayString(slide.desc), 1)
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]--><div class="slider__btns-container"${_scopeId2}><div class="prev"${_scopeId2}><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_11_36)"${_scopeId2}><path d="M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z" fill="black"${_scopeId2}></path><rect x="29" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="34" y="5" width="1" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_11_36"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></div><div class="pagination"${_scopeId2}></div><div class="next"${_scopeId2}><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_6_2)"${_scopeId2}><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"${_scopeId2}></path><rect x="7" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="3" y="5" width="2" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_6_2"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></div></div>`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($props.about[0].slider, (slide, index) => {
                  return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "about__item" }, [
                        createVNode("div", { class: "img-container" }, [
                          createVNode("img", {
                            src: slide.img,
                            alt: "{{slide.alt}}"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "info" }, [
                          createVNode("h3", null, toDisplayString(slide.title), 1),
                          createVNode("div", { class: "desc" }, toDisplayString(slide.desc), 1)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode("div", { class: "slider__btns-container" }, [
                  createVNode("div", { class: "prev" }, [
                    (openBlock(), createBlock("svg", {
                      width: "38",
                      height: "12",
                      viewBox: "0 0 38 12",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("g", { "clip-path": "url(#clip0_11_36)" }, [
                        createVNode("path", {
                          d: "M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z",
                          fill: "black"
                        }),
                        createVNode("rect", {
                          x: "29",
                          y: "5",
                          width: "2",
                          height: "2",
                          fill: "white"
                        }),
                        createVNode("rect", {
                          x: "34",
                          y: "5",
                          width: "1",
                          height: "2",
                          fill: "white"
                        })
                      ]),
                      createVNode("defs", null, [
                        createVNode("clipPath", { id: "clip0_11_36" }, [
                          createVNode("rect", {
                            width: "38",
                            height: "12",
                            fill: "white"
                          })
                        ])
                      ])
                    ]))
                  ]),
                  createVNode("div", { class: "pagination" }),
                  createVNode("div", { class: "next" }, [
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
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="requisits"${_scopeId}><span${_scopeId}>Реквизиты</span>`);
        _push2(ssrRenderComponent(_component_the_button, {
          class: "button button-click button--orange first__btn",
          onClick: () => {
          }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Скачать</span>`);
            } else {
              return [
                createVNode("span", null, "Скачать")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-in",
            "data-aos-easing": "ease-out-cubic"
          }, [
            createVNode("div", { class: "wrapper-container" }, [
              createVNode(_component_swiper, {
                navigation: {
                  nextEl: ".next",
                  prevEl: ".prev"
                },
                modules: $setup.modules,
                pagination: {
                  type: "fraction",
                  el: ".pagination",
                  currentClass: "current",
                  totalClass: "total"
                },
                class: "mySwiper"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList($props.about[0].slider, (slide, index) => {
                    return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "about__item" }, [
                          createVNode("div", { class: "img-container" }, [
                            createVNode("img", {
                              src: slide.img,
                              alt: "{{slide.alt}}"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "info" }, [
                            createVNode("h3", null, toDisplayString(slide.title), 1),
                            createVNode("div", { class: "desc" }, toDisplayString(slide.desc), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  createVNode("div", { class: "slider__btns-container" }, [
                    createVNode("div", { class: "prev" }, [
                      (openBlock(), createBlock("svg", {
                        width: "38",
                        height: "12",
                        viewBox: "0 0 38 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("g", { "clip-path": "url(#clip0_11_36)" }, [
                          createVNode("path", {
                            d: "M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z",
                            fill: "black"
                          }),
                          createVNode("rect", {
                            x: "29",
                            y: "5",
                            width: "2",
                            height: "2",
                            fill: "white"
                          }),
                          createVNode("rect", {
                            x: "34",
                            y: "5",
                            width: "1",
                            height: "2",
                            fill: "white"
                          })
                        ]),
                        createVNode("defs", null, [
                          createVNode("clipPath", { id: "clip0_11_36" }, [
                            createVNode("rect", {
                              width: "38",
                              height: "12",
                              fill: "white"
                            })
                          ])
                        ])
                      ]))
                    ]),
                    createVNode("div", { class: "pagination" }),
                    createVNode("div", { class: "next" }, [
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
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["navigation", "modules", "pagination"]),
              createVNode("div", { class: "requisits" }, [
                createVNode("span", null, "Реквизиты"),
                createVNode(_component_the_button, {
                  class: "button button-click button--orange first__btn",
                  onClick: withModifiers(() => {
                  }, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Скачать")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_AosWrapper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-up" data-aos-easing="ease-out-cubic"${_scopeId}><div class="description"${_scopeId}>${_ctx.$replaceNewLines($props.about[0].description)}</div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-up",
            "data-aos-easing": "ease-out-cubic"
          }, [
            createVNode("div", {
              class: "description",
              innerHTML: _ctx.$replaceNewLines($props.about[0].description)
            }, null, 8, ["innerHTML"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  About as default
};
