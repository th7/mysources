# mysources
Automatically select your sources in DnD Beyond searches.

## Usage
Add your sources into the text field. If it matches, those sources will be added to searches automatically...sort of.

For now, this is quirky. Matching sources will be selected _invisibly_ when the page loads. After searching, they will appear as usual. If they are explicitly deleted, they will not be used in the next search, but will be invisibly re-added for follow up searches.

This add-on will likely break without notice when DnD Beyond changes. It should be fairly quick and easy to fix again, but there will be delay.

## Security
Add-ons can see your page data, and this should probably scare you. This add-on is written to be very simple and easy to review so that it is easy to trust. I recommend reviewing all script files in any add-on you use unless that add-on has other robust review. Below are a couple reasons you should trust this add-on:

`manifext.json` shows it only runs on `dndbeyond.com`.
`content_script.js` and `options/script.js` are the only code, and if you have basic familiarity with javascript it's easy to see they are not doing anything suspicious.

## Contributing
PRs are welcome, but considering this is a niche add-on, I will ruthlessly maintain that all code in the repository must be reviewable in under 1 minute.

This means no 3rd party code copied into the repository. Only the most widely used libraries will be considered, and they must be added via https URL from a very well trusted domain.

## Roadmap / Desired Contributions

### Enable/Disable
This is probably pretty straightforward.

### CSS
Yes please.

### Show Automatically Selected Sources Immediately
As noted above in the Usage section, automatically selected sources are initially invisible and this is awkward/confusing. I'm not sure if this is feasible, but someone with more javascript/UI experience might know if/how it can be done.

### Easier Select Sources
Selecting sources from a list would be nicer. Free-form text as fallback might be good, too, because the add-on will likely lag behind new sources.
