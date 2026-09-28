# ClubHub marketing site (Clubhouse design)

Static HTML, CSS and a little JavaScript. No build step: upload the folder as it is.

| Page | File | Built from |
| --- | --- | --- |
| Homepage | `index.html` | `project/Homepage A - Clubhouse.dc.html` |
| Sign in | `sign-in.html` | `project/Sign In.dc.html` |
| Create your club | `create-your-club.html` | `project/Create Your Club.dc.html` |
| Privacy policy | `privacy.html` | `project/Privacy.dc.html` |

- `css/styles.css`: all styles. Colours and fonts are variables at the top.
- `js/home.js`: hero phone, price sticker and scroll-in animations.
- `js/sign-in.js`: switching between sign in, reset, "check your email" and profile.
- `js/create-your-club.js`: form checks and the stadium photo movement.

Every animation is skipped when the visitor's device is set to reduce motion. All content still shows if JavaScript is off.

The app screens on the homepage are drawn in HTML, not images. Badges and shirts are SVG symbols at the top of `index.html`, reused with `<use>`.

## Before going live

- **Sign in** (`js/sign-in.js`): any email and password "signs in" to the Morgan Demo profile, and the reset form sends nothing. Connect both to the real sign-in, or point the Sign in links back at `https://clubhubspace.com/submit-forms/sign-in.php`.
- **Create your club** (`js/create-your-club.js`): the form only checks that both fields are filled in. Connect it to the real sign-up, or point Get started back at `https://clubhubspace.com/create-your-club`. The Activity list only has Football.
- **Stadium photo**: loaded from `https://clubhubspace.com/images/football-stadium.png`.
- **Made-up data**: every club, player, score and figure in the app screens is invented.
- **Brand spelling**: always "ClubHub". Lowercase only in web and email addresses.
