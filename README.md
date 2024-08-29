# XTERRA Application Task

### The project

This repository contains a skeleton demo project that you will use as the staring point of the task. The site fetches a set of triathlon race results, and displays them in a table on the page. Your task is to improve and build upon this, as instructed below.

### Setup

Clone this repository to your computer. You will work locally, and should not ever push any commits back to this repository. You may set up your own remote if you wish.

Once you have the repository cloned onto your computer, run `npm install` and `npm run dev` to get started. The site should be available at localhost:5173.

### The task

Once setup, if you view the page you should see a set of results displayed. If you look at the `main.js` file, you will see that the results are fetched from the endpoint, and then looped over and each result is inserted into a table on the page.

Step one is to improve the fetching of the data. The endpoint is setup to fail occasionally, and this needs to be handled properly. If the request fails, the user should recieve some kind of message or alert, and not see the default error page.

Step two is to order the results. The results from the server are not ordered, and they have no position field. They need to be ordered based on total time, with the fastest time being first. Results that do not have a realistic total time can be considered incorrect, and should be removed.

Step three is to indicate on the page in some way which athlete had the fastest swim time, fastest bike time and fastest run time. Each result will have the split times included, but if the time is not realistic (i.e. "00:00:00" or "23:59:59"), it should not be considered valid.

The rest of the task is open ended, you are free to expand or improve on the site in any way you please. You should not spend too much time, and applicants will not be rewarded for spending an excessive amount of time.

### The structure of results

The data returned by the endpoint will be valid json, and is an array of result objects. Each result has the following structure:

```
{
    first_name: "athlete's first name",
    last_name: "athlete's last name",
    gender: "either M or F",
    nationality: "two letter country code, e.g. US",
    division: "athlete division, e.g. M25-29",
    total_time: "HH:MM:SS",
    splits: [
        {name: "name of split", time: "HH:MM:SS"}, ...
    ]
}
```

For this result set, you may assume all results will include the same set of splits, which are swim_time, bike_time, run_time, t1_time and t2_time. It is up to you whether you want to display the splits with the results or not.

### Additional Notes

**Styling:** The project has been setup to make Tailwind css is available from the start, but you do not have to use it. You may use whatever aproach to CSS works best for you. While some simple styling would be appreciated, please do not spend too much time on this.

**Javascript/Typescript:** Thye project has been setup with just plain Javascript, but you are welcome to add Typescript if you wish.

**React, Vue an other Frameworks:** You are welcome to introduce a library such as React, Vue or Svelte if you wish, and you may restructure the project accordingly. However, please do not use frameworks such as Next.js, Nuxt or SvelteKit.

**Time spent:** You are not required to spend an excessive amount of time on this task, and will not be rewarded for doing so. If you have ideas of how you would like to improve or implement something, but feel it would take too much of your time, please feel free to just leave notes of what you'd like to do.

### Submitting your work

Of course you cannot push or submit your work as a pull-request on this repository, as it is open to all applicants.

The suggested method is to push your work to your own repository, which is either public, or where you can provide access. If you are not comfortable doing this you are also welcome to email me your submission.

### Used stack

- React v.18.3.1
- TailwindCSS v.^3.4.10
- React FontAwesome v^0.2.2

### About the structure of the project

I tried to keep the structure simple.

As there was only one page and not too much assets, I put all the images in assets and I didn't create folders for the components. As I am using TailwindCSS, I didn't have to create a CSS file for each component.

I created a folder "utils" where I put an "utils" file where there are function I used in the App.jsx. Also, I used Factory patterns, there two other folders: "factories" and "models". I used Factory patterns, so that if there is any change in the API, we don't have to change all the code but just adapt the model. Also, I wanted to harmonize the code using camelCase.

Also, there is another folder for hooks (which might be super overkilled), where there is a useFetch.jsx. It was mainly to put the logic outside of the App.jsx file to improve readibility.

### About UI/UX

For the UX and to tackle the error 500 problem, I created an error message as requested. I also added a loader to give feedback to the user that something is happening.

Regarding the fastest athlete, I created 3 cards one for each category. Each card shows the category, the name of the athlete and the time.

I added a "go to the top" button, so that the user doesn't to scroll back up if he/she wants to go back to the top of the page.

### Regarding the design

I tried to use similar colours as the websites, I used the tailwindCSS presetted colours. I couldn't find the same fonts as the official website in google font so I used 'Barlow Condensed'.

### Things I could improve

- Responsiveness: I tried to fit for mobile phone so that there isn't Y axes scroll possible, but maybe we could improve the design of the table for bigger screen.
- Probably some refactoring might be possible. I created allUsers, so that I could use the FactoryPattern which inclunded the unrealistic total_time. It depends if for the best athletes, we take into account the athlete with unrealistic total_time or not.
