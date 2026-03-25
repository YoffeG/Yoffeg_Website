# yoffeg.space

Static website for `yoffeg.space`.

## Local preview

From this folder:

```bash
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765`.

## Deploy on GitHub Pages

1. Create an empty GitHub repository.
2. Add it as the `origin` remote.
3. Push the `main` branch.
4. In GitHub, enable Pages from the root of `main`.

This repository includes:

- `CNAME` for `yoffeg.space`
- `.nojekyll` for plain static hosting
