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
        title: 'Project Two',
        technology:'MONGODB - REACTJS - EXPRESS - TYPESCRIPT - NODEJS',
        info: 'The online marketplace that matches dog owners in need of pet-care services with qualified pet caregivers, Tindog offers a great way to socialize a dog while connecting people .'
    },
    {
        contentId:  3,
        image: 'project-image.jpeg',
        title: 'Project three',
        technology:'C++ - MYSQL - REACTJS',
        info: 'Think three Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.'
    }
    ,
    {
        contentId:  4,
        image: 'project-image2.jpeg',
        title: 'Project four',
        technology:'REST API - EXPRESS - REACTJS -MONGODB',
        info: 'Think four Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.'
    }
]

export default contents