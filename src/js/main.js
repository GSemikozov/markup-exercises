import '@/js/component/placeholder-image';
import { initPopover } from "@/js/component/popover";
import { initCollapsibles } from '@/js/component/collapsed.js';
import { initSidebarToggle } from '@/js/component/sidebar-toggle.js';

document.addEventListener('DOMContentLoaded', () => {
  initCollapsibles();
  initSidebarToggle();
});

document.querySelectorAll("[data-popover]").forEach((popover) => {
  initPopover(popover);
});
