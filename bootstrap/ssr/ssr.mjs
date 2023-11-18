import { mapMutations, mapActions, mapGetters, mapState, useStore, createStore } from "vuex";
import { ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, ref, onMounted, openBlock, createBlock, Fragment, renderList, resolveDirective, createCommentVNode, toRefs, computed, onUnmounted, watch, resolveDynamicComponent, createSSRApp, h as h$1 } from "vue";
import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import anime from "animejs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { EffectFade } from "swiper";
import { vMaska } from "maska";
import { gsap } from "gsap";
import AOS from "aos";
import VanillaTilt from "vanilla-tilt";
import axios from "axios";
import wnumb from "wnumb";
import nouislider from "nouislider";
import { markRaw, defineAsyncComponent } from "@vue/runtime-core";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import createPersistedState from "vuex-persistedstate";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$A = {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      addCart: "cart/addCart",
      deleteCart: "cart/deleteCart",
      removeCart: "cart/removeCart",
      deleteProductCart: "cart/deleteProductCart"
    })
  },
  computed: {
    ...mapGetters({
      totalPrice: "cart/totalPrice"
    }),
    ...mapState({
      cart: (state) => state.cart.cart,
      count: (state) => state.cart.count
    })
  },
  watch: {}
};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--> Product <div class="container"><!--[-->`);
  ssrRenderList(_ctx.cart, (item, index) => {
    _push(`<div class="cart_items">`);
    if (item) {
      _push(`<div class="cart_product"><p>${ssrInterpolate(item.title)}</p><button>-</button><button>+</button><button>x</button><p>${ssrInterpolate(item.count)}</p></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--><button>Очистить корзину</button><div><p>Общая стоимость: ${ssrInterpolate(_ctx.totalPrice)} руб.</p></div></div><!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Catalog/Cart.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const Cart = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$A]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cart
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  components: {
    Link
  },
  computed: {
    ...mapState({
      count: (state) => state.cart.count
    })
  }
};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    href: "/catalog/cart",
    class: "cart ml-5"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fad fa-shopping-cart"${_scopeId}></i><div class="cart_count"${_scopeId}>${ssrInterpolate(_ctx.count)}</div>`);
      } else {
        return [
          createVNode("i", { class: "fad fa-shopping-cart" }),
          createVNode("div", { class: "cart_count" }, toDisplayString(_ctx.count), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/catalog/cart/CatalogCart.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const CatalogCart = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$z]]);
const _sfc_main$y = {
  components: {
    Link
  }
};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  ssrRenderList(_ctx.$page.props.catalog.categories, (category) => {
    _push(ssrRenderComponent(_component_Link, {
      class: "col-lg-4 container_category category-link",
      href: _ctx.route("catalog.category", { category: category.url }),
      key: category.id
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", category.images)} alt="Category Image" class="category-image"${_scopeId}><h3 class="category-title"${_scopeId}>${ssrInterpolate(category.title)}</h3><div class="category-description"${_scopeId}>${category.description}</div>`);
        } else {
          return [
            createVNode("img", {
              src: category.images,
              alt: "Category Image",
              class: "category-image"
            }, null, 8, ["src"]),
            createVNode("h3", { class: "category-title" }, toDisplayString(category.title), 1),
            createVNode("div", {
              class: "category-description",
              innerHTML: category.description
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/catalog/categories/CatalogCategory.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const CatalogCategory = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$y]]);
const _sfc_main$x = {
  components: {
    Link
  }
};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  ssrRenderList(_ctx.$page.props.catalog.products, (product) => {
    _push(ssrRenderComponent(_component_Link, {
      class: "col-lg-4 container_category category-link",
      href: _ctx.route("catalog.product", { product: product.url }),
      key: product.id
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", product.images)} alt="Category Image" class="category-image"${_scopeId}><h3 class="category-title"${_scopeId}>${ssrInterpolate(product.title)}</h3><div class="category-description"${_scopeId}>${product.description}</div>`);
        } else {
          return [
            createVNode("img", {
              src: product.images,
              alt: "Category Image",
              class: "category-image"
            }, null, 8, ["src"]),
            createVNode("h3", { class: "category-title" }, toDisplayString(product.title), 1),
            createVNode("div", {
              class: "category-description",
              innerHTML: product.description
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/catalog/categories/CatalogProducts.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const CatalogProducts = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$x]]);
const _sfc_main$w = {
  components: {
    Head,
    CatalogCategory,
    CatalogProducts,
    CatalogCart,
    Link
  }
};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_CatalogCart = resolveComponent("CatalogCart");
  const _component_CatalogCategory = resolveComponent("CatalogCategory");
  const _component_CatalogProducts = resolveComponent("CatalogProducts");
  _push(`<!--[--> category <div class="breadcrumbs">`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.$page.props.title
  }, null, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Главная`);
      } else {
        return [
          createTextVNode("Главная")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("catalog")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Каталог`);
      } else {
        return [
          createTextVNode("Каталог")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.$page.props.breadcrumbs, (item) => {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("catalog.category", { category: item.url })
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="container row">`);
  _push(ssrRenderComponent(_component_CatalogCart, null, null, _parent));
  _push(ssrRenderComponent(_component_CatalogCategory, null, null, _parent));
  _push(ssrRenderComponent(_component_CatalogProducts, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Catalog/Category.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const Category = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$w]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Category
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  components: { CatalogCart },
  data() {
    console.log(this.$page.props.product);
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      addCart: "cart/addCart"
    })
  }
};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CatalogCart = resolveComponent("CatalogCart");
  _push(`<!--[--> Product <div class="container">`);
  _push(ssrRenderComponent(_component_CatalogCart, null, null, _parent));
  _push(`<div class="product"><img${ssrRenderAttr("src", _ctx.$page.props.product.images)} alt="Product image"><h2 class="product-title">${ssrInterpolate(_ctx.$page.props.product.title)}</h2><div class="product-description">${_ctx.$page.props.product.description}</div><p class="product-price">${ssrInterpolate(_ctx.$page.props.product.price)}</p><button class="add-to-cart-btn">Добавить в корзину</button></div></div><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Catalog/Product.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const Product = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$v]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Product
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  components: {
    Link
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    classes: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("burger");
    }
  }
};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["list-reset", $props.classes]
  }, _attrs))}><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<li class="nav__item">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route(item.url),
      "data-text": item.title,
      onClick: $options.handleClick
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheLinkList.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const TheLinkList = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u]]);
const _sfc_main$t = {
  components: {
    TheLinkList
  },
  data() {
    console.log(this.$page.props.navigation_burger);
    return {
      classes: "bur__menu",
      items: this.$page.props.navigation_burger
    };
  },
  methods: {
    toggleBurger() {
      const burger = document.querySelector("the-burger");
      burger.classList.toggle("show");
      setTimeout(() => burger.classList.toggle("visible"), 300);
    },
    removeOverflowBody() {
      document.body.classList.remove("no-scroll");
    }
  }
};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheLinkList = resolveComponent("TheLinkList");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "bur",
    id: "buger"
  }, _attrs))}><div class="container"><div class="bur__wrapper">`);
  _push(ssrRenderComponent(_component_TheLinkList, {
    items: $data.items,
    classes: $data.classes,
    onBurger: $options.removeOverflowBody
  }, null, _parent));
  _push(`<div class="bur__footer"><div class="address"><h4 class="title">г. Санкт-Петербург</h4><p> г. Петергоф, Санкт-Петербургский пр., <br> д. 60, лит. Ф, БЦ «Ракета», офис 210 </p></div><div class="contacts"><a href="tel:+7 905 262 49 68">+7 905 262 49 68</a><b></b><a href="mailto:info@ji-touch.ru">info@ji-touch.ru</a></div><div class="social"><a href="https://vk.com/jitouch" target="_blank" class="item vk"></a></div></div></div></div></section>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheBurger.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const TheBurger = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t]]);
const _imports_0 = "/build/assets/logotype-6830d1b9.svg";
const _sfc_main$s = {
  name: "TheHeader",
  components: {
    Link,
    TheBurger,
    TheLinkList
  },
  data() {
    return {
      items: this.$page.props.navigation_burger,
      classes: "nav__list",
      isBurgerVisible: false,
      isHeaderFixed: false
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleBurger() {
      this.isBurgerVisible = !this.isBurgerVisible;
      if (this.isBurgerVisible) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.isHeaderFixed = true;
      } else {
        this.isHeaderFixed = false;
      }
    }
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_TheLinkList = resolveComponent("TheLinkList");
  const _component_the_burger = resolveComponent("the-burger");
  _push(`<!--[--><header id="header" class="${ssrRenderClass([{ burger__open: $data.isBurgerVisible, header_fix: $data.isHeaderFixed }, "header"])}"><div class="container header-container"><div class="${ssrRenderClass([{ hidden: $data.isBurgerVisible }, "header__wrapper"])}"><div class="header__logo">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><nav class="nav">`);
  _push(ssrRenderComponent(_component_TheLinkList, {
    items: $data.items,
    classes: $data.classes
  }, null, _parent));
  _push(`</nav><div class="header__right"><a class="header__num" href="tel:+7 905 262 49 68">+7 905 262 49 68</a></div></div><button id="burger-btn" class="${ssrRenderClass([{ active: $data.isBurgerVisible }, "burger btn-reset"])}"><span class="line"></span><span class="line"></span></button></div></header>`);
  _push(ssrRenderComponent(_component_the_burger, {
    class: { show: $data.isBurgerVisible, visibility: $data.isBurgerVisible }
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheHeader.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$r = {
  data() {
    return {};
  },
  mounted() {
    let cont = document.querySelector(".animate-container");
    for (let i2 = 1; i2 <= 150; i2++) {
      let dot = document.createElement("div");
      dot.classList.add("element");
      cont.appendChild(dot);
    }
    let dotAll = document.querySelectorAll(".element");
    let animation = anime.timeline({
      targets: dotAll,
      easing: "easeInOutExpo",
      loop: true,
      delay: anime.stagger(40, { grid: [10, 10], from: "center" })
    });
    animation.add({
      rotateZ: 180,
      translateY: anime.stagger(-60, { grid: [10, 10], from: "center", axis: "y" }),
      translateX: anime.stagger(-60, { grid: [10, 10], from: "center", axis: "x" })
    }).add({
      rotateZ: 180,
      translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
      translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
      opacite: 1
    });
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "animate" }, _attrs))}><div class="animate-container"></div></section>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheAnimateBg.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const TheAnimateBg = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r]]);
const swiperBundle = "";
const effectFade_min = "";
const _sfc_main$q = {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    dataSlider: {
      type: Array,
      required: true
    }
  },
  setup(props, ctx) {
    const store2 = useStore();
    const slider = store2.state.services.slider;
    const swiper = ref();
    const countSwiper = ref(1);
    const isMoving = ref(false);
    const onSlideChange = () => {
      const realIndex = swiper.value.realIndex;
      isMoving.value = true;
      setTimeout(() => {
        isMoving.value = false;
      }, 400);
      countSwiper.value = realIndex + 1;
      ctx.emit("activeIndexChanged", countSwiper.value);
      ctx.emit("slideChanged", realIndex);
    };
    const onSwiper = (instance) => {
      swiper.value = instance;
    };
    onMounted(() => {
      countSwiper.value = 1;
    });
    const goToSlide = (slideNumber) => {
      swiper.value.slideTo(slideNumber);
    };
    return {
      swiper,
      onSwiper,
      onSlideChange,
      countSwiper,
      goToSlide,
      isMoving,
      EffectFade,
      slider
    };
  },
  mounted() {
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Swiper, {
    modules: [$setup.EffectFade],
    effect: "fade",
    onSlideChange: $setup.onSlideChange,
    ref: "swiperRef",
    onSwiper: $setup.onSwiper
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.dataSlider, (item, index) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="services__item"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-5"${_scopeId2}><div class="services__left"${_scopeId2}><h2 class="services__item-title"${_scopeId2}>${_ctx.$replaceNewLines(item.title)}</h2></div><div class="slider__btns-container"${_scopeId2}><div class="swiper-button-prev"${_scopeId2}><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_11_36)"${_scopeId2}><path d="M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z" fill="black"${_scopeId2}></path><rect x="29" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="34" y="5" width="1" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_11_36"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></div><div class="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal"${_scopeId2}><span class="swiper-pagination-current"${_scopeId2}>${ssrInterpolate(index + 1)}</span> / <span class="swiper-pagination-total"${_scopeId2}>${ssrInterpolate($props.dataSlider.length)}</span></div><div class="swiper-button-next"${_scopeId2}><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_6_2)"${_scopeId2}><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"${_scopeId2}></path><rect x="7" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="3" y="5" width="2" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_6_2"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></div></div></div><div class="col-lg-7"${_scopeId2}><div class="services__item-content"${_scopeId2}><h4 class="services__item-subtitle"${_scopeId2}>${_ctx.$replaceNewLines(item.subtitle)}</h4><p${_scopeId2}>${_ctx.$replaceNewLines(item.desc)}</p></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "services__item" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-lg-5" }, [
                        createVNode("div", { class: "services__left" }, [
                          createVNode("h2", {
                            class: "services__item-title",
                            innerHTML: _ctx.$replaceNewLines(item.title)
                          }, null, 8, ["innerHTML"])
                        ]),
                        createVNode("div", { class: "slider__btns-container" }, [
                          createVNode("div", {
                            class: "swiper-button-prev",
                            onClick: ($event) => $setup.goToSlide(index - 1)
                          }, [
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
                          ], 8, ["onClick"]),
                          createVNode("div", { class: "swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal" }, [
                            createVNode("span", { class: "swiper-pagination-current" }, toDisplayString(index + 1), 1),
                            createTextVNode(" / "),
                            createVNode("span", { class: "swiper-pagination-total" }, toDisplayString($props.dataSlider.length), 1)
                          ]),
                          createVNode("div", {
                            class: "swiper-button-next",
                            onClick: ($event) => $setup.goToSlide(index + 1)
                          }, [
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
                          ], 8, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-7" }, [
                        createVNode("div", { class: "services__item-content" }, [
                          createVNode("h4", {
                            class: "services__item-subtitle",
                            innerHTML: _ctx.$replaceNewLines(item.subtitle)
                          }, null, 8, ["innerHTML"]),
                          createVNode("p", {
                            innerHTML: _ctx.$replaceNewLines(item.desc)
                          }, null, 8, ["innerHTML"])
                        ])
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.dataSlider, (item, index) => {
            return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "services__item" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-lg-5" }, [
                      createVNode("div", { class: "services__left" }, [
                        createVNode("h2", {
                          class: "services__item-title",
                          innerHTML: _ctx.$replaceNewLines(item.title)
                        }, null, 8, ["innerHTML"])
                      ]),
                      createVNode("div", { class: "slider__btns-container" }, [
                        createVNode("div", {
                          class: "swiper-button-prev",
                          onClick: ($event) => $setup.goToSlide(index - 1)
                        }, [
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
                        ], 8, ["onClick"]),
                        createVNode("div", { class: "swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal" }, [
                          createVNode("span", { class: "swiper-pagination-current" }, toDisplayString(index + 1), 1),
                          createTextVNode(" / "),
                          createVNode("span", { class: "swiper-pagination-total" }, toDisplayString($props.dataSlider.length), 1)
                        ]),
                        createVNode("div", {
                          class: "swiper-button-next",
                          onClick: ($event) => $setup.goToSlide(index + 1)
                        }, [
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
                        ], 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-7" }, [
                      createVNode("div", { class: "services__item-content" }, [
                        createVNode("h4", {
                          class: "services__item-subtitle",
                          innerHTML: _ctx.$replaceNewLines(item.subtitle)
                        }, null, 8, ["innerHTML"]),
                        createVNode("p", {
                          innerHTML: _ctx.$replaceNewLines(item.desc)
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="${ssrRenderClass([{ move: $setup.isMoving }, "count"])}">${ssrInterpolate($setup.countSwiper)}</div><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/TheSwiper.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const TheSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q]]);
const toggleMixin = {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modalContent: null
    };
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
      document.body.classList.remove("overflow");
    }
  },
  mounted() {
    console.log("mixin mounted");
  }
  // ...
};
const MyDialog_vue_vue_type_style_index_0_scoped_6e62aaac_lang = "";
const _sfc_main$p = {
  name: "my-dialog",
  mixins: [toggleMixin],
  props: {
    item: {
      type: Object,
      required: false
    },
    flag: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showFullscreen() {
      return this.flag;
    }
  },
  mounted() {
    console.log("flag", this.flag);
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.show) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "dialog" }, _attrs))} data-v-6e62aaac><div class="${ssrRenderClass([{ show: _ctx.show, hide: !_ctx.show, fullscreen: $options.showFullscreen }, "dialog__content"])}" data-v-6e62aaac><span class="dialog__close" data-v-6e62aaac></span>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      _push(`<h2 data-v-6e62aaac>${ssrInterpolate($props.item.title)}</h2><p data-v-6e62aaac>${_ctx.$replaceNewLines($props.item.desc)}</p>`);
    }, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/MyDialog.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const MyDialog = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p], ["__scopeId", "data-v-6e62aaac"]]);
const _sfc_main$o = {
  directives: { maska: vMaska },
  props: {
    value: {
      type: String,
      default: ""
    },
    mask: {
      type: String,
      default: null
    },
    label: {
      type: String
    }
  },
  methods: {
    onInput(event) {
      this.$emit("dich", event.target.value);
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_maska = resolveDirective("maska");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "inputbox" }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    value: $props.value,
    type: "text",
    "data-maska": $props.mask
  }, ssrGetDirectiveProps(_ctx, _directive_maska)))}><span>${ssrInterpolate($props.label)}</span><i></i></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/InputBox.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const InputBox = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$n = {
  name: "the-button"
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    href: "",
    class: "button button-click button--orange first__btn wow fadeIn",
    "data-wow-delay": "0.5s"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<b></b><s></s></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheButton.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const TheButton = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
const _sfc_main$m = {
  directives: { maska: vMaska },
  components: {
    InputBox,
    TheButton
  },
  data() {
    return {
      form: {
        name: "",
        tel: "",
        email: "",
        pages: ""
      },
      formName: "feedback"
    };
  },
  methods: {
    fetchForm() {
      this.form.pages = window.location.href;
      this.$emit("create", { data: this.form, form: this.formName });
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InputBox = resolveComponent("InputBox");
  const _component_the_button = resolveComponent("the-button");
  const _directive_maska = resolveDirective("maska");
  _push(`<form${ssrRenderAttrs(_attrs)}><h2>Оставить заявку</h2><div class="wrapper">`);
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.name,
    class: { "has-value": $data.form.name !== "" },
    onDich: ($event) => $data.form.name = $event,
    label: "Ваше имя"
  }, null, _parent));
  _push(ssrRenderComponent(_component_InputBox, mergeProps({
    value: $data.form.tel,
    class: { "has-value": $data.form.tel !== "" },
    onDich: ($event) => $data.form.tel = $event,
    label: "Телефон",
    mask: "+7 ### ###-##-##"
  }, ssrGetDirectiveProps(_ctx, _directive_maska)), null, _parent));
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.email,
    onDich: ($event) => $data.form.email = $event,
    class: { "has-value": $data.form.email !== "" },
    label: "Email"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_the_button, {
    style: { "align-self": "flex-end", "margin-top": "auto" },
    onClick: $options.fetchForm,
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Отправить</span>`);
      } else {
        return [
          createVNode("span", null, "Отправить")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/PostForm.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const PostForm = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const messageMixin = {
  methods: {
    message(mes, status = null, dismissible = false, duration = 3e3) {
      typeof mes === "string" && (mes = {
        title: mes
      });
      const messages = document.getElementById("messages");
      messages.style.display = "block";
      const childCount = messages.childElementCount;
      const interval = setInterval(() => {
        if (messages.childElementCount <= childCount) {
          messages.style.display = "none";
          clearInterval(interval);
        }
      }, 500);
      const messageText = document.createElement("div");
      const messageTitle = document.createElement("div");
      const messageClose = document.createElement("span");
      const messageContent = document.createElement("div");
      const message = document.createElement("div");
      const messageTextInner = document.createElement("div");
      message.classList.add("message");
      status && message.classList.add(status);
      messageTitle.classList.add("message__title");
      messageTitle.textContent = mes.title;
      messageClose.classList.add("message__close");
      messageTitle.appendChild(messageClose);
      if (typeof mes.content !== "undefined") {
        messageContent.classList.add("message__content");
        messageContent.textContent = mes.content;
        messageTextInner.appendChild(messageContent);
      }
      messageTextInner.classList.add("message__text-inner");
      messageTextInner.appendChild(messageTitle);
      messageText.classList.add("message__text");
      messageText.appendChild(messageTextInner);
      message.appendChild(messageText);
      messages.insertBefore(message, messages.childNodes[0]);
      const currentMessage = messages.children[0];
      const mesWidth = currentMessage.querySelector(".message__text").offsetWidth;
      const mesHeight = currentMessage.querySelector(".message__text").offsetHeight;
      gsap.to(currentMessage, {
        height: mesHeight,
        duration: 0.1,
        onComplete: () => {
          gsap.to(currentMessage, {
            marginRight: 0,
            duration: 0.2,
            onComplete: () => {
              gsap.to(currentMessage, {
                width: mesWidth,
                opacity: 1,
                duration: 0.5,
                onComplete: () => {
                  if (!dismissible) {
                    setTimeout(() => {
                      gsap.to(currentMessage, {
                        width: 0,
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                          gsap.to(currentMessage, {
                            height: 0,
                            duration: 0.1,
                            onComplete: () => {
                              currentMessage.remove();
                            }
                          });
                        }
                      });
                    }, duration);
                  }
                  messageClose.addEventListener("click", () => {
                    clearTimeout(handler);
                    gsap.to(currentMessage, {
                      width: 0,
                      opacity: 0,
                      duration: 0.5,
                      onComplete: () => {
                        gsap.to(currentMessage, {
                          height: 0,
                          duration: 0.1,
                          onComplete: () => {
                            currentMessage.remove();
                          }
                        });
                      }
                    });
                  });
                }
              });
            }
          });
        }
      });
      let handler = null;
    }
  }
};
const aos = "";
const AosWrapper_vue_vue_type_style_index_0_scoped_0d6ad053_lang = "";
const _sfc_main$l = {
  mounted() {
    AOS.init();
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "aos-wrapper" }, _attrs))} data-v-0d6ad053>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AosWrapper.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const AosWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l], ["__scopeId", "data-v-0d6ad053"]]);
const _sfc_main$k = {
  name: "section-caption",
  props: {
    sectionCaption: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-caption" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate($props.sectionCaption)}`);
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheSectionCaption.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const TheSectionCaption = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$j = {
  components: {
    TheButton,
    TheSectionCaption,
    AosWrapper
  },
  data() {
    console.log(this.first);
    return {
      first: this.$page.props.first,
      sectionCaption: "DIgital-Агентство"
    };
  },
  methods: {
    ...mapMutations({}),
    showModal() {
      this.$emit("modal");
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AosWrapper = resolveComponent("AosWrapper");
  const _component_the_button = resolveComponent("the-button");
  const _component_the_section_caption = resolveComponent("the-section-caption");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "first",
    class: "first"
  }, _attrs))}><div class="container first-container"><div class="first__wrapper">`);
  _push(ssrRenderComponent(_component_AosWrapper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-up"${_scopeId}><div class="caption"${_scopeId}><h1${_scopeId}>${_ctx.$replaceNewLines($data.first[0].title)}</h1><p${_scopeId}>${ssrInterpolate($data.first[0].desc)}</p></div></div>`);
      } else {
        return [
          createVNode("div", { "data-aos": "fade-up" }, [
            createVNode("div", { class: "caption" }, [
              createVNode("h1", {
                innerHTML: _ctx.$replaceNewLines($data.first[0].title)
              }, null, 8, ["innerHTML"]),
              createVNode("p", null, toDisplayString($data.first[0].desc), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_button, {
    class: "button button-click button--orange first__btn",
    onClick: [() => {
    }, $options.showModal]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($data.first[0].btn)}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($data.first[0].btn), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="bg__img"><svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="490px" height="488px" viewBox="0 0 490 488" enable-background="new 0 0 1200 581" xml:space="preserve"><polygon fill="#EBF7F9" points="0,0 197.969,487.953 282.661,281.865 489.63,197.88 "></polygon></svg></div></div>`);
  _push(ssrRenderComponent(_component_the_section_caption, { sectionCaption: $data.sectionCaption }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/First.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const firstComponent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const First = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: firstComponent
}, Symbol.toStringTag, { value: "Module" }));
const swiper_min = "";
const navigation_min = "";
const pagination_min = "";
const _sfc_main$i = {
  props: {
    services: Array
  },
  components: {
    Swiper,
    SwiperSlide,
    TheSectionCaption,
    useSwiper,
    TheSwiper
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g;
    console.log((_b = (_a = this.$page.props.services[0]) == null ? void 0 : _a.slider[0]) == null ? void 0 : _b.slider_thumb);
    const activeIndex = ref(0);
    return {
      sectionCaption: "Services",
      desc: (_c = this.$page.props.services[0]) == null ? void 0 : _c.desc,
      slider: (_e = (_d = this.$page.props.services[0]) == null ? void 0 : _d.slider[0]) == null ? void 0 : _e.slider_item,
      slider_thumb: (_g = (_f = this.$page.props.services[0]) == null ? void 0 : _f.slider[0]) == null ? void 0 : _g.slider_thumb,
      slideIndex: 1,
      activeIndex
    };
  },
  methods: {
    goToSlide(slideNumber) {
      console.log(slideNumber);
      this.$refs.mySwiper.goToSlide(slideNumber);
    },
    activeIndexChanged(slideNumber) {
      this.activeIndex = slideNumber - 1;
    }
  },
  computed: {},
  watch: {}
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AosWrapper = resolveComponent("AosWrapper");
  const _component_the_swiper = resolveComponent("the-swiper");
  const _component_the_section_caption = resolveComponent("the-section-caption");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "services",
    class: "services"
  }, _attrs))}><div class="container services-container">`);
  _push(ssrRenderComponent(_component_AosWrapper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-up"${_scopeId}><div class="services__header"${_scopeId}><p${_scopeId}>${ssrInterpolate($data.desc)}</p></div></div>`);
      } else {
        return [
          createVNode("div", { "data-aos": "fade-up" }, [
            createVNode("div", { class: "services__header" }, [
              createVNode("p", null, toDisplayString($data.desc), 1)
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
        _push2(`<div data-aos="fade-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="50"${_scopeId}><div class="services__wrapper wow fadeIn" data-wow-delay="0.4s"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_the_swiper, {
          ref: "mySwiper",
          activeIndex: $data.activeIndex,
          onGoToSlide: $options.goToSlide,
          onActiveIndexChanged: $options.activeIndexChanged,
          dataSlider: $data.slider ? $data.slider : []
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-in",
            "data-aos-easing": "ease-out-cubic",
            "data-aos-duration": "1000",
            "data-aos-delay": "50"
          }, [
            createVNode("div", {
              class: "services__wrapper wow fadeIn",
              "data-wow-delay": "0.4s"
            }, [
              createVNode(_component_the_swiper, {
                ref: "mySwiper",
                activeIndex: $data.activeIndex,
                onGoToSlide: $options.goToSlide,
                onActiveIndexChanged: $options.activeIndexChanged,
                dataSlider: $data.slider ? $data.slider : []
              }, null, 8, ["activeIndex", "onGoToSlide", "onActiveIndexChanged", "dataSlider"])
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
        _push2(`<div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay="50"${_scopeId}><div class="services__wrapper__text"${_scopeId}><!--[-->`);
        ssrRenderList($data.slider_thumb, (item, index) => {
          _push2(`<div class="${ssrRenderClass([{ active: $data.activeIndex === index }, "thumb__item"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.title)}</span></div>`);
        });
        _push2(`<!--]--></div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-up",
            "data-aos-easing": "ease-out-cubic",
            "data-aos-delay": "50"
          }, [
            createVNode("div", { class: "services__wrapper__text" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($data.slider_thumb, (item, index) => {
                return openBlock(), createBlock("div", {
                  class: ["thumb__item", { active: $data.activeIndex === index }],
                  key: index
                }, [
                  createVNode("span", {
                    onClick: ($event) => $options.goToSlide(index)
                  }, toDisplayString(item.title), 9, ["onClick"])
                ], 2);
              }), 128))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_section_caption, {
    sectionCaption: $data.sectionCaption,
    class: "color"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Services.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const servicesComponent = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const Services = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: servicesComponent
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    Link
  },
  setup(props) {
    const tiltableItem = ref(null);
    const mobile = ref(null);
    onMounted(async () => {
      await new Promise((resolve) => {
        const interval = setInterval(() => {
          if (tiltableItem.value && mobile.value) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });
      const elements = tiltableItem.value;
      Array.prototype.forEach.call(elements, function(el) {
        VanillaTilt.init(el, {
          max: 10,
          speed: 400
        });
      });
    });
    return { tiltableItem, mobile };
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<div class="porfolio__item"><a class="main-container shadow-bottom" stas="Poollavka"${ssrRenderAttr("href", "http://" + item.subtitle)} target="_blank" rel="noopener"><img${ssrRenderAttr("src", item.img)} alt=""><div class="contentBx"><div><img${ssrRenderAttr("src", item.bg_img)} alt=""></div></div></a><a class="porfolio__item-mobile"><img${ssrRenderAttr("src", item.img_mobile)} alt=""></a><div class="porfolio__item__logo"><img${ssrRenderAttr("src", item.img_logo)} alt=""></div><div class="porfolio__item__text"><span>${ssrInterpolate(item.title)}</span><a>${ssrInterpolate(item.subtitle)}</a></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/TheItemList.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const TheItemList = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$g = {
  components: {
    Link,
    TheItemList,
    TheButton,
    TheSectionCaption
  },
  props: {
    portfolio: Array
  },
  data() {
    var _a, _b, _c, _d, _e;
    console.log();
    return {
      title: (_a = this.portfolio[0]) == null ? void 0 : _a.title,
      more: (_b = this.portfolio[0]) == null ? void 0 : _b.more,
      items: (_c = this.portfolio[0]) == null ? void 0 : _c.items,
      setBtn: (_d = this.portfolio[0]) == null ? void 0 : _d.setBtn,
      sectionCaption: "Portfolio",
      componentPage: (_e = this.$inertia.page) == null ? void 0 : _e.component,
      itemsToDisplay: []
    };
  },
  methods: {
    observeSentinel() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadMoreItems();
            }
          });
        },
        { threshold: 1 }
      );
      observer.observe(this.$refs.sentinel);
    },
    loadMoreItems() {
      var _a, _b, _c, _d;
      if (((_a = this.portfolio[0]) == null ? void 0 : _a.items) && ((_b = this.portfolio[0]) == null ? void 0 : _b.items.length)) {
        const totalItems = (_c = this.portfolio[0]) == null ? void 0 : _c.items.length;
        const displayedItems = this.itemsToDisplay.length;
        if (displayedItems < totalItems) {
          const remainingItems = (_d = this.portfolio[0]) == null ? void 0 : _d.items.slice(
            displayedItems,
            displayedItems + 10
          );
          this.itemsToDisplay = [...this.itemsToDisplay, ...remainingItems];
        }
      }
    }
  },
  watch: {},
  mounted() {
    var _a;
    this.itemsToDisplay = (_a = this.portfolio[0]) == null ? void 0 : _a.items.slice(0, 10);
    this.observeSentinel();
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AosWrapper = resolveComponent("AosWrapper");
  const _component_Link = resolveComponent("Link");
  const _component_the_item_list = resolveComponent("the-item-list");
  const _component_the_button = resolveComponent("the-button");
  const _component_the_section_caption = resolveComponent("the-section-caption");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "porfolio",
    class: "porfolio"
  }, _attrs))}><div class="container porfolio-container">`);
  _push(ssrRenderComponent(_component_AosWrapper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-in" data-aos-easing="ease-out-cubic" data-aos-delay="50"${_scopeId}>`);
        if ($data.componentPage === "Home") {
          _push2(`<div class="porfolio__header wow fadeIn" data-wow-delay="0.2s"${_scopeId}><h2${_scopeId}>${_ctx.$replaceNewLines($data.title)}</h2>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("project")
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="more"${_scopeId2}><span${_scopeId2}>${ssrInterpolate($data.more)}</span><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_6_2)"${_scopeId2}><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"${_scopeId2}></path><rect x="7" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="3" y="5" width="2" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_6_2"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></div>`);
              } else {
                return [
                  createVNode("div", { class: "more" }, [
                    createVNode("span", null, toDisplayString($data.more), 1),
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
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-in",
            "data-aos-easing": "ease-out-cubic",
            "data-aos-delay": "50"
          }, [
            $data.componentPage === "Home" ? (openBlock(), createBlock("div", {
              key: 0,
              class: "porfolio__header wow fadeIn",
              "data-wow-delay": "0.2s"
            }, [
              createVNode("h2", {
                innerHTML: _ctx.$replaceNewLines($data.title)
              }, null, 8, ["innerHTML"]),
              createVNode(_component_Link, {
                href: _ctx.route("project")
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "more" }, [
                    createVNode("span", null, toDisplayString($data.more), 1),
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
                ]),
                _: 1
              }, 8, ["href"])
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_AosWrapper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="600" data-aos-delay="50"${_scopeId}><div class="porfolio__wrapper wow fadeIn" data-wow-delay="0.2s"${_scopeId}>`);
        if ($data.itemsToDisplay.length > 0) {
          _push2(ssrRenderComponent(_component_the_item_list, { items: $data.itemsToDisplay }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div style="${ssrRenderStyle({ "height": "1px" })}"${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-up",
            "data-aos-easing": "ease-out-cubic",
            "data-aos-duration": "600",
            "data-aos-delay": "50"
          }, [
            createVNode("div", {
              class: "porfolio__wrapper wow fadeIn",
              "data-wow-delay": "0.2s"
            }, [
              $data.itemsToDisplay.length > 0 ? (openBlock(), createBlock(_component_the_item_list, {
                key: 0,
                items: $data.itemsToDisplay
              }, null, 8, ["items"])) : createCommentVNode("", true),
              createVNode("div", {
                ref: "sentinel",
                style: { "height": "1px" }
              }, null, 512)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($data.componentPage === "Home") {
    _push(`<div class="porfolio__footer">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("project")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_the_button, { class: "button button-click button--orange first__btn" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<span${_scopeId2}>Смотреть все</span>`);
              } else {
                return [
                  createVNode("span", null, "Смотреть все")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_the_button, { class: "button button-click button--orange first__btn" }, {
              default: withCtx(() => [
                createVNode("span", null, "Смотреть все")
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_the_section_caption, { sectionCaption: $data.sectionCaption }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Portfolio.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const portfolioComponent = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const Portfolio = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: portfolioComponent
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  name: "the-more-button"
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { "cursor": "pointer" },
    class: "more",
    href: ""
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_2)"><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"></path><rect x="7" y="5" width="2" height="2" fill="white"></rect><rect x="3" y="5" width="2" height="2" fill="white"></rect></g><defs><clipPath id="clip0_6_2"><rect width="38" height="12" fill="white"></rect></clipPath></defs></svg></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheMoreButton.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const TheMoreButton = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$e = {
  components: {
    TheMoreButton,
    TheButton,
    TheSectionCaption
  },
  data() {
    var _a, _b, _c, _d, _e;
    return {
      subtitle: (_a = this.$page.props.company[0]) == null ? void 0 : _a.subtitle,
      title: (_b = this.$page.props.company[0]) == null ? void 0 : _b.title,
      text: (_c = this.$page.props.company[0]) == null ? void 0 : _c.text,
      desc: (_d = this.$page.props.company[0]) == null ? void 0 : _d.desc,
      more: (_e = this.$page.props.company[0]) == null ? void 0 : _e.more,
      sectionCaption: "Company"
    };
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AosWrapper = resolveComponent("AosWrapper");
  const _component_the_more_button = resolveComponent("the-more-button");
  const _component_the_section_caption = resolveComponent("the-section-caption");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "about"
  }, _attrs))}><div class="container about-container">`);
  _push(ssrRenderComponent(_component_AosWrapper, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="50"${_scopeId}><div class="about__header wow fadeIn" data-wow-delay="0.4s"${_scopeId}><h2${_scopeId}>${$data.subtitle}</h2></div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-in",
            "data-aos-easing": "ease-out-cubic",
            "data-aos-duration": "1000",
            "data-aos-delay": "50"
          }, [
            createVNode("div", {
              class: "about__header wow fadeIn",
              "data-wow-delay": "0.4s"
            }, [
              createVNode("h2", { innerHTML: $data.subtitle }, null, 8, ["innerHTML"])
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
        _push2(`<div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay="100"${_scopeId}><div class="about__wrapper"${_scopeId}><div class="row about__wrapper-content"${_scopeId}><div class="col-xl-6 wow fadeIn" data-wow-delay="0.4s"${_scopeId}><div class="about__item-title-container"${_scopeId}><h3 class="about__item-title"${_scopeId}>${_ctx.$replaceNewLines($data.title)}</h3></div></div><div class="col-xl-6 wow fadeIn" data-wow-delay="0.4s"${_scopeId}><div class="about__item-right"${_scopeId}><h3 class="about__item-subtitle"${_scopeId}>${_ctx.$replaceNewLines($data.text)}</h3><p${_scopeId}>${ssrInterpolate($data.desc)}</p>`);
        _push2(ssrRenderComponent(_component_the_more_button, { class: "more" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>${ssrInterpolate($data.more)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString($data.more), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-up",
            "data-aos-easing": "ease-out-cubic",
            "data-aos-delay": "100"
          }, [
            createVNode("div", { class: "about__wrapper" }, [
              createVNode("div", { class: "row about__wrapper-content" }, [
                createVNode("div", {
                  class: "col-xl-6 wow fadeIn",
                  "data-wow-delay": "0.4s"
                }, [
                  createVNode("div", { class: "about__item-title-container" }, [
                    createVNode("h3", {
                      class: "about__item-title",
                      innerHTML: _ctx.$replaceNewLines($data.title)
                    }, null, 8, ["innerHTML"])
                  ])
                ]),
                createVNode("div", {
                  class: "col-xl-6 wow fadeIn",
                  "data-wow-delay": "0.4s"
                }, [
                  createVNode("div", { class: "about__item-right" }, [
                    createVNode("h3", {
                      class: "about__item-subtitle",
                      innerHTML: _ctx.$replaceNewLines($data.text)
                    }, null, 8, ["innerHTML"]),
                    createVNode("p", null, toDisplayString($data.desc), 1),
                    createVNode(_component_the_more_button, { class: "more" }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString($data.more), 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_section_caption, {
    sectionCaption: $data.sectionCaption,
    class: "color"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Company.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const companyComponent = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const Company = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: companyComponent
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  props: {
    row: {
      type: Object,
      required: true
    },
    contact: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-left" }, _attrs))}><h2>${_ctx.$replaceNewLines($props.row.title)}</h2><p>${ssrInterpolate($props.row.desc)}</p><div class="order-contacts"><a class="order-contacts-tel" href="{{contact.phone}}">${ssrInterpolate($props.contact.phone)}</a><a class="order-contacts-mail" href="mailto:{{contact.email}}">${ssrInterpolate($props.contact.email)}</a></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/TheOrderContent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const TheOrderContent = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const BudgetDropdown_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = {
  name: "BudgetDropdown",
  props: {
    placeholder: {
      type: String,
      default: "Бюджет проекта"
    },
    options: {
      type: Array,
      default: () => [1, 2, 3, 4]
    }
  },
  methods: {
    toggleDropdown(e2) {
      e2.target.closest(".dropdown").classList.toggle("active");
    },
    selectOption(e2) {
      const selectedOption = e2.target.closest("div").textContent.trim();
      const textBox = e2.target.closest(".dropdown").querySelector(".textBox");
      textBox.value = selectedOption;
      this.$emit("update:modelValue", selectedOption);
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown" }, _attrs))}><input type="text" class="textBox def"${ssrRenderAttr("placeholder", $props.placeholder)} readonly><div class="option"><!--[-->`);
  ssrRenderList($props.options, (option) => {
    _push(`<div>${ssrInterpolate(option)}</div>`);
  });
  _push(`<!--]--></div><i></i></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/BudgetDropdown.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const BudgetDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(event) {
      this.$emit("textarea", event.target.value);
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "inputbox in2" }, _attrs))}><textarea${ssrRenderAttr("placeholder", $props.placeholder)}>${ssrInterpolate($props.value)}</textarea><i></i></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/InputTextarea.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const InputTextareaVue = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
function isNullish(val) {
  return [null, void 0, false].indexOf(val) !== -1;
}
function useValue(props, context, dependencies) {
  const { value: baseValue, modelValue, min } = toRefs(props);
  let value = modelValue && modelValue.value !== void 0 ? modelValue : baseValue;
  const initialValue = ref(value.value);
  if (isNullish(value.value)) {
    value = ref(min.value);
  }
  if (Array.isArray(value.value) && value.value.length == 0) {
    throw new Error("Slider v-model must not be an empty array");
  }
  return {
    value,
    initialValue
  };
}
function useClasses(props, context, dependencies) {
  const {
    classes: classes_,
    showTooltip,
    tooltipPosition,
    orientation
  } = toRefs(props);
  const classes = computed(() => ({
    target: "slider-target",
    focused: "slider-focused",
    tooltipFocus: "slider-tooltip-focus",
    tooltipDrag: "slider-tooltip-drag",
    ltr: "slider-ltr",
    rtl: "slider-rtl",
    horizontal: "slider-horizontal",
    vertical: "slider-vertical",
    textDirectionRtl: "slider-txt-dir-rtl",
    textDirectionLtr: "slider-txt-dir-ltr",
    base: "slider-base",
    connects: "slider-connects",
    connect: "slider-connect",
    origin: "slider-origin",
    handle: "slider-handle",
    handleLower: "slider-handle-lower",
    handleUpper: "slider-handle-upper",
    touchArea: "slider-touch-area",
    tooltip: "slider-tooltip",
    tooltipTop: "slider-tooltip-top",
    tooltipBottom: "slider-tooltip-bottom",
    tooltipLeft: "slider-tooltip-left",
    tooltipRight: "slider-tooltip-right",
    tooltipHidden: "slider-tooltip-hidden",
    active: "slider-active",
    draggable: "slider-draggable",
    tap: "slider-state-tap",
    drag: "slider-state-drag",
    // Unimplemented
    pips: "slider-pips",
    pipsHorizontal: "slider-pips-horizontal",
    pipsVertical: "slider-pips-vertical",
    marker: "slider-marker",
    markerHorizontal: "slider-marker-horizontal",
    markerVertical: "slider-marker-vertical",
    markerNormal: "slider-marker-normal",
    markerLarge: "slider-marker-large",
    markerSub: "slider-marker-sub",
    value: "slider-value",
    valueHorizontal: "slider-value-horizontal",
    valueVertical: "slider-value-vertical",
    valueNormal: "slider-value-normal",
    valueLarge: "slider-value-large",
    valueSub: "slider-value-sub",
    ...classes_.value
  }));
  const classList = computed(() => {
    const classList2 = { ...classes.value };
    Object.keys(classList2).forEach((className) => {
      classList2[className] = Array.isArray(classList2[className]) ? classList2[className].filter((c2) => c2 !== null).join(" ") : classList2[className];
    });
    if (showTooltip.value !== "always") {
      classList2.target += ` ${showTooltip.value === "drag" ? classList2.tooltipDrag : classList2.tooltipFocus}`;
    }
    if (orientation.value === "horizontal") {
      classList2.tooltip += tooltipPosition.value === "bottom" ? ` ${classList2.tooltipBottom}` : ` ${classList2.tooltipTop}`;
    }
    if (orientation.value === "vertical") {
      classList2.tooltip += tooltipPosition.value === "right" ? ` ${classList2.tooltipRight}` : ` ${classList2.tooltipLeft}`;
    }
    return classList2;
  });
  return {
    classList
  };
}
function useTooltip(props, context, dependencies) {
  const { format, step } = toRefs(props);
  const value = dependencies.value;
  const classList = dependencies.classList;
  const tooltipFormat = computed(() => {
    if (!format || !format.value) {
      return wnumb({ decimals: step.value >= 0 ? 0 : 2 });
    }
    if (typeof format.value == "function") {
      return { to: format.value };
    }
    return wnumb({ ...format.value });
  });
  const tooltipsFormat = computed(() => {
    return Array.isArray(value.value) ? value.value.map((v2) => tooltipFormat.value) : tooltipFormat.value;
  });
  const tooltipsMerge = (slider, threshold, separator) => {
    var textIsRtl = getComputedStyle(slider).direction === "rtl";
    var isRtl = slider.noUiSlider.options.direction === "rtl";
    var isVertical = slider.noUiSlider.options.orientation === "vertical";
    var tooltips = slider.noUiSlider.getTooltips();
    var origins = slider.noUiSlider.getOrigins();
    tooltips.forEach(function(tooltip, index) {
      if (tooltip) {
        origins[index].appendChild(tooltip);
      }
    });
    slider.noUiSlider.on("update", function(values, handle, unencoded, tap, positions) {
      var pools = [[]];
      var poolPositions = [[]];
      var poolValues = [[]];
      var atPool = 0;
      if (tooltips[0]) {
        pools[0][0] = 0;
        poolPositions[0][0] = positions[0];
        poolValues[0][0] = tooltipFormat.value.to(parseFloat(values[0]));
      }
      for (var i2 = 1; i2 < values.length; i2++) {
        if (!tooltips[i2] || values[i2] - values[i2 - 1] > threshold) {
          atPool++;
          pools[atPool] = [];
          poolValues[atPool] = [];
          poolPositions[atPool] = [];
        }
        if (tooltips[i2]) {
          pools[atPool].push(i2);
          poolValues[atPool].push(tooltipFormat.value.to(parseFloat(values[i2])));
          poolPositions[atPool].push(positions[i2]);
        }
      }
      pools.forEach(function(pool, poolIndex) {
        var handlesInPool = pool.length;
        for (var j2 = 0; j2 < handlesInPool; j2++) {
          var handleNumber = pool[j2];
          if (j2 === handlesInPool - 1) {
            var offset = 0;
            poolPositions[poolIndex].forEach(function(value2) {
              offset += 1e3 - value2;
            });
            var direction = isVertical ? "bottom" : "right";
            var last = isRtl ? 0 : handlesInPool - 1;
            var lastOffset = 1e3 - poolPositions[poolIndex][last];
            offset = (textIsRtl && !isVertical ? 100 : 0) + offset / handlesInPool - lastOffset;
            tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
            tooltips[handleNumber].style.display = "block";
            tooltips[handleNumber].style[direction] = offset + "%";
            classList.value.tooltipHidden.split(" ").forEach((c2) => {
              if (tooltips[handleNumber].classList.contains(c2)) {
                tooltips[handleNumber].classList.remove(c2);
              }
            });
          } else {
            tooltips[handleNumber].style.display = "none";
            classList.value.tooltipHidden.split(" ").forEach((c2) => {
              tooltips[handleNumber].classList.add(c2);
            });
          }
        }
      });
    });
  };
  return {
    tooltipFormat,
    tooltipsFormat,
    tooltipsMerge
  };
}
function arraysEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  const array2Sorted = array2.slice().sort();
  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
    return value === array2Sorted[index];
  });
}
function useSlider(props, context, dependencies) {
  const {
    orientation,
    direction,
    tooltips,
    step,
    min,
    max,
    merge,
    id,
    disabled,
    options: options2,
    classes,
    format,
    lazy,
    ariaLabelledby,
    aria
  } = toRefs(props);
  const value = dependencies.value;
  const initialValue = dependencies.initialValue;
  const tooltipsFormat = dependencies.tooltipsFormat;
  const tooltipsMerge = dependencies.tooltipsMerge;
  const tooltipFormat = dependencies.tooltipFormat;
  const classList = dependencies.classList;
  const slider = ref(null);
  const slider$ = ref(null);
  const inited = ref(false);
  const defaultOptions = computed(() => {
    let defaultOptions2 = {
      cssPrefix: "",
      cssClasses: classList.value,
      orientation: orientation.value,
      direction: direction.value,
      tooltips: tooltips.value ? tooltipsFormat.value : false,
      connect: "lower",
      start: isNullish(value.value) ? min.value : value.value,
      range: {
        "min": min.value,
        "max": max.value
      }
    };
    if (step.value > 0) {
      defaultOptions2.step = step.value;
    }
    if (Array.isArray(value.value)) {
      defaultOptions2.connect = true;
    }
    if (ariaLabelledby && ariaLabelledby.value || aria && Object.keys(aria.value).length) {
      let handles = Array.isArray(value.value) ? value.value : [value.value];
      defaultOptions2.handleAttributes = handles.map((h2) => Object.assign({}, aria.value, ariaLabelledby && ariaLabelledby.value ? {
        "aria-labelledby": ariaLabelledby.value
      } : {}));
    }
    if (format.value) {
      defaultOptions2.ariaFormat = tooltipFormat.value;
    }
    return defaultOptions2;
  });
  const sliderProps = computed(() => {
    let sliderProps2 = {
      id: id && id.value ? id.value : void 0
    };
    if (disabled.value) {
      sliderProps2.disabled = true;
    }
    return sliderProps2;
  });
  const isRange = computed(() => {
    return Array.isArray(value.value);
  });
  const reset = () => {
    updateValue(initialValue.value);
  };
  const getSliderValue = () => {
    let sliderValue = slider$.value.get();
    return Array.isArray(sliderValue) ? sliderValue.map((v2) => parseFloat(v2)) : parseFloat(sliderValue);
  };
  const update = (val, triggerChange = true) => {
    slider$.value.set(val, triggerChange);
  };
  const updateValue = (val) => {
    context.emit("input", val);
    context.emit("update:modelValue", val);
    context.emit("update", val);
  };
  const init = () => {
    slider$.value = nouislider.create(slider.value, Object.assign({}, defaultOptions.value, options2.value));
    if (tooltips.value && isRange.value && merge.value >= 0) {
      tooltipsMerge(slider.value, merge.value, " - ");
    }
    slider$.value.on("set", () => {
      const sliderValue = getSliderValue();
      context.emit("change", sliderValue);
      context.emit("set", sliderValue);
      if (lazy.value) {
        updateValue(sliderValue);
      }
    });
    slider$.value.on("update", () => {
      if (!inited.value) {
        return;
      }
      const sliderValue = getSliderValue();
      if (isRange.value && arraysEqual(value.value, sliderValue) || !isRange.value && value.value == sliderValue) {
        context.emit("update", sliderValue);
        return;
      }
      if (!lazy.value) {
        updateValue(sliderValue);
      }
    });
    slider$.value.on("start", () => {
      context.emit("start", getSliderValue());
    });
    slider$.value.on("end", () => {
      context.emit("end", getSliderValue());
    });
    slider$.value.on("slide", () => {
      context.emit("slide", getSliderValue());
    });
    slider$.value.on("drag", () => {
      context.emit("drag", getSliderValue());
    });
    slider.value.querySelectorAll("[data-handle]").forEach((handle) => {
      handle.onblur = () => {
        if (!slider.value) {
          return;
        }
        classList.value.focused.split(" ").forEach((c2) => {
          slider.value.classList.remove(c2);
        });
      };
      handle.onfocus = () => {
        classList.value.focused.split(" ").forEach((c2) => {
          slider.value.classList.add(c2);
        });
      };
    });
    inited.value = true;
  };
  const destroy = () => {
    slider$.value.off();
    slider$.value.destroy();
    slider$.value = null;
  };
  const refresh = (n2, o2) => {
    inited.value = false;
    destroy();
    init();
  };
  onMounted(init);
  onUnmounted(destroy);
  watch(isRange, refresh, { immediate: false });
  watch(min, refresh, { immediate: false });
  watch(max, refresh, { immediate: false });
  watch(step, refresh, { immediate: false });
  watch(orientation, refresh, { immediate: false });
  watch(direction, refresh, { immediate: false });
  watch(tooltips, refresh, { immediate: false });
  watch(merge, refresh, { immediate: false });
  watch(format, refresh, { immediate: false, deep: true });
  watch(options2, refresh, { immediate: false, deep: true });
  watch(classes, refresh, { immediate: false, deep: true });
  watch(value, (value2, old) => {
    if (!old) {
      return;
    }
    if (
      // If both old and new has multiple handles
      // and the number of handles decreased
      typeof old === "object" && typeof value2 === "object" && value2 && Object.keys(old) > Object.keys(value2) || // If the old had multiple handles but
      // if it decreased to single
      typeof old === "object" && typeof value2 !== "object" || // Or has no value at all
      isNullish(value2)
    ) {
      refresh();
    }
  }, { immediate: false });
  watch(value, (newValue) => {
    if (isNullish(newValue)) {
      update(min.value, false);
      return;
    }
    let sliderValue = getSliderValue();
    if (isRange.value && !Array.isArray(sliderValue)) {
      sliderValue = [sliderValue];
    }
    if (isRange.value && !arraysEqual(newValue, sliderValue) || !isRange.value && newValue != sliderValue) {
      update(newValue, false);
    }
  }, { deep: true });
  return {
    slider,
    slider$,
    isRange,
    sliderProps,
    init,
    destroy,
    refresh,
    update,
    reset
  };
}
const valueProps = {
  value: {
    validator: function(p2) {
      return (p3) => typeof p3 === "number" || p3 instanceof Array || p3 === null || p3 === void 0 || p3 === false;
    },
    required: false
  },
  modelValue: {
    validator: function(p2) {
      return (p3) => typeof p3 === "number" || p3 instanceof Array || p3 === null || p3 === void 0 || p3 === false;
    },
    required: false
  }
};
const _sfc_main$a = {
  name: "Slider",
  emits: [
    "input",
    "update:modelValue",
    "start",
    "slide",
    "drag",
    "update",
    "change",
    "set",
    "end"
  ],
  props: {
    ...valueProps,
    id: {
      type: [String, Number],
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    },
    step: {
      type: Number,
      required: false,
      default: 1
    },
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    direction: {
      type: String,
      required: false,
      default: "ltr"
    },
    tooltips: {
      type: Boolean,
      required: false,
      default: true
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    merge: {
      type: Number,
      required: false,
      default: -1
    },
    format: {
      type: [Object, Function, Boolean],
      required: false,
      default: null
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    showTooltip: {
      type: String,
      required: false,
      default: "always"
    },
    tooltipPosition: {
      type: String,
      required: false,
      default: null
    },
    lazy: {
      type: Boolean,
      required: false,
      default: true
    },
    ariaLabelledby: {
      type: String,
      required: false,
      default: void 0
    },
    aria: {
      required: false,
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    const value = useValue(props);
    const classes = useClasses(props);
    const tooltip = useTooltip(props, context, {
      value: value.value,
      classList: classes.classList
    });
    const slider = useSlider(props, context, {
      value: value.value,
      initialValue: value.initialValue,
      tooltipFormat: tooltip.tooltipFormat,
      tooltipsFormat: tooltip.tooltipsFormat,
      tooltipsMerge: tooltip.tooltipsMerge,
      classList: classes.classList
    });
    return {
      ...classes,
      ...tooltip,
      ...slider
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps(_ctx.sliderProps, { ref: "slider" }, _attrs))}></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/slider/src/Slider.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Slider = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const SliderForm_vue_vue_type_style_index_0_lang = "";
const default_css_vue_type_style_index_1_src_true_lang = "";
const SliderForm_vue_vue_type_style_index_2_lang = "";
const _sfc_main$9 = {
  components: { Slider },
  props: {
    value: {
      type: Array,
      default: [5e4, 2e5]
    }
  },
  data: () => ({
    value: [5e3, 1e5],
    min: 5e3,
    max: 1e6,
    format: function(value) {
      return `${Math.floor(value / 1e3)} 000 ₽`;
    }
  }),
  methods: {
    updateBudget(value) {
      this.$emit("update:budget", value);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Slider = resolveComponent("Slider");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-price" }, _attrs))}><div class="inputbox"><span>Бюджет проекта</span>`);
  _push(ssrRenderComponent(_component_Slider, {
    value: $props.value,
    min: _ctx.min,
    max: _ctx.max,
    onInput: $options.updateBudget,
    format: _ctx.format
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/SliderForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SliderForm = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  props: ["modelValue"],
  methods: {
    onChange(event) {
      this.$emit("uploadFile", event.target.files);
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "order__upload" }, _attrs))}><label class="file-input__label" for="myfile"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8545 9.96878L10.6797 11.1438L7.38924 14.4342C6.10061 15.7225 4.00324 15.7225 2.71384 14.4337C1.42467 13.1449 1.42503 11.0477 2.71384 9.75877L4.5944 7.87803L10.198 2.27443C11.0792 1.39327 12.5139 1.39327 13.3953 2.27443C14.2765 3.15595 14.2765 4.59019 13.3953 5.47175L9.78949 9.07723L8.36797 10.4986L6.51495 12.3518C6.05288 12.8138 5.30105 12.8133 4.83935 12.3518C4.37728 11.8897 4.37728 11.1377 4.83935 10.6756L7.52566 7.98948L8.11352 7.40126L10.6249 4.89022L9.84196 4.10745L6.74307 7.20635L4.05639 9.8937C3.16319 10.7865 3.16301 12.2409 4.05639 13.1348C4.95012 14.0282 6.40431 14.0282 7.2975 13.1348L8.9874 11.4447L10.5722 9.85996L14.1775 6.2543C15.4907 4.94148 15.4907 2.80502 14.1775 1.49161C12.8646 0.178416 10.7278 0.178416 9.41477 1.49161L6.65956 4.24718L3.91141 6.99533L1.93138 8.97572C0.210902 10.696 0.210902 13.4958 1.93138 15.2162C3.65186 16.9369 6.45126 16.9369 8.17188 15.2162L12.637 10.7511L14.8207 8.56753L14.0383 7.78457L11.8545 9.96878Z" fill="#00779F"></path></svg> Прикрепить файл </label><input class="input file-input" id="myfile" multiple type="file"></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/FileUploader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const FileUploader = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  directives: { maska: vMaska },
  components: {
    TheButton,
    BudgetDropdown,
    InputBox,
    InputTextareaVue,
    FileUploader,
    SliderForm
  },
  mixins: [messageMixin],
  data() {
    return {
      form: {
        name: "",
        tel: "",
        company: "",
        email: "",
        price: [5e4, 2e5],
        budget: "",
        desc: "",
        file: null
      },
      formName: "orderForm",
      filesToUploadShow: false
    };
  },
  methods: {
    updateBudget(value) {
      console.log(value);
      this.form.price = value;
    },
    async fetchForm(data) {
      var _a;
      let pages = window.location.href;
      let formName = data.form;
      const formData = new FormData();
      formData.append("name", data.data.name);
      formData.append("tel", data.data.tel);
      formData.append("company", data.data.company);
      formData.append("email", data.data.email);
      formData.append("price", data.data.price);
      formData.append("desc", data.data.desc);
      if ((_a = data.data.file) == null ? void 0 : _a.length) {
        for (let i2 = 0; i2 < data.data.file.length; i2++) {
          formData.append("file[]", data.data.file[i2]);
        }
      }
      formData.append("pages", pages);
      try {
        const response = await axios.post("/api/form/" + formName, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((res) => {
          console.log(res);
          if (res.data.status) {
            this.showMessage(
              {
                title: "Отправлено",
                content: "Ваша форма успешно отправлена"
              },
              "success",
              false,
              3e3
            );
          }
        });
      } catch (error) {
        console.error(error);
        this.showMessage(
          { title: "Ошибка", content: "Ваша форма не отправлена" },
          "error",
          true,
          3e3
        );
      }
    },
    onSubmit(e2) {
      if (!this.form.name || !this.form.email || !this.form.tel) {
        console.log(this.name);
        this.showMessage(
          { title: "Не отправлено", content: "Заполните обязательные поля" },
          "error",
          false,
          3e3
        );
        const requiredInputs = document.querySelectorAll("[data-input]");
        console.log(requiredInputs);
        requiredInputs.forEach((el) => {
          if (!el.querySelector("input").value) {
            el.classList.add("input--error");
          }
        });
      } else {
        this.fetchForm({ data: this.form, form: this.formName });
      }
    },
    showMessage(mess, status, flag, duration) {
      this.message(mess, status, flag, duration);
    },
    clearError(event, id) {
      console.log(123);
      document.getElementById(id).classList.remove("input--error");
    },
    uploadFile(event) {
      this.form.file = event;
      let ds = this.$refs.fileDisplay;
      ds.innerText = "";
      for (let i2 = 0; i2 < event.length; i2++) {
        let file_name = document.createElement("div");
        file_name.innerText = event[i2].name + " : " + event[i2].size + " kB";
        ds.append(file_name);
      }
      this.filesToUploadShow = true;
    },
    delFiles() {
      console.log(this.form.file);
      this.form.file = null;
      this.filesToUploadShow = false;
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_x_front46order46input = resolveComponent("x-front.order.input");
  const _component_InputBox = resolveComponent("InputBox");
  const _component_slider_form = resolveComponent("slider-form");
  const _component_BudgetDropdown = resolveComponent("BudgetDropdown");
  const _component_InputTextareaVue = resolveComponent("InputTextareaVue");
  const _component_file_uploader = resolveComponent("file-uploader");
  const _component_the_button = resolveComponent("the-button");
  const _directive_maska = resolveDirective("maska");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "form" }, _attrs))}><form id="myForm"><div class="form__wrapper">`);
  _push(ssrRenderComponent(_component_x_front46order46input, {
    value: $data.form.name,
    onDich: ($event) => $data.form.name = $event,
    class: { "has-value": $data.form.name !== "" },
    label: "Ваше имя",
    id: "name",
    onClick: ($event) => $options.clearError($event, "name"),
    "data-input": "name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.company,
    onDich: ($event) => $data.form.company = $event,
    class: { "has-value": $data.form.company !== "" },
    label: "Компания"
  }, null, _parent));
  _push(ssrRenderComponent(_component_InputBox, mergeProps({
    value: $data.form.tel,
    onDich: ($event) => $data.form.tel = $event,
    class: { "has-value": $data.form.tel !== "" },
    label: "Телефон",
    mask: "+1 ### ###-##-##",
    id: "tel",
    onClick: ($event) => $options.clearError($event, "tel"),
    "data-input": "tel"
  }, ssrGetDirectiveProps(_ctx, _directive_maska)), null, _parent));
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.email,
    onDich: ($event) => $data.form.email = $event,
    class: { "has-value": $data.form.email !== "" },
    label: "Email",
    id: "email",
    onClick: ($event) => $options.clearError($event, "email"),
    "data-input": "email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_slider_form, {
    value: $data.form.price,
    "onUpdate:budget": $options.updateBudget
  }, null, _parent));
  _push(ssrRenderComponent(_component_BudgetDropdown, {
    options: [1e3, 5e3, 1e4],
    modelValue: $data.form.price,
    "onUpdate:modelValue": ($event) => $data.form.price = $event,
    placeholder: "Бюджет проекта"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BudgetDropdown, {
    options: [1e3, 5e3, 1e4],
    modelValue: $data.form.where,
    "onUpdate:modelValue": ($event) => $data.form.where = $event,
    placeholder: "Откуда узнали о нас"
  }, null, _parent));
  _push(ssrRenderComponent(_component_InputTextareaVue, {
    value: $data.form.desc,
    onTextarea: ($event) => $data.form.desc = $event,
    placeholder: "Откуда узнали о нас"
  }, null, _parent));
  _push(`<div class="file"><span>В чём заключается задача? Какие сроки реализации?<br> Несколько слов о компании. </span>`);
  _push(ssrRenderComponent(_component_file_uploader, { onUploadFile: $options.uploadFile }, null, _parent));
  _push(`</div><div class="file-display--container" style="${ssrRenderStyle($data.filesToUploadShow == true ? null : { display: "none" })}"><div class="mb-2 small">Список файлов:</div><div class="file-display small" id="file_display"></div><div class="btn-del"><div class="line-1"></div><div class="line-2"></div></div></div><div class="subm">`);
  _push(ssrRenderComponent(_component_the_button, {
    onClick: $options.onSubmit,
    class: "button button--orange first__btn order__btn button-m",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Отправить</span>`);
      } else {
        return [
          createVNode("span", null, "Отправить")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="sogl"> Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности. </p></div></div></form></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/TheOrderForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TheOrderForm = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  components: {
    TheOrderContent,
    TheOrderForm,
    TheSectionCaption
  },
  props: {
    order: Array
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    console.log(this.$page.props.order);
    const order = this.$page.props.order ? this.$page.props.order : this.order;
    return {
      title: order[0].title,
      desc: order[0].desc,
      phone: (_b = (_a = this.$page.props) == null ? void 0 : _a.contact) == null ? void 0 : _b.phone.value,
      email: (_d = (_c = this.$page.props) == null ? void 0 : _c.contact) == null ? void 0 : _d.email.value,
      telegram: (_f = (_e = this.$page.props) == null ? void 0 : _e.contact) == null ? void 0 : _f.telegram.value,
      whatsapp: (_h = (_g = this.$page.props) == null ? void 0 : _g.contact) == null ? void 0 : _h.whatsapp.value,
      address: (_j = (_i = this.$page.props) == null ? void 0 : _i.contact) == null ? void 0 : _j.address.value,
      worktime: (_l = (_k = this.$page.props) == null ? void 0 : _k.contact) == null ? void 0 : _l.worktime.value,
      sectionCaption: "contacts"
    };
  },
  methods: {
    rowOrder() {
      const state = {
        title: this.title,
        desc: this.desc
      };
      return Object.keys(state).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    },
    rowContact() {
      const state = {
        phone: this.phone,
        email: this.email,
        telegram: this.telegram,
        whatsapp: this.whatsapp,
        address: this.address,
        worktime: this.worktime
      };
      return Object.keys(state).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_order_content = resolveComponent("the-order-content");
  const _component_the_order_form = resolveComponent("the-order-form");
  const _component_the_section_caption = resolveComponent("the-section-caption");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "order",
    class: "order"
  }, _attrs))}><div class="container order-container"><div class="order-container__wrapper"><div class="row"><div class="col-xl-6">`);
  _push(ssrRenderComponent(_component_the_order_content, {
    row: $options.rowOrder(),
    contact: $options.rowContact()
  }, null, _parent));
  _push(`</div><div class="col-xl-6">`);
  _push(ssrRenderComponent(_component_the_order_form, null, null, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_the_section_caption, { sectionCaption: $data.sectionCaption }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Order.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const orderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const Order = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: orderComponent
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: {
    Link
  },
  data() {
    return {
      footer: this.$page.props.settings.footer
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container footer-container"><div class="footer__wrapper"><p>2009-${ssrInterpolate($options.currentYear)} ${ssrInterpolate($data.footer)}</p><p>Надёжный партнёр Вашего бизнеса!</p>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("privacy")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Политика конфиденциальности</span>`);
      } else {
        return [
          createVNode("span", null, "Политика конфиденциальности")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TheFooterVue = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  components: {
    Head,
    TheHeader,
    TheAnimateBg,
    TheSwiper,
    MyDialog,
    PostForm,
    firstComponent,
    servicesComponent,
    portfolioComponent,
    companyComponent,
    orderComponent,
    TheFooterVue
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  mixins: [messageMixin],
  methods: {
    showModal(item, flag = false) {
      this.dialogVisible = true;
      document.body.classList.add("overflow");
    },
    showMessage(mess, status, flag, duration) {
      this.message(mess, status, flag, duration);
    },
    async fetchForm(data) {
      console.log(data);
      let form = data.data;
      let formName = data.form;
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("tel", form.tel);
      formData.append("email", form.email);
      formData.append("pages", form.pages);
      try {
        const response = await fetch("/api/form/" + formName, {
          method: "POST",
          body: formData
        });
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.status == true) {
          this.showMessage(
            { title: "Отправлено", content: "Ваша форма успешно отправлена" },
            "success",
            false,
            3e3
          );
        } else {
          this.showMessage(
            { title: "Ошибка", content: "Ваша форма не отправлена" },
            "error",
            true,
            3e3
          );
        }
        this.dialogVisible = false;
      } catch (error) {
        console.error(error);
        this.showMessage(
          { title: "Ошибка", content: "Ваша форма не отправлена" },
          "error",
          true,
          3e3
        );
      }
    },
    lastItems() {
      const portfolio = this.$page.props.portfolio;
      const lastFourItems = portfolio[0].items.slice(-4);
      const modifiedPortfolio = [{ ...portfolio[0], items: lastFourItems }];
      return modifiedPortfolio;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_the_header = resolveComponent("the-header");
  const _component_TheAnimateBg = resolveComponent("TheAnimateBg");
  const _component_first_component = resolveComponent("first-component");
  const _component_services_component = resolveComponent("services-component");
  const _component_portfolio_component = resolveComponent("portfolio-component");
  const _component_company_component = resolveComponent("company-component");
  const _component_order_component = resolveComponent("order-component");
  const _component_my_dialog = resolveComponent("my-dialog");
  const _component_post_form = resolveComponent("post-form");
  const _component_the_footer_vue = resolveComponent("the-footer-vue");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate(_ctx.$page.props.settings.site_name)}</title>`);
      } else {
        return [
          createVNode("title", null, toDisplayString(_ctx.$page.props.settings.site_name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_header, null, null, _parent));
  _push(ssrRenderComponent(_component_TheAnimateBg, null, null, _parent));
  _push(ssrRenderComponent(_component_first_component, { onModal: $options.showModal }, null, _parent));
  _push(ssrRenderComponent(_component_services_component, null, null, _parent));
  _push(ssrRenderComponent(_component_portfolio_component, {
    portfolio: $options.lastItems()
  }, null, _parent));
  _push(ssrRenderComponent(_component_company_component, null, null, _parent));
  _push(ssrRenderComponent(_component_order_component, null, null, _parent));
  _push(ssrRenderComponent(_component_my_dialog, {
    show: $data.dialogVisible,
    "onUpdate:show": ($event) => $data.dialogVisible = $event,
    onAccepted: $options.showModal
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_post_form, { onCreate: $options.fetchForm }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_post_form, { onCreate: $options.fetchForm }, null, 8, ["onCreate"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div id="messages"></div>`);
  _push(ssrRenderComponent(_component_the_footer_vue, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v2 = glob[path];
  if (v2) {
    return typeof v2 === "function" ? v2() : Promise.resolve(v2);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const TheFooter_vue_vue_type_style_index_0_scoped_9db9bea1_lang = "";
const _sfc_main$3 = {
  data() {
    console.log(123);
    console.log(this.$page.props);
    return {};
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-9db9bea1><div class="container footer-container" data-v-9db9bea1><div class="footer__wrapper" data-v-9db9bea1><p data-v-9db9bea1>2009-2023 © Digital-агентство «Ji-Touch»</p><p data-v-9db9bea1>Надёжный партнёр Вашего бизнеса!</p><a href="" data-v-9db9bea1>Политика конфиденциальности</a></div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vue/src/components/TheFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-9db9bea1"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "innerLayout" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { class: "content" }, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Loyauts/InnerLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const InnerLayoutVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: {
    breadcrumbs: {
      type: Object,
      required: true
    }
  },
  components: {
    Link
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="breadcrumbs"><!--[-->`);
  ssrRenderList($props.breadcrumbs, (item, index) => {
    _push(`<!--[-->`);
    if (index === $props.breadcrumbs.length - 1) {
      _push(`<span>${ssrInterpolate(item.title)}</span>`);
    } else {
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route(item.url)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(item.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(item.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    }
    if (index !== $props.breadcrumbs.length - 1) {
      _push(`<span> &gt; </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Breadcrumbs/TheBreadcrumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheBreadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { TheFooter, TheHeader, InnerLayoutVue, TheBreadcrumbs },
  layout: InnerLayoutVue,
  props: {
    title: String,
    bredcrambs: Array,
    panels: Array,
    meta: Array
  },
  methods: {
    handleLinkClick(event) {
      const target = event.target;
      if (target.tagName === "A") {
        event.preventDefault();
        const href = target.getAttribute("href");
        this.$inertia.visit(href);
      }
    }
  },
  data() {
    console.log(this.bredcrambs);
    const components = {};
    for (const item of this.panels) {
      if (item.type === "panel") {
        const componentName = item.alias.charAt(0).toUpperCase() + item.alias.slice(1);
        components[item.alias] = markRaw(
          defineAsyncComponent(
            () => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../Components/Panels/About.vue": () => import("./assets/About-befe7b38.mjs"), "../Components/Panels/Article.vue": () => import("./assets/Article-4a4740c8.mjs"), "../Components/Panels/Company.vue": () => Promise.resolve().then(() => Company), "../Components/Panels/Contact.vue": () => import("./assets/Contact-75f7e1d3.mjs"), "../Components/Panels/First.vue": () => Promise.resolve().then(() => First), "../Components/Panels/How_we_work.vue": () => import("./assets/How_we_work-d0fb70e4.mjs"), "../Components/Panels/Jobs.vue": () => import("./assets/Jobs-f8f98e8d.mjs"), "../Components/Panels/Order.vue": () => Promise.resolve().then(() => Order), "../Components/Panels/Portfolio.vue": () => Promise.resolve().then(() => Portfolio), "../Components/Panels/Reviews.vue": () => import("./assets/Reviews-a6cdecca.mjs"), "../Components/Panels/Services.vue": () => Promise.resolve().then(() => Services), "../Components/Panels/Services_inner.vue": () => import("./assets/Services_inner-e119fed6.mjs") }), `../Components/Panels/${componentName}.vue`)
          )
        );
      }
    }
    return {
      components
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_the_header = resolveComponent("the-header");
  const _component_the_breadcrumbs = resolveComponent("the-breadcrumbs");
  const _component_the_footer = resolveComponent("the-footer");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate($props.meta.seo_title)}</title><meta name="description"${ssrRenderAttr("content", $props.meta.description ?? _ctx.$page.props.settings.description)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", $props.meta.keywords ?? _ctx.$page.props.settings.keywords)}${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, toDisplayString($props.meta.seo_title), 1),
          createVNode("meta", {
            name: "description",
            content: $props.meta.description ?? _ctx.$page.props.settings.description
          }, null, 8, ["content"]),
          createVNode("meta", {
            name: "keywords",
            content: $props.meta.keywords ?? _ctx.$page.props.settings.keywords
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_header, null, null, _parent));
  _push(`<div class="content">`);
  _push(ssrRenderComponent(_component_the_breadcrumbs, { breadcrumbs: $props.bredcrambs }, null, _parent));
  _push(`<div class="container"><h2>${ssrInterpolate($props.title)}</h2></div><!--[-->`);
  ssrRenderList($props.panels, (item) => {
    _push(`<div>`);
    if (item.type === "panel") {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent($data.components[item.alias]), mergeProps({
        [item.alias || ""]: item.content
      }, item.props), null), _parent);
    } else {
      _push(`<!---->`);
    }
    if (item.type === "text") {
      _push(`<div>${item.content}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_the_footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pages = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pages
}, Symbol.toStringTag, { value: "Module" }));
const firstModule = {
  state: () => ({
    title: "",
    desc: "",
    btn: ""
  }),
  getters: {},
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setDesc(state, desc) {
      state.desc = desc;
    },
    setBtn(state, btn) {
      state.btn = btn;
    }
  },
  actions: {
    async setFirst({ state, commit }, response) {
      try {
        commit("setTitle", response[0].title);
        commit("setDesc", response[0].desc);
        commit("setBtn", response[0].btn);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const servicesModule = {
  state: () => ({
    desc: "",
    slider: [],
    slider_thumb: []
  }),
  getters: {
    SliderThumbWithId(state) {
      return state.slider_thumb.map((item, index) => {
        return { ...item, id: index };
      });
    }
  },
  mutations: {
    setDesc(state, desc) {
      state.desc = desc;
    },
    setSlider(state, slider) {
      state.slider = slider;
    },
    setSliderThumb(state, slider_thumb) {
      state.slider_thumb = slider_thumb;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/services", {
          data: argument,
          params: {}
        });
        commit("setDesc", response.data[0].desc);
        commit("setSlider", response.data[0].slider[0].slider_item);
        commit("setSliderThumb", response.data[0].slider[0].slider_thumb);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const portfolioModule = {
  state: () => ({
    title: "",
    more: "",
    items: [],
    btn: ""
  }),
  getters: {
    lastItems(state) {
      return state.items.slice(-4);
    }
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setMore(state, more) {
      state.more = more;
    },
    setItems(state, items) {
      state.items = items;
    },
    setBtn(state, btn) {
      state.btn = btn;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/portfolio", {
          data: argument,
          params: {}
        });
        console.log(response.data);
        commit("setTitle", response.data[0].title);
        commit("setMore", response.data[0].more);
        commit("setItems", response.data[0].items);
        commit("setBtn", response.data[0].btn);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const companyModule = {
  state: () => ({
    subtitle: "",
    title: "",
    text: "",
    desc: "",
    more: ""
  }),
  getters: {},
  mutations: {
    setSubtitle(state, subtitle) {
      state.subtitle = subtitle;
    },
    setTitle(state, title) {
      state.title = title;
    },
    setText(state, text) {
      state.text = text;
    },
    setDesc(state, desc) {
      state.desc = desc;
    },
    setMore(state, more) {
      state.more = more;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/company", {
          data: argument,
          params: {}
        });
        commit("setSubtitle", response.data[0].subtitle);
        commit("setTitle", response.data[0].title);
        commit("setText", response.data[0].text);
        commit("setDesc", response.data[0].desc);
        commit("setMore", response.data[0].more);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const contactModule = {
  state: () => ({
    phone: "",
    email: "",
    telegram: "",
    whatsapp: "",
    address: "",
    worktime: ""
  }),
  getters: {
    row: (state) => {
      return Object.keys(state).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    }
  },
  mutations: {
    setPhone(state, phone) {
      state.phone = phone;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setTelegram(state, telegram) {
      state.telegram = telegram;
    },
    setWhatsapp(state, whatsapp) {
      state.whatsapp = whatsapp;
    },
    setAddress(state, address) {
      state.address = address;
    },
    setWorktime(state, worktime) {
      state.worktime = worktime;
    },
    setMap(state, map) {
      state.map = map;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/contact", {
          data: argument,
          params: {}
        });
        commit("setPhone", response.data.phone.value);
        commit("setEmail", response.data.email.value);
        commit("setTelegram", response.data.telegram.value);
        commit("setWhatsapp", response.data.whatsapp.value);
        commit("setAddress", response.data.address.value);
        commit("setWorktime", response.data.worktime.value);
        commit("setMap", response.data.map.value);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const orderModule = {
  state: () => ({
    title: "",
    desc: ""
  }),
  getters: {
    row: (state) => {
      return Object.keys(state).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    }
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setDesc(state, desc) {
      state.desc = desc;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/order", {
          data: argument,
          params: {}
        });
        commit("setTitle", response.data[0].title);
        commit("setDesc", response.data[0].desc);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const reviewsModule = {
  state: () => ({
    // тут алиас столбцов : тип данных
    items: []
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/reviews", {
          data: argument,
          params: {}
        });
        console.log(response.data);
        commit("setItems", response.data[0].items);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const jobsModule = {
  state: () => ({
    // тут алиас столбцов : тип данных
    items: []
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/jobs", {
          data: argument,
          params: {}
        });
        console.log(response.data);
        commit("setItems", response.data[0].items);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const aboutModule = {
  state: () => ({
    // тут алиас столбцов : тип данных
    tabs: [],
    slider: []
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setTabs(state, tabs) {
      state.tabs = tabs;
    },
    setSlider(state, slider) {
      state.slider = slider;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/about", {
          data: argument,
          params: {}
        });
        commit("setTabs", response.data[0].tabs);
        commit("setSlider", response.data[0].slider);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const articleModule = {
  state: () => ({
    // тут алиас столбцов : тип данных
    article: ""
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setArticle(state, article) {
      state.article = article;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/article", {
          data: argument,
          params: {}
        });
        commit("setArticle", response.data[0].article);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const cart = {
  state: () => ({
    cart: [],
    count: 0,
    price: 0
  }),
  getters: {
    totalPrice(state) {
      return state.cart.reduce((total, product) => {
        if (product)
          return total + product.price * product.count;
        console.log(state.cart);
      }, 0);
    }
  },
  mutations: {
    addCart(state, product) {
      const index = state.cart.findIndex((item) => item && item.id === product.id);
      if (index === -1) {
        state.cart.push({ ...product, count: 1 });
      } else {
        state.cart[index].count++;
      }
      state.count++;
    },
    deleteCart(state, product) {
      const index = state.cart.findIndex((item) => item && item.id === product.id);
      if (state.cart[index].count > 1) {
        state.cart[index].count--;
      } else {
        state.cart.splice(index, 1);
      }
      state.count--;
    },
    deleteProductCart(state, product) {
      const index = state.cart.findIndex((item) => item && item.id === product.id);
      state.count = state.count - state.cart[index].count;
      state.cart.splice(index, 1);
    },
    removeCart(state) {
      state.count = 0;
      state.cart = [];
    }
  },
  actions: {
    async addCart({ state, commit }, product) {
      commit("addCart", product);
    },
    async deleteCart({ state, commit }, product) {
      commit("deleteCart", product);
    },
    async removeCart({ state, commit }) {
      commit("removeCart");
    },
    async deleteProductCart({ state, commit }, product) {
      commit("deleteProductCart", product);
    }
  },
  namespaced: true
};
const options = {
  state: {
    isAuth: false
  },
  modules: {
    cart,
    article: articleModule,
    first: firstModule,
    services: servicesModule,
    portfolio: portfolioModule,
    company: companyModule,
    contact: contactModule,
    order: orderModule,
    reviews: reviewsModule,
    jobs: jobsModule,
    about: aboutModule
  }
};
if (typeof window !== "undefined") {
  options.plugins = [
    createPersistedState({
      paths: ["cart"]
    })
  ];
}
const store = createStore(options);
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, "symbol" == typeof (o2 = function(t5, r3) {
      if ("object" != typeof t5 || null === t5)
        return t5;
      var n3 = t5[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var e3 = n3.call(t5, "string");
        if ("object" != typeof e3)
          return e3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t5);
    }(e2.key)) ? o2 : String(o2), e2);
  }
  var o2;
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, f(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, m = Array.isArray, g = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, m(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && m(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = g.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && m(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var T2 = 0; T2 < k2.length; ++T2) {
    var N2 = k2[T2], F2 = "object" == typeof N2 && void 0 !== N2.value ? N2.value : h2[N2];
    if (!i2 || null !== F2) {
      var D2 = m(h2) ? "function" == typeof e2 ? e2(n2, N2) : n2 : n2 + (c2 ? "." + N2 : "[" + N2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, T = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, N = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : N(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? C.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : C.arrayLimit, charset: void 0 === t5.charset ? C.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : C.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : C.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : C.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : C.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : C.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : C.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(N(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = T(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, I = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: D(i2) };
    }
    return false;
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && ".*" === r2.wheres[o2])
        return encodeURIComponent(null != (a2 = t5[o2]) ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test(null != (u2 = t5[o2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent(null != (f2 = t5[o2]) ? f2 : "");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), P = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new I(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || m(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : m(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new I(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new I(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.m(r2), this.g(t5, r2));
  }, f2.m = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f(String)), $ = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new P(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Catalog/Cart.vue": __vite_glob_0_0, "./Pages/Catalog/Category.vue": __vite_glob_0_1, "./Pages/Catalog/Product.vue": __vite_glob_0_2, "./Pages/Home.vue": __vite_glob_0_3, "./Pages/Pages.vue": __vite_glob_0_4 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      const app = createSSRApp({ render: () => h$1(App, props) });
      app.config.globalProperties.$replaceNewLines = function(string) {
        return string.replace(/\/\/n/g, "<br>");
      };
      return app.use(plugin).use(store).use($, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
    }
  }),
  20001
);
export {
  AosWrapper as A,
  MyDialog as M,
  TheButton as T,
  _export_sfc as _,
  TheMoreButton as a,
  toggleMixin as t
};
