include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-oplist
PKG_VERSION:=0.1.6
PKG_RELEASE:=$(shell date +%Y%m%d%H%M%S)
PKG_LICENSE:=GPL-3.0

LUCI_TITLE:=LuCI support for OpenList
LUCI_PKGARCH:=x86_64

include $(TOPDIR)/feeds/luci/luci.mk

define Package/$(PKG_NAME)/install
	$(call LuCI/Install,$(1))

	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./root/etc/init.d/oplist $(1)/etc/init.d/oplist

	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) ./root/usr/bin/openlist $(1)/usr/bin/openlist
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
