var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/cfajardo/Desktop/ant-design-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links2,
  meta: () => meta
});
var import_react7 = require("@remix-run/react");

// node_modules/antd/dist/antd.css
var antd_default = "/build/_assets/antd-M542IXQR.css";

// app/components/AppLayout/AppLayout.tsx
var import_react2 = __toESM(require("react"));
var import_antd = require("antd");
var AppLayout = ({ topNav, content, sideNavigation }) => {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, topNav, /* @__PURE__ */ import_react2.default.createElement(import_antd.Layout, {
    style: { minHeight: "100vh" }
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd.Layout, null, sideNavigation, /* @__PURE__ */ import_react2.default.createElement(import_antd.Layout.Content, null, content))));
};
var AppLayout_default = AppLayout;

// app/components/TopNavigation/TopNavigation.tsx
var import_react4 = __toESM(require("react"));
var import_antd3 = require("antd");
var import_icons2 = require("@ant-design/icons");

// app/components/HelpMenu/HelpMenu.tsx
var import_react3 = __toESM(require("react"));
var import_icons = require("@ant-design/icons");
var import_antd2 = require("antd");
var HELP_NAV_ITEMS = [
  {
    key: "slack-support",
    name: "Slack Support",
    path: "https://www.google.com/search?q=this+is+an+example+url",
    icon: /* @__PURE__ */ import_react3.default.createElement(import_icons.SlackOutlined, null),
    group: "Help"
  },
  {
    key: "report-bug",
    name: "Report Bug",
    path: "https://www.google.com/search?q=this+is+an+example+url",
    icon: /* @__PURE__ */ import_react3.default.createElement(import_icons.BugOutlined, null)
  },
  {
    key: "api-documentation",
    name: "MY_APP API Docs",
    path: "https://www.google.com/search?q=this+is+an+example+url",
    icon: /* @__PURE__ */ import_react3.default.createElement(import_icons.BookOutlined, null)
  }
];
var MenuItems = () => {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_antd2.Menu, null, HELP_NAV_ITEMS.map(({ path, icon, name }) => /* @__PURE__ */ import_react3.default.createElement(import_antd2.Menu.Item, {
    key: path,
    icon
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: path
  }, name)))));
};
var HelpMenu = () => {
  const [isPopoverMenuOpen, setIsPopoverMenuOpen] = import_react3.default.useState(false);
  const togglePopOverMenu = () => {
    setIsPopoverMenuOpen(!isPopoverMenuOpen);
  };
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_antd2.Popover, {
    content: MenuItems,
    trigger: "click",
    visible: isPopoverMenuOpen,
    onVisibleChange: togglePopOverMenu
  }, /* @__PURE__ */ import_react3.default.createElement(import_antd2.Button, {
    key: "dropdown",
    icon: /* @__PURE__ */ import_react3.default.createElement(import_icons.QuestionCircleOutlined, null),
    size: "large",
    style: { border: "none" }
  })));
};
var HelpMenu_default = HelpMenu;

// app/components/TopNavigation/TopNavigation.tsx
var TopNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = import_react4.default.useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return /* @__PURE__ */ import_react4.default.createElement("nav", {
    "data-testid": "TopNavigation",
    style: {
      display: "flex",
      alignItems: "center",
      padding: "8px 16px",
      zIndex: 1e3,
      borderBottom: "1px solid lightgrey",
      position: "sticky"
    }
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { flex: 1, display: "flex", justifyContent: "flex-end" }
  }, /* @__PURE__ */ import_react4.default.createElement(HelpMenu_default, null), /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("button", {
    type: "button",
    onClick: toggleDrawer,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      width: "fit-content"
    }
  }, /* @__PURE__ */ import_react4.default.createElement(import_antd3.Avatar, {
    src: `https://i.pravatar.cc?img=3`,
    size: 40
  })), /* @__PURE__ */ import_react4.default.createElement(import_antd3.Drawer, {
    width: 350,
    placement: "right",
    onClose: toggleDrawer,
    visible: isDrawerOpen,
    key: "right",
    style: { padding: "24 !important" }
  }, /* @__PURE__ */ import_react4.default.createElement("p", {
    style: { marginBottom: 24 }
  }, "User Profile"), /* @__PURE__ */ import_react4.default.createElement(import_antd3.Card, {
    hoverable: true,
    style: { width: 300 }
  }, /* @__PURE__ */ import_react4.default.createElement(import_antd3.Card.Meta, {
    avatar: /* @__PURE__ */ import_react4.default.createElement(import_antd3.Avatar, {
      icon: /* @__PURE__ */ import_react4.default.createElement(import_icons2.UserOutlined, null),
      size: 100,
      src: `https://i.pravatar.cc?img=3`
    }),
    title: "Example_First_Name Example_Last_Name"
  }))))));
};
var TopNavigation_default = TopNavigation;

// app/components/SideNavigation/SideNavigation.tsx
var import_react5 = __toESM(require("react"));
var import_antd4 = require("antd");
var import_icons3 = require("@ant-design/icons");

// app/components/SideNavigation/SideNavigation.css
var SideNavigation_default = "/build/_assets/SideNavigation-MYYYTQZL.css";

// app/components/SideNavigation/SideNavigation.tsx
var import_react6 = require("@remix-run/react");
var links = () => [{ rel: "stylesheet", href: SideNavigation_default }];
var { Sider } = import_antd4.Layout;
var SideNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = import_react5.default.useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return /* @__PURE__ */ import_react5.default.createElement(Sider, {
    className: "SideNavigation",
    collapsible: true,
    collapsed: isSidebarOpen,
    onCollapse: toggleSidebar,
    collapsedWidth: 64
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    "data-testid": "side-navbar",
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: 30
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_antd4.Menu, {
    mode: "inline"
  }, /* @__PURE__ */ import_react5.default.createElement(import_antd4.Menu.Item, {
    key: "1",
    icon: /* @__PURE__ */ import_react5.default.createElement(import_icons3.HddOutlined, {
      style: { fontSize: 20 }
    })
  }, /* @__PURE__ */ import_react5.default.createElement(import_react6.Link, {
    to: "__TODO__"
  }, "Route 1")), /* @__PURE__ */ import_react5.default.createElement(import_antd4.Menu.Item, {
    key: "2",
    icon: /* @__PURE__ */ import_react5.default.createElement(import_icons3.RobotOutlined, {
      style: { fontSize: 20 }
    })
  }, /* @__PURE__ */ import_react5.default.createElement(import_react6.Link, {
    to: "__TODO__"
  }, "Route 2")), /* @__PURE__ */ import_react5.default.createElement(import_antd4.Menu.SubMenu, {
    key: "sub1",
    icon: /* @__PURE__ */ import_react5.default.createElement(import_icons3.QuestionCircleOutlined, null),
    title: "Help"
  }, HELP_NAV_ITEMS.map(({ path, icon, name }) => /* @__PURE__ */ import_react5.default.createElement(import_antd4.Menu.Item, {
    key: path,
    icon
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: path
  }, name)))))));
};
var SideNavigation_default2 = SideNavigation;

// route:/Users/cfajardo/Desktop/ant-design-remix/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function links2() {
  return [{ rel: "stylesheet", href: antd_default }];
}
function Document({
  children,
  title = "App title"
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("title", null, title), /* @__PURE__ */ React.createElement(import_react7.Meta, null), /* @__PURE__ */ React.createElement(import_react7.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(AppLayout_default, {
    topNav: /* @__PURE__ */ React.createElement(TopNavigation_default, null),
    sideNavigation: /* @__PURE__ */ React.createElement(SideNavigation_default2, null),
    content: /* @__PURE__ */ React.createElement("p", null, "hello content")
  }), /* @__PURE__ */ React.createElement(import_react7.Outlet, null), /* @__PURE__ */ React.createElement(import_react7.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react7.Scripts, null), /* @__PURE__ */ React.createElement(import_react7.LiveReload, null)));
}
function App() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Document, {
    title: "My App"
  }, /* @__PURE__ */ React.createElement(import_react7.Outlet, null)));
}

// route:/Users/cfajardo/Desktop/ant-design-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links3
});
var import_react8 = __toESM(require("react"));
function links3() {
  return [...links()];
}
var Index = () => {
  return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, "index page");
};
var routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "12c41a40", "entry": { "module": "/build/entry.client-77IP3JCL.js", "imports": ["/build/_shared/chunk-UVS4LW6G.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-EMXPZCKN.js", "imports": ["/build/_shared/chunk-EZQCBYGN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-OHWYCZOA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-12C41A40.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
