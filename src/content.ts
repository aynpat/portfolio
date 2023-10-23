type ContentType = {
   contentId : number;
   image: string,
   title: string,
   technology:string,
   info: string,
}
const contents:ContentType[] = [

    {
        contentId:  1,
        image: 'project-image.jpeg',
        title: 'TinDog',
        technology:'HTML , CSS , BOOTSTRAP',
        info: 'The online marketplace that matches dog owners in need of pet-care services with qualified pet caregivers, Tindog offers a great way to socialize a dog while connecting people that share a similar interest.'
    },
    {
        contentId:  2,
        image: 'project-image2.jpeg',
        title: 'Still in the working state',
        technology:'MONGODB - REACTJS - EXPRESS - TYPESCRIPT - NODEJS - REDUX TOOLKIT',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  sed do eiusmod tempor incididunt consectetur adipiscing elit  .'
    },
    {
        contentId:  3,
        image: 'example-project.jpg',
        title: 'Still in the working state',
        technology:'C++ - MYSQL - REACTJS',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
    ,
    {
        contentId:  4,
        image: 'example-project.jpg',
        title: 'Still in the working state',
        technology:'REST-API - EXPRESS - REACTJS -MONGODB',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
]

export default contents