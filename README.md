# luci-app-oplist
LuCI-APP for OpenList, which includes the latest version of the openlist binary program.

> WARN: Only support X86_64(amd64) ARCH !!!
>
> aarch64 version was prerelease , maybe have some questions
>
> Open Source : GNU GPL v3
>
> References: luci-app-openlist, luci-app-powermanager
>
> Built-in: OpenList binary
## How to build?
> General tutorials : [Here](https://github.com/mokanove/mokanove/tree/main/luci-app)
## Clone source code
```
git clone https://github.com/mokanove/luci-app-oplist.git
# or git@github.com:mokanove/luci-app-oplist.git
```
## Init project
```
cd ./luci-app-oplist/root/usr/bin
curl -LO https://github.com/OpenListTeam/OpenList/releases/download/v4.1.10/openlist-linux-musl-amd64.tar.gz
# or another openlist binary URL
tar -xzvf openlist-linux-musl-amd64.tar.gz
rm -f openlist-linux-musl-amd64.tar.gz DONOTREMOVE
cd ../../etc/openlist
rm DONOTREMOVE
cd ../../../../../
```
