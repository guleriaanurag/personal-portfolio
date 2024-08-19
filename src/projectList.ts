export interface project{
    imageSrc: string,
    title: string,
    description: string
}

import webScribblesImage from './assets/webScribbles.png';

export const projectList: project[] = [
    {
        imageSrc: webScribblesImage,
        title: 'Web Scribble',
        description: 'Web Scribbles is a dynamic blog application designed to provide users with an intuitive platform for sharing their thoughts and stories. It allows users to create, read, update, and delete blog posts effortlessly. With user authentication, individuals can securely sign up and log in to manage their content. Each blog post can feature rich text and image uploads, enhancing the visual appeal and engagement. The application boasts a sleek and modern interface, styled with Tailwind CSS, ensuring a responsive experience across all devices. Leveraging React Router for smooth client-side navigation and MongoDB Atlas for robust cloud storage, Web Scribbles delivers a seamless and efficient user experience. The backend, powered by Express and Node.js, ensures reliable data handling, while Multer facilitates swift image uploads.'
    }
]