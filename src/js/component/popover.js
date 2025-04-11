export function initPopover(container) {
  const trigger = container.querySelector("[data-popover-trigger]");
  const menu = container.querySelector("[data-popover-menu]");

  if (!trigger || !menu) return;

  function toggleMenu() {
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!isExpanded));
    menu.setAttribute("aria-hidden", String(isExpanded));
    menu.classList.toggle("active");

    if (!isExpanded) {
      const firstItem = menu.querySelector("button");
      firstItem?.focus();
    }
  }

  function closeMenu() {
    trigger.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menu.classList.remove("active");
  }

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      trigger.focus();
    }
  });
}
