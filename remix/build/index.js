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

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Bora\Desktop\Okul\physics-project\remix\app\root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/App.css
var App_default = "/build/_assets/App-Q7VFG4F3.css";

// route:C:\Users\Bora\Desktop\Okul\physics-project\remix\app\root.jsx
function links() {
  return [{ rel: "stylesheet", href: App_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Fizik Laboratuvar\u0131",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "text-megaman border-minty-green border-4 rounded-none bg-black-shade"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "body-style"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, {
    port: 2526
  }))));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "border-minty-green text-megaman border-4 rounded-none bg-black-shade"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "body-style",
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("header", {
    className: "text-center border-minty-green border-b-2 text-xl font-bold p-6 mb-7"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/"
  }, "Fizik Laboratuvar\u0131")), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-bold p-6 mb-7 text-megaman text-center border-minty-green border-5"
  }, "L\xFCtfen", " ", /* @__PURE__ */ React.createElement(import_react2.Link, {
    className: "text-minty-green",
    to: "/"
  }, "Anasayfa"), "dan bir \xFCr\xFCn se\xE7iniz"), /* @__PURE__ */ React.createElement("footer", {
    className: "items-center text-center border-minty-green border-t-2 text-xl font-bold p-6 mb-7"
  }, "Bora Varol ", /* @__PURE__ */ React.createElement("br", null), " 12/C 286 ", /* @__PURE__ */ React.createElement("br", null), "Fizik Projesi")), /* @__PURE__ */ React.createElement(import_react2.Scripts, null)));
}

// route:C:\Users\Bora\Desktop\Okul\physics-project\remix\app\routes\newPage.jsx
var newPage_exports = {};
__export(newPage_exports, {
  default: () => newPage_default
});
var import_react3 = require("@remix-run/react");
function newPage_default() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("header", {
    className: "text-center border-b-2 text-xl font-bold p-6"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/"
  }, "Fizik Laboratuvar\u0131")), /* @__PURE__ */ React.createElement(import_react3.Outlet, null), /* @__PURE__ */ React.createElement("footer", {
    className: "text-center border-t-2 text-xl font-bold p-6"
  }, "Bora Varol ", /* @__PURE__ */ React.createElement("br", null), " 12/C 286 ", /* @__PURE__ */ React.createElement("br", null), "Fizik Projesi"));
}

// route:C:\Users\Bora\Desktop\Okul\physics-project\remix\app\routes\newPage\index.jsx
var newPage_exports2 = {};
__export(newPage_exports2, {
  action: () => action,
  default: () => NewForm
});
var import_node = require("@remix-run/node");
var import_react4 = require("@remix-run/react");
var action = async ({ request }) => {
  const uploadHandler = (0, import_node.unstable_createMemoryUploadHandler)({
    maxFileSize: 5e6
  });
  const formData = await (0, import_node.unstable_parseMultipartFormData)(request, uploadHandler);
  const res = await fetch(`http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/pages?where=(dir%2Ceq%2C${formData._fields.directory[0]})`, { method: "GET", headers: { "xc-auth": formData._fields.auth[0] } });
  const aaa = await res.json();
  if (await aaa[0] != void 0) {
    throw new Response("Page already exists", {
      status: 400
    });
  }
  const file = formData.get("image");
  const buffer = await file.arrayBuffer();
  const image = _arrayBufferToBase64(buffer);
  const dirData = {
    "title": formData._fields.title[0].toString(),
    "created_at": new Date().toISOString(),
    "updated_at": new Date().toISOString(),
    "dir": formData._fields.directory[0].toString()
  };
  const dir = fetch("http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/directories/views/directories", {
    method: "POST",
    headers: { "xc-auth": formData._fields.auth[0].toString(), "Content-Type": "application/json", "accept": "application/json" },
    body: JSON.stringify(dirData)
  });
  const pageData = {
    "created_at": new Date().toISOString(),
    "updated_at": new Date().toISOString(),
    "dir": formData._fields.directory[0].toString(),
    "title": formData._fields.title[0].toString(),
    "content": formData._fields.content[0].toString(),
    "image": image.toString()
  };
  const page = fetch("http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/pages/views/pages", {
    method: "POST",
    headers: { "xc-auth": formData._fields.auth[0].toString(), "Content-Type": "application/json", "accept": "application/json" },
    body: JSON.stringify(pageData)
  });
  return (0, import_node.redirect)(`/pages/${formData._fields.directory[0]}`);
};
function NewForm() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "border-4 my-7 rounded-tl-xl rounded-br-xl border-minty-green justify-center list-style items-center"
  }, /* @__PURE__ */ React.createElement(import_react4.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, /* @__PURE__ */ React.createElement("p", null, "Token: "), /* @__PURE__ */ React.createElement("input", {
    className: "bg-grey-shade p-3 m-3",
    type: "text",
    name: "auth"
  }), /* @__PURE__ */ React.createElement("p", null, "Dir: "), /* @__PURE__ */ React.createElement("input", {
    className: "bg-grey-shade p-3 m-3",
    type: "text",
    name: "directory"
  }), /* @__PURE__ */ React.createElement("p", null, "Title: "), /* @__PURE__ */ React.createElement("input", {
    className: "bg-grey-shade p-3 m-3",
    type: "text",
    name: "title"
  }), /* @__PURE__ */ React.createElement("p", null, "Text"), /* @__PURE__ */ React.createElement("textarea", {
    className: "bg-grey-shade p-3 m-3",
    type: "text",
    name: "content"
  }), /* @__PURE__ */ React.createElement("p", null, "Image"), /* @__PURE__ */ React.createElement("input", {
    className: "bg-grey-shade p-3 m-3",
    type: "file",
    name: "image"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "bg-grey-shade p-3 m-3",
    type: "submit"
  }, "Submit")));
}
function _arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return global.btoa(binary);
}

// route:C:\Users\Bora\Desktop\Okul\physics-project\remix\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react5 = require("@remix-run/react");
var import_node2 = require("@remix-run/node");
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("header", {
    className: "text-center border-minty-green border-b-2 text-xl font-bold p-6"
  }, /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "/"
  }, "Fizik Laboratuvar\u0131")), /* @__PURE__ */ React.createElement(List, null), /* @__PURE__ */ React.createElement("footer", {
    className: "text-center border-minty-green border-t-2 text-xl font-bold p-6"
  }, "Bora Varol ", /* @__PURE__ */ React.createElement("br", null), " 12/C 286 ", /* @__PURE__ */ React.createElement("br", null), "Fizik Projesi"));
}
var List = () => {
  const data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "border-4 my-7 rounded-tl-xl rounded-br-xl border-minty-green justify-center list-style"
  }, /* @__PURE__ */ React.createElement("ul", null, data.list.map((item) => /* @__PURE__ */ React.createElement(ListItem, {
    key: item.id,
    title: item.title,
    dir: item.dir
  }))));
};
var ListItem = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    className: "m-1 list-inside list-disc my-2 break-words"
  }, /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: `/pages/${props.dir}`
  }, props.title)));
};
var loader = async () => {
  xc_auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1ZXN0dXNlckBib3JhdmFyb2wuY29tIiwiaWQiOiJ1c18xY2xsYmUzdnNxcmhieiIsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MTQyMTY5N30.afdqqE-bZabaN0wze9DvYuQ07DOQ6dnxBnPVoPoF5Ho";
  const a = await fetch("http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/directories/count", {
    method: "GET",
    headers: { "xc-auth": xc_auth_token }
  });
  const count = await a.json().count;
  const res = await fetch(`http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/directories?limit=${parseInt(count)}`, { method: "GET", headers: { "xc-auth": xc_auth_token } });
  return (0, import_node2.json)(await res.json());
};

// route:C:\Users\Bora\Desktop\Okul\physics-project\remix\app\routes\pages.jsx
var pages_exports = {};
__export(pages_exports, {
  default: () => Page
});
var import_react6 = require("@remix-run/react");
function Page() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("header", {
    className: "text-center border-minty-green border-b-2 text-xl font-bold p-6"
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/"
  }, "Fizik Laboratuvar\u0131")), /* @__PURE__ */ React.createElement(import_react6.Outlet, null), /* @__PURE__ */ React.createElement("footer", {
    className: "text-center border-t-2 text-xl border-minty-green font-bold p-6"
  }, "Bora Varol ", /* @__PURE__ */ React.createElement("br", null), " 12/C 286 ", /* @__PURE__ */ React.createElement("br", null), "Fizik Projesi"));
}

// route:C:\Users\Bora\Desktop\Okul\physics-project\remix\app\routes\pages\$directory.jsx
var directory_exports = {};
__export(directory_exports, {
  Content: () => Content,
  Image: () => Image,
  Page: () => Page2,
  Title: () => Title,
  default: () => Pages,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var import_react7 = require("@remix-run/react");
function Pages() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Page2, null));
}
var loader2 = async ({ params }) => {
  if (params.directory == void 0)
    return "null";
  xc_auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1ZXN0dXNlckBib3JhdmFyb2wuY29tIiwiaWQiOiJ1c18xY2xsYmUzdnNxcmhieiIsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MTQyMTY5N30.afdqqE-bZabaN0wze9DvYuQ07DOQ6dnxBnPVoPoF5Ho";
  const res = await fetch(`http://pure-emu.herokuapp.com/api/v1/db/data/noco/fizik_projesi/pages?where=(dir%2Ceq%2C${params.directory})`, { method: "GET", headers: { "xc-auth": xc_auth_token } });
  return (0, import_node3.json)(await res.json());
};
var Page2 = () => {
  const data = (0, import_react7.useLoaderData)().list;
  if (data[0] == void 0) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "items-center text-center border-minty-green border-4 rounded-tl-xl rounded-br-xl my-6 mx-16 h-auto"
  }, /* @__PURE__ */ React.createElement(Image, {
    base64_img: data[0].image,
    title: data[0].title
  }), /* @__PURE__ */ React.createElement(Title, {
    title: data[0].title
  }), /* @__PURE__ */ React.createElement(Content, {
    text: data[0].content
  }));
};
var Image = ({ base64_img, title }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "image-style mt-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `data:image/png;base64, ${base64_img}`,
    alt: title
  }));
};
var Content = ({ text }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xl m-4 break-words"
  }, text));
};
var Title = ({ title }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl my-4"
  }, title));
};

// route:C:\Users\Bora\Desktop\Okul\physics-project\remix\app\routes\pages\index.jsx
var pages_exports2 = {};
__export(pages_exports2, {
  default: () => pages_default
});
var import_react8 = require("@remix-run/react");
function pages_default() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-bold p-6 text-minty-green text-center border-minty-green border-5"
  }, "L\xFCtfen", " ", /* @__PURE__ */ React.createElement(import_react8.Link, {
    className: "text-main-brand",
    to: "/"
  }, "Anasayfa"), "dan bir \xFCr\xFCn se\xE7iniz"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "f0834b56", "entry": { "module": "/build/entry.client-6BFZGSQB.js", "imports": ["/build/_shared/chunk-BIFRDQPO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Q3AI675N.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BQRU6SWP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/newPage": { "id": "routes/newPage", "parentId": "root", "path": "newPage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/newPage-L4GIQTNB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/newPage/index": { "id": "routes/newPage/index", "parentId": "routes/newPage", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/newPage/index-NRRF3A6M.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pages": { "id": "routes/pages", "parentId": "root", "path": "pages", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pages-UOZ6VCTC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pages/$directory": { "id": "routes/pages/$directory", "parentId": "routes/pages", "path": ":directory", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pages/$directory-5R3VBYHG.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pages/index": { "id": "routes/pages/index", "parentId": "routes/pages", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/pages/index-NCHSJGUH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F0834B56.js" };

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
  "routes/newPage": {
    id: "routes/newPage",
    parentId: "root",
    path: "newPage",
    index: void 0,
    caseSensitive: void 0,
    module: newPage_exports
  },
  "routes/newPage/index": {
    id: "routes/newPage/index",
    parentId: "routes/newPage",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: newPage_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/pages": {
    id: "routes/pages",
    parentId: "root",
    path: "pages",
    index: void 0,
    caseSensitive: void 0,
    module: pages_exports
  },
  "routes/pages/$directory": {
    id: "routes/pages/$directory",
    parentId: "routes/pages",
    path: ":directory",
    index: void 0,
    caseSensitive: void 0,
    module: directory_exports
  },
  "routes/pages/index": {
    id: "routes/pages/index",
    parentId: "routes/pages",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: pages_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//! btoa deprecated
