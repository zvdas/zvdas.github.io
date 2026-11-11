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

## 11 Nov 2026: What a recruiter sees when they Google me (KAN-36)

**Search results told an old story.** Google showed my site as "Portfolio" with stale text ("currently a Tech Lead"), and "zvdas" mostly returned the film Devdas.
Fix: gave the page a real title, meta description, canonical URL and schema.org Person data linking zvdas.com, GitHub and LinkedIn as one person. Verified zvdas.com in Google Search Console and requested re-indexing.

**Third-party sites had outdated or private details.** AeroLeads (a data broker) listed my email and phone; Giglancer had an old "Technical Lead" profile with no delete option.
Fix: AeroLeads removal form (gone within 7 days); GDPR deletion request emailed to Bizoforce, found via their privacy policy.

**Search Console verification failed the first time.** Google found only the email SPF record, not my new TXT record.
Fix: nothing. DNS changes take a few minutes to spread. Checked with dns.google, then verified again and it passed.

**Profiles disagreed with each other.** GitHub README said Angular + Firebase; site and LinkedIn said senior full stack.
Fix: rewrote the GitHub README from the resume, so every profile tells the same story.

**Found a real gap:** the site uses hash routing (#/home), so Google treats every project page as one URL, and content is built in the browser.
Next: proper routes and pre-rendering after the Angular upgrade (KAN-26).

Lesson: my online presence is a system, not a page. Search engines need clear signals (title, description, structured data), and every profile has to agree with the resume.
