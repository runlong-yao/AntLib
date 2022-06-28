import { defineComponent, openBlock, createBlock, unref, withCtx, createTextVNode } from "vue";
import { Button } from "ant-design-vue";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u8FD9\u662F\u6D4B\u8BD5\u6309\u94AE");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestButton",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), null, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      });
    };
  }
});
console.log(_sfc_main);
export { _sfc_main as TestButton };
