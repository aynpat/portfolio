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
        title: 'title two',
        technology:'react js two ',
        info: 'E-Commerce website built with Tailwind and React JS. Provides a user interface with an interactive and functionality display.'
    },
    {
        contentId:  3,
        image: 'project-image.jpeg',
        title: 'title three',
        technology:'react js three ',
        info: 'Think three Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.'
    }
    ,
    {
        contentId:  4,
        image: 'project-image2.jpeg',
        title: 'title four',
        technology:'react js four ',
        info: 'Think four Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.'
    }
]

export default contents