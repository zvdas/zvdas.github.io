## 10 Nov 2026: Portfolio site aligned with the resume, and moved off Firebase (KAN-31)

**Site and resume told different stories.** The portfolio listed figures I couldn't verify (40% faster onboarding, 99.5% uptime, 50,000 events a day) and an old "Intern" page.
Fix: rewrote the work history from the resume only, deleted the old page and generated resumes, and made the site's positioning match LinkedIn (senior full stack / SDE-2).

**First CI/CD run failed at `npm ci`.** A dependency (ngx-socket-io) wanted Angular 16; the app is on Angular 13.
Fix: `npm ci --legacy-peer-deps` in the workflow.

**"Deployed" but the live site didn't change.** zvdas.com was actually pointing at Firebase Hosting, while I was deploying to GitHub Pages. Two hosts, one domain.
Fix: picked one host. Moved zvdas.com to GitHub Pages (four A records + a www CNAME at Namecheap), removed Firebase from the project.

**Browsers kept showing an old version after deploys.** They had cached index.html.
Fix: on Firebase, a no-cache header on index.html. On GitHub Pages, its built-in 10-minute cache makes this a non-issue.

**Merged PRs didn't deploy.** The runs showed as cancelled: PR checks and main deploys shared one concurrency group with cancel-in-progress, so they cancelled each other.
Fix: separate groups per branch, and only PR runs can be cancelled. Also let manual "Run workflow" deploy.

**"Site Not Found" right after switching DNS.** My Mac still remembered zvdas.com's old (Firebase) address.
Fix: flushed the DNS cache. The new address had already spread; only my machine was behind.

Lesson: "the pipeline is green" doesn't mean "the change is live". Check the live site, and know which server your domain actually points to.