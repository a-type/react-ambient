(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{274:function(module,exports,__webpack_require__){__webpack_require__(275),__webpack_require__(424),module.exports=__webpack_require__(425)},341:function(module,exports){},425:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(273);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(615)],module)}.call(this,__webpack_require__(426)(module))},615:function(module,exports,__webpack_require__){var map={"./AmbientProvider.stories.tsx":616};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=615},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Showcase",(function(){return Showcase}));__webpack_require__(18),__webpack_require__(29),__webpack_require__(30),__webpack_require__(58),__webpack_require__(48),__webpack_require__(23),__webpack_require__(103),__webpack_require__(49),__webpack_require__(69),__webpack_require__(50),__webpack_require__(17),__webpack_require__(52),__webpack_require__(33),__webpack_require__(35);var react=__webpack_require__(2),react_default=__webpack_require__.n(react);__webpack_require__(20),__webpack_require__(81),__webpack_require__(32),__webpack_require__(113),__webpack_require__(167),__webpack_require__(41),__webpack_require__(271),__webpack_require__(272),__webpack_require__(51),__webpack_require__(34),__webpack_require__(168);var AmbientContext=react.createContext({activeKey:null,backgroundElement:null,activeData:{},dataByKey:{},groupId:"default"});var hooks=__webpack_require__(618);function useId(definedId){var uid=Object(hooks.a)();return definedId||uid}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AmbientProvider(props){var providedGroupId=props.groupId,children=props.children,_props$backgroundElem=props.backgroundElementProps,backgroundElementProps=void 0===_props$backgroundElem?{}:_props$backgroundElem,_props$debounceTimeou=props.debounceTimeout,debounceTimeout=void 0===_props$debounceTimeou?20:_props$debounceTimeou,style=props.style,rest=_objectWithoutProperties(props,["groupId","children","backgroundElementProps","debounceTimeout","style"]),_React$useState2=_slicedToArray(react.useState(null),2),firstKey=_React$useState2[0],setFirstKey=_React$useState2[1],dataByKeyRef=react.useRef({}),groupId=useId(providedGroupId),_React$useState4=_slicedToArray(react.useState(null),2),backgroundElement=_React$useState4[0],setBackgroundElement=_React$useState4[1];react.useEffect((function(){if("undefined"!=typeof window){onScroll();var debounced=function debounce(func,wait){var timeout,immediate=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var callNow=immediate&&!timeout;timeout&&clearTimeout(timeout),timeout=setTimeout((function later(){timeout=null,immediate||func.apply(void 0,args)}),wait),callNow&&func.apply(void 0,args)}}(onScroll,debounceTimeout);return document.addEventListener("scroll",debounced),function(){document.removeEventListener("scroll",debounced)}}function onScroll(){var sectionElements=document.querySelectorAll("[".concat("data-ambient-group",'="').concat(groupId,'"][').concat("data-ambient-key","]")),mostVisible=null,greatestPercent=0;sectionElements.forEach((function(sectionEl){var visiblePercentage=function getVisibleElementHeight(element,viewportHeight){if("undefined"==typeof window)return 0;var rect=element.getBoundingClientRect(),height=rect.height,visibleTop=0<=rect.top&&rect.top<viewportHeight,visibleBottom=0<rect.bottom&&rect.bottom<viewportHeight,visiblePx=0;if(visibleTop&&visibleBottom)visiblePx=height;else if(visibleTop)visiblePx=viewportHeight-rect.top;else if(visibleBottom)visiblePx=rect.bottom;else if(height>viewportHeight&&0>rect.top){var absTop=Math.abs(rect.top);absTop<height&&(visiblePx=height-absTop)}return visiblePx/height}(sectionEl,window.innerHeight);visiblePercentage>greatestPercent&&(greatestPercent=visiblePercentage,mostVisible=sectionEl)}));var winningKey=mostVisible&&mostVisible.getAttribute("data-ambient-key");setFirstKey(winningKey)}}),[groupId,debounceTimeout]);var finalStyle=react.useMemo((function(){return _objectSpread({position:"relative",zIndex:1},style)}),[style]);return react.createElement(AmbientContext.Provider,{value:{activeKey:firstKey,backgroundElement:backgroundElement,activeData:firstKey&&dataByKeyRef.current[firstKey],dataByKey:dataByKeyRef.current,groupId:groupId}},react.createElement("div",_extends({},backgroundElementProps,{"data-ambient-background":!0,ref:setBackgroundElement,style:_objectSpread({position:"fixed",top:0,left:0,bottom:0,right:0,zIndex:0},backgroundElementProps.style)})),react.createElement("div",_extends({},rest,{style:finalStyle}),children))}AmbientProvider.displayName="AmbientProvider",AmbientProvider.__docgenInfo={description:"A top-level Provider for the ambient system. Place this component\nin the React tree above all usages of useAmbient. You can have multiple\ndifferent ambient systems at once, whether parallel or nested - but\nnote that since the default styling of the background pane is position: fixed,\nby default multiple usages will collide! To fix this, change the styling\nof the background pane using `backgroundElementProps`.\n\n@example\n```\nfunction AppLayout() {\n  return (\n    <AmbientProvider\n      backgroundElementProps={{ style: { backgroundColor: 'black' } }}\n      debounceTimeout={50}\n      style={{ zIndex: 500 }}\n    >\n      <AppContent />\n    </AmbientProvider>\n  );\n}\n```",methods:[],displayName:"AmbientProvider",props:{groupId:{required:!1,tsType:{name:"string"},description:"Optionally, if you have multiple groups at once, you can provide\na discrete ID for each one. Otherwise, this will be generated for you."},backgroundElementProps:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Provide props to the background element which holds the dynamic background\nitems. By default, it is CSS position: fixed, covering the whole viewport\nsize, at z-index 0."},debounceTimeout:{required:!1,tsType:{name:"number"},description:"Adjust the scroll event debouncing. Defaults at 20ms."}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AmbientProvider.tsx"]={name:"AmbientProvider",docgenInfo:AmbientProvider.__docgenInfo,path:"src/AmbientProvider.tsx"});var react_dom=__webpack_require__(85);function FadingBackground_extends(){return(FadingBackground_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function FadingBackground_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function FadingBackground_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?FadingBackground_ownKeys(Object(source),!0).forEach((function(key){FadingBackground_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FadingBackground_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function FadingBackground_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FadingBackground_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function FadingBackground_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FadingBackground(props){var active=props.active,_props$fadeDurationSe=props.fadeDurationSeconds,fadeDurationSeconds=void 0===_props$fadeDurationSe?.4:_props$fadeDurationSe,rest=FadingBackground_objectWithoutProperties(props,["active","fadeDurationSeconds"]);return react.createElement("div",FadingBackground_extends({},rest,{style:FadingBackground_objectSpread({position:"absolute",left:0,top:0,right:0,bottom:0,opacity:active?1:0,transition:"opacity ".concat(fadeDurationSeconds,"s ease-in-out")},rest.style)}))}function useAmbient_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function defaultGetWrapperProps(_ref){return{active:_ref.active}}function AmbientProvider_stories_extends(){return(AmbientProvider_stories_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function AmbientProvider_stories_slicedToArray(arr,i){return function AmbientProvider_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function AmbientProvider_stories_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function AmbientProvider_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return AmbientProvider_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AmbientProvider_stories_arrayLikeToArray(o,minLen)}(arr,i)||function AmbientProvider_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function AmbientProvider_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}FadingBackground.displayName="FadingBackground",FadingBackground.__docgenInfo={description:"The default background transition component. It fades quickly\nbetween active backgrounds as they change.",methods:[],displayName:"FadingBackground",props:{fadeDurationSeconds:{required:!1,tsType:{name:"number"},description:""},active:{required:!0,tsType:{name:"boolean"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/FadingBackground.tsx"]={name:"FadingBackground",docgenInfo:FadingBackground.__docgenInfo,path:"src/FadingBackground.tsx"});__webpack_exports__.default={title:"AmbientProvider"};function AmbientSection(_ref){var sectionKey=_ref.sectionKey,background=_ref.background,_ref$color=_ref.color,color=void 0===_ref$color?"black":_ref$color,_useAmbient2=AmbientProvider_stories_slicedToArray(function useAmbient(){var _ref2,options=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},providedKey=options.key,_options$WrapperCompo=options.WrapperComponent,WrapperComponent=void 0===_options$WrapperCompo?FadingBackground:_options$WrapperCompo,_options$getWrapperPr=options.getWrapperProps,getWrapperProps=void 0===_options$getWrapperPr?defaultGetWrapperProps:_options$getWrapperPr,_options$data=options.data,data=void 0===_options$data?{}:_options$data,key=useId(providedKey),ctx=react.useContext(AmbientContext),active=ctx.activeKey===key;return react.useEffect((function(){ctx.dataByKey[key]=data}),[data,key]),[(_ref2={},useAmbient_defineProperty(_ref2,"data-ambient-key",key),useAmbient_defineProperty(_ref2,"data-ambient-group",ctx.groupId),_ref2),{active:active,renderBackground:function(){var content=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return ctx.backgroundElement?WrapperComponent?react_dom.createPortal(react.createElement(WrapperComponent,getWrapperProps({active:active,activeKey:ctx.activeKey,activeData:ctx.activeData}),content),ctx.backgroundElement):react_dom.createPortal(content,ctx.backgroundElement):null},activeData:ctx.activeData,activeKey:ctx.activeKey}]}({getWrapperProps:function getWrapperProps(_ref2){return{active:_ref2.active,style:{backgroundColor:background}}}}),2),props=_useAmbient2[0],renderBackground=_useAmbient2[1].renderBackground;return react_default.a.createElement("div",AmbientProvider_stories_extends({},props,{style:{height:"100vh",width:"100%",color:color,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderBottom:"1px solid ".concat(color)}}),renderBackground(),react_default.a.createElement("p",{style:{fontSize:64,fontFamily:"sans-serif"}},"This is section ",sectionKey))}AmbientSection.displayName="AmbientSection";var _ref3=react_default.a.createElement(AmbientProvider,null,react_default.a.createElement(AmbientSection,{sectionKey:"one",background:"#fe8081"}),react_default.a.createElement(AmbientSection,{sectionKey:"two",background:"#f0e030"}),react_default.a.createElement(AmbientSection,{sectionKey:"three",background:"#122232",color:"white"})),Showcase=function(){return _ref3};Showcase.displayName="Showcase",Showcase.__docgenInfo={description:"",methods:[],displayName:"Showcase"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AmbientProvider.stories.tsx"]={name:"Showcase",docgenInfo:Showcase.__docgenInfo,path:"src/AmbientProvider.stories.tsx"})}},[[274,1,2]]]);
//# sourceMappingURL=main.cd0c535a6e174ab654b5.bundle.js.map