export function Controls() {
  const bgbody = document.querySelector("body");
  const linkHome = document.querySelector('a[href*="/"]');
  const linkUniverse = document.querySelector('a[href*="/universe"]');
  const linkExploracao = document.querySelector('a[href*="/exploracao"]');

  function changeHomeStyle() {
    bgbody.classList.add("bgHome");
    bgbody.classList.remove("bgUniverse");
    bgbody.classList.remove("bgExploracao");

    linkHome.classList.add("homeLink");
    linkUniverse.classList.remove("universeLink");
    linkExploracao.classList.remove("exploracaoLink");
  }

  function changeUniverseStyle() {
    bgbody.classList.remove("bgHome");
    bgbody.classList.add("bgUniverse");
    bgbody.classList.remove("bgExploracao");

    linkHome.classList.remove("homeLink");
    linkUniverse.classList.add("universeLink");
    linkExploracao.classList.remove("exploracaoLink");
  }

  function changeExploracaoStyle() {
    bgbody.classList.remove("bgHome");
    bgbody.classList.remove("bgUniverse");
    bgbody.classList.add("bgExploracao");

    linkHome.classList.remove("homeLink");
    linkUniverse.classList.remove("universeLink");
    linkExploracao.classList.add("exploracaoLink");
  }

  return { changeHomeStyle, changeUniverseStyle, changeExploracaoStyle };
}
