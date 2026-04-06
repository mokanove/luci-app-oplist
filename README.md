# luci-app-oplist
> LuCI-APP for OpenList, which includes the latest version of the openlist binary program.
>
> Built-in: OpenList binary
## How to build?
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
