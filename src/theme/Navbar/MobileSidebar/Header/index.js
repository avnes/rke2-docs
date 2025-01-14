import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import IconClose from '@theme/IconClose';
import NavbarLogo from '@theme/Navbar/Logo';
function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}>
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

// Eject the mobile navbar so we can place the github link there.
export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <a
        href="https://github.com/rancher/rke2"
        target="_blank"
        rel="noopener noreferrer"
        className="margin-right--md header-github-link"
      />
      <NavbarColorModeToggle className="margin-right--md" />
      <CloseButton />
    </div>
  );
}
