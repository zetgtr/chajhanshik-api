<template></template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // fetchInfo: 'название модуля + / + fetchInfo'
      fetchInfo: "fetchInfo",
    }),
  },
  mounted() {
    this.fetchInfo();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
      title: (state) => state.order.title,
      desc: (state) => state.order.desc,
      phone: (state) => state.contact.phone,
      email: (state) => state.contact.email,
    }),
  },
  watch: {},
};
</script>

<style lang='scss'>
</style>
