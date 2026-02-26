include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-oplist
PKG_VERSION:=0.0.5
PKG_RELEASE:=$(shell date +%Y%m%d%H%M)

PKG_LICENSE:=GPL-3.0

LUCI_TITLE:=LuCI support for OpenList
LUCI_PKGARCH:=x86_64

include $(TOPDIR)/feeds/luci/luci.mk

$(eval $(call BuildPackage,$(PKG_NAME)))
