# luci-app-oplist
> LuCI support for OpenList

## 🚀 Features
- **Built-in Binary**: The musl binary file of OpenList is packaged, bypassing the source that comes with OpenWrt.
- **Control easy**:Support setting TLS, log storage location, etc. for OpenList in LuCI
- **Intuitive WebUI**:It's as simple as running OpenList in Linux CLI.

## 📦 Install
[Releases](https://github.com/mokanove/luci-app-oplist/releases)
[Generic Guide](https://867678.xyz/install-iapk)

## 🛠 How to build?
> To initialize the SDK, please go to <https://867678.xyz/sdk>
```
export VERSION=v4.2.1
export ARCH=amd64
# ↑ Environment variables
cd ./luci-app-oplist/root/usr/bin
curl -LO https://github.com/OpenListTeam/OpenList/releases/download/${VERSION}/openlist-linux-musl-${ARCH}.tar.gz
tar -xzvf openlist-linux-musl-${ARCH}.tar.gz
rm -f openlist-linux-musl-${ARCH}.tar.gz DONOTREMOVE
cd ../../etc/openlist
rm DONOTREMOVE
```
> In summary: Download and extract the openlist-musl binary and place it in the root/usr/bin & root/etc/openlist  directory, then remove DONOTREMOVE from that directory.

## 📝 Endnote
> We have included the OpenList binary, which is developed by OpenListTeam and based on the AGPL-3.0 open source.
>
> The log shows a partial quote: <https://github.com/Internet1235/luci-app-openlist/blob/main/luci-app-openlist/htdocs/luci-static/resources/view/openlist/log.js> With Apache-2.0 License
> 
> This application provides no warranties.
