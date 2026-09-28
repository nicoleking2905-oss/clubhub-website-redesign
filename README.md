# ClubHub marketing site (Clubhouse design)

Static HTML, CSS and a little JavaScript. No build step: upload the folder as it is.

Live site: https://nicoleking2905-oss.github.io/clubhub-website-redesign/

| Page | File |
| --- | --- |
| Homepage | `index.html` |
| Sign in | `sign-in.html` |
| Create your club | `create-your-club.html` |
| Privacy policy | `privacy.html` |

The pages were built from the "ClubHub homepage redesign" project in Claude Design (the Clubhouse direction).

- `css/styles.css`: all styles. Colours and fonts are variables at the top.
- `js/home.js`: hero phone, price sticker and scroll-in animations.
- `js/sign-in.js`: switching between sign in, reset, "check your email" and profile.
- `js/create-your-club.js`: form checks and the stadium photo movement.

Every animation is skipped when the visitor's device is set to reduce motion. All content still shows if JavaScript is off.

The app screens on the homepage are drawn in HTML, not images. Badges and shirts are SVG symbols at the top of `index.html`, reused with `<use>`.

## Making changes

Every push to `main` republishes the live site through GitHub Pages within a minute or two.

- **Small wording fixes** (a typo, a price, an email address): open the file on GitHub, click the pencil icon, edit the text and commit.
- **Design changes** (new sections, layout, new app screens): make them in Claude Design, hand them off to Claude Code, and ask it to apply them to `nicoleking2905-oss/clubhub-website-redesign` and push to `main`. The site here is a separate build of the design, so changes in Claude Design don't reach it on their own.

## Before going live

- **Sign in** (`js/sign-in.js`): any email and password "signs in" to the Morgan Demo profile, and the reset form sends nothing. Connect both to the real sign-in, or point the Sign in links back at `https://clubhubspace.com/submit-forms/sign-in.php`.
- **Create your club** (`js/create-your-club.js`): the form only checks that both fields are filled in. Connect it to the real sign-up, or point Get started back at `https://clubhubspace.com/create-your-club`. The Activity list only has Football.
- **Stadium photo**: loaded from `https://clubhubspace.com/images/football-stadium.png`.
- **Made-up data**: every club, player, score and figure in the app screens is invented.
- **Brand spelling**: always "ClubHub". Lowercase only in web and email addresses.
