"use strict";
(self["webpackChunknews"] = self["webpackChunknews"] || []).push([[9973],{

/***/ 99973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ slider)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(37995);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(55501);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-slider/es/index.js + 13 modules
var es = __webpack_require__(6415);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(3634);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(81832);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(23120);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(7606);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 6 modules
var tooltip = __webpack_require__(58462);
;// ./node_modules/antd/es/slider/SliderTooltip.js
"use client";






const SliderTooltip = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    open
  } = props;
  const innerRef = (0,react.useRef)(null);
  const rafRef = (0,react.useRef)(null);
  function cancelKeepAlign() {
    raf["default"].cancel(rafRef.current);
    rafRef.current = null;
  }
  function keepAlign() {
    rafRef.current = (0,raf["default"])(() => {
      var _a;
      (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.forceAlign();
      rafRef.current = null;
    });
  }
  react.useEffect(() => {
    if (open) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }
    return cancelKeepAlign;
  }, [open, props.title]);
  return /*#__PURE__*/react.createElement(tooltip["default"], Object.assign({
    ref: (0,es_ref.composeRef)(innerRef, ref)
  }, props));
});
if (false) {}
/* harmony default export */ const slider_SliderTooltip = (SliderTooltip);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var cssinjs_es = __webpack_require__(52699);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(69449);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js + 1 modules
var style = __webpack_require__(44112);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js + 6 modules
var genComponentStyleHook = __webpack_require__(14254);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(58901);
;// ./node_modules/antd/es/slider/style/index.js




// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    antCls,
    controlSize,
    dotSize,
    marginFull,
    marginPart,
    colorFillContentHover,
    handleColorDisabled,
    calc
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style.resetComponent)(token)), {
      position: 'relative',
      height: controlSize,
      margin: `${(0,cssinjs_es.unit)(marginPart)} ${(0,cssinjs_es.unit)(marginFull)}`,
      padding: 0,
      cursor: 'pointer',
      touchAction: 'none',
      [`&-vertical`]: {
        margin: `${(0,cssinjs_es.unit)(marginFull)} ${(0,cssinjs_es.unit)(marginPart)}`
      },
      [`${componentCls}-rail`]: {
        position: 'absolute',
        backgroundColor: token.railBg,
        borderRadius: token.borderRadiusXS,
        transition: `background-color ${token.motionDurationMid}`
      },
      [`${componentCls}-track,${componentCls}-tracks`]: {
        position: 'absolute',
        transition: `background-color ${token.motionDurationMid}`
      },
      [`${componentCls}-track`]: {
        backgroundColor: token.trackBg,
        borderRadius: token.borderRadiusXS
      },
      [`${componentCls}-track-draggable`]: {
        boxSizing: 'content-box',
        backgroundClip: 'content-box',
        border: 'solid rgba(0,0,0,0)'
      },
      '&:hover': {
        [`${componentCls}-rail`]: {
          backgroundColor: token.railHoverBg
        },
        [`${componentCls}-track`]: {
          backgroundColor: token.trackHoverBg
        },
        [`${componentCls}-dot`]: {
          borderColor: colorFillContentHover
        },
        [`${componentCls}-handle::after`]: {
          boxShadow: `0 0 0 ${(0,cssinjs_es.unit)(token.handleLineWidth)} ${token.colorPrimaryBorderHover}`
        },
        [`${componentCls}-dot-active`]: {
          borderColor: token.dotActiveBorderColor
        }
      },
      [`${componentCls}-handle`]: {
        position: 'absolute',
        width: token.handleSize,
        height: token.handleSize,
        outline: 'none',
        // 扩大选区
        '&::before': {
          content: '""',
          position: 'absolute',
          insetInlineStart: calc(token.handleLineWidth).mul(-1).equal(),
          insetBlockStart: calc(token.handleLineWidth).mul(-1).equal(),
          width: calc(token.handleSize).add(calc(token.handleLineWidth).mul(2)).equal(),
          height: calc(token.handleSize).add(calc(token.handleLineWidth).mul(2)).equal(),
          backgroundColor: 'transparent'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: token.handleSize,
          height: token.handleSize,
          backgroundColor: token.colorBgElevated,
          boxShadow: `0 0 0 ${(0,cssinjs_es.unit)(token.handleLineWidth)} ${token.handleColor}`,
          borderRadius: '50%',
          cursor: 'pointer',
          transition: `
            inset-inline-start ${token.motionDurationMid},
            inset-block-start ${token.motionDurationMid},
            width ${token.motionDurationMid},
            height ${token.motionDurationMid},
            box-shadow ${token.motionDurationMid}
          `
        },
        '&:hover, &:active, &:focus': {
          '&::before': {
            // -(
            //   (token.handleSizeHover - token.handleSize) / 2 +
            //   token.handleLineWidthHover
            // ),
            insetInlineStart: calc(token.handleSizeHover).sub(token.handleSize).div(2).add(token.handleLineWidthHover).mul(-1).equal(),
            insetBlockStart: calc(token.handleSizeHover).sub(token.handleSize).div(2).add(token.handleLineWidthHover).mul(-1).equal(),
            width: calc(token.handleSizeHover).add(calc(token.handleLineWidthHover).mul(2)).equal(),
            height: calc(token.handleSizeHover).add(calc(token.handleLineWidthHover).mul(2)).equal()
          },
          '&::after': {
            boxShadow: `0 0 0 ${(0,cssinjs_es.unit)(token.handleLineWidthHover)} ${token.handleActiveColor}`,
            width: token.handleSizeHover,
            height: token.handleSizeHover,
            insetInlineStart: token.calc(token.handleSize).sub(token.handleSizeHover).div(2).equal(),
            insetBlockStart: token.calc(token.handleSize).sub(token.handleSizeHover).div(2).equal()
          }
        }
      },
      [`&-lock ${componentCls}-handle`]: {
        [`&::before, &::after`]: {
          transition: 'none'
        }
      },
      [`${componentCls}-mark`]: {
        position: 'absolute',
        fontSize: token.fontSize
      },
      [`${componentCls}-mark-text`]: {
        position: 'absolute',
        display: 'inline-block',
        color: token.colorTextDescription,
        textAlign: 'center',
        wordBreak: 'keep-all',
        cursor: 'pointer',
        userSelect: 'none',
        '&-active': {
          color: token.colorText
        }
      },
      [`${componentCls}-step`]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none'
      },
      [`${componentCls}-dot`]: {
        position: 'absolute',
        width: dotSize,
        height: dotSize,
        backgroundColor: token.colorBgElevated,
        border: `${(0,cssinjs_es.unit)(token.handleLineWidth)} solid ${token.dotBorderColor}`,
        borderRadius: '50%',
        cursor: 'pointer',
        transition: `border-color ${token.motionDurationSlow}`,
        pointerEvents: 'auto',
        '&-active': {
          borderColor: token.dotActiveBorderColor
        }
      },
      [`&${componentCls}-disabled`]: {
        cursor: 'not-allowed',
        [`${componentCls}-rail`]: {
          backgroundColor: `${token.railBg} !important`
        },
        [`${componentCls}-track`]: {
          backgroundColor: `${token.trackBgDisabled} !important`
        },
        [`
          ${componentCls}-dot
        `]: {
          backgroundColor: token.colorBgElevated,
          borderColor: token.trackBgDisabled,
          boxShadow: 'none',
          cursor: 'not-allowed'
        },
        [`${componentCls}-handle::after`]: {
          backgroundColor: token.colorBgElevated,
          cursor: 'not-allowed',
          width: token.handleSize,
          height: token.handleSize,
          boxShadow: `0 0 0 ${(0,cssinjs_es.unit)(token.handleLineWidth)} ${handleColorDisabled}`,
          insetInlineStart: 0,
          insetBlockStart: 0
        },
        [`
          ${componentCls}-mark-text,
          ${componentCls}-dot
        `]: {
          cursor: `not-allowed !important`
        }
      },
      [`&-tooltip ${antCls}-tooltip-inner`]: {
        minWidth: 'unset'
      }
    })
  };
};
// ============================ Horizontal ============================
const genDirectionStyle = (token, horizontal) => {
  const {
    componentCls,
    railSize,
    handleSize,
    dotSize,
    marginFull,
    calc
  } = token;
  const railPadding = horizontal ? 'paddingBlock' : 'paddingInline';
  const full = horizontal ? 'width' : 'height';
  const part = horizontal ? 'height' : 'width';
  const handlePos = horizontal ? 'insetBlockStart' : 'insetInlineStart';
  const markInset = horizontal ? 'top' : 'insetInlineStart';
  const handlePosSize = calc(railSize).mul(3).sub(handleSize).div(2).equal();
  const draggableBorderSize = calc(handleSize).sub(railSize).div(2).equal();
  const draggableBorder = horizontal ? {
    borderWidth: `${(0,cssinjs_es.unit)(draggableBorderSize)} 0`,
    transform: `translateY(${(0,cssinjs_es.unit)(calc(draggableBorderSize).mul(-1).equal())})`
  } : {
    borderWidth: `0 ${(0,cssinjs_es.unit)(draggableBorderSize)}`,
    transform: `translateX(${(0,cssinjs_es.unit)(token.calc(draggableBorderSize).mul(-1).equal())})`
  };
  return {
    [railPadding]: railSize,
    [part]: calc(railSize).mul(3).equal(),
    [`${componentCls}-rail`]: {
      [full]: '100%',
      [part]: railSize
    },
    [`${componentCls}-track,${componentCls}-tracks`]: {
      [part]: railSize
    },
    [`${componentCls}-track-draggable`]: Object.assign({}, draggableBorder),
    [`${componentCls}-handle`]: {
      [handlePos]: handlePosSize
    },
    [`${componentCls}-mark`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      // https://github.com/ant-design/ant-design/issues/43731
      [markInset]: calc(railSize).mul(3).add(horizontal ? 0 : marginFull).equal(),
      [full]: '100%'
    },
    [`${componentCls}-step`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [markInset]: railSize,
      [full]: '100%',
      [part]: railSize
    },
    [`${componentCls}-dot`]: {
      position: 'absolute',
      [handlePos]: calc(railSize).sub(dotSize).div(2).equal()
    }
  };
};
// ============================ Horizontal ============================
const genHorizontalStyle = token => {
  const {
    componentCls,
    marginPartWithMark
  } = token;
  return {
    [`${componentCls}-horizontal`]: Object.assign(Object.assign({}, genDirectionStyle(token, true)), {
      [`&${componentCls}-with-marks`]: {
        marginBottom: marginPartWithMark
      }
    })
  };
};
// ============================= Vertical =============================
const genVerticalStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-vertical`]: Object.assign(Object.assign({}, genDirectionStyle(token, false)), {
      height: '100%'
    })
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => {
  // Handle line width is always width-er 1px
  const increaseHandleWidth = 1;
  const controlSize = token.controlHeightLG / 4;
  const controlSizeHover = token.controlHeightSM / 2;
  const handleLineWidth = token.lineWidth + increaseHandleWidth;
  const handleLineWidthHover = token.lineWidth + increaseHandleWidth * 3;
  return {
    controlSize,
    railSize: 4,
    handleSize: controlSize,
    handleSizeHover: controlSizeHover,
    dotSize: 8,
    handleLineWidth,
    handleLineWidthHover,
    railBg: token.colorFillTertiary,
    railHoverBg: token.colorFillSecondary,
    trackBg: token.colorPrimaryBorder,
    trackHoverBg: token.colorPrimaryBorderHover,
    handleColor: token.colorPrimaryBorder,
    handleActiveColor: token.colorPrimary,
    handleColorDisabled: new dist_module.TinyColor(token.colorTextDisabled).onBackground(token.colorBgContainer).toHexShortString(),
    dotBorderColor: token.colorBorderSecondary,
    dotActiveBorderColor: token.colorPrimaryBorder,
    trackBgDisabled: token.colorBgContainerDisabled
  };
};
/* harmony default export */ const slider_style = ((0,genComponentStyleHook.genStyleHooks)('Slider', token => {
  const sliderToken = (0,statistic.merge)(token, {
    marginPart: token.calc(token.controlHeight).sub(token.controlSize).div(2).equal(),
    marginFull: token.calc(token.controlSize).div(2).equal(),
    marginPartWithMark: token.calc(token.controlHeightLG).sub(token.controlSize).equal()
  });
  return [genBaseStyle(sliderToken), genHorizontalStyle(sliderToken), genVerticalStyle(sliderToken)];
}, prepareComponentToken));
;// ./node_modules/antd/es/slider/useRafLock.js


function useRafLock() {
  const [state, setState] = react.useState(false);
  const rafRef = react.useRef();
  const cleanup = () => {
    raf["default"].cancel(rafRef.current);
  };
  const setDelayState = nextState => {
    cleanup();
    if (nextState) {
      setState(nextState);
    } else {
      rafRef.current = (0,raf["default"])(() => {
        setState(nextState);
      });
    }
  };
  react.useEffect(() => cleanup, []);
  return [state, setDelayState];
}
;// ./node_modules/antd/es/slider/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










function getTipFormatter(tipFormatter, legacyTipFormatter) {
  if (tipFormatter || tipFormatter === null) {
    return tipFormatter;
  }
  if (legacyTipFormatter || legacyTipFormatter === null) {
    return legacyTipFormatter;
  }
  return val => typeof val === 'number' ? val.toString() : '';
}
const Slider = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      range,
      className,
      rootClassName,
      style,
      disabled,
      // Deprecated Props
      tooltipPrefixCls: legacyTooltipPrefixCls,
      tipFormatter: legacyTipFormatter,
      tooltipVisible: legacyTooltipVisible,
      getTooltipPopupContainer: legacyGetTooltipPopupContainer,
      tooltipPlacement: legacyTooltipPlacement,
      tooltip = {},
      onChangeComplete
    } = props,
    restProps = __rest(props, ["prefixCls", "range", "className", "rootClassName", "style", "disabled", "tooltipPrefixCls", "tipFormatter", "tooltipVisible", "getTooltipPopupContainer", "tooltipPlacement", "tooltip", "onChangeComplete"]);
  const {
    vertical
  } = props;
  const {
    direction,
    slider,
    getPrefixCls,
    getPopupContainer
  } = react.useContext(context.ConfigContext);
  const contextDisabled = react.useContext(DisabledContext["default"]);
  const mergedDisabled = disabled !== null && disabled !== void 0 ? disabled : contextDisabled;
  // =============================== Open ===============================
  const [hoverOpen, setHoverOpen] = useRafLock();
  const [focusOpen, setFocusOpen] = useRafLock();
  const tooltipProps = Object.assign({}, tooltip);
  const {
    open: tooltipOpen,
    placement: tooltipPlacement,
    getPopupContainer: getTooltipPopupContainer,
    prefixCls: customizeTooltipPrefixCls,
    formatter: tipFormatter
  } = tooltipProps;
  const lockOpen = tooltipOpen !== null && tooltipOpen !== void 0 ? tooltipOpen : legacyTooltipVisible;
  const activeOpen = (hoverOpen || focusOpen) && lockOpen !== false;
  const mergedTipFormatter = getTipFormatter(tipFormatter, legacyTipFormatter);
  // ============================= Change ==============================
  const [dragging, setDragging] = useRafLock();
  const onInternalChangeComplete = nextValues => {
    onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(nextValues);
    setDragging(false);
  };
  // ============================ Placement ============================
  const getTooltipPlacement = (placement, vert) => {
    if (placement) {
      return placement;
    }
    if (!vert) {
      return 'top';
    }
    return direction === 'rtl' ? 'left' : 'right';
  };
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('slider', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = slider_style(prefixCls);
  const cls = classnames_default()(className, slider === null || slider === void 0 ? void 0 : slider.className, rootClassName, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-lock`]: dragging
  }, hashId, cssVarCls);
  // make reverse default on rtl direction
  if (direction === 'rtl' && !restProps.vertical) {
    restProps.reverse = !restProps.reverse;
  }
  // ============================= Multiple =============================
  // Range config
  const [mergedRange, draggableTrack] = react.useMemo(() => {
    if (!range) {
      return [false];
    }
    return typeof range === 'object' ? [true, range.draggableTrack] : [true, false];
  }, [range]);
  // ============================= Warning ==============================
  // Warning for deprecated usage
  if (false) {}
  // ============================== Handle ==============================
  react.useEffect(() => {
    const onMouseUp = () => {
      // Delay for 1 frame to make the click to enable hide tooltip
      // even when the handle is focused
      (0,raf["default"])(() => {
        setFocusOpen(false);
      }, 1);
    };
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  const useActiveTooltipHandle = mergedRange && !lockOpen;
  const handleRender = (node, info) => {
    const {
      index
    } = info;
    const nodeProps = node.props;
    const passedProps = Object.assign(Object.assign({}, nodeProps), {
      onMouseEnter: e => {
        var _a;
        setHoverOpen(true);
        (_a = nodeProps.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(nodeProps, e);
      },
      onMouseLeave: e => {
        var _a;
        setHoverOpen(false);
        (_a = nodeProps.onMouseLeave) === null || _a === void 0 ? void 0 : _a.call(nodeProps, e);
      },
      onMouseDown: e => {
        var _a;
        setFocusOpen(true);
        setDragging(true);
        (_a = nodeProps.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(nodeProps, e);
      },
      onFocus: e => {
        var _a, _b;
        setFocusOpen(true);
        (_a = restProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        (_b = nodeProps.onFocus) === null || _b === void 0 ? void 0 : _b.call(nodeProps, e);
      },
      onBlur: e => {
        var _a, _b;
        setFocusOpen(false);
        (_a = restProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(restProps, e);
        (_b = nodeProps.onBlur) === null || _b === void 0 ? void 0 : _b.call(nodeProps, e);
      }
    });
    const cloneNode = /*#__PURE__*/react.cloneElement(node, passedProps);
    const open = (!!lockOpen || activeOpen) && mergedTipFormatter !== null;
    // Wrap on handle with Tooltip when is single mode or multiple with all show tooltip
    if (!useActiveTooltipHandle) {
      return /*#__PURE__*/react.createElement(slider_SliderTooltip, Object.assign({}, tooltipProps, {
        prefixCls: getPrefixCls('tooltip', customizeTooltipPrefixCls !== null && customizeTooltipPrefixCls !== void 0 ? customizeTooltipPrefixCls : legacyTooltipPrefixCls),
        title: mergedTipFormatter ? mergedTipFormatter(info.value) : '',
        open: open,
        placement: getTooltipPlacement(tooltipPlacement !== null && tooltipPlacement !== void 0 ? tooltipPlacement : legacyTooltipPlacement, vertical),
        key: index,
        overlayClassName: `${prefixCls}-tooltip`,
        getPopupContainer: getTooltipPopupContainer || legacyGetTooltipPopupContainer || getPopupContainer
      }), cloneNode);
    }
    return cloneNode;
  };
  // ========================== Active Handle ===========================
  const activeHandleRender = useActiveTooltipHandle ? (handle, info) => {
    const cloneNode = /*#__PURE__*/react.cloneElement(handle, {
      style: Object.assign(Object.assign({}, handle.props.style), {
        visibility: 'hidden'
      })
    });
    return /*#__PURE__*/react.createElement(slider_SliderTooltip, Object.assign({}, tooltipProps, {
      prefixCls: getPrefixCls('tooltip', customizeTooltipPrefixCls !== null && customizeTooltipPrefixCls !== void 0 ? customizeTooltipPrefixCls : legacyTooltipPrefixCls),
      title: mergedTipFormatter ? mergedTipFormatter(info.value) : '',
      open: mergedTipFormatter !== null && activeOpen,
      placement: getTooltipPlacement(tooltipPlacement !== null && tooltipPlacement !== void 0 ? tooltipPlacement : legacyTooltipPlacement, vertical),
      key: "tooltip",
      overlayClassName: `${prefixCls}-tooltip`,
      getPopupContainer: getTooltipPopupContainer || legacyGetTooltipPopupContainer || getPopupContainer
    }), cloneNode);
  } : undefined;
  // ============================== Render ==============================
  const mergedStyle = Object.assign(Object.assign({}, slider === null || slider === void 0 ? void 0 : slider.style), style);
  return wrapCSSVar(/*#__PURE__*/
  // @ts-ignore
  react.createElement(es["default"], Object.assign({}, restProps, {
    step: restProps.step,
    range: mergedRange,
    draggableTrack: draggableTrack,
    className: cls,
    style: mergedStyle,
    disabled: mergedDisabled,
    ref: ref,
    prefixCls: prefixCls,
    handleRender: handleRender,
    activeHandleRender: activeHandleRender,
    onChangeComplete: onInternalChangeComplete
  })));
});
if (false) {}
/* harmony default export */ const slider = (Slider);

/***/ })

}]);