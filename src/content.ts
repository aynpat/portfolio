type ContentType = {
   contentId : number;
   image: string,
   title: string,
   websiteLink: string,
   githubLink : string,
   technology:string,
   info: string,
}
const contents:ContentType[] = [

    {
        contentId:  1,
        image: 'project-image.jpeg', 
        title: 'TinDog',
        websiteLink :'https://aynpat.github.io/TinDog-Website/',
        githubLink :'https://github.com/aynpat/TinDog-Website.git',
        technology:'HTML , CSS , BOOTSTRAP',
        info: 'Tindog is a fun and innovative platform that takes the popular concept of dating apps and adds a delightful twist. Instead of helping people find their soulmates,Tindog brings dog lovers and their furry companions together.'
    },
    {
        contentId:  2,
        image: 'project-image2.jpeg',
        title: 'Still in the working state',
        websiteLink :'https://aynpat.github.io/TinDog-Website/',
        githubLink :'https://github.com/aynpat/TinDog-Website.git',
        technology:'MONGODB - REACTJS - EXPRESS - TYPESCRIPT - NODEJS - REDUX TOOLKIT',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  sed do eiusmod tempor incididunt consectetur adipiscing elit  .'
    },
    {
        contentId:  3,
        image: 'example-project.jpg',
        title: 'Still in the working state',
        websiteLink :'https://aynpat.github.io/TinDog-Website/',
        githubLink :'https://github.com/aynpat/TinDog-Website.git',
        technology:'C++ - MYSQL - REACTJS',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
    ,
    {
        contentId:  4,
        image: 'example-project.jpg',
        title: 'Still in the working state',
        websiteLink :'https://aynpat.github.io/TinDog-Website/',
        githubLink :'https://github.com/aynpat/TinDog-Website.git',
        technology:'REST-API - EXPRESS - REACTJS -MONGODB',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
]

export default contents