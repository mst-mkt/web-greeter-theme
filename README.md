# web-greeter-theme (temporary name)

> [!NOTE]
> 🚧 このリポジトリは開発中です。

A theme for [web-greeter](https://github.com/JezerM/web-greeter) / [nody-greeter](https://github.com/JezerM/nody-greeter)

<ここにいい感じのスクショ>

## Installation

1. Install packages and build

```sh
$ pnpm i --frozen-lockfile
$ pnpm build

```

2. Copy the `dist` directory to `/usr/share/web-greeter/themes/<theme-name>`

```sh
$ sudo cp -r ./dist /usr/share/web-greeter/themes/<theme-name>
```

3. Set the theme name in `/etc/lightdm/web-greeter.yml`

```diff_yml:/etc/lightdm/web-greeter.yml
greeter:
-  theme: <other-theme-name>
+  theme: <theme-name>
```

## Development

```sh
$ pnpm i --frozen-lockfile
$ pnpm prepare
```

```sh
$ pnpm dev
```

## Credits

All background images are from [Unsplash](https://unsplash.com/) under the [Unsplash license](https://unsplash.com/license).
