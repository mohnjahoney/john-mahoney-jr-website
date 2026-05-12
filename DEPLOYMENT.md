# Deployment

This site is intentionally static: `index.html`, `styles.css`, `script.js`, and files under `assets/`.

The current repository remote is:

```txt
git@github.com:mohnjahoney/john-mahoney-jr-website.git
```

## Publish With GitHub Pages

1. Commit the latest site files.

   ```sh
   git status
   git add index.html styles.css script.js assets .nojekyll DEPLOYMENT.md
   git commit -m "Prepare static site for GitHub Pages"
   git push origin main
   ```

2. In GitHub, open the repository:

   ```txt
   mohnjahoney/john-mahoney-jr-website
   ```

3. Go to `Settings` -> `Pages`.

4. Under `Build and deployment`, use:

   ```txt
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   ```

5. Save the Pages settings.

6. Wait for GitHub Pages to publish the site. The temporary GitHub Pages URL will be:

   ```txt
   https://mohnjahoney.github.io/john-mahoney-jr-website/
   ```

The `.nojekyll` file in this repository tells GitHub Pages to publish the static files directly.

## Later: Connect A GoDaddy Domain

Do not do this until you are ready to move the public domain over to GitHub Pages.
For now, leave the site on its GitHub Pages URL and do not add a `CNAME` file.

Replace `example.com` below with the final domain.

GitHub recommends configuring both the apex domain and the `www` subdomain for HTTPS-friendly custom domains.

### GitHub Repository Settings

1. In GitHub, open `Settings` -> `Pages`.
2. Under `Custom domain`, enter the preferred domain.

   Recommended:

   ```txt
   www.example.com
   ```

3. Save the custom domain.
4. After DNS is configured and GitHub finishes certificate provisioning, enable `Enforce HTTPS`.

If GitHub creates or updates a `CNAME` file after saving the custom domain, pull that change locally before making future edits.

## GoDaddy DNS Records

In GoDaddy, open the domain's DNS management screen. If the domain uses GoDaddy nameservers, add or update these records.

### Apex Domain

For `example.com`, create four `A` records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional IPv6 records:

| Type | Name | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

### www Subdomain

For `www.example.com`, create one `CNAME` record:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `mohnjahoney.github.io` |

Do not point the `www` CNAME to the apex domain, and do not include the repository name in the CNAME value.

## Verify DNS

DNS can take up to 24 hours to propagate.

After adding records, verify them from a terminal:

```sh
dig example.com +noall +answer -t A
dig www.example.com +noall +answer -t CNAME
```

Expected apex `A` records:

```txt
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Expected `www` target:

```txt
mohnjahoney.github.io
```

## Future Update Workflow

1. Edit the static files locally.
2. Open `index.html` directly in a browser for a quick visual check.
3. Run:

   ```sh
   node --check script.js
   git status
   ```

4. Commit and push:

   ```sh
   git add index.html styles.css script.js assets DEPLOYMENT.md
   git commit -m "Update site content"
   git push origin main
   ```

GitHub Pages will republish automatically after the push.

## References

- [GitHub Docs: Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Docs: Securing GitHub Pages with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [GoDaddy Help: Manage DNS records](https://www.godaddy.com/help/manage-dns-records-680)
