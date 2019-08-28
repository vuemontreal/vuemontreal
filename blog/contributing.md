# Contributing

Thank's for considering about helping us !

What can you win to help us ? You will figure in our contributors part in the README. You will have a lot of contacts and a lot of funs !

Any help is appreciate. contact-us :

- [Tommy Lebel](https://www.linkedin.com/in/tommylebel/)
- [Giraud Florent](https://www.linkedin.com/in/fgiraud42/)

## What we need ?

Feel free to have a look on our [REPO](https://github.com/vuemontreal/vuemontreal/). Check the issues and pr.

If you want to participate to organize events / workshop etc just send us an email.

## Add a meetup ?

If you want to add a meetup you just have to create a json file in archives folder.

your json name should respect yyyy-m(m)-dd.json. Why (m) if you have 08 just put 8 and not 08. It will help us to well filters date.

you should fill this object

```json
{
  "location": "Code & Cafe 4304 Rue Saint-Denis · Montreal, qc",
  "gmapIframe": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3883541630685!2d-73.57987!3d45.522389999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzIwLjYiTiA3M8KwMzQnNDcuNSJX!5e0!3m2!1sfr!2sca!4v1566585784205!5m2!1sfr!2sca",
  "backgroundImg": "/vue-logo-website-big-city.png", // it could be and https (extern url)
  "hour": "18h30 - 21h", // just a string but pref respect this format
  "date": "October 25th 2018", // give us an enlgish format
  "title": "VueJS Introduction",
  "eventLink": "https://www.meetup.com/fr-FR/Vue-js-Montreal/events/255101915/",
  "datas": [
    // an array of person / presentation
    {
      "title": "VueJS Introduction",
      "author": "f3ltron",
      "tags": ["vue", "javascript", "beginner"], // necessary to use relevant tags because we will have a search with tags later if it's not already here
      "description": "The purpose of this first evening is to discover the advantages of Vue.js. Whether to create an entire application, or to gradually integrate it into an existing application, we will see how Vue.js is a flexible, practical and easy-to-use framework.",
      "slide": null, // it could be null or external link
      "video": null, // it could be null or external link
      "img": "https://avatars3.githubusercontent.com/u/1448836?s=460&v=4", // imgs will have 100 X 100 format
      "profile": "https://www.linkedin.com/in/tommylebel/"
    }
  ]
}
```

Make a PR and we will validate it ! :+1:

## Development

The development is pretty easy.

Fork the project or `git clone https://github.com/vuemontreal/vuemontreal.git`

```

npm install

npm run dev

# or

npm run build
```

And that's it !

## Architecture

We are using [Vuepress](https://v1.vuepress.vuejs.org/) behind the scene and plugins.

The start is on [config.js](https://github.com/vuemontreal/vuemontreal/tree/master/blog/.vuepress/config.js). What you should know here is the
`require('./plugin')`.

The principal logic of the "blog is here".

I will just explain the steps and will let you test the code:

- `find` the files and return them in an array in files
- `filesExtractedDatas` will read data from archives and return them with different path to build the additionalPages for Vuepress and the archives sidebar
- `pages` we will build additionnals pages invoke ui components. (See after for the ui aspect)
- and finally we create a sidebar and link those files to it with `createdSidebar`

## Ui aspects

Actually in the [Components](https://github.com/vuemontreal/vuemontreal/tree/master/blog/.vuepress/components/) folder. You will have the parent layout [meetup.vue](https://github.com/vuemontreal/vuemontreal/tree/master/blog/.vuepress/components/meetup.vue) and a children [person.vue](https://github.com/vuemontreal/vuemontreal/tree/master/blog/.vuepress/components/person.vue).

Actually we are using index.styl to override style. But it should be update to let component be responsible of their style.
