# luci-app-oplist
LuCI-APP for OpenList, which includes the latest version of the openlist binary program.

Open Source by GNU GPL v3

References: luci-app-openlist, luci-app-powermanager

Built-in: OpenList binary

WARN: Only support X86_64(amd64) ARCH !!!!!!!
## How to build?
> Need Linux env first
>
> Clone ImmortalWrt SDK
```
curl -LO https://immortalwrt.kyarucloud.moe/releases/24.10.4/targets/x86/64/immortalwrt-sdk-24.10.4-x86-64_gcc-13.3.0_musl.Linux-x86_64.tar.zst

# You can change mirror to any.
# If you in China? Let's try it:

curl -LO https://mirrors.cernet.edu.cn/immortalwrt/releases/24.10.4/targets/x86/64/immortalwrt-sdk-24.10.4-x86-64_gcc-13.3.0_musl.Linux-x86_64.tar.zst
```
> Decompress
```
tar -xvf immortalwrt-sdk-24.10.4-x86-64_gcc-13.3.0_musl.Linux-x86_64.tar.zst
```
> Navigate to the package directory and clone the project.
```
cd immortalwrt-sdk-24.10.4-x86-64_gcc-13.3.0_musl.Linux-x86_64/package/
git clone https://github.com/mokanove/luci-app-oplist.git
# or git@github.com:mokanove/luci-app-oplist.git
```
> Wake up, my dear
```
cd ./luci-app-oplist/root/usr/bin
curl -LO https://github.com/OpenListTeam/OpenList/releases/download/v4.1.10/openlist-linux-musl-amd64.tar.gz
# or another openlist binary URL
tar -xzvf openlist-linux-musl-amd64.tar.gz
mv openlist-linux-musl-amd64/openlist ./
rm -rf openlist-linux-musl-amd64/
ls -ld openlist
cd ../../../../
./scripts/feeds update -a && ./scripts/feeds install -a
make package/luci-app-powermanager/compile V=s -j$(nproc)
```
> Done
```
cd bin/packages/x86_64/base/
```
