import { Controls } from "./controls.js";

export class Router {

  controls = Controls();
  routes = {};
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    console.log(pathname);

    if (pathname === "/") {
      this.controls.changeHomeStyle();
    } else if (pathname === "/universe") {
      this.controls.changeUniverseStyle();
    } else if (pathname === "/exploracao") {
      this.controls.changeExploracaoStyle();
    }
    
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
