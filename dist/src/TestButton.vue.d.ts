declare const _sfc_main: import("vue").DefineComponent<{}, {
    AButton: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                block: boolean;
                disabled: boolean;
                loading: boolean | {
                    delay?: number | undefined;
                };
                ghost: boolean;
                danger: boolean;
                htmlType: import("ant-design-vue/lib/button/buttonTypes").ButtonHTMLType;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
                        delay?: number | undefined;
                    }>;
                    default: () => boolean | {
                        delay?: number | undefined;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: import("vue").PropType<(event: MouseEvent) => void>;
                };
                onMousedown: {
                    type: import("vue").PropType<(event: MouseEvent) => void>;
                };
            }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "htmlType" | "loading" | "disabled" | "ghost" | "block" | "danger">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
                        delay?: number | undefined;
                    }>;
                    default: () => boolean | {
                        delay?: number | undefined;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: import("vue").PropType<(event: MouseEvent) => void>;
                };
                onMousedown: {
                    type: import("vue").PropType<(event: MouseEvent) => void>;
                };
            }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                block: boolean;
                disabled: boolean;
                loading: boolean | {
                    delay?: number | undefined;
                };
                ghost: boolean;
                danger: boolean;
                htmlType: import("ant-design-vue/lib/button/buttonTypes").ButtonHTMLType;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("ant-design-vue/lib/button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonShape>;
            };
            size: {
                type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
            };
            loading: {
                type: import("vue").PropType<boolean | {
                    delay?: number | undefined;
                }>;
                default: () => boolean | {
                    delay?: number | undefined;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: import("vue").PropType<(event: MouseEvent) => void>;
            };
            onMousedown: {
                type: import("vue").PropType<(event: MouseEvent) => void>;
            };
        }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonType>;
        htmlType: {
            type: import("vue").PropType<import("ant-design-vue/lib/button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonShape>;
        };
        size: {
            type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
        };
        loading: {
            type: import("vue").PropType<boolean | {
                delay?: number | undefined;
            }>;
            default: () => boolean | {
                delay?: number | undefined;
            };
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        block: {
            type: BooleanConstructor;
            default: any;
        };
        danger: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        href: StringConstructor;
        target: StringConstructor;
        title: StringConstructor;
        onClick: {
            type: import("vue").PropType<(event: MouseEvent) => void>;
        };
        onMousedown: {
            type: import("vue").PropType<(event: MouseEvent) => void>;
        };
    }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        block: boolean;
        disabled: boolean;
        loading: boolean | {
            delay?: number | undefined;
        };
        ghost: boolean;
        danger: boolean;
        htmlType: import("ant-design-vue/lib/button/buttonTypes").ButtonHTMLType;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & {
        readonly Group: import("vue").DefineComponent<{
            prefixCls: StringConstructor;
            size: {
                type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
            };
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            size: {
                type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
            };
        }>>, {}>;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
